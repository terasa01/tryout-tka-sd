/**
 * Kumpulan Gambar & Diagram Vektor (SVG) Kualitas Tinggi untuk Soal HOTS Bergambar
 * Dibuat khusus untuk ANBK / TKA SD (Bebas Lag, Tajam di Semua Resolusi, Ringan)
 */

// Helper to convert raw SVG to safe data URL
const svgToDataUrl = (svg: string): string => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// 1. MATEMATIKA: Diagram Batang Hasil Panen Desa Suka Maju (Ton)
export const SVG_DIAGRAM_PANEN_MTK = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%" style="background:#ffffff; font-family:'Nunito', sans-serif;">
  <defs>
    <linearGradient id="gPadi" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/></linearGradient>
    <linearGradient id="gJagung" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/></linearGradient>
    <linearGradient id="gKedelai" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#047857"/></linearGradient>
    <linearGradient id="gKacang" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#6d28d9"/></linearGradient>
    <linearGradient id="gSingkong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ec4899"/><stop offset="100%" stop-color="#be185d"/></linearGradient>
  </defs>

  <rect width="600" height="360" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>
  <text x="300" y="36" text-anchor="middle" font-size="16" font-weight="800" fill="#0f172a">DIAGRAM HASIL PANEN PERTANIAN DESA MAKMUR (TAHUN 2025)</text>
  <text x="300" y="56" text-anchor="middle" font-size="12" font-weight="600" fill="#64748b">Satuan: Ton</text>

  <!-- Grid Lines -->
  <line x1="80" y1="270" x2="550" y2="270" stroke="#cbd5e1" stroke-width="2"/>
  <line x1="80" y1="220" x2="550" y2="220" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="4"/>
  <line x1="80" y1="170" x2="550" y2="170" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="4"/>
  <line x1="80" y1="120" x2="550" y2="120" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="4"/>
  <line x1="80" y1="70" x2="550" y2="70" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="4"/>

  <!-- Y-Axis Labels -->
  <text x="65" y="275" text-anchor="end" font-size="12" font-weight="700" fill="#64748b">0</text>
  <text x="65" y="225" text-anchor="end" font-size="12" font-weight="700" fill="#64748b">10</text>
  <text x="65" y="175" text-anchor="end" font-size="12" font-weight="700" fill="#64748b">20</text>
  <text x="65" y="125" text-anchor="end" font-size="12" font-weight="700" fill="#64748b">30</text>
  <text x="65" y="75" text-anchor="end" font-size="12" font-weight="700" fill="#64748b">40</text>

  <!-- Bars -->
  <!-- Padi: 35 ton (height 175) -> y = 270 - 175 = 95 -->
  <rect x="110" y="95" width="55" height="175" fill="url(#gPadi)" rx="6"/>
  <text x="137.5" y="85" text-anchor="middle" font-size="13" font-weight="800" fill="#1d4ed8">35 Ton</text>
  <text x="137.5" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Padi</text>

  <!-- Jagung: 25 ton (height 125) -> y = 270 - 125 = 145 -->
  <rect x="200" y="145" width="55" height="125" fill="url(#gJagung)" rx="6"/>
  <text x="227.5" y="135" text-anchor="middle" font-size="13" font-weight="800" fill="#d97706">25 Ton</text>
  <text x="227.5" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Jagung</text>

  <!-- Kedelai: 15 ton (height 75) -> y = 270 - 75 = 195 -->
  <rect x="290" y="195" width="55" height="75" fill="url(#gKedelai)" rx="6"/>
  <text x="317.5" y="185" text-anchor="middle" font-size="13" font-weight="800" fill="#047857">15 Ton</text>
  <text x="317.5" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Kedelai</text>

  <!-- Kacang: 30 ton (height 150) -> y = 270 - 150 = 120 -->
  <rect x="380" y="120" width="55" height="150" fill="url(#gKacang)" rx="6"/>
  <text x="407.5" y="110" text-anchor="middle" font-size="13" font-weight="800" fill="#6d28d9">30 Ton</text>
  <text x="407.5" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Kacang</text>

  <!-- Singkong: 20 ton (height 100) -> y = 270 - 100 = 170 -->
  <rect x="470" y="170" width="55" height="100" fill="url(#gSingkong)" rx="6"/>
  <text x="497.5" y="160" text-anchor="middle" font-size="13" font-weight="800" fill="#be185d">20 Ton</text>
  <text x="497.5" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Singkong</text>
