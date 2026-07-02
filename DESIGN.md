# Design

## Theme
"Stone, Ink & Camel." Quiet luxury for a reputation brand: a calm, light, architectural surface — a cool neutral *stone* (limestone/fine-paper, deliberately **not** cream) under deep graphite ink, near-monochrome, with a single muted **camel** warmth used only where a reputation quietly shines (the star, one emphasised word, a hairline accent). Generous space, soft neutral shadows instead of colour glows. The restraint *is* the statement. Strategy: **Restrained** — tinted neutral + one accent, carried by typography and space, not by colour.

## Color (OKLCH)
- `--bg` `oklch(0.955 0.004 95)` — architectural stone (cool-neutral light; not cream).
- `--bg-deep` `oklch(0.928 0.005 95)` — recessed stone / faint edge deepening.
- `--surface` `oklch(0.992 0.0015 95)`, `--surface-2` `oklch(0.972 0.003 95)` — fine-paper cards on stone.
- `--line` / `--line-soft` — soft neutral hairlines.
- `--ink` `oklch(0.255 0.006 75)` — graphite (≥ 12:1 on stone).
- `--ink-dim` / `--muted` `oklch(0.505 …)` / `--faint` `oklch(0.565 …)` — calm grey ramp, all AA on stone.
- `--primary` `oklch(0.255 0.008 75)` — graphite ink. The quiet CTA is a near-black button; emphasis is by weight, not colour.
- `--gold` (camel) `oklch(0.565 0.066 66)` (+ `-deep` / `-soft`) — the single warm accent: stars, one emphasised word, a hairline. Used sparingly.
- `--pos` muted sage — only for rating/up signals in the product viz, never as brand colour.

## Typography
- **Display:** EB Garamond (Google) — a calm old-style heritage serif. Trustworthy, booklike, understated; replaces the former theatrical Didone. `font-weight: 500`, near-normal tracking, `line-height: 1.04`. Used large for hero + section headlines only.
- **Body / UI:** Schibsted Grotesk (Google, variable) — crisp neutral grotesque for everything else.
- Pairing axis: heritage serif display + neutral grotesque body (serif ↔ sans). No italics, no drop-caps, no ruled-column metadata — this is *heritage maison*, deliberately not editorial-magazine.
- Scale: fluid `clamp()`, hero ≤ ~5.4rem; generous space does the shouting that size doesn’t.

## Motion
- Lenis smooth scroll. Reveals via Motion: content visible by default, JS enhances (translate/opacity/blur), staggered per-list.
- Ambient lighting is a barely-there warm camel wash (≤ 8%), not a glow. No colour glows; elevation is soft neutral shadow only.
- Curves: ease-out quint/expo. No bounce. Full `prefers-reduced-motion` fallback (crossfade/instant).

## Components / Layout
- Container max 1200px, fluid side padding `clamp(1.25rem, 5vw, 2.5rem)`.
- `.btn-primary` graphite/ink button (soft neutral elevation), `.btn-ghost` hairline-only. Pill radius.
- `.card` fine-paper surface on stone: hairline + a whisper of soft shadow. No nested cards.
- `.index-mark` a deliberate, named camel-hairline index system — not a per-section eyebrow.
- Logo mark: a quiet graphite chip with a single camel star.
- Very fine paper grain site-wide (≈ 2%, multiply); the former film-grain/vignette theatrics are gone.

## Accessibility & Inclusion
Target WCAG 2.1 AA. Body text ≥ 4.5:1 graphite-on-stone; large display far exceeds it. Camel accents kept dark enough (`--gold` / `--gold-deep`) to pass AA at small sizes. Full `prefers-reduced-motion` alternatives for every animation. Keyboard-navigable nav and CTAs with a visible focus ring. Motion never gates content visibility.
