"use client";

import { createAuthClient } from "@neondatabase/auth";

// Neon Managed Better Auth. The browser talks to the branch's Auth URL directly;
// Next 15 can't use the SDK's Next.js server proxy (it requires Next 16).
export const authClient = createAuthClient(process.env.NEXT_PUBLIC_NEON_AUTH_URL!);

/**
 * Short-lived JWT for calling our own API routes as the signed-in user.
 * The SDK puts the JWT (from the `set-auth-jwt` header) on `session.token`; this
 * mirrors its internal getJWTToken(). `authClient.token()` is unreliable here because
 * the SDK dedupes /token with the cached getSession response.
 */
export async function getAuthToken(): Promise<string | null> {
  const { data } = await authClient.getSession();
  return data?.session?.token ?? null;
}
