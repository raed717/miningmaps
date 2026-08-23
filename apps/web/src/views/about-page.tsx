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
  FileText,
  Download,
  ExternalLink,
  Award,
  CheckCircle2,
  Globe,
  Building2,
  Lock,
  Scale,
  Car,
  X,
  Eye,
  FileCheck,
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
    degree: "UBC degree Geography (GIS) 2006",
    image: "/images/general/University%20of%20British%20Columbia.jpg",
    url: "https://www.ubc.ca/",
  },
  {
    institution: "Real Estate Institute of British Columbia (RIBC)",
    degree: "Professional Studies",
    image:
      "/images/general/Real%20Estate%20Institute%20of%20British%20Columbia.png",
    url: "https://www.reibc.org/",
  },
];

const insuranceDetails = {
  policyHolder: "Adamson Geomatics Ltd",
  broker: "Zensurance Inc.",
  underwriter: "CFC Underwriting Limited (100% Lloyd's Underwriters)",
  referenceNumber: "7693234",
  territorialScope: "Worldwide",
  coverageHighlights: [
    {
      title: "Professional Liability (E&O)",
      limit: "CAD $2,000,000",
      subtext: "Per claim & in the aggregate",
      desc: "Full civil liability and errors & omissions protection including contract breach, sub-contractor vicarious liability, and worldwide legal defense.",
      icon: ShieldCheck,
    },
    {
      title: "Commercial General Liability (CGL)",
      limit: "CAD $2,000,000",
      subtext: "Per occurrence & in the aggregate",
      desc: "Comprehensive coverage for third-party bodily injury, property damage, completed operations, and personal/advertising liability.",
      icon: Building2,
    },
    {
      title: "Pollution & Environmental Liability",
      limit: "CAD $2,000,000",
      subtext: "Sudden, accidental & gradual coverage",
      desc: "Full pollution liability coverage arising from professional geospatial, mineral tenure, and land consultation advice.",
      icon: Globe,
    },
    {
      title: "Non-Owned & Hired Automobile (SPF No. 6)",
      limit: "CAD $1,000,000",
      subtext: "Third-party liability + hired auto damage",
      desc: "Legal protection for vehicles operated under contract or hired during field operations across Canada and the USA.",
      icon: Car,
    },
  ],
  coveredItems: [
    {
      title: "Errors & Omissions (E&O)",
      limit: "CAD $2,000,000",
      detail: "Full civil liability cover defending claims brought anywhere in the world.",
    },
    {
      title: "Contractual Liability",
      limit: "CAD $2,000,000",
      detail: "Unambiguous protection for voluntary contracts and service agreements.",
    },
    {
      title: "Sub-Contractor Vicarious Liability",
      limit: "CAD $2,000,000",
      detail: "Coverage extends to field partners and specialized sub-contractors.",
    },
    {
      title: "Intellectual Property Rights Infringement",
      limit: "CAD $2,000,000",
      detail: "Legal costs, damages, and settlements for copyright/trademark claims.",
    },
    {
      title: "Regulatory Costs & Legal Fines",
      limit: "CAD $2,000,000",
      detail: "Coverage for statutory compliance inquiries, formal hearings, and defense.",
    },
    {
      title: "Loss Mitigation & Court Costs",
      limit: "CAD $2,000,000 / $100k",
      detail: "Direct loss mitigation expenses and expert witness / court attendance allowances.",
    },
  ],
  documents: [
    {
      title: "CFC & Lloyd's Underwriters Policy Quote & Terms",
      filename: "20260817 QUOTE 7693234.Pdf",
      url: "/documents/20260817%20QUOTE%207693234.Pdf",
      size: "211 KB",
      description: "Full terms, declarations, and coverage limits for Adamson Geomatics Ltd underwritten by 100% Lloyd's of London Underwriters.",
      type: "Policy Declarations",
    },
    {
      title: "Zensurance Confirmation of Active Coverage",
      filename: "Zensurance.pdf",
      url: "/documents/Zensurance.pdf",
      size: "88 KB",
      description: "Payment and policy activation certificate issued via Zensurance (Quote ID: 25442617).",
      type: "Broker Confirmation",
    },
  ],
};

