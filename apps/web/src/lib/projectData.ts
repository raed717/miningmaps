export type LinkPreview = {
  textPreview?: string;
  description?: string;
  image?: string;
  url: string;
};

export type VideoLink = {
  title: string;
  description?: string;
  vimeoUrl?: string;
  youtubeUrl?: string;
};

export type ProjectSection =
  | {
      heading: string;
      type: "bullet_list";
      image?: string;
      imageCaption?: string;
      content: string[];
      links?: LinkPreview[];
      VideoLinks?: VideoLink[];
    }
  | {
      heading?: string;
      type: "paragraph";
      image?: string;
      imageCaption?: string;
      content: string;
      links?: LinkPreview[];
      VideoLinks?: VideoLink[];
    }
  | {
      heading?: string;
      type: "SimpleImage";
      image: string;
      imageCaption?: string;
      links?: LinkPreview[];
      VideoLinks?: VideoLink[];
    }
  // slide show of simple images
  | {
      heading?: string;
      type: "ImageGallery";
      images: {
        src: string;
        alt?: string;
      }[];
    }
  | {
      heading?: string;
      type: "PdfDocuments";
      documents: {
        fileUrl: string;
        fileName?: string;
        description?: string;
      }[];
    };

export type QuickFact = {
  label: string;
  value: string;
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
  quickFacts?: QuickFact[];
  date?: string;
  author?: string;
  contactEmail?: string;
  tags?: string[];
}

