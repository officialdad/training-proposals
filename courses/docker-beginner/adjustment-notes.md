# Adjustment Notes — Docker for Beginners

Adjustments applied to Taming Tech's `proposal-original.md` to produce `proposal-adjusted.md`. Original is the TP-supplied "Docker for Beginner" outline (3 days / 21 hours). Our brief: rebuild as a **Docker-only** 3-day programme (dropping the Kubernetes content from our 2-day `docker-k8s` base) that delivers the specific objectives requested — architecture literacy, Dockerfile authorship, a real Nginx+backend+database+phpMyAdmin Compose stack, troubleshooting/auto-restart, basic security, backup/restore, and confident self-deployment.

## Scorecard summary

- 🚩 **Objective clarity** — original objectives use "Understand / Learn / Gain proficiency" with no measurable outcome.
- 🚩 **Tooling realism** — objectives promise a backend + database + phpMyAdmin stack, but no outline module names those services; Compose is taught against a generic "multi-service application".
- 🚩 **Day-end labs** — Day 3 ends on "Wrap-Up and Q&A", not a hands-on lab.
- 🚩 **Methodology table** — original has a prose Methodology paragraph, not the standard six-row table.
- ⚠️ **Hour accounting** — original modules sum to 19h while the cover states 21h; module bullets are sparse (≤2 per 1.5h).
- ✅ **Prereq match** — beginner content matches the stated prerequisite; carried over.

## Changes by section

- **Section 04 (Objectives):** Rewrote all objectives with measurable verbs (Explain, Write, Persist, Orchestrate, Inspect, Apply, Back up, Deploy) — fixes the *objective clarity* red flag. Added explicit objectives for volumes/persistence and self-deployment, which the original outcomes implied but never set as objectives.
- **Section 05 (Learning Outcomes):** Added a distinct, demonstrable outcomes list separate from objectives (the original conflated the two) — each outcome maps to a lab.
- **Section 06 (Methodology):** Replaced the prose paragraph with the standard six-row HRDCorp methodology table — fixes the *methodology table* red flag.
- **Section 07 (Course Outline):** Rebuilt as 3 × 7 hours = 21 hours, one heading per hour with 4 bullets each — fixes both *hour accounting* and sparse-bullet issues.
  - **Day 1** expanded image/Dockerfile coverage and added an explicit **Volumes & Bind Mounts** hour (the original never taught data persistence despite promising backup/restore).
  - **Day 2** is now built entirely around the real stack: dedicated hours for **database + phpMyAdmin**, **backend service**, and **Nginx reverse proxy** — fixes the *tooling realism* red flag by naming and delivering every service from the objectives.
  - **Day 3** moved security/backup/troubleshooting here and added **auto-restart & healthchecks** plus **deploy-to-your-own-server** and **redeploy/maintenance** hours, directly serving the "deploy on own server" and "not afraid to redeploy production" outcomes.
  - Every day now ends in a hands-on lab; Day 3's final hour is a build-deploy-recover **project**, not a Q&A — fixes the *day-end labs* red flag.
- **Section 10 (Tools):** Named the concrete toolset (Docker Compose, code editor, and a **Linux server/VM** for the Day 3 deployment lab) — the original only said "laptop with Docker installed", which cannot support a server-deployment outcome.
- **Section 11 (Outcomes & Impact):** Converted the original's flat outcome bullets into the standard impact table, mapped one-to-one to the requested minimum outcomes (dockerise, orchestrate, deploy, troubleshoot, backup/restore, production confidence).

## Carried over unchanged

- Beginner target audience and entry requirements (adequate as supplied).
- Three-day duration and 21-hour envelope.
- In-person, hands-on delivery style.

## Dropped from our 2-day base (`docker-k8s`)

- Kubernetes / Minikube preview — out of scope for a Docker-only course.
- Git/GitHub and CI/CD-with-GHCR hours — replaced by deeper Docker operations, security, and deployment content to fill the extra day.

## Revision — complete-beginner onboarding, Windows WSL2 (2026-06-03)

Follow-up request: participants are **complete beginners with no command-line or Linux background**, mostly on Windows. Adjusted `proposal-adjusted.md` accordingly (original untouched).

- **Section 01 / 02:** State up front that no prior Linux/command-line experience is assumed; added "complete beginners" to the target audience.
- **Section 03 (Entry Requirements):** Removed the command-line prerequisite and the "arrive with Docker installed" assumption. Added the realistic prerequisites for installing in class — Windows 10/11 with admin rights and BIOS/UEFI virtualisation (for WSL2), 8 GB+ RAM, ~10 GB disk, and internet.
- **Section 04 / 05:** Added a setup objective and learning outcome (install/verify WSL2 + Docker Desktop, run basic terminal commands unaided).
- **Section 07 (Day 1):** Opened with two onboarding hours — **Hour 1 WSL2 & Docker Desktop install**, **Hour 2 terminal & Linux survival kit** — before any Docker theory. Merged the former image-CLI and Dockerfile-practice hours to keep Day 1 at 7 hours; Days 2–3 unchanged. Total stays 3 days / 21 hours.
- **Section 10 (Tools):** Tools are now installed during Day 1 rather than assumed; named WSL2 + Ubuntu and noted Docker Desktop bundles Compose.

## Review — objective coverage & beginner-fit trim (2026-06-03)

Verified every requested objective maps to outline hours (architecture → D1H3–H4/D2H1–H2; setup+Dockerfile → D1H1/H5; Compose stack → D2H2–H5; logs/troubleshoot/auto-restart → D3H1–H2; security → D3H3; backup/restore → D3H4; deploy/redeploy → D3H5–H6). No gaps. Then trimmed content that was too advanced or redundant for absolute beginners:

- **Day 2 Hour 1:** dropped "user-defined networks" and the DNS jargon — beginners only need "containers reach each other by service name".
- **Day 2 Hour 4:** replaced a premature healthcheck bullet with reading the backend's logs; healthchecks are now taught once, in depth, on Day 3.
- **Day 2 Hour 6:** retitled "Operating & Updating the Stack"; removed "override files and profiles" (unnecessary for beginners) and the duplicate restart-policy block, keeping one practical `restart: unless-stopped` line.
- **Day 3 Hour 1:** removed "log drivers" and OOM/crash-loop jargon in favour of plain, common failure cases.
- **Day 3 Hour 6:** made monitoring concrete (`docker ps`, `docker stats`, logs) instead of an abstract "lightweight monitoring" line.

## Review — terminal scope & editor (2026-06-03)

Feedback: don't teach much Linux — just the terminal needed to drive Docker — and use a proper editor (VS Code) launched from WSL.

- **Day 1 Hour 1:** added VS Code to the setup (installed and connected to WSL2 alongside Docker Desktop).
- **Day 1 Hour 2:** renamed "Terminal & Linux Survival Kit" → "Terminal Basics & VS Code for Docker". Dropped general Linux commands (`cat`, `nano`, `cp`/`mv`, `sudo`); kept only what's needed to operate Docker — open a terminal, `cd`/`ls` + paths, run a command and read its output, and open the project in VS Code with `code .`.
- **Section 10 (Tools):** specified VS Code with the WSL extension (launched via `code .`) as the editor used throughout.
