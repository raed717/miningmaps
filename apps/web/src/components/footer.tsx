import Link from "next/link";
import { mono } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer className={`border-t border-border py-16 bg-background ${mono.className}`}>
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-12 text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:items-start">
        
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-12 w-12 flex items-center justify-center">
              <img 
                src="/images/general/logo.png" 
                alt="Adamson Geomatics Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-sm tracking-tight leading-none">
                Adamson Geomatics
              </span>
              <span className="text-primary text-[10px] mt-1">
                Data Extraction Matrix
              </span>
            </div>
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 font-bold">
          <Link
            href="/projects"
            className="hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/map"
            className="hover:text-primary transition-colors"
          >
            Map View
          </Link>
          <Link
            href="/properties"
            className="hover:text-primary transition-colors"
          >
            Properties
          </Link>
          <a
            href="mailto:chris@miningpropertymaps.com"
            className="text-primary hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/chris-adamson-r-84649b4b"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary border border-border px-3 py-1 hover:border-primary transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61561908187975"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary border border-border px-3 py-1 hover:border-primary transition-all"
          >
            Facebook
          </a>
        </div>

      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground/60">
        <p>SYSTEM_STATUS: ONLINE</p>
        <p>© 2026 ADAMSON_GEOMATICS. ALL_RIGHTS_RESERVED.</p>
      </div>
    </footer>
  );
}
