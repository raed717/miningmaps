"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Handshake, X, ArrowRight } from "lucide-react";
import { mono } from "@/lib/fonts";

const DISMISS_KEY = "partner-programs-ticker-dismissed";

const TICKER_TEXT =
  "\u{1F91D} AFFILIATE PROGRAM — Earn 10% of payments from new clients you refer during their first year, 5% thereafter.     ⛏️ FINDER'S FEE PROGRAM — Available for qualified buyer referrals on our mining projects. Contact us for details.     ";

export function PartnerProgramsTickerBanner({
  triggerSelector = "[data-hero-section]",
}: {
  triggerSelector?: string;
}) {
  const [pastHero, setPastHero] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(DISMISS_KEY)) {
      setDismissed(true);
    }
  }, []);

  useEffect(() => {
    const target = document.querySelector(triggerSelector);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [triggerSelector]);

  const dismiss = () => {
    setDismissed(true);
    window.localStorage.setItem(DISMISS_KEY, "1");
  };

  const visible = pastHero && !dismissed;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-40 flex h-11 items-stretch border-t border-primary/40 bg-black/95 backdrop-blur-sm md:h-12"
        >
          <div
            className={`flex shrink-0 items-center gap-2 border-r border-primary/40 bg-primary px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black md:px-4 ${mono.className}`}
          >
            <Handshake className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Partners</span>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <div className="flex h-full w-max items-center animate-[ticker-scroll_26s_linear_infinite]">
              <span
                className={`shrink-0 px-6 text-[11px] uppercase tracking-wider text-zinc-100 md:text-xs ${mono.className}`}
              >
                {TICKER_TEXT}
              </span>
              <span
                className={`shrink-0 px-6 text-[11px] uppercase tracking-wider text-zinc-100 md:text-xs ${mono.className}`}
                aria-hidden="true"
              >
                {TICKER_TEXT}
              </span>
            </div>
            {/* Edge fades so the scrolling text doesn't hard-cut at the container bounds */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/95 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/95 to-transparent" />
          </div>

          <Link
            href="/partners"
            className={`group flex shrink-0 items-center gap-1.5 border-l border-primary/40 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-black md:px-5 ${mono.className}`}
          >
            <span className="hidden sm:inline">Learn More</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss"
            className="flex shrink-0 items-center border-l border-primary/40 px-3 text-white/60 transition-colors hover:text-primary md:px-4"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
