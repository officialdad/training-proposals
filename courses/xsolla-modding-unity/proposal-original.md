# Unity Game Modding: From Decompiler to Published Mod

**TRAINING PROPOSAL** — XSolla Curine Academy

- **Duration:** 1 Day · 7 Hours
- **Classification:** Technical / Digital Skills (non-HRDC)
- **Prepared for Review:** November 2026

---

## 01 Course Overview

A mod for this game is a C# assembly the author compiles and loads into a running commercial title that never shipped a modding API. Nothing in the game invites it. The mod scene exists because people opened the binary and read it.

That is the step this day teaches, and it is the one that separates a modder from someone following a tutorial. The full-day workshop before it worked inside an engine that publishes its own class definitions and expects them to be overridden. A shipped commercial game publishes nothing. The classes are still there and the method names are still there, but finding the one that sets a card's price means decompiling the game and going looking.

The target is TCG Card Shop Simulator: a Unity game built by a solo Malaysian developer in Kuala Lumpur, with Ringgit as an in-game currency, Overwhelmingly Positive reviews on Steam, and an active mod community on both Thunderstore and Nexus Mods. It is a commercial title with real players, and its mods carry real download counts. It is also a Unity Mono build, so its assembly decompiles into readable C# rather than machine code. That single property is the difference between a day of modding and a day of tooling.

Participants install a plugin loader, decompile the game, find the method behind a behaviour they can see on screen, and patch it while the game runs. They then extend that patch into a mod other people can use: configurable values, custom content, their own artwork, and an on-screen readout. The day ends with the mod packaged and published to a public mod host under the participant's own name, for a game tens of thousands of people are playing.

The technique generalises. Most PC games ship on Unity, and most of them ship with no modding API at all.

## 02 Target Audience

**By Designation**
- Graduates of the introductory and full-day modding workshops
- Aspiring gameplay programmers, technical designers and tools engineers
- Game development, computer science and multimedia students building a portfolio
- Junior developers seeking evidence of shipped, publicly used work

**By Industry**
- Game Development and Interactive Entertainment
- Digital Media, Animation and Creative Technology
- Higher Education and Technical Academies

## 03 Entry Requirements

- Completion of the full-day modding workshop, or equivalent experience packaging and loading a mod
- Basic programming in any C-like language. C# is not assumed, and every line written in the labs is supplied and explained
- Comfortable managing files and folders and working in a code editor
- A Steam account, created and verified before session day

## 04 Course Objectives

At the end of this programme, participants will be able to:

1. Determine whether a shipped PC game is modifiable by identifying its engine and scripting backend
2. Decompile a game assembly and locate the class and method responsible for an observed behaviour
3. Install a BepInEx plugin loader into a commercial game and confirm it attached
4. Write a Harmony patch that changes a running game's behaviour without editing game files
5. Expose a mod's values through a configuration file so end users tune it without rebuilding
6. Add custom content, replacement artwork and on-screen UI to a shipped game
7. Package and publish a mod to a public mod host with correct metadata, dependencies and versioning

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

- Inspect an unfamiliar game installation and state whether it can be modded, and by which method
- Navigate a decompiled assembly to trace a visible in-game effect back to its source method
- Build, load and debug a C# plugin against a commercial game
- Apply prefix and postfix patches, and diagnose a patch that fails to apply
- Ship a mod that other players can configure, install and understand
- Publish a versioned mod package and maintain it against future game updates
- Judge what modding a commercial title permits, in licence terms and in community terms

## 06 Training Methodology

| Method | Description |
|---|---|
| **Instructor-Led Technical Sessions** | Expert-facilitated sessions with technical depth |
| **Hands-On Lab Exercises** | Minimum 70% practical application throughout |
| **Live Demonstrations** | Real-time walkthroughs of the trainer's own published mods and mod pages |
| **Real-World Deployment Scenarios** | A commercial game with an active player base as the working target |
| **Guided Lab Environments** | Pre-pinned game build and pre-installed toolchain on every machine |
| **Trainer Observation & Feedback** | Continuous feedback and technical validation |

## 07 Course Outline

*1-day programme · 7 hours of intensive, hands-on learning*

**Hour 1 — How a Shipped Game Is Built, and Why Mods Still Work**

- Unity Mono against IL2CPP, and how to tell which one a game shipped
- Where a Unity game keeps its code, its assets and its configuration
- Live tour: the game's mod pages on Thunderstore and Nexus Mods, with download counts and dependency chains
- What each category of mod actually changes — behaviour, content, interface, assets, tooling

