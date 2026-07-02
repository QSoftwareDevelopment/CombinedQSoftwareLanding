import { Reveal } from "./Reveal";
import { Star } from "./icons";

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      {/* ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--gold) 6%, transparent), transparent 72%)", filter: "blur(60px)" }}
        />
        <div className="hairline absolute inset-x-0 top-0 opacity-50" />
        <div className="hairline absolute inset-x-0 bottom-0 opacity-50" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" />
              ))}
            </span>
          </Reveal>
          <Reveal as="p" delay={0.06} className="font-display mt-8 text-[clamp(1.7rem,4vw,3rem)] leading-[1.12] text-ink [text-wrap:balance]">
            A reputation that sells isn’t luck. It’s every reply sent on time,
            every trend caught early, and every guest who left{" "}
            <span className="text-gold">feeling remembered.</span>
          </Reveal>
          <Reveal as="p" delay={0.12} className="mx-auto mt-7 max-w-[46ch] text-[1rem] leading-relaxed text-muted">
            Reputable makes that the easy path — so the work that grows your name
            happens whether or not you have a spare hour.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
