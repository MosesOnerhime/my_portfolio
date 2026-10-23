# Work collections and service pricing

## Request and boundaries

Moses asked for work organized into discipline folders, public service charges based on his existing motion/web general invoices, new editing packages, organized reusable invoices in this repository, and deployment. He confirmed that public editing fees cover editing only; posting on Furreal accounts is quoted separately.

Preserve the existing portfolio identity and all valid work. Do not publish private account details or client-specific agreements. No commit or push was requested for this update. Existing resume outputs, resume documentation, and untracked skill files are unrelated work and remain untouched.

## Implemented

- Replaced the ten-card homepage project wall with five image-led collection folders: games, websites, software and AI, motion design, and video editing.
- Added `/work` and crawlable `/work/collections/{games,websites,software-ai,editing}` routes. Motion continues to use its existing `/motion` archive. All ten original case-study URLs remain available, with collection-aware return links and whole-card navigation.
- Moved the two longer current-work descriptions into the software/AI collection without promoting plans to completed outcomes. Collections and counts derive from project, motion, and current-work data.
- Added `/services`, discoverable from navigation, the work section, and the link hub. Detailed website scopes use native disclosure controls. Collection navigation and rates do not require client-side JavaScript.
- Kept the existing hero, typography, neutral palette, project imagery, motion archive, contact destinations, and reduced-motion support. Added metadata and sitemap entries for the new routes.
- Added one public-safe pricing source, `invoices/rates.json`, used by the service page and document builder. Five PDF guides include unissued reusable invoice templates, with matching editable Markdown files by discipline/currency. No client information or payment destinations are published.
- Added `.vercelignore` to keep local environment files, skill/review tooling, private research/handoffs, temporary renders, and duplicate output files out of the deployment upload. Public invoice PDFs and the imported pricing JSON remain included.

## Pricing evidence

Full source PDFs and relevant source handoffs were read without changing their repositories. Exact source paths and the basis for the proposed packages are recorded in `invoices/PROVENANCE.md`.

- Motion design retains the supplied NGN/USD ranges, standard examples, two revision rounds, and 50/50 terms.
- Web development retains all 30 categories/scopes, optional monthly care, extra-work fees, and full payment after completion/testing/client approval. The discounted named-client agreement was not treated as a general price.
- Editing prices are new indicative starting fees, not past earnings or market averages: personal NGN 35,000/USD 75; song promotion NGN 75,000/USD 150; brand NGN 150,000/USD 300; social NGN 50,000/USD 100; long-form NGN 150,000/USD 300. Footage/length limits and exclusions are explicit. Posting, usage rights, licensing, exclusivity, and campaign management are separate.
- No automatic currency conversion, tax-registration claim, turnaround guarantee, or engagement guarantee was introduced.

## Verification completed

- `npm run lint`, `npx tsc --noEmit`, and `npm run build` passed; the production build generated 26 routes.
- A production-server browser check passed 56 route/viewport combinations at 360, 390, 430, 768, 1024, 1280, 1440, and 1920px: no horizontal overflow, one H1 per tested route, correct collection counts, all ten case studies, and all five PDF downloads.
- Keyboard folder navigation, pointer clicks on project images, visible focus, native disclosure controls, mobile menu Escape/focus return, reduced motion, and JavaScript-disabled collection/disclosure behavior passed. No browser console errors were recorded.
- New page metadata, sitemap destinations, `/links`, `/motion`, and existing case routes returned successfully.
- Invoice verification checked all 30 web price/scope tuples against the source builder, rate text, template arithmetic, expected page counts, output/public PDF hash equality, and absence of private payment details or malformed glyphs.
- All 12 generated PDF pages were rendered and visually inspected. Desktop/mobile full-page captures and detail crops were inspected in one batched first round. Local evidence is in `.impeccable/review/`; no new shipping raster imagery was created.
- The Impeccable detector ran once on the changed UI targets and returned `[]` (no findings). Independent finish review and documentation are recorded below.

## Hosting

Vercel CLI 65.2.0 authenticated after Moses approved the device sign-in. Read-only discovery identified the existing `my-portfolio` project in `moses-onerhimes-projects`, production domain `https://www.mosesonerhime.com`. This checkout is linked to that existing project. No new hosting project or plan was created.