</svg>
`);

// 2. MATEMATIKA: Denah Skala Taman Bunga Sekolah
export const SVG_DENAH_TAMAN_MTK = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 320" width="100%" height="100%" style="background:#ffffff; font-family:'Nunito', sans-serif;">
  <rect width="540" height="320" fill="#f0fdf4" rx="16" stroke="#bbf7d0" stroke-width="2"/>
  <text x="270" y="32" text-anchor="middle" font-size="15" font-weight="800" fill="#166534">DENAH TAMAN SEKOLAH SDN CEMPAKA (SKALA 1 : 200)</text>

  <!-- Main Rectangle: 300 x 180 (scale 1:200 -> 6 cm x 3.6 cm pada peta -> 12 m x 7.2 m) -->
  <rect x="120" y="65" width="300" height="180" fill="#dcfce7" stroke="#15803d" stroke-width="3" rx="8"/>
  
  <!-- Kolam Ikan Lingkaran di tengah -->
  <circle cx="270" cy="155" r="45" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
  <text x="270" y="152" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">KOLAM IKAN</text>
  <text x="270" y="166" text-anchor="middle" font-size="10" font-weight="600" fill="#0284c7">(d = 3 cm)</text>

  <!-- Petak Bunga Mawar -->
  <rect x="135" y="80" width="80" height="60" fill="#fce7f3" stroke="#db2777" stroke-width="2" rx="4"/>
  <text x="175" y="112" text-anchor="middle" font-size="10" font-weight="800" fill="#9d174d">Bunga Mawar</text>
  <text x="175" y="125" text-anchor="middle" font-size="9" font-weight="600" fill="#db2777">2 cm × 1.5 cm</text>

  <!-- Petak Bunga Melati -->
  <rect x="325" y="80" width="80" height="60" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="4"/>
  <text x="365" y="112" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">Bunga Melati</text>
  <text x="365" y="125" text-anchor="middle" font-size="9" font-weight="600" fill="#d97706">2 cm × 1.5 cm</text>

  <!-- Rumput & Gazebo -->
  <rect x="135" y="170" width="80" height="60" fill="#fed7aa" stroke="#ea580c" stroke-width="2" rx="4"/>
  <text x="175" y="205" text-anchor="middle" font-size="11" font-weight="800" fill="#9a3412">Gazebo</text>

  <!-- Dimensi Ukuran Peta -->
  <!-- Garis Horizontal Atas: 8 cm -->
  <line x1="120" y1="52" x2="420" y2="52" stroke="#1e293b" stroke-width="1.5"/>
  <text x="270" y="47" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">Panjang pada denah = 8 cm</text>

  <!-- Garis Vertikal Kiri: 5 cm -->
  <line x1="105" y1="65" x2="105" y2="245" stroke="#1e293b" stroke-width="1.5"/>
  <text x="95" y="160" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a" transform="rotate(-90 95 160)">Lebar = 5 cm</text>

  <rect x="150" y="270" width="240" height="32" fill="#ffffff" stroke="#cbd5e1" rx="8"/>
  <text x="270" y="291" text-anchor="middle" font-size="12" font-weight="800" fill="#1e293b">Skala Denah = 1 : 200 (1 cm = 2 m)</text>
</svg>
`);

// 3. MATEMATIKA: Diagram Lingkaran Penggunaan Uang Saku
export const SVG_DIAGRAM_LINGKARAN_MTK = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 320" width="100%" height="100%" style="background:#ffffff; font-family:'Nunito', sans-serif;">
  <rect width="500" height="320" fill="#faf5ff" rx="16" stroke="#f3e8ff" stroke-width="2"/>
  <text x="250" y="32" text-anchor="middle" font-size="15" font-weight="800" fill="#581c87">DIAGRAM PENGGUNAAN UANG SAKU BULANAN DONI</text>
  <text x="250" y="50" text-anchor="middle" font-size="12" font-weight="600" fill="#7e22ce">Total Uang Saku = Rp 200.000 / Bulan</text>

  <!-- Pie Chart with angles -->
  <g transform="translate(160, 180)">
    <!-- Jajan di Kantin: 40% = 144 deg (0 to 144) -->
    <path d="M 0 0 L 100 0 A 100 100 0 0 1 -80.9 58.78 Z" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
    <!-- Ditabung: 30% = 108 deg (144 to 252) -->
    <path d="M 0 0 L -80.9 58.78 A 100 100 0 0 1 -30.9 -95.1 Z" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
    <!-- Alat Tulis: 15% = 54 deg (252 to 306) -->
    <path d="M 0 0 L -30.9 -95.1 A 100 100 0 0 1 58.78 -80.9 Z" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
    <!-- Infaq / Amal: 15% = 54 deg (306 to 360) -->
    <path d="M 0 0 L 58.78 -80.9 A 100 100 0 0 1 100 0 Z" fill="#ec4899" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- Legend -->
  <g transform="translate(295, 100)">
    <rect x="0" y="0" width="18" height="18" fill="#3b82f6" rx="4"/>
    <text x="26" y="14" font-size="12" font-weight="700" fill="#1e293b">Jajan Kantin (40%)</text>

    <rect x="0" y="32" width="18" height="18" fill="#10b981" rx="4"/>
    <text x="26" y="46" font-size="12" font-weight="700" fill="#1e293b">Ditabung (30%)</text>

    <rect x="0" y="64" width="18" height="18" fill="#f59e0b" rx="4"/>
    <text x="26" y="78" font-size="12" font-weight="700" fill="#1e293b">Beli Buku/Tulis (15%)</text>

    <rect x="0" y="96" width="18" height="18" fill="#ec4899" rx="4"/>
    <text x="26" y="110" font-size="12" font-weight="700" fill="#1e293b">Infaq & Donasi (15%)</text>
  </g>
</svg>
`);

// 4. IPA: Rantai Makanan Ekosistem Sawah
export const SVG_RANTAI_MAKANAN_IPA = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 320" width="100%" height="100%" style="background:#ffffff; font-family:'Nunito', sans-serif;">
  <rect width="650" height="320" fill="#ecfdf5" rx="16" stroke="#a7f3d0" stroke-width="2"/>
  <text x="325" y="34" text-anchor="middle" font-size="16" font-weight="800" fill="#065f46">BAGAN RANTAI MAKANAN EKOSISTEM SAWAH</text>

  <!-- Step 1: Padi (Produsen) -->
  <g transform="translate(30, 80)">
    <rect width="95" height="130" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="12"/>
    <text x="47.5" y="35" text-anchor="middle" font-size="28">🌾</text>
    <text x="47.5" y="75" text-anchor="middle" font-size="13" font-weight="800" fill="#166534">PADI</text>
    <text x="47.5" y="95" text-anchor="middle" font-size="11" font-weight="700" fill="#15803d">Produsen</text>
  </g>

  <text x="142" y="150" font-size="22" font-weight="900" fill="#059669">→</text>

  <!-- Step 2: Belalang (Konsumen 1) -->
  <g transform="translate(160, 80)">
    <rect width="95" height="130" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="12"/>
    <text x="47.5" y="35" text-anchor="middle" font-size="28">🦗</text>
    <text x="47.5" y="75" text-anchor="middle" font-size="13" font-weight="800" fill="#92400e">BELALANG</text>
    <text x="47.5" y="95" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">Konsumen I</text>
    <text x="47.5" y="112" text-anchor="middle" font-size="9" fill="#78350f">(Herbivora)</text>
  </g>

  <text x="272" y="150" font-size="22" font-weight="900" fill="#059669">→</text>

  <!-- Step 3: Katak (Konsumen 2 - BERBINTANG X) -->
  <g transform="translate(290, 80)">
    <rect width="95" height="130" fill="#fee2e2" stroke="#dc2626" stroke-width="3" rx="12" stroke-dasharray="4"/>
    <text x="47.5" y="35" text-anchor="middle" font-size="28">🐸</text>
    <text x="47.5" y="75" text-anchor="middle" font-size="13" font-weight="800" fill="#991b1b">HEWAN (X)</text>
    <text x="47.5" y="95" text-anchor="middle" font-size="11" font-weight="700" fill="#b91c1c">Konsumen II</text>
    <text x="47.5" y="112" text-anchor="middle" font-size="9" fill="#7f1d1d">(Pemakan serangga)</text>
  </g>

  <text x="402" y="150" font-size="22" font-weight="900" fill="#059669">→</text>

  <!-- Step 4: Ular (Konsumen 3) -->
  <g transform="translate(420, 80)">
    <rect width="95" height="130" fill="#f3e8ff" stroke="#9333ea" stroke-width="2" rx="12"/>
    <text x="47.5" y="35" text-anchor="middle" font-size="28">🐍</text>
    <text x="47.5" y="75" text-anchor="middle" font-size="13" font-weight="800" fill="#6b21a8">ULAR</text>
    <text x="47.5" y="95" text-anchor="middle" font-size="11" font-weight="700" fill="#7e22ce">Konsumen III</text>
    <text x="47.5" y="112" text-anchor="middle" font-size="9" fill="#581c87">(Karnivora)</text>
  </g>

  <text x="532" y="150" font-size="22" font-weight="900" fill="#059669">→</text>

  <!-- Step 5: Elang (Konsumen Puncak) -->
  <g transform="translate(545, 80)">
    <rect width="85" height="130" fill="#ffedd5" stroke="#ea580c" stroke-width="2" rx="12"/>
    <text x="42.5" y="35" text-anchor="middle" font-size="28">🦅</text>
    <text x="42.5" y="75" text-anchor="middle" font-size="12" font-weight="800" fill="#9a3412">ELANG</text>
    <text x="42.5" y="95" text-anchor="middle" font-size="10" font-weight="700" fill="#c2410c">Puncak</text>
  </g>

  <!-- Keterangan Soal -->
  <rect x="50" y="245" width="550" height="50" fill="#ffffff" stroke="#cbd5e1" rx="10"/>
  <text x="325" y="267" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">Kasus: Jika populasi Katak (Hewan X) mengalami kepunahan mendadak akibat perburuan,</text>
  <text x="325" y="284" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">bagaimanakah dampak langsung terhadap populasi Belalang dan Ular di sawah?</text>
</svg>
`);

// 5. IPA: Percobaan Lilin & Gelas Kaca (Oksigen & Tekanan Udara)
export const SVG_PERCOBAAN_LILIN_IPA = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 320" width="100%" height="100%" style="background:#ffffff; font-family:'Nunito', sans-serif;">
  <rect width="540" height="320" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>
  <text x="270" y="32" text-anchor="middle" font-size="15" font-weight="800" fill="#0f172a">PERCOBAAN SAINS: LILIN MENYALA DITUTUP GELAS KACA</text>

  <!-- Gelas 1: Kondisi Awal (Terbuka) -->
  <g transform="translate(60, 60)">
    <rect width="180" height="220" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="12"/>
    <text x="90" y="26" text-anchor="middle" font-size="13" font-weight="800" fill="#1e293b">Kondisi (1): Terbuka</text>

    <!-- Piring / Wadah Air -->
    <ellipse cx="90" cy="180" rx="65" ry="18" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    
    <!-- Lilin Menyala -->
    <rect x="80" y="110" width="20" height="60" fill="#fde047" stroke="#ca8a04" stroke-width="1.5" rx="3"/>
    <!-- Api Lilin -->
    <path d="M 90 90 Q 98 105 90 110 Q 82 105 90 90 Z" fill="#ea580c"/>
    <circle cx="90" cy="102" r="3" fill="#facc15"/>
    <text x="90" y="215" text-anchor="middle" font-size="11" font-weight="700" fill="#0369a1">Lilin menyala terang</text>
  </g>

  <!-- Panah Transisi -->
  <text x="268" y="170" font-size="26" font-weight="900" fill="#64748b">→</text>

  <!-- Gelas 2: Kondisi Ditutup Gelas -->
  <g transform="translate(300, 60)">
    <rect width="180" height="220" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="12"/>
    <text x="90" y="26" text-anchor="middle" font-size="13" font-weight="800" fill="#1e293b">Kondisi (2): Ditutup Gelas</text>

    <!-- Piring -->
    <ellipse cx="90" cy="180" rx="65" ry="18" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>

    <!-- Gelas Kaca Terbalik -->
    <path d="M 60 70 L 60 178 Q 90 190 120 178 L 120 70 Z" fill="rgba(186, 230, 253, 0.4)" stroke="#0284c7" stroke-width="2"/>

    <!-- Air Terhisap Masuk ke Gelas -->
    <path d="M 60 145 L 60 178 Q 90 190 120 178 L 120 145 Z" fill="#38bdf8" opacity="0.6"/>

    <!-- Lilin Padam & Asap -->
    <rect x="80" y="110" width="20" height="60" fill="#fde047" stroke="#ca8a04" stroke-width="1.5" rx="3"/>
    <path d="M 90 95 Q 85 85 92 75" stroke="#94a3b8" stroke-width="2" fill="none" stroke-linecap="round"/>
    
    <text x="90" y="215" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">Lilin padam &amp; air naik</text>
  </g>
</svg>
`);

// 6. BAHASA INDONESIA: Infografis Gerakan Hemat Air Bersih
export const SVG_INFOGRAFIS_HEMAT_AIR_BIN = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%" style="background:#ffffff; font-family:'Nunito', sans-serif;">
  <rect width="600" height="340" fill="#f0f9ff" rx="16" stroke="#bae6fd" stroke-width="2"/>
  <text x="300" y="36" text-anchor="middle" font-size="16" font-weight="900" fill="#0369a1">INFOGRAFIS: 4 LANGKAH BIJAK HEMAT AIR BERSIH DI RUMAH</text>

  <!-- Box 1: Matikan Keran -->
  <g transform="translate(40, 65)">
    <rect width="240" height="110" fill="#ffffff" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="35" y="45" font-size="30">🚰</text>
    <text x="75" y="38" font-size="13" font-weight="800" fill="#0f172a">1. Tutup Keran Rapat</text>
    <text x="75" y="60" font-size="11" fill="#475569">Jangan biarkan air terus</text>
    <text x="75" y="78" font-size="11" fill="#475569">mengalir saat menggosok gigi.</text>
    <text x="75" y="96" font-size="10" font-weight="700" fill="#0284c7">Hemat hingga 6 Liter/menit</text>
  </g>

  <!-- Box 2: Gunakan Pancuran (Shower) -->
  <g transform="translate(320, 65)">
    <rect width="240" height="110" fill="#ffffff" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="35" y="45" font-size="30">🚿</text>
    <text x="75" y="38" font-size="13" font-weight="800" fill="#0f172a">2. Mandi Pakai Shower</text>
    <text x="75" y="60" font-size="11" fill="#475569">Mandi dengan gayung/bak</text>
    <text x="75" y="78" font-size="11" fill="#475569">menghabiskan air 3x lebih banyak.</text>
    <text x="75" y="96" font-size="10" font-weight="700" fill="#0284c7">Hemat 40 Liter per hari</text>
  </g>

  <!-- Box 3: Siram Tanaman Sore Hari -->
  <g transform="translate(40, 195)">
    <rect width="240" height="110" fill="#ffffff" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="35" y="45" font-size="30">🌱</text>
    <text x="75" y="38" font-size="13" font-weight="800" fill="#0f172a">3. Siram Saat Sore Hari</text>
    <text x="75" y="60" font-size="11" fill="#475569">Menyiram sore hari mencegah</text>
    <text x="75" y="78" font-size="11" fill="#475569">penguapan air terlalu cepat.</text>
    <text x="75" y="96" font-size="10" font-weight="700" fill="#0284c7">Gunakan air bekas cucian beras</text>
  </g>

  <!-- Box 4: Cek Kebocoran Pipa -->
  <g transform="translate(320, 195)">
    <rect width="240" height="110" fill="#ffffff" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="35" y="45" font-size="30">🔧</text>
    <text x="75" y="38" font-size="13" font-weight="800" fill="#0f172a">4. Perbaiki Pipa Bocor</text>
    <text x="75" y="60" font-size="11" fill="#475569">Satu tetesan pipa bocor bisa</text>
    <text x="75" y="78" font-size="11" fill="#475569">membuang puluhan liter air.</text>
    <text x="75" y="96" font-size="10" font-weight="700" fill="#0284c7">Segera laporkan ke orang tua</text>
  </g>
</svg>
`);

// 7. PENALARAN SPASIAL: Pola Perputaran Rotasi Geometris 90 Derajat
export const SVG_POLA_ROTASI_LOGIKA = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" width="100%" height="100%" style="background:#ffffff; font-family:'Nunito', sans-serif;">
  <rect width="600" height="240" fill="#fdf4ff" rx="16" stroke="#f5d0fe" stroke-width="2"/>
  <text x="300" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#86198f">POLA PENALARAN SPASIAL: TENTUKAN GAMBAR KE-4 PADA TANDA TANYA (?)</text>

  <!-- Box 1: Dot Top-Right, Arrow Up -->
  <g transform="translate(40, 55)">
    <rect width="100" height="100" fill="#ffffff" stroke="#a21caf" stroke-width="2" rx="10"/>
    <circle cx="80" cy="20" r="10" fill="#3b82f6"/>
    <polygon points="50,25 35,55 45,55 45,85 55,85 55,55 65,55" fill="#f59e0b"/>
    <text x="50" y="130" text-anchor="middle" font-size="13" font-weight="800" fill="#6b21a8">Pola 1 (0°)</text>
  </g>

  <text x="160" y="115" font-size="24" font-weight="900" fill="#c084fc">→</text>

  <!-- Box 2: Dot Bottom-Right, Arrow Right (Rotate 90 deg clockwise) -->
  <g transform="translate(180, 55)">
    <rect width="100" height="100" fill="#ffffff" stroke="#a21caf" stroke-width="2" rx="10"/>
    <circle cx="80" cy="80" r="10" fill="#3b82f6"/>
    <polygon points="75,50 45,35 45,45 15,45 15,55 45,55 45,65" fill="#f59e0b"/>
    <text x="50" y="130" text-anchor="middle" font-size="13" font-weight="800" fill="#6b21a8">Pola 2 (90°)</text>
  </g>

  <text x="300" y="115" font-size="24" font-weight="900" fill="#c084fc">→</text>

  <!-- Box 3: Dot Bottom-Left, Arrow Down (Rotate 180 deg) -->
  <g transform="translate(320, 55)">
    <rect width="100" height="100" fill="#ffffff" stroke="#a21caf" stroke-width="2" rx="10"/>
    <circle cx="20" cy="80" r="10" fill="#3b82f6"/>
    <polygon points="50,75 35,45 45,45 45,15 55,15 55,45 65,45" fill="#f59e0b"/>
    <text x="50" y="130" text-anchor="middle" font-size="13" font-weight="800" fill="#6b21a8">Pola 3 (180°)</text>
  </g>

  <text x="440" y="115" font-size="24" font-weight="900" fill="#c084fc">→</text>

  <!-- Box 4: Tanda Tanya (?) -->
  <g transform="translate(460, 55)">
    <rect width="100" height="100" fill="#fef2f2" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="5" rx="10"/>
    <text x="50" y="68" text-anchor="middle" font-size="44" font-weight="900" fill="#dc2626">?</text>
    <text x="50" y="130" text-anchor="middle" font-size="13" font-weight="800" fill="#dc2626">Pola 4 (270°)</text>
  </g>
</svg>
`);

// 8. PENALARAN SPASIAL: Jaring-Jaring Kubus & Sisi Berseberangan
export const SVG_JARING_KUBUS_LOGIKA = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%" height="100%" style="background:#ffffff; font-family:'Nunito', sans-serif;">
  <rect width="540" height="300" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="2"/>
  <text x="270" y="32" text-anchor="middle" font-size="15" font-weight="800" fill="#0f172a">JARING-JARING KUBUS BERANGKA</text>

  <!-- Cube Net: Shape T with 6 squares -->
  <!-- Center row: boxes 2, 3, 4, 5 (y = 110) -->
  <g transform="translate(90, 50)">
    <!-- Square 1 (Atas nomor 3) -->
    <rect x="120" y="10" width="60" height="60" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="4"/>
    <text x="150" y="47" text-anchor="middle" font-size="18" font-weight="800" fill="#0369a1">1</text>

    <!-- Row of 4 squares: 2, 3, 4, 5 -->
    <rect x="60" y="70" width="60" height="60" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="4"/>
    <text x="90" y="107" text-anchor="middle" font-size="18" font-weight="800" fill="#b45309">2</text>

    <rect x="120" y="70" width="60" height="60" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="4"/>
    <text x="150" y="107" text-anchor="middle" font-size="18" font-weight="800" fill="#15803d">3 (Alas)</text>

    <rect x="180" y="70" width="60" height="60" fill="#f3e8ff" stroke="#9333ea" stroke-width="2" rx="4"/>
    <text x="210" y="107" text-anchor="middle" font-size="18" font-weight="800" fill="#7e22ce">4</text>

    <rect x="240" y="70" width="60" height="60" fill="#fee2e2" stroke="#dc2626" stroke-width="2" rx="4"/>
    <text x="270" y="107" text-anchor="middle" font-size="18" font-weight="800" fill="#b91c1c">5</text>

    <!-- Square 6 (Bawah nomor 3) -->
    <rect x="120" y="130" width="60" height="60" fill="#ffedd5" stroke="#ea580c" stroke-width="2" rx="4"/>
    <text x="150" y="167" text-anchor="middle" font-size="18" font-weight="800" fill="#c2410c">6</text>
  </g>

  <!-- Keterangan -->
  <rect x="60" y="240" width="420" height="38" fill="#ffffff" stroke="#94a3b8" rx="8"/>
  <text x="270" y="264" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">Jika nomor 3 dijadikan sebagai ALAS kubus, nomor berapakah yang menjadi TUTUP kubus?</text>
</svg>
`);

// 9. MATEMATIKA: Diagram Balok Ruang & Dimensi
export const SVG_BALOK_VOLUME_MTK = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="100%" height="100%" style="background:#ffffff; font-family:'Nunito', sans-serif;">
  <rect width="500" height="280" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="2"/>
  <text x="250" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#0f172a">BANGUN RUANG BALOK (DIMENSI UKURAN)</text>

  <g transform="translate(100, 50)">
    <!-- Back faces -->
    <polygon points="120,30 320,30 240,110 40,110" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3"/>
    
    <!-- Front Face -->
    <rect x="40" y="110" width="200" height="90" fill="#c7d2fe" stroke="#4f46e5" stroke-width="2"/>
    
    <!-- Top Face -->
    <polygon points="40,110 120,30 320,30 240,110" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
    
    <!-- Right Face -->
    <polygon points="240,110 320,30 320,120 240,200" fill="#818cf8" stroke="#3730a3" stroke-width="2"/>

    <!-- Labels -->
    <text x="140" y="225" text-anchor="middle" font-size="13" font-weight="800" fill="#1e1b4b">Panjang (p) = 20 cm</text>
    <text x="290" y="80" text-anchor="start" font-size="13" font-weight="800" fill="#1e1b4b">Lebar (l) = 12 cm</text>
    <text x="15" y="160" text-anchor="middle" font-size="13" font-weight="800" fill="#1e1b4b">t = 8 cm</text>
  </g>
</svg>
`);

// 10. IPA: Siklus Air Hidrologi
export const SVG_SIKLUS_AIR_IPA = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="100%" style="background:#ffffff; font-family:'Nunito', sans-serif;">
  <rect width="560" height="320" fill="#f0f9ff" rx="16" stroke="#bae6fd" stroke-width="2"/>
  <text x="280" y="28" text-anchor="middle" font-size="15" font-weight="800" fill="#0369a1">TAHAPAN DAUR / SIKLUS AIR (HIDROLOGI)</text>

  <!-- Sun -->
  <circle cx="80" cy="70" r="30" fill="#f59e0b"/>
  <text x="80" y="75" text-anchor="middle" font-size="16">☀️</text>

  <!-- Cloud 1 (Evaporation/Condensation) -->
  <g transform="translate(180, 50)">
    <rect width="110" height="45" rx="20" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="55" y="27" text-anchor="middle" font-size="11" font-weight="800" fill="#0284c7">(B) Kondensasi</text>
  </g>

  <!-- Cloud 2 (Precipitation) -->
  <g transform="translate(370, 60)">
    <rect width="120" height="45" rx="20" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
    <text x="60" y="27" text-anchor="middle" font-size="11" font-weight="800" fill="#334155">(C) Presipitasi</text>
    <!-- Rain drops -->
    <line x1="30" y1="55" x2="20" y2="85" stroke="#0284c7" stroke-width="2" stroke-dasharray="4"/>
    <line x1="60" y1="55" x2="50" y2="85" stroke="#0284c7" stroke-width="2" stroke-dasharray="4"/>
    <line x1="90" y1="55" x2="80" y2="85" stroke="#0284c7" stroke-width="2" stroke-dasharray="4"/>
  </g>

  <!-- Evaporation Arrow from Ocean -->
  <path d="M 120 220 Q 140 160 190 110" fill="none" stroke="#ea580c" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="110" y="160" font-size="11" font-weight="800" fill="#c2410c">(A) Evaporasi</text>

  <!-- Ocean / Water body -->
  <rect x="20" y="240" width="220" height="60" fill="#38bdf8" rx="8"/>
  <text x="130" y="275" text-anchor="middle" font-size="13" font-weight="800" fill="#ffffff">Laut / Danau (Air Permukaan)</text>

  <!-- Mountain / Land -->
  <polygon points="260,300 400,160 540,300" fill="#86efac" stroke="#22c55e" stroke-width="2"/>
  <text x="410" y="250" text-anchor="middle" font-size="11" font-weight="800" fill="#14532d">(D) Infiltrasi &amp; Aliran</text>
</svg>
`);

// 11. BAHASA INDONESIA: Infografis Pemilahan Sampah
export const SVG_INFOGRAFIS_SAMPAH_BIN = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 280" width="100%" height="100%" style="background:#ffffff; font-family:'Nunito', sans-serif;">
  <rect width="540" height="280" fill="#f0fdf4" rx="16" stroke="#bbf7d0" stroke-width="2"/>
  <text x="270" y="28" text-anchor="middle" font-size="15" font-weight="800" fill="#166534">INFOGRAFIS: GERAKAN PILAH SAMPAH DARI RUMAH</text>

  <!-- Bin 1: Organik (Hijau) -->
  <g transform="translate(40, 50)">
    <rect width="135" height="190" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="12"/>
    <text x="67.5" y="30" text-anchor="middle" font-size="28">🍏</text>
    <text x="67.5" y="65" text-anchor="middle" font-size="13" font-weight="800" fill="#15803d">ORGANIK</text>
    <text x="67.5" y="85" text-anchor="middle" font-size="10" font-weight="700" fill="#166534">Tempat Sampah Hijau</text>
    <line x1="15" y1="95" x2="120" y2="95" stroke="#86efac" stroke-width="1.5"/>
    <text x="15" y="115" font-size="9" fill="#14532d">• Sisa Makanan</text>
    <text x="15" y="132" font-size="9" fill="#14532d">• Kulit Buah / Sayur</text>
    <text x="15" y="149" font-size="9" fill="#14532d">• Daun Gugur</text>
    <text x="15" y="172" font-size="9" font-weight="700" fill="#15803d">➜ Dibuat Kompos</text>
  </g>

  <!-- Bin 2: Anorganik (Kuning) -->
  <g transform="translate(200, 50)">
    <rect width="135" height="190" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="12"/>
    <text x="67.5" y="30" text-anchor="middle" font-size="28">🥤</text>
    <text x="67.5" y="65" text-anchor="middle" font-size="13" font-weight="800" fill="#b45309">ANORGANIK</text>
    <text x="67.5" y="85" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">Tempat Sampah Kuning</text>
    <line x1="15" y1="95" x2="120" y2="95" stroke="#fde68a" stroke-width="1.5"/>
    <text x="15" y="115" font-size="9" fill="#78350f">• Botol &amp; Plastik</text>
    <text x="15" y="132" font-size="9" fill="#78350f">• Kaleng Minuman</text>
    <text x="15" y="149" font-size="9" fill="#78350f">• Kertas &amp; Kardus</text>
    <text x="15" y="172" font-size="9" font-weight="700" fill="#b45309">➜ Daur Ulang (Recycle)</text>
  </g>

  <!-- Bin 3: B3 / Berbahaya (Merah) -->
  <g transform="translate(360, 50)">
    <rect width="135" height="190" fill="#fee2e2" stroke="#dc2626" stroke-width="2" rx="12"/>
    <text x="67.5" y="30" text-anchor="middle" font-size="28">🔋</text>
    <text x="67.5" y="65" text-anchor="middle" font-size="13" font-weight="800" fill="#b91c1c">B3 &amp; RESIDU</text>
    <text x="67.5" y="85" text-anchor="middle" font-size="10" font-weight="700" fill="#991b1b">Tempat Sampah Merah</text>
    <line x1="15" y1="95" x2="120" y2="95" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="15" y="115" font-size="9" fill="#7f1d1d">• Baterai Bekas</text>
    <text x="15" y="132" font-size="9" fill="#7f1d1d">• Pecahan Kaca</text>
    <text x="15" y="149" font-size="9" fill="#7f1d1d">• Jarum / Obat</text>
    <text x="15" y="172" font-size="9" font-weight="700" fill="#b91c1c">➜ Pengolahan Khusus</text>
  </g>
</svg>
`);

// 12. PENALARAN LOGIKA: Matriks Analogi Pola Bentuk (3x3)
export const SVG_MATRIKS_POLA_LOG = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 300" width="100%" height="100%" style="background:#ffffff; font-family:'Nunito', sans-serif;">
  <rect width="460" height="300" fill="#faf5ff" rx="16" stroke="#e9d5ff" stroke-width="2"/>
  <text x="230" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#6b21a8">MATRIKS POLA GAMBAR 3 × 3 (TENTUKAN KOTAK POJOK KANAN BAWAH)</text>

  <g transform="translate(95, 45)">
    <!-- Row 1 -->
    <rect x="0" y="0" width="80" height="70" fill="#ffffff" stroke="#c084fc" stroke-width="2" rx="6"/>
    <circle cx="40" cy="35" r="18" fill="#3b82f6"/>

    <rect x="95" y="0" width="80" height="70" fill="#ffffff" stroke="#c084fc" stroke-width="2" rx="6"/>
    <circle cx="40+95" cy="35" r="18" fill="#3b82f6"/>
    <circle cx="40+95" cy="35" r="8" fill="#ffffff"/>

    <rect x="190" y="0" width="80" height="70" fill="#ffffff" stroke="#c084fc" stroke-width="2" rx="6"/>
    <circle cx="40+190" cy="35" r="18" fill="#3b82f6"/>
    <circle cx="40+190" cy="35" r="8" fill="#f59e0b"/>

    <!-- Row 2 -->
    <rect x="0" y="80" width="80" height="70" fill="#ffffff" stroke="#c084fc" stroke-width="2" rx="6"/>
    <polygon points="40,95 22,130 58,130" fill="#10b981"/>

    <rect x="95" y="80" width="80" height="70" fill="#ffffff" stroke="#c084fc" stroke-width="2" rx="6"/>
    <polygon points="40+95,95 22+95,130 58+95,130" fill="#10b981"/>
    <polygon points="40+95,108 30+95,125 50+95,125" fill="#ffffff"/>

    <rect x="190" y="80" width="80" height="70" fill="#ffffff" stroke="#c084fc" stroke-width="2" rx="6"/>
    <polygon points="40+190,95 22+190,130 58+190,130" fill="#10b981"/>
    <polygon points="40+190,108 30+190,125 50+190,125" fill="#f59e0b"/>

    <!-- Row 3 -->
    <rect x="0" y="160" width="80" height="70" fill="#ffffff" stroke="#c084fc" stroke-width="2" rx="6"/>
    <rect x="22" y="177" width="36" height="36" fill="#8b5cf6" rx="4"/>

    <rect x="95" y="160" width="80" height="70" fill="#ffffff" stroke="#c084fc" stroke-width="2" rx="6"/>
    <rect x="22+95" y="177" width="36" height="36" fill="#8b5cf6" rx="4"/>
    <rect x="32+95" y="187" width="16" height="16" fill="#ffffff" rx="2"/>

    <!-- Unknown Box -->
    <rect x="190" y="160" width="80" height="70" fill="#fef2f2" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4" rx="6"/>
    <text x="230" y="205" text-anchor="middle" font-size="32" font-weight="900" fill="#dc2626">?</text>
  </g>
</svg>
`);
