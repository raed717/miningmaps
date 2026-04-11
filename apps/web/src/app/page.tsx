"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CinematicHero } from "@/components/home/cinematic-hero";
import Footer from "@/components/footer";
import { serviceMetrics, serviceModules } from "@/lib/servicesData";

import { Inter, JetBrains_Mono } from "next/font/google";
import { Map, Zap, Layers, Target, ShieldAlert, ArrowUpRight, Satellite, ShieldCheck, BriefcaseBusiness, Crosshair, FileText, Mountain } from "lucide-react";

// Extremely bold font pairing
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });
const serviceIcons = [ShieldCheck, BriefcaseBusiness, Crosshair, FileText, Mountain];
const serviceAccentColors = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
];
const serviceFeed = serviceModules.flatMap((module, moduleIndex) =>
  module.services.map((service, serviceIndex) => ({
    moduleId: module.id,
    moduleCode: module.code,
    moduleTitle: module.title,
    service,
    accentColor:
      serviceAccentColors[moduleIndex % serviceAccentColors.length],
    rowId: `${module.id}-${serviceIndex}`,
  })),
);
const outputFeed = Array.from(
  new Set(serviceModules.flatMap((module) => module.deliverables)),
);

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className={`h-full w-full overflow-y-auto relative bg-background text-foreground selection:bg-primary selection:text-white ${inter.className}`}
    >
      {/* GLOBAL NOISE TEXTURE */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid Lines (Fixed) */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Cinematic Hero (Unchanged) */}
      <div className="relative z-10">
        <CinematicHero scrollContainerRef={scrollRef} />
      </div>

      {/* SECTION 1: OPERATIONAL CAPABILITIES */}
      {/* <section className="relative z-10 border-t border-border bg-background overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 border-b lg:border-b-0 lg:border-r border-border p-8 lg:p-10 flex flex-col justify-between relative z-20 bg-background">
            <h2 className={`text-5xl lg:text-10xl xl:text-15xl font-extrabold leading-[0.85] tracking-tighter uppercase ${inter.className}`}>
              Operational<br />
              <span className="text-primary">Capabilities</span>
            </h2>
            <p className={`mt-8 text-muted-foreground text-sm uppercase tracking-widest ${mono.className}`}>
              // Adamson_Geomatics<br/>
              // Geospatial_Intelligence<br/>
              // Data_Extraction_Matrix
            </p>
          </div>
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 relative z-10">
            {[
              {
                id: "01",
                title: "GIS MAPPING & LAND MANAGEMENT",
                desc: "Claim staking, renewals, prospecting, marketing maps, assessment reporting, and permitting applications.",
                icon: Layers
              },
              {
                id: "02",
                title: "TITLE SEARCHES & RESEARCH",
                desc: "Land title searches, summary of liens and encumbrances, and Crown Grant or patented land research.",
                icon: Target
              },
              {
                id: "03",
                title: "REAL ESTATE & DEVELOPMENT",
                desc: "GIS mapping for land planning, route analysis, valuations, landowner negotiations.",
                icon: Map
              },
              {
                id: "04",
                title: "MINERAL PROPERTIES",
                desc: "Early to advanced-stage mineral exploration projects available for sale, option, or joint venture.",
                icon: Zap
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative border-b border-r border-border p-8 md:p-12 hover:bg-primary hover:text-[#060608] transition-colors duration-300 flex flex-col justify-between aspect-square md:aspect-auto min-h-75"
              >
                <div className={`flex justify-between items-start text-xs font-bold tracking-widest ${mono.className}`}>
                  <span>{feature.id}</span>
                  <feature.icon className="h-6 w-6 opacity-50 group-hover:opacity-100 group-hover:animate-spin-slow" />
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-extrabold uppercase mb-4 tracking-tight leading-none">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-[#060608]/80 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SECTION 2: SERVICE REGISTRY */}
      <section className="relative z-10 py-24 md:py-40 px-4 md:px-12 lg:px-24 bg-card overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-60" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_top_right,rgba(255,51,0,0.18),transparent_55%)] opacity-60" />

        <div className="relative border border-border bg-background/70 backdrop-blur-sm">
          <div className="grid gap-px bg-border xl:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.35fr)_minmax(260px,0.75fr)]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-background p-6 md:p-8 xl:p-10"
            >
              <div className={`text-primary font-bold tracking-[0.2em] text-xs mb-4 flex items-center gap-2 ${mono.className}`}>
                <ShieldAlert className="h-4 w-4" /> SERVICE_REGISTRY
              </div>
              <h2 className="text-5xl md:text-7xl xl:text-8xl font-extrabold uppercase tracking-tighter leading-[0.85]">
                GIS Service<br />Ops Deck
              </h2>
              <p className={`mt-8 text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}>
                Dense field support for tenure, acquisition, prospecting, permitting, terrain modeling, and investor-facing mapping packages.
              </p>

              <div className="mt-10 grid gap-px border border-border bg-border">
                {serviceModules.map((module, i) => {
                  const Icon = serviceIcons[i % serviceIcons.length];
                  const accentColor = serviceAccentColors[i % serviceAccentColors.length];

                  return (
                    <Link
                      key={module.id}
                      href={`/services#${module.id}`}
                      className="group bg-card px-4 py-4 transition-colors hover:bg-background"
                    >
                      <div className={`flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.22em] ${mono.className}`}>
                        <span style={{ color: accentColor }}>{module.code}</span>
                        <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-white" />
                      </div>
                      <div className="mt-3 text-lg font-extrabold uppercase tracking-tight leading-none">
                        {module.title}
                      </div>
                      <div className={`mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}>
                        {String(module.services.length).padStart(2, "0")}_LINES / OPEN_MODULE
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/services" className="group inline-flex items-center justify-between gap-4 border border-primary bg-primary px-5 py-4 text-black transition-colors hover:bg-transparent hover:text-primary">
                  <div>
                    <div className={`text-[10px] uppercase tracking-[0.22em] ${mono.className}`}>
                      FULL_ROUTE
                    </div>
                    <div className="mt-1 text-sm font-bold uppercase tracking-wider">
                      Open Service Registry
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-between gap-4 border border-border bg-card px-5 py-4 transition-colors hover:border-primary">
                  <div>
                    <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                      DIRECT_LINK
                    </div>
                    <div className="mt-1 text-sm font-bold uppercase tracking-wider">
                      Request Scope
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-card"
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-4 md:px-8">
                <div>
                  <div className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
                    LIVE_SERVICE_FEED
                  </div>
                  <div className="mt-2 text-2xl font-extrabold uppercase tracking-tight">
                    Active Lines
                  </div>
                </div>
                <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                  {String(serviceFeed.length).padStart(2, "0")} ENTRIES
                </div>
              </div>

              <div className="grid gap-px bg-border">
                {serviceFeed.map((item, i) => (
                  <motion.div
                    key={item.rowId}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.35, delay: i * 0.02 }}
                    className="grid gap-4 bg-background px-6 py-4 md:grid-cols-[88px_minmax(140px,0.45fr)_minmax(0,1fr)] md:px-8"
                  >
                    <div className={`text-[10px] uppercase tracking-[0.22em] ${mono.className}`} style={{ color: item.accentColor }}>
                      {item.moduleCode}
                    </div>
                    <div className={`text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}>
                      {item.moduleTitle}
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0" style={{ backgroundColor: item.accentColor }} />
                      <p className="text-sm leading-relaxed text-foreground/90">{item.service}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-px bg-border"
            >
              <div className="bg-background p-6 md:p-8">
                <div className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
                  SYSTEM_TOTALS
                </div>
                <div className="mt-6 grid gap-px border border-border bg-border">
                  {[
                    { label: "Modules", value: String(serviceMetrics.moduleCount).padStart(2, "0") },
                    { label: "Service Lines", value: String(serviceMetrics.serviceLineCount).padStart(2, "0") },
                    { label: "Outputs", value: String(serviceMetrics.deliverableCount).padStart(2, "0") },
                  ].map((metric) => (
                    <div key={metric.label} className="bg-card px-4 py-4">
                      <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                        {metric.label}
                      </div>
                      <div className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-foreground">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 md:p-8">
                <div className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
                  OUTPUT_INDEX
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {outputFeed.map((output, i) => (
                    <span
                      key={`${output}-${i}`}
                      className={`border border-border px-2 py-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                    >
                      {output}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-background p-6 md:p-8">
                <div className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
                  FIELD_NOTE
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  Built for operators who need claim status, permitting support, maps, and terrain intelligence in one coordinated workflow instead of scattered vendors.
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                    NEXT_ACTION
                  </div>
                  <Link href="/services" className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:opacity-70">
                    Review Full Specification
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* SECTION 3: GLOBAL TELEMETRY (Replaces DemoPreview) */}
      <section className="relative z-10 py-32 bg-black border-t border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity grayscale contrast-150" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')" }} />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">
              Global Telemetry
            </h2>
            <div className={`flex items-center gap-4 bg-muted border border-border px-6 py-3 text-xs tracking-widest ${mono.className}`}>
              <Satellite className="h-4 w-4 text-secondary animate-pulse" />
              <span>SATELLITE_LINK_ACTIVE</span>
            </div>
          </div>

          <div className="relative aspect-video md:aspect-21/9 w-full border border-border bg-[#00000]/80 backdrop-blur-md overflow-hidden flex items-center justify-center">
            {/* Radar Sweep */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border opacity-20" />
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-border opacity-20" />
              <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border opacity-20" />
              <div className="absolute top-0 left-1/2 w-px h-full bg-[#333] opacity-20" />
              <div className="absolute top-1/2 left-0 w-full h-px bg-[#333] opacity-20" />
              
              {/* Animated scanning line */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-[50%] h-0.5 origin-left bg-linear-to-r from-secondary to-transparent z-20"
                style={{ filter: 'drop-shadow(0 0 8px #00FF41)' }}
              />
            </div>

            {/* Target Nodes */}
            {[
              { top: '30%', left: '40%', color: 'var(--color-secondary)', label: 'NWT_LITHIUM' },
              { top: '65%', left: '70%', color: '#FFB000', label: 'AUS_GOLD' },
              { top: '45%', left: '20%', color: '#00E5FF', label: 'NEV_COPPER' },
            ].map((node, i) => (
              <div key={i} className="absolute flex flex-col items-center" style={{ top: node.top, left: node.left }}>
                <div className="relative">
                  <div className="absolute inset-0 animate-ping opacity-50 rounded-full" style={{ backgroundColor: node.color }} />
                  <div className="h-3 w-3 rounded-full relative z-10" style={{ backgroundColor: node.color, boxShadow: `0 0 10px ${node.color}` }} />
                </div>
                <div className={`mt-2 px-2 py-1 bg-black border border-border text-[9px] tracking-widest uppercase ${mono.className}`} style={{ color: node.color }}>
                  {node.label}
                </div>
              </div>
            ))}

            <Link href="/map" className="absolute bottom-8 right-8 z-30 group flex items-center gap-3 bg-white text-black px-6 py-3 hover:bg-primary hover:text-white transition-colors">
              <span className="font-bold uppercase tracking-widest text-xs">View Full Map</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: FIELD REPORTS (Testimonials) */}
      <section className="relative z-10 py-32 px-4 md:px-12 lg:px-24 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-6">
              Field<br/>Reports
            </h2>
            <p className={`text-muted-foreground text-sm uppercase tracking-widest leading-relaxed ${mono.className}`}>
              Endorsements from executives, geologists, and industry leaders. Verified intelligence.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "The best lands guy in the business. Instrumental in securing 1 million ounces of gold rights.",
                author: "Chris Lodder",
                role: "President, Barkerville Gold Mines"
              },
              {
                text: "His mapping accuracy and claim staking intuition provided a massive advantage for our Northern campaigns.",
                author: "Senior Geologist",
                role: "Confidential Client, NWT"
              }
            ].map((report, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="border-l-4 border-primary pl-6 py-2"
              >
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-6">
                  "{report.text}"
                </p>
                <div className={`text-[#666] text-xs uppercase tracking-widest ${mono.className}`}>
                  <strong className="text-white block mb-1">{report.author}</strong>
                  {report.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Unchanged) */}
      <div className="relative z-10 border-t border-border">
        <Footer />
      </div>
    </div>
  );
}
