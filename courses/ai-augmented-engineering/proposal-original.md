# AI-Augmented Engineering: Agents, Skills, Hooks & MCP

**TRAINING PROPOSAL** — TBC

- **Duration:** 2 Days · 14 Hours
- **Classification:** Digital Skills
- **Prepared for Review:** August 2026

---

## 01 Course Overview

Most engineers already use an AI assistant that autocompletes code inside the editor. An agentic coding harness is a different tool: it works in the terminal, reads across the whole repository, edits files, runs the test suite, reads the failures, fixes them, and prepares the commit. The productivity difference comes not from the model but from the harness around it — the project memory, skills, hooks, subagents and MCP connections that make an agent reliable on a specific team's codebase.

This two-day, lab-heavy programme teaches engineers and developers to build that harness. Participants work with two tools side by side: Claude Code on a paid plan, and OpenCode driven by free-tier API keys, so every technique learned is reproducible whether or not the organisation buys seats. Day 1 covers the agentic loop on a real repository, project memory, git-native workflow, and authoring portable `SKILL.md` skills. Day 2 extends the harness with subagents, deterministic hooks, MCP servers — including building one — and headless agent runs in scripts and CI.

The programme assumes working engineers: participants use their own terminal, git and code editor throughout, and finish with a configured team harness they can commit to their own repository on Monday morning.

## 02 Target Audience

**By Designation**
- Software Engineers — Backend, Frontend and Full Stack
- DevOps, Platform and Site Reliability Engineers
- QA and Test Automation Engineers
- Technical Leads, Engineering Managers and Solution Architects
- Data Engineers who maintain production codebases

**By Industry**
- Software Development and Technology Services
- Financial Technology, Banking and Insurance
- Telecommunications and Digital Media
- E-Commerce and Logistics Technology
- Government Digital Services and GLCs

## 03 Entry Requirements

- Working software engineering experience in any language or stack
- Comfortable in the terminal — navigating directories, running commands, reading output
- Day-to-day git usage: branch, commit, diff, push, resolve a merge conflict
- A code editor in daily use (VS Code, JetBrains, Neovim or equivalent)
- Ability to run a project's test suite locally
- No prior experience with AI coding agents required

## 04 Course Objectives

At the end of this programme, participants will be able to:

1. Configure two agentic coding harnesses — Claude Code on a paid plan and OpenCode on free-tier API keys — and run both against the same repository.
2. Drive a code change end-to-end with an agent: plan, edit, run tests, read failures, fix, review the diff and commit.
3. Author project memory files and portable `SKILL.md` skills that encode team conventions so the agent applies them without being re-prompted.
4. Configure hooks that deterministically enforce guardrails — formatting, secret scanning, command blocking and test gates — around agent actions.
5. Connect existing MCP servers to a harness and build a minimal custom MCP server that exposes an internal tool.
6. Delegate scoped work to subagents and run agents headlessly in scripts and CI pipelines.
7. Apply permission, cost and code-review controls that keep agent-written code accountable within a team.

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

- Install, authenticate and configure Claude Code and OpenCode, and select an appropriate model and cost tier for a given task.
- Complete a real feature or bug fix on an unfamiliar repository using the agentic plan–act–observe loop, reviewing every diff before acceptance.
- Write a project memory file and at least one reusable skill, and demonstrate the agent following both.
- Install and trigger hooks that block an unsafe command, format edited files and gate a commit on passing tests.
- Register an existing MCP server and build, test and register a custom one.
- Define a subagent with scoped tools and delegate an isolated task to it.
- Run a headless agent invocation from a script and integrate it as a pipeline step.
- Judge which tasks in their own backlog are worth delegating to an agent and which are not.

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

*2-day programme · 14 hours of intensive, hands-on learning*

### Day 1 — The Harness: Loop, Memory and Skills

**Hour 1 — Autocomplete Is Not an Agent**
- The plan–act–observe loop, and how it differs from editor autocomplete
- What an agentic harness can touch: files, the shell, the test suite, git
- The current landscape: paid harnesses, free tiers and open-source options
- Live cold-open — an agent taking a task end-to-end on a real repository

**Hour 2 — Standing Up Two Harnesses**
- Installing and authenticating Claude Code on a paid plan
- Installing OpenCode and configuring it against free-tier API keys
- Configuration files, model selection and where each tool stores state
- Pointing both harnesses at the same repository and comparing behaviour

**Hour 3 — The Agentic Loop on a Real Repository**
- Asking the agent to explain unfamiliar code and trace a request flow
- Taking a small change through edit, test run, failure, fix
- Reading agent output critically — where agents confidently go wrong
- Prompt framing that produces a working change instead of a plausible one

