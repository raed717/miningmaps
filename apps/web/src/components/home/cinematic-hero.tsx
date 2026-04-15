"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const noiseTexture =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")";

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001,
  });

  // Phase 1: Geological Time (Ancient Terrain)
  const p1Opacity = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const p1Scale = useTransform(smoothProgress, [0, 0.25], [1, 1.4]);
  const p1TextY = useTransform(smoothProgress, [0, 0.2], [0, -100]);

  // Phase 2: Formations (Grid & Data Structure)
  const p2Opacity = useTransform(
    smoothProgress,
    [0.15, 0.3, 0.5, 0.65],
    [0, 1, 1, 0],
  );
  const p2Scale = useTransform(smoothProgress, [0.15, 0.65], [0.8, 1.08]);
  const p2TextY = useTransform(smoothProgress, [0.15, 0.5], [100, -50]);

  // Phase 3: Future / Sustainable
  const p4Opacity = useTransform(smoothProgress, [0.55, 0.75, 1], [0, 1, 1]);
  const p4Scale = useTransform(smoothProgress, [0.55, 1], [0.92, 1]);
  const p4TextY = useTransform(smoothProgress, [0.55, 1], [100, 0]);

  // Global CTA visibility
  const ctaOpacity = useTransform(smoothProgress, [0.72, 0.9], [0, 1]);

  return (
    <div
      ref={containerRef}
      data-cinematic-hero
      className="relative h-[300vh] w-full shrink-0 bg-black text-white"
    >
      <div className="sticky top-16 h-[calc(100svh-4rem)] w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Abstract Progress Indicator */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 hidden md:flex">
          <motion.div className="w-[2px] h-32 bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary"
              style={{
                height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
              }}
            />
          </motion.div>
          <span
            className="text-xs tracking-widest text-white/40 rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            EVOLUTION
          </span>
        </div>

        {/* --- PHASE 1: Logo Highlight --- */}
        <motion.div
          style={{ opacity: p1Opacity, scale: p1Scale }}
          className="absolute inset-0 flex items-center justify-center bg-background"
        >
          {/* Gritty Texture */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{ backgroundImage: noiseTexture }}
          />

          {/* Wireframe Grid Layer */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          <motion.div
            style={{ y: p1TextY }}
            className="z-10 flex flex-col items-center justify-center w-full max-w-5xl px-4"
          >
            {/* The Full Logo - Increased Size */}
            <div className="relative w-64 md:w-120 aspect-square drop-shadow-[0_0_30px_rgba(255,176,0,0.3)]">
              <img
                src="/images/general/full-logo.png"
                alt="Adamson Geomatics Full Logo"
                className="w-full h-full object-contain"
              />

              {/* Scanning laser over logo */}
              <div className="absolute inset-0 overflow-hidden mix-blend-overlay pointer-events-none rounded-full">
                <motion.div
                  animate={{ top: ["-20%", "120%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-1 bg-white shadow-[0_0_20px_#fff]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- PHASE 2: Ancient Terrain --- */}
        <motion.div
          style={{ opacity: p2Opacity, scale: p2Scale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1686968719625-3faf853a543e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
          {/* Gritty Texture */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{ backgroundImage: noiseTexture }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black" />
          <div className="absolute w-[60vw] h-[60vw] rounded-full bg-amber-900/30 blur-[100px]" />
          <motion.div
            style={{ y: p2TextY }}
            className="z-10 w-full max-w-6xl px-4"
          >
            <div className="border border-stone-700/60 bg-black/45 p-6 md:p-10 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.45)]">
              <div className="text-center">
                <div className="text-[10px] md:text-xs font-mono tracking-[0.35em] text-stone-400 uppercase">
                  Adamson Geomatics Service Registry
                </div>
                <h2 className="mt-4 text-4xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-stone-200 to-stone-600 drop-shadow-2xl">
                  Geomatics / GIS
                </h2>
              </div>

              <div className="mt-8 grid gap-px border border-stone-700/50 bg-stone-700/50 md:grid-cols-2 xl:grid-cols-3">
                {[
                  "Property Brokerage",
                  "Geological Mapping",
                  "Lidar / DEM",
                  "Prospecting",
                  "Permitting",
                ].map((item) => (
                  <div key={item} className="bg-black/70 px-4 py-5 text-center">
                    <div className="text-sm md:text-base font-mono uppercase tracking-[0.2em] text-stone-300">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- PHASE 3: Future / Sustainable UI --- */}
        <motion.div
          style={{ opacity: p4Opacity, scale: p4Scale }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-background text-foreground overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop')",
            }}
          />
          {/* Fade to page background color so it blends into the rest of the site */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />

          {/* Clean Light Flare */}
          <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent" />

          <motion.div
            style={{ y: p4TextY }}
            className="z-10 text-center px-4 max-w-4xl"
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              Adamson Geomatics
            </div>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
              Precision GIS & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-chart-2">
                Land Management.
              </span>
            </h1>
            <p className="mx-auto mb-10 text-xl text-muted-foreground max-w-2xl">
              Expert geospatial consulting for mineral exploration, land
              management, and real estate services across Canada, the USA, and
              internationally.
            </p>

            <motion.div
              style={{ opacity: ctaOpacity }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/map"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-[0_0_30px_rgba(0,194,255,0.4)] transition-all hover:bg-primary/90 hover:scale-105"
              >
                View Map Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/properties"
                className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-md px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Properties for Sale
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
