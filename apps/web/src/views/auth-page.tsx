"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { AlertCircle, KeyRound, LogIn, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { inter, mono } from "@/lib/fonts";
import { isAuthError } from "@neondatabase/auth";
import { authClient, getAuthToken } from "@/lib/authClient";
import { notifyAuthChanged } from "@/lib/useAuthSession";
import { referralOptions, regionOptions } from "@/lib/profileOptions";

type Mode = "sign-in" | "sign-up";

export default function AuthPage({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const isSignUp = mode === "sign-up";

  // Already signed in: go straight to the account page.
  useEffect(() => {
    authClient.getSession().then(({ data }) => {
      if (data?.user) router.replace("/account");
    });
  }, [router]);

  function fail(message: string) {
    setErrorMsg(message);
    setStatus("error");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    const email = (form.get("email") as string).trim();
    const password = form.get("password") as string;

    try {
      if (!isSignUp) {
        const { error } = await authClient.signIn.email({ email, password });
        if (error) return fail(error.message || "Invalid email or password");
        notifyAuthChanged();
        router.push("/account");
        return;
      }

      const firstName = (form.get("firstName") as string).trim();
      const lastName = (form.get("lastName") as string).trim();

      const { error } = await authClient.signUp.email({
        email,
        password,
        name: `${firstName} ${lastName}`,
      });
      if (error) return fail(error.message || "Could not create your account");
      notifyAuthChanged();

      // Managed Auth only stores `name`; save the remaining fields to our profile table.
      const token = await getAuthToken();
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          firstName,
          lastName,
          region: form.get("region"),
          referralSource: form.get("referralSource") || undefined,
          newsletter: form.get("newsletter") === "on",
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        return fail(data.error || "Account created, but saving your profile failed");
      }

      router.push("/account");
    } catch (err) {
      // The SDK throws (rather than returning `error`) for some HTTP failures, e.g. a wrong password.
      fail(isAuthError(err) && err.message ? err.message : "Network error. Please try again.");
    }
  }

  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden bg-background text-foreground ${inter.className}`}
    >
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-xl px-4 py-20 md:px-8 md:py-28">
        <div className="mb-10 border-l-4 border-primary pl-5 md:pl-8">
          <div
            className={`mb-5 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
          >
            <KeyRound className="h-4 w-4" /> {isSignUp ? "ACCESS_REQUEST" : "SECURE_LOGIN"}
          </div>
          <h1 className="text-4xl font-extrabold uppercase tracking-tighter leading-[0.88] md:text-5xl">
            {isSignUp ? "Create" : "Sign"}
            <br />
            <span className="text-primary">{isSignUp ? "Account" : "In"}</span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-border bg-card/70 backdrop-blur-sm px-5 py-6 md:px-8 md:py-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="auth-first-name">First Name *</Label>
                  <Input id="auth-first-name" name="firstName" required autoComplete="given-name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="auth-last-name">Last Name *</Label>
                  <Input id="auth-last-name" name="lastName" required autoComplete="family-name" />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="auth-email">Email *</Label>
              <Input
                id="auth-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="auth-password">Password *</Label>
              <Input
                id="auth-password"
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete={isSignUp ? "new-password" : "current-password"}
                placeholder={isSignUp ? "At least 8 characters" : undefined}
              />
            </div>

            {isSignUp && (
              <>
                <div className="space-y-1.5">
                  <Label htmlFor="auth-region">Region *</Label>
                  <Select id="auth-region" name="region" required defaultValue="">
                    <option value="" disabled>
                      Select your region...
                    </option>
                    {regionOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="auth-referral">How did you hear about us?</Label>
                  <Select id="auth-referral" name="referralSource" defaultValue="">
                    <option value="">Select an option...</option>
                    {referralOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </Select>
                </div>

                {/* Unchecked by default: CASL requires an explicit opt-in. */}
                <label
                  htmlFor="auth-newsletter"
                  className="flex cursor-pointer items-start gap-3 border border-border bg-background/60 px-4 py-3 transition-colors hover:border-primary/60"
                >
                  <input
                    id="auth-newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary"
                  />
                  <span className="space-y-1">
                    <span className="block text-xs font-bold uppercase tracking-widest text-white">
                      Subscribe to the newsletter
                    </span>
                    <span className={`block text-[10px] tracking-wider text-muted-foreground ${mono.className}`}>
                      Field reports, new properties and project updates. Unsubscribe anytime.
                    </span>
                  </span>
                </label>
              </>
            )}

            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full gap-2 uppercase tracking-widest text-xs font-bold"
            >
              {status === "loading" ? (
                <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : isSignUp ? (
                <UserPlus className="h-3.5 w-3.5" />
              ) : (
                <LogIn className="h-3.5 w-3.5" />
              )}
              {isSignUp ? "Create Account" : "Sign In"}
            </Button>

            {status === "error" && (
              <div className="flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {errorMsg}
              </div>
            )}
          </form>

          <p
            className={`mt-6 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
          >
            {isSignUp ? "Already have an account? " : "No account yet? "}
            <Link
              href={isSignUp ? "/sign-in" : "/sign-up"}
              className="font-bold text-primary hover:underline"
            >
              {isSignUp ? "Sign in" : "Create one"}
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
