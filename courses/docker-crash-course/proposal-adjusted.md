# Docker Crash Course: Dari Container Pertama ke Cloud

**KELAS 2 HARI** — Kelas awam, bayaran sendiri (bukan HRDCorp)

- **Tarikh:** 29 & 30 Ogos 2026
- **Tempoh:** 2 hari · 7 jam sehari (rehat makan 1 jam)
- **Bahasa:** Bahasa Malaysia campur English (semua command dan nota dalam English)

---

## 01 Ringkasan Kelas

Selalu jadi macam ni: aplikasi jalan cantik kat laptop sendiri, bila pindah ke server terus rosak. Versi lain, setting lain, library tak sama. Habis dua tiga hari nak cari punca.

Docker selesaikan masalah tu. Aplikasi dan semua yang dia perlu dibungkus jadi satu pakej. Pakej yang sama tu jalan kat laptop anda, kat server ujian, dan kat server sebenar. Tiada lagi "kat aku jalan je".

Dua hari ni bukan kelas syarahan. Jam pertama anda dah ada website hidup dalam container. Hari kedua tamat dengan aplikasi dan database anda sendiri naik atas server cloud, dengan link yang boleh dihantar pada orang lain.

Tak perlu pandai coding. Cukup selesa taip command dalam terminal.

## 02 Siapa Sesuai Hadir

- Developer yang belum pernah guna Docker
- IT support, sysadmin, network engineer
- QA dan tester
- Pelajar atau fresh grad IT
- Orang IT yang nak masuk bidang DevOps

Satu syarat sahaja: selesa taip command dalam terminal. Tak perlu tahu Linux mendalam, command asas macam `cd` dan `ls` sudah cukup.

## 03 Apa Perlu Ada Sebelum Kelas

**Laptop**

- RAM sekurang-kurangnya 8GB
- Storage kosong 15GB
- Windows 10/11 64-bit, atau macOS, atau Linux
- Untuk Windows: WSL2 perlu dipasang dan virtualization perlu ON dalam BIOS

**Software (semua percuma)**

- Docker Desktop
- Visual Studio Code
- Akaun Docker Hub
- Akaun GitHub

Pasang semua ni sebelum hari pertama. Kalau ada masalah pemasangan, hubungi kami awal — bukan pagi hari kelas.

## 04 Selepas 2 Hari, Anda Boleh

- Jalankan, semak, dan cari punca masalah container
- Tulis fail arahan sendiri untuk bungkus aplikasi jadi image
- Susun arahan tu supaya build tak lambat setiap kali
- Hantar image sendiri ke Docker Hub, dan tarik balik di komputer lain
- Simpan data supaya tak hilang bila container dimatikan atau dibuang
- Naikkan aplikasi dan database serentak dengan satu command
- Simpan password cara betul — bukan taip dalam fail dan hantar ke GitHub
- Kecikkan image dari 1.2GB turun ke sekitar 80MB
- Deploy ke server cloud dan dapat link yang boleh dikongsi

## 05 Cara Kelas Dijalankan

| Cara | Penjelasan |
|---|---|
| **Buat sendiri** | Lebih 70% masa anda taip dan jalankan sendiri, bukan tengok slaid |
| **Tunjuk dulu, baru buat** | Setiap topik ditunjuk secara langsung sebelum anda cuba |
| **Contoh kerja sebenar** | Semua latihan guna situasi yang betul-betul jumpa di tempat kerja |
| **Lab hujung hari** | Jam terakhir setiap hari adalah projek tangan sendiri, tanpa dipandu langkah demi langkah |
| **Pengajar semak** | Pengajar pusing satu-satu, tengok skrin anda, betulkan terus |
| **Aplikasi disediakan** | Kod contoh diberi, jadi tak perlu pandai coding untuk ikut |

## 06 Jadual 2 Hari

### Hari 1 — Container Pertama Anda

**Jam 1 — Apa itu container dan kenapa ia penting**

- Kenapa aplikasi jalan kat laptop tapi mati kat server
- Container vs virtual machine — apa bezanya, kenapa container jauh lebih ringan
- Tiga perkataan yang akan diguna sepanjang kelas: image, container, registry
- Semak pemasangan setiap orang dan jalankan container ujian pertama

**Jam 2 — Website hidup dalam jam pertama**

- Tarik pakej siap dari internet
- Jalankan pakej tu jadi container
- Kenapa boleh buka dalam browser sendiri — dan macam mana nak tukar nombor port
- Buat sendiri: website Nginx hidup dalam container, buka dalam browser

**Jam 3 — Hidup, mati, dan cari punca bila rosak**

- Tengok container mana yang hidup, mana yang dah mati
- Baca log untuk tahu apa sebenarnya rosak
- Masuk dalam container yang sedang jalan untuk periksa dari dalam
- Kemas: matikan, buang, dan bersihkan barang yang tak diguna

**Jam 4 — Tulis fail arahan sendiri**

- Enam arahan asas yang membina hampir semua image
- Pilih pakej asas — dan kenapa perlu tulis nombor versi, jangan biar kosong
- Bina image sendiri, kemudian jalankan
- Buat sendiri: bungkus aplikasi contoh dari fail kosong

**Jam 5 — Kenapa build lambat, cara buat laju**

