# Automating Workflows with n8n: Advanced

**TRAINING PROPOSAL** — TBC

- **Duration:** 2 Days · 14 Hours
- **Classification:** Digital Skills
- **Prepared for Review:** Q3 2026

---

## 01 Course Overview

This two-day advanced programme is for technically experienced engineers who are new to n8n but need to reach production-grade automation quickly. It builds on the skills participants already have, such as scripting, databases, APIs, and containers, and moves from first principles to self-hosted workflow engineering within a single day. The second day adds advanced AI automation.

Day 1 builds the foundations on a self-hosted n8n instance and takes them to production standard: the Code node for advanced data handling, modular sub-workflows, reliability and error handling at scale, enterprise system integration, and running n8n with queue mode, versioning, and observability. Day 2 extends these workflows with AI. Participants build agents with tools and memory, add retrieval-augmented generation over internal documentation, secure them with Guardrails and Human-in-the-loop controls, test them with Evaluations, and connect n8n to other AI tools through MCP (Model Context Protocol).

The course is themed around test and manufacturing data, including parsing tester logs, monitoring yield, and triaging failures. It runs entirely on self-hosted infrastructure, so sensitive test data and intellectual property stay in-house. Each day comprises seven hours of instruction with one hour for lunch. No prior n8n or workflow automation experience is required; the fundamentals are covered, but quickly.

## 02 Target Audience

**By Designation**

- Automated Test Equipment (ATE) Developers
- Software & Test Developers
- Systems Engineers
- DevOps / Platform Engineers
- Technical Operations Staff

**By Industry**

- Semiconductor & Electronics
- Manufacturing & Engineering
- Technology & IT Services
- Government & Regulatory Bodies

## 03 Entry Requirements

- No prior n8n or workflow automation experience required
- Comfortable reading and writing JSON data
- Basic scripting ability in JavaScript or Python (used in the Code node)
- Familiarity with the command line and Docker
- Personal laptop able to run Docker with administrator rights, and a modern web browser (Chrome or Firefox)

This is an advanced-paced programme: the entry bar is general engineering experience, not n8n background.

## 04 Course Objectives

At the end of this programme, participants will be able to:

1. Deploy and configure a self-hosted n8n instance using Docker and PostgreSQL
2. Build advanced data-processing workflows using the Code node (JavaScript and Python) to parse and transform test data
3. Engineer reliable, modular automations using sub-workflows, error workflows, retries, and batching at scale
4. Integrate n8n with enterprise systems such as databases, REST APIs, and message destinations, and expose workflows as secured API endpoints
5. Scale and operate n8n in production using queue mode, workflow versioning, and observability
6. Build AI agents with tools, memory, and retrieval-augmented generation over internal documentation, secured with Guardrails and Human-in-the-loop controls
7. Test AI workflows with Evaluations and connect n8n to the wider AI ecosystem via MCP

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

- Stand up and secure a self-hosted n8n instance on their own infrastructure
- Use the Code node to parse, transform, and validate complex test and log data
- Design modular, reusable workflows with sub-workflows and shared components
- Apply error workflows, retries, batching, and rate-limiting for reliable automation at scale
- Connect n8n to databases, REST APIs, and internal systems, and build secured webhook endpoints
- Operate n8n in production with queue mode, version control, and Prometheus/Grafana observability
- Build AI agents with tools and memory, and ground them with retrieval-augmented generation over internal documentation
- Apply Guardrails, Human-in-the-loop approval, and Evaluations to deploy AI automation safely
- Connect n8n to external AI tools and assistants using MCP, as both client and server

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

*2-day programme · 7 hours of instruction per day · 1 hour lunch break per day*

---

### Day 1 — From Foundations to Production-Grade Automation Engineering

**Hour 1 — n8n Foundations on a Self-Hosted Instance**

- Why workflow automation, and why self-host on-premises for sensitive test data and IP
- Standing up n8n with Docker Compose (n8n + PostgreSQL): core environment configuration
- Interface tour: nodes, connections, triggers, and executions
- Build a first working workflow from trigger to action

**Hour 2 — Working with Data: Items, Expressions & Core Logic**

- The n8n data model: items, JSON, and how data flows between nodes
- Expressions for referencing and shaping data
- Set / Edit Fields to create and transform fields
- IF and Switch nodes for branching and routing records

**Hour 3 — The Code Node: Advanced Data Handling**

- JavaScript and Python in the Code node; task-runner isolation (n8n 2.0)
- Run once for all items vs run once for each item
- Parsing raw tester and CSV logs into clean per-unit records
- External modules on self-hosted (`NODE_FUNCTION_ALLOW_EXTERNAL`); built-in `$helpers` and `$execution`

**Hour 4 — Modular & Reusable Workflows**

- Execute Sub-workflow node: passing data, input schemas, wait vs async execution
- Designing reusable components such as shared parsers and notifiers
- Chunked and looped processing with the Loop Over Items (Split in Batches) node
- Extending n8n with community and custom nodes (overview)

