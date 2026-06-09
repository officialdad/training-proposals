# COURSE OUTLINE

| Field | Details |
|-------|---------|
| **PROGRAMME TITLE** | Authoring Portable AI Agent Skills with SKILL.md |
| **OVERVIEW** | Most developers now work alongside an AI coding agent and re-explain the same repo context every session — how tests run, where conventions live, what the deploy steps are. An *Agent Skill* removes that repetition. A skill is a small folder with a `SKILL.md` file: YAML frontmatter telling the agent *when* it applies, plus markdown instructions it follows once active. `SKILL.md` is an open, portable format — read by Claude Code, Codex CLI, Gemini CLI, GitHub Copilot, Cursor, and more — so a skill authored once works across whichever agent each teammate prefers. This hands-on, 2-hour workshop is built for practising full stack developers. Rather than surveying the feature, participants build one real, useful skill in their own codebase — from a minimal first draft to a structured skill with on-demand reference files and a helper script. The throughline is **progressive disclosure**: the agent loads only a skill's name and description until it is actually needed, keeping the agent focused and token-efficient. Participants leave with a working, portable skill committed to their repo and the technique to author more. |
| **LEARNING OUTCOME** | By the end of the session, the participants will be able to: |
| | a) **Explain** what an Agent Skill is and how progressive disclosure keeps an AI coding agent focused and token-efficient |
| | b) **Describe** how the `SKILL.md` format works across agents, and how a task-scoped skill differs from a project-context file such as `AGENTS.md` |
| | c) **Write** a valid `SKILL.md` with a `name` and a trigger-quality `description` that their agent reliably auto-discovers and invokes |
| | d) **Structure** a skill with bundled reference files and a helper script that load on demand |
| | e) **Author** and test a working, portable, codebase-specific skill that automates a real repeated task in their own project |
| **DURATION** (days) | 2 hours (120 minutes) — single-session workshop |
| **TARGET PARTICIPANTS** | Full Stack, Frontend, and Backend Developers; Junior to Mid-Level Software Engineers; and Technical Leads standardising team workflows. Suited to software development and technology services, and any sector with in-house development teams. Requires working knowledge of Git and the command line, comfort editing their own codebase (any language or stack), and an AI coding agent that supports `SKILL.md` installed before the session. |

## COURSE CONTENT (with submodules)

| Module | Submodules |
|--------|------------|
| **Opening** | O.1 Icebreaker and participant introduction |
| | O.2 Trainer introduction |
| | O.3 Course overview |
| **Module 1: Hook & Concept** | 1.1 The cost of re-explaining your repo every session |
| | 1.2 What a skill is — `SKILL.md` as an open, portable format |
| | 1.3 Progressive disclosure as the core idea |
| | 1.4 Task-scoped `SKILL.md` vs project-context `AGENTS.md` |
| | 1.5 Live demo — only metadata loads until the skill is triggered |
| **Module 2: Anatomy of a Skill** | 2.1 Directory layout — `SKILL.md`, `scripts/`, `references/`, `assets/` |
| | 2.2 The `name` and `description` frontmatter |
| | 2.3 Why the `description` is the trigger — the whole ballgame |
| | 2.4 Dissecting a well-written skill |
| **Module 3: Lab 1 — Your First Skill** | 3.1 Pick one real repeated task in your own repo |
| | 3.2 Write a minimal `SKILL.md` |
| | 3.3 Tune the `description` |
| | 3.4 Confirm your agent auto-discovers and invokes it |
| **Module 4: Break / Buffer** | 4.1 Catch-up for setup and trigger debugging |
| **Module 5: Lab 2 — Disclosure & Bundling** | 5.1 Move long detail into `references/` so it loads on demand |
| | 5.2 Add a `scripts/` helper the skill calls |
| | 5.3 Re-test that the skill body stays lean |
| **Module 6: Portable & Shared** | 6.1 Project vs personal vs plugin location |
| | 6.2 Copy the same folder into a second agent and watch it work |
| | 6.3 Description-tuning pitfalls — too vague never fires; too broad always fires |
| | 6.4 Commit and share with the team |
| **Closing** | C.1 The three levers recap — `description`, progressive disclosure, bundling |
| | C.2 Challenge — author three skills for your repo this week |
| | C.3 Q&A |

## LEARNING METHODOLOGIES

| Methodology | Description |
|-------------|-------------|
| Live Demonstration | Real-time walkthroughs of a working skill and how progressive disclosure loads it (Modules 1–2) |
| Build-Along Labs | Each participant builds one real skill in their own repo, step by step (Modules 3 and 5) |
| Code Dissection | Reading well-written `SKILL.md` files to learn what makes a `description` fire (Module 2) |
| Cross-Agent Testing | Proving portability by running the same skill in a second agent (Module 6) |
| Trainer Observation & Feedback | Live review of participants' descriptions and skill structure (Modules 3, 5–6) |

## ASSESSMENT & EVALUATION

| Criteria | Method | Bloom's Level |
|----------|--------|---------------|
| Explain what an Agent Skill is and how progressive disclosure keeps an agent focused | Trainer-led Q&A and discussion check (Module 1) | Understanding |
| Describe `SKILL.md` portability and how a skill differs from `AGENTS.md` | Concept check during code dissection (Module 2) | Understanding |
| Write a valid `SKILL.md` with a trigger-quality `description` | Lab 1 build review — agent auto-discovers and invokes the skill (Module 3) | Application |
| Structure a skill with bundled references and a helper script that load on demand | Lab 2 build review — body stays lean, files load on demand (Module 5) | Creation |
| Author and test a working, portable, codebase-specific skill | Final skill demo + cross-agent portability test (Module 6) | Creation |
