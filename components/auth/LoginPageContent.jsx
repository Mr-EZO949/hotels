'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useLanguageContent from '../../lib/useLanguageContent';

function LoginPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/profile';
  const { data: session, status } = useSession();
  const { language, setLanguage, navLinks, copy } = useLanguageContent(session?.user?.locale ?? 'ru');
  const authCopy = copy.auth.login;
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/profile');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user?.locale) {
      setLanguage(session.user.locale);
    }
  }, [session?.user?.locale, setLanguage]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    const result = await signIn('credentials', {
      ...form,
      redirect: false,
      callbackUrl,
    });
    setLoading(false);
    if (result?.error) {
      setError(authCopy.error);
      return;
    }
    router.push(callbackUrl);
  };

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
      <main className="container-page grid gap-10 pb-16 pt-10 lg:grid-cols-[1.1fr_1fr]">
        <section className="card-surface relative overflow-hidden rounded-3xl border border-brand-100/50 bg-white/90 p-10 shadow-[0_40px_80px_-40px_rgba(204,153,51,0.4)]">
          <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-10 h-56 w-56 rounded-full bg-brand-400/30 blur-3xl" />
          <div className="relative space-y-6 text-neutral-600">
            <p className="section-subtitle">Lagoona Identity</p>
            <h1 className="text-3xl font-semibold text-charcoal">{authCopy.title}</h1>
            <p>{authCopy.description}</p>
          </div>
        </section>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 rounded-3xl border border-brand-100/60 bg-white/95 p-10 shadow-card"
        >
          <div className="space-y-3 text-center">
            <p className="section-subtitle">{authCopy.subtitle}</p>
            <h2 className="text-2xl font-semibold text-charcoal">{authCopy.title}</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-600" htmlFor="email">
                {authCopy.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-600" htmlFor="password">
                {authCopy.passwordLabel}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
          </div>
          {error && <p className="rounded-2xl bg-rose-50 p-4 text-sm text-rose-700">{error}</p>}
          <button type="submit" className="primary-btn w-full" disabled={loading || status === 'loading'}>
            {loading ? authCopy.loading : authCopy.button}
          </button>
          <p className="text-center text-sm text-neutral-500">
            <Link href="/signup" className="text-brand-600 hover:text-brand-700">
              {authCopy.cta}
            </Link>
          </p>
        </form>
      </main>
      <Footer copy={copy.footer} />
    </div>
  );
}

export default function LoginPageContent() {
  return (
    <Suspense fallback={null}>
      <LoginPageInner />
    </Suspense>
  );
}
