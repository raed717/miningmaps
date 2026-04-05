"use client";

import { useRef } from "react";
import Link from "next/link";

import { Map } from "lucide-react";

import { CinematicHero } from "@/components/home/cinematic-hero";
import { DemoPreviewSection } from "@/components/home/demo-preview-section";
import { FeaturesSection } from "@/components/home/features-section";
import { PropertiesSection } from "@/components/home/properties-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import Footer from "@/components/footer";

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
      <Footer />

    </div>
  );
}
