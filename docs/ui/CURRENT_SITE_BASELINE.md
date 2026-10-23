# Current Site Baseline

This document records the publicly visible structure observed from the current portfolio. Treat the repository itself as the final source of truth.

## Current follow-up: BTI and Approovia v3, 23 October 2026

The website collection now contains three projects: Drixil Group, GLAMOURSPHAIR, and HADI Place / BTI. The new `/work/bti-hadi-place` case study brings the crawlable case-study set to eleven while preserving the existing project priority. Counts continue to derive from `app/data/collections.ts`: eleven projects, two motion films, and two labelled works in development make 15 selected-work records. The homepage describes the live-status count as `Live projects`; BTI remains explicitly labelled `Live demo` in its card and case study.

The BTI case study shows the actual public training page and HADI Place homepage, with verified links to `https://hadispa.vercel.app/bti` and the public homepage. Its copy explains the website, owner-managed publishing studio, reusable private templates, promotion registration, revision checks, and database-enforced editing permissions. Custom-domain setup, production email verification, and client handover remain separate work; payment confirmation remains with the programme owner. No private code destination, admin screenshot, student record, or client payment data is published.

The second motion piece now uses the narrated Approovia v3 film rather than the earlier 30-second version. Its 90.602-second web copy is displayed as 91 seconds, at 1280 × 720 and 60fps, with voiceover, music, sound effects, and 23 optional English caption cues. The 8,617,503-byte fast-start MP4 and its actual 9.0-second poster frame are referenced by the shared motion and collection data. Playback remains native, inline, user-controlled, and below-fold `preload="none"`; Wizeup retains first position. The earlier Approovia media URLs remain compatibility assets.

This is an ordinary content and media extension of the existing paper/ink/slate identity, Segoe UI typography, rounded project imagery, collection navigation, case-study structure, and responsive motion layouts. The BTI case art reserves the screenshot's 1440:1000 aspect ratio and contains the full image. The two public-page WebPs and v3 poster each carry an origin sidecar; no new generated artwork is introduced. The documented visual direction still matches this scope, so `DESIGN.md` is unchanged. Its pre-existing narrative format and absent `.impeccable/design.json` sidecar are recorded rather than repaired as part of this extension.

The current QA records are `.impeccable/review/collections-services-qa.json` and `bti-motion-qa.json`: the collection/services suite passed 56 route/viewport combinations and the new scope passed 32 layout checks, both across eight widths from 360px to 1920px. Coverage includes eleven case studies, five public PDF downloads, whole-card and return links, keyboard/focus behavior, reduced motion, JavaScript-disabled navigation/disclosures, BTI metadata/social image/sitemap presence, video metadata, and all 23 caption cues. No page errors were recorded. Lint, TypeScript, whitespace checks, and the production build passed with 27 routes. Fourteen final 1440px/390px captures were reviewed against the direction contract; the new-scope detector returned `[]` once. These checks do not establish physical-device or assistive-technology coverage or field Core Web Vitals.

The independent finish review identified one product-evidence documentation issue: stale Approovia source information and missing BTI evidence. After the scoped PRODUCT.md correction, the same reviewer marked the issue resolved with a `SHIP` disposition for that fix. This documentation follow-up reconciles the baseline and handoff; it does not imply production delivery. See `docs/handoffs/GITHUB_DELIVERY_BTI_APPROOVIA_2026-10-23.md` for the GitHub-first release and deployment receipt.

## Earlier collection structure: 23 October 2026

The homepage work section and `/work` now present five image-led collection folders: game development, website development, software and AI, motion design, and video editing. The folders replace the earlier homepage project filters. Four collection pages live under `/work/collections/{games,websites,software-ai,editing}`; the motion folder opens the existing `/motion` archive, and `/work/collections/motion` redirects there. All ten original `/work/[slug]` case studies remain available, with collection-aware return links and clickable card surfaces.

`app/data/collections.ts` owns collection membership, covers, destinations, and derived counts. The current set is two game projects, two website projects, five software/AI projects plus two labelled works in development, two motion films, and one editing collection. The 14 selected-work records therefore include unfinished work with its status visible. The two longer development/concept descriptions now live in the software/AI collection and retain their limits and planned status.

`/services` is linked from the main navigation, homepage work section, capabilities, and `/links`. Its opening shows numeric starting fees derived from `invoices/rates.json`; the detailed page covers motion, editing, website builds and optional care, with games/AI/custom software quoted from a brief. Native disclosures expose the longer web scopes without client-side JavaScript. Five public-safe PDF guides include reusable, unissued invoice templates. Editing fees cover editing only; posting and usage arrangements are separate. Motion/editing 50/50 terms remain distinct from web payment after completion, testing, and client approval.

The existing paper-and-ink palette, slate accent, typography, hero composition, real project imagery, motion archive, and contact paths remain the design authority. All five collection covers reuse existing assets listed in the collection data; no shipping raster imagery was generated. `DESIGN.md` remains unchanged.

The production-server QA record is `.impeccable/review/collections-services-qa.json`: 56 route/viewport checks from 360px to 1920px passed, alongside keyboard navigation, native disclosures, mobile menu focus/Escape behavior, reduced motion, JavaScript-disabled collection/disclosure behavior, ten case-study routes, and five PDF downloads. Build, lint, and TypeScript passed with 26 generated routes. These checks do not establish physical-device or assistive-technology coverage or field Core Web Vitals. See `docs/handoffs/WORK_COLLECTIONS_AND_SERVICES_2026-10-23.md` for pricing provenance, scoped finish-review outcome, and deployment state.

The sections below retain the earlier baseline and audit questions as historical context. Their filter labels, earlier navigation, work counts, and dated QA measurements describe the pre-collection structure where they differ from this update.

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

## Volleyball Rally artwork

The Volleyball Rally card and case-study opening use the updated spike illustration supplied on 16 October 2026. The card keeps the grid's existing image height and centred crop; the case-study opening preserves the full landscape composition. The old icon overlay is no longer displayed on this project.

The case study also includes four additional promotional thumbnails with descriptive alt text and captions. The gallery is two columns above 760px and one column on smaller screens, with responsive, lazy-loaded Next/Image assets and reserved aspect ratios. Its copy explicitly distinguishes illustrations from gameplay screenshots. The five new full-resolution WebP files total 910,950 bytes; source PNGs remain unchanged. See `docs/handoffs/VOLLEYBALL_THUMBNAILS_2026-10-16.md` for asset selection and scoped QA.

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
