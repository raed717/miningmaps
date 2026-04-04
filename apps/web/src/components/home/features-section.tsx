"use client";

import { Layers, FileSearch, Building2, Gem } from "lucide-react";
import { motion } from "motion/react";

export function FeaturesSection() {
  const features = [
    {
      title: "GIS Mapping & Land Management",
      description:
        "Claim staking, renewals, prospecting, marketing maps, assessment reporting, and permitting applications.",
      icon: <Layers className="h-6 w-6 text-primary" />,
    },
    {
      title: "Title Searches & Research",
      description:
        "Land title searches, summary of liens and encumbrances, and Crown Grant or patented land research.",
      icon: <FileSearch className="h-6 w-6 text-chart-2" />,
    },
    {
      title: "Real Estate & Land Development",
      description:
        "GIS mapping for land planning, route analysis, valuations, landowner negotiations, and government permitting.",
      icon: <Building2 className="h-6 w-6 text-chart-3" />,
    },
    {
      title: "Mineral Properties for Sale",
      description:
        "Early to advanced-stage mineral exploration projects available for sale, option, or joint venture.",
      icon: <Gem className="h-6 w-6 text-chart-4" />,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Core Services
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Comprehensive geospatial solutions for mining, exploration, and real estate professionals.
        </p>
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
