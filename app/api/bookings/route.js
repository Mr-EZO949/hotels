import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authConfig } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

const REQUIRED_FIELDS = {
  booking: ['hotelId', 'city', 'roomType', 'checkIn', 'nights', 'guests', 'customerName', 'customerPhone'],
  contact: ['username', 'phone', 'text'],
};

const REFERENCE_PREFIX = {
  booking: 'BKG',
  contact: 'MSG',
};

const sanitize = (value) => (typeof value === 'string' ? value.trim() : value);

const generateReference = (prefix) => {
  const timeFragment = Date.now().toString(36).toUpperCase();
  const randomFragment = Math.floor(Math.random() * 8999 + 1000);
  return `${prefix}-${timeFragment.slice(-5)}${randomFragment}`;
};

export async function POST(request) {
  const session = await getServerSession(authConfig);
  const payload = await request.json();
  const requestType = payload.requestType === 'contact' ? 'contact' : 'booking';
  const normalizedPayload = Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, sanitize(value)]),
  );

  const missingFields = REQUIRED_FIELDS[requestType].filter((field) => {
    const value = normalizedPayload[field];
    return value === undefined || value === null || value === '';
  });

  if (missingFields.length) {
    return NextResponse.json(
      {
        error: 'Отсутствуют обязательные поля',
        details: missingFields,
      },
      { status: 400 },
    );
  }

  const reference = generateReference(REFERENCE_PREFIX[requestType]);

  const responseBody = {
    status: 'ok',
    reference,
    requestType,
    timestamp: new Date().toISOString(),
    received: REQUIRED_FIELDS[requestType].reduce(
      (acc, field) => {
        acc[field] = normalizedPayload[field];
        return acc;
      },
      {},
    ),
  };

  if (requestType === 'booking' && normalizedPayload.hotelName) {
    responseBody.received.hotelName = normalizedPayload.hotelName;
  }

  if (requestType === 'booking' && session?.user?.email) {
    try {
      await prisma.booking.create({
        data: {
          user: { connect: { email: session.user.email } },
          hotelId: normalizedPayload.hotelId ?? '',
          hotelName: normalizedPayload.hotelName ?? '',
          city: normalizedPayload.city,
          roomType: normalizedPayload.roomType,
          checkIn: normalizedPayload.checkIn,
          nights: Number.parseInt(normalizedPayload.nights, 10) || 1,
          guests: Number.parseInt(normalizedPayload.guests, 10) || 1,
          customerName: normalizedPayload.customerName,
          customerPhone: normalizedPayload.customerPhone,
        },
      });
    } catch (error) {
      console.error('Failed to create booking', error);
    }
  }

  return NextResponse.json(responseBody, { status: 201 });
}

export async function GET() {
  const session = await getServerSession(authConfig);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const bookings = await prisma.booking.findMany({
    where: { user: { email: session.user.email } },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(
    {
      bookings,
      meta: {
        total: bookings.length,
      },
    },
    { status: 200 },
  );
}
