## ADDED Requirements

### Requirement: Projects displayed as cards with tech tags
The projects section SHALL display featured projects (Nirvana/Alpaca Trading Lab, OpenClaw) as cards. Each card SHALL include: project name, one-sentence description, and technology tags. Content sourced from `src/data/resume.ts`.

#### Scenario: Two project cards are shown
- **WHEN** a visitor views the projects section
- **THEN** two cards render: "Nirvana / Alpaca Trading Lab" and "OpenClaw / Agent Automation"

#### Scenario: Tech tags are visible on each card
- **WHEN** a visitor views a project card
- **THEN** small tech tag pills (e.g., "Python", "LangGraph") appear beneath the description

### Requirement: Project cards use a minimal bordered style
Each project card SHALL use a clean bordered card style (thin border, white background) with teal accent on hover (border color shift to `#00778B`), consistent with the IKEA-minimal aesthetic.

#### Scenario: Hover border accent is visible
- **WHEN** a visitor hovers a project card
- **THEN** the card border changes to teal `#00778B`
