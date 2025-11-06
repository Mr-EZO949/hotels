'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { DEFAULT_LANGUAGE, getAdvantages, getHotels, getNavLinks, getServices, getUi } from '../data/content';

const STORAGE_KEY = 'lagoona-language';

export default function useLanguageContent(initialLanguage = DEFAULT_LANGUAGE) {
  const [language, setLanguageState] = useState(initialLanguage);
  const hasHydratedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setLanguageState((prev) => (prev === stored ? prev : stored));
      return;
    }
    if (initialLanguage && initialLanguage !== DEFAULT_LANGUAGE) {
      setLanguageState((prev) => (prev === initialLanguage ? prev : initialLanguage));
    }
  }, [initialLanguage]);

  useEffect(() => {
    if (!hasHydratedRef.current) {
      hasHydratedRef.current = true;
      return;
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'ru' ? 'ru' : 'en';
      document.documentElement.setAttribute('data-language', language);
    }
  }, [language]);

  const setLanguage = (value) => {
    setLanguageState((prev) => {
      const next = typeof value === 'function' ? value(prev) : value;
      return next;
    });
  };

  const navLinks = useMemo(() => getNavLinks(language), [language]);
  const services = useMemo(() => getServices(language), [language]);
  const advantages = useMemo(() => getAdvantages(language), [language]);
  const hotels = useMemo(() => getHotels(language), [language]);
  const copy = useMemo(() => getUi(language), [language]);

  return {
    language,
    setLanguage,
    navLinks,
    services,
    advantages,
    hotels,
    copy,
  };
}
