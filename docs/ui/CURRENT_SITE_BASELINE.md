# Current Site Baseline

This document records the publicly visible structure observed from the current portfolio. Treat the repository itself as the final source of truth.

## Current public positioning

The homepage currently presents:

- Moses Onerhime;
- full-stack developer;
- game developer;
- AI engineer;
- motion designer and video editor;
- creative director;
- useful products;
- interactive experiences;
- visual stories.

The current top-level navigation exposes:

- Work;
- Motion;
- About;
- Capabilities;
- Links;
- Let's talk.

The site also uses the `Runodev` label/brand in navigation/footer.

Do **not** rename `Runodev` automatically. Audit whether the relationship between `Runodev` and `Moses Onerhime` is clear enough for a first-time visitor.

## Current homepage evidence

The homepage currently includes headline stats such as:

- selected works;
- live launches;
- main disciplines.

Where these values are generated from project data, preserve the data-driven pattern. If they are manually duplicated, consider deriving them from one source to prevent drift.

## Current selected-work set

The publicly visible work list currently includes:

1. Drixil Group
2. Beyond 90
3. Volleyball Rally
4. Forge
5. Furreal.aex
6. GLAMOURSPHAIR
7. CalVision
8. PPFN Learning System
9. Stock Trading App
10. Dental Clinic App

Do not remove projects merely to satisfy a generic “3–5 projects only” rule.

Instead:

- preserve the full body of work;
- make the strongest/relevant projects easiest to scan;
- use the existing “Selected work” concept;
- deepen case studies where real evidence exists.

## Current filtering

The work section exposes:

- All work;
- Web;
- Products;
- Creative.

Audit:

- keyboard operation;
- selected state;
- focus after filtering;
- mobile layout;
- whether filter labels match project categories;
- whether project discovery remains easy.

## Current project-card pattern

Cards currently show combinations of:

- image/visual;
- number;
- possible live/status marker;
- project type;
- year/status;
- project title;
- short description;
- technology/capability tags;
- `Case study`.

This is a strong foundation.

Improve only where necessary:

- make repeated `Case study` destinations accessible/descriptive;
- ensure project status is unambiguous;
- ensure clickable area/hover treatment matches actual interaction;
- ensure card metadata does not compete with title;
- ensure live/source/case-study destinations are understandable.

## Current About positioning

The current About copy presents a multidisciplinary identity across:

- websites;
- apps;
- games;
- creative work;
- Drixil;
- code;
- storytelling.

Preserve the multidisciplinary story, but audit whether the page clearly distinguishes:

- what Moses personally does;
- what Drixil is;
- what work belongs to which context.

Do not invent an organizational relationship not supported by repository content.

## Current capability groups

The homepage currently lists:

- Product development;
- Experience design;
- Creative direction;
- Game development.
- Motion design and video editing;
- DevOps and delivery.

These groups support the multidisciplinary summary and are a useful information architecture.

Audit whether capability descriptions:

- are specific enough;
- map to the shown projects;
- avoid duplicating the hero;
- help a visitor understand what kind of collaboration is possible.

## Current contact section

The page currently has a strong direct-contact ending:

- `Let's work together`;
- conversation CTA;
- external communication/social channels.

The separate `/links` route is an editorial link hub that groups the main portfolio, product, game, motion, professional, social, and contact destinations. It is the shareable full-portfolio alternative to a single-brand Linktree page and is available from the site navigation.

The separate `/motion` route is the shareable motion-design archive. It leads with the completed Wizeup vertical product promo, followed by the Approovia Workspace Manager landscape film, and uses clearly labelled empty positions for work Moses has not supplied yet. It is linked from both the main navigation and the `/links` hub.

## Motion archive and shared motion baseline

The `/motion` introduction is concise enough to expose the real Wizeup video in the opening viewport. The archive renders all records in `motionWorks`, currently Wizeup and Approovia Workspace Manager. Both pieces use native, user-controlled inline playback, distinct accessible names, posters, and no autoplay. The first uses metadata preloading; the second uses `preload="none"`. Their context, contribution, format, and production tools come from the supplied projects; the three future-work positions remain explicitly reserved rather than implying completed work.

