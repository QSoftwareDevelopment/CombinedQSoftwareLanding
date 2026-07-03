"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Stars } from "./ui";
import {
  GoogleMark,
  YelpMark,
  Sparkle,
  Copy,
  Check,
  TrendsGlyph,
} from "./icons";

type Review = {
  name: string;
  initial: string;
  platform: "Google" | "Yelp";
  rating: number;
  text: string;
  reply: string;
};

const REVIEWS: Review[] = [
  {
    name: "Maria L.",
    initial: "M",
    platform: "Google",
    rating: 5,
    text: "Best brunch in the neighbourhood — the staff actually remembered our names.",
    reply:
      "Maria, this made the whole team smile. Your usual table by the window is ready whenever you are — see you Sunday.",
  },
  {
    name: "Devin R.",
    initial: "D",
    platform: "Yelp",
    rating: 4,
    text: "Food was excellent, but the wait ran a little long on Friday night.",
    reply:
      "Thanks Devin — you're right, Fridays get busy. We've added a host for peak hours so your next visit flies by.",
  },
];

function PlatformBadge({ platform }: { platform: Review["platform"] }) {
  const Icon = platform === "Google" ? GoogleMark : YelpMark;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line-soft bg-[color-mix(in_oklch,white_3%,transparent)] px-2.5 py-1 text-[0.72rem] text-muted">
      <Icon className="h-3.5 w-3.5" />
      {platform}
    </span>
  );
}

export default function HeroPreview() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  // SSR / no-JS renders the full reply — the demo never gates content on JS.
  const [typed, setTyped] = useState(REVIEWS[0].reply.length);
  const [posted, setPosted] = useState(false);
  // The demo only runs while it's actually on screen; off-screen it pauses so
  // it never spends frames (or React renders) while the visitor reads below.
  const [inView, setInView] = useState(false);
  const started = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduce) {
      setTyped(REVIEWS[idx].reply.length);
      return;
    }
    if (!inView) return;

    const review = REVIEWS[idx];
    let i = 0;
    setTyped(0);
    setPosted(false);

    const push = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    // small lead-in before typing (shorter on the very first run)
    const startDelay = started.current ? 650 : 350;
    started.current = true;

    function typeNext() {
      i += 1;
      setTyped(i);
      if (i < review.reply.length) {
        push(typeNext, 16 + Math.random() * 26);
      } else {
        // finished typing → show "posted", then advance
        push(() => setPosted(true), 600);
        push(() => setIdx((p) => (p + 1) % REVIEWS.length), 3200);
      }
    }
    push(typeNext, startDelay);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [idx, reduce, inView]);

  const review = REVIEWS[idx];

  return (
    <div ref={rootRef} className="relative">
      {/* Floating accent — momentum chip (top-right) */}
      <div
        style={{ animationDelay: "0.9s" }}
        className="float-in card glow-gold absolute -right-3 -top-7 z-20 hidden w-[200px] gap-3 p-3.5 sm:flex"
      >
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[color-mix(in_oklch,var(--gold)_16%,transparent)] text-gold">
            <TrendsGlyph className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <div className="text-[0.7rem] text-muted">Trending now</div>
            <div className="text-sm text-ink">Matcha cold foam</div>
          </div>
          <span className="ml-auto self-start rounded-full bg-[color-mix(in_oklch,var(--pos)_18%,transparent)] px-1.5 py-0.5 text-[0.66rem] font-semibold text-[color-mix(in_oklch,var(--pos)_92%,white)]">
            ▲ 94
          </span>
        </div>
      </div>

      {/* Floating accent — rating ring (bottom-left) */}
      <div
        style={{ animationDelay: "1.05s" }}
        className="float-in card absolute -bottom-7 -left-4 z-20 hidden items-center gap-3 p-3.5 sm:flex"
      >
        <div className="relative grid h-12 w-12 place-items-center">
          <svg viewBox="0 0 44 44" className="h-12 w-12 -rotate-90">
            <circle cx="22" cy="22" r="18" fill="none" stroke="var(--line)" strokeWidth="4" />
            <circle
              cx="22" cy="22" r="18" fill="none"
              stroke="var(--gold)" strokeWidth="4" strokeLinecap="round"
              strokeDasharray={113} strokeDashoffset={113 * (1 - 0.96)}
            />
          </svg>
          <span className="absolute font-display text-[0.95rem] text-ink">4.8</span>
        </div>
        <div className="leading-tight">
          <div className="text-sm text-ink">Rating</div>
          <div className="text-[0.72rem] text-pos">▲ 0.4 this month</div>
        </div>
      </div>

      {/* Main dashboard panel */}
      <div className="card glow-primary relative z-10 overflow-hidden p-0">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-line-soft px-4 py-3">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_oklch,var(--primary)_60%,var(--line))]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_oklch,var(--gold)_60%,var(--line))]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_oklch,var(--pos)_50%,var(--line))]" />
          </span>
          <span className="ml-2 min-w-0 truncate text-[0.78rem] text-muted">Reputable — Reviews inbox</span>
          <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 text-[0.72rem] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-pos" style={{ animation: "shimmer 2s infinite" }} />
            Live
          </span>
        </div>

        {/* stats strip */}
        <div className="grid grid-cols-3 divide-x divide-line-soft border-b border-line-soft">
          {[
            { k: "Avg. rating", v: "4.8", sub: "★" },
            { k: "Response rate", v: "98%", sub: "" },
            { k: "New today", v: "12", sub: "" },
          ].map((s) => (
            <div key={s.k} className="px-4 py-3">
              <div className="text-[0.68rem] uppercase tracking-wider text-faint">{s.k}</div>
              <div className="font-display text-xl text-ink">
                {s.v}
                <span className="text-gold">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* review + AI reply */}
        <div className="p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* incoming review */}
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color-mix(in_oklch,var(--primary)_25%,var(--surface-2))] font-display text-sm text-ink">
                  {review.initial}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-ink">{review.name}</span>
                    <PlatformBadge platform={review.platform} />
                    <Stars value={review.rating} size={12} className="ml-auto" />
                  </div>
                  <p className="mt-1.5 text-[0.86rem] leading-relaxed text-ink-dim">
                    “{review.text}”
                  </p>
                </div>
              </div>

              {/* AI reply */}
              <div className="mt-3.5 rounded-xl border border-line-soft bg-[color-mix(in_oklch,var(--gold)_5%,var(--bg-deep))] p-3.5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_oklch,var(--gold)_18%,transparent)] px-2 py-0.5 text-[0.68rem] font-semibold text-gold">
                    <Sparkle className="h-3 w-3" />
                    AI reply · your tone
                  </span>
                </div>
                <p className="min-h-[3.5rem] text-[0.86rem] leading-relaxed text-ink">
                  <span className={typed < review.reply.length && !reduce ? "caret" : ""}>
                    {review.reply.slice(0, typed)}
                  </span>
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    className={`btn !py-2 !px-3.5 text-[0.8rem] transition-colors ${
                      posted
                        ? "border border-[color-mix(in_oklch,var(--pos)_45%,var(--line))] bg-[color-mix(in_oklch,var(--pos)_14%,transparent)] text-[color-mix(in_oklch,var(--pos)_92%,white)]"
                        : "btn-primary"
                    }`}
                  >
                    {posted ? (
                      <><Check className="h-3.5 w-3.5" /> Posted to {review.platform}</>
                    ) : (
                      <><Copy className="h-3.5 w-3.5" /> Copy &amp; post</>
                    )}
                  </button>
                  <button className="btn btn-ghost !py-2 !px-3.5 text-[0.8rem]">Regenerate</button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
