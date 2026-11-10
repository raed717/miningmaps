"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Facebook, Linkedin, Mail, Share2, X as CloseIcon } from "lucide-react";
import { mono } from "@/lib/fonts";

type ShareLabels = {
  button: string;
  title: string;
  message: string;
  copyLink: string;
  copied: string;
  email: string;
  more: string;
  close: string;
};

type Props = {
  /** Site-relative path of the project page, e.g. "/fr/projects/bc-009". */
  path: string;
  title: string;
  region?: string;
  image?: string;
  labels: ShareLabels;
  className?: string;
};

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers/contexts without the async clipboard API.
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}

/** Share button for a project card; opens a share popup (copy link, social networks, email, native share). */
export function ShareProjectButton({ path, title, region, image, labels, className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const url = typeof window === "undefined" ? path : `${window.location.origin}${path}`;
  const message = `${labels.message}: ${title}`;

  useEffect(() => {
    setMounted(true);
    setCanNativeShare(typeof navigator.share === "function");
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const encodedUrl = encodeURIComponent(url);
  const encodedMessage = encodeURIComponent(message);
  const targets = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <Facebook className="h-4 w-4" />,
    },
    {
      label: "X",
      href: `https://x.com/intent/tweet?text=${encodedMessage}&url=${encodedUrl}`,
      icon: <XLogo className="h-4 w-4" />,
    },
    {
      label: labels.email,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${message}\n${url}`)}`,
      icon: <Mail className="h-4 w-4" />,
    },
  ];

  const stop = (e: React.SyntheticEvent) => {
    // The card is wrapped by a full-size link; don't let share clicks navigate.
    e.preventDefault();
    e.stopPropagation();
  };

  const popup = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-project-title"
            className={`relative w-full max-w-md border border-primary bg-card shadow-[0_0_40px_rgba(0,0,0,0.6)] ${mono.className}`}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-accent bg-background px-4 py-3">
              <span
                id="share-project-title"
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary"
              >
                <Share2 className="h-3 w-3" />
                {labels.title}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label={labels.close}
                className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-5 p-5">
              <div className="flex gap-4">
                {image && (
                  <img
                    src={image}
                    alt=""
                    className="h-16 w-20 shrink-0 border border-accent object-cover"
                  />
                )}
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {labels.message}
                  </p>
                  <p className="mt-1 truncate text-sm font-bold uppercase text-white">{title}</p>
                  {region && (
                    <p className="mt-0.5 truncate text-[10px] uppercase tracking-widest text-primary">
                      {region}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex border border-border">
                <input
                  readOnly
                  value={url}
                  aria-label={labels.copyLink}
                  onFocus={(e) => e.currentTarget.select()}
                  className="min-w-0 flex-1 bg-background px-3 py-2 text-xs text-muted-foreground outline-none"
                />
                <button
                  type="button"
                  onClick={async () => setCopied(await copyText(url))}
                  className={`flex shrink-0 items-center gap-1.5 border-l border-border px-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    copied ? "bg-primary text-black" : "text-primary hover:bg-primary hover:text-black"
                  }`}
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? labels.copied : labels.copyLink}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {targets.map((target) => (
                  <a
                    key={target.label}
                    href={target.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 border border-border px-2 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {target.icon}
                    {target.label}
                  </a>
                ))}
              </div>

              {canNativeShare && (
                <button
                  type="button"
                  onClick={() => {
                    navigator.share({ title, text: message, url }).catch(() => {});
                  }}
                  className="flex w-full items-center justify-center gap-2 border border-border py-2.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  {labels.more}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={`${labels.button}: ${title}`}
        title={labels.button}
        onClick={(e) => {
          stop(e);
          setOpen(true);
        }}
        className={`relative z-20 flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary ${className}`}
      >
        <Share2 className="h-4 w-4" />
      </button>
      {/* Portal: card ancestors use transforms (motion layout), which would trap a fixed overlay. */}
      {mounted && createPortal(popup, document.body)}
    </>
  );
}
