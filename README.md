# Ma'had Nurul Haromain Lin Nisa' — Official Company Profile & PPDB Website

Website profil lembaga dan Penerimaan Peserta Didik Baru (PPDB) resmi untuk **Ma'had Nurul Haromain Lin Nisa'** (Pujon, Kabupaten Malang, Jawa Timur). Dibangun menggunakan **Astro**, **Tailwind CSS v4**, dan **Lucide Astro Icons** dengan fokus pada performa tinggi, visual premium islami, dan kenyamanan keterbacaan di perangkat seluler.

---

## 🚀 Fitur Utama & Keunggulan Desain

1. **Struktur Multi-Halaman Modular (Multi-Page Architecture):**
   * **Beranda (`/`)**: Ringkasan utama keunggulan pondok, statistik santri, ulasan wali santri, dan kontak.
   * **Tentang Kami (`/tentang`)**: Visi & Misi, Sejarah penamaan pondok dari Makkah, Profil Dewan Pembimbing, dan visualisasi interaktif **Mata Rantai Sanad Keilmuan** Abuya Sayyid Muhammad Al-Maliki.
   * **Kurikulum (`/kurikulum`)**: Informasi detail 5 program pendidikan putri serta program unggulan keterampilan kemandirian (Vertikultur TETRIS & multimedia).
   * **Kehidupan Asrama (`/kehidupan-asrama`)**: Pola pembinaan *Tarbiyah Tasyghiul Thullab*, agenda jadwal harian dari dini hari, serta sarana prasarana asrama.
   * **Galeri Kegiatan (`/galeri`)**: Galeri foto interaktif dengan penyaringan kategori dinamis (Fasilitas, Belajar, Kebersamaan, Ekstra) menggunakan JavaScript klien.
   * **Hubungi Kami (`/kontak`)**: Integrasi Google Maps rute navigasi resmi, detail narahubung WhatsApp, serta **Formulir Kirim Pesan** ke sekretariat.

2. **Aksesibilitas & Keterbacaan Seluler Sempurna (Mobile UX):**
   * **Sticky Bottom Navigation Tab Bar**: Navigasi bawah instan ala aplikasi native untuk berpindah halaman dengan cepat di ponsel.
   * **Batas Font Minimum 13px**: Dikonfigurasi langsung pada `@theme` Tailwind CSS v4 (`text-xs` diset ke `13px`, `text-sm` ke `15px`, dan `text-base` ke `16px`) menjamin tidak ada teks yang terlalu kecil di layar HP.
   * **Horizontal Scroll-Snap Cards**: Komponen kartu masyayikh dan program pendidikan di mobile menggunakan mode horizontal swipe yang halus (`overflow-x-auto snap-x`).

3. **Tema Premium Islami & Estetika Tinggi:**
   * Desain minimalis elegan dengan perpaduan warna hijau tua primer islami (`#123524`) dan aksen emas mulia (`#E6B044`).
   * Transisi scroll yang mulus (*Scroll Reveal*) menggunakan `Intersection Observer` bawaan yang ringan.

---

## 🛠️ Panduan Pengembangan Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer lokal Anda:

### Prasyarat
Pastikan Anda sudah menginstal **Node.js** (v18.x ke atas) dan **npm**.

### 1. Klon Repositori & Instal Dependensi
```bash
git clone https://github.com/ongkipro/Pondok-Ma-had-Nurul-Haraomain-Lin-Nisa.git
cd Pondok-Ma-had-Nurul-Haraomain-Lin-Nisa
npm install
```

### 2. Jalankan Dev Server
```bash
npm run dev
```
Buka peramban (browser) di alamat [http://localhost:4321](http://localhost:4321).

### 3. Kompilasi Produksi (Build)
Untuk membuat berkas HTML/CSS statis siap rilis di hosting (Cloudflare Pages, Netlify, atau Vercel):
```bash
npm run build
```
Hasil kompilasi akan tersimpan di dalam direktori `/dist`.

---

## 📂 Struktur Direktori Proyek

```text
/
├── public/
│   └── images/            # File aset gambar kustom pesantren (AI-Generated)
├── src/
│   ├── components/        # Komponen UI modular (Header, Hero, About, Sanad, dll.)
│   ├── layouts/           # Template layout utama website (Layout.astro)
│   ├── pages/             # File rute halaman (index, tentang, kurikulum, galeri, dll.)
│   └── styles/
│       └── global.css     # CSS Global & Konfigurasi `@theme` Tailwind CSS v4
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🕌 Lisensi & Kredit
Seluruh konten, gambar, dan desain adalah hak cipta milik **Ma'had Nurul Haromain Lin Nisa' Pujon**.
Dibangun dengan rasa takzim untuk kemaslahatan dakwah Islamiyah.
