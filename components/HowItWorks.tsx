import { Reveal } from "./Reveal";
import { IndexMark } from "./ui";

const STEPS = [
  {
    n: "01",
    title: "Connect",
    body: "Link Google, Yelp and your social accounts in minutes. No agency, no developer.",
  },
  {
    n: "02",
    title: "Monitor",
    body: "Reviews sync automatically. You get alerts and a clear reputation snapshot.",
  },
  {
    n: "03",
    title: "Act",
    body: "Approve AI replies, pick a trend, and run a guided campaign — all owner-controlled.",
  },
  {
    n: "04",
    title: "Grow",
    body: "Track ratings, response rate and competitor gaps, and double down on what works.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal as="div">
            <IndexMark>How it works</IndexMark>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display mt-5 text-[clamp(2rem,4.6vw,3.5rem)] text-ink [text-wrap:balance]">
            Set up once, grow every week.
          </Reveal>
        </div>

        {/* sequence */}
        <div className="relative mt-14">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-[1.1rem] top-2 bottom-2 w-px bg-[linear-gradient(180deg,transparent,var(--gold-deep),transparent)] opacity-50 lg:left-0 lg:right-0 lg:top-[1.1rem] lg:bottom-auto lg:h-px lg:w-full lg:bg-[linear-gradient(90deg,transparent,var(--gold-deep),transparent)]"
          />
          <ol className="grid gap-y-9 lg:grid-cols-4 lg:gap-x-8">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={0.08 * i} className="relative pl-12 lg:pl-0">
                <span className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full border border-[color-mix(in_oklch,var(--gold)_45%,var(--line))] bg-bg-deep font-display text-[0.82rem] text-gold lg:relative">
                  {s.n}
                </span>
                <h3 className="font-display mt-0 text-[1.4rem] text-ink lg:mt-6">{s.title}</h3>
                <p className="mt-2 max-w-[28ch] text-[0.95rem] leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
