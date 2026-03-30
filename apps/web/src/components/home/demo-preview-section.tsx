import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, MapPin } from "lucide-react";

export function DemoPreviewSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Global Map Portfolio</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Visualizing profound geological data across Canada, the USA, Australia, Europe, and South America.
          </p>
        </div>
        <Link
          to="/portfolio"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View Full Portfolio <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl rounded-xl border border-border/50 bg-card p-2 shadow-2xl shadow-primary/10"
      >
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <div className="h-3 w-3 rounded-full bg-destructive/80" />
          <div className="h-3 w-3 rounded-full bg-chart-5/80" />
          <div className="h-3 w-3 rounded-full bg-chart-3/80" />
        </div>
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-lg bg-background">
          {/* Stunning Topographic Map Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          
          {/* Fake Map Interface Overlay */}
          <div className="absolute inset-y-0 left-0 z-10 w-64 border-r border-border/30 bg-card/60 p-6 backdrop-blur-md">
            <div className="mb-6 text-sm font-semibold tracking-wider text-foreground uppercase">Active Layers</div>
            <div className="space-y-4">
              {[
                { name: "Geologic Claims", color: "bg-primary" },
                { name: "Mineral Tenure", color: "bg-chart-2" },
                { name: "Private Land", color: "bg-chart-3" },
                { name: "BLM Land", color: "bg-chart-4" },
                { name: "Bedrock Geology", color: "bg-chart-5" },
              ].map((layer, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-4 w-4 items-center justify-center rounded border border-muted-foreground/30 bg-background/50">
                    <div className={`h-2 w-2 rounded-sm ${layer.color}`} />
                  </div>
                  <div className="text-xs text-muted-foreground">{layer.name}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Fake Map Grid & Overlays */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:48px_48px]"></div>
          
          {/* Target Identification Markers */}
          <div className="absolute top-[30%] left-[40%] flex flex-col items-center animate-pulse">
            <MapPin className="h-6 w-6 text-primary drop-shadow-[0_0_10px_rgba(0,194,255,1)]" />
            <span className="mt-1 rounded bg-background/80 px-2 py-0.5 text-[10px] font-bold text-primary backdrop-blur-sm">LITHIUM TARGET</span>
          </div>
          
          <div className="absolute bottom-[40%] right-[30%] flex flex-col items-center animate-pulse delay-300">
            <MapPin className="h-6 w-6 text-chart-2 drop-shadow-[0_0_10px_rgba(249,115,22,1)]" />
            <span className="mt-1 rounded bg-background/80 px-2 py-0.5 text-[10px] font-bold text-chart-2 backdrop-blur-sm">GOLD CLAIM (ACTIVE)</span>
          </div>

          <div className="absolute top-[60%] right-[15%] flex flex-col items-center animate-pulse delay-700">
            <MapPin className="h-6 w-6 text-chart-4 drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
            <span className="mt-1 rounded bg-background/80 px-2 py-0.5 text-[10px] font-bold text-chart-4 backdrop-blur-sm">URANIUM</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
