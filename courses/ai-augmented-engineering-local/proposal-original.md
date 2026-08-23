# AI-Augmented Engineering: Agents, Skills, MCP & Local Models

**TRAINING PROPOSAL** — TBC

- **Duration:** 3 Days · 21 Hours
- **Classification:** Digital Skills
- **Prepared for Review:** August 2026

---

## 01 Course Overview

Most engineers already use an AI assistant that autocompletes code inside the editor. An agentic coding harness works differently. It runs in the terminal, reads across the whole repository, edits files, runs the test suite, reads the failures, fixes them and prepares the commit. What makes it reliable on a particular team's codebase is not the model but the harness around it: the context it is given, the skills and hooks it obeys, the subagents it delegates to, and the systems it can reach over MCP.

The practice has shifted twice since 2024. Prompt engineering, meaning the craft of writing a better instruction, gave way to context engineering: curating what the agent knows, including project memory, specifications, retrieved code and the working set that fits inside a finite window. Through 2026 it shifted again to loop engineering. Instead of prompting an agent per task, an engineer builds a system in which the agent finds the work, does it, verifies it, and stops on a defined condition, running on a schedule, on a repository event, or until a goal is met. The tooling standardised alongside it. `AGENTS.md` is now an open specification stewarded by the Linux Foundation's Agentic AI Foundation and read by more than twenty tools across sixty thousand repositories, and the Model Context Protocol under the same body has passed ten thousand published servers.

A second shift matters just as much to a Malaysian engineering organisation. Open-weight models caught up far enough that a single consumer GPU now runs a coding agent that completes real multi-file work. `llama.cpp` serves those models from one quantised GGUF file, and its server speaks both the OpenAI and the Anthropic Messages API, so the same harness built on Day 1 points at a local endpoint by changing one environment variable. That changes what is possible for code that cannot leave the building, for teams without a per-seat licence budget, and for loops whose token cost would otherwise be uncapped. It does not make the frontier models redundant, and the third day is spent measuring exactly where the line falls rather than asserting it.

This three-day, lab-heavy programme teaches engineers to build and operate that harness end to end. Participants work with two tools side by side, Claude Code on a paid plan and OpenCode on its free tier, so every technique is reproducible whether or not the organisation buys seats. Day 1 covers the agentic loop on a real repository, context engineering with `AGENTS.md`, spec-driven change, git-native review discipline, and authoring portable `SKILL.md` skills. Day 2 extends the harness with subagents, deterministic hooks and MCP servers, including building one, then closes on loop engineering: headless runs, scheduled and event-triggered loops, stop conditions, evals and budget guards. Day 3 stands up `llama.cpp`, selects a model that is genuinely good enough for coding work on the hardware in the room, points the Day 1 harness at it, and runs a measured head-to-head against a frontier cloud model on the same task.

Participants use their own terminal, git and code editor throughout. They leave with a configured team harness, one running loop, a working local inference server and a written model recommendation for their own hardware, all ready to commit to their own repository on Monday morning.

## 02 Target Audience

**By Designation**
- Software Engineers (Backend, Frontend and Full Stack)
- DevOps, Platform and Site Reliability Engineers
- QA and Test Automation Engineers
- Technical Leads, Engineering Managers and Solution Architects
- Data Engineers who maintain production codebases
- Security and Compliance Engineers responsible for where source code is allowed to travel

**By Industry**
- Software Development and Technology Services
- Financial Technology, Banking and Insurance
- Telecommunications and Digital Media
- E-Commerce and Logistics Technology
- Government Digital Services and GLCs
- Defence, Healthcare and other sectors operating air-gapped or data-resident environments

## 03 Entry Requirements

