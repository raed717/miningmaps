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
    title: "Alaska - Nikolai Nickel Copper Cobalt & Port Snettisham Projects",
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
        image: "/images/projects/Alaska/1.png",
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
        image: "/images/projects/Alaska/2.jpg",
        content:
          "Adamson Geomatics has been consulting for prospectors and mining companies producing marketing materials for mining projects since 2011. The Alaska Iron Ore maps were made in 2011 and 2012. The project was successfully sold using my marketing materials.",
      },
      {
        heading: "Port Snettisham & Claim Staking",
        type: "paragraph",
        image: "/images/projects/Alaska/3.png",
        content:
          "Commodity: Iron (Port Snettisham) Mining - Alaska Iron Ore Deposit.\n\nIncluded the generation of comprehensive Alaska Claim Staking Maps to solidify mineral tenure and project boundaries.",
      },
    ],
  },
  {
    id: "bc-002",
    title: "Alberta",
    summary: "Alberta…not only oil!",
    region: "Alberta, Canada",
    image:
      "https://images.unsplash.com/photo-1586399254662-c8948cd73421?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [53.0667, -121.5167],
    isForSale: true,
    sections: [
      {
        heading: "Project Scope",
        type: "paragraph",
        content:
          "Alberta also hosts uranium prospects in the northern regions of the province (as does neighbouring northern Saskatchewan).",
      },
      {
        heading: "Alberta Uranium Occurrences (Athabasca Region)",
        type: "paragraph",
        image: "/images/projects/Alberta/1.jpg",
        content: "Alberta uranium prospect",
      },
    ],
  },
  {
    id: "on-003",
    title: "Arizona",
    summary: "Prospecting, ownership and infrastructure map",
    region: "Arizona USA",
    image:
      "https://images.unsplash.com/photo-1549318558-02fe75fc51d2?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [33.4484, -112.074],
    isForSale: false,
    sections: [
      {
        heading: "Prospecting, ownership and infrastructure map",
        type: "paragraph",
        image: "/images/projects/Arizona/1.jpg",
        content: "",
      },
    ],
  },
];
