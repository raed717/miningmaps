-- =====================================================================
-- Migration: Keep projects.updated_at current on every edit
-- The projects sitemap (/sitemap-projects.xml) reports updated_at as <lastmod>,
-- so search engines learn when a project changed. Without this trigger,
-- updated_at only changes if the editing tool sets it.
-- Compatible with: PostgreSQL / Neon
-- =====================================================================

BEGIN;

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS projects_set_updated_at ON projects;

CREATE TRIGGER projects_set_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    WHEN (OLD IS DISTINCT FROM NEW)
    EXECUTE FUNCTION set_updated_at();

COMMIT;