- Working software engineering experience in any language or stack
- Comfortable in the terminal: navigating directories, running commands, reading output
- Day-to-day git usage, including branch, commit, diff, push and resolving a merge conflict
- A code editor in daily use (VS Code, JetBrains, Neovim or equivalent)
- Ability to run a project's test suite locally
- For the Day 3 local-inference labs, a machine with a discrete GPU of at least 16 GB VRAM, or Apple Silicon with at least 24 GB unified memory. Participants below that threshold complete the labs against a trainer-provided shared endpoint and still run a small model locally on their own machine.
- No prior experience with AI coding agents, GPUs or model serving required

## 04 Course Objectives

At the end of this programme, participants will be able to:

1. Configure two agentic coding harnesses, Claude Code on a paid plan and OpenCode on its free tier, and run both against the same repository.
2. Drive a code change end to end with an agent: plan, edit, run tests, read failures, fix, review the diff and commit.
3. Apply context engineering, including `AGENTS.md` project memory, spec-first task framing and working-set management, to prevent intent drift and context decay on a large codebase.
4. Author portable `SKILL.md` skills and scoped subagents that encode team conventions and survive a change of harness.
5. Configure hooks that enforce guardrails deterministically, covering command blocking, formatting, secret scanning and test gates.
6. Connect existing MCP servers to a harness and build a minimal custom MCP server that exposes an internal tool.
7. Design and operate scheduled, event-triggered and goal-driven agent loops that run headlessly or in CI under explicit stop conditions, evals and budget guards.
8. Build and run a `llama.cpp` inference server, load a quantised GGUF model, and size context length and GPU offload to the available hardware.
9. Select an open-weight coding model that meets a stated workload on a stated VRAM budget, justified by agentic benchmark evidence and by measurements taken on the participant's own machine.
10. Drive the same harness against a local model and against a frontier cloud model, then produce a comparison of completion rate, diff quality, tool-call accuracy, speed and cost.
11. Decide which work runs local and which escalates to a frontier model, on the basis of data residency, cost, latency and task difficulty.

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

- Install, authenticate and configure Claude Code and OpenCode, then select an appropriate model and cost tier for a given task.
- Complete a real feature or bug fix on an unfamiliar repository using the agentic plan, act and observe cycle, reviewing every diff before acceptance.
- Write an `AGENTS.md` project memory file and a task specification that keep an agent on intent across a long session.
- Author at least one reusable skill and one scoped subagent, then demonstrate an agent invoking both.
- Install and trigger hooks that block an unsafe command, format edited files and gate a commit on passing tests.
- Register an existing MCP server, and build, test and register a custom one.
- Run an agent headlessly from a script, and stand up one scheduled or event-triggered loop with a stop condition and a spend limit.
- Write a small eval that verifies the harness still produces correct output after a change to memory, a skill or a model.
- Build `llama.cpp` with the correct GPU backend for their hardware and serve a GGUF model with `llama-server` under chosen context and offload settings.
- Read a quantisation label, predict the memory a model will occupy, and explain the quality cost of dropping from Q5_K_M to Q4_K_M.
- Benchmark a candidate model on their own machine with `llama-bench` and report prompt-processing and generation throughput.
- Point Claude Code and OpenCode at a local endpoint and complete an agentic task with no request leaving the machine.
- Present a scored local-against-frontier comparison on one identical task, and defend a hybrid routing decision from it.
- Judge which tasks in their own backlog are worth delegating, which are worth looping, which are safe to run local, and which should stay manual.

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

*3-day programme · 21 hours of intensive, hands-on learning*

### Day 1 — The Harness: Context, Specs and Skills

**Hour 1 — From Prompt Engineering to Loop Engineering**
- Autocomplete, agent and loop: what changed between the three, and why
- The plan, act and observe cycle, and what a harness can touch: files, shell, tests, git
- The 2026 landscape of paid harnesses, free tiers, open-source tools, and the standards now held under the Agentic AI Foundation
- Live cold-open: an agent taking a task end to end on a real repository

