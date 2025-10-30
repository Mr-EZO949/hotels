import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import prisma from '../../../../lib/prisma';

export async function POST(request) {
  const body = await request.json();
  const { name, email, password, company, locale = 'ru' } = body;

  if (!email || !password || !name) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 });
  }

  const hashedPassword = await hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      locale,
    },
  });

  return NextResponse.json({ status: 'ok' }, { status: 201 });
}