**Hour 5 — Connecting Enterprise Systems**

- Pre-built app nodes: Slack, email, and Google Sheets notifications
- SQL nodes (PostgreSQL / Microsoft SQL Server) for reading and writing test and yield data
- HTTP Request node with advanced authentication (OAuth2, API key, custom headers)
- Webhooks and n8n as a secured API backend (Respond to Webhook)

**Hour 6 — Reliability, Scale & Operations**

- Error workflows (Error Trigger): catch, alert, and log failures; retry and exponential backoff
- Batching and rate-limiting for high-volume test data
- Queue mode (Redis + workers), concurrency control, and execution data pruning
- Workflow versioning (export/import and Git) and observability with Prometheus and Grafana

**Hour 7 — Hands-On Lab: End-to-End Test-Data Pipeline (Day 1)**

- Ingest test data, parse it with the Code node, and enrich it from a database via a sub-workflow
- Add error handling, retries, and a schedule or webhook trigger
- Produce a summary report and route an alert to Slack or email
- Validate the run end-to-end using the execution log

---

### Day 2 — Advanced AI for Test & Manufacturing

**Hour 8 — Building AI Agents in n8n**

- What AI Agent nodes do: the Tools Agent reasoning loop, tool-calling, and system message
- Connecting an LLM via API (OpenAI or Anthropic Claude); choosing a model
- When to use an AI Agent vs deterministic IF/Switch logic
- Build a first agent that classifies a test-failure description

**Hour 9 — Tool Design for Agents**

- Giving agents tools: HTTP Request tool, Custom Code tool, and the Call n8n Workflow tool
- Exposing a sub-workflow as a tool for safe, scoped access to internal systems
- Multi-agent delegation with the AI Agent Tool
- Practical: an agent that queries test and yield data through a sub-workflow tool

**Hour 10 — RAG over Internal Documentation**

- Self-hosted vector stores (PGVector / Qdrant), embeddings, document loaders, and text splitters
- Building a retrieval pipeline with the Question and Answer Chain, or a vector store as an agent tool
- Chat memory (PostgreSQL / Redis) and session keys for multi-turn context
- Data-classification considerations before embedding internal documents

**Hour 11 — Safe AI: Guardrails, Human-in-the-Loop & Structured Output**

- Guardrails node: filtering PII, secrets, and jailbreak attempts on inputs and outputs
- Human-in-the-loop: tool-call approval and send-and-wait via Slack or email
- Structured Output Parser and auto-fixing parser for reliable field extraction
- Practical patterns: triage, draft replies, and key-field extraction from logs

**Hour 12 — MCP: Connecting n8n to the AI Ecosystem**

- MCP Client Tool: giving n8n agents access to external MCP servers
- MCP Server Trigger: exposing n8n workflows to Claude Desktop, Cursor, and other assistants
- Transports (SSE / streamable HTTP) and authentication
- Demo: calling an n8n test-data workflow from an AI assistant via MCP

**Hour 13 — Testing & Trusting AI Workflows with Evaluations**

- Why evaluate AI workflows: model drift and reliability on the production line
- Evaluations: datasets and metrics (string similarity, categorisation, AI-judge)
- Light evaluations during development vs metric-based evaluations in production
- Tying evaluations into the safe promotion of workflow changes

**Hour 14 — Hands-On Lab: Build & Present an AI Test-Assist Workflow (Day 2)**

- Compose a pipeline: ingest failure data, apply Guardrails, and run a triage agent with a sub-workflow tool
- Add Human-in-the-loop approval before any action, plus error handling
- Add an evaluation to score the agent's output
- Document, version, and present the workflow to peers

## 08 Assessment Method

- Continuous lab exercises
- Trainer observation and technical validation
- Final hands-on mini-project

## 09 Certification

Participants will receive a Certificate of Completion upon successful attendance and participation.

## 10 Tools & Software Required

- Docker and Docker Compose (laptop with administrator rights to run containers)
- Self-hosted n8n (Community Edition, n8n 2.0+), provided as a Docker Compose stack
- PostgreSQL and Redis (run locally via Docker Compose)
- A vector store for the RAG module: Qdrant or PostgreSQL with PGVector (via Docker)
- OpenAI API key or Anthropic API key (for AI Agent, embeddings, and RAG modules)
- Web browser: Chrome or Firefox (latest version)
- Claude Desktop or Cursor (optional, for the MCP server demo in Hour 12)
- Slack or email account (for notification and Human-in-the-loop exercises)

## 11 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| Operational Efficiency | Automated collection, parsing, and reporting of test data, so engineers spend less time on manual, repetitive work |
| Reliability & Scale | Production-grade, self-healing workflows that handle high-volume test data with error recovery and queue-based scaling |
| System Integration | Testers, MES, databases, and internal APIs connected without bespoke integration code |
| Data Sovereignty | Self-hosted, on-premises deployment that keeps sensitive test data and intellectual property in-house |
| AI Augmentation | Safe, evaluated AI agents that triage failures and surface documentation knowledge under Human-in-the-loop control |
