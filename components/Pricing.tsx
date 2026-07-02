import { Reveal } from "./Reveal";
import { IndexMark, Magnetic } from "./ui";
import { Check, ArrowR, Star } from "./icons";

const INCLUDED = [
  "All 5 review platforms in one inbox",
  "Unlimited AI replies, tuned to your tone",
  "Social Playbook for TikTok, Instagram & Facebook",
  "Weekly viral trends + product & menu ideas",
  "Competitor & market intelligence",
  "Voice-of-customer themes from your reviews",
  "Monthly reputation report & new-review alerts",
  "Review requests to lift your rating",
];

const REASSURE = ["14-day free trial", "No charge today", "Cancel anytime"];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="div" className="flex justify-center">
            <IndexMark>Pricing</IndexMark>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display mt-5 text-[clamp(2rem,4.6vw,3.5rem)] text-ink [text-wrap:balance]">
            One plan. Everything in it.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-5 text-[1.05rem] leading-relaxed text-muted">
            No tiers to decode, no add-ons to chase. Every module, every platform,
            one simple price — bundled under the Q Software plan.
          </Reveal>
        </div>

        <Reveal delay={0.08} className="mx-auto mt-12 max-w-4xl">
          <div className="card glow-primary relative overflow-hidden">
            {/* brass top glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full"
              style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--gold) 8%, transparent), transparent 72%)", filter: "blur(48px)" }}
            />
            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* features */}
              <div className="border-b border-line-soft p-7 sm:p-9 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_oklch,var(--gold)_16%,transparent)] px-2.5 py-1 text-[0.72rem] font-semibold text-gold">
                    <Star className="h-3 w-3" /> Reputable — complete
                  </span>
                </div>
                <h3 className="font-display mt-4 text-2xl text-ink">Everything you need to grow your name</h3>
                <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {INCLUDED.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.92rem] leading-snug text-ink-dim">
                      <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[color-mix(in_oklch,var(--gold)_15%,transparent)] text-gold">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* price + CTA */}
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <div className="flex items-end gap-1.5">
                  <span className="font-display text-[3.6rem] leading-none text-ink">$32.99</span>
                  <span className="mb-2 text-[0.95rem] text-muted">/ month</span>
                </div>
                <p className="mt-2 text-[0.9rem] text-gold">Starts with a 14-day free trial</p>

                <Magnetic href="#top" className="btn btn-primary mt-7 w-full !py-4 text-[1rem]">
                  Start free trial
                  <ArrowR className="h-[18px] w-[18px]" />
                </Magnetic>
                <p className="mt-3 text-center text-[0.8rem] text-faint">
                  No card charged today
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-line-soft pt-6">
                  {REASSURE.map((r) => (
                    <li key={r} className="flex items-center gap-2.5 text-[0.9rem] text-muted">
                      <Check className="h-4 w-4 shrink-0 text-gold" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
