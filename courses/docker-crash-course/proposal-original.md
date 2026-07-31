# Docker Crash Course: First Container to Cloud Deploy

**TRAINING PROPOSAL** — TBC

- **Duration:** 2 Days · 14 Hours
- **Classification:** Digital Skills
- **Prepared for Review:** 29 & 30 August 2026

---

## 01 Course Overview

This two-day crash course takes participants from never having run a container to deploying a containerised application on a cloud server with a live public URL. It targets the problem every team eventually hits: the application runs on the developer's laptop but breaks on the server. Docker removes that gap by shipping the application and its environment together as one image, so local, staging, and production all run the same thing.

The programme is deliberately hands-on. Participants run a live website inside a container in the first hour, then build up through Dockerfiles, image publishing, volumes, Docker Compose, credential handling, and multi-stage builds — including shrinking a 1.2GB image to roughly 80MB. Day 2 closes with a real deployment: an app plus database, brought up with a single command on a cloud server.

Each day comprises seven hours of instruction with one hour for lunch. No prior Docker or containerisation experience is required and no programming ability is assumed — sample applications are provided. Participants need only be comfortable typing commands in a terminal. Sessions are delivered in a mix of Bahasa Malaysia and English, with all commands, code, and materials in English.

## 02 Target Audience

**By Designation**

- Software Developers with no prior Docker experience
- IT Support Executives
- System Administrators
- Network Engineers
- QA Engineers and Software Testers
- IT Students and Fresh Graduates
- IT staff transitioning into DevOps roles

**By Industry**

- Technology & IT Services
- Banking & Financial Services
- Manufacturing & Engineering
- Government & Public Sector
- Education & Training

## 03 Entry Requirements

- Comfortable working in a terminal or command line (`cd`, `ls`, `mkdir` level is sufficient)
- Basic Linux command familiarity is helpful but not required
- No prior Docker or containerisation experience required
- No programming ability required — sample applications are supplied
- Personal laptop: minimum 8GB RAM, 15GB free storage, and either Windows 10/11 64-bit (WSL2 enabled, virtualisation switched on in BIOS), macOS, or Linux
- Docker Desktop and Visual Studio Code installed, plus free Docker Hub and GitHub accounts registered, before Day 1

## 04 Course Objectives

At the end of this programme, participants will be able to:

1. Run, inspect, and troubleshoot containers using the core Docker CLI commands
2. Write a Dockerfile that builds a working application image, and order its instructions to make use of the build cache
3. Publish versioned images to Docker Hub and pull them on a different machine
4. Persist application data across container restarts and deletions using volumes and bind mounts
5. Run a multi-container application (app plus database) with a single Docker Compose command, supplying configuration and credentials through environment variables and secrets rather than hard-coded values
6. Reduce a 1.2GB image to under 100MB using multi-stage builds and slim base images
7. Deploy a containerised application to a cloud server and expose it on a live public URL

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

- Explain what a container is and how it differs from a virtual machine
- Start, stop, inspect, and debug containers, and read container logs to diagnose failures
- Author, build, tag, and run their own Docker images from a Dockerfile
- Structure a Dockerfile so that dependency layers are cached and rebuilds stay fast
- Push and pull images from Docker Hub with meaningful version tags
- Attach volumes so data survives container restarts, and know when a bind mount is the better choice
- Define an app-plus-database stack in `docker-compose.yml` and bring it up or down with one command
- Keep passwords and configuration out of images using environment variables, `.env` files, and Compose secrets
- Cut image size by an order of magnitude with multi-stage builds and slim base images
- Deploy a containerised stack to a cloud server and share a working public link

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

### Day 1 — Your First Container

**Hour 1 — What Containers Are & Why They Matter**

- The "works on my laptop, breaks on the server" problem and what causes it
- Containers versus virtual machines: what is actually shared and what is isolated
- Images, containers, and registries: the three ideas the rest of the course builds on
- Verifying the local install: `docker version`, `docker run hello-world`

**Hour 2 — Run a Live Website in Your First Hour**

- Pulling an image from Docker Hub with `docker pull`
- `docker run` explained flag by flag: `-d`, `-p`, `--name`
- Port mapping: how `localhost:8080` reaches a process inside the container
- Hands-on: serve a live Nginx website in a container and open it in a browser

**Hour 3 — Start, Stop & Debug Containers**

- Listing and inspecting: `docker ps`, `docker ps -a`, `docker inspect`
- Reading what went wrong: `docker logs`, `docker logs -f`
- Getting a shell inside a running container with `docker exec -it`
- Cleaning up: `docker stop`, `docker rm`, `docker image rm`, `docker system prune`

**Hour 4 — Write Your First Dockerfile**

