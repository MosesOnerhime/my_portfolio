# Moses Onerhime Portfolio

A responsive portfolio for Moses Onerhime, featuring software, websites, game development, AI and data engineering, motion design, and video editing work. Built with Next.js, TypeScript, and Tailwind CSS.

## Student information

- Name: Moses Onerhime
- Matric number: 22120613043

## Links

- Portfolio: https://www.mosesonerhime.com/
- Repository: https://github.com/MosesOnerhime/my_portfolio

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Structure

- `app/data/projects.ts` is the source of truth for project content, status, links, and ordering.
- `app/data/collections.ts` groups that work into five discipline collections and maps each collection to its route and existing cover asset. Counts derive from project, motion, and current-work records.
- `app/data/current-work.ts` holds the two explicitly labelled development/concept descriptions shown in the software and AI collection.
- `app/data/motion-works.ts` controls motion pieces, video/poster paths, portrait or landscape presentation, and future-work slots. Every record is rendered by the archive.
- `app/components` contains shared interface components.
- `app/work` provides the collection index. `app/work/collections/[collection]` provides game, website, software and AI, and editing collections; the motion collection opens `/motion`.
- `app/work/[slug]` provides crawlable project case studies with unique metadata.
- `app/motion` provides a shareable motion-work archive with optimized, user-controlled video.
- `app/services` provides scoped starting fees, native disclosures for detailed website scopes and care, and five downloadable rate guides with unissued invoice templates.
- `app/links` provides a shareable, full-portfolio link hub.
- `app/components/motion-system.tsx` progressively enhances grouped content with restrained reveal motion and reduced-motion support.
- `app/globals.css` contains the site design system and responsive styles.

The homepage and `/work` organize work into five linked collections rather than project filters. All ten original case-study URLs remain available, alongside HADI Place / BTI. The selected-work total includes eleven projects, two motion films, and two labelled works in development: 15 records, with status and collection counts derived from the shared data. Collection navigation and service disclosures work without client-side JavaScript. The narrated Approovia v3 film includes English captions and an optimized, user-controlled video.

The portfolio also includes a dedicated motion archive, a curated portfolio link hub, responsive layouts, reduced-motion support, social metadata, a sitemap, robots rules, and direct contact options.

## Pricing and invoice maintenance

`invoices/rates.json` is the public-safe price source shared by `/services` and the invoice builder. Edit it first, then follow [the invoice maintenance guide](invoices/README.md) to regenerate the editable Markdown files and five PDFs in `public/invoices/`. The Services opening derives its starting fees from this source too. Run `python -X utf8 invoices/tools/verify_invoices.py` and the website quality checks after regeneration; the PDF validator also requires `pdfplumber`.

Motion and web prices retain their original general-invoice scopes and different payment terms: motion uses 50/50; web payment follows completion, testing, and client approval. Editing packages are new indicative starting fees for editing only, with a proposed 50/50 schedule. Posting, usage rights, licensing, exclusivity, and campaign management are quoted separately. NGN and USD offers are separate prices, not automatic currency conversions.

See [pricing provenance](invoices/PROVENANCE.md) for the source documents and decisions. Public templates must remain unissued and free of client information or payment account details. Fill a private copy when preparing a real invoice.

## Production delivery

The Vercel project `my-portfolio` is connected to `MosesOnerhime/my_portfolio`, with `main` as the production branch. Normal releases are reviewed commits pushed to `origin/main`, followed by verification that the GitHub-triggered Vercel deployment is Ready for that exact SHA and that the production domain serves it. Do not substitute a direct CLI upload of uncommitted files. Commit and push still require Moses's authorization. Keep environment files, unrelated work, and local QA captures out of release commits.

See [the Git delivery and media update handoff](docs/handoffs/GITHUB_DELIVERY_BTI_APPROOVIA_2026-10-23.md) for the correction to the earlier direct deployment and current release evidence.

## License

MIT
