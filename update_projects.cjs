const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'apps/web/src/lib/projectData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Update the interface
content = content.replace(
  /author\?\: string;\n\s*tags\?\: string\[\];/g,
  'author?: string;\n  contactEmail?: string;\n  tags?: string[];'
);

// We will do a generic replacement for the `isForSale: (true|false),` to append the default fields.
content = content.replace(
  /isForSale: true,\n\s*date: "2024-03-15",\n\s*author: "Adamson Geomatics",\n\s*tags: \["Nickel", "Copper", "Polymetallic", "Marketing"\],\n\s*quickFacts: \[\n\s*\{ label: "Commodities", value: "Ni, Cu, Co, PGE, Au" \},\n\s*\{ label: "Area", value: "Alaska, USA" \},\n\s*\{ label: "Status", value: "Sold" \}\n\s*\],/g,
  `isForSale: true,
    date: "2024-03-15",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Nickel", "Copper", "Polymetallic", "Marketing"],
    quickFacts: [
      { label: "Commodities", value: "Ni, Cu, Co, PGE, Au" },
      { label: "Area", value: "Alaska, USA" },
      { label: "Status", value: "Sold" }
    ],`
);

// bc-002
content = content.replace(
  /id: "bc-002",([\s\S]*?)isForSale: true,/g,
  `id: "bc-002",$1isForSale: true,
    date: "2024-04-10",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Uranium", "Prospecting"],
    quickFacts: [
      { label: "Commodity", value: "Uranium" },
      { label: "Region", value: "Athabasca Basin, Alberta" }
    ],`
);

// on-003
content = content.replace(
  /id: "on-003",([\s\S]*?)isForSale: false,/g,
  `id: "on-003",$1isForSale: false,
    date: "2024-02-22",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Infrastructure", "Prospecting", "Mapping"],
    quickFacts: [
      { label: "Type", value: "Infrastructure Map" },
      { label: "Location", value: "Arizona, USA" }
    ],`
);

// sk-004
content = content.replace(
  /id: "sk-004",([\s\S]*?)isForSale: false,/g,
  `id: "sk-004",$1isForSale: false,
    date: "2024-05-05",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Copper", "Lithium", "Gold", "Uranium", "Zinc"],
    quickFacts: [
      { label: "Scope", value: "Multiple Projects" },
      { label: "Regions", value: "Australia, New Zealand" }
    ],`
);

// sk-005
content = content.replace(
  /id: "sk-005",([\s\S]*?)isForSale: false,/g,
  `id: "sk-005",$1isForSale: false,
    date: "2024-06-12",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Polymetallic", "Gold", "Claim Mapping"],
    quickFacts: [
      { label: "Size", value: "362 Hectares" },
      { label: "Commodities", value: "Cu, Zn, Au" },
      { label: "Tenure", value: "Claim #1106809" }
    ],`
);

// sk-006
content = content.replace(
  /id: "sk-006",([\s\S]*?)isForSale: false,/g,
  `id: "sk-006",$1isForSale: false,
    date: "2024-01-30",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Gold", "Patented Mine"],
    quickFacts: [
      { label: "Type", value: "Patented Gold Mine" },
      { label: "District", value: "Rand Mining District" }
    ],`
);

// sk-007
content = content.replace(
  /id: "sk-007",([\s\S]*?)isForSale: false,/g,
  `id: "sk-007",$1isForSale: false,
    date: "2024-08-15",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Gold", "Investment"],
    quickFacts: [
      { label: "Commodity", value: "Gold" },
      { label: "Status", value: "Seeking Investors" }
    ],`
);

// sk-008
content = content.replace(
  /id: "sk-008",([\s\S]*?)isForSale: false,/g,
  `id: "sk-008",$1isForSale: false,
    date: "2024-07-20",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Prospecting", "Geology"],
    quickFacts: [
      { label: "Type", value: "Prospecting Map" },
      { label: "Region", value: "Manitoba" }
    ],`
);

// sk-009
content = content.replace(
  /id: "sk-009",([\s\S]*?)isForSale: true,/g,
  `id: "sk-009",$1isForSale: true,
    date: "2024-09-01",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Gold", "High Grade", "BLM Mapping"],
    quickFacts: [
      { label: "Commodity", value: "Gold" },
      { label: "Intercepts", value: ">15 g/t over 2m+" },
      { label: "Status", value: "Seeking Investors" }
    ],`
);

// sk-010
content = content.replace(
  /id: "sk-010",([\s\S]*?)isForSale: false,/g,
  `id: "sk-010",$1isForSale: false,
    date: "2024-03-25",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Iron", "Claim Staking", "Mapping"],
    quickFacts: [
      { label: "Type", value: "Claim Block Mapping" },
      { label: "Commodity", value: "Iron" }
    ],`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated projectData.ts');
