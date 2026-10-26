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
│   │   ├── src/app/[[...slug]]/page.tsx   # Catch-all App Router entry that statically exports known client routes
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

The production build no longer uses `output: "export"` so that API routes (`/api/contact`, `/api/newsletter`) run as serverless functions on Vercel; pages are still prerendered.

## Database

- Neon Postgres via `@neondatabase/serverless` (HTTP driver), configured with `DATABASE_URL` (pooled connection string).
- SQL migrations live in `migrations/` (run with the direct, non `-pooler` connection string).
- `newsletter_subscribers` table (`migrations/002_newsletter_subscribers.sql`) is written by `apps/web/src/app/api/newsletter/route.ts`; the signup UI is `apps/web/src/components/NewsletterForm.tsx`, rendered in the footer.

## Auth (Neon Managed Better Auth)

- Neon CLI is linked via `.neon` (project `AdamsonGeomatics`, branch `production`); `neon.ts` declares `auth: true`. `neon env pull` writes to the root `.env.local`; the Next app reads its own `apps/web/.env*`.

- Identity lives in the `neon_auth` schema (managed by Neon). Extra sign-up fields (first/last name, region, referral source) live in `user_profiles` (`migrations/003_user_profiles.sql`), keyed by `neon_auth."user".id`.
- `@neondatabase/auth` browser client in `apps/web/src/lib/authClient.ts`, configured with `NEXT_PUBLIC_NEON_AUTH_URL` (inlined at build time; listed in `turbo.json` env).
- The SDK's Next.js server helpers (`/next`, `/next/server`) require Next 16; this app is on Next 15, so it uses the plain browser client. Root `package.json` `overrides` pins `next` to 15.0.8 because the SDK's optional Next 16 peer otherwise gets hoisted. Remove the override when upgrading to Next 16.
- API routes authenticate with `Authorization: Bearer <jwt>` verified against the Auth URL's JWKS (`apps/web/src/lib/authServer.ts`). Get the JWT client-side with `getAuthToken()` (reads `session.token`; `authClient.token()` is unreliable because the SDK dedupes it with cached `getSession`).
- Routes: `/sign-up`, `/sign-in`, `/account` (`src/views/auth-page.tsx`, `src/views/account-page.tsx`), profile API at `/api/profile`.

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
