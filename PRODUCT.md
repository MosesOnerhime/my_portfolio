# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The portfolio is for software recruiters, engineering hiring managers, founders, clients, game-development collaborators, and creative or motion-design collaborators who need to understand Moses Onerhime's work quickly.

## Product Purpose

The site presents Moses's multidisciplinary work across software, websites, games, AI and data engineering, motion design, and video editing. It should make his personal contribution, supporting evidence, and contact paths easy to find without reducing the personality of the work.

## Positioning

Moses works across code and visual craft. The portfolio connects shipped products, active technical work, interactive experiences, and motion pieces in one authored body of work rather than presenting those disciplines as unrelated services.

## Operating Context

Visitors commonly arrive from a shared portfolio link, a project link, search, or a social profile. They may scan on a phone before opening a project in more detail, so the home page, case studies, motion archive, link hub, and contact paths must all work independently.

## Capabilities and Constraints

- Next.js and TypeScript are the existing application stack.
- Project content is kept in repository data files and crawlable routes.
- Motion work has a dedicated archive at `/motion`; real work is shown with its actual media and unfilled positions are labelled as placeholders.
- The interface targets WCAG 2.2 AA and must support keyboard navigation, reduced motion, touch, and responsive layouts.
- Claims, outcomes, clients, responsibilities, technologies, and contact information must not be invented.
- Large media must be prepared for web delivery and must not autoplay with sound.

## Brand Commitments

- Preserve the existing Runo.dev editorial portfolio identity, typography, paper-and-ink palette, project-led structure, and direct personal writing style.
- Keep the positioning line `Code · Games · Design · Motion`.
- Do not turn the site into a generic developer template or rebrand the existing experience.

## Evidence on Hand

- Project records and verified links in `app/data/projects.ts` and `app/data/site.ts`.
- Crawlable case studies in `app/work/[slug]`.
- A 20-second vertical Wizeup product promo source at `D:/repos/HyperFrames/Wizeup 3/renders/wizeup-promo.mp4`, supported by its project brief, frame direction, storyboard, and rendered snapshots.
- HADI Place / BTI at `D:/repos/BTI`, supported by its implemented website/publishing studio, project records, and verified public demonstrations at `https://hadispa.vercel.app/` and `/bti`. The portfolio shows public-page screenshots, not private admin records, and distinguishes the live demo from final client handover.
- The current 90.6-second narrated landscape film of Approovia Workspace Manager at `D:/repos/Motion Graphics/Approovia/videos/deliverables/v3-narrated/approovia-workspace-v3-landscape.mp4`, supported by its production report, exact voice word timing, and film placement data. It includes voiceover, music, and sound effects; the web version has English captions. The earlier 30-second film is superseded in the portfolio UI.
- Additional motion pieces have not been supplied yet and must remain clearly labelled future slots.

## Product Principles

1. Lead with real work and evidence.
2. Make a multidisciplinary practice easy to understand without flattening it.
3. Use motion to explain hierarchy and add authorship, never to delay access to content.
4. Make every important path work on mobile, keyboard, and reduced-motion settings.
5. Keep content honest about what is live, in development, planned, or not yet supplied.

## Accessibility & Inclusion

Target WCAG 2.2 AA. Preserve semantic landmarks, a single clear H1, visible focus, useful accessible names, sufficient contrast, 44px touch targets where practical, and an intentional `prefers-reduced-motion` experience.
