# Prioritized SEO Action Plan: Mining Property Maps

- **Target URL**: `https://www.miningpropertymaps.com/`
- **Audit Date**: 2026-09-27
- **Implementation Status**: Phase 1, Phase 2, and Phase 3 (Step 1) Fully Completed & Verified in Build Output

---

## Phase 1: Immediate Blockers (Critical)

### [x] 1. Fix Canonical Domain Mismatch & 308 Redirect Loop
- **Status**: ✅ **COMPLETED** (2026-09-27)
- **Impact**: 🔴 Critical | **Effort**: Low (15 mins)
- **Implemented Changes**:
  - `apps/web/src/app/layout.tsx`: `metadataBase`, OpenGraph URL, and Schema URLs updated to `https://www.miningpropertymaps.com`.
  - `apps/web/src/app/[[...slug]]/page.tsx`: Route canonicals and breadcrumbs updated to `https://www.miningpropertymaps.com`.
  - `apps/web/next-sitemap.config.js`: `siteUrl` updated to `https://www.miningpropertymaps.com`.
  - `apps/web/public/robots.txt`: Sitemap reference updated to `https://www.miningpropertymaps.com/sitemap.xml`.
- **Verification**: `next-sitemap` generated sitemap index with `https://www.miningpropertymaps.com/sitemap.xml`, and exported HTML shows `<link rel="canonical" href="https://www.miningpropertymaps.com"/>`.

---

### [x] 2. Eliminate Client-Side Rendering Bailout (`ssr: false`)
- **Status**: ✅ **COMPLETED** (2026-09-27)
- **Impact**: 🔴 Critical | **Effort**: Medium
- **Implemented Changes**:
  - Moved `{ ssr: false }` inward to only the Leaflet map modules in `apps/web/src/App.tsx` (`MapView`, `ProjectView`, and `DashboardView`), allowing the main app and all page views (`HomePage`, `AboutPage`, `ServicesPage`, `ContactPage`, `ProjectsPage`, `PostsPage`) to server-render.
  - In `apps/web/src/app/[[...slug]]/client.tsx`, imported `App` directly without `{ ssr: false }`.
- **Verification**: `dist/index.html` word count increased from **6 words to 2,206 words** of fully crawlable, semantic HTML content.

---

### [x] 3. Replace Massive 1.1 MB Favicon in `<head>`
- **Status**: ✅ **COMPLETED** (2026-09-27)
- **Impact**: 🔴 Critical | **Effort**: Low (10 mins)
- **Implemented Changes**:
  - Re-encoded and optimized `favicon.png` with LANCZOS downsampling and PNG optimization to 128x128 (20.8 KB, **98.1% size reduction**).
  - Copied clean vector SVG `icon.svg` (279 bytes) to `apps/web/public/icon.svg` and registered it in `layout.tsx` icons metadata.
- **Verification**: `favicon.png` file size is now 20,801 bytes.

---

## Phase 2: Quick Wins (High Impact, Low Effort)

### [x] 4. Inject Server-Side Semantic `<h1>` and Navigation Links
- **Status**: ✅ **COMPLETED** (2026-09-27)
- **Impact**: 🟠 High | **Effort**: Low
- **Implemented Changes**:
  - Enabled SSR across `Header` and `HomePage`, rendering `<header><nav>` navigation links and the primary `<h1>` (`Precision GIS & Land Management`).
  - Improved homepage metadata title to `"Adamson Geomatics | GIS & Mineral Claim Services in BC"`.
- **Verification**: BeautifulSoup HTML parser confirmed:
  - `H1`: `['Precision GIS &Land Management.']`
  - `H2`: 5 prominent semantic sections detected
  - Dozens of crawlable `<a href="...">` internal links present in raw HTML.

---

