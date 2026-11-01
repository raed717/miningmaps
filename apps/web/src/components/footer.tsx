"use client";

import Link from "next/link";
import { mono } from "@/lib/fonts";
import NewsletterForm from "@/components/NewsletterForm";
import { useI18n } from "@/lib/i18n/context";
import { homeTranslations } from "@/lib/i18n/translations/home";
import { getLocalizedPath } from "@/lib/i18n/navigation";

export default function Footer() {
  const { locale } = useI18n();
  const t = (homeTranslations[locale] || homeTranslations.en).footer;

  return (
    <footer
      className={`border-t border-border py-16 bg-background ${mono.className}`}
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-12 text-xs uppercase tracking-widest text-muted-foreground xl:flex-row xl:items-start">
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href={getLocalizedPath("/", locale)} className="flex items-center gap-3">
            <div className="h-12 w-12 flex items-center justify-center">
              <img
                src="/images/general/minLogo.png"
                alt="Adamson Geomatics Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-sm tracking-tight leading-none">
                Adamson Geomatics
              </span>
              <span className="text-primary text-[10px] mt-1">
                {t.tagline}
              </span>
            </div>
          </Link>
        </div>

        {/* Center Links */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-6 font-bold">
            <Link
              href={getLocalizedPath("/about", locale)}
              className="hover:text-primary transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href={getLocalizedPath("/services", locale)}
              className="hover:text-primary transition-colors"
            >
              {t.nav.services}
            </Link>
            <Link
              href={getLocalizedPath("/projects", locale)}
              className="hover:text-primary transition-colors"
            >
              {t.nav.portfolio}
            </Link>
            <Link
              href={getLocalizedPath("/map", locale)}
              className="hover:text-primary transition-colors"
            >
              {t.nav.mapView}
            </Link>
            <Link
              href={getLocalizedPath("/properties", locale)}
              className="hover:text-primary transition-colors"
            >
              {t.nav.properties}
            </Link>
            <Link
              href={getLocalizedPath("/partners", locale)}
              className="hover:text-primary transition-colors"
            >
              {t.nav.partners}
            </Link>
            <Link
              href={getLocalizedPath("/posts", locale)}
              className="hover:text-primary transition-colors"
            >
              {t.nav.fieldReports}
            </Link>
            <Link
              href={getLocalizedPath("/contact", locale)}
              className="text-primary hover:text-white transition-colors"
            >
              {t.nav.contact}
            </Link>
            {/* /account redirects signed-out visitors to /sign-in */}
            <Link
              href={getLocalizedPath("/account", locale)}
              className="hover:text-primary transition-colors"
            >
              {t.nav.clientPortal}
            </Link>
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/company/adamson-geomatics/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Adamson Geomatics on LinkedIn"
            className="hover:text-primary border border-border px-3 py-1 hover:border-primary transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61561908187975"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Adamson Geomatics on Facebook"
            className="hover:text-primary border border-border px-3 py-1 hover:border-primary transition-all"
          >
            Facebook
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-border flex justify-center xl:justify-start text-xs uppercase tracking-widest text-muted-foreground">
        <NewsletterForm />
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-border flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-[10px] uppercase tracking-widest text-muted-foreground/60">
        <p>{t.systemStatus}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {[
            {
              src: "/images/general/bannerlogo.png",
              alt: "Adamson Geomatics Banner",
              className: "h-16 w-auto max-w-[10rem] object-contain",
            },

            {
              src: "/images/general/oldLogo.png",
              alt: "Adamson Geomatics Legacy Logo",
              className: "h-16 w-auto max-w-[9rem] object-contain",
            },
          ].map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center border border-border bg-card/50 px-2 py-1"
            >
              <img src={logo.src} alt={logo.alt} className={logo.className} />
            </div>
          ))}
        </div>
        <p>{t.rightsReserved}</p>
      </div>

      <div className="container mx-auto px-4 mt-6 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-muted-foreground/80">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
          <span>{t.architectLabel}</span>
          <a
            href="https://raed.guembri.tn/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-primary/50"
          >
            RAED GUEMBRI
          </a>
          <span className="text-muted-foreground/40">//</span>
          <span className="text-primary font-semibold">{t.softwareEngineerRole}</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://raed.guembri.tn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            {t.portfolioLink}
          </a>
          <span className="text-muted-foreground/30">•</span>
          <a
            href="https://github.com/raed717"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GITHUB
          </a>
          <span className="text-muted-foreground/30">•</span>
          <a
            href="https://www.linkedin.com/in/raed-guembri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
}
