"use client";

import { useEffect, useState } from "react";
import { ArrowR } from "./icons";

/**
 * A quiet mobile-only sticky CTA. On phones the nav's trial button is tucked
 * inside the burger menu — this keeps the primary action one tap away once the
 * visitor has scrolled past the hero. Hidden ≥768px (the nav CTA is visible).
 */
export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setShow(window.scrollY > 640);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="sticky-cta" data-show={show ? 1 : 0} aria-hidden={!show}>
      <div className="leading-tight">
        <span className="block text-[0.98rem] font-semibold text-ink">
          $32.99
          <span className="font-normal text-muted"> / mo</span>
        </span>
        <span className="block text-[0.72rem] text-faint">14-day free trial</span>
      </div>
      <a
        href="#pricing"
        className="btn btn-primary !px-5 !py-3 text-[0.92rem]"
        tabIndex={show ? 0 : -1}
      >
        Start free trial
        <ArrowR className="h-4 w-4" />
      </a>
    </div>
  );
}
