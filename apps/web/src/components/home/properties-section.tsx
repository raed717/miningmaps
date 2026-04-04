"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Pickaxe, TrendingUp, ShieldCheck, Map } from "lucide-react";

export function PropertiesSection() {
  const properties = [
    {
      title: "Gold & Silver Targets",
      region: "British Columbia",
      status: "For Sale",
      icon: <TrendingUp className="h-6 w-6 text-yellow-500" />,
      color: "border-yellow-500/30 bg-yellow-500/5",
    },
    {
      title: "Lithium Pegmatite",
      region: "Ontario",
      status: "Joint Venture",
      icon: <Pickaxe className="h-6 w-6 text-chart-2" />,
      color: "border-chart-2/30 bg-chart-2/5",
    },
    {
      title: "Uranium Claims",
      region: "Saskatchewan",
      status: "Option Available",
      icon: <ShieldCheck className="h-6 w-6 text-chart-3" />,
      color: "border-chart-3/30 bg-chart-3/5",
    },
    {
      title: "Copper/Zinc VMS",
      region: "Nevada, USA",
      status: "For Sale",
      icon: <Map className="h-6 w-6 text-chart-4" />,
      color: "border-chart-4/30 bg-chart-4/5",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Mineral Properties for Sale
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Early to advanced-stage mineral exploration projects available for sale, option, or joint venture. 
          </p>
        </div>
        <Link
          href="/properties"
          className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-6 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
        >
          View All Listings
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {properties.map((prop, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`rounded-xl border ${prop.color} p-6 flex flex-col items-start transition-all hover:scale-[1.02] cursor-pointer`}
          >
            <div className="mb-4 rounded-full bg-background p-3 shadow-sm">
              {prop.icon}
            </div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {prop.region}
            </div>
            <h3 className="mb-4 text-lg font-semibold">{prop.title}</h3>
            <div className="mt-auto inline-flex items-center rounded-full bg-background px-3 py-1 text-xs font-medium border border-border/50">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
              {prop.status}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