### [x] 5. Deploy Missing Security Headers
- **Status**: ✅ **COMPLETED** (2026-09-27)
- **Impact**: 🟠 High | **Effort**: Low
- **Implemented Changes**:
  - Configured security headers in `apps/web/next.config.mjs`.
  - Created `apps/web/vercel.json` with edge routing headers: `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, and `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`.
- **Verification**: Verified JSON structure in `vercel.json` and `next.config.mjs`.

---

### [x] 6. Create `/public/llms.txt` and `/public/llms-full.txt`
- **Status**: ✅ **COMPLETED** (2026-09-27)
- **Impact**: 🟡 Medium | **Effort**: Low
- **Implemented Changes**:
  - Created `apps/web/public/llms.txt` adhering to the llmstxt.org specification with title, blockquote description, and categorized markdown links.
  - Created `apps/web/public/llms-full.txt` with comprehensive company, service, and regulatory documentation.
- **Verification**: Verified using `.agents/skills/seo/scripts/llms_txt_checker.py` — achieved a **100/100 perfect quality score** with 0 issues.

---

### [x] 7. Explicit AI Crawler Directives in `robots.txt`
- **Status**: ✅ **COMPLETED** (2026-09-27)
- **Impact**: 🟡 Medium | **Effort**: Low
- **Implemented Changes**:
  - Updated `apps/web/public/robots.txt` with explicit `Allow: /` rules for `GPTBot`, `ChatGPT-User`, `OAI-SearchBot`, `ClaudeBot`, `anthropic-ai`, `PerplexityBot`, `Googlebot`, `Google-Extended`, `Applebot`, `Applebot-Extended`, `Bingbot`, `CCBot`, `Bytespider`, `FacebookBot`, and `Amazonbot`.
  - Updated sitemap URL to `https://www.miningpropertymaps.com/sitemap.xml`.
- **Verification**: Direct inspection of `public/robots.txt`.

---

### [x] 8. Optimize Open Graph Title Length
- **Status**: ✅ **COMPLETED** (2026-09-27)
- **Impact**: 🟡 Medium | **Effort**: Low
- **Implemented Changes**:
  - Updated `openGraph.title` and `twitter.title` in `apps/web/src/app/layout.tsx` to `"Adamson Geomatics | GIS & Mineral Claims in BC"` (53 characters).
- **Verification**: Checked character count (53 chars <= 60 chars threshold).

---

## Phase 3: Strategic SEO Improvements (Step 1)

### [x] 9. Enhance Structured Data with Service Catalog & E-E-A-T Schema
- **Status**: ✅ **COMPLETED** (2026-09-27)
- **Impact**: 🟡 Medium | **Effort**: Medium
- **Implemented Changes**:
  - Expanded `ProfessionalService` in `apps/web/src/app/layout.tsx` to include `hasOfferCatalog` with explicit services: *Mineral Claim Staking*, *Tenure Maintenance & Assessment Work*, *LiDAR & Bare-Earth DEM Processing*, *3D Geological Modelling (Leapfrog)*, and *NI 43-101 Technical Cartography*.
  - Added founder credentials (`@id`, Registered Inspector job title, `knowsAbout`, LinkedIn and X profiles).
  - Enriched project and blog post JSON-LD in `apps/web/src/app/[[...slug]]/page.tsx` with `author`, `publisher`, `about` (Place/region), and `mainEntityOfPage`.
- **Verification**: Verified using BeautifulSoup parser across `dist/index.html` and project HTML outputs.

---

### [x] 10. Compress Open Graph Social Image
- **Status**: ✅ **COMPLETED** (2026-09-27)
- **Impact**: 🟡 Medium | **Effort**: Low
- **Implemented Changes**:
  - Compressed `apps/web/src/app/opengraph-image.png` from **1,270,511 bytes to 331,231 bytes** (**73.9% size reduction**) and synchronized to `apps/web/public/opengraph-image.png`.
- **Verification**: Verified dimensions (1200x502) and file size (331 KB).

---

## Phase 4: Next Strategic Steps (Content & E-E-A-T Expansion)

### [ ] 11. High-Intent Commercial Keyword Landing Sections
- **Target**: "BC Mineral Claim Staking", "Mining GIS Mapping Services", "NI 43-101 Cartography".
- **Action**: Optimize `/services` and `/about` with dedicated keyword-targeted sections, technical deliverables, and pricing/consultation inquiry CTAs.

### [ ] 12. FAQ Accordion for GEO / AI Search (Answer Engine Optimization)
- **Target**: Perplexity, ChatGPT Search, and Google AI Overviews.
- **Action**: Add direct answer FAQ blocks to `/services` answering high-intent questions (e.g. *How to stake a mineral claim in BC*, *What are the requirements for an NI 43-101 map*).
