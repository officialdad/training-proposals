# COURSE OUTLINE

| Field | Details |
|-------|---------|
| **PROGRAMME TITLE** | Practical Basic Linux Server and Management |
| **OVERVIEW** | Most of the internet runs on Linux, but students usually meet it for the first time only after they graduate. This two-day online programme, delivered under the Industry Expert Engagement Programme (IEEP), takes participants from their very first `ssh` login to a live website served from a real domain name. Day 1 grounds them in the fundamentals — what an Ubuntu Server actually is, how to move around the filesystem from the command line, and how users, groups and permissions keep one department's files out of another department's hands. It closes with a mini practical challenge in which participants stand up a small company's departmental folder structure and prove that the access controls hold. Day 2 moves the server onto the network: remote administration over SSH, package and service management, then deploying the same static website first on Apache and then on Nginx — including a hands-on demonstration of why the two cannot share port 80. The programme finishes with the trainer working on a real cloud VPS, showing participants the full path from a public IP address through a DNS A record and the Cloudflare dashboard to a working HTTPS site. Everything is done at the command line on the participant's own Ubuntu Server instance, so what they practise is what they would do on the job. |
| **LEARNING OUTCOME** | By the end of the session, the participants will be able to: |
| | a) **Explain** the role of Ubuntu Server in industry and **identify** core system information — hostname, CPU, memory, disk and IP address |
| | b) **Manage** files and directories from the command line, including viewing, searching and editing text files |
| | c) **Configure** users, groups, ownership and permissions so that each department can access only its own data |
| | d) **Administer** an Ubuntu Server remotely over SSH, and manage packages and services using APT and `systemctl` |
| | e) **Deploy** a static website on both Apache and Nginx and reach it via the server's IP address |
| | f) **Compare** Apache and Nginx and **describe** how a public IP, DNS A record, Cloudflare proxy and HTTPS publish a site to the internet |
| **DURATION** (days) | 2 day(s) (14 hours / 840 minutes) — online delivery, 14–15 September 2026 |
| **TARGET PARTICIPANTS** | Politeknik students enrolled in Information Technology, Computer Science, Networking and related engineering programmes. No prior Linux or server administration experience is required. Participants must have basic computer literacy, a stable internet connection for the online session, and access to an Ubuntu Server instance — a local virtual machine (VirtualBox, VMware or Multipass) or a provided cloud instance — with an SSH client installed before Day 1. |

## COURSE CONTENT (with submodules)

