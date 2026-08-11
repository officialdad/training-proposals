# Adjustment Notes — xsolla-modding-trial

The original proposed two hands-on labs. The adjusted version drops the first to a trainer-led demonstration and reinvests the time in the second. The trigger was a delivery-realism judgement: a mod-manager lab needs a supported game installed on every machine, and every game Vortex supports is a paid title. Procuring twenty-plus licences for a free trial session is not proportionate, and the setup — installs, accounts, two-factor prompts on unfamiliar machines — would have consumed most of the block it was meant to fill.

## Structure

- **`07` — Lab 1 (Install, Break, Repair) removed.** Replaced by **The Ecosystem — Live Tour** at 0:40–0:55, run from the trainer's own laptop and established Nexus Mods account. Load-order conflict is still taught, but shown on a real working modlist instead of reproduced on twenty machines.
- **`07` — Warm-Up block added** at 0:55–1:05. Cutting Lab 1 left 55 minutes of continuous presentation before any keyboard contact, which is too long for a student audience and risks losing the room before the build lab. The warm-up costs nothing — the machines and starter project are already configured — and puts hands on keys inside the first hour. Students play the starter map, then open that same map in the editor, which makes the play-to-edit relationship physical rather than described.
- **`07` — Build lab extended from 55 to 70 minutes.** The main gain from the restructure. Fifty-five minutes for a non-programmer audience meant rushing three rooms; seventy allows a level the participant is willing to show someone. Also adds slack for the slowest participants without stalling the finish.
- **`07` — Break moved** from 1:10 to 1:05 to sit immediately after the warm-up, so the build lab runs as one uninterrupted 70-minute block.
- **Two demonstration blocks retained deliberately.** The 0:40 tour is the ecosystem seen from outside (what mods look like to a player); the 2:30 demonstration is the craft seen from inside (what building a serious one costs). They are not redundant, and the warm-up between them is the transition.

## Objectives and outcomes

Removing the hands-on mod-manager work invalidated claims the original made. These were downgraded rather than left standing, because a proposal that claims a capability the session does not deliver is a delivery problem waiting to happen.

- **`04` objective 3** — "Install, configure and troubleshoot mods using a mod manager, including diagnosing and resolving a load-order conflict" was split and downgraded. It became two objectives grounded in what a demonstration can actually teach: reading a mod page for credibility (3), and explaining what a mod manager does and why load order matters (4). Both are assessable from observation; neither claims installation skill the participant will not practise.
- **`04`** now lists six objectives rather than five, because of that split.
- **`05` learning outcome** — "Use a mod manager to install multiple mods and resolve the conflicts that result" became "Explain why two working mods can break a game when combined, and how load order resolves it". Verb moved from doing to explaining, matching the delivery method.
- **`05`** gained "Navigate Nexus Mods to assess a mod's credibility before installing it" — a genuine takeaway from the live tour, and arguably more useful to a beginner than mechanical installation steps.
- **`09` Practical capability row** — "install, configure and repair mods independently" was unsupportable once the lab was cut. Rewritten to editor capability plus mod-page assessment.

## Methodology

- **`06` — "Deliberate Failure Exercises" row removed.** It described Lab 1's break-and-repair exercise, which no longer exists.
- **`06` — "Live Ecosystem Walkthrough" row added**, naming the trainer's own account and modlist as the vehicle. Worth stating explicitly in the proposal: a live personal account with real download counts, real endorsements and a real donation-point balance is materially more persuasive than a generic tour, particularly for the income-ladder segment where students are most likely to assume the numbers are invented.
- **`06` — "Hands-On Lab Exercises" row reworded** to describe a warm-up plus one extended lab, rather than implying two full labs.
- **`07` subtitle** — "approximately half is hands-on" corrected to "approximately 45%", which is what 80 minutes of 180 actually is.

## Environment requirements

Cutting Lab 1 simplified the technical rider substantially, and this is worth flagging to the academy as a benefit rather than burying it.

- **`08` — Steam, game licences and lab-machine internet access all removed.** Participant work now runs entirely on locally installed, freely licensed software. An explicit sentence states this, because "no licences required" is the kind of claim an IT department needs in writing before it will schedule the build.
- **`08` — Presenter requirements section added.** The ecosystem tour depends on the trainer's own laptop reaching a projector and reaching Nexus Mods. "We have a projector" and "your laptop can connect to it" are different claims, and the gap between them surfaces at 0:38 with a room watching. Both are now stated as requirements to confirm in advance.
- **`08` — Firewall requirement narrowed** from lab machines to the trainer's laptop only.

## Content deliberately kept identical

- **Section 01 overview** — only the third paragraph changed, to describe the ecosystem tour instead of the mod-manager lab. The historical hook and portfolio argument are the strongest part of the document and are untouched.
- **Section 10 pathway table** — unchanged. The full-day workshop is unaffected by this restructure, and the gatekeeping logic still holds: the trial shows the ceiling, the full day supplies the ladder.
- **Toolchain unchanged** — GZDoom, Ultimate Doom Builder and Freedoom throughout, for both the trial and the full day. Freedoom's Modified BSD licence is what makes the no-licences claim possible, so the licence note stays in the rider.
- **The pre-configuration warning stays**, reworded to reference the build lab rather than both labs. It is the single requirement most likely to be half-done by a venue IT team, and the dry-run access request stays alongside it.

## Open before delivery

- Nexus donation-point figures shown during the ecosystem tour should be pulled fresh in the delivery week rather than quoted from prepared slides — rates and payout thresholds change.
- The starter project file does not yet exist. The build lab fails without it; it is the single highest-priority preparation item.
