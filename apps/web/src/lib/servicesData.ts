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
      "Digital elevation models",
      "Topographic and contour mapping",
      "Photogrammetry",
      "Aerial photo sourcing and analysis",
    ],
    deliverables: [
      "Surface models and contours",
      "Orthomosaic imagery",
      "Aerial interpretation layers",
    ],
    outcome:
      "Terrain context becomes clearer for planning access, logistics, and technical review.",
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
