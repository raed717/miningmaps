# Developer Toolbox & Migration Utilities

This toolbox contains offline extraction, export, and database migration utilities for **Adamson Geomatics / MiningPropertyMaps**.

---

## 1. Database Migration Tool (`generate_projects_migration.mjs`)

Exports all properties from `apps/web/src/lib/projectData.ts` into a complete SQL migration file.

### How to Run:
```bash
npm run export:sql
# OR directly:
node --experimental-strip-types toolbox/generate_projects_migration.mjs
```

### Outputs:
- `migrations/001_projects_seed.sql` (all migrations live in the root `migrations/` folder)

### Compatible Databases:
- **Neon Serverless Postgres**
- **Supabase**
- **AWS RDS / Aurora PostgreSQL**
- **Docker / Local PostgreSQL**
- **CockroachDB**

### How to apply to Neon / Supabase:
1. Create your database on [Neon.tech](https://neon.tech) or [Supabase](https://supabase.com).
2. Copy the contents of `001_projects_seed.sql` into the **SQL Editor** in your Neon / Supabase dashboard and click **Run**.
3. All tables, spatial columns, JSONB attributes, and 44+ project records with full dossiers will be created and indexed instantly.

---

## 1b. Add New Projects (`generate_new_projects_migration.mjs`)

**The way to add a project.** One command updates everything from `toolbox/NewProjects.ts`.

### How to Run:
1. Write the new project(s) in `toolbox/NewProjects.ts` (typed as `Project`, so your editor checks the fields).
2. Run:
```bash
npm run export:sql:new
```
3. Paste the new migration file into the **Neon SQL Editor** and click **Run**. The website shows the project within the hour (pages refresh hourly).
4. Empty the `NewProjects` array before drafting the next project.

### What it does, in order:
1. **Validates** the data (id format, duplicates, title, `[latitude, longitude]` coordinates).
2. **Stops with an error if an id already exists**, in `projectData.ts` or (when `apps/web/.env.local` has `DATABASE_URL`) in the live database, so a live project is never overwritten by accident.
3. **Appends** the project(s) to `apps/web/src/lib/projectData.ts`, copying your source as written (comments included), then checks the file still loads; if not, it's restored unchanged.
4. **Writes one migration** named after the project, e.g. `migrations/007_add_bc-009_some-property-british-columbia.sql`. New projects are placed at the end of the display order (`sort_order`).
5. **Regenerates** the full seed (`migrations/001_projects_seed.sql`) and the CSV exports from the updated `projectData.ts`.

---

## 2. CSV Catalog Exporter (`generate_projects_csv.mjs`)

Extracts project names, production URLs, region, commodities, and "For Sale" status into audit-ready CSV spreadsheets.

### How to Run:
```bash
npm run export:csv
# OR directly:
node --experimental-strip-types toolbox/generate_projects_csv.mjs
```

### Outputs:
- `projects.csv` (root directory)
- `apps/web/public/projects.csv` (accessible via `https://www.miningpropertymaps.com/projects.csv`)
- `toolbox/projects.csv`
