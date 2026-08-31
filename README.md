# Moses Onerhime Portfolio

A responsive portfolio for Moses Onerhime, a software and website developer, game developer, AI and data engineer, video editor, and creative director. Built with Next.js, TypeScript, and Tailwind CSS.

## Student information

- Name: Moses Onerhime
- Matric number: 22120613043

## Links

- Portfolio: https://moses-onerhime-portfolio.vercel.app/
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
- `app/globals.css` contains the site design system and responsive styles.

The portfolio includes accessible project filters, eight project case studies, responsive layouts, reduced-motion support, social metadata, a sitemap, robots rules, and direct contact options.

## License

MIT
