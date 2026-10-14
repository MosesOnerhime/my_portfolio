# Motion Archive and Site Motion Handoff, 14 October 2026

## Original archive implementation

- Added a dedicated `/motion` route that can be shared independently of the homepage.
- Featured the real Wizeup vertical promo with native controls, inline playback, metadata preloading, and no autoplay.
- Added verified project context, contribution, format, and production tools without inventing campaign or client outcomes.
- Added three clearly labelled future-work positions for motion pieces Moses has not supplied yet.
- Added Motion to the primary navigation and linked the archive from the existing `/links` hub.
- Added `/motion` metadata, canonical URL, social-sharing metadata, and sitemap coverage.
- Added a progressive site-wide motion system for meaningful content groups, project grids, capability cards, case-study sections, contact sections, and footers.
- Added authored hero/media entrances, staggered list reveals, icon movement, press feedback, and an animated mobile-navigation entrance.
- Kept pending content visible before and after JavaScript enhancement, including when observer events are missed, and added a reduced-motion path that removes spatial entrances and delays.
- Preserved the existing editorial layout, typography, paper-and-ink palette, project hierarchy, and `Code · Games · Design · Motion` identity.

## Original Wizeup media preparation

- Source master: 15.9 MB, 1080 × 1920, 60 fps, H.264/AAC.
- Web video: `public/motion/wizeup-promo.mp4`, about 1.67 MB, 720 × 1280, 30 fps, H.264/AAC, fast-start enabled.
- Poster: `public/motion/wizeup-promo-poster.webp`, 720 × 1280, about 33 KB.
- The source repository and source render were not modified.

## Motion decisions

The request for animation across text and icons was implemented as a coordinated system instead of animating every word separately. The focal motion is the editorial page entrance and media uncover. Repeated page content uses short grouped reveals, while icons and controls use faster feedback. This avoids delayed reading, excessive JavaScript, and visual noise.

The reveal layer uses progressive enhancement. Content stays visible in its resting state, including after hydration. Intersection observers trigger brief arrival animations without hiding pending sections. A mutation observer registers project cards that enter the DOM after filtering, preserving their group variant and stagger order. The animation releases its transform after completion so it cannot override hover or focus feedback.

The independent design review identified an oversized archive introduction and footer content that could stay hidden at the page end. The introduction was shortened to bring the actual Wizeup piece into the opening desktop and mobile viewports, and the reveal system was changed to keep all pending content visible even if an observer event never arrives.

## Identity compared with the existing site

The archive extends the existing Runo.dev editorial world: oversized authored headings, paper-and-ink sections, the current type direction, generous spacing, numbered work, and direct contact paths. Its portrait player and project facts add a new way to show real work within that identity. The concise introduction gives the video room in the first viewport without changing the site's palette, typography, or multidisciplinary positioning.

The shared motion follows the same hierarchy. Short arrivals emphasize grouped content and media, while controls retain faster feedback. The existing `DESIGN.md` remains the design authority; it was not rewritten and no design sidecar was created.

## Original update validation, before the Approovia addition

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed; 19 static pages generated, including `/motion`, `/links`, and all 10 case-study routes.
- Impeccable mechanical detector: passed with no findings.
- Browser evidence for the original archive and shared motion update is recorded in `.impeccable/review/qa-results.json`.
- All 17 route/viewport layout checks found one H1 and no horizontal overflow: `/motion` at 360, 390, 430, 768, 1024, 1280, 1440, and 1920 pixel widths; `/`, `/links`, and `/work/beyond-90` at 390, 768, and 1440 pixel widths.
- The opening viewport contains about 524px of the Wizeup video at 1440 × 1000 and 307px at 390 × 844. The archive introduction no longer pushes the real work below the fold.
- Desktop and 390px mobile captures reviewed for the motion hero, featured video, future-work placeholders, and contact close.
- Footer content remained visible at the end of the page in normal desktop and mobile contexts, plus reduced motion, JavaScript disabled, and a no-op intersection observer on mobile. The recorded footer elements had opacity `1` and no resting transform; the three fallback contexts had no arrival animation.
- Mobile navigation exposes all destinations, moves focus into the menu, closes with Escape, and restores focus to its button.
- Keyboard project filtering still exposes `aria-pressed`, reports the result count, and correctly shows 3 Creative projects or all 10 projects.
- The Wizeup video did not autoplay, exposed native controls, and supported keyboard play and pause.
- The final browser QA recorded zero console errors.
- Reduced-motion behavior was checked in the browser, including the footer's immediate visible state. Physical-device and assistive-technology testing remain external QA steps.

The original finish review recommended ship after confirming that first-viewport artifact prominence and reveal persistence were resolved. These checks and measurements remain historical evidence for that archive and shared motion update; they do not claim measured field Core Web Vitals or a complete assistive-technology audit.

The production build reports that the local Browserslist data is 10 months old. It does not fail the build, and dependencies were intentionally left unchanged for this feature.

## Approovia addition

Added Approovia Workspace Manager as the archive's second real piece. The supplied 30-second landscape film shows form creation, workflow building, and staged approvals through animated product interfaces. Its brief, storyboard, and production report support the project story; the recorded tools are HyperFrames, HTML/CSS, and GSAP. The portfolio credits motion design, animation, and editing without adding music-ownership or campaign-outcome claims.

### Media preparation

- Selected source: `D:/repos/Motion Graphics/Approovia/videos/deliverables/approovia-workspace-landscape-with-music.mp4`, 30 seconds, 1920 × 1080, 60 fps, H.264/AAC, 21,075,902 bytes (about 21.1 MB).
- Web copy: `public/motion/approovia-workspace.mp4`, 1280 × 720, 30 fps, 2,992,085 bytes. The supplied music and sound effects are preserved.
- Poster: `public/motion/approovia-workspace-poster.webp`, a frame from 7.5 seconds into the actual film, 38,682 bytes.
- The source file and source project were not modified.

### Archive behavior and identity

The renderer now maps every record in `motionWorks`. Orientation-aware layouts retain Wizeup's 9:16 portrait framing and Approovia's 16:9 landscape framing. The landscape stage uses the archive's existing editorial treatment with its project story underneath, and the story stacks into one column on mobile. The same type direction, palette, numbered-work pattern, contact ending, and reduced-motion behavior remain in place; `DESIGN.md` is unchanged.

Both players use native controls and distinguishable accessible names, inline playback, and no autoplay. The first video retains metadata preloading; the second uses `preload="none"`. Real pieces are numbered 01 and 02, and future-work numbering is derived from the real-work count, producing reserved positions 03–05.

### Addition validation

Evidence for this addition is recorded separately in `.impeccable/review/approovia-qa.json`:

- `/motion` passed eight width checks at 360, 390, 430, 768, 1024, 1280, 1440, and 1920px with no horizontal overflow. The Approovia player retained 16:9 framing with `object-fit: contain`, avoiding aspect-ratio cropping.
- Each check found two native players, one H1, real-work numbers 01/02, and future positions 03/04/05. The second player had native controls, `preload="none"`, and remained paused before user input.
- Native keyboard play and pause passed for both players. Reduced-motion content remained visible and static.
- Browser QA recorded zero console errors.
- Lint, TypeScript, and production build passed again; the build generated 19 static pages.

The scoped finish review recommends ship with no material fixes. It confirmed faithful landscape composition, mobile stacking without cropping or overflow, evidence-backed copy, and native playback controls with no autoplay or second-video preloading. This addition's verdict is separate from the original archive and site-motion review above.
