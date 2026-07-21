export type ServiceModule = {
  id: string;
  code: string;
  title: string;
  summary: string;
  services: string[];
  deliverables: string[];
  outcome: string;
};

export const serviceModules: ServiceModule[] = [
  {
    id: "tenure-operations",
    code: "OPS_01",
    title: "Tenure Operations",
    summary:
      "Keep land positions active, traceable, and expansion-ready with staking, renewals, and title intelligence.",
    services: [
      "Claim renewals and expiry tracking",
      "Claim staking support and field-ready packages",
      "Tenure research for Crown granted and patented mineral claims",
      "Mineral claim ownership verification",
      "Historical tenure research",
      "Mineral claim due diligence",
    ],
    deliverables: [
      "Tenure status summaries",
      "Renewal calendars",
      "Ownership snapshots",
    ],
    outcome:
      "Mineral tenure stays organized and ready for acquisition, exploration, or review.",
  },
  {
    id: "acquisition-brokerage",
    code: "OPS_02",
    title: "Acquisition & Brokerage",
    summary:
      "Support property acquisition strategy and circulate opportunities through an established investor network.",
    services: [
      "Property acquisitions and land position expansion",
      "Property brokering for mineral opportunities",
      "Marketing to a large network of investors",
    ],
    deliverables: [
      "Acquisition briefs",
      "Investor-ready map packages",
      "Market circulation support",
    ],
    outcome:
      "Properties move faster from internal review to live investor conversations.",
  },
  {
    id: "mapping-targeting",
    code: "OPS_03",
    title: "Mapping & Targeting",
    summary:
      "Build GIS products that combine tenure, geology, and prospecting logic into decision-ready map sets.",
    services: [
      "GIS mapping for planning and field operations",
      "Mining claim maps and staking maps",
      "Prospecting and target identification",
      "Geologic, geophysical, and geochemical maps",
      "Survey plan georeferencing",
      "Parcel mapping and correction analysis",
      "Property value comparison mapping",
      "Spatial analysis for land and resource projects",
    ],
    deliverables: [
      "Integrated GIS layers",
      "Exploration target maps",
      "Technical map suites",
    ],
    outcome:
      "Teams get one mapped surface for land review, targeting, and investor communication.",
  },
  {
    id: "permitting-reporting",
    code: "OPS_04",
    title: "Permitting & Reporting",
    summary:
      "Prepare exploration paperwork and technical reporting so projects stay compliant and submission-ready.",
    services: [
      "Permit applications",
      "Notices of Work for mineral exploration and land use",
      "Assessment Report preparation and submissions",
      "Historical ARIS report research",
      "Technical report support",
      "QP geological reporting support",
    ],
    deliverables: [
      "Permit application packages",
      "Notice of Work support files",
      "Assessment report submissions",
    ],
    outcome:
      "Regulatory steps are documented clearly and delivered in a format stakeholders can act on.",
  },
  {
    id: "terrain-imagery",
    code: "OPS_05",
    title: "Terrain & Imagery",
    summary:
      "Translate topography and remote imagery into planning layers that improve terrain understanding before field deployment.",
    services: [
      "Digital elevation models (DEM)",
      "LiDAR analysis",
      "Topographic and contour mapping",
      "Photogrammetry",
      "Aerial photo sourcing and analysis",
      "Terrain modelling for exploration projects",
      "Virtual Tours (Panoramic Drone Photography) - client partner",
    ],
    deliverables: [
      "Surface models and contours",
      "Orthomosaic imagery",
      "Aerial interpretation layers",
    ],
    outcome:
      "Terrain context becomes clearer for planning access, logistics, and technical review.",
  },
  {
    id: "property-valuation",
    code: "OPS_06",
    title: "Property Valuation & Assessment Appeals",
    summary:
      "Independent property valuation analysis supported by GIS research and assessment appeal expertise throughout British Columbia.",
    services: [
      "Property valuation reviews",
      "BC Assessment appeals",
      "Property tax appeals",
      "Neighbourhood value comparisons",
      "GIS-supported valuation analysis",
      "Assessment evidence preparation",
    ],
    deliverables: [
      "Property valuation reports",
      "Comparable property analysis",
      "Assessment appeal packages",
    ],
    outcome:
      "Property owners receive defensible valuation evidence and support during assessment and tax appeal processes.",
  },
  {
    id: "property-due-diligence",
    code: "OPS_07",
    title: "Property Due Diligence",
    summary:
      "Research and analysis services that help buyers, investors, and landowners understand property risks before making decisions.",
    services: [
      "Property Disclosure Statement reviews",
      "Property history research",
      "Land use review",
      "Ownership investigation",
      "Property acquisition support",
      "Risk identification and analysis",
    ],
    deliverables: [
      "Due diligence summaries",
      "Property research reports",
      "Risk assessment findings",
    ],
    outcome:
      "Clients gain a clearer understanding of property conditions, risks, and opportunities before acquisition.",
  },
  {
    id: "title-searches",
    code: "OPS_08",
    title: "Title Searches & Ownership Research",
    summary:
      "Investigate ownership records, title history, and encumbrances to support informed property decisions throughout British Columbia.",
    services: [
      "Title searches",
      "Ownership verification",
      "Lien research",
      "Property record investigations",
      "Historical ownership research",
      "Encumbrance identification",
    ],
    deliverables: [
      "Ownership summaries",
      "Title research reports",
      "Property record packages",
    ],
    outcome:
      "Clients receive a clear understanding of ownership status and title-related considerations.",
  },
  {
    id: "boundary-disputes",
    code: "OPS_09",
    title: "Boundary Disputes & Land Corrections",
    summary:
      "Resolve land boundary issues using GIS analysis, survey plan interpretation, georeferencing, and property research.",
    services: [
      "Boundary dispute investigations",
      "Survey plan analysis",
      "Parcel correction research",
      "Land correction order support",
      "Georeferencing services",
      "Property boundary mapping",
      "ParcelMap discrepancy investigations",
    ],
    deliverables: [
      "Boundary analysis reports",
      "Georeferenced survey maps",
      "Parcel correction documentation",
    ],
    outcome:
      "Property owners and stakeholders receive reliable evidence to support land boundary and parcel correction matters.",
  },
  {
    id: "geological-services",
    code: "OPS_10",
    title: "Geological & Technical Services",
    summary:
      "Support exploration projects with geological interpretation, technical reporting, and advanced spatial analysis.",
    services: [
      "Geological mapping",
      "Leapfrog geological modelling",
      "LiDAR interpretation",
      "DEM analysis",
      "Exploration targeting",
      "Assessment report preparation",
      "Technical report support",
      "Qualified Person (QP) geological services",
    ],
    deliverables: [
      "Geological maps",
      "Technical reports",
      "Exploration target models",
    ],
    outcome:
      "Exploration teams receive technical products that support decision-making, reporting, and project advancement.",
  },
];

export const serviceMetrics = {
  moduleCount: serviceModules.length,
  serviceLineCount: serviceModules.reduce(
    (total, module) => total + module.services.length,
    0,
  ),
  deliverableCount: Array.from(
    new Set(serviceModules.flatMap((module) => module.deliverables)),
  ).length,
};

export const serviceDeliverables = Array.from(
  new Set(serviceModules.flatMap((module) => module.deliverables)),
);
