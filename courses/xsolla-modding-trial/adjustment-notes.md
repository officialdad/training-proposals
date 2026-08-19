# Adjustment Notes — xsolla-modding-trial

The adjusted version differs from the original in two successive rounds of delivery-realism work. The first removed a lab that depended on paid game licences. The second replaced the remaining lab's toolchain — from a Windows-native level editor producing binary map files, to cross-platform text-based scripting. Both rounds were driven by the same question: what can actually be delivered to a room of students in three hours, on machines a venue will realistically prepare.

## Round 1 — mod-manager lab dropped to demonstration

The original proposed two hands-on labs. The first, installing and troubleshooting mods through a mod manager, needed a supported game installed on every machine, and every title Vortex supports is a paid one. Procuring twenty-plus licences for a free trial session is not proportionate, and the setup — installs, accounts, two-factor prompts on unfamiliar machines — would have consumed most of the block it was meant to fill.

- **`07` — Lab 1 removed**, replaced by **The Ecosystem — Live Tour** at 0:40–0:55, run from the trainer's own laptop and established Nexus Mods account. Load order is still taught, but shown on a real working modlist instead of reproduced on twenty machines.
- **`07` — Warm-Up block added** at 0:55–1:05. Cutting Lab 1 left 55 minutes of continuous presentation before any keyboard contact, too long for a student audience. The warm-up puts hands on keys inside the first hour.
- **`07` — Build lab extended from 55 to 70 minutes**, and the break moved from 1:10 to 1:05 so the lab runs as one uninterrupted block.
- **Two demonstration blocks retained deliberately.** The 0:40 tour is the ecosystem seen from outside; the 2:30 demonstration is the craft seen from inside. The warm-up between them is the transition.
- **`06` — "Deliberate Failure Exercises" row removed** (it described Lab 1's break-and-repair exercise); **"Live Ecosystem Walkthrough" row added**, naming the trainer's own account and modlist as the vehicle. Worth stating in the proposal: real download counts, endorsements and a real donation-point balance are materially more persuasive than a generic tour, particularly in the income segment where students are most likely to assume the numbers are invented.
- **`08` — Steam, game licences and lab-machine internet access removed**, with an explicit sentence stating so, because "no licences required" is the kind of claim an IT department needs in writing before it will schedule the build. **Presenter requirements section added** — the tour depends on the trainer's laptop reaching both a projector and Nexus Mods, and "we have a projector" and "your laptop can connect to it" are different claims that diverge at 0:38 with a room watching.

## Round 2 — level editor replaced with scripting

The remaining lab used Ultimate Doom Builder to build a small level, working from a hand-authored starter map file. Three problems with that, in ascending order of seriousness:

1. The starter map had to be authored by hand before the session, was not reproducible if lost, and existed nowhere yet.
2. Ultimate Doom Builder is Windows-native, with no macOS build and experimental Linux support, and requires OpenGL 3.2 — a requirement that fails silently on virtual desktop infrastructure and thin clients.
3. Beginners lose roughly 20 minutes to sector-drawing mechanics and to failure modes that look like broken software: untextured rooms rendering black, maps refusing to launch for want of a player start.

The replacement uses ZScript, GZDoom's own scripting language. A mod becomes a folder containing one text file. Participants inherit from the engine's existing class definitions and override them.

- **`07` — Build lab rewritten** as incremental scripting: override enemy health and speed, make enemies explode on death, modify weapon damage and fire rate, with a stretch task defining a new enemy by inheritance. Each step loads and plays in seconds, so nobody waits on a build and nobody sits at zero progress.
- **`07` — Warm-up repurposed.** Previously "open the starter map in the editor". Now: play the base game to establish baseline enemy behaviour, then build an empty mod package and load it. Nothing changes, deliberately — the pipeline is proven before content exists, so every later failure is a content failure rather than a setup failure. This is the single most valuable ordering choice in the lab.
- **`07` — Representative code sample added** below the outline table. A six-line class definition, shown so the reader can see concretely what participants produce. Included because "students write mod code" reads as vague and slightly alarming to a non-technical reviewer; six readable lines defuse that.
- **ZScript chosen over DECORATE.** DECORATE is the language most tutorials still show, and it is deprecated — GZDoom retains it for backwards compatibility but no longer uses it internally. Putting career-oriented students on a deprecated language would be a poor look, and ZScript supports the same methods with similar syntax, so there is no beginner-friendliness cost.
- **`08` — Ultimate Doom Builder removed entirely.** With it goes the Windows requirement, the OpenGL 3.2 requirement, the VDI exclusion and the starter map file. Requirements are now any OS, GZDoom, Freedoom and a text editor. Disk space dropped from 2 GB to 1 GB.
- **`08` — Wording softened but not dropped.** The original insisted pre-configuration "is not optional". That framing was load-bearing when machines needed a pre-seeded editor configuration; it is now merely sensible, so the line was rewritten rather than deleted. Overstating a requirement that a venue can visibly ignore without consequence costs credibility on the requirements that genuinely matter.

## Round 3 — engine repointed from GZDoom to UZDoom

Checked against the current state of the ecosystem rather than assumed. GZDoom is no longer the engine to teach on:

1. The GZDoom development team forked the project in October 2025 following a dispute over AI-generated code committed against the team's wishes, and the copyright questions that raised for the commercial games shipping on the engine. The team, the forums and the wiki went with the fork, **UZDoom**.
2. GZDoom's last release is g4.14.2, May 2025. Its repository has taken one commit in all of 2026, and that from an outside contributor. It still runs; it is not being developed.
3. UZDoom 4.14.3 (November 2025) is the current stable release, with Windows, macOS and Linux builds in a single release — the only one of the three ports that covers a mixed lab. 5.0 is in release candidate and deliberately not proposed.

- **`01` and `07` — engine name changed to UZDoom, version pinned to 4.14.3.** The version pin is the part that matters operationally. A room where half the machines run one build and half another produces failures that look like student errors.
- **`07` — one sentence of provenance kept in the proposal.** Naming UZDoom as the continuation of GZDoom is not trivia: participants will search "GZDoom modding", land on GZDoom material, and need to know it still applies. It does — UZDoom is reverse-compatible with pre-fork GZDoom, so the lab code, the wiki and every existing tutorial work unchanged.
- **`07` — LZDoom named as the low-end fallback**, at 4.14.4 and no longer lagging on ZScript version as it historically did. Scoped tightly: Windows and Linux only, no macOS build, so it is a per-machine substitution and not a lab standard.
- **`07` — Freedoom pinned to 0.13.0 with its release URL in the rider.** The release page carries a checksum file and also carries `freedm`, a deathmatch-only asset set that ships no single-player campaign and a reduced monster roster. An academy IT team told only "install Freedoom" can reasonably download the wrong one, and the failure surfaces at 1:20 with nothing for participants to override. Naming the file is cheaper than diagnosing that live.
- **No change to the lab content.** ZScript is identical across GZDoom 4.14.2, UZDoom 4.14.3 and LZDoom 4.14.4. This round changes which binary the academy installs, nothing that happens in the room.
- **Divergence is a future risk, not a present one.** UZDoom does not guarantee compatibility with *future* GZDoom releases. Worth re-checking before any repeat delivery; irrelevant to this one.
- **`09` unchanged.** Ultimate Doom Builder is still current and still actively released, and still Windows-first with no official macOS build, so the full-day platform note stands as written.

## Objectives, outcomes and audience

Both rounds invalidated claims the original made. These were rewritten rather than left standing, on the principle that a proposal claiming a capability the session does not deliver is a delivery problem scheduled in advance.

- **Round 1:** objective 3 — "Install, configure and troubleshoot mods using a mod manager, including diagnosing and resolving a load-order conflict" — was split and downgraded into two objectives a demonstration can genuinely support: reading a mod page for credibility, and explaining what a mod manager does and why load order matters. The matching learning outcome moved from doing to explaining.
- **Round 2:** the level-building objective became two — assembling a loadable mod package (5), and writing ZScript that overrides engine class definitions (6). Objectives now number seven.
- **`05`** gained "Build a correctly structured mod package and load it into a running game" and "Work an edit-test loop independently". The second is deliberately about method rather than content: iterating against observed behaviour is the habit that lets a participant continue alone after the session, and it is the honest description of what the lab drills.
- **`02` designations** — "level designers and technical artists" became "technical designers and gameplay programmers", to match what the session now demonstrates.
- **`03`** gained an explicit line that all code is supplied and explained line by line. Without it, "write ZScript" reads as a programming prerequisite and will deter exactly the students the session is for.
- **`09`** gained a **Transferable concept** row. The lab's real payload is that games are data and class definitions which can be inherited and overridden — that generalises to most modern engines, where a level built in this specific editor would not have.

## Full-day pathway

- **`10` restructured.** Scripting was a full-day module in the original; the trial now covers its basics, so the full day escalates to advanced scripting, and level building moves *into* the full day as a differentiator rather than being spent in the trial. The gatekeeping logic is unchanged and arguably improved: the trial gives a working mod with no custom art, no levels and no publication, which is precisely the gap the paid day fills.
- **`10` carries a platform note.** The level-building module reintroduces the Windows and OpenGL 3.2 requirement that Round 2 removed from the trial. Flagged explicitly in the proposal so it is not discovered during full-day scheduling, and so nobody mistakenly applies the constraint to the trial session.

## Content deliberately kept identical

- **The historical hook** — genres from mods, mod teams to studios, the income ladder — is untouched across both rounds. It is the strongest part of the document and does not depend on the toolchain.
- **Freedoom throughout.** Its Modified BSD licence is what makes the no-licences claim possible, so the licence note stays in the rider.
- **The dry-run access request stays.** It survives both rounds because it is the cheapest insurance available against a venue that agrees to the rider and half-implements it.

## Open before delivery

- Nexus donation-point figures shown during the ecosystem tour should be pulled fresh in the delivery week rather than quoted from prepared slides — rates and payout thresholds change.
- Two loading mechanics need confirming in the dry run: whether UZDoom loads an uncompressed folder directly, which would remove the zipping step from the lab entirely, and whether it accepts a `.zip` extension without renaming to `.pk3`. Neither blocks delivery — the zip-and-rename path is known to work — but either would simplify the warm-up.
- Lab code for all five steps needs writing and testing end to end against the installed UZDoom version before the session. This replaces the starter map file as the main preparation item, and is substantially cheaper: it is text, it is reproducible, and it can be retyped from a slide if anything is lost.
