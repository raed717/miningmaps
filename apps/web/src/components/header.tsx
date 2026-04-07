"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Crosshair, ShieldAlert } from "lucide-react";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Header() {
  const pathname = usePathname();
  const links = [
    { to: "/", label: "Platform" },
    { to: "/map", label: "Map View" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
    { to: "/posts", label: "Posts" },
  ] as const;

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/60 ${mono.className}`}>
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8 justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative flex items-center justify-center h-12 w-12">
            <img 
              src="/images/general/logo.png" 
              alt="Adamson Geomatics Logo" 
              className="h-full w-full object-contain group-hover:scale-105 transition-transform" 
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold tracking-tighter text-white uppercase text-lg leading-none ${inter.className}`}>
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
            const isActive = to === "/" ? pathname === "/" : pathname.startsWith(to);
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

        {/* STATUS INDICATOR (Replaces generic Mode Toggle) */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center gap-2 border border-border bg-card px-3 py-1.5">
            <ShieldAlert className="h-3 w-3 text-secondary animate-pulse" />
            <span className="text-[9px] text-secondary tracking-widest uppercase">Uplink_Secure</span>
          </div>
          
          {/* MOBILE MENU TOGGLE (Placeholder icon) */}
          <button className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-4 h-0.5 bg-primary" />
          </button>
        </div>

      </div>
    </header>
  );
}
