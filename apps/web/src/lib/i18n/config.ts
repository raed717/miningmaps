import type { Locale, LocaleConfig } from "./types";

export const LOCALES: readonly Locale[] = ["en", "es", "fr"] as const;
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_CONFIGS: Record<Locale, LocaleConfig> = {
  en: {
    code: "en",
    label: "EN",
    name: "English",
    flag: "🇺🇸",
  },
  es: {
    code: "es",
    label: "ES",
    name: "Español",
    flag: "🇪🇸",
  },
  fr: {
    code: "fr",
    label: "FR",
    name: "Français",
    flag: "🇫🇷",
  },
};

export function isSupportedLocale(lang: string): lang is Locale {
  return LOCALES.includes(lang as Locale);
}
