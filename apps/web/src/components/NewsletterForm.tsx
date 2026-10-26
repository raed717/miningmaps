"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterForm({
  source = "footer",
  showIntro = true,
}: {
  source?: string;
  showIntro?: boolean;
}) {
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

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const body = {
      email: form.get("email") as string,
      company: form.get("company") as string,
      elapsedMs: Date.now() - mountedAt.current,
      source,
    };

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
        formEl.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
      {showIntro && (
        <div className="flex flex-col gap-1">
          <span className="font-bold text-foreground text-sm tracking-tight">
            Newsletter
          </span>
          <span className="text-[10px] normal-case tracking-wider">
            Field reports, new properties and project updates. No spam.
          </span>
        </div>
      )}

      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={`newsletter-email-${source}`} className="sr-only">
          Email address
        </label>
        <Input
          id={`newsletter-email-${source}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="normal-case tracking-normal"
        />
        {/* Honeypot: hidden from humans, filled by bots */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="gap-2 uppercase tracking-widest text-xs font-bold shrink-0"
        >
          {status === "loading" ? (
            <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : (
            <Mail className="h-3.5 w-3.5" />
          )}
          Subscribe
        </Button>
      </div>

      <div aria-live="polite">
        {status === "success" && (
          <div className="flex items-center gap-2 border border-secondary/40 bg-secondary/10 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-secondary">
            <CheckCircle className="h-4 w-4 shrink-0" />
            Subscribed. Thanks for joining.
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-primary">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errorMsg || "Failed to subscribe. Please try again."}
          </div>
        )}
      </div>
    </form>
  );
}
