# Prompt for Codex — Moses Onerhime Portfolio Professional Refinement

We are doing a **complete professional refinement of my portfolio website**, but this is **NOT a redesign/rebrand from scratch**.

Current live site:

`https://moses-onerhime-portfolio.vercel.app/`

I already like the current design and visual direction.

Treat the existing site as the baseline and preserve what is already strong.

Your job is to inspect the entire repository and improve anything I may not notice that falls below current professional standards or could weaken:

- recruiter/hiring-manager comprehension;
- client confidence;
- project credibility;
- visitor retention;
- project discovery;
- case-study quality;
- conversion/contact;
- accessibility;
- mobile responsiveness;
- interaction quality;
- performance/Core Web Vitals;
- SEO;
- social sharing;
- maintainability;
- visual consistency.

The finished portfolio should still look recognizably like the current Moses Onerhime portfolio—just more resolved and professional.

## BEFORE CHANGING CODE

1. Read the root `AGENTS.md` completely.
2. Read `DESIGN.md`.
3. Read every file under `docs/ui/`.
4. Use `.agents/skills/portfolio-ui/SKILL.md`.
5. Inspect git status/diff before editing.
6. Inspect the complete repository.
7. Determine:
   - framework/version;
   - router;
   - styling system;
   - project-data source;
   - page/route structure;
   - project filtering implementation;
   - project/case-study implementation;
   - image strategy;
   - fonts;
   - animation libraries;
   - metadata;
   - sitemap/robots;
   - contact/social links;
   - build/lint/typecheck/test commands.
8. Inspect the current live design and compare it with the implementation where useful.
9. Identify the strongest existing UI patterns and preserve them.

Do not begin by changing fonts, colors, or general page layout.

## CORE PRINCIPLE

**Refine, do not rebrand.**

Preserve the current:

- visual identity;
- editorial/creative feel;
- palette;
- typography where it works;
- project-led composition;
- strongest layouts;
- tasteful motion;
- personal character.

Do NOT replace it with:

- a generic developer portfolio;
- a generic SaaS site;
- a generic AI landing page;
- a template-style design.

## PHASE 1 — AUDIT THE CURRENT SITE

Use:

`docs/ui/CURRENT_SITE_BASELINE.md`

and:

`docs/ui/DESIGN_QA.md`

Audit all routes and important UI.

Classify findings internally:

- P0 — broken/accessibility/usability;
- P1 — credibility, scanning, responsive, performance, SEO, contact;
- P2 — visual polish/consistency.

Then proceed with implementation.

Do not stop after giving me an audit or plan.

## PHASE 2 — FIRST IMPRESSION / POSITIONING

The first screen should make it immediately clear:

1. my name;
2. my professional identity;
3. what kinds of things I build;
4. where to see my work;
5. how to contact me.

Preserve the current multidisciplinary positioning across:

- full-stack development;
- game development;
- creative direction;
- products;
- games;
- design;
- motion.

Do not turn the hero into a long list of skills.

Audit whether `Runodev` and `Moses Onerhime` are related clearly enough for a new visitor.

Do not rename/remove `Runodev` without an explicit reason and human approval.

## PHASE 3 — PROJECT DISCOVERY

The current public site presents eight selected projects, including:

- Drixil Group;
- Beyond 90;
- Furreal.aex;
- GLAMOURSPHAIR;
- CalVision;
- PPFN Learning System;
- Stock Trading App;
- Dental Clinic App.

Preserve legitimate projects.

Do not delete work just because portfolio advice often recommends only a few case studies.

Instead:

- make the strongest work fastest to scan;
- preserve the current selected-work approach;
- keep breadth visible;
- improve prioritization/hierarchy where genuinely needed.

Audit project cards for:

- project name;
- project type;
- year/status;
- description;
- technologies/capabilities;
- imagery;
- live/source link;
- case-study link;
- hover/focus behavior;
- mobile behavior.

## PHASE 4 — PROJECT FILTERS

The current work filters include:

- All work;
- Web;
- Products;
- Creative.

Keep the current concept if it works.

Ensure:

- semantic controls;
- keyboard operability;
- visible active state;
- programmatic selected state;
- stable focus after filtering;
- sensible mobile behavior;
- no unnecessary layout jump;
- categories accurately match project data.

Do not make project filters the only way a search engine or direct visitor can reach case studies.

## PHASE 5 — CASE STUDIES

This is one of the highest-value improvement areas.

Read:

`docs/ui/PROJECT_CASE_STUDY_STANDARDS.md`

Audit every existing case study.

Where verified content exists, make each one explain:

- what the project is;
- the problem/context;
- my role;
- my personal contribution;
- constraints;
- meaningful decisions/process;
- implementation;
- current status/outcome;
- live/source links;
- reflection/next steps when appropriate.

Do NOT invent:

- project metrics;
- users;
- business impact;
- team structure;
- role;
- client names;
- technical decisions;
- launch results.

For internship/team work, make my individual contribution clear without implying sole ownership.

For creative work, use a creative-work case-study format where appropriate.

For Beyond 90/game work, use game/product evidence rather than forcing it into a website case-study template.

## PHASE 6 — LINK/CTA CLARITY

Audit repeated `Case study` links.

The visible label may remain `Case study`, but each destination must have a distinguishable accessible name where required, e.g.:

`View Beyond 90 case study`

Audit all:

- live links;
- GitHub/source links;
- social links;
- contact links;
- project navigation.

Fix dead or ambiguous interactions.

Do not invent a URL when one does not exist.

## PHASE 7 — CONTENT CONSISTENCY / CREDIBILITY

Read:

