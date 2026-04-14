import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Satellite } from "lucide-react";
import { mono } from "@/lib/fonts";

const telemetryNodes = [
  { top: "30%", left: "40%", color: "var(--color-secondary)", label: "NWT_LITHIUM" },
  { top: "65%", left: "70%", color: "#FFB000", label: "AUS_GOLD" },
  { top: "45%", left: "20%", color: "#00E5FF", label: "NEV_COPPER" },
];

export function GlobalTelemetrySection() {
  return (
    <section className="relative z-10 overflow-hidden border-y border-border bg-black py-32">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity grayscale contrast-150"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-tighter md:text-6xl">
            Global Telemetry
          </h2>
          <div className={`flex items-center gap-4 border border-border bg-muted px-6 py-3 text-xs tracking-widest ${mono.className}`}>
            <Satellite className="h-4 w-4 animate-pulse text-secondary" />
            <span>SATELLITE_LINK_ACTIVE</span>
          </div>
        </div>

        <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden border border-border bg-[#000000]/10 backdrop-blur-md md:aspect-21/9">
          <div className="absolute inset-0 h-full w-full">
            <div className="absolute top-1/2 left-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border opacity-20" />
            <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-border opacity-20" />
            <div className="absolute top-1/2 left-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border opacity-20" />
            <div className="absolute top-0 left-1/2 h-full w-px bg-[#333] opacity-20" />
            <div className="absolute top-1/2 left-0 h-px w-full bg-[#333] opacity-20" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 z-20 h-0.5 w-[50%] origin-left bg-linear-to-r from-secondary to-transparent"
              style={{ filter: "drop-shadow(0 0 8px #00FF41)" }}
            />
          </div>

          {telemetryNodes.map((node) => (
            <div key={node.label} className="absolute flex flex-col items-center" style={{ top: node.top, left: node.left }}>
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full opacity-50" style={{ backgroundColor: node.color }} />
                <div className="relative z-10 h-3 w-3 rounded-full" style={{ backgroundColor: node.color, boxShadow: `0 0 10px ${node.color}` }} />
              </div>
              <div className={`mt-2 border border-border bg-black px-2 py-1 text-[9px] tracking-widest uppercase ${mono.className}`} style={{ color: node.color }}>
                {node.label}
              </div>
            </div>
          ))}

          <Link
            href="/map"
            className="group absolute right-8 bottom-8 z-30 flex items-center gap-3 bg-white px-6 py-3 text-black transition-colors hover:bg-primary hover:text-white"
          >
            <span className="text-xs font-bold uppercase tracking-widest">View Full Map</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
