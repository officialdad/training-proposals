# Docker for Beginners: Containerise, Compose & Deploy Your Own Stack

**TRAINING PROPOSAL** — TBC

- **Duration:** 3 Days · 21 Hours
- **Classification:** Digital Skills
- **Prepared for Review:** July 2026

---

## 01 Course Overview

This programme gives beginners a complete, hands-on path to running real applications with Docker — from first container to a multi-service stack deployed on their own server. It focuses solely on Docker (no Kubernetes), trading breadth for the depth needed to make participants genuinely self-sufficient by the end of three days.

The course is built around one realistic, recurring scenario: containerising and operating a web stack made of **Nginx, a backend application, a database, and phpMyAdmin** with Docker Compose. Every concept — images, Dockerfiles, volumes, networking, logging, security, backup — is taught in service of getting that stack running, troubleshooting it, securing it, recovering it, and redeploying it without fear.

By the end, participants will not just understand Docker; they will have dockerised an application, composed a multi-service system, deployed it to a server, broken it, fixed it, and restored it from backup.

## 02 Target Audience

**By Designation**
- Software Developers
- System Administrators
- DevOps & Infrastructure Engineers
- IT Support & Operations Personnel
- Technical Leads
- IT Project Managers seeking practical Docker literacy

**By Industry**
- Technology & IT
- Financial Services
- Telecommunications
- E-commerce
- Government & GLCs
- Any organisation deploying web or backend applications

## 03 Entry Requirements

- Basic understanding of software development principles
- Familiarity with the command line (Linux/Terminal)
- Basic knowledge of how web applications and databases fit together is an advantage
- Participants must bring a laptop with admin access and Docker Desktop / Docker Engine installed

## 04 Course Objectives

At the end of this programme, participants will be able to:

1. Explain Docker architecture and distinguish between images, containers, registries, and Docker Compose
2. Install Docker and write, build, and tag their own Dockerfiles
3. Persist data correctly using volumes and bind mounts
4. Orchestrate a multi-service stack (Nginx, backend, database, phpMyAdmin) with Docker Compose
5. Inspect logs, troubleshoot container failures, and configure automatic restarts
6. Apply basic Docker security practices to images and running containers
7. Back up and restore container volumes and database data
8. Deploy and redeploy a containerised stack to their own server with confidence

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

- Describe how the Docker engine, images, containers, and Docker Hub work together
- Write a Dockerfile to containerise a backend application and build an optimised image
- Compose Nginx + backend + database + phpMyAdmin into a single working stack
- Read container logs and diagnose common failures (port conflicts, crash loops, bad mounts)
- Configure restart policies and healthchecks so services recover automatically
- Harden a deployment using non-root users, minimal images, and managed secrets
- Back up a database and named volumes, then restore them on a fresh environment
- Deploy a stack to a Linux server and redeploy a new version safely

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

### Day 1: Docker Architecture, Images & Dockerfiles (7 Hours)

**Hour 1 — Containerisation & Docker Architecture**
- Why containers? Problems they solve vs traditional deployment
- Virtual machines vs containers
- The pieces: image, container, registry, Docker engine (daemon + client)
- The role of Docker Hub

**Hour 2 — Installing Docker & Running Your First Container**
- Installing and verifying Docker
- `docker run`, `ps`, `stop`, `rm` — the container lifecycle
- Pulling and running public images
- Interacting with a running container (`exec`, `logs`)

**Hour 3 — Working with Images & the Docker CLI**
- Listing, tagging, and inspecting images
- Image layers and how they are cached
- Cleaning up images and containers
- Navigating Docker Hub safely

**Hour 4 — Writing Your First Dockerfile**
- Core instructions: `FROM`, `RUN`, `COPY`, `CMD`, `EXPOSE`
- Building and tagging a custom image
- Understanding the build context and `.dockerignore`
- How layer order affects build speed

**Hour 5 — Dockerfiles in Practice**
- Containerising a sample backend application
- Environment variables and `ARG` vs `ENV`
- Exposing ports and defining the start command
- Image best practices: small, reproducible, predictable

**Hour 6 — Data Persistence: Volumes & Bind Mounts**
- Why containers are ephemeral and why it matters
- Named volumes vs bind mounts
- Persisting database and application data
- Inspecting and managing volumes

**Hour 7 — Hands-On Lab: Dockerise a Backend App**
- Write a Dockerfile for a provided backend service
- Build, tag, and run it with port mapping
- Persist its data with a named volume
- Verify the running container and review

