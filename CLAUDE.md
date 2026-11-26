# miningmaps

This file provides context about the project for AI assistants.

## Project Overview

- **Ecosystem**: Typescript

## Tech Stack

- **Runtime**: none
- **Package Manager**: npm

### Frontend

- Framework: Next.js (App Router)
- CSS: tailwind
- UI Library: shadcn-ui

### Additional Features

- Testing: playwright

## Project Structure

```
miningmaps/
├── apps/
│   ├── web/         # Frontend application
│   │   ├── src/App.tsx   # Client SPA shell used during the Vite -> Next App Router migration baseline
│   │   ├── src/app/_catchAll/page-impl.tsx   # Shared catch-all page (routing, data, metadata, static params)
│   │   ├── src/app/(en)|es|fr/   # One root layout + [[...slug]]/page.tsx + not-found.tsx per locale (for <html lang>)
│   │   ├── src/views/   # Route views rendered by the client app shell
│   │   ├── src/lib/servicesData.ts   # Shared service catalog for homepage and services route
├── packages/
```

## Common Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests

The web app currently follows the official Next.js Vite migration baseline: a catch-all App Router entry renders a client-only app shell, and `generateStaticParams()` must be updated whenever a new client route is added.

There is no `src/app/layout.tsx`: each locale has its own root layout so the server HTML has the right `<html lang>` (a single root layout can't see a prerendered page's URL). `(en)/[[...slug]]` serves `/…`, `es/[[...slug]]` and `fr/[[...slug]]` serve `/es/…` and `/fr/…`; their `page.tsx` files are thin wrappers around `forLocale()` in `src/app/_catchAll/page-impl.tsx`, which works on the full path (`["es", "projects", id]`). The layouts share `_catchAll/root-shell.tsx` (global CSS, metadata, JSON-LD); the not-found files share `_catchAll/not-found-impl.tsx`. `revalidate` must stay a literal in each route file. Switching language crosses root layouts, so Next does a full page load.

The production build no longer uses `output: "export"` so that API routes (`/api/contact`, `/api/newsletter`) run as serverless functions on Vercel; pages are still prerendered.

## Database

- Neon Postgres via `@neondatabase/serverless` (HTTP driver), configured with `DATABASE_URL` (pooled connection string).
- SQL migrations live in `migrations/` (run with the direct, non `-pooler` connection string).
- `newsletter_subscribers` table (`migrations/002_newsletter_subscribers.sql`) is written by `apps/web/src/app/api/newsletter/route.ts`; the signup UI is `apps/web/src/components/NewsletterForm.tsx`, rendered in the footer.

## Projects data (Neon)

