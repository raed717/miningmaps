import { Loader2 } from "lucide-react";
import { mono } from "@/lib/fonts";

export default function Loader({
  message = "Loading View...",
  subtext = "Adamson Geomatics // Retrieving Assets",
}: {
  message?: string;
  subtext?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[50vh] w-full px-4 text-center ${mono.className}`}
    >
      <div className="relative flex items-center justify-center w-12 h-12 mb-4">
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-25" />
        <div className="absolute inset-0 rounded-full border border-primary/40 animate-pulse" />
        <Loader2 className="h-6 w-6 text-primary animate-spin" />
      </div>
      <div className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
        {message}
      </div>
      <div className="text-[10px] text-muted-foreground tracking-widest mt-1.5 uppercase">
        {subtext}
      </div>
    </div>
  );
}
