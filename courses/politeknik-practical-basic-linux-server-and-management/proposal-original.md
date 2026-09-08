# Practical Basic Linux Server and Management

**TRAINING PROPOSAL** — Politeknik (IEEP)

- **Duration:** 2 Days · 14 Hours
- **Classification:** Technical / Digital Skills (non-HRDC)
- **Prepared for Review:** September 2026

---

## 01 Course Overview

Most of the internet runs on Linux, but students usually meet it for the first time only after they graduate — and often in the middle of their industrial training, with a supervisor waiting. This two-day online programme, delivered under the Industry Expert Engagement Programme (IEEP), closes that gap by taking participants from their very first login on an Ubuntu Server to a live website served from a real domain name.

Day 1 builds the ground floor. Participants learn what an Ubuntu Server actually is and why industry runs on it, read basic system information from the command line, move confidently around the filesystem, and work with files and text without a graphical editor. The day then turns to the part that separates a user from an administrator: users, groups, ownership and permissions. It closes with a practical challenge in which participants stand up a small company's departmental folder structure — ICT, Finance, HR — and then prove the access controls hold by logging in as each user and being correctly refused.

Day 2 puts that server on the network. Participants check connectivity, install OpenSSH Server and administer the machine remotely the way a real engineer does, then manage packages with APT and services with `systemctl`. From there they deploy the same static website twice — first on Apache, then on Nginx — and discover for themselves why the two cannot both hold port 80. The programme finishes with the trainer working live on a real cloud VPS, walking participants along the full path from a public IP address through a DNS A record and the Cloudflare dashboard to a working HTTPS site, before participants publish and verify their own page end to end.

Every command is typed by the participant on their own Ubuntu Server instance. Nothing is copied blind, and nothing is simulated — what they practise here is what they will do on the job.

## 02 Target Audience

**By Designation**

- Politeknik students in Diploma in Information Technology / Digital Technology
- Diploma in Computer Science and Software Engineering students
- Networking, Systems and Cyber Security programme students
- Electrical & Electronic Engineering students taking computing electives
- Final-year students preparing for Latihan Industri (industrial training) placements

**By Industry**

- Education and TVET (Politeknik and community college sector)
- Information Technology and Software Services
- Web Hosting, Cloud and Data Centre Infrastructure
- Telecommunications and Network Services
- Public sector and GLC in-house IT departments

## 03 Entry Requirements

- Basic computer literacy — able to use a web browser, manage files, and type accurately
- **No prior Linux, server or command-line experience is required**
- A laptop or desktop with virtualisation enabled in BIOS/UEFI, or access to a provided cloud instance
- An Ubuntu Server instance reachable and logged into at least once before Day 1 (setup guide issued in advance)
- An SSH client installed — OpenSSH on Linux/macOS, or Windows Terminal / PuTTY on Windows
- A stable internet connection and a working microphone for the online session

## 04 Course Objectives

At the end of this programme, participants will be able to:

1. **Explain** the role of Ubuntu Server in industry and **retrieve** core system information — hostname, CPU, memory, disk and IP address — from the command line
2. **Navigate** the Linux filesystem and **manage** files and directories, including viewing, searching and editing text files
3. **Configure** users, groups, ownership and permissions so that each department can access only its own data
4. **Administer** an Ubuntu Server remotely over SSH and **manage** packages and services using APT and `systemctl`
5. **Deploy** a static website on both Apache and Nginx and reach it via the server's IP address
6. **Compare** Apache and Nginx at an introductory level and **describe** how a public IP, DNS A record, Cloudflare proxy and HTTPS publish a site to the internet

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

- Describe why Linux dominates server infrastructure, and report a server's hostname, CPU, memory, disk and network address without a graphical interface
- Move around the Linux directory tree and create, copy, move, rename, delete, view, search and edit files entirely from the command line
- Create users and groups, grant `sudo` privileges appropriately, and set ownership and read/write/execute permissions that enforce a departmental access boundary
- Verify network connectivity, install and use OpenSSH Server, log into a remote Ubuntu Server, install software with APT and control services with `systemctl`
- Install, start, stop, restart and status-check both Apache and Nginx, deploy a simple HTML site on each, and diagnose the port conflict that arises when both run at once
- Explain, in plain terms, how a domain name resolves to a server's public IP via a DNS A record, what the Cloudflare proxy adds, and why HTTPS matters

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

### Day 1 — Linux Server Essentials

**Hour 1 — Introduction to Linux and Ubuntu Server**

- What Linux is, and what a "server" distribution means in practice
- Why industry runs on Linux — web hosting, cloud, containers, embedded systems
- Desktop vs server: why production servers have no graphical interface
- First login and orientation to the shell prompt

**Hour 2 — Reading the System from the Command Line**

- Essential command-line usage — command structure, arguments, flags, `--help` and `man`
- Identify the machine: `hostname`, `hostnamectl`, `uname`
- Inspect resources: CPU, memory and disk usage
- Find the server's IP address and confirm what it means

**Hour 3 — The Linux Filesystem**

