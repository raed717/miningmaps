"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Facebook,
  Linkedin,
  Mail,
  ShieldAlert,
  Terminal,
} from "lucide-react";
import { inter, mono } from "@/lib/fonts";

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

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 md:px-8 md:py-32">
        <div className="mb-16 border-l-4 border-primary pl-6 md:mb-24 md:pl-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
          >
            <Terminal className="h-4 w-4" /> SECURE_CHANNEL_OPEN
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-5xl font-extrabold uppercase tracking-tighter leading-[0.85] md:text-7xl"
          >
            Establish
            <br />
            <span className="text-primary">Connection</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mt-8 max-w-2xl text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}
          >
            Ready to discuss your GIS mapping, land management, or real estate needs?
            Initiate a communication protocol below.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative flex flex-col justify-between border border-border bg-card p-8 transition-colors duration-300 hover:bg-primary"
          >
            <div>
              <div className={`mb-12 flex items-start justify-between text-xs font-bold tracking-widest text-muted-foreground group-hover:text-[#060608]/60 ${mono.className}`}>
                <span>COMM_LINK_01</span>
                <Mail className="h-5 w-5" />
              </div>

              <h3 className="mb-8 text-3xl font-extrabold uppercase tracking-tight group-hover:text-[#060608]">
                Direct Email
              </h3>

              <div className="space-y-6">
                <div>
                  <div className={`mb-1 text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-[#060608]/60 ${mono.className}`}>
                    Properties
                  </div>
                  <a href="mailto:chris@miningpropertymaps.com" className="break-all text-base font-medium hover:underline group-hover:text-[#060608] md:text-lg">
                    chris@miningpropertymaps.com
                  </a>
                </div>
                <div>
                  <div className={`mb-1 text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-[#060608]/60 ${mono.className}`}>
                    Land Services
                  </div>
                  <a href="mailto:chris@adamsonlandservices.com" className="break-all text-base font-medium hover:underline group-hover:text-[#060608] md:text-lg">
                    chris@adamsonlandservices.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-end">
              <div className="flex h-12 w-12 items-center justify-center border border-primary text-primary transition-colors group-hover:border-[#060608] group-hover:text-[#060608]">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <a
              href="https://www.linkedin.com/in/chris-adamson-r-84649b4b"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-1 flex-col justify-between border border-border bg-card p-8 transition-colors duration-300 hover:bg-[#0077b5]"
            >
              <div className={`mb-6 flex items-start justify-between text-xs font-bold tracking-widest text-muted-foreground group-hover:text-white/60 ${mono.className}`}>
                <span>NETWORK_01</span>
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-extrabold uppercase tracking-tight group-hover:text-white">
                  LinkedIn
                </h3>
                <p className={`text-sm text-muted-foreground group-hover:text-white/80 ${mono.className}`}>
                  Chris Adamson
                </p>
              </div>
              <div className="absolute right-8 bottom-8 opacity-0 text-white transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61561908187975"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-1 flex-col justify-between border border-border bg-card p-8 transition-colors duration-300 hover:bg-[#1877f2]"
            >
              <div className={`mb-6 flex items-start justify-between text-xs font-bold tracking-widest text-muted-foreground group-hover:text-white/60 ${mono.className}`}>
                <span>NETWORK_02</span>
                <Facebook className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-extrabold uppercase tracking-tight group-hover:text-white">
                  Facebook
                </h3>
                <p className={`text-sm text-muted-foreground group-hover:text-white/80 ${mono.className}`}>
                  Adamson Geomatics
                </p>
              </div>
              <div className="absolute right-8 bottom-8 opacity-0 text-white transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-start gap-4 border-t border-border pt-8"
        >
          <ShieldAlert className="h-5 w-5 shrink-0 text-primary" />
          <p className={`max-w-2xl text-xs uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}>
            All communications are routed through secure channels. Response time
            typically within 24-48 hours. For urgent field ops or immediate staking
            requirements, please explicitly state "URGENT" in the subject line.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
