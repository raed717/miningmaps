import { useRef } from "react";
import { Link } from "react-router";
import { Map } from "lucide-react";

import { CinematicHero } from "@/components/home/cinematic-hero";
import { DemoPreviewSection } from "@/components/home/demo-preview-section";
import { FeaturesSection } from "@/components/home/features-section";
import { PropertiesSection } from "@/components/home/properties-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={scrollRef} className="h-full w-full overflow-y-auto relative">
      {/* Hero Section */}
      <CinematicHero scrollContainerRef={scrollRef} />

      {/* Services Section */}
      <FeaturesSection />

      {/* Map Portfolio Highlight */}
      <DemoPreviewSection />

      {/* Properties For Sale */}
      <PropertiesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-background">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2 font-bold text-foreground tracking-tight">
            <Map className="h-5 w-5 text-primary" />
            Adamson Geomatics
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/properties" className="hover:text-primary transition-colors">Properties</Link>
            <a href="mailto:chris@adamsonlandservices.com" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/chris-adamson-r-84649b4b" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
            <a href="https://www.facebook.com/profile.php?id=61561908187975" target="_blank" rel="noreferrer" className="hover:text-primary">Facebook</a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 text-center text-xs text-muted-foreground/60">
          <p>© 2026 Adamson Geomatics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
