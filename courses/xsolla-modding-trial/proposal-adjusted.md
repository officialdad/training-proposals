# PC Game Modding: From Player to Creator

**TRAINING PROPOSAL** — XSolla Curine Academy

- **Duration:** 3 Hours · Non-HRDC Introductory Session
- **Format:** Onsite · hands-on · academy-provided lab machines
- **Prepared for Review:** September 2026

---

## 01 Session Overview

Four of the most commercially successful genres in gaming did not come from studios. The MOBA came from a Warcraft III custom map. The battle royale came from an ArmA 2 mod. The modern tactical shooter came from a Half-Life mod built by two people. Survival came from DayZ. In every case the creators had no job in the industry — they had a game they owned, the free tools that shipped with it, and the persistence to release something.

That route is still open, and it is the cheapest portfolio a student can build. A published mod is a playable artefact with a public download count and real user feedback attached to it — evidence of shipped work that no coursework assignment can match. Studios recruit from mod communities because a mod page answers the question a CV cannot: can this person finish something other people want to use?

This 3-hour introductory session is built for students weighing a career in games. It is deliberately practical rather than theoretical. Participants trace how mods became genres and how modders became studios, tour a live modding ecosystem through the trainer's own established Nexus Mods account, then write working mod code that changes how a game behaves. They see where the money is — donation points, storefront revenue share, publisher creator programmes — presented honestly as a ladder with real ceilings rather than as a lottery.

The hands-on work uses ZScript, the scripting language of the GZDoom engine. Participants write a few lines of text that inherit from the game's own internal class definitions and override them — making enemies faster, tougher, or explosive, and altering how weapons behave. This is modding as it actually works on modern titles: reading how a game defines its own content, then replacing pieces of it. No programming background is assumed, and every change is testable within seconds.

Participants leave having built and played a working mod of their own, with a clear view of the craft that sits behind a serious one and a route into it. The session is the entry point to a full-day workshop in which participants publish a complete mod under their own name.

## 02 Target Audience

**By Designation**
- Students in game development, computer science, multimedia and digital arts programmes
- Aspiring game designers, technical designers and gameplay programmers
- Students exploring entry routes into the games industry
- Gaming enthusiasts considering a career move into production

**By Industry**
- Game Development and Interactive Entertainment
- Digital Media, Animation and Creative Technology
- Higher Education and Technical Academies

## 03 Entry Requirements

- No prior modding experience required
- No programming experience required — all code written in the session is supplied and explained line by line
- Comfortable using a computer — managing files and folders, using a text editor
- An interest in games as a player is sufficient background

## 04 Session Objectives

At the end of this session, participants will be able to:

1. Trace how specific mods became commercial genres and how mod teams became studios, and explain why studios recruit from modding communities
2. Identify whether a given PC game is moddable by inspecting its installation folder and file structure
3. Read a published mod page — version, requirements, endorsements, download counts, author notes — and judge whether a mod is credible and safe to install
4. Explain how a mod manager organises an installed modlist and why load order determines the final result
5. Assemble a loadable mod package from scratch and confirm the game recognises it
6. Write ZScript that inherits from a game's existing class definitions and overrides its behaviour, then test the result in-engine
7. Describe the routes by which mod authors earn income, and the licensing and community rules that govern published mods

## 05 Learning Outcomes

Upon completion of the session, participants will be able to:

- Recognise the difference between a game that exposes loose, editable files and one that ships assets in a packed archive
- Navigate Nexus Mods to assess a mod's credibility before installing it
- Explain why two working mods can break a game when combined, and how load order resolves it
- Build a correctly structured mod package and load it into a running game
- Modify enemy and weapon behaviour by overriding the engine's own class definitions
- Work an edit-test loop independently — change code, reload, observe, iterate
- Explain what a published mod demonstrates to a hiring studio that a CV does not
- Locate the community infrastructure around a modded game — support channels, documentation and author etiquette
- State the legal boundaries that separate acceptable modding from infringement

## 06 Training Methodology

| Method | Description |
|---|---|
| **Instructor-Led Sessions** | Facilitated walkthroughs of modding history, career routes and toolchains |
| **Live Ecosystem Walkthrough** | The trainer's own established Nexus Mods account and working modlist shown live — real mod pages, real download counts, real load order, real author earnings |
| **Build-Along Labs** | Participants write and run working mod code alongside the trainer, starting from an empty folder |
| **Iterative Edit-Test Practice** | Every change is loaded and played within seconds, so participants learn by observing consequences rather than following instructions |
| **Live Demonstrations** | Trainer-driven demonstration of advanced modding craft beyond the session's scope |
| **Trainer Observation & Feedback** | Live review of participants' code throughout the build lab |

## 07 Session Outline

*3-hour introductory session · approximately 45% hands-on*

