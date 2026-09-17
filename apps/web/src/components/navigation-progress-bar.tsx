"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

// Event emitter for manual trigger
const NAV_START_EVENT = "miningmaps:nav-start";
const NAV_COMPLETE_EVENT = "miningmaps:nav-complete";

export function startGlobalProgress() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(NAV_START_EVENT));
  }
}

export function completeGlobalProgress() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(NAV_COMPLETE_EVENT));
  }
}

export default function NavigationProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const finishTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = () => {
    if (finishTimeoutRef.current) {
      clearTimeout(finishTimeoutRef.current);
      finishTimeoutRef.current = null;
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setVisible(true);
    setProgress(20);

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 88) {
          return prev;
        }
        // Asymptotically slow down as it approaches 90%
        const remaining = 90 - prev;
        return prev + Math.max(1, Math.floor(remaining * 0.18));
      });
    }, 120);
  };

  const complete = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setProgress(100);

    finishTimeoutRef.current = setTimeout(() => {
      setVisible(false);
      finishTimeoutRef.current = setTimeout(() => {
        setProgress(0);
      }, 200);
    }, 250);
  };

  // Complete whenever pathname changes
  useEffect(() => {
    complete();
  }, [pathname]);

  // Global click & event listener to catch any navigation click immediately
  useEffect(() => {
    const handleNavStart = () => start();
    const handleNavComplete = () => complete();

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.target === "_blank" ||
        target.hasAttribute("download")
      ) {
        return;
      }

      if (href.startsWith("http") && !href.startsWith(window.location.origin)) {
        return;
      }

      try {
        const url = new URL(href, window.location.origin);
        if (url.pathname !== window.location.pathname) {
          start();
        }
      } catch {
        // ignore invalid URL
      }
    };

    window.addEventListener(NAV_START_EVENT, handleNavStart);
    window.addEventListener(NAV_COMPLETE_EVENT, handleNavComplete);
    window.addEventListener("click", handleClick, { capture: true });

    return () => {
      window.removeEventListener(NAV_START_EVENT, handleNavStart);
      window.removeEventListener(NAV_COMPLETE_EVENT, handleNavComplete);
      window.removeEventListener("click", handleClick, { capture: true });
      if (timerRef.current) clearInterval(timerRef.current);
      if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);
    };
  }, []);

  if (!visible && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none h-[2.5px] bg-transparent overflow-hidden"
    >
      <div
        className="h-full bg-primary transition-all ease-out duration-200 relative shadow-[0_0_12px_#FFD700,0_0_6px_#FFD700]"
        style={{
          width: `${progress}%`,
          opacity: visible ? 1 : 0,
          transitionProperty: "width, opacity",
        }}
      >
        {/* Glow leading edge */}
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-white/70 opacity-90 blur-[1px]" />
      </div>
    </div>
  );
}
