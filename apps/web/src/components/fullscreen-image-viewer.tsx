"use client";

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FullscreenImageViewerProps {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
}

interface ImageViewerTriggerProps {
  src: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  caption?: string;
  children?: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const MIN_SCALE = 1;
const MAX_SCALE = 8;
const ZOOM_STEP = 0.4;
const DBL_TAP_DELAY = 300; // ms

/* ------------------------------------------------------------------ */
/*  Fullscreen Viewer (modal overlay with zoom + pan)                  */
/* ------------------------------------------------------------------ */

export function FullscreenImageViewer({
  src,
  alt,
  open,
  onClose,
}: FullscreenImageViewerProps) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  // Drag state
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });

  // Pinch state
  const pinchStartDist = useRef(0);
  const pinchStartScale = useRef(1);
  const activePointers = useRef<Map<number, { x: number; y: number }>>(
    new Map()
  );

  // Double-tap
  const lastTap = useRef(0);

  // Container ref
  const containerRef = useRef<HTMLDivElement>(null);

  /* Reset on open/close */
  useEffect(() => {
    if (open) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    }
  }, [open]);

  /* Escape key */
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  /* Prevent page scroll while viewer is open */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  /* ---- helpers ---- */

  const clampTranslate = useCallback(
    (tx: number, ty: number, s: number) => {
      if (s <= 1) return { x: 0, y: 0 };
      // Allow generous panning proportional to scale
      const bound = (s - 1) * 600;
      return {
        x: Math.max(-bound, Math.min(bound, tx)),
        y: Math.max(-bound, Math.min(bound, ty)),
      };
    },
    []
  );

  const zoomBy = useCallback(
    (delta: number) => {
      setScale((prev) => {
        const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev + delta));
        if (next <= 1) setTranslate({ x: 0, y: 0 });
        return next;
      });
    },
    []
  );

  const resetView = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  /* ---- Wheel zoom ---- */

  const onWheel = useCallback(
    (e: ReactWheelEvent) => {
      e.stopPropagation();
      const delta = e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
      setScale((prev) => {
        const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev + delta));
        if (next <= 1) setTranslate({ x: 0, y: 0 });
        return next;
      });
    },
    []
  );

  /* ---- Pointer events (unified mouse + touch) ---- */

  const getDistance = (a: { x: number; y: number }, b: { x: number; y: number }) =>
    Math.hypot(a.x - b.x, a.y - b.y);

  const onPointerDown = useCallback(
    (e: ReactPointerEvent) => {
      e.stopPropagation();
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      activePointers.current.set(e.pointerId, {
        x: e.clientX,
        y: e.clientY,
      });

      if (activePointers.current.size === 2) {
        // Start pinch
        const pts = Array.from(activePointers.current.values());
        pinchStartDist.current = getDistance(pts[0], pts[1]);
        pinchStartScale.current = scale;
        isDragging.current = false;
      } else if (activePointers.current.size === 1) {
        // Double-tap check
        const now = Date.now();
        if (now - lastTap.current < DBL_TAP_DELAY) {
          // Toggle between 1x and 3x
          if (scale > 1.5) {
            resetView();
          } else {
            setScale(3);
          }
          lastTap.current = 0;
          return;
        }
        lastTap.current = now;

        // Start drag
        isDragging.current = true;
        dragStart.current = { x: e.clientX, y: e.clientY };
        translateStart.current = { ...translate };
      }
    },
    [scale, translate, resetView]
  );

  const onPointerMove = useCallback(
    (e: ReactPointerEvent) => {
      e.stopPropagation();
      activePointers.current.set(e.pointerId, {
        x: e.clientX,
        y: e.clientY,
      });

      if (activePointers.current.size === 2) {
        // Pinch zoom
        const pts = Array.from(activePointers.current.values());
        const dist = getDistance(pts[0], pts[1]);
        if (pinchStartDist.current > 0) {
          const ratio = dist / pinchStartDist.current;
          const next = Math.min(
            MAX_SCALE,
            Math.max(MIN_SCALE, pinchStartScale.current * ratio)
          );
          setScale(next);
          if (next <= 1) setTranslate({ x: 0, y: 0 });
        }
      } else if (isDragging.current && scale > 1) {
        // Pan / drag
        const dx = e.clientX - dragStart.current.x;
        const dy = e.clientY - dragStart.current.y;
        const newT = {
          x: translateStart.current.x + dx,
          y: translateStart.current.y + dy,
        };
        setTranslate(clampTranslate(newT.x, newT.y, scale));
      }
    },
    [scale, clampTranslate]
  );

  const onPointerUp = useCallback(
    (e: ReactPointerEvent) => {
      e.stopPropagation();
      activePointers.current.delete(e.pointerId);
      if (activePointers.current.size < 2) {
        pinchStartDist.current = 0;
      }
      if (activePointers.current.size === 0) {
        isDragging.current = false;
      }
    },
    []
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-md select-none"
          onClick={onClose}
        >
          {/* Top toolbar */}
          <div
            className="relative flex items-center justify-between px-4 py-3 sm:px-6 bg-black/40 backdrop-blur-md border-b border-white/10 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 pr-12 sm:pr-0">
              {alt && (
                <span className="text-xs font-medium text-white/80 line-clamp-1 max-w-[50vw]">
                  {alt}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="mr-2 text-[11px] font-mono text-white/60 hidden sm:inline">
                {Math.round(scale * 100)}%
              </span>
              <button
                type="button"
                onClick={() => zoomBy(-ZOOM_STEP)}
                disabled={scale <= MIN_SCALE}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Zoom out"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => zoomBy(ZOOM_STEP)}
                disabled={scale >= MAX_SCALE}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Zoom in"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={resetView}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white cursor-pointer"
                title="Reset zoom"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <div className="mx-1 h-5 w-px bg-white/15" />
              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-500/40 bg-red-500/20 text-white font-medium text-xs transition-all hover:bg-red-500 hover:text-white shadow-lg cursor-pointer"
                title="Close viewer"
              >
                <X className="h-4 w-4" />
                <span>Close</span>
              </button>
            </div>
          </div>

          {/* Floating close button on top-right for instant access */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="sm:hidden fixed top-3.5 right-3.5 z-[100] flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white shadow-xl cursor-pointer hover:bg-red-700"
            title="Close"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Image viewport */}
          <div
            ref={containerRef}
            className="flex-1 flex items-center justify-center overflow-hidden touch-none relative"
            style={{ cursor: scale > 1 ? "grab" : "pointer" }}
            onClick={(e) => {
              if (scale <= 1) {
                onClose();
              }
            }}
            onWheel={onWheel}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <img
              src={src}
              alt={alt || "Fullscreen image"}
              draggable={false}
              className="max-h-full max-w-full object-contain pointer-events-none"
              style={{
                transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
                transition: isDragging.current
                  ? "none"
                  : "transform 0.15s ease-out",
              }}
            />
          </div>

          {/* Bottom hint */}
          <div className="flex justify-center pb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Scroll or pinch to zoom • Drag to pan • Click empty space or Close to exit
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Trigger wrapper: clickable image that opens the fullscreen viewer  */
/* ------------------------------------------------------------------ */

export function ImageViewerTrigger({
  src,
  alt,
  className = "",
  imageClassName = "",
  caption,
  children,
}: ImageViewerTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`group relative cursor-zoom-in ${className}`}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen(true);
        }}
      >
        {children || (
          <img
            src={src}
            alt={alt || "Image"}
            className={imageClassName}
          />
        )}
      </div>

      <FullscreenImageViewer
        src={src}
        alt={alt || caption}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
