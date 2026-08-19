# PC Game Modding: From Player to Creator

**TRAINING PROPOSAL** — XSolla Curine Academy

- **Duration:** 3 Hours · Non-HRDC Introductory Session
- **Format:** Onsite · hands-on · academy-provided lab machines
- **Prepared for Review:** September 2026

---

## 01 Session Overview

The MOBA came from a Warcraft III custom map. The battle royale came from an ArmA 2 mod. The modern tactical shooter came from a Half-Life mod built by two people. Survival came from DayZ. None of those creators had a job in the industry. They had a game they owned, the free tools that shipped with it, and the persistence to release something.

That route is still open, and it is the cheapest portfolio a student can build. A published mod has a download count and real user feedback attached to it, which answers a question a CV cannot: can this person finish something other people want to use?

This 3-hour session is for students weighing a career in games. Participants see how mods became genres and how mod teams became studios, tour a live modding ecosystem through the trainer's own Nexus Mods account, then write working mod code that changes how a game behaves. The code is ZScript, the scripting language of the UZDoom engine: a few lines that inherit from the game's own class definitions and override them, so enemies get faster, tougher or explosive and weapons behave differently. No programming background is assumed, and every change is testable within seconds.

Everyone leaves with a working mod they wrote and played, plus an honest view of what a serious mod involves. The session is the entry point to a full-day workshop where participants publish a complete mod under their own name.

## 02 Target Audience

**By Designation**
- Students in game development, computer science, multimedia and digital arts programmes
- Aspiring game designers, technical designers and gameplay programmers
- Gaming enthusiasts considering a career move into production

**By Industry**
- Game Development and Interactive Entertainment
- Digital Media, Animation and Creative Technology
- Higher Education and Technical Academies

## 03 Entry Requirements

- No prior modding or programming experience required. All code written in the session is supplied and explained line by line
- Comfortable using a computer: managing files and folders, using a text editor
- An interest in games as a player is sufficient background

## 04 Session Objectives

At the end of this session, participants will be able to:

1. Explain how specific mods became commercial genres, and why studios recruit from modding communities
2. Judge whether a PC game is moddable by inspecting its installation folder and file structure
3. Read a published mod page and assess whether a mod is credible and safe to install
4. Assemble a loadable mod package from scratch and confirm the game recognises it
5. Write ZScript that overrides a game's existing class definitions, then test the result in-engine
6. Describe how mod authors earn income, and the licensing and community rules that apply to published mods

## 05 Training Methodology

| Method | Description |
|---|---|
| **Instructor-Led Sessions** | Facilitated walkthroughs of modding history, career routes and toolchains |
| **Live Ecosystem Walkthrough** | The trainer's own Nexus Mods account and working modlist shown live: real mod pages, download counts, load order and author earnings |
| **Build-Along Labs** | Participants write and run working mod code alongside the trainer, starting from an empty folder |
| **Iterative Edit-Test Practice** | Every change is loaded and played within seconds, so participants learn from consequences rather than instructions |
| **Trainer Observation & Feedback** | Live review of participants' code throughout the build lab |

## 06 Session Outline

*3-hour introductory session · approximately 45% hands-on*

| Time | Block | Focus |
|---|---|---|
| 0:00 – 0:25 | **Hook: Mods That Became an Industry** | Genres invented by modders. Mod teams that became studios. How modders earn today, presented as a ladder with honest ceilings at each rung. |
| 0:25 – 0:40 | **Reading a Game Like a Modder** | Students open game installation folders on their own machines. Loose editable files versus packed archives, and what a scripting folder or an official SDK tells you. |
| 0:40 – 0:55 | **The Ecosystem: Live Tour** | Trainer's own Nexus Mods account. Anatomy of a mod page. A real installed modlist in Vortex and what load order does. Where donation points appear and what they amount to. |
| 0:55 – 1:05 | **Warm-Up: Build an Empty Mod** | Students play the base game briefly to establish how enemies normally behave, then build and load a mod package containing nothing. Proving the pipeline first means later failures are content failures, not setup failures. |
| 1:05 – 1:20 | **Break** | Buffer for catch-up and individual troubleshooting. |
| 1:20 – 2:30 | **Build Lab: Write a Working Mod** | Incremental, each step loaded and played immediately. Override enemy health and speed. Make enemies explode on death. Change a weapon's damage and rate of fire. Stretch task: define a new enemy inheriting from an existing one. |
| 2:30 – 2:45 | **Demonstration: What a Serious Mod Involves** | Trainer-driven. Unpacking a commercial game's assets, replacing artwork, building custom levels, and the scale of scripting behind a released mod. |
| 2:45 – 2:55 | **Community, Etiquette and the Law** | Where modding communities live and how to ask for help. Crediting and permissions between authors. The lines that separate modding from infringement. |
| 2:55 – 3:00 | **Routes Forward** | What a published mod does for a portfolio. Introduction to the full-day workshop. Q&A. |

