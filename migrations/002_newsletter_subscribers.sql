-- =====================================================================
-- Migration: Create newsletter subscribers table
-- Run with the DIRECT (non -pooler) Neon connection string.
-- Compatible with: PostgreSQL / Neon
-- =====================================================================

BEGIN;

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email TEXT NOT NULL,
    source VARCHAR(64),
    subscribed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    unsubscribed_at TIMESTAMPTZ
);

-- Case-insensitive uniqueness: "Chris@x.com" and "chris@x.com" are one subscriber.
CREATE UNIQUE INDEX IF NOT EXISTS newsletter_subscribers_email_lower_idx
    ON newsletter_subscribers (lower(email));

COMMIT;