- Setiap arahan jadi satu lapisan — kalau satu lapisan berubah, semua bawahnya kena bina semula
- Susunan yang betul: pasang library dahulu, salin kod kemudian
- Ukur sendiri: build 90 detik turun jadi beberapa detik
- Senarai fail yang patut ditinggal — termasuk password dan folder besar

**Jam 6 — Kongsi image sendiri ke internet**

- Cara nama dan nombor versi image
- Log masuk dan hantar ke Docker Hub
- Tarik image anda di komputer orang lain untuk buktikan ia betul-betul mudah alih
- Simpanan awam vs peribadi, dan tabiat penomboran versi yang elok untuk satu pasukan

**Jam 7 — Lab: bungkus dan hantar aplikasi anda sendiri**

- Tulis fail arahan sendiri dari kosong untuk aplikasi yang diberi
- Susun arahan supaya build laju, dan tinggalkan fail yang tak perlu
- Bina, beri versi, dan hantar ke akaun Docker Hub sendiri
- Tarik image rakan sebelah, jalankan, dan cari punca kalau ia gagal

---

### Hari 2 — Aplikasi Sebenar Anda

**Jam 8 — Data tak hilang bila container mati**

- Kenapa apa-apa yang ditulis dalam container hilang bila container dibuang
- Simpanan luar container: buat, sambung, periksa, buang
- Bila patut sambung folder laptop sendiri — sesuai untuk masa membangun kod
- Buat sendiri: buang database container, bina semula, data masih ada

**Jam 9 — Dua container bercakap sesama sendiri**

- Kenapa dua container tak nampak satu sama lain secara asalnya
- Letak dalam rangkaian sama, kemudian panggil terus guna nama
- Beza antara buka port keluar dan bercakap dalaman sahaja
- Buat sendiri: sambungkan container aplikasi ke container database guna nama

**Jam 10 — Aplikasi dan database naik dengan satu command**

- Tulis satu fail yang terangkan keseluruhan susunan: aplikasi, database, simpanan, rangkaian
- Naikkan semua serentak, tengok log semua, turunkan semua — satu command setiap kali
- Beza antara turun sahaja dan turun sekali buang data
- Buat sendiri: ganti semua command manual semalam dengan satu fail

**Jam 11 — Password cara betul**

- Kenapa password tak boleh ditulis dalam image atau dihantar ke GitHub
- Letak setting dan password di luar, dalam fail berasingan
- Cara simpan nilai sensitif yang lebih ketat, dan siapa boleh baca fail tu
- Buat sendiri: keluarkan password database dari image, kemudian buktikan ia betul-betul dah tiada

**Jam 12 — Kecikkan image 1.2GB jadi 80MB**

- Dari mana datang berat tu: alat bina, library pembangunan, dan pakej asas penuh
- Pakej asas ringan — apa untung, apa risiko
- Bina di satu tempat, ambil hasil sahaja ke tempat akhir, tinggalkan semua alat
- Buat sendiri: ukur saiz sebelum dan selepas, kemudian pastikan aplikasi masih jalan

**Jam 13 — Naik ke server cloud, dapat link boleh kongsi**

- Sediakan server: pasang Docker, buka port yang perlu, masuk guna SSH
- Bawa susunan anda naik — tarik dari Docker Hub, kemudian naikkan dengan satu command
- Setting supaya container hidup balik sendiri kalau server restart
- Semak: buka link awam, baca log, pastikan semuanya betul-betul jalan

**Jam 14 — Lab: deploy susunan anda sendiri**

- Bina satu fail susunan lengkap: aplikasi, database, dan simpanan data
- Keluarkan semua password ke luar, dan kecikkan image aplikasi
- Deploy ke server cloud yang disediakan, dan dapatkan link awam yang berfungsi
- Tunjuk pada rakan sekelas dan terangkan fail susunan anda

## 07 Apa Anda Bawa Balik

- Satu aplikasi anda sendiri yang dah dibungkus dan berjalan dalam container
- Satu repository GitHub dengan semua fail kerja anda
- Satu image di Docker Hub yang orang lain boleh tarik dan jalankan
- Sijil kehadiran
- Akses berterusan ke kumpulan Telegram untuk tanya soalan selepas kelas

## 08 Soalan Lazim

**Perlu pandai coding?**
Tak perlu. Kod contoh disediakan. Cukup selesa taip command dalam terminal.

**Perlu tahu Linux dulu?**
Command asas sudah memadai. Kami terangkan setiap command yang diguna.

**Kelas guna bahasa apa?**
Bahasa Malaysia campur English. Semua command, kod, dan nota dalam English.

**Laptop saya lama, cukup ke?**
RAM 8GB dan storage kosong 15GB adalah minimum sebenar, bukan cadangan. Kurang dari tu, Docker Desktop akan tersekat.

**Kenapa Docker berbaloi dipelajari?**
Docker adalah syarat asas dalam hampir semua job listing DevOps di Malaysia. Ia juga prasyarat sebelum boleh belajar CI/CD dan Kubernetes.

**Kalau tersangkut selepas kelas?**
Tanya dalam kumpulan Telegram. Akses tak tamat bila kelas tamat.

## 09 Bayaran & Pendaftaran

- **Bayaran:** TBC
- **Termasuk:** semua bahan kelas, server cloud untuk lab Hari 2, sijil, akses kumpulan Telegram
- **Tempat terhad** supaya pengajar boleh pusing semak skrin setiap orang
- **Pendaftaran:** TBC