| Time | Block | Focus |
|---|---|---|
| 0:00 – 0:25 | **Hook — Mods That Became an Industry** | Three beats. Genres invented by modders: DotA and the MOBA, DayZ and survival, PlayerUnknown's Battle Royale, Counter-Strike, Team Fortress, Dota Auto Chess, tower defence. Mod teams that became studios: Tripwire, Unknown Worlds, New World Interactive, Facepunch, Crowbar Collective. How modders earn today: donation points, Patreon, storefront revenue share, publisher creator programmes, studio employment, founding a studio. Presented as a ladder with honest ceilings at each rung. |
| 0:25 – 0:40 | **Reading a Game Like a Modder** | Participatory. Students open game installation folders on their own machines. Loose editable files versus packed archives. What the presence of a scripting folder, an editor executable or a documented file format tells you. How to check whether a game has an official modding SDK, an active community, or neither. |
| 0:40 – 0:55 | **The Ecosystem — Live Tour** | Trainer's laptop, trainer's own Nexus Mods account. Anatomy of a mod page: version, requirements, permissions, changelog, endorsements, download counts, author notes. Vortex managing a real installed modlist and what load order does. Where donation points appear and what they amount to. This is the ecosystem seen from the outside, before participants step inside it. |
| 0:55 – 1:05 | **Warm-Up — Build an Empty Mod** | Students play a few minutes of the base game to establish how enemies normally behave, then build a mod package from an empty folder and load it. Nothing changes yet — that is the point. The pipeline is proven working before any content exists, so later failures are content failures, not setup failures. |
| 1:05 – 1:20 | **Break** | Buffer for catch-up and individual troubleshooting. |
| 1:20 – 2:30 | **Build Lab — Write a Working Mod** | Incremental, each step loaded and played immediately. Override an enemy's health and speed and feel the difference against the baseline. Make enemies explode on death. Modify a weapon's damage and rate of fire. Stretch task for faster participants: define a new enemy inheriting from an existing one. Throughout, the underlying idea — a mod inherits the game's own class definitions and replaces parts of them — is made explicit, because it is how modding works far beyond this engine. |
| 2:30 – 2:45 | **Demonstration — What a Serious Mod Involves** | Trainer-driven. Unpacking a commercial game's assets, replacing artwork through the art pipeline, building custom levels, and the scale of scripting behind a released mod. Participants observe the depth of craft that sits beyond an introductory session. |
| 2:45 – 2:55 | **Community, Etiquette and the Law** | Where modding communities live and how to ask for help without being ignored. Crediting and permissions between authors. The lines that separate modding from infringement: distributing original assets, paid mods on infringing content, publisher and platform terms. |
| 2:55 – 3:00 | **Routes Forward** | Recap of the career ladder. What a published mod does for a portfolio. Introduction to the full-day workshop pathway. Q&A. |

**Representative lab code.** Participants write and run code of this shape, explained line by line:

```
version "4.10"

class AngryZombie : ZombieMan replaces ZombieMan
{
    Default
    {
        Health 200;
        Speed 12;
    }
}
```

Six lines, and every enemy of that type in the game changes. The immediacy is deliberate — participants see cause and effect within seconds of typing, which sustains a student audience far better than long build cycles.

## 08 Tools & Environment Required

All software is free and openly licensed. No participant purchases and no game licences are required.

**Software — pre-installed by the academy before session day**
- GZDoom engine
- Freedoom asset set (Modified BSD licence — free to use and redistribute, including in commercial training contexts)
- A text editor — Visual Studio Code preferred for syntax highlighting, though the system default editor is sufficient

**Lab machine requirements**
- Windows, macOS or Linux — the toolchain is cross-platform
- Modest specification only; GZDoom runs comfortably on low-end hardware and includes a software renderer
- Working audio output
- Approximately 1 GB free disk space
- Ability to create folders and compressed archives, and to edit and save text files

Lab machines require no Steam installation, no game licences and no internet access for participant work. All participant activity runs on locally installed, freely licensed software. There is no proprietary editor and no specialised graphics requirement.

**Presenter requirements**
- Display connection for the trainer's own laptop — HDMI or USB-C, confirmed working in advance
- Venue network access from the trainer's laptop, reaching Nexus Mods
- The ecosystem tour runs entirely from the trainer's machine and personal modding account

**Access requirements**
- Trainer access to one representative lab machine for a dry run in advance of session day

The environment is deliberately light, but the pre-installation still matters: participant time in this session is short, and machines that need software installed on the day consume the build lab.

## 09 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Tangible output** | Every participant leaves with a working mod they wrote and played |
| **Career clarity** | Participants can name specific, evidenced routes from modding into industry employment |
| **Practical capability** | Participants can package a mod, write code that changes game behaviour, and iterate on it independently |
| **Transferable concept** | Participants understand games as data and class definitions that can be inherited and overridden — the concept underlying modding on most modern engines |
| **Portfolio awareness** | Participants understand what shipped work demonstrates to a hiring studio |
| **Commercial literacy** | Participants understand how mod authors are paid, and the licensing limits on doing so |
| **Progression** | Participants have a defined next step toward publishing a complete mod under their own name |

## 10 Progression Pathway — Full-Day Workshop

This session is an introduction. It establishes the landscape, the career case and a first working mod. It does not cover custom art, level building, or the scale of scripting required to publish work worth showing to a studio.

The full-day workshop continues on the same engine, so no time is lost re-learning tools:

| Duration | Module | Participant Output |
|---|---|---|
| 1.5 h | Advanced scripting | Custom weapons, inventory, enemy state machines and behaviour |
| 1.5 h | Custom assets | Own artwork and sound running in-game through the full art pipeline |
| 1.0 h | Level building | A playable level built in a dedicated level editor, populated with the participant's own content |
| 1.0 h | Reverse engineering | A commercial game's assets unpacked and read |
| 1.0 h | Packaging and publishing | A complete mod published to a public mod host, with a proper mod page |
| 1.0 h | Career and monetisation | Portfolio review, studio recruitment routes, storefront and creator-programme economics |

Full-day participants finish with a published mod URL — a portfolio artefact rather than a certificate.

Note that the level-building module requires Windows machines with OpenGL 3.2 graphics, as the level editor is Windows-native. This constraint applies to the full-day workshop only; the introductory session has no such requirement.