**Hour 2 — Standing Up Two Harnesses**
- Installing and authenticating Claude Code on a paid plan
- Installing OpenCode and configuring it against its free tier and a bring-your-own-key provider
- Configuration files, model selection, cost tiers, and where each tool stores state
- Pointing both harnesses at the same repository and comparing how they behave

**Hour 3 — The Agentic Loop on a Real Repository**
- Asking the agent to explain unfamiliar code and trace a request flow
- Taking a small change through edit, test run, failure and fix
- Reading agent output critically, and recognising where agents go confidently wrong
- Treating verification as part of the task rather than something done afterwards

**Hour 4 — Context Engineering: Memory, `AGENTS.md` and Permissions**
- How context engineering differs from prompt engineering: curating what the agent knows
- `AGENTS.md` as an open standard: what belongs in it, what does not, and why it survives a change of tool
- Context decay on a long session, covering working-set management, compaction, and when to start fresh
- Plan mode, permission modes, tool allowlists, and keeping secrets out of context

**Hour 5 — Spec-Driven Development and the Git-Native Workflow**
- Specs as the source of truth: writing a task specification an agent can be held to
- Intent drift and unverifiable output, the two failure modes specs exist to close
- Branch-per-task and git worktrees for isolating agent runs, plus agent-authored commits and pull requests
- Diff review discipline, and how to recover cleanly when a run goes wrong

**Hour 6 — Skills: Packaging Repeatable Expertise**
- `SKILL.md` anatomy: frontmatter, description, procedure, hard rules
- Progressive disclosure, and why a skill loads only when it is relevant
- Writing descriptions that trigger reliably and keeping skills portable across harnesses
- Converting an existing team runbook into a working skill

**Hour 7 — Hands-On Lab: Ship a Feature End-to-End**
- Seed a supplied repository with `AGENTS.md` and one authored skill
- Write a short spec, then take the feature from plan mode through implementation, tests and pull request
- Run the same task in both harnesses and compare the output, its quality and its cost
- Trainer review of each participant's spec, diff and commit history

### Day 2 — Extending the Harness: Subagents, Hooks, MCP and Loops

**Hour 8 — Subagents and Multi-Agent Orchestration**
- Defining a subagent: system prompt, scoped tools, model tier
- Context isolation, and how delegation preserves the main session's window
- Fanning out independent tasks in parallel, compared with one long session
- Delegating review to an adversarial subagent that argues against the change

**Hour 9 — Hooks: Deterministic Guardrails**
- Hook events: session start, pre and post tool use, stop
- Blocking a dangerous command before the agent can run it
- Auto-formatting edited files and scanning for secrets on write
- Why a guardrail has to be enforced by a hook rather than requested in a prompt

**Hour 10 — MCP Servers: Wiring the Agent to Your Systems**
- The MCP model of tools, resources and prompts, and where it sits in the 2026 standards stack alongside `AGENTS.md` and agent-to-agent protocols
- Transport choices: local stdio servers against remote servers
- Connecting existing servers for GitHub, a database, documentation and a browser
- Scoping, authentication, and the real risks of over-broad tool access

**Hour 11 — Build a Minimal MCP Server**
- Exposing one internal tool over MCP with a typed input schema
- Testing the server standalone before wiring it to any agent
- Registering it in both Claude Code and OpenCode
- Schema design, and the failure modes that leave an agent confused

**Hour 12 — Loop Engineering: Agents That Run Themselves**
- Headless, non-interactive invocation and structured output for scripting
- The four loop shapes: scheduled by cron, triggered by an event, run continuously on a heartbeat, or run until a goal is met
- Practical loops that triage new issues, review incoming pull requests, chase a failing CI job, or sweep a migration across a repository
- Stop conditions, retry limits and spend caps, which are what keep a loop from running away

**Hour 13 — Evals, Cost and Team Adoption**
- Writing a small eval that proves the harness still works after a change to memory, a skill or a model
- Token spend, model tiering, and setting a budget per task and per loop
- Data handling: which code and credentials must never reach a hosted model
- Review accountability, organisational policy, and rolling a shared harness across a team repository

