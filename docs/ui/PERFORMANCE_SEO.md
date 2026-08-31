# Performance, SEO, and Shareability Standards

## Core Web Vitals

Target current “good” field thresholds:

- LCP: <= 2.5 s
- INP: <= 200 ms
- CLS: <= 0.1

Evaluate field data at the 75th percentile when available.

## Portfolio-specific principle

Performance is part of the portfolio's credibility.

A developer portfolio should not communicate frontend competence while shipping:

- oversized images;
- large layout shifts;
- delayed input;
- excessive hydration;
- unnecessary animation bundles.

## Next.js

The public site currently exposes Next.js image infrastructure.

When the repository confirms Next.js:

- use `next/image` appropriately;
- use realistic `sizes`;
- avoid requesting desktop-scale images for small cards;
- reserve image dimensions;
- do not lazy-load the true LCP hero image;
- use priority/preload only for genuinely critical content;
- use `next/font` or the project's established optimized font strategy;
- use the Metadata API/file conventions when compatible with the current router.

Do not rewrite routing solely to use a newer API.

## Images

Audit each project asset for:

- intrinsic dimensions;
- rendered size;
- format;
- compression;
- responsive sizes;
- lazy loading;
- blur/poster placeholder if useful.

Project grids often contain many images; avoid allowing all of them to become high-priority requests.

## LCP

Identify the actual LCP element rather than guessing.

Possible candidates:

- hero heading;
- hero project image;
- large above-fold visual.

If the LCP is an image:

- do not lazy-load it;
- provide correct sizing;
- prioritize responsibly.

## CLS

Reserve space for:

- project images;
- project filters/counts;
- custom fonts;
- media;
- case-study galleries.

Filtered grids should not create disruptive jumps where avoidable.

## INP

Audit:

- filter interactions;
- navigation;
- animated card hover;
- route transitions;
- modal/lightbox opening.

Avoid heavy synchronous work in click handlers.

## JavaScript

Do not add a large animation/UI dependency for micro-polish.

Prefer:

- CSS;
- platform APIs;
- existing dependencies;
- server/static rendering for static portfolio content.

Keep client components scoped to actual interactivity.

## Fonts

Load only required families/weights.

If Next.js is used and compatible:

- `next/font` can self-host and reduce external font requests/layout shift.

## Metadata

Homepage should have a clear title such as the existing professional identity.

Each case-study page should have unique:

- title;
- description;
- canonical URL;
- Open Graph title;
- Open Graph description;
- Open Graph image.

Do not use generic `Project` or `Portfolio` titles.

## Open Graph

Because project links are likely shared directly:

- give each important case study an intentional 1200×630-ish social preview or framework-appropriate equivalent;
- include project title;
- maintain visual brand consistency;
- avoid tiny text;
- include meaningful alt metadata where supported.

## Search titles

Use descriptive, concise titles.

Examples:

- `Moses Onerhime | Developer and Creative Director`
- `Beyond 90 — Game Development Case Study | Moses Onerhime`

Use actual project naming and role context from verified content.

## Meta descriptions

Write project-specific descriptions that communicate:

- project;
- role/contribution;
- relevant capability.

Do not keyword-stuff.

## Canonical URLs

Canonicalize to the intended public portfolio domain.

If the Vercel deployment is temporary and a custom domain is introduced later, update metadata consistently.

Do not guess the final domain.

## Sitemap

Ensure indexable:

- homepage;
- public case studies;
- relevant pages.

Do not include private/draft case studies.

## Robots

Check that production is not accidentally `noindex`.

Prevent preview/staging deployments from competing with the intended canonical when the deployment setup supports that distinction.

## Structured data

Where accurate, consider:

- `Person`;
- `WebSite`;
- `CreativeWork` / `SoftwareApplication` only where data accurately fits;
- breadcrumbs for routed case studies.

Do not fabricate:

- employer;
- education;
- awards;
- job title;
- social profile;
- address;
- affiliation.

Only emit fields supported by the site/repository and intended for public disclosure.

## Internal links

Case studies must be reachable through real crawlable links.

Filters should enhance browsing; they should not be the only way search engines/users can access a project.

## Favicon/site identity

Ensure:

- favicon;
- app/icon metadata;
- theme color if appropriate;
- site name;
- social preview.

## Final performance rule

A new visual flourish must earn its cost.

If an effect harms Core Web Vitals, mobile smoothness, or accessibility, simplify it.
