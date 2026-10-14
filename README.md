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
- `app/components` contains shared interface components.
- `app/work/[slug]` provides crawlable project case studies with unique metadata.
- `app/motion` provides a shareable motion-work archive with optimized, user-controlled video.
- `app/links` provides a shareable, full-portfolio link hub.
- `app/components/motion-system.tsx` progressively enhances grouped content with restrained reveal motion and reduced-motion support.
- `app/globals.css` contains the site design system and responsive styles.

The portfolio includes accessible project filters, ten project case studies, a dedicated motion archive, a curated portfolio link hub, responsive layouts, reduced-motion support, social metadata, a sitemap, robots rules, and direct contact options.

## License

MIT
