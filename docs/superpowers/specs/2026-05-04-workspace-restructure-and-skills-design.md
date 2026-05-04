# Workspace Restructure & AI Skills Design

**Date:** 2026-05-04
**Status:** Approved (pending implementation plan)
**Owner:** opariffazman

---

## 01 Goal

Restructure the `training-proposals` repo and introduce a small set of project-local AI skills so that authoring, adjusting, and expanding HRDCorp SBL training proposals follows a consistent, KISS/DRY workflow.

## 02 Background

The repo holds Malaysia HRDCorp SBL-format training proposals. Three workflows recur:

1. **Author from scratch** — Training Provider (TP) has no draft; we write `original.md`.
2. **Adjust TP draft** — TP supplies an unrealistic `original.md`; we tune it into `adjusted.md`.
3. **Expand to course outline** — once approved, the proposal becomes a full course outline with modules, submodules, methodologies, and Bloom-mapped assessment.

Today, each topic lives in a flat directory (`docker-k8s/`, `devops-docker-k8s/`, `devops-k8s/`) with `original.md` and optional `adjusted.md`. There is no template, no metadata, no index, and no shared skill that captures the conventions. Each new proposal re-derives the format from prior examples.

## 03 Non-Goals

- Build a publishing pipeline (PDF/Word export).
- Migrate to a CMS or static site generator.
- Generate slides or lab materials.
- Automate HRDCorp SBL submission.

## 04 Target Structure

```
training-proposals/
├── README.md                         # auto-maintained index of courses
├── .claude/skills/
│   ├── hrdcorp-proposals/SKILL.md    # orchestrator + repo conventions
│   ├── proposal-author/SKILL.md      # scaffold dir + author from scratch
│   ├── proposal-adjust/SKILL.md      # critique TP draft → adjusted + notes
│   └── outline-expand/SKILL.md       # approved proposal → full outline
├── _templates/
│   ├── proposal.md                   # 11-section HRDCorp SBL skeleton
│   └── outline.md                    # course outline table skeleton
├── courses/
│   └── <slug>/
│       ├── meta.yml                  # client, status, source, dates, duration
│       ├── proposal-original.md      # always present
│       ├── proposal-adjusted.md      # optional
│       ├── adjustment-notes.md       # optional, rationale for adjustments
│       └── outline.md                # post-approval
└── docs/superpowers/{specs,plans}/   # existing — unchanged
```

### File naming rules

- `<slug>` is kebab-case, derived from the topic (e.g. `docker-k8s`, `kubernetes-intermediate`). Stable once created.
- `proposal-original.md` is always the starting artifact, regardless of whether the source is the TP or self-authored. Source is recorded in `meta.yml`.
- `proposal-adjusted.md` exists only when we materially change the TP draft. If we author from scratch, there is no adjusted file.
- `adjustment-notes.md` exists only alongside `proposal-adjusted.md`.
- `outline.md` is created only after the proposal is approved.

### `meta.yml` schema

```yaml
slug: docker-k8s
title: "DevOps: Docker & Kubernetes for Modern Application Deployment"
client: "Crux Institute"          # or "TBC"
source: tp                         # tp | self
status: draft                      # draft | adjusted | approved | delivered
duration_days: 2
duration_hours: 16
classification: "Digital Skills"
prepared_for: "April 2026"
created: 2026-04-09
updated: 2026-05-04
```

`status` drives `README.md`. Field is the single source of truth — filenames are descriptive, not authoritative.

## 05 Templates

### `_templates/proposal.md`

The canonical 11-section HRDCorp SBL skeleton, derived by extracting the common structure of `docker-k8s/adjusted.md` and `devops-docker-k8s/original.md`. Sections:

01 Course Overview · 02 Target Audience · 03 Entry Requirements · 04 Course Objectives · 05 Learning Outcomes · 06 Training Methodology · 07 Course Outline · 08 Assessment Method · 09 Certification · 10 Tools & Software Required · 11 Expected Outcomes & Impact

Each section uses `{{placeholder}}` markers for skill-driven fills. The Training Methodology table ships with the standard six rows pre-filled (Instructor-Led, Hands-On Lab, Live Demonstrations, Real-World Scenarios, Guided Lab Environments, Trainer Observation) since they recur across every existing proposal.

### `_templates/outline.md`

The canonical course outline skeleton, derived from `course-outline.md`. Sections:

- Header table: Programme Title, Overview, Learning Outcome (a/b/c/d), Duration, Target Participants
- Course Content table (Module → Submodules), with an `Opening` row pre-stubbed (Icebreaker, Trainer Intro, Course Overview)
- Learning Methodologies table
- Assessment & Evaluation table with Bloom's Level column (Remembering, Understanding, Application, Analysis, Evaluation, Creation)

## 06 Skills

