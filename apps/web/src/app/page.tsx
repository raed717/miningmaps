"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { CinematicHero } from "@/components/home/cinematic-hero";
import Footer from "@/components/footer";

import { Syne, Fira_Code } from "next/font/google";
import { Map, Zap, Layers, Target, ShieldAlert, Cpu, ArrowUpRight, Satellite } from "lucide-react";

// Extremely bold font pairing
const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });
const fira = Fira_Code({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className={`h-full w-full overflow-y-auto relative bg-[#060608] text-[#E4E4E7] selection:bg-[#FF3300] selection:text-white ${syne.className}`}
    >
      {/* GLOBAL NOISE TEXTURE */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid Lines (Fixed) */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Cinematic Hero (Unchanged) */}
      <div className="relative z-10">
        <CinematicHero scrollContainerRef={scrollRef} />
      </div>

      {/* SECTION 1: OPERATIONAL CAPABILITIES */}
      <section className="relative z-10 border-t border-[#333] bg-[#060608] overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-[#333] p-8 md:p-16 flex flex-col justify-between">
            <h2 className={`text-5xl md:text-7xl font-extrabold leading-[0.85] tracking-tighter uppercase ${syne.className}`}>
              Operational<br />
              <span className="text-[#FF3300]">Capabilities</span>
            </h2>
            <p className={`mt-8 text-[#888] text-sm uppercase tracking-widest ${fira.className}`}>
              // Adamson_Geomatics<br/>
              // Geospatial_Intelligence<br/>
              // Data_Extraction_Matrix
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2">
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
                className="group relative border-b border-r border-[#333] p-8 md:p-12 hover:bg-[#FF3300] hover:text-[#060608] transition-colors duration-300 flex flex-col justify-between aspect-square md:aspect-auto min-h-[300px]"
              >
                <div className={`flex justify-between items-start text-xs font-bold tracking-widest ${fira.className}`}>
                  <span>{feature.id}</span>
                  <feature.icon className="h-6 w-6 opacity-50 group-hover:opacity-100 group-hover:animate-spin-slow" />
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-extrabold uppercase mb-4 tracking-tight leading-none">
                    {feature.title}
                  </h3>
                  <p className="text-[#888] group-hover:text-[#060608]/80 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ACQUISITION TARGETS */}
      <section className="relative z-10 py-24 md:py-40 px-4 md:px-12 lg:px-24 bg-[#0A0A0E] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF3300] to-transparent opacity-50" />
        
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className={`text-[#FF3300] font-bold tracking-[0.2em] text-xs mb-4 flex items-center gap-2 ${fira.className}`}>
              <ShieldAlert className="h-4 w-4" /> SECURE_ASSETS
            </div>
            <h2 className="text-5xl md:text-8xl font-extrabold uppercase tracking-tighter max-w-4xl leading-[0.85]">
              Target<br/>Acquisitions
            </h2>
          </div>
          <Link href="/properties" className="group flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className={`text-xs uppercase tracking-widest font-bold ${fira.className}`}>Access Complete Database</div>
            <div className="h-12 w-12 rounded-full border border-[#FF3300] flex items-center justify-center text-[#FF3300] group-hover:bg-[#FF3300] group-hover:text-black transition-colors">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            { tag: "GOLD/SILVER", reg: "BC, CANADA", stat: "FOR SALE", id: "ASX-902", color: "#FFB000" },
            { tag: "LITHIUM", reg: "ONTARIO", stat: "JOINT VENTURE", id: "LTM-441", color: "#00FF41" },
            { tag: "URANIUM", reg: "SASKATCHEWAN", stat: "OPTION AVAIL", id: "URN-109", color: "#00E5FF" },
            { tag: "COPPER/ZINC", reg: "NEVADA, USA", stat: "FOR SALE", id: "VMS-774", color: "#FF3300" }
          ].map((target, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-6 border border-[#222] bg-[#060608] hover:border-[#555] transition-colors group cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <Cpu className="h-16 w-16" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#111] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className={`flex justify-between items-center mb-12 ${fira.className} text-[10px] tracking-widest text-[#666]`}>
                  <span>ID: {target.id}</span>
                  <span style={{ color: target.color }}>{target.stat}</span>
                </div>
                
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">
                  {target.tag}
                </h3>
                <div className={`text-[#888] uppercase text-xs tracking-widest ${fira.className}`}>
                  LOC: {target.reg}
                </div>
                
                <div className="mt-12 h-1 w-full bg-[#222] overflow-hidden">
                  <div className="h-full bg-current transition-all duration-1000 w-0 group-hover:w-full" style={{ color: target.color }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: GLOBAL TELEMETRY (Replaces DemoPreview) */}
      <section className="relative z-10 py-32 bg-[#000] border-t border-b border-[#333] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity grayscale contrast-150" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')" }} />
          <div className="absolute inset-0 bg-[#000]/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">
              Global Telemetry
            </h2>
            <div className={`flex items-center gap-4 bg-[#111] border border-[#333] px-6 py-3 text-xs tracking-widest ${fira.className}`}>
              <Satellite className="h-4 w-4 text-[#00FF41] animate-pulse" />
              <span>SATELLITE_LINK_ACTIVE</span>
            </div>
          </div>

          <div className="relative aspect-video md:aspect-[21/9] w-full border border-[#333] bg-[#00000]/80 backdrop-blur-md overflow-hidden flex items-center justify-center">
            {/* Radar Sweep */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#333] opacity-20" />
              <div className="absolute top-1/2 left-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#333] opacity-20" />
              <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#333] opacity-20" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#333] opacity-20" />
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#333] opacity-20" />
              
              {/* Animated scanning line */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-[50%] h-[2px] origin-left bg-gradient-to-r from-[#00FF41] to-transparent z-20"
                style={{ filter: 'drop-shadow(0 0 8px #00FF41)' }}
              />
            </div>

            {/* Target Nodes */}
            {[
              { top: '30%', left: '40%', color: '#00FF41', label: 'NWT_LITHIUM' },
              { top: '65%', left: '70%', color: '#FFB000', label: 'AUS_GOLD' },
              { top: '45%', left: '20%', color: '#00E5FF', label: 'NEV_COPPER' },
            ].map((node, i) => (
              <div key={i} className="absolute flex flex-col items-center" style={{ top: node.top, left: node.left }}>
                <div className="relative">
                  <div className="absolute inset-0 animate-ping opacity-50 rounded-full" style={{ backgroundColor: node.color }} />
                  <div className="h-3 w-3 rounded-full relative z-10" style={{ backgroundColor: node.color, boxShadow: `0 0 10px ${node.color}` }} />
                </div>
                <div className={`mt-2 px-2 py-1 bg-black border border-[#333] text-[9px] tracking-widest uppercase ${fira.className}`} style={{ color: node.color }}>
                  {node.label}
                </div>
              </div>
            ))}

            <Link href="/map" className="absolute bottom-8 right-8 z-30 group flex items-center gap-3 bg-white text-black px-6 py-3 hover:bg-[#FF3300] hover:text-white transition-colors">
              <span className="font-bold uppercase tracking-widest text-xs">View Full Map</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: FIELD REPORTS (Testimonials) */}
      <section className="relative z-10 py-32 px-4 md:px-12 lg:px-24 bg-[#060608]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-6">
              Field<br/>Reports
            </h2>
            <p className={`text-[#888] text-sm uppercase tracking-widest leading-relaxed ${fira.className}`}>
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
                className="border-l-4 border-[#FF3300] pl-6 py-2"
              >
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-6">
                  "{report.text}"
                </p>
                <div className={`text-[#666] text-xs uppercase tracking-widest ${fira.className}`}>
                  <strong className="text-white block mb-1">{report.author}</strong>
                  {report.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Unchanged) */}
      <div className="relative z-10 border-t border-[#333]">
        <Footer />
      </div>
    </div>
  );
}
