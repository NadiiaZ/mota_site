# MOTA — Motion Design Studio Website

A complete, responsive single-page portfolio site for MOTA, a motion design
studio. Built with React, TypeScript, Tailwind CSS and Framer Motion.

Brand palette (from the identity reference): background `#111111`, cream
`#F4F1EA`, red `#FF4D3D`, lavender `#B8B2FF`. The logo mark (`src/components/LogoMark.tsx`)
recreates the two-arrow motion motif from the identity sheet.

## Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## Component structure

- `src/App.tsx` — composes the page and provides the shared scroll-to-section handler.
- `src/components/` — one file per UI piece (Header, Hero, Showreel, WorkGrid,
  ProjectCard, Services, ProcessTimeline, FAQ, ContactForm, Footer, etc).
  Each component is self-contained and reads its content from `src/data/`.
- `src/data/` — all editable copy and structured content: navigation, projects,
  services, process steps, team, FAQ, social links and contact-form config.
  Edit these files to change content without touching component code.
- `src/hooks/` — `useActiveSection` (scroll-spy for nav highlighting) and
  `useReducedMotion` (respects `prefers-reduced-motion`).

## Placeholder assets and text to replace before launch

- **Showreel and project videos/posters** — every visual in the site is a
  `MediaPlaceholder` (gradient block + label), not a real video. Replace the
  `MediaPlaceholder` usage in `Showreel.tsx`, `ProjectCard.tsx`,
  `ServiceVisual.tsx`, `Adaptations.tsx`, `ProcessTimeline.tsx` and
  `TeamCard.tsx` with real `<video>`/`<img>` elements once assets exist. Each
  project in `src/data/projects.ts` already has `posterLabel` and an optional
  `videoSrc` field ready for real file paths.
- **Team** (`src/data/team.ts`) — names, roles and bios are placeholders
  marked `[NAME]` / `[Short biography to be added]`. No biography was
  invented; add real copy and swap `portraitLabel` for a real portrait.
- **Social links** (`src/data/social.ts`) — Behance/Vimeo/Instagram/LinkedIn
  URLs are placeholders pointing at each platform's homepage.
- **Favicon and OG image** — `public/favicon.svg` uses the brand mark as a
  placeholder; `index.html` references `/og-image.jpg` (1200×630) which
  doesn't exist yet — add a real export before launch.
- **Canonical URL** — `index.html` and the structured-data block use
  `https://mota.studio/` as a placeholder domain.

## Connecting the contact form

The form in `src/components/ContactForm.tsx` does **not** fake a successful
submission. It reads a single endpoint URL from `src/data/contact.ts`:

```ts
export const ENDPOINT_URL = '' // e.g. 'https://formspree.io/f/your-id'
```

1. Create a free form endpoint at formspree.io (or getform.io, or any
   endpoint that accepts a JSON POST), or point it at your own API route.
2. Paste the URL into `ENDPOINT_URL`.
3. Redeploy.

If `ENDPOINT_URL` is left empty, the form shows an honest "not connected yet"
message with a `mailto:` fallback pre-filled with the visitor's answers,
instead of pretending the message was sent.

## What was checked

- Responsive at 320px, 375px, 768px, 1024px, 1440px and 1920px viewports —
  layouts use fluid grids, `clamp()` type scale and mobile-specific stacking
  (see `Hero`, `WorkGrid`, `ProcessTimeline`, `Services`).
- No hover-only interactions: project previews and showreel controls work on
  tap; all interactive targets are at least 44×44px.
- Keyboard and screen-reader support: skip link, semantic landmarks, visible
  focus rings, accessible mobile menu (focus trap + Escape to close),
  accessible accordion (`aria-expanded`/`aria-controls`), labeled form fields
  with inline error messages.
- `prefers-reduced-motion` is respected: the showreel/service visuals stop
  auto-advancing and Framer Motion transitions collapse to near-instant via
  global CSS overrides.
- Videos are never set to autoplay with sound — the current build uses
  static placeholders; when real `<video>` elements are added, keep them
  `muted`, `playsInline`, with a `poster`.
- Content avoids claiming media buying, campaign management or guaranteed
  results — MOTA is positioned strictly as a creative production studio.

**Not yet done in this environment:** an actual `npm install && npm run build`
was not run here (this sandbox has no package registry access), so please run
a local build before deploying to catch any dependency-version edge cases.