export const projects: Project[] = [
  // Alaska
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
    date: "2024-03-15",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Nickel", "Copper", "Polymetallic", "Marketing"],
    quickFacts: [
      { label: "Commodities", value: "Ni, Cu, Co, PGE, Au, Gu, Sn" },
      { label: "Area", value: "Alaska, USA" },
      { label: "Status", value: "Sold" },
    ],
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
  // Alberta
  {
    id: "bc-002",
    title: "Alberta",
    summary: "Alberta…not only oil!",
    region: "Alberta, Canada",
    image:
      "https://images.unsplash.com/photo-1586399254662-c8948cd73421?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [53.0667, -121.5167],
    isForSale: false,
    date: "2024-04-10",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Uranium", "Prospecting"],
    quickFacts: [
      { label: "Commodity", value: "Uranium" },
      { label: "Region", value: "Athabasca Basin, Alberta" },
    ],
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
  // Arizona
  {
    id: "on-003",
    title: "Arizona",
    summary: "Prospecting, ownership and infrastructure map",
    region: "Arizona USA",
    image:
      "https://images.unsplash.com/photo-1549318558-02fe75fc51d2?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [33.4484, -112.074],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Infrastructure", "Prospecting", "Mapping"],
    quickFacts: [
      { label: "Type", value: "Infrastructure Map" },
      { label: "Location", value: "Arizona, USA" },
      {
        label: "Commodity",
        value: "Gold (Au) Silver (Ag), Gold (Au), Tungsten (W)",
      },
      { label: "AREA (HECTARES)", value: "1 700,49" },
    ],
    sections: [
      {
        heading: "Prospecting, ownership and infrastructure map",
        type: "paragraph",
        image: "/images/projects/Arizona/1.jpg",
        content: "",
      },
    ],
  },
  // Australia
  {
    id: "sk-004",
    title: "Australia / New Zealand",
    summary: "",
    region: "Australia / New Zealand",
    image:
      "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [-25.2744, 133.7751],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Copper", "Lithium", "Nickel", "Gold", "Uranium"],
    quickFacts: [
      { label: "Scope", value: "Multiple Projects" },
      { label: "Regions", value: "Australia, New Zealand" },
    ],
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
  // British Columbia BC
  {
    id: "bc-005",
    title: "British Columbia",
    summary: "Little Fort Polymetallic Claim # 1106809",
    region: "British Columbia, Canada",
    image:
      "https://images.unsplash.com/photo-1672851612972-651dd2bb6363?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [51.508691, -120.272788],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Polymetallic", "Gold", "Claim Mapping"],
    quickFacts: [
      { label: "Size", value: "362 Hectares" },
      { label: "Commodities", value: "Cu, Zn, Au" },
      { label: "Tenure", value: "Claim #1106809" },
    ],
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
      {
        type: "PdfDocuments",
        heading: "Little Fort Report",
        documents: [
          {
            fileUrl: "/images/projects/British-Columbia/Little Fort Report.pdf",
            fileName: "Little Fort Report.pdf",
            description:
              "Click below to download the report on the Little Fort claim.",
          },
        ],
      },
      {
        heading: "Gold Potential Assessment",
        type: "paragraph",
        content: `
Based on historical reports and high-grade sampling results, the Mount Burns Property demonstrates significant gold exploration potential. Historical data references grades of up to 21 ounces of gold per ton from specific mineralized zones.

For illustrative purposes only, a hypothetical high-grade zone containing 100,000 tons of material at this grade would represent approximately 2.1 million ounces of gold. Using recent gold prices, this equates to a theoretical in-situ gross value exceeding USD $9.1 billion.

While these figures highlight the property's potential, additional due diligence is required. Independent verification by a Qualified Person under NI 43-101 standards is necessary to determine whether reported grades are representative of a larger mineralized body. Further drilling, resource classification, and metallurgical testing are also required to assess economic viability and recoverable gold content.

The property is located near Stanley, British Columbia, approximately 4 km from Wells and the historic Barkerville mining district, at coordinates 53.068100° N, -121.639125° W.
  `,
      },
    ],
  },
  {
    id: "bc-005",
    title: "Goldin Rock propertys - British Columbia",
    coordinates: [53.0681, -121.639125],
    region: "British Columbia, Canada",
    image:
      "https://images.unsplash.com/photo-1672851612972-651dd2bb6363?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary: "Goldin Rock Resources Inc. - Mount Burns Property",
    sections: [],
  },
  // California
  {
    id: "sk-006",
    title: "California",
    summary: "Patented California Gold Mine",
    region: "California, USA",
    image:
      "https://images.unsplash.com/photo-1499310226026-b9d598980b90?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [36.7783, -119.4179],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Gold", "Patented Mine"],
    quickFacts: [
      { label: "Type", value: "Patented Gold Mine" },
      { label: "District", value: "Rand Mining District" },
      { label: "AREA (HECTARES)", value: "950,00" },
      { label: "COMMODITY", value: "Gold (Au)" },
    ],
    sections: [
      {
        type: "paragraph",
        heading: "Patented California Gold Mine:",
        content: "",
      },
      {
        heading: "Sante Fe Mine - Rand Mining District, California",
        type: "SimpleImage",
        image:
          "/images/projects/California/DaveTwp45N_8W_20250713_page-0001.jpg",
        imageCaption: "California - DaveTwp45N_8W_20250713",
      },
      {
        type: "paragraph",
        content: "Gold grades of up to 0.1 oz/ton! (3.19 grams/ton).",
      },
      {
        type: "ImageGallery",
        images: [
          {
            src: "/images/projects/California/1.png",
            alt: "santa fe 2 gold mine",
          },
          {
            src: "/images/projects/California/LarryTwp9N_4W_GM1_GM60areamap_page-0001.jpg",
            alt: "LarryTwp9N_4W_GM1_GM60areamap",
          },
          {
            src: "/images/projects/California/2.png",
          },
        ],
      },
      {
        type: "SimpleImage",
        image: "/images/projects/California/LP_GeologyGreenMtn_20251214.jpg",
      },
      {
        heading: "Project Documentation",
        type: "PdfDocuments",
        documents: [
          {
            fileUrl:
              "/images/projects/California/LP_Gold Potential of the Green Mtn Project Area_20251230_v2.pdf",
            fileName:
              "LP_Gold Potential of the Green Mtn Project Area_20251230_v2.pdf",
            description: "Click below to download the official mapping report.",
          },
          {
            fileUrl:
              "/images/projects/California/LP_Gold Potential of the Green Mtn Project Area_v2_20251218.pdf",
            fileName:
              "LP_Gold Potential of the Green Mtn Project Area_v2_20251218.pdf",
            description: "Click below to download the official mapping report.",
          },
        ],
      },
    ],
  },
  // Finland
  {
    id: "sk-007",
    title: "Finland",
    summary: "Promising Finland gold project",
    region: "Finland",
    image:
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [61.9241, 25.7482],
    isForSale: false,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Gold", "Investment"],
    quickFacts: [
      { label: "Commodity", value: "Gold" },
      { label: "Status", value: "Seeking Investors" },
    ],
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
      },
    ],
  },
  // Manitoba
  {
    id: "sk-008",
    title: "Manitoba",
    summary: "Manitoba",
    region: "Manitoba, Canada",
    image:
      "https://images.unsplash.com/photo-1632455351235-682d08cbb3e0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [56.1304, -106.3468],
    isForSale: false,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Prospecting", "Geology"],
    quickFacts: [
      { label: "Type", value: "Prospecting Map" },
      { label: "Region", value: "Manitoba" },
    ],
    sections: [
      {
        heading: " Prospecting Maps",
        type: "SimpleImage",
        image: "/images/projects/Manitoba/1.webp",
        imageCaption: "Manitoba geology",
      },
    ],
  },
  // Nevada
  {
    id: "sk-009",
    title: "Nevada",
    summary: "Nevada Project For Sale & Seeking Investors!",
    region: "Nevada, USA",
    image:
      "https://images.unsplash.com/photo-1614823498916-a28a7d67182c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [38.8026, -116.4194],
    isForSale: false,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Gold(Au)", "Silver(Ag)"],
    quickFacts: [
      { label: "Commodity", value: "Gold (Au)" },
      { label: "AREA (HECTARES)", value: "3 116,00" },
      { label: "Status", value: "Seeking Investors" },
    ],
    sections: [
      {
        heading: "Nevada Project For Sale & Seeking Investors!",
        type: "paragraph",
        content:
          "We completed mapping for a client who acquired property in between Newmont and Barrick on the prolific Cortez trend.",
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Nevada/13N 45E Grouped Geology (1)_page-0001.jpg",
      },
      {
        heading: "High grade Nevada gold project for sale",
        type: "paragraph",
        image: "/images/projects/Nevada/1.png",
        content:
          "Disco Zone High Grade Discovery contains intercepts of over 15 g/t over 2m+ widths!",
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Nevada/KM_Nevada_Northumberland_13N 45E Full Geology_20251214_page-0001.jpg",
      },
      {
        heading: "Nevada BLM Mapping",
        type: "paragraph",
        image: "/images/projects/Nevada/2.jpg",
        imageCaption: "Nevada claim map",
        content:
          "Adamson Geomatics can assist with mapping requests for any U.S states including Nevada. Below is an example locating a property area in BLM land sections.",
      },
      {
        type: "ImageGallery",
        images: [
          {
            src: "/images/projects/Nevada/CT_Northumberland Open Sections_Updated_20260108_page-0001.jpg",
            alt: "Nevada geology map",
          },
          {
            src: "/images/projects/Nevada/CT_Northumberland Land Agency Overview V2_20260115_page-0001.jpg",
            alt: "Nevada geology map",
          },
          {
            src: "/images/projects/Nevada/CT_Fourmile Open Sections_20260107_page-0001.jpg",
            alt: "Nevada geology map",
          },
        ],
      },
      {
        heading: "Fourmile Area Geology & Staking Priority Ranking",
        type: "bullet_list",
        content: [
          "1. Geologic Context The project area lies within the Cortez Trend, a world-class Carlin-type gold belt characterized by favorable carbonate and siliceous sedimentary host rocks, strong structural preparation, and proximity to deposits such as Pipeline, Cortez Hills, Goldrush, and Fourmile",
          "2. Geological Data Used • Bedrock geology polygons and legend supplied by the client. • Regional structural and stratigraphic framework interpreted from client GIS layers.",
          "3. Ranking Methodology Only sections classified as open or conditionally open in the land-status review were considered. Ranking criteria included host-rock favorability, proximity to known mineralized trends, adjacency to existing claim blocks, inferred structural continuity, and land-status confidence.",
          "4. Tier 1 - Highest Priority (Low Land-Status Risk) T28N R49E:  Sections 22, 23, 24, 25, 26, 27, 28, 29",
          "5. Tier 2 - Moderate Priority (Conditional Open) T27N R49E:  Section 27 T28N R49E:  Sections 18, 19, 30, 35, 36",
          "6. Tier 3 - Conceptual Targets T28N R48E:  Sections 3, 4, 9, 11, 13, 15, 17, 23, 25, 29 T26N R50E:  Sections 2, 3, 4, 9, 10, 13, 14, 23, 24, 36",
          "7. Notes and Limitations Geological ranking does not imply economic mineralization. Tier 2 and Tier 3 sections carry  increased uncertainty and should be considered secondary opportunities pending additional land-status and geological verification",
          "8. References USGS data base for bedrock geology BLM MLRS Mining Claims Listings and BLM GLO Patent Records.",
        ],
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Nevada/KM_Nevada mapping Staking OverviewMap_20251219_page-0001.jpg",
      },

      {
        type: "ImageGallery",
        heading: "Nevada Geology Maps",
        images: [
          {
            src: "/images/projects/Nevada/13N 45E Grouped Geology (1)_page-0001.jpg",
            alt: "13N 45E Grouped Geology",
          },
          {
            src: "/images/projects/Nevada/Barrick's Fourmile BLM Updated_page-0001.jpg",
            alt: "Barrick's Fourmile BLM",
          },
          {
            src: "/images/projects/Nevada/Barrick's Fourmile Claimants Add 1_page-0001.jpg",
            alt: "Barrick's Fourmile Claimants",
          },
          {
            src: "/images/projects/Nevada/Barrick's Fourmile project Map v2 (1)_page-0001.jpg",
            alt: "Barrick's Fourmile project Map v2",
          },
        ],
      },
      {
        type: "PdfDocuments",
        heading: "Project Documentation",
        documents: [
          {
            fileUrl:
              "/images/projects/Nevada/Northumberland Staking Report (2).pdf",
            fileName: "Northumberland Staking Report (2).pdf",
          },
          {
            fileUrl: "/images/projects/Nevada/T13N+R45E-1.pdf",
            fileName: "T13N+R45E-1.pdf",
          },
          {
            fileUrl:
              "/images/projects/Nevada/Northumberland_Geology_Summaryfinal.pdf",
            fileName: "Northumberland_Geology_Summaryfinal.pdf",
          },
        ],
      },
    ],
  },
  // Newfoundland
  {
    id: "sk-010",
    title: "Newfoundland",
    summary: "Newfoundland",
    region: "Newfoundland, Canada",
    image:
      "https://images.unsplash.com/photo-1592701601033-c17588001fb8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [53.1327, -57.6629],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Rare Earth Elements"],
    quickFacts: [
      { label: "Type", value: "Claim Block Mapping" },
      {
        label: "Commodity (Rare Earth Elements)",
        value:
          "Sc, Y, La, Ce, Pr, Nd, Pm, Sm, Eu, Gd, Tb, Dy, Ho, Er, Tm, Yb, Lu",
      },
      { label: "AREA (HECTARES)", value: "3 700,00" },
    ],
    sections: [
      {
        heading:
          "Newfound claim claim block mapping for geologist client Greg Davison from Hawkeye Gold.",
        type: "bullet_list",
        content: [
          "Raster data processing",
          "Drill hole coller mapping to help with exploration program",
          "Georefrenced transparent maps which were separate mapping projects.",
        ],
      },
      {
        type: "paragraph",
        image: "/images/projects/Newfoundland/1.webp",
        content: "Claims, Patents and Claim Staking Grid for Project Planning",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Newfoundland/2.jpg",
        imageCaption: "Georeferenced geology map with mineral occurrences",
        heading: "Newfoundland Prospecting Maps",
      },
      {
        type: "paragraph",
        content: "Newfoundland Claims and Iron Occurrences",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Newfoundland/NorthArrowAug30TargetGeol.JPG",
        imageCaption: "North Arrow Aug 30 TargetGeol",
      },
      {
        type: "ImageGallery",
        images: [
          {
            src: "/images/projects/Newfoundland/NorthArrowTarget1.jpg",
            alt: "NorthArrowTarget1",
          },
          {
            src: "/images/projects/Newfoundland/NorthArrowStatusMap.JPG",
            alt: "NorthArrowStatusMap",
          },
        ],
      },
    ],
  },
  // NWT
  {
    id: "nt-011",
    title: "NWT",
    summary: "Lithium & Uranium Prospecting targets in Northern Canada.",
    region: "NWT & Nunavut, Canada",
    image:
      "https://images.unsplash.com/photo-1570669405132-f4771bdf399a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [64.8255, -124.8457],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Lithium", "Uranium", "Prospecting", "Pegmatite"],
    quickFacts: [
      { label: "Commodities", value: "Lithium, Uranium" },
      { label: "Status", value: "Open for Staking" },
      { label: "Region", value: "Northern Canada" },
    ],
    sections: [
      {
        heading: "Lithium & Uranium Prospecting",
        type: "paragraph",
        content:
          "I am able to find lithium and uranium targets in northern Canada. I have found several already that are open for staking. Below are targets I have found. For more information, or for assistance finding more targets, email chris@miningpropertymaps.com",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/NWT/NWTprospectsmap.JPG",
      },
      {
        type: "ImageGallery",
        images: [
          {
            src: "/images/projects/NWT/Pegs1.JPG",
          },
          {
            src: "/images/projects/NWT/PlannedStakingArea2.JPG",
          },
          {
            src: "/images/projects/NWT/Target20230830_2_ortho.JPG",
          },
        ],
      },
      {
        type: "ImageGallery",
        images: [
          {
            src: "/images/projects/NWT/NWT.JPG",
          },
          {
            src: "/images/projects/NWT/NT3114.JPG",
          },
          {
            src: "/images/projects/NWT/Target20230830_2.JPG",
          },
        ],
      },
      {
        type: "ImageGallery",
        heading: "NWT Lithium Target with Pegmatite hosting geology",
        images: [
          {
            src: "/images/projects/NWT/1.jpg",
          },
          {
            src: "/images/projects/NWT/2.jpg",
          },
          {
            src: "/images/projects/NWT/3.webp",
          },
        ],
      },

      {
        heading: "NWT Lithium prospect",
        type: "paragraph",
        content:
          "Open for staking as of June 2024. Contact chris@miningpropertymaps.com for more information.",
      },
      {
        heading: "NWT Propecting Maps",
        type: "SimpleImage",
        image: "/images/projects/NWT/4.jpg",
        imageCaption: "Rankin Inlet Claim and Geology Map",
      },
      {
        heading: "Indigenous Lands Mapping",
        type: "paragraph",
        image: "/images/projects/NWT/5.webp",
        content:
          "I always make sure to map alienations, withdrawn areas, parks and First Nations / Indigenous land areas where exploration is or may be restricted.",
      },
      {
        type: "paragraph",
        content:
          "I can make prospecting maps and find targets for you anywhere in the world. Email chris@miningpropertymaps.com with your project requirements.",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/NWT/6.webp",
      },
      {
        type: "paragraph",
        content:
          "This map is a uranium target I found in the NWT. To see the full sized image, email me at chris@miningpropertymaps.com. I am open to finders fee deals if the area gets staked!",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/NWT/7.png",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/NWT/8.jpg",
      },
    ],
  },
  // Ontario
  {
    id: "sk-012",
    title: "Ontario",
    summary: "Ontario",
    region: "Ontario, Canada",
    image:
      "https://images.unsplash.com/photo-1607388510015-c632e99da586?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [51.2538, -85.3232],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Au", "Cu"],
    quickFacts: [
      { label: "Status", value: "Open for Staking" },
      { label: "Region", value: "Northern Canada" },
      { label: "Area (Hecatars)", value: "10 537" },
    ],
    sections: [
      {
        heading: "Geologic Claim Maps",
        type: "bullet_list",
        content: [
          "Marshall's Corner Project (near Cobalt, Ontario)",
          "High-grade lead mineralization, with values exceeding 5% Pb across all samples.",
          "Significant copper enrichment, with grades up to 1.77% Cu, largely attributed to visible chalcopyrite.",
          "Zinc mineralization locally exceeding 2.1% Zn, further boosting the project’s polymetallic potential.",
          "Host rocks include a diabase sill, which historically serves as a favorable host for structurally controlled, high-grade sulphide veins.",
        ],
      },
      {
        type: "ImageGallery",
        images: [
          {
            src: "/images/projects/Ontario/1.png",
          },
          {
            src: "/images/projects/Ontario/2.png",
          },
        ],
      },
      {
        type: "paragraph",
        image: "/images/projects/Ontario/3.jpg",
        heading:
          "Melchett Lake, Ontario project map made for client Hawkeye Gold & Diamond.",
        content: "",
        links: [
          {
            textPreview: "Hawkeye Gold & Diamond",
            url: "https://hawkeyegold.com/",
          },
        ],
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Ontario/4.jpg",
        imageCaption: "Shabu Lake Claims and Mineral Occurrences",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Ontario/5.jpg",
        imageCaption: "Red Lake Properties with Ultramafics",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Ontario/6.jpg",
      },
      {
        type: "paragraph",
        content:
          "I was the Land Manager for Rubicon Minerals from 2006 – 2011 and have mapped several Ontario gold and lithium targets for clients in 2023 and 2024",
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Ontario/Ontario Tungsten Open Ground_page-0001.jpg",
      },
    ],
  },
  // Quebec,
  {
    id: "sk-013",
    title: "Quebec",
    summary: "Quebec",
    region: "Quebec, Canada",
    image:
      "https://images.unsplash.com/photo-1576771304215-6d4d30f7bb63?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [52.9399, -73.5491],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Lithium"],
    sections: [
      {
        heading: "Geologic claim maps",
        type: "paragraph",
        content:
          "Adamson Geomatics was active mapping James Bay for Osisko Development in 2022 and 2023 and as a consultant during the lithium rush of 2022 and we look for targets in this region periodically.",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Quebec/1.jpg",
        imageCaption: "Map of lithium target and target claims",
      },
      {
        type: "SimpleImage",
        heading: "Prospecting Maps",
        image: "/images/projects/Quebec/2.jpg",
        imageCaption:
          "Greenstone Map showing lithium occurrences in relation to claims",
      },
      {
        type: "ImageGallery",
        images: [
          {
            src: "/images/projects/Quebec/JamesBayAug21_A_page-0001.jpg",
          },
          {
            src: "/images/projects/Quebec/LacEwartGraniticPegmatiteOpen_page-0001.jpg",
          },
          {
            src: "/images/projects/Quebec/LacEwartGraniticPegZoomedGeology_page-0001.jpg",
          },
        ],
      },
      {
        type: "ImageGallery",
        heading: "Map of azimut open ground",
        images: [
          {
            src: "/images/projects/Quebec/mapofazimutopenground/image (2).png",
          },
          {
            src: "/images/projects/Quebec/mapofazimutopenground/image (3).png",
          },
        ],
      },
      {
        type: "SimpleImage",
        heading: "Geology Maps",
        image: "/images/projects/Quebec/3.jpg",
      },
      {
        type: "paragraph",
        content: "Staking Maps of targets along iron formation, Ungaava Bay:",
      },
      {
        type: "SimpleImage",
        heading: "Claim Staking Maps",
        image: "/images/projects/Quebec/4.jpg",
      },
      {
        type: "paragraph",
        content: "Property Sale Map showing property covering iron formation:",
      },
      {
        type: "SimpleImage",
        heading: "Marketing Maps",
        image: "/images/projects/Quebec/5.jpg",
      },
    ],
  },
  //Saskatchewan
  {
    id: "sk-014",
    title: "Saskatchewan",
    summary: "Saskatchewan",
    region: "Saskatchewan, Canada",
    image:
      "https://images.unsplash.com/photo-1599861807502-0341592902f6?q=80&w=1299&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [52.9399, -106.4509],
    isForSale: false,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Uranium", "Saskatchewan"],
    quickFacts: [
      { label: "Commodity", value: "Uranium" },
      { label: "Region", value: "Saskatchewan" },
    ],
    sections: [
      {
        heading: "Uranium Target Mapping",
        type: "paragraph",
        content:
          "Adamson Geomatics has found several uranium targets in Saskatchewan. Below is an example of a target I found in the Athabasca Basin.",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Saskatchewan/1.png",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Saskatchewan/2.jpg",
      },
    ],
  },
  // Chile
  //   {
  //     id: "sk-015",
  //     title: "Chile",
  //     summary:
  //       "Copperman - Giant copper porphyry systems confirmed with drilling next to the Escondida and Collahuasi mines!",
  //     region: "Chile",
  //     image:
  //       "https://images.unsplash.com/photo-1490782300182-697b80ad4293?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     coordinates: [-35.6751, -71.543],
  //     isForSale: true,
  //     date: "2024-08-01",
  //     author: "Adamson Geomatics",
  //     contactEmail: "chris@miningpropertymaps.com",
  //     tags: ["Copper"],
  //     quickFacts: [
  //       { label: "Commodity", value: "Copper" },
  //       { label: "Status", value: "Seeking Investors" },
  //     ],
  //     sections: [
  //       {
  //         heading:
  //           "Copperman - Giant copper porphyry systems confirmed with drilling next to the Escondida and Collahuasi mines!",
  //         type: "paragraph",
  //         content: `
  // Escondida is the largest copper mine globally owned by BHP and Rio Tinto located in Chile's Atacama Desert

  // Copperman is a mineral holding company formed to develop three prospective Chilean porphyry targets.

  // Copperman's La Poderosa and Raiya projects are located on the Western Fissure Fault connecting the Collahuasi, El Abra and Chuquicamata mines.

  // Copperman's Luna project is located on the FSV Fault shared by the Escondida mine.
  // `,
  //         links: [
  //           {
  //             textPreview: "Copperman website",
  //             url: "https://www.copperman.com/",
  //           },
  //           {
  //             textPreview: "Escondida",
  //             url: "https://en.wikipedia.org/wiki/Minera_Escondida",
  //           },
  //         ],
  //       },
  //       {
  //         type: "SimpleImage",
  //         image: "/images/projects/Chile/1.png",
  //       },
  //       {
  //         type: "bullet_list",
  //         heading: "SEEKING QUALIFIED INVESTORS",
  //         content: [
  //           "$17 MILLION INVESTED TO-DATE",
  //           "COMPANY ESTABLISHED IN 2011 BY A PROVEN MANAGEMENT TEAM AND BLUE CHIP BOARD OF DIRECTORS",
  //         ],
  //       },
  //       {
  //         type: "paragraph",
  //         content: `
  // 8500 METRES OF DRILLING COMPLETED - Location of copper porphyry area narrowed down based on drilling done so far. Copperman Exploration team is gaining information on likely location of deposit. Needs to be confirmed with more drilling.
  //           `,
  //         VideoLinks: [
  //           {
  //             title: "LA PODEROSA PROJECT VIDEO SUMMARY",
  //             vimeoUrl: "https://vimeo.com/825643151/f3427bc243?fl=pl&fe=sh",
  //           },
  //           {
  //             title: "LUNA PROJECT SUMMARY",
  //             vimeoUrl: "https://vimeo.com/993596847/a8fa78731b?ts=0&share=copy",
  //           },
  //           {
  //             title: "COPPERMAN CEO PRESENTATION",
  //             vimeoUrl: " https://vimeo.com/832317641/9e0b12f992",
  //           },
  //         ],
  //       },
  //       {
  //         type: "paragraph",
  //         content: `
  // FULL PRESENTATION & TECHNICAL REPORTS AVAILABLE (43-101 format) upon request (NDA required)

  // Chile is the largest producer of copper globally from the Antofagasta Region, which produces circa 30% of global copper, including 64% of US copper, from 16 Giant copper mines situated in the Antofagasta Desert Region of Chile.

  // Email chris@miningpropertymaps.com if you are a qualified investor, or working on behalf of one, to connect with project owner
  //         `,
  //       },
  //       {
  //         type: "bullet_list",
  //         heading: "Colombian high grade gold project!",
  //         content: [
  //           "Most holes of recent drill program intercepted high grade gold",
  //           "18.35 g/t Au over 2.77m and 9.29 g/t Au over 1.92m",
  //         ],
  //       },
  //       {
  //         type: "SimpleImage",
  //         image: "/images/projects/Chile/2.png",
  //         imageCaption: "Colombian high grade gold project",
  //       },
  //     ],
  //   },
  // Brazil
  {
    id: "sk-016",
    title: "Brazil",
    summary: "Brazilian Claim Staking Maps:",
    region: "Brazil",
    image:
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1226&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [-14.235, -51.9253],
    isForSale: false,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Claim Staking", "Brazil"],
    sections: [
      {
        type: "SimpleImage",
        image: "/images/projects/Brazil/1.jpg",
        heading: "Brazilian Claim Staking Maps",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Brazil/2.jpg",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Brazil/3.jpg",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Brazil/4.jpg",
        heading: "Brazil Prospecting Maps",
        imageCaption: "Brazil Li Claim Target",
      },
    ],
  },
  // Wyoming
  {
    id: "sk-017",
    title: "Wyoming",
    summary: "Wyoming Thorium Prospecting using GIS",
    region: "Wyoming",
    image:
      "https://images.unsplash.com/photo-1610687660051-9fe41058f9b8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [43.075, -107.291],
    isForSale: false,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Mining Claims", "Wyoming"],
    sections: [
      {
        type: "SimpleImage",
        image: "/images/projects/Wyoming/1.png",
        heading: "Wyoming Thorium Prospecting using GIS",
        imageCaption: "Identification of Wyoming thorium target",
      },
      {
        type: "PdfDocuments",
        heading: "Mining Claim Customer Information",
        documents: [
          {
            fileUrl:
              "/images/projects/Wyoming/BLM_06_0220N_0710W - Halleck - BURGEX INC - 20250925.pdf",
          },
        ],
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Wyoming/ClaimsWyoming.JPG",
        imageCaption: "claims location array interactive map service",
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Wyoming/WyomingHalleckCrk_20250906_page-0001.jpg",
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Wyoming/WyomingHalleckCrk_20250927_page-0001.jpg",
      },
    ],
  },
  // Yukon
  {
    id: "sk-018",
    title: "Yukon",
    summary: "Yukon Prospecting Maps",
    region: "Yukon, Canada",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [60.7212, -135.0568],
    isForSale: false,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Prospecting", "Yukon"],
    sections: [
      {
        type: "paragraph",
        heading: "Yukon Prospecting Maps",
        content: `Yukon claim maps I made for clients to identify targets`,
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Yukon/Yukon with Historical Claims_pages-to-jpg-0001.jpg",
        imageCaption: "Yukon Tungsten Open Ground",
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Yukon/Yukon Tungsten Open Ground 2_page-0001.jpg",
        imageCaption: "Yukon Tungsten Open Ground",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Yukon/1.jpg",
        imageCaption: "Yukon Claim Map Snowline Gold Corp",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Yukon/2.jpg",
        imageCaption: "Yukon Claim Map Snowline Gold Corp",
      },
      {
        type: "SimpleImage",
        image: "/images/projects/Yukon/3.jpg",
      },
    ],
  },
  // Utah
  {
    id: "sk-019",
    title: "Utah",
    summary: "Utah Prospecting Maps",
    region: "Utah, USA",
    image:
      "https://images.unsplash.com/photo-1434730737257-3e97ad16f4b6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [39.321, -111.0937],
    isForSale: false,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Prospecting", "Utah"],
    sections: [
      {
        type: "SimpleImage",
        heading: "Quantum Utah Staking Layout",
        imageCaption: "Quantum Utah Staking Layout 2025117",
        image:
          "/images/projects/Utah/Quantum_UtahStakingLayout_2025117_page-0001.jpg",
      },
      {
        type: "SimpleImage",
        imageCaption: "Quantum Utah Staking Layout 2025129",
        image:
          "/images/projects/Utah/Quantum_UtahStakingLayout_2025129_page-0001.jpg",
      },
    ],
  },
  // nunavut
  {
    id: "sk-020",
    title: "Nunavut",
    summary: "Nunavut Prospecting Maps",
    region: "Nunavut, Canada",
    image:
      "https://images.unsplash.com/photo-1611877667635-8b10d0d7171d?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [63.75, -95.0],
    isForSale: false,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Prospecting", "Nunavut"],
    sections: [
      {
        type: "SimpleImage",
        image:
          "/images/projects/Nunavut/055MNW0038_Shane Lake Project - Ms Claims_page-0001.jpg",
      },
      {
        type: "ImageGallery",
        images: [
          {
            src: "/images/projects/Nunavut/065JNE0019_Nip, Rev (Noranda Expln.)_page-0001.jpg",
            alt: "065JNE0019 Nip, Rev (Noranda Exploration)",
          },
          {
            src: "/images/projects/Nunavut/065JNW0006_Rib & Fst (Noranda)_page-0001.jpg",
            alt: "065JNW0006 Rib & Fst (Noranda)",
          },
          {
            src: "/images/projects/Nunavut/065NSE0001_Outlet Bay_page-0001.jpg",
            alt: "065NSE0001 Outlet Bay",
          },
          {
            src: "/images/projects/Nunavut/065OSE0003_Nutarawit Lake_page-0001.jpg",
            alt: "065OSE0003 Nutarawit Lake",
          },
          {
            src: "/images/projects/Nunavut/066GSE0001_Lost Lake Deep Rose Project_page-0001.jpg",
            alt: "066GSE0001 Lost Lake Deep Rose Project",
          },
          {
            src: "/images/projects/Nunavut/066GSE0002_Naujatuuk Lake Deep Rose (Sandhills Project)_page-0001.jpg",
            alt: "066GSE0002 Naujatuuk Lake Deep Rose (Sandhills Project)",
          },
        ],
      },
    ],
  },
  // Barkerville
  {
    id: "sk-021",
    title: "Barkerville",
    summary: "Barkerville Prospecting Maps",
    region: "Barkerville, Canada",
    image:
      "https://images.unsplash.com/photo-1720132698702-bb798823dd4e?q=80&w=1317&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [53.0881, -121.5133],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Prospecting", "Barkerville"],
    sections: [
      {
        type: "paragraph",
        heading: "Barkerville Prospecting Maps",
        content: `Barkerville claim maps I made for clients to identify targets`,
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Barkerville/BGM_Ownership_DRAFT_r11_page-0001.jpg",
      },
      {
        type: "ImageGallery",
        images: [
          {
            src: "/images/projects/Barkerville/BGM_Ownership_DRAFT_r1 2-3_page-0001.jpg",
            alt: "Barkerville Claim Map 1",
          },
          {
            src: "/images/projects/Barkerville/BGM_Ownership_DRAFT_r1 2-3_page-0002.jpg",
            alt: "Barkerville Claim Map 2",
          },
          {
            src: "/images/projects/Barkerville/BGM_Ownership_DRAFT_r1 4-5_page-0001.jpg",
            alt: "Barkerville Claim Map 2",
          },
          {
            src: "/images/projects/Barkerville/BGM_Ownership_DRAFT_r1 4-5_page-0002.jpg",
            alt: "Barkerville Claim Map 2",
          },
        ],
      },
      {
        type: "SimpleImage",
        heading: " Barkerville Map",
        image: "/images/projects/Barkerville/BARKERVILLE_MAP_03MAR26.jpg",
      },
      {
        type: "SimpleImage",
        heading: "SM Barkerville Placers Map",
        image:
          "/images/projects/Barkerville/SM_BarkervillePlacers_20251115_page-0001.jpg",
      },
      {
        type: "PdfDocuments",
        heading: "Project Documentation",
        documents: [
          {
            fileUrl:
              "/images/projects/Barkerville/geologicSummaryOfBarkervilleClaims.pdf",
            fileName: "geologicSummaryOfBarkervilleClaims.pdf",
          },
        ],
      },
    ],
  },
  // Lexington
  {
    id: "sk-022",
    title: "Lexington",
    summary: "Lexington Prospecting Maps",
    region: "Lexington, Canada",
    image:
      "https://plus.unsplash.com/premium_photo-1694475206309-d201a616ffa3?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [33.98154, -81.23621],
    isForSale: false,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Prospecting", "Lexington"],
    sections: [
      {
        type: "paragraph",
        heading: "GEOLOGICAL MAP OF LEXINGTON PROPERTY",
        content: `Lexington claim maps I made for clients to identify targets`,
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Lexington/Lexington_GeologicalMap_20251221_v2-1.jpg",
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Lexington/Lexington_GeologicalMap_20251221_v2-2.jpg",
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Lexington/Lexington_GeologicalMap_20251221_v2-3.jpg",
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Lexington/Lexington_GeologicalMap_20251221_v2-4.jpg",
      },
      {
        type: "SimpleImage",
        image:
          "/images/projects/Lexington/Lexington_GeologicalMap_20251221_v2-5.jpg",
      },
    ],
  },
  // Texas
  {
    id: "sk-023",
    title: "Texas",
    summary: "Texas Mineral Claims and Occurences Mapping",
    region: "Texas, USA",
    image:
      "https://plus.unsplash.com/premium_photo-1690522330262-5bdf16b17e26?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [31.0545, -97.5635],
    isForSale: false,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Mineral Claims", "Texas"],
    sections: [
      {
        type: "SimpleImage",
        heading: "Mineral Claims And occurences Round Top Mine",
        image:
          "/images/projects/Texas/Round Top V1.1 Scale 1_50000 _page-0001.jpg",
      },
    ],
  },
  // Cripple Creek Alaska
  {
    id: "sk-024",
    title: "Cripple Creek, Alaska",
    summary: "Cripple Creek, Alaska Prospecting Maps",
    region: "Cripple Creek, Alaska, USA",
    image:
      "https://plus.unsplash.com/premium_photo-1690522330262-5bdf16b17e26?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coordinates: [63.6091, -156.1356],
    isForSale: true,
    quickFacts: [
      { label: "Commodity", value: "Gold" },
      { label: "Status", value: "For Sale" },
      { label: "Region", value: "Alaska, USA" },
      { label: "Area (Acres)", value: "1,640± ACRES" },
    ],
    sections: [
      {
        type: "SimpleImage",
        heading: "Mineral Claims And occurences Round Top Mine",
        image:
          "https://fayranches.com/wp-content/uploads/2024/09/bear-hunting-trips-alaska-cripple-creek-gold-mine-e1726179144750.jpg",
      },
      {
        type: "SimpleImage",
        heading: "Mineral Claim #815 — Campbell (136.19 hectares)",
        image: "/images/projects/Alaska/Screenshot 2026-06-12 144530.png",
      },
      {
        type: "SimpleImage",
        heading: "Mineral Claim #816 — Campbell Creek (	427.99 hectares)",
        image: "/images/projects/Alaska/Screenshot 2026-06-12 141901.png",
      },
      {
        type: "paragraph",
        heading: "Property Overview",
        content: `
Cripple Creek Gold Mine, situated deep within Alaska’s untamed wilderness, offers a rare opportunity for both gold miners and gold investors or as a dual-purpose gold mine in the summer and hunting camp in the fall. Located roughly 46 miles north/northwest of McGrath, this expansive property is within the Innoko Mining District, spanning 1,640± acres at the confluence of Bear Creek and Cripple Creek, which flows into Graham Creek and extends to Colorado Creek. The site is comprised of 72 unpatented claims.

With a rich history of gold mining in this area dating back to 1917, the Alamin Mining Corporation acquired or leased these mining claims forming the Cripple Creek Gold Mine in the early 1980s.  Before that time, some of the claims had been mined by various miners, including Willard “Tex” Gates and his son-in-law Dennis Gould. Cripple Creek Mine has been extensively explored and tested, revealing substantial reserves with overburden depths ranging from 8-15 feet. The seller has drilling information on about 25% of the claims.

The property’s location offers more than just mining potential. The area has an abundance of wildlife, including grizzly and black bears, moose, caribou, wolves, wolverines, and lynx, making it a haven for miners and outdoor enthusiasts.

A 1,600± foot gravel runway provides access to this remote location with room to add another 400’ if needed. The site is equipped with a modern suction dredge, a trommel, and additional mining equipment. Multiple cabins are on-site, including crew bunks, a kitchen cabin, a utility cabin, and a supplies cabin. Numerous pieces of heavy equipment are at the mine, including a JD dozer, a Cat loader, and several others.

The property’s remote location is balanced by its accessibility, with a nearby 6,000’ paved airstrip at McGrath. Whether you’re drawn by the prospect of mining or the allure of Alaska’s wilderness, Cripple Creek Gold Mine presents a unique and compelling investment opportunity.
          `,
      },
      {
        type: "ImageGallery",
        images: [
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/untamed-wilderness-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/alaska-wilderness-tours-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/big-game-species-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/world-class-fishing-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/alaska-bush-plane-access-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/prime-hunting-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/bush-plane-access-alaska-gold-mining-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/bear-creek-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/beaver-dam-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/caribou-hunting-trips-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/mammoth-fossils-alaska-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/metal-shed-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/cripple-creek-investment-alaska-cripple-creek-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/gold-mine-opportunities-alaska-cripple-creek-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/remote-gold-mine-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/ski-adventures-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/vast-gold-mines-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/winding-creek-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/adventure-travel-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/airstrip-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/alaska-hunting-trips-alaska-cripple-creek-gold-mine.jpg",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2024/09/dolly-varden-fishing-alaska-cripple-creek-gold-mine.jpg",
          },
        ],
      },
      {
        type: "bullet_list",
        heading: "Property Facts",
        content: [
          "72 unpatented claims; 1,640± claim acres",
          "Access to the property is by private airstrip, approximately 1,600’ long",
          "Overburden averages 12-15 feet",
          "There are three reports available; the highest indicator of gold amounts is 300,000 ounces",
          "Gates claims are leased by the seller and will be conveyed by the seller at closing",
          "Claims are located on Cripple Creek, Bear Creek, and Graham Creek",
          "Claims are located within the historically productive Innoko Mining District",
          "Located 45 miles NNW of McGrath, Alaska, which offers a 6,000± foot long by 100-foot-wide asphalt runway, offering fuel, lodging, and limited supplies",
          "The property is currently permitted for mining operations, and approximately 90% of the claims in the area remain unmined",
          "Test holes indicate rich gold reserves",
          "Equipment and infrastructure on-site",
        ],
      },
    ],
  },
];