All skills live in `.claude/skills/<name>/SKILL.md` with YAML frontmatter (`name`, `description`). They are versioned with the repo so future-me, collaborators, and CI can rely on the same conventions.

### 6.1 `hrdcorp-proposals` (orchestrator)

**Trigger:** any request mentioning proposal, outline, course, HRDCorp, training, or SBL within this repo.

**Responsibility:**
- Explain the repo lifecycle and conventions in one screen.
- Point to `_templates/` and the three workflow skills.
- Encode the `meta.yml` schema and status transitions.
- Encode the rule: **never edit `proposal-original.md` after it is committed** — adjustments go in `proposal-adjusted.md`.

This skill is read-first by the other three. It contains no procedures of its own.

### 6.2 `proposal-author`

**Trigger:** "new proposal", "author proposal", "scaffold course", "no TP draft".

**Inputs collected (one question at a time):** title, slug, client (or TBC), duration (days/hours), classification, target audience, entry requirements, course objectives, source (`self`).

**Output:**
- `courses/<slug>/meta.yml` (status: `draft`, source: `self`)
- `courses/<slug>/proposal-original.md` filled from `_templates/proposal.md`
- Update `README.md` index

**Hour breakdown rule:** when filling `07 Course Outline`, follow the convention from existing proposals — one heading per hour, 3–4 bullets per hour, last hour of each day is a hands-on lab.

### 6.3 `proposal-adjust`

**Trigger:** "adjust proposal", "review TP draft", "tune proposal", presence of `proposal-original.md` with `source: tp`.

**Procedure:**
1. Read `proposal-original.md` and `meta.yml`.
2. Score realism against a checklist:
   - Hour-vs-content density (red flag: >5 distinct topics per hour)
   - Objective clarity (red flag: vague verbs like "understand", "be aware of" without measurable outcome)
   - Prerequisite-vs-content match (red flag: advanced content with no listed prereq)
   - Tooling realism (red flag: enterprise tooling without lab environment specified)
   - Day-end labs present
   - Methodology table present and standard
3. Write `proposal-adjusted.md` — same 11 sections, with adjustments applied.
4. Write `adjustment-notes.md` — bulleted rationale grouped by section, citing the red flag and the change.
5. Update `meta.yml` status to `adjusted`.

The skill must NOT touch `proposal-original.md`.

### 6.4 `outline-expand`

**Trigger:** "course outline", "expand approved", presence of approved proposal (`status: approved`).

**Procedure:**
1. Read the latest proposal (`proposal-adjusted.md` if present, else `proposal-original.md`) and `meta.yml`.
2. Map `04 Course Objectives` → Learning Outcome (a/b/c/d) with action verbs.
3. Map `07 Course Outline` hours → Modules and Submodules. Group consecutive related hours into one module; each hour-bullet becomes a submodule.
4. Carry forward `06 Training Methodology` rows into Learning Methodologies, adding any module-specific methods (e.g. "Game-Based Quiz" if a quiz hour exists).
5. Build Assessment & Evaluation table — one row per Learning Outcome, mapped to a Bloom's level using the verb in the outcome.
6. Write `courses/<slug>/outline.md`.
7. Do not change `meta.yml` status (approval is a human decision; outline expansion is mechanical follow-up).

## 07 README.md Index

Auto-maintained by the workflow skills (each skill that mutates state appends/updates the matching row). Format:

```markdown
| Slug | Title | Client | Status | Duration | Updated |
|------|-------|--------|--------|----------|---------|
| docker-k8s | DevOps: Docker & K8s | Crux Institute | adjusted | 2d / 16h | 2026-04-09 |
```

KISS: a markdown table, not a generated artifact requiring a script. Skills update it as a side effect of the workflow.

## 08 Migration

Existing dirs to move:

| From | To |
|------|----|
| `docker-k8s/original.md` | `courses/docker-k8s/proposal-original.md` |
| `docker-k8s/adjusted.md` | `courses/docker-k8s/proposal-adjusted.md` |
| `devops-docker-k8s/original.md` | `courses/devops-docker-k8s/proposal-original.md` |
| `devops-k8s/original.md` | `courses/devops-k8s/proposal-original.md` |
| `course-outline.md` (root) | `courses/website-101/outline.md` (new slug) |

Backfill `meta.yml` for each. Delete the now-empty top-level dirs. Use `git mv` to preserve history.

## 09 Open Questions

None. All design decisions resolved during brainstorming.

## 10 Success Criteria

- All four skills load and trigger correctly via Claude Code.
- A new course can go from "no files" to scaffolded `proposal-original.md` via `proposal-author` in one session.
- A TP draft can be reviewed and adjusted via `proposal-adjust` with `adjustment-notes.md` produced.
- An approved proposal can be expanded to `outline.md` via `outline-expand`.
- `README.md` reflects the current state of all courses.
- Existing three courses migrated without losing git history.
