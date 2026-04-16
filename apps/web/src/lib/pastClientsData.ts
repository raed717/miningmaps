export type PastClient = {
  name: string;
  notes?: string;
  url?: string;
};

export const pastClients: PastClient[] = [
  { name: "JDS Mining", url: "https://www.jdsmining.ca/" },
  {
    name: "Barkerville Gold Mines (Osisko Development Corp)",
    url: "https://osiskodev.com/",
  },
  {
    name: "Quantum Critical Metals Corp",
    url: "https://www.quantumcriticalmetals.com/",
  },
  { name: "Phoenix Copper Company Inc.", url: "" },
  { name: "Hawkeye Gold & Diamond", url: "https://hawkeyegold.com/" },
  { name: "Perry English", url: "" },
  { name: "Steven Scott", url: "" },
  { name: "Tony Derrien", url: "" },
  { name: "Hertz Energy", url: "https://hertz-energy.com/" },
  {
    name: "B.C Hydro",
    notes: "Reservoir monitoring report",
    url: "https://www.bchydro.com/index.html",
  },
  {
    name: "TELUS",
    notes: "Real Estate Manager",
    url: "https://www.telus.com/en",
  },
  { name: "The District of North Vancouver", url: "https://www.dnv.org/" },
  {
    name: "The City of Coquitlam",
    notes: "Produced stream monitoring maps in partnership with B.C Hydro",
    url: "https://www.coquitlam.ca/",
  },
  { name: "The City of Chilliwack", url: "" },
  {
    name: "Environment & Climate Change Canada",
    notes:
      "Disposal at Sea Program and Species at Risk Program; confidential government programs, maps not available",
    url: "https://www2.gov.bc.ca/gov/content/transportation/transportation-infrastructure/engineering-standards-guidelines/environmental-management/reference-documents/environmental-regulatory-compliance/disposal-at-sea-permit",
  },
  {
    name: "Aquaterra Environmental",
    notes: "Adamson Geomatics produced GIS aquatic monitoring maps",
    url: "https://www.linkedin.com/company/aquaterra-environmental-ltd-/",
  },
  {
    name: "Dentons LLC",
    notes:
      "Worked on complex Crown Grant transfers and parcel mapping in Barkerville and Wells, B.C.",
    url: "https://www.dentons.com/en/",
  },
  {
    name: "District of Wells",
    notes:
      "Assisted with powerline right-of-way GIS land mapping and research into other land issues",
    url: "https://www.wells.ca/",
  },
  {
    name: "University of Waterloo",
    notes: "Wildfire mitigation modeling consulting",
    url: "https://uwaterloo.ca/",
  },
  { name: "Many others not listed", url: "" },
];
