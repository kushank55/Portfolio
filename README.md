# Kushank Garg — Portfolio

Personal portfolio site for Kushank Garg — CS undergraduate at LNMIIT building production
full-stack and AI systems. Built with a dark, terminal-inspired UI.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [lucide-react](https://lucide.dev) for icons
- Live data via server-side API routes:
  - `/api/leetcode` — LeetCode GraphQL (contest rating, problems solved)
  - `/api/codeforces` — Codeforces public API (rating, rank)
  - `/api/github-languages` — GitHub REST API (language breakdown across public repos)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing content

All personal content (bio, experience, projects, skills, education, links) lives in a single
typed data file: `src/lib/data.ts`. Update that file to change what's shown on the site —
no need to touch component code for content changes.

To update the résumé shown on the site, replace `public/resume.pdf`.

## Environment variables (optional)

The GitHub language stats route works unauthenticated but is subject to GitHub's public rate
limits (60 requests/hour per IP). To raise that limit, create a `.env.local` with:

```
GITHUB_TOKEN=ghp_your_personal_access_token
```

A token with no special scopes (public repo read) is enough.

## Deployment

Deploy on [Vercel](https://vercel.com/new) — it's a zero-config Next.js app. Push this repo to
GitHub, import it in Vercel, and add the optional `GITHUB_TOKEN` environment variable if desired.

## Build

```bash
npm run build
npm run start
```
