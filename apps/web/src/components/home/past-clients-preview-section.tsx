"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  GraduationCap,
  Landmark,
  Pickaxe,
  Scale,
  Sparkles,
} from "lucide-react";
import { mono } from "@/lib/fonts";
import { pastClients } from "@/lib/pastClientsData";

type SpotlightClient = {
  name: string;
  category: string;
  note: string;
  url?: string;
  logo?: string;
  image?: string;
  icon: typeof Building2;
};

const spotlightClients: SpotlightClient[] = [
  {
    name: "University of Victoria",
    category: "ACADEMIC / RESEARCH",
    note: "Helped connect their geology team with tour of Phoenix pit",
    url: "https://www.uvic.ca/",
    logo: "https://www.uvic.ca/assets/core-4-0/img/uvic-wordmark-colour.svg",
    icon: GraduationCap,
  },
  {
    name: "Barkerville Gold Mines",
    category: "MINING / OSISKO DEV",
    note: "100+ km powerline right-of-way GIS land mapping and complex Crown Grant transfers",
    url: "https://osiskodev.com/",
    logo: "https://www.osiskogold.ca/_templates/1/source/img/osisko-logo-white.svg?v=092508",
    icon: Pickaxe,
  },
  {
    name: "JDS Mining",
    category: "MINE OPERATIONS",
    note: "Ground-truth GIS mapping and operational support for major mineral exploration assets",
    url: "https://www.jdsmining.ca/",
    logo: "https://images.squarespace-cdn.com/content/v1/69374981c217436964ab61e9/224c8b13-9cf9-40ac-8c0d-ebffb3419b8f/JDS+Full+Logo+-+Blue+RGB.png?format=1500w",
    icon: Pickaxe,
  },
  {
    name: "B.C. Hydro",
    category: "PUBLIC UTILITY",
    note: "Reservoir monitoring reports & watershed spatial analysis across British Columbia",
    url: "https://www.bchydro.com/index.html",
    logo: "https://www.bchydro.com/content/experience-fragments/bchydro-web/header/master/_jcr_content/root/container/container/image.coreimg.svg/1723787760686/logo-bchydro.svg",
    icon: Landmark,
  },
  {
    name: "Dentons LLC",
    category: "LEGAL & LAND TITLE",
    note: "Complex Crown Grant transfers, historical parcel boundary research, and title mapping",
    url: "https://www.dentons.com/en/",
    logo:"https://www.dentons.com/-/media/images/website/logos/logos_svg/dentons-hong-kong-logo-rgb.ashx",
    icon: Scale,
  },
  {
    name: "University of Waterloo",
    category: "ACADEMIC / MODELING",
    note: "Wildfire mitigation modeling consulting and terrain risk evaluation",
    url: "https://uwaterloo.ca/",
    logo:"https://ssc.ca/sites/default/files/styles/max_1300x1300/public/imce/liaison/abkashlak/waterloo.png?itok=ikVCUvQb",
    icon: GraduationCap,
  },
  {
    name: "Quantum Critical Metals",
    category: "CRITICAL MINERALS",
    note: "Exploration GIS mapping, tenure research, and investor presentation geospatial assets",
    url: "https://www.quantumcriticalmetals.com/",
    logo:"https://www.quantumcriticalmetals.com/images/qcm-logo-horizontal.webp",
    icon: Pickaxe,
  },
  {
    name: "The City of Coquitlam",
    category: "MUNICIPAL GOVERNMENT",
    note: "Produced stream monitoring maps in partnership with B.C Hydro",
    url: "https://www.coquitlam.ca/",
    logo:"https://www.otcmarkets.com/company-otcapi/company/logo/ATOXF",
    icon: Building2,
  },
];

export function PastClientsPreviewSection() {
  const totalCount = pastClients.length;

  return (
    <section className="relative z-10 overflow-hidden border-t border-border bg-card/60 px-4 py-24 md:px-12 md:py-32 lg:px-24">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_bottom_left,#FFD700,transparent_60%)]" />
      <div className="pointer-events-none absolute top-0 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end pb-12 border-b border-border/80">
          <div>
            <div
              className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary ${mono.className}`}
            >
              <Building2 className="h-4 w-4" /> CLIENT_INTELLIGENCE // TRUSTED_NETWORK
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none text-white">
              Trusted by Explorers,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-primary/80">
                Industry &amp; Universities
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Precision GIS mapping, Crown Grant parcel research, tenure management,
              and terrain modeling delivered for major mining corporations, public
              utilities, municipalities, and academic research institutions.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <Link
              href="/services?tab=clients"
              className={`group inline-flex items-center gap-2.5 border border-primary bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] active:scale-[0.99] ${mono.className}`}
            >
              See All Clients ({totalCount})
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Spotlight Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {spotlightClients.map((client, idx) => {
            const Icon = client.icon;
            const isFeatured = Boolean(client.image || client.logo);

            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`group relative flex flex-col justify-between rounded-xl border bg-background/80 p-5 backdrop-blur-sm transition-all hover:border-primary/60 hover:shadow-lg ${
                  isFeatured
                    ? "border-primary/40 bg-gradient-to-b from-card to-background ring-1 ring-primary/20"
                    : "border-border/70 hover:bg-card"
                }`}
              >
                <div>
                  {/* Top Bar: Index & Category */}
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <span
                      className={`text-[10px] font-mono font-bold tracking-widest text-primary ${mono.className}`}
                    >
                      {String(idx + 1).padStart(2, "0")} // {client.category}
                    </span>
                    <Icon className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>

                  {/* Logo or Image Thumbnail if available */}
                  {client.logo && (
                    <div className="mt-3.5 inline-flex items-center rounded bg-white px-2.5 py-1 shadow-xs">
                      <img
                        src={client.logo}
                        alt={`${client.name} wordmark`}
                        className="h-4 max-w-[120px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Client Name */}
                  <h3 className="mt-3 text-base font-bold uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                    {client.name}
                  </h3>

                  {/* Engagement Note */}
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {client.note}
                  </p>

                  {/* Image attachment preview if present */}
                  {client.image && (
                    <div className="mt-3 overflow-hidden rounded-md border border-border/60">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="h-24 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                {/* Card Action Link */}
                <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between">
                  {client.url ? (
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-white ${mono.className}`}
                    >
                      Website <ArrowUpRight className="h-3 w-3 text-primary" />
                    </a>
                  ) : (
                    <span
                      className={`text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60 ${mono.className}`}
                    >
                      Verified Client
                    </span>
                  )}

                  <Link
                    href="/services?tab=clients"
                    className="text-[10px] font-mono text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                  >
                    View in Archive &rarr;
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout & Direct Navigation */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-xl border border-border/70 bg-background/60 p-5 backdrop-blur-sm sm:flex-row sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-wide text-white">
                Looking for our full client archive?
              </div>
              <p className="text-xs text-muted-foreground">
                Browse all {totalCount}+ documented client engagements, consulting projects, and institutional partnerships.
              </p>
            </div>
          </div>

          <Link
            href="/services?tab=clients"
            className={`inline-flex shrink-0 items-center gap-2 border border-border/80 bg-card px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-primary hover:bg-primary/10 hover:text-primary active:scale-[0.99] ${mono.className}`}
          >
            See More on Services Page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
