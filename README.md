# acreetionos Blog

SEO-optimized static blog for [acreetionos](https://acreetionos.org). Built with [Astro](https://astro.build).

## Features

- Generated content + hand-written blog posts
- AI-powered post generation via OpenRouter
- RSS feed, sitemap, Schema.org structured data
- Dark theme, responsive, zero JavaScript
- Deploys to GitHub Pages

## Quick start

```bash
npm install
npm run dev        # dev server at localhost:4321
npm run build      # static build to dist/
npm run generate-post  # AI generates a new post
```

## AI post generation

Set these GitHub secrets:

| Secret | Description |
|---|---|
| `OPENROUTER_API_KEY` | API key from [openrouter.ai](https://openrouter.ai) |
| `CONTENT_PROMPT` | Topic/subject for the AI |

Run `npm run generate-post` to have the AI write a markdown post into `src/content/posts/`.

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via `.github/workflows/deploy.yml`.

Posts are auto-generated on a schedule via `.github/workflows/generate-post.yml`.
