"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import { Mark, Star } from "./icons";

/* ---- Wordmark ---------------------------------------------- */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Reputable — home"
    >
      <Mark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[8deg]" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] text-ink">Reputable</span>
        <span className="text-[0.62rem] uppercase tracking-[0.22em] text-faint">
          by Q Software
        </span>
      </span>
    </a>
  );
}

/* ---- Star rating ------------------------------------------- */
export function Stars({
  value = 5,
  size = 14,
  className = "",
}: {
  value?: number;
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-[3px] text-gold ${className}`} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          filled={i < Math.round(value)}
          style={{ width: size, height: size }}
          className={i < Math.round(value) ? "text-gold" : "text-line"}
        />
      ))}
    </span>
  );
}

/* ---- Magnetic button --------------------------------------- */
export function Magnetic({
  children,
  className = "",
  href,
  strength = 0.4,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

/* ---- Section index heading (deliberate brand system) ------- */
export function IndexMark({ children }: { children: ReactNode }) {
  return <span className="index-mark">{children}</span>;
}

/* ---- Pill -------------------------------------------------- */
export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-[color-mix(in_oklch,white_4%,transparent)] px-4 py-2 text-sm text-ink-dim ${className}`}
    >
      {children}
    </span>
  );
}
