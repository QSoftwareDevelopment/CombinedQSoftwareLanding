import { Reveal } from "./Reveal";
import { IndexMark } from "./ui";
import { Star } from "./icons";

const ROW_A = [
  "Restaurants",
  "Cafés & bubble tea",
  "Bars",
  "Bakeries",
  "Salons & spas",
];
const ROW_B = [
  "Home services",
  "Retail",
  "Multi-location brands",
  "Coffee roasters",
  "Wine bars",
];

function Track({ items, dur, reverse }: { items: string[]; dur: string; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden py-1.5">
      <div
        className="marquee-track"
        style={{ ["--dur" as string]: dur, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="mx-2.5 inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line-soft bg-[color-mix(in_oklch,white_2.5%,transparent)] px-5 py-2.5 text-[1.05rem] text-ink-dim"
          >
            <Star className="h-3.5 w-3.5 text-gold-deep" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WhoItsFor() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal as="div">
            <IndexMark>Who it’s for</IndexMark>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display mt-5 text-[clamp(2rem,4.6vw,3.5rem)] text-ink [text-wrap:balance]">
            Built for owners who live in their business.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-5 text-[1.05rem] leading-relaxed text-muted">
            Local service & hospitality teams who don’t have time for a marketing
            stack — and shouldn’t need one.
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-12 space-y-3">
        <Track items={ROW_A} dur="38s" />
        <Track items={ROW_B} dur="44s" reverse />
      </Reveal>
    </section>
  );
}
