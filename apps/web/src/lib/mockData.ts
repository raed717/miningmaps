export const miningSites = [
  {
    id: "site-001",
    name: "Atlas Gold Mine",
    coordinates: [37.7749, -122.4194] as [number, number],
    resourceType: "gold",
    depth: 1200,
    estimatedValue: 450000000,
    status: "active",
    region: "North America",
  },
  {
    id: "site-002",
    name: "Cobalt Nexus",
    coordinates: [-10.5, 25.5] as [number, number],
    resourceType: "cobalt",
    depth: 450,
    estimatedValue: 800000000,
    status: "exploration",
    region: "Africa",
  },
  {
    id: "site-003",
    name: "Lithium Flats",
    coordinates: [-23.5, -68.5] as [number, number],
    resourceType: "lithium",
    depth: 50,
    estimatedValue: 1200000000,
    status: "active",
    region: "South America",
  },
  {
    id: "site-004",
    name: "Iron Range Alpha",
    coordinates: [47.5, -92.5] as [number, number],
    resourceType: "iron",
    depth: 200,
    estimatedValue: 300000000,
    status: "inactive",
    region: "North America",
  },
  {
    id: "site-005",
    name: "Copper Mountain",
    coordinates: [-33.0, -70.5] as [number, number],
    resourceType: "copper",
    depth: 800,
    estimatedValue: 650000000,
    status: "active",
    region: "South America",
  }
];

export const projects = [
  {
    id: "proj-1",
    title: "Andes Lithium Expansion",
    description: "Expanding lithium extraction capabilities in the high Andes region using minimal environmental impact techniques.",
    region: "South America",
    image: "https://images.unsplash.com/photo-1614088927954-46b5e1147a06?auto=format&fit=crop&q=80&w=800",
    problem: "Rising demand for EV batteries required scaling up extraction without depleting local water sources.",
    solution: "Implemented direct lithium extraction (DLE) technology, reducing water usage by 80% while increasing yield.",
    outcome: "Successfully boosted production capacity to 50,000 tons per year with a significantly lower carbon footprint."
  },
  {
    id: "proj-2",
    title: "Deep Gold Exploration",
    description: "Advanced seismic and geological modeling to locate deep-vein gold deposits previously thought unreachable.",
    region: "North America",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    problem: "Surface deposits were exhausted, necessitating deeper, more costly exploration with high risk of failure.",
    solution: "Deployed AI-driven 3D modeling and machine learning algorithms on historical seismic data to pinpoint new veins.",
    outcome: "Discovered a 2-million-ounce deposit at 1,500m depth with a 95% confidence rating before drilling."
  },
  {
    id: "proj-3",
    title: "Sustainable Copper Recovery",
    description: "Repurposing old tailings to recover copper using bioleaching processes.",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1590492817354-1ea747120a2e?auto=format&fit=crop&q=80&w=800",
    problem: "Legacy mine waste contained significant unextracted copper, posing environmental risks and economic loss.",
    solution: "Introduced a bioleaching facility utilizing specific bacteria to naturally extract copper from the tailings.",
    outcome: "Recovered over 10,000 tons of copper annually while remediating the site for future community use."
  }
];