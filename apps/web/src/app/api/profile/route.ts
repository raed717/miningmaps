import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { z } from "zod";
import { getRequestUser } from "@/lib/authServer";
import { referralOptions, regionOptions } from "@/lib/profileOptions";
import { isSubscribed, subscribeToNewsletter } from "@/lib/newsletter";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  region: z.enum(regionOptions),
  referralSource: z.enum(referralOptions).optional(),
  // Explicit opt-in from the sign-up checkbox (unchecked by default, per CASL).
  newsletter: z.boolean().optional(),
});

function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  return databaseUrl ? neon(databaseUrl) : null;
}

/** The account's own email from Managed Auth — never trust an email sent by the client. */
async function getAccountEmail(sql: NonNullable<ReturnType<typeof getSql>>, userId: string) {
  const [row] = await sql`SELECT email FROM neon_auth."user" WHERE id = ${userId}`;
  return (row?.email as string | undefined) ?? null;
}

/** Current user's profile. */
export async function GET(request: NextRequest) {
  const user = await getRequestUser(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sql = getSql();
  if (!sql) {
    return NextResponse.json({ error: "Database not configured" }, { status: 500 });
  }

  const [profile] = await sql`
    SELECT first_name AS "firstName", last_name AS "lastName", region,
           referral_source AS "referralSource"
    FROM user_profiles
    WHERE user_id = ${user.id}
  `;

  const email = await getAccountEmail(sql, user.id);
  const newsletter = email ? await isSubscribed(sql, email) : false;

  return NextResponse.json({ profile: profile ?? null, newsletter }, { status: 200 });
}

/** Create or update the current user's profile. The user id comes from the verified token only. */
export async function POST(request: NextRequest) {
  const user = await getRequestUser(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sql = getSql();
  if (!sql) {
    return NextResponse.json({ error: "Database not configured" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { firstName, lastName, region, referralSource, newsletter } = parsed.data;

  try {
    await sql`
      INSERT INTO user_profiles (user_id, first_name, last_name, region, referral_source)
      VALUES (${user.id}, ${firstName}, ${lastName}, ${region}, ${referralSource ?? null})
      ON CONFLICT (user_id) DO UPDATE SET
        first_name = EXCLUDED.first_name,
        last_name = EXCLUDED.last_name,
        region = EXCLUDED.region,
        referral_source = EXCLUDED.referral_source,
        updated_at = now()
    `;

    if (newsletter) {
      const email = await getAccountEmail(sql, user.id);
      if (email) await subscribeToNewsletter(sql, email, "sign-up");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to save profile:", error);
    return NextResponse.json({ error: "Failed to save profile" }, { status: 500 });
  }
}
