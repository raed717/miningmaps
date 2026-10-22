import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().toLowerCase().email("Invalid email address").max(254),
  source: z.string().max(64).optional(),
  // Honeypot: real users never see or fill this field.
  company: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return NextResponse.json(
      { error: "Newsletter service not configured" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  const { email, source, company } = parsed.data;

  // Bots fill the honeypot; pretend success so they don't retry.
  if (company) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  try {
    const sql = neon(databaseUrl);
    // Re-subscribing a previously unsubscribed address reactivates it;
    // subscribing twice is a silent no-op so we never leak who is on the list.
    await sql`
      INSERT INTO newsletter_subscribers (email, source)
      VALUES (${email}, ${source ?? null})
      ON CONFLICT ((lower(email))) DO UPDATE
        SET unsubscribed_at = NULL
        WHERE newsletter_subscribers.unsubscribed_at IS NOT NULL
    `;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to save newsletter subscriber:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
