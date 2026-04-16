"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Crosshair,
  FileText,
  Mail,
  Mountain,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { inter, mono } from "@/lib/fonts";
import {
  serviceDeliverables,
  serviceMetrics,
  serviceModules,
} from "@/lib/servicesData";
import { pastClients } from "@/lib/pastClientsData";

const serviceIcons = [ShieldCheck, BriefcaseBusiness, Crosshair, FileText, Mountain];
const serviceAccentColors = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
];

const workflow = [
  "Define land status, tenure history, and immediate field objective.",
  "Assemble the required GIS, imagery, terrain, and regulatory inputs.",
  "Produce mapped outputs, filing packages, and investor-facing material.",
  "Deliver a clean operating package for review, circulation, or submission.",
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"services" | "clients">("services");

  return (
    <div className={`min-h-screen w-full bg-background text-foreground ${inter.className}`}>
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_80%_at_50%_0%,#000_45%,transparent_100%)]" />

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-12">
        <header className="border-b border-border pb-16">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary ${mono.className}`}
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Platform
          </Link>

          <div className="mt-10 grid gap-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] xl:items-end">
            <div>
              <div className={`mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}>
                <ShieldAlert className="h-4 w-4" /> SERVICE_REGISTRY
              </div>
              <h1 className="max-w-5xl text-5xl font-extrabold uppercase tracking-tighter leading-[0.85] md:text-8xl">
                Full GIS
                <br />
                Service Registry
              </h1>
              <p className={`mt-8 max-w-3xl text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}>
                A field-ops view of the services available across tenure management,
                acquisition, mapping, permitting, terrain modeling, and investor support.
              </p>
            </div>

            <div className="grid gap-px border border-border bg-border sm:grid-cols-3 xl:grid-cols-1 xl:grid-rows-3">
              {[
                { label: "Modules", value: String(serviceMetrics.moduleCount).padStart(2, "0") },
                { label: "Service Lines", value: String(serviceMetrics.serviceLineCount).padStart(2, "0") },
                { label: "Outputs", value: String(serviceMetrics.deliverableCount).padStart(2, "0") },
              ].map((metric) => (
                <div key={metric.label} className="bg-card p-5">
                  <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                    {metric.label}
                  </div>
                  <div className="mt-3 text-3xl font-extrabold tracking-tight">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-16">
          <div className="mb-6 flex flex-wrap gap-3 border-b border-border pb-4">
            {[
              { id: "services", label: "Services" },
              { id: "clients", label: "Past Clients" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as "services" | "clients")}
                className={`border px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] transition-colors ${mono.className} ${
                  activeTab === tab.id
                    ? "border-primary bg-primary text-black"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "services" ? (
            <div className="grid gap-6">
              {serviceModules.map((module, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];
                const accentColor = serviceAccentColors[index % serviceAccentColors.length];

                return (
                  <motion.article
                    id={module.id}
                    key={module.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group relative overflow-hidden border border-border bg-card/90"
                  >
                    <div className="absolute inset-x-0 top-0 h-px opacity-80" style={{ backgroundColor: accentColor }} />
                    <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
                      <div className="border-b border-border bg-background/80 p-6 md:p-8 lg:border-r lg:border-b-0">
                        <div className={`flex items-center justify-between text-[10px] uppercase tracking-[0.22em] ${mono.className}`}>
                          <span style={{ color: accentColor }}>{module.code}</span>
                          <span className="text-muted-foreground">{String(module.services.length).padStart(2, "0")}_LINES</span>
                        </div>

                        <div className="mt-8 flex h-14 w-14 items-center justify-center border border-border bg-card" style={{ color: accentColor }}>
                          <Icon className="h-6 w-6" />
                        </div>

                        <h2 className="mt-8 text-3xl font-extrabold uppercase tracking-tight leading-none md:text-4xl">
                          {module.title}
                        </h2>
                        <p className={`mt-4 text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}>
                          {module.summary}
                        </p>

                        <div className="mt-8 border-t border-border pt-4">
                          <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                            Outcome
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-foreground/85">{module.outcome}</p>
                        </div>
                      </div>

                      <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[minmax(0,1.25fr)_minmax(220px,0.75fr)]">
                        <div>
                          <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                            Service Lines
                          </div>
                          <div className="mt-5 grid gap-3">
                            {module.services.map((service) => (
                              <div key={service} className="flex items-start gap-3 border-t border-border/70 pt-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0" style={{ backgroundColor: accentColor }} />
                                <p className="text-sm leading-relaxed text-foreground/90">{service}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                            Typical Outputs
                          </div>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {module.deliverables.map((deliverable) => (
                              <span
                                key={deliverable}
                                className={`border border-border px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                              >
                                {deliverable}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <motion.section
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-border bg-card/90"
            >
              <div className="grid gap-px bg-border lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)]">
                <div className="bg-background/80 p-6 md:p-8">
                  <div className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
                    <Building2 className="h-4 w-4" /> CLIENT_ARCHIVE
                  </div>
                  <h2 className="mt-6 text-4xl font-extrabold uppercase tracking-tight leading-none md:text-5xl">
                    Past Clients
                  </h2>
                  <p className={`mt-5 text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}>
                    Selected companies, municipalities, institutions, and private clients supported across GIS, mapping, land, and reporting work.
                  </p>

                  <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
                    <div className="bg-card p-4">
                      <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                        Listed Clients
                      </div>
                      <div className="mt-2 text-3xl font-extrabold tracking-tight">
                        + {String(pastClients.length).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="bg-card p-4">
                      <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                        Website Field
                      </div>
                      <div className="mt-2 text-3xl font-extrabold tracking-tight">READY</div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-px bg-border">
                  {pastClients.map((client, index) => (
                    <div
                      key={client.name}
                      className="grid gap-4 bg-card px-5 py-5 md:grid-cols-[72px_minmax(0,1fr)_auto] md:px-6"
                    >
                      <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <div className="text-lg font-extrabold uppercase tracking-tight text-white md:text-xl">
                          {client.name}
                        </div>
                        {client.notes && (
                          <p className={`mt-2 text-xs uppercase tracking-[0.15em] leading-relaxed text-muted-foreground md:text-sm ${mono.className}`}>
                            {client.notes}
                          </p>
                        )}
                      </div>
                      <div className="flex items-start md:justify-end">
                        {client.url ? (
                          <a
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 border border-primary px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-black ${mono.className}`}
                          >
                            Visit <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ) : (
                          <span className={`inline-flex items-center border border-border px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                            Link Pending
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </section>

        <section className="mt-16 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="border border-border bg-card p-6 md:p-8">
            <div className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
              Delivery Chain
            </div>
            <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight">
              Operational Flow
            </h2>
            <div className="mt-8 grid gap-3">
              {workflow.map((step, index) => (
                <div key={step} className="flex items-start gap-4 border-t border-border pt-4 first:border-t-0 first:pt-0">
                  <div className={`min-w-12 text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-background p-6 md:p-8">
            <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
              Output Index
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {serviceDeliverables.map((deliverable) => (
                <span
                  key={deliverable}
                  className={`border border-border px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                >
                  {deliverable}
                </span>
              ))}
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <div className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
                Next Action
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                Need a tailored scope, a property review, or a field-ready mapping
                package? Open a direct channel and outline the land position, region,
                or exploration objective.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 border border-primary px-4 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black"
              >
                <Mail className="h-4 w-4" />
                Start Contact Protocol
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
