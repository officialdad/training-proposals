# Fundamental Docker for Application Development: Containerisation, Migration & Recovery

**TRAINING PROPOSAL** — Pejabat SUK Negeri Perak — Bahagian Digital (BO)

- **Duration:** 3 Days · 21 Hours
- **Classification:** Digital Skills
- **Prepared for Review:** July 2026

---

## 01 Course Overview

This programme gives the development and ICT personnel of Bahagian Digital a complete, hands-on path to building, operating, and migrating applications with Docker — from first container to a multi-service stack, and from an existing VM-based system to a lean container-based deployment. It is designed for an audience that already builds and maintains systems but is new to containers: the programme moves quickly past basic setup and spends its time where it matters — containerisation, configuration, multi-environment deployment, VM-to-container migration, and disaster recovery.

The course is built around one realistic, recurring scenario: containerising a typical web application stack — **a reverse proxy, a backend application, a database, and an admin UI** — with Docker Compose, then running it consistently across development, testing, and production. Every concept (images, Dockerfiles, volumes, networking, configuration, security, monitoring, backup) is taught in service of getting that stack running, securing it, recovering it, and migrating an existing VM-hosted workload onto it.

The programme directly addresses Bahagian Digital's modernisation goal: replacing one-VM-per-system architectures with container-based deployment that is lighter, more portable, and easier to scale. By the end, participants will have containerised an application, composed a multi-service system, migrated a VM-based workload, secured and monitored it, and restored it from backup in a disaster-recovery drill.

## 02 Target Audience

**By Designation**
- Application Developers & Software Engineers
- System & Infrastructure Administrators
- DevOps & Platform personnel
- ICT Officers (Pegawai Teknologi Maklumat) and Assistant ICT Officers
- Technical Leads overseeing application delivery and operations

**By Industry**
- Government & Public Sector (state and federal agencies)
- GLCs and statutory bodies
- Technology & IT services
- Any organisation modernising VM-based systems towards containers

## 03 Entry Requirements

- **No prior Docker or container experience required** — the programme builds from first principles
- Comfortable operating a computer, editing files, and installing software; some exposure to a command line is an advantage (not required)
- Basic understanding of what applications, servers, and databases are (the audience develops or maintains such systems)
- **Windows participants:** a laptop running Windows 10/11 (64-bit) with administrator rights and hardware virtualisation enabled in BIOS/UEFI (needed for WSL2); macOS and Linux laptops are also fully supported
- Minimum 8 GB RAM (16 GB recommended) and at least 10 GB free disk space
- Stable internet connection for downloading Docker and images

## 04 Course Objectives

At the end of this programme, participants will be able to:

1. Explain Docker architecture — Docker Engine, images, containers, registries, and volumes — and how each component fits together
2. Configure and manage a Docker environment following operational best practices
3. Build, tag, and manage Docker images using Dockerfiles, and run containers through a hands-on workflow
4. Orchestrate multi-service applications with Docker Compose
5. Deploy containerised applications consistently across development, testing, and production environments
6. Migrate an existing VM-based system to a lighter, scalable container-based deployment
7. Back up and restore containers, volumes, images, and application data for disaster recovery
8. Apply container security, monitoring, logging, and troubleshooting practices in operation

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

- Describe how the Docker Engine, images, containers, registries, and volumes work together
- Configure a Docker environment and apply best-practice settings for reliable operation
- Write Dockerfiles to containerise applications, then build, tag, and push images to a registry
- Compose a multi-service stack (reverse proxy + backend + database + admin UI) and operate it end to end
- Promote a single image through development, testing, and production using environment-specific configuration
- Assess a VM-hosted workload and migrate it to containers, moving its data into volumes
- Back up volumes, images, and databases, then restore a full stack onto a fresh host
- Harden containers and monitor, log, and troubleshoot them in day-to-day operation

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

### Day 1: Docker Foundations, Architecture & Images (7 Hours)

**Hour 1 — Environment Setup for Developers**
- Installing Docker Engine and Docker Compose (Docker Desktop on Windows/macOS; WSL2 on Windows)
- Verifying the installation with `docker run hello-world`
- Connecting VS Code to your working environment
- Orienting around the Docker CLI and where everything lives

**Hour 2 — Containerisation & Docker Architecture**
- Why containers? The problems they solve versus installing software directly
- Virtual machines versus containers — the distinction that drives later migration
- The architecture: Docker Engine, image, container, registry, and volume
- The role of registries (Docker Hub and private registries)

**Hour 3 — Running Containers & Working with Images**
- The container lifecycle: `docker run`, `ps`, `stop`, `rm`
- Pulling and running images from a registry
- Listing, tagging, and inspecting images
- Looking inside a running container with `exec` and `logs`

**Hour 4 — Writing Your First Dockerfile**
- Core instructions: `FROM`, `RUN`, `COPY`, `CMD`, `EXPOSE`
- The build context and `.dockerignore`
- Building and tagging a custom image
- Containerising a sample backend application

**Hour 5 — Image Management & Registries**
- Image layers and how to keep images small and efficient
- A sensible tagging strategy for versioning
- Pushing and pulling images (`docker login`, `push`, `pull`)
- Working with a private registry

**Hour 6 — Data Persistence: Volumes & Bind Mounts**
- Why containers are ephemeral and why it matters
- Named volumes versus bind mounts
- Persisting database and application data
- Inspecting, backing-up-ready, and managing volumes

