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
