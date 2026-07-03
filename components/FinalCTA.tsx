import { Reveal } from "./Reveal";
import { Magnetic } from "./ui";
import { ArrowR } from "./icons";
import { SIGNUP_URL } from "./cta";
import {
  GoogleMark,
  YelpMark,
  TripadvisorMark,
  UberEatsMark,
  FacebookMark,
} from "./icons";

const PLATFORMS = [GoogleMark, YelpMark, TripadvisorMark, UberEatsMark, FacebookMark];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="card relative overflow-hidden px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* ambient */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div
                className="absolute left-1/2 top-0 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full"
                style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--gold) 7%, transparent), transparent 72%)", filter: "blur(52px)" }}
              />
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
                  backgroundSize: "52px 52px",
                  maskImage: "radial-gradient(80% 80% at 50% 30%, black, transparent 75%)",
                  WebkitMaskImage: "radial-gradient(80% 80% at 50% 30%, black, transparent 75%)",
                }}
              />
            </div>

            <h2 className="font-display mx-auto max-w-3xl text-[clamp(2.2rem,5.4vw,4.4rem)] leading-[0.98] text-ink [text-wrap:balance]">
              Build a reputation that <span className="text-gold">sells.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[44ch] text-[1.05rem] leading-relaxed text-muted">
              Start your 14-day free trial today. Connect your accounts in minutes
              and let Reputable do the watching, writing and benchmarking.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <Magnetic href={SIGNUP_URL} className="btn btn-primary !px-8 !py-4 text-[1.02rem]">
                Start free trial
                <ArrowR className="h-[18px] w-[18px]" />
              </Magnetic>
              <a href="#pricing" className="btn btn-ghost !px-6 !py-4 text-[1.02rem]">
                See what’s included
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <p className="text-[0.74rem] uppercase tracking-[0.18em] text-faint">
                One inbox for every platform
              </p>
              <div className="flex items-center gap-6 text-muted">
                {PLATFORMS.map((Icon, i) => (
                  <Icon key={i} className="h-5 w-5" />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
