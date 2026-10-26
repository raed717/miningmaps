-- =====================================================================
-- Migration: Add display order to projects
-- Preserves the order projects had in apps/web/src/lib/projectData.ts
-- (home carousel "first 6", projects list). Projects added later without a
-- sort_order are listed last (ORDER BY sort_order NULLS LAST, created_at).
-- Compatible with: PostgreSQL / Neon
-- =====================================================================

BEGIN;

ALTER TABLE projects ADD COLUMN IF NOT EXISTS sort_order INTEGER;

UPDATE projects AS p
SET sort_order = v.sort_order
FROM (VALUES
    ('sub-001', 1),
    ('ak-001', 2),
    ('bc-002', 3),
    ('az-001', 4),
    ('sk-004', 5),
    ('bc-005', 6),
    ('bc-241', 7),
    ('sk-006', 8),
    ('sk-007', 9),
    ('sk-008', 10),
    ('sk-009', 11),
    ('sk-010', 12),
    ('nt-011', 13),
    ('sk-012', 14),
    ('sk-013', 15),
    ('sk-014', 16),
    ('sk-016', 17),
    ('sk-017', 18),
    ('sk-018', 19),
    ('sk-020', 20),
    ('sk-021', 21),
    ('sub-002', 22),
    ('sk-023', 23),
    ('sk-024', 24),
    ('sub-003', 25),
    ('sub-004', 26),
    ('sub-005', 27),
    ('sub-006', 28),
    ('sub-007', 29),
    ('ak-002', 30),
    ('sub-008', 31),
    ('ma-001', 32),
    ('nv-001', 33),
    ('mz-001', 34),
    ('br-001', 35),
    ('or-001', 36),
    ('nl-001', 37),
    ('ak-003', 38),
    ('az-002', 39),
    ('yt-001', 40),
    ('ma-002', 41),
    ('bc-006', 42),
    ('bc-007', 43),
    ('za-001', 44),
    ('or-002', 45)
) AS v (id, sort_order)
WHERE p.id = v.id;

COMMIT;
