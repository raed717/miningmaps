"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Pause, Play } from "lucide-react";
import { mono } from "@/lib/fonts";
import type { HomeTranslation, Locale } from "@/lib/i18n/types";
import { getLocalizedPath } from "@/lib/i18n/navigation";
import type { ProjectSummary } from "@/lib/projectTypes";

/** Degrees between neighbouring cards. */
const STEP = 9;
/**
 * The whole spread is one rotation about a hinge well below the deck, so the bottoms
 * stay gathered while the tops swing out. 230% of the card height ≈ 1.3 cards below it.
 */
const PIVOT = "50% 230%";
/** Cards further than this from the active one are faded out. */
const REACH = 2;
const SWIPE_PX = 40;
/** Auto-advance interval, and how long it waits after the visitor turns a card themselves. */
const AUTO_MS = 4500;
const RESUME_MS = 9000;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

type Props = {
  projects: ProjectSummary[];
  locale: Locale;
  t: HomeTranslation["projectPreview"];
};

/**
 * Mobile project preview: a hand of cards splayed from a hinge below the deck. The active
 * card stands upright on a yellow plate; swipe, tap a side card or use the arrows to turn.
 * It also turns on its own (looping) while on screen, unless paused or reduced motion is on.
 */
export function ProjectFanDeck({ projects, locale, t }: Props) {
  const [active, setActive] = useState(() => Math.floor((projects.length - 1) / 2));
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const swipe = useRef<{ x: number; moved: boolean } | null>(null);

  // Autoplay: only while the deck is on screen, the tab is visible and nobody is touching it.
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [touching, setTouching] = useState(false);
  const [paused, setPaused] = useState(false); // the visitor pressed pause
  const [hold, setHold] = useState(false); // the visitor just turned a card: wait before resuming
  const count = projects.length;
  const playing = count > 1 && inView && pageVisible && !touching && !paused && !reduceMotion;

  useEffect(() => {
    const onVisibility = () => setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(
      () => (hold ? setHold(false) : setActive((a) => (a + 1) % count)),
      hold ? RESUME_MS : AUTO_MS,
    );
    return () => window.clearTimeout(timer);
  }, [playing, hold, active, count]);

  if (count === 0) return null;

  /** A turn made by the visitor (swipe, tap, arrows, keys): autoplay waits a bit longer. */
  const go = (i: number) => {
    setHold(true);
    setActive(Math.max(0, Math.min(count - 1, i)));
  };

  const onPointerDown = (e: PointerEvent) => {
    swipe.current = { x: e.clientX, moved: false };
    setTouching(true);
  };
  const onPointerUp = (e: PointerEvent) => {
    setTouching(false);
    const start = swipe.current;
    if (!start) return;
    const dx = e.clientX - start.x;
    if (Math.abs(dx) > SWIPE_PX) {
      start.moved = true; // swallow the click that follows a swipe
      go(active + (dx < 0 ? 1 : -1));
    }
  };
  const onClickCapture = (e: { preventDefault: () => void; stopPropagation: () => void }) => {
    if (swipe.current?.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
    swipe.current = null;
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(active - 1);
    if (e.key === "ArrowRight") go(active + 1);
  };

  return (
    <div>
      {/* Full-bleed and clipped sideways so the swung cards never widen the page. */}
      <motion.div
        onViewportEnter={() => {
          setOpen(true);
          setInView(true);
        }}
        onViewportLeave={() => setInView(false)}
        viewport={{ amount: 0.4 }}
        className="-mx-4 overflow-x-clip px-4 pt-12"
      >
        <div
          role="group"
          aria-roledescription="carousel"
          aria-label={t.title + " " + t.titleHighlight}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            swipe.current = null;
            setTouching(false);
          }}
          onClickCapture={onClickCapture}
          className="relative mx-auto h-[27rem] w-[min(72vw,17rem)] touch-pan-y select-none focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary"
        >
          {/* The plate the active card stands on. Its label strip sits above the card, where the swung tops leave room. */}
          <div
            aria-hidden
            className="absolute -inset-x-2.5 -top-9 h-[calc(23rem+2.25rem+0.625rem)] bg-primary shadow-[0_0_40px_-12px_var(--primary)]"
          >
            <div
              className={`absolute inset-x-0 top-0 flex h-9 items-center justify-between px-3 text-[10px] font-bold tracking-[0.2em] text-black ${mono.className}`}
            >
              <span>
                {pad(active + 1)} / {pad(projects.length)}
              </span>
              <span className="h-2 w-14 bg-[repeating-linear-gradient(45deg,#000_0_1.5px,transparent_1.5px_5px)]" />
            </div>
          </div>

          {projects.map((project, i) => {
            const d = i - active;
            const visible = Math.abs(d) <= REACH;
            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  rotate: open ? d * STEP : 0,
                  scale: d === 0 ? 1 : 0.94,
                  opacity: visible ? 1 : 0,
                }}
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 28 }}
                style={{ transformOrigin: PIVOT, zIndex: 20 - Math.abs(d) * 2 }}
                className={`absolute inset-x-0 top-0 h-[23rem] ${visible ? "" : "pointer-events-none"}`}
                aria-hidden={!visible}
              >
                {d === 0 ? (
                  <Link
                    href={getLocalizedPath(`/projects/${project.id}`, locale)}
                    aria-label={`${t.viewDossier}: ${project.title}`}
                    draggable={false}
                    className="group block h-full"
                  >
                    <FanCard project={project} t={t} active />
                  </Link>
                ) : (
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => go(i)}
                    aria-label={project.title}
                    className="block h-full w-full text-left"
                  >
                    <FanCard project={project} t={t} active={false} />
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Controls */}
      <div className={`mt-8 flex items-center justify-between gap-3 ${mono.className}`}>
        <DeckButton label={t.prevProject} disabled={active === 0} onClick={() => go(active - 1)}>
          <ArrowLeft className="h-4 w-4" />
        </DeckButton>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {projects.map((p, i) => (
                <span
                  key={p.id}
                  className={`relative h-1 overflow-hidden transition-all duration-300 ${
                    i === active ? "w-6 bg-primary/30" : "w-2 bg-white/20"
                  }`}
                >
                  {i === active && (
                    // Fills up until the next auto turn; stays full while paused.
                    <motion.span
                      key={`${active}-${playing && !hold}`}
                      initial={{ scaleX: playing && !hold ? 0 : 1 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: playing && !hold ? AUTO_MS / 1000 : 0, ease: "linear" }}
                      className="absolute inset-0 origin-left bg-primary"
                    />
                  )}
                </span>
              ))}
            </div>
            {count > 1 && !reduceMotion && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? t.playAutoplay : t.pauseAutoplay}
                aria-pressed={paused}
                className="flex h-6 w-6 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
              </button>
            )}
          </div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{t.swipeHint}</span>
        </div>
        <DeckButton label={t.nextProject} disabled={active === projects.length - 1} onClick={() => go(active + 1)}>
          <ArrowRight className="h-4 w-4" />
        </DeckButton>
      </div>
    </div>
  );
}

function DeckButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-30"
    >
      {children}
    </button>
  );
}

function FanCard({
  project,
  t,
  active,
}: {
  project: ProjectSummary;
  t: HomeTranslation["projectPreview"];
  active: boolean;
}) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden border bg-card shadow-[0_18px_40px_-12px_rgba(0,0,0,0.9)] ${
        active ? "border-black" : "border-border"
      }`}
    >
      <div className="relative h-44 shrink-0 overflow-hidden bg-black">
        <img
          src={project.previewImage}
          alt={project.title}
          draggable={false}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
        <span
          className={`absolute top-3 left-3 px-2 py-1 text-[9px] font-bold uppercase tracking-widest ${
            project.isForSale
              ? "border border-secondary bg-secondary text-black"
              : "border border-primary/60 bg-black/60 text-primary"
          } ${mono.className}`}
        >
          {project.isForSale ? t.statusForSale : t.statusActive}
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-base font-extrabold uppercase leading-tight tracking-tight">{project.title}</h3>
        {project.region && (
          <p
            className={`mt-2 flex items-center gap-1.5 truncate text-[9px] uppercase tracking-[0.16em] text-muted-foreground ${mono.className}`}
          >
            <MapPin className="h-3 w-3 shrink-0 text-primary" />
            <span className="truncate">{project.region}</span>
          </p>
        )}
        <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
          {project.summary || t.defaultSummary}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
          <span className={`text-[9px] uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}>
            {t.viewDossier}
          </span>
          <span
            className={`flex h-7 w-7 items-center justify-center border ${
              active ? "border-primary bg-primary text-black" : "border-border text-muted-foreground"
            }`}
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>

      {/* Side cards sit in shadow so the upright one reads first. */}
      {!active && <div className="pointer-events-none absolute inset-0 bg-black/45" />}
    </article>
  );
}
