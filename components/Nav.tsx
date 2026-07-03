"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./ui";
import { ArrowR } from "./icons";
import { SIGNUP_URL, LOGIN_URL } from "./cta";

const LINKS = [
  { label: "Playbook", href: "#playbook" },
  { label: "Features", href: "#products" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    // Section offsets are cached and only re-measured when the document
    // grows/shrinks — no layout reads in the steady-state scroll frame.
    let offsets: { href: string; top: number }[] = [];
    let measuredHeight = 0;

    const measure = () => {
      measuredHeight = document.documentElement.scrollHeight;
      offsets = LINKS.flatMap((l) => {
        const el = document.querySelector<HTMLElement>(l.href);
        return el
          ? [{ href: l.href, top: el.getBoundingClientRect().top + window.scrollY }]
          : [];
      });
    };

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const doc = document.documentElement.scrollHeight;
      if (doc !== measuredHeight) measure();

      // scroll progress: direct DOM write, never a React render
      const max = doc - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }

      // these change rarely; React bails out when the value is unchanged
      setScrolled(y > 24);
      const line = y + 140;
      let current = "";
      for (const o of offsets) if (o.top <= line) current = o.href;
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-line-soft bg-[color-mix(in_oklch,var(--bg-deep)_72%,transparent)] backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="container-x flex h-[72px] items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <a
              href="/"
              aria-label="Back to Q Software — choose a product"
              className="group/qb inline-flex items-center gap-1.5 rounded-full border border-line bg-[color-mix(in_oklch,white_4%,transparent)] px-2.5 py-1.5 text-faint backdrop-blur-sm transition-colors hover:border-[color-mix(in_oklch,var(--gold)_45%,var(--line))] hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
                <path
                  d="M14.5 6.5 9 12l5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover/qb:-translate-x-0.5"
                />
              </svg>
              <span className="hidden text-[0.7rem] font-semibold uppercase tracking-[0.18em] sm:inline">
                Q&nbsp;Software
              </span>
            </a>
            <span aria-hidden className="hidden h-5 w-px bg-line sm:block" />
            <Logo />
          </div>

          <div className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => {
              const on = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={on ? "true" : undefined}
                  className={`group relative text-[0.95rem] transition-colors ${
                    on ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                      on ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={LOGIN_URL}
              className="text-[0.95rem] text-muted transition-colors hover:text-ink"
            >
              Sign in
            </a>
            <a href={SIGNUP_URL} className="btn btn-primary !py-2.5 !px-5 text-[0.92rem]">
              Start free trial
              <ArrowR className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-[color-mix(in_oklch,white_4%,transparent)] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>

        {/* scroll progress */}
        <div
          ref={progressRef}
          aria-hidden
          className={`h-px origin-left bg-gradient-to-r from-gold-deep to-gold transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[color-mix(in_oklch,var(--bg-deep)_94%,transparent)] backdrop-blur-xl md:hidden"
          >
            <div className="container-x flex flex-col gap-2 pt-28">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-line-soft py-5 font-display text-3xl text-ink"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={SIGNUP_URL}
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-6 w-full !py-4"
              >
                Start free trial
                <ArrowR className="h-4 w-4" />
              </a>
              <p className="mt-3 text-center text-[0.82rem] text-faint">
                14-day free trial · no card charged today
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
