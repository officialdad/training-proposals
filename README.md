# Training Proposals

Malaysia HRDCorp SBL training proposals and course outlines.

## Courses

| Slug | Title | Client | Status | Duration | Updated |
|------|-------|--------|--------|----------|---------|
| docker-k8s | DevOps: Docker & Kubernetes for Modern Application Deployment | Crux Institute | adjusted | 2d / 16h | 2026-05-04 |
| devops-docker-k8s | DevOps - Docker & Kubernetes | TBC | draft | 2d / 16h | 2026-05-04 |
| devops-k8s | Kubernetes for Modern Application Deployment | TBC | draft | 3d / 24h | 2026-05-04 |
| website-101 | Website 101: Build & Deploy Your First Website with AI | TBC | approved | 1d / 4.5h | 2026-05-04 |

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
