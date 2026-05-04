# Workspace Restructure & AI Skills Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the `training-proposals` repo into `courses/` + `_templates/` + `.claude/skills/`, migrate existing proposals, and ship four project-local skills (`hrdcorp-proposals`, `proposal-author`, `proposal-adjust`, `outline-expand`).

**Architecture:** All content (proposals, outlines) is plain markdown. Conventions are enforced by SKILL.md files that Claude Code auto-loads when this repo is the working directory. Templates live in `_templates/` as the single source of truth; skills read them and substitute `{{placeholders}}`. Per-course `meta.yml` is the authoritative status field; filenames are descriptive only.

**Tech Stack:** Markdown, YAML frontmatter, git.

**Spec:** `docs/superpowers/specs/2026-05-04-workspace-restructure-and-skills-design.md`

---

## File Structure

| File | Responsibility |
|------|----------------|
| `_templates/proposal.md` | Canonical 11-section HRDCorp SBL proposal skeleton with `{{placeholders}}` |
| `_templates/outline.md` | Canonical course-outline table skeleton with `{{placeholders}}` |
| `courses/<slug>/meta.yml` | Per-course metadata (status, client, source, dates, duration) |
| `courses/<slug>/proposal-original.md` | Migrated from `<slug>/original.md` |
| `courses/<slug>/proposal-adjusted.md` | Migrated from `<slug>/adjusted.md` (where present) |
| `courses/<slug>/outline.md` | Migrated only for `website-101` (existing root `course-outline.md`) |
| `README.md` | Index table of all courses; updated by skills as side effect |
| `.claude/skills/hrdcorp-proposals/SKILL.md` | Orchestrator; explains conventions, routes to other skills |
| `.claude/skills/proposal-author/SKILL.md` | Scaffold + author from scratch |
| `.claude/skills/proposal-adjust/SKILL.md` | Critique TP draft → adjusted + notes |
| `.claude/skills/outline-expand/SKILL.md` | Approved proposal → outline |

---

## Task 1: Create `_templates/proposal.md`

**Files:**
- Create: `_templates/proposal.md`

- [ ] **Step 1: Create the template**

Write to `_templates/proposal.md`:

```markdown
# {{title}}

**TRAINING PROPOSAL** — {{client}}

- **Duration:** {{duration_days}} Days · {{duration_hours}} Hours
- **Classification:** {{classification}}
- **Prepared for Review:** {{prepared_for}}

---

## 01 Course Overview

{{overview}}

## 02 Target Audience

**By Designation**
{{audience_designations}}

**By Industry**
{{audience_industries}}

## 03 Entry Requirements

{{entry_requirements}}

## 04 Course Objectives

At the end of this programme, participants will be able to:

{{objectives}}

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

{{learning_outcomes}}

## 06 Training Methodology

| Method | Description |
|---|---|
| **Instructor-Led Technical Sessions** | Expert-facilitated sessions with technical depth |
| **Hands-On Lab Exercises** | Minimum 70% practical application throughout |
| **Live Demonstrations** | Real-time walkthroughs of tools and deployments |
| **Real-World Deployment Scenarios** | Industry-relevant use cases for applied learning |
| **Guided Lab Environments** | Structured environments for safe hands-on practice |
| **Trainer Observation & Feedback** | Continuous feedback and technical validation |

## 07 Course Outline

*{{duration_days}}-day programme · {{duration_hours}} hours of intensive, hands-on learning*

{{course_outline}}

## 08 Assessment Method

- Continuous lab exercises
- Trainer observation and technical validation
- Final hands-on mini-project

## 09 Certification

Participants will receive a Certificate of Completion upon successful attendance and participation.

## 10 Tools & Software Required

{{tools}}

## 11 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
{{outcomes_table}}
```

- [ ] **Step 2: Verify file**

Run: `head -5 _templates/proposal.md && wc -l _templates/proposal.md`
Expected: header visible, ~60 lines.

- [ ] **Step 3: Commit**

```bash
git add _templates/proposal.md
git commit -m "feat: add HRDCorp SBL proposal template"
```

---

## Task 2: Create `_templates/outline.md`

