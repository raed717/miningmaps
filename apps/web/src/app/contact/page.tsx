"use client";

import { motion } from "motion/react";
import { Mail, Linkedin, Facebook, Terminal, ArrowUpRight, ShieldAlert } from "lucide-react";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Contact() {
  return (
    <div className={`min-h-screen w-full relative bg-background text-foreground overflow-x-hidden ${inter.className}`}>
      {/* GLOBAL NOISE TEXTURE */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid Lines */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 md:py-32 md:px-8">
        <div className="mb-16 md:mb-24 border-l-4 border-primary pl-6 md:pl-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-primary font-bold tracking-[0.2em] text-xs mb-6 flex items-center gap-2 ${mono.className}`}
          >
            <Terminal className="h-4 w-4" /> SECURE_CHANNEL_OPEN
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter max-w-3xl leading-[0.85]"
          >
            Establish<br/>
            <span className="text-primary">Connection</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mt-8 text-muted-foreground text-sm uppercase tracking-widest max-w-2xl leading-relaxed ${mono.className}`}
          >
            Ready to discuss your GIS mapping, land management, or real estate needs? Initiate a communication protocol below.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email Comm */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative border border-border bg-card p-8 hover:bg-primary transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              <div className={`flex justify-between items-start text-xs font-bold tracking-widest text-muted-foreground group-hover:text-[#060608]/60 mb-12 ${mono.className}`}>
                <span>COMM_LINK_01</span>
                <Mail className="h-5 w-5" />
              </div>
              
              <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-8 group-hover:text-[#060608]">
                Direct Email
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className={`text-[10px] text-muted-foreground group-hover:text-[#060608]/60 uppercase tracking-widest mb-1 ${mono.className}`}>Properties</div>
                  <a href="mailto:chris@miningpropertymaps.com" className="text-base md:text-lg font-medium hover:underline group-hover:text-[#060608] break-all">chris@miningpropertymaps.com</a>
                </div>
                <div>
                  <div className={`text-[10px] text-muted-foreground group-hover:text-[#060608]/60 uppercase tracking-widest mb-1 ${mono.className}`}>Land Services</div>
                  <a href="mailto:chris@adamsonlandservices.com" className="text-base md:text-lg font-medium hover:underline group-hover:text-[#060608] break-all">chris@adamsonlandservices.com</a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-end">
              <div className="h-12 w-12 border border-primary group-hover:border-[#060608] text-primary group-hover:text-[#060608] flex items-center justify-center transition-colors">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <a href="https://www.linkedin.com/in/chris-adamson-r-84649b4b" target="_blank" rel="noopener noreferrer" className="group relative border border-border bg-card p-8 hover:bg-[#0077b5] transition-colors duration-300 flex-1 flex flex-col justify-between">
              <div className={`flex justify-between items-start text-xs font-bold tracking-widest text-muted-foreground group-hover:text-white/60 mb-6 ${mono.className}`}>
                <span>NETWORK_01</span>
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-2 group-hover:text-white">LinkedIn</h3>
                <p className={`text-sm text-muted-foreground group-hover:text-white/80 ${mono.className}`}>Chris Adamson</p>
              </div>
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </a>

            <a href="https://www.facebook.com/profile.php?id=61561908187975" target="_blank" rel="noopener noreferrer" className="group relative border border-border bg-card p-8 hover:bg-[#1877f2] transition-colors duration-300 flex-1 flex flex-col justify-between">
              <div className={`flex justify-between items-start text-xs font-bold tracking-widest text-muted-foreground group-hover:text-white/60 mb-6 ${mono.className}`}>
                <span>NETWORK_02</span>
                <Facebook className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-2 group-hover:text-white">Facebook</h3>
                <p className={`text-sm text-muted-foreground group-hover:text-white/80 ${mono.className}`}>Adamson Geomatics</p>
              </div>
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </a>
          </motion.div>
        </div>
        
        {/* Warning / System status message */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 border-t border-border pt-8 flex items-start gap-4"
        >
           <ShieldAlert className="h-5 w-5 text-primary shrink-0" />
           <p className={`text-xs text-muted-foreground uppercase tracking-widest leading-relaxed max-w-2xl ${mono.className}`}>
             All communications are routed through secure channels. Response time typically within 24-48 hours. For urgent field ops or immediate staking requirements, please explicitly state "URGENT" in the subject line.
           </p>
        </motion.div>
      </div>
    </div>
  );
}
