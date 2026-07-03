import { Reveal } from "./Reveal";
import { IndexMark } from "./ui";
import { ArrowR, Check, PlaybookGlyph } from "./icons";
import { SIGNUP_URL } from "./cta";

const PLAYBOOK_STEPS = [
  "Pick a trend that fits your business",
  "Get the concept & angle, in your voice",
  "Follow the exact shot list — with examples",
  "Captions & hooks, written for you",
  "Review, then post — you’re always in control",
];

export default function Playbook() {
  return (
    <section id="playbook" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* ---- The flagship, made tangible ---- */}
          <Reveal as="div" className="order-2 lg:order-1">
            <div className="card relative overflow-hidden p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[color-mix(in_oklch,var(--gold)_14%,var(--surface-2))] text-gold">
                    <PlaybookGlyph className="h-5 w-5" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[0.92rem] font-medium text-ink">
                      Matcha cold foam
                    </span>
                    <span className="block text-[0.74rem] text-faint">This week’s trend · campaign</span>
                  </span>
                </span>
                <span className="rounded-full bg-[color-mix(in_oklch,var(--gold)_12%,transparent)] px-2.5 py-1 text-[0.72rem] font-semibold text-gold-deep tabular">
                  5 steps
                </span>
              </div>

              <ol className="space-y-3.5">
                {PLAYBOOK_STEPS.map((s, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[color-mix(in_oklch,var(--gold)_16%,transparent)] text-[0.72rem] font-semibold text-gold-deep tabular">
                      {i + 1}
                    </span>
                    <span className="text-[0.95rem] leading-snug text-ink-dim">{s}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex items-center gap-2.5 border-t border-line-soft pt-5 text-[0.86rem]">
                <Check className="h-4 w-4 text-pos" />
                <span className="text-muted">
                  Ready to post in about <span className="text-ink">ten minutes</span> — no guesswork.
                </span>
              </div>
            </div>
          </Reveal>

          {/* ---- The pitch ---- */}
          <div className="order-1 lg:order-2">
            <Reveal as="div">
              <IndexMark>The flagship</IndexMark>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.05}
              className="font-display mt-5 text-[clamp(2rem,4.6vw,3.5rem)] text-ink [text-wrap:balance]"
            >
              The Social Playbook: posting, made foolproof.
            </Reveal>
            <Reveal as="p" delay={0.1} className="mt-5 max-w-[52ch] text-[1.05rem] leading-relaxed text-muted [text-wrap:pretty]">
              Every week, Reputable turns what’s actually working in your market
              into a step-by-step campaign — the trend, the angle, the exact shot
              list, the captions. You shoot it on your phone, review, and post.
              No agency, no blank screen, no guesswork.
            </Reveal>
            <Reveal as="div" delay={0.15} className="mt-8">
              <a href={SIGNUP_URL} className="btn btn-primary !px-6 !py-3.5 text-[0.98rem]">
                Try a playbook free
                <ArrowR className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