**Hour 14 — Hands-On Lab: Build a Team Harness and Run a Loop**
- Assemble one repository carrying `AGENTS.md`, a skill, a hook, a custom MCP server and a subagent
- Verify the harness by having the agent complete a task it could not have completed at Hour 1
- Stand up one event-triggered or goal-driven loop with a stop condition and a spend cap, then watch it complete a real task unattended
- Present the harness and receive trainer and peer review

### Day 3 — Local Models: Serving, Selecting and Measuring Against the Frontier

**Hour 15 — Why Run a Model Locally**
- The four drivers: data residency, cost per token, latency, and working offline or air-gapped
- Where local inference wins today, and where a frontier model still finishes work that a local one abandons
- Open weights against open source: Apache 2.0, MIT and custom licences, and what each permits commercially
- Auditing the Day 1 and Day 2 harness to decide which tasks are candidates to move local

**Hour 16 — `llama.cpp` and GGUF: Standing Up an Inference Server**
- Installing `llama.cpp` from a prebuilt release, or building it against the right backend for CUDA, Metal, Vulkan or ROCm
- The GGUF single-file format, quantisation levels, and why Q4_K_M is the working default
- Running `llama-server` with `-m`, `--ctx-size`, `-ngl`, `--port` and `--jinja`, and tracking where the VRAM goes
- Pulling a model directly from Hugging Face and confirming the server answers a first request

**Hour 17 — Choosing a Model That Is Good Enough for Code**
- The tiers by VRAM budget, with a named reference model at 8 GB, 16 GB, 24 GB and 48 GB or above
- Dense against mixture-of-experts, active parameters, and why an MoE model outperforms its memory footprint
- Reading the benchmarks honestly: code generation, tool-selection accuracy and agentic completion, and why the last one predicts real use
- Measuring the machine in front of you with `llama-bench`, covering prompt processing, generation speed and the context length that actually fits

**Hour 18 — Pointing the Harness at a Local Model**
- The Anthropic Messages API and the OpenAI-compatible routes that `llama-server` exposes
- Running Claude Code against the local endpoint by setting `ANTHROPIC_BASE_URL`
- Configuring OpenCode against the same server as a local provider
- Tool calling on a local model, and its failure modes: malformed calls, repeated calls, and a context window that truncates mid-task

**Hour 19 — Local Against Frontier: A Measured Comparison**
- One repository and one identical spec, run three times: local model, mid-tier cloud model, frontier cloud model
- Scoring each run on completion, diff quality, tool-call accuracy, wall-clock time and money spent
- Reading the results: which task classes the local model held, and which it broke down on
- The hybrid pattern, running bulk and confidential work local while escalating the hard step to a frontier model

**Hour 20 — Operating Local Models for a Team**
- Serving one shared GPU endpoint for a team instead of a model on every laptop
- Model swapping, keep-alive, concurrent requests and queueing on a single card
- What local inference does and does not settle for compliance, since keeping code on-premises is not by itself a control
- The real cost model: hardware, electricity and engineer time set against per-token cloud spend

**Hour 21 — Hands-On Lab: A Private Harness with No Cloud Calls**
- Run the full Day 2 harness, meaning `AGENTS.md`, a skill, a hook, a subagent and the custom MCP server, entirely against a local model
- Run one loop unattended on local inference, then confirm the token spend for the run is zero
- Write a model recommendation for the participant's own hardware and workload, supported by their `llama-bench` numbers and their Hour 19 scores
- Present the recommendation and the comparison table for trainer and peer review

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
- Claude Code (CLI), on a paid plan or trainer-provided access for the paid-harness labs
- OpenCode (CLI) on its free tier, or a bring-your-own-key provider account
- A GitHub account for the pull request, CI and event-triggered loop labs
- Stable internet access, since agentic harnesses call hosted models continuously
- `llama.cpp`, installed from a prebuilt release or built with the backend matching the participant's GPU
- A Hugging Face account, for downloading GGUF model files
- Roughly 60 GB of free disk space for model files across the Day 3 labs
- Hardware for Day 3: a discrete GPU with 16 GB VRAM or more, or Apple Silicon with 24 GB unified memory or more. A trainer-provided shared endpoint covers participants whose machines fall below this.

