import { timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// On-demand cache refresh for project pages, called after a project is added or edited in Neon.
//
// Why: a project URL visited before its row exists is cached by Vercel as a 404, and Next 15.0
// doesn't apply `revalidate` to those cached 404s, so they stay until the next deploy.
// revalidatePath() purges them immediately.
//
//   curl -X POST https://www.miningpropertymaps.com/api/revalidate \
//     -H "Authorization: Bearer $REVALIDATE_SECRET" \
//     -H "Content-Type: application/json" \
//     -d '{"ids":["on-001","on-003"]}'
//
// Omit "ids" to refresh every page (lists, map, home); passing ids also targets those project URLs.

const schema = z.object({
  ids: z
    .array(z.string().trim().regex(/^[a-z0-9-]{1,64}$/i, "Invalid project id"))
    .max(200)
    .optional(),
});

const LOCALE_PREFIXES = ["", "/es", "/fr"];

function isAuthorized(request: NextRequest, secret: string): boolean {
  const header = request.headers.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const a = Buffer.from(token);
  const b = Buffer.from(secret);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Revalidation not configured" }, { status: 500 });
  }
  if (!isAuthorized(request, secret)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown = {};
  const text = await request.text();
  if (text.trim()) {
    try {
      body = JSON.parse(text);
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid body" }, { status: 400 });
  }

  const paths: string[] = [];
  for (const id of parsed.data.ids ?? []) {
    for (const prefix of LOCALE_PREFIXES) {
      const path = `${prefix}/projects/${id}`;
      revalidatePath(path);
      paths.push(path);
    }
  }
  // Every page of the catch-all route (home previews, /projects, /map, dashboards, other locales).
  revalidatePath("/[[...slug]]", "page");
  revalidatePath("/sitemap-projects.xml");

  return NextResponse.json({ revalidated: true, paths, at: new Date().toISOString() });
}
