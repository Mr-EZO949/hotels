'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Header({
  navLinks,
  searchTerm,
  onSearchChange,
  onSearchSubmit,
  copy,
  onToggleLanguage,
}) {
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated';
  const [mobileOpen, setMobileOpen] = useState(false);
  const searchEnabled = typeof onSearchChange === 'function' && typeof onSearchSubmit === 'function';

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="container-page flex flex-col gap-6 py-6">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/" className="shrink-0" onClick={closeMobile}>
            <img src="/assets/img/Logo.png" alt="Lagoona Hotels" className="h-12 w-auto" />
          </Link>
          <a href="tel:+74953225448" className="text-lg font-semibold text-charcoal hover:text-brand-500">
            +7 495 322-54-48
          </a>
          <div className="ms-auto flex items-center gap-2">
            <button
              type="button"
              onClick={toggleMobile}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-brand-600 transition hover:border-brand-500 hover:text-brand-700 md:hidden"
              aria-label={mobileOpen ? copy.menuCloseAria : copy.menuOpenAria}
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform ${
                    mobileOpen ? 'translate-y-2 rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition-opacity ${
                    mobileOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-full bg-current transition-transform ${
                    mobileOpen ? '-translate-y-2 -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                onToggleLanguage();
                closeMobile();
              }}
              className="inline-flex items-center gap-1 rounded-full border border-brand-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 transition hover:border-brand-500 hover:text-brand-700"
              aria-label={copy.languageToggleAria}
            >
              {copy.languageToggleLabel}
            </button>
            {isAuthenticated ? (
              <>
                <Link
                  href="/profile"
                  onClick={closeMobile}
                  className="hidden rounded-full border border-brand-200 px-4 py-2 text-sm font-medium text-brand-600 transition hover:border-brand-500 hover:text-brand-700 md:block"
                >
                  {copy.profileLabel}
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    closeMobile();
                    signOut({ callbackUrl: '/' });
                  }}
                  className="hidden rounded-full border border-brand-200 px-4 py-2 text-sm font-medium text-brand-500 transition hover:border-brand-500 hover:text-brand-700 md:block"
                >
                  {copy.logoutLabel}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={closeMobile}
                  className="hidden rounded-full border border-brand-200 px-4 py-2 text-sm font-medium text-brand-600 transition hover:border-brand-500 hover:text-brand-700 md:block"
                >
                  {copy.loginLabel}
                </Link>
                <Link
                  href="/signup"
                  onClick={closeMobile}
                  className="hidden rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-600 md:block"
                >
                  {copy.signupLabel}
                </Link>
              </>
            )}
            <a
              href="#booking"
              onClick={closeMobile}
              className="hidden items-center gap-2 rounded-full border border-brand-200 px-4 py-2 text-sm font-medium text-brand-600 transition hover:border-brand-500 hover:text-brand-700 md:flex"
              aria-label={copy.cabinetAria}
            >
              <span aria-hidden></span>
              {copy.cabinetLabel}
            </a>
          </div>
        </div>
        <nav
          className={`flex w-full flex-col gap-4 rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition md:flex md:flex-row md:items-center md:justify-between ${
            mobileOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className="flex flex-col gap-4 text-sm font-medium text-neutral-600 md:flex-row md:gap-6">
            {isAuthenticated && (
              <li className="md:hidden">
                <Link
                  href="/profile"
                  onClick={closeMobile}
                  className="rounded-full px-4 py-2 transition hover:bg-brand-50 hover:text-brand-600"
                >
                  {copy.profileLabel}
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="md:hidden">
                <button
                  type="button"
                  onClick={() => {
                    closeMobile();
                    signOut({ callbackUrl: '/' });
                  }}
                  className="w-full rounded-full px-4 py-2 text-left transition hover:bg-brand-50 hover:text-brand-600"
                >
                  {copy.logoutLabel}
                </button>
              </li>
            )}
            {!isAuthenticated && (
              <li className="md:hidden">
                <Link
                  href="/login"
                  onClick={closeMobile}
                  className="rounded-full px-4 py-2 transition hover:bg-brand-50 hover:text-brand-600"
                >
                  {copy.loginLabel}
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li className="md:hidden">
                <Link
                  href="/signup"
                  onClick={closeMobile}
                  className="rounded-full px-4 py-2 transition hover:bg-brand-50 hover:text-brand-600"
                >
                  {copy.signupLabel}
                </Link>
              </li>
            )}
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 transition hover:bg-brand-50 hover:text-brand-600"
                  onClick={closeMobile}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <form
            className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:items-center"
            onSubmit={(event) => {
              event.preventDefault();
              if (searchEnabled) {
                onSearchSubmit();
              }
              closeMobile();
            }}
          >
            <div className="relative flex-1">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => {
                  if (searchEnabled) {
                    onSearchChange(event.target.value);
                  }
                }}
                placeholder={copy.searchPlaceholder}
                aria-label={copy.searchAria}
                className="input-field pe-12"
                disabled={!searchEnabled}
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center justify-center px-4 text-brand-500 transition hover:text-brand-600"
                aria-label={copy.searchButtonLabel}
                disabled={!searchEnabled}
              >
                <img src="/assets/img/search.png" alt="" className="h-4 w-4" />
                <span className="sr-only">{copy.searchButtonLabel}</span>
              </button>
            </div>
          </form>
          <a
            href="#booking"
            onClick={closeMobile}
            className="md:hidden"
            aria-label={copy.cabinetAria}
          >
            <span className="primary-btn inline-flex w-full items-center justify-center px-4 py-3 text-sm">
              {copy.cabinetLabel}
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
