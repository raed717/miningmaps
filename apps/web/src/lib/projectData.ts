export type ProjectSection = 
  | {
      heading: string;
      type: "bullet_list";
      image?: string;
      content: string[];
    }
  | {
      heading: string;
      type: "paragraph";
      image?: string;
      content: string;
    };

export interface Project {
  id: string;
  title: string;
  summary: string;
  region: string;
  image: string;
  coordinates: [number, number];
  sections: ProjectSection[];
  isForSale?: boolean;
}

export const projects: Project[] = [
  {
    id: "ak-001",
    title: "Nikolai Nickel Copper Cobalt & Port Snettisham Projects",
    summary:
      "Large-scale polymetallic resource and successful iron ore marketing project in Alaska.",
    region: "Alaska, USA",
    image:
      "https://images.unsplash.com/photo-1574788901656-6a9ee34a3fa7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [63.2, -145.5],
    isForSale: true,
    sections: [
      {
        heading: "Nikolai Project Resource",
        type: "bullet_list",
        image:
          "https://miningmaps.wordpress.com/wp-content/uploads/2024/07/image-4.png?w=768",
        content: [
          "813 million tonnes grading 0.29% NiEq (896 Mt Inferred)",
          "3.871 billion pounds of nickel (4.225 Blbs Inferred)",
          "1.276 billion pounds of copper (1.040 Blbs Inferred)",
          "303 million pounds of cobalt (327 Mlbs Inferred)",
          "4.0 million ounces of PGE (Pt & Pd), plus gold (3.4M ounces of PGE (Pt & Pd) Inferred, plus gold)",
          "5.177 billion pounds of NiEq metal (5.406 Blbs of NiEq metal Inferred)",
        ],
      },
      {
        heading: "Alaska Marketing Pitch Deck & Success",
        type: "paragraph",
        image:
          "https://miningmaps.wordpress.com/wp-content/uploads/2012/03/0021150001-003.jpg",
        content:
          "Adamson Geomatics has been consulting for prospectors and mining companies producing marketing materials for mining projects since 2011. The Alaska Iron Ore maps were made in 2011 and 2012. The project was successfully sold using my marketing materials.",
      },
      {
        heading: "Port Snettisham & Claim Staking",
        type: "paragraph",
        image:
          "https://miningmaps.wordpress.com/wp-content/uploads/2024/07/portsnettisclaim-1.png",
        content:
          "Commodity: Iron (Port Snettisham) Mining - Alaska Iron Ore Deposit.\n\nIncluded the generation of comprehensive Alaska Claim Staking Maps to solidify mineral tenure and project boundaries.",
      },
    ],
  },
  {
    id: "bc-002",
    title: "Barkerville Gold Powerline Right-of-Way",
    summary:
      "Comprehensive GIS routing and title research for a 100+ km industrial powerline in British Columbia.",
    region: "British Columbia",
    image:
      "https://images.unsplash.com/photo-1590492817354-1ea747120a2e?auto=format&fit=crop&q=80&w=800",
    coordinates: [53.0667, -121.5167],
    isForSale: true,
    sections: [
      {
        heading: "Project Scope",
        type: "paragraph",
        content:
          "Led the complete GIS mapping and land ownership research for a critical 100+ km powerline route required to bring grid power to an expanding gold mining operation in the historic Cariboo region.",
      },
      {
        heading: "Key Deliverables",
        type: "bullet_list",
        image:
          "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
        content: [
          "Comprehensive Land Title searches across the proposed route",
          "Detailed mapping of Crown Grants, private lands, and existing tenure",
          "Summary of liens, encumbrances, and potential legal hurdles",
          "Route optimization based on topographical and ownership constraints",
        ],
      },
    ],
  },
  {
    id: "on-003",
    title: "Ontario Lithium Pegmatite Target Generation",
    summary:
      "Advanced spatial analysis and target identification for battery metal exploration in Northern Ontario.",
    region: "Ontario",
    image:
      "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?auto=format&fit=crop&q=80&w=800",
    coordinates: [51.0, -88.0],
    isForSale: false,
    sections: [
      {
        heading: "Exploration Strategy",
        type: "paragraph",
        image:
          "https://images.unsplash.com/photo-1686968719625-3faf853a543e?auto=format&fit=crop&q=80&w=800",
        content:
          "Utilized modern predictive modeling and historical geological survey data to identify high-probability spodumene-bearing pegmatite dykes. The mapping provided our client with highly actionable drill targets, saving hundreds of thousands of dollars in preliminary groundwork.",
      },
    ],
  },
];