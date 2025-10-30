'use client';

import { useEffect, useMemo, useState } from 'react';
import { DEFAULT_LANGUAGE, getAdvantages, getHotels, getNavLinks, getServices, getUi } from '../data/content';

const STORAGE_KEY = 'lagoona-language';

const resolveInitialLanguage = (initialLanguage) => {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return stored;
    }
  }
  return initialLanguage;
};

export default function useLanguageContent(initialLanguage = DEFAULT_LANGUAGE) {
  const [language, setLanguageState] = useState(() => resolveInitialLanguage(initialLanguage));

  useEffect(() => {
    // If the initial language changes (for example, due to session locale), sync once when no preference stored.
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored && initialLanguage && initialLanguage !== language) {
        setLanguageState(initialLanguage);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLanguage]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language);
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
