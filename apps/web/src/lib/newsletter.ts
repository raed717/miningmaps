import type { NeonQueryFunction } from "@neondatabase/serverless";

/**
 * Adds an email to newsletter_subscribers. Re-subscribing a previously
 * unsubscribed address reactivates it; subscribing twice is a silent no-op
 * so callers never leak who is on the list.
 */
export async function subscribeToNewsletter(
  sql: NeonQueryFunction<false, false>,
  email: string,
  source: string | null
) {
  await sql`
    INSERT INTO newsletter_subscribers (email, source)
    VALUES (${email.trim().toLowerCase()}, ${source})
    ON CONFLICT ((lower(email))) DO UPDATE
      SET unsubscribed_at = NULL
      WHERE newsletter_subscribers.unsubscribed_at IS NOT NULL
  `;
}

/** Whether an email is currently subscribed (not unsubscribed). */
export async function isSubscribed(sql: NeonQueryFunction<false, false>, email: string) {
  const rows = await sql`
    SELECT 1 FROM newsletter_subscribers
    WHERE lower(email) = lower(${email}) AND unsubscribed_at IS NULL
  `;
  return rows.length > 0;
}