## 07 Tools & Environment Required

All software is free and openly licensed. No participant purchases and no game licences are required.

**Software, pre-installed by the academy before session day**
- UZDoom engine, version 4.14.3. UZDoom is the maintained continuation of GZDoom, forked by the original development team in October 2025; it reads GZDoom mods unchanged, and every GZDoom tutorial and wiki page still applies. Pinning the version matters more than the name: all lab machines must run the same one
- Freedoom asset set, version 0.13.0, from the [official release page](https://github.com/freedoom/freedoom/releases/tag/v0.13.0) (Modified BSD licence, free to use and redistribute, including in commercial training). Download `freedoom-0.13.0.zip` and install `freedoom2.wad`; verify it against the `freedoom-0.13.0-CHECKSUM` file published alongside it. The `freedm` download in the same release is deathmatch-only and is not usable for this session
- A text editor. Visual Studio Code preferred for syntax highlighting, though the system default is sufficient

**Lab machines**
- Windows, macOS or Linux. The toolchain is cross-platform and runs on low-end hardware
- Working audio output and roughly 1 GB free disk space
- No Steam, no game licences and no internet access needed for participant work
- Machines older than OpenGL 3.3 still run, on the engine's built-in software renderer. Where that proves too slow, LZDoom 4.14.4 is a drop-in substitute on Windows and Linux and accepts the same lab code, but it has no macOS build

**Trainer requirements**
- Display connection for the trainer's laptop, confirmed working in advance
- Venue network access from the trainer's laptop, reaching Nexus Mods
- Access to one representative lab machine for a dry run before session day

The environment is light, but pre-installation still matters. Participant time is short, and machines that need software installed on the day consume the build lab.

## 08 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Tangible output** | Every participant leaves with a working mod they wrote and played |
| **Career clarity** | Participants can name specific, evidenced routes from modding into industry employment |
| **Practical capability** | Participants can package a mod, write code that changes game behaviour, and iterate on it independently |
| **Transferable concept** | Participants understand games as class definitions that can be inherited and overridden, which is how modding works on most modern engines |
| **Progression** | Participants have a defined next step toward publishing a complete mod under their own name |

## 09 Progression Pathway: Full-Day Workshop

This session establishes the landscape, the career case and a first working mod. It does not cover custom art, level building, or the scale of scripting needed to publish work worth showing to a studio. The full-day workshop continues on the same engine, so no time is lost re-learning tools.

| Duration | Module | Participant Output |
|---|---|---|
| 1.5 h | Advanced scripting | Custom weapons, inventory, enemy state machines and behaviour |
| 1.5 h | Custom assets | Own artwork and sound running in-game |
| 1.0 h | Level building | A playable level built in a dedicated editor, populated with the participant's own content |
| 1.0 h | Reverse engineering | A commercial game's assets unpacked and read |
| 1.0 h | Packaging and publishing | A complete mod published to a public mod host |
| 1.0 h | Career and monetisation | Portfolio review, studio recruitment routes, storefront and creator-programme economics |

Full-day participants finish with a published mod URL rather than a certificate.

The level-building module needs Windows machines with OpenGL 3.2 graphics, since that editor is Windows-native. This applies to the full-day workshop only.
