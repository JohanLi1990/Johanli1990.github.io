## ADDED Requirements

### Requirement: Experience displayed as vertical timeline cards
The experience section SHALL display work history as a vertical timeline with one card per role. Each card SHALL include: company name, role title, date range, domain, and 2–3 bullet highlights (not the full resume list). Content sourced from `src/data/resume.ts`.

#### Scenario: Two roles are shown (UBS and Thales)
- **WHEN** a visitor views the experience section
- **THEN** exactly two cards are rendered: UBS (current) and Thales (previous), in reverse chronological order

#### Scenario: Bullet highlights are curated
- **WHEN** a visitor reads a card
- **THEN** it contains 2–3 concise bullets, not the full 7+ line list from `resume.md`

### Requirement: Timeline uses a vertical line accent
The timeline layout SHALL include a vertical line or left-border accent in Hornets teal running alongside the cards, giving a clear sense of chronological flow.

#### Scenario: Vertical accent is visible
- **WHEN** a visitor views the experience section
- **THEN** a continuous vertical teal line or left-border connects the timeline entries
