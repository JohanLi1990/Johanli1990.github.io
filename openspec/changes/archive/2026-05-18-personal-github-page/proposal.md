## Why

`johanli1990.github.io` currently has no public-facing site — just a `resume.md` in a bare repo. This is an opportunity to build a personal page that introduces Chenyang as a whole person: engineer, basketball fan, and music lover, not just a CV entry. The target audience is a peer discovering you for the first time.

## What Changes

- Introduce a React + Vite + Tailwind CSS single-page application as the GitHub Pages site
- Build the site from `resume.md` as a data source (curated subset of content)
- Add personal identity sections beyond professional experience: Charlotte Hornets fandom, music taste (Animenz, Ne-Yo)
- Apply IKEA-inspired minimal aesthetic: generous whitespace, clean sans-serif typography, simple grid layouts, Hornets teal/purple as accent colors
- Set up GitHub Actions CI/CD to build and deploy to GitHub Pages on push to `main`

## Capabilities

### New Capabilities

- `site-scaffold`: Vite + React + Tailwind project structure, GitHub Actions deploy workflow
- `hero-section`: Name, tagline, and contact/social links — the first impression
- `about-section`: Short personal bio blending professional identity with personality (basketball, music)
- `skills-section`: Curated skill badges grouped by domain (Backend, Frontend, AI/Automation)
- `experience-section`: Work timeline cards (UBS + Thales), drawn from `resume.md`
- `projects-section`: Featured project cards (Nirvana, OpenClaw) with tech tags
- `interests-section`: Charlotte Hornets fan, Animenz + Ne-Yo music — personal color on the page

### Modified Capabilities

<!-- None — this is a greenfield site -->

## Impact

- New: `package.json`, `vite.config.ts`, `tailwind.config.ts`, `src/` React app
- New: `.github/workflows/deploy.yml` for GitHub Pages deployment
- Existing `resume.md` remains untouched — read as source of truth, not modified
- No backend, no API — fully static output
