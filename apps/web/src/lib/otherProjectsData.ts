import data from "./Book1.json";

export type OtherProject = {
  Priority: number;
  "Group Name": string;
  "Map Number": string;
  Tenure_Count: number;
  Total_Area_ha: number;
  Titles: string;
  Owners: string;
  Subtypes: string;
  Status?: string;
  "Good_To"?: string;
  "Commodity / Theme": string;
  "Potential MINFILE Association / Research Note": string;
  "Brief Project Summary": string;
};

export const otherProjects = data as OtherProject[];

export function getCommodityCategory(theme: string): string {
  const t = theme.toLowerCase();
  if (t.includes("gold") || t.includes("silver")) return "Gold / Silver";
  if (t.includes("copper") || t.includes("nickel")) return "Base Metals";
  if (t.includes("rare earth")) return "Rare Earth Elements";
  if (t.includes("magnetite") || t.includes("titanium")) return "Magnetite / Titanium";
  if (t.includes("antimony")) return "Antimony";
  if (t.includes("tungsten") || t.includes("molybdenum")) return "Tungsten / Molybdenum";
  if (t.includes("lead") || t.includes("zinc")) return "Lead / Zinc";
  if (t.includes("industrial mineral") || t.includes("carbonate")) return "Industrial Minerals";
  return "Prospective / Other";
}

export const commodityCategories = [
  "Gold / Silver",
  "Base Metals",
  "Rare Earth Elements",
  "Magnetite / Titanium",
  "Antimony",
  "Tungsten / Molybdenum",
  "Lead / Zinc",
  "Industrial Minerals",
  "Prospective / Other",
];
