-- =====================================================================
-- Migration: Create user profiles for Neon Managed Better Auth users
-- Managed Auth stores identity in neon_auth."user" and only accepts a single
-- `name` at sign-up, so the extra sign-up fields live here, keyed by user id.
-- Compatible with: PostgreSQL / Neon
-- =====================================================================

BEGIN;

CREATE TABLE IF NOT EXISTS user_profiles (
    user_id UUID PRIMARY KEY REFERENCES neon_auth."user" (id) ON DELETE CASCADE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    region VARCHAR(64) NOT NULL,
    referral_source VARCHAR(64),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMIT;
