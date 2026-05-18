## Context

`johanli1990.github.io` is a GitHub Pages repository currently containing only `resume.md`. There is no site, no build system, and no deployment pipeline. The goal is a minimal, personal single-page site using React + Vite + Tailwind CSS, deployed automatically via GitHub Actions.

Content is derived from `resume.md` (curated, not verbatim) plus personal interests (Charlotte Hornets, Animenz, Ne-Yo). Aesthetic direction: IKEA-minimal — generous whitespace, clean sans-serif, simple grids, Hornets teal/purple as the accent palette.

## Goals / Non-Goals

**Goals:**
- Working React + Tailwind SPA deployed to GitHub Pages
- Sections: Hero, About, Skills, Experience, Projects, Interests
- Hornets-inspired accent palette (teal `#00778B`, purple `1D1160`) on a clean white/near-white base
- Content readable from `resume.md` (data stays in one place)
- GitHub Actions auto-deploy on push to `main`
- Fully static — no server, no API, no database

**Non-Goals:**
- Dark mode (IKEA minimal = light and clean)
- CMS or dynamic content
- Blog or multi-page routing
- Mobile-first responsive design in v1 (desktop-first is acceptable)
- PDF resume generation from the site

## Decisions

### D1: Vite + React over Next.js or Astro

**Decision:** Use Vite + React.

**Rationale:** Next.js adds SSR/SSG complexity unnecessary for a single static page. Astro is excellent but unfamiliar overhead. Vite is fast, minimal config, and outputs a static build directory. Chenyang already knows React — the toolchain matches his skill set and the scope.

**Alternative considered:** Astro — better markdown support, but adds a new framework for no compelling gain here. Rejected.

### D2: Tailwind CSS v4 utility-first styling

**Decision:** Use Tailwind CSS (v4 with Vite plugin).

**Rationale:** Tailwind pairs naturally with component-based React. No stylesheet maintenance, consistent spacing/typography system, and excellent whitespace control for the IKEA-minimal aesthetic.

### D3: `resume.md` parsed at build time, not runtime

**Decision:** Resume data is imported as a TypeScript module (structured constants), not parsed from markdown at runtime.

**Rationale:** Runtime markdown parsing (e.g., `react-markdown`) adds bundle weight and complicates selective display. Since content is curated and static, encoding it as typed TypeScript data (`src/data/resume.ts`) is simpler, faster, and gives full layout control per section. `resume.md` remains the human-readable canonical source; the TS file is the site's data layer.

**Trade-off:** Two places to update when resume changes. Acceptable: the site is intentionally curated, not a 1:1 mirror.

### D4: Color palette — Charlotte Hornets accent

**Decision:** Primary accent = Hornets teal (`#00778B`); secondary accent = Hornets purple (`#1D1160`); base = white/near-white (`#FAFAFA`); text = near-black (`#1A1A1A`).

**Rationale:** Minimal design needs a strong accent to have personality. Hornets colors are meaningful (personal identity) and happen to be a high-contrast, professional-looking pair on white. The teal reads as a tech accent; the purple grounds headings.

### D5: GitHub Actions deploy to `gh-pages` branch

**Decision:** Use the `peaceiris/actions-gh-pages` action (or equivalent) to push the Vite `dist/` output to the `gh-pages` branch.

**Rationale:** Standard GitHub Pages pattern for framework builds. Keeps `main` branch clean (source only), `gh-pages` branch serves the built site. Simple to set up, well-documented.

### D6: Page layout — single scroll, section-based

**Decision:** Single `index.html` page, sections stacked vertically, smooth-scroll navigation in a fixed slim header.

**Rationale:** Matches the "introducing yourself to a new friend" goal — natural narrative flow top to bottom. No routing complexity. IKEA-minimal aesthetic is well-served by generous vertical spacing between sections.

## Risks / Trade-offs

- **Two data sources for resume content** → Keep `src/data/resume.ts` intentionally curated and short; comment it with a pointer back to `resume.md` so it's obvious which is canonical.
- **Hornets colors as accent may date the page** → Low risk; colors are the user's identity, not a trend. Easy to swap out one variable later.
- **GitHub Actions deploy needs `GITHUB_TOKEN` permissions** → Standard for public repos; no custom secret needed with modern GH Actions runner. Document in tasks.
- **Vite base path must be set for GitHub Pages** → `vite.config.ts` must set `base: '/'` for a user page (`username.github.io`). Distinct from project pages (which use `/repo-name/`). This is a common gotcha — flag in tasks.

## Open Questions

- Should the Interests section embed an external Spotify/YouTube link for Animenz/Ne-Yo, or just name-drop? (Linking out is richer but adds external dependency.) → Default to name-drop + brief description for v1; easy to enhance later.
- Should a Charlotte Hornets game schedule widget or recent results be shown? → Out of scope for v1; pure personal flavor text is sufficient.
