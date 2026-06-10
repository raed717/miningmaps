"use client"

import { useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { AnimatePresence, motion } from "motion/react"
import { Award, X } from "lucide-react"

import { mono } from "@/lib/fonts"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const certifications = [
  {
    src: "/images/general/certifications/jd uc25 plenary submission certificates 74_page-0001.jpg",
    alt: "Esri Certification",
  },
  {
    src: "/images/general/certifications/esriVideoScreenshot.png",
    alt: "Esri video screenshot showing Jack Dangermond's Plenary Presentation at the 2025 Esri User Conference, featuring Chris's image submission",
  },
  {
    src: "/images/general/certifications/jd uc25 plenary submission certificates 73_page-0001.jpg",
    alt: "Esri Certification",
  },
];

export function CertificationsSection() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="relative overflow-hidden border-y border-border bg-card px-4 py-24">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col items-center text-center">
          <span
            className={`mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary ${mono.className}`}
          >
            <Award className="h-4 w-4" />
            credentials
          </span>
          <h2 className="text-3xl font-black uppercase tracking-tighter">
            Certifications
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Industry-recognized qualifications in geospatial analysis and mining
            technology.
          </p>
        </div>

        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {certifications.map((cert, i) => (
              <CarouselItem
                key={i}
                className="flex justify-center md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-sm border border-border/50 bg-black/40"
                >
                  <button
                    type="button"
                    onClick={() => setSelected(cert.src)}
                    className="w-full"
                  >
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      className="h-64 w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
                  <p
                    className={`absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-white/80 ${mono.className}`}
                  >
                    {cert.alt}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 rounded-sm border border-border/50 bg-black/60 p-2 text-white/80 transition-colors hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={selected}
              src={selected}
              alt=""
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-h-[90vh] max-w-[90vw] rounded-sm object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}