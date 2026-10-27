import fs from "node:fs";
import path from "node:path";
import { projects } from "../apps/web/src/lib/projectData.ts";

function escapeSql(value) {
  if (value === null || value === undefined) {
    return "NULL";
  }
  if (typeof value === "boolean") {
    return value ? "TRUE" : "FALSE";
  }
  if (typeof value === "number") {
    return Number.isFinite(value) ? String(value) : "NULL";
  }
  const str = String(value);
  return `'${str.replace(/'/g, "''")}'`;
}

function escapeJson(value) {
  if (value === null || value === undefined) {
    return "'[]'::jsonb";
  }
  const jsonStr = JSON.stringify(value);
  return `'${jsonStr.replace(/'/g, "''")}'::jsonb`;
}

const headerComment = `-- =====================================================================
-- Migration: Create projects schema and seed data from projectData.ts
-- Total records: ${projects.length} projects
-- Generated at: ${new Date().toISOString()}
-- Compatible with: PostgreSQL / Neon / Supabase / AWS RDS / CockroachDB
-- =====================================================================

BEGIN;

CREATE TABLE IF NOT EXISTS projects (
    id VARCHAR(64) PRIMARY KEY,
    type VARCHAR(32) NOT NULL DEFAULT 'project',
    title TEXT NOT NULL,
    summary TEXT,
    region VARCHAR(255),
    image TEXT,
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    is_for_sale BOOLEAN NOT NULL DEFAULT FALSE,
    date VARCHAR(64),
    author VARCHAR(255),
    contact_email VARCHAR(255),
    parent_project_id VARCHAR(64),
    tags JSONB DEFAULT '[]'::jsonb,
    sub_project_ids JSONB DEFAULT '[]'::jsonb,
    quick_facts JSONB DEFAULT '[]'::jsonb,
    sections JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_projects_region ON projects(region);
CREATE INDEX IF NOT EXISTS idx_projects_is_for_sale ON projects(is_for_sale);
CREATE INDEX IF NOT EXISTS idx_projects_parent ON projects(parent_project_id);
CREATE INDEX IF NOT EXISTS idx_projects_tags ON projects USING GIN (tags);

-- Seed / Upsert Data
`;

const insertStatements = projects.map((p) => {
  const id = escapeSql(p.id);
  const type = escapeSql(p.type || "project");
  const title = escapeSql(p.title);
  const summary = escapeSql(p.summary || null);
  const region = escapeSql(p.region || null);
  const image = escapeSql(p.image || null);
  const lat = escapeSql(Array.isArray(p.coordinates) ? p.coordinates[0] : null);
  const lng = escapeSql(Array.isArray(p.coordinates) ? p.coordinates[1] : null);
  const isForSale = escapeSql(Boolean(p.isForSale));
  const date = escapeSql(p.date || null);
  const author = escapeSql(p.author || null);
  const contactEmail = escapeSql(p.contactEmail || null);
  const parentProjectId = escapeSql(p.parentProjectId || null);
  const tags = escapeJson(p.tags || []);
  const subProjectIds = escapeJson(p.subProjectIds || []);
  const quickFacts = escapeJson(p.quickFacts || []);
  const sections = escapeJson(p.sections || []);

  return `INSERT INTO projects (
    id, type, title, summary, region, image,
    latitude, longitude, is_for_sale, date,
    author, contact_email, parent_project_id,
    tags, sub_project_ids, quick_facts, sections
) VALUES (
    ${id}, ${type}, ${title}, ${summary}, ${region}, ${image},
    ${lat}, ${lng}, ${isForSale}, ${date},
    ${author}, ${contactEmail}, ${parentProjectId},
    ${tags}, ${subProjectIds}, ${quickFacts}, ${sections}
)
ON CONFLICT (id) DO UPDATE SET
    type = EXCLUDED.type,
    title = EXCLUDED.title,
    summary = EXCLUDED.summary,
    region = EXCLUDED.region,
    image = EXCLUDED.image,
    latitude = EXCLUDED.latitude,
    longitude = EXCLUDED.longitude,
    is_for_sale = EXCLUDED.is_for_sale,
    date = EXCLUDED.date,
    author = EXCLUDED.author,
    contact_email = EXCLUDED.contact_email,
    parent_project_id = EXCLUDED.parent_project_id,
    tags = EXCLUDED.tags,
    sub_project_ids = EXCLUDED.sub_project_ids,
    quick_facts = EXCLUDED.quick_facts,
    sections = EXCLUDED.sections,
    updated_at = CURRENT_TIMESTAMP;`;
});

const sqlContent = `${headerComment}
${insertStatements.join("\n\n")}

COMMIT;
`;

// All migrations live in the root migrations/ folder.
const outputDir = "migrations";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, "001_projects_seed.sql");
fs.writeFileSync(outputPath, sqlContent, "utf8");

console.log(`Successfully generated SQL migration: ${outputPath} (${projects.length} projects, ${(Buffer.byteLength(sqlContent) / 1024).toFixed(2)} KB)`);
