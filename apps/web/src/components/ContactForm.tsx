"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { mono } from "@/lib/fonts";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { contactTranslations } from "@/lib/i18n/translations/contact";
import type { Locale } from "@/lib/i18n/types";

export default function ContactForm({ locale: overrideLocale }: { locale?: Locale }) {
  const { locale: contextLocale } = useI18n();
  const locale = overrideLocale || contextLocale || "en";
  const t = (contactTranslations[locale] || contactTranslations.en).form;

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  // When the form appeared; the server rejects impossibly fast submissions.
  const mountedAt = useRef(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    const body = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      phone: form.get("phone") as string,
      service: form.get("service") as string,
      message: form.get("message") as string,
      website: form.get("website") as string,
      elapsedMs: Date.now() - mountedAt.current,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || t.status.errorDefault);
        setStatus("error");
      }
    } catch {
      setErrorMsg(t.status.errorNetwork);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-5">
        {/* Name */}
        <div className="space-y-1.5">
          <Label htmlFor="contact-name">{t.labels.name}</Label>
          <Input
            id="contact-name"
            name="name"
            required
            placeholder={t.placeholders.name}
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor="contact-email">{t.labels.email}</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder={t.placeholders.email}
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <Label htmlFor="contact-phone">{t.labels.phone}</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder={t.placeholders.phone}
          />
        </div>

        {/* Service */}
        <div className="space-y-1.5">
          <Label htmlFor="contact-service">{t.labels.service}</Label>
          <Select id="contact-service" name="service" required defaultValue="">
            <option value="" disabled>
              {t.placeholders.serviceSelect}
            </option>
            {t.services.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <Label htmlFor="contact-message">{t.labels.message}</Label>
          <Textarea
            id="contact-message"
            name="message"
            required
            placeholder={t.placeholders.message}
          />
        </div>

        {/* Honeypot: hidden from humans, filled by bots */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />
      </div>

      <div className="space-y-3">
        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full gap-2 uppercase tracking-widest text-xs font-bold"
        >
          {status === "loading" ? (
            <>
              <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
              {t.buttons.sending}
            </>
          ) : (
            <>
              <Send className="h-3.5 w-3.5" />
              {t.buttons.submit}
            </>
          )}
        </Button>

        {status === "success" && (
          <div className="flex items-center gap-2 border border-secondary/40 bg-secondary/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-secondary">
            <CheckCircle className="h-4 w-4 shrink-0" />
            {t.status.success}
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errorMsg || t.status.errorDefault}
          </div>
        )}
      </div>

      <p
        className={`text-[9px] uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}
      >
        {t.labels.requiredNote}
      </p>
    </form>
  );
}
