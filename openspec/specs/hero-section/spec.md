## ADDED Requirements

### Requirement: Hero displays name and tagline
The hero section SHALL display the full name "Li Chenyang" as the primary heading and a short personal tagline (one sentence, not a job title) that sets the tone for a peer introduction.

#### Scenario: Name is prominent
- **WHEN** a visitor loads the page
- **THEN** "Li Chenyang" is the largest text element visible without scrolling

#### Scenario: Tagline reflects personality not job title
- **WHEN** a visitor reads the tagline
- **THEN** it reads as a personal introduction, not a recruiter-facing headline (e.g., references interests or personality, not "Software Engineer at UBS")

### Requirement: Hero displays contact and social links
The hero section SHALL display styled links for: email, LinkedIn profile, and GitHub profile, sourced from `resume.md` contact data.

#### Scenario: Links are functional
- **WHEN** a visitor clicks the email link
- **THEN** their mail client opens with the address pre-filled

#### Scenario: Links are visually minimal
- **WHEN** a visitor views the hero section
- **THEN** contact links appear as small icon+text pairs, not large buttons, consistent with IKEA-minimal style

### Requirement: Hero uses Hornets accent color
The hero section SHALL use the Hornets teal (`#00778B`) as the primary accent (e.g., on the name or a decorative element) and near-white (`#FAFAFA`) as the background.

#### Scenario: Teal accent is visible in hero
- **WHEN** a visitor views the hero section
- **THEN** at least one prominent element (name, underline, or decorative rule) renders in teal `#00778B`
