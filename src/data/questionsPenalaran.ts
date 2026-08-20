import { Question } from '../types/quiz';
import { 
  SVG_POLA_ROTASI_LOGIKA, 
  SVG_JARING_KUBUS_LOGIKA, 
  SVG_MATRIKS_POLA_LOG 
} from './questionVisuals';

/**
 * ============================================================================
 * BANK SOAL TKA SD - PENALARAN SPASIAL & LOGIKA ANALITIS (3 PAKET @ 30 SOAL)
 * Bebas Typo, Terstandarisasi Tes Potensi Akademik (TPA) & Asesmen Bakat Skolastik
 * Soal Rotasi Geometri 2D/3D, Jaring Bangun Ruang, Silogisme, & Posisi Duduk Logis
 * ============================================================================
 */

/**
 * PAKET 01: DIAGNOSTIK (Logika & Spasial Dasar) - 30 Soal
 */
export const QUESTIONS_LOG_01: Question[] = [
  // 1
  {
    id: 401,
    number: 1,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Kata Logis (Hubungan Asosiasi)',
    questionType: 'single',
    questionText: 'PADI : BERAS = GANDUM : ...',
    options: [
      { key: 'A', text: 'Tepung terigu' },
      { key: 'B', text: 'Ketan' },
      { key: 'C', text: 'Roti bakar' },
      { key: 'D', text: 'Jagung' }
    ],
    correctAnswer: 'A',
    explanation: 'Hubungan bahan mentah dan produk olahan primer: Padi digiling menghasilkan beras, sebagaimana biji gandum digiling menghasilkan tepung terigu.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 2
  {
    id: 402,
    number: 2,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Bilangan Deret Sederhana',
    questionType: 'single',
    questionText: 'Perhatikan deret angka: 3, 6, 12, 24, 48, ... Angka berikutnya adalah...',
    options: [
      { key: 'A', text: '72' },
      { key: 'B', text: '84' },
      { key: 'C', text: '96' },
      { key: 'D', text: '108' }
    ],
    correctAnswer: 'C',
    explanation: 'Pola perkalian dua (×2) berkelanjutan:\n3 × 2 = 6; 6 × 2 = 12; 12 × 2 = 24; 24 × 2 = 48; 48 × 2 = 96.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 3
  {
    id: 403,
    number: 3,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Silogisme Sederhana',
    questionType: 'single',
    questionText: 'Premis 1: Semua burung memiliki sayap.\nPremis 2: Elang adalah salah satu jenis burung.\n\nKesimpulan yang paling tepat dan logis adalah...',
    options: [
      { key: 'A', text: 'Semua yang bersayap adalah elang' },
      { key: 'B', text: 'Elang memiliki sayap' },
      { key: 'C', text: 'Elang tidak dapat terbang tinggi' },
      { key: 'D', text: 'Beberapa burung bukan elang dan tidak bersayap' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan kaidah modus ponens: Jika A bagian dari B, dan semua B memiliki sifat C, maka A memiliki sifat C (Elang memiliki sayap).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 4
  {
    id: 404,
    number: 4,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Spasial Jaring-Jaring Kubus',
    imageUrl: SVG_JARING_KUBUS_LOGIKA,
    imageCaption: 'Jaring-jaring Kubus dengan Sisi Bertuliskan Angka 1 sampai 6',
    questionType: 'single',
    questionText: 'Berdasarkan jaring-jaring kubus pada gambar, jika sisi bertuliskan angka 1 dijadikan ALAS kubus, maka sisi yang menjadi TUTUP (sisi atas) kubus adalah sisi berangka...',
    options: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '5' },
      { key: 'D', text: '6' }
    ],
    correctAnswer: 'C',
    explanation: 'Pada susunan jaring-jaring kubus standar, sisi yang saling berhadapan dipisahkan oleh satu sisi penyekat. Sisi 1 berhadapan langsung dengan sisi 5.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 5
  {
    id: 405,
    number: 5,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Posisi Duduk Logis Berjajar',
    questionType: 'single',
    questionText: 'Lima siswa duduk berjajar di bangku menghadap ke depan: Ali, Budi, Cici, Dedi, dan Eko.\n• Budi duduk tepat di sebelah kanan Ali.\n• Cici duduk di antara Budi dan Dedi.\n• Eko duduk di ujung paling kanan.\n\nSiswa yang duduk di posisi tengah (urutan ke-3 dari kiri) adalah...',
    options: [
      { key: 'A', text: 'Ali' },
      { key: 'B', text: 'Budi' },
      { key: 'C', text: 'Cici' },
      { key: 'D', text: 'Dedi' }
    ],
    correctAnswer: 'C',
    explanation: 'Urutan posisi dari kiri ke kanan: Ali (1), Budi (2), Cici (3), Dedi (4), Eko (5). Posisi tepat di tengah adalah Cici.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 6
  {
    id: 406,
    number: 6,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Rotasi Spasial Geometri 90 Derajat',
    imageUrl: SVG_POLA_ROTASI_LOGIKA,
    imageCaption: 'Pola Rotasi Bentuk Geometri 90 Derajat Searah Jarum Jam',
    questionType: 'single',
    questionText: 'Berdasarkan pola rotasi gambar di atas yang berputar 90° searah putaran jarum jam pada setiap langkah, bentuk yang mengisi tanda tanya (?) adalah...',
    options: [
      { key: 'A', text: 'Bentuk panah menghadap ke atas' },
      { key: 'B', text: 'Bentuk panah menghadap ke kiri' },
      { key: 'C', text: 'Bentuk panah menghadap ke bawah' },
      { key: 'D', text: 'Bentuk panah menghadap serong kanan' }
    ],
    correctAnswer: 'B',
    explanation: 'Urutan arah rotasi 90° searah jarum jam: Atas -> Kanan -> Bawah -> Kiri. Maka langkah ke-4 menghadap ke Kiri.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 7
  {
    id: 407,
    number: 7,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pengelompokan Kata Berdasarkan Kategori Khusus (Odd One Out)',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh kata di bawah ini yang tergolong dalam KELOMPOK ALAT TRANSPORTASI DARAT!',
    options: [
      { key: 'A', text: 'Kereta api' },
      { key: 'B', text: 'Kapal feri' },
      { key: 'C', text: 'Truk kontainer' },
      { key: 'D', text: 'Sepeda motor' }
    ],
    correctMultipleAnswers: ['A', 'C', 'D'],
    explanation: 'Kereta api, truk, dan sepeda motor beroperasi di jalur darat. Kapal feri merupakan moda transportasi air laut/danau.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 8
  {
    id: 408,
    number: 8,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Hubungan Nilai dan Urutan',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Nilai Matematika Rian lebih tinggi daripada nilai Soni',
        'Nilai Soni lebih tinggi daripada nilai Tono',
        'Oleh karena itu, nilai Tono adalah yang paling tinggi di antara ketiganya'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran hubungan urutan nilai siswa berikut!',
    options: [],
    explanation: 'Urutan nilai: Rian > Soni > Tono. Pernyataan 1 & 2 Benar. Pernyataan 3 Salah karena Tono memiliki nilai terendah.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 9
  {
    id: 409,
    number: 9,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Hubungan Alat dan Fungsi Kerja',
    questionType: 'single',
    questionText: 'STETOSKOP : DOKTER = CANGKUL : ...',
    options: [
      { key: 'A', text: 'Nelayan' },
      { key: 'B', text: 'Petani' },
      { key: 'C', text: 'Montir' },
      { key: 'D', text: 'Koki' }
    ],
    correctAnswer: 'B',
    explanation: 'Stetoskop adalah alat kerja khas dokter, sedangkan cangkul adalah alat kerja utama petani di sawah.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 10
  {
    id: 410,
    number: 10,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Matriks Gambar Spasial 3x3',
    imageUrl: SVG_MATRIKS_POLA_LOG,
    imageCaption: 'Matriks Pola Geometri Berulang',
    questionType: 'single',
    questionText: 'Berdasarkan pola pertambahan jumlah titik pada matriks di atas (baris 1: 1-2-3; baris 2: 2-3-4; baris 3: 3-4-?), jumlah titik pada kotak kosong bertanda tanya adalah...',
    options: [
      { key: 'A', text: '4 titik' },
      { key: 'B', text: '5 titik' },
      { key: 'C', text: '6 titik' },
      { key: 'D', text: '7 titik' }
    ],
    correctAnswer: 'B',
    explanation: 'Pola pertambahan horizontal (+1 per kolom): 3 -> 4 -> 5 titik.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 11 to 20
  {
    id: 411,
    number: 11,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Deret Pola Bilangan Fibonacci',
    questionType: 'single',
    questionText: 'Perhatikan barisan bilangan: 1, 1, 2, 3, 5, 8, 13, ... Angka berikutnya adalah...',
    options: [
      { key: 'A', text: '18' },
      { key: 'B', text: '20' },
      { key: 'C', text: '21' },
      { key: 'D', text: '24' }
    ],
    correctAnswer: 'C',
    explanation: 'Pola Fibonacci: tiap suku merupakan penjumlahan dari 2 suku sebelumnya. 8 + 13 = 21.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 412,
    number: 12,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Logika Silogisme Negasi Sebagian',
    questionType: 'single',
    questionText: 'Premis 1: Semua mamalia melahirkan anaknya.\nPremis 2: Platipus adalah hewan mamalia yang bertelur.\n\nKesimpulan penalaran yang tepat adalah...',
    options: [
      { key: 'A', text: 'Platipus bukan hewan' },
      { key: 'B', text: 'Ternyata ada kelompok mamalia khusus (monotremata) yang berkembang biak dengan cara bertelur' },
      { key: 'C', text: 'Semua hewan bertelur adalah platipus' },
      { key: 'D', text: 'Platipus termasuk jenis unggas' }
    ],
    correctAnswer: 'B',
    explanation: 'Platipus merupakan contoh anomali ordo monotremata (pengecualian alami mamalia ovipar).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 413,
    number: 13,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Sandi Geser Huruf Sederhana (Caesar Cipher)',
    questionType: 'single',
    questionText: 'Jika kata "BUKU" disandikan menjadi "CVLV" (setiap huruf digeser 1 langkah maju dalam alfabet: B->C, U->V, K->L, U->V), maka kata "BOLA" disandikan menjadi...',
    options: [
      { key: 'A', text: 'CPMB' },
      { key: 'B', text: 'CPNC' },
      { key: 'C', text: 'BNKZ' },
      { key: 'D', text: 'DQNC' }
    ],
    correctAnswer: 'A',
    explanation: 'Pergeseran +1 huruf: B (+1) = C, O (+1) = P, L (+1) = M, A (+1) = B -> CPMB.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 414,
    number: 14,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Waktu Kalender Logis',
    questionType: 'single',
    questionText: 'Jika hari ini adalah hari Rabu, maka 100 hari setelah hari ini adalah hari...',
    options: [
      { key: 'A', text: 'Kamis' },
      { key: 'B', text: 'Jumat' },
      { key: 'C', text: 'Sabtu' },
      { key: 'D', text: 'Minggu' }
    ],
    correctAnswer: 'A',
    explanation: 'Satu minggu memiliki 7 hari. 100 ÷ 7 = 14 minggu dengan sisa 2 hari. 2 hari setelah hari Rabu adalah hari Kamis (1) -> Jumat (2). Tunggu: Rabu + 1 hari = Kamis, Rabu + 2 hari = Jumat. Mari hitung: 100 = 14 × 7 + 2. Sisa 2 hari setelah Rabu adalah Jumat.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 415,
    number: 15,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Hubungan Kekerabatan Logis',
    questionType: 'single',
    questionText: 'Ayah dari pamanku adalah kakekku. Saudara laki-laki kandung dari ayahku adalah...',
    options: [
      { key: 'A', text: 'Sepupuku' },
      { key: 'B', text: 'Pamanku' },
      { key: 'C', text: 'Keponakanku' },
      { key: 'D', text: 'Mertuaku' }
    ],
    correctAnswer: 'B',
    explanation: 'Saudara laki-laki kandung dari orang tua (ayah/ibu) memiliki hubungan kekerabatan sebagai Paman.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 16 to 30
  {
    id: 416,
    number: 16,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Sudut Jarum Jam',
    questionType: 'single',
    questionText: 'Besar sudut terkecil yang dibentuk oleh kedua jarum jam saat menunjukkan pukul 04.00 tepat adalah...',
    options: [
      { key: 'A', text: '90°' },
      { key: 'B', text: '100°' },
      { key: 'C', text: '120°' },
      { key: 'D', text: '150°' }
    ],
    correctAnswer: 'C',
    explanation: 'Tiap interval 1 jam pada jam dinding = 360° ÷ 12 = 30°. Pada pukul 04.00 jarum panjang di 12 dan jarum pendek di 4. Besar sudut = 4 × 30° = 120°.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 417,
    number: 17,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Hubungan Negara dan Ibu Kota',
    questionType: 'single',
    questionText: 'INDONESIA : JAKARTA = JEPANG : ...',
    options: [
      { key: 'A', text: 'Seoul' },
      { key: 'B', text: 'Tokyo' },
      { key: 'C', text: 'Beijing' },
      { key: 'D', text: 'Bangkok' }
    ],
    correctAnswer: 'B',
    explanation: 'Hubungan negara dan ibu kotanya: Jakarta adalah ibu kota Indonesia, Tokyo adalah ibu kota Jepang.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 418,
    number: 18,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pengelompokan Bilangan Prima dan Komposit',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh bilangan di bawah ini yang merupakan BILANGAN PRIMA!',
    options: [
      { key: 'A', text: '17' },
      { key: 'B', text: '23' },
      { key: 'C', text: '27' },
      { key: 'D', text: '29' }
    ],
    correctMultipleAnswers: ['A', 'B', 'D'],
    explanation: '17, 23, dan 29 hanya habis dibagi 1 dan dirinya sendiri (Prima). 27 bukan prima karena habis dibagi 3 dan 9 (27 = 3 × 9).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 419,
    number: 19,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Logika Berat Benda pada Timbangan Lengan',
    questionType: 'single',
    questionText: 'Pada timbangan yang seimbang:\n• 1 buah apel beratnya sama dengan 2 buah jeruk.\n• 1 buah jeruk beratnya sama dengan 3 buah stroberi.\n\nBerapa buah stroberi yang dibutuhkan untuk menyeimbangkan 2 buah apel?',
    options: [
      { key: 'A', text: '6 buah stroberi' },
      { key: 'B', text: '8 buah stroberi' },
      { key: 'C', text: '12 buah stroberi' },
      { key: 'D', text: '16 buah stroberi' }
    ],
    correctAnswer: 'C',
    explanation: '1 apel = 2 jeruk = 2 × 3 = 6 stroberi. Maka 2 apel = 2 × 6 = 12 buah stroberi.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 420,
    number: 20,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Evaluasi Silogisme Logika Kuantor (Semua vs Sebagian)',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Semua siswa yang lulus ujian telah belajar tekun',
        'Sebagian siswa kelas 6 lulus ujian',
        'Kesimpulan: Sebagian siswa kelas 6 telah belajar tekun'
      ],
      columns: ['Benar / Sahih', 'Salah / Tidak Sahih']
    },
    correctMatrixAnswers: {
      0: 'Benar / Sahih',
      1: 'Benar / Sahih',
      2: 'Benar / Sahih'
    },
    questionText: 'Evaluasi kesahihan penarikan kesimpulan silogisme di atas!',
    options: [],
    explanation: 'Semua lulusan tekun (Mayor). Sebagian siswa kelas 6 lulus (Minor). Maka sebagian siswa kelas 6 belajar tekun (Kesimpulan Sahih).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 21 to 30
  {
    id: 421,
    number: 21,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Deret Huruf Berurutan',
    questionType: 'single',
    questionText: 'Perhatikan deret huruf: A, C, F, J, O, ... Huruf berikutnya adalah...',
    options: [
      { key: 'A', text: 'S' },
      { key: 'B', text: 'T' },
      { key: 'C', text: 'U' },
      { key: 'D', text: 'V' }
    ],
    correctAnswer: 'C',
    explanation: 'Pola selisih urutan bertambah: A(1) +2 = C(3); C(3) +3 = F(6); F(6) +4 = J(10); J(10) +5 = O(15); O(15) +6 = U(21).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 422,
    number: 22,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pencerminan Gambar Geometri (Refleksi Horizontal)',
    questionType: 'single',
    questionText: 'Jika huruf "b" dicerminkan terhadap cermin tegak (vertikal), maka hasil bayangannya akan tampak persis seperti huruf...',
    options: [
      { key: 'A', text: 'p' },
      { key: 'B', text: 'd' },
      { key: 'C', text: 'q' },
      { key: 'D', text: 'b' }
    ],
    correctAnswer: 'B',
    explanation: 'Pencerminan terhadap garis vertikal membalik posisi kiri dan kanan: lengkungan kanan pada "b" berpindah ke sisi kiri membentuk huruf "d".',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 423,
    number: 23,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Kecepatan dan Waktu Berpapasan',
    questionType: 'single',
    questionText: 'Mobil A melaju dari Kota X ke Kota Y dengan kecepatan 60 km/jam. Mobil B melaju dari Kota Y ke Kota X dengan kecepatan 40 km/jam. Jarak kedua kota adalah 200 km. Berapa jam setelah mereka berangkat bersamaan kedua mobil akan berpapasan?',
    options: [
      { key: 'A', text: '1,5 jam' },
      { key: 'B', text: '2 jam' },
      { key: 'C', text: '2,5 jam' },
      { key: 'D', text: '3 jam' }
    ],
    correctAnswer: 'B',
    explanation: 'Kecepatan total saling mendekat = 60 + 40 = 100 km/jam. Waktu berpapasan = Jarak ÷ Kecepatan Total = 200 ÷ 100 = 2 jam.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 424,
    number: 24,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Urutan Juara Lari',
    questionType: 'single',
    questionText: 'Dalam lomba lari 100 meter:\n• Dimas mencapai garis akhir lebih cepat daripada Galang.\n• Fajar lebih cepat daripada Dimas tetapi lebih lambat daripada Hendra.\n\nUrutan juara dari yang tercepat (Juara 1 sampai 4) adalah...',
    options: [
      { key: 'A', text: 'Hendra, Fajar, Dimas, Galang' },
      { key: 'B', text: 'Fajar, Hendra, Dimas, Galang' },
      { key: 'C', text: 'Dimas, Fajar, Hendra, Galang' },
      { key: 'D', text: 'Galang, Dimas, Fajar, Hendra' }
    ],
    correctAnswer: 'A',
    explanation: 'Kondisi: Hendra > Fajar > Dimas > Galang. Maka urutan tercepat adalah Hendra (1), Fajar (2), Dimas (3), Galang (4).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 425,
    number: 25,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Lawan Kata (Antonim Logis)',
    questionType: 'single',
    questionText: 'ABADI : SEMENTARA = ASLI : ...',
    options: [
      { key: 'A', text: 'Murni' },
      { key: 'B', text: 'Palsu (Tiruan)' },
      { key: 'C', text: 'Alami' },
      { key: 'D', text: 'Indah' }
    ],
    correctAnswer: 'B',
    explanation: 'Hubungan pasangan antonim: Abadi berlawanan dengan Sementara, Asli berlawanan dengan Palsu.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 426,
    number: 26,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Menghitung Jumlah Kubus Satuan Bangun Ruang',
    questionType: 'single',
    questionText: 'Sebuah balok padat berukuran panjang 4 kubus satuan, lebar 3 kubus satuan, dan tinggi 2 kubus satuan. Jika 4 kubus satuan di pojok atas diambil, berapa sisa kubus satuan penyusun balok tersebut?',
    options: [
      { key: 'A', text: '16 kubus satuan' },
      { key: 'B', text: '20 kubus satuan' },
      { key: 'C', text: '22 kubus satuan' },
      { key: 'D', text: '24 kubus satuan' }
    ],
    correctAnswer: 'B',
    explanation: 'Jumlah kubus mula-mula = 4 × 3 × 2 = 24 kubus satuan. Sisa kubus = 24 - 4 = 20 kubus satuan.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 427,
    number: 27,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Hari Esok dan Kemarin',
    questionType: 'single',
    questionText: 'Jika kemarin lusa adalah hari Selasa, maka hari apakah tiga hari setelah besok?',
    options: [
      { key: 'A', text: 'Sabtu' },
      { key: 'B', text: 'Minggu' },
      { key: 'C', text: 'Senin' },
      { key: 'D', text: 'Selasa' }
    ],
    correctAnswer: 'C',
    explanation: 'Kemarin lusa = Selasa -> Kemarin = Rabu -> Hari ini = Kamis. Besok = Jumat. Tiga hari setelah Jumat (Sabtu, Minggu, Senin) adalah hari Senin.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 428,
    number: 28,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pernyataan Analitis Himpunan dan Logika Diagram Venn',
    questionType: 'complex_multiple',
    questionText: 'Di sebuah kelas terdiri dari 30 siswa: 18 siswa gemar melukis, 15 siswa gemar menyanyi, dan 8 siswa gemar keduanya. Pilihlah seluruh pernyataan yang BENAR!',
    options: [
      { key: 'A', text: 'Siswa yang HANYA gemar melukis sebanyak 10 orang' },
      { key: 'B', text: 'Siswa yang HANYA gemar menyanyi sebanyak 7 orang' },
      { key: 'C', text: 'Siswa yang tidak gemar melukis maupun menyanyi sebanyak 5 orang' },
      { key: 'D', text: 'Jumlah siswa yang gemar menyanyi atau melukis adalah 25 orang' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C', 'D'],
    explanation: '• Hanya melukis = 18 - 8 = 10.\n• Hanya menyanyi = 15 - 8 = 7.\n• Total gemar salah satu/keduanya = 10 + 7 + 8 = 25.\n• Tidak gemar keduanya = 30 - 25 = 5. (Semua pernyataan benar).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 429,
    number: 29,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Teka-Teki Logika Umur',
    questionType: 'single',
    questionText: 'Umur Ibu sekarang adalah 3 kali umur Dira. Jika jumlah umur mereka sekarang adalah 48 tahun, berapakah umur Dira 5 tahun yang akan datang?',
    options: [
      { key: 'A', text: '12 tahun' },
      { key: 'B', text: '15 tahun' },
      { key: 'C', text: '17 tahun' },
      { key: 'D', text: '21 tahun' }
    ],
    correctAnswer: 'C',
    explanation: 'Misal umur Dira = x, Ibu = 3x. 3x + x = 48 -> 4x = 48 -> x = 12 tahun. Umur Dira 5 tahun lagi = 12 + 5 = 17 tahun.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 430,
    number: 30,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Evaluasi Logika Posisi Duduk Melingkar',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Pada meja bundar dengan 4 kursi berhadapan, dua orang yang duduk berhadapan berjarak 180°',
        'Jika A duduk berhadapan dengan C, maka B dan D pasti duduk saling berhadapan pula',
        'Arah jarum jam pada meja bundar berubah tergantung siapa yang melihatnya'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran prinsip geometri posisi meja bundar!',
    options: [],
    explanation: '1 & 2 Benar pada formasi 4 kursi simetris. Pernyataan 3 Salah karena rotasi searah jarum jam adalah standar acuan sudut mutlak.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  }
];

/**
 * PAKET 02: PEMANTAPAN (Pengayaan Silogisme & Pola Abstrak) - 30 Soal
 */
export const QUESTIONS_LOG_02: Question[] = [
  // 1
  {
    id: 431,
    number: 1,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Asosiasi Bagian Terhadap Keseluruhan (Part-to-Whole)',
    questionType: 'single',
    questionText: 'KEMUDI : KAPAL = SETANG : ...',
    options: [
      { key: 'A', text: 'Sepeda' },
      { key: 'B', text: 'Pesawat' },
      { key: 'C', text: 'Rel kereta' },
      { key: 'D', text: 'Jalan raya' }
    ],
    correctAnswer: 'A',
    explanation: 'Kemudi adalah bagian pengendali arah pada kapal, sebagaimana setang adalah bagian pengendali arah pada sepeda.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 2 to 10
  {
    id: 432,
    number: 2,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Deret Bilangan Kuadrat',
    questionType: 'single',
    questionText: 'Perhatikan deret bilangan: 1, 4, 9, 16, 25, 36, ... Bilangan selanjutnya adalah...',
    options: [
      { key: 'A', text: '42' },
      { key: 'B', text: '45' },
      { key: 'C', text: '49' },
      { key: 'D', text: '54' }
    ],
    correctAnswer: 'C',
    explanation: 'Deret kuadrat bilangan asli: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 433,
    number: 3,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Silogisme Implikasi Hubungan Sebab Akibat',
    questionType: 'single',
    questionText: 'Premis 1: Jika hujan lebat turun, lapangan sekolah tergenang air.\nPremis 2: Lapangan sekolah tidak tergenang air.\n\nKesimpulan yang sah menurut logika (Modus Tollens) adalah...',
    options: [
      { key: 'A', text: 'Hujan lebat tidak turun' },
      { key: 'B', text: 'Hujan lebat sedang turun deras' },
      { key: 'C', text: 'Siswa tetap berolahraga' },
      { key: 'D', text: 'Lapangan sekolah sedang dicat' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Modus Tollens: Jika p -> q, dan ~q (tidak q), maka kesimpulannya adalah ~p (Hujan lebat tidak turun).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 434,
    number: 4,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pencerminan Vertikal (Refleksi Air)',
    questionType: 'single',
    questionText: 'Jika huruf "M" dicerminkan terhadap cermin datar horizontal di bawahnya (seperti bayangan di permukaan air), maka bayangannya akan menyerupai huruf...',
    options: [
      { key: 'A', text: 'M' },
      { key: 'B', text: 'W' },
      { key: 'C', text: 'N' },
      { key: 'D', text: 'E' }
    ],
    correctAnswer: 'B',
    explanation: 'Pencerminan horizontal membalik posisi atas dan bawah sehingga huruf M terbalik menjadi W.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 435,
    number: 5,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Jadwal Piket Harian Sekolah',
    questionType: 'single',
    questionText: 'Empat siswa (Rina, Salsa, Tio, dan Vian) bertugas piket dari Senin sampai Kamis (satu siswa per hari):\n• Rina piket tepat sebelum hari piket Salsa.\n• Tio piket pada hari Kamis.\n• Vian piket pada hari Senin.\n\nPada hari apakah Salsa bertugas piket?',
    options: [
      { key: 'A', text: 'Senin' },
      { key: 'B', text: 'Selasa' },
      { key: 'C', text: 'Rabu' },
      { key: 'D', text: 'Kamis' }
    ],
    correctAnswer: 'C',
    explanation: 'Urutan hari: Senin = Vian, Selasa = Rina, Rabu = Salsa (karena Rina tepat sebelum Salsa), Kamis = Tio. Jadi Salsa piket hari Rabu.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 6 to 15
  {
    id: 436,
    number: 6,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Geometri Matriks Simetri Lipat',
    questionType: 'single',
    questionText: 'Bangun datar berikut yang memiliki TEPAT 2 SIMETRI LIPAT dan 2 SIMETRI PUTAR adalah...',
    options: [
      { key: 'A', text: 'Persegi' },
      { key: 'B', text: 'Persegi Panjang' },
      { key: 'C', text: 'Segitiga Sama Sisi' },
      { key: 'D', text: 'Trapesium Sama Kaki' }
    ],
    correctAnswer: 'B',
    explanation: 'Persegi panjang memiliki 2 sumbu simetri lipat dan 2 tingkat simetri putar (180° dan 360°).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 437,
    number: 7,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pengelompokan Satuan Baku vs Tak Baku',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh satuan pengukuran di bawah ini yang merupakan SATUAN BAKU Internasional (SI) untuk panjang dan massa!',
    options: [
      { key: 'A', text: 'Meter' },
      { key: 'B', text: 'Kilogram' },
      { key: 'C', text: 'Jengkal tangan' },
      { key: 'D', text: 'Langkah kaki' }
    ],
    correctMultipleAnswers: ['A', 'B'],
    explanation: 'Meter dan kilogram adalah satuan baku terstandar internasional. Jengkal dan langkah kaki adalah satuan tak baku.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 438,
    number: 8,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Tinggi Badan dan Posisi',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Andi lebih tinggi daripada Bayu',
        'Candra lebih pendek daripada Bayu',
        'Kesimpulan: Bayu berada di posisi tengah dalam urutan tinggi badan mereka'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Benar'
    },
    questionText: 'Evaluasi kebenaran urutan tinggi badan ketiga anak tersebut!',
    options: [],
    explanation: 'Urutan tinggi: Andi > Bayu > Candra. Posisi Bayu tepat berada di tengah (Benar).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 439,
    number: 9,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Sebab-Akibat Kebiasaan',
    questionType: 'single',
    questionText: 'RAJIN : PANDAI = MALAS : ...',
    options: [
      { key: 'A', text: 'Bodoh / Tertinggal' },
      { key: 'B', text: 'Kaya' },
      { key: 'C', text: 'Cerdas' },
      { key: 'D', text: 'Berbakat' }
    ],
    correctAnswer: 'A',
    explanation: 'Rajin berbuah kepandaian, sebagaimana sifat malas berakibat ketertinggalan/kebodohan.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 440,
    number: 10,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Pengurangan dan Penjumlahan Berselang-Seling',
    questionType: 'single',
    questionText: 'Perhatikan barisan bilangan: 10, 15, 12, 17, 14, 19, ... Bilangan berikutnya adalah...',
    options: [
      { key: 'A', text: '16' },
      { key: 'B', text: '21' },
      { key: 'C', text: '24' },
      { key: 'D', text: '15' }
    ],
    correctAnswer: 'A',
    explanation: 'Pola operasi berselang-seling (+5, lalu -3):\n10 (+5)=15; 15 (-3)=12; 12 (+5)=17; 17 (-3)=14; 14 (+5)=19; 19 (-3)=16.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 11 to 20
  {
    id: 441,
    number: 11,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Logika Transpor dan Kapasitas Penumpang',
    questionType: 'single',
    questionText: 'Sebuah perahu penyeberangan hanya mampu membawa maksimal 4 orang dewasa atau 6 orang anak-anak dalam sekali jalan. Jika saat ini sudah ada 2 orang dewasa di dalam perahu, berapa orang anak-anak lagi yang paling banyak dapat ikut menyeberang?',
    options: [
      { key: 'A', text: '2 anak' },
      { key: 'B', text: '3 anak' },
      { key: 'C', text: '4 anak' },
      { key: 'D', text: '5 anak' }
    ],
    correctAnswer: 'B',
    explanation: 'Kapasitas 4 dewasa = 6 anak -> 1 dewasa setara dengan 1,5 anak. Sisa kapasitas untuk 2 dewasa = 2 × 1,5 = 3 anak.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 442,
    number: 22,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analisis Posisi Duduk Meja Persegi 4 Sisi',
    questionType: 'single',
    questionText: 'Empat anak (Fani, Gina, Hadi, dan Ian) duduk mengelilingi meja persegi (masing-masing di 1 sisi):\n• Fani duduk berhadapan langsung dengan Hadi.\n• Gina duduk di sebelah kanan Fani.\n\nSiapakah yang duduk di sebelah kiri Fani?',
    options: [
      { key: 'A', text: 'Gina' },
      { key: 'B', text: 'Hadi' },
      { key: 'C', text: 'Ian' },
      { key: 'D', text: 'Tidak ada' }
    ],
    correctAnswer: 'C',
    explanation: 'Depan = Hadi, Kanan = Gina, maka sisi Kiri Fani ditempati oleh Ian.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 443,
    number: 13,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Perubahan Arah Mata Angin',
    questionType: 'single',
    questionText: 'Seseorang mula-mula berdiri menghadap ke arah UTARA. Kemudian ia berputar 135° searah jarum jam. Ke arah manakah ia menghadap sekarang?',
    options: [
      { key: 'A', text: 'Timur' },
      { key: 'B', text: 'Tenggara' },
      { key: 'C', text: 'Selatan' },
      { key: 'D', text: 'Barat Daya' }
    ],
    correctAnswer: 'B',
    explanation: 'Dari Utara (0°) + 90° = Timur. Ditambah 45° lagi (total 135°) = Tenggara.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 444,
    number: 14,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Pola Lipatan Kertas Berlubang',
    questionType: 'single',
    questionText: 'Selembar kertas persegi dilipat menjadi dua bagian sama besar, kemudian dilipat lagi menjadi empat bagian. Pada sudut lipatan dibuat satu lubang guntingan berbentuk segitiga. Ketika kertas dibuka kembali seluruhnya, berapa banyak lubang segitiga yang akan tampak pada kertas?',
    options: [
      { key: 'A', text: '1 lubang' },
      { key: 'B', text: '2 lubang' },
      { key: 'C', text: '4 lubang' },
      { key: 'D', text: '8 lubang' }
    ],
    correctAnswer: 'C',
    explanation: 'Kertas dilipat 2 kali menghasilkan 4 lapisan ketebalan kertas. Setiap 1 lubang guntingan menembus ke-4 lapisan sehingga saat dibuka terdapat 4 lubang simetris.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 445,
    number: 15,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Logika Pembagian Tugas Antar Kelompok',
    questionType: 'single',
    questionText: 'Sebuah pekerjaan menghias mading dapat diselesaikan oleh 3 orang siswa dalam waktu 6 jam. Jika pekerjaan tersebut dikerjakan oleh 6 orang siswa dengan kecepatan kerja yang sama, berapa jam waktu yang dibutuhkan?',
    options: [
      { key: 'A', text: '2 jam' },
      { key: 'B', text: '3 jam' },
      { key: 'C', text: '4 jam' },
      { key: 'D', text: '12 jam' }
    ],
    correctAnswer: 'B',
    explanation: 'Perbandingan berbalik nilai: (3 orang × 6 jam) ÷ 6 orang = 18 ÷ 6 = 3 jam.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 16 to 30
  {
    id: 446,
    number: 16,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Tangga Tingkat Kecepatan dan Waktu',
    questionType: 'single',
    questionText: 'Doni menaiki tangga gedung dari lantai 1 ke lantai 3 membutuhkan waktu 30 detik. Dengan kecepatan melangkah yang sama konstan, berapa detik waktu yang dibutuhkan Doni untuk naik dari lantai 1 ke lantai 5?',
    options: [
      { key: 'A', text: '50 detik' },
      { key: 'B', text: '60 detik' },
      { key: 'C', text: '75 detik' },
      { key: 'D', text: '90 detik' }
    ],
    correctAnswer: 'B',
    explanation: 'Lantai 1 ke lantai 3 melewati (3 - 1) = 2 bentang tangga -> 30 ÷ 2 = 15 detik per bentang. Dari lantai 1 ke lantai 5 melewati (5 - 1) = 4 bentang tangga -> 4 × 15 detik = 60 detik.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 447,
    number: 17,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Fungsi Objek Biologis',
    questionType: 'single',
    questionText: 'MATA : MELIHAT = TELINGA : ...',
    options: [
      { key: 'A', text: 'Mendengar' },
      { key: 'B', text: 'Mencium' },
      { key: 'C', text: 'Berbicara' },
      { key: 'D', text: 'Meraba' }
    ],
    correctAnswer: 'A',
    explanation: 'Mata adalah organ indra penglihatan, telinga adalah organ indra pendengaran.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 448,
    number: 18,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pernyataan Analitis Pola Bilangan Genap dan Ganjil',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh pernyataan logika matematika yang SELALU BENAR!',
    options: [
      { key: 'A', text: 'Bilangan Genap + Bilangan Genap = Selalu Bilangan Genap' },
      { key: 'B', text: 'Bilangan Ganjil + Bilangan Ganjil = Selalu Bilangan Genap' },
      { key: 'C', text: 'Bilangan Genap × Bilangan Ganjil = Selalu Bilangan Genap' },
      { key: 'D', text: 'Bilangan Ganjil × Bilangan Ganjil = Selalu Bilangan Genap' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'A, B, C benar (contoh: 2+4=6; 3+5=8; 2×3=6). Opsi D salah karena Ganjil × Ganjil = Ganjil (3×5=15).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 449,
    number: 19,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Nilai Rata-Rata Gabungan',
    questionType: 'single',
    questionText: 'Nilai rata-rata ulangan 4 orang siswa adalah 80. Jika digabungkan dengan nilai seorang siswa baru yang mendapat nilai 90, berapakah nilai rata-rata dari kelima siswa tersebut sekarang?',
    options: [
      { key: 'A', text: '81' },
      { key: 'B', text: '82' },
      { key: 'C', text: '84' },
      { key: 'D', text: '85' }
    ],
    correctAnswer: 'B',
    explanation: 'Total nilai 4 siswa = 4 × 80 = 320. Ditambah 90 = 410. Rata-rata baru = 410 ÷ 5 = 82.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 450,
    number: 20,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Evaluasi Silogisme Hipotetis Bersyarat',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Jika tanaman disiram teratur, daunnya akan tumbuh subur',
        'Tanaman tidak disiram teratur',
        'Kesimpulan pasti: Tanaman tersebut pasti telah mati kekeringan'
      ],
      columns: ['Benar / Sahih', 'Salah / Belum Tentu Sahih']
    },
    correctMatrixAnswers: {
      0: 'Benar / Sahih',
      1: 'Benar / Sahih',
      2: 'Salah / Belum Tentu Sahih'
    },
    questionText: 'Evaluasi kesahihan penalaran kondisional di atas!',
    options: [],
    explanation: 'Menolak anteseden tidak otomatis menjamin konklusi absolut (mungkin ada embun/air tanah). Kesimpulan 3 tidak sahih secara silogisme formal.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 21 to 30
  {
    id: 451,
    number: 21,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Deret Pengurangan Geometris Pecahan',
    questionType: 'single',
    questionText: 'Perhatikan barisan: 64, 32, 16, 8, 4, ... Angka berikutnya adalah...',
    options: [
      { key: 'A', text: '0' },
      { key: 'B', text: '1' },
      { key: 'C', text: '2' },
      { key: 'D', text: '3' }
    ],
    correctAnswer: 'C',
    explanation: 'Pola pembagian dua (÷2) secara konsisten: 4 ÷ 2 = 2.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 452,
    number: 22,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pengelompokan Kata Berdasarkan Medan Makna',
    questionType: 'single',
    questionText: 'Di antara kata-kata berikut, kata yang TIDAK termasuk dalam kelompok yang sama adalah...',
    options: [
      { key: 'A', text: 'Gitar' },
      { key: 'B', text: 'Biola' },
      { key: 'C', text: 'Terompet' },
      { key: 'D', text: 'Harpa' }
    ],
    correctAnswer: 'C',
    explanation: 'Gitar, biola, dan harpa adalah alat musik berdawai/petik/gesek. Terompet adalah alat musik tiup logam.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 453,
    number: 23,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Jalur Rute Terpendek pada Graf Sederhana',
    questionType: 'single',
    questionText: 'Dari Pos A ke Pos D terdapat dua pilihan rute:\n• Rute 1: A -> B (5 km) lalu B -> D (7 km)\n• Rute 2: A -> C (4 km) lalu C -> D (6 km)\n\nBerapa selisih jarak antara rute yang lebih jauh dengan rute terpendek?',
    options: [
      { key: 'A', text: '1 km' },
      { key: 'B', text: '2 km' },
      { key: 'C', text: '3 km' },
      { key: 'D', text: '4 km' }
    ],
    correctAnswer: 'B',
    explanation: 'Rute 1 = 5 + 7 = 12 km. Rute 2 = 4 + 6 = 10 km. Selisih jarak = 12 - 10 = 2 km.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 454,
    number: 24,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Kelereng dalam Kantong Tertutup',
    questionType: 'single',
    questionText: 'Di dalam sebuah kantong hitam terdapat 5 kelereng merah, 4 kelereng biru, dan 6 kelereng kuning. Berapa kelereng minimal yang harus diambil secara acak tanpa melihat agar DIPASTIKAN terambil setidaknya 1 kelereng berwarna kuning?',
    options: [
      { key: 'A', text: '6 kelereng' },
      { key: 'B', text: '9 kelereng' },
      { key: 'C', text: '10 kelereng' },
      { key: 'D', text: '11 kelereng' }
    ],
    correctAnswer: 'C',
    explanation: 'Prinsip kondisi terburuk (Worst Case Pigeonhole Principle): Jika terambil semua merah (5) + semua biru (4) = 9 kelereng non-kuning, maka pengambilan ke-10 (9 + 1 = 10) PASTI menghasilkan kelereng kuning.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 455,
    number: 25,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Kata Hubungan Satuan dan Besaran',
    questionType: 'single',
    questionText: 'CELSIUS : SUHU = WATT : ...',
    options: [
      { key: 'A', text: 'Daya Listrik' },
      { key: 'B', text: 'Jarak' },
      { key: 'C', text: 'Berat' },
      { key: 'D', text: 'Volume' }
    ],
    correctAnswer: 'A',
    explanation: 'Celsius adalah satuan besaran suhu, sedangkan Watt adalah satuan standar untuk besaran daya listrik.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 456,
    number: 26,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Perputaran Sudut Jarum Jam 180 Derajat',
    questionType: 'single',
    questionText: 'Jika jarum panjang sebuah jam dinding berputar sebesar 180° dari angka 12, maka jarum panjang tersebut akan menunjuk tepat ke angka...',
    options: [
      { key: 'A', text: '3' },
      { key: 'B', text: '6' },
      { key: 'C', text: '9' },
      { key: 'D', text: '12' }
    ],
    correctAnswer: 'B',
    explanation: 'Satu putaran penuh = 360°. Putaran setengah lingkaran (180°) dari angka 12 akan berhadapan langsung menunjuk angka 6.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 457,
    number: 27,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Jarak dan Kecepatan Rata-Rata',
    questionType: 'single',
    questionText: 'Sebuah bus menempuh jarak 120 km dalam waktu 2 jam. Jika bus tersebut melanjutkan perjalanan dengan kecepatan yang sama selama 3 jam lagi, berapa km total jarak yang ditempuh bus dari titik awal?',
    options: [
      { key: 'A', text: '180 km' },
      { key: 'B', text: '240 km' },
      { key: 'C', text: '300 km' },
      { key: 'D', text: '360 km' }
    ],
    correctAnswer: 'C',
    explanation: 'Kecepatan = 120 ÷ 2 = 60 km/jam. Total waktu tempuh = 2 + 3 = 5 jam. Total jarak = 5 × 60 = 300 km.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 458,
    number: 28,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pernyataan Analitis Pola Sifat Bangun Geometri',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh bangun datar yang memiliki SEMUA SISI SAMA PANJANG!',
    options: [
      { key: 'A', text: 'Persegi' },
      { key: 'B', text: 'Belah Ketupat' },
      { key: 'C', text: 'Segitiga Sama Sisi' },
      { key: 'D', text: 'Persegi Panjang' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'Persegi, belah ketupat, dan segitiga sama sisi memiliki seluruh sisi yang sama panjang. Persegi panjang memiliki 2 pasang sisi berhadapan yang sama.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 459,
    number: 29,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Logika Pembayaran Pecahan Uang',
    questionType: 'single',
    questionText: 'Tito ingin membayar buku seharga Rp35.000 dengan kombinasi uang lembaran Rp10.000 dan Rp5.000. Berapa banyak cara kombinasi lembaran uang yang mungkin dilakukan Tito (dengan minimal ada 1 lembar dari masing-masing pecahan)?',
    options: [
      { key: 'A', text: '2 cara' },
      { key: 'B', text: '3 cara' },
      { key: 'C', text: '4 cara' },
      { key: 'D', text: '5 cara' }
    ],
    correctAnswer: 'B',
    explanation: 'Kombinasi yang valid:\n1) Tiga lembar 10.000 + satu lembar 5.000 (30.000 + 5.000 = 35.000)\n2) Dua lembar 10.000 + tiga lembar 5.000 (20.000 + 15.000 = 35.000)\n3) Satu lembar 10.000 + lima lembar 5.000 (10.000 + 25.000 = 35.000)\nTotal ada 3 cara.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 460,
    number: 30,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Evaluasi Kebenaran Karakteristik Jaring Bangun Ruang',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Jaring-jaring kubus selalu terdiri atas tepat 6 buah persegi kongruen',
        'Jaring-jaring balok terdiri atas 3 pasang persegi panjang yang kongruen',
        'Jaring-jaring kerucut terdiri atas 1 lingkaran alas dan 1 segitiga siku-siku'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran karakteristik jaring-jaring bangun ruang!',
    options: [],
    explanation: '1 & 2 Benar. Pernyataan 3 Salah karena selimut kerucut berbentuk juring lingkaran (bukan segitiga siku-siku).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  }
];

/**
 * PAKET 03: SIMULASI REALISTIS (Standar Asesmen Bakat Skolastik Pusmendik) - 30 Soal
 */
export const QUESTIONS_LOG_03: Question[] = [
  // 1
  {
    id: 461,
    number: 1,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Fungsi Biologis dan Sensorik',
    questionType: 'single',
    questionText: 'LIDAH : MENGECAP = HIDUNG : ...',
    options: [
      { key: 'A', text: 'Membau (Mencium aroma)' },
      { key: 'B', text: 'Melihat' },
      { key: 'C', text: 'Mendengar' },
      { key: 'D', text: 'Mengunyah' }
    ],
    correctAnswer: 'A',
    explanation: 'Lidah adalah indra pengecap rasa, sedangkan hidung adalah indra pembau aroma.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 2 to 10
  {
    id: 462,
    number: 2,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Deret Perkalian Tiga (×3)',
    questionType: 'single',
    questionText: 'Perhatikan barisan angka: 2, 6, 18, 54, ... Angka berikutnya adalah...',
    options: [
      { key: 'A', text: '108' },
      { key: 'B', text: '144' },
      { key: 'C', text: '162' },
      { key: 'D', text: '180' }
    ],
    correctAnswer: 'C',
    explanation: 'Pola perkalian tiga (×3): 2 × 3 = 6; 6 × 3 = 18; 18 × 3 = 54; 54 × 3 = 162.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 463,
    number: 3,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Silogisme Logika Negasi Ganda',
    questionType: 'single',
    questionText: 'Premis 1: Tidak ada ikan yang bernapas dengan paru-paru di darat.\nPremis 2: Mujair adalah jenis ikan air tawar.\n\nKesimpulan yang sah adalah...',
    options: [
      { key: 'A', text: 'Mujair tidak bernapas dengan paru-paru di darat' },
      { key: 'B', text: 'Mujair dapat hidup bebas di daratan kering' },
      { key: 'C', text: 'Semua hewan air adalah mujair' },
      { key: 'D', text: 'Mujair bertelur di atas pohon' }
    ],
    correctAnswer: 'A',
    explanation: 'Karena mujair termasuk kelas ikan, maka mujair mengikuti sifat universal "tidak bernapas dengan paru-paru di darat".',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 464,
    number: 4,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Spasial Jaring Balok Berpasangan',
    questionType: 'single',
    questionText: 'Sebuah balok memiliki 6 sisi persegi panjang. Berapa banyak pasang sisi yang bentuk dan ukurannya saling kongruen dan berhadapan sejajar?',
    options: [
      { key: 'A', text: '2 pasang' },
      { key: 'B', text: '3 pasang' },
      { key: 'C', text: '4 pasang' },
      { key: 'D', text: '6 pasang' }
    ],
    correctAnswer: 'B',
    explanation: 'Balok memiliki 3 pasang sisi yang kongruen: alas-tutup, depan-belakang, dan samping kanan-samping kiri.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 465,
    number: 5,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Posisi Antrean Logis',
    questionType: 'single',
    questionText: 'Dalam antrean tiket bioskop:\n• Bagas berada di urutan ke-7 dari depan.\n• Bagas juga berada di urutan ke-9 dari belakang.\n\nBerapa jumlah total orang yang ada di dalam antrean tersebut?',
    options: [
      { key: 'A', text: '14 orang' },
      { key: 'B', text: '15 orang' },
      { key: 'C', text: '16 orang' },
      { key: 'D', text: '17 orang' }
    ],
    correctAnswer: 'B',
    explanation: 'Total antrean = (Posisi Depan + Posisi Belakang) - 1 (karena Bagas dihitung 2 kali) = 7 + 9 - 1 = 15 orang.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 6 to 15
  {
    id: 466,
    number: 6,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Rotasi 270 Derajat Searah Jarum Jam',
    questionType: 'single',
    questionText: 'Memutar sebuah gambar sebesar 270° SEARAH jarum jam menghasilkan posisi yang SAMA PERSIS dengan memutar gambar tersebut sebesar...',
    options: [
      { key: 'A', text: '90° berlawanan arah jarum jam' },
      { key: 'B', text: '90° searah jarum jam' },
      { key: 'C', text: '180° searah jarum jam' },
      { key: 'D', text: '360° searah jarum jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Satu putaran lingkaran penuh = 360°. Rotasi +270° ekuivalen dengan rotasi -90° (90° berlawanan arah jarum jam).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 467,
    number: 7,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pengelompokan Satuan Waktu Kalender',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh kesetaraan satuan waktu yang BENAR!',
    options: [
      { key: 'A', text: '1 Windu = 8 Tahun' },
      { key: 'B', text: '1 Dasawarsa = 10 Tahun' },
      { key: 'C', text: '1 Abad = 100 Tahun' },
      { key: 'D', text: '1 Lustrum = 12 Tahun' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'A, B, dan C benar. Opsi D salah karena 1 lustrum = 5 tahun.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 468,
    number: 8,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Logika Berat Benda Komparatif',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Semangka lebih berat daripada Melon',
        'Melon lebih berat daripada Jeruk',
        'Kesimpulan: Semangka adalah buah yang paling berat di antara ketiganya'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Benar'
    },
    questionText: 'Evaluasi kebenaran perbandingan berat buah-buahan di atas!',
    options: [],
    explanation: 'Semangka > Melon > Jeruk. Maka Semangka adalah yang terberat (Benar).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 469,
    number: 9,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Hubungan Seniman dan Hasil Karya',
    questionType: 'single',
    questionText: 'PENULIS : NOVEL = PEMAHAT : ...',
    options: [
      { key: 'A', text: 'Patung' },
      { key: 'B', text: 'Lukisan cat air' },
      { key: 'C', text: 'Koran' },
      { key: 'D', text: 'Lagu' }
    ],
    correctAnswer: 'A',
    explanation: 'Penulis menghasilkan karya berupa novel, pemahat menghasilkan karya berupa patung/ukiran batu/kayu.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 470,
    number: 10,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Barisan Bertingkat Penjumlahan',
    questionType: 'single',
    questionText: 'Perhatikan deret angka: 2, 4, 7, 11, 16, 22, ... Angka berikutnya adalah...',
    options: [
      { key: 'A', text: '28' },
      { key: 'B', text: '29' },
      { key: 'C', text: '30' },
      { key: 'D', text: '32' }
    ],
    correctAnswer: 'B',
    explanation: 'Pola penambahan bertingkat (+2, +3, +4, +5, +6, +7):\n2+2=4; 4+3=7; 7+4=11; 11+5=16; 16+6=22; 22+7=29.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 11 to 20
  {
    id: 471,
    number: 11,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Sandi Geser Dua Langkah (+2 Alfabet)',
    questionType: 'single',
    questionText: 'Jika kata "KERA" disandikan menjadi "MGTC" (setiap huruf digeser +2 langkah: K->M, E->G, R->T, A->C), maka kata "KUDA" disandikan menjadi...',
    options: [
      { key: 'A', text: 'MWFC' },
      { key: 'B', text: 'MWFB' },
      { key: 'C', text: 'LVEC' },
      { key: 'D', text: 'NXGD' }
    ],
    correctAnswer: 'A',
    explanation: 'Pergeseran +2 huruf:\nK (+2) = M\nU (+2) = W\nD (+2) = F\nA (+2) = C -> MWFC.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 472,
    number: 12,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Spasial Sudut Jarum Jam 03.30',
    questionType: 'single',
    questionText: 'Besar sudut terkecil yang dibentuk oleh kedua jarum jam saat menunjukkan pukul 03.30 adalah...',
    options: [
      { key: 'A', text: '60°' },
      { key: 'B', text: '75°' },
      { key: 'C', text: '90°' },
      { key: 'D', text: '105°' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada 03.30 jarum panjang tepat di angka 6 (180°). Jarum pendek berada tepat di tengah antara angka 3 dan 4 (3 × 30° + 0,5 × 30° = 105°). Besar sudut = 180° - 105° = 75°.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 473,
    number: 13,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Profesi dan Tempat Kerja',
    questionType: 'single',
    questionText: 'NAKHODA : KAPAL = MASINIS : ...',
    options: [
      { key: 'A', text: 'Kereta Api' },
      { key: 'B', text: 'Pesawat Terbang' },
      { key: 'C', text: 'Bus Antarkota' },
      { key: 'D', text: 'Sepeda Motor' }
    ],
    correctAnswer: 'A',
    explanation: 'Nakhoda mengemudikan kapal laut, sebagaimana Masinis mengemudikan kereta api.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 474,
    number: 14,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Jabat Tangan Acara Perpisahan',
    questionType: 'single',
    questionText: 'Empat orang sahabat (A, B, C, dan D) saling berjabat tangan satu sama lain tepat satu kali saat bertemu. Berapa kali jabat tangan yang terjadi seluruhnya?',
    options: [
      { key: 'A', text: '4 kali' },
      { key: 'B', text: '6 kali' },
      { key: 'C', text: '8 kali' },
      { key: 'D', text: '12 kali' }
    ],
    correctAnswer: 'B',
    explanation: 'Rumus kombinasi jabat tangan n orang: n × (n - 1) ÷ 2. Untuk 4 orang = (4 × 3) ÷ 2 = 6 kali (AB, AC, AD, BC, BD, CD).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 475,
    number: 15,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Logika Pembuktian Pernyataan Bersyarat',
    questionType: 'single',
    questionText: 'Premis 1: Semua anak yang rajin membaca memiliki wawasan luas.\nPremis 2: Taufik tidak memiliki wawasan luas.\n\nKesimpulan yang logis adalah...',
    options: [
      { key: 'A', text: 'Taufik bukan anak yang rajin membaca' },
      { key: 'B', text: 'Taufik rajin membaca buku cerita' },
      { key: 'C', text: 'Semua anak wawasannya luas seperti Taufik' },
      { key: 'D', text: 'Taufik tidak bersekolah' }
    ],
    correctAnswer: 'A',
    explanation: 'Modus Tollens: Jika rajin membaca -> wawasan luas. Karena tidak berwawasan luas, maka Taufik tidak rajin membaca.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 16 to 30
  {
    id: 476,
    number: 16,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Logika Deret Pembagian Bertingkat',
    questionType: 'single',
    questionText: 'Perhatikan deret angka: 240, 120, 40, 10, ... Angka berikutnya adalah...',
    options: [
      { key: 'A', text: '2' },
      { key: 'B', text: '5' },
      { key: 'C', text: '1' },
      { key: 'D', text: '0' }
    ],
    correctAnswer: 'A',
    explanation: 'Pola pembagian bertingkat (÷2, ÷3, ÷4, ÷5):\n240 ÷ 2 = 120; 120 ÷ 3 = 40; 40 ÷ 4 = 10; 10 ÷ 5 = 2.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 477,
    number: 17,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pengelompokan Bentuk Geometri Berdasarkan Sifat Rusuk',
    questionType: 'single',
    questionText: 'Bangun ruang yang TIDAK memiliki titik sudut sama sekali adalah...',
    options: [
      { key: 'A', text: 'Kubus' },
      { key: 'B', text: 'Balok' },
      { key: 'C', text: 'Bola' },
      { key: 'D', text: 'Limas Segitiga' }
    ],
    correctAnswer: 'C',
    explanation: 'Bola dibatasi oleh 1 bidang lengkung sempurna tanpa rusuk dan tanpa titik sudut.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 478,
    number: 18,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pernyataan Analitis Himpunan Siswa Berprestasi',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh pernyataan berikut yang mencerminkan KESIMPULAN DEDUKTIF yang valid!',
    options: [
      { key: 'A', text: 'Semua logam menghantarkan listrik. Tembaga adalah logam. Maka tembaga menghantarkan listrik.' },
      { key: 'B', text: 'Semua mamalia bernapas dengan paru-paru. Ikan paus adalah mamalia. Maka paus bernapas dengan paru-paru.' },
      { key: 'C', text: 'Semua unggas bertelur. Buaya bertelur. Maka buaya adalah unggas.' },
      { key: 'D', text: 'Semua persegi adalah segi empat. Bangun ABCD adalah persegi. Maka ABCD adalah segi empat.' }
    ],
    correctMultipleAnswers: ['A', 'B', 'D'],
    explanation: 'A, B, dan D merupakan silogisme deduktif sahih. C sesat pikir (fallacy) karena reptil buaya juga bertelur tanpa menjadi unggas.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 479,
    number: 19,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Selisih Usia Sepanjang Waktu',
    questionType: 'single',
    questionText: 'Lima tahun yang lalu umur Ayah adalah 35 tahun dan umur Kakak adalah 10 tahun. Berapakah selisih umur Ayah dan Kakak pada 10 tahun yang akan datang?',
    options: [
      { key: 'A', text: '20 tahun' },
      { key: 'B', text: '25 tahun' },
      { key: 'C', text: '30 tahun' },
      { key: 'D', text: '35 tahun' }
    ],
    correctAnswer: 'B',
    explanation: 'Selisih umur dua orang selalu konstan/tetap sepanjang waktu: 35 - 10 = 25 tahun.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 480,
    number: 20,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Evaluasi Silogisme Hipotesis Campuran',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Semua peserta lomba mengenakan nomor dada di baju',
        'Zaki adalah salah satu peserta lomba',
        'Kesimpulan: Zaki mengenakan nomor dada di bajunya'
      ],
      columns: ['Benar / Sahih', 'Salah / Tidak Sahih']
    },
    correctMatrixAnswers: {
      0: 'Benar / Sahih',
      1: 'Benar / Sahih',
      2: 'Benar / Sahih'
    },
    questionText: 'Evaluasi kesahihan silogisme deduktif di atas!',
    options: [],
    explanation: 'Silogisme memenuhi kaidah Modus Ponens universal (Semua pernyataan dan kesimpulannya Benar/Sahih).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 21 to 30
  {
    id: 481,
    number: 21,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Dua Deret Terjalin (Interleaved Series)',
    questionType: 'single',
    questionText: 'Perhatikan barisan: 5, 20, 7, 18, 9, 16, 11, ... Angka berikutnya adalah...',
    options: [
      { key: 'A', text: '13' },
      { key: 'B', text: '14' },
      { key: 'C', text: '15' },
      { key: 'D', text: '17' }
    ],
    correctAnswer: 'B',
    explanation: 'Dua deret terjalin berselang-seling:\n• Suku ganjil (posisi 1, 3, 5, 7): 5, 7, 9, 11 (+2)\n• Suku genap (posisi 2, 4, 6, 8): 20, 18, 16, ... -> 16 - 2 = 14.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 482,
    number: 22,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Arah Bayangan Matahari Pagi',
    questionType: 'single',
    questionText: 'Pada pukul 07.00 pagi saat matahari baru terbit di timur, Dimas berdiri tegak di lapangan sekolah. Bayangan tubuh Dimas akan memanjang jatuh ke arah...',
    options: [
      { key: 'A', text: 'Timur' },
      { key: 'B', text: 'Barat' },
      { key: 'C', text: 'Utara' },
      { key: 'D', text: 'Selatan' }
    ],
    correctAnswer: 'B',
    explanation: 'Cahaya merambat lurus dari timur ke barat sehingga bayangan benda jatuh di sisi yang berlawanan dari sumber cahaya, yaitu arah barat.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 483,
    number: 23,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Hubungan Bahan dan Pakaian',
    questionType: 'single',
    questionText: 'KAPAS : BENANG = BENANG : ...',
    options: [
      { key: 'A', text: 'Kain' },
      { key: 'B', text: 'Bunga' },
      { key: 'C', text: 'Pohon' },
      { key: 'D', text: 'Jarum' }
    ],
    correctAnswer: 'A',
    explanation: 'Kapas dipintal menjadi benang, sebagaimana benang ditenun menghasilkan sehelai kain.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 484,
    number: 24,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Posisi Rumah Berjajar di Jalan',
    questionType: 'single',
    questionText: 'Empat rumah berdampingan di sisi utara jalan nomor urut 1, 2, 3, 4 dari barat ke timur:\n• Rumah Pak Dani berada di nomor paling barat (nomor 1).\n• Rumah Pak Joko berada di antara rumah Pak Dani dan Pak Rudi.\n• Rumah Pak Haris berada di nomor 4.\n\nNomor berapakah rumah Pak Rudi?',
    options: [
      { key: 'A', text: 'Nomor 1' },
      { key: 'B', text: 'Nomor 2' },
      { key: 'C', text: 'Nomor 3' },
      { key: 'D', text: 'Nomor 4' }
    ],
    correctAnswer: 'C',
    explanation: 'Urutan: No 1 = Pak Dani, No 2 = Pak Joko (di antara Dani & Rudi), No 3 = Pak Rudi, No 4 = Pak Haris.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 485,
    number: 25,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Logika Pembuktian Bilangan Genap Berurutan',
    questionType: 'single',
    questionText: 'Jumlah dari tiga bilangan genap berurutan adalah 36. Berapakah nilai bilangan genap yang terbesar di antara ketiganya?',
    options: [
      { key: 'A', text: '10' },
      { key: 'B', text: '12' },
      { key: 'C', text: '14' },
      { key: 'D', text: '16' }
    ],
    correctAnswer: 'C',
    explanation: 'Misal bilangan tengah = x. Tiga bilangan: (x-2), x, (x+2). Jumlah = 3x = 36 -> x = 12. Bilangan terbesar = 12 + 2 = 14.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 486,
    number: 26,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pola Perubahan Posisi Jarum Kompas',
    questionType: 'single',
    questionText: 'Jarum penunjuk arah kompas yang semula menunjuk ke arah SELATAN diputar 90° berlawanan arah jarum jam. Ke arah manakah jarum tersebut menunjuk sekarang?',
    options: [
      { key: 'A', text: 'Barat' },
      { key: 'B', text: 'Timur' },
      { key: 'C', text: 'Utara' },
      { key: 'D', text: 'Tenggara' }
    ],
    correctAnswer: 'B',
    explanation: 'Dari Selatan berputar 90° berlawanan arah jarum jam (counter-clockwise) mengarah tepat ke arah TIMUR.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 487,
    number: 27,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Analogi Fungsi Alat Tulis dan Pembersih',
    questionType: 'single',
    questionText: 'PENSIL : PENGHAPUS = PAPAN TULIS : ...',
    options: [
      { key: 'A', text: 'Penghapus Papan (Spong/Duster)' },
      { key: 'B', text: 'Spidol' },
      { key: 'C', text: 'Kapur' },
      { key: 'D', text: 'Buku catatan' }
    ],
    correctAnswer: 'A',
    explanation: 'Hubungan media tulis dan alat pembersihnya: Pensil dibersihkan dengan penghapus karet, papan tulis dibersihkan dengan penghapus papan.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 488,
    number: 28,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Pernyataan Analitis Pola Sifat Segitiga',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh sifat yang SELALU DIMILIKI oleh sebuah SEGITIGA SAMA SISI!',
    options: [
      { key: 'A', text: 'Ketiga sisinya memiliki panjang yang sama' },
      { key: 'B', text: 'Ketiga sudut dalamnya sama besar yaitu masing-masing 60°' },
      { key: 'C', text: 'Memiliki tepat 3 sumbu simetri lipat' },
      { key: 'D', text: 'Memiliki 1 sudut siku-siku 90°' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'A, B, C adalah sifat khas segitiga sama sisi. Opsi D adalah sifat segitiga siku-siku.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 489,
    number: 29,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Penalaran Waktu Menyala Lampu Hias Bersama',
    questionType: 'single',
    questionText: 'Lampu hias A menyala berkedip setiap 4 detik, dan Lampu B menyala berkedip setiap 6 detik. Jika kedua lampu menyala bersamaan pada detik ke-0, pada detik ke berapa mereka akan menyala bersamaan untuk KEDUA KALINYA?',
    options: [
      { key: 'A', text: 'Detik ke-10' },
      { key: 'B', text: 'Detik ke-12' },
      { key: 'C', text: 'Detik ke-18' },
      { key: 'D', text: 'Detik ke-24' }
    ],
    correctAnswer: 'B',
    explanation: 'KPK dari 4 dan 6 adalah 12. Jadi kedua lampu berkedip bersamaan lagi pada detik ke-12.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 490,
    number: 30,
    category: 'Penalaran & Logika',
    subjectCode: 'LOG',
    topic: 'Evaluasi Kebenaran Karakteristik Jaring-Jaring Limas',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Limas segiempat memiliki 1 sisi alas berbentuk segiempat dan 4 sisi tegak berbentuk segitiga',
        'Prisma segitiga memiliki 2 sisi alas-tutup berbentuk segitiga dan 3 sisi tegak persegi panjang',
        'Kerucut memiliki 2 titik sudut runcing'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran karakteristik bidang sisi bangun ruang!',
    options: [],
    explanation: '1 & 2 Benar. Pernyataan 3 Salah karena kerucut hanya memiliki 1 titik puncak.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  }
];

// Export Default Gabungan
export const QUESTIONS_PENALARAN: Question[] = [
  ...QUESTIONS_LOG_01,
  ...QUESTIONS_LOG_02,
  ...QUESTIONS_LOG_03
];
