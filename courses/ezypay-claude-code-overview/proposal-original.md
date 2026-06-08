# Agentic Coding with Claude Code: An Engineer's Overview

**TRAINING PROPOSAL** — EzyPay

- **Duration:** 1 Hour · Non-HRDC Technical Overview Session
- **Format:** Demo-led · live agentic coding on a real codebase
- **Prepared for Review:** June 2026

---

## 01 Course Overview

EzyPay's engineers build and maintain a recurring-payments platform where correctness and the safe handling of customer data matter. Most already use an AI assistant that autocompletes code. Claude Code is different: an agent that works in the terminal — it reads across the repository, edits files, runs the tests, fixes what fails, and prepares the commit.

This 1-hour, demo-led session shows that agentic loop on a real codebase. The trainer puts Claude Code to work live — understanding unfamiliar code and making a change end-to-end — then covers the controls that keep it predictable and safe: project memory (`CLAUDE.md`), plan mode, diff review and permission modes. Participants leave knowing what the tool can do, how to steer it, and which of their own tasks are worth handing over.

## 02 Target Audience

**By Designation**
- Backend, Full Stack and Frontend Engineers
- QA / Test and DevOps / Platform Engineers
- Engineering Leads and Tech Leads evaluating agentic tooling for their teams

**By Industry**
- Financial Technology and Digital Payments
- Software Development and Technology Services

## 03 Entry Requirements

- Day-to-day software engineering experience in any language or stack
- Comfortable with Git, the command line, and running their project's test suite
- No prior experience with AI coding agents required

## 04 Course Objectives

At the end of this session, participants will be able to run Claude Code as an agentic coding tool on a real repository — understanding unfamiliar code, taking a change end-to-end (plan, edit, test, fix, review the diff), steering it safely with `CLAUDE.md`, plan mode and permission boundaries, and judging which of their own tasks are worth delegating.

## 05 Learning Outcomes

Upon completion of the session, participants will be able to run Claude Code as an agentic coding tool on a real repository — understanding unfamiliar code, taking a change end-to-end (plan, edit, test, fix, review the diff), steering it safely with `CLAUDE.md`, plan mode and permission boundaries, and judging which of their own tasks are worth delegating.

## 06 Training Methodology

| Method | Description |
|---|---|
| **Live Agentic Demonstrations** | Trainer drives Claude Code through real tasks on a live codebase |
| **Guided Walkthroughs** | Step-by-step narration of the agent's plan–act–observe loop |
| **Code & Diff Review** | Reading the agent's output critically before accepting it |
| **Discussion & Q&A** | Mapping capabilities to EzyPay's own workflows and guardrails |

## 07 Session Outline

*1-hour overview · demo-led*

| Time | Block | Focus |
|---|---|---|
| 0:00 – 0:10 | **What Agentic Coding Is** | Autocomplete vs. an agent in the terminal. The plan–act–observe loop. What Claude Code can touch — files, the shell, tests, git. Quick live cold-open. |
| 0:10 – 0:25 | **Demo 1 — Understand a Codebase** | Explaining unfamiliar code, tracing a request flow, answering "where is X handled?" — the fast path to onboarding onto a large payments codebase. |
| 0:25 – 0:42 | **Demo 2 — A Change, End-to-End** | A real task taken through plan mode → edit → run tests → read failures → fix → prepared commit. Watching the agentic loop close. |
| 0:42 – 0:52 | **Steering & Safety** | The levers that make it reliable and safe: `CLAUDE.md` project memory, precise task framing, plan mode, diff review, permission modes and secret hygiene. |
| 0:52 – 1:00 | **Adopt It & Q&A** | Good first tasks, pitfalls to avoid, where it fits the workflow, plus how teams extend and standardise Claude Code with plugins (skills, slash commands, subagents, hooks and MCP from the official marketplace — e.g. the community *Superpowers* framework; vet third-party plugins before use on production code). Open Q&A mapped to EzyPay's stack. |

## 08 Tools & Software Required

- Claude Code (CLI) — trainer's licensed environment for the live demos
- A terminal and a code editor (VS Code or equivalent)
- Git
- A sample repository provided for the demonstrations
- Projector or screen-share for the live demonstrations

## 09 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Faster onboarding** | Engineers ramp onto unfamiliar payment code faster by asking the agent to explain and trace it |
| **Engineering throughput** | Routine changes, test runs and fixes can be delegated, freeing senior time for design and review |
| **Quality & accountability** | Diff-review discipline keeps a human answerable for every change the agent makes |
| **Informed, safe adoption** | Engineers and leads leave able to decide where agentic coding fits — with clear permission and secret-handling norms |
