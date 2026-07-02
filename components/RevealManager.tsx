"use client";

import { useEffect } from "react";

/**
 * Arms the CSS reveal system. The `.js` class is also set synchronously
 * in the document <head> (see layout) to avoid a flash; this re-asserts it
 * and wires the IntersectionObserver that adds `.is-in`.
 */
export default function RevealManager() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
    );

    els.forEach((el) => {
      // already on-screen at load → reveal immediately
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
        el.classList.add("is-in");
      } else {
        io.observe(el);
      }
    });

    // Safety net: if anything is still hidden after load settles, reveal it.
    const safety = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("is-in"));
    }, 2600);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
