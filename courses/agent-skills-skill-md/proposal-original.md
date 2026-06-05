# Authoring Portable AI Agent Skills with SKILL.md

**TRAINING PROPOSAL** — Agmo Academy

- **Duration:** 2 Hours · Non-HRDC Technical Workshop
- **Format:** Hands-on · agent-agnostic (bring your own AI coding agent)
- **Prepared for Review:** June 2026

---

## 01 Course Overview

Most developers now work alongside an AI coding agent, and most of them re-explain the same context to it every session: how this repo runs its tests, where the conventions live, what the deploy steps are. That repetition is wasted effort — and it is exactly what an *Agent Skill* removes.

A skill is a small folder containing a `SKILL.md` file: YAML frontmatter that tells the agent *when* the skill applies, and markdown instructions it follows once the skill is active. Crucially, `SKILL.md` is an **open, portable format** — originally from Anthropic, now read by Claude Code, OpenAI's Codex CLI, Google's Gemini CLI, GitHub Copilot, Cursor, and a growing set of community tools. A skill authored once works across whichever agent each teammate prefers.

This 2-hour, hands-on workshop is built for practising full stack developers. Rather than surveying the feature, participants spend the session building one real, useful skill in their own codebase — from a minimal first draft to a structured skill with on-demand reference files and a helper script. The throughline is the single idea that makes skills work: **progressive disclosure** — the agent loads only a skill's name and description until it is actually needed, keeping the agent focused and token-efficient instead of drowning in a giant prompt.

Participants leave with a working, portable skill committed to their repo, and the technique to author more — turning their team's hard-won conventions into capabilities any agent can pick up.

> **Delivery note:** This is a non-HRDC technical workshop. It is agent-agnostic: each participant uses an AI coding agent that supports `SKILL.md` (Claude Code, Codex CLI, Gemini CLI, GitHub Copilot in VS Code, or Cursor), installed before the session. A free option will be recommended for anyone without one. No certification-for-funding is attached; a Certificate of Participation is optional.

## 02 Target Audience

**By Designation**
- Full Stack / Frontend / Backend Developers
- Junior to Mid-Level Software Engineers
- Technical Leads standardising team workflows

**By Industry**
- Software Development and Technology Services
- All sectors employing in-house development teams

## 03 Entry Requirements

- Working knowledge of Git and the command line
- Comfortable navigating and editing their own codebase (any language or stack)
- An AI coding agent that supports `SKILL.md` installed **before the session** — Claude Code, Codex CLI, Gemini CLI, GitHub Copilot (VS Code), or Cursor (a free option will be recommended)
- A laptop with their own repository cloned (a sample fullstack repo is provided as a fallback)
- No prior experience authoring skills required

## 04 Course Objectives

At the end of this workshop, participants will be able to:

1. Explain what an Agent Skill is and how progressive disclosure keeps an AI coding agent focused and token-efficient
2. Describe how the `SKILL.md` format works across agents, and how a task-scoped skill differs from a project-context file such as `AGENTS.md`
3. Write a valid `SKILL.md` with a name and a trigger-quality `description` that their agent reliably auto-discovers and invokes
4. Structure a skill with bundled reference files and a helper script that load on demand
5. Author and test a working, portable, codebase-specific skill that automates a real repeated task in their own project

## 05 Learning Outcomes

Upon completion, participants will be able to:

- Decide when a repeated workflow is worth capturing as a skill rather than re-prompting
- Author a `SKILL.md` whose `description` triggers reliably — neither too vague to fire nor too broad
- Split skill content so the agent reads only what each task needs, via `references/` loaded on demand
- Bundle and call a helper script from a skill
- Move the same skill folder between agents and confirm it works unchanged
- Commit and share skills so a whole team — and its mix of agents — inherits them

## 06 Training Methodology

| Method | Description |
|---|---|
| **Live Demonstration** | Real-time walkthroughs of a working skill and how progressive disclosure loads it |
| **Build-Along Labs** | Each participant builds one real skill in their own repo, step by step |
| **Code Dissection** | Reading well-written `SKILL.md` files to learn what makes a `description` fire |
| **Cross-Agent Testing** | Proving portability by running the same skill in a second agent |
| **Trainer Observation & Feedback** | Live review of participants' descriptions and skill structure |

## 07 Workshop Outline

*2-hour workshop · well over half is hands-on*

| Time | Block | Focus |
|---|---|---|
| 0:00 – 0:12 | **Hook & Concept** | The cost of re-explaining your repo every session. What a skill is. `SKILL.md` as an open, portable format. Progressive disclosure as the core idea. Task-scoped `SKILL.md` vs project-context `AGENTS.md`. Live demo: only metadata loads until the skill is triggered. |
| 0:12 – 0:27 | **Anatomy of a Skill** | Directory layout (`SKILL.md` + `scripts/` + `references/` + `assets/`). The `name` and `description` frontmatter. Why the `description` is the whole ballgame — it is the trigger. Dissecting a well-written skill. |
| 0:27 – 0:55 | **Lab 1 — Your First Skill** | Each participant picks one real repeated task in their own repo, writes a minimal `SKILL.md`, tunes the `description`, and confirms their agent auto-discovers and invokes it. |
| 0:55 – 1:03 | **Break / Buffer** | Catch-up time for setup and trigger debugging. |
| 1:03 – 1:33 | **Lab 2 — Disclosure & Bundling** | Move long detail into `references/` so it loads on demand; add a `scripts/` helper the skill calls; re-test that the skill body stays lean. This is where a skill beats pasting a large prompt. |
| 1:33 – 1:50 | **Portable & Shared** | Project vs personal vs plugin location. Copy the *same* folder into a second agent and watch it work — the portability payoff. Description-tuning pitfalls (too vague never fires; too broad always fires). Commit and share with the team. |
| 1:50 – 2:00 | **Wrap & Ship-It** | The three levers recap — `description`, progressive disclosure, bundling. Challenge: author three skills for your repo this week. Q&A. |

## 08 Tools & Software Required

- An AI coding agent that supports `SKILL.md` (Claude Code, Codex CLI, Gemini CLI, GitHub Copilot in VS Code, or Cursor)
- A code editor (VS Code or equivalent)
- Git and a terminal
- The participant's own repository, or the provided sample fullstack repo
- Optional: Node.js or Python, for the helper-script lab

## 09 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Time saved** | Developers stop re-explaining repo context to their agent every session |
| **Consistency** | Team conventions are encoded once and applied by any agent, on every task |
| **Portability** | One skill works across the team's mix of agents — no vendor lock-in |
| **Onboarding** | New developers inherit the team's skills the moment they clone the repo |