- The directory tree and what actually lives in `/etc`, `/home`, `/var`, `/opt` and `/tmp`
- Absolute vs relative paths
- Navigate between directories and list contents, including hidden files
- Guided practice: locate configuration and log files by path

**Hour 4 — Working with Files and Directories**

- Create, copy, move, rename and delete files and directories
- View file contents — `cat`, `less`, `head`, `tail`
- Search inside and across files with `grep`
- Edit text files in `nano`, and save changes safely

**Hour 5 — Users, Groups and Administrator Privileges**

- Why multi-user separation exists on a server
- Create and manage user accounts
- Create groups and assign members
- Basic `sudo` / administrator privileges and when to use them

**Hour 6 — Ownership and Permissions**

- File ownership — user and group
- Read, write and execute permissions, and what each means for a file vs a directory
- Reading and setting permissions with `chmod` (symbolic and numeric) and `chown`
- Common permission mistakes and how to recognise them

**Hour 7 — Hands-On Lab: Departmental Access Control**

- Create company departments such as ICT, Finance and HR
- Create users and groups for each department
- Create department folders with correct ownership
- Configure permissions so that each user can access only their own department folder
- Verify the boundary — log in as each user and confirm access is correctly granted and correctly refused

### Day 2 — Network, Web Server and Hosting

**Hour 8 — Networking on Ubuntu Server**

- Check IP address, routing table and network connectivity
- Test reachability with `ping` and name resolution basics
- Basic hostname configuration and the static IP concept
- Why a server needs a predictable address

**Hour 9 — Remote Administration with SSH**

- Why remote administration is the normal way servers are managed
- Install and enable OpenSSH Server
- Remote into the Ubuntu Server using SSH from the participant's own machine
- Session basics, safe disconnection, and an introduction to key-based versus password login

**Hour 10 — Packages and Services**

- Basic APT package management — update, search, install, remove
- Service management with `systemctl` — start, stop, restart, enable, status
- Reading service status output to tell running from failed
- Guided practice: install a package and control its service

**Hour 11 — Apache Web Server**

- The basic role of a web server, and what happens when a browser makes a request
- Install Apache
- Start, stop, restart and check the Apache service
- Deploy a simple HTML website into the web root
- Access the website from a browser using the Ubuntu Server IP address

**Hour 12 — Nginx Web Server**

- Brief introduction to Nginx and where it is typically used
- Compare Apache and Nginx at an introductory level
- Install and manage Nginx
- Deploy and test a simple Nginx web page
- Port conflict demonstration — prove that Apache and Nginx cannot both use the same port unless configured differently, and resolve it

**Hour 13 — Trainer Demonstration: Real Web Hosting & Cloudflare**

- Walkthrough on a real cloud / VPS Ubuntu server
- Public IP addresses and domain names — how they relate
- A DNS A record pointing a live domain at the server
- The Cloudflare dashboard and the DNS proxy concept
- HTTPS / SSL explained at a high level
- Open the website using a real domain name

**Hour 14 — Hands-On Lab: Publish and Verify Your Own Site**

- Deploy a personalised HTML page on the participant's own server
- Serve it from Apache, then switch the same content to Nginx
- Verify from a peer's browser over the server IP address
- Troubleshoot the three most common failures — service down, wrong web root, blocked port
- Course wrap-up, self-study pathways and Q&A

## 08 Assessment Method

- Continuous lab exercises
- Trainer observation and technical validation
- Final hands-on mini-project

## 09 Certification

Participants will receive a Certificate of Completion upon successful attendance and participation.

## 10 Tools & Software Required

**Participant**

- Ubuntu Server 24.04 LTS — as a local virtual machine (VirtualBox, VMware Workstation Player or Multipass) or a provided cloud instance
- An SSH client — OpenSSH on Linux/macOS, or Windows Terminal / PuTTY on Windows
- A modern web browser
- A stable internet connection and headset for the online session

**Provided or demonstrated by the trainer**

- Apache HTTP Server and Nginx (installed during the session via APT)
- `nano` text editor (included with Ubuntu Server)
- A live cloud VPS, registered domain name and Cloudflare account — used for the Hour 13 demonstration only; participants are not required to purchase anything
- Pre-session Ubuntu Server setup guide issued to all participants

## 11 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Employability & Industrial Training Readiness** | Participants arrive at Latihan Industri already able to work on a headless Linux server, removing the most common first-week blocker for IT placements |
| **Practical Command-Line Competence** | Students move from graphical-only computing to confident terminal use, the baseline skill assumed by every DevOps, cloud and systems role |
| **Security Awareness Through Permissions** | Hands-on experience of enforcing and then testing an access boundary builds an instinct for least-privilege that theory lessons rarely produce |
| **Applied Web Hosting Understanding** | Participants can explain and demonstrate the full chain from HTML file to public URL — server, service, IP, DNS, proxy and HTTPS |
| **Foundation for Further Study** | The programme leaves participants ready to progress into cloud platforms, containerisation and CI/CD without needing to re-learn Linux fundamentals first |
