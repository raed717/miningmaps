# 🎨 MiningMaps Design System & Theme Context

This document outlines the design system, aesthetic guidelines, and specific styling rules for the MiningMaps application. Future AI agents and developers should strictly adhere to these guidelines when creating new pages, components, or modifying existing UI to maintain a cohesive look and feel.

## 1. Core Aesthetic: "Industrial Cartography / Terminal Brutalism"
The application avoids generic SaaS aesthetics. Instead, it embraces a bold, brutalist, and highly technical vibe inspired by field operations, geological surveys, and command-line terminals. 
- **Vibe:** Gritty, precise, data-heavy, rugged, and high-tech.
- **Key Elements:** High contrast, sharp edges, neon glowing accents against obsidian backgrounds, visible grids, and monospace data readouts.

## 2. Color Palette
Colors are managed via CSS variables in `apps/web/src/app/globals.css`. Do not use hardcoded hex values for theme colors; always use Tailwind CSS classes referencing these variables.

- **Backgrounds:** 
  - Obsidian/Deep Black (`--background`): The void. Used for main backgrounds.
  - Muted/Card Backgrounds (`--card`, `--muted`): Slightly lighter dark shades or translucent black (`bg-black/40` with `backdrop-blur`).
- **Primary Accent (Neon Hazard Orange):** 
  - Variable: `--primary` (approx. `#FF3300`)
  - Usage: Main call-to-action buttons, active states, glowing borders, and key data highlights.
- **Secondary Accent (Toxic/Terminal Green):** 
  - Variable: `--secondary` (approx. `#00FF41`)
  - Usage: Success states, live telemetry data, "active" indicators, and secondary tags.
- **Text:** 
  - Primary: White (`--foreground`)
  - Muted/Secondary: Light grays (`--muted-foreground`)

*Example Tailwind Usage:* `text-primary`, `bg-secondary/10`, `border-primary/30`.

## 3. Typography
- **Headings (Display / Branding):** Inter (or similar bold, geometric sans-serif). Use uppercase heavily for section titles. `font-black`, `tracking-tighter`.
- **Data & Interfaces (Terminal):** JetBrains Mono / Monospace (`font-mono`). Used for tags, metadata, coordinates, buttons, and small technical text. `tracking-widest` for a spacious, technical feel.

## 4. UI Components & Styling Rules

### Borders & Geometry
- **Sharpness:** Prefer sharp or slightly rounded corners (`rounded-sm` or `rounded-none`). Avoid overly pill-shaped elements unless specifically mimicking a physical indicator light.
- **Wireframes:** Use thin borders extensively to segment data. Use `border border-primary/20` or `border-white/10`.

### Effects & Textures
- **Glows/Neon:** Use drop shadows to create CRT/neon glows around primary elements. Example: `shadow-[0_0_15px_rgba(255,51,0,0.4)]`.
- **Noise/Grain:** Backgrounds often use a grainy SVG noise overlay to feel rugged. Example: `bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay`.
- **Glassmorphism:** Use dark transparent backgrounds with blur for floating panels over complex backgrounds. Example: `bg-black/60 backdrop-blur-md`.
- **Grids:** Use CSS linear gradients to create topographic or radar grid backgrounds.

### Images & Media
- **Natural Sizing:** Display project images at their natural/real size. Avoid artificial cropping (`object-cover` that cuts off vital map data) in detail views. Use `object-contain` for maps and technical documents.
- **Blend Modes:** Background hero images should often use `mix-blend-luminosity` or `mix-blend-screen` with high opacity black overlays to keep them subdued and atmospheric.

## 5. AI Agent Instructions for New Pages
When tasked with creating a new page or component:
1. **Analyze:** Read this `DESIGN_SYSTEM.md` file completely.
2. **Structure:** Build layout using CSS Grid or Flexbox, segmenting information logically like a dashboard.
3. **Style:** 
   - Start with a dark background.
   - Use `font-mono` for any numbers, statuses, or technical data.
   - Style cards with thin borders (`border-white/10` or `border-primary/20`) and dark, translucent backgrounds.
   - Ensure interactive elements have a clear, glowing hover state (e.g., `hover:shadow-[0_0_20px_rgba(255,51,0,0.6)] hover:bg-primary/10`).
4. **Theme Consistency:** Do not introduce pastel colors, soft shadows, or playful rounded UI elements. Stick to the brutal, technical field-ops vibe.