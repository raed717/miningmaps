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
- `toolbox/migrations/001_projects_seed.sql`
- `migrations/001_projects_seed.sql`

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
