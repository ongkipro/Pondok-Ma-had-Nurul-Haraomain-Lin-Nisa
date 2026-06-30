# 🕌 Ma'had Nurul Haromain Lin Nisa' — Website Resmi (Astro Version)

[![Developer](https://img.shields.io/badge/Developer-ongki.pro-064E3B?style=for-the-badge&logo=github&logoColor=white)](https://ongki.pro)
[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

<div align="center">
  <p style="font-size: 1.25rem;">
    <b>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</b><br/>
    <b>مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ</b>
  </p>
  <p><i>Semoga website ini menjadi wasilah kebaikan, ilmu yang bermanfaat, dan amal jariyah bagi semua yang terlibat. Aamiin.</i></p>
  <p>🤲 <b>GRATIS</b> untuk pondok pesantren, masjid, TPQ, madrasah & lembaga dakwah — sebagai bentuk khidmah dan amal jariyah. Lillāhi ta'ālā.</p>
</div>

---

Repositori ini berisi kode sumber resmi untuk website company profile & portal PPDB **Ma'had Nurul Haromain Lin Nisa' (Pujon, Malang, Jawa Timur)** yang dibangun menggunakan framework modern **Astro** terintegrasi dengan **Tailwind CSS v4**.

Situs ini dirancang secara khusus untuk menyajikan profil lengkap pesantren putri premium yang memadukan sanad keilmuan Ahlussunnah wal Jama'ah dari Makkah Al-Mukarramah, tahfidz Al-Qur'an mutqin, pendidikan formal, serta program kemandirian santriwati.

---

## 🚀 Fitur Website Utama

1. **Arsitektur Multi-Page Terpadu:** Terbagi secara modular menjadi 6 halaman inti:
   * **Beranda (`/`):** Ringkasan nilai, data statistik santri, ulasan wali santri, dan formulir PPDB.
   * **Profil (`/tentang`):** Profil lengkap sejarah pendirian, visi & misi, dewan masyayikh, serta visualisasi diagram **Mata Rantai Sanad Keilmuan** pesantren.
   * **Program Pendidikan (`/kurikulum`):** Pembahasan 5 jenjang pendidikan (Diniyyah, Aliyah, Daar Tanzil, SMK Kejuruan, KGTK) dan program kemandirian (Vertikultur & Tata Busana).
   * **Kehidupan Asrama (`/kehidupan-asrama`):** Rutinitas ritme harian santriwati (dari Qiyamul Lail hingga istirahat), fasilitas asrama, dan galeri sarana prasarana.
   * **Galeri Kegiatan (`/galeri`):** Dokumentasi foto interaktif dengan fitur penyaringan kategori dinamis (Fasilitas, Belajar, Ekstra, Kebersamaan) berbasis JavaScript klien.
   * **Hubungi Kami (`/kontak`):** Alamat resmi, peta Google Maps interaktif, jam operasional layanan informasi, formulir surat elektronik, dan WhatsApp.
2. **Navigasi Mobile Glass Tab Bar:** Bilah navigasi bawah instan ala aplikasi native (`bg-white/75 backdrop-blur-lg`) dengan penanda menu aktif eksklusif (efek pill background pada ikon, teks bold, dan *glowing gold indicator dot* di bagian bawah).
3. **Penyempurnaan UI/UX Logo Responsive:** Logo bertipe *stacked layout* (nama instansi dibagi 2 baris vertikal) untuk mencegah *layout overflow* pada peramban seluler sempit, dipadu dengan penyesuaian jarak tautan desktop untuk mencegah baris navigasi membungkus patah.
4. **Desain Visual Non-Flat Premium:** Penerapan estetika modern mencakup:
   * Tombol aksi utama dengan efek warna gradasi emas berpendar (`shadow-gold/40`).
   * Pendaran cahaya emas lembut (*glow backlight*) di belakang bingkai foto utama.
   * Kartu dinamis (*micro-cards*) dengan efek *hover translate*, perbesaran gambar lambat, dan garis aksen menyala.
   * Ornamen penutup dropdown seluler bercorak *Rub el Hizb* yang berputar lambat dan mengapung secara halus.
5. **Optimasi SEO & Kecepatan Akses:**
   * Properti sosial Open Graph (Facebook), metadata Twitter Card, dan skema JSON-LD terstruktur untuk `EducationalOrganization` demi mendongkrak peringkat Google.

---

## 🛠️ Tech Stack & Konfigurasi

| Teknologi | Versi / Paket | Deskripsi / Peran |
| :--- | :--- | :--- |
| **Framework** | [Astro](https://astro.build/) (v7.0.3) | Static-first, Zero JS default, HTML-first templating |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (v4.3.2) | `@tailwindcss/vite` plugin, custom theme variables |
| **Icons** | [@lucide/astro](https://lucide.dev/) (v1.22.0) | SVG native icon set, sangat ringan tanpa beban DOM |
| **Adapter** | [@astrojs/vercel](https://vercel.com/) | Integrasi Vercel deployment serverless & static asset hosting |
| **Tipografi** | Playfair Display & Inter | Google Fonts ter-preconnect untuk rendering super mulus |

---

## 📁 Struktur Direktori Utama

```text
/
├── public/                      # Aset statis global
│   ├── images/                  # Folder logo dan aset visual testimonial terkompresi
│   ├── favicon.ico / .svg       # Favicon supersampling resolusi tinggi
│   └── site.webmanifest         # Manifest metadata PWA
├── src/
│   ├── components/              # Komponen terbagi
│   │   ├── About.astro          # Section profil ringkas & visi misi
│   │   ├── BoardingLife.astro   # Section Rutinitas & Harian Asrama
│   │   ├── Caretakers.astro     # Section Dewan Pembina & Masyayikh
│   │   ├── Contact.astro        # Section Hubungi Kami & Peta
│   │   ├── Footer.astro         # Kaki Halaman Terpadu
│   │   ├── Header.astro         # Kepala Halaman & Dropdown Mobile
│   │   ├── Hero.astro           # Visual Banner Utama
│   │   ├── Highlights.astro     # Kisi Fitur & Nilai Unggul
│   │   ├── History.astro        # Section Sejarah Pondok
│   │   ├── Keterampilan.astro   # Section Program Kemandirian
│   │   ├── Logo.astro           # Ornamen Logo SVG Pesantren
│   │   ├── PPDB.astro           # Informasi Pendaftaran PPDB
│   │   ├── Programs.astro       # Daftar Kurikulum Pendidikan
│   │   ├── Sanad.astro          # Diagram Mata Rantai Sanad Keilmuan
│   │   ├── Stats.astro          # Data Statistik Pondok
│   │   └── Testimonials.astro   # Section Ulasan Wali Santri
│   ├── layouts/
│   │   └── Layout.astro         # Template dasar HTML, dynamic SEO meta, bottom bar
│   ├── pages/
│   │   ├── index.astro          # Halaman Beranda
│   │   ├── tentang.astro        # Halaman Profil
│   │   ├── kurikulum.astro      # Halaman Program & Kurikulum
│   │   ├── kehidupan-asrama.astro # Halaman Kehidupan Asrama
│   │   ├── galeri.astro         # Halaman Galeri Kegiatan
│   │   └── kontak.astro         # Halaman Hubungi Kami
│   └── styles/
│       └── global.css           # Styling global & skema warna tema
├── astro.config.mjs             # Konfigurasi Astro
└── package.json                 # Dependensi Node.js & versi framework
```

---

## 🧞 Perintah Dasar Pengembangan

Jalankan perintah ini di dalam direktori root proyek melalui terminal:

```bash
# Menginstal seluruh dependensi lokal proyek
npm install

# Menjalankan server pengembangan lokal (akses di http://localhost:4321)
npm run dev

# Melakukan kompilasi produksi ke folder static ./dist/
npm run build

# Meninjau hasil kompilasi produksi secara lokal
npm run preview
```

---

## 🤝 Lisensi & Pengembang

Website ini dikembangkan secara profesional dan dipublikasikan ke publik oleh:

### 👤 Pengembang Utama (Developer Credentials)
* **Lead Engineer:** **Paduka Ongki — [ongki.pro](https://ongki.pro)**
* **Kontak Kerja:** melalui [ongki.pro](https://ongki.pro)
* **Jasa:** Solusi Web Premium, Konsultan TI, & Transformasi Digital.

*Hak Cipta dilindungi undang-undang. Dimiliki secara resmi oleh **Ma'had Nurul Haromain Lin Nisa' Pujon, Malang, Jawa Timur**.*
