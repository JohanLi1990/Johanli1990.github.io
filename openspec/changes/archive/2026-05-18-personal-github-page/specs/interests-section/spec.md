## ADDED Requirements

### Requirement: Interests section features basketball and music subsections
The interests section SHALL contain two named subsections: **Basketball** and **Music**. The Basketball subsection SHALL mention Charlotte Hornets fandom. The Music subsection SHALL mention Animenz (anime piano covers) and Ne-Yo (R&B).

#### Scenario: Basketball subsection is present
- **WHEN** a visitor views the interests section
- **THEN** a "Basketball" subsection names the Charlotte Hornets and expresses genuine fandom in 1–2 sentences

#### Scenario: Music subsection is present
- **WHEN** a visitor views the interests section
- **THEN** a "Music" subsection mentions both Animenz and Ne-Yo with a brief note on why each resonates

### Requirement: Interests section uses a light, friendly visual treatment
The interests section SHALL use small illustrative icons or emoji-free decorative text labels (not generic stock art) alongside each interest block. The section tone SHALL be warm and casual — the most personal section on the page.

#### Scenario: Section feels distinct from professional sections
- **WHEN** a visitor scrolls from Experience to Interests
- **THEN** there is a noticeable tonal and visual shift — lighter, less formal, more personal

### Requirement: No external embeds in v1
The interests section SHALL NOT embed external widgets (e.g., Spotify player, NBA scores widget). Interest in music and basketball SHALL be expressed through text and styling only.

#### Scenario: Page loads without external widget requests
- **WHEN** the page is loaded with network devtools open
- **THEN** no requests are made to spotify.com, nba.com, or any third-party embed domain
