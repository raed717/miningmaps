"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, Handshake, Coins, ArrowRight } from "lucide-react";
import { mono } from "@/lib/fonts";

interface PartnerProgramsModalProps {
  open: boolean;
  onClose: () => void;
}

export function PartnerProgramsModal({ open, onClose }: PartnerProgramsModalProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-[320px] overflow-y-auto border border-border bg-card shadow-[0_0_60px_rgba(0,0,0,0.6)]"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-sm border border-border/50 bg-black/60 p-2 text-white/80 transition-colors hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="border-b border-border/50 p-5 pr-14">
              <div
                className={`mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary ${mono.className}`}
              >
                <Handshake className="h-3 w-3" />
                NETWORK_PARTNERSHIPS
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-tight text-white">
                Partner &amp; Referral Programs
              </h2>
            </div>

            {/* Body */}
            <div className="space-y-5 p-5">
              {/* Affiliate Program */}
              <div>
                <span
                  className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}
                >
                  <Handshake className="h-3 w-3 text-primary" /> Affiliate Program
                </span>
                <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-zinc-200">
                  <li>
                    Earn <span className="text-primary">10%</span> of payments from new clients
                    you refer during their first year.
                  </li>
                  <li>
                    Earn <span className="text-primary">5%</span> of payments from those same
                    clients thereafter.
                  </li>
                </ul>
              </div>

              {/* Finder's Fee Program */}
              <div>
                <span
                  className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}
                >
                  <Coins className="h-3 w-3 text-primary" /> Finder&apos;s Fee Program
                </span>
                <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-zinc-200">
                  <li>Finder&apos;s fees are available for qualified buyer referrals for our mining projects.</li>
                  <li className="text-muted-foreground">Contact us for details.</li>
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="/partners"
                onClick={onClose}
                className={`group flex w-full items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-transparent hover:text-primary ${mono.className}`}
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
