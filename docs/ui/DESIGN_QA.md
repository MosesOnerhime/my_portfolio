# Portfolio Design QA Checklist

## A. Identity

- [ ] Site still feels recognizably like the current portfolio.
- [ ] Moses Onerhime identity is clear.
- [ ] Developer/game/creative positioning remains coherent.
- [ ] `Runodev` relationship is not made more confusing.
- [ ] No accidental rebrand occurred.

## B. Homepage scan

- [ ] Name is immediately visible.
- [ ] Professional positioning is understandable.
- [ ] Work CTA is clear.
- [ ] Contact CTA is clear.
- [ ] Above-the-fold content is not blocked by animation.
- [ ] Hero height remains sensible on mobile.
- [ ] Hero counts/statuses are accurate.

## C. Work section

- [ ] All intended projects remain present.
- [ ] Project ordering is deliberate.
- [ ] Filters work with mouse.
- [ ] Filters work with keyboard.
- [ ] Filter selected state is programmatically exposed.
- [ ] Filtering does not lose focus unexpectedly.
- [ ] Project cards remain usable on touch.
- [ ] Repeated `Case study` links have distinct accessible names.
- [ ] Live/source links are clearly distinct from case-study links.
- [ ] Project status labels are accurate and consistently interpreted.

## D. Case studies

- [ ] Project purpose is clear.
- [ ] Personal role/contribution is clear.
- [ ] Team/internship context is honest.
- [ ] Challenge/constraint is shown when real.
- [ ] Decisions/process are shown when evidence exists.
- [ ] Technical/creative depth is appropriate.
- [ ] Outcomes are real, not invented.
- [ ] Current status is clear.
- [ ] Live/source link works when present.
- [ ] Back/related/next navigation exists.
- [ ] Case study has a logical contact/next step.
- [ ] Case-study metadata is unique.

## E. About/capabilities

- [ ] About content is concise and specific.
- [ ] Capabilities map to actual project evidence.
- [ ] No giant generic skill cloud was added.
- [ ] Drixil relationship is not misrepresented.
- [ ] No content duplication harms scanning.

## F. Contact

- [ ] Primary contact path works.
- [ ] Email link works if present.
- [ ] Social links work.
- [ ] Contact handles match intended destinations.
- [ ] External links use safe behavior.
- [ ] Touch targets are comfortable.
- [ ] No new personal information was exposed.
- [ ] Existing direct-contact privacy trade-offs were not changed silently.

## G. Responsive

- [ ] 360 px checked.
- [ ] 390 px checked.
- [ ] 430 px checked.
- [ ] 768 px checked.
- [ ] 1024 px checked.
- [ ] 1280 px checked.
- [ ] 1440 px checked.
- [ ] Wide desktop checked.
- [ ] No unintended horizontal overflow.
- [ ] Project tags wrap cleanly.
- [ ] Project images crop/scale intentionally.
- [ ] Filter row works on small screens.
- [ ] Hero stats remain readable.
- [ ] Contact section remains easy to use.

## H. Accessibility

- [ ] Skip link works.
- [ ] One clear H1 per page.
- [ ] Heading order is logical.
- [ ] Landmarks are sensible.
- [ ] Keyboard navigation works end-to-end.
- [ ] Focus is visible.
- [ ] Sticky elements do not obscure focus.
- [ ] Icon-only links have accessible names.
- [ ] Project images use appropriate alt text.
- [ ] Color is not the only status/selection cue.
- [ ] Reduced-motion mode works.
- [ ] Browser zoom remains enabled.
- [ ] Important targets are adequately sized.

## I. Motion

- [ ] Motion does not delay content.
- [ ] No scroll hijacking.
- [ ] No `transition: all`.
- [ ] Hover effects have keyboard/touch equivalents where needed.
- [ ] Reduced motion preserves content.
- [ ] Animations do not cause layout shifts.

## J. Performance

- [ ] Likely LCP element identified.
- [ ] LCP image not lazy-loaded if it is an image.
- [ ] Below-fold project images are not all priority loaded.
- [ ] Next/Image sizes are realistic if Next.js is used.
- [ ] Image dimensions reserve layout space.
- [ ] Fonts are optimized.
- [ ] No unnecessary large dependency was added.
- [ ] Filter interaction remains responsive.
- [ ] Layout shifts are checked.
- [ ] Media payload is reasonable.

## K. SEO/shareability

- [ ] Homepage title is descriptive.
- [ ] Homepage description is useful.
- [ ] Case-study titles are unique.
- [ ] Case-study descriptions are unique.
- [ ] Canonicals are correct.
- [ ] Open Graph image exists and works.
- [ ] Project pages have social previews where appropriate.
- [ ] Sitemap includes public case studies.
- [ ] Robots rules are correct.
- [ ] Production is not accidentally noindexed.
- [ ] Structured data contains no invented facts.
- [ ] Internal project links are crawlable.

## L. Technical validation

- [ ] Production build passes.
- [ ] Lint passes or pre-existing failures are documented.
- [ ] Typecheck passes or pre-existing failures are documented.
- [ ] Tests pass where available.
- [ ] Console checked for warnings/errors.
- [ ] Final git diff reviewed.
- [ ] No accidental route/content/data deletion.
- [ ] No commit/push performed without permission.
