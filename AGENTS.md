# Portfolio UI/UX Agent Addendum

> Merge these instructions into the repository's existing root `AGENTS.md`.
> Preserve existing technical/project-specific instructions when merging.

## Scope

These rules apply to:

- homepage;
- project/work sections;
- project filters;
- case studies;
- about section/page;
- capabilities;
- navigation;
- footer;
- contact/inquiry actions;
- social links;
- portfolio metadata;
- responsive behavior;
- animation/motion;
- accessibility;
- performance-related UI changes.

## Primary objective

Improve the existing Moses Onerhime portfolio while preserving its current design identity.

The site should help a visitor answer quickly:

1. Who is Moses?
2. What does he do?
3. What kind of work can he produce?
4. What did he personally contribute to each featured project?
5. What evidence supports the claim?
6. How can I contact or hire/collaborate with him?

## Source-of-truth order

For portfolio/UI decisions:

1. actual project data/content in the repository;
2. existing high-quality portfolio patterns already in the site;
3. verified project links/assets;
4. `DESIGN.md`;
5. `docs/ui/*`;
6. current accessibility, performance, SEO, and web-interface guidance.

## Before editing UI

For substantial work:

1. inspect git status/diff;
2. inspect the route/page structure;
3. inspect project data/content source;
4. inspect design tokens and global styles;
5. inspect navigation and section anchors;
6. inspect all project cards;
7. inspect all case-study views/routes/modals;
8. inspect contact links;
9. inspect responsive behavior;
10. inspect animation and reduced-motion behavior;
11. inspect metadata and social preview setup;
12. read the relevant `docs/ui/*` files.

Do not start by rewriting colors, fonts, or components.

## Preserve what is already strong

Identify the strongest current:

- typography;
- spacing;
- card composition;
- image treatment;
- transitions;
- hero composition;
- section rhythm;
- color usage;
- project presentation.

Use those as internal design references.

## Content safety

Do not invent:

- project metrics;
- users;
- clients;
- outcomes;
- launch dates;
- awards;
- testimonials;
- responsibilities;
- collaborators;
- technologies;
- employers;
- availability;
- contact information.

If a stronger case study needs missing information, improve the structure with the verified content that exists and report the missing evidence.

## Project data integrity

Where counts, status labels, filters, technologies, years, and project availability are duplicated across the UI, prefer deriving them from a single project-data source rather than manually repeating them.

Do not change the meaning of existing project status labels without verifying their source.

## Semantic UI

- Navigation destinations use links.
- Actions use buttons.
- Project filters use buttons or an appropriate control with programmatic selected state.
- Repeated visible labels such as `Case study` must have distinguishable accessible names when they lead to different projects.
- The logo/name link returns home.
- External links should preserve security attributes when opening new tabs.
- All interactive elements need visible hover, active, and `:focus-visible` behavior.
- Never remove browser focus without a replacement.

## Project filtering

If the homepage filters projects:

- filters must be keyboard operable;
- selected state must be exposed programmatically;
- filtering must not create confusing focus loss;
- the count/layout should update without unnecessary layout jump;
- project content important for search/discoverability should remain represented through crawlable routes/content;
- the `All` state must be obvious.

## Case studies

Case studies should prioritize:

- context;
- problem;
- role;
- contribution;
- constraints;
- decisions/process;
- implementation;
- outcome/status;
- reflection/next steps when appropriate.

Do not force every case study to use identical sections if the project does not have evidence for them.

## Accessibility baseline

Target WCAG 2.2 AA.

At minimum:

- semantic landmarks;
- one clear page H1;
- sensible heading hierarchy;
- skip link;
- keyboard navigation;
- unobscured focus;
- sufficient contrast;
- target-size consideration;
- reduced motion;
- alt-text discipline;
- no color-only meaning.

## Performance baseline

Treat portfolio performance as part of the portfolio itself.

A visitor evaluating a developer should not encounter a technically impressive-looking site with poor:

- image loading;
- layout stability;
- interaction responsiveness;
- font loading;
- JavaScript weight.

Target good Core Web Vitals where field measurement is available:

- LCP <= 2.5 s;
- INP <= 200 ms;
- CLS <= 0.1.

## Completion

Before considering a site-wide refinement complete:

1. run the production build;
2. run lint/typecheck/tests available in the repository;
3. test major viewport widths;
4. test keyboard navigation;
5. test reduced motion;
6. test project filtering;
7. test project links/case studies;
8. test contact/social links;
9. apply `docs/ui/DESIGN_QA.md`;
10. review final git diff.

Do not commit or push unless explicitly requested.
