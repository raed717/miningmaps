import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Layers, BarChart3, Globe2, Download, Mountain } from "lucide-react";

export default function Home() {
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
    <div className="flex h-full w-full flex-col overflow-y-auto">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-background px-4">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-background to-background" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-chart-2/10 blur-[128px]" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Introducing MiningMaps v2.0
          </div>
          <h1 className="mb-6 max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl">
            Explore Mining Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">Visually</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            A modern, performant platform for geospatial mining insights. Unearth complex data relationships in milliseconds.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/map"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Explore Map
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-transparent px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View Dashboard
            </Link>
          </div>
        </motion.div>
      </section>

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