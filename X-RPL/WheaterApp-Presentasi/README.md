# 🌤 tarzzWeather

Aplikasi cuaca berbasis web yang dibangun menggunakan **React** dan **Vite**. Pengguna dapat mencari informasi cuaca real-time dari kota mana saja di seluruh dunia menggunakan data dari [OpenWeatherMap API](https://openweathermap.org/).

---

## 📸 Fitur

- 🔍 Pencarian cuaca berdasarkan nama kota
- 🌡️ Menampilkan suhu, kelembaban, kecepatan angin, dan visibilitas
- 💬 Pesan error jika kota tidak ditemukan
- ⏳ Loading spinner saat data sedang diambil
- ⌨️ Mendukung pencarian dengan tombol **Enter**
- 🎨 Desain glassmorphism dengan animasi halus

---

## 🗂️ Struktur Proyek

```
WheaterApp/
├── index.html                  # Entry point HTML
├── vite.config.js              # Konfigurasi Vite
├── package.json                # Dependensi & skrip proyek
├── eslint.config.js            # Konfigurasi ESLint
├── .env                        # Variabel lingkungan (API Key)
└── src/
    ├── main.jsx                # Entry point React
    ├── App.jsx                 # Komponen utama aplikasi
    ├── App.css                 # Styling komponen-komponen utama
    ├── index.css               # Global style & design tokens
    └── components/
        ├── SearchBar.jsx       # Komponen input pencarian
        └── WeatherCard.jsx     # Komponen tampilan data cuaca
```

---

## 📄 Penjelasan Setiap File

### `index.html`
File HTML utama yang menjadi pintu masuk aplikasi. Berisi:
- Tag `<meta charset>` dan `<meta viewport>` untuk pengaturan karakter dan responsivitas
- Tag `<title>` yang menampilkan nama aplikasi di tab browser
- `<div id="root">` sebagai tempat React memasang (mount) seluruh UI aplikasi
- `<script type="module" src="/src/main.jsx">` untuk memuat kode React

---

### `vite.config.js`
Konfigurasi build tool **Vite**. File ini mengaktifkan plugin `@vitejs/plugin-react` agar Vite dapat memproses file `.jsx` dan mendukung fitur React seperti JSX dan Fast Refresh saat development.

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

---

### `package.json`
Berisi metadata proyek dan daftar dependensi.

| Bagian | Keterangan |
|--------|-----------|
| `name` | Nama proyek: `tarzzweather` |
| `version` | Versi saat ini: `0.0.0` |
| `scripts.dev` | Menjalankan server development dengan `npm run dev` |
| `scripts.build` | Membuild proyek untuk produksi |
| `scripts.lint` | Menjalankan ESLint untuk cek kualitas kode |
| `scripts.preview` | Preview hasil build produksi secara lokal |

**Dependensi utama:**
- `react` & `react-dom` — Library inti React (versi 19)

**Dependensi development:**
- `vite` — Build tool yang cepat
- `@vitejs/plugin-react` — Plugin React untuk Vite
- `eslint` — Linter untuk menjaga kualitas kode

---

### `src/main.jsx`
Entry point aplikasi React. File ini bertugas:
1. Mengimpor `index.css` agar global style aktif di seluruh aplikasi
2. Membuat React root dengan `createRoot` yang menempel ke `<div id="root">` di HTML
3. Me-render komponen `<App />` di dalam `<StrictMode>` untuk mendeteksi potensi bug

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

> **`StrictMode`**: Alat bantu development dari React untuk memperingatkan penggunaan API yang sudah usang atau pola kode yang bermasalah. Tidak berpengaruh di production build.

---

### `src/index.css`
File CSS global yang mendefinisikan **design tokens** (variabel CSS) dan style dasar seluruh aplikasi.

#### Design Tokens (CSS Variables)
| Variabel | Nilai | Fungsi |
|----------|-------|--------|
| `--hue` | `210` | Basis warna (biru) untuk sistem warna |
| `--bg-color` | `hsl(210, 40%, 8%)` | Warna latar belakang gelap |
| `--text-primary` | `hsl(210, 20%, 98%)` | Warna teks utama (hampir putih) |
| `--text-secondary` | `hsl(210, 10%, 75%)` | Warna teks sekunder (abu-abu) |
| `--glass-bg` | `rgba(255,255,255, 0.05)` | Latar belakang efek kaca |
| `--glass-border` | `rgba(255,255,255, 0.1)` | Border efek kaca |
| `--glass-shadow` | `0 16px 40px 0 rgba(0,0,0,0.4)` | Bayangan card |
| `--accent` | `hsl(205, 90%, 60%)` | Warna aksen biru terang |
| `--radius-lg/md/sm` | `28px / 16px / 10px` | Ukuran border radius |
| `--transition-smooth` | `all 0.3s cubic-bezier(...)` | Transisi animasi halus |

#### Style Dasar `body`
- Font: **Outfit** dari Google Fonts — modern dan bersih
- Background: warna gelap dengan dua radial gradient biru untuk kesan atmosfer
- Layout: flexbox centered agar konten selalu di tengah layar

---

### `src/App.css`
File CSS yang berisi semua class styling untuk komponen-komponen aplikasi.

#### `.app-container`
Card utama pembungkus seluruh aplikasi. Menggunakan teknik **glassmorphism**:
- `backdrop-filter: blur(24px)` — efek kaca buram di belakang card
- `background: var(--glass-bg)` — latar belakang transparan
- `border: 1px solid var(--glass-border)` — border tipis transparan
- `animation: fadeIn` — muncul dengan animasi fade + slide dari bawah

#### `.app-title`
Judul aplikasi dengan teks **gradient** berwarna putih ke biru, menggunakan teknik:
```css
background: linear-gradient(to right, #fff, hsl(200, 100%, 80%));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

#### `.search-form` & `.search-input` & `.search-button`
Styling untuk area pencarian:
- Input dengan latar gelap semi-transparan dan efek glow saat fokus
- Tombol berwarna aksen biru dengan efek hover naik (`translateY(-2px)`)
- Keduanya disabled state saat loading (opacity berkurang)

#### `.weather-card`
Card sekunder untuk menampilkan data cuaca:
- Animasi `slideUp` saat pertama kali muncul
- Grid 2 kolom untuk detail cuaca

#### `.detail-item`
Setiap kotak detail cuaca (kelembaban, angin, dll.) dengan:
- Latar gelap semi-transparan
- Efek hover yang menggelapkan latar

#### `.error-message`
Pesan error berwarna merah transparan dengan animasi `shake` (goyangan horizontal) untuk menarik perhatian pengguna.

#### `.spinner`
Loading indicator berbentuk lingkaran yang berputar terus (animasi `spin`) menggunakan `border-top-color` berwarna aksen.

---

### `src/App.jsx`
Komponen utama (root component) aplikasi. Bertanggung jawab atas:

#### State yang dikelola
| State | Tipe | Fungsi |
|-------|------|--------|
| `weather` | `object \| null` | Menyimpan data cuaca dari API |
| `loading` | `boolean` | Menandai apakah sedang fetch data |
| `error` | `string \| null` | Menyimpan pesan error jika ada |

#### Fungsi `getWeather(city)`
Fungsi async yang dipanggil saat pengguna melakukan pencarian:

```jsx
const getWeather = async (city) => {
  if (!city) return;          // 1. Abaikan jika input kosong

  setLoading(true);           // 2. Aktifkan loading state
  setError(null);             // 3. Reset pesan error sebelumnya

  try {
    const res = await fetch(  // 4. Panggil API OpenWeatherMap
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();

    if (data.cod !== 200) {   // 5. Jika kota tidak ditemukan
      setError("Kota tidak ditemukan. Coba nama lain.");
      setWeather(null);
      return;
    }

    setWeather(data);         // 6. Simpan data ke state
  } catch {
    setError("Gagal mengambil data. Periksa koneksimu.");
  } finally {
    setLoading(false);        // 7. Matikan loading (selalu dijalankan)
  }
};
```

> **Parameter API:**
> - `q=${city}` — nama kota yang dicari
> - `appid=${API_KEY}` — kunci API untuk autentikasi
> - `units=metric` — satuan Celcius (bukan Fahrenheit)

#### Tampilan (JSX)
Merender secara kondisional:
- **Selalu tampil**: `SearchBar`
- **Jika `error`**: kotak pesan error
- **Jika `loading`**: spinner animasi
- **Jika ada `weather` dan tidak `loading`**: `WeatherCard`

---

### `src/components/SearchBar.jsx`
Komponen input untuk mencari kota.

#### State
- `city` — menyimpan teks yang diketik pengguna

#### Props
| Prop | Tipe | Fungsi |
|------|------|--------|
| `onSearch` | `function` | Callback yang dipanggil saat pencarian dilakukan |
| `loading` | `boolean` | Menonaktifkan input dan tombol saat loading |

#### Fitur
- **Tombol 🔍** memanggil `onSearch(city)`
- **Tekan Enter** juga memicu pencarian melalui `handleKeyDown`
- Input dan tombol di-`disabled` saat `loading` aktif

```jsx
const handleKeyDown = (e) => {
  if (e.key === "Enter") handleSearch();
};
```

---

### `src/components/WeatherCard.jsx`
Komponen untuk menampilkan data cuaca yang sudah berhasil diambil dari API.

#### Props
| Prop | Tipe | Fungsi |
|------|------|--------|
| `data` | `object` | Objek data cuaca lengkap dari OpenWeatherMap API |

#### Data yang Ditampilkan
| Bagian | Sumber dari API | Keterangan |
|--------|----------------|-----------|
| Nama kota & negara | `data.name` + `data.sys.country` | Contoh: `Jakarta, ID` |
| Deskripsi cuaca | `data.weather[0].description` | Contoh: `scattered clouds` |
| Ikon cuaca | `data.weather[0].icon` | Gambar dari OpenWeatherMap CDN |
| Suhu | `data.main.temp` | Dalam °C, dibulatkan |
| Kelembaban | `data.main.humidity` | Dalam persen (%) |
| Terasa seperti | `data.main.feels_like` | Suhu yang dirasakan tubuh |
| Kecepatan angin | `data.wind.speed` | Dalam meter per detik (m/s) |
| Visibilitas | `data.visibility` | Dikonversi dari meter ke kilometer |

#### Cara ikon cuaca ditampilkan
```jsx
<img
  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
  alt={desc}
/>
```
Suffix `@2x` digunakan agar gambar ikon beresolusi tinggi (2x lebih tajam).

---

## 🚀 Cara Menjalankan

### Prasyarat
- [Node.js](https://nodejs.org/) versi 18 atau lebih baru
- API Key dari [OpenWeatherMap](https://openweathermap.org/api) (gratis)

### Langkah-langkah

1. **Clone / download proyek**
   ```bash
   git clone <url-repo>
   cd WheaterApp
   ```

2. **Install dependensi**
   ```bash
   npm install
   ```

3. **Jalankan server development**
   ```bash
   npm run dev
   ```

4. **Buka di browser**
   ```
   http://localhost:5173
   ```

### Perintah Tersedia
| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Menjalankan server development dengan hot reload |
| `npm run build` | Membuild aplikasi untuk produksi ke folder `dist/` |
| `npm run preview` | Preview hasil build produksi secara lokal |
| `npm run lint` | Menjalankan ESLint untuk cek kualitas kode |

---

## 🌐 Tentang OpenWeatherMap API

Aplikasi ini menggunakan endpoint **Current Weather Data**:

```
GET https://api.openweathermap.org/data/2.5/weather
  ?q={city_name}
  &appid={API_key}
  &units=metric
```

Respons API berupa objek JSON yang antara lain berisi:
```json
{
  "name": "Jakarta",
  "sys": { "country": "ID" },
  "main": {
    "temp": 31.5,
    "feels_like": 35.2,
    "humidity": 78
  },
  "weather": [
    { "main": "Clouds", "description": "scattered clouds", "icon": "03d" }
  ],
  "wind": { "speed": 3.6 },
  "visibility": 10000,
  "cod": 200
}
```

> **`cod: 200`** berarti request berhasil. Jika bukan 200 (misal `"404"`), berarti kota tidak ditemukan.

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| [React](https://react.dev/) | 19 | Library UI berbasis komponen |
| [Vite](https://vite.dev/) | 7 | Build tool dan dev server yang cepat |
| [Outfit Font](https://fonts.google.com/specimen/Outfit) | — | Tipografi modern dari Google Fonts |
| [OpenWeatherMap API](https://openweathermap.org/api) | 2.5 | Sumber data cuaca real-time |
| Vanilla CSS | — | Styling tanpa framework tambahan |

---

## 👤 Author

**7arzz** — tarzzWeather Project
