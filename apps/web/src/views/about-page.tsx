"use client";

import { motion } from "motion/react";
import {
  Book,
  Crosshair,
  GraduationCap,
  Map,
  MapPin,
  Shield,
  Target,
  Terminal,
  Cpu,
} from "lucide-react";
import { inter, mono } from "@/lib/fonts";

const expertiseAreas = [
  "Geographic Information Systems (GIS)",
  "Property Valuation & Assessment Appeals",
  "Property Due Diligence",
  "Title Searches & Ownership Research",
  "Boundary Disputes & Parcel Corrections",
  "Mineral Claim Research & Staking Support",
  "Geological & Exploration Mapping",
  "LiDAR and Terrain Analysis",
  "Survey Plan Interpretation & Georeferencing",
  "Technical Mapping & Reporting",
];

const education = [
  {
    institution: "University of British Columbia (UBC)",
    degree: "Degree in Geography",
    icon: GraduationCap,
  },
  {
    institution: "University of Waterloo",
    degree: "Studies in Mapping and Spatial Analysis",
    icon: Map,
  },
  {
    institution: "Real Estate Institute of British Columbia (RIBC)",
    degree: "Professional Studies",
    icon: Book,
  },
];

export default function AboutPage() {
  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden bg-background text-foreground ${inter.className}`}
    >
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8 md:py-28">
        {/* Hero / Intro Section */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-5 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
          >
            <Terminal className="h-4 w-4" /> WHOIS // PORTFOLIO_OWNER
          </motion.div>

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
            {/* Profile Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="shrink-0"
            >
              <div className="relative mx-auto h-40 w-40 overflow-hidden border border-primary/30 bg-black md:h-52 md:w-52">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-transparent">
                  <svg
                    viewBox="0 0 200 200"
                    className="h-full w-full p-4 opacity-80"
                  >
                    <defs>
                      <clipPath id="hexClip">
                        <polygon points="100,10 170,55 170,145 100,190 30,145 30,55" />
                      </clipPath>
                    </defs>
                    <polygon
                      points="100,10 170,55 170,145 100,190 30,145 30,55"
                      fill="none"
                      stroke="currentColor"
                      className="text-primary/30"
                      strokeWidth="1"
                    />
                    <g clipPath="url(#hexClip)">
                      <circle
                        cx="100"
                        cy="80"
                        r="35"
                        fill="none"
                        stroke="currentColor"
                        className="text-primary/50"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M50 175 Q100 110 150 175"
                        fill="none"
                        stroke="currentColor"
                        className="text-primary/50"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="100"
                        y1="115"
                        x2="100"
                        y2="150"
                        stroke="currentColor"
                        className="text-primary/30"
                        strokeWidth="1"
                      />
                      <line
                        x1="70"
                        y1="130"
                        x2="130"
                        y2="130"
                        stroke="currentColor"
                        className="text-primary/20"
                        strokeWidth="1"
                      />
                    </g>
                    {/* Scanning line */}
                    <motion.rect
                      x="28"
                      y="10"
                      width="144"
                      height="2"
                      fill="currentColor"
                      className="text-primary"
                      opacity="0.4"
                      animate={{ y: [10, 178, 10] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.03)_50%)] bg-[size:100%_4px] pointer-events-none" />
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
                Chris
                <br />
                <span className="text-primary">Adamson</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className={`mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}
              >
                <span className="border border-border bg-card px-2 py-1">
                  GIS Specialist
                </span>
                <span className="border border-border bg-card px-2 py-1">
                  Land Analyst
                </span>
                <span className="border border-border bg-card px-2 py-1">
                  Mapping Professional
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                GIS and land information specialist with experience in property
                research, mineral tenure, mapping, land analysis, and resource
                sector projects throughout British Columbia and Canada.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                With a background in geography, mapping, and spatial analysis,
                Chris works at the intersection of land ownership, property
                valuation, mineral exploration, and geographic information
                systems (GIS). His work combines technical mapping, historical
                research, survey interpretation, and data analysis to help
                clients make informed decisions regarding land, property, and
                resource opportunities.
              </motion.p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Chris has supported a wide range of projects including property due
            diligence, title research, assessment appeals, mineral claim
            investigations, exploration targeting, boundary analysis, and parcel
            correction initiatives. His approach focuses on combining accurate
            data, practical field knowledge, and modern GIS technologies to
            solve complex land-related challenges.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Over the years, Chris has worked with property owners, prospectors,
            exploration companies, investors, and resource industry
            professionals, providing mapping, research, and analytical services
            tailored to each project&apos;s unique requirements.
          </motion.p>
        </div>

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
              EDUCATION_&_BACKGROUND
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {education.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group border border-border bg-card/50 p-5 transition-colors hover:border-primary/40"
                >
                  <Icon className="mb-4 h-6 w-6 text-primary/60" />
                  <h3 className="text-sm font-bold uppercase tracking-tight text-white">
                    {item.institution}
                  </h3>
                  <p
                    className={`mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                  >
                    {item.degree}
                  </p>
                </motion.div>
              );
            })}
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
              AREAS_OF_EXPERTISE
            </h2>
          </div>

          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {expertiseAreas.map((area, i) => (
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
              PROFESSIONAL_APPROACH
            </h2>
          </div>

          <div className="border-l-2 border-primary/40 pl-6 md:pl-8">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Every project begins with the same objective: delivering reliable
              information that clients can confidently use to make decisions.
              Whether supporting a property owner with a boundary issue,
              assisting with a tax appeal, researching land ownership, or
              helping evaluate mineral opportunities, the focus remains on
              accuracy, transparency, and practical results.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              By combining technical GIS expertise with a strong understanding
              of land records, mapping systems, and property research, Chris
              provides solutions that bridge the gap between complex spatial
              data and real-world decision making.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { icon: MapPin, text: "Serving British Columbia & Canada" },
              { icon: Map, text: "20+ Years of Experience" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className={`flex items-center gap-2 border border-border bg-card px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                >
                  <Icon className="h-3 w-3 text-primary" />
                  {item.text}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
