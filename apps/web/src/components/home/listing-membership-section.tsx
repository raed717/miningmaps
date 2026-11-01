"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  Check,
  Handshake,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { mono } from "@/lib/fonts";
import { PartnerProgramsModal } from "@/components/PartnerProgramsModal";
import { useI18n } from "@/lib/i18n/context";
import { homeTranslations } from "@/lib/i18n/translations/home";
import { getLocalizedPath } from "@/lib/i18n/navigation";

const planIcons: Record<string, typeof BadgeDollarSign> = {
  commission: BadgeDollarSign,
  "subscription-listing": Zap,
  "company-membership": Building2,
};

const planHighlightColors: Record<string, string> = {
  commission: "border-border",
  "subscription-listing": "border-primary shadow-[0_0_25px_rgba(0,229,255,0.15)]",
  "company-membership": "border-secondary/60 shadow-[0_0_25px_rgba(255,176,0,0.12)]",
};

export function ListingMembershipSection() {
  const { locale } = useI18n();
  const t = (homeTranslations[locale] || homeTranslations.en).listingMembership;
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  return (
    <section className="relative z-10 overflow-hidden border-t border-border bg-background px-4 py-24 md:px-10 md:py-32">
      {/* Subtle background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.06),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-primary backdrop-blur-sm ${mono.className}`}
          >
            <Layers className="h-3.5 w-3.5" /> {t.badge}
          </div>

          <h2 className="mt-6 text-3xl font-extrabold uppercase tracking-tighter leading-none text-white sm:text-5xl md:text-6xl">
            {t.title}
            <br />
            {t.titleHighlight}
          </h2>

          <p className="mt-6 text-sm uppercase tracking-wide leading-relaxed text-muted-foreground md:text-base">
            {t.description}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {t.plans.map((plan, index) => {
            const Icon = planIcons[plan.id] || BadgeDollarSign;
            const highlightColor = planHighlightColors[plan.id] || "border-border";
            const isPopular = plan.id === "subscription-listing";
            const ctaHref = `/contact?plan=${plan.id}`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`relative flex flex-col justify-between overflow-hidden border bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 md:p-8 ${highlightColor} hover:translate-y-[-2px]`}
              >
                {/* Top Promo Banner */}
                {plan.promoBadge && (
                  <div className="absolute top-0 right-0">
                    <div
                      className={`bg-primary px-3 py-1 text-[9px] font-extrabold tracking-widest text-black uppercase ${mono.className}`}
                    >
                      {plan.promoBadge}
                    </div>
                  </div>
                )}

                <div>
                  {/* Category Tag */}
                  <div
                    className={`text-[9px] font-bold uppercase tracking-[0.22em] text-primary ${mono.className}`}
                  >
                    {plan.tag}
                  </div>

                  {/* Plan Name */}
                  <h3 className="mt-3 flex items-center gap-2.5 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                    <Icon className="h-6 w-6 text-primary" />
                    {plan.name}
                  </h3>

                  {/* Price Block */}
                  <div className="mt-6 flex items-baseline gap-2 border-b border-border pb-6">
                    <span className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-widest text-muted-foreground ${mono.className}`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <p className="mt-6 text-xs uppercase leading-relaxed tracking-wider text-zinc-300 md:text-sm">
                    {plan.description}
                  </p>

                  <div className="mt-4 border-l-2 border-primary/40 pl-3">
                    <span
                      className={`block text-[9px] font-bold uppercase tracking-[0.2em] text-primary ${mono.className}`}
                    >
                      {t.bestForLabel}
                    </span>
                    <span className="text-xs uppercase text-muted-foreground">
                      {plan.idealFor}
                    </span>
                  </div>

                  {/* Feature List */}
                  <div className="mt-8">
                    <div
                      className={`mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ${mono.className}`}
                    >
                      {t.featuresLabel}
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-xs uppercase tracking-wide text-zinc-200"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="mt-10 pt-4">
                  <Link
                    href={getLocalizedPath(ctaHref, locale)}
                    className={`group flex w-full items-center justify-center gap-2 border px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all md:text-sm ${
                      isPopular
                        ? "border-primary bg-primary text-black hover:bg-transparent hover:text-primary"
                        : "border-border bg-background text-white hover:border-primary hover:text-primary"
                    } ${mono.className}`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Target Audience Benefits Banner */}
        <div className="mt-16 border border-border bg-card/50 p-6 backdrop-blur-sm md:p-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div
                className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary ${mono.className}`}
              >
                <Sparkles className="h-4 w-4" /> {t.partnersBanner.badge}
              </div>
              <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                {t.partnersBanner.title}
              </h3>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setPartnerModalOpen(true)}
                className={`inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-black ${mono.className}`}
              >
                <Handshake className="h-4 w-4" /> {t.partnersBanner.ctaPartner}
              </button>
              <Link
                href={getLocalizedPath("/contact", locale)}
                className={`inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-black ${mono.className}`}
              >
                {t.partnersBanner.ctaDiscuss} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.partnersBanner.targetAudiences.map((item) => (
              <div
                key={item.role}
                className="border border-border/80 bg-background/60 p-4 transition-colors hover:border-primary/50"
              >
                <div
                  className={`text-[10px] font-bold uppercase tracking-[0.18em] text-primary ${mono.className}`}
                >
                  {item.role}
                </div>
                <p className="mt-2 text-xs uppercase leading-relaxed tracking-wider text-muted-foreground">
                  {item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PartnerProgramsModal open={partnerModalOpen} onClose={() => setPartnerModalOpen(false)} />
    </section>
  );
}
