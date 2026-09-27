import fs from "node:fs";
import { projects } from "../apps/web/src/lib/projectData.ts";

function escapeCsv(value) {
  if (value === null || value === undefined) return '""';
  const str = String(value);
  if (str.includes('"') || str.includes(',') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return `"${str}"`;
}

const header = ["Project Name", "Website URL", "For Sale", "Project ID", "Region", "Commodities"];

const rows = projects.map((p) => {
  const name = p.title;
  const url = `https://www.miningpropertymaps.com/projects/${p.id}`;
  const forSale = p.isForSale ? "Yes" : "No";
  const id = p.id;
  const region = p.region || "";
  const commodities = (p.tags || []).join(", ");

  return [
    escapeCsv(name),
    escapeCsv(url),
    escapeCsv(forSale),
    escapeCsv(id),
    escapeCsv(region),
    escapeCsv(commodities)
  ].join(",");
});

const csvContent = [header.map(h => `"${h}"`).join(","), ...rows].join("\r\n");

fs.writeFileSync("projects.csv", csvContent, "utf8");
fs.writeFileSync("apps/web/public/projects.csv", csvContent, "utf8");

console.log(`Generated projects.csv with ${projects.length} projects successfully.`);
