## 1. Project Scaffold

- [x] 1.1 Run `npm create vite@latest . -- --template react-ts` in the repo root to initialise the Vite + React + TypeScript project
- [x] 1.2 Install Tailwind CSS v4 and its Vite plugin (`@tailwindcss/vite`)
- [x] 1.3 Configure `vite.config.ts`: add Tailwind plugin and set `base: '/'`
- [x] 1.4 Configure `tailwind.config.ts` with custom theme colors — Hornets teal `#00778B`, Hornets purple `#1D1160`, base white `#FAFAFA`, near-black `#1A1A1A`
- [x] 1.5 Replace default `src/index.css` with Tailwind directives (`@import "tailwindcss"`)
- [x] 1.6 Verify dev server starts cleanly with `npm run dev` and production build succeeds with `npm run build`

## 2. Resume Data Module

- [x] 2.1 Create `src/data/resume.ts` with typed exports: `profile` (name, tagline, contact), `skills` (grouped by domain), `experience` (curated 2–3 bullets per role), `projects`, `education`
- [x] 2.2 Populate `resume.ts` with curated content derived from `resume.md` — max 3 bullets per experience role, max 7 skills per group

## 3. App Shell & Navigation

- [x] 3.1 Replace `src/App.tsx` with the page shell: fixed slim top nav with smooth-scroll links to each section
- [x] 3.2 Style nav with white background, teal active-link accent, minimal border-bottom separator

## 4. Hero Section

- [x] 4.1 Create `src/components/Hero.tsx` — renders name ("Li Chenyang") as primary `h1` with teal accent, tagline as subtitle
- [x] 4.2 Add contact links (email, LinkedIn, GitHub) as icon+text pairs using small inline SVG icons or a minimal icon library (e.g., `lucide-react`)
- [x] 4.3 Apply near-white `#FAFAFA` section background, generous vertical padding

## 5. About Section

- [x] 5.1 Create `src/components/About.tsx` — section heading in Hornets purple, personal bio paragraph in first person (engineer + Hornets fan + Animenz/Ne-Yo)
- [x] 5.2 Write the about text directly in the component (not from `resume.ts` — this is personal prose, not structured data)

## 6. Skills Section

- [x] 6.1 Create `src/components/Skills.tsx` — reads skill groups from `resume.ts`, renders group label + badge pills
- [x] 6.2 Style badges: rounded pill, light grey background, teal border+text on hover (`hover:border-teal hover:text-teal`)

## 7. Experience Section

- [x] 7.1 Create `src/components/Experience.tsx` — reads experience array from `resume.ts`, renders vertical timeline
- [x] 7.2 Implement timeline layout: left teal vertical border/line, card per role with company, title, date range, domain, and curated bullets
- [x] 7.3 Style cards: white background, subtle shadow, clean sans-serif

## 8. Projects Section

- [x] 8.1 Create `src/components/Projects.tsx` — reads projects from `resume.ts`, renders two cards
- [x] 8.2 Style cards: thin border, white background, tech tag pills beneath description
- [x] 8.3 Add teal border-color hover state to cards (`hover:border-teal`)

## 9. Interests Section

- [x] 9.1 Create `src/components/Interests.tsx` — two subsections: Basketball (Charlotte Hornets) and Music (Animenz + Ne-Yo)
- [x] 9.2 Write content inline in the component as personal prose — warm, casual tone
- [x] 9.3 Style with a slightly warmer background tint (e.g., `#F5F5F0`) to visually distinguish from professional sections

## 10. Page Assembly & Polish

- [x] 10.1 Import and compose all section components in `src/App.tsx` in order: Hero → About → Skills → Experience → Projects → Interests
- [x] 10.2 Add consistent section spacing (generous `py-20` or equivalent between sections)
- [x] 10.3 Choose and apply a clean sans-serif Google Font (e.g., Inter or DM Sans) via CSS import
- [x] 10.4 Verify all smooth-scroll nav links work correctly
- [x] 10.5 Basic responsiveness check: page should be readable on a narrower viewport (not full mobile optimization, but no horizontal overflow)

## 11. GitHub Actions Deploy

- [x] 11.1 Create `.github/workflows/deploy.yml` — triggers on push to `main`, runs `npm ci && npm run build`, deploys `dist/` to `gh-pages` branch using `peaceiris/actions-gh-pages`
- [ ] 11.2 Enable GitHub Pages in repo settings: source = `gh-pages` branch, root `/`
- [ ] 11.3 Push to `main` and verify the live site at `https://johanli1990.github.io/` loads correctly
