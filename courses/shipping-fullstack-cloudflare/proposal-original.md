# Shipping Fullstack Web Applications with Cloudflare Workers

**TRAINING PROPOSAL** — Agmo Academy

- **Duration:** 1 Day · 8 Hours
- **Classification:** Digital Skills
- **Prepared for Review:** May 2026

---

## 01 Course Overview

The transition from writing code to shipping production software is one of the most critical skills a fullstack developer must develop. This 1-day programme bridges that gap for fresh graduates, providing a hands-on pathway from a local Angular application to a fully deployed, live web application hosted on Cloudflare's global edge network.

Participants will work with Cloudflare Workers — a modern, unified platform that serves static frontends, serverless APIs, and relational databases from a single project and a single deploy command. Using tools they already know — Git, GitHub, and Angular — participants will configure automated deployment pipelines, manage environment variables, and ship a complete fullstack application by the end of the day.

The programme is designed for graduates entering fullstack or frontend-leaning developer roles, with a focus on practical employability: every skill taught maps directly to tasks found in junior developer job descriptions across Malaysian technology companies and globally-connected startups.

## 02 Target Audience

**By Designation**
- Fresh Graduate (Unemployed)

**By Industry**
- All sectors

## 03 Entry Requirements

- Completed Angular web development training
- Completed AI programming training
- Familiar with GitHub best practices
- Command line and Git/GitHub familiarity

## 04 Course Objectives

At the end of this programme, participants will be able to:

1. Explain the journey from code commit to live production URL in a modern fullstack workflow
2. Configure GitHub Actions to automatically build and deploy an Angular application on every push
3. Build and deploy a serverless API using Cloudflare Workers alongside an Angular SPA frontend
4. Provision and query a Cloudflare D1 database from a Workers function
5. Manage environment variables, secrets, and production rollbacks as a fullstack developer
6. Ship a complete fullstack application — frontend, API, and database — to a live URL using a single deploy command

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

- Describe the modern fullstack delivery loop and the role of CI/CD in daily development
- Set up GitHub Actions to automate build, test, and deploy on every code push
- Build and deploy a Cloudflare Workers project that serves an Angular SPA and a JSON API from a single codebase
- Create and query a D1 database from a Workers API handler
- Configure environment variables and secrets, and perform a production rollback in Cloudflare Workers
- Deliver a live, publicly accessible fullstack application using Cloudflare's free tier

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

*1-day programme · 8 hours of intensive, hands-on learning*

**Hour 1 — The Modern Fullstack Delivery Loop**
- From code commit to live URL: how production apps ship today
- The role of CI/CD in the daily developer workflow
- Introducing Cloudflare Workers as a unified fullstack platform
- *(Note for career growth: containers and Docker underpin enterprise deployments — a path explored further in DevOps roles)*

**Hour 2 — Setting Up Cloudflare Workers with Wrangler**
- Installing Wrangler CLI and authenticating with a Cloudflare account
- Scaffolding a new project with `wrangler init` and understanding `wrangler.toml`
- Deploying "Hello World" to a live URL with `wrangler deploy`
- Exploring the Cloudflare dashboard: Workers, routes, and subdomains

**Hour 3 — Serving an Angular SPA from a Worker**
- Building an Angular application for production (`ng build`)
- Configuring the `ASSETS` binding in `wrangler.toml` to serve static files
- Enabling SPA routing with `not_found_handling: single-page-application`
- Testing the deployed Angular app on a live Workers subdomain

**Hour 4 — Building a Serverless API with Workers**
- Writing a fetch handler to route API requests via `/api/*` prefix
- Returning structured JSON responses from Worker functions
- Handling CORS so the Angular frontend can call the API
- Testing endpoints with the Wrangler local dev server and browser DevTools

**Hour 5 — Adding a Database with Cloudflare D1**
- Creating a D1 database with `wrangler d1 create`
- Defining a schema and running SQL migrations via Wrangler
- Binding D1 to the Worker and querying it from an API handler
- Returning database records as JSON to the Angular frontend

**Hour 6 — Secrets, Environment Variables, and Preview URLs**
- Storing secrets with `wrangler secret put` vs. `wrangler.toml` vars
- Creating preview environments for feature branches
- Reading environment configuration in both Workers and Angular
- Understanding production vs. preview deployment separation

**Hour 7 — GitHub Actions: Automating the Deploy Pipeline**
- Writing a GitHub Actions workflow to build and deploy on push to `main`
- Storing the Cloudflare API token as a GitHub Secret
- Triggering preview deploys automatically on pull requests
- Reading deploy logs and diagnosing build failures

**Hour 8 — Hands-On Lab: Ship a Complete Fullstack App**
- Build end-to-end: Angular frontend + Workers API + D1 database
- Configure GitHub Actions for automated deployment
- Deploy to a live URL, verify all routes, and confirm database integration
- Simulate a bad deploy, perform a rollback, and inspect production logs

## 08 Assessment Method

- Continuous lab exercises
- Trainer observation and technical validation
- Final hands-on mini-project

## 09 Certification

Participants will receive a Certificate of Completion upon successful attendance and participation.

## 10 Tools & Software Required

- Node.js (v18+)
- Visual Studio Code
- Git & GitHub account
- Cloudflare account (free tier)
- Wrangler CLI (`npm install -g wrangler`)
- Angular CLI (`npm install -g @angular/cli`)
- Modern web browser (Chrome or Edge recommended)

## 11 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Job Readiness** | Participants graduate with a live, deployed fullstack application to showcase in interviews and portfolios |
| **CI/CD Proficiency** | Participants can configure automated deployment pipelines using GitHub Actions — a skill present in most junior developer job descriptions |
| **Fullstack Confidence** | Participants can independently build and ship applications with a frontend, API, and database layer without relying on a separate DevOps team |
| **Cloud-Native Awareness** | Participants understand serverless architecture and edge deployment, positioning them for roles in modern software companies |
| **Continued Learning Pathway** | Participants are equipped to explore containerisation (Docker), Kubernetes, and enterprise DevOps practices as their careers progress |
