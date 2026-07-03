import type { CSSProperties } from "react";
import { ArrowR, Check, PlaybookGlyph } from "./icons";
import { SIGNUP_URL } from "./cta";
import HeroPreview from "./HeroPreview";

const INCLUDES = ["Reviews & replies", "Social Playbook", "Trends", "Competitors"];

const d = (delay: number): CSSProperties => ({ animationDelay: `${delay}s` });

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44 lg:pb-32">
      {/* a single, calm architectural grid — no animated glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 vignette" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(110% 80% at 50% 12%, black, transparent 72%)",
            WebkitMaskImage: "radial-gradient(110% 80% at 50% 12%, black, transparent 72%)",
          }}
        />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          {/* ---- The pitch ---- */}
          <div>
            <span
              style={d(0.04)}
              className="hero-rise inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-[var(--surface)] py-1.5 pl-2 pr-3.5 text-[0.82rem] text-muted"
            >
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[color-mix(in_oklch,var(--gold)_15%,transparent)] px-2 py-0.5 text-[0.72rem] font-semibold text-gold-deep">
                <PlaybookGlyph className="h-3.5 w-3.5" /> Flagship
              </span>
              <span className="truncate">The Social Playbook</span>
            </span>

            <h1
              style={d(0.1)}
              className="hero-rise font-display mt-7 max-w-[15ch] text-[clamp(2.2rem,6vw,4.9rem)] text-ink [text-wrap:balance]"
            >
              All-in-one <span className="text-gold">reputation</span> management.
            </h1>

            <p
              style={d(0.26)}
              className="hero-rise mt-7 max-w-[52ch] text-[1.08rem] leading-relaxed text-muted [text-wrap:pretty]"
            >
              Reviews, social, trends and competitor insight — together, in one
              quiet workspace. Led by the <span className="text-ink">Social Playbook</span>:
              foolproof, step-by-step guides that make posting something great
              impossible to get wrong.
            </p>

            <ul style={d(0.34)} className="hero-rise mt-6 flex flex-wrap gap-2">
              {INCLUDES.map((f) => (
                <li
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-soft bg-[var(--surface)] px-3 py-1.5 text-[0.82rem] text-ink-dim"
                >
                  <Check className="h-3.5 w-3.5 text-gold" />
                  {f}
                </li>
              ))}
            </ul>

            <div style={d(0.42)} className="hero-rise mt-9 flex flex-wrap items-center gap-3.5">
              <a href={SIGNUP_URL} className="btn btn-primary !px-7 !py-4 text-[1rem]">
                Start free trial
                <ArrowR className="h-[18px] w-[18px]" />
              </a>
              <a href="#how" className="btn btn-ghost !px-6 !py-4 text-[1rem]">
                See how it works
              </a>
            </div>

            <p style={d(0.48)} className="hero-rise mt-4 text-[0.82rem] text-faint">
              14-day free trial · no card charged today · cancel anytime
            </p>
          </div>

          {/* ---- The product, working (live reviews-inbox demo) ---- */}
          <div style={d(0.2)} className="hero-rise">
            <HeroPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
