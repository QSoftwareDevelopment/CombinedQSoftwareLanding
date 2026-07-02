import { Reveal } from "./Reveal";
import { IndexMark } from "./ui";
import {
  ReviewsGlyph,
  PlaybookGlyph,
  TrendsGlyph,
  InsightsGlyph,
  Check,
} from "./icons";

const MODULES = [
  {
    Glyph: ReviewsGlyph,
    name: "Reviews & Reputation",
    kicker: "Monitor · Respond · Request",
    desc: "A single inbox for every review, with AI that writes the reply for you — so a 5-star regular gets thanked and a 1-star complaint gets a calm, on-brand response before it spreads.",
    points: [
      "Unified feed across Google, Yelp, TripAdvisor, Uber Eats & Facebook",
      "AI responses matched to your tone, length & key phrases",
      "One-tap copy / open-in-platform to post the reply",
      "Average rating & response-rate at a glance",
      "Star-distribution breakdown, 5★ → 1★",
      "Review requests that ask happy customers for a rating",
      "Email alerts for new reviews",
      "Automatic monthly reputation report",
    ],
  },
  {
    Glyph: PlaybookGlyph,
    name: "Social Playbook",
    kicker: "From trend to post in 5 steps",
    desc: "The hardest part of social isn’t posting — it’s knowing what to make. The playbook hands you a concrete, business-specific plan you can shoot on a phone.",
    points: [
      "Connect TikTok, Instagram & Facebook accounts",
      "Pick a trend → get a guided 5-step campaign",
      "Step-by-step shot list with worked examples",
      "Reference photos so each shot is unmistakable",
      "Captions & hooks written for your business",
      "Angle & concept ideas in your brand voice",
      "Progress saved — resume any time",
      "You stay in control of what goes public",
    ],
  },
  {
    Glyph: TrendsGlyph,
    name: "Trends & Product Ideas",
    kicker: "What’s hot · What to sell",
    desc: "A weekly read on what’s catching on in your category, plus concrete product and menu ideas you can actually run with.",
    points: [
      "Viral trends ranked by momentum score",
      "Product / menu recommendations tuned to you",
      "“Potential” rating on every idea, high → low",
      "Cached so it loads instantly, refreshed daily",
      "One click from a trend into a social playbook",
      "Plain-language, owner-friendly framing",
    ],
  },
  {
    Glyph: InsightsGlyph,
    name: "Market & Competitor Intelligence",
    kicker: "Snapshot · Competitors · Market · Voice · Strategy",
    desc: "The intelligence layer turns scattered signals into a clear picture: how you compare, what customers keep saying, and where to put your next hour of effort.",
    points: [
      "Snapshot of your reputation health",
      "Competitor scores: overall, sentiment, presence, feedback & red-flags",
      "Side-by-side benchmark vs. your top local rival",
      "Local market & demand signals",
      "Voice-of-customer themes mined from reviews",
      "Strategy view — prioritised next steps",
    ],
  },
];

export default function DeepDive() {
  return (
    <section id="inside" className="relative py-24 sm:py-32">
      {/* top ambient seam */}
      <div aria-hidden className="hairline absolute inset-x-0 top-0 opacity-60" />
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal as="div">
            <IndexMark>Feature deep-dive</IndexMark>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display mt-5 text-[clamp(2rem,4.6vw,3.5rem)] text-ink [text-wrap:balance]">
            Everything inside Reputable.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-5 text-[1.05rem] leading-relaxed text-muted">
            Each pillar is a full module in the dashboard. Here’s what you
            actually get the day you turn it on.
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col">
          {MODULES.map((m, i) => {
            const Glyph = m.Glyph;
            return (
              <Reveal key={m.name} delay={0.04 * i}>
                <div className="grid gap-7 border-t border-line-soft py-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:py-11">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3.5">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[color-mix(in_oklch,var(--gold)_12%,var(--surface))] text-gold">
                        <Glyph className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-display text-[1.5rem] leading-tight text-ink">{m.name}</h3>
                        <p className="text-[0.72rem] uppercase tracking-[0.14em] text-gold-deep">{m.kicker}</p>
                      </div>
                    </div>
                    <p className="mt-4 max-w-[44ch] text-[0.98rem] leading-relaxed text-muted">
                      {m.desc}
                    </p>
                  </div>

                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {m.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-[0.92rem] leading-snug text-ink-dim">
                        <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[color-mix(in_oklch,var(--gold)_15%,transparent)] text-gold">
                          <Check className="h-3 w-3" />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