`docs/ui/CONTENT_CREDIBILITY_PRIVACY.md`

Verify consistency across:

- selected-work count;
- live-launch count;
- discipline count;
- project status;
- years;
- technologies;
- category/filter membership;
- contact labels;
- external destinations.

Where counts can be derived from project data, prefer one source of truth.

Do not silently “correct” a contact handle merely because two handles look similar.

Flag uncertain data for me.

Do not add fake testimonials, employers, metrics, awards, or client logos.

## PHASE 8 — ABOUT / CAPABILITIES

Preserve the existing multi-disciplinary story.

Improve only where needed for:

- clarity;
- scanning;
- evidence;
- redundancy;
- hierarchy.

Capabilities should map naturally to actual project evidence.

Do not add:

- skill bars;
- percentage proficiency;
- giant technology-logo clouds;
- meaningless competency meters.

## PHASE 9 — CONTACT EXPERIENCE

The current site already ends with a direct collaboration/contact section.

Keep the directness.

Audit:

- primary contact CTA;
- email;
- GitHub;
- LinkedIn;
- WhatsApp;
- Telegram;
- TikTok/creative link;
- any Discord representation;
- mobile target sizes;
- external-link behavior;
- accessible names.

Do not expose additional personal details.

If existing public direct contact information has privacy/spam trade-offs, report them instead of silently removing it.

## PHASE 10 — RESPONSIVE DESIGN

Read:

`docs/ui/RESPONSIVE_ACCESSIBILITY.md`

Test at minimum:

- 360 px;
- 390 px;
- 430 px;
- 768 px;
- 1024 px;
- 1280 px;
- 1440 px;
- wide desktop.

Check especially:

- hero height;
- display heading wrapping;
- hero stats;
- work-filter row;
- project-grid breakpoints;
- technology/tag wrapping;
- project image crops;
- navigation;
- contact links;
- footer;
- case-study media.

There must be no accidental horizontal scrolling.

Mobile should feel designed, not merely stacked.

## PHASE 11 — ACCESSIBILITY

Target WCAG 2.2 AA.

Implement/fix as required:

- skip link;
- semantic landmarks;
- logical heading hierarchy;
- keyboard navigation;
- visible `:focus-visible`;
- focus not obscured by sticky content;
- accessible project filters;
- accessible menus/dialogs/lightboxes;
- accessible link names;
- appropriate image alt text;
- sufficient contrast;
- non-color-only state communication;
- reduced-motion support;
- useful target sizes.

Do not disable browser zoom.

Do not hide essential project content on hover.

## PHASE 12 — MOTION

Preserve tasteful existing motion.

Audit whether motion:

- delays reading;
- delays project discovery;
- causes jank;
- causes layout shift;
- hides content;
- harms mobile;
- ignores reduced-motion preference.

Remove/simplify effects only when they hurt the experience.

Avoid:

- scroll hijacking;
- custom cursor gimmicks;
- long page transitions;
- animation on every text element;
- `transition: all`.

Prefer transform/opacity for motion.

## PHASE 13 — PERFORMANCE

Read:

`docs/ui/PERFORMANCE_SEO.md`

Target good field Core Web Vitals:

- LCP <= 2.5 s;
- INP <= 200 ms;
- CLS <= 0.1.

The public site appears to use Next.js image infrastructure; verify the repository before applying framework-specific fixes.

Audit:

- actual LCP element;
- hero loading;
- project image sizing;
- `next/image` sizes if applicable;
- image priority;
- below-fold lazy loading;
- image formats;
- font loading;
- animation bundle weight;
- client component scope;
- third-party scripts;
- layout shifts;
- filter interaction responsiveness.

Do not add a heavy library for minor polish.

## PHASE 14 — SEO / SEARCH / SOCIAL SHARING

Audit:

- homepage title;
- homepage description;
- case-study titles;
- case-study descriptions;
- canonical URLs;
- Open Graph;
- social preview images;
- favicon/site identity;
- sitemap;
- robots;
- internal links;
- mobile content parity.

For routed public case studies, create project-specific metadata when compatible with the existing architecture.

Where the framework supports it cleanly, use verified `Person`, `WebSite`, or project structured data only when the data is accurate.

Do not add personal/organizational facts to JSON-LD that are not already verified and intentionally public.

## PHASE 15 — TECHNICAL/UI CLEANUP

Consolidate accidental inconsistencies in:

- spacing;
- type scales;
- buttons;
- links;
- tags;
- project metadata;
- image treatment;
- radii;
- borders;
- shadows;
- animation timing;
- container widths.

Do not over-componentize.

Do not introduce a new UI framework unless there is a genuine repository-specific reason.

## FINAL QA

Apply all relevant checks from:

`docs/ui/DESIGN_QA.md`

Then run the repository's actual available validation:

- production build;
- lint;
- TypeScript/typecheck;
- tests;
- any existing accessibility/performance tests.

Fix problems introduced by your work.

Review git diff carefully.

Do not commit or push unless I explicitly ask you to.

## FINAL REPORT

When complete, tell me:

1. the important issues you found;
2. what you changed;
3. what you deliberately preserved because it was already strong;
4. homepage/positioning improvements;
5. project-discovery improvements;
6. case-study improvements;
7. accessibility improvements;
8. responsive/mobile improvements;
9. performance/Core Web Vitals improvements;
10. SEO/social-sharing improvements;
11. code/design-system cleanup;
12. validation commands and results;
13. any questionable content/contact/status data that needs my confirmation;
14. any improvements you intentionally did NOT make because they would have become an unnecessary redesign.

This is an implementation task.

Do not stop after the plan/audit unless you are genuinely blocked.