**Hour 2 — Lab: Prove the Pipeline**

- Install the BepInEx loader into the game directory
- First launch, log output, and confirming the loader attached
- Compile and load an empty plugin that writes one line to the log
- Nothing changes in game, deliberately. Setup failures are separated from content failures before content exists

**Hour 3 — Lab: Read the Game**

- Decompile `Assembly-CSharp.dll` and navigate its namespaces
- Locate the classes governing money, pricing and customer behaviour
- Inspect the running scene live with UnityExplorer: objects, components and field values
- Trace one visible on-screen behaviour back to the method that produces it

**Hour 4 — Lab: Patch a Running Game**

- Prefix and postfix patches, and when each one applies
- Postfix a pricing or payout method, load the game, observe the result
- Read the patched values back out of the log to confirm the patch ran
- Failure drill: a patch that silently does not apply, and how to identify it

**Hour 5 — Lab: From Hack to Mod**

- Configuration entries and the config file BepInEx generates from them
- Expose the patch's values so players tune the mod without a rebuild
- Add an in-game settings panel through Configuration Manager, with no custom interface code
- Declare version and dependencies so the mod survives installation by a stranger

**Hour 6 — Lab: Content, Assets and Interface**

- Add a sellable item through data and a prefab, with no new game logic
- Replace a sprite or texture with the participant's own artwork at runtime
- Draw a live on-screen readout using the game's own canvas
- Each participant finishes one of the three to a working, demonstrable state

**Hour 7 — Hands-On Lab: Package, Publish and Survive the Next Patch**

- Package structure, manifest, icon, README and semantic version
- Upload to Thunderstore, and the Nexus Mods alternative
- What a game update breaks, how authors detect it, and how they respond
- Permissions, crediting, developer relations, and an honest account of what this work pays

## 08 Assessment Method

- Continuous lab exercises
- Trainer observation and technical validation
- Final hands-on mini-project: a published, installable mod under the participant's own name

## 09 Certification

Participants will receive a Certificate of Completion upon successful attendance and participation.

## 10 Tools & Software Required

**Game licence**

- TCG Card Shop Simulator, one Steam licence per participant seat. Steam permits no concurrent sharing of a single licence across machines, so seat count equals licence count
- The game build must be pinned and identical on every lab machine. The title is in Early Access and updates frequently, and a room running two builds produces failures that look like participant errors
- The free Prologue release is not a substitute for the publishing hour. Mods written against it have no audience

**Software, pre-installed by the academy before session day**

- BepInEx 5, x64 Mono pack, installed into the pinned game directory and confirmed working
- ILSpy, or dnSpy, for decompiling the game assembly
- .NET SDK 8 and a C# editor. Visual Studio Code with the C# Dev Kit, or Visual Studio Community
- UnityExplorer, for live inspection of the running scene
- A Thunderstore mod manager, r2modman or Gale

**Lab machines**

- Windows 10 or 11, 64-bit. The game ships no macOS or Linux build, so this course is Windows-only
- GTX 1050 class graphics or better, 8 GB RAM, roughly 10 GB free disk space
- Internet access is required throughout, reaching Steam, Thunderstore and the NuGet package feed. This differs from the introductory session, which needed none
- A Steam account signed in on each machine, with the game in its library, before participants arrive

**Trainer requirements**

- Display connection for the trainer's laptop, confirmed working in advance
- Venue network access from the trainer's laptop, reaching Thunderstore and Nexus Mods
- Access to one representative lab machine for a full dry run, including a compile and load cycle, before session day

The licence procurement and the build pin are the two items that decide whether this session runs. Both need confirming well before the delivery week.

## 11 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Tangible output** | Every participant leaves with a mod published under their own name, for a commercial game with an active player base |
| **Portfolio evidence** | A public mod page with a download count, a version history and user feedback attached, which coursework cannot produce |
| **Transferable capability** | The decompile, patch and package method applies to most Unity titles, including those with no modding API |
| **Technical depth** | Participants read compiled code, patch a running process and debug across a boundary they do not control |
| **Local industry connection** | The working target is a Malaysian-built commercial success, which makes the route from this room to a shipped title concrete rather than aspirational |
| **Progression** | Participants are positioned for engine-level work: custom tooling, mod frameworks, and building games that support user-generated content by design |
