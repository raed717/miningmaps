// Draft new projects here, then run `npm run export:sql:new` to generate a migration for them.
import type { Project } from "../apps/web/src/lib/projectData.ts";

export const NewProjects: Project[] = [
  {
    id: "bc-010",
    type: "project",
    title: "Excelda / Thunderbird Property - British Columbia",
    summary:
      "A 535.27-hectare polymetallic Ag-Au-Pb-Zn-Cu acquisition opportunity in the Golden Mining Division (East Kootenays). Encompasses multiple historic high-grade prospects (Excelda, Kootenay Queen, High Eagle) hosted in Proterozoic Purcell and Windermere carbonate-clastic strata with historical assays up to 100 g/t Au, 2,571 g/t Ag, and 22.7% Pb.",
    region: "British Columbia, Canada",
    image:
      "https://res.cloudinary.com/dfytfu2jq/image/upload/v1793098125/east_kootenays_bc_cv9hzs.jpg",
    coordinates: [50.4833, -116.3833], // TODO: confirm exact coordinates (approx. 1 km SW of Sultana Peak / Delphine Creek area, Golden Mining Division)
    isForSale: true,
    author:
      "Micheal Scott Langille (VP Exploration, Aurora Gold and Gravels Inc.)",
    quickFacts: [
      { label: "Property", value: "Excelda / Thunderbird" },
      { label: "Mining Division", value: "Golden" },
      { label: "Area", value: "535.27 Hectares" },
      { label: "Primary Commodities", value: "Ag, Au, Pb, Zn, Cu" },
      {
        label: "Deposit Type",
        value: "I05 – Polymetallic Veins Ag-Pb-Zn ± Au",
      },
      {
        label: "Status",
        value: "Past Producer / Advanced Exploration Prospects",
      },
      {
        label: "Key Occurrences",
        value: "Excelda, Kootenay Queen, High Eagle / Washburn",
      },
      { label: "Owner / Vendor", value: "Aurora Gold and Gravels Inc." },
    ],
    tags: [
      "Silver",
      "Gold",
      "Lead",
      "Zinc",
      "Copper",
      "Polymetallic Veins",
      "East Kootenays",
      "Purcell Supergroup",
      "For Sale",
      "Option Available",
    ],
    sections: [
      {
        heading: "Property Overview & Regional Setting",
        type: "paragraph",
        image:
          "https://res.cloudinary.com/dfytfu2jq/image/upload/v1793098209/East_KootenaysMap_mjajw2.png",
        imageCaption:
          "Regional setting and project location map in the East Kootenays, BC.",
        content:
          "The Excelda / Thunderbird Property is a polymetallic precious- and base-metal exploration project situated in the East Kootenay region of southeastern British Columbia, within the Golden Mining Division. Covering approximately 535.27 hectares, the consolidated land package encompasses a significant cluster of historic mineral occurrences, including the Excelda, Kootenay Queen, and High Eagle prospects. The property lies within the Omineca tectonic belt and is underlain by ancestral North American sedimentary strata. The principal Excelda occurrence sits at an elevation of ~2,591 metres, approximately 1 kilometre southwest of Sultana Peak.",
      },
      {
        heading: "Key Project Highlights",
        type: "bullet_list",
        content: [
          "Substantial 535.27-hectare contiguous land position providing district-scale exploration upside beyond historic underground workings.",
          "High-grade polymetallic exposure across Silver (Ag), Gold (Au), Lead (Pb), Zinc (Zn), and Copper (Cu).",
          "Exceptional historical sampling at Excelda returning 100 g/t Au, 2,571 g/t Ag, 22.7% Pb, 1.9% Zn, and 1.0% Cu across a 5-cm massive sulphide vein.",
          "Documented silver-rich galena (1,090 g/t Ag, 64.6% Pb) and argentiferous tetrahedrite (9–10% Ag) at Kootenay Queen.",
          "Gold-copper showing at High Eagle returning historic grab assays of up to 7 g/t Au in a 3-metre-wide quartz vein structure.",
          "Extensive historical underground infrastructure in place, including adits, trenches, and shaft developments facilitating direct structural evaluation.",
          "Opportunity to evaluate whether isolated high-grade veins connect into major regional structural shear corridors and multi-vein systems.",
        ],
      },
      {
        heading: "Geological & Structural Architecture",
        type: "paragraph",
        content:
          "The project is underlain by Proterozoic clastic sedimentary rocks of the Purcell and Windermere supergroups, alongside Lower Paleozoic Beaverfoot and Mount Forster formations. Purcell stratigraphy includes the Aldridge, Creston, Kitchener, Dutch Creek, and Mount Nelson formations. Within the property bounds, Kitchener and Dutch Creek strata have been subdivided into the Van Creek and Gateway formations. The Mount Nelson Formation features multiple distinct carbonate and quartzite units (lower quartzite through upper dolomite). Regionally, rocks have undergone regional metamorphism to greenschist facies and complex folding, with upper Dutch Creek and lower Mount Nelson units thrust over Horsethief Creek, Beaverfoot, and Mount Forster formations. Mineralization is strongly localized along tight quartz-filled fracture networks, secondary faulting, and lithological contacts with reactive dolomites.",
      },
      {
        heading: "Deposit Model: I05 Polymetallic Veins Ag-Pb-Zn ± Au",
        type: "paragraph",
        content:
          "The target occurrences conform to the BC MINFILE I05 deposit model: structurally controlled epigenetic hydrothermal veins carrying silver, lead, zinc, gold, and copper. The dominant hypogene sulphide assemblage includes galena, sphalerite, argentiferous tetrahedrite, chalcopyrite, pyrite, and chalcocite, with surface copper carbonates (malachite and azurite). Tetrahedrite is the primary driver of the system's ultra-high silver tenor.",
      },
      {
        heading: "Significant Historical Assay & Sampling Results",
        type: "table",
        caption:
          "Historical high-grade sampling across principal prospects. Note: Narrow vein chip and mineral-specific analyses reflect local tenor rather than representative bulk mining widths.",
        headers: [
          "Prospect / Target",
          "Sample / Structure Type",
          "Au",
          "Ag",
          "Pb",
          "Zn",
          "Cu",
        ],
        rows: [
          [
            "Excelda",
            "5-cm massive sulphide chip",
            "100 g/t",
            "2,571 g/t",
            "22.7%",
            "1.9%",
            "1.0%",
          ],
          [
            "Kootenay Queen",
            "Pure galena separate",
            "—",
            "1,090 g/t",
            "64.6%",
            "—",
            "—",
          ],
          [
            "Kootenay Queen",
            "Tetrahedrite mineral analysis",
            "—",
            "90,000–100,000 g/t (9–10%)",
            "—",
            "—",
            "—",
          ],
          [
            "High Eagle / Washburn",
            "Quartz vein grab sample",
            "7.0 g/t",
            "—",
            "—",
            "—",
            "Cu-bearing",
          ],
        ],
      },
      {
        heading: "Target Prospects & Historical Workings",
        type: "bullet_list",
        content: [
          "Excelda Prospect: Hosted within dolomitic limestone, quartzite, and argillite of the lower Mount Nelson dolomite. Cut by southeast-striking, northeast-dipping reverse faults and tight fracture systems filled with quartz-galena-sphalerite-tetrahedrite-pyrite. Explored historically via adits and surface trenches.",
          "Kootenay Queen Prospect: Situated in a cirque on the south side of Delphine Creek (~1,980 m elevation). Features a 43-metre-long adit driven along an approximately 30-centimetre-wide quartz-galena-tetrahedrite-sphalerite vein hosted in upper Mount Nelson dolomite beneath the Windermere unconformity.",
          "High Eagle / Washburn Prospect: Centered on an approximately 3-metre-wide quartz vein with pyrite, minor chalcocite, malachite, and azurite at the contact of orange-weathering dolomite and Gateway Formation argillite. Developed via a 20-metre adit and a 5-metre shaft.",
        ],
      },
      {
        heading: "Commercial Terms & Acquisition Framework",
        type: "paragraph",
        content:
          "Aurora Gold and Gravels Inc. is offering the 535.27-hectare Excelda / Thunderbird Property for outright purchase or option/earn-in. The vendors are flexible on deal structure to accommodate an exploration group committed to systematically evaluating and drill-testing the system. Proposed structures include: (1) Outright 100% Acquisition via cash and/or equity consideration subject to a retained 2% NSR royalty; or (2) Staged Option Agreement to earn 100% interest through milestone-based cash payments, share issuances, and exploration commitments. Royalty terms and buyback provisions remain negotiable. Inquiries should be directed to Micheal Scott Langille, VP Exploration (Bella Coola, BC).",
      },
    ],
  },
];
