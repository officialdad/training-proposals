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
