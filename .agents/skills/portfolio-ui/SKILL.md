---
name: portfolio-ui
description: Audit and refine the Moses Onerhime developer/creative-director portfolio while preserving its existing visual identity. Use for homepage polish, project cards, case studies, recruiter/client journeys, accessibility, responsive behavior, performance, SEO, contact flow, and final UI QA.
---

# Moses Portfolio UI Skill

## Objective

Bring the existing portfolio to a highly polished professional standard without rebranding it.

## Mandatory reading

Before substantial UI work:

- `/DESIGN.md`
- `/docs/ui/CURRENT_SITE_BASELINE.md`
- `/docs/ui/PORTFOLIO_POSITIONING.md`
- `/docs/ui/PROJECT_CASE_STUDY_STANDARDS.md`
- `/docs/ui/RECRUITER_CLIENT_JOURNEYS.md`
- `/docs/ui/COMPONENT_INTERACTION_STANDARDS.md`
- `/docs/ui/RESPONSIVE_ACCESSIBILITY.md`
- `/docs/ui/PERFORMANCE_SEO.md`
- `/docs/ui/CONTENT_CREDIBILITY_PRIVACY.md`
- `/docs/ui/ANTI_PATTERNS.md`
- `/docs/ui/DESIGN_QA.md`

Then inspect the actual repository.

## Workflow

### 1. Inventory

Identify:

- routes;
- homepage sections;
- project data source;
- case-study implementation;
- navigation;
- filter implementation;
- image/media stack;
- design tokens;
- motion;
- metadata;
- contact/social destinations.

### 2. Preserve

List the strongest existing design decisions.

Do not change them for novelty.

### 3. Audit

Classify findings:

- P0 — broken/accessibility;
- P1 — scan, credibility, responsive, performance, SEO, contact;
- P2 — consistency/polish.

### 4. Implement

Prioritize:

1. broken/ambiguous interactions;
2. project contribution/evidence clarity;
3. mobile and keyboard behavior;
4. project filtering;
5. case-study UX;
6. accessibility;
7. performance;
8. metadata/shareability;
9. content consistency;
10. subtle visual polish.

### 5. Validate

Apply `/docs/ui/DESIGN_QA.md`.

Run the repository's real build/lint/typecheck/tests.

## Non-negotiables

- Do not rebrand.
- Do not invent portfolio facts.
- Do not remove valid projects purely to simplify the grid.
- Do not add fake metrics.
- Do not add fake testimonials.
- Do not add generic developer-portfolio effects.
- Do not make the site visually generic.
- Do not degrade Core Web Vitals for animation.
- Do not break project URLs.
- Do not commit/push unless explicitly requested.

## Desired result

The site should feel like the same portfolio after a senior frontend engineer, product designer, accessibility reviewer, and portfolio reviewer all completed a detailed refinement pass.
