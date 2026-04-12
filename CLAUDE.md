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

## Maintenance

Keep CLAUDE.md updated when:

- Adding/removing dependencies
- Changing project structure
- Adding new features or services
- Modifying build/dev workflows

## Design System

See `DESIGN_SYSTEM.md` in the root directory for the application's aesthetic guidelines (Industrial Cartography / Terminal Brutalism), color variables, and styling instructions for new pages.

AI assistants should suggest updates to this file when they notice relevant changes.
