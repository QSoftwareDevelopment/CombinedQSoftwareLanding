# Q Software — Combined Landing Page

One front door for two products. A cinematic split-screen **entrance** lets a
visitor choose between Q Software's two tools, each of which keeps its own,
fully distinct brand world:

- **Catch** — the AI receptionist that answers every call, books every
  appointment, and texts back the ones you miss in four seconds.
  _(emerald, light-mode-first, Bricolage + Hanken Grotesk)_
- **Reputable** — the growth engine for local & hospitality reputation:
  reviews, social, trends and competitor intelligence in one place.
  _(velvet & brass, drenched dark, Gloock + Schibsted Grotesk)_

## Routes

| Path         | What it is                                                              |
| ------------ | ----------------------------------------------------------------------- |
| `/`          | The **entrance** — a premium split stage that leans toward whichever brand you reach for, with a cinematic load and a brand-coloured exit hand-off. |
| `/reputable` | The full Reputable landing (Next.js / Motion / Lenis).                  |
| `/catch`     | The full Catch landing — a self-contained static page under `public/catch`, served via a rewrite. |

Every product page carries a consistent **"Q Software" back breadcrumb** in its
nav that returns to the entrance.

## How it fits together

- `app/page.tsx` → `components/chooser/BrandChooser.tsx` — the entrance.
- `app/reputable/*` — the Reputable app, scoped to a `.theme-reputable` wrapper
  so its velvet world never bleeds onto the entrance.
- `public/catch/index.html` — the Catch page, kept verbatim for full fidelity;
  the entrance hand-off, asset paths, and back breadcrumb are wired in.
- Entrance design system lives at the bottom of `app/globals.css`
  (`.entrance`, `.panel`, the crafted `.scene-*` brand scenes, the exit curtain).

All motion has a `prefers-reduced-motion` fallback.

## Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
