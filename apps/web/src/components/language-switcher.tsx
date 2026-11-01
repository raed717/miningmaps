"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { mono } from "@/lib/fonts";
import { LOCALES, LOCALE_CONFIGS } from "@/lib/i18n/config";
import { getLocalizedPath, parseLocaleFromPath } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/types";

export function LanguageSwitcher({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname() ?? "/";
  const { locale: currentLocale, cleanPath } = parseLocaleFromPath(pathname);

  // If we're on mobile drawer, render a horizontal button row
  if (isMobile) {
    return (
      <div className={`flex items-center gap-1.5 border border-border/80 bg-card/60 p-1.5 ${mono.className}`}>
        <div className="flex items-center gap-1 px-2 text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
          <Globe className="h-3 w-3 text-primary" />
          <span>LANG:</span>
        </div>
        <div className="flex items-center gap-1">
          {LOCALES.map((code) => {
            const config = LOCALE_CONFIGS[code];
            const isActive = currentLocale === code;
            const targetUrl = getLocalizedPath(cleanPath, code);

            return (
              <Link
                key={code}
                href={targetUrl}
                className={`px-2 py-1 text-xs font-bold uppercase tracking-wider transition-colors rounded-sm ${
                  isActive
                    ? "bg-primary text-black"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                aria-label={`Switch to ${config.name}`}
              >
                {config.label}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Header Switcher
  return (
    <div
      className={`inline-flex items-center rounded-sm border border-border bg-card/80 p-0.5 text-xs ${mono.className}`}
      role="group"
      aria-label="Language selector"
    >
      <div className="flex items-center pl-2 pr-1 text-muted-foreground" title="Select language">
        <Globe className="h-3.5 w-3.5 text-primary" />
      </div>
      {LOCALES.map((code) => {
        const config = LOCALE_CONFIGS[code];
        const isActive = currentLocale === code;
        const targetUrl = getLocalizedPath(cleanPath, code);

        return (
          <Link
            key={code}
            href={targetUrl}
            className={`px-2 py-1 text-[11px] font-bold uppercase tracking-wider transition-all rounded-xs ${
              isActive
                ? "bg-primary text-black shadow-xs font-extrabold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
            }`}
            aria-label={`Switch to ${config.name}`}
            aria-current={isActive ? "page" : undefined}
          >
            {config.label}
          </Link>
        );
      })}
    </div>
  );
}
