"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE } from "./config";
import { getLocalizedPath, parseLocaleFromPath } from "./navigation";
import type { Locale } from "./types";

interface I18nContextValue {
  locale: Locale;
  cleanPath: string;
  getLocalizedPath: (targetLocale: Locale) => string;
}

const I18nContext = createContext<I18nContextValue>({
  locale: DEFAULT_LOCALE,
  cleanPath: "/",
  getLocalizedPath: (targetLocale) => getLocalizedPath("/", targetLocale),
});

export function I18nProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const pathname = usePathname() ?? "/";

  const value = useMemo(() => {
    const parsed = parseLocaleFromPath(pathname);
    const locale = initialLocale || parsed.locale;
    return {
      locale,
      cleanPath: parsed.cleanPath,
      getLocalizedPath: (targetLocale: Locale) =>
        getLocalizedPath(parsed.cleanPath, targetLocale),
    };
  }, [pathname, initialLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
