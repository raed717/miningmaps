"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  children: ReactNode;
  /** Plain text of the summary; re-measures overflow when it changes. */
  text: string;
  readMore: string;
  showLess: string;
  className?: string;
};

/**
 * Clamps a card summary to 4 lines and shows a "Read more" toggle only when the text actually overflows.
 * The toggle sits above the card's full-size link (z-20) and doesn't trigger navigation.
 */
export function ExpandableSummary({ children, text, readMore, showLess, className = "" }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      if (expanded) return;
      setOverflows(el.scrollHeight > el.clientHeight + 1);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, expanded]);

  return (
    <div className="mb-6">
      <p ref={ref} className={`${className} ${expanded ? "" : "line-clamp-4"}`}>
        {children}
      </p>
      {(overflows || expanded) && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setExpanded((v) => !v);
          }}
          className="relative z-20 mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-primary transition-colors hover:text-white"
        >
          {expanded ? showLess : readMore}
          <ChevronDown className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
}
