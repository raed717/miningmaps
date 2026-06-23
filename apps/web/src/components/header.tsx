"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Linkedin } from "lucide-react";
import { inter, mono } from "@/lib/fonts";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/map", label: "Map View" },
    // { to: "/dashboard", label: "Insights" },
    { to: "/contact", label: "Contact" },
  ] as const;

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/60 ${mono.className}`}
    >
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8 justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative flex items-center justify-center h-12 w-12">
            <img
              src="/images/general/minLogo.png"
              alt="Adamson Geomatics Logo"
              className="h-full w-full object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-bold tracking-tighter text-white uppercase text-lg leading-none ${inter.className}`}
            >
              Adamson
            </span>
            <span className="text-primary text-[9px] tracking-widest font-bold">
              GEOMATICS_SYS
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-1">
          {links.map(({ to, label }) => {
            const isActive =
              to === "/" ? pathname === "/" : pathname.startsWith(to);
            return (
              <Link
                key={to}
                href={to}
                className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-white hover:bg-muted"
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 w-full h-px bg-primary" />
                )}
                {label}
              </Link>
            );
          })}
        </nav>

        {/* SOCIAL LINKS */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center gap-1">
            <a
              href="https://www.linkedin.com/company/adamson-geomatics/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561908187975"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/Christalball93"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="X / Twitter"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
          </div>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="md:hidden flex flex-col gap-1.5 rounded-sm border border-border bg-card/80 p-2 transition-colors hover:bg-muted"
          >
            <span
              className={`h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"}`}
            />
            <span
              className={`h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "w-6"}`}
            />
            <span
              className={`h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? "w-6 -translate-y-2 -rotate-45 bg-white" : "w-4"}`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden border-t border-border bg-background/98 transition-[max-height,opacity] duration-300 ${mobileMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="container mx-auto flex flex-col px-4 py-4">
          {links.map(({ to, label }) => {
            const isActive =
              to === "/" ? pathname === "/" : pathname.startsWith(to);

            return (
              <Link
                key={to}
                href={to}
                className={`border-b border-border/70 px-1 py-3 text-xs font-bold uppercase tracking-[0.28em] transition-colors last:border-b-0 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <div className="mt-4 flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/adamson-geomatics/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-border bg-card p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561908187975"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-border bg-card p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/Christalball93"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-border bg-card p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="X / Twitter"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
