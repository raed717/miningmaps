export type ProjectSection =
  | {
      heading: string;
      type: "bullet_list";
      image?: string;
      imageCaption?: string;
      content: string[];
    }
  | {
      heading: string;
      type: "paragraph";
      image?: string;
      imageCaption?: string;
      content: string;
    }
  | {
      heading?: string;
      type: "SimpleImage";
      image: string;
      imageCaption?: string;
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
  {
    id: "sk-004",
    title: "Australia / New Zealand",
    summary: "",
    region: "Australia / New Zealand",
    image:
      "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [-25.2744, 133.7751],
    isForSale: false,
    sections: [
      {
        heading: " Summary of Projects in Australia and New Zealand",
        type: "bullet_list",
        content: [
          "COPPER - Project K, Project Y, Mt Diamond, Mt Wells, Copperfield",
          "LITHIUM -  Project K",
          "NICKEL - Gazelle, Project K",
          "URANIUM  - Project K, Project Y, Gazelle etc",
          "GOLD - Wetherstones, Project K, Project Y",
          "FERTILIZER/GAS -  Lock coal conversion (urea, hydrogen, syngas)",
          "HYDROGEN -  Blue (ex coal), green (renewables) and natural hydrogen project",
          "OIL -  Virgin oilfield in Australia. Oil and gas discovered in drilling, free oil noted.",
          "ZINC/COPPER/GOLD -  Goulburn Zn-Cu-Au project.  High grades, close to existing Woodlawn mill.",
          "COAL TO OIL -  Conversion of high-oil content coal to oil, gas (including potential for hydrogen)",
          "FERTILIZER -  Major shareholding in listed fertilizer producing company.",
          "REAL ESTATE -  21,000 hectares with renewable energy and subdivision potential.",
        ],
      },
      {
        heading: "1) COPPER - MT. WELLS",
        type: "paragraph",
        image: "/images/projects/Australia-New-Zealand/1.png",
        imageCaption:
          "High grade copper mineralization at Mt. Wells, Australia",
        //image: "/images/projects/Australia-New-Zealand/2.png",
        content: "CLICK LINK FOR FULL PROJECT DETAILS",
      },
      {
        heading: "2) LITHIUM, NICKEL, COPPER, URANIUM, GOLD - PROJECT K",
        type: "paragraph",
        image: "/images/projects/Australia-New-Zealand/1ad.png",
        content: "Summary coming soon!",
      },
      {
        heading: "3) NICKEL - GAZELLE",
        type: "paragraph",
        image: "/images/projects/Australia-New-Zealand/1ad.png",
        content: "Summary coming soon!",
      },
      {
        heading: "4) URANIUM, GOLD - PROJECT Y",
        type: "paragraph",
        image: "/images/projects/Australia-New-Zealand/1az.png",
        content: "Summary coming soon!",
      },
      {
        heading: "5) GOLD - WETHERSTONES, NEW ZEALAND",
        type: "paragraph",
        image: "/images/projects/Australia-New-Zealand/3.png",
        content: "BONANZA GRADE DRILL RESULTS!",
      },
      {
        heading: "HIGH GRADE GOLD DEPOSIT",
        type: "bullet_list",
        content: [
          "Geologists have estimated 500 million cubic metres of gold at the Wetherstones Goldfield.",
          "Gold grades from sampling the conglomerate averaged 37.9 g/m3 (bonanza grade) over a distance of at least 200 metres, and the overlying eluvial/alluvial ore 0.578 g/m3",
          "Bulk sampling of the overlying ore graded 712 g/m3, and bulk sampling of the conglomerate produced 4.06 g/m3 (Thomson, 1930's).",
          "The average grade of the overlying deposit from surface from more recent drilling averaged 0.835 g/m3",
          "A sample of pyrite-rich ore from the Golden Crescent drive assayed 30 ounces of gold per tonne",
          "Three recent drilling programs have confirmed the continuation of the Wetherstones deposit, with gold grades of up to 33g/m3 over 1 metre recorded.",
          "The pyrite comprises 6% of the ore by weight, equivalent to an additional 5.6 g/t gold. The gold in the pyrite significantly increases the overall gold grades in the Wetherstones conglomerate and including the overlying resources.",
        ],
      },
      {
        heading: "HARD ROCK EXPANSION POTENTIAL",
        type: "bullet_list",
        content: [
          "The majority of the higher grade gold in the Wetherstones placer deposit lies near to and just above the underlying basement contact; however, there are also high grade zones being intersected in upper levels",
          "For the commercial development of the project, once exploration has been completed and ore reserves proven, it is proposed a mining operation be established on the Wetherstones gold deposit, processing up to 700 tonnes per hour of ore (up to 6.1 million tonnes/annum)",
          "The project area has substantial potential for associated hard rock deposits",
          "Previous exploration so far has discovered numerous gold deposits in the region around OUM's tenement east of Wetherstones (up to 1,200 oz Au at 13 to 20g/t).",
        ],
      },
      {
        heading:
          "The Golden Crescent Sluicing Company constructed a 234 metre long inclined exploration tunnel, and samples were collected along the tunnel. Results confirmed the presence of a potentially substantial high grade gold deposit. Assay results, plotted on a cross section of the tunnel, are shown below.",
        type: "SimpleImage",
        image: "/images/projects/Australia-New-Zealand/4.png",
        imageCaption: "Section Showing Assays Along the Golden Crescent Tunnel",
      },
    ],
  },
];
