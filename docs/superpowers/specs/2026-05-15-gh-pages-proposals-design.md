# GH Pages Hosting for Proposals — Design

**Date:** 2026-05-15
**Status:** Approved (brainstorming)
**Author:** opariffazman

## Goal

Host per-course training proposals as shareable web pages on GitHub Pages, automatically rebuilt on every push to `main` that touches course content. A Training Provider receives a single clean URL per course instead of a `github.com/.../blob/main/...` link.

## Constraints & Principles

- Source of truth stays in `courses/<slug>/*.md` — markdown is what we edit, web pages are derived
- Smart file selection: if `proposal-adjusted.md` exists, publish it instead of `proposal-original.md`; never publish both
- `adjustment-notes.md` is internal — never published
- Unlisted: no public index, no sidebar enumeration, no search engine indexing. Discovery only via direct URL
- Public GitHub Pages — security by URL obscurity only, no auth

## Architecture

```
training-proposals/
├── courses/                       # existing — source of truth
│   └── <slug>/
│       ├── meta.yml
│       ├── proposal-original.md   # hidden if adjusted exists
│       ├── proposal-adjusted.md   # preferred when present
│       ├── outline.md             # appended as a section if present
│       └── adjustment-notes.md    # NEVER published
├── site/                          # new — Docusaurus app
│   ├── docusaurus.config.ts
│   ├── sidebars.ts                # empty (hidden per-page)
│   ├── package.json
│   ├── package-lock.json
│   ├── src/
│   │   └── pages/
│   │       └── index.tsx          # minimal landing
│   ├── static/
│   │   └── robots.txt             # Disallow: /
│   ├── scripts/
│   │   └── build-docs.mjs         # smart-pick generator
│   ├── docs/                      # GENERATED, gitignored
│   └── .gitignore
└── .github/workflows/
    └── publish.yml
```

## Smart-pick build script

`site/scripts/build-docs.mjs` runs before `docusaurus build`:

1. Glob `../courses/*/meta.yml`
2. For each course:
   - Parse `meta.yml` (title, client, status, duration_days, duration_hours, classification)
   - Pick proposal source: `proposal-adjusted.md` if it exists, else `proposal-original.md`. Skip course (with warning) if neither exists
   - Read picked file's body (strip any existing frontmatter)
   - If `outline.md` exists, read its body and append after a `## Course Outline` heading
   - Skip `adjustment-notes.md` unconditionally
3. Emit `site/docs/proposals/<slug>.md` with frontmatter:
   ```yaml
   ---
   title: "<title from meta.yml>"
   description: "<client> · <duration_days>d / <duration_hours>h"
   slug: /proposals/<slug>
   hide_table_of_contents: false
   sidebar_class_name: hidden
   ---
   ```
4. Treat malformed `meta.yml` as a hard failure (exit non-zero) so CI surfaces it

The generated `site/docs/` directory is fully regenerated each build and gitignored.

## Docusaurus configuration

Key settings in `site/docusaurus.config.ts`:

- `url: 'https://officialdad.github.io'`
- `baseUrl: '/training-proposals/'`
- `organizationName: 'officialdad'`
- `projectName: 'training-proposals'`
- `trailingSlash: true`
- Disable blog plugin
- Docs plugin: `routeBasePath: '/'` (docs at site root). Each generated file's `slug: /proposals/<slug>` frontmatter takes precedence and lands the page at `/proposals/<slug>/`
- `sidebars.ts` exports `{}` — no sidebar items shown
- Theme: default classic, dark mode enabled
- `noIndex: true` site-wide as belt-and-braces alongside robots.txt

## URL shape

- `/training-proposals/` — minimal landing page (project name, brief note that proposals require a direct link)
- `/training-proposals/proposals/<slug>/` — per-course page: proposal body + (optionally) outline section

## GitHub Actions workflow

`.github/workflows/publish.yml`:

```yaml
name: Publish proposals
on:
  push:
    branches: [main]
    paths:
      - 'courses/**'
      - 'site/**'
      - '.github/workflows/publish.yml'
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: site/package-lock.json
      - run: npm ci
        working-directory: site
      - run: node scripts/build-docs.mjs
        working-directory: site
      - run: npm run build
        working-directory: site
      - uses: actions/upload-pages-artifact@v3
        with:
          path: site/build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Path filters keep unrelated commits from triggering rebuilds. Concurrency cancels stale runs so the latest push always wins.

## Repo settings (one-time)

- GitHub repo Settings → Pages → Source: `GitHub Actions`
- Confirm Pages permissions on the workflow's first run

## Error handling

| Condition | Behavior |
|---|---|
| Malformed `meta.yml` | Hard fail, CI red |
| Neither original nor adjusted exists | Warn, skip that course, continue |
| Outline missing | Render proposal alone, no warning |
| `adjustment-notes.md` present | Always ignored, no warning |
| Broken internal links | Docusaurus build fails (default `onBrokenLinks: 'throw'`) |

## Testing

- Local: `cd site && npm install && node scripts/build-docs.mjs && npm start` — verify `/proposals/<slug>/` renders for every existing course; toggle adjusted vs original by temporarily renaming files
- CI: `npm run build` catches link/frontmatter issues
- Post-deploy: visit `https://officialdad.github.io/training-proposals/proposals/firebase-ai-fullstack/` and confirm content matches source

## Out of scope (YAGNI)

- PR preview deploys
- Docusaurus versioning
- Search (Algolia or local)
- Auth / access control beyond URL obscurity
- PDF export
- Custom domain (can be added later via `static/CNAME`)
- Listing/index of all courses (intentionally hidden)

## Open questions

None at design time. Decisions captured above.
