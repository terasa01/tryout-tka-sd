import { Question } from '../types/quiz';
import { 
  SVG_DIAGRAM_PANEN_MTK, 
  SVG_BALOK_VOLUME_MTK, 
  SVG_DIAGRAM_LINGKARAN_MTK, 
  SVG_DENAH_TAMAN_MTK 
} from './questionVisuals';

/**
 * ============================================================================
 * BANK SOAL TKA SD - MATEMATIKA & NUMERASI LOGIKA (3 PAKET LENGKAP @ 30 SOAL)
 * Bebas Typo, Terstandarisasi Kurikulum Merdeka & ANBK / Pusmendik
 * ============================================================================
 */

/**
 * PAKET 01: DIAGNOSTIK (Pemetaan Awal Konsep Dasar) - 30 Soal
 */
export const QUESTIONS_MTK_01: Question[] = [
  // 1
  {
    id: 101,
    number: 1,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Operasi Hitung Penjumlahan dan Pengurangan Bilangan Bulat',
    questionType: 'single',
    questionText: 'Hasil dari (-35) + 82 - 27 adalah...',
    options: [
      { key: 'A', text: '18' },
      { key: 'B', text: '20' },
      { key: 'C', text: '24' },
      { key: 'D', text: '28' }
    ],
    correctAnswer: 'B',
    explanation: 'Langkah pengerjaan berurutan dari kiri:\n1) (-35) + 82 = 82 - 35 = 47\n2) 47 - 27 = 20.\nJadi, hasilnya adalah 20.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 2
  {
    id: 102,
    number: 2,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Faktor Persekutuan Terbesar (FPB)',
    questionType: 'single',
    questionText: 'Faktor Persekutuan Terbesar (FPB) dari bilangan 36, 54, dan 72 adalah...',
    options: [
      { key: 'A', text: '9' },
      { key: 'B', text: '12' },
      { key: 'C', text: '18' },
      { key: 'D', text: '24' }
    ],
    correctAnswer: 'C',
    explanation: 'Faktorisasi prima:\n• 36 = 2² × 3²\n• 54 = 2 × 3³\n• 72 = 2³ × 3²\nFPB diambil dari faktor prima persekutuan dengan pangkat terkecil: 2¹ × 3² = 2 × 9 = 18.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 3
  {
    id: 103,
    number: 3,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Kelipatan Persekutuan Terkecil (KPK)',
    questionType: 'single',
    questionText: 'Kelipatan Persekutuan Terkecil (KPK) dari 12, 18, dan 24 adalah...',
    options: [
      { key: 'A', text: '36' },
      { key: 'B', text: '48' },
      { key: 'C', text: '72' },
      { key: 'D', text: '144' }
    ],
    correctAnswer: 'C',
    explanation: 'Faktorisasi prima:\n• 12 = 2² × 3\n• 18 = 2 × 3²\n• 24 = 2³ × 3\nKPK diambil dari seluruh faktor dengan pangkat tertinggi: 2³ × 3² = 8 × 9 = 72.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 4
  {
    id: 104,
    number: 4,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Pecahan Senilai & Desimal',
    questionType: 'single',
    questionText: 'Bentuk desimal dan persen dari pecahan 3/4 berturut-turut adalah...',
    options: [
      { key: 'A', text: '0,34 dan 34%' },
      { key: 'B', text: '0,75 dan 75%' },
      { key: 'C', text: '0,65 dan 65%' },
      { key: 'D', text: '0,80 dan 80%' }
    ],
    correctAnswer: 'B',
    explanation: '3/4 = (3 × 25) / (4 × 25) = 75/100 = 0,75 = 75%.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 5
  {
    id: 105,
    number: 5,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Konversi Satuan Waktu dan Panjang',
    questionType: 'single',
    questionText: 'Sebuah perjalanan membutuhkan waktu 2 jam 45 menit. Waktu tersebut sama dengan ... menit.',
    options: [
      { key: 'A', text: '145 menit' },
      { key: 'B', text: '165 menit' },
      { key: 'C', text: '175 menit' },
      { key: 'D', text: '185 menit' }
    ],
    correctAnswer: 'B',
    explanation: '1 jam = 60 menit.\n2 jam 45 menit = (2 × 60) + 45 = 120 + 45 = 165 menit.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 6
  {
    id: 106,
    number: 6,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Keliling Bangun Datar Persegi Panjang',
    questionType: 'single',
    questionText: 'Sebuah kebun berbentuk persegi panjang berukuran panjang 24 meter dan lebar 16 meter. Keliling kebun tersebut adalah...',
    options: [
      { key: 'A', text: '40 meter' },
      { key: 'B', text: '80 meter' },
      { key: 'C', text: '160 meter' },
      { key: 'D', text: '384 meter' }
    ],
    correctAnswer: 'B',
    explanation: 'Rumus Keliling Persegi Panjang = 2 × (p + l) = 2 × (24 m + 16 m) = 2 × 40 m = 80 meter.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 7
  {
    id: 107,
    number: 7,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Sifat-Sifat Bangun Datar',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh pernyataan berikut yang merupakan sifat-sifat bangun datar PERSEGI PANJANG!',
    options: [
      { key: 'A', text: 'Memiliki 2 pasang sisi sejajar yang sama panjang' },
      { key: 'B', text: 'Keempat sisinya memiliki panjang yang persis sama' },
      { key: 'C', text: 'Memiliki 4 sudut siku-siku berukuran 90 derajat' },
      { key: 'D', text: 'Memiliki 2 simetri lipat dan 2 simetri putar' }
    ],
    correctMultipleAnswers: ['A', 'C', 'D'],
    explanation: 'Sifat persegi panjang:\n• Sisi berhadapan sejajar & sama panjang (A benar).\n• Sudutnya siku-siku 90° (C benar).\n• Memiliki 2 simetri lipat & putar (D benar).\nOpsi B adalah sifat bujur sangkar/persegi.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 8
  {
    id: 108,
    number: 8,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Klasifikasi Jenis Bilangan',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Angka 17 merupakan bilangan prima',
        'Angka 27 merupakan bilangan prima',
        'Angka 2 merupakan satu-satunya bilangan prima genap'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Salah',
      2: 'Benar'
    },
    questionText: 'Tentukan kebenaran dari setiap pernyataan mengenai jenis bilangan prima berikut ini!',
    options: [],
    explanation: 'Analisis bilangan prima:\n• 17 hanya bisa dibagi 1 dan 17 -> Prima (Benar).\n• 27 bisa dibagi 1, 3, 9, 27 -> Bukan prima (Salah).\n• 2 adalah satu-satunya bilangan prima genap -> (Benar).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 9
  {
    id: 109,
    number: 9,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Operasi Hitung Campuran Bilangan Bulat Negatif',
    questionType: 'single',
    questionText: 'Hasil dari 144 : (-12) + 15 × (-4) - (-25) adalah...',
    options: [
      { key: 'A', text: '-47' },
      { key: 'B', text: '-57' },
      { key: 'C', text: '-67' },
      { key: 'D', text: '-77' }
    ],
    correctAnswer: 'A',
    explanation: 'Urutan operasi:\n1) 144 : (-12) = -12\n2) 15 × (-4) = -60\n3) (-12) + (-60) - (-25) = -72 + 25 = -47.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 10
  {
    id: 110,
    number: 10,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Penerapan FPB dalam Pembagian Paket Sembako',
    questionType: 'single',
    questionText: 'Panitia bakti sosial menyiapkan 48 kg beras, 64 bungkus mie instan, dan 80 butir telur. Ketiga barang tersebut akan dimasukkan ke dalam kantong bantuan sebanyak-banyaknya dengan isi yang sama. Berapa bungkus mie instan yang terdapat di setiap kantong bantuan?',
    options: [
      { key: 'A', text: '3 bungkus' },
      { key: 'B', text: '4 bungkus' },
      { key: 'C', text: '5 bungkus' },
      { key: 'D', text: '6 bungkus' }
    ],
    correctAnswer: 'B',
    explanation: '1) FPB dari 48 (2⁴×3), 64 (2⁶), dan 80 (2⁴×5) = 2⁴ = 16 kantong bantuan.\n2) Mie instan per kantong = 64 : 16 = 4 bungkus.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 11
  {
    id: 111,
    number: 11,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Penerapan KPK Pertemuan Berkala',
    questionType: 'single',
    questionText: 'Andi les matematika setiap 3 hari sekali, Budi setiap 4 hari sekali, dan Candra setiap 6 hari sekali. Jika mereka les bersama-sama pada hari Senin, pada hari apakah mereka akan les bersama untuk kedua kalinya?',
    options: [
      { key: 'A', text: 'Jumat' },
      { key: 'B', text: 'Sabtu' },
      { key: 'C', text: 'Minggu' },
      { key: 'D', text: 'Senin berikutnya' }
    ],
    correctAnswer: 'B',
    explanation: 'KPK dari 3, 4 (2²), dan 6 (2 × 3) = 12 hari.\n12 hari setelah hari Senin:\n12 : 7 = 1 minggu lebih 5 hari.\nSenin + 5 hari = Sabtu.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 12
  {
    id: 112,
    number: 12,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Pecahan Bagian Tanah Warisan',
    questionType: 'single',
    imageUrl: SVG_DIAGRAM_LINGKARAN_MTK,
    imageCaption: 'Ilustrasi pembagian bagian tanah dan lahan pertanian',
    questionText: 'Pak Danu memiliki sebidang tanah seluas 1.200 m². Sebanyak 2/5 bagian dibangun rumah tinggal, 1/4 bagian ditanami tanaman hias, dan sisanya dibuat kolam ikan. Luas kolam ikan Pak Danu adalah...',
    options: [
      { key: 'A', text: '360 m²' },
      { key: 'B', text: '420 m²' },
      { key: 'C', text: '480 m²' },
      { key: 'D', text: '540 m²' }
    ],
    correctAnswer: 'B',
    explanation: '1) Rumah = 2/5 × 1.200 = 480 m²\n2) Tanaman = 1/4 × 1.200 = 300 m²\n3) Terpakai = 480 + 300 = 780 m²\n4) Kolam ikan = 1.200 - 780 = 420 m².',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 13
  {
    id: 113,
    number: 13,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Perbandingan Umur Bertingkat',
    questionType: 'single',
    questionText: 'Perbandingan umur Ayah dan Kakak adalah 5 : 2. Jika jumlah umur keduanya saat ini adalah 49 tahun, selisih umur Ayah dan Kakak adalah...',
    options: [
      { key: 'A', text: '18 tahun' },
      { key: 'B', text: '21 tahun' },
      { key: 'C', text: '24 tahun' },
      { key: 'D', text: '27 tahun' }
    ],
    correctAnswer: 'B',
    explanation: 'Jumlah bagian = 5 + 2 = 7 bagian = 49 tahun -> 1 bagian = 7 tahun.\nSelisih bagian = 5 - 2 = 3 bagian.\nSelisih umur = 3 × 7 = 21 tahun.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 14
  {
    id: 114,
    number: 14,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Kecepatan, Jarak, dan Waktu',
    questionType: 'single',
    questionText: 'Sebuah bus berangkat dari kota P pukul 07.15 menuju kota Q dengan kecepatan rata-rata 60 km/jam. Jarak antara kota P dan Q adalah 150 km. Bus tersebut sempat istirahat selama 30 menit di perjalanan. Pukul berapakah bus tiba di kota Q?',
    options: [
      { key: 'A', text: '09.45' },
      { key: 'B', text: '10.15' },
      { key: 'C', text: '10.30' },
      { key: 'D', text: '10.45' }
    ],
    correctAnswer: 'B',
    explanation: '1) Waktu tempuh = 150 km : 60 km/jam = 2,5 jam = 2 jam 30 menit.\n2) Total waktu = 2 jam 30 menit + 30 menit = 3 jam.\n3) Tiba = 07.15 + 3 jam = 10.15.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 15
  {
    id: 115,
    number: 15,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Debit Air dan Pengisian Bak',
    questionType: 'single',
    questionText: 'Sebuah bak penampungan air memiliki volume 720 liter. Bak tersebut diisi menggunakan selang air dengan debit 12 liter/menit. Berapa jam waktu yang dibutuhkan untuk mengisi bak penampungan tersebut hingga penuh?',
    options: [
      { key: 'A', text: '1 jam' },
      { key: 'B', text: '1,5 jam' },
      { key: 'C', text: '2 jam' },
      { key: 'D', text: '2,5 jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Waktu = 720 liter : 12 liter/menit = 60 menit = 1 jam.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 16
  {
    id: 116,
    number: 16,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Luas Gabungan Bangun Datar',
    questionType: 'single',
    questionText: 'Sebuah lantai berbentuk persegi dengan panjang sisi 6 meter akan dipasangi ubin berukuran 30 cm × 30 cm. Berapa banyak ubin yang diperlukan untuk menutup seluruh lantai tersebut?',
    options: [
      { key: 'A', text: '200 buah' },
      { key: 'B', text: '300 buah' },
      { key: 'C', text: '400 buah' },
      { key: 'D', text: '600 buah' }
    ],
    correctAnswer: 'C',
    explanation: '1) Luas lantai = 600 cm × 600 cm = 360.000 cm².\n2) Luas ubin = 30 cm × 30 cm = 900 cm².\n3) Banyak ubin = 360.000 : 900 = 400 buah.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 17
  {
    id: 117,
    number: 17,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Statistika Rata-Rata Nilai (Mean)',
    questionType: 'single',
    questionText: 'Nilai ulangan matematika 5 orang siswa adalah 78, 85, 92, 80, dan 75. Nilai rata-rata ulangan kelima siswa tersebut adalah...',
    options: [
      { key: 'A', text: '81' },
      { key: 'B', text: '82' },
      { key: 'C', text: '83' },
      { key: 'D', text: '84' }
    ],
    correctAnswer: 'B',
    explanation: 'Rata-rata = (78 + 85 + 92 + 80 + 75) : 5 = 410 : 5 = 82.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 18
  {
    id: 118,
    number: 18,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Analisis Diagram Hasil Panen',
    imageUrl: SVG_DIAGRAM_PANEN_MTK,
    imageCaption: 'Diagram hasil panen pertanian Desa Makmur tahun 2025',
    questionType: 'single',
    questionText: 'Berdasarkan diagram hasil panen Desa Makmur di atas, selisih hasil panen antara komoditas Padi dan Kedelai adalah...',
    options: [
      { key: 'A', text: '15 Ton' },
      { key: 'B', text: '20 Ton' },
      { key: 'C', text: '25 Ton' },
      { key: 'D', text: '30 Ton' }
    ],
    correctAnswer: 'B',
    explanation: 'Padi = 35 Ton, Kedelai = 15 Ton. Selisih = 35 - 15 = 20 Ton.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 19
  {
    id: 119,
    number: 19,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Penalaran Volume dan Sisa Kapasitas Wadah',
    imageUrl: SVG_BALOK_VOLUME_MTK,
    imageCaption: 'Wadah balok berukuran p=20 cm, l=12 cm, t=8 cm',
    questionType: 'single',
    questionText: 'Sebuah akuarium berbentuk balok seperti pada gambar mula-mula terisi air sebanyak 3/4 bagian. Jika ke dalam akuarium dimasukkan 5 batu hias padat yang masing-masing bervolume 48 cm³, berapakah volume air yang tumpah jika akuarium diisi air hingga penuh?',
    options: [
      { key: 'A', text: 'Tidak ada air yang tumpah (sisa ruang masih 240 cm³)' },
      { key: 'B', text: 'Air tumpah sebanyak 48 cm³' },
      { key: 'C', text: 'Air tumpah sebanyak 120 cm³' },
      { key: 'D', text: 'Tidak ada air yang tumpah (sisa ruang masih 480 cm³)' }
    ],
    correctAnswer: 'A',
    explanation: '1) Volume balok = 20 × 12 × 8 = 1.920 cm³.\n2) Volume air (3/4) = 1.440 cm³.\n3) Sisa ruang = 1.920 - 1.440 = 480 cm³.\n4) Volume 5 batu = 5 × 48 = 240 cm³.\n5) Sisa ruang kosong masih 480 - 240 = 240 cm³, jadi tidak ada air yang tumpah.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 20
  {
    id: 120,
    number: 20,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Penalaran Skala dan Luas Denah Sebenarnya',
    imageUrl: SVG_DENAH_TAMAN_MTK,
    imageCaption: 'Denah tanah lapangan dengan skala 1 : 500',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Panjang denah 8 cm mewakili panjang sebenarnya 40 meter',
        'Lebar denah 5 cm mewakili lebar sebenarnya 250 meter',
        'Luas sebenarnya dari tanah tersebut adalah 1.000 m²'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Salah',
      2: 'Benar'
    },
    questionText: 'Pada denah berskala 1 : 500, sebidang tanah digambar dengan panjang 8 cm dan lebar 5 cm. Evaluasi kebenaran pernyataan berikut!',
    options: [],
    explanation: 'Perhitungan skala 1 : 500:\n1) Panjang sebenarnya = 8 cm × 500 = 4.000 cm = 40 m (Benar).\n2) Lebar sebenarnya = 5 cm × 500 = 2.500 cm = 25 m (Bukan 250 m -> Salah).\n3) Luas = 40 m × 25 m = 1.000 m² (Benar).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 21
  {
    id: 121,
    number: 21,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Operasi Pecahan Campuran Tiga Tahap',
    questionType: 'single',
    questionText: 'Hasil dari 3 1/2 + 2 1/4 - 1 3/8 adalah...',
    options: [
      { key: 'A', text: '4 1/8' },
      { key: 'B', text: '4 3/8' },
      { key: 'C', text: '4 5/8' },
      { key: 'D', text: '4 7/8' }
    ],
    correctAnswer: 'B',
    explanation: 'Samakan penyebut ke 8:\n3 4/8 + 2 2/8 - 1 3/8 = 5 6/8 - 1 3/8 = 4 3/8.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 22
  {
    id: 122,
    number: 22,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Luas dan Keliling Segitiga Siku-Siku',
    questionType: 'single',
    questionText: 'Sebuah segitiga siku-siku memiliki panjang alas 12 cm, tinggi 16 cm, dan sisi miring 20 cm. Luas segitiga tersebut adalah...',
    options: [
      { key: 'A', text: '96 cm²' },
      { key: 'B', text: '120 cm²' },
      { key: 'C', text: '160 cm²' },
      { key: 'D', text: '192 cm²' }
    ],
    correctAnswer: 'A',
    explanation: 'Luas segitiga siku-siku = 1/2 × alas × tinggi = 1/2 × 12 cm × 16 cm = 96 cm².',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 23
  {
    id: 123,
    number: 23,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Konversi Satuan Berat (Ton, Kuintal, Kg)',
    questionType: 'single',
    questionText: 'Sebuah truk mengangkut 2,5 ton beras, 4 kuintal gula pasir, dan 350 kg jagung. Berat muatan truk seluruhnya adalah...',
    options: [
      { key: 'A', text: '3.150 kg' },
      { key: 'B', text: '3.250 kg' },
      { key: 'C', text: '3.350 kg' },
      { key: 'D', text: '3.450 kg' }
    ],
    correctAnswer: 'B',
    explanation: '• 2,5 ton = 2.500 kg\n• 4 kuintal = 400 kg\n• Jagung = 350 kg\nTotal = 2.500 + 400 + 350 = 3.250 kg.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 24
  {
    id: 124,
    number: 24,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Sudut pada Bangun Datar Segitiga Sama Kaki',
    questionType: 'single',
    questionText: 'Pada sebuah segitiga sama kaki ABC, besar sudut puncak A adalah 40°. Besar masing-masing sudut kakinya (sudut B dan C) adalah...',
    options: [
      { key: 'A', text: '60°' },
      { key: 'B', text: '70°' },
      { key: 'C', text: '80°' },
      { key: 'D', text: '90°' }
    ],
    correctAnswer: 'B',
    explanation: 'Total sudut segitiga = 180°.\nSudut kaki = (180° - 40°) : 2 = 140° : 2 = 70°.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 25
  {
    id: 125,
    number: 25,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Keliling Lingkaran',
    questionType: 'single',
    questionText: 'Sebuah taman berbentuk lingkaran memiliki diameter 42 meter. Jika sekeliling taman dipasangi pagar, panjang pagar yang dibutuhkan adalah... (π = 22/7)',
    options: [
      { key: 'A', text: '132 meter' },
      { key: 'B', text: '154 meter' },
      { key: 'C', text: '264 meter' },
      { key: 'D', text: '1.386 meter' }
    ],
    correctAnswer: 'A',
    explanation: 'Keliling lingkaran = π × d = 22/7 × 42 = 22 × 6 = 132 meter.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 26
  {
    id: 126,
    number: 26,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Statistika Modus dan Median',
    questionType: 'single',
    questionText: 'Data berat badan (kg) 9 siswa: 32, 35, 34, 32, 36, 38, 32, 35, 37. Nilai median dan modus data tersebut berturut-turut adalah...',
    options: [
      { key: 'A', text: '35 kg dan 32 kg' },
      { key: 'B', text: '34 kg dan 32 kg' },
      { key: 'C', text: '35 kg dan 35 kg' },
      { key: 'D', text: '36 kg dan 32 kg' }
    ],
    correctAnswer: 'A',
    explanation: 'Urutan data: 32, 32, 32, 34, 35, 35, 36, 37, 38.\n• Median (nilai tengah data ke-5) = 35 kg.\n• Modus (paling sering muncul, 3 kali) = 32 kg.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 27
  {
    id: 127,
    number: 27,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Operasi Pembagian dan Perkalian Desimal',
    questionType: 'single',
    questionText: 'Hasil dari 4,8 × 1,5 : 0,6 adalah...',
    options: [
      { key: 'A', text: '10' },
      { key: 'B', text: '12' },
      { key: 'C', text: '14' },
      { key: 'D', text: '16' }
    ],
    correctAnswer: 'B',
    explanation: '1) 4,8 × 1,5 = 7,2\n2) 7,2 : 0,6 = 72 : 6 = 12.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 28
  {
    id: 128,
    number: 28,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Sifat-Sifat Jajar Genjang dan Belah Ketupat',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh pernyataan berikut yang BENAR mengenai bangun datar Belah Ketupat!',
    options: [
      { key: 'A', text: 'Semua keempat sisinya memiliki panjang yang sama' },
      { key: 'B', text: 'Kedua diagonalnya berpotongan tegak lurus membentuk sudut 90°' },
      { key: 'C', text: 'Memiliki 4 sudut siku-siku yang sama besar' },
      { key: 'D', text: 'Sudut yang saling berhadapan memiliki besar yang sama' }
    ],
    correctMultipleAnswers: ['A', 'B', 'D'],
    explanation: 'Sifat belah ketupat:\n• 4 sisi sama panjang (A benar).\n• Diagonal berpotongan tegak lurus (B benar).\n• Sudut berhadapan sama besar (D benar).\nOpsi C salah karena keempat sudut siku-siku hanya ada pada persegi dan persegi panjang.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 29
  {
    id: 129,
    number: 29,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Penalaran Kombinasi Biaya Tiket Masuk',
    questionType: 'single',
    questionText: 'Harga 1 tiket dewasa ke museum Rp15.000,00 dan 1 tiket anak-anak Rp8.000,00. Sebuah rombongan keluarga membeli 2 tiket dewasa dan 4 tiket anak-anak dengan membayar 2 lembar uang Rp50.000,00. Berapakah uang kembalian yang mereka terima?',
    options: [
      { key: 'A', text: 'Rp32.000,00' },
      { key: 'B', text: 'Rp38.000,00' },
      { key: 'C', text: 'Rp42.000,00' },
      { key: 'D', text: 'Rp48.000,00' }
    ],
    correctAnswer: 'B',
    explanation: '1) Total biaya tiket = (2 × 15.000) + (4 × 8.000) = 30.000 + 32.000 = Rp62.000,00.\n2) Uang dibayarkan = 2 × Rp50.000 = Rp100.000,00.\n3) Kembalian = 100.000 - 62.000 = Rp38.000,00.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 30
  {
    id: 130,
    number: 30,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Evaluasi Skala Peta dan Kecepatan Perjalanan',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Jarak 6 cm pada peta berskala 1 : 500.000 mewakili jarak sebenarnya 30 km',
        'Dengan kecepatan 60 km/jam, jarak sebenarnya 30 km dapat ditempuh dalam 30 menit',
        'Jika waktu tempuh 45 menit untuk jarak 30 km, kecepatan rata-ratanya adalah 40 km/jam'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Benar'
    },
    questionText: 'Evaluasi kebenaran setiap pernyataan mengenai skala peta dan perjalanan kendaraan berikut!',
    options: [],
    explanation: 'Analisis:\n1) Jarak = 6 cm × 500.000 = 3.000.000 cm = 30 km (Benar).\n2) Waktu = 30 km : 60 km/jam = 0,5 jam = 30 menit (Benar).\n3) Kecepatan = 30 km : 0,75 jam = 40 km/jam (Benar).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  }
];

/**
 * PAKET 02: PEMANTAPAN (Penguatan Konsep & Variasi Soal) - 30 Soal
 */
export const QUESTIONS_MTK_02: Question[] = [
  // 1
  {
    id: 131,
    number: 1,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Pangkat Tiga dan Akar Pangkat Tiga',
    questionType: 'single',
    questionText: 'Hasil dari ∛4.096 + 12² adalah...',
    options: [
      { key: 'A', text: '150' },
      { key: 'B', text: '160' },
      { key: 'C', text: '170' },
      { key: 'D', text: '180' }
    ],
    correctAnswer: 'B',
    explanation: '1) ∛4.096 = 16 (16³ = 4.096)\n2) 12² = 144\n3) 16 + 144 = 160.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 2
  {
    id: 132,
    number: 2,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Operasi Pecahan Campuran Dasar',
    questionType: 'single',
    questionText: 'Hasil dari 2 1/4 + 1 1/2 - 3/4 adalah...',
    options: [
      { key: 'A', text: '2 1/2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '3 1/4' },
      { key: 'D', text: '3 1/2' }
    ],
    correctAnswer: 'B',
    explanation: 'Samakan penyebut ke 4: 2 1/4 + 1 2/4 - 3/4 = 3 3/4 - 3/4 = 3.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 3
  {
    id: 133,
    number: 3,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Konversi Satuan Berat (Kuintal, Ton, Kg)',
    questionType: 'single',
    questionText: 'Pak Tani memanen padi seberat 1,5 ton. Sebanyak 8 kuintal dijual ke pasar dan 350 kg disimpan untuk bibit. Berapa kg sisa padi Pak Tani?',
    options: [
      { key: 'A', text: '350 kg' },
      { key: 'B', text: '400 kg' },
      { key: 'C', text: '450 kg' },
      { key: 'D', text: '500 kg' }
    ],
    correctAnswer: 'A',
    explanation: 'Panen = 1.500 kg. Dijual = 800 kg. Disimpan = 350 kg.\nSisa = 1.500 - (800 + 350) = 1.500 - 1.150 = 350 kg.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 4
  {
    id: 134,
    number: 4,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Luas Lingkaran Dasar',
    questionType: 'single',
    questionText: 'Sebuah lingkaran memiliki panjang jari-jari 14 cm. Luas lingkaran tersebut adalah... (π = 22/7)',
    options: [
      { key: 'A', text: '88 cm²' },
      { key: 'B', text: '154 cm²' },
      { key: 'C', text: '616 cm²' },
      { key: 'D', text: '1.232 cm²' }
    ],
    correctAnswer: 'C',
    explanation: 'Luas = π × r² = 22/7 × 14 × 14 = 616 cm².',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 5
  {
    id: 135,
    number: 5,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Operasi Pecahan Soal Cerita Belanja',
    questionType: 'single',
    questionText: 'Ibu memiliki persediaan gula pasir 4 1/2 kg. Ibu membeli lagi gula pasir sebanyak 2 3/4 kg. Jika sebanyak 3 1/4 kg gula digunakan untuk membuat kue bolu dan sirup, berapakah sisa gula pasir Ibu sekarang?',
    options: [
      { key: 'A', text: '3 1/2 kg' },
      { key: 'B', text: '4 kg' },
      { key: 'C', text: '4 1/4 kg' },
      { key: 'D', text: '4 1/2 kg' }
    ],
    correctAnswer: 'B',
    explanation: '4 2/4 + 2 3/4 - 3 1/4 = 6 5/4 - 3 1/4 = 3 4/4 = 4 kg.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 6
  {
    id: 136,
    number: 6,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Perbandingan Uang dan Tabungan',
    questionType: 'single',
    questionText: 'Perbandingan uang tabungan Rina dan Sinta adalah 3 : 5. Jika selisih uang mereka adalah Rp60.000,00, berapakah jumlah seluruh uang tabungan Rina dan Sinta?',
    options: [
      { key: 'A', text: 'Rp180.000,00' },
      { key: 'B', text: 'Rp210.000,00' },
      { key: 'C', text: 'Rp240.000,00' },
      { key: 'D', text: 'Rp300.000,00' }
    ],
    correctAnswer: 'C',
    explanation: 'Selisih perbandingan = 5 - 3 = 2 bagian = Rp60.000 -> 1 bagian = Rp30.000.\nJumlah perbandingan = 3 + 5 = 8 bagian.\nJumlah uang = 8 × Rp30.000 = Rp240.000,00.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 7
  {
    id: 137,
    number: 7,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Kecepatan Berpapasan Dua Kendaraan',
    questionType: 'single',
    questionText: 'Jarak kota Solo dan Yogyakarta adalah 60 km. Rangga berangkat dari Solo menuju Yogyakarta pukul 08.00 dengan kecepatan 40 km/jam. Pada saat yang sama, Bagas berangkat dari Yogyakarta menuju Solo dengan kecepatan 50 km/jam melalui jalan yang sama. Pukul berapakah mereka akan berpapasan di jalan?',
    options: [
      { key: 'A', text: '08.30' },
      { key: 'B', text: '08.40' },
      { key: 'C', text: '08.45' },
      { key: 'D', text: '08.50' }
    ],
    correctAnswer: 'B',
    explanation: 'Waktu berpapasan = Jarak : (K1 + K2) = 60 km : 90 km/jam = 2/3 jam = 40 menit.\nWaktu papasan = 08.00 + 40 menit = 08.40.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 8
  {
    id: 138,
    number: 8,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Keliling dan Biaya Pemasangan Pagar',
    questionType: 'single',
    questionText: 'Sebuah taman berbentuk persegi panjang dengan panjang 35 meter dan lebar 20 meter. Di sekeliling taman akan dipasang tiang lampu dengan jarak antartiang 5 meter. Berapakah banyak tiang lampu yang dibutuhkan?',
    options: [
      { key: 'A', text: '18 buah' },
      { key: 'B', text: '22 buah' },
      { key: 'C', text: '25 buah' },
      { key: 'D', text: '28 buah' }
    ],
    correctAnswer: 'B',
    explanation: 'Keliling = 2 × (35 + 20) = 2 × 55 = 110 meter.\nBanyak tiang = 110 : 5 = 22 buah tiang.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 9
  {
    id: 139,
    number: 9,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Luas Permukaan Balok Tanpa Tutup',
    questionType: 'single',
    questionText: 'Sebuah kotak kardus berbentuk balok tanpa tutup memiliki panjang 30 cm, lebar 20 cm, dan tinggi 15 cm. Luas permukaan kardus tersebut adalah...',
    options: [
      { key: 'A', text: '1.800 cm²' },
      { key: 'B', text: '2.100 cm²' },
      { key: 'C', text: '2.400 cm²' },
      { key: 'D', text: '2.700 cm²' }
    ],
    correctAnswer: 'B',
    explanation: 'Balok tanpa tutup = (p × l) + 2(p × t) + 2(l × t)\n= (30 × 20) + 2(30 × 15) + 2(20 × 15) = 600 + 900 + 600 = 2.100 cm².',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 10
  {
    id: 140,
    number: 10,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Analisis Diagram Lingkaran Derajat',
    questionType: 'single',
    questionText: 'Diagram lingkaran menunjukkan hobi 120 siswa. Sudut untuk Musik 90°, Olahraga 150°, Membaca 60°, dan sisanya Melukis. Berapakah banyak siswa yang hobinya melukis?',
    options: [
      { key: 'A', text: '15 orang' },
      { key: 'B', text: '20 orang' },
      { key: 'C', text: '25 orang' },
      { key: 'D', text: '30 orang' }
    ],
    correctAnswer: 'B',
    explanation: 'Sudut Melukis = 360° - (90° + 150° + 60°) = 360° - 300° = 60°.\nBanyak siswa = (60° / 360°) × 120 = 1/6 × 120 = 20 siswa.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 11 to 20
  {
    id: 141,
    number: 11,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Operasi Pembagian Bilangan Pecahan',
    questionType: 'single',
    questionText: 'Hasil dari 3 3/4 : 1 1/4 × 2/3 adalah...',
    options: [
      { key: 'A', text: '1 1/2' },
      { key: 'B', text: '2' },
      { key: 'C', text: '2 1/2' },
      { key: 'D', text: '3' }
    ],
    correctAnswer: 'B',
    explanation: '15/4 : 5/4 × 2/3 = (15/4 × 4/5) × 2/3 = 3 × 2/3 = 2.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 142,
    number: 12,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Debit dan Waktu Pengosongan Tangki',
    questionType: 'single',
    questionText: 'Sebuah tangki berisi 2.400 liter minyak dialirkan melalui pipa dengan debit 40 liter/menit. Waktu yang diperlukan untuk mengosongkan tangki tersebut adalah...',
    options: [
      { key: 'A', text: '40 menit' },
      { key: 'B', text: '50 menit' },
      { key: 'C', text: '60 menit (1 jam)' },
      { key: 'D', text: '75 menit' }
    ],
    correctAnswer: 'C',
    explanation: 'Waktu = Volume : Debit = 2.400 : 40 = 60 menit = 1 jam.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 143,
    number: 13,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Luas Trapesium Sama Kaki',
    questionType: 'single',
    questionText: 'Sebuah trapesium memiliki panjang sisi sejajar 18 cm dan 26 cm, serta tinggi 12 cm. Luas trapesium tersebut adalah...',
    options: [
      { key: 'A', text: '240 cm²' },
      { key: 'B', text: '264 cm²' },
      { key: 'C', text: '288 cm²' },
      { key: 'D', text: '312 cm²' }
    ],
    correctAnswer: 'B',
    explanation: 'Luas = 1/2 × (a + b) × t = 1/2 × (18 + 26) × 12 = 1/2 × 44 × 12 = 264 cm².',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 144,
    number: 14,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Volume Tabung',
    questionType: 'single',
    questionText: 'Sebuah wadah berbentuk tabung memiliki jari-jari alas 7 cm dan tinggi 20 cm. Volume wadah tersebut adalah... (π = 22/7)',
    options: [
      { key: 'A', text: '1.540 cm³' },
      { key: 'B', text: '2.880 cm³' },
      { key: 'C', text: '3.080 cm³' },
      { key: 'D', text: '3.520 cm³' }
    ],
    correctAnswer: 'C',
    explanation: 'Volume = π × r² × t = 22/7 × 7 × 7 × 20 = 154 × 20 = 3.080 cm³.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 145,
    number: 15,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Nilai Rata-rata Gabungan',
    questionType: 'single',
    questionText: 'Nilai rata-rata 14 siswa adalah 75. Jika nilai seorang siswa baru bernama Budi digabungkan, nilai rata-ratanya menjadi 76. Nilai ulangan Budi adalah...',
    options: [
      { key: 'A', text: '85' },
      { key: 'B', text: '88' },
      { key: 'C', text: '90' },
      { key: 'D', text: '92' }
    ],
    correctAnswer: 'C',
    explanation: '1) Total nilai 14 siswa = 14 × 75 = 1.050\n2) Total nilai 15 siswa = 15 × 76 = 1.140\n3) Nilai Budi = 1.140 - 1.050 = 90.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 146,
    number: 16,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Perbandingan Bertingkat 3 Variabel',
    questionType: 'single',
    questionText: 'Perbandingan kelereng Ali, Budi, dan Candra adalah 2 : 3 : 5. Jika jumlah kelereng Ali dan Candra adalah 70 butir, banyak kelereng Budi adalah...',
    options: [
      { key: 'A', text: '25 butir' },
      { key: 'B', text: '30 butir' },
      { key: 'C', text: '35 butir' },
      { key: 'D', text: '40 butir' }
    ],
    correctAnswer: 'B',
    explanation: 'Ali + Candra = 2 + 5 = 7 bagian = 70 butir -> 1 bagian = 10 butir.\nKelereng Budi = 3 bagian × 10 = 30 butir.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 147,
    number: 17,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Diskon Bertingkat Pembelian Sepatu',
    questionType: 'single',
    questionText: 'Sepasang sepatu diberi label harga Rp250.000,00 dengan diskon 20%. Di kasir, pembeli mendapat tambahan diskon member sebesar 5% dari harga setelah diskon pertama. Berapakah harga akhir yang harus dibayar?',
    options: [
      { key: 'A', text: 'Rp185.000,00' },
      { key: 'B', text: 'Rp190.000,00' },
      { key: 'C', text: 'Rp195.000,00' },
      { key: 'D', text: 'Rp200.000,00' }
    ],
    correctAnswer: 'B',
    explanation: '1) Diskon 20% = Rp50.000 -> Harga jadi Rp200.000.\n2) Diskon member 5% dari 200.000 = Rp10.000.\n3) Bayar = 200.000 - 10.000 = Rp190.000,00.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 148,
    number: 18,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Pola Barisan Bilangan Bertingkat',
    questionType: 'single',
    questionText: 'Diketahui pola barisan bilangan: 3, 6, 11, 18, 27, ... Dua suku berikutnya adalah...',
    options: [
      { key: 'A', text: '36, 47' },
      { key: 'B', text: '38, 51' },
      { key: 'C', text: '38, 49' },
      { key: 'D', text: '40, 53' }
    ],
    correctAnswer: 'B',
    explanation: 'Selisih antar-suku bertambah bilangan ganjil:\n+3, +5, +7, +9, +11 -> 27 + 11 = 38.\n+13 -> 38 + 13 = 51.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 149,
    number: 19,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Analisis Karakteristik Jaring-Jaring Bangun Ruang',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh pernyataan yang BENAR mengenai bangun ruang Prisma Segitiga!',
    options: [
      { key: 'A', text: 'Memiliki 5 bidang sisi (2 sisi alas-tutup dan 3 sisi tegak)' },
      { key: 'B', text: 'Memiliki 9 buah rusuk' },
      { key: 'C', text: 'Memiliki 6 buah titik sudut' },
      { key: 'D', text: 'Memiliki 12 buah titik sudut' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'Prisma segitiga:\n• 5 sisi (A benar)\n• 9 rusuk (B benar)\n• 6 titik sudut (C benar)\nOpsi D salah (12 titik sudut adalah kubus/balok yang punya 8 titik sudut).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 150,
    number: 20,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Evaluasi Kebenaran Konversi Satuan Volume dan Waktu',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        '1 liter sama dengan 1 dm³ dan sama dengan 1.000 cm³ (cc)',
        'Debit 3.600 liter/jam setara dengan 1 liter/detik',
        'Volume 2,5 m³ sama dengan 250 liter'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Tentukan kebenaran dari pernyataan konversi satuan volume dan debit air berikut!',
    options: [],
    explanation: '1) 1 liter = 1 dm³ = 1.000 cm³ (Benar).\n2) 3.600 liter/jam = 3.600 liter : 3.600 detik = 1 liter/detik (Benar).\n3) 2,5 m³ = 2.500 liter (Bukan 250 liter -> Salah).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 21 to 30
  {
    id: 151,
    number: 21,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Perbandingan Berbalik Nilai Pekerja Proyek',
    questionType: 'single',
    questionText: 'Pembangunan jembatan direncanakan selesai dalam 24 hari dengan 15 pekerja. Jika ingin diselesaikan dalam waktu 18 hari, berapa pekerja tambahan yang harus ditambahkan?',
    options: [
      { key: 'A', text: '3 orang' },
      { key: 'B', text: '5 orang' },
      { key: 'C', text: '8 orang' },
      { key: 'D', text: '20 orang' }
    ],
    correctAnswer: 'B',
    explanation: 'Beban = 24 × 15 = 360 hari-orang.\nPekerja butuh = 360 : 18 = 20 pekerja.\nTambahan = 20 - 15 = 5 orang.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 152,
    number: 22,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Luas Daerah Gabungan Persegi dan Setengah Lingkaran',
    questionType: 'single',
    questionText: 'Sebuah bidang datar terdiri atas persegi berukuran 14 cm × 14 cm yang pada salah satu sisinya menempel setengah lingkaran berdiameter 14 cm. Luas total bangun gabungan tersebut adalah... (π = 22/7)',
    options: [
      { key: 'A', text: '252 cm²' },
      { key: 'B', text: '273 cm²' },
      { key: 'C', text: '308 cm²' },
      { key: 'D', text: '350 cm²' }
    ],
    correctAnswer: 'B',
    explanation: '1) Luas persegi = 14 × 14 = 196 cm².\n2) Jari-jari lingkaran = 7 cm -> Luas 1/2 lingkaran = 1/2 × (22/7 × 7 × 7) = 77 cm².\n3) Total luas = 196 + 77 = 273 cm².',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 153,
    number: 23,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Persamaan Linear Kontekstual Pembelian Buku dan Pensil',
    questionType: 'single',
    questionText: 'Harga 3 buku tulis dan 2 pensil adalah Rp21.000,00. Jika harga 1 buku tulis Rp5.000,00, berapakah harga 4 pensil?',
    options: [
      { key: 'A', text: 'Rp8.000,00' },
      { key: 'B', text: 'Rp10.000,00' },
      { key: 'C', text: 'Rp12.000,00' },
      { key: 'D', text: 'Rp15.000,00' }
    ],
    correctAnswer: 'C',
    explanation: '1) 3 buku = 3 × Rp5.000 = Rp15.000.\n2) 2 pensil = 21.000 - 15.000 = Rp6.000 -> 1 pensil = Rp3.000.\n3) 4 pensil = 4 × Rp3.000 = Rp12.000,00.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 154,
    number: 24,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Keliling Bangun Datar Gabungan',
    questionType: 'single',
    questionText: 'Sebuah lapangan berbentuk persegi panjang berukuran 40 m × 25 m. Rama berlari mengelilingi lapangan tersebut sebanyak 5 putaran penuh. Jarak total yang ditempuh Rama adalah...',
    options: [
      { key: 'A', text: '500 meter' },
      { key: 'B', text: '650 meter' },
      { key: 'C', text: '750 meter' },
      { key: 'D', text: '1.000 meter' }
    ],
    correctAnswer: 'B',
    explanation: 'Keliling 1 putaran = 2 × (40 + 25) = 2 × 65 = 130 meter.\n5 putaran = 5 × 130 = 650 meter.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 155,
    number: 25,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Volume Kubus dan Balok Terkait',
    questionType: 'single',
    questionText: 'Sebuah balok memiliki ukuran panjang 18 cm, lebar 8 cm, dan tinggi 12 cm. Jika sebuah kubus memiliki volume yang sama persis dengan balok tersebut, berapakah panjang rusuk kubus?',
    options: [
      { key: 'A', text: '10 cm' },
      { key: 'B', text: '12 cm' },
      { key: 'C', text: '14 cm' },
      { key: 'D', text: '16 cm' }
    ],
    correctAnswer: 'B',
    explanation: 'Volume balok = 18 × 8 × 12 = 1.728 cm³.\nRusuk kubus = ∛1.728 = 12 cm (karena 12³ = 1.728).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 156,
    number: 26,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Rata-Rata Nilai dengan Target Skor KKM',
    questionType: 'single',
    questionText: 'Dina mengikuti 4 kali tes IPA dengan nilai: 80, 85, 75, dan 90. Berapakah nilai yang harus diperoleh Dina pada tes ke-5 agar nilai rata-rata keseluruhannya menjadi 85?',
    options: [
      { key: 'A', text: '85' },
      { key: 'B', text: '90' },
      { key: 'C', text: '95' },
      { key: 'D', text: '100' }
    ],
    correctAnswer: 'C',
    explanation: '1) Target total 5 tes = 5 × 85 = 425.\n2) Jumlah 4 tes awal = 80 + 85 + 75 + 90 = 330.\n3) Nilai tes ke-5 = 425 - 330 = 95.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 157,
    number: 27,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Operasi Perkalian dan Pembagian Satuan Panjang',
    questionType: 'single',
    questionText: 'Sebutas tali sepanjang 15 meter dipotong menjadi 12 bagian yang sama panjang. Berapa centimeter panjang masing-masing potongan tali?',
    options: [
      { key: 'A', text: '115 cm' },
      { key: 'B', text: '125 cm' },
      { key: 'C', text: '135 cm' },
      { key: 'D', text: '145 cm' }
    ],
    correctAnswer: 'B',
    explanation: '15 meter = 1.500 cm.\nPanjang potongan = 1.500 cm : 12 = 125 cm.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 158,
    number: 28,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Pernyataan Analitis Statistika Data',
    questionType: 'complex_multiple',
    questionText: 'Diberikan data nilai: 70, 80, 80, 80, 90, 100. Pilihlah seluruh kesimpulan yang BENAR!',
    options: [
      { key: 'A', text: 'Modus data tersebut adalah 80' },
      { key: 'B', text: 'Rata-rata data tersebut adalah 83,33' },
      { key: 'C', text: 'Median data tersebut adalah 80' },
      { key: 'D', text: 'Jangkauan data adalah 30' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C', 'D'],
    explanation: '• Modus = 80 (muncul 3 kali, A benar).\n• Rata-rata = 500 : 6 = 83,33 (B benar).\n• Median = (80 + 80) : 2 = 80 (C benar).\n• Jangkauan = 100 - 70 = 30 (D benar).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 159,
    number: 29,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Penalaran Rasio Pekerjaan Bersama',
    questionType: 'single',
    questionText: 'Pekerja A dapat menyelesaikan pengecatan dinding dalam 6 jam, sedangkan Pekerja B dapat menyelesaikannya dalam 3 jam. Jika mereka mengecat dinding bersama-sama, waktu yang dibutuhkan adalah...',
    options: [
      { key: 'A', text: '1,5 jam' },
      { key: 'B', text: '2 jam' },
      { key: 'C', text: '2,5 jam' },
      { key: 'D', text: '4,5 jam' }
    ],
    correctAnswer: 'B',
    explanation: 'Kecepatan gabungan = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 bagian per jam.\nWaktu = 1 : (1/2) = 2 jam.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 160,
    number: 30,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Evaluasi Hubungan Antar Sudut dan Garis Sejajar',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Dua sudut yang saling berpelurus memiliki jumlah besar 180°',
        'Dua sudut yang saling berpenyiku memiliki jumlah besar 90°',
        'Sudut tumpul adalah sudut yang besarnya lebih dari 90° dan kurang dari 180°'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Benar'
    },
    questionText: 'Evaluasi kebenaran setiap pernyataan mengenai konsep sudut geometri berikut!',
    options: [],
    explanation: 'Ketiga pernyataan merupakan definisi geometri dasar standar yang benar.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  }
];

/**
 * PAKET 03: SIMULASI REALISTIS (Standardisasi Soal HOTS Asesmen Nasional) - 30 Soal
 */
export const QUESTIONS_MTK_03: Question[] = [
  // 1
  {
    id: 161,
    number: 1,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Operasi Bilangan Bulat Negatif dan Positif',
    questionType: 'single',
    questionText: 'Hasil dari 250 - (-125) : 25 + 18 × (-5) adalah...',
    options: [
      { key: 'A', text: '165' },
      { key: 'B', text: '175' },
      { key: 'C', text: '185' },
      { key: 'D', text: '195' }
    ],
    correctAnswer: 'A',
    explanation: '1) Pembagian: (-125) : 25 = -5\n2) Perkalian: 18 × (-5) = -90\n3) Operasi: 250 - (-5) + (-90) = 255 - 90 = 165.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 2
  {
    id: 162,
    number: 2,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Faktorisasi Prima Tiga Bilangan',
    questionType: 'single',
    questionText: 'FPB dan KPK dari bilangan 45, 60, dan 90 berturut-turut adalah...',
    options: [
      { key: 'A', text: '15 dan 180' },
      { key: 'B', text: '15 dan 360' },
      { key: 'C', text: '30 dan 180' },
      { key: 'D', text: '45 dan 180' }
    ],
    correctAnswer: 'A',
    explanation: '• 45 = 3² × 5\n• 60 = 2² × 3 × 5\n• 90 = 2 × 3² × 5\nFPB = 3 × 5 = 15. KPK = 2² × 3² × 5 = 4 × 9 × 5 = 180.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 3
  {
    id: 163,
    number: 3,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Urutan Pecahan Berbagai Bentuk',
    questionType: 'single',
    questionText: 'Urutan pecahan 4/5; 0,65; 7/8; dan 70% dari yang terkecil adalah...',
    options: [
      { key: 'A', text: '0,65 ; 70% ; 4/5 ; 7/8' },
      { key: 'B', text: '0,65 ; 4/5 ; 70% ; 7/8' },
      { key: 'C', text: '70% ; 0,65 ; 4/5 ; 7/8' },
      { key: 'D', text: '4/5 ; 7/8 ; 0,65 ; 70%' }
    ],
    correctAnswer: 'A',
    explanation: 'Ubah ke desimal:\n• 4/5 = 0,80\n• 0,65 = 0,65\n• 7/8 = 0,875\n• 70% = 0,70\nUrutan terkecil: 0,65 < 70% (0,70) < 4/5 (0,80) < 7/8 (0,875).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 4
  {
    id: 164,
    number: 4,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Konversi Satuan Luas Lahan (Hektare, Are, m²)',
    questionType: 'single',
    questionText: 'Pak Kades memiliki tanah seluas 1,2 hektare. Sebanyak 45 are diwakafkan untuk madrasah dan 3.500 m² untuk lapangan desa. Berapa m² sisa tanah Pak Kades?',
    options: [
      { key: 'A', text: '3.000 m²' },
      { key: 'B', text: '4.000 m²' },
      { key: 'C', text: '4.500 m²' },
      { key: 'D', text: '5.000 m²' }
    ],
    correctAnswer: 'B',
    explanation: '1 ha = 10.000 m²; 1 are = 100 m².\n• Total = 1,2 × 10.000 = 12.000 m²\n• Madrasah = 45 × 100 = 4.500 m²\n• Lapangan = 3.500 m²\nSisa = 12.000 - (4.500 + 3.500) = 12.000 - 8.000 = 4.000 m².',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 5
  {
    id: 165,
    number: 5,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Kecepatan dan Waktu Susul-Menyusul',
    questionType: 'single',
    questionText: 'Toni bersepeda dari kota A menuju kota B pada pukul 06.00 dengan kecepatan 15 km/jam. Pada pukul 06.30, Danu mengendarai sepeda motor menyusul dari tempat yang sama dengan kecepatan 45 km/jam. Pukul berapakah Danu berhasil menyusul Toni?',
    options: [
      { key: 'A', text: '06.45' },
      { key: 'B', text: '06.55' },
      { key: 'C', text: '07.00' },
      { key: 'D', text: '07.15' }
    ],
    correctAnswer: 'A',
    explanation: '1) Selisih waktu = 30 menit = 0,5 jam.\n2) Selisih jarak awal = 15 km/jam × 0,5 jam = 7,5 km.\n3) Selisih kecepatan = 45 - 15 = 30 km/jam.\n4) Waktu menyusul = 7,5 : 30 = 0,25 jam = 15 menit.\n5) Danu menyusul pada = 06.30 + 15 menit = 06.45.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 6 to 15
  {
    id: 166,
    number: 6,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Pemberhentian Proyek dan Tambahan Pekerja',
    questionType: 'single',
    questionText: 'Sebuah proyek jembatan direncanakan selesai dalam 30 hari oleh 16 pekerja. Setelah bekerja selama 10 hari, pekerjaan terhenti selama 4 hari karena hujan deras. Berapa pekerja tambahan yang dibutuhkan agar proyek selesai tepat waktu?',
    options: [
      { key: 'A', text: '4 orang' },
      { key: 'B', text: '6 orang' },
      { key: 'C', text: '8 orang' },
      { key: 'D', text: '10 orang' }
    ],
    correctAnswer: 'A',
    explanation: '1) Sisa waktu normal = 20 hari dengan 16 pekerja -> Beban = 320 hari-orang.\n2) Sisa hari tersedia = 20 - 4 = 16 hari.\n3) Pekerja dibutuhkan = 320 : 16 = 20 pekerja.\n4) Tambahan pekerja = 20 - 16 = 4 orang.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 167,
    number: 7,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Luas Daerah Diarsir Lingkaran dalam Persegi',
    questionType: 'single',
    questionText: 'Di dalam persegi bersisi 28 cm terdapat sebuah lingkaran terbesar yang menyinggung keempat sisi persegi. Luas daerah di luar lingkaran adalah... (π = 22/7)',
    options: [
      { key: 'A', text: '154 cm²' },
      { key: 'B', text: '168 cm²' },
      { key: 'C', text: '184 cm²' },
      { key: 'D', text: '216 cm²' }
    ],
    correctAnswer: 'B',
    explanation: '1) Luas persegi = 28 × 28 = 784 cm².\n2) Jari-jari lingkaran = 14 cm -> Luas lingkaran = 22/7 × 14 × 14 = 616 cm².\n3) Daerah luar = 784 - 616 = 168 cm².',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 168,
    number: 8,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Statistika Rata-Rata Nilai Ekstrem',
    questionType: 'complex_multiple',
    questionText: 'Data nilai 10 siswa: 60, 65, 70, 75, 80, 80, 85, 90, 95, 100. Pilihlah seluruh kesimpulan statistik yang BENAR!',
    options: [
      { key: 'A', text: 'Nilai rata-rata (mean) data tersebut adalah 80' },
      { key: 'B', text: 'Nilai median data tersebut adalah 80' },
      { key: 'C', text: 'Modus dari data tersebut adalah 80' },
      { key: 'D', text: 'Jangkauan nilai adalah 40' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C', 'D'],
    explanation: '• Mean = 800 : 10 = 80 (A benar)\n• Median = (80 + 80) : 2 = 80 (B benar)\n• Modus = 80 (C benar)\n• Jangkauan = 100 - 60 = 40 (D benar).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 169,
    number: 9,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Analisis Keuntungan dan Margin Finansial',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Modal awal produksi 50 botol jus buah adalah Rp300.000,00 (@Rp6.000/botol)',
        'Jika 40 botol terjual @Rp10.000 dan 10 botol diskon @Rp7.000, total pendapatan adalah Rp470.000,00',
        'Persentase keuntungan bersih yang diperoleh penjual mencapai lebih dari 55%'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Benar'
    },
    questionText: 'Koperasi memproduksi 50 botol jus dengan modal Rp6.000/botol. Sebanyak 40 botol dijual Rp10.000 dan 10 botol promo Rp7.000. Evaluasi kebenaran pernyataan berikut!',
    options: [],
    explanation: '1) Modal = 50 × 6.000 = Rp300.000 (Benar).\n2) Pendapatan = 400.000 + 70.000 = Rp470.000 (Benar).\n3) Laba = 170.000 / 300.000 × 100% = 56,67% (> 55% -> Benar).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 170,
    number: 10,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Volume Bangun Ruang Gabungan Balok dan Limas',
    questionType: 'single',
    questionText: 'Sebuah tenda berbentuk balok dengan atap limas segi empat. Panjang balok 10 m, lebar 6 m, dan tinggi dinding balok 3 m. Tinggi puncak limas dari atap balok adalah 2 m. Volume udara di dalam tenda adalah...',
    options: [
      { key: 'A', text: '180 m³' },
      { key: 'B', text: '200 m³' },
      { key: 'C', text: '220 m³' },
      { key: 'D', text: '240 m³' }
    ],
    correctAnswer: 'C',
    explanation: '1) Volume balok = 10 × 6 × 3 = 180 m³.\n2) Volume limas = 1/3 × (10 × 6) × 2 = 1/3 × 60 × 2 = 40 m³.\n3) Volume total = 180 + 40 = 220 m³.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 11 to 20
  {
    id: 171,
    number: 11,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Debit Air dan Kebocoran Wadah',
    questionType: 'single',
    questionText: 'Sebuah kolam diisi air melalui kran berdebit 50 liter/menit, namun pada saat bersamaan terdapat lubang pembuangan yang mengeluarkan air 15 liter/menit. Jika kapasitas kolam 4.200 liter, berapa jam waktu untuk mengisi kolam hingga penuh dari keadaan kosong?',
    options: [
      { key: 'A', text: '1,5 jam' },
      { key: 'B', text: '2 jam' },
      { key: 'C', text: '2,5 jam' },
      { key: 'D', text: '3 jam' }
    ],
    correctAnswer: 'B',
    explanation: 'Debit netto = 50 - 15 = 35 liter/menit.\nWaktu = 4.200 : 35 = 120 menit = 2 jam.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 172,
    number: 12,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Persamaan Linear Dua Variabel Sederhana',
    questionType: 'single',
    questionText: 'Harga 2 kg apel dan 3 kg jeruk adalah Rp85.000,00. Jika harga 1 kg apel Rp20.000,00, berapakah harga 5 kg jeruk?',
    options: [
      { key: 'A', text: 'Rp60.000,00' },
      { key: 'B', text: 'Rp75.000,00' },
      { key: 'C', text: 'Rp80.000,00' },
      { key: 'D', text: 'Rp90.000,00' }
    ],
    correctAnswer: 'B',
    explanation: '1) 2 kg apel = 2 × Rp20.000 = Rp40.000.\n2) 3 kg jeruk = 85.000 - 40.000 = Rp45.000 -> 1 kg jeruk = Rp15.000.\n3) 5 kg jeruk = 5 × Rp15.000 = Rp75.000,00.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 173,
    number: 13,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Perbandingan Umur Tiga Tahun Lalu dan Sekarang',
    questionType: 'single',
    questionText: 'Saat ini umur Ayah 42 tahun dan umur Budi 14 tahun. Berapa tahun lagi perbandingan umur Ayah dan Budi menjadi 2 : 1?',
    options: [
      { key: 'A', text: '10 tahun' },
      { key: 'B', text: '12 tahun' },
      { key: 'C', text: '14 tahun' },
      { key: 'D', text: '16 tahun' }
    ],
    correctAnswer: 'C',
    explanation: 'Misal x tahun lagi:\n(42 + x) = 2 × (14 + x)\n42 + x = 28 + 2x\nx = 42 - 28 = 14 tahun lagi.\nCek: 42 + 14 = 56 tahun, 14 + 14 = 28 tahun (56 : 28 = 2 : 1).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 174,
    number: 14,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Luas Permukaan Tabung Tertutup',
    questionType: 'single',
    questionText: 'Sebuah kaleng biskuit berbentuk tabung tertutup memiliki jari-jari 7 cm dan tinggi 18 cm. Luas seluruh permukaan kaleng tersebut adalah... (π = 22/7)',
    options: [
      { key: 'A', text: '968 cm²' },
      { key: 'B', text: '1.100 cm²' },
      { key: 'C', text: '1.232 cm²' },
      { key: 'D', text: '1.340 cm²' }
    ],
    correctAnswer: 'B',
    explanation: 'Luas tabung = 2 × π × r × (r + t) = 2 × 22/7 × 7 × (7 + 18) = 44 × 25 = 1.100 cm².',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 175,
    number: 15,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Penalaran Pola Bangun Datar Ubin Bersusun',
    questionType: 'single',
    questionText: 'Sebuah pola susunan ubin disusun: Pola 1 butuh 4 ubin, Pola 2 butuh 9 ubin, Pola 3 butuh 16 ubin. Banyak ubin yang dibutuhkan pada Pola ke-8 adalah...',
    options: [
      { key: 'A', text: '64 ubin' },
      { key: 'B', text: '81 ubin' },
      { key: 'C', text: '100 ubin' },
      { key: 'D', text: '121 ubin' }
    ],
    correctAnswer: 'B',
    explanation: 'Rumus pola = (n + 1)².\nPola ke-8 = (8 + 1)² = 9² = 81 ubin.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 16 to 30
  {
    id: 176,
    number: 16,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Statistika Nilai Rata-Rata Terbobot',
    questionType: 'single',
    questionText: 'Kelas A terdiri atas 20 siswa dengan rata-rata nilai 80. Kelas B terdiri atas 30 siswa dengan rata-rata nilai 75. Nilai rata-rata gabungan seluruh siswa kedua kelas adalah...',
    options: [
      { key: 'A', text: '76' },
      { key: 'B', text: '77' },
      { key: 'C', text: '77,5' },
      { key: 'D', text: '78' }
    ],
    correctAnswer: 'B',
    explanation: 'Total nilai = (20 × 80) + (30 × 75) = 1.600 + 2.250 = 3.850.\nRata-rata gabungan = 3.850 : 50 = 77.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 177,
    number: 17,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Debit dan Waktu Pengisian Bertahap',
    questionType: 'single',
    questionText: 'Sebuah tandon air berkapasitas 1.500 liter terisi 1/5 bagian. Tandon tersebut diisi menggunakan pompa air berdebit 25 liter/menit. Berapa menit waktu yang diperlukan sampai tandon penuh?',
    options: [
      { key: 'A', text: '36 menit' },
      { key: 'B', text: '42 menit' },
      { key: 'C', text: '48 menit' },
      { key: 'D', text: '54 menit' }
    ],
    correctAnswer: 'C',
    explanation: '1) Air awal = 1/5 × 1.500 = 300 liter.\n2) Kekurangan = 1.500 - 300 = 1.200 liter.\n3) Waktu = 1.200 : 25 = 48 menit.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 178,
    number: 18,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Penyelidikan Geometri Diagonal Sisi dan Ruang',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh pernyataan berikut yang BENAR mengenai sifat Kubus!',
    options: [
      { key: 'A', text: 'Memiliki 6 sisi persegi yang kongruen' },
      { key: 'B', text: 'Memiliki 12 rusuk sama panjang' },
      { key: 'C', text: 'Memiliki 8 titik sudut' },
      { key: 'D', text: 'Memiliki 4 diagonal ruang' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C', 'D'],
    explanation: 'Keempat pernyataan merupakan sifat esensial dari bangun ruang kubus.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 179,
    number: 19,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Penerapan Skala Denah Bangunan',
    questionType: 'single',
    questionText: 'Pada denah berskala 1 : 250, sebuah gedung sekolah digambar berukuran 16 cm × 12 cm. Luas bangunan sekolah sebenarnya adalah...',
    options: [
      { key: 'A', text: '1.000 m²' },
      { key: 'B', text: '1.200 m²' },
      { key: 'C', text: '1.500 m²' },
      { key: 'D', text: '1.800 m²' }
    ],
    correctAnswer: 'B',
    explanation: '• Panjang sebenarnya = 16 cm × 250 = 4.000 cm = 40 m\n• Lebar sebenarnya = 12 cm × 250 = 3.000 cm = 30 m\n• Luas sebenarnya = 40 m × 30 m = 1.200 m².',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 180,
    number: 20,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Evaluasi Kebenaran Analisis Biaya dan Diskon Toko',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Diskon 30% dari barang seharga Rp200.000,00 adalah Rp60.000,00',
        'Beli 2 gratis 1 setara dengan mendapat diskon 33,33% per barang',
        'Harga setelah diskon 25% dari Rp120.000,00 adalah Rp90.000,00'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Benar'
    },
    questionText: 'Evaluasi kebenaran setiap pernyataan promosi dan diskon belanja berikut!',
    options: [],
    explanation: '1) 30% × 200.000 = Rp60.000 (Benar).\n2) Beli 2 gratis 1: bayar 2 untuk dapat 3 -> diskon 1/3 = 33,33% (Benar).\n3) 120.000 - (25% × 120.000) = 120.000 - 30.000 = Rp90.000 (Benar).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 181,
    number: 21,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Operasi Campuran Pecahan dan Persen',
    questionType: 'single',
    questionText: 'Hasil dari 4/5 + (1,25 × 40%) - 0,35 adalah...',
    options: [
      { key: 'A', text: '0,85' },
      { key: 'B', text: '0,95' },
      { key: 'C', text: '1,05' },
      { key: 'D', text: '1,15' }
    ],
    correctAnswer: 'B',
    explanation: '1) 4/5 = 0,80\n2) 1,25 × 0,40 = 0,50\n3) 0,80 + 0,50 - 0,35 = 1,30 - 0,35 = 0,95.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 182,
    number: 22,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Luas Tembereng dan Juring Lingkaran',
    questionType: 'single',
    questionText: 'Sebuah juring lingkaran memiliki sudut pusat 90° dengan jari-jari 14 cm. Luas juring tersebut adalah... (π = 22/7)',
    options: [
      { key: 'A', text: '77 cm²' },
      { key: 'B', text: '154 cm²' },
      { key: 'C', text: '308 cm²' },
      { key: 'D', text: '616 cm²' }
    ],
    correctAnswer: 'B',
    explanation: 'Luas juring = (90° / 360°) × π × r² = 1/4 × (22/7 × 14 × 14) = 1/4 × 616 = 154 cm².',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 183,
    number: 23,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Penalaran Volume Air dalam Bejana Silinder',
    questionType: 'single',
    questionText: 'Sebuah drum berbentuk tabung berdiameter 28 cm dan tinggi 50 cm terisi minyak separuh (1/2 bagian). Berapa liter minyak yang ada di dalam drum tersebut? (π = 22/7, 1 liter = 1.000 cm³)',
    options: [
      { key: 'A', text: '15,4 liter' },
      { key: 'B', text: '18,5 liter' },
      { key: 'C', text: '30,8 liter' },
      { key: 'D', text: '61,6 liter' }
    ],
    correctAnswer: 'A',
    explanation: '1) Jari-jari = 14 cm.\n2) Volume total = 22/7 × 14 × 14 × 50 = 616 × 50 = 30.800 cm³ = 30,8 liter.\n3) 1/2 bagian = 30,8 : 2 = 15,4 liter.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 184,
    number: 24,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Penyelidikan KPK Bilangan Jam Digital',
    questionType: 'single',
    questionText: 'Tiga buah lampu mercusuar berkedip secara periodik. Lampu A berkedip setiap 15 detik, Lampu B setiap 20 detik, dan Lampu C setiap 30 detik. Jika pada pukul 19.00 ketiga lampu berkedip bersamaan, berapa kali ketiga lampu berkedip bersamaan antara pukul 19.00 hingga 19.05?',
    options: [
      { key: 'A', text: '4 kali' },
      { key: 'B', text: '5 kali' },
      { key: 'C', text: '6 kali (termasuk pukul 19.00)' },
      { key: 'D', text: '7 kali' }
    ],
    correctAnswer: 'C',
    explanation: 'KPK dari 15, 20, dan 30 = 60 detik (1 menit).\nDalam rentang 5 menit (pukul 19.00 sampai 19.05):\nMenit ke-0, ke-1, ke-2, ke-3, ke-4, dan ke-5 = total 6 kali.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 185,
    number: 25,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Statistika Diagram Batang dan Selisih Ekstrem',
    questionType: 'single',
    questionText: 'Data penjualan beras (kg) di toko sembako dari Senin sampai Jumat adalah: Senin 120 kg, Selasa 95 kg, Rabu 140 kg, Kamis 110 kg, dan Jumat 160 kg. Selisih penjualan tertinggi dan terendah adalah...',
    options: [
      { key: 'A', text: '55 kg' },
      { key: 'B', text: '65 kg' },
      { key: 'C', text: '70 kg' },
      { key: 'D', text: '75 kg' }
    ],
    correctAnswer: 'B',
    explanation: 'Tertinggi = 160 kg (Jumat), Terendah = 95 kg (Selasa).\nSelisih = 160 - 95 = 65 kg.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 186,
    number: 26,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Luas Bangun Layang-Layang',
    questionType: 'single',
    questionText: 'Sebuah kerangka layang-layang memiliki panjang diagonal 24 cm dan 35 cm. Luas kertas minimal yang dibutuhkan untuk menutup kerangka tersebut adalah...',
    options: [
      { key: 'A', text: '420 cm²' },
      { key: 'B', text: '480 cm²' },
      { key: 'C', text: '840 cm²' },
      { key: 'D', text: '920 cm²' }
    ],
    correctAnswer: 'A',
    explanation: 'Luas layang-layang = 1/2 × d1 × d2 = 1/2 × 24 × 35 = 12 × 35 = 420 cm².',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 187,
    number: 27,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Operasi Penjumlahan dan Pengurangan Sudut Derajat',
    questionType: 'single',
    questionText: 'Besar sudut suatu putaran penuh adalah 360°. Sudut yang dibentuk oleh jarum jam pada pukul 03.30 adalah...',
    options: [
      { key: 'A', text: '60°' },
      { key: 'B', text: '75°' },
      { key: 'C', text: '85°' },
      { key: 'D', text: '90°' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada pukul 03.30:\n• Jarum menit di angka 6 (180°)\n• Jarum jam di antara 3 dan 4: 3 × 30° + (30/60 × 30°) = 90° + 15° = 105°\n• Sudut yang terbentuk = 180° - 105° = 75°.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 188,
    number: 28,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Pernyataan Analisis Perbandingan Senilai dan Berbalik Nilai',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh peristiwa sehari-hari yang menerapkan konsep PERBANDINGAN SENILAI!',
    options: [
      { key: 'A', text: 'Banyak liter bensin yang dibeli dengan total uang yang dibayarkan' },
      { key: 'B', text: 'Banyak pekerja bangunan dengan waktu penyelesaian proyek' },
      { key: 'C', text: 'Jumlah lembar fotokopi dengan biaya yang harus dibayar' },
      { key: 'D', text: 'Kecepatan kendaraan dengan waktu tempuh perjalanan jarak tetap' }
    ],
    correctMultipleAnswers: ['A', 'C'],
    explanation: '• A & C adalah perbandingan senilai (semakin banyak barang, semakin besar biaya).\n• B & D adalah perbandingan berbalik nilai (semakin banyak pekerja/kecepatan, semakin sedikit waktu).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 189,
    number: 29,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Penalaran Volume Gabungan Kubus dan Balok',
    questionType: 'single',
    questionText: 'Sebuah tumpukan balok mainan terdiri atas 1 buah balok besar (p=15 cm, l=10 cm, t=8 cm) dan di atasnya diletakkan 2 buah kubus kecil bersisi 5 cm. Volume total tumpukan mainan tersebut adalah...',
    options: [
      { key: 'A', text: '1.200 cm³' },
      { key: 'B', text: '1.325 cm³' },
      { key: 'C', text: '1.450 cm³' },
      { key: 'D', text: '1.600 cm³' }
    ],
    correctAnswer: 'C',
    explanation: '1) Volume balok = 15 × 10 × 8 = 1.200 cm³.\n2) Volume 2 kubus = 2 × (5 × 5 × 5) = 2 × 125 = 250 cm³.\n3) Total volume = 1.200 + 250 = 1.450 cm³.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 30
  {
    id: 190,
    number: 30,
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    topic: 'Evaluasi Analisis Pola Bilangan dan Deret Aljabar',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Pada barisan 2, 5, 8, 11, ..., suku ke-10 adalah 29',
        'Jumlah 5 suku pertama dari barisan 1, 3, 5, 7, 9 adalah 25',
        'Pola bilangan kuadrat memiliki rumus suku ke-n = n²'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Benar'
    },
    questionText: 'Evaluasi kebenaran setiap pernyataan aljabar dan pola barisan bilangan berikut!',
    options: [],
    explanation: '1) Rumus Un = 3n - 1 -> U10 = 3(10) - 1 = 29 (Benar).\n2) 1 + 3 + 5 + 7 + 9 = 25 (Benar).\n3) Pola bilangan kuadrat: 1, 4, 9, 16 -> n² (Benar).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  }
];

// Export Default Gabungan
export const QUESTIONS_MATEMATIKA: Question[] = [
  ...QUESTIONS_MTK_01,
  ...QUESTIONS_MTK_02,
  ...QUESTIONS_MTK_03
];
