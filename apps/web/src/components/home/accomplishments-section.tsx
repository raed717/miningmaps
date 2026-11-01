"use client";

import { motion } from "motion/react";
import { Crosshair, FileSearch, MapPin, Scale, Shield } from "lucide-react";
import { mono } from "@/lib/fonts";
import { useI18n } from "@/lib/i18n/context";
import { homeTranslations } from "@/lib/i18n/translations/home";

const icons = [Scale, FileSearch, MapPin, Shield, Crosshair];

export function AccomplishmentsSection() {
  const { locale } = useI18n();
  const t = (homeTranslations[locale] || homeTranslations.en).accomplishments;

  return (
    <section className="relative overflow-hidden bg-background px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex flex-col">
          <span
            className={`mb-2 text-xs font-bold uppercase tracking-widest text-primary ${mono.className}`}
          >
            {t.badge}
          </span>
          <h2 className="text-3xl font-black uppercase tracking-tighter md:text-4xl">
            {t.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {t.intro1}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {t.intro2}
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {t.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border-l-2 border-primary/30 pl-6 transition-colors hover:border-primary"
              >
                <div className="flex items-start gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>
                    <div>
                      <span
                        className={`text-[10px] uppercase tracking-[0.2em] text-primary ${mono.className}`}
                      >
                        {t.keyAreasLabel}
                      </span>
                      <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                        {item.areas.map((area) => (
                          <li
                            key={area}
                            className={`flex items-center gap-1.5 text-xs text-muted-foreground ${mono.className}`}
                          >
                            <span className="text-primary/60">&gt;</span>
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