**Files:**
- Create: `_templates/outline.md`

- [ ] **Step 1: Create the template**

Write to `_templates/outline.md`:

```markdown
# COURSE OUTLINE

| Field | Details |
|-------|---------|
| **PROGRAMME TITLE** | {{title}} |
| **OVERVIEW** | {{overview}} |
| **LEARNING OUTCOME** | By the end of the session, the participants will be able to: |
{{learning_outcome_rows}}
| **DURATION** (days) | {{duration_days}} day(s) ({{duration_hours}} hours / {{duration_minutes}} minutes) |
| **TARGET PARTICIPANTS** | {{target_participants}} |

## COURSE CONTENT (with submodules)

| Module | Submodules |
|--------|------------|
| **Opening** | O.1 Icebreaker and participant introduction |
| | O.2 Trainer introduction |
| | O.3 Course overview |
{{module_rows}}

## LEARNING METHODOLOGIES

| Methodology | Description |
|-------------|-------------|
{{methodology_rows}}

## ASSESSMENT & EVALUATION

| Criteria | Method | Bloom's Level |
|----------|--------|---------------|
{{assessment_rows}}
```

- [ ] **Step 2: Verify file**

Run: `head -5 _templates/outline.md && wc -l _templates/outline.md`
Expected: header visible, ~30 lines.

- [ ] **Step 3: Commit**

```bash
git add _templates/outline.md
git commit -m "feat: add course outline template"
```

---

## Task 3: Migrate `docker-k8s/`

**Files:**
- Move: `docker-k8s/original.md` → `courses/docker-k8s/proposal-original.md`
- Move: `docker-k8s/adjusted.md` → `courses/docker-k8s/proposal-adjusted.md`
- Create: `courses/docker-k8s/meta.yml`

- [ ] **Step 1: Create target dir**

Run: `mkdir -p courses/docker-k8s`

- [ ] **Step 2: Move files preserving git history**

```bash
git mv docker-k8s/original.md courses/docker-k8s/proposal-original.md
git mv docker-k8s/adjusted.md courses/docker-k8s/proposal-adjusted.md
rmdir docker-k8s
```

- [ ] **Step 3: Create meta.yml**

Write to `courses/docker-k8s/meta.yml`:

```yaml
slug: docker-k8s
title: "DevOps: Docker & Kubernetes for Modern Application Deployment"
client: "Crux Institute"
source: tp
status: adjusted
duration_days: 2
duration_hours: 16
classification: "Digital Skills"
prepared_for: "April 2026"
created: 2026-04-09
updated: 2026-05-04
```

- [ ] **Step 4: Verify**

Run: `ls courses/docker-k8s/ && test ! -d docker-k8s && echo OK`
Expected: three files listed (`meta.yml`, `proposal-adjusted.md`, `proposal-original.md`) and `OK`.

- [ ] **Step 5: Commit**

```bash
git add courses/docker-k8s/
git commit -m "refactor: migrate docker-k8s to courses/ layout"
```

---

## Task 4: Migrate `devops-docker-k8s/`

**Files:**
- Move: `devops-docker-k8s/original.md` → `courses/devops-docker-k8s/proposal-original.md`
- Create: `courses/devops-docker-k8s/meta.yml`

- [ ] **Step 1: Create target dir and move**

```bash
mkdir -p courses/devops-docker-k8s
git mv devops-docker-k8s/original.md courses/devops-docker-k8s/proposal-original.md
rmdir devops-docker-k8s
```

- [ ] **Step 2: Create meta.yml**

Write to `courses/devops-docker-k8s/meta.yml`:

```yaml
slug: devops-docker-k8s
title: "DevOps - Docker & Kubernetes"
client: "TBC"
source: self
status: draft
duration_days: 2
duration_hours: 16
classification: "Digital Skills"
prepared_for: "April 2026"
created: 2026-04-14
updated: 2026-05-04
```

- [ ] **Step 3: Verify**

Run: `ls courses/devops-docker-k8s/ && test ! -d devops-docker-k8s && echo OK`
Expected: two files listed and `OK`.

