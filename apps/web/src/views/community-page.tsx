"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpenText,
  Check,
  Handshake,
  Lightbulb,
  MessagesSquare,
  Radio,
  Scale,
  Sprout,
  Users,
} from "lucide-react";
import Loader from "@/components/loader";
import NewsletterForm from "@/components/NewsletterForm";
import { inter, mono } from "@/lib/fonts";
import { authClient } from "@/lib/authClient";

const upcoming = [
  {
    code: "MOD_01",
    icon: BookOpenText,
    title: "Articles & Field Reports",
    text: "Publish and read write-ups from the field: claim work, prospecting results, mapping techniques and lessons learned.",
  },
  {
    code: "MOD_02",
    icon: MessagesSquare,
    title: "Opinions & Discussion",
    text: "Share your take on projects, markets, regulations and tenure, and talk it through with people who do the work.",
  },
  {
    code: "MOD_03",
    icon: Lightbulb,
    title: "Knowledge Exchange",
    text: "Swap maps, data sources, tools and practical know-how so everyone spends less time reinventing the wheel.",
  },
  {
    code: "MOD_04",
    icon: Users,
    title: "And More",
    text: "Member profiles, introductions and ways to connect, shaped by what the community actually needs.",
  },
];

const values = [
  {
    icon: Handshake,
    title: "Share Knowledge",
    text: "What one of us learns in the field can save the next person weeks. We share openly and give credit.",
  },
  {
    icon: Scale,
    title: "Integrity & Respect",
    text: "Honest information, respectful debate, and respect for the land, its communities and its history.",
  },
  {
    icon: Sprout,
    title: "Grow Together",
    text: "Prospectors, geologists, owners and investors learning from each other and building something lasting.",
  },
];

const roadmap = [
  { phase: "PHASE_01", title: "Member accounts", status: "done" as const },
  { phase: "PHASE_02", title: "Articles & field reports", status: "active" as const },
  { phase: "PHASE_03", title: "Opinions & discussions", status: "planned" as const },
  { phase: "PHASE_04", title: "Member network", status: "planned" as const },
];

const statusStyles = {
  done: { label: "ONLINE · YOU'RE HERE", className: "border-secondary/40 bg-secondary/10 text-secondary" },
  active: { label: "IN PROGRESS", className: "border-primary/50 bg-primary/10 text-primary" },
  planned: { label: "PLANNED", className: "border-border text-muted-foreground" },
};

export default function CommunityPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState<string | null>(null);

  // Members-only: signed-out visitors go to sign-in.
  useEffect(() => {
    authClient.getSession().then(({ data }) => {
      if (!data?.user) {
        router.replace("/sign-in");
        return;
      }
      setFirstName(data.user.name.trim().split(/\s+/)[0] || "member");
    });
  }, [router]);

  if (!firstName) return <Loader message="Opening Community Hub..." />;

  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden bg-background text-foreground ${inter.className}`}
    >
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        {/* Hero */}
        <div className="mb-14 border-l-4 border-primary pl-5 md:pl-8">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-5 flex flex-wrap items-center gap-3 text-xs font-bold tracking-[0.2em] ${mono.className}`}
          >
            <span className="flex items-center gap-2 text-primary">
              <Radio className="h-4 w-4" /> COMMUNITY_HUB
            </span>
            <span className="flex items-center gap-2 border border-secondary/40 bg-secondary/10 px-2 py-1 text-[10px] text-secondary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
              IN DEVELOPMENT
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black uppercase tracking-tighter leading-[0.88] md:text-7xl"
          >
            Community
            <br />
            <span className="text-primary">Coming Soon</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-3xl text-base leading-relaxed text-foreground/90 md:text-lg"
          >
            Welcome aboard, <span className="font-bold text-primary">{firstName}</span>. We&rsquo;re
            building a new space on Adamson Geomatics where the people behind mining and exploration
            projects can exchange articles, opinions and experience, and grow together.
          </motion.p>
          <p
            className={`mt-4 max-w-3xl text-xs uppercase tracking-[0.18em] leading-relaxed text-muted-foreground ${mono.className}`}
          >
            Your account is ready. You&rsquo;ll have access the moment the community goes live.
          </p>
        </div>

        {/* What's coming */}
        <section className="mb-14">
          <div className={`mb-5 text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
            WHAT&rsquo;S_COMING
          </div>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {upcoming.map(({ code, icon: Icon, title, text }, index) => (
              <motion.div
                key={code}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.08 }}
                className="group bg-background p-6 transition-colors hover:bg-card md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                    {code}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:border-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h2 className="mt-5 text-xl font-extrabold uppercase tracking-tight text-white">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Values */}
          <section className="border border-border bg-card/70 p-6 backdrop-blur-sm md:p-8">
            <div className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
              OUR_VALUES
            </div>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
              Built on shared values
            </h2>
            <div className="mt-6 grid gap-px border border-border bg-border">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 bg-background px-5 py-5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wider text-white">{title}</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section className="border border-border bg-card/70 p-6 backdrop-blur-sm md:p-8">
            <div className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
              BUILD_ROADMAP
            </div>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
              Where we are
            </h2>
            <ol className="mt-6 space-y-3">
              {roadmap.map(({ phase, title, status }) => {
                const style = statusStyles[status];
                return (
                  <li key={phase} className="border border-border bg-background px-4 py-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                        {phase}
                      </span>
                      <span
                        className={`flex items-center gap-1.5 border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] ${style.className} ${mono.className}`}
                      >
                        {status === "done" && <Check className="h-3 w-3" />}
                        {status === "active" && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />}
                        {style.label}
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-bold uppercase tracking-wider text-white">{title}</div>
                  </li>
                );
              })}
            </ol>
          </section>
        </div>

        {/* Stay informed */}
        <section className="mt-6 border border-primary/30 bg-card/70 p-6 backdrop-blur-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
                LAUNCH_SIGNAL
              </div>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                Be the first to know
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We&rsquo;ll announce the launch in our newsletter. Have an idea for what the community
                should include? Tell us, we&rsquo;re building it with you.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 border border-primary px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.35)] ${mono.className}`}
                >
                  Share an idea
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/account"
                  className={`inline-flex items-center gap-2 border border-border px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-white ${mono.className}`}
                >
                  Your account
                </Link>
                <Link
                  href="/projects"
                  className={`inline-flex items-center gap-2 border border-border px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-white ${mono.className}`}
                >
                  Explore projects
                </Link>
              </div>
            </div>
            <div className={`text-xs uppercase tracking-widest text-muted-foreground ${mono.className}`}>
              <NewsletterForm source="community" showIntro={false} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
