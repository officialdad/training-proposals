# Adjustment Notes — docker-crash-course

The adjusted version is a deliberate re-targeting, not a realism fix. The original is written for an HRDCorp SBL submission; the adjusted version is written for a self-funded public class where the reader is the participant paying, not a grant officer reviewing.

## Audience and language

- **Whole document:** Rewritten in Bahasa Malaysia (mixed with English for commands and tool names) — target reader is a Malaysian IT practitioner paying out of pocket, not an HRDCorp assessor.
- **Whole document:** Technical jargon removed from all headings and bullets. "Multi-stage build" became "bina di satu tempat, ambil hasil sahaja ke tempat akhir". "Named volume" became "simpanan luar container". "Bind mount" became "sambung folder laptop sendiri". The concepts are unchanged; only the labels are plain.
- **Whole document:** Register normalised to standard written Malaysian Malay after a term-by-term sweep. Spoken contractions were replaced (`kat` → `di`, `ni`/`tu` → `ini`/`itu`, `tak` → `tidak`, `nak` → `mahu`, `dah` → `sudah`, `macam` → `seperti`, `tengok` → `lihat`, `betul-betul` → `benar-benar`, `kecikkan` → `kecilkan`, `dari` → `daripada` where a source or comparison is meant, `adalah` → `ialah` before a noun). One colloquial line survives on purpose: the quoted complaint "kat laptop aku jalan" in section 01, which only works in spoken register.
- **Whole document:** Checked for Indonesian vocabulary drift, since the two languages share enough that Indonesian terms slip in unnoticed. Malaysian forms are used throughout: `akaun` not *akun*, `percuma` not *gratis*, `rangkaian` not *jaringan*, `fail` not *berkas*, `sijil` not *sertifikat*, `kumpulan` not *grup*, `tarikh`/`Ogos` not *tanggal*/*Agustus*, `pelajar` not *siswa*, `peribadi` not *pribadi*, `nombor` not *nomor*, `pemasangan` not *instalasi*, `secara lalai` for "by default".
- **Whole document:** CLI commands stripped from the outline bullets. The original listed `docker ps`, `docker exec -it`, `docker compose up -d` and so on — useful for an assessor checking coverage, intimidating for someone deciding whether to pay. Commands are still taught in class; they are no longer used to advertise it.

## Structure

- **Sections reduced from 11 to 9.** The HRDCorp section set (Course Objectives plus a separate Learning Outcomes, Assessment Method, Certification, Expected Outcomes & Impact table) exists to satisfy a grant format. For a self-funded reader those five sections say one thing: what you can do afterwards.
  - `04 Course Objectives` + `05 Learning Outcomes` merged into `04 Selepas 2 Hari, Anda Boleh` — a single list, no duplication.
  - `08 Assessment Method` folded into the methodology table as the "Pengajar semak" and "Lab hujung hari" rows. A paying participant does not need a formal assessment clause; they need to know someone will look at their screen.
  - `09 Certification` + `11 Expected Outcomes & Impact` collapsed into `07 Apa Anda Bawa Balik` — concrete take-home items instead of an impact table. Impact language ("Infrastructure Efficiency", "DevOps Readiness") is written for whoever approves the spend; here the reader is the spender.
- **Added `08 Soalan Lazim`.** Self-funded participants ask before they pay. Six questions taken from real objections: coding ability, Linux background, class language, laptop specification, why Docker is worth learning, and post-class support.
- **Added `09 Bayaran & Pendaftaran`** with `TBC` for price and registration link — a self-funded proposal is incomplete without it. Fill both before publishing.

## Content deliberately kept identical

- **The 14-hour structure is unchanged.** Same topics, same order, same two day-end labs. Only the wording differs, so the adjusted version can be handed to a participant while the original is submitted to a TP without the two teaching different things.
- **Laptop and software requirements kept in full detail**, including the 8GB RAM and 15GB storage figures and the WSL2 and BIOS virtualisation notes. This is the section where vagueness costs real class time on the first morning, so it stays specific and is repeated as an FAQ answer.
- **The "works on my machine" framing kept as the opening hook** in both versions, written more directly here ("kat aku jalan je") since it is the problem the reader already recognises.
