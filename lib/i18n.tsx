"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Locale, Translations } from "@/types/i18n";
import en from "@/data/translations/en";
import ko from "@/data/translations/ko";

const translations: Record<Locale, Translations> = { en, ko };

interface I18nContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = "portfolio-locale";
const DEFAULT_LOCALE: Locale = "en";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load saved locale from localStorage
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && (saved === "en" || saved === "ko")) {
      setLocaleState(saved);
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("ko")) {
        setLocaleState("ko");
      }
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    const newLocale = locale === "en" ? "ko" : "en";
    setLocale(newLocale);
  }, [locale, setLocale]);

  const value: I18nContextType = {
    locale,
    t: translations[locale],
    setLocale,
    toggleLocale,
  };

  // Prevent hydration mismatch by showing default locale until mounted
  if (!mounted) {
    return (
      <I18nContext.Provider value={{ ...value, locale: DEFAULT_LOCALE, t: translations[DEFAULT_LOCALE] }}>
        {children}
      </I18nContext.Provider>
    );
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

// Helper for bilingual text
export function useBilingualText() {
  const { locale } = useI18n();
  return useCallback(
    (text: { en: string; ko: string }) => text[locale],
    [locale]
  );
}
