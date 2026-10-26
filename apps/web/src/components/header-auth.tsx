"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, LogIn, LogOut, UserPlus, UserRound } from "lucide-react";
import { getInitials, loadAuthClient, notifyAuthChanged, useAuthSession } from "@/lib/useAuthSession";

function useSignOut() {
  const router = useRouter();
  const pathname = usePathname();
  return async () => {
    const authClient = await loadAuthClient();
    await authClient.signOut();
    notifyAuthChanged();
    if (pathname === "/account") router.replace("/sign-in");
  };
}

/** Desktop navbar: Sign In / Join when signed out, account menu when signed in. */
export function HeaderAuthDesktop() {
  const session = useAuthSession();
  const signOut = useSignOut();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Reserve the space while loading so the navbar doesn't jump.
  if (session.status === "loading") {
    return <div className="hidden md:block h-9 w-24 border border-border/60 bg-card/40 animate-pulse" aria-hidden />;
  }

  if (session.status === "signed-out") {
    return (
      <div className="hidden md:flex items-center gap-1">
        <Link
          href="/sign-in"
          className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
            pathname === "/sign-in" ? "text-primary" : "text-muted-foreground hover:text-white"
          }`}
        >
          <LogIn className="h-3.5 w-3.5" />
          Sign In
        </Link>
        <Link
          href="/sign-up"
          className="hidden lg:flex items-center gap-1.5 whitespace-nowrap border border-primary bg-primary px-3 py-2 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-primary/85"
        >
          Join
        </Link>
      </div>
    );
  }

  const { name, email } = session.user;

  return (
    <div ref={menuRef} className="relative hidden md:block">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 border px-2 py-1.5 transition-colors ${
          open || pathname === "/account"
            ? "border-primary bg-primary/10"
            : "border-border bg-card hover:border-primary"
        }`}
      >
        <span className="flex h-6 w-6 items-center justify-center bg-primary text-[10px] font-bold text-black">
          {getInitials(name)}
        </span>
        <span className="hidden lg:block max-w-32 truncate text-xs font-bold uppercase tracking-widest text-white">
          {name.split(" ")[0]}
        </span>
        <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 w-60 border border-border bg-background shadow-xl shadow-black/40"
        >
          <div className="border-b border-border px-4 py-3">
            <div className="truncate text-xs font-bold uppercase tracking-widest text-white">{name}</div>
            <div className="mt-1 truncate text-[10px] tracking-wider text-muted-foreground">{email}</div>
          </div>
          <Link
            href="/account"
            role="menuitem"
            className="flex items-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:bg-muted hover:text-white"
          >
            <UserRound className="h-3.5 w-3.5" />
            Account
          </Link>
          <button
            type="button"
            role="menuitem"
            onClick={signOut}
            className="flex w-full items-center gap-2 border-t border-border px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

/** Mobile drawer section. */
export function HeaderAuthMobile() {
  const session = useAuthSession();
  const signOut = useSignOut();

  if (session.status === "loading") return null;

  if (session.status === "signed-out") {
    return (
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Link
          href="/sign-in"
          className="flex items-center justify-center gap-2 border border-border bg-card px-3 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-primary"
        >
          <LogIn className="h-4 w-4" />
          Sign In
        </Link>
        <Link
          href="/sign-up"
          className="flex items-center justify-center gap-2 border border-primary bg-primary px-3 py-3 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-primary/85"
        >
          <UserPlus className="h-4 w-4" />
          Join
        </Link>
      </div>
    );
  }

  const { name, email } = session.user;

  return (
    <div className="mt-4 border border-border bg-card/60">
      <div className="flex items-center gap-3 border-b border-border px-3 py-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-primary text-xs font-bold text-black">
          {getInitials(name)}
        </span>
        <div className="min-w-0">
          <div className="truncate text-xs font-bold uppercase tracking-widest text-white">{name}</div>
          <div className="truncate text-[10px] tracking-wider text-muted-foreground">{email}</div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <Link
          href="/account"
          className="flex items-center justify-center gap-2 px-3 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-white"
        >
          <UserRound className="h-4 w-4" />
          Account
        </Link>
        <button
          type="button"
          onClick={signOut}
          className="flex items-center justify-center gap-2 border-l border-border px-3 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