### Day 2: Docker Compose — A Real Multi-Service Stack (7 Hours)

**Hour 1 — Container Networking & Why Compose**
- Container networking basics and user-defined networks
- Service-to-service communication by name (DNS)
- The pain of wiring containers by hand
- Where Docker Compose fits in

**Hour 2 — Docker Compose Fundamentals**
- Anatomy of `docker-compose.yml` (services, networks, volumes)
- `up`, `down`, `ps`, `logs`, `exec`
- `depends_on` and start order
- Environment files (`.env`) and configuration

**Hour 3 — Adding the Database & phpMyAdmin**
- Defining a MySQL/MariaDB service
- Persisting database data with volumes
- Database environment configuration and credentials
- Wiring phpMyAdmin to the database for visual management

**Hour 4 — Adding the Backend Service**
- Building the backend service from your Dockerfile in Compose
- Connecting the backend to the database over the Compose network
- Configuration via environment variables
- Healthchecks to confirm the service is ready

**Hour 5 — Nginx as a Reverse Proxy**
- Adding an Nginx service to the stack
- Reverse-proxying requests to the backend
- Serving static content and mounting config
- Exposing the stack on a single public port

**Hour 6 — Compose Operations & Auto-Restart**
- Restart policies (`always`, `unless-stopped`, `on-failure`)
- Reading per-service logs and diagnosing issues
- Rebuilding and redeploying a single service
- Override files and profiles (brief)

**Hour 7 — Hands-On Lab: Full Stack with Compose**
- Assemble Nginx + backend + database + phpMyAdmin in one Compose file
- Bring the stack up and verify end-to-end
- Break a service, read the logs, and fix it
- Review and discussion

### Day 3: Operate, Secure, Recover & Deploy (7 Hours)

**Hour 1 — Logging & Troubleshooting**
- `docker logs`, log drivers, and following output
- Diagnosing crash loops with `inspect` and `exec`
- Common failures: port conflicts, OOM, bad mounts, missing env
- A repeatable troubleshooting checklist

**Hour 2 — Auto-Restart & Self-Healing**
- Restart policies in depth
- Writing `HEALTHCHECK` instructions
- How healthchecks drive automatic recovery
- Debugging a deliberately failing container

**Hour 3 — Basic Docker Security**
- Running containers as a non-root user
- Choosing minimal, trusted base images
- Secrets vs plain environment variables
- Keeping images updated and limiting exposed ports

**Hour 4 — Backup & Restore**
- Backing up named volumes (tar strategy)
- Dumping and restoring the database
- Restoring data onto a fresh stack
- Planning regular backups

**Hour 5 — Deploying to Your Own Server**
- Preparing a Linux server (install Docker & Compose)
- Transferring the project and managing secrets on the server
- Bringing the stack up and surviving reboots
- Confirming the deployment is healthy

**Hour 6 — Redeploy & Maintenance Without Fear**
- The safe redeploy workflow: rebuild, pull, restart
- Rolling back a bad release
- Pruning unused images and volumes
- Lightweight monitoring of a running stack

**Hour 7 — Final Project: Dockerise & Deploy Your Own Stack**
- Dockerise and compose an application of your choice
- Deploy it, then troubleshoot and restart under guidance
- Restore it from a backup to prove recoverability
- Present your stack and wrap-up

## 08 Assessment Method

- Continuous lab exercises across all three days
- Trainer observation and technical validation
- Final hands-on project: dockerise, compose, deploy, and recover a stack

## 09 Certification

Participants will receive a Certificate of Completion upon successful attendance and participation.

## 10 Tools & Software Required

- Laptop with admin access
- Docker Engine / Docker Desktop installed
- Docker Compose
- A code editor (e.g. VS Code)
- Terminal / command-line interface
- A Linux server or VM (provided or cloud) for the Day 3 deployment lab

## 11 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Containerisation** | Confidently dockerise their own applications and systems |
| **Multi-Service Orchestration** | Run real Nginx + backend + database + phpMyAdmin stacks with Compose |
| **Deployment** | Deploy and redeploy containerised stacks to their own servers |
| **Operability** | Troubleshoot container issues using logs, inspection, and healthchecks |
| **Resilience** | Back up and restore data, and recover from failures without fear |
| **Production Confidence** | No longer hesitate to restart or redeploy production containers |