- Projects are read from the Neon `projects` table on the server (`src/lib/projectsRepo.ts`), ordered by `sort_order` (`migrations/004_projects_sort_order.sql`; new rows without one are listed last). The catch-all pages use ISR (`revalidate = 300`), so DB edits go live within ~5 minutes without a redeploy A 404 for a project URL visited before its row exists is cached by Vercel and is NOT refreshed by `revalidate` (Next 15.0); purge it with `POST /api/revalidate` (`src/app/api/revalidate/route.ts`, `Authorization: Bearer $REVALIDATE_SECRET`, body `{"ids":["on-001"]}`), or redeploy. Call it from the dashboard after inserting/editing a project.
- To add projects: declare them in `toolbox/NewProjects.ts` (typed `Project[]`) and run `npm run export:sql:new`. It errors if an id exists (projectData.ts or DB), appends the source to `projectData.ts` (via the TypeScript AST), writes `migrations/NNN_add_<id>_<title>.sql` (new ids get the last `sort_order`), and regenerates `migrations/001_projects_seed.sql` + the CSVs. Then run the new file in the Neon SQL Editor. All migrations live in the root `migrations/` folder. See `toolbox/README.md`.
- Project translations live in `projects.translations` (jsonb, `migrations/016_projects_translations.sql`): `{ "fr": {...}, "es": {...} }` with `title`, `summary`, `region`, `date`, `tags` (replaces the list), `quick_facts` and `sections` (merged by index; `null`/missing/empty keeps English). `localizeProject()` in `projectsRepo.ts` applies them on the server (translated `tags` keep the English ones in `tagKeys`; filters must use `filterTags()` from `src/lib/projectTags.ts`, search uses `searchableTags()`); `getProjects/getProject/getProjectSummaries(locale)` return one language and never ship the translations blob. `getPageData` and `generateMetadata` pass the locale from the URL (`/es`, `/fr`). Fixed labels on the detail page come from `projectsTranslations[locale].detail`.
- `/sample-maps` (`src/views/sample-maps-page.tsx`) lists rows of the Neon `sample_maps` table (`migrations/017_sample_maps.sql`): published rows only, ordered by `sort_order`, filtered client-side by `map_type` (`?type=claim-tenure`; allowed values in `src/lib/sampleMapTypes.ts`, kept in sync with the table's CHECK constraint). `src/lib/sampleMapsRepo.ts` loads them per locale (`translations` jsonb: `title`, `description`, `region`, `link_label`) and returns `[]` if the table doesn't exist. `image_url` is a Cloudinary image or PDF; `src/lib/cloudinary.ts` builds the thumbnail (900px) and full-size (3000px) URLs, rendering a PDF page as JPG (`pdf_page`, default 1, `migrations/023_sample_maps_pdf_page.sql`; read via `to_jsonb` so the query works before 023 runs). Sent to the client as `ProjectPageData.sampleMaps` / `useSampleMaps()` (on `/sample-maps`, `/services`, and the home page without descriptions, where `src/components/home/sample-maps-preview-section.tsx` shows 3 maps from different projects (one large, two small) from `md` up, and on phones every map in a continuously scrolling strip (CSS `ticker-scroll` on two copies of the list; pauses on hover/focus, while the viewer is open, or via its pause button; static and scrollable under reduced motion) plus per-type links; it hides itself when there are no maps). Labels in `src/lib/i18n/translations/sampleMaps.ts`.
- `/services` links service lines and outputs to `/sample-maps?type=…` via `src/lib/serviceMapLinks.ts` (`SERVICE_MAP_LINKS`, keyed by module id + item index, so the services lists must stay index-aligned across en/es/fr). A link only renders when that category has published maps; each module without hand-picked `sampleCases` also shows up to 3 matching thumbnails (`pickModuleMaps`: unused, featured, varied regions first).
- `/services` tabs: services, past clients (`?tab=clients`, `src/lib/pastClientsData.ts`) and partners (`?tab=partners`, `src/lib/partnersData.ts`; optional per-partner `discount`, translated descriptions keyed by partner id in `partnersSection.descriptions`). Not the same as the `/partners` referral-program page.
- `/map` (`src/app/map/map-view.tsx`) filters parents and sub-projects separately: each is matched on its own tags (a sub-project without tags uses its parent's) and its own `isForSale` (status: all / for sale / sold). A parent stays listed, dimmed and without a marker, when only its sub-projects match. Counts are map targets (parents + sub-projects). An id listed in a parent's `subProjectIds` only shows under that parent, even if its row isn't typed `subproject`. Tag bar: metals plus the fossils/agates/gemstones group, as on `/projects`.
- `src/lib/projectData.ts` is kept as a backup/draft only. Never import its data at runtime; import types via `src/lib/projectTypes.ts` (type-only re-exports).
- If Neon is down, `projectsRepo.ts` retries, then **throws**; don't add a fallback list. Throwing makes ISR keep the last good page, while a fallback that lacks a project turns its page into a cached 404 (Nov 17–25, 2026: Neon stopped, and 17 projects missing from `projectData.ts` became 404s in all 3 languages). A build also fails while Neon is down, which leaves the previous deployment live.
- `_catchAll/page-impl.tsx` sends each route only what it needs (`getPageData`): full project + related summaries on `/projects/[id]`, summaries (no `sections`) on list/map/dashboard, 6 previews on home. Client components read it via hooks in `src/lib/projectDataContext.tsx`.
- Project detail pages are server-rendered for SEO; only the Leaflet map (`src/components/project-location-map.tsx`) is browser-only.
- `projects.updated_at` is maintained by the `projects_set_updated_at` trigger (`migrations/005_projects_updated_at_trigger.sql`); it feeds sitemap `<lastmod>`.
- Unknown paths return a real 404: `routeExists()` in `_catchAll/page-impl.tsx` checks `STATIC_PAGES`, the DB (projects) and `mockPosts`, then calls `notFound()`; each locale's `not-found.tsx` (re-exporting `_catchAll/not-found-impl.tsx`) renders the app shell's not-found view. Add new single-segment routes to `STATIC_PAGES` (it also drives `generateStaticParams()`) as well as `App.tsx`. Global CSS is imported in `src/app/_catchAll/root-shell.tsx`.
- Project URLs are in `/sitemap-projects.xml` (`src/app/sitemap-projects.xml/route.ts`, from the DB, every 5 minutes); next-sitemap excludes `/projects/*` and lists that sitemap in the `/sitemap.xml` index.
- The header loads the auth SDK lazily (`loadAuthClient()` in `src/lib/useAuthSession.ts`) to keep it out of every page's initial JS.
- `NEXT_DIST_DIR=dist/check-build npx next build` builds into a separate folder so it doesn't clash with a running `next dev` (both otherwise use `.next`).

## Auth (Neon Managed Better Auth)

- Neon CLI is linked via `.neon` (project `AdamsonGeomatics`, branch `production`); `neon.ts` declares `auth: true`. `neon env pull` writes to the root `.env.local`; the Next app reads its own `apps/web/.env*`.

- Identity lives in the `neon_auth` schema (managed by Neon). Extra sign-up fields (first/last name, region, referral source) live in `user_profiles` (`migrations/003_user_profiles.sql`), keyed by `neon_auth."user".id`.
- `@neondatabase/auth` browser client in `apps/web/src/lib/authClient.ts`, configured with `NEXT_PUBLIC_NEON_AUTH_URL` (inlined at build time; listed in `turbo.json` env).
- The SDK's Next.js server helpers (`/next`, `/next/server`) require Next 16; this app is on Next 15, so it uses the plain browser client. Root `package.json` `overrides` pins `next` to 15.0.8 because the SDK's optional Next 16 peer otherwise gets hoisted. Remove the override when upgrading to Next 16.
- API routes authenticate with `Authorization: Bearer <jwt>` verified against the Auth URL's JWKS (`apps/web/src/lib/authServer.ts`). Get the JWT client-side with `getAuthToken()` (reads `session.token`; `authClient.token()` is unreliable because the SDK dedupes it with cached `getSession`).
- Routes: `/sign-up`, `/sign-in`, `/account` (`src/views/auth-page.tsx`, `src/views/account-page.tsx`), profile API at `/api/profile`.
- `/community` (`src/views/community-page.tsx`) is the members-only "coming soon" landing page shown after sign-in and sign-up (and when a signed-in user opens `/sign-in`); signed-out visitors are redirected to `/sign-in`. It's `noindex` and excluded from the sitemap. Linked from the header account menu with a "Soon" badge.

## Maintenance

Keep CLAUDE.md updated when:

- Adding/removing dependencies
- Changing project structure
- Adding new features or services
- Modifying build/dev workflows

## Design System

See `DESIGN_SYSTEM.md` in the root directory for the application's aesthetic guidelines (Industrial Cartography / Terminal Brutalism), color variables, and styling instructions for new pages.

AI assistants should suggest updates to this file when they notice relevant changes.

## Accomplished

- **Project detail modal**: Created `ProjectDetailModal.tsx` to replace the inline DOM toggle on the Other Projects page. The modal features a full-screen backdrop overlay, Escape key/click-outside/close button dismissal, AnimatePresence enter/exit animations, and displays all fields (Titles, Owners, Subtypes, Good To, MINFILE Association, Summary) with icon-labeled sections.
