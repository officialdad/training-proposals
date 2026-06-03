# Docker for Beginners: Containerise, Compose & Deploy Your Own Stack

**TRAINING PROPOSAL** — TBC

- **Duration:** 3 Days · 21 Hours
- **Classification:** Digital Skills
- **Prepared for Review:** July 2026

---

## 01 Course Overview

This programme gives beginners a complete, hands-on path to running real applications with Docker — from first container to a multi-service stack deployed on their own server. It focuses solely on Docker (no Kubernetes), trading breadth for the depth needed to make participants genuinely self-sufficient by the end of three days. The programme assumes **no prior Linux or command-line experience** — Day 1 begins by setting up a working environment on Windows with WSL2 and Docker Desktop, plus a short terminal survival kit, before any Docker concept is introduced.

The course is built around one realistic, recurring scenario: containerising and operating a web stack made of **Nginx, a backend application, a database, and phpMyAdmin** with Docker Compose. Every concept — images, Dockerfiles, volumes, networking, logging, security, backup — is taught in service of getting that stack running, troubleshooting it, securing it, recovering it, and redeploying it without fear.

By the end, participants will not just understand Docker; they will have dockerised an application, composed a multi-service system, deployed it to a server, broken it, fixed it, and restored it from backup.

## 02 Target Audience

**By Designation**
- Complete beginners new to Docker, Linux, and the command line
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

- **No prior Docker, Linux, or command-line experience required** — the programme starts from environment setup and terminal basics
- Comfortable using a computer and installing software
- Basic understanding of what web applications and databases are is an advantage (not required)
- **Windows participants:** a laptop running Windows 10/11 (64-bit) with administrator rights and hardware virtualisation enabled in BIOS/UEFI (needed for WSL2); macOS and Linux laptops are also fully supported
- Minimum 8 GB RAM (16 GB recommended) and at least 10 GB free disk space
- Stable internet connection for downloading WSL2, Docker Desktop, and images

## 04 Course Objectives

At the end of this programme, participants will be able to:

1. Set up a working Docker environment on Windows using WSL2 and Docker Desktop, and navigate the terminal with confidence
2. Explain Docker architecture and distinguish between images, containers, registries, and Docker Compose
3. Write, build, and tag their own Dockerfiles
4. Persist data correctly using volumes and bind mounts
5. Orchestrate a multi-service stack (Nginx, backend, database, phpMyAdmin) with Docker Compose
6. Inspect logs, troubleshoot container failures, and configure automatic restarts
7. Apply basic Docker security practices to images and running containers
8. Back up and restore container volumes and database data
9. Deploy and redeploy a containerised stack to their own server with confidence

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

- Install and verify WSL2 and Docker Desktop on Windows and run basic terminal commands unaided
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

### Day 1: Setup, Docker Foundations & First Images (7 Hours)

**Hour 1 — Getting Started on Windows: WSL2 & Docker Desktop**
- What WSL2 is and why Windows needs it to run Docker
- Turning on WSL2 and installing Ubuntu (guided, step by step)
- Installing Docker Desktop and connecting it to WSL2
- Verifying everything with `docker run hello-world`

**Hour 2 — Terminal & Linux Survival Kit (for absolute beginners)**
- What the command line is and how to open a terminal
- Moving around: `pwd`, `ls`, `cd`, and how file paths work
- Working with files: `cat`, `nano`, copying, moving, and `sudo`
- Reading command output and recovering from typos and errors

**Hour 3 — Containerisation & Docker Architecture**
- Why containers? Problems they solve vs installing software directly
- Virtual machines vs containers
- The pieces: image, container, registry, and the Docker engine
- The role of Docker Hub

**Hour 4 — Running Containers & Working with Images**
- `docker run`, `ps`, `stop`, `rm` — the container lifecycle
- Pulling and running public images from Docker Hub
- Listing, tagging, and inspecting images
- Looking inside a running container with `exec` and `logs`

**Hour 5 — Writing Your First Dockerfile**
- Core instructions: `FROM`, `RUN`, `COPY`, `CMD`, `EXPOSE`
- Building and tagging a custom image
- The build context and `.dockerignore`
- Containerising a sample backend application

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

- Laptop with administrator access (Windows 10/11, macOS, or Linux)
- Windows: WSL2 with Ubuntu — **installed during Day 1**
- Docker Desktop (bundles Docker Engine and Docker Compose) — **installed during Day 1**
- A code editor such as VS Code — installed during setup
- Stable internet access for downloading tools and images
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