**Hour 7 — Hands-On Lab: Containerise an Application**
- Write a Dockerfile for a provided application
- Build, tag, and run it with port mapping
- Persist its data with a named volume
- Push the image to a registry and review

### Day 2: Docker Compose, Configuration & Dev/Test/Prod (7 Hours)

**Hour 1 — Container Networking & Why Compose**
- How containers communicate over a shared network
- Reaching another container by its service name (no IP addresses)
- The pain of wiring a multi-container application by hand
- Where Docker Compose fits in

**Hour 2 — Docker Compose Fundamentals**
- Anatomy of `compose.yml` (services, networks, volumes)
- `up`, `down`, `ps`, `logs`, `exec`
- `depends_on` and start order
- Environment files (`.env`) and configuration

**Hour 3 — Building a Multi-Service Stack: Database & Admin UI**
- Defining a database service (MySQL/MariaDB or PostgreSQL)
- Persisting database data with volumes
- Database configuration and credentials
- Wiring an admin UI for visual management

**Hour 4 — Adding the Backend & Reverse Proxy**
- Building the backend service from your Dockerfile in Compose
- Connecting the backend to the database over the Compose network
- Adding an Nginx reverse proxy in front of the stack
- Exposing the stack on a single port and reading per-service logs

**Hour 5 — Configuration & Operational Best Practices**
- Environment-specific configuration without rebuilding images
- Secrets versus plain environment variables
- Restart policies and resource limits (`restart`, CPU/memory)
- Image and Compose best practices for maintainability

**Hour 6 — Development, Testing & Production Workflows**
- One image, many environments: configuration over duplication
- Compose overrides for development versus production
- Build-time versus run-time configuration and environment parity
- Promoting an image from development to testing to production

**Hour 7 — Hands-On Lab: Multi-Service Stack Across Environments**
- Assemble reverse proxy + backend + database + admin UI in one Compose file
- Run the stack with a development override, then a production-style configuration
- Verify end to end and read logs to confirm each service
- Break a service, diagnose it, and fix it

### Day 3: VM Migration, Recovery, Security & Operations (7 Hours)

**Hour 1 — From Virtual Machine to Container: Migration Strategy**
- The cost of one-VM-per-system: footprint, scaling, and portability
- Assessing a VM-hosted workload for containerisation
- Mapping VM components to images, volumes, networks, and configuration
- Lift-and-shift versus re-architecting — choosing the right path

**Hour 2 — Hands-On: Migrating a VM-Based Application**
- Take a provided VM-hosted application and containerise it (Dockerfile + Compose)
- Move its data into named volumes
- Run the containerised version alongside the original
- Validate behaviour and confirm a clean cut-over

**Hour 3 — Backup, Restore & Disaster Recovery**
- Backing up named volumes (tar strategy)
- Saving and loading images (`docker save` / `load`)
- Dumping and restoring databases
- Writing a recovery runbook for service continuity

**Hour 4 — Hands-On: Disaster-Recovery Drill**
- Deliberately destroy the running stack
- Restore volumes, images, and database onto a fresh host
- Bring the stack back up and verify service continuity
- Review what a real recovery would require

**Hour 5 — Container Security Fundamentals**
- Running containers as a non-root user
- Choosing minimal, trusted base images
- Managing secrets and limiting exposed ports and capabilities
- Scanning images and keeping them updated

**Hour 6 — Monitoring, Logging & Troubleshooting**
- Live state with `docker stats`, `events`, and `inspect`
- Log drivers and the basics of centralised logging
- Healthchecks and automatic recovery
- A repeatable troubleshooting checklist for common failures

**Hour 7 — Final Project: Containerise, Migrate, Secure & Recover**
- Migrate a provided VM-style application to a containerised stack
- Secure and configure it for a production-style environment
- Back it up, then restore it to prove recoverability
- Present your deployment and wrap-up

## 08 Assessment Method

- Continuous lab exercises across all three days
- Trainer observation and technical validation
- Final hands-on project: containerise, migrate, secure, and recover a stack

## 09 Certification

Participants will receive a Certificate of Completion upon successful attendance and participation.

## 10 Tools & Software Required

- Laptop with administrator access (Windows 10/11, macOS, or Linux)
- Windows: WSL2 with Ubuntu — **installed during Day 1**
- Docker Engine and Docker Compose (bundled in Docker Desktop on Windows/macOS) — **installed during Day 1**
- Visual Studio Code (with the WSL extension on Windows) — installed during setup
- A container registry account (free Docker Hub tier, or a provided private registry)
- A sample VM-based application and dataset (provided by the trainer) for the migration and disaster-recovery labs
- Stable internet access for downloading tools and images

## 11 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Containerisation** | Confidently containerise the agency's own applications and systems |
| **Multi-Service Orchestration** | Run and operate real multi-service stacks with Docker Compose |
| **Environment Consistency** | Deploy the same image across development, testing, and production reliably |
| **VM Modernisation** | Migrate existing VM-based systems to lighter, portable, scalable containers |
| **Disaster Recovery** | Back up and restore containers, volumes, and data to ensure service continuity |
| **Secure Operations** | Secure, monitor, log, and troubleshoot containers in day-to-day operations |
