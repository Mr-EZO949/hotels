'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useLanguageContent from '../../lib/useLanguageContent';

export default function ProfilePageContent() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { language, setLanguage, navLinks, copy } = useLanguageContent(session?.user?.locale ?? 'ru');
  const profileCopy = copy.profile;
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace(profileCopy.noSessionRedirect);
    }
  }, [status, router, profileCopy.noSessionRedirect]);

  useEffect(() => {
    if (status !== 'authenticated') {
      return;
    }
    const loadBookings = async () => {
      try {
        const response = await fetch('/api/bookings', {
          credentials: 'include',
        });
        if (response.status === 401) {
          router.replace(profileCopy.noSessionRedirect);
          return;
        }
        const data = await response.json();
        setBookings(data.bookings ?? []);
      } catch (error) {
        setBookings([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadBookings();
  }, [status, router, profileCopy.noSessionRedirect]);

  useEffect(() => {
    if (session?.user?.locale) {
      setLanguage(session.user.locale);
    }
  }, [session?.user?.locale, setLanguage]);

  if (status === 'loading') {
    return null;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand via-white to-white text-charcoal">
      <Header
        navLinks={navLinks}
        searchTerm=""
        onSearchChange={null}
        onSearchSubmit={null}
        copy={copy.header}
        onToggleLanguage={() => setLanguage((prev) => (prev === 'ru' ? 'en' : 'ru'))}
      />
      <main className="container-page space-y-12 pb-16 pt-12">
        <header className="space-y-2">
          <p className="section-subtitle">{profileCopy.subtitle}</p>
          <h1 className="text-3xl font-semibold text-charcoal">{session.user.name}</h1>
          <p className="text-sm text-neutral-500">{session.user.email}</p>
        </header>

        <section className="space-y-6">
          <h2 className="section-title">{profileCopy.bookingsTitle}</h2>
          {isLoading ? (
            <div className="rounded-3xl border border-dashed border-brand-200 bg-white p-8 text-sm text-neutral-500">
              {profileCopy.labels.loading}
            </div>
          ) : bookings.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-brand-200 bg-white p-8 text-sm text-neutral-500">
              {profileCopy.emptyState}
            </div>
          ) : (
            <ul className="space-y-4">
              {bookings.map((booking) => (
                <li
                  key={booking.id}
                  className="card-surface grid gap-4 rounded-3xl border border-brand-100 bg-white p-6 md:grid-cols-3"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">{profileCopy.labels.id}</p>
                    <p className="text-lg font-semibold text-charcoal">{booking.id}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">{profileCopy.labels.hotel}</p>
                    <p className="font-medium text-brand-600">{booking.hotelName}</p>
                    <p className="text-sm text-neutral-500">{booking.city}</p>
                  </div>
                  <div className="space-y-1 text-sm text-neutral-600">
                    <p>
                      <span className="font-medium text-charcoal">{profileCopy.labels.checkIn}:</span> {booking.checkIn}
                    </p>
                    <p>
                      <span className="font-medium text-charcoal">{profileCopy.labels.nights}:</span> {booking.nights}
                    </p>
                    <p>
                      <span className="font-medium text-charcoal">{profileCopy.labels.guests}:</span> {booking.guests}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {profileCopy.labels.created}:{' '}
                      {new Date(booking.createdAt).toLocaleString(
                        session.user.locale === 'en' ? 'en-US' : 'ru-RU',
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer copy={copy.footer} />
    </div>
  );
}
