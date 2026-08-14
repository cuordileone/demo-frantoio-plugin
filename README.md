This is a [Next.js](https://nextjs.org) project scaffolded from the `web-studio` hub's
`templates/nextjs-starter` (App Router, TypeScript, Tailwind, shadcn/ui).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit
the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Key npm scripts

- `npm run dev` — local development server
- `npm run test` — unit tests (Vitest)
- `npm run test:e2e` — smoke e2e + accessibility check (Playwright + axe)
- `npm run predelivery` — typecheck → lint → audit → test → build → test:e2e, must be green
  before every delivery
- `npm run lint` / `npx prettier --write .` — code quality

Before shipping, also update `src/lib/site-config.ts` with the real project name, description,
and URL.

## Workflow

This project follows the `web-studio` hub's workflow. See this project's own `CLAUDE.md` for the
full operating instructions (commands, delivery checklist, project-specific notes), and the hub's
`docs/WORKFLOW.md` for the end-to-end example this project was scaffolded from.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
