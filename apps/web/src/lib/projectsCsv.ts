// CSV export of the projects list (the "Export CSV" button on /projects and /properties).

const SITE_URL = "https://www.miningpropertymaps.com";

const HEADERS = ["Project Name", "Website URL", "For Sale", "Project ID", "Region", "Commodities"];

export type ProjectCsvRow = {
  id: string;
  title: string;
  /** Site-relative page path, e.g. "/projects/ak-001" or "/es/projects/ak-001". */
  path: string;
  forSale: boolean;
  region: string;
  commodities: string[];
};

/** Every field quoted, with inner quotes doubled (RFC 4180). */
function quote(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

export function buildProjectsCsv(rows: ProjectCsvRow[]): string {
  const lines = [
    HEADERS.map(quote).join(","),
    ...rows.map((row) =>
      [
        row.title,
        `${SITE_URL}${row.path}`,
        row.forSale ? "Yes" : "No",
        row.id,
        row.region,
        row.commodities.join(", "),
      ]
        .map(quote)
        .join(","),
    ),
  ];
  return lines.join("\r\n") + "\r\n";
}

/** Starts a browser download. The BOM makes Excel read accents (é, ñ) as UTF-8. */
export function downloadCsv(csv: string, fileName: string): void {
  const blob = new Blob(["﻿", csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** e.g. "adamson-projects-gemstones-for-sale-2026-11-11.csv" */
export function csvFileName(parts: (string | null | undefined)[]): string {
  const slug = ["adamson-projects", ...parts]
    .filter((p): p is string => !!p)
    .join("-")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug}-${new Date().toISOString().slice(0, 10)}.csv`;
}