**Hour 4 — Steering: Context, Memory, Plan Mode and Permissions**
- Project memory (`CLAUDE.md`, `AGENTS.md`): what belongs in it and what does not
- Plan mode before edit mode — reviewing intent before any file changes
- Permission modes, tool allowlists and keeping secrets out of context
- Managing the context window on a large codebase

**Hour 5 — Git-Native Agentic Workflow**
- Branch-per-task and git worktrees for isolating agent runs
- Agent-authored commits and pull request descriptions
- Diff review discipline — the human stays accountable for every line
- Recovering cleanly when an agent run goes wrong

**Hour 6 — Skills: Packaging Repeatable Expertise**
- `SKILL.md` anatomy: frontmatter, description, procedure, hard rules
- Progressive disclosure — why a skill loads only when it is relevant
- Writing descriptions that trigger reliably and portably across harnesses
- Converting an existing team runbook into a working skill

**Hour 7 — Hands-On Lab: Ship a Feature End-to-End**
- Seed a supplied repository with project memory and one authored skill
- Take a real feature from plan mode through implementation, tests and pull request
- Run the same task in both harnesses and compare output and cost
- Trainer review of each participant's diff and commit history

### Day 2 — Extending the Harness: Subagents, Hooks, MCP and Automation

**Hour 8 — Subagents and Parallel Work**
- Defining a subagent: system prompt, scoped tools, model tier
- Context isolation — why delegation preserves the main session's window
- Fanning out independent tasks in parallel versus one long session
- Delegating code review to an adversarial subagent

**Hour 9 — Hooks: Deterministic Guardrails**
- Hook events: session start, pre and post tool use, stop
- Blocking a dangerous command before the agent can run it
- Auto-formatting edited files and scanning for secrets on write
- Hooks versus prompting — why guardrails must be deterministic, not requested

**Hour 10 — MCP Servers: Wiring the Agent to Your Systems**
- The MCP model: tools, resources and prompts
- Transport choices — local stdio servers versus remote servers
- Connecting existing servers: GitHub, a database, documentation, a browser
- Scoping, authentication and the risks of over-broad tool access

**Hour 11 — Build a Minimal MCP Server**
- Exposing one internal tool over MCP with a typed input schema
- Testing the server standalone before wiring it to any agent
- Registering it in both Claude Code and OpenCode
- Schema design and failure modes that confuse an agent

**Hour 12 — Headless Agents and CI**
- Non-interactive invocation and structured output for scripting
- Scripted agent runs over a list of files, issues or repositories
- Adding an agent step to a CI pipeline — triage, review or codegen
- When a scheduled agent earns its keep, and when it just burns tokens

**Hour 13 — Cost, Safety and Team Adoption**
- Token spend, model tiering and keeping a per-task budget
- Data handling: what code and credentials must never reach a hosted model
- Review accountability and organisational policy for agent-written code
- Rolling a shared harness across a team repository and onboarding colleagues

**Hour 14 — Hands-On Lab: Build a Team Harness**
- Assemble one repository carrying project memory, a skill, a hook, a custom MCP server and a subagent
- Verify the harness by having the agent complete a task it could not have completed at Hour 1
- Run the harness headlessly from a script as a final check
- Present the harness and receive trainer and peer review

## 08 Assessment Method

- Continuous lab exercises
- Trainer observation and technical validation
- Final hands-on mini-project

## 09 Certification

Participants will receive a Certificate of Completion upon successful attendance and participation.

## 10 Tools & Software Required

- A laptop with administrator rights to install command-line tools
- Node.js (LTS) and a package manager
- Git, configured with the participant's own identity
- A terminal and a code editor in daily use (VS Code or equivalent)
- Claude Code (CLI) — a paid plan or trainer-provided access for the paid-harness labs
- OpenCode (CLI) with a free-tier API key from a supported provider
- A GitHub account for the pull request and CI labs
- Stable internet access — agentic harnesses call hosted models continuously

## 11 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Engineering throughput** | Routine changes, test runs, fixes and reviews are delegated to an agent, freeing senior engineering time for design |
| **Faster onboarding** | Engineers ramp onto unfamiliar codebases by having the agent explain and trace them rather than waiting on a colleague |
| **Standardised practice** | Team conventions live in committed memory files, skills and hooks, so every engineer's agent applies the same rules |
| **Tooling integration** | Internal systems are reachable by agents through MCP, closing the gap between the codebase and the tools around it |
| **Safe, accountable adoption** | Permission boundaries, deterministic hooks and diff-review discipline keep a named human answerable for every change |
| **Vendor flexibility** | Techniques are proven on both a paid and a free-tier harness, so adoption is not blocked by licence budget |
