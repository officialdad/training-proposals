# Training Proposals

Malaysia HRDCorp SBL training proposals and course outlines.

## Courses

| Slug | Title | Client | Status | Duration | Updated |
|------|-------|--------|--------|----------|---------|
| docker-k8s | DevOps: Docker & Kubernetes for Modern Application Deployment | Crux Institute | adjusted | 2d / 16h | 2026-05-04 |
| devops-docker-k8s | DevOps - Docker & Kubernetes | TBC | draft | 2d / 16h | 2026-05-04 |
| devops-k8s | Kubernetes for Modern Application Deployment | TBC | draft | 3d / 24h | 2026-05-04 |
| website-101 | Website 101: Build & Deploy Your First Website with AI | TBC | approved | 1d / 4.5h | 2026-05-04 |
| shipping-fullstack-cloudflare | Shipping Fullstack Web Applications with Cloudflare Workers | Agmo Academy | draft | 1d / 8h | 2026-05-13 |
| firebase-ai-fullstack | Firebase Fundamentals: AI-Assisted Fullstack Development | Trainocate / ISKL | draft | 1d / 8h | 2026-05-15 |
| ai-cli-fundamentals | AI Fundamentals with Gemini CLI: Beginner to Power User | TBC | draft | 1d / 8h | 2026-05-22 |
| docker-beginner | Docker for Beginners: Containerise, Compose & Deploy Your Own Stack | TBC | adjusted | 3d / 21h | 2026-06-03 |
| tamingtech-docker-beginner | Docker for Beginner | Taming Tech Sdn Bhd | draft | 3d / 21h | 2026-06-03 |
| google-workspace-automation | Google Workspace Automation: No-Code Workflows with Studio, Gemini & Apps Script | Trainocate / ISKL | draft | 1d / 8h | 2026-06-04 |
| claude-cowork-automation | Claude Cowork: AI Agent Automation for Everyday Knowledge Work | Trainocate / ISKL | draft | 1d / 8h | 2026-06-05 |

## Layout

- `courses/<slug>/` — per-course content
  - `meta.yml` — authoritative status (`draft` → `adjusted` → `approved` → `delivered`)
  - `proposal-original.md` — initial proposal (TP-supplied or self-authored)
  - `proposal-adjusted.md` — our tuned version (optional)
  - `adjustment-notes.md` — rationale for adjustments (optional)
  - `outline.md` — full course outline, post-approval
- `_templates/` — proposal and outline skeletons
- `.claude/skills/` — project-local AI skills (load when working in this repo)
- `docs/superpowers/{specs,plans}/` — design specs and implementation plans

## Working with this repo

When you ask Claude Code about a proposal, the `hrdcorp-proposals` skill loads automatically and routes to:

- `proposal-author` — scaffold a new course and author from scratch
- `proposal-adjust` — review a TP draft and produce an adjusted version
- `outline-expand` — expand an approved proposal into a full course outline

## Hosting

Each course's latest content is published to GitHub Pages at:

    https://officialdad.github.io/training-proposals/<slug>/

The page shows `proposal-adjusted.md` if it exists, otherwise `proposal-original.md`, and appends `outline.md` as a section when present. `adjustment-notes.md` is never published.

The site is intentionally unlisted: there is no index page and `robots.txt` blocks crawlers. Share the per-course URL directly with the Training Provider.

Pages rebuild automatically when any file under `courses/` or `site/` is pushed to `main`. See `.github/workflows/publish.yml`.
