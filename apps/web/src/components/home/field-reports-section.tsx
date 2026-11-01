"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { mono } from "@/lib/fonts";
import { useI18n } from "@/lib/i18n/context";
import { homeTranslations } from "@/lib/i18n/translations/home";

function FieldReportItem({
  report,
  index,
  readMoreText,
  readLessText,
  presentationLinkText,
}: {
  report: {
    text: string;
    author: string;
    role: string;
    link?: string;
  };
  index: number;
  readMoreText: string;
  readLessText: string;
  presentationLinkText: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cleanText = report.text.trim().replace(/\s+/g, " ");
  const isLong = cleanText.length > 280;

  const displayText =
    isLong && !isExpanded
      ? (() => {
          const slice = cleanText.slice(0, 260);
          const lastSpace = slice.lastIndexOf(" ");
          const trimmed = (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).replace(
            /\.+$/,
            ""
          );
          return `${trimmed}...`;
        })()
      : cleanText;

  return (
    <motion.div
      key={report.author}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex flex-col justify-between border-l-4 border-primary py-2 pl-6"
    >
      <div>
        <p className="mb-2 text-lg font-medium leading-relaxed text-zinc-100 md:text-xl">
          "{displayText}"
        </p>
        {isLong && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className={`mb-6 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:text-white focus:outline-none ${mono.className}`}
          >
            {isExpanded ? readLessText : readMoreText}
          </button>
        )}
      </div>

      <div className={!isLong ? "mt-4" : ""}>
        <div
          className={`text-xs uppercase tracking-widest text-[#666] ${mono.className}`}
        >
          <strong className="mb-1 block text-white">{report.author}</strong>
          {report.role}
        </div>
        {report.link && (
          <a
            href={report.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-primary hover:text-primary/80 transition-colors"
          >
            {presentationLinkText}
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function FieldReportsSection() {
  const { locale } = useI18n();
  const t = (homeTranslations[locale] || homeTranslations.en).fieldReports;

  return (
    <section className="relative z-10 bg-background px-4 py-32 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-24">
        <div className="lg:col-span-1">
          <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tighter md:text-5xl">
            {t.title}
            <br />
            {t.titleHighlight}
          </h2>
          <p
            className={`text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}
          >
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-2">
          {t.reports.map((report, index) => (
            <FieldReportItem
              key={report.author}
              report={report}
              index={index}
              readMoreText={t.readMore}
              readLessText={t.readLess}
              presentationLinkText={t.presentationLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
