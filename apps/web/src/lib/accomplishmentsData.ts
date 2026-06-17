export type Accomplishment = {
  title: string
  summary: string
  areas: string[]
}

export const accomplishments: Accomplishment[] = [
  {
    title: "Land Expropriation Support",
    summary:
      "Assisted a client during a land expropriation matter involving the Province of British Columbia. Through detailed research, documentation review, and property analysis, the case was successfully resolved, helping the client retain privately owned land.",
    areas: [
      "Land research and analysis",
      "Property documentation review",
      "GIS and mapping support",
      "Evidence preparation",
    ],
  },
  {
    title: "Property Assessment & Tax Appeal Successes",
    summary:
      "Successfully supported multiple property assessment and tax appeal cases throughout British Columbia. Using property valuation research, GIS-based comparison analysis, and assessment review techniques, evidence was prepared to challenge assessed values and support fair property taxation outcomes.",
    areas: [
      "Property valuation analysis",
      "BC Assessment appeals",
      "Tax appeal support",
      "GIS-based comparable property studies",
    ],
  },
  {
    title: "ParcelMapBC Location Correction",
    summary:
      "Identified a mapping discrepancy involving the Barlow Substation in the Quesnel area. Through GIS analysis, georeferencing, and detailed review of historical survey plans, the location inconsistency was documented and corrected, improving the accuracy of property and infrastructure mapping records.",
    areas: [
      "GIS analysis",
      "Survey plan interpretation",
      "Georeferencing",
      "Parcel correction research",
    ],
  },
  {
    title: "Residential Property Due Diligence",
    summary:
      "Provided research and due diligence support for numerous residential property transactions in the Barkerville and Cariboo regions of British Columbia. Services included reviewing property records, analyzing disclosure information, researching ownership details, and identifying potential concerns before purchase decisions were finalized.",
    areas: [
      "Property Disclosure Statement reviews",
      "Property research",
      "Ownership verification",
      "Due diligence investigations",
    ],
  },
  {
    title: "Mineral Property & Exploration Support",
    summary:
      "Supported mineral exploration projects, prospectors, and resource companies through claim research, GIS mapping, technical reporting, and land package evaluation. Projects have included tenure research, claim staking support, geological mapping, and the preparation of technical materials used for exploration planning and project advancement.",
    areas: [
      "Mineral claim research",
      "Exploration mapping",
      "Geological data integration",
      "Technical reporting",
      "GIS analysis",
    ],
  },
]
