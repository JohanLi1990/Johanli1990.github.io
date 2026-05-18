## ADDED Requirements

### Requirement: Vite + React + Tailwind project initialised
The repository SHALL contain a Vite-based React TypeScript project with Tailwind CSS v4 configured as the styling layer. The project root SHALL include `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, and a `src/` directory.

#### Scenario: Fresh install works
- **WHEN** a developer runs `npm install` followed by `npm run dev`
- **THEN** the development server starts without errors and serves the site on localhost

#### Scenario: Production build succeeds
- **WHEN** a developer runs `npm run build`
- **THEN** a static `dist/` directory is produced containing `index.html` and bundled assets

### Requirement: Vite base path set for user GitHub Pages
The Vite config SHALL set `base: '/'` to ensure asset paths resolve correctly on `username.github.io` (user page, not project page).

#### Scenario: Assets resolve on GitHub Pages
- **WHEN** the built site is served from `https://johanli1990.github.io/`
- **THEN** all JS, CSS, and image assets load without 404 errors

### Requirement: GitHub Actions deploy pipeline
The repository SHALL contain a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the Vite app and deploys the `dist/` output to the `gh-pages` branch on every push to `main`.

#### Scenario: Push to main triggers deploy
- **WHEN** a commit is pushed to the `main` branch
- **THEN** the GitHub Actions workflow runs, builds the app, and the updated site is live on `https://johanli1990.github.io/` within 2 minutes

#### Scenario: Build failure blocks deploy
- **WHEN** `npm run build` exits with a non-zero code in CI
- **THEN** the deploy step is skipped and the workflow fails visibly

### Requirement: Resume data module
The project SHALL contain `src/data/resume.ts` that exports typed constants for the curated resume content (name, tagline, skills, experience, projects, education). This file is the site's data layer, derived from `resume.md`.

#### Scenario: Data is typed and importable
- **WHEN** a React component imports from `src/data/resume.ts`
- **THEN** TypeScript provides type checking and autocomplete for all resume fields
