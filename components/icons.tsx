import type { SVGProps } from "react";

type I = SVGProps<SVGSVGElement>;

/* ---- Brand mark: the brass star ---------------------------- */
export function Star({ filled = true, ...p }: I & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path
        d="M12 2.6l2.64 6.02 6.54.55-4.97 4.29 1.5 6.4L12 16.9l-5.71 3.35 1.5-6.4-4.97-4.29 6.54-.55L12 2.6z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 1.4}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Logo lockup mark — a quiet graphite chip with a single camel star */
export function Mark(p: I) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden {...p}>
      <rect width="40" height="40" rx="11" fill="#282621" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="10.5" stroke="#000" strokeOpacity="0.06" />
      <path
        d="M20 9l3.3 7.52 8.17.69-6.2 5.36 1.86 7.99L20 26.27l-7.13 4.18 1.87-7.99-6.2-5.36 8.17-.69L20 9z"
        fill="#a6855b"
      />
    </svg>
  );
}

/* ---- Pillar glyphs (custom, line) -------------------------- */
export function ReviewsGlyph(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M4 5.5h16v11H10l-4 3.5v-3.5H4z" />
      <path d="M12 8.2l1.05 2.13 2.35.2-1.78 1.55.55 2.3L12 13.2l-2.17 1.18.55-2.3-1.78-1.55 2.35-.2L12 8.2z"
        fill="currentColor" stroke="none" />
    </svg>
  );
}
export function PlaybookGlyph(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <rect x="4" y="4.5" width="16" height="15" rx="2.5" />
      <path d="M8 9h4M8 12.5h8M8 16h6" />
      <circle cx="16.5" cy="8.6" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function TrendsGlyph(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M4 16.5l4.5-5 3 3 5-6" />
      <path d="M14 8.5h2.5V11" />
      <path d="M4 20h16" opacity={0.4} />
    </svg>
  );
}
export function InsightsGlyph(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l3.5 3.5" />
      <path d="M11 8v3l2 1.4" />
    </svg>
  );
}

/* ---- Utility icons ----------------------------------------- */
export function ArrowUR(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}
export function ArrowR(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}
export function Check(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M5 12.5l4 4 10-10.5" />
    </svg>
  );
}
export function Bell(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M6.5 9.5a5.5 5.5 0 0111 0c0 5 2 6 2 6H4.5s2-1 2-6z" />
      <path d="M10 19a2 2 0 004 0" />
    </svg>
  );
}
export function Sparkle(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12 2.5c.6 4.6 1.9 5.9 6.5 6.5-4.6.6-5.9 1.9-6.5 6.5-.6-4.6-1.9-5.9-6.5-6.5 4.6-.6 5.9-1.9 6.5-6.5z" />
      <path d="M19 14c.3 2.1.9 2.7 3 3-2.1.3-2.7.9-3 3-.3-2.1-.9-2.7-3-3 2.1-.3 2.7-.9 3-3z" opacity={0.7} />
    </svg>
  );
}
export function Bolt(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M13 2L4 13.5h6L9 22l9-12h-6l1-8z" />
    </svg>
  );
}
export function Copy(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <rect x="8" y="8" width="12" height="12" rx="2.5" />
      <path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2" />
    </svg>
  );
}

/* ---- Platform marks (monochrome, currentColor) ------------- */
export function GoogleMark(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12 11v2.6h3.7c-.16 1-1.2 2.94-3.7 2.94a4.04 4.04 0 010-8.08c1.15 0 1.93.49 2.37.91l1.62-1.56C14.95 6.86 13.6 6.3 12 6.3a5.7 5.7 0 100 11.4c3.29 0 5.47-2.31 5.47-5.57 0-.37-.04-.66-.09-.94L12 11z" />
    </svg>
  );
}
export function YelpMark(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M11 4.2c0-.9-1-1.5-1.9-1.1L6 4.4c-.7.3-.9 1.2-.4 1.8l3.6 4.2c.7.8 2 .2 2-.8L11 4.2zM9.6 13.1c-.7-.5-1.7 0-1.7.9l.1 3.5c0 .9 1 1.4 1.8.9l2.4-1.6c.8-.5.7-1.7-.2-2L9.6 13.1zM13.9 12.6c-.9-.2-1.7.7-1.3 1.6l1.4 3.1c.4.8 1.4.9 2 .2l1.7-2c.6-.7.2-1.7-.7-1.9l-3.1-1zM18.3 9.7l-3.2.9c-.9.2-1.1 1.4-.4 2l2.6 2c.7.5 1.7.1 1.9-.7l.6-2.9c.2-.9-.7-1.6-1.5-1.3zM13.7 9.6c.9 0 1.5-1 1-1.8l-2.4-4.2c-.5-.8-1.7-.6-2 .3l-1 4.1c-.2.9.6 1.7 1.5 1.5l2.9-.1.1.2z" />
    </svg>
  );
}
export function TripadvisorMark(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12 7.2c-2.5 0-4.8.6-6.6 1.6H1.6l1.4 1.6a4.1 4.1 0 105.6 6 4.08 4.08 0 003.4 1.8c1.4 0 2.6-.7 3.4-1.8a4.1 4.1 0 105.6-6L22.4 8.8h-3.8C16.8 7.8 14.5 7.2 12 7.2zm-5.3 9.3a2.3 2.3 0 110-4.6 2.3 2.3 0 010 4.6zm10.6 0a2.3 2.3 0 110-4.6 2.3 2.3 0 010 4.6zM6.7 13a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zm10.6 0a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
    </svg>
  );
}
export function UberEatsMark(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth={1.6} />
      <path d="M7.5 10v2.3c0 1.6 1.1 2.6 2.6 2.6 1 0 1.7-.4 2.1-.9v.7h1.1V10h-1.2v2.6c0 1-.6 1.6-1.5 1.6s-1.5-.6-1.5-1.6V10H7.5zM15 12.7c.1.6.6 1 1.3 1 .5 0 .9-.2 1.2-.5l.7.7c-.5.5-1.1.8-2 .8-1.5 0-2.5-1-2.5-2.5s1-2.5 2.4-2.5c1.4 0 2.3 1.1 2.3 2.5v.4l-3.4.1zm0-.8h2.3c-.1-.6-.5-1-1.1-1s-1.1.4-1.2 1z" />
    </svg>
  );
}
export function FacebookMark(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M13.5 21v-7.5h2.5l.4-2.9h-2.9V8.7c0-.84.23-1.41 1.44-1.41h1.54V4.7c-.27-.04-1.18-.12-2.24-.12-2.22 0-3.74 1.36-3.74 3.85v2.15H8v2.9h2.5V21h3z" />
    </svg>
  );
}
export function InstagramMark(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden {...p}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.4" cy="7.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function TiktokMark(p: I) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M16.5 3c.3 2 1.5 3.4 3.5 3.7v2.6c-1.3.1-2.5-.3-3.6-1v5.7c0 3.2-2.3 5.4-5.2 5.4A5 5 0 016 14.4a4.9 4.9 0 015.7-4.9v2.7a2.3 2.3 0 00-2.9 2.2 2.3 2.3 0 004.5.3V3h3.2z" />
    </svg>
  );
}
