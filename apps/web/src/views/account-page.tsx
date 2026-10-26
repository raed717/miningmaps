"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader";
import { inter, mono } from "@/lib/fonts";
import { authClient, getAuthToken } from "@/lib/authClient";
import { notifyAuthChanged } from "@/lib/useAuthSession";

type Profile = {
  firstName: string;
  lastName: string;
  region: string;
  referralSource: string | null;
};

type Account = { email: string; name: string; profile: Profile | null; newsletter: boolean };

export default function AccountPage() {
  const router = useRouter();
  const [account, setAccount] = useState<Account | null>(null);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { data } = await authClient.getSession();
      if (!data?.user) {
        router.replace("/sign-in");
        return;
      }

      const token = await getAuthToken();
      const res = await fetch("/api/profile", {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const { profile, newsletter } = res.ok ? await res.json() : { profile: null, newsletter: false };

      if (!cancelled) {
        setAccount({ email: data.user.email, name: data.user.name, profile, newsletter: !!newsletter });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [router]);

  async function handleSignOut() {
    setSigningOut(true);
    await authClient.signOut();
    notifyAuthChanged();
    router.replace("/sign-in");
  }

  if (!account) return <Loader message="Loading Account..." />;

  const rows: [string, string][] = [
    ["First Name", account.profile?.firstName ?? account.name],
    ["Last Name", account.profile?.lastName ?? "—"],
    ["Email", account.email],
    ["Region", account.profile?.region ?? "—"],
    ["Heard About Us", account.profile?.referralSource ?? "—"],
    ["Newsletter", account.newsletter ? "Subscribed" : "Not subscribed"],
  ];

  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden bg-background text-foreground ${inter.className}`}
    >
      <div className="relative z-10 mx-auto max-w-xl px-4 py-20 md:px-8 md:py-28">
        <div className="mb-10 border-l-4 border-primary pl-5 md:pl-8">
          <div
            className={`mb-5 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
          >
            <UserRound className="h-4 w-4" /> SESSION_ACTIVE
          </div>
          <h1 className="text-4xl font-extrabold uppercase tracking-tighter leading-[0.88] md:text-5xl">
            Your
            <br />
            <span className="text-primary">Account</span>
          </h1>
        </div>

        <div className="border border-border bg-card/70 backdrop-blur-sm">
          <dl className="grid gap-px bg-border">
            {rows.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[9rem_1fr] gap-4 bg-background px-5 py-4 md:px-8">
                <dt
                  className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}
                >
                  {label}
                </dt>
                <dd className="min-w-0 wrap-break-word text-sm text-white">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="px-5 py-5 md:px-8">
            <Button
              type="button"
              onClick={handleSignOut}
              disabled={signingOut}
              variant="outline"
              className="w-full gap-2 uppercase tracking-widest text-xs font-bold"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
