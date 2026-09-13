# Gamalliel Tamaca — Portfolio

Production portfolio for **Gamalliel Tamaca** — IT Support Engineer · Web Developer.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Notes

- Update `linkedin` / `github` / `url` in `src/data/content.ts` (and matching SEO tags in `index.html`) when you have final URLs.
- Resume lives at `/resume` — use **Print / Save as PDF** for a downloadable CV.
- Netbank dashboard is documented as a **private project only** — no production link.
- Featured project is **Trends & Themes** (strongest visual client work).
- Press `Ctrl/Cmd + K` for the command palette.

## Deploy (Cloudflare Pages)

Build command: `npm run build`  
Output directory: `dist`  
SPA fallback is handled by `public/_redirects`.
