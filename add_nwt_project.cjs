const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'apps/web/src/lib/projectData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newProject = `  {
    id: "nt-011",
    title: "NWT / Nunavut",
    summary: "Lithium & Uranium Prospecting targets in Northern Canada.",
    region: "NWT & Nunavut, Canada",
    image: "https://images.unsplash.com/photo-1469521669194-babbdf900920?q=80&w=1170&auto=format&fit=crop",
    coordinates: [64.8255, -124.8457],
    isForSale: true,
    date: "2024-06-01",
    author: "Adamson Geomatics",
    contactEmail: "chris@miningpropertymaps.com",
    tags: ["Lithium", "Uranium", "Prospecting", "Pegmatite"],
    quickFacts: [
      { label: "Commodities", value: "Lithium, Uranium" },
      { label: "Status", value: "Open for Staking" },
      { label: "Region", value: "Northern Canada" }
    ],
    sections: [
      {
        heading: "Lithium & Uranium Prospecting",
        type: "paragraph",
        content: "I am able to find lithium and uranium targets in northern Canada. I have found several already that are open for staking. Below are targets I have found. For more information, or for assistance finding more targets, email chris@miningpropertymaps.com"
      },
      {
        heading: "Lithium NWT",
        type: "SimpleImage",
        image: "/images/projects/NWT/placeholder-1.jpg",
        imageCaption: "NWT Lithium Target with Pegmatite hosting geology. NWT Lithium prospect. Open for staking as of June 2024."
      },
      {
        heading: "NWT Prospecting Maps",
        type: "SimpleImage",
        image: "/images/projects/NWT/placeholder-2.jpg",
        imageCaption: "Geology and Claims, Rankin Inlet NTS 55J. Rankin Inlet Claim and Geology Map."
      },
      {
        heading: "Indigenous Lands Mapping",
        type: "paragraph",
        image: "/images/projects/NWT/placeholder-3.jpg",
        content: "I always make sure to map alienations, withdrawn areas, parks and First Nations / Indigenous land areas where exploration is or may be restricted."
      },
      {
        heading: "Global Target Generation & Uranium Maps",
        type: "paragraph",
        image: "/images/projects/NWT/placeholder-4.jpg",
        content: "This map is a uranium target I found in the NWT. To see the full sized image, email me at chris@miningpropertymaps.com. I am open to finders fee deals if the area gets staked!\\n\\nI can make prospecting maps and find targets for you anywhere in the world. Email chris@miningpropertymaps.com with your project requirements."
      },
      {
        heading: "Hudson Bay Geology",
        type: "SimpleImage",
        image: "/images/projects/NWT/placeholder-5.jpg",
        imageCaption: "Hudson Bay Geology and Claim Map (2011 map – email is now chris@miningpropertymaps.com)"
      }
    ]
  },
];`;

content = content.replace(/\];[\s\n]*$/, newProject);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully appended new project.');