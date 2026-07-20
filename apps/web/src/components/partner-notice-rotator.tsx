"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { mono } from "@/lib/fonts";

type NoticeMessage = {
  id: string;
  label: string;
  beforeLink: string;
  linkText: string;
  linkHref: string;
  afterLink: string;
};

const messages: NoticeMessage[] = [
  {
    id: "brokerage",
    label: "PARTNER BROKERAGE",
    beforeLink:
      "For non-mining real estate investments, including but not limited to multi-unit residential, commercial properties, and vacant land in the U.S., ",
    linkText: "contact us",
    linkHref: "/contact",
    afterLink: " to be connected with our partner brokerage.",
  },
  {
    id: "surveyors",
    label: "SURVEYOR NETWORK",
    beforeLink:
      "Through our trusted network of professional surveyors, we can help connect clients with qualified surveying professionals for a wide range of land survey requirements. ",
    linkText: "Contact us",
    linkHref: "/contact",
    afterLink: " to discuss your project and learn more.",
  },
];

export function PartnerNoticeRotator({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const currentMsg = messages[index];
  const totalChars =
    currentMsg.beforeLink.length +
    currentMsg.linkText.length +
    currentMsg.afterLink.length;

  // Typing effect loop
  useEffect(() => {
    setCharCount(0);

    const typingInterval = setInterval(() => {
      setCharCount((prev) => {
        if (prev >= totalChars) {
          clearInterval(typingInterval);
          return totalChars;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(typingInterval);
  }, [index, totalChars]);

  // Auto-switch message after typing finishes + pause
  useEffect(() => {
    if (charCount >= totalChars) {
      const pauseTimer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
      }, 5000);
      return () => clearTimeout(pauseTimer);
    }
  }, [charCount, totalChars]);

  // Compute sliced strings
  const beforeLen = currentMsg.beforeLink.length;
  const linkLen = currentMsg.linkText.length;

  const typedBefore = currentMsg.beforeLink.slice(
    0,
    Math.min(charCount, beforeLen),
  );

  const typedLinkCount = Math.max(0, Math.min(linkLen, charCount - beforeLen));
  const typedLink = currentMsg.linkText.slice(0, typedLinkCount);

  const typedAfterCount = Math.max(
    0,
    Math.min(currentMsg.afterLink.length, charCount - beforeLen - linkLen),
  );
  const typedAfter = currentMsg.afterLink.slice(0, typedAfterCount);

  const isDone = charCount >= totalChars;

  return (
    <div
      className={`relative max-w-md border border-primary/30 bg-card/80 p-4 backdrop-blur-sm ${mono.className} ${className}`}
    >
      <div className="mb-2.5 flex items-center justify-between border-b border-primary/20 pb-2 text-[9px] uppercase tracking-[0.2em] text-primary/80">
        <span className="flex items-center gap-1.5 font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {currentMsg.label}
        </span>
        <div className="flex items-center gap-1.5">
          {messages.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                setIndex(i);
              }}
              aria-label={`Switch to ${m.label}`}
              className={`h-1.5 transition-all ${
                i === index ? "w-5 bg-primary" : "w-2 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative min-h-[4.5rem] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="text-xs uppercase tracking-[0.18em] leading-relaxed text-zinc-100 md:text-sm"
          >
            <span>{typedBefore}</span>

            {typedLinkCount > 0 && (
              <Link
                href={currentMsg.linkHref}
                className="inline-flex items-center gap-1 font-bold text-primary underline underline-offset-4 transition-colors hover:text-secondary focus:outline-none"
              >
                {typedLink}
              </Link>
            )}

            {typedAfterCount > 0 && <span>{typedAfter}</span>}

            {/* Terminal Blinking Cursor */}
            <span
              className={`ml-0.5 inline-block h-3.5 w-1.5 align-middle bg-primary ${
                isDone ? "animate-pulse" : "opacity-100"
              }`}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
