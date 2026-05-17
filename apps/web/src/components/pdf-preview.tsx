"use client";

export default function PdfPreview({ fileUrl }: { fileUrl: string }) {
  return (
    <div className="w-full h-[500px] bg-background">
      <iframe
        src={`${fileUrl}#view=FitH`}
        title="PDF Preview"
        className="w-full h-full border-0"
        loading="lazy"
      />
    </div>
  );
}