The archive preserves the existing Runo.dev editorial identity: the same type direction, paper-and-ink palette, generous section rhythm, numbered work, and direct contact ending. The portrait video and its project story extend the work presentation without replacing the site's visual world. `DESIGN.md` remains unchanged.

Shared motion uses bounded editorial and media arrivals, grouped reveals, and faster icon and press feedback. Pending content stays visible before enhancement and when intersection events are missed. Reduced motion removes spatial entrances and delays, and revealed content releases its transform so hover and focus feedback can still work.

The original archive and shared motion browser QA on 14 October 2026, before the Approovia addition, is recorded in `.impeccable/review/qa-results.json`:

- 17 route/viewport checks across `/motion`, `/`, `/links`, and `/work/beyond-90` found no horizontal overflow and one H1 per page.
- `/motion` was checked from 360px to 1920px wide. About 524px of the video is visible at 1440 × 1000 and 307px at 390 × 844 before scrolling.
- Footer content stays visible in normal desktop/mobile, reduced-motion, JavaScript-disabled, and no-op-observer contexts; the fallback contexts have no arrival animation.
- Mobile menu focus and Escape restoration, keyboard filtering between Creative (3) and All work (10), and native keyboard video play/pause passed.
- The browser checks recorded zero console errors. Production build, lint, and TypeScript checks passed; the build generated 19 static pages.

The original finish review recommended ship with first-viewport prominence and reveal persistence resolved. These measurements remain historical evidence for that update. Physical-device and assistive-technology testing, plus field Core Web Vitals, are not established by these checks.

### Approovia addition

Approovia Workspace Manager is the second real motion piece: a 30-second 16:9 software showcase about form creation, workflow building, and staged approvals. The source brief, storyboard, and production report support the story and HyperFrames, HTML/CSS, and GSAP tool list. The selected `approovia-workspace-landscape-with-music.mp4` source remains unchanged.

The web copy at `public/motion/approovia-workspace.mp4` is 1280 × 720 at 30 fps and 2,992,085 bytes, with the supplied music and sound effects preserved. Its 38,682-byte WebP poster comes from the actual film at 7.5 seconds. Wizeup keeps its 9:16 presentation; Approovia uses a 16:9 landscape stage and a project story that stacks on mobile. Real pieces are numbered 01/02, and future positions are derived from the real-work count as 03–05. The existing editorial identity and `DESIGN.md` remain unchanged.

Addition QA is recorded in `.impeccable/review/approovia-qa.json`:

- Eight widths from 360px to 1920px passed without horizontal overflow or landscape-player cropping; both native players and the derived numbering were present.
- Keyboard play/pause passed for both players. The second used `preload="none"` and remained paused before user input; reduced-motion content stayed visible and static.
- Browser QA recorded zero console errors. Lint, TypeScript, and production build passed again, with 19 static pages generated.

The scoped Approovia finish review recommends ship with no material fixes after confirming the landscape composition, mobile stacking, verified copy, and native playback behavior.

## Contact audit considerations

Preserve verified destinations.

Audit:

- whether the primary contact action is obvious;
- external-link semantics;
- accessible names;
- mobile target size;
- privacy/spam exposure of direct contact data;
- consistency of displayed handles/links.

Do not silently rewrite contact details if two handles differ. Flag inconsistency for human verification first.

## Specific audit opportunities

These are **questions to verify**, not assumptions that changes are required:

1. Is `Runodev` sufficiently connected to the Moses Onerhime identity?
2. Are the project counts/statuses derived from data or manually repeated?
3. Do repeated `Case study` controls have unique accessible names?
4. Are all project filters accessible and stateful?
5. Do project cards clearly separate `Live`, `In development`, `Ongoing`, `Internship`, and `Project` concepts?
6. Do case studies explain personal role/contribution rather than only product description?
7. Are project/live/source destinations discoverable on both desktop and mobile?
8. Is all above-the-fold animation fast enough that identity/work is immediately readable?
9. Are direct contact details intentionally public?
10. Are social/contact handles current and intentionally different where they differ?
11. Are project pages represented in metadata/sitemap/canonical setup?
12. Are project images sized appropriately through Next.js rather than over-fetched?
13. Does motion remain purposeful, interruptible, and readable before enhancement and under reduced-motion settings?
