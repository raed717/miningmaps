import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Layers, BarChart3, Globe2, Download, Mountain } from "lucide-react";
import { useRef } from "react";

function CinematicHero({ scrollContainerRef }: { scrollContainerRef: React.RefObject<HTMLElement | null> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainerRef,
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
  const p2Opacity = useTransform(smoothProgress, [0.15, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const p2Scale = useTransform(smoothProgress, [0.15, 0.55], [0.8, 1.1]);
  const p2TextY = useTransform(smoothProgress, [0.15, 0.45], [100, -50]);

  // Phase 3: Modern Operations (Neon/Active)
  const p3Opacity = useTransform(smoothProgress, [0.45, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const p3Scale = useTransform(smoothProgress, [0.45, 0.85], [1.1, 0.9]);
  const p3TextY = useTransform(smoothProgress, [0.45, 0.75], [100, -50]);

  // Phase 4: Future / Sustainable
  const p4Opacity = useTransform(smoothProgress, [0.75, 0.9, 1], [0, 1, 1]);
  const p4Scale = useTransform(smoothProgress, [0.75, 1], [0.9, 1]);
  const p4TextY = useTransform(smoothProgress, [0.75, 1], [100, 0]);

  // Global CTA visibility
  const ctaOpacity = useTransform(smoothProgress, [0.8, 0.95], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh] w-full shrink-0 bg-black text-white"
    >
      <div className="sticky top-0 h-[calc(100svh-4rem)] w-full overflow-hidden flex flex-col items-center justify-center">
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

        {/* --- PHASE 1: Ancient Terrain --- */}
        <motion.div
          style={{ opacity: p1Opacity, scale: p1Scale }}
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
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black" />
          <div className="absolute w-[60vw] h-[60vw] rounded-full bg-amber-900/30 blur-[100px]" />
          <motion.div style={{ y: p1TextY }} className="z-10 text-center px-4">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-stone-300 to-stone-700 drop-shadow-2xl">
              Ancient <br /> Terrain
            </h2>
            <p className="mt-6 text-xl text-stone-400 font-mono tracking-widest max-w-lg mx-auto bg-black/40 backdrop-blur-sm p-2 rounded-md">
              MILLIONS OF YEARS OF GEOLOGICAL PRESSURE
            </p>
          </motion.div>
        </motion.div>

        {/* --- PHASE 2: Formations --- */}
        <motion.div
          style={{ opacity: p2Opacity, scale: p2Scale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 saturate-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1520299607509-dcd935f9a839?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
          {/* Wireframe Grid Layer */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <motion.div
            style={{ y: p2TextY }}
            className="z-10 text-center px-4 backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-white/5"
          >
            <div className="w-24 h-1 bg-chart-2 mb-8 mx-auto shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-xl">
              Data Substrata
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Mapping complex stratigraphy with high-resolution radar
              topologies.
            </p>
          </motion.div>
        </motion.div>

        {/* --- PHASE 3: Modern Operations --- */}
        <motion.div
          style={{ opacity: p3Opacity, scale: p3Scale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1660367439240-d38cb03a4365?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-radial from-transparent to-black/90" />

          {/* Tech Radar Rings */}
          <div className="absolute border border-primary/30 rounded-full w-[40vw] h-[40vw] animate-pulse shadow-[0_0_30px_rgba(0,194,255,0.2)_inset]"></div>
          <div className="absolute border border-primary/50 rounded-full w-[30vw] h-[30vw]"></div>
          <div className="absolute border border-primary/80 rounded-full w-[20vw] h-[20vw] shadow-[0_0_20px_rgba(0,194,255,0.4)]"></div>

          <motion.div
            style={{ y: p3TextY }}
            className="z-10 text-center px-4 backdrop-blur-md bg-black/40 p-12 border border-primary/30 rounded-3xl shadow-2xl"
          >
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2 drop-shadow-lg">
              LIVE OPERATIONS
            </h2>
            <p className="mt-4 text-lg text-primary/90 font-mono uppercase bg-black/50 inline-block px-4 py-1 rounded">
              Real-time extraction metrics & telemetry
            </p>
          </motion.div>
        </motion.div>

        {/* --- PHASE 4: Future / Sustainable UI --- */}
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
              MiningMaps v2.0 is Here
            </div>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
              Sustainable Insights. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">
                Unified Vision.
              </span>
            </h1>
            <p className="mx-auto mb-10 text-xl text-muted-foreground max-w-2xl">
              A modern, performant platform for geospatial mining operations.
              Optimize resource extraction while minimizing ecological impact.
            </p>

            <motion.div
              style={{ opacity: ctaOpacity }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                to="/map"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-[0_0_30px_rgba(0,194,255,0.4)] transition-all hover:bg-primary/90 hover:scale-105"
              >
                Launch Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-md px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                View Analytics
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      title: "Interactive Layers",
      description: "Toggle seamlessly between geological, infrastructural, and topographical data points.",
      icon: <Layers className="h-6 w-6 text-primary" />,
    },
    {
      title: "Real-time Insights",
      description: "Monitor live operations, track active shipments, and monitor resource extraction rates.",
      icon: <BarChart3 className="h-6 w-6 text-chart-2" />,
    },
    {
      title: "Geological Visualization",
      description: "Map profound depth profiles with high fidelity visual cues across global regions.",
      icon: <Globe2 className="h-6 w-6 text-chart-3" />,
    },
    {
      title: "Export & Analysis",
      description: "Extract specialized CSV/JSON arrays tailored to local regulatory requirements.",
      icon: <Download className="h-6 w-6 text-chart-4" />,
    },
  ];

  const testimonials = [
    {
      quote: "MiningMaps transformed how our executive team interprets ground truth. The visual fidelity is unmatched.",
      author: "Sarah Jenks",
      role: "VP of Operations, GlobalExtract",
    },
    {
      quote: "Before this, mapping our lithium assets was a fragmented nightmare. Now it’s completely unified in one dashboard.",
      author: "Markus V.",
      role: "Lead Geologist, ApexMinerals",
    },
  ];

  return (
    <div ref={scrollRef} className="h-full w-full overflow-y-auto relative">
      {/* Hero Section */}
      <CinematicHero scrollContainerRef={scrollRef} />

      {/* Demo Preview Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl rounded-xl border border-border/50 bg-card p-2 shadow-2xl shadow-primary/10"
        >
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            <div className="h-3 w-3 rounded-full bg-destructive/80" />
            <div className="h-3 w-3 rounded-full bg-chart-5/80" />
            <div className="h-3 w-3 rounded-full bg-chart-3/80" />
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-background">
            {/* Fake Map Interface Overlay */}
            <div className="absolute inset-y-0 left-0 z-10 w-64 border-r border-border/50 bg-card/80 p-6 backdrop-blur-md">
              <div className="mb-6 h-4 w-24 rounded bg-muted" />
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded border border-muted-foreground/30" />
                    <div className="h-3 w-20 rounded bg-muted" />
                  </div>
                ))}
              </div>
            </div>
            {/* Fake Map Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            {/* Fake Map Markers */}
            <div className="absolute top-1/3 left-1/2 h-4 w-4 rounded-full bg-primary shadow-[0_0_15px_rgba(0,194,255,0.8)] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 h-4 w-4 rounded-full bg-chart-2 shadow-[0_0_15px_rgba(249,115,22,0.8)] animate-pulse delay-150" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Platform Capabilities</h2>
          <p className="mt-4 text-muted-foreground">Everything you need to orchestrate global resource operations.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight">Trusted by Industry Leaders</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-xl border border-border/50 bg-background p-8"
              >
                <p className="mb-6 text-lg italic text-muted-foreground">"{test.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground">{test.author}</div>
                  <div className="text-sm text-primary">{test.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2 font-medium text-foreground">
            <Mountain className="h-5 w-5 text-primary" />
            MiningMaps
          </div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-primary">About</Link>
            <Link to="/map" className="hover:text-primary">Platform</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>
          <p>© 2026 MiningMaps. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}