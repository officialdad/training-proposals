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