- [ ] **Step 4: Commit**

```bash
git add courses/devops-docker-k8s/
git commit -m "refactor: migrate devops-docker-k8s to courses/ layout"
```

---

## Task 5: Migrate `devops-k8s/`

**Files:**
- Move: `devops-k8s/original.md` → `courses/devops-k8s/proposal-original.md`
- Create: `courses/devops-k8s/meta.yml`

- [ ] **Step 1: Create target dir and move**

```bash
mkdir -p courses/devops-k8s
git mv devops-k8s/original.md courses/devops-k8s/proposal-original.md
rmdir devops-k8s
```

- [ ] **Step 2: Create meta.yml**

Write to `courses/devops-k8s/meta.yml`:

```yaml
slug: devops-k8s
title: "Kubernetes for Modern Application Deployment"
client: "TBC"
source: self
status: draft
duration_days: 3
duration_hours: 24
classification: "Digital Skills"
prepared_for: "April 2026"
created: 2026-04-14
updated: 2026-05-04
```

- [ ] **Step 3: Verify**

Run: `ls courses/devops-k8s/ && test ! -d devops-k8s && echo OK`
Expected: two files listed and `OK`.

- [ ] **Step 4: Commit**

```bash
git add courses/devops-k8s/
git commit -m "refactor: migrate devops-k8s to courses/ layout"
```

---

## Task 6: Migrate root `course-outline.md` → `courses/website-101/`

**Files:**
- Move: `course-outline.md` → `courses/website-101/outline.md`
- Create: `courses/website-101/meta.yml`

- [ ] **Step 1: Move file**

```bash
mkdir -p courses/website-101
git mv course-outline.md courses/website-101/outline.md
```

- [ ] **Step 2: Create meta.yml**

Write to `courses/website-101/meta.yml`:

```yaml
slug: website-101
title: "Website 101: Build & Deploy Your First Website with AI"
client: "TBC"
source: self
status: approved
duration_days: 1
duration_hours: 4.5
classification: "Digital Skills"
prepared_for: "April 2026"
created: 2026-04-14
updated: 2026-05-04
```

Note: `proposal-original.md` is intentionally absent — this course existed only as an outline.

- [ ] **Step 3: Verify**

Run: `ls courses/website-101/ && test ! -e course-outline.md && echo OK`
Expected: `meta.yml outline.md` and `OK`.

- [ ] **Step 4: Commit**

```bash
git add courses/website-101/
git commit -m "refactor: migrate root course-outline.md to courses/website-101/"
```

---

## Task 7: Create `README.md` index

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write the index**

Write to `README.md`:

```markdown
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
```

- [ ] **Step 2: Verify**

Run: `head -10 README.md`
Expected: title and table header visible.

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: add repo README with course index"
```

---

## Task 8: Create `hrdcorp-proposals` orchestrator skill

**Files:**
- Create: `.claude/skills/hrdcorp-proposals/SKILL.md`

- [ ] **Step 1: Write the skill**

Write to `.claude/skills/hrdcorp-proposals/SKILL.md`:

```markdown
---
name: hrdcorp-proposals
description: Use when working with Malaysia HRDCorp SBL training proposals or course outlines in this repo — explains the lifecycle, file conventions, and routes to the workflow-specific skills (proposal-author, proposal-adjust, outline-expand).
---

# HRDCorp Proposals — Repo Conventions

This repo holds Malaysia HRDCorp SBL-format training proposals and the course outlines they expand into once approved. Read this skill first whenever the user asks about a proposal, course, outline, training, HRDCorp, or SBL in this repo.

## Lifecycle

```
draft → adjusted → approved → delivered
```

A course starts as `proposal-original.md` (either TP-supplied or self-authored). If we tune it, we add `proposal-adjusted.md` plus `adjustment-notes.md`. Once approved by the Training Provider, we expand to `outline.md`.

## Layout

```
courses/<slug>/
  meta.yml                 # authoritative status, client, source, duration
  proposal-original.md     # always present (except website-101, which started as outline)
  proposal-adjusted.md     # optional, our tuned version
  adjustment-notes.md      # optional, rationale alongside adjusted
  outline.md               # post-approval
```