**Reference model set for Day 3.** The exact builds are confirmed against current releases before delivery, since the open-weight field moves monthly. Selection favours permissive licences, GGUF availability and demonstrated tool-calling ability, because a coding agent that cannot call tools reliably is unusable regardless of its code-generation score.

| VRAM budget | Reference model | Quantisation | Realistic use |
|---|---|---|---|
| 8 GB | Qwen2.5-Coder-7B (Apache 2.0) | Q4_K_M, around 4.7 GB | Single-file edits, explanation, completion. Agentic runs only at a reduced context cap |
| 16 GB | gpt-oss-20b (Apache 2.0), mixture-of-experts with about 3.6 B active | MXFP4, around 14 GB | Fits fully on the GPU, so it is fast enough for interactive agent work with tool calling |
| 24 GB | Qwen3-Coder-30B-A3B-Instruct (Apache 2.0), mixture-of-experts with about 3.3 B active | Q4_K_M, around 18 GB | The practical entry point for multi-file agentic work, with a very long context window |
| 48 GB and above | Qwen3-Coder-Next-80B, or a GLM or Devstral class agentic coder | Q4_K_M | Closest open-weight approach to frontier behaviour on long-horizon repository tasks |

## 11 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Engineering throughput** | Routine changes, test runs, fixes and reviews are delegated to an agent, freeing senior engineering time for design |
| **Work that runs unattended** | Triage, review and migration sweeps move into scheduled and event-triggered loops instead of consuming engineer hours |
| **Faster onboarding** | Engineers ramp onto unfamiliar codebases by having the agent explain and trace them rather than waiting on a colleague |
| **Standardised practice** | Team conventions live in a committed `AGENTS.md`, skills and hooks, so every engineer's agent applies the same rules |
| **Tooling integration** | Internal systems are reachable by agents through MCP, closing the gap between the codebase and the tools around it |
| **Data residency** | Code that is contractually or legally barred from leaving the organisation is still worked on by an agent, because the model runs on owned hardware |
| **Predictable cost** | High-volume and looped work moves onto local inference at a fixed hardware cost, and frontier spend is reserved for the tasks that need it |
| **Evidence-based model choice** | Model selection rests on measured agentic completion on the organisation's own hardware and repositories, not on a vendor benchmark |
| **Safe, accountable adoption** | Permission boundaries, deterministic hooks, spend caps and diff review keep a named human answerable for every change |
| **Vendor flexibility** | Techniques are proven on a paid harness, a free-tier harness, open standards and open weights, so adoption is blocked by neither licence budget nor lock-in |

## 12 Course Fee

**RM29,166.67 + 8% SST (RM2,333.33) = RM31,500.00 per group.**

- In-house rate for one organisation, covering all three training days.
- Priced at the HRD Corp Allowable Cost Matrix ceiling for General Courses (In-House), which is RM10,500 per day per group inclusive of SST.
- A full day requires a minimum of seven training hours. This programme runs seven hours on each of the three days.
- Recommended group size is 12 to 20 participants. The minimum is two participants, and HRD Corp prorates the fee for groups smaller than five.
- The fee covers trainer delivery, lab repositories, course materials and the harness templates participants take away. Venue, meals and participant travel are claimed separately by the employer under their own ACM line items.
- GPU hardware for Day 3 is not included. Participants use their own machines, or the employer provides a shared GPU host. The trainer brings one shared endpoint as a fallback.
