import { Reveal } from "./Reveal";
import { IndexMark } from "./ui";
import { Mark, ArrowR } from "./icons";

const TOOLS = [
  { label: "Reviews monitor", rot: "-6deg" },
  { label: "Social scheduler", rot: "4deg" },
  { label: "“What do I post?”", rot: "-3deg" },
  { label: "A spreadsheet", rot: "6deg" },
  { label: "Pure guesswork", rot: "-5deg" },
];

export default function Problem() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* statement */}
          <div className="min-w-0">
            <Reveal as="div">
              <IndexMark>The problem</IndexMark>
            </Reveal>
            <Reveal as="h2" delay={0.05} className="font-display mt-5 text-[clamp(2rem,4.4vw,3.4rem)] text-ink [text-wrap:balance]">
              Five tools. No time. No read on the room.
            </Reveal>
            <Reveal as="p" delay={0.1} className="mt-6 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted">
              Most owners juggle a reviews tool, a social scheduler, a nagging
              “what should I post,” and no real sense of how they stack up next
              door. It’s a tab for everything and a plan for nothing.
            </Reveal>
            <Reveal as="p" delay={0.15} className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-ink-dim">
              Reputable folds all of it into one workspace — built for the person
              who runs the business <span className="text-gold">between customers</span>,
              not in long analysis sessions.
            </Reveal>
          </div>

          {/* five → one visual */}
          <Reveal delay={0.1} className="min-w-0">
            <div className="card relative overflow-hidden p-6 sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full"
                style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--gold) 8%, transparent), transparent 72%)", filter: "blur(36px)" }}
              />
              <div className="relative flex flex-col items-stretch gap-6 sm:flex-row sm:items-center">
                {/* the mess */}
                <div className="flex-1">
                  <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-faint">
                    Today
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {TOOLS.map((t) => (
                      <span
                        key={t.label}
                        style={{ rotate: t.rot }}
                        className="inline-flex items-center rounded-lg border border-line-soft bg-[color-mix(in_oklch,white_2.5%,transparent)] px-3 py-2 text-[0.82rem] text-muted"
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* arrow */}
                <div className="flex shrink-0 items-center justify-center text-gold-deep sm:flex-col">
                  <span className="hidden h-px w-10 bg-[linear-gradient(90deg,transparent,var(--gold-deep))] sm:block" />
                  <ArrowR className="h-6 w-6 rotate-90 sm:rotate-0" />
                </div>

                {/* the one */}
                <div className="flex-1">
                  <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-gold">
                    With Reputable
                  </p>
                  <div className="glow-primary flex items-center gap-3 rounded-xl border border-line bg-[color-mix(in_oklch,var(--primary)_8%,var(--surface-2))] p-4">
                    <Mark className="h-11 w-11 shrink-0" />
                    <div className="leading-tight">
                      <div className="font-display text-lg text-ink">One workspace</div>
                      <div className="text-[0.82rem] text-muted">Reviews · Social · Trends · Insights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
