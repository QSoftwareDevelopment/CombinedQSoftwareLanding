"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { IndexMark, Stars } from "./ui";
import {
  ReviewsGlyph,
  PlaybookGlyph,
  TrendsGlyph,
  InsightsGlyph,
  Check,
  Sparkle,
} from "./icons";

/* ---- per-pillar visuals ------------------------------------ */

function ReviewsViz() {
  const dist = [
    { s: 5, v: 82 },
    { s: 4, v: 12 },
    { s: 3, v: 3 },
    { s: 2, v: 2 },
    { s: 1, v: 1 },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
      <div className="rounded-xl border border-line-soft bg-[color-mix(in_oklch,white_2.5%,transparent)] p-4">
        <div className="font-display text-4xl text-ink">4.8</div>
        <Stars value={5} size={13} className="mt-1" />
        <div className="mt-1 text-[0.78rem] text-muted">1,204 reviews · 98% answered</div>
        <div className="mt-4 space-y-1.5">
          {dist.map((d, i) => (
            <div key={d.s} className="flex items-center gap-2">
              <span className="w-3 text-[0.7rem] text-faint tabular">{d.s}</span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[color-mix(in_oklch,white_6%,transparent)]">
                <span className="bar-grow block h-full rounded-full bg-gold" style={{ width: `${d.v}%`, animationDelay: `${0.1 + i * 0.06}s` }} />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-line-soft bg-[color-mix(in_oklch,var(--gold)_5%,var(--bg-deep))] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[0.8rem] font-semibold text-ink">New · Google</span>
          <Stars value={5} size={12} />
        </div>
        <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-dim">
          “Hands down the best service we’ve had all year.”
        </p>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_oklch,var(--gold)_16%,transparent)] px-2 py-0.5 text-[0.66rem] font-semibold text-gold">
          <Sparkle className="h-3 w-3" /> AI reply ready
        </div>
        <p className="mt-2 text-[0.82rem] leading-relaxed text-ink">
          “That means the world to us — thank you. We can’t wait to have you back.”
        </p>
      </div>
    </div>
  );
}

function PlaybookViz() {
  const steps = ["Pick a trend", "Concept & angle", "Shot list", "Captions & hooks", "Review & post"];
  const active = 2;
  return (
    <div className="rounded-xl border border-line-soft bg-[color-mix(in_oklch,white_2.5%,transparent)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[0.8rem] font-semibold text-ink">Matcha cold foam · campaign</span>
        <span className="text-[0.72rem] text-gold">Step 3 of 5</span>
      </div>
      <ol className="space-y-2.5">
        {steps.map((s, i) => {
          const done = i < active;
          const now = i === active;
          return (
            <li key={s} className="flex items-center gap-3">
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[0.7rem] font-semibold ${
                  done
                    ? "bg-[color-mix(in_oklch,var(--gold)_22%,transparent)] text-gold"
                    : now
                    ? "bg-[var(--primary-deep)] text-white"
                    : "border border-line-soft text-faint"
                }`}
              >
                {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
              </span>
              <span className={`text-[0.9rem] ${now ? "text-ink" : done ? "text-ink-dim" : "text-muted"}`}>
                {s}
              </span>
              {now && (
                <span className="ml-auto rounded-md bg-[color-mix(in_oklch,white_5%,transparent)] px-2 py-1 text-[0.72rem] text-muted">
                  3 shots · worked examples
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function TrendsViz() {
  const trends = [
    { name: "Matcha cold foam", score: 94 },
    { name: "Birria tacos", score: 81 },
    { name: "Dubai chocolate", score: 73 },
    { name: "Hot honey everything", score: 64 },
  ];
  return (
    <div className="rounded-xl border border-line-soft bg-[color-mix(in_oklch,white_2.5%,transparent)] p-5">
      <div className="mb-4 text-[0.8rem] font-semibold text-ink">This week, ranked by momentum</div>
      <div className="space-y-3.5">
        {trends.map((t, i) => (
          <div key={t.name}>
            <div className="mb-1 flex items-center justify-between text-[0.84rem]">
              <span className="text-ink-dim">{t.name}</span>
              <span className="text-gold tabular">▲ {t.score}</span>
            </div>
            <span className="block h-2 overflow-hidden rounded-full bg-[color-mix(in_oklch,white_6%,transparent)]">
              <span
                className="bar-grow block h-full rounded-full"
                style={{
                  width: `${t.score}%`,
                  animationDelay: `${0.1 + i * 0.08}s`,
                  background: "linear-gradient(90deg, var(--primary-deep), var(--gold-deep))",
                }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightsViz() {
  const rows = [
    { label: "Overall", you: 88, rival: 71 },
    { label: "Sentiment", you: 92, rival: 64 },
    { label: "Presence", you: 76, rival: 80 },
    { label: "Response", you: 98, rival: 42 },
  ];
  return (
    <div className="rounded-xl border border-line-soft bg-[color-mix(in_oklch,white_2.5%,transparent)] p-5">
      <div className="mb-4 flex items-center gap-4 text-[0.76rem]">
        <span className="inline-flex items-center gap-1.5 text-ink">
          <span className="h-2.5 w-2.5 rounded-sm bg-gold" /> You
        </span>
        <span className="inline-flex items-center gap-1.5 text-muted">
          <span className="h-2.5 w-2.5 rounded-sm bg-[color-mix(in_oklch,var(--ink)_28%,transparent)]" /> Top local rival
        </span>
      </div>
      <div className="space-y-3">
        {rows.map((r, i) => (
          <div key={r.label} className="flex items-center gap-3">
            <span className="w-16 shrink-0 text-[0.78rem] text-muted">{r.label}</span>
            <div className="flex-1 space-y-1">
              <span className="block h-2 overflow-hidden rounded-full bg-[color-mix(in_oklch,white_5%,transparent)]">
                <span className="bar-grow block h-full rounded-full bg-gold" style={{ width: `${r.you}%`, animationDelay: `${0.1 + i * 0.07}s` }} />
              </span>
              <span className="block h-2 overflow-hidden rounded-full bg-[color-mix(in_oklch,white_5%,transparent)]">
                <span className="bar-grow block h-full rounded-full bg-[color-mix(in_oklch,var(--ink)_30%,transparent)]" style={{ width: `${r.rival}%`, animationDelay: `${0.16 + i * 0.07}s` }} />
              </span>
            </div>
            <span className="w-8 shrink-0 text-right text-[0.8rem] font-semibold text-gold tabular">{r.you}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- pillar data ------------------------------------------- */
const PILLARS = [
  {
    id: "reviews",
    name: "Reviews",
    kicker: "Reputation management",
    Glyph: ReviewsGlyph,
    desc: "Monitor every review as it lands and respond on-brand in seconds — without writing from scratch.",
    points: [
      "Google, Yelp, TripAdvisor, Uber Eats & Facebook in one inbox",
      "AI replies tuned to your tone, length & key phrases",
      "Rating, response-rate & star-distribution tracking",
      "Review requests that ask happy customers for a rating",
    ],
    Viz: ReviewsViz,
  },
  {
    id: "playbook",
    name: "Social Playbook",
    kicker: "Guided content",
    Glyph: PlaybookGlyph,
    desc: "Turn a trending idea into a ready-to-post campaign in a guided, five-step playbook.",
    points: [
      "Connect TikTok, Instagram & Facebook",
      "Shot lists & worked examples tailored to your business",
      "Captions, hooks & reference photos generated for you",
      "Progress saved so you can pick up where you left off",
    ],
    Viz: PlaybookViz,
  },
  {
    id: "trends",
    name: "Trends",
    kicker: "Demand signals",
    Glyph: TrendsGlyph,
    desc: "See what’s taking off in your market this week — and what to put on the menu next.",
    points: [
      "Viral trends ranked by momentum",
      "Product & menu ideas tuned to your business",
      "“Potential” ratings so you back the right bets",
      "One click straight into the social playbook",
    ],
    Viz: TrendsViz,
  },
  {
    id: "insights",
    name: "Insights",
    kicker: "Market intelligence",
    Glyph: InsightsGlyph,
    desc: "Know exactly where you stand — and where to focus — against local competitors.",
    points: [
      "Competitor benchmarking scores vs. your rivals",
      "Local market & demand signals",
      "Voice-of-customer themes pulled from your reviews",
      "A clear strategy view: where to focus next",
    ],
    Viz: InsightsViz,
  },
];

export default function Pillars() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % PILLARS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const P = PILLARS[active];

  return (
    <section id="pillars" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal as="div">
            <IndexMark>The four pillars</IndexMark>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display mt-5 text-[clamp(2rem,4.6vw,3.5rem)] text-ink [text-wrap:balance]">
            One engine. Four ways to grow.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-5 text-[1.05rem] leading-relaxed text-muted">
            Each pillar is a full module in the dashboard — working together, not
            in five different tabs.
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div
            className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* selector list */}
            <div className="flex flex-col gap-2.5">
              {PILLARS.map((p, i) => {
                const on = i === active;
                const Glyph = p.Glyph;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-pressed={on}
                    className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 sm:p-5 ${
                      on
                        ? "border-[color-mix(in_oklch,var(--gold)_35%,var(--line))] bg-[color-mix(in_oklch,var(--gold)_6%,var(--surface))]"
                        : "border-line-soft bg-[color-mix(in_oklch,white_2%,transparent)] hover:border-line hover:bg-[color-mix(in_oklch,white_3.5%,transparent)]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors duration-500 ${
                          on ? "bg-[color-mix(in_oklch,var(--gold)_16%,transparent)] text-gold" : "bg-[color-mix(in_oklch,white_5%,transparent)] text-muted"
                        }`}
                      >
                        <Glyph className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className={`font-display text-lg ${on ? "text-ink" : "text-ink-dim"}`}>{p.name}</span>
                          <span className="text-[0.68rem] uppercase tracking-[0.14em] text-faint">{p.kicker}</span>
                        </div>
                        <p className={`mt-0.5 text-[0.86rem] leading-snug transition-colors duration-500 ${on ? "text-muted" : "text-faint"}`}>
                          {p.desc}
                        </p>
                      </div>
                    </div>
                    {/* progress underline on active */}
                    {on && !reduce && !paused && (
                      <motion.span
                        key={`bar-${active}`}
                        className="absolute bottom-0 left-0 h-[2px] bg-gold"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* preview panel */}
            <div className="card relative overflow-hidden p-5 sm:p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full"
                style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--gold) 7%, transparent), transparent 72%)", filter: "blur(44px)" }}
              />
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={P.id}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <P.Viz />
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {P.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-[0.9rem] text-ink-dim">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
