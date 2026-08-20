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

export type KuulaFrame = {
  src: string;
  width: number;
  height: number;
  allowFullScreen?: boolean;
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
    }
  | {
      heading?: string;
      type: "kuulaFrame";
      kuulaFrame: KuulaFrame;
    };

export type QuickFact = {
  label: string;
  value: string;
};

export interface Project {
  id: string;
  type?: "project" | "subproject";
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
  parentProjectId?: string;
  subProjectIds?: string[];
}

export const projects: Project[] = [
  {
    id: "sub-001",
    title: "Goldin Rock Properties - British Columbia",
    type: "subproject",
    isForSale: true,
    parentProjectId: "bc-005",
    coordinates: [53.0681, -121.639125],
    image:
      "https://images.unsplash.com/photo-1672851612972-651dd2bb6363?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary: "Goldin Rock Resources Inc. - Mount Burns Property",
    region: "British Columbia, Canada",
    sections: [
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
      {
        type: "SimpleImage",
        image:
          "/images/projects/British-Columbia/TL_GoldinRock_2025111_page-0001.jpg",
      },
    ],
  },
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
    isForSale: false,
    date: "2024-03-15",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Nickel", "Copper", "Cobalt", "Platinum", "Gold", "Gallium", "Tin"],
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
    tags: ["Uranium"],
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
    tags: ["Gold", "Silver", "Tungsten"],
    quickFacts: [
      { label: "Type", value: "Infrastructure Map" },
      { label: "Location", value: "Arizona, USA" },
      {
        label: "Commodity",
        value: "Gold (Au) Silver (Ag), Tungsten (W)",
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
    image: "https://hydrosmart.com.au/wp-content/uploads/Mining-2.jpg",
    coordinates: [-25.2744, 133.7751],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Copper", "Lithium", "Nickel", "Gold", "Uranium"],
    quickFacts: [
      { label: "Scope", value: "Multiple Projects" },
      { label: "Regions", value: "Australia, New Zealand" },
      { label: "Commodities", value: "Cu, Li, Ni, Au, U" },
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
    subProjectIds: [
      "sub-001",
      "sub-002",
      "sub-004",
      "sub-005",
      "sub-006",
      "sub-007",
      "sub-008",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/City_of_Kamloops.jpg",
    coordinates: [54.901851, -125.133194],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Gold", "Copper", "Silver", "Placer", "GIS", "Land Management"],
    quickFacts: [
      { label: "Properties", value: "Multiple" },
      { label: "Commodities", value: "Au, Cu, Ag, Pb, Zn" },
      { label: "Services", value: "GIS, Land Management, Mapping" },
    ],
    sections: [
      {
        heading: "Residential Real Estate – British Columbia",
        type: "bullet_list",
        content: [
          "Looking to buy a house, condo, or townhome in British Columbia?",
          "Contact Adamson Geomatics to be connected with our trusted residential real estate partner broker.",
          "Buyers referred through us who successfully complete their property purchase with our partner broker may qualify for a bonus rebate payment.",
          "Contact us for more information.",
        ],
      },
      {
        heading: "Goldin Rock Resources Inc. – Mount Burns Property",
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/3.jpg",
      },
      {
        heading: "",
        type: "paragraph",
        content:
          "Prospective Burns Mtn area near Barkerville, B.C.\n* Full 43-101 Geological Evaluation Report available on request.\n* Straddles both north and south sides of Barkerville Hwy 26 between Stanley and Wells, B.C., sites of historic gold rush in the late 1800s to early 1900s.\n* Property includes 7 contiguous claims, all in good standing (MTO link).",
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
        content:
          "* 1,100 Hectares of hard rock mineral claims and 131 hectares of placer claims\n  * Historical hard rock and placer gold finds on property\n    * The subject site, Burns Mountain was the first hard rock mine in the 1800's and used a simple 5 stamp mill to crush rock and retrieve the gold in a small-scale operation. The north face of Burns Mountain has not been touched and is ready for productive mining.\n      See report on this property's history, past exploration. Year-round access to Quesnel, major highways via Barkerville Hwy\n* US Listed Public Company in excellent standing can be included in package sale.",
      },
      {
        heading: "Golden Tiger Minerals – Tiger Property",
        type: "paragraph",
        image: "/images/projects/British-Columbia/6.jpg",
        content:
          "Gold and other precious metal potential.\nMineralized quartz float and coincidental soil and stream anomalies were discovered on the property in 1991, samples of mineralized vein float up to 0.20 metres in size returning up to 8.23 g/t Au, 249.3 g/t Ag, 844 ppm Cu and 0.41% Pb. Click here to see presentation.",
      },
      {
        heading: "Golden Tiger Minerals – Sikanni Property",
        type: "paragraph",
        image: "/images/projects/British-Columbia/7.jpg",
        content:
          "GOLDEN TRIANGLE AREA GOLD CLAIM!\nIn 2021, grades from historical trenching included 4.87% Cu and 64.8 ppm Ag over 0.50 metres and a grab sample of 5.92% Cu and 53.1 ppm Ag.",
      },
      {
        heading: "Golden Tiger Minerals – Millar Property",
        type: "paragraph",
        image: "/images/projects/British-Columbia/8.jpg",
        content:
          "The CY 3 vein features a grab sample returning 2.97 g/t gold from a rusty, siliceous shear zone about 20 metres long, striking 250° with disseminated chalcopyrite and arsenopyrite throughout.\nThe Red 23 showing is at the far north claim boundary. This showing is underlain primarily by the Hazelton Group of sedimentary rocks similar to the Eskay Creek package consisting of silicified black argillite with traces of pyrrhotite. The Red 23 showing is within an intense iron oxide alteration containing 3-5% pyrrhotite and pyrite with 1-3 mm wide quartz veinlets.\nSeveral projects in Golden Triangle and B.C Interior for sale",
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
        content: "Wells / Barkerville, B.C – Cariboo Region",
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
        content:
          "As well as mining property maps, Adamson Geomatics also creates advanced GIS maps for the forestry, oil and gas, transportation, utilities, infrastructure and environmental industries.\nBelow are figures for the Whatshan Lake Vegetation Monitoring Reports for 2015 and 2016 that Adamson Geomatics completed for G3 Consulting Ltd. on behalf of BC Hydro.\nTransect mapping was conducted with a GPS, and bathymetry was produced from depth readings obtained from a sonar device. Depth data was processed in ArcGIS and sample points were overlaid. Image classification and NDVI analysis was conducted on satellite imagery.",
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
        heading: "Spectral Classification Maps",
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
  // British Columbia - Little Fort Polymetallic Claim
  {
    id: "bc-241",
    title: "Little Fort Polymetallic Claim",
    summary:
      "Little Fort Polymetallic Claim #1106809 - 362 hectares of VMS potential, 1 hour north of Kamloops, BC.",
    region: "British Columbia, Canada",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/The_North_Thompson_River_at_Little_Fort_-_panoramio.jpg",
    coordinates: [50.809336, -120.406309],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Copper", "Zinc", "Gold"],
    quickFacts: [
      { label: "Size", value: "362 Hectares" },
      { label: "Commodities", value: "Cu, Zn, Au" },
      { label: "Tenure", value: "Claim #1106809" },
    ],
    sections: [
      {
        heading: "360° Site Panorama",
        type: "kuulaFrame",
        kuulaFrame: {
          src: "https://kuula.co/share/LZv7Y/collection/7TDcn?logo=1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1&alpha=0.91",
          width: 800,
          height: 600,
          allowFullScreen: true,
        },
      },
      {
        heading: "Drone footage image of outcrop",
        type: "SimpleImage",
        image:
          "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229475/WhatsApp_Image_2026-08-18_at_3.46.28_AM_juejfo.jpg",
        imageCaption:
          "the slope angle for the outcrop is 36 deg, length is 15.2 m, with 9.2 m height difference",
      },
      {
        type: "ImageGallery",
        images: [
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787245447/WhatsApp_Image_2026-08-20_at_5.44.00_PM_clzcnk.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229479/WhatsApp_Image_2026-08-18_at_5.45.12_AM_2_ifnwvh.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229480/WhatsApp_Image_2026-08-18_at_5.45.12_AM_p4ixn6.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229479/WhatsApp_Image_2026-08-18_at_5.47.59_AM_1_eeqjhs.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229479/WhatsApp_Image_2026-08-18_at_5.45.12_AM_1_fxzcbs.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229478/WhatsApp_Image_2026-08-18_at_5.45.11_AM_4_cbaogr.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229478/WhatsApp_Image_2026-08-18_at_5.45.12_AM_5_bidnbl.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229478/WhatsApp_Image_2026-08-18_at_5.45.11_AM_1_v8s3r6.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229477/WhatsApp_Image_2026-08-18_at_5.45.11_AM_a6zdhd.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229477/WhatsApp_Image_2026-08-18_at_5.45.11_AM_2_dam7pe.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229476/WhatsApp_Image_2026-08-18_at_5.45.12_AM_4_v3t7u5.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229476/WhatsApp_Image_2026-08-18_at_5.45.12_AM_3_kdljzd.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229476/WhatsApp_Image_2026-08-18_at_5.47.59_AM_bwrgrg.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787229475/WhatsApp_Image_2026-08-18_at_5.45.11_AM_3_jsslcq.jpg",
          },
        ],
      },
      {
        type: "ImageGallery",
        images: [
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231691/LFCA-005_105757_hw4vfo.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231691/UNK_105754_n3qdtk.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231690/UNK_105753_t0y2pg.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231687/LFCA-009_105761_lffztl.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231684/LFCA-004_105756_jxuvy2.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231681/LFCA-003_105755_sii32v.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231679/LFCA-010_105763_srmwe6.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231674/LFCA-007_105759_dz5eyj.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231668/LFCA-009B_105762_zfd7wl.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231663/LFCA-006_105758_nkscit.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231650/LFCA-008_105760_mnmajk.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231650/LFCA-002_UNK_ytrnj5.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231649/LFCA-002_105752_fg6nh4.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1787231639/LFCA-001_105751_wvvjaf.jpg",
          },
        ],
      },
      {
        heading:
          "Little Fort Polymetallic Claim #1106809 - Little Fort, B.C (1 hr drive north of Kamloops)",
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
          "Little Fort Polymetallic claim # 1106809 (good to Oct 15, 2026) - 362 hectares",
          "“Excellent VMS Potential” according to prospector who found prospect on claim (Robert Bourdon with Ministry of Mines)",
          "Surrounded by New Gold - drilled for 4 grams per ton over 3 metres previously.",
          "I found a copper-zinc anomaly on my claim from review of historical work!",
        ],
      },
      {
        heading:
          "Adamson Geomatics research identified a previously located mapped 10km long copper-zinc anomaly identified in 1999 by the Ministry of Mines and two respected prospectors.",
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/2.jpg",
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
    ],
  },
  // California
  {
    id: "sk-006",
    title: "California",
    summary: "Patented California Gold Mine",
    region: "California, USA",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0f/5d/30/94/san-bernardino-national.jpg",
    coordinates: [36.7783, -119.4179],
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Gold"],
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
      "https://images.squarespace-cdn.com/content/v1/6113853c291f13180a11ed5d/1631252734076-TZROH5G12PYEFY7OWPN8/unsplash-image-oF7hh97lVqA.jpg",
    coordinates: [61.9241, 25.7482],
    isForSale: false,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Gold", "Investment"],
    quickFacts: [{ label: "Commodity", value: "Gold" }],
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
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/m/a/manitoba-andre-brandt.jpg?crop=0%2C7%2C2048%2C1075&wid=1200&hei=630&scl=1.7066666666666668",
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
    tags: ["Gold", "Silver"],
    quickFacts: [
      { label: "Commodity", value: "Gold (Au), Silver (Ag)" },
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
      "https://www.renewcanada.net/wp-content/uploads/2020/10/newfoundland-rural-scaled.jpg",
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
      "https://i.guim.co.uk/img/media/ab3af563226dcfb144cbc8e919f39f3897233d64/0_68_2000_1200/master/2000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b515b60106a04e953bceff784c5697f7",
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
    tags: ["Prospecting", "Yukon", "Gold"],
    subProjectIds: ["sub-003"],
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
  // {
  //   id: "sk-019",
  //   title: "Utah",
  //   summary: "Utah Prospecting Maps",
  //   region: "Utah, USA",
  //   image:
  //     "https://images.unsplash.com/photo-1434730737257-3e97ad16f4b6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   coordinates: [39.321, -111.0937],
  //   isForSale: false,
  //   author: "Adamson Geomatics",
  //   contactEmail: "chris@miningpropertymaps.com",
  //   tags: ["Prospecting", "Utah"],
  //   sections: [
  //     {
  //       type: "SimpleImage",
  //       heading: "Quantum Utah Staking Layout",
  //       imageCaption: "Quantum Utah Staking Layout 2025117",
  //       image:
  //         "/images/projects/Utah/Quantum_UtahStakingLayout_2025117_page-0001.jpg",
  //     },
  //     {
  //       type: "SimpleImage",
  //       imageCaption: "Quantum Utah Staking Layout 2025129",
  //       image:
  //         "/images/projects/Utah/Quantum_UtahStakingLayout_2025129_page-0001.jpg",
  //     },
  //   ],
  // },
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
    id: "sub-002",
    title: "Lexington",
    summary: "Lexington Prospecting Maps",
    region: "Lexington, Canada",
    type: "subproject",
    parentProjectId: "bc-005",
    image:
      "https://storyofbutte.org/files/fullsize/2355ddedbdb16da41ad8289a7fcee3a3.jpg",
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
      "https://fayranches.com/wp-content/uploads/2024/09/beaver-dam-alaska-cripple-creek-gold-mine.jpg",
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
  // sub project for Yukon Woodchopper Gold Claim
  {
    id: "sub-003",
    title: "Woodchopper Gold Claim",
    summary: "$12,500,000|Circle, Alaska |1,418± ACRES",
    region: "yukon, Alaska",
    type: "subproject",
    isForSale: true,
    parentProjectId: "sk-018",
    image:
      "https://fayranches.com/wp-content/uploads/2023/03/alaska-property-for-sale-woodchopper-gold-claim-Photo-from-NPS-Josh-Spice-1.png",
    coordinates: [65.188135, -151.447157],
    tags: ["Gold"],
    quickFacts: [
      { label: "Type", value: "Claim Block Mapping" },
      {
        label: "Commodity",
        value: "Au",
      },
      { label: "AREA (HECTARES)", value: "3 700,00" },
    ],
    sections: [
      {
        type: "ImageGallery",
        heading: "Project Overview",
        images: [
          {
            src: "https://fayranches.com/wp-content/uploads/2023/03/Charlie-river-fall-colors-alaska-woodchopper-gold-claim-photo-by-NPS-Josh-Spice-e1695657486662.png",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2023/03/Yukon-in-the-fall-alaska-woodchopper-gold-claim-photo-by-NPS-Josh-Spice.png",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2023/03/merging-creeks-alaska-woodchopper-gold-claim-photo-by-NPS-e1695657351848.png",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2023/03/floating-the-river-alaska-woodchopper-gold-claim-ptoto-by-NPS-Josh-Spice.png",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2023/03/Bear-alaska-woodchopper-gold-claim-photo-by-NPS-Jacob-Frank.png",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2023/03/cabin-alaska-woodchopper-gold-claim-photo-by-NPS-Josh-Spice.png",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2023/03/Coal-creek-camp-alaska-woodchopper-gold-claim-photo-by-NPS-Al-Hendricks-Jr.png",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2023/03/Roadhouse-alaska-woodchopper-gold-claim-photo-by-NPS.png",
          },
        ],
      },
      {
        type: "paragraph",
        heading: "Property Overview",
        content: `
The year was 1898. One of the most significant events in Alaska’s history was in full swing, The Klondike-Alaska Gold Rush. The Klondike Gold Rush first began in 1896 when gold was discovered in the Yukon Territory. One of the most prominent areas of the Klondike Gold Rush was the Woodchopper Creek region, which is located about 200 river miles downstream of Dawson City, the epicenter of the gold rush. Woodchopper Creek was, and still is today, an attractive location for miners due to a significant amount of high-grade gold and other valuable minerals.

This offering, “Woodchopper Creek Gold Claim”, consists of a set of 52 claims representing a total of about 1418± acres, with 15 of these claims (about 230± acres) being patented and the remaining 37 claims (about 1188± acres) being unpatented. Located in the Yukon-Koyukuk Borough between the towns of Circle and Eagle, Alaska, the property is an inholding situated within the Yukon-Charley Rivers National Preserve managed by the US National Park Service (NPS). The Property’s 15 patented claims were periodically mined up through the 1980s, whereas the 37 unpatented claims remain undeveloped.

One of the most notable aspects of the Woodchopper Creek Gold Claims is the unique geology of the region. The area is characterized by rugged, mountainous terrain located in the heart of the Tintina Gold Belt. Woodchopper Creek Gold Claim is part of the mixed forest/scrub-shrub permafrost ecosystem of interior Alaska. It is comprised of highland, lowland, wetland, and riparian features that support more than forty wildlife species, including black bear, grizzly bear, caribou, Dall sheep, moose, wolf, and wolverine. These species use the property as either full-time or temporary habitat making the property highly valuable for conservation purposes. The Yukon River supports three species of salmon at this location – coho, Chinook, and chum. Chinook salmon spawn at the mouth of Woodchopper Creek upstream of its confluence with the Yukon River. The lack of wildfire damage in this area enhances the value of the relatively pristine character when compared with neighboring landscapes that have suffered wildfire damage in the recent past.

The Woodchopper Creek Gold Claims have a rich history and remain a significant source of precious metals in the Yukon Territory. The region's unique geology and high-grade ores continue to attract mining operations. The potential for significant profits makes the area a desirable location for both small and large-scale mining operations. While the area presents many challenges, the rewards for successful mining ventures can be substantial
        `,
      },
    ],
  },

  {
    id: "sub-004",
    title: "Mt. McQuillan Property - British Columbia",
    type: "subproject",
    parentProjectId: "bc-005",
    isForSale: true,
    region: "British Columbia, Canada",
    image:
      "https://content.app-sources.com/s/08901972839218532/uploads/Images/quay-9010625.jpg",
    coordinates: [49.109795, -124.606089],
    summary:
      "Historic gold-silver-copper-lead vein property located 15 km SE of Port Alberni, BC.",
    quickFacts: [
      { label: "Property", value: "Mt. McQuillan Property" },
      {
        label: "Location",
        value: "15 km SE of Port Alberni, British Columbia",
      },
      { label: "Area", value: "338.3 ha" },
      { label: "Asking Price", value: "$55000.00 + 2% nsr" },
      { label: "Commodities", value: "Au, Ag, Cu, Pb, Zn" },
    ],
    tags: ["Gold", "Silver", "Copper", "Lead", "Zinc"],
    sections: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "The Mt. McQuillan Property covers 338.3 hectares located 15 km southeast of Port Alberni, British Columbia. The property hosts several historic mineral occurrences with documented past production and high-grade sampling results.",
      },
      {
        heading: "Mineral Occurrences",
        type: "bullet_list",
        content: [
          "Gillespie Vein (092F 082) — Historic gold-silver-copper-lead vein. Historic production of 949 tons yielded 8,056 g Au, 43,669 g Ag, 4,244 kg Cu and 12,677 kg Pb. Later sampling returned up to 26.65 g/t Au from dump material.",
          "McQuillan Vein (092F 437) — Shear-hosted quartz vein with pyrite, sphalerite, galena and chalcopyrite. Representative sample assayed 5.5 g/t Au and 20.6 g/t Ag.",
          "Sol B Showing (092F 385) — Three mineralized zones with Au-Ag-Cu-Pb-Zn mineralization. Best reported vein assayed 2.4 g/t Au, 85.7 g/t Ag, 0.24% Cu, 1.95% Pb and 1.1% Zn.",
        ],
      },
      {
        heading: "Historic Production",
        type: "bullet_list",
        content: [
          "Gillespie Vein (092F 082): 949 tons ore mined",
          "Gold: 8,056 g Au",
          "Silver: 43,669 g Ag",
          "Base Metals: 4,244 kg Cu; 12,677 kg Pb",
        ],
      },
      {
        heading: "Exploration Highlights",
        type: "bullet_list",
        content: [
          "Historic underground mining demonstrates the presence of economic-grade mineralization.",
          "1988 drilling intersected 0.20 m grading 0.214 oz/t Au and 9.25 oz/t Ag at the Gillespie Vein.",
          "1990 chip sampling returned 7.33 g/t Au and 317.09 g/t Ag from the Gillespie Vein.",
          "2001 dump sampling returned up to 26.65 g/t Au with elevated Ag, Cu, Pb and Zn.",
          "McQuillan Vein sampling returned 5.5 g/t Au and 20.6 g/t Ag.",
          "Sol B Showing returned assays up to 2.4 g/t Au, 85.7 g/t Ag, 0.24% Cu, 1.95% Pb and 1.1% Zn.",
          "The Sol B mineralization is interpreted as a possible northern extension of the Gillespie mineralized shear.",
        ],
      },
      {
        heading: "Location Map",
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/McQuillan.png",
        imageCaption:
          "Mt. McQuillan Property location, 15 km SE of Port Alberni, BC.",
      },
    ],
  },

  {
    id: "sub-005",
    title: "Lightning Peak Property - British Columbia",
    type: "subproject",
    parentProjectId: "bc-005",
    isForSale: true,
    region: "British Columbia, Canada",
    image: "/images/projects/British-Columbia/lightningPeak.png",
    coordinates: [50.08, -118.61], // TODO: replace with actual lat/long
    summary:
      "746.77-hectare polymetallic silver-lead-zinc vein property comprising six documented BC MINFILE occurrences.",
    quickFacts: [
      { label: "Property", value: "Lightning Peak Property" },
      { label: "Area", value: "746.77 hectares" },
      { label: "Location", value: "British Columbia, Canada" },
      { label: "Purchase Price", value: "CAD $80,000.00" },
      { label: "Royalty", value: "2% NSR" },
      { label: "Commodities", value: "Au, Ag, Pb, Zn, Cu" },
    ],
    tags: ["Gold", "Silver", "Lead", "Zinc", "Copper"],
    sections: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "The Lightning Peak Property is a 746.77-hectare mineral claim package comprising six documented BC MINFILE occurrences. The property contains historic precious and base metal occurrences, recognized as a past-producing polymetallic silver-lead-zinc vein system. The package offers an attractive grassroots to advanced exploration opportunity with numerous historically identified mineralized structures that warrant modern exploration upside through modern geological mapping, geochemistry and drilling.",
      },
      {
        heading: "High-Grade Silver Mineralization",
        type: "bullet_list",
        content: [
          "6,600.6 g/t Ag over 0.9 metres (diamond drilling)",
          "2,790 g/t Ag with 1.94% Pb and 3.82% Zn (grab sample)",
          "1,482 g/t Ag with 1.81% Pb and 26.77% Zn (grab sample)",
          "112.93 g/t Ag and 11.48% Zn over 0.7 metres true width (diamond drilling)",
        ],
      },
      {
        heading: "Historic Ore Shipment",
        type: "paragraph",
        content:
          "In 1983, a shipment of 11 tonnes of crude ore reportedly averaged 2,101.6 g/t Silver, 0.05% Copper, 0.50% Lead and 1.10% Zinc.",
      },
      {
        heading: "Favourable Geology",
        type: "paragraph",
        content:
          "Mineralization is hosted in structurally controlled quartz-sulphide veins associated with regional shear zones, a proven setting for high-grade polymetallic deposits.",
      },
      {
        heading: "Exploration & Mineralization",
        type: "paragraph",
        content:
          "Historic exploration identified polymetallic quartz veins hosted within regional shear zones. Documented sulphide minerals include galena, sphalerite, chalcopyrite, pyrite, pyrrhotite and tetrahedrite together with silver-bearing minerals. Historic underground development and prospecting confirmed the presence of economically significant precious- and base-metal mineralization across multiple occurrences. Other documented showings demonstrate similar structurally controlled mineralization, indicating the potential for a district-scale vein system. Although historical prospecting, underground development and surface sampling confirmed mineralization, much of the property has not been systematically evaluated using modern exploration techniques.",
      },
      {
        heading: "Historic Exploration Highlights",
        type: "bullet_list",
        content: [
          "Underground development.",
          "Multiple documented mineral occurrences across the property.",
          "Historic prospecting, mapping and sampling.",
          "Veins remain open along strike and at depth.",
          "Limited modern exploration leaves substantial upside potential.",
        ],
      },
      {
        heading: "Property Outline",
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/lightningPeak.png",
        imageCaption: "Lightning Peak property outline",
      },
      {
        heading: "Site Photos",
        type: "ImageGallery",
        images: [
          {
            src: "/images/projects/British-Columbia/rampaloAdit.png",
            alt: "Rampalo adit",
          },
          {
            src: "/images/projects/British-Columbia/SilverSpotadit.png",
            alt: "Silver Spot adit",
          },
          {
            src: "/images/projects/British-Columbia/Inside the Rampalo adit.png",
            alt: "Inside the Rampalo adit",
          },
          {
            src: "/images/projects/British-Columbia/Silver Spot Tailings.png",
            alt: "Silver Spot tailings",
          },
          {
            src: "/images/projects/British-Columbia/Silver Spot Tailings2.png",
            alt: "Silver Spot Tailings",
          },
        ],
      },
    ],
  },
  {
    id: "sub-006",
    title: "Babs Property - British Columbia",
    type: "subproject",
    parentProjectId: "bc-005",
    isForSale: true,
    region: "British Columbia, Canada",
    image: "/images/projects/British-Columbia/Babs_Map.jpg",
    coordinates: [54.91, -125.06], // TODO: replace with actual lat/long (near Babine Lake, ~9 km from Granisle Mine)
    summary:
      "1,395.70-hectare porphyry copper-gold exploration property within the Babine Lake mining camp, 9 km from the former Granisle Mine.",
    quickFacts: [
      { label: "Property", value: "Babs Property" },
      { label: "Area", value: "1,395.70 hectares" },
      { label: "Location", value: "British Columbia, Canada" },
      { label: "MINFILE", value: "093L 342" },
      { label: "Purchase Price", value: "CAD $120,000.00" },
      {
        label: "Royalty",
        value: "2% NSR (buyback of 1% for CAD $1,000,000.00)",
      },
      { label: "Commodities", value: "Cu, Au, Ag, Mo" },
    ],
    tags: ["Copper", "Gold", "Silver", "Molybdenum", "Porphyry"],
    sections: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "The Babs Property is a mineral exploration opportunity located in British Columbia, Canada. The property consists of 6 mineral claims totaling approximately 1,395.70 hectares within a prospective geological environment associated with copper-gold mineralization. Historical exploration has identified geological features and mineral occurrences consistent with a copper-gold-silver exploration target. The property provides an opportunity for investors seeking exposure to a strategically positioned exploration asset with historical technical work and significant exploration upside.",
      },
      {
        heading: "Acquisition Opportunity",
        type: "bullet_list",
        content: [
          "Purchase Price: $120,000.00 CAD",
          "Net Smelter Return (NSR): 2% NSR Royalty retained on future mineral production",
          "NSR Buyback Provision: purchaser has the option to buy back 1% of the 2% NSR for $1,000,000.00 CAD",
          "Upon exercise of the buyback option, the remaining royalty interest would be 1% NSR retained",
        ],
      },
      {
        heading: "Investment Highlights",
        type: "bullet_list",
        content: [
          "1,395.70-hectare mineral claim package",
          "British Columbia mining jurisdiction",
          "Copper-gold-silver exploration opportunity",
          "Historical exploration database",
          "Existing geological information and targets",
          "Low acquisition entry cost",
          "Attractive royalty structure",
          "Exploration upside with future discovery potential",
        ],
      },
      {
        heading: "Mineral Occurrence",
        type: "paragraph",
        content:
          "The property is associated with the Babs mineral occurrence (MINFILE 093L 342), which is classified as a porphyry copper ± molybdenum ± gold exploration environment. The documented commodities include gold and copper.",
      },
      {
        heading: "Historical High-Grade Sample Highlights",
        type: "bullet_list",
        content: [
          "Sample 45224: 5.0 g/t Au (ICP-ES)",
          "Sample 042456: 2.0 g/t Au (ICP-ES)",
          "These results were obtained from mineralized intrusive rock samples containing approximately 1–2% pyrite with traces of chalcopyrite (2012 grab samples).",
        ],
      },
      {
        heading: "Geological Programs",
        type: "bullet_list",
        content: [
          "Geological mapping",
          "Prospecting",
          "Rock sampling",
          "Geological interpretation",
          "Mineral occurrence evaluation",
        ],
      },
      {
        heading: "Geochemical Surveys",
        type: "bullet_list",
        content: [
          "Soil geochemical surveys",
          "Rock geochemistry",
          "Follow-up sampling",
          "These programs identified discrete geochemical anomalies requiring additional evaluation.",
        ],
      },
      {
        heading: "Geophysical Exploration",
        type: "bullet_list",
        content: [
          "Magnetic anomalies",
          "Intrusive bodies",
          "Potential sulphide-bearing zones",
          "These datasets provide a foundation for modern exploration targeting.",
        ],
      },
      {
        heading: "Prospecting & Sampling",
        type: "paragraph",
        content:
          "In 2012, prospecting crews completed field investigations on the Babs claims, collecting samples from available bedrock exposures. Several samples were identified as altered intrusive rocks containing pyrite and chalcopyrite.",
      },
      {
        heading: "Geological Opportunity",
        type: "bullet_list",
        content: [
          "Intrusive rock units",
          "Hydrothermal alteration zones",
          "Copper sulphide occurrences",
          "Historical geochemical anomalies",
          "Exploration targets requiring additional evaluation",
        ],
      },
      {
        heading: "Exploration Potential",
        type: "bullet_list",
        content: [
          "Compilation of historical exploration data",
          "Updated geological interpretation",
          "Detailed geophysical surveys",
          "Soil and rock geochemistry",
          "Drill target development",
          "Diamond drilling programs",
        ],
      },
      {
        heading: "Investor Considerations",
        type: "bullet_list",
        content: [
          "A defined land position",
          "Existing technical history",
          "A clear acquisition structure",
          "Retained royalty participation",
          "Potential for value creation through exploration success",
        ],
      },
      {
        heading: "Regional Geology & Setting",
        type: "paragraph",
        content:
          "The Babs Mineral Claim is located within a highly prospective porphyry copper district of central British Columbia and is situated approximately 9 km from the former Granisle Mine and 17 km from the Bell Mine. The claim area lies within the broader Babine Lake mining camp, where several significant copper-gold porphyry systems occur. The regional geology is characterized by Jurassic Hazelton Group volcanic rocks intruded by Eocene Babine Plutonic Suite porphyries, which are associated with copper, gold, silver, and molybdenum mineralization. The close proximity of the Babs Mineral Claim to these past-producing deposits suggests that it occupies a favourable geological setting influenced by the same intrusive, structural, and hydrothermal processes responsible for mineralization at the Granisle and Bell deposits.",
      },
      {
        heading: "Granisle Mine (Nearby Past Producer)",
        type: "paragraph",
        content:
          "The Granisle Mine, located approximately 9 km from the Babs Mineral Claim on MacDonald Island in Babine Lake, is a past-producing porphyry copper-gold-silver-molybdenum deposit. The deposit is hosted by Jurassic Hazelton Group volcanic rocks intruded by Eocene Babine Plutonic Suite quartz diorite and biotite-feldspar porphyry bodies. Mineralization occurs as stockwork-style veining and disseminations, with chalcopyrite, bornite, pyrite, and molybdenite as the principal ore minerals. The deposit is associated with potassic, sericitic, and propylitic alteration zones, and mineralization is structurally controlled by northwest-trending faults and fractures. Mining operations from 1966 to 1982 produced significant quantities of copper, gold, silver, and molybdenum, confirming the economic potential of the Babine Lake porphyry district.",
      },
      {
        heading: "Bell Mine (Nearby Past Producer)",
        type: "paragraph",
        content:
          "The Bell Mine, located approximately 17 km from the Babs Mineral Claim on Newman Peninsula at the north end of Babine Lake, is another major past-producing porphyry copper deposit. The Bell deposit is hosted primarily by Eocene Babine Plutonic Suite biotite-feldspar porphyry intrusions that cut Jurassic Hazelton Group volcanic rocks and Cretaceous Skeena Group sedimentary rocks. Copper mineralization occurs mainly as disseminated and fracture-controlled chalcopyrite with lesser bornite, associated with quartz stockwork veining and hydrothermal alteration. The deposit also contains gold, silver, zinc, lead, and molybdenum values. Production began in 1972, and the Bell Mine processed approximately 71 million tonnes of ore, making it one of the significant copper producers within the Babine Lake porphyry camp.",
      },
      {
        heading: "Property Location Map",
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/Babs_Map.jpg",
        imageCaption:
          "Babs Property claim outline with MINFILE 093L 342 occurrence.",
      },
      {
        heading: "Regional Context Map",
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/Babs_Regional_Map.jpg",
        imageCaption:
          "Babs Property relative to the Bell and Granisle mines, Babine Lake.",
      },
    ],
  },
  {
    id: "sub-007",
    title: "The Polley Property - British Columbia",
    type: "project",
    parentProjectId: "bc-005",
    isForSale: true,
    region: "British Columbia, Canada",
    image:
      "https://i.cbc.ca/ais/1.4237116,1756424464000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C172%2C3400%2C1912%29%3B",
    coordinates: [52.531841, -121.582004],
    summary:
      "1,100.66-hectare alkalic porphyry copper-gold exploration property located in the same district as the producing Mount Polley Mine.",
    quickFacts: [
      { label: "Property", value: "The Polley Property" },
      { label: "Area", value: "1,100.66 hectares" },
      { label: "Location", value: "British Columbia, Canada" },
      {
        label: "Claims",
        value: "Three mineral claims — Tenures 1101390, 1112234, 1121170",
      },
      {
        label: "Deposit Model",
        value: "Alkalic Porphyry Copper-Gold (Deposit Type L03)",
      },
      { label: "Purchase Price", value: "CAD $75,000.00 Cash" },
      {
        label: "Royalty",
        value: "2% NSR (buyback of 1% for CAD $1,000,000.00, leaving 1% NSR)",
      },
      { label: "Commodities", value: "Cu, Au, Ag" },
    ],
    tags: ["Copper", "Gold", "Silver", "Porphyry"],
    sections: [
      {
        heading: "Investment Highlights",
        type: "bullet_list",
        content: [
          "Large Strategic Land Position — 1,100.66 hectares of mineral claims located within a proven copper-gold district of British Columbia.",
          "Alkalic Porphyry Copper-Gold Target — the Property is interpreted as prospective for an alkalic porphyry Cu-Au system, a globally important deposit environment associated with large-scale copper and gold discoveries.",
          "Immediate District-Scale Advantage — located in the same broader mineral district as the producing Mount Polley Mine, providing strategic geological context and proximity to established mining infrastructure.",
        ],
      },
      {
        heading: "Executive Summary",
        type: "paragraph",
        content:
          "Prospectors Micheal Langille and Richard Young present The Polley Property, a high-potential copper-gold exploration opportunity positioned in one of British Columbia's recognized mineral belts. The Property consists of three mineral claims totaling 1,100.66 hectares and represents a strategic acquisition opportunity for a private mining company seeking exposure to copper-gold exploration upside in a mature mining jurisdiction. The geological setting is favourable for discovery, with the Property interpreted to share characteristics associated with alkalic porphyry copper-gold systems, including favourable intrusive environments, structural controls, magnetic responses, and geochemical signatures. The Property's proximity to the operating Mount Polley Mine provides a significant strategic advantage. Mount Polley is a producing copper-gold-silver operation and demonstrates the established mineral potential of the surrounding district.",
      },
      {
        heading: "Mt Polley _ Rick Young property",
        type: "SimpleImage",
        image:
          "https://res.cloudinary.com/dfytfu2jq/image/upload/v1784905972/Mt_Polley___Rick_Young_property_page-0001_veqv0i.jpg",
        imageCaption: "Mt Polley _ Rick Young property Claim Area Overview",
      },
      {
        heading: "Why Buy The Polley Property Now",
        type: "bullet_list",
        content: [
          "Copper-Gold Fundamentals — copper demand continues to be driven by electrification, infrastructure investment, and energy transition requirements. Quality copper-gold exploration assets in established jurisdictions are increasingly strategic acquisition targets. Offers exposure to copper discovery potential, gold exploration upside, BC mining infrastructure, and an established geological district.",
          "Located Within a Proven Mining District — the Property is located in a region hosting significant copper-gold mineralization. The nearby Mount Polley Mine has historically produced copper, gold, and silver. An operating mine nearby provides geological validation of the district, existing regional exploration knowledge, nearby infrastructure, and potential future synergies.",
          "Compelling Geological Model — targets an alkalic porphyry Cu-Au system, characterized by monzonitic intrusive rocks, monzodiorite, syenitic intrusions, and island arc geological settings. Expected mineral assemblages include chalcopyrite, bornite, magnetite, pyrite, and gold-bearing mineralization.",
          "Untapped Exploration Upside — similar intrusive and volcanic geology to nearby deposits, comparable structural environment, magnetic anomalies, and geochemical indications. Much of the Property may have limited surface exposure due to glacial-derived cover, meaning modern exploration techniques may identify targets not previously exposed at surface.",
        ],
      },
      {
        heading: "Access & Infrastructure Advantage",
        type: "bullet_list",
        content: [
          "Established access via the Likely Road corridor northeast of Williams Lake.",
          "Year-round access",
          "Nearby mining activity",
          "Regional workforce",
          "Existing exploration history",
        ],
      },
      {
        heading: "Alteration System",
        type: "bullet_list",
        content: [
          "The Property is considered prospective based on alteration styles and geological features commonly associated with porphyry systems.",
          "Potassic Alteration — associated minerals include biotite and potassium feldspar.",
          "Calc-Silicate Alteration — these alteration zones can represent areas of strong hydrothermal activity and are often associated with copper-gold mineralization.",
        ],
      },
      {
        heading: "Structural and Exploration Indicators",
        type: "bullet_list",
        content: [
          "Similar intrusive and volcanic rocks to nearby deposits",
          "Regional structural similarities",
          "Magnetic responses",
          "Geochemical anomalies",
          "Potential for concealed mineralization due to glacial-derived sediment cover masking bedrock exposure, creating exploration upside where modern geophysical and geochemical techniques may identify buried mineralized systems.",
        ],
      },
      {
        heading: "Strategic Acquisition Rationale",
        type: "bullet_list",
        content: [
          "A large exploration land package",
          "A copper-gold target in British Columbia",
          "A property near an operating mine district",
          "A proven geological environment",
          "A low entry acquisition cost",
          "Significant exploration leverage",
          "The Property is classified as an alkalic porphyry Cu-Au exploration target (Deposit Type L03), a deposit style commonly associated with intrusive complexes formed in island arc geological environments and important globally as a source of copper and gold.",
        ],
      },
      {
        heading: "Property Location Map",
        type: "SimpleImage",
        image: "/images/projects/British-Columbia/Polley Property.jpg",
        imageCaption:
          "Polley North and Polley East claim blocks, located between Hydraulic and Likely, BC, near Polley Lake and the Mount Polley Mine.",
      },
    ],
  },
  {
    id: "ak-002",
    title: "Tripple Creek Gold Mine - Nome, Alaska",
    type: "project",
    isForSale: true,
    region: "Alaska, USA",
    image:
      "https://fayranches.com/wp-content/uploads/2025/09/alaska-gold-mine-for-sale-tripple-creek-gold-mine.jpg",
    coordinates: [64.52133, -165.2613], // approximate — Nome, AK area; refine with exact claim location if available
    summary:
      "Turnkey patented placer gold mine six miles from Nome, Alaska, with active gold and aggregate production and post-mining subdivision upside.",
    quickFacts: [
      { label: "Property", value: "Tripple Creek Gold Mine" },
      { label: "Location", value: "Nome, Alaska, USA" },
      { label: "Area", value: "750± acres" },
      { label: "Asking Price", value: "USD $11,000,000" },
      {
        label: "Claim Type",
        value: "Patented claims (3 recorded, incl. one for antimony)",
      },
      {
        label: "Commodities",
        value: "Au (placer gold), sand & gravel aggregate",
      },
    ],
    tags: ["Gold", "Placer", "Aggregate", "Alaska"],
    sections: [
      {
        heading: "Property Overview",
        type: "paragraph",
        image:
          "https://fayranches.com/wp-content/uploads/2025/09/alaska-land-for-sale-tripple-creek-gold-mine.jpg",
        content:
          "Tripple Creek Gold Mine offers a compelling multi-revenue investment just six miles from Nome, Alaska. The 750± acre patented operation produces coarse, high-purity gold alongside premium sand and gravel aggregate in strong local demand, while post-mining land subdivision has historically sold at $17,500 to $50,000 per acre. With highway access, city power, air freight connections to Anchorage, and equipment resources readily available in Nome, this turnkey mine is primed for continued production and long-term returns.",
      },
      {
        heading: "Property Facts",
        type: "bullet_list",
        content: [
          "750± acres of patented claims located within 6 miles of the city of Nome",
          "Great access from Nome via Nome-Council Road and Nome-Taylor Highway (Beam Road); both are maintained highways",
          "The placer gold deposit is composed of 20 to 25 feet of weakly gold-bearing glacial outwash overburden, burying 20 feet of gold-bearing alluvial gravel and marine sands that make up the pay section",
          "The gold is coarse, 91.5% pure, and easy to recover due to minimal clay and sparse black sands",
          "Ground conditions are excellent due to easily drained sediment overlying carbonate (marble) bedrock with solution cavities (karst); permafrost is absent to discontinuous",
          "The sand and gravel aggregate by-product is salable and may be the highest quality aggregate in the Nome area for concrete, bedding, and road/pad construction",
          "Lands with low mineral potential or post-mining can be subdivided for lot sales, currently selling for $17,500 to $50,000 per acre; on-site gravel is available for building roads and pads",
          "City power is available from the main intertie along Beam Road",
          "Anchorage is a 1 hour-20± minute flight from Nome, two flights per day; several air freight companies have regularly scheduled flights from Anchorage to Nome",
          "Three commercial barging companies and several contracting companies offer barge services from Seattle or Anchorage to Nome for heavy equipment and freight",
          "Heavy equipment rentals available from two local contracting companies",
        ],
      },
      {
        heading: "Gold & Production Details",
        type: "paragraph",
        content:
          "The creek originates near Newton Peak and flows across the Nome coastal plain and Nome River floodplain, areas historically mined for gold. Mining in the modern era commenced in ~1997 and has been more or less continuous to the present, with the current operator mining gold and aggregate here since 2015. The gold is coarse and lustrous, with little staining and mostly rounded discoidal shapes; the largest nugget recovered by the current operation is 1.1 ounces. Placer mine tailings extend over 3,000 feet along the creek at elevations between 50 and 150 feet.",
      },
      {
        heading: "Site & Equipment Photos",
        type: "ImageGallery",
        images: [
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/gold-production-alaska-tripple-creek-gold-mine.jpg",
            alt: "Gold production",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/panned-gold-alaska-tripple-creek-gold-mine.jpg",
            alt: "Panned gold",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/large-excavator-alaska-tripple-creek-gold-mine.jpg",
            alt: "Large excavator",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/paydirt-alaska-tripple-creek-gold-mine.jpg",
            alt: "Paydirt",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/mine-site-alaska-tripple-creek-gold-mine.jpg",
            alt: "Mine site",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/secondary-loader-alaska-tripple-creek-gold-mine.jpg",
            alt: "Secondary loader",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/overburden-alaska-tripple-creek-gold-mine.jpg",
            alt: "Overburden",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/pump-alaska-tripple-creek-gold-mine.jpg",
            alt: "Pump",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/sluicing-alaska-tripple-creek-gold-mine.jpg",
            alt: "Sluicing",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/summary-alaska-tripple-creek-gold-mine.jpg",
            alt: "Summary",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/connex-alaska-tripple-creek-gold-mine.jpg",
            alt: "Connex storage",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/excavator-dozer-alaska-tripple-creek-gold-mine.jpg",
            alt: "Excavator and dozer",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/containers-alaska-tripple-creek-gold-mine.jpg",
            alt: "Containers",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/gold-loader-alaska-tripple-creek-gold-mine.jpg",
            alt: "Gold loader",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/conveyor-alaska-tripple-creek-gold-mne.jpg",
            alt: "Conveyor",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/dozer-alaska-tripple-creek-gold-mine.jpg",
            alt: "Dozer",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/cover-alaska-tripple-creek-gold-mine.jpg",
            alt: "Cover image",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/excavator-alaska-tripple-creek-gold-mine.jpg",
            alt: "Excavator",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/muskoxen-alaska-tripple-creek-gold-mine.jpg",
            alt: "Muskoxen near the property",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/lake-in-nome-alaska-tripple-creek-gold-mine.jpg",
            alt: "Lake in Nome",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/crane-alaska-tripple-creek-gold-mine.jpg",
            alt: "Crane",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/aerial-alaska-tripple-creek-gold-mine.jpg",
            alt: "Aerial view",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/gold-investment-alaska-tripple-creek-gold-mine.jpg",
            alt: "Gold investment",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/mine-camp-alaska-tripple-creek-gold-mine.jpg",
            alt: "Mine camp",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/forklift-alaska-tripple-creek-gold-mine.jpg",
            alt: "Forklift",
          },
          {
            src: "https://fayranches.com/wp-content/uploads/2025/09/gold-mine-tripple-creek-gold-mine.jpg",
            alt: "Gold mine",
          },
        ],
      },
    ],
  },
  {
    // TODO: Verify placeholder ID sequence against codebase
    id: "sub-008",
    type: "subproject",
    title: "Ferroux Property - British Columbia",
    summary:
      "Gold-silver-copper-zinc vein, breccia and stockwork showing on claim #1136051, located on a high-elevation ridge near the Arlington South target between Saunier Creek and the West Kettle River valley, BC.",
    region: "British Columbia, Canada",
    // TODO: Replace with an actual property photo — reusing parent BC header image as a placeholder
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/City_of_Kamloops.jpg",
    coordinates: [49.55861, -119.15392],
    parentProjectId: "bc-005",
    isForSale: true,
    quickFacts: [
      { label: "Property", value: "Ferroux" },
      { label: "Claim Number", value: "1136051 (41.91 ha)" },
      { label: "Mining Division", value: "Greenwood" },
      { label: "MINFILE Number", value: "082ENW092 / 082ENW119" },
      { label: "Status", value: "Showing" },
      { label: "Commodities", value: "Au, Ag, Cu, Zn" },
      {
        label: "Deposit Type",
        value: "Intrusive-Related Vein, Breccia & Stockwork",
      },
      { label: "Owner", value: "Christopher Adamson (100%)" },
    ],
    tags: ["Gold", "Silver", "Copper", "Zinc", "Intrusive-Related"],
    sections: [
      {
        heading: "Property Overview",
        type: "paragraph",
        content:
          "The Ferroux showing is located on a high-elevation ridge sitting between Saunier Creek and the West Kettle River valley, on the west side of Ferroux Creek, approximately 9.5 kilometres north-northwest of Carmi within the Greenwood Mining Division of British Columbia. Claim #1136051 covers 41.91 hectares and hosts a documented gold-silver-copper-zinc vein, breccia, and stockwork occurrence associated with a major north-south fault in the Ferroux Creek valley.",
      },
      {
        type: "SimpleImage",
        image:
          "https://res.cloudinary.com/dfytfu2jq/image/upload/v1784912048/Ferroux1_cu6njd.jpg",
      },
      {
        type: "SimpleImage",
        image:
          "https://res.cloudinary.com/dfytfu2jq/image/upload/v1784912048/Ferroux2_r71efq.jpg",
      },
      {
        heading: "Claim Details & Geologic Context",
        type: "bullet_list",
        content: [
          "Name: FERROUX, WT",
          "Mining Division: Greenwood",
          "BCGS Map: 082E055 | NTS Map: 082E11E",
          "Status: Showing",
          "Latitude: 49.55861° N | Longitude: -119.15392° W",
          "UTM: Zone 11 (NAD 83), Northing 5492571, Easting 344860",
          "Commodities: Gold, Silver, Copper, Zinc",
          "Deposit Type: Intrusive-related vein, breccia and stockwork system",
          "Tectonic Belt: Omineca | Terrane: Plutonic Rocks, Overlap Assemblage",
          "Terrain: Moving up steeper ridge slopes, heavily forested with historical logging cutblocks scattered across the zone",
          "Adjacent Target: Arlington South Target (MINFILE 082ENW119) located right over the crest of the north-south trending ridge to the east",
        ],
        links: [
          {
            textPreview: "MINFILE 082ENW092 — Ferroux Showing",
            description:
              'Gold, Silver, Copper occurrence within claim #1136051 — the "Ferroux" prospect (BC MINFILE summary).',
            url: "https://minfile.gov.bc.ca/Summary.aspx?minfilno=082ENW092",
          },
          {
            textPreview: "MINFILE 082ENW119 — Arlington South",
            description:
              "MINFILE record for the nearby Arlington South target on the ridge crest.",
            url: "https://minfile.gov.bc.ca/Summary.aspx?minfilno=082ENW119",
          },
          {
            textPreview: "Claim #1136051 — Tenure Details",
            description:
              "View mineral tenure details on Mineral Titles Online BC",
            url: "https://www.mtonline.gov.bc.ca/mtov/tenureDetailExecute.action?tenureNumberIDParam=1136051",
          },
          {
            textPreview: "Claim #1136051 — Claim Map",
            description: "View the tenure map on Mineral Titles Online BC",
            url: "https://www.mtonline.gov.bc.ca/mtov/showTenureExecute.action?tenureNumberIDParam=1136051",
          },
        ],
      },
      {
        heading: "Capsule Geology & Structure",
        type: "paragraph",
        content:
          "The property sits directly on the geologic contact line where Jurassic quartz diorite meets Carboniferous-Permian Anarchist Group chlorite-hornblende schists—a contact zone known for causing shearing that forms quartz-calcite veins containing gold, silver, and copper (chalcopyrite). The showing occurs in quartz monzonite of the Eocene Coryell Intrusions, underlain by granodiorite of the Cretaceous-Tertiary Okanagan Batholith and overlain to the north by dacite of the Eocene Penticton Group, Marron Formation.\n\nMineralization is heavily concentrated along the north-south Ferroux Creek fault zone where it intersects smaller east-west cross-faults. Within and adjacent to these structural intersections, the host quartz monzonite is intensely brecciated, silicified, and features a prominent rusty weathering zone (gossan) containing up to 10% disseminated pyrite and minor pyrrhotite. Anomalous gold, silver, copper, and zinc assays are associated with these structural boundaries.",
      },
      {
        heading: "Exploration History",
        type: "bullet_list",
        content: [
          "Discovered in 1988 by Minnova Inc. through heavy mineral sampling techniques.",
          "Prospecting, geochemical and geological mapping programs followed by trenching in 1989 — 355 metres excavated across 9 trenches.",
          "Chip samples from the trenches were analysed for gold, silver, copper, lead and zinc.",
          "Exploration uncovered anomalous precious metal assays via trenching across the fault boundary.",
          "Best precious metal values, from trench 89-B, were 0.72 g/t gold and 0.7 g/t silver, with lesser copper and zinc (Assessment Report 20070).",
        ],
      },
      {
        heading: "Tenure Status",
        type: "bullet_list",
        content: [
          "Title/Application Number: 1136051 — Mineral (M), Claim (C)",
          "Area: 41.91 hectares",
          "Mining Division: Greenwood | Map Number: 082E",
          "Issue Date: 2026/JUL/16 | Good To Date: 2027/JUL/16",
          "Owner: Christopher Adamson — 100%",
        ],
      },
      {
        type: "SimpleImage",
        image:
          "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786014794/Ferroux_wolj5e.png",
      },
      // pdf file
      {
        type: "PdfDocuments",
        heading: "Project Documentation",
        documents: [
          {
            fileUrl: "https://apps.nrs.gov.bc.ca/pub/aris/Report/20070.pdf/",
            fileName: "20070.pdf",
          },
          {
            fileUrl:
              "/images/projects/British-Columbia/Ferroux_Property_Opinion_Summary.pdf",
            fileName: "Ferroux_Property_Opinion_Summary.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "ma-001",
    type: "project",
    title: "Prepared Devonian Trilobites - Alnif, Morocco",
    summary:
      "Collection of authentic, commercially prepared Devonian trilobite fossils (featuring spiny Dicranurus/odontopleurid and phacopid specimens) from the Anti-Atlas region around Alnif, Morocco.",
    region: "Drâa-Tafilalet, Morocco",
    image:
      "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786013588/bfa9f68f-e495-471e-9d41-51c8f24126fe_knvtk9.jpg",
    coordinates: [31.1141, -5.1715],
    isForSale: true,
    quickFacts: [
      { label: "Product", value: "Prepared Trilobite Fossils" },
      {
        label: "Locality",
        value: "Alnif / Ma'der Basin, Anti-Atlas Mountains",
      },
      { label: "Country", value: "Morocco" },
      { label: "Geologic Era", value: "Devonian (~390 Million Years Old)" },
      {
        label: "Primary Taxa",
        value: "Odontopleurida / Phacopida (Phacops, Reedops, Dicranurus)",
      },
      { label: "Matrix Type", value: "Gray / Light-Colored Limestone" },
      {
        label: "Preparation Style",
        value: "Air-Abrasive Lab Prepared (Free-Standing Spines)",
      },
    ],
    tags: ["Fossils", "Trilobites", "Devonian", "Morocco", "For Sale"],
    sections: [
      {
        heading: "Overview & Specimen Authenticity",
        type: "paragraph",
        content:
          "This listing features genuine, lab-prepared Devonian trilobite fossils sourced from the world-famous deposits of the Atlas Mountains near Alnif, Morocco. The collection includes both elaborate, multi-spined specimens (such as Dicranurus, Ceratarges, or Comura) with free-standing thoracic spines freed via meticulous air-abrasive work, as well as classic phacopid specimens (Phacops / Reedops) displaying jet-black mineralized exoskeletons set on natural gray limestone matrix.",
      },
      {
        heading: "Specimen Image Gallery",
        type: "ImageGallery",
        images: [
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786013588/bfa9f68f-e495-471e-9d41-51c8f24126fe_knvtk9.jpg",
            alt: "Spiny Moroccan Devonian Trilobite on Matrix",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786013594/18b8c64f-1b91-4046-b0c0-231c90d88973_vnkvhv.jpg",
            alt: "Moroccan Trilobite Fossil Specimen",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786013593/d1d42dad-a077-4529-9aea-fde0d5c9508f_nykhfq.jpg",
            alt: "Prepared Trilobite Close-Up Detail",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786013592/966e5089-7c48-49a5-8b17-af12c495ab27_aa4gua.jpg",
            alt: "Phacopid Trilobite Specimen",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786013591/f8ed5888-4e7b-4a1b-95f1-a9475ecababb_ecwur5.jpg",
            alt: "Detailed Exoskeleton and Matrix View",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786013591/1cc5a37e-6354-423c-8a08-286c81248d2c_du4zsv.jpg",
            alt: "Trilobite Thorax and Spine Detail",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786013590/3d5704b5-fa5d-4b60-9f7e-d7598f74574f_mn6nkx.jpg",
            alt: "Preparation Detail on Limestone Base",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786013589/0be58dba-3b9e-4461-bc78-bb8e1b1a596e_al5vs5.jpg",
            alt: "Moroccan Fossil Specimen Overview",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786013589/893b6135-2195-48a0-955c-6fc029fc3544_krvv8h.jpg",
            alt: "Trilobite Cephalon and Segmentation",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786013589/1c30d806-405c-44d3-bfd0-33a4a8e5f9b0_oxqvov.jpg",
            alt: "Fossil Matrix Side View",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1786013588/6e4579a0-2d4f-479f-b032-2ef7ec773fbf_ycfjeb.jpg",
            alt: "Complete Trilobite Specimen",
          },
        ],
      },
      {
        heading: "Key Physical & Morphological Features",
        type: "bullet_list",
        content: [
          "Exoskeleton: Jet-black, mineralized calcite exoskeleton characteristic of Devonian fossil beds in the Anti-Atlas region.",
          "Morphology (Spiny Type): Distinct cephalon with raised eye structures/tubercles, thoracic segments with free-standing curved lateral/pleural spines.",
          "Morphology (Phacopid Type): Inflated cephalon, clear thoracic segmentation, compact body structure, and short lateral genal spines.",
          "Matrix: Natural light-gray to brownish Devonian limestone host rock.",
          "Luster / Gloss: Natural mineral sheen with light post-preparation protective coating (standard practice for preventing spine degradation).",
        ],
      },
      {
        heading: "Preparation & Authenticity Indicators",
        type: "bullet_list",
        content: [
          "Skilled lab preparation using air-abrasive tools under microscope magnification to isolate delicate spines from the host matrix.",
          "Spines display natural variation in curvature and thickness rather than synthetic uniformity.",
          "Consistent matrix composition without artificial glue boundaries or synthetic resin fill lines.",
          "Hard mineralized shell texture consistent with authentic fossilized calcite.",
        ],
      },
    ],
  },
];
