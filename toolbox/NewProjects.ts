// Draft new projects here, then run `npm run export:sql:new` to generate a migration for them.
import type { Project } from "../apps/web/src/lib/projectData.ts";

export const NewProjects: Project[] = [
  {
    id: "bc-008",
    type: "project",
    title: "Howe Copper Property - British Columbia",
    summary:
      "The Howe Copper Property is a 334.29-hectare historic copper-silver-gold-molybdenum-bismuth exploration property on Mount Donaldson, on British Columbia's Sunshine Coast, approximately 55 km northwest of Vancouver. The property encompasses the Howe Copper, Howe Copper North West (Slippery Lake), and HCM 1 mineral occurrences. It hosts an approximately 500 m diameter mineralized muscovite-granite porphyry stock, at least 11 historically explored quartz-vein systems, underground workings, surface trenches, and historical diamond drilling. Reported historical results include 8.26% Cu, 99.5 g/t Ag, and 0.10% Mo over an average vein width of approximately 0.84 m, alongside select samples exceeding 50% Cu and locally exceeding 900 g/t Ag. The property offers complementary porphyry-style and structurally controlled high-grade vein exploration targets, together with potential for collectible quartz and sulphide mineral specimens.",
    region: "British Columbia, Canada",
    image:
      "https://res.cloudinary.com/dfytfu2jq/image/upload/v1793094568/W4_IMG_0121_pqkjih.jpg",
    coordinates: [49.75, -123.7],
    isForSale: true,
    author: "Aurora Gold and Gravels Inc.",
    contactEmail: undefined, // No email address provided in the source
    date: undefined,
    tags: [
      "Copper",
      "Silver",
      "Gold",
      "Molybdenum",
      "Bismuth",
      "Porphyry",
      "Quartz Veins",
      "Polymetallic",
      "Mineral Specimens",
      "Exploration Property",
      "For Sale",
    ],
    quickFacts: [
      {
        label: "Property",
        value: "Howe Copper Property",
      },
      {
        label: "Property Area",
        value: "334.29 hectares",
      },
      {
        label: "Location",
        value: "Mount Donaldson, Sunshine Coast, British Columbia",
      },
      {
        label: "Distance from Vancouver",
        value: "Approximately 55 km northwest",
      },
      {
        label: "Distance from Squamish",
        value: "Approximately 25 km",
      },
      {
        label: "Mining Division",
        value: "Not specified in the source",
      },
      {
        label: "MINFILE Number",
        value: "Not provided; verify official records",
      },
      {
        label: "Commodities",
        value: "Cu, Ag, Au, Mo, Bi",
      },
      {
        label: "Deposit Type",
        value: "L04 Porphyry Cu ± Mo ± Au; polymetallic quartz veins",
      },
      {
        label: "Mineral Occurrences",
        value: "Howe Copper, Howe Copper North West (Slippery Lake), HCM 1",
      },
      {
        label: "Porphyry Stock",
        value: "Approximately 500 m diameter",
      },
      {
        label: "Explored Vein Systems",
        value: "At least 11",
      },
      {
        label: "Historical Drilling",
        value: "Approximately 2,532 ft in five vertical holes (1966–1967)",
      },
      {
        label: "Historical Discovery",
        value: "1874",
      },
      {
        label: "Vendor",
        value: "Aurora Gold and Gravels Inc.",
      },
      {
        label: "Contact",
        value: "Micheal Scott Langille",
      },
      {
        label: "Transaction",
        value: "Outright acquisition or staged option; terms negotiable",
      },
      {
        label: "Proposed NSR",
        value: "Potential 2% NSR; subject to negotiation",
      },
    ],
    sections: [
      {
        heading: "Property Overview",
        type: "paragraph",
        content:
          "The Howe Copper Property is a historic copper-silver-gold-molybdenum-bismuth exploration project situated on Mount Donaldson on British Columbia's Sunshine Coast. The property covers approximately 334.29 hectares and encompasses three mineral occurrences: Howe Copper, Howe Copper North West (Slippery Lake), and HCM 1. The project combines two complementary exploration styles: L04 Porphyry Cu ± Mo ± Au mineralization and structurally controlled high-grade polymetallic quartz-vein mineralization. Historical exploration identified a mineralized muscovite-granite porphyry stock approximately 500 metres in diameter and at least 11 vein systems investigated through surface trenches and short underground workings. The property also has potential for collectible quartz crystals and mineral specimens, including bornite, tetrahedrite, and molybdenite.",
      },
      {
        heading: "Location and Access",
        type: "bullet_list",
        content: [
          "Located near the summit of Mount Donaldson on the Sechelt Peninsula, between Clowhom Lake and Sechelt Lake.",
          "Approximately 55 km northwest of Vancouver and approximately 25 km from Squamish, according to the supplied property proposal.",
          "The historic main adit is situated at approximately 1,431 metres elevation.",
          "Helicopter access has historically provided the most practical means of reaching the workings.",
          "Assessment Report 29487 notes that logging-road construction had advanced to within a few kilometres of the historic mine workings.",
          "The property's proximity to the Lower Mainland and Sunshine Coast may provide logistical advantages compared with more remote British Columbia exploration projects.",
        ],
      },
      {
        heading: "Geological Setting",
        type: "paragraph",
        content:
          "The property is predominantly underlain by biotite and hornblende-biotite granite of the Jurassic to Cretaceous Coast Plutonic Complex. These rocks are intruded by a distinctive, sugary-textured, fine- to medium-grained vuggy muscovite granite dated at approximately 83 Ma (Late Cretaceous). Drusy quartz crystals commonly line cavities within the intrusive rock. A potassium-feldspar-rich dyke system cuts the older rocks and is associated with quartz + muscovite + copper + molybdenum + gold + silver mineralization. The principal porphyry-style target is associated with a mineralized muscovite-granite porphyry stock approximately 500 metres in diameter. Historical interpretation suggested that this body could have a pipe-like geometry, although modern exploration is required to test this interpretation. Quartz masses and veins extensively crosscut the intrusive rocks, with at least three principal vein orientations recognized.",
      },
      {
        heading: "Mineralization and Deposit Model",
        type: "bullet_list",
        content: [
          "Principal mineral assemblage: bornite, chalcopyrite, tetrahedrite, chalcocite, and molybdenite.",
          "Secondary copper minerals include cuprite, malachite, and azurite.",
          "Massive bornite and chalcopyrite occur in quartz veins and locally as blebs within vugs of the muscovite granite.",
          "Molybdenite occurs as flakes and locally in spectacular concentrations; tetrahedrite and chalcocite have also been identified.",
          "The official BC MINFILE classification cited in the supplied proposal is L04 Porphyry Cu ± Mo ± Au.",
          "Documented mineralization styles include vein, massive, disseminated, and stockwork mineralization.",
          "Howe Copper North West and HCM 1 provide additional exploration targets beyond the immediate historic main-adit area.",
          "The principal exploration concept is to test whether the high-grade veins represent peripheral or structurally focused expressions of a larger intrusive-hydrothermal Cu-Mo-Au system.",
        ],
      },
      {
        heading: "Historical High-Grade Assay Results",
        type: "table",
        caption:
          "Historical sampling results transcribed from the supplied Howe Copper property acquisition and option proposal. Sample types, intervals, and qualifiers are retained where reported. These historical results are not presented as verified mineral resources or reserves.",
        headers: [
          "Occurrence",
          "Year",
          "Sample / Interval",
          "Cu",
          "Ag (g/t)",
          "Au (g/t)",
          "Mo",
          "Bi",
        ],
        rows: [
          [
            "Howe Copper",
            1965,
            "7 samples over 26.4 m along the main vein in the adit; average vein width approximately 0.84 m",
            "8.26%",
            "99.5",
            "Not reported",
            "0.10%",
            "Not reported",
          ],
          [
            "Howe Copper",
            1983,
            "Main adit sample",
            "15.16%",
            "194.8",
            "Not reported",
            "Not reported",
            "Not reported",
          ],
          [
            "Howe Copper",
            1983,
            "Nearby molybdenite-bearing quartz vein",
            "Not reported",
            "Not reported",
            "Not reported",
            "Approximately 0.13%",
            "Not reported",
          ],
          [
            "Howe Copper",
            2005,
            "Select sample of bornite vein material from the main adit dump",
            ">50%",
            "603",
            "0.98",
            "Not reported",
            "Not reported",
          ],
          [
            "Howe Copper",
            2006,
            "0.5 m chip sample from the adit portal vein",
            "48.7%",
            "931",
            "0.52",
            "Not reported",
            "0.521%",
          ],
          [
            "Howe Copper North West (Slippery Lake)",
            1983,
            "Sample from quartz-muscovite-feldspar veins",
            "56.59%",
            "833.5",
            "Not reported",
            "Not reported",
            "Not reported",
          ],
          [
            "Howe Copper North West (Slippery Lake)",
            1991,
            "Trench sample",
            ">1%",
            ">200",
            "0.70",
            "Not reported",
            "Not reported",
          ],
          [
            "HCM 1",
            2006,
            "0.5 m grab sample, as described in the source",
            "10.7%",
            "25",
            "Not reported",
            "0.064%",
            "Not reported",
          ],
        ],
      },
      {
        heading: "Historical Diamond Drilling",
        type: "paragraph",
        content:
          "Approximately 2,532 feet of diamond drilling in five vertical holes was completed during the 1966–1967 program. The supplied property proposal reports the following copper intersections. Corresponding gold and silver values were not provided in the source. Hole identifiers, interval lengths, and grades are transcribed as reported.",
      },
      {
        heading: "Historical Drill Intersections",
        type: "table",
        caption:
          "Historical 1966–1967 drilling results. These intervals should not be interpreted as current mineral resources or reserves.",
        headers: ["Drill Hole", "Reported Interval (ft)", "Cu (%)"],
        rows: [
          ["DDH 67-1", "98", "Approximately 0.30"],
          ["DDH 67-1", "287", "Approximately 0.12"],
          ["DDH 67-2", "29", "0.55"],
          ["DDH 67-2", "2.5", "3.07"],
          ["DDH 67-2", "2.0", "1.52"],
          ["DDH 67-2", "9.0", "0.30"],
          ["DDH 67-4", "39", "Approximately 0.38"],
        ],
      },
      {
        heading: "Howe Copper North West (Slippery Lake)",
        type: "paragraph",
        content:
          "The Howe Copper North West occurrence is situated approximately 700 metres northwest of the principal Howe Copper occurrence. Historical trenching exposed quartz-muscovite-feldspar veins containing tetrahedrite, chalcopyrite, bornite, and chalcocite. Reported historical samples include 56.59% Cu and 833.5 g/t Ag in 1983, followed by a 1991 trench sample returning >1% Cu, >200 g/t Ag, and 0.70 g/t Au. These results provide evidence of high-grade mineralization beyond the main historic workings.",
      },
      {
        heading: "HCM 1 Occurrence",
        type: "paragraph",
        content:
          "The HCM 1 occurrence is located approximately 300 metres north of Howe Copper and provides an additional exploration target. Its quartz-vein mineralization contains chalcopyrite with minor molybdenite. A 2006 sample described in the supplied proposal as a 0.5-metre grab sample reportedly returned 10.7% Cu, 25 g/t Ag, and 0.064% Mo.",
      },
      {
        heading: "Historical Exploration",
        type: "bullet_list",
        content: [
          "Copper mineralization was discovered in 1874, followed by early underground development and reported shipments of mineralized material during the 1870s.",
          "Historical work includes underground adit development, trenching, stripping, geological mapping, and geochemical sampling.",
          "Geophysical programs included induced-polarization surveys, airborne magnetic and electromagnetic surveys, and ground magnetic and electromagnetic surveys.",
          "Diamond drilling, metallurgical testing, prospecting, and mineral-specimen evaluation were also conducted.",
          "Historical operators listed in the supplied property summary include Pacific Copper Mines, Bralorne Pioneer Mines, Grasset Lake Mines, Athena Mines, and Seatac Resources.",
          "Despite its long exploration history, the property has reportedly received relatively limited modern systematic exploration.",
        ],
      },
      {
        heading: "Geophysical Targeting",
        type: "paragraph",
        content:
          "Historical airborne geophysical work reportedly identified a relationship between known Cu-Au-Ag-Mo mineralization and magnetic-low responses, including areas where magnetic lows coincide with elevated electromagnetic responses. Historical interpretations recommended further field investigation of these anomalies and potential extensions of mineralization along strike. Modern high-resolution magnetic surveys, induced polarization/resistivity, and potentially electromagnetic surveying could help reassess the intrusive and vein systems. The effectiveness of these methods and the significance of the historical anomalies remain to be tested.",
      },
      {
        heading: "Mineral Specimen and Quartz Crystal Potential",
        type: "paragraph",
        content:
          "The vuggy muscovite granite contains drusy quartz crystals, and previous exploration specifically investigated the property for valuable mineral specimens. Assessment Report 29487 documented quartz crystal development within the vuggy granite and quartz masses, including clear to milky material and unusual crystal forms. The supplied proposal also identifies potentially collectible bornite, chalcopyrite, molybdenite, tetrahedrite, chalcocite, malachite, and azurite specimens. Commercial specimen recovery would require appropriate permitting and evaluation. This represents a potential secondary opportunity alongside conventional mineral exploration; no commercial recovery valuation is established by the supplied source.",
      },
      {
        heading: "Exploration Opportunity",
        type: "bullet_list",
        content: [
          "Evaluate the historical L04 Cu-Mo-Au porphyry target.",
          "Test the approximately 500 m diameter mineralized muscovite-granite porphyry stock and its possible geometry.",
          "Map and sample the high-grade Cu-Ag-Au-Mo-Bi quartz-vein systems.",
          "Investigate at least 11 historically explored vein systems and their structural controls.",
          "Reassess the historic adits, surface trenches, and other workings.",
          "Compile historical drill logs and validate the reported copper intersections.",
          "Reinterpret historical magnetic-low and electromagnetic anomalies.",
          "Use modern geological mapping, geochemistry, geophysics, and appropriately designed drilling to test the porphyry and vein targets.",
          "Investigate the spatial relationships between Howe Copper, Howe Copper North West, and HCM 1.",
          "Evaluate the potential for collectible quartz crystals and sulphide specimens subject to permitting and commercial assessment.",
          "Assess access requirements and the potential use of logging-road infrastructure.",
        ],
      },
      {
        heading: "Property Acquisition and Option Terms",
        type: "paragraph",
        content:
          "Aurora Gold and Gravels Inc. is seeking a company capable of advancing the Howe Copper Property through systematic modern exploration and eventual drill testing. The vendors are open to an outright cash and/or share acquisition, a staged option-to-purchase agreement, or another mutually acceptable transaction structure. Under an outright purchase, a buyer could negotiate the acquisition of 100% of the property subject to a retained Net Smelter Return (NSR) royalty. Under an option agreement, a company may earn up to 100% ownership through staged cash payments, company shares, and exploration expenditures. The vendors wish to retain an NSR interest; a potential 2% NSR has been discussed, with final royalty terms and any buyback provisions subject to negotiation. All purchase consideration, exploration commitments, and payment schedules remain negotiable and subject to a definitive agreement.",
      },
      {
        heading: "Vendor Contact",
        type: "bullet_list",
        content: [
          "Contact: Micheal Scott Langille.",
          "Company: Aurora Gold and Gravels Inc.",
          "Location: Bella Coola, British Columbia, Canada.",
          "Email: Not provided in the supplied proposal.",
          "Transaction interest: Outright acquisition, staged option agreement, or another mutually acceptable arrangement.",
        ],
      },
      {
        heading: "Supporting Technical Documentation",
        type: "bullet_list",
        content: [
          "Assessment Report 29487 is referenced in the supplied proposal for historical exploration, access, and quartz-crystal information.",
          "Official BC MINFILE records are referenced for the Howe Copper mineral occurrence and historical assay information.",
          "The source does not provide direct URLs to the assessment report, MINFILE records, claim tenure records, or original assay certificates. These documents should be obtained and verified before publication.",
        ],
      },
    ],
  },
];
