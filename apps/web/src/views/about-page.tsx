"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Crosshair,
  Map,
  MapPin,
  Shield,
  Target,
  Terminal,
  Cpu,
  ShieldCheck,
  Download,
  ExternalLink,
  Award,
  CheckCircle2,
  Globe,
  Building2,
  Scale,
  Car,
  X,
  Eye,
  Code2,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { inter, mono } from "@/lib/fonts";
import { useI18n } from "@/lib/i18n/context";
import { aboutTranslations } from "@/lib/i18n/translations/about";
import type { Locale } from "@/lib/i18n/types";

const CERT_IMAGES = [
  "/images/general/certifications/jd uc25 plenary submission certificates 74_page-0001.jpg",
  "/images/general/certifications/esriVideoScreenshot.png",
  "/images/general/certifications/jd uc25 plenary submission certificates 73_page-0001.jpg",
];

const COVERAGE_ICONS = [ShieldCheck, Building2, Globe, Car];

const APPROACH_ICONS = [MapPin, Map, ShieldCheck];

export default function AboutPage({ locale: overrideLocale }: { locale?: Locale }) {
  const { locale: contextLocale } = useI18n();
  const locale = overrideLocale || contextLocale || "en";
  const t = aboutTranslations[locale] || aboutTranslations.en;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        {/* Hero / Intro Section */}
        <div className="mb-16 md:mb-24">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
            >
              <Terminal className="h-4 w-4" /> {t.hero.whois}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`inline-flex items-center gap-2 border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-sm ${mono.className}`}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              {t.hero.insuredBadge}
            </motion.div>
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
            {/* Profile Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="shrink-0"
            >
              <div className="relative mx-auto h-40 w-40 overflow-hidden border border-primary/30 bg-black md:h-52 md:w-52">
                <img
                  src="/images/general/avatar.jpg"
                  alt="Chris Adamson"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute -inset-px border border-primary/10" />
              </div>
            </motion.div>

            {/* Name & Title */}
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="max-w-3xl text-4xl font-extrabold uppercase tracking-tighter leading-[0.88] md:text-6xl"
              >
                {t.hero.name}
                <br />
                <span className="text-primary">{t.hero.titleSuffix}</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className={`mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}
              >
                <span className="border border-border bg-card px-2 py-1">
                  {t.hero.roles.gis}
                </span>
                <span className="border border-border bg-card px-2 py-1">
                  {t.hero.roles.landAnalyst}
                </span>
                <span className="border border-border bg-card px-2 py-1">
                  {t.hero.roles.mapping}
                </span>
                <span className="border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 px-2 py-1 font-bold">
                  {t.hero.roles.insured}
                </span>
              </motion.div>

              {t.hero.bioParagraphs.slice(0, 2).map((p, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base first-of-type:mt-6"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          {t.hero.bioParagraphs.slice(2).map((p, idx) => (
            <motion.p
              key={idx + 2}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.05 }}
              className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base first-of-type:mt-6"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Insurance & Liability Protection Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-t border-border pt-12 md:mb-24"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <h2
                className={`text-xs font-bold tracking-[0.2em] text-emerald-400 ${mono.className}`}
              >
                {t.insurance.sectionTitle}
              </h2>
            </div>
            <span
              className={`rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400 ${mono.className}`}
            >
              {t.insurance.statusBadge}
            </span>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {t.insurance.intro.prefix}
            <strong className="text-foreground font-semibold">
              {t.insurance.intro.lloydsText}
            </strong>
            {t.insurance.intro.viaText}
            <strong className="text-foreground font-semibold">
              {t.insurance.intro.cfcText}
            </strong>
            {t.insurance.intro.andText}
            <strong className="text-foreground font-semibold">
              {t.insurance.intro.zensuranceText}
            </strong>
            {t.insurance.intro.suffix}
          </p>

          {/* Quick Metrics Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.insurance.cards.map((item, idx) => {
              const Icon = COVERAGE_ICONS[idx % COVERAGE_ICONS.length];
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
                >
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span
                        className={`text-[9px] uppercase tracking-widest text-muted-foreground ${mono.className}`}
                      >
                        {t.insurance.territorialScope}
                      </span>
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <div className="mt-2 text-xl font-extrabold text-primary md:text-2xl">
                      {item.limit}
                    </div>
                    <p
                      className={`text-[10px] uppercase tracking-wider text-muted-foreground ${mono.className}`}
                    >
                      {item.subtext}
                    </p>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Coverage Table */}
          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card/40">
            <div className="border-b border-border bg-muted/40 px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Scale className="h-4 w-4 text-primary" />
                <span
                  className={`text-xs font-bold uppercase tracking-wider text-foreground ${mono.className}`}
                >
                  {t.insurance.table.headerTitle}
                </span>
              </div>
              <span className={`text-[10px] text-muted-foreground ${mono.className}`}>
                {t.insurance.table.securityNote}
              </span>
            </div>

            <div className="divide-y divide-border/60">
              {t.insurance.table.items.map((clause, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between hover:bg-muted/20 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-tight text-foreground">
                        {clause.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {clause.detail}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span
                      className={`inline-block text-xs font-bold text-primary ${mono.className}`}
                    >
                      {clause.limit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Policy Documents Download Box */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {t.insurance.documents.items.map((doc, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-lg border border-border/80 bg-card/60 p-5 transition-colors hover:border-primary/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[9px] font-bold uppercase tracking-widest text-primary ${mono.className}`}
                    >
                      {doc.type}
                    </span>
                    <span className={`text-[9px] text-muted-foreground ${mono.className}`}>
                      {doc.size}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-tight text-foreground">
                    {doc.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {doc.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-black shadow hover:bg-primary/90 transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    {t.insurance.documents.viewDoc}
                  </a>
                  <a
                    href={doc.url}
                    download={doc.filename}
                    className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {t.insurance.documents.download}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-t border-border pt-12 md:mb-24"
        >
          <div className="mb-4 flex items-center gap-3">
            <Award className="h-5 w-5 text-primary" />
            <h2
              className={`text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
            >
              {t.certifications.sectionTitle}
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground mb-8">
            {t.certifications.intro}
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {t.certifications.items.map((cert, idx) => {
              const imageSrc = CERT_IMAGES[idx] || CERT_IMAGES[0];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card/50 transition-all duration-300 hover:border-primary/40"
                >
                  <div
                    onClick={() => setSelectedImage(imageSrc)}
                    className="relative h-52 w-full cursor-zoom-in overflow-hidden border-b border-border bg-black/60 p-4"
                  >
                    <img
                      src={imageSrc}
                      alt={cert.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black ${mono.className}`}
                      >
                        <Eye className="h-3 w-3" /> {t.certifications.zoomHint}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-widest text-primary ${mono.className}`}
                      >
                        {cert.issuer}
                      </span>
                      <h3 className="mt-1 text-sm font-bold uppercase tracking-tight text-white">
                        {cert.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Education & Professional Background */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-t border-border pt-12 md:mb-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <Cpu className="h-5 w-5 text-primary" />
            <h2
              className={`text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
            >
              {t.education.sectionTitle}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {t.education.items.map((item, i) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-border bg-card/50 p-0 transition-colors hover:border-primary/40"
              >
                <div className="relative h-44 w-full overflow-hidden border-b border-border bg-black md:h-56">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-full w-full items-center justify-center p-6"
                    >
                      <img
                        src={item.image}
                        alt={item.institution}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </a>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-6">
                      <img
                        src={item.image}
                        alt={item.institution}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold uppercase tracking-tight text-white">
                    {item.institution}
                  </h3>
                  <p
                    className={`mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                  >
                    {item.degree}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Areas of Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-t border-border pt-12 md:mb-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <Target className="h-5 w-5 text-primary" />
            <h2
              className={`text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
            >
              {t.expertise.sectionTitle}
            </h2>
          </div>

          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {t.expertise.items.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3 bg-background px-5 py-4 transition-colors hover:bg-card"
              >
                <Crosshair className="h-3 w-3 shrink-0 text-primary/60" />
                <span
                  className={`text-xs uppercase tracking-[0.16em] text-muted-foreground ${mono.className}`}
                >
                  {area}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Approach */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border pt-12"
        >
          <div className="mb-8 flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary" />
            <h2
              className={`text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
            >
              {t.approach.sectionTitle}
            </h2>
          </div>

          <div className="border-l-2 border-primary/40 pl-6 md:pl-8">
            {t.approach.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base first:mt-0"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {t.approach.badges.map((badgeText, idx) => {
              const Icon = APPROACH_ICONS[idx % APPROACH_ICONS.length];
              return (
                <div
                  key={badgeText}
                  className={`flex items-center gap-2 border border-border bg-card px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                >
                  <Icon className="h-3 w-3 text-primary" />
                  {badgeText}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Platform Architecture & Software Engineering */}
        <motion.div
          id="platform-engineering"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 border-t border-border pt-12"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Code2 className="h-5 w-5 text-primary" />
              <h2
                className={`text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
              >
                {t.engineering.sectionTitle}
              </h2>
            </div>

            <span
              className={`inline-flex items-center gap-1.5 border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary ${mono.className}`}
            >
              {t.engineering.dossierBadge}
            </span>
          </div>

          <div className="group relative overflow-hidden border border-border bg-card/60 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
            <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20 pointer-events-none">
              <Cpu className="h-32 w-32" />
            </div>

            <div className="grid gap-8 lg:grid-cols-[220px_1fr] items-start">
              {/* Avatar Column */}
              <div className="flex flex-col items-center lg:items-start gap-4">
                <div className="relative aspect-square w-44 md:w-52 overflow-hidden border-2 border-border bg-black/80 shadow-lg transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-primary/60">
                  <img
                    src="https://res.cloudinary.com/dfytfu2jq/image/upload/v1791286564/wmremove-transformed_mz3jhx.png"
                    alt="Raed Guembri - Software Architect Engineer"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div
                  className={`flex items-center gap-2 border border-secondary/40 bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary ${mono.className}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                  {t.engineering.statusBadge}
                </div>
              </div>

              {/* Details Column */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.22em] text-primary ${mono.className}`}
                    >
                      {t.engineering.roleTag}
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white">
                    {t.engineering.title}
                  </h3>

                  <p
                    className={`mt-1 text-xs font-semibold uppercase tracking-wider text-primary ${mono.className}`}
                  >
                    {t.engineering.subtitle}
                  </p>

                  <div className="mt-4 border-l-2 border-primary/60 pl-4 py-2 bg-background/50">
                    <p
                      className={`text-xs md:text-sm font-medium italic leading-relaxed text-zinc-200 ${mono.className}`}
                    >
                      {t.engineering.quote}
                    </p>
                  </div>

                  <p className="mt-4 text-xs md:text-sm leading-relaxed text-muted-foreground">
                    {t.engineering.description}
                  </p>

                  <div className="mt-5 rounded-md border border-secondary/30 bg-secondary/10 p-3">
                    <div
                      className={`text-[10px] font-bold uppercase tracking-wider text-secondary mb-1 flex items-center gap-1.5 ${mono.className}`}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" /> {t.engineering.availabilityHeading}
                    </div>
                    <p className="text-xs text-foreground/90">
                      {t.engineering.availabilityText}
                    </p>
                  </div>
                </div>

                {/* Social & Contact Buttons */}
                <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-2.5">
                  <a
                    href="https://raed.guembri.tn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 border border-primary bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-primary ${mono.className}`}
                  >
                    <Globe className="h-3.5 w-3.5" />
                    {t.engineering.buttons.portfolio}
                    <ExternalLink className="h-3 w-3" />
                  </a>

                  <a
                    href="https://github.com/raed717"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-white ${mono.className}`}
                  >
                    <Github className="h-3.5 w-3.5 text-primary" />
                    {t.engineering.buttons.github}
                  </a>

                  <a
                    href="https://www.linkedin.com/in/raed-guembri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-white ${mono.className}`}
                  >
                    <Linkedin className="h-3.5 w-3.5 text-primary" />
                    {t.engineering.buttons.linkedin}
                  </a>

                  <a
                    href="mailto:raed.guembri99@gmail.com"
                    className={`inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:border-secondary hover:text-secondary ${mono.className}`}
                  >
                    <Mail className="h-3.5 w-3.5 text-secondary" />
                    {t.engineering.buttons.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Certification view"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-md border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