## Hard rules

1. **Never edit `proposal-original.md` after it is committed.** It is the historical record. All adjustments go in `proposal-adjusted.md`.
2. **`meta.yml` is the source of truth for status.** Filenames describe content, not state.
3. **Use `_templates/proposal.md` and `_templates/outline.md`** as the starting point. Do not re-derive the format from existing courses.
4. **Update `README.md`** whenever you create, adjust, or expand a course (the index table at the top).

## meta.yml schema

```yaml
slug: <kebab-case>
title: "<full title>"
client: "<TP name or TBC>"
source: tp | self
status: draft | adjusted | approved | delivered
duration_days: <number>
duration_hours: <number>
classification: "Digital Skills"
prepared_for: "<month year>"
created: YYYY-MM-DD
updated: YYYY-MM-DD
```

## Routing

| User intent | Skill |
|-------------|-------|
| "new proposal", "no TP draft", "scaffold course" | `proposal-author` |
| "adjust", "review TP draft", "tune this proposal" | `proposal-adjust` |
| "course outline", "expand approved", "build outline" | `outline-expand` |

Invoke the appropriate skill via the Skill tool. Do not duplicate their procedures here.

## HRDCorp SBL formatting conventions

- 11 numbered sections in proposals (`01 Course Overview` through `11 Expected Outcomes & Impact`).
- Course Outline (section 07): one heading per hour, 3–4 bullets per hour.
- Last hour of each day is a hands-on lab.
- Training Methodology table (section 06): six standard rows — keep these unless the user asks otherwise.
- British spelling: "programme", "organisation", "containerisation".
```

- [ ] **Step 2: Verify**

Run: `head -3 .claude/skills/hrdcorp-proposals/SKILL.md`
Expected: frontmatter visible.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/hrdcorp-proposals/SKILL.md
git commit -m "feat: add hrdcorp-proposals orchestrator skill"
```

---

## Task 9: Create `proposal-author` skill

**Files:**
- Create: `.claude/skills/proposal-author/SKILL.md`

- [ ] **Step 1: Write the skill**

Write to `.claude/skills/proposal-author/SKILL.md`:

```markdown
---
name: proposal-author
description: Use when authoring a new HRDCorp SBL training proposal from scratch (no Training Provider draft exists). Scaffolds courses/<slug>/ from _templates/proposal.md, prompts for the required fields one at a time, fills the template, and updates README.md.
---

# Proposal Author

Scaffold a new course directory and author `proposal-original.md` from scratch.

## When to use

- User says "new proposal", "scaffold course", "author from scratch", or "no TP draft".
- Use only when the course directory does not yet exist.

## Procedure

1. **Read `.claude/skills/hrdcorp-proposals/SKILL.md`** for repo conventions if not already loaded.

2. **Collect inputs one at a time** (do not batch):
   - Title
   - Slug (suggest kebab-case from title; confirm)
   - Client (TP name or `TBC`)
   - Duration (days and hours; default 8 hours per day)
   - Classification (default `Digital Skills`)
   - Prepared-for month/year
   - Target audience — designations (bullet list) and industries (bullet list)
   - Entry requirements (bullet list)
   - Course objectives (numbered list, 5–7 items, measurable verbs: "Build", "Deploy", "Configure", not "Understand")
   - Learning outcomes (bullet list, mirrors objectives)
   - Tools & software required (bullet list)

3. **Draft `07 Course Outline`** following the hour-per-heading convention:
   - One `**Hour N — <topic>**` heading per hour
   - 3–4 bullets per hour
   - Last hour of each day is a hands-on lab (heading: `**Hour N — Hands-On Lab: <name>**`)
   - Show the full draft to the user before writing the file.

4. **Draft `11 Expected Outcomes & Impact` table** (4–5 outcome areas).

5. **Write files:**
   - `courses/<slug>/meta.yml` (status: `draft`, source: `self`, today's date for `created` and `updated`)
   - `courses/<slug>/proposal-original.md` from `_templates/proposal.md` with all `{{placeholders}}` substituted

6. **Update `README.md`** — append a row to the courses table.

7. **Commit:**
   ```bash
   git add courses/<slug>/ README.md
   git commit -m "feat: add <slug> proposal (self-authored)"
   ```

## Rules

- Never use vague verbs in objectives ("understand", "be aware of"). Use measurable verbs.
- British spelling throughout.
- If the user supplies an existing draft, stop and route to `proposal-adjust` instead.
```

