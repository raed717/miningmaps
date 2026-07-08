"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { mono } from "@/lib/fonts";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const serviceOptions = [
  "GIS Mapping",
  "Claim Staking",
  "LiDAR Surveys",
  "Leapfrog 3D Modelling",
  "Geological Mapping / Geological Opinions (QP Geo)",
  "Mining Property Maps",
  "Property Appraisals",
  "Digital Elevation Models (DEM)",
  "Crown Grant / Land Title Research",
  "Tax Appeals",
  "Other / General",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-5">
        {/* Name */}
        <div className="space-y-1.5">
          <Label htmlFor="contact-name">Name *</Label>
          <Input
            id="contact-name"
            name="name"
            required
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor="contact-email">Email *</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <Label htmlFor="contact-phone">Phone</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Service */}
        <div className="space-y-1.5">
          <Label htmlFor="contact-service">Service *</Label>
          <Select id="contact-service" name="service" required defaultValue="">
            <option value="" disabled>
              Select a service...
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <Label htmlFor="contact-message">Message *</Label>
          <Textarea
            id="contact-message"
            name="message"
            required
            placeholder="Describe your project or inquiry..."
          />
        </div>
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
              Sending...
            </>
          ) : (
            <>
              <Send className="h-3.5 w-3.5" />
              Send Inquiry
            </>
          )}
        </Button>

        {status === "success" && (
          <div className="flex items-center gap-2 border border-secondary/40 bg-secondary/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-secondary">
            <CheckCircle className="h-4 w-4 shrink-0" />
            Message sent successfully. We&rsquo;ll be in touch soon.
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errorMsg || "Failed to send. Please try again."}
          </div>
        )}
      </div>

      <p
        className={`text-[9px] uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}
      >
        All fields marked with * are required. Your data is transmitted securely
        and will only be used to respond to your inquiry.
      </p>
    </form>
  );
}
