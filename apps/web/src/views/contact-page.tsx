"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Facebook,
  Gem,
  Linkedin,
  Mail,
  Map,
  ShieldAlert,
  Terminal,
} from "lucide-react";
import { inter, mono } from "@/lib/fonts";

type ContactRoute = {
  id: string;
  title: string;
  description: string;
  icon: typeof Mail;
  href: string;
  label: string;
  external?: boolean;
};

const contactRoutes = [
  {
    id: "COMM_LINK_01",
    title: "For a quote or proposal",
    description: "Mining property maps, GIS services, data analysis.",
    icon: Gem,
    href: "mailto:chris@miningpropertymaps.com",
    label: "chris@miningpropertymaps.com",
  },
  {
    id: "COMM_LINK_02",
    title: "Land Services",
    description:
      "Claim staking, tenure support, permitting, land management, and field coordination.",
    icon: Map,
    href: "mailto:chris@adamsonlandservices.com",
    label: "chris@adamsonlandservices.com",
  },
  {
    id: "NETWORK_01",
    title: "LinkedIn",
    description:
      "Best for partnerships, professional introductions, and broader business discussions.",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/adamson-geomatics/",
    label: "Chris Adamson",
    external: true,
  },
  {
    id: "NETWORK_02",
    title: "Facebook",
    description:
      "Best for general updates, brand presence, and casual outreach to Adamson Geomatics.",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61561908187975",
    label: "Adamson Geomatics",
    external: true,
  },
] satisfies ContactRoute[];

export default function ContactPage() {
  return (
    <div className={`relative min-h-screen w-full overflow-x-hidden bg-background text-foreground ${inter.className}`}>
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8 md:py-28">
        <div className="mb-14 border-l-4 border-primary pl-5 md:mb-18 md:pl-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-5 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
          >
            <Terminal className="h-4 w-4" /> SECURE_CHANNEL_OPEN
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-4xl font-extrabold uppercase tracking-tighter leading-[0.88] md:text-6xl"
          >
            Contact
            <br />
            <span className="text-primary">Routing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mt-6 max-w-2xl text-xs uppercase tracking-[0.18em] leading-relaxed text-muted-foreground md:text-sm ${mono.className}`}
          >
            Pick the contact path that matches what you need help with, and route your inquiry directly to the right place.
          </motion.p>
        </div>

        <div className="border border-border bg-card/70 backdrop-blur-sm">
          <div className="grid gap-px bg-border">
            {contactRoutes.map((route, index) => {
              const Icon = route.icon;

              return (
                <motion.a
                  key={route.id}
                  href={route.href}
                  target={route.external ? "_blank" : undefined}
                  rel={route.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="group grid gap-5 bg-background px-5 py-5 transition-colors hover:bg-card md:grid-cols-[88px_minmax(170px,0.6fr)_minmax(0,1fr)_auto] md:px-8 md:py-6"
                >
                  <div className="flex items-center gap-4 md:block">
                    <div className="flex h-14 w-14 items-center justify-center border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:mt-4 ${mono.className}`}>
                      {route.id}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white">
                      {route.title}
                    </h2>
                    <div className={`mt-3 text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
                      Best for
                    </div>
                  </div>

                  <div>
                    <p className={`text-xs uppercase tracking-[0.16em] leading-relaxed text-muted-foreground md:text-sm ${mono.className}`}>
                      {route.description}
                    </p>
                    <div className="mt-4 inline-flex max-w-full items-center gap-2 border border-border bg-card px-3 py-2 text-sm text-white transition-colors group-hover:border-primary">
                      <Mail className="h-4 w-4 shrink-0 text-primary" />
                      <span className="truncate">{route.label}</span>
                    </div>
                  </div>

                  <div className="flex items-center md:justify-end">
                    <div className="flex h-11 w-11 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid gap-4 border-t border-border pt-8 md:grid-cols-[auto_1fr]"
        >
          <ShieldAlert className="h-5 w-5 shrink-0 text-primary" />
          <div className={`space-y-3 text-xs uppercase tracking-[0.18em] leading-relaxed text-muted-foreground ${mono.className}`}>
            <p>
              Response time is typically within 24-48 hours. For urgent field operations or immediate staking requirements, include `URGENT` in the subject line.
            </p>
            <p>
              For mining property opportunities use the mining properties route first. For GIS, land management, tenure, or permitting support use the land services route.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 border border-border bg-card/70 p-5 md:p-6"
        >
          <div className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
            Please Provide
          </div>
          <div className="mt-4 grid gap-px border border-border bg-border">
            {[
              "Clear explanation of your project needs / land issue",
              "Property address, tenure ID, or lat/long coordinates",
              "Desired output format (i.e PDF or JPG maps, PowerPoint reports, written documents)",
              "Intended audience",
            ].map((item) => (
              <div
                key={item}
                className={`bg-background px-4 py-4 text-xs uppercase tracking-[0.16em] leading-relaxed text-muted-foreground md:text-sm ${mono.className}`}
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
