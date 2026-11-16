import type { CSSProperties } from "react";
import type { SampleMapType } from "@/lib/sampleMapTypes";

/** Cartographic legend fills (hatching, dots, contours…), drawn in the swatch's text colour. */
const LEGEND_FILLS: Record<SampleMapType, CSSProperties> = {
  "claim-tenure": { backgroundImage: "repeating-linear-gradient(45deg, currentColor 0 1.5px, transparent 1.5px 5px)" },
  "land-title": {
    backgroundImage:
      "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 5px), repeating-linear-gradient(-45deg, currentColor 0 1px, transparent 1px 5px)",
  },
  permit: { backgroundImage: "radial-gradient(currentColor 1px, transparent 1.4px)", backgroundSize: "5px 5px" },
  geology: { backgroundImage: "repeating-linear-gradient(0deg, currentColor 0 1.5px, transparent 1.5px 4.5px)" },
  "dem-lidar": { backgroundImage: "repeating-radial-gradient(circle at 0 100%, currentColor 0 1px, transparent 1px 4px)" },
  spectral: { backgroundImage: "linear-gradient(90deg, currentColor, transparent)" },
  "3d-model": {
    backgroundImage: "conic-gradient(currentColor 25%, transparent 0 50%, currentColor 0 75%, transparent 0)",
    backgroundSize: "6px 6px",
  },
  survey: { backgroundImage: "repeating-linear-gradient(90deg, currentColor 0 1.5px, transparent 1.5px 5px)" },
  other: {},
};

/** A map-legend style swatch for a sample map category. Size it with the parent; colour via `color`. */
export function MapLegendSwatch({ type }: { type: SampleMapType }) {
  return <span className="block h-full w-full border border-current" style={LEGEND_FILLS[type]} />;
}
