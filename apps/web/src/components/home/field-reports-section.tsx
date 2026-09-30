"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { mono } from "@/lib/fonts";

const fieldReports = [
  {
    text: `
    I have had the opportunity over the last several years to work closely with Chris on a number of matters, some of which were very complex in nature and required a careful analysis of the approach to take in order to achieve the desired result. 
He is very intelligent, hardworking, seeks solutions and follows up on various matters including staying on top of developments and what needs to be carried out with respect to files and matters that he deals with. 
He has a very solid understanding of the issues and challenges on matters that arise and I found him excellent to work with and he develops a thorough knowledge of the matter that he is working on. 
I am pleased to be able to provide a reference letter for him and I would be pleased to expand on the positive experiences that I have had working with him if comments or questions need to be followed up further. 
    `,
    author: "Brian Abraham",
    role: "K.C., P.Geo",
  },
  {
    text: `
    Hi Chris, 
Congratulations on having your image selected
 for the 2025 Esri User Conference!  Your image was displayed in Jack
 Dangermond's Plenary Presentation.  Well
 done!  
 We would like to sincerely thank you for your work
 and look forward to your future submissions.
`,
    author: "Esri",
    role: "Esri Plenary Image Submission Team",
    link: "https://mediaspace.esri.com/media/1_2rc7uxir?kalturaStartTime=563",
  },
];

function FieldReportItem({
  report,
  index,
}: {
  report: (typeof fieldReports)[number];
  index: number;
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
            {isExpanded ? "read less" : "read more.."}
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
            Jack Dangermond's Plenary Presentation.
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function FieldReportsSection() {
  return (
    <section className="relative z-10 bg-background px-4 py-32 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-24">
        <div className="lg:col-span-1">
          <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tighter md:text-5xl">
            Field
            <br />
            Reports
          </h2>
          <p
            className={`text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}
          >
            Endorsements from executives, geologists, and industry leaders.
            Verified intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-2">
          {fieldReports.map((report, index) => (
            <FieldReportItem
              key={report.author}
              report={report}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
