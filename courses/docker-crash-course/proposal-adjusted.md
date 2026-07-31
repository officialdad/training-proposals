# Docker Crash Course: Dari Container Pertama ke Cloud

**KELAS 2 HARI** — Kelas awam · bayaran sendiri (bukan tajaan HRDCorp)

- **Tarikh:** 29 & 30 Ogos 2026
- **Tempoh:** 2 hari · 7 jam sehari (rehat makan 1 jam)
- **Bahasa:** Bahasa Malaysia campur English (semua command dan nota dalam English)

---

## 01 Ringkasan Kelas

Situasi ini biasa berlaku: aplikasi berjalan lancar di laptop sendiri, tetapi sebaik dipindahkan ke server terus gagal. Versi berbeza, setting berbeza, library tidak sama. Dua tiga hari habis hanya untuk mencari punca.

Docker menyelesaikan masalah ini. Aplikasi dan segala keperluannya dibungkus menjadi satu pakej. Pakej yang sama itu berjalan di laptop anda, di server ujian, dan di server sebenar. Tiada lagi alasan "kat laptop aku jalan".

Dua hari ini bukan kelas syarahan. Dalam jam pertama, anda sudah mempunyai website yang hidup dalam container. Hari kedua berakhir dengan aplikasi dan database anda sendiri berjalan di atas server cloud, lengkap dengan link yang boleh dikongsi dengan orang lain.

Tidak perlu pandai coding. Cukup selesa menaip command dalam terminal.

## 02 Siapa Sesuai Hadir

- Developer yang belum pernah menggunakan Docker
- IT support, sysadmin, network engineer
- QA dan tester
- Pelajar atau fresh grad IT
- Kakitangan IT yang mahu beralih ke bidang DevOps

Satu syarat sahaja: selesa menaip command dalam terminal. Tidak perlu tahu Linux secara mendalam — command asas seperti `cd` dan `ls` sudah memadai.

## 03 Apa Perlu Ada Sebelum Kelas

**Laptop**

- RAM sekurang-kurangnya 8GB
- Ruang storage kosong 15GB
- Windows 10/11 64-bit, atau macOS, atau Linux
- Untuk Windows: WSL2 perlu dipasang dan virtualization perlu dihidupkan dalam BIOS

**Software (semuanya percuma)**

- Docker Desktop
- Visual Studio Code
- Akaun Docker Hub
- Akaun GitHub

Pasang semuanya sebelum hari pertama. Jika ada masalah pemasangan, hubungi kami lebih awal — bukan pada pagi hari kelas.

## 04 Selepas 2 Hari, Anda Boleh

- Menjalankan, menyemak, dan mencari punca masalah container
- Menulis fail arahan sendiri untuk membungkus aplikasi menjadi image
- Menyusun arahan itu supaya build tidak lambat setiap kali
- Menghantar image sendiri ke Docker Hub, dan menariknya semula di komputer lain
- Menyimpan data supaya tidak hilang apabila container dimatikan atau dibuang
- Menaikkan aplikasi dan database serentak dengan satu command
- Menyimpan password dengan cara yang betul — bukan ditaip dalam fail dan dihantar ke GitHub
- Mengecilkan image daripada 1.2GB kepada sekitar 80MB
- Deploy ke server cloud dan mendapatkan link yang boleh dikongsi

## 05 Cara Kelas Dijalankan

| Cara | Penjelasan |
|---|---|
| **Buat sendiri** | Lebih 70% masa anda menaip dan menjalankan sendiri, bukan menonton slaid |
| **Tunjuk dahulu, baru buat** | Setiap topik ditunjukkan secara langsung sebelum anda mencubanya |
| **Contoh kerja sebenar** | Semua latihan menggunakan situasi yang benar-benar berlaku di tempat kerja |
| **Lab hujung hari** | Jam terakhir setiap hari ialah projek sendiri, tanpa dipandu langkah demi langkah |
| **Pengajar menyemak** | Pengajar bergerak dari seorang peserta ke seorang peserta, melihat skrin anda, dan membetulkan terus |
| **Aplikasi disediakan** | Kod contoh disediakan, jadi tidak perlu pandai coding untuk mengikuti kelas |

## 06 Jadual 2 Hari

### Hari 1 — Container Pertama Anda

**Jam 1 — Apa itu container dan kenapa ia penting**

- Kenapa aplikasi berjalan di laptop tetapi gagal di server
- Container vs virtual machine — apa bezanya, kenapa container jauh lebih ringan
- Tiga perkataan yang akan digunakan sepanjang kelas: image, container, registry
- Semak pemasangan setiap peserta dan jalankan container ujian pertama

**Jam 2 — Website hidup dalam jam pertama**

- Tarik image siap dari internet
- Jalankan image itu menjadi container
- Kenapa ia boleh dibuka dalam browser sendiri — dan bagaimana cara menukar nombor port
- Buat sendiri: website Nginx hidup dalam container, dibuka dalam browser

**Jam 3 — Hidupkan, matikan, dan cari punca apabila rosak**

- Lihat container mana yang hidup, mana yang sudah mati
- Baca log untuk mengetahui apa sebenarnya rosak
- Masuk ke dalam container yang sedang berjalan untuk memeriksa dari dalam
- Kemas: matikan, buang, dan bersihkan apa yang tidak digunakan

**Jam 4 — Tulis fail arahan sendiri**

- Enam arahan asas yang membina hampir semua image
- Pilih base image — dan kenapa nombor versi perlu ditulis, jangan dibiarkan kosong
- Bina image sendiri, kemudian jalankannya
- Buat sendiri: bungkus aplikasi contoh bermula daripada fail kosong

**Jam 5 — Kenapa build lambat, dan cara menjadikannya laju**

