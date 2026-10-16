# Volleyball Rally thumbnail update, 16 October 2026

## Request and scope

Update the portfolio using the five thumbnails supplied in `D:\repos\Drixil Interactive\Volleyball-Rally\assets\media\thumbnails`, preserve the current portfolio identity and mobile usability, then commit and push the completed work.

## Inspection and decisions

- Read the root `AGENTS.md`, portfolio UI skill, `DESIGN.md`, and the skill's required UI standards. Inspected project data, shared artwork/cards, case-study rendering and social previews, image sizing, breakpoints, navigation, and motion behavior.
- The initial worktree contained only the pre-existing untracked `.agents/skills/portfolio-ui/skills/` directory. Leave that unrelated local tooling untouched and out of the commit.
- All five supplied PNGs are 1672 × 941. Source files remain unchanged in the game repository.
- Use `2.png`, the isolated spike composition, for the homepage card and case-study opening. Its player and ball read clearly at card size.
- Show the remaining four illustrations in a dedicated case-study artwork section, rather than overloading the homepage or adding an autoplay carousel.
- Label the collection as promotional illustrations, not gameplay screenshots. Do not change gameplay claims, contribution, status, ordering, project counts, game links, or community/social destinations.
- Remove the older icon overlay from this project's presentation because it uses a different visual treatment. Retain the existing icon and old thumbnail files for compatibility with any direct asset URLs.

## Implementation

- Added optional `caseStudyGallery` data and a conditional, server-rendered artwork section on case-study routes. Other projects do not gain an empty section.
- Added descriptive alternative text, individual captions, a labelled section, and the existing reduced-motion-safe reveal treatment.
- Preserve the homepage grid's existing image height with a centred crop, keeping the Volleyball Rally card aligned with its neighbour at intermediate widths. The case-study opening and gallery show the complete artwork at its source aspect ratio. The gallery is two columns on desktop and one on mobile; no new controls, dependencies, fonts, or palette changes.
- Converted the supplied artwork to full-resolution WebP with the existing Sharp dependency, quality 84. Next/Image continues to serve responsive sizes, reserve image geometry, and lazily load the below-fold gallery.

| Source | Portfolio asset | Bytes |
| --- | --- | ---: |
| `2.png` | `public/volleyball-rally/spike.webp` | 137,884 |
| `1.png` | `public/volleyball-rally/block.webp` | 151,884 |
| `3.png` | `public/volleyball-rally/team.webp` | 226,774 |
| `4.png` | `public/volleyball-rally/dive.webp` | 198,362 |
| `5.png` | `public/volleyball-rally/receive.webp` | 196,046 |

The five PNG sources total 10,563,906 bytes; the five WebP assets total 910,950 bytes, about 91% smaller without reducing pixel dimensions.

## Validation

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed after the final layout adjustment; all 19 static pages still generate. The pre-existing Browserslist warning about 10-month-old data remains non-blocking; no dependencies were updated.
- Applied the relevant identity, work, imagery, responsive, accessibility, motion, performance, SEO, and technical checks from `docs/ui/DESIGN_QA.md`. This scope does not claim a fresh audit of unchanged project content or every contact destination.
- Headless Edge production QA: 16 layout checks covering the homepage and Volleyball Rally case study at 360, 390, 430, 768, 1024, 1280, 1440, and 1920px. No horizontal overflow; one H1 per page; the new primary image loaded at each width.
- All four gallery images decoded correctly at each tested width, with meaningful alt text, lazy loading, preserved source aspect ratios, and the intended one/two-column layout. All five direct WebP asset URLs returned HTTP 200 with the correct content type.
- Visual review covered desktop/mobile gallery captures and the homepage card at 390, 768, and 1440px. The tablet review prompted restoration of the original card image height, avoiding excess empty space and misalignment with its neighbour. Case-study images remain uncropped.
- Keyboard filtering selected Creative with `aria-pressed`, retained visible focus, and showed the original three creative projects. All work still shows ten projects.
- Keyboard case-study navigation, the stretched whole-card focus ring, Roblox link focus/security attributes, and mobile menu Escape/focus restoration passed. A real pointer click on the card artwork opened the case study through the existing stretched-link hit area.
- The Roblox game and community hrefs are unchanged and present on the case study. External destination availability was not retested as part of this imagery change.
- Reduced motion left gallery content visible and static. With JavaScript disabled, all four gallery figures remained server-rendered and visible.
- Beyond 90 did not gain an empty artwork section. Browser QA recorded zero console errors.
- Final diff and whitespace checks passed before staging. No unrelated local skill files or ignored QA artifacts are included in the commit.

Local QA evidence is ignored under `.impeccable/review/`: `volleyball-thumbnails-qa.json`, `volleyball-card-{390,768,1440}.png`, and `volleyball-gallery-{390,1440}.png`.

## Boundaries

This is a scoped imagery update, not a new project audit, gameplay verification, or site-wide redesign. Public routes and the existing typographic social-preview system remain unchanged. No physical-device, assistive-technology, or field Core Web Vitals results are claimed.
