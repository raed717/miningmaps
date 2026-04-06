export type LinkPreview = {
  textPreview?: string;
  description?: string;
  image?: string;
  url: string;
};

export type ProjectSection =
  | {
      heading: string;
      type: "bullet_list";
      image?: string;
      imageCaption?: string;
      content: string[];
      links?: LinkPreview[];
    }
  | {
      heading?: string;
      type: "paragraph";
      image?: string;
      imageCaption?: string;
      content: string;
      links?: LinkPreview[];
    }
  | {
      heading?: string;
      type: "SimpleImage";
      image: string;
      imageCaption?: string;
      links?: LinkPreview[];
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
        links: [
          {
            textPreview: "Read the full Resource Report",
            description:
              "Detailed breakdown of the Nikolai project resources, cobalt equivalents and geological models.",
            image:
              "https://images.unsplash.com/photo-1574788901656-6a9ee34a3fa7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "https://example.com/nikolai-report",
          },
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
  {
    id: "sk-005",
    title: "British Columbia",
    summary: "Little Fort Polymetallic Claim # 1106809",
    region: "British Columbia, Canada",
    image:
      "https://images.unsplash.com/photo-1672851612972-651dd2bb6363?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [53.7267, -127.6476],
    isForSale: false,
    sections: [
      {
        heading:
          "Little Fort Polymetallic Claim #1106809 Little Fort, B.C - 1 hr drive north of Kamloops. B.C",
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/1.jpg",
        imageCaption: "",
        links: [
          {
            textPreview: "#1106809",
            description:
              "View mineral tenure details on Mineral Titles Online BC",
            url: "https://www.mtonline.gov.bc.ca/mtov/tenureDetailExecute.action?tenureNumberIDParam=1106809",
          },
        ],
      },
      {
        heading:
          "My own claim that I own myself is highly prospective and is for sale. Attached is a PowerPoint report on it (also uploaded here)",
        type: "bullet_list",
        content: [
          "Little Fort Polymetallic claim # 1106809 (good to Oct 15, 2026)362 hectares",
          "362 hectares",
          "“Excellent VMS Potential” according to prospector who found prospect on claim (Robert Bourdon with Ministry of Mines)",
          "Surrounded by New Gold - drilled for 4 grams per ton over 3 metres previously.",
          "I found a copper zinc anomaly on my claim from review of historical work! ",
        ],
      },
      {
        heading:
          "Adamson Geomatics research identified a previously located mapped 10km long copper zinc anomaly identified in 1999 by the Ministry of Mines and two respected prospectors.",
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/2.jpg",
      },
      {
        heading: "Goldin Rock Resources Inc. - Mount Burns Property",
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/3.jpg",
      },
      {
        heading: "",
        type: "paragraph",
        content: `Prospective Burns Mtn area near Barkerville, B.C.
* Full 43-101 Geological Evaluation Report available on request.
* Straddles both north and south sides of Barkerville Hwy 26 between Stanley and Wells, B.C., sites of historic gold rush in the late 1800s to early 1900s.
* Property includes 7 contiguous claims, all in good standing (MTO link).`,
      },
      {
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/4.jpg",
      },
      {
        type: "paragraph",
        content:
          "Claim 339096 is located 3.5 km south-west of Barkerville Gold Mine's Cariboo Gold Project Cow Mountain Mine which is in feasibility stage (acquired by Osisko Development Corp. in 2018):",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/5.jpg",
      },
      {
        type: "paragraph",
        content: `
* 1,100 Hectares of hard rock mineral claims and 131 hectares of placer claims
  * Historical hard rock and placer gold finds on property
    * The subject site, Burns Mountain was the first hard rock mine in the 1800's and used a simple 5 stamp mill to crush rock and retrieve the gold in a small-scale operation. The north face of Burns Mountain has not been touched and is ready for productive mining.
      See report on this property's history, past exploration.Year-round access to Quesnel, major highways via Barkerville Hwy
* US Listed Public Company in excellent standing can be included in package sale.
        `,
      },
      {
        heading: "Golden Tiger Minerals - Tiger Property",
        type: "paragraph",
        image: "/images/projects/British-Columbia/6.jpg",
        content: `Gold and other precious metal potential.
Mineralized quartz float and coincidental soil and stream anomalies were discovered on the property in 1991, samples of mineralized vein float up to 0.20 metres in size returning up to 8.23 g/t Au, 249.3 g/t Ag, 844 ppm Cu and 0.41% Pb. Click here to see presentation.`,
      },
      {
        heading: "Golden Tiger Minerals - Sikanni Property",
        type: "paragraph",
        image: "/images/projects/British-Columbia/7.jpg",
        content: `GOLDEN TRIANGLE AREA GOLD CLAIM!
In 2021, grades from historical trenching included 4.87% Cu and 64.8 ppm Ag over 0.50 metres and a grab sample of 5.92% Cu and 53.1 ppm Ag.`,
      },
      {
        heading: "Golden Tiger Minerals - Millar Property",
        type: "paragraph",
        image: "/images/projects/British-Columbia/8.jpg",
        content: `The CY 3 vein features a grab sample returning 2.97 g/t gold from a rusty, siliceous shear zone about 20 metres long, striking 250° with disseminated chalcopyrite and arsenopyrite throughout.
The Red 23 showing is at the far north claim boundary. This showing is underlain primarily by the Hazelton Group of sedimentary rocks similar to the Eskay Creek package consisting of silicified black argillite with traces of pyrrhotite. The Red 23 showing is within an intense iron oxide alteration containing 3-5% pyrrhotite and pyrite with 1-3 mm wide quartz veinlets. 
Several projects in Golden Triangle and B.C Interior for sale`,
        links: [
          {
            textPreview:
              "Click here to see presentation on Golden Tiger Minerals Projects.",
            url: "https://www.dropbox.com/scl/fi/4e25637h6u2ycss1b3e81/BarryGoldenTigerMineralsPresentation_20250524.pdf?rlkey=3eug6j5onlxu3vyq6d6leqj44&e=1&st=7fzoqb0p&dl=0",
          },
        ],
      },
      {
        heading: "Placer Claim Mapping",
        type: "paragraph",
        image: "/images/projects/British-Columbia/9.jpg",
        content: "Wells / Barkerville, B.C - Cariboo Region",
      },
      {
        heading: "Surveyed parcel & mineral claim overlays",
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/10.jpg",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/11.jpg",
      },
      {
        heading: "BC Hydro Monitoring Maps:",
        type: "paragraph",
        content: `As well as mining property maps, Adamson Geomatics also creates advanced GIS maps for the forestry, oil and gas, transportation, utilities, infrastructure and environmental industries.
Below are figures for the Whatshan Lake Vegetation Monitoring Reports for 2015 and 2016 that Adamson Geomatics completed for G3 Consulting Ltd. on behalf of BC Hydro.
Transect mapping was conducted with a GPS, and bathymetry was produced from depth readings obtained from a sonar device. Depth data was processed in ArcGIS and sample points were overlaid. Image classification and NDVI analysis was conducted on satellite imagery.`,
        links: [
          {
            textPreview: "2015 Report (maps on pages 65-99)",
            url: "https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/environment-sustainability/water-use-planning/southern-interior/clbmon-55-yr2-2015-09-01.pdf",
          },
          {
            textPreview:
              "2016 Report (maps on pages 51-58, pages 60-67 and pages 130 - 142)",
            url: "https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/environment-sustainability/water-use-planning/southern-interior/wgsmon-2-yr10-2016-09-27.pdf",
          },
        ],
      },
      {
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/12.jpg",
        heading: " Spectral Classification Maps",
      },
      {
        heading: "Land Management & Land Development",
        type: "paragraph",
        content:
          "Adamson Geomatics was the Land Manager for Barkerville Gold Mines (now owned by Osisko Development Corp) from 2017-2023.",
        links: [
          {
            textPreview: "osiskodev.com",
            url: "https://osiskodev.com/",
          },
          {
            textPreview: "Barkerville Gold Mines",
            url: "https://miningmaps.wordpress.com/2023/08/07/barkerville-gold-mines/",
          },
        ],
      },
      {
        heading: "Key accomplishments there included:",
        type: "bullet_list",
        content: [
          "Registering undersurface rights that were erroneously registered to another company in the name of the rightful owner, BGM. This resulted in gold rights being added to the area of the Cariboo Gold Project near Lowhee Creek covering an estimated 1 million ounces of gold!",
          "Negotiating the purchase of 4050 Bowron Lake Road (Ballarat 5F) and around ten other private properties in the town of Wells",
          "Correcting the mineral lease application for the Cow Mountain mineral lease, registering over 13 million dollars of work to the contiguous property block that would have been lost due to a third party contractor error.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Mr. Adamson has a Letter of Reference from Barkerville Gold Mines for my work there, and a recommendation from the President of the Company, Chris Lodder who says Mr. Adamson is the “best lands guy in the business”. Along with these accomplishments, Mr. Adamson led the development of major infrastructure projects for the Province of British Columbia and this mining company, including the cell tower and power line right of way projects. For more information, email chris@miningpropertymaps.com.",
      },
    ],
  },
  {
    id: "sk-006",
    title: "California",
    summary: "Patented California Gold Mine",
    region: "California, USA",
    image:
      "https://images.unsplash.com/photo-1499310226026-b9d598980b90?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [36.7783, -119.4179],
    isForSale: false,
    sections: [
      {
        type: "paragraph",
        heading: "Patented California Gold Mine:",
        content: "",
      },
      {
        heading: "Sante Fe Mine - Rand Mining District, California",
        type: "SimpleImage",
        image: "/images/projects/California/1.png",
        imageCaption: "santa fe 2 gold mine",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/California/2.png",
      },
      {
        type: "paragraph",
        content: "Gold grades of up to 0.1 oz/ton! (3.19 grams/ton).",
      },
    ],
  },
  {
    id: "sk-007",
    title: "Finland",
    summary: "Promising Finland gold project",
    region: "Finland",
    image:
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [61.9241, 25.7482],
    isForSale: false,
    sections: [
      {
        heading: "European Mining Projects",
        type: "paragraph",
        content:
          "As of August 2024, I am brokering a deal for a client who is seeking investors in a promising gold project in Finland. If you are interested in reviewing the presentation and connecting with the executive team, please email chris@miningpropertymaps.com.",
      },
      {
        heading: "Finland",
        type: "SimpleImage",
        image: "/images/projects/Europe/1.png",
        imageCaption: "Promising Finland gold project",
      }
    ],
  },
];
