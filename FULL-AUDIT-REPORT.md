# Comprehensive SEO Audit Report: Mining Property Maps

- **Target URL**: `https://www.miningpropertymaps.com/`
- **Audit Date**: 2026-09-27
- **Audit Scope**: Single-page & Architectural Full Audit (LLM-First + Script-Verified)
- **Overall Rating**: 28/100 (Critical — Needs Immediate Architectural and Technical Remediation)
- **Score Confidence**: High (Live HTTP probing + Codebase root-cause verification)
- **Interactive Dashboard**: `SEO-REPORT.html`

---

## 1. Executive Summary

An in-depth SEO audit was conducted for `https://www.miningpropertymaps.com/` combining live network requests, crawler simulations, script-backed diagnostics, and codebase analysis of the underlying Next.js application.

While the site features strong branding, valid HTTPS, modern metadata (Open Graph, Twitter Cards), and Schema.org JSON-LD definitions, **two critical architectural flaws severely impair search engine indexing, crawl efficiency, and organic discoverability**:

1. **Client-Side Rendering Bailout (Zero Crawlable HTML)**: In `apps/web/src/app/[[...slug]]/client.tsx`, the application dynamically loads the entire SPA using `dynamic(() => import("../../App"), { ssr: false })`. This forces Next.js to output `<template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING"></template>`, delivering **zero server-rendered HTML content** (0 `<h1>`, 0 `<h2>`, 0 internal navigation links, and a word count of 6) to web crawlers.
2. **Canonical Domain Mismatch & 308 Redirect Loop**: The live site resolves on `https://www.miningpropertymaps.com/`, but the canonical tag, Open Graph URL, and sitemap configuration specify `https://miningpropertymaps.com` (non-www). Because `https://miningpropertymaps.com` issues an HTTP 308 permanent redirect back to `https://www.miningpropertymaps.com/`, the site instructs search engines to index a URL that redirects immediately back to itself.
3. **Severe Asset Overhead in Head**: The favicon linked in the HTML head (`/favicon.png`) is **1.1 MB** (1,104,804 bytes), and the Open Graph preview image is **1.27 MB**, slowing down initial document parsing and mobile performance.

### Top 3 Critical Issues
1. **Zero Server-Side Rendered Content (`ssr: false`)**: Crawlers without full JavaScript rendering (Bing, DuckDuckGo, Yahoo, AI agents like Perplexity and ClaudeBot) see an empty shell.
2. **Canonical 308 Redirect Conflict**: Canonical URL (`miningpropertymaps.com`) redirects permanently (308) to the serving URL (`www.miningpropertymaps.com`).
3. **Missing Semantic Structure**: No `<h1>` tag and no crawlable anchor links exist in the initial HTTP response.

### Top 3 Immediate Opportunities
1. **Enable Server-Side Rendering (SSR / Static HTML Generation)**: Render semantic headers, hero text, and navigation links in the initial HTML stream.
2. **Unify Canonical Domain Configuration**: Align `metadataBase`, canonical links, sitemaps, and schemas to `https://www.miningpropertymaps.com/`.
3. **Optimize Head Assets**: Compress `/favicon.png` from 1.1 MB to a standard 16x16 / 32x32 SVG/ICO (<20 KB) and optimize social previews.

---

## 2. Category Score Card & Chain-of-Thought Derivation

| Category | Weight | Base Score | Penalties | Final Score | Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Technical SEO** | 25% | 43/100 | -23 | **20/100** | 🔴 Critical |
| **Content Quality & E-E-A-T** | 20% | 40/100 | -20 | **20/100** | 🔴 Critical |
| **On-Page SEO & Metadata** | 15% | 50/100 | -25 | **25/100** | 🔴 Critical |
| **Schema & Structured Data** | 15% | 60/100 | -10 | **50/100** | ⚠️ Needs Improvement |
| **Performance (CWV)** | 10% | 40/100 | -10 | **30/100** | 🔴 Poor |
| **Image & Asset Optimization** | 10% | 40/100 | -10 | **30/100** | 🔴 Poor |
| **AI Search Readiness (GEO)** | 5% | 40/100 | -10 | **30/100** | 🔴 Poor |
| **Overall Weighted Score** | **100%** | — | — | **28/100** | 🔴 **Critical** |

### Explicit Score Justifications
- **Technical SEO (20/100)**: Score reflects valid HTTPS and robots.txt (+), heavily penalized by SSR bailout leaving 0 HTML content (Critical, -15), canonical 308-redirect conflict (Critical, -15), and 5 missing security headers (Critical, -15).
- **Content Quality (20/100)**: High domain authority knowledge in codebase (+), penalized by complete absence of text in the server-rendered HTML layer (Critical, -15) and lack of crawlable author bio/E-E-A-T credentials (Warning, -5).
- **On-Page SEO (25/100)**: Meta description and OG tags present (+), penalized by 0 `<h1>` tags (Critical, -15), 0 internal crawl links in HTML (Warning, -5), and short homepage title lacking primary commercial keywords (Warning, -5).
- **Schema & Structured Data (50/100)**: Valid `ProfessionalService` and `WebSite` JSON-LD (+), penalized by schema `@id` and `url` referencing the redirecting non-www domain (Warning, -5) and lack of nested `hasOfferCatalog` services (Warning, -5).
- **Performance & CWV (30/100)**: Modern Next.js chunking (+), penalized by 1.1 MB favicon blocking head execution (Warning, -5) and 1.27 MB OG image (Warning, -5). *(Score confidence: Low due to PageSpeed API rate limiting)*.
- **Image Optimization (30/100)**: Explicit width/height on OG tags (+), penalized by uncompressed 1.1 MB favicon in `<head>` and 0 crawlable `<img>` tags in raw HTML.
- **AI Search Readiness (30/100)**: GPTBot and ClaudeBot allowed in robots.txt (+), penalized by missing `/llms.txt` (Warning, -5) and 8 unmanaged AI crawler user agents (Warning, -5).

