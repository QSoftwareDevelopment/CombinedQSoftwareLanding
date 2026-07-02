import type { ElementType, ReactNode, CSSProperties } from "react";

/**
 * CSS-driven reveal. Renders visible by default; the `.reveal` class is
 * armed only when JS is present (see RevealManager + the head script),
 * then animated in by IntersectionObserver. Headless / no-JS safe.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;
}) {
  return (
    <Tag
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </Tag>
  );
}
