"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Crosshair, ShieldAlert } from "lucide-react";
import { Fira_Code, Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });
const fira = Fira_Code({ subsets: ["latin"], weight: ["400", "500", "700"] });

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
    <header className={`sticky top-0 z-50 w-full border-b border-[#333] bg-[#060608]/95 backdrop-blur-md supports-backdrop-filter:bg-[#060608]/60 ${fira.className}`}>
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8 justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative flex items-center justify-center h-8 w-8 bg-[#FF3300] text-black">
            <Crosshair className="h-5 w-5 group-hover:animate-spin-slow" />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold tracking-tighter text-white uppercase text-lg leading-none ${syne.className}`}>
              Adamson
            </span>
            <span className="text-[#FF3300] text-[9px] tracking-widest font-bold">
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
                    ? "text-[#FF3300] bg-[#FF3300]/10" 
                    : "text-[#888] hover:text-white hover:bg-[#111]"
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 w-full h-[1px] bg-[#FF3300]" />
                )}
                {label}
              </Link>
            );
          })}
        </nav>

        {/* STATUS INDICATOR (Replaces generic Mode Toggle) */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center gap-2 border border-[#333] bg-[#0A0A0E] px-3 py-1.5">
            <ShieldAlert className="h-3 w-3 text-[#00FF41] animate-pulse" />
            <span className="text-[9px] text-[#00FF41] tracking-widest uppercase">Uplink_Secure</span>
          </div>
          
          {/* MOBILE MENU TOGGLE (Placeholder icon) */}
          <button className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-4 h-0.5 bg-[#FF3300]" />
          </button>
        </div>

      </div>
    </header>
  );
}
