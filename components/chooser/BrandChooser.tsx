"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useReducedMotion } from "motion/react";

type Brand = "catch" | "reputable";

const COPY = {
  catch: {
    kicker: "Receptionist Chatbot",
    sub: "Answers every call, books every appointment, and texts back the ones you miss — in four seconds.",
    enter: "Enter Catch",
    aria: "Enter Catch — the receptionist chatbot that never misses a call",
  },
  reputable: {
    kicker: "Reputation Management",
    sub: "Reviews, social, trends and competitor intelligence in one place — reply on-brand and grow.",
    enter: "Enter Reputable",
    aria: "Enter Reputable — all-in-one reputation management",
  },
} as const;

export default function BrandChooser() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Brand | null>(null);
  const [leaving, setLeaving] = useState<Brand | null>(null);
  const [intro, setIntro] = useState<"draw" | "split" | null>(null);
  const [hasCursor, setHasCursor] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  // One rAF loop drives both the cursor and the scene parallax. Targets are
  // updated on pointermove; the loop eases the rendered values toward them.
  // A light per-frame lerp (not a spring, not a CSS transition) gives a silky
  // follow with imperceptible lag and no double-smoothing.
  const motionState = useRef({
    tx: -100, ty: -100, cxv: -100, cyv: -100, // cursor: target / current
    mxt: 0, myt: 0, mxv: 0, myv: 0,           // parallax: target / current
  });

  // Warm both destinations so the hand-off is instant.
  useEffect(() => {
    router.prefetch("/reputable");
  }, [router]);

  // Deep-link a pre-leaned side, e.g. /?focus=catch
  useEffect(() => {
    const f = new URLSearchParams(window.location.search).get("focus");
    if (f === "catch" || f === "reputable") setActive(f);
  }, []);

  useEffect(() => {
    setHasCursor(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  // A quick one-time intro
  useEffect(() => {
    if (reduce) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem("q-intro-seen") === "1";
    } catch {}
    if (seen) return;
    setIntro("draw");
    const t1 = window.setTimeout(() => setIntro("split"), 520);
    const t2 = window.setTimeout(() => {
      setIntro(null);
      try {
        sessionStorage.setItem("q-intro-seen", "1");
      } catch {}
    }, 1040);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [reduce]);

  // Pointer → cursor + scene parallax, eased in one rAF loop (GPU transforms
  // only — no layout, no canvas). The loop sleeps once everything settles and
  // wakes on the next pointer move, so it never spins while idle.
  useEffect(() => {
    if (!hasCursor) return;
    const s = motionState.current;
    // No easing under reduced motion: the cursor simply pins to the pointer.
    const k = reduce ? 1 : 0.42;
    let awake = false;

    const tick = () => {
      s.cxv += (s.tx - s.cxv) * k;
      s.cyv += (s.ty - s.cyv) * k;
      s.mxv += (s.mxt - s.mxv) * k;
      s.myv += (s.myt - s.myv) * k;

      const cur = cursorRef.current;
      if (cur) cur.style.transform = `translate3d(${s.cxv.toFixed(2)}px, ${s.cyv.toFixed(2)}px, 0)`;
      const stage = stageRef.current;
      if (stage) {
        stage.style.setProperty("--mx", `${s.mxv.toFixed(2)}px`);
        stage.style.setProperty("--my", `${s.myv.toFixed(2)}px`);
      }

      // keep ticking until both the cursor and the parallax have caught up
      const dc = (s.tx - s.cxv) ** 2 + (s.ty - s.cyv) ** 2;
      const dm = (s.mxt - s.mxv) ** 2 + (s.myt - s.myv) ** 2;
      if (dc > 0.04 || dm > 0.01) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        awake = false;
      }
    };

    const onMove = (e: PointerEvent) => {
      s.tx = e.clientX;
      s.ty = e.clientY;
      if (!reduce) {
        s.mxt = -(e.clientX / window.innerWidth - 0.5) * 22;
        s.myt = -(e.clientY / window.innerHeight - 0.5) * 14;
      }
      if (!awake) {
        awake = true;
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [hasCursor, reduce]);

  const choose = useCallback(
    (brand: Brand) => {
      if (leaving) return;
      setActive(brand);
      setLeaving(brand);
      const go = () =>
        brand === "catch"
          ? window.location.assign("/catch")
          : router.push("/reputable");
      if (reduce) {
        go();
        return;
      }
      window.setTimeout(go, 430);
    },
    [leaving, reduce, router],
  );

  const lean = (b: Brand) => !leaving && setActive(b);
  const unlean = () => !leaving && setActive(null);

  return (
    <div className={`entrance${hasCursor ? " has-cursor" : ""}`} data-leaving={leaving ?? undefined}>
      <div
        ref={stageRef}
        className="entrance__stage"
        data-active={leaving ? leaving : (active ?? "none")}
      >
        {/* ---------------------------------------------------- Catch (left) */}
        <button
          type="button"
          className={`panel panel--catch${active === "catch" ? " is-active" : ""}`}
          aria-label={COPY.catch.aria}
          onPointerEnter={() => lean("catch")}
          onFocus={() => lean("catch")}
          onPointerLeave={unlean}
          onBlur={unlean}
          onClick={() => choose("catch")}
        >
          <span className="panel__scene" aria-hidden>
            <span className="scene scene-catch">
              <span className="scene-catch__glow" />
            </span>
          </span>
          <span className="panel__veil" aria-hidden />

          <span className="panel__content">
            <span className="panel__kicker">{COPY.catch.kicker}</span>
            <span className="panel__wordmark">Catch</span>
            <span className="panel__sub">{COPY.catch.sub}</span>
            <span className="panel__enter">
              {COPY.catch.enter}
              <Arrow />
            </span>
          </span>
        </button>

        {/* ------------------------------------------------ Reputable (right) */}
        <button
          type="button"
          className={`panel panel--reputable${active === "reputable" ? " is-active" : ""}`}
          aria-label={COPY.reputable.aria}
          onPointerEnter={() => lean("reputable")}
          onFocus={() => lean("reputable")}
          onPointerLeave={unlean}
          onBlur={unlean}
          onClick={() => choose("reputable")}
        >
          <span className="panel__scene" aria-hidden>
            <span className="scene scene-rep">
              <span className="scene-rep__glow" />
            </span>
          </span>
          <span className="panel__veil" aria-hidden />

          <span className="panel__content">
            <span className="panel__kicker">{COPY.reputable.kicker}</span>
            <span className="panel__wordmark font-display">Reputable</span>
            <span className="panel__sub">{COPY.reputable.sub}</span>
            <span className="panel__enter">
              {COPY.reputable.enter}
              <Arrow />
            </span>
          </span>
        </button>

        <div className="entrance__divider" aria-hidden />
      </div>

      {/* --------------------------------------------------- Umbrella header */}
      <header className="entrance__top">
        <span className="entrance__q">
          <QMark />
        </span>
        <span className="entrance__wordmark">Q&nbsp;Software</span>
        <span className="entrance__dot" aria-hidden />
        <span className="entrance__hint">Choose your tool</span>
      </header>

      <div className="entrance__curtain" aria-hidden />

      {/* ----------------------------------------------------- Intro overlay */}
      {intro && (
        <div className="q-intro" data-phase={intro} aria-hidden>
          <div className="q-intro__half q-intro__half--l" />
          <div className="q-intro__half q-intro__half--r" />
          <div className="q-intro__center">
            <div className="q-intro__lockup">
              <svg className="q-intro__mark" viewBox="0 0 28 28" fill="none">
                <circle cx="13" cy="14" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M16 17l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="q-intro__word">Q&nbsp;Software</span>
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------- Magnetic cursor */}
      {hasCursor && (
        <div
          ref={cursorRef}
          className="q-cursor"
          data-grow={active && !leaving ? 1 : 0}
          data-hidden={leaving ? 1 : 0}
          aria-hidden
        >
          <span className="q-cursor__ring" />
        </div>
      )}
    </div>
  );
}

/* ----------------------------------------------------------- Marks */
function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden>
      <path
        d="M5 12h13M13 6.5 18.5 12 13 17.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QMark() {
  return (
    <svg viewBox="0 0 28 28" width="18" height="18" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
