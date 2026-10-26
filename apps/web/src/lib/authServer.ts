import { createRemoteJWKSet, jwtVerify } from "jose";

const authUrl = process.env.NEXT_PUBLIC_NEON_AUTH_URL;

// Cached across requests in the same function instance; jose refetches on key rotation.
const jwks = authUrl ? createRemoteJWKSet(new URL(`${authUrl}/.well-known/jwks.json`)) : null;

export type AuthUser = { id: string; email?: string };

/**
 * Verifies the `Authorization: Bearer <jwt>` header issued by Neon Managed Auth.
 * Returns the user, or null when the token is missing, expired or forged.
 */
export async function getRequestUser(request: Request): Promise<AuthUser | null> {
  if (!jwks) return null;

  const header = request.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return null;

  try {
    // Neon Managed Auth issues EdDSA JWTs with iss and aud set to the Auth URL's origin.
    const origin = new URL(authUrl!).origin;
    const { payload } = await jwtVerify(token, jwks, { issuer: origin, audience: origin });
    if (!payload.sub) return null;
    return { id: payload.sub, email: typeof payload.email === "string" ? payload.email : undefined };
  } catch {
    return null;
  }
}