---

## 3. Verified Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **Technical** | 🔴 Critical | Confirmed | Complete SSR Bailout (`ssr: false`) | `<template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING">`, word count = 6 | Remove `{ ssr: false }` from `client.tsx` or render a static server component shell with headers, navigation links, and initial content. |
| **Technical** | 🔴 Critical | Confirmed | Canonical Domain Redirect Conflict | Live site returns 200 on `www.miningpropertymaps.com`; canonical tag specifies `https://miningpropertymaps.com` which returns 308 redirect to `www`. | Update `metadataBase` in `layout.tsx`, `page.tsx`, and `next-sitemap.config.js` to `https://www.miningpropertymaps.com`. |
| **On-Page** | 🔴 Critical | Confirmed | Missing `<h1>` Heading | HTML parser returned `h1: []` | Add a semantic, keyword-rich `<h1>` tag (e.g., `<h1>British Columbia Mining Property Maps & Mineral Claim Services</h1>`) in the SSR layout. |
| **On-Page** | 🔴 Critical | Confirmed | Zero Internal Anchor Links in Initial HTML | HTML parser returned `links: { internal: [], external: [] }` | Render standard `<a href="...">` navigation links in the header/footer during server rendering. |
| **Performance**| 🔴 Critical | Confirmed | Massive Favicon Asset in `<head>` | `apps/web/public/favicon.png` is **1,104,804 bytes** (1.1 MB) | Replace with an optimized 32x32 SVG or ICO file (<25 KB). |
| **Security** | ⚠️ Warning | Confirmed | Missing 5 Core Security Headers | `security_headers.py`: Missing CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy | Configure security headers in `next.config.mjs` or hosting provider edge rules. |
| **Sitemap** | ⚠️ Warning | Confirmed | Sitemap Domain Mismatch & 404s | `robots.txt` points to `https://miningpropertymaps.com/sitemap.xml` (redirects 308); index returns 404. | Regenerate sitemap with `siteUrl: 'https://www.miningpropertymaps.com'`. |
| **AI / GEO** | ⚠️ Warning | Confirmed | Missing `llms.txt` Standard | `llms_txt_checker.py`: HTTP 404 for `/llms.txt` and `/llms-full.txt` | Create `public/llms.txt` and `public/llms-full.txt` detailing company background, services, and key URLs. |
| **Robots.txt** | ⚠️ Warning | Confirmed | Unmanaged AI Crawler Agents | 8 AI user agents unhandled (`ChatGPT-User`, `Google-Extended`, `Applebot-Extended`, `Bytespider`, `CCBot`) | Add explicit rules in `public/robots.txt` for AI crawlers. |
| **Social / Meta**| ⚠️ Warning | Confirmed | Open Graph Title Length Exceeded | `og:title` is 76 characters (recommended max: 60) | Shorten `og:title` to ~55-60 characters to avoid truncation in social embeds. |
| **Schema** | ℹ️ Info | Confirmed | Schema URL References Redirecting Domain | JSON-LD `"url": "https://miningpropertymaps.com"` | Update all JSON-LD URLs to `https://www.miningpropertymaps.com`. |

---

## 4. Deep Architectural Root Causes (Source Code Proof)

### 1. Client-Side Rendering Bailout
In `apps/web/src/app/[[...slug]]/client.tsx`:
```tsx
"use client";
import dynamic from "next/dynamic";
const App = dynamic(() => import("../../App"), { ssr: false });
export default function ClientPage() {
  return <App />;
}
```
**Impact**: Because `{ ssr: false }` wraps the entire application, Next.js completely abandons SSR/SSG for page content. The raw HTML response contains no body text, no headings, and no hyperlinks. Search engines must run headless browsers to discover any page content, resulting in delayed indexing, missed keyword associations, and poor rankings.

### 2. Canonical & Sitemap Domain Mismatch
In `apps/web/src/app/layout.tsx`:
```tsx
metadataBase: new URL("https://miningpropertymaps.com"),
```
In `apps/web/next-sitemap.config.js`:
```js
siteUrl: 'https://miningpropertymaps.com',
```
In `apps/web/public/robots.txt`:
```txt
Sitemap: https://miningpropertymaps.com/sitemap.xml
```
**Impact**: When a user or bot accesses the canonical domain (`miningpropertymaps.com`), the server returns:
```http
HTTP/2 308 Permanent Redirect
Location: https://www.miningpropertymaps.com/
```
The site tells search engines that the primary version is non-www, but immediately redirects them to www. This circular instruction wastes crawl budget and dilutes PageRank.

---

## 5. Environment Limitations & Unknowns

- **PageSpeed Insights API**: The free unauthenticated Google PageSpeed API returned HTTP rate limiting. Performance metrics (LCP, INP, CLS) were estimated based on asset weight rather than field CrUX telemetry.
- **Playwright Visual Snapshot**: Headless browser automation was unavailable in the test console.
- **Follow-up Action**: Set `PAGESPEED_API_KEY` in `.env` to pull live CrUX real-user monitoring metrics.
