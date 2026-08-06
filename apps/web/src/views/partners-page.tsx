"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Handshake,
  Coins,
  Percent,
  CheckCircle2,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { inter, mono } from "@/lib/fonts";

const affiliateTerms = [
  "10% commission on payments from new clients you refer, for their first 12 months.",
  "5% commission on payments from those same clients thereafter, for as long as they remain a client.",
  "Applies to commission-based listings, subscription listings, and company memberships.",
  "Commissions are calculated on actual payments received, not gross invoiced amounts.",
  "Payouts are issued monthly once accrued commissions exceed a minimum threshold.",
];

const affiliateEligibility = [
  "Referral must be a new client with no prior account or listing history with us.",
  "The referred client must confirm your referral at signup or during onboarding.",
  "Self-referrals and duplicate accounts are not eligible.",
];

const finderTerms = [
  "Available for qualified buyer referrals on our listed mining and mineral exploration projects.",
  "Fee amount and structure are agreed in writing on a per-transaction basis before introduction.",
  "Paid out only upon successful close of the transaction between buyer and seller.",
];

const finderEligibility = [
  "The buyer must not already be in active discussions with the project owner or our team.",
  "Introductions must be disclosed to us before or at the time of buyer contact.",
  "Available to individuals, brokers, and consultants with a bona fide buyer connection.",
];

export default function PartnersPage() {
  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden bg-background text-foreground ${inter.className}`}
    >
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8 md:py-28">
        {/* Back link */}
        <Link
          href="/"
          className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary ${mono.className}`}
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back Home
        </Link>

        {/* Hero */}
        <div className="mb-16 mt-8 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-5 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
          >
            <Handshake className="h-4 w-4" /> NETWORK_PARTNERSHIPS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-4xl font-extrabold uppercase tracking-tighter leading-[0.9] md:text-6xl"
          >
            Partner &amp;<br />
            <span className="text-primary">Referral Programs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Two ways to earn by referring clients and buyers into our network —
            full terms, eligibility, and commission structure below.
          </motion.p>
        </div>

        {/* Affiliate Program */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-t border-border pt-12 md:mb-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <Percent className="h-5 w-5 text-primary" />
            <h2 className={`text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}>
              AFFILIATE PROGRAM
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-tight text-white">
                Commission Structure
              </h3>
              <ul className="mt-4 space-y-3">
                {affiliateTerms.map((term) => (
                  <li key={term} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-tight text-white">
                Eligibility
              </h3>
              <ul className="mt-4 space-y-3">
                {affiliateEligibility.map((term) => (
                  <li key={term} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Finder's Fee Program */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-t border-border pt-12 md:mb-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <Coins className="h-5 w-5 text-primary" />
            <h2 className={`text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}>
              FINDERS FEE PROGRAM
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-tight text-white">
                Terms
              </h3>
              <ul className="mt-4 space-y-3">
                {finderTerms.map((term) => (
                  <li key={term} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-tight text-white">
                Eligibility
              </h3>
              <ul className="mt-4 space-y-3">
                {finderEligibility.map((term) => (
                  <li key={term} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border pt-12"
        >
          <div className="flex flex-col items-start justify-between gap-6 border border-border bg-card/50 p-6 backdrop-blur-sm md:flex-row md:items-center md:p-10">
            <div>
              <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary ${mono.className}`}>
                <Mail className="h-4 w-4" /> GET_IN_TOUCH
              </div>
              <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-white md:text-2xl">
                Ready to Refer a Client or Buyer?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Contact us to get set up as an affiliate or to discuss a finder&apos;s fee arrangement.
              </p>
            </div>
            <Link
              href="/contact?topic=partner-program"
              className={`group inline-flex shrink-0 items-center gap-2 border border-primary bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-transparent hover:text-primary ${mono.className}`}
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
