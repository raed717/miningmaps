"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/authClient";

const AUTH_CHANGED = "auth-changed";

/** Call after sign-in, sign-up or sign-out so mounted UI (e.g. the header) refreshes. */
export function notifyAuthChanged() {
  window.dispatchEvent(new Event(AUTH_CHANGED));
}

export type AuthUser = { name: string; email: string };

export type AuthSession =
  | { status: "loading"; user: null }
  | { status: "signed-out"; user: null }
  | { status: "signed-in"; user: AuthUser };

/**
 * Current session for persistent UI. Rechecks on route changes and on
 * notifyAuthChanged(); the SDK caches getSession, so this stays cheap.
 */
export function useAuthSession(): AuthSession {
  const pathname = usePathname();
  const [session, setSession] = useState<AuthSession>({ status: "loading", user: null });
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const onChange = () => setVersion((v) => v + 1);
    window.addEventListener(AUTH_CHANGED, onChange);
    return () => window.removeEventListener(AUTH_CHANGED, onChange);
  }, []);

  useEffect(() => {
    let cancelled = false;
    authClient
      .getSession()
      .then(({ data }) => {
        if (cancelled) return;
        setSession(
          data?.user
            ? { status: "signed-in", user: { name: data.user.name, email: data.user.email } }
            : { status: "signed-out", user: null }
        );
      })
      .catch(() => {
        if (!cancelled) setSession({ status: "signed-out", user: null });
      });
    return () => {
      cancelled = true;
    };
  }, [pathname, version]);

  return session;
}

export function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase() || "?";
}