- [ ] **Step 2: Verify**

Run: `head -3 .claude/skills/proposal-author/SKILL.md`
Expected: frontmatter visible.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/proposal-author/SKILL.md
git commit -m "feat: add proposal-author skill"
```

---

## Task 10: Create `proposal-adjust` skill

**Files:**
- Create: `.claude/skills/proposal-adjust/SKILL.md`

- [ ] **Step 1: Write the skill**

Write to `.claude/skills/proposal-adjust/SKILL.md`:

```markdown
---
name: proposal-adjust
description: Use when reviewing a Training Provider's proposal-original.md and producing a tuned proposal-adjusted.md plus adjustment-notes.md. Scores realism against a fixed checklist (hour density, objective clarity, prereq match, tooling realism, day-end labs, methodology table) and applies fixes without ever modifying the original.
---

# Proposal Adjust

Review a TP-supplied `proposal-original.md` and produce `proposal-adjusted.md` + `adjustment-notes.md`.

## When to use

- User says "adjust", "review TP draft", "tune proposal".
- `courses/<slug>/proposal-original.md` exists with `meta.yml` `source: tp`.

## Procedure

1. **Read inputs:**
   - `courses/<slug>/proposal-original.md`
   - `courses/<slug>/meta.yml`
   - `.claude/skills/hrdcorp-proposals/SKILL.md` (conventions)

2. **Score against the checklist.** For each item, note: PASS or red flag with location.

   | Check | Red flag |
   |-------|----------|
   | Hour density | More than 5 distinct topics in any one hour |
   | Objective clarity | Verbs like "understand", "be aware of", "know about" without measurable outcome |
   | Prereq match | Advanced content (e.g. multi-stage builds, RBAC) without listed prereq |
   | Tooling realism | Enterprise tooling (e.g. OpenShift, Istio) without lab environment specified |
   | Day-end labs | Last hour of any day is not a hands-on lab |
   | Methodology table | Section 06 missing or non-standard rows |

3. **Show the user the scorecard** before making changes. Confirm which red flags to act on.

4. **Write `courses/<slug>/proposal-adjusted.md`** — full 11-section document, copy from original then apply agreed adjustments.

5. **Write `courses/<slug>/adjustment-notes.md`** — bulleted rationale grouped by section. Each bullet: `- **Section NN:** <change> — <reason tied to red flag>`.

6. **Update `meta.yml`:** set `status: adjusted` and `updated: <today>`.

7. **Update `README.md`:** bump status and updated date for this course.

8. **Commit:**
   ```bash
   git add courses/<slug>/proposal-adjusted.md courses/<slug>/adjustment-notes.md courses/<slug>/meta.yml README.md
   git commit -m "feat(<slug>): adjust TP proposal"
   ```

## Hard rule

**Never modify `proposal-original.md`.** It is the historical record of what the TP supplied.
```

- [ ] **Step 2: Verify**

Run: `head -3 .claude/skills/proposal-adjust/SKILL.md`
Expected: frontmatter visible.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/proposal-adjust/SKILL.md
git commit -m "feat: add proposal-adjust skill"
```

---

## Task 11: Create `outline-expand` skill

**Files:**
- Create: `.claude/skills/outline-expand/SKILL.md`

- [ ] **Step 1: Write the skill**

Write to `.claude/skills/outline-expand/SKILL.md`:

```markdown
---
name: outline-expand
description: Use when expanding an approved HRDCorp proposal into a full course outline. Reads the latest proposal (adjusted if present, else original), maps objectives to learning outcomes, hours to modules and submodules, and builds a Bloom-mapped assessment table written to courses/<slug>/outline.md.
---

# Outline Expand

Expand an approved proposal into a full course outline.

## When to use

- User says "course outline", "expand approved", "build outline".
- `courses/<slug>/meta.yml` has `status: approved`.

## Procedure

1. **Read inputs:**
   - `courses/<slug>/proposal-adjusted.md` if it exists, else `courses/<slug>/proposal-original.md`
   - `courses/<slug>/meta.yml`
   - `_templates/outline.md`
   - `.claude/skills/hrdcorp-proposals/SKILL.md`

2. **Map `04 Course Objectives` → Learning Outcome rows** (a, b, c, d ...). Use action verbs in **bold** at the start of each (e.g. "**Build** a containerised application").

3. **Map `07 Course Outline` hours → Modules and Submodules:**
   - Group consecutive related hours into a single module (e.g. "Hour 1–3: DevOps Fundamentals" → `Module 1: DevOps Fundamentals`).
   - Each hour-bullet becomes a submodule (`1.1`, `1.2`, ...).
   - Always include the standard `Opening` row (Icebreaker, Trainer Intro, Course Overview).
   - End with a `Closing` row if the proposal has a wrap-up hour.

4. **Carry forward `06 Training Methodology` rows** into Learning Methodologies. Add module-specific methods if the proposal calls them out (e.g. "Game-Based Quiz" if a quiz hour exists).

5. **Build Assessment & Evaluation table** — one row per Learning Outcome. Map the verb to a Bloom's Level:

   | Verb | Bloom's Level |
   |------|---------------|
   | Define, Identify, List, Recall | Remembering |
   | Explain, Describe, Summarise | Understanding |
   | Apply, Build, Use, Deploy, Configure | Application |
   | Analyse, Compare, Differentiate | Analysis |
   | Evaluate, Justify, Critique | Evaluation |
   | Design, Create, Develop | Creation |

6. **Compute `duration_minutes`** from `meta.yml`: `duration_hours * 60`.

7. **Write `courses/<slug>/outline.md`** from `_templates/outline.md` with all `{{placeholders}}` substituted.

8. **Update `README.md`:** bump updated date for this course (status stays `approved` — outline expansion is mechanical, not a state change).

9. **Commit:**
   ```bash
   git add courses/<slug>/outline.md README.md
   git commit -m "feat(<slug>): expand approved proposal to course outline"
   ```

## Rule

Do NOT change `meta.yml` `status`. Approval is a human decision; outline expansion is the follow-on artifact.
```

- [ ] **Step 2: Verify**

Run: `head -3 .claude/skills/outline-expand/SKILL.md`
Expected: frontmatter visible.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/outline-expand/SKILL.md
git commit -m "feat: add outline-expand skill"
```

---

## Task 12: Final verification

- [ ] **Step 1: Verify directory layout**

Run:
```bash
find . -type f -not -path './.git/*' -not -path './docs/*' | sort
```

Expected output (order may vary):
```
./.claude/skills/hrdcorp-proposals/SKILL.md
./.claude/skills/outline-expand/SKILL.md
./.claude/skills/proposal-adjust/SKILL.md
./.claude/skills/proposal-author/SKILL.md
./README.md
./_templates/outline.md
./_templates/proposal.md
./courses/devops-docker-k8s/meta.yml
./courses/devops-docker-k8s/proposal-original.md
./courses/devops-k8s/meta.yml
./courses/devops-k8s/proposal-original.md
./courses/docker-k8s/meta.yml
./courses/docker-k8s/proposal-adjusted.md
./courses/docker-k8s/proposal-original.md
./courses/website-101/meta.yml
./courses/website-101/outline.md
```

- [ ] **Step 2: Verify no leftover top-level course dirs**

Run: `ls docker-k8s devops-docker-k8s devops-k8s course-outline.md 2>&1 | grep -c 'No such'`
Expected: `4`

- [ ] **Step 3: Verify git history preserved**

Run: `git log --follow --oneline courses/docker-k8s/proposal-original.md | head -3`
Expected: original commit (`c9cdea5 feat: initial commit`) appears in the history.

- [ ] **Step 4: Verify clean working tree**

Run: `git status`
Expected: `nothing to commit, working tree clean`