const certifications = [
  {
    src: "/images/general/certifications/jd uc25 plenary submission certificates 74_page-0001.jpg",
    title: "Esri Technical Certification",
    issuer: "Esri (Environmental Systems Research Institute)",
    description: "Industry-standard certification in advanced geospatial analysis, cartographic design, and enterprise GIS implementations.",
  },
  {
    src: "/images/general/certifications/esriVideoScreenshot.png",
    title: "2025 Esri User Conference Plenary Presentation",
    issuer: "Featured in Jack Dangermond's Plenary Address",
    description: "Geospatial mapping and analytical work selected and spotlighted by Esri President Jack Dangermond during the global plenary presentation.",
  },
  {
    src: "/images/general/certifications/jd uc25 plenary submission certificates 73_page-0001.jpg",
    title: "Esri Professional Qualification",
    issuer: "Esri (Environmental Systems Research Institute)",
    description: "Specialized credentials recognizing expertise in geodatabase management, terrain modelling, and spatial data science.",
  },
];

export default function AboutPage() {
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
              <Terminal className="h-4 w-4" /> WHOIS // PORTFOLIO_OWNER
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`inline-flex items-center gap-2 border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-sm ${mono.className}`}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              FULLY INSURED // CAD $2,000,000 LIABILITY
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
                Chris
                <br />
                <span className="text-primary">Adamson, R.I.</span>
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
                <span className="border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 px-2 py-1 font-bold">
                  Insured Practice
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                GIS and land information specialist with extensive experience in property
                research, mineral tenure, mapping, land analysis, and resource
                sector projects throughout British Columbia, Canada, and internationally.
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
                INSURANCE_&_LIABILITY_COVERAGE
              </h2>
            </div>
            <span
              className={`rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400 ${mono.className}`}
            >
              ACTIVE & VERIFIED
            </span>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Adamson Geomatics Ltd maintains comprehensive commercial and professional liability insurance underwritten{" "}
            <strong className="text-foreground font-semibold">100% by Lloyd&apos;s of London Underwriters</strong> via{" "}
            <strong className="text-foreground font-semibold">CFC Underwriting Limited</strong> and{" "}
            <strong className="text-foreground font-semibold">Zensurance</strong>. All consulting, land acquisition, GIS mapping, and field operations carry robust worldwide protection.
          </p>

          {/* Quick Metrics Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {insuranceDetails.coverageHighlights.map((item, idx) => {
              const Icon = item.icon;
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
                        {insuranceDetails.territorialScope}
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
                <span className={`text-xs font-bold uppercase tracking-wider text-foreground ${mono.className}`}>
                  Policy Scope & Insuring Clauses (Ref: #{insuranceDetails.referenceNumber})
                </span>
              </div>
              <span className={`text-[10px] text-muted-foreground ${mono.className}`}>
                Security: 100% Lloyd&apos;s of London
              </span>
            </div>

            <div className="divide-y divide-border/60">
              {insuranceDetails.coveredItems.map((clause, i) => (
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
                    <span className={`inline-block text-xs font-bold text-primary ${mono.className}`}>
                      {clause.limit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Policy Documents Download Box */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {insuranceDetails.documents.map((doc, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-lg border border-border/80 bg-card/60 p-5 transition-colors hover:border-primary/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[9px] font-bold uppercase tracking-widest text-primary ${mono.className}`}>
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
                    View Document
                  </a>
                  <a
                    href={doc.url}
                    download={doc.filename}
                    className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download
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
              CERTIFICATIONS_&_INDUSTRY_RECOGNITION
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground mb-8">
            Demonstrated mastery in geographic information systems, spatial database design, and international recognition at the industry&apos;s leading geospatial venues.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card/50 transition-all duration-300 hover:border-primary/40"
              >
                <div
                  onClick={() => setSelectedImage(cert.src)}
                  className="relative h-52 w-full cursor-zoom-in overflow-hidden border-b border-border bg-black/60 p-4"
                >
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className={`inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black ${mono.className}`}>
                      <Eye className="h-3 w-3" /> Click to Zoom
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className={`text-[9px] font-bold uppercase tracking-widest text-primary ${mono.className}`}>
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
            ))}
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
              EDUCATION_&_BACKGROUND
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item, i) => {
              return (
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
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex h-full w-full items-center justify-center p-6">
                        <img src={item.image} alt={item.institution} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" />
                      </a>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-6">
                        <img src={item.image} alt={item.institution} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" />
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
              { icon: ShieldCheck, text: "CAD $2.0M Insured & Bonded" },
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