Production deployment completed with `vercel deploy --prod --yes --scope moses-onerhimes-projects`. Vercel returned `READY` for deployment `dpl_FJYnYjtirMoeMPfKW8isQXwM8C4h` and aliased the existing domain `https://www.mosesonerhime.com`. The immutable deployment URL is `https://my-portfolio-82h9wowkp-moses-onerhimes-projects.vercel.app`; the production domain remains the public sharing destination.

The CLI dry-run confirmed that `.env.local`, `.impeccable`, `.next`, `.vercel`, docs, output mirrors, temporary files, invoice tooling, and node_modules were excluded. `.archive` was explicitly excluded too. No hosting project or paid-plan change was made. No commit or push was performed.

Unauthenticated live checks passed for 21 routes, including home, all collections, ten case studies, motion, links, services, sitemap, and robots. All five live PDF downloads returned `application/pdf` and matched their local files by SHA-256. A 390px production-browser check passed collection cover image decoding, folder navigation, game-card counts, service download counts, keyboard disclosure, and absence of horizontal overflow or page errors. This verifies public production access rather than an authenticated preview alone. The reproducible smoke script is `.impeccable/review/production-smoke.cjs`.

The final invoice verification also passed again. The default Python installation lacked `pdfplumber`, so the recheck used an isolated temporary dependency directory via process-local `PYTHONPATH`; no application dependency or global Python package was changed. All 30 source web tuples, five PDF mirrors, prices, character bounds, glyphs, page counts, and privacy checks passed. Maintenance still requires the documented Python packages. Local organized PDF renders and screenshots remain QA evidence and are excluded from deployment.

## Finish review and documentation

Independent finish review received the original scope, confirmed editing-only boundary, direction contract, incumbent design references, all 16 required 1440px/390px captures/detail crops, detector result, pricing evidence, and production-server QA results in a fresh context. Its full review returned `fix` with one material finding: the Services opening promised a fee summary but did not show numeric prices in the first viewport. The correction adds motion/editing/web starting fees derived from `rates.json` and the existing number formatter to the opening copy. No other visual changes were requested.

The Services page was recaptured at the same desktop/mobile viewports after the correction, including `collections-services-first-desktop.png` and `collections-services-first-mobile.png`. The same reviewer marked the scored finding resolved and returned disposition `ship` for that fix. The confirmation covered the missing-fee issue and its visible regression risk; it was a scoped fix confirmation following the original full review. Build, lint, TypeScript, and production-server QA passed after the correction. The detector was not rerun.

The ordinary-extension documentation pass checked the finished home/work/collection/service routes, collection and current-work data, shared cards/rates/navigation, relevant global styles, pricing provenance, QA record, direction contract, `PRODUCT.md`, and incumbent `DESIGN.md`. It updated `README.md` with routes and pricing maintenance, added the current structure above the historical baseline in `docs/ui/CURRENT_SITE_BASELINE.md`, and completed this review record.

The design comparison preserves the existing paper (`#f5f4f0`), ink (`#131313`), slate accent (`#465d70`), Segoe UI/mono pairing, large tight display headings, rounded project imagery, editorial spacing, visible focus, and reduced-motion behavior. The new collection folders and service rows extend those materials. These observations describe the implementation and do not create new global design rules.

All five collection covers reuse existing assets, with source paths recorded in `app/data/collections.ts`: `public/volleyball-rally/spike.webp`, `public/drixil/logo-silver-purple.png`, `public/forge/dashboard.webp`, `public/motion/approovia-workspace-poster.webp`, and `public/furreal.aex/screenshots/tiktok-profile.webp`. Earlier asset handoffs remain the provenance for the underlying artwork, screenshots, and film poster. Review screenshots are QA evidence rather than shipping imagery.

This is an ordinary extension of the incumbent system, not permission to overwrite `DESIGN.md`, invent design tokens, or repair unrelated design-document drift.

Pre-existing documentation drift was reported without repair: `DESIGN.md` is an earlier narrative guide rather than the current Impeccable canonical token/section format, and `.impeccable/design.json` is absent. `DESIGN.md` and `PRODUCT.md` were left untouched; no sidecar was created. Existing typography and incidental older UI treatments were not canonized as new rules. No unrelated resume outputs, resume documentation, or skill files were changed by this documentation pass.
