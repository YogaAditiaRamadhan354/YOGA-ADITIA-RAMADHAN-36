# YogaditiaR - Web Portfolio Ekosistem

Web Portfolio dan Portal Admin modern yang dibangun dengan arsitektur **Full-Stack**. Memanfaatkan ekosistem mutakhir perpaduan **ReactJS (Vite)** dan **Laravel 12 (Sanctum Auth)** untuk memberikan pengalaman interaksi antarmuka yang sangat estetik dan fungsional (bukan sekadar halaman statis).

Fitur unggulan proyek ini menampilkan animasi _glassmorphism_, _dark mode_ bawaan, desain asimetris dengan interaksi _Framer Motion_, serta proteksi backend API tingkat tinggi.

---

## 🚀 Analisis Fitur Utama (Features)

### 1. 🎨 Frontend Lanjutan (React + Tailwind CSS + Framer Motion)
*   **Hero & About Sections**: Perkenalan diri dinamis dengan indikator skill set (React, Laravel, MySQL, UI/UX).
*   **Riwayat Pendidikan (Experience)**: _Timeline_ UI vertikal bercahaya modern yang menggambarkan riwayat dari SD, SMP, hingga SMK (RPL).
*   **Aesthetics & UX**: Sistem navigasi responsif, animasi transisi antar rute, _blob_ gradient melayang, glow effect hover. Desain dikerjakan khusus untuk "Wow Factor".
*   **Smart Forms**: Input form minimalis bercahaya di halaman Register dan Login yang dapat mengekstrak dan menampilkan error validasi HTTP/422 secara _real-time_ di Antarmuka Pengguna.

### 2. 🛡️ Backend Kuat & Aman (Laravel 12 + SQLite + Sanctum)
*   **Stateless Token Authentication**: Registrasi dan sistem izin masuk *(Login)* sangat dijamin keamanannya menggunakan Laravel Sanctum (_personal access tokens_) tanpa perlu repot mencocokkan status CSRF Cookie.
*   **CRUD Modules (Tersedia / Persiapan)**: Pengelolaan bio admin (_Company Profile_), _Services_, Jejak Kontak form (Manajemen Pesan Masuk), dan pembuatan Portofolio terpusat dari satu dashboard.
*   **Database Bebas Ribet**: Memanfaatkan SQLite, pengalihan data akan sangat bersih dan dapat di _clone_ dan dijalankan secara instan.

---

## 💻 Panduan Instalasi (Cloning dari GitHub)

Berikut adalah instruksi _step-by-step_ setelah Anda men-_clone_ repositori ini agar bisa mulai masuk (Login) dan menjelajah halaman dasbor rahasianya.

### Prasyarat:
Pastikan PC/Laptop Anda sudah terinstal:
*   [Node.js](https://nodejs.org/) (Rekomendasi v18+ ke atas)
*   [PHP](https://www.php.net/) (v8.2+ ke atas)
*   [Composer](https://getcomposer.org/)

### Langkah 1: Persiapan Frontend (React/Vite)
Buka terminal di _root folder_ aplikasi hasil clone, lalu install dependensinya:
```bash
# Install paket Node modules
npm install

# Jalankan server frontend
npm run dev
```
Catat alamat lokal yang aktif, biasanya **`http://localhost:5173`** atau **`http://localhost:5174`**.

### Langkah 2: Persiapan Backend (Laravel)
Buka tab terminal **baru**, lalu masuk ke folder backend untuk mengaktifkan sistem inti:
```bash
cd backend

# Install paket PHP
composer install

# Duplikat file .env
cp .env.example .env
# Catatan Windows: copy .env.example .env
```

Buka file `.env` di folder `backend`, ganti tipe *database* dan daftarkan URL frontend milik Anda (misal `5173`):
```env
# Di bagian DB
DB_CONNECTION=sqlite
# (hapus DB_DATABASE, DB_PORT dll jika tak menggunakan MySQL)

# Di bagian bawah file
FRONTEND_URL=http://localhost:5173
```

Selanjutnya, buat file database SQLite kosong, bersihkan cache, generate key keamanan dan lakukan migrasi:
```bash
# Pastikan ada file databasenya
touch database/database.sqlite
# (Jika di Windows, buat file teks kosong dengan nama 'database.sqlite')

# Konfigurasi keamanan Laravel
php artisan key:generate

# Mulai membuat tabel di database (users, personal_access_tokens, dll)
php artisan migrate

# Jalankan Server Backend di Terminal!
php artisan serve
```

### Langkah 3: Eksekusi Pendaftaran (Sign-up Workflow) 🔐
1. Buka browser dan pergi ke laman root website (contoh: **`http://localhost:5173`**).
2. Di pojok kanan atas bagian Navigasi (Navbar), klik **`Sign In`**.
3. Karena Anda baru men-clone dan database masih sangat kosong, **jangan langsung Login**. Klik tautan biru **"Buat akun gratis / Daftar sekarang"** di bagian bawah form.
4. Isi data diri Anda di panel _Register_ (Sandi minimal 8 karakter dan pastikan _password confirm_ berstatus *Match* yang ditandai logo ceklis hijau).
5. Klik **Buat Akun**. React akan mengirimkan HTTP POST melalui port `8000` ke laravel.
6. ✅ Jika berhasil, Anda akan **otomatis dialihkan ke halaman Dasbor / User Portal** yang menandai sistem Full Stack Anda berjalan sempurna!

> **Tips Jika Mengalami Error Jaringan (CORS):**
> Pastikan API `baseUrl` (di dalam `src/api.js`) mengarah tepat ke tempat `php artisan serve` Anda berjalan, dan file `backend/config/cors.php` telah mengakomodasi origin frontend Anda.

---
_Dibuat dengan 🔥 oleh YogaditiaR._
