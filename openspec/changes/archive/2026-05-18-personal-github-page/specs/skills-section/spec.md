## ADDED Requirements

### Requirement: Skills displayed as grouped badge clusters
The skills section SHALL display skills as pill/badge elements grouped into labeled clusters: **Backend**, **Frontend**, **Trading Systems**, and **AI / Automation**. Groups SHALL be sourced from `src/data/resume.ts`.

#### Scenario: Skills are visually grouped
- **WHEN** a visitor views the skills section
- **THEN** each group label is visible and the badges beneath it belong to that domain

#### Scenario: Badge count is curated, not exhaustive
- **WHEN** a visitor counts the badges
- **THEN** there are no more than 6–8 badges per group (quality over quantity)

### Requirement: Skill badges use teal accent on hover
Each skill badge SHALL have a subtle hover state using Hornets teal (`#00778B`) — either a teal border, background shift, or text color change.

#### Scenario: Hover interaction is visible
- **WHEN** a visitor hovers over a skill badge
- **THEN** a teal accent appears on the badge without animation lag