- Setiap arahan menjadi satu lapisan — jika satu lapisan berubah, semua lapisan di bawahnya perlu dibina semula
- Susunan yang betul: pasang library dahulu, salin kod kemudian
- Ukur sendiri: build 90 detik turun kepada beberapa detik
- Senarai fail yang patut ditinggalkan — termasuk password dan folder yang besar

**Jam 6 — Kongsi image sendiri ke internet**

- Cara menamakan dan memberi nombor versi kepada image
- Log masuk dan hantar ke Docker Hub
- Tarik image anda pada komputer orang lain untuk membuktikan ia benar-benar mudah alih
- Repository awam vs peribadi, dan amalan penomboran versi yang baik untuk satu pasukan

**Jam 7 — Lab: bungkus dan hantar aplikasi anda sendiri**

- Tulis fail arahan sendiri bermula dari kosong untuk aplikasi yang disediakan
- Susun arahan supaya build laju, dan tinggalkan fail yang tidak diperlukan
- Bina, beri nombor versi, dan hantar ke akaun Docker Hub sendiri
- Tarik image rakan sebelah, jalankan, dan cari punca jika ia gagal

---

### Hari 2 — Aplikasi Sebenar Anda

**Jam 8 — Data tidak hilang apabila container mati**

- Kenapa apa-apa yang ditulis dalam container akan hilang apabila container dibuang
- Simpanan di luar container: cipta, sambung, periksa, buang
- Bila patut menyambung folder laptop sendiri — sesuai semasa membangunkan kod
- Buat sendiri: buang container database, bina semula, data masih ada

**Jam 9 — Dua container berhubung antara satu sama lain**

- Kenapa dua container tidak dapat melihat satu sama lain secara lalai
- Letakkan dalam rangkaian yang sama, kemudian panggil terus menggunakan nama
- Beza antara membuka port ke luar dan berhubung secara dalaman sahaja
- Buat sendiri: sambungkan container aplikasi ke container database menggunakan nama

**Jam 10 — Aplikasi dan database naik serentak dengan satu command**

- Tulis satu fail yang menerangkan keseluruhan susunan: aplikasi, database, simpanan, rangkaian
- Naikkan semua serentak, lihat semua log, turunkan semua — satu command setiap kali
- Beza antara turunkan sahaja dan turunkan sekali dengan membuang data
- Buat sendiri: ganti semua command manual semalam dengan satu fail

**Jam 11 — Cara betul menyimpan password**

- Kenapa password tidak boleh ditulis dalam image atau dihantar ke GitHub
- Letakkan setting dan password di luar image, dalam fail berasingan
- Cara menyimpan nilai sensitif dengan lebih ketat, dan siapa yang boleh membaca fail itu
- Buat sendiri: keluarkan password database daripada image, kemudian buktikan ia benar-benar sudah tiada

**Jam 12 — Kecilkan image 1.2GB menjadi 80MB**

- Dari mana datangnya berat itu: alat bina, library pembangunan, dan base image penuh
- Base image ringan — apa kelebihannya, apa risikonya
- Bina di satu tempat, ambil hasil sahaja ke tempat akhir, tinggalkan semua alat
- Buat sendiri: ukur saiz sebelum dan selepas, kemudian pastikan aplikasi masih berjalan

**Jam 13 — Naik ke server cloud, dapat link yang boleh dikongsi**

- Sediakan server: pasang Docker, buka port yang perlu, masuk menggunakan SSH
- Bawa susunan anda naik — tarik daripada Docker Hub, kemudian naikkan dengan satu command
- Setting supaya container hidup semula sendiri jika server restart
- Semak: buka link awam, baca log, pastikan semuanya benar-benar berjalan

**Jam 14 — Lab: deploy susunan anda sendiri**

- Bina satu fail susunan lengkap: aplikasi, database, dan simpanan data
- Keluarkan semua password ke luar image, dan kecilkan image aplikasi
- Deploy ke server cloud yang disediakan, dan dapatkan link awam yang berfungsi
- Tunjukkan kepada rakan sekelas dan terangkan fail susunan anda

## 07 Apa Anda Bawa Balik

- Satu aplikasi anda sendiri yang sudah dibungkus dan berjalan dalam container
- Satu repository GitHub dengan semua fail kerja anda
- Satu image di Docker Hub yang orang lain boleh tarik dan jalankan
- Sijil kehadiran
- Akses berterusan ke kumpulan Telegram untuk bertanya soalan selepas kelas

## 08 Soalan Lazim

**Perlu pandai coding?**
Tidak perlu. Kod contoh disediakan. Cukup selesa menaip command dalam terminal.

**Perlu tahu Linux dahulu?**
Command asas sudah memadai. Kami terangkan setiap command yang digunakan.

**Kelas menggunakan bahasa apa?**
Bahasa Malaysia campur English. Semua command, kod, dan nota dalam English.

**Laptop saya lama, adakah mencukupi?**
RAM 8GB dan ruang storage kosong 15GB ialah minimum sebenar, bukan cadangan. Kurang daripada itu, Docker Desktop akan tersekat.

**Kenapa Docker berbaloi dipelajari?**
Docker ialah syarat asas dalam hampir semua job listing DevOps di Malaysia. Ia juga prasyarat sebelum boleh belajar CI/CD dan Kubernetes.

**Bagaimana jika tersangkut selepas kelas?**
Tanya dalam kumpulan Telegram. Akses tidak tamat apabila kelas berakhir.

## 09 Bayaran & Pendaftaran

- **Bayaran:** TBC
- **Termasuk:** semua bahan kelas, server cloud untuk lab Hari 2, sijil, akses kumpulan Telegram
- **Tempat terhad** supaya pengajar dapat menyemak skrin setiap peserta
- **Pendaftaran:** TBC
