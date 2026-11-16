import { Info } from "lucide-react";
import { mono } from "@/lib/fonts";
import type { SampleMapsTranslation } from "@/lib/i18n/types";

/** Drafting-style note: more maps are being uploaded, and some can't be shown (client confidentiality). */
export function SampleMapsNotice({ t, className = "" }: { t: SampleMapsTranslation; className?: string }) {
  return (
    <aside className={`flex gap-3 border-l-2 border-primary/70 bg-primary/5 px-4 py-3 ${className}`}>
      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
      <div className="text-xs leading-relaxed text-muted-foreground md:text-[13px]">
        <span className={`mr-2 text-[10px] font-bold tracking-[0.2em] text-primary ${mono.className}`}>
          {t.notice.label}
        </span>
        {t.notice.uploading} {t.notice.confidential}
      </div>
    </aside>
  );
}
