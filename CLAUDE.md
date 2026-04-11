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
│   │   ├── src/app/services/   # Service registry landing page
│   │   ├── src/lib/servicesData.ts   # Shared service catalog for homepage and services route
├── packages/
```

## Common Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests

## Maintenance

Keep CLAUDE.md updated when:

- Adding/removing dependencies
- Changing project structure
- Adding new features or services
- Modifying build/dev workflows

## Design System

See `DESIGN_SYSTEM.md` in the root directory for the application's aesthetic guidelines (Industrial Cartography / Terminal Brutalism), color variables, and styling instructions for new pages.

AI assistants should suggest updates to this file when they notice relevant changes.
