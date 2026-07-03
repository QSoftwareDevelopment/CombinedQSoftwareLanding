import { Reveal } from "./Reveal";
import { IndexMark } from "./ui";
import { Check, ArrowR } from "./icons";
import { SIGNUP_URL } from "./cta";

const WITHOUT = [
  "Five review tabs — and replies that never get written",
  "A blank screen on posting day, no idea what actually works",
  "An agency invoice every month, or simply doing nothing",
  "A one-star review you find out about days too late",
  "No real sense of how you compare to the shop next door",
];

const WITH = [
  "Every review in one inbox, with on-brand replies in a tap",
  "A foolproof Social Playbook — pick a trend, follow the steps, post",
  "One flat price — no agency, no five-tool stack to wire up",
  "New-review alerts the moment they land, on every platform",
  "A clear view of exactly where you stand against local rivals",
];

function XMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export default function WhyReputable() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="div" className="flex justify-center">
            <IndexMark>Why Reputable</IndexMark>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="font-display mt-5 text-[clamp(2rem,4.6vw,3.5rem)] text-ink [text-wrap:balance]"
          >
            Everything your name needs, minus the agency.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mx-auto mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-muted">
            Replace the five-tab juggle, the guesswork and the monthly retainer
            with one quiet workspace you can run between customers.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* the usual way */}
          <Reveal as="div">
            <div className="card h-full p-7 sm:p-9">
              <span className="text-[0.72rem] uppercase tracking-[0.16em] text-faint">
                The usual way
              </span>
              <ul className="mt-6 space-y-4">
                {WITHOUT.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.98rem] leading-snug text-muted">
                    <span className="mt-0.5 grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full bg-[var(--surface-2)] text-faint">
                      <XMark />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* with Reputable */}
          <Reveal as="div" delay={0.08}>
            <div className="card card-i h-full border-[color-mix(in_oklch,var(--gold)_32%,var(--line))] p-7 shadow-[0_24px_60px_-30px_oklch(0.4_0.06_60_/_0.4)] sm:p-9">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_oklch,var(--gold)_15%,transparent)] px-2.5 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-gold-deep">
                With Reputable
              </span>
              <ul className="mt-6 space-y-4">
                {WITH.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.98rem] leading-snug text-ink-dim">
                    <span className="mt-0.5 grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full bg-[color-mix(in_oklch,var(--gold)_16%,transparent)] text-gold">
                      <Check className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* value close */}
        <Reveal delay={0.06} className="mt-6">
          <div className="card flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center sm:p-9">
            <div>
              <h3 className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)] text-ink">
                Everything, for <span className="text-gold">$32.99</span>/month.
              </h3>
              <p className="mt-2 max-w-[52ch] text-[0.98rem] leading-relaxed text-muted">
                One plan — every platform, every module. About what a single
                walk-in is worth, and we don’t charge a thing for 14 days.
              </p>
            </div>
            <a href={SIGNUP_URL} className="btn btn-primary shrink-0 !px-7 !py-4 text-[1rem]">
              Start free trial
              <ArrowR className="h-[18px] w-[18px]" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