| Module | Submodules |
|--------|------------|
| **Opening** | O.1 Icebreaker and participant introduction |
| | O.2 Trainer introduction |
| | O.3 Course overview |
| | O.4 Lab environment check — every participant reaches their Ubuntu Server |
| **DAY 1 — Linux Server Essentials** | |
| **Module 1: Ubuntu Linux Essentials** | 1.1 Brief introduction to Linux and Ubuntu Server |
| | 1.2 Linux server use in industry |
| | 1.3 Basic system information — hostname, CPU, memory, disk and IP address |
| | 1.4 Essential command-line usage |
| **Module 2: File and Directory Management** | 2.1 Linux filesystem and important directories |
| | 2.2 Navigate between directories |
| | 2.3 Create, copy, move, rename and delete files and directories |
| | 2.4 View, search and edit text files |
| **Module 3: Users, Groups and Permissions** | 3.1 Create and manage users and groups |
| | 3.2 Basic sudo / administrator privileges |
| | 3.3 File ownership and permissions |
| | 3.4 Read, write and execute permissions |
| **Day 1 Mini Practical Challenge** | MC.1 Create company departments such as ICT, Finance and HR |
| | MC.2 Create users and groups for the departments |
| | MC.3 Create department folders |
| | MC.4 Configure permissions so users can access only the correct department folder |
| | MC.5 Verification — log in as each user and prove the access boundary holds |
| **DAY 2 — Network, Web Server and Hosting** | |
| **Module 4: Network and Remote Administration** | 4.1 Check IP address, route and network connectivity |
| | 4.2 Basic hostname and static IP concept |
| | 4.3 Install and use OpenSSH Server |
| | 4.4 Remote into Ubuntu Server using SSH |
| | 4.5 Basic APT package management and `systemctl` service management |
| **Module 5A: Apache Web Server** | 5A.1 Explain the basic role of a web server |
| | 5A.2 Install Apache |
| | 5A.3 Start, stop, restart and check the Apache service |
| | 5A.4 Deploy a simple HTML website |
| | 5A.5 Access the website using the Ubuntu Server IP address |
| **Module 5B: Nginx Web Server** | 5B.1 Brief introduction to Nginx |
| | 5B.2 Compare Apache and Nginx at an introductory level |
| | 5B.3 Install and manage Nginx |
| | 5B.4 Deploy and test a simple Nginx web page |
| | 5B.5 Port conflict demonstration — Apache and Nginx cannot both use the same port unless configured differently |
| **Module 6: Trainer Demonstration — Real Web Hosting & Cloudflare** | 6.1 Show a real or prepared cloud / VPS Ubuntu server |
| | 6.2 Explain public IP address and domain name |
| | 6.3 Show a DNS A record pointing a domain to the server |
| | 6.4 Show the Cloudflare dashboard and the DNS proxy concept |
| | 6.5 Explain HTTPS / SSL at a high level |
| | 6.6 Open the website using a real domain name |
| **Closing** | C.1 Recap — from first login to a live site on a real domain |
| | C.2 Where to go next — self-study paths and free practice environments |
| | C.3 Q&A |

## LEARNING METHODOLOGIES

| Methodology | Description |
|-------------|-------------|
| Instructor-Led Technical Sessions | Trainer-led explanation of Linux concepts, the permission model and web server roles (Modules 1–3, 5A) |
| Live Terminal Demonstration | Trainer types every command on screen before participants repeat it, so nothing is copied blind (all modules) |
| Guided Hands-On Labs | Each participant works on their own Ubuntu Server instance throughout — minimum 70% of session time is at the command line |
| Scenario-Based Mini Challenge | Day 1 closes with a departmental access-control scenario participants build and then verify themselves |
| Comparative Practical | Deploying the same site on Apache and then Nginx, including the port conflict, so the comparison is observed rather than described (Modules 5A–5B) |
| Trainer Demonstration on Live Infrastructure | Watch-and-discuss walkthrough on a real cloud VPS, domain and Cloudflare account (Module 6) |
| Trainer Observation & Feedback | Screen-share checkpoints at the end of each module; individual help during labs |
| Q&A and Reflection | Structured Q&A at the end of each module and a learning-outcome review at course close |

## ASSESSMENT & EVALUATION

| Criteria | Method | Bloom's Level |
|----------|--------|---------------|
| Explain the role of Ubuntu Server in industry and identify core system information | Verbal Q&A concept check plus command output shown by the participant (Module 1) | Understanding |
| Manage files and directories from the command line | Guided lab checkpoint — required directory tree and edited file present on the participant's server (Module 2) | Application |
| Configure users, groups, ownership and permissions for departmental access | Day 1 Mini Practical Challenge — trainer verifies each user can reach only their own department folder (Mini Challenge) | Application |
| Administer an Ubuntu Server remotely using SSH, APT and systemctl | Lab checkpoint — successful SSH session, package install and service restart demonstrated live (Module 4) | Application |
| Deploy a static website on both Apache and Nginx | Hands-on output review — page served over the server IP from Apache, then from Nginx (Modules 5A–5B) | Application |
| Compare Apache and Nginx, and describe how DNS, Cloudflare and HTTPS publish a site | Discussion check on the port conflict result plus Q&A during the live hosting demonstration (Modules 5B–6) | Analysis |
