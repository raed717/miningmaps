// Adds the projects declared in toolbox/NewProjects.ts to the site's data, in one step:
//   1. Validates them and stops if any id already exists (projectData.ts or the live database).
//   2. Appends them to apps/web/src/lib/projectData.ts (source copied as written, comments included).
//   3. Writes one migration for them: migrations/NNN_add_<id>_<title>.sql (run it in the Neon SQL Editor).
//   4. Regenerates the full seed (migrations/001_projects_seed.sql) and the CSV exports.
//
// Run: npm run export:sql:new
// Optional: pass another input file, e.g. `npm run export:sql:new -- path/to/Projects.ts`.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const INPUT_FILE = process.argv[2] ?? "toolbox/NewProjects.ts";
const DATA_FILE = "apps/web/src/lib/projectData.ts";
const MIGRATIONS_DIR = "migrations";

function fail(message) {
  console.error(`\n✖ ${message}`);
  process.exit(1);
}

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

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Finds `const <name> = [...]` in a TS source file and returns its array literal node. */
function findArrayLiteral(sourceFile, name) {
  let found = null;
  const visit = (node) => {
    if (found) return;
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === name &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      found = node.initializer;
      return;
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return found;
}

function validate(projects) {
  const errors = [];
  if (!Array.isArray(projects) || projects.length === 0) {
    return [`${INPUT_FILE} has no projects: add at least one to the NewProjects array.`];
  }
  const seen = new Set();
  projects.forEach((p, i) => {
    const where = `NewProjects[${i}]${p?.id ? ` (${p.id})` : ""}`;
    if (!p?.id || typeof p.id !== "string") errors.push(`${where}: missing "id".`);
    else if (!/^[a-z0-9-]+$/.test(p.id)) errors.push(`${where}: "id" should be lowercase letters, digits and dashes (it becomes the URL /projects/${p.id}).`);
    else if (seen.has(p.id)) errors.push(`${where}: id "${p.id}" appears twice in ${INPUT_FILE}.`);
    else seen.add(p.id);

    if (!p?.title?.trim()) errors.push(`${where}: missing "title".`);
    if (p?.type && p.type !== "project" && p.type !== "subproject") errors.push(`${where}: "type" must be "project" or "subproject".`);
    if (
      !Array.isArray(p?.coordinates) ||
      p.coordinates.length !== 2 ||
      !p.coordinates.every((c) => typeof c === "number" && Number.isFinite(c)) ||
      Math.abs(p.coordinates[0]) > 90 ||
      Math.abs(p.coordinates[1]) > 180
    ) {
      errors.push(`${where}: "coordinates" must be [latitude, longitude] numbers.`);
    }
    if (p?.sections !== undefined && !Array.isArray(p.sections)) errors.push(`${where}: "sections" must be an array.`);
  });
  return errors;
}

function runNodeScript(script) {
  const result = spawnSync(process.execPath, ["--experimental-strip-types", "--no-warnings", script], {
    encoding: "utf8",
  });
  if (result.status !== 0) {
    fail(`${script} failed:\n${result.stderr || result.stdout}`);
  }
  return result.stdout.trim();
}

// ---------------------------------------------------------------------------
// 1. Load and validate.
// ---------------------------------------------------------------------------
if (!fs.existsSync(INPUT_FILE)) fail(`Input file not found: ${INPUT_FILE}`);

const { NewProjects } = await import(pathToFileURL(path.resolve(INPUT_FILE)).href);
const { projects: currentProjects } = await import(pathToFileURL(path.resolve(DATA_FILE)).href);

const errors = validate(NewProjects);
if (errors.length) fail(`Cannot add the project(s):\n  - ${errors.join("\n  - ")}`);

const ids = NewProjects.map((p) => p.id);

const inDataFile = ids.filter((id) => currentProjects.some((p) => p.id === id));
if (inDataFile.length) {
  fail(
    `Id already exists in ${DATA_FILE}: ${inDataFile.join(", ")}.\n` +
      `  Use a new id, or edit the existing project in ${DATA_FILE} instead.`
  );
}

if (process.env.DATABASE_URL) {
  let inDatabase = [];
  try {
    const { neon } = await import("@neondatabase/serverless");
    const rows = await neon(process.env.DATABASE_URL)`SELECT id FROM projects WHERE id = ANY(${ids})`;
    inDatabase = rows.map((r) => r.id);
  } catch (error) {
    console.warn(`! Could not check the database (${error.code || error.name}); skipping that check.`);
  }
  if (inDatabase.length) {
    fail(
      `Id already exists in the live database: ${inDatabase.join(", ")}.\n` +
        `  Pick a new id so the live project isn't overwritten.`
    );
  }
} else {
  console.warn("! DATABASE_URL not set: only checked ids against projectData.ts, not the live database.");
}

// ---------------------------------------------------------------------------
// 2. Append to projectData.ts (copying the source text from the input file).
// ---------------------------------------------------------------------------
const inputText = fs.readFileSync(INPUT_FILE, "utf8");
const inputAst = ts.createSourceFile(INPUT_FILE, inputText, ts.ScriptTarget.Latest, true);
const inputArray = findArrayLiteral(inputAst, "NewProjects");
if (!inputArray) fail(`Couldn't find "export const NewProjects = [...]" in ${INPUT_FILE}.`);

const dataText = fs.readFileSync(DATA_FILE, "utf8");
const dataAst = ts.createSourceFile(DATA_FILE, dataText, ts.ScriptTarget.Latest, true);
const dataArray = findArrayLiteral(dataAst, "projects");
if (!dataArray) fail(`Couldn't find "export const projects = [...]" in ${DATA_FILE}.`);

const eol = dataText.includes("\r\n") ? "\r\n" : "\n";
// Each element's full text includes leading comments; drop the blank lines before it.
const newElements = inputArray.elements.map((el) =>
  inputText
    .slice(el.getFullStart(), el.getEnd())
    .replace(/^\s*\n/, "")
    .replace(/\r?\n/g, eol)
);

const closeBracket = dataArray.getEnd() - 1; // position of the array's "]"
const before = dataText.slice(0, closeBracket).trimEnd();
const after = dataText.slice(closeBracket);
const separator = dataArray.elements.length > 0 && !before.endsWith(",") ? "," : "";
const updatedData = `${before}${separator}${eol}${newElements.join(`,${eol}`)},${eol}${after}`;

fs.writeFileSync(DATA_FILE, updatedData, "utf8");

// Verify in a fresh process that the file still parses and contains the new projects; roll back if not.
const check = spawnSync(
  process.execPath,
  [
    "--experimental-strip-types",
    "--no-warnings",
    "--input-type=module",
    "-e",
    `const { projects } = await import(${JSON.stringify(pathToFileURL(path.resolve(DATA_FILE)).href)});
     console.log(JSON.stringify({ count: projects.length, last: projects.slice(-${ids.length}).map((p) => p.id) }));`,
  ],
  { encoding: "utf8" }
);
let verified = null;
try {
  verified = JSON.parse(check.stdout.trim());
} catch {}
if (
  check.status !== 0 ||
  !verified ||
  verified.count !== currentProjects.length + ids.length ||
  JSON.stringify(verified.last) !== JSON.stringify(ids)
) {
  fs.writeFileSync(DATA_FILE, dataText, "utf8");
  fail(`Appending to ${DATA_FILE} produced an invalid file, so it was restored unchanged.\n${check.stderr}`);
}
console.log(`✔ Appended ${ids.join(", ")} to ${DATA_FILE} (${verified.count} projects).`);

// ---------------------------------------------------------------------------
// 3. Write the migration for the new project(s).
// ---------------------------------------------------------------------------
const upserts = NewProjects.map((p) => {
  const id = escapeSql(p.id);
  const type = escapeSql(p.type || "project");
  const title = escapeSql(p.title);
  const summary = escapeSql(p.summary || null);
  const region = escapeSql(p.region || null);
  const image = escapeSql(p.image || null);
  const lat = escapeSql(p.coordinates[0]);
  const lng = escapeSql(p.coordinates[1]);
  const isForSale = escapeSql(Boolean(p.isForSale));
  const date = escapeSql(p.date || null);
  const author = escapeSql(p.author || null);
  const contactEmail = escapeSql(p.contactEmail || null);
  const parentProjectId = escapeSql(p.parentProjectId || null);
  const tags = escapeJson(p.tags || []);
  const subProjectIds = escapeJson(p.subProjectIds || []);
  const quickFacts = escapeJson(p.quickFacts || []);
  const sections = escapeJson(p.sections || []);

  // New rows go to the end of the display order; re-running keeps an existing row's sort_order.
  return `-- ${p.title}
INSERT INTO projects (
    id, type, title, summary, region, image,
    latitude, longitude, is_for_sale, date,
    author, contact_email, parent_project_id,
    tags, sub_project_ids, quick_facts, sections,
    sort_order
) VALUES (
    ${id}, ${type}, ${title}, ${summary}, ${region}, ${image},
    ${lat}, ${lng}, ${isForSale}, ${date},
    ${author}, ${contactEmail}, ${parentProjectId},
    ${tags}, ${subProjectIds}, ${quickFacts}, ${sections},
    (SELECT COALESCE(MAX(sort_order), 0) + 1 FROM projects)
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

const sqlContent = `-- =====================================================================
-- Migration: Add ${ids.length === 1 ? "project" : `${ids.length} projects`}: ${NewProjects.map((p) => `${p.id} (${p.title})`).join(", ")}
-- Source: ${INPUT_FILE} (also appended to ${DATA_FILE})
-- Generated at: ${new Date().toISOString()}
-- Run in the Neon SQL Editor. Safe to re-run (existing ids are updated in place).
-- =====================================================================

BEGIN;

${upserts.join("\n\n")}

COMMIT;
`;

if (!fs.existsSync(MIGRATIONS_DIR)) fs.mkdirSync(MIGRATIONS_DIR, { recursive: true });
const highest = fs
  .readdirSync(MIGRATIONS_DIR)
  .map((f) => Number.parseInt(f.match(/^(\d+)_/)?.[1] ?? "", 10))
  .filter(Number.isFinite)
  .reduce((max, n) => Math.max(max, n), 0);
const nameParts = NewProjects.length === 1 ? [ids[0], slugify(NewProjects[0].title)] : ids;
const fileName = `${String(highest + 1).padStart(3, "0")}_add_${nameParts.join("_")}`.slice(0, 120) + ".sql";
const migrationPath = path.join(MIGRATIONS_DIR, fileName);
fs.writeFileSync(migrationPath, sqlContent, "utf8");
console.log(`✔ Wrote ${migrationPath} (${(Buffer.byteLength(sqlContent) / 1024).toFixed(2)} KB).`);

// ---------------------------------------------------------------------------
// 4. Regenerate the full seed and the CSV exports from the updated projectData.ts.
// ---------------------------------------------------------------------------
console.log(`✔ ${runNodeScript("toolbox/generate_projects_migration.mjs")}`);
console.log(`✔ ${runNodeScript("toolbox/generate_projects_csv.mjs")}`);

console.log(`
Next steps:
  1. Run ${migrationPath} in the Neon SQL Editor (the site shows it within ~5 minutes).
  2. Clear the NewProjects array in ${INPUT_FILE} before drafting the next project.`);
