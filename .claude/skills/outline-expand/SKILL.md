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
