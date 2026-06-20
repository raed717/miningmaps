"use client";

import Link from "next/link";
import { CinematicHero } from "@/components/home/cinematic-hero";
import { FieldReportsSection } from "@/components/home/field-reports-section";
import { GlobalTelemetrySection } from "@/components/home/global-telemetry-section";
import { ProjectPreviewCarouselSection } from "@/components/home/project-preview-carousel-section";
import { ServiceRegistrySection } from "@/components/home/service-registry-section";
import { AccomplishmentsSection } from "@/components/home/accomplishments-section";
import { CertificationsSection } from "@/components/home/certifications-section";
import Footer from "@/components/footer";
import { inter } from "@/lib/fonts";

export default function HomePage() {
  return (
    <div
      data-home-scroll
      className={`relative w-full bg-background text-foreground selection:bg-primary selection:text-white ${inter.className}`}
    >
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10">
        <CinematicHero />
      </div>
      <ProjectPreviewCarouselSection />
      <div id="services-section">
        <ServiceRegistrySection />
      </div> <AccomplishmentsSection />
      <GlobalTelemetrySection />
      <CertificationsSection />
     
      <FieldReportsSection />
      <div className="relative z-10 border-t border-border">
        <Footer />
      </div>
    </div>
  );
}
