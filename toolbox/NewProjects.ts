import type { Project } from "../apps/web/src/lib/projectData.ts";

export const NewProjects: Project[] = [
  {
    id: "bc-017",
    type: "project",
    title: "Tets Property - British Columbia",
    summary:
      "A 3,527.51-hectare early-stage copper-gold-silver-molybdenum exploration project situated within the Tahtsa porphyry district of west-central British Columbia[cite: 39]. The property is located approximately 80 km southeast of Houston and lies in close proximity to established porphyry systems including the Huckleberry Mine, Berg deposit, and Poplar deposit[cite: 39, 40]. The project features historical high-grade polymetallic surface sampling (up to 15.4% Cu and 438.86 g/t Ag) and recent 2025 assays confirming significant surface Cu-Au-Mo mineralization (up to 1.306% Cu)[cite: 42, 43].",
    region: "British Columbia, Canada",
    image:
      "https://res.cloudinary.com/dfytfu2jq/image/upload/v1793202842/Capture_d_%C3%A9cran_2026-10-28_165053_blt08n.png", // TODO: Upload Claim Map to Cloudinary and insert URL
    coordinates: [53.846386, -126.956948], // Coordinates from property summary[cite: 39]
    isForSale: true,
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    quickFacts: [
      { label: "Property", value: "Tets" }, //[cite: 39]
      { label: "District", value: "Tahtsa Porphyry District" }, //[cite: 39]
      { label: "Area", value: "3,527.51 Hectares (19 claims)" }, //[cite: 39]
      { label: "Primary Commodities", value: "Cu, Au, Ag, Mo" }, //[cite: 39]
      { label: "Deposit Type", value: "Porphyry Cu-Mo / Polymetallic Breccia" }, //[cite: 39, 42]
      { label: "Status", value: "Early-Stage Exploration" }, //[cite: 39]
      { label: "Location", value: "~80 km SE of Houston, BC" }, //[cite: 39]
    ],
    tags: [
      "Copper",
      "Gold",
      "Silver",
      "Molybdenum",
      "Tahtsa Porphyry District",
      "Hazelton Group",
      "For Sale",
      "Option Available",
    ],
    sections: [
      {
        heading: "Property Overview & Regional Setting",
        type: "paragraph",
        image:
          "https://res.cloudinary.com/dfytfu2jq/image/upload/v1793202842/Capture_d_%C3%A9cran_2026-10-28_165134_s0jctf.png",
        imageCaption:
          "Satellite overview of the Tets Property relative to the Huckleberry, Berg, and Poplar deposits[cite: 40].",
        content:
          "The Tets Property is an early-stage copper-gold-silver-molybdenum exploration project situated within the Tahtsa porphyry district of west-central British Columbia[cite: 39]. Comprising 19 mineral claims covering approximately 3,527.51 hectares, the property is centred at approximately 53.846386°N, 126.956948°W, roughly 80 km southeast of Houston, British Columbia[cite: 39]. The project is strategically positioned in a broader district containing several established porphyry systems, located approximately 21 km from Huckleberry Mine, 30 km from the Berg deposit, and 5.4 km from the Poplar/Thira area[cite: 40]. Access is supported by Highway 16 and a network of forestry and resource roads[cite: 39].",
      },
      {
        heading: "Project Highlights",
        type: "bullet_list",
        content: [
          "Extensive 3,527.51-hectare land package in an established porphyry district with room for expansion[cite: 39].",
          "Historical high-grade surface sampling returning values up to 15.4% Cu and 438.86 g/t Ag[cite: 42].",
          "Historical drilling beneath mineralized trenches intercepted up to 0.77% Cu and 35.3 g/t Ag over 1.52 metres[cite: 42].",
          "Confirmed surface mineralization from the 2025 field program, with highlights including 1.306% Cu, 0.400 g/t Au, 4.28 g/t Ag, and 73.3 ppm Mo[cite: 43].",
          "Large historical soil anomaly (~600 m x 1,300 m) featuring values up to 350 ppm Cu, 2,200 ppm Zn, 290 ppm Pb, and 4.7 ppm Ag[cite: 42].",
          "Complex magnetic geophysical signature coinciding with mapped geological contacts and structural fault intersections[cite: 43].",
        ],
      },
      {
        heading: "Geological & Structural Architecture",
        type: "paragraph",
        image:
          "https://res.cloudinary.com/dfytfu2jq/image/upload/v1793202843/Capture_d_%C3%A9cran_2026-10-28_165008_jcbkba.png",
        imageCaption:
          "Bedrock geology and structural fault map of the Tets Property[cite: 41].",
        content:
          "The property is primarily underlain by Middle Jurassic Hazelton Group volcanic and sedimentary rocks, specifically units assigned to the Smithers Formation[cite: 41]. Local lithologies include volcanic flows, tuffs, volcanic breccias, and potential hypabyssal intrusive bodies (altered gabbroic plug and a diabase body)[cite: 41]. Alteration is locally intense, featuring chlorite, montmorillonite, pumpellyite, and calcite[cite: 41]. Several major faults cross or occur adjacent to the property[cite: 41]. The intersections between northeast-southwest and northwest-southeast structural faults are critical exploration targets, as they likely acted as pathways for intrusive emplacement and hydrothermal fluid circulation[cite: 41].",
      },
      {
        heading: "Known Mineralization",
        type: "paragraph",
        image:
          "https://res.cloudinary.com/dfytfu2jq/image/upload/v1793202842/Capture_d_%C3%A9cran_2026-10-28_165038_ohxexo.png",
        imageCaption:
          "High-grade copper-bearing rock sample from the Tets Property[cite: 42].",
        content:
          "The Tets occurrence hosts a broad polymetallic mineral assemblage that includes chalcopyrite, bornite, chalcocite, native copper, sphalerite, galena, and pyrite[cite: 42]. This mineralization has been reported within breccia zones, along fractures, and as open-space fillings[cite: 42]. The presence of extensive surface copper oxide staining and massive sulphide veining confirms an active and robust hydrothermal system[cite: 41, 42].",
      },
      {
        heading: "Recent 2025 Exploration Assays",
        type: "table",
        caption:
          "Significant Cu-Au-Mo assay results from the 2025 field sampling program, demonstrating percent-level copper mineralization accompanied by gold and molybdenum at surface[cite: 43].",
        headers: ["Sample ID", "Cu (%)", "Au (g/t)", "Ag (g/t)", "Mo (ppm)"],
        rows: [
          ["89026", "1.306%", "0.400", "4.28", "73.3"], //[cite: 43]
          ["89029", "0.69%", "0.267", "—", "15.4"], //[cite: 43]
          ["89033", "0.5605%", "0.268", "—", "50.5"], //[cite: 43]
          ["89034", "0.37%", "0.164", "—", "28.1"], //[cite: 43]
        ],
      },
      {
        heading: "Geophysical Targeting",
        type: "paragraph",
        content:
          "Airborne magnetic data outlines a complex environment across the property[cite: 43]. A prominent magnetic-high domain occurs northwest of the principal claim block, alongside a sharp magnetic gradient near tenures 1139030, 1139024, and 1139025[cite: 43]. A relatively compact magnetic anomaly is located near tenure 1139025, and an elongate north-northeast to south-southwest magnetic feature extends through the central and southeastern portions of the property[cite: 43]. The eastern portion contains closely spaced magnetic highs and lows that broadly coincide with mapped geological contacts and faults, presenting immediate targets for field verification[cite: 43].",
      },
      {
        heading: "Commercial Option Terms",
        type: "paragraph",
        content:
          "The Tets Property is available for outright purchase or through a staged option agreement[cite: 45]. The vendors are seeking a partner capable of advancing the project through systematic exploration and drill testing[cite: 45]. A 100% acquisition is possible via negotiated cash and/or share payments, subject to a retained Net Smelter Return (NSR) royalty[cite: 45]. Alternatively, a company may earn up to 100% ownership through staged cash payments, company shares, and exploration expenditures[cite: 45]. The vendors propose a 2% NSR royalty with all final royalty, buyback provisions, and purchase price terms subject to a definitive agreement[cite: 45].",
      },
      // rest of images gallery
      {
        heading: "Property Images",
        type: "ImageGallery",
        galleryType: "mosaic",
        images: [
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1793202843/Capture_d_%C3%A9cran_2026-10-28_165219_lf2yvy.png",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1793202843/Capture_d_%C3%A9cran_2026-10-28_165155_c5vtnp.png",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1793202843/Capture_d_%C3%A9cran_2026-10-28_165204_hx2sdw.png",
          },
          {
            src: "https://res.cloudinary.com/dfytfu2jq/image/upload/v1793202843/Capture_d_%C3%A9cran_2026-10-28_165211_g2eked.png",
          },
        ],
      },
    ],
  },
];