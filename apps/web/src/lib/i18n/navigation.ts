import { DEFAULT_LOCALE, isSupportedLocale } from "./config";
import type { Locale } from "./types";

export function parseLocaleFromPath(pathname: string): {
  locale: Locale;
  cleanPath: string;
} {
  if (!pathname || pathname === "/") {
    return { locale: DEFAULT_LOCALE, cleanPath: "/" };
  }

  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = normalized.split("/").filter(Boolean);

  if (segments.length > 0 && isSupportedLocale(segments[0])) {
    const locale = segments[0] as Locale;
    const remaining = segments.slice(1);
    const cleanPath = remaining.length === 0 ? "/" : `/${remaining.join("/")}`;
    return { locale, cleanPath };
  }

  return { locale: DEFAULT_LOCALE, cleanPath: normalized };
}

export function getLocalizedPath(cleanPath: string, targetLocale: Locale): string {
  const normalized = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
  const pathWithoutTrailing = normalized === "/" ? "/" : normalized.replace(/\/+$/, "");

  if (targetLocale === DEFAULT_LOCALE) {
    return pathWithoutTrailing;
  }

  if (pathWithoutTrailing === "/") {
    return `/${targetLocale}`;
  }

  return `/${targetLocale}${pathWithoutTrailing}`;
}
