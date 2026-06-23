# miningmaps

# Adamson Geomatics — Portfolio Website

## Purpose

This is the personal portfolio and business website of **Adamson Geomatics**, a Canadian geospatial consulting firm specializing in mineral exploration, GIS mapping, land management, and real estate services. The site serves as both a **professional showcase** and a **marketplace** — displaying past mapping work, listing mineral properties for sale, and attracting clients who need land and GIS consulting services.

---

## Who It's For

- Junior and senior mining companies looking for GIS mapping support
- Prospectors and investors seeking mineral claims or exploration projects
- Private landowners and developers needing land title research or right-of-way planning
- Brokers and partners interested in listed properties for sale or joint venture

---

## Core Content

### 1. Services Offered
The site communicates three main service categories:

- **GIS Mapping & Land Management** — Claim staking, renewals, prospecting, marketing maps, assessment reporting, and permitting applications.
- **Title Searches & Research** — Land title searches, summary of liens and encumbrances, Crown Grant / patented land research.
- **Real Estate & Land Development** — GIS mapping for land planning, route analysis, land ownership research, valuations, landowner negotiations, and government permitting assistance.

### 2. Mineral Properties for Sale
The site lists early to advanced-stage mineral exploration projects available for sale, option, or joint venture. Featured commodities include:

- Gold, Silver, Copper, Zinc, Molybdenum, Antimony
- Lithium (pegmatite targets)
- Uranium

### 3. Map Portfolio (by Region)
A large portion of the site is a visual portfolio of GIS maps produced for clients, organized by geographic region:

**Canada:** British Columbia, Alberta, Saskatchewan, Manitoba, Ontario, Quebec, Newfoundland, NWT/Nunavut, Yukon

**USA:** Alaska, Arizona, California, Nevada, Wyoming

**International:** Australia, Europe (Finland), South America (Brazil, Colombia)

### 4. Map Types Showcased
- Geologic claim maps
- Mineral tenure & Crown Grant research maps
- Private land ownership maps
- Global marketing maps
- BLM land mapping and prospecting maps
- Target identification maps (Gold, Lithium, Uranium, Copper)
- Bedrock geology maps

### 5. Real Estate
A dedicated section for rural real estate properties, separate from mineral claims.

---

## Key Differentiators to Highlight

- Real client work shown (JDS Mining, Barkerville Gold Mines, BullRun Ventures, etc.)
- Reference letter from Dentons LLC (major international law firm)
- Successfully led a 100+ km powerline right-of-way project in BC
- Experience across multiple jurisdictions (Canada, USA, Australia, Europe, South America)
- Contact-driven business: all inquiries go directly to Chris Adamson via email

---

## Contact & Social

- **Email (properties):** chris@miningpropertymaps.com
- **Email (land services):** chris@adamsonlandservices.com
- **LinkedIn:** [Chris Adamson](https://www.linkedin.com/company/adamson-geomatics/)
- **Facebook:** [Adamson Geomatics](https://www.facebook.com/profile.php?id=61561908187975)

---

## Notes for the Rebuild

- The current site is a WordPress blog — the rebuild should present content in a cleaner, more professional portfolio format.
- The map images are the core visual asset of the site and should be displayed prominently.
- Navigation should allow filtering or browsing maps by region and/or commodity.
- A clear call-to-action (email contact) should be present on every page.
- The "For Sale" listings should be easy to find and visually distinct from the service pages.

## Implemented Features (Current State)

- **Cinematic Scroll Landing Page**: A 4-phase immersive scroll hero section using `framer-motion` spring physics, replacing generic templates with bold typography and high-contrast dark mode aesthetics.
- **Interactive Global Map**: A `react-leaflet` powered map featuring a sidebar toggle to switch between "Portfolio" (past projects/case studies) and "Marketplace" (active properties for sale), complete with dynamic slide-out info panels.
- **Dynamic Case Study Pages**: Blog-style portfolio views with integrated image zooming (`react-medium-image-zoom`) and mini-maps rendering real project coordinates.
- **Data Architecture**: Clear separation of state/mock data into `projects` (consulting portfolio) and `propertiesForSale` (active listings) to correctly support the dual-purpose nature of the business.

## Tech Stack Features

- **TypeScript** - For type safety and improved developer experience
- **Next.js** - React framework using the App Router
- **TailwindCSS** - CSS framework
- **shadcn/ui** - UI components
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the web application.

## Project Structure

```
miningmaps/
├── apps/
│   ├── web/         # Frontend application (Next.js App Router)
```

## Available Scripts

- `npm run dev`: Start all applications in development mode
- `npm run build`: Build all applications
- `npm run dev:web`: Start only the web application
- `npm run check-types`: Check TypeScript types across all apps