- Anatomy of a Dockerfile: `FROM`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE`, `CMD`
- Choosing a base image and why the tag matters (`:latest` is not a version)
- `docker build -t` and running the image you just built
- Hands-on: containerise a supplied sample application from an empty Dockerfile

**Hour 5 — Layers, Build Cache & `.dockerignore`**

- How each instruction becomes a layer, and what invalidates the cache
- Dependency-before-source ordering: why `COPY package.json` comes before `COPY .`
- Measuring the difference: a 90-second rebuild reduced to a few seconds
- `.dockerignore`: keeping `node_modules`, `.git`, and secrets out of the build context

**Hour 6 — Publish Your Own Image to Docker Hub**

- Image naming and tagging: `username/app:1.0`
- `docker login` and `docker push`
- Pulling and running your published image on another machine to prove portability
- Public versus private repositories, and sensible tagging habits for a team

**Hour 7 — Hands-On Lab: Containerise & Publish Your Own App (Day 1)**

- Write a Dockerfile for the provided application from scratch
- Optimise instruction order and add a `.dockerignore`
- Build, tag, and push the image to a personal Docker Hub repository
- Pull and run a peer's published image, then debug any failure using `logs` and `exec`

---

### Day 2 — Your First Real App

**Hour 8 — Keep Data Safe When Containers Die**

- Why data written inside a container disappears with the container
- Named volumes: creating, attaching, inspecting, and removing them
- Bind mounts for live source editing during development
- Hands-on: destroy and recreate a database container with its data intact

**Hour 9 — Container Networking Basics**

- Default bridge networking and why two containers cannot see each other by default
- User-defined networks and service discovery by container name
- Publishing ports versus internal-only communication
- Hands-on: connect an application container to a database container by name

**Hour 10 — Connect App & Database with One Command**

- Docker Compose: describing a multi-container stack in `docker-compose.yml`
- Services, volumes, networks, and `depends_on`
- `docker compose up -d`, `logs`, `ps`, `down`, and `down -v`
- Hands-on: replace yesterday's manual `docker run` commands with a single Compose file

**Hour 11 — Handle Passwords the Right Way**

- Why credentials must never be baked into an image or committed to Git
- Environment variables, `.env` files, and Compose variable substitution
- Compose secrets for sensitive values, and file permissions on the host
- Hands-on: move a hard-coded database password out of the image and confirm it is gone

**Hour 12 — Shrink a 1.2GB Image to 80MB**

- Where the weight comes from: build tools, dev dependencies, and full OS base images
- Slim and Alpine base images, and the trade-offs of each
- Multi-stage builds: compile in one stage, copy only the artefact into the next
- Hands-on: measure before and after with `docker images` and confirm the app still runs

**Hour 13 — Deploy to the Cloud with a Live Link**

- Preparing a cloud server: Docker install, firewall, and SSH access
- Moving the stack up: pull from Docker Hub or clone the repository, then `docker compose up -d`
- Restart policies so containers survive a server reboot
- Verifying the deployment: public URL, `docker compose logs`, and basic health checks

**Hour 14 — Hands-On Lab: Deploy Your Own Stack & Present (Day 2)**

- Build a Compose stack combining the application, a database, and a named volume
- Externalise all credentials and apply a multi-stage build to the application image
- Deploy to the provided cloud server and confirm a working public link
- Present the running deployment to peers and walk through the Compose file

## 08 Assessment Method

- Continuous lab exercises
- Trainer observation and technical validation
- Final hands-on mini-project

## 09 Certification

Participants will receive a Certificate of Completion upon successful attendance and participation.

## 10 Tools & Software Required

- Docker Desktop (free — Windows, macOS, or Linux; WSL2 enabled on Windows)
- Visual Studio Code (free)
- Docker Hub account (free tier)
- GitHub account (free tier)
- Terminal access (Windows Terminal, PowerShell, macOS Terminal, or any Linux shell)
- Cloud server for the Day 2 deployment (trainer-provided instance, or a participant's own free-tier VPS with SSH access)
- Laptop meeting the specification in section 03, with software installed and accounts registered before Day 1

## 11 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| Environment Consistency | Removal of "works on my machine" failures — the same image runs across local, staging, and production |
| Onboarding & Setup Speed | Environment setup for a new machine or new team member reduced from days to minutes with a single Compose command |
| Deployment Capability | Participants able to deploy a multi-container application to a cloud server independently, with data persistence and credentials handled correctly |
| Infrastructure Efficiency | Image sizes cut by roughly 90% through multi-stage builds, reducing build times, registry storage, and deployment bandwidth |
| DevOps Readiness | Docker competency established as the prerequisite foundation for CI/CD pipelines and Kubernetes, and a baseline requirement in Malaysian DevOps job listings |
| Take-Home Assets | A containerised application, a GitHub repository, a published Docker image, and continued access to a peer support group |
