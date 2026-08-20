import { Question } from '../types/quiz';
import { SVG_INFOGRAFIS_SAMPAH_BIN, SVG_INFOGRAFIS_HEMAT_AIR_BIN } from './questionVisuals';

/**
 * ============================================================================
 * BANK SOAL TKA SD - BAHASA INDONESIA & LITERASI MEMBACA (3 PAKET @ 30 SOAL)
 * Berdasarkan Pedoman Pusmendik / Asesmen Nasional & Kurikulum Merdeka
 * Bebas Typo, Kaidah EYD V / PUEBI, Teks Narasi & Informasi Kontekstual
 * ============================================================================
 */

/**
 * PAKET 01: DIAGNOSTIK (Pemahaman Bacaan & Tata Bahasa) - 30 Soal
 */
export const QUESTIONS_BIN_01: Question[] = [
  // 1
  {
    id: 201,
    number: 1,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Ide Pokok Paragraf Deskripsi',
    passageTitle: 'Kekayaan Terumbu Karang Raja Ampat',
    passageText: 'Kepulauan Raja Ampat di Papua Barat Daya dikenal sebagai surga keanekaragaman hayati bawah laut dunia. Kawasan ini memiliki lebih dari 540 jenis terumbu karang keras dan sekitar 1.500 jenis ikan karang. Kejernihan air laut serta terjaganya ekosistem mangrove di pesisir pulau-pulau karang menjadikan Raja Ampat destinasi wisata bahari unggulan yang dikagumi wisatawan domestik maupun mancanegara.',
    questionType: 'single',
    questionText: 'Ide pokok dari paragraf di atas adalah...',
    options: [
      { key: 'A', text: 'Jumlah jenis ikan karang di perairan Papua' },
      { key: 'B', text: 'Kekayaan keanekaragaman hayati bawah laut Raja Ampat' },
      { key: 'C', text: 'Peran ekosistem mangrove di pesisir pulau karang' },
      { key: 'D', text: 'Biaya perjalanan wisata ke Raja Ampat' }
    ],
    correctAnswer: 'B',
    explanation: 'Kalimat utama berada di awal paragraf mengenai keanekaragaman hayati laut Raja Ampat. Kalimat setelahnya merupakan rincian pendukung.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 2
  {
    id: 202,
    number: 2,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Makna Kata dan Kosakata Baku',
    questionType: 'single',
    questionText: 'Arti kata "destinasi" pada kutipan bacaan nomor 1 di atas adalah...',
    options: [
      { key: 'A', text: 'Tempat asal keberangkatan' },
      { key: 'B', text: 'Tempat tujuan perjalanan' },
      { key: 'C', text: 'Jalur penyeberangan kapal' },
      { key: 'D', text: 'Agen pemandu wisata' }
    ],
    correctAnswer: 'B',
    explanation: 'Menurut KBBI, kata "destinasi" bermakna tempat tujuan atau daerah tujuan perjalanan wisata.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 3
  {
    id: 203,
    number: 3,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penulisan Huruf Kapital yang Tepat Sesuai EYD V',
    questionType: 'single',
    questionText: 'Penulisan huruf kapital yang benar menurut kaidah EYD V adalah...',
    options: [
      { key: 'A', text: 'Bapak lurah mengundang warga desa Sukamaju berkumpul.' },
      { key: 'B', text: 'Kami menikmati lezatnya Jeruk bali di tepi Danau Toba.' },
      { key: 'C', text: 'Presiden Joko Widodo meresmikan jembatan baru di Selat Madura.' },
      { key: 'D', text: 'Setiap Hari senin siswa mengadakan upacara bendera.' }
    ],
    correctAnswer: 'C',
    explanation: '• Opsi C benar: "Presiden Joko Widodo" (gelar diikuti nama orang), "Selat Madura" (nama geografi diri).\n• "jeruk bali" adalah nama jenis sehingga huruf kecil.\n• "Desa Sukamaju" huruf D besar, "hari Senin" kata hari huruf kecil.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 4
  {
    id: 204,
    number: 4,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penggunaan Tanda Baca',
    questionType: 'single',
    questionText: 'Penggunaan tanda baca yang tepat terdapat pada kalimat...',
    options: [
      { key: 'A', text: 'Ibu membeli: apel, jeruk, dan mangga di pasar.' },
      { key: 'B', text: 'Ibu membeli apel, jeruk, dan mangga di pasar.' },
      { key: 'C', text: 'Ibu membeli apel, jeruk dan mangga di pasar' },
      { key: 'D', text: 'Ibu membeli apel; jeruk; dan mangga di pasar.' }
    ],
    correctAnswer: 'B',
    explanation: 'Tanda koma (,) digunakan di antara unsur-unsur dalam perincian tiga hal atau lebih, termasuk sebelum kata "dan".',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 5
  {
    id: 205,
    number: 5,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Struktur Teks Prosedur',
    questionType: 'single',
    questionText: 'Urutan petunjuk mencuci tangan yang benar dengan sabun adalah:\n(1) Bilas tangan dengan air bersih mengalir\n(2) Gosok punggung tangan dan sela-sela jari\n(3) Basahi kedua tangan dengan air mengalir dan tuangkan sabun\n(4) Keringkan tangan dengan handuk bersih atau tisu\n(5) Gosok kedua telapak tangan hingga berbusa\n\nUrutan yang paling tepat adalah...',
    options: [
      { key: 'A', text: '(3) - (5) - (2) - (1) - (4)' },
      { key: 'B', text: '(3) - (2) - (5) - (4) - (1)' },
      { key: 'C', text: '(5) - (3) - (2) - (1) - (4)' },
      { key: 'D', text: '(1) - (3) - (5) - (2) - (4)' }
    ],
    correctAnswer: 'A',
    explanation: 'Langkah logis mencuci tangan: Basahi & sabuni (3) -> Gosok telapak (5) -> Gosok punggung & sela jari (2) -> Bilas air mengalir (1) -> Keringkan (4).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 6
  {
    id: 206,
    number: 6,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Amanat Cerita Anak / Fabel',
    passageTitle: 'Kancil dan Burung Pipit',
    passageText: 'Di pinggir hutan yang rindang, seekor kancil melihat burung pipit sedang kesulitan membangun sarangnya karena ranting-ranting yang jatuh terbawa angin. Meskipun kancil sedang terburu-buru mencari makan, ia rela meluangkan waktu membantu mengumpulkan ranting-ranting kering dan membimbing burung pipit. Ketika pemburu masuk ke hutan keesokan harinya, burung pipit yang bersarang tinggi di dahan pohon segera berkicau riuh memperingatkan kancil sehingga kancil selamat.',
    questionType: 'single',
    questionText: 'Amanat yang dapat dipetik dari fabel di atas adalah...',
    options: [
      { key: 'A', text: 'Kita harus berburu bersama binatang hutan' },
      { key: 'B', text: 'Kebaikan yang kita lakukan dengan tulus akan mendatangkan pertolongan di masa depan' },
      { key: 'C', text: 'Jangan pernah membangun sarang di tempat tinggi' },
      { key: 'D', text: 'Selalu jauhi kancil saat berada di dalam hutan' }
    ],
    correctAnswer: 'B',
    explanation: 'Amanat fabel menunjukkan bahwa ketulusan kancil menolong burung pipit berbuah kebaikan berupa peringatan bahaya yang menyelamatkan nyawa kancil.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 7
  {
    id: 207,
    number: 7,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Ciri-Ciri Kalimat Efektif',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh kalimat berikut yang merupakan KALIMAT EFEKTIF dan baku!',
    options: [
      { key: 'A', text: 'Siswa-siswi sedang membersihkan halaman sekolah.' },
      { key: 'B', text: 'Banyak siswa-siswa berkumpul di depan panggung aula.' },
      { key: 'C', text: 'Roni rajin belajar agar ia dapat meraih peringkat pertama.' },
      { key: 'D', text: 'Demi untuk adiknya, kakak bekerja keras setiap hari.' }
    ],
    correctMultipleAnswers: ['A', 'C'],
    explanation: '• A efektif (siswa-siswi sudah jamak, tanpa kata "banyak").\n• C efektif dan hemat kata.\n• B tidak efektif (pemborosan kata: banyak + siswa-siswa).\n• D tidak efektif (pleonasme: demi untuk).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 8
  {
    id: 208,
    number: 8,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Perbedaan Fakta dan Opini',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Indonesia merupakan negara kepulauan terbesar di Asia Tenggara',
        'Pemandangan matahari terbit di Pantai Sanur adalah yang terindah di dunia',
        'Candi Borobudur terletak di Kabupaten Magelang, Provinsi Jawa Tengah'
      ],
      columns: ['Fakta', 'Opini']
    },
    correctMatrixAnswers: {
      0: 'Fakta',
      1: 'Opini',
      2: 'Fakta'
    },
    questionText: 'Tentukan apakah setiap pernyataan berikut termasuk Fakta atau Opini!',
    options: [],
    explanation: '• Pernyataan 1 dan 3 terverifikasi secara geografis dan data nyata (Fakta).\n• Pernyataan 2 mengandung kata sifat penilaian subyektif "terindah di dunia" (Opini).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 9
  {
    id: 209,
    number: 9,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menemukan Simpulan Teks Informasi',
    passageTitle: 'Pentingnya Menjaga Kualitas Tidur bagi Pelajar',
    passageText: 'Tidur cukup selama 8–9 jam setiap malam sangat penting bagi anak usia sekolah. Saat tidur, tubuh melepaskan hormon pertumbuhan dan memperbaiki sel-sel yang rusak. Selain itu, tidur nyenyak membantu otak menyimpan memori pelajaran yang dipelajari di sekolah. Anak yang kurang tidur cenderung mudah lelah, sulit berkonsentrasi, dan rentan terserang penyakit.',
    questionType: 'single',
    questionText: 'Simpulan yang tepat dari teks di atas adalah...',
    options: [
      { key: 'A', text: 'Tidur larut malam tidak mempengaruhi konsentrasi belajar anak' },
      { key: 'B', text: 'Tidur yang cukup dan berkualitas sangat penting untuk mendukung pertumbuhan fisik dan daya ingat anak' },
      { key: 'C', text: 'Hormon pertumbuhan hanya aktif jika anak tidur lebih dari 12 jam' },
      { key: 'D', text: 'Anak sekolah tidak perlu berolahraga jika sudah tidur 8 jam' }
    ],
    correctAnswer: 'B',
    explanation: 'Simpulan mencakup hubungan antara tidur cukup (8-9 jam) dengan pertumbuhan fisik dan konsentrasi/daya ingat otak anak.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 10
  {
    id: 210,
    number: 10,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Ungkapan / Idiom Bahasa Indonesia',
    questionType: 'single',
    questionText: 'Meskipun Doni berhasil menjuarai lomba matematika tingkat provinsi, ia tetap ramah kepada teman-temannya dan tidak sombong. Ungkapan yang tepat untuk menggambarkan sikap Doni adalah...',
    options: [
      { key: 'A', text: 'Tinggi hati' },
      { key: 'B', text: 'Rendah hati' },
      { key: 'C', text: 'Besar kepala' },
      { key: 'D', text: 'Keras kepala' }
    ],
    correctAnswer: 'B',
    explanation: '"Rendah hati" bermakna tidak sombong atau tidak angkuh. Sebaliknya "tinggi hati" dan "besar kepala" bermakna sombong.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 11 to 20
  {
    id: 211,
    number: 11,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Kata Baku dan Tidak Baku',
    questionType: 'single',
    questionText: 'Kalimat yang menggunakan seluruh kata baku adalah...',
    options: [
      { key: 'A', text: 'Dokter memberikan resep obat kepada pasien di apotek.' },
      { key: 'B', text: 'Dokter memberikan resep obat kepada pasien di apotik.' },
      { key: 'C', text: 'Kwalitas produk lokal sekarang semakin bertambah baik.' },
      { key: 'D', text: 'Jadual pelajaran semester genap sudah ditempel di mading.' }
    ],
    correctAnswer: 'A',
    explanation: 'Bentuk baku: apotek (bukan apotik), kualitas (bukan kwalitas), jadwal (bukan jadual).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 212,
    number: 12,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Majas / Gaya Bahasa Personifikasi',
    questionType: 'single',
    questionText: 'Kalimat di bawah ini yang bermajas personifikasi adalah...',
    options: [
      { key: 'A', text: 'Ombak berkejar-kejaran menyapa bibir pantai berpasir putih.' },
      { key: 'B', text: 'Wajahnya bersinar terang laksana rembulan di malam purnama.' },
      { key: 'C', text: 'Suara teriakannya menggelegar membelah angkasa raya.' },
      { key: 'D', text: 'Pena ini adalah senjata utama para cendekiawan muda.' }
    ],
    correctAnswer: 'A',
    explanation: 'Majas personifikasi memberikan sifat manusia (berkejar-kejaran, menyapa) pada benda mati (ombak).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 213,
    number: 13,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Peribahasa Indonesia',
    questionType: 'single',
    questionText: 'Peribahasa yang bermakna "orang yang banyak bicara tetapi tidak memiliki ilmu atau keahlian" adalah...',
    options: [
      { key: 'A', text: 'Ada udang di balik batu' },
      { key: 'B', text: 'Tong kosong nyaring bunyinya' },
      { key: 'C', text: 'Air tenang menghanyutkan' },
      { key: 'D', text: 'Bagai pinang dibelah dua' }
    ],
    correctAnswer: 'B',
    explanation: '"Tong kosong nyaring bunyinya" bermakna orang yang sombong banyak bicara tetapi tidak berilmu.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 214,
    number: 14,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Analisis Infografis Pemilahan Sampah',
    imageUrl: SVG_INFOGRAFIS_SAMPAH_BIN,
    imageCaption: 'Infografis Pemilahan Sampah Rumah Tangga dan Sekolah',
    questionType: 'single',
    questionText: 'Berdasarkan infografis di atas, sampah berikut yang harus dimasukkan ke dalam tempat sampah ORGANIK (warna hijau) adalah...',
    options: [
      { key: 'A', text: 'Botol plastik dan kaleng minuman' },
      { key: 'B', text: 'Sisa makanan, kulit buah, dan dedaunan kering' },
      { key: 'C', text: 'Kardus bekas dan kertas koran' },
      { key: 'D', text: 'Baterai bekas dan pecahan kaca' }
    ],
    correctAnswer: 'B',
    explanation: 'Sampah organik adalah materi yang berasal dari sisa makhluk hidup (sisa sayur, kulit buah, daun) yang dapat membusuk menjadi kompos.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 215,
    number: 15,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Watak Tokoh dalam Cerpen',
    passageTitle: 'Kejujuran di Ujung Ujian',
    passageText: 'Saat Bu Guru berkeliling mengawasi ujian akhir, selembar kertas catatan kecil jatuh dari saku celana Dino. Dino bisa saja menyembunyikan kertas itu dengan kakinya. Namun, Dino langsung mengangkat tangan, menyerahkan kertas tersebut, dan meminta maaf kepada Bu Guru bahwa ia tadi sempat tergoda namun memutuskan untuk tidak membukanya. Dino siap menerima konsekuensi apa pun.',
    questionType: 'single',
    questionText: 'Watak tokoh Dino pada kutipan cerita di atas adalah...',
    options: [
      { key: 'A', text: 'Pengecut dan peragu' },
      { key: 'B', text: 'Jujur dan berani bertanggung jawab' },
      { key: 'C', text: 'Cerdas dan suka pamer' },
      { key: 'D', text: 'Licik dan pandai mengelak' }
    ],
    correctAnswer: 'B',
    explanation: 'Tindakan Dino mengakui kesalahan, menyerahkan catatan, dan siap menerima konsekuensi mencerminkan watak jujur dan bertanggung jawab.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 216,
    number: 16,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Hubungan Sebab-Akibat dalam Teks Eksplanasi',
    passageTitle: 'Fenomena Banjir di Kawasan Perkotaan',
    passageText: 'Banjir perkotaan sering kali dipicu oleh berkurangnya daerah resapan air akibat alih fungsi lahan menjadi kawasan permukiman beraspal. Ketika hujan lebat mengguyur, air hujan tidak dapat meresap ke dalam tanah dan mengalir deras di permukaan. Diperparah dengan tumpukan sampah plastik yang menyumbat gorong-gorong saluran drainase, debit air meluap dan menggenangi permukiman warga.',
    questionType: 'single',
    questionText: 'Penyebab utama air hujan tidak dapat meresap ke dalam tanah menurut teks adalah...',
    options: [
      { key: 'A', text: 'Tingginya kadar garam di tanah perkotaan' },
      { key: 'B', text: 'Berkurangnya daerah resapan air akibat alih fungsi lahan beraspal dan beton' },
      { key: 'C', text: 'Panjangnya musim kemarau sebelum musim hujan' },
      { key: 'D', text: 'Terlalu banyaknya pepohonan rindang di pinggir jalan' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraf secara eksplisit menyebutkan: "...dipicu oleh berkurangnya daerah resapan air akibat alih fungsi lahan menjadi kawasan permukiman beraspal".',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 217,
    number: 17,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penulisan Kata Depan (di/ke) vs Imbuhan (di-/ke-)',
    questionType: 'single',
    questionText: 'Penulisan kata depan dan imbuhan yang tepat sesuai kaidah EYD V adalah...',
    options: [
      { key: 'A', text: 'Buku itu disimpan didalam tas sekolah.' },
      { key: 'B', text: 'Buku itu disimpan di dalam tas sekolah.' },
      { key: 'C', text: 'Buku itu di simpan didalam tas sekolah.' },
      { key: 'D', text: 'Buku itu di simpan di dalam tas sekolah.' }
    ],
    correctAnswer: 'B',
    explanation: '• "disimpan" adalah kata kerja pasif (imbuhan di- ditulis serangkai).\n• "di dalam" adalah kata depan penunjuk tempat (di ditulis terpisah).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 218,
    number: 18,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Melengkapi Paragraf Rumpang dengan Konjungsi Tepat',
    questionType: 'single',
    questionText: 'Rani belajar dengan tekun setiap malam (...) ia ingin membanggakan kedua orang tuanya. (...) nilai ulangannya sempurna, Rani tetap rendah hati.\n\nKonjungsi yang tepat untuk melengkapi bagian rumpang di atas adalah...',
    options: [
      { key: 'A', text: 'karena, Meskipun' },
      { key: 'B', text: 'sehingga, Supaya' },
      { key: 'C', text: 'tetapi, Meskipun' },
      { key: 'D', text: 'bahkan, Karena' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat 1 menyatakan alasan/kausalitas (karena), kalimat 2 menyatakan pertentangan/konsesif (Meskipun).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 219,
    number: 19,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Analisis Infografis Gerakan Hemat Air',
    imageUrl: SVG_INFOGRAFIS_HEMAT_AIR_BIN,
    imageCaption: 'Infografis Penghematan Air Bersih untuk Masa Depan',
    questionType: 'complex_multiple',
    questionText: 'Berdasarkan prinsip pelestarian air bersih, pilihlah seluruh tindakan bijak yang BENAR!',
    options: [
      { key: 'A', text: 'Mematikan keran air saat sedang menyikat gigi' },
      { key: 'B', text: 'Membiarkan kran air menyala terus saat mencuci kendaraan' },
      { key: 'C', text: 'Memanfaatkan air bekas cucian beras untuk menyiram tanaman' },
      { key: 'D', text: 'Segera memperbaiki pipa atau kran air yang bocor' }
    ],
    correctMultipleAnswers: ['A', 'C', 'D'],
    explanation: 'Tindakan A, C, dan D merupakan contoh efisiensi pemanfaatan air bersih. Opsi B merupakan bentuk pemborosan air.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 220,
    number: 20,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Evaluasi Kebenaran Informasi Teks Narasi',
    passageTitle: 'Sang Juara Robotika Cilik',
    passageText: 'Rizky, siswa kelas 6 SD dari Desa Sukamaju, berhasil memenangkan kompetisi robotika nasional di Jakarta. Robot penyelamat korban bencana buatannya menggunakan sensor ultrasonik dan mikroprosesor sederhana dari bahan daur ulang. Meskipun fasilitas laboratorium di desanya terbatas, bimbingan sang ayah yang seorang montir bengkel dan ketekunan Rizky membuktikan bahwa mimpi besar dapat diraih dari desa terpencil.',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Rizky memenangkan kejuaraan robotika tingkat internasional di Jepang',
        'Robot buatan Rizky dirancang untuk membantu misi penyelamatan korban bencana',
        'Bahan pembuatan robot Rizky memanfaatkan komponen daur ulang'
      ],
      columns: ['Sesuai Teks', 'Tidak Sesuai Teks']
    },
    correctMatrixAnswers: {
      0: 'Tidak Sesuai Teks',
      1: 'Sesuai Teks',
      2: 'Sesuai Teks'
    },
    questionText: 'Evaluasi kesesuaian setiap pernyataan dengan kutipan teks di atas!',
    options: [],
    explanation: '• Pernyataan 1 Tidak Sesuai (tingkat nasional di Jakarta, bukan internasional di Jepang).\n• Pernyataan 2 Sesuai (robot penyelamat korban bencana).\n• Pernyataan 3 Sesuai (memanfaatkan komponen daur ulang).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 21 to 30
  {
    id: 221,
    number: 21,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Makna Imbuhan pe-an dan ke-an',
    questionType: 'single',
    questionText: 'Kata "perumahan" pada kalimat "Pemerintah membangun perumahan rakyat di pinggiran kota" memiliki makna...',
    options: [
      { key: 'A', text: 'Hal membuat rumah' },
      { key: 'B', text: 'Kumpulan atau kompleks banyak rumah' },
      { key: 'C', text: 'Alat untuk membangun rumah' },
      { key: 'D', text: 'Orang yang tinggal di rumah' }
    ],
    correctAnswer: 'B',
    explanation: 'Imbuhan per-...-an pada kata "perumahan" bermakna kumpulan atau kompleks tempat tinggal banyak rumah.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 222,
    number: 22,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Sinonim dan Antonim Kata Kontekstual',
    questionType: 'single',
    questionText: 'Sinonim dari kata "intensif" pada kalimat "Para atlet menjalani pelatihan intensif menjelang kejuaraan" adalah...',
    options: [
      { key: 'A', text: 'Santai' },
      { key: 'B', text: 'Sungguh-sungguh dan mendalam' },
      { key: 'C', text: 'Singkat dan terburu-buru' },
      { key: 'D', text: 'Bebas dan terbuka' }
    ],
    correctAnswer: 'B',
    explanation: '"Intensif" bermakna dilakukan secara sungguh-sungguh, terus-menerus, dan mendalam untuk mencapai hasil maksimal.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 223,
    number: 23,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Pengubahan Kalimat Langsung Menjadi Tidak Langsung',
    questionType: 'single',
    questionText: 'Ibu berkata, "Dina, tolong rapikan tempat tidurmu sebelum berangkat ke sekolah!"\n\nBentuk kalimat tidak langsung yang tepat adalah...',
    options: [
      { key: 'A', text: 'Ibu menyuruh Dina merapikan tempat tidurnya sebelum berangkat ke sekolah.' },
      { key: 'B', text: 'Ibu berkata bahwa Dina sedang merapikan tempat tidur.' },
      { key: 'C', text: 'Dina meminta Ibu merapikan tempat tidurnya.' },
      { key: 'D', text: 'Ibu bertanya apakah Dina sudah merapikan tempat tidur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat perintah langsung diubah menjadi kalimat tidak langsung dengan menggunakan kata kerja pemicu "menyuruh/meminta" serta mengubah kata ganti "tempat tidurmu" menjadi "tempat tidurnya".',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 224,
    number: 24,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Latar Cerita',
    passageTitle: 'Senja di Dermaga Nelayan',
    passageText: 'Lampu-lampu perahu mulai dinyalakan satu per satu saat semburat jingga kemerahan meredup di ufuk barat. Angin laut yang dingin berembus perlahan membawa aroma garam dan ikan asin. Pak Hasan mengencangkan simpul tali perahu motornya sambil memeriksa persediaan jaring dan solar untuk melaut malam nanti.',
    questionType: 'single',
    questionText: 'Latar waktu dan tempat pada kutipan cerita di atas adalah...',
    options: [
      { key: 'A', text: 'Pagi hari di tengah sawah' },
      { key: 'B', text: 'Siang hari di pasar ikan' },
      { key: 'C', text: 'Sore menjelang malam (senja) di dermaga pantai' },
      { key: 'D', text: 'Tengah malam di atas kapal pesiar' }
    ],
    correctAnswer: 'C',
    explanation: 'Kata kunci "semburat jingga di ufuk barat" menunjukkan waktu senja (sore menjelang malam), dan "lampu perahu, aroma garam, tali perahu" menunjukkan dermaga pantai.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 225,
    number: 25,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Pantun Nasihat dan Makna Rima',
    questionType: 'single',
    questionText: 'Pohon randu berdaun lebat,\nTumbuh subur di tepi kolam.\nJikalau ingin tubuhmu sehat,\nJangan suka bergadang malam.\n\nPesan utama dari pantun di atas adalah...',
    options: [
      { key: 'A', text: 'Menanam pohon randu di tepi kolam sangat bermanfaat' },
      { key: 'B', text: 'Menjaga kesehatan tubuh dengan menghindari kebiasaan tidur larut malam' },
      { key: 'C', text: 'Tidur di tepi kolam membuat tubuh menjadi segar' },
      { key: 'D', text: 'Pohon randu dapat dijadikan obat alami' }
    ],
    correctAnswer: 'B',
    explanation: 'Isi dan amanat pantun berada pada baris ke-3 dan ke-4: anjuran untuk tidak bergadang agar tubuh tetap sehat.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 226,
    number: 26,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penggunaan Tanda Hubung (-) yang Tepat',
    questionType: 'single',
    questionText: 'Penggunaan tanda hubung (-) yang benar menurut EYD V terdapat pada kalimat...',
    options: [
      { key: 'A', text: 'Kakak membelikan mainan serba-baru untuk adik.' },
      { key: 'B', text: 'Pertandingan sepak bola antar-sekolah berlangsung seru.' },
      { key: 'C', text: 'Bangsa Indonesia memperingati HUT ke-80 Kemerdekaan RI.' },
      { key: 'D', text: 'Siswa-siswi se-Indonesia mengikuti olimpiade sains.' }
    ],
    correctAnswer: 'C',
    explanation: 'Tanda hubung digunakan untuk merangkaikan unsur huruf dan angka pada penulisan ordinal: "ke-80". (Opsi D juga menggunakan tanda hubung pada kata majemuk, tetapi C adalah penerapan baku penulisan angka ordinal).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 227,
    number: 27,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Struktur Teks Laporan Hasil Pengamatan',
    questionType: 'single',
    questionText: 'Bagian teks laporan hasil pengamatan yang berisi informasi waktu, tempat, dan obyek yang diamati disebut...',
    options: [
      { key: 'A', text: 'Definisi umum / Pendahuluan' },
      { key: 'B', text: 'Deskripsi manfaat' },
      { key: 'C', text: 'Kesimpulan akhir' },
      { key: 'D', text: 'Rekomendasi tindak lanjut' }
    ],
    correctAnswer: 'A',
    explanation: 'Bagian pendahuluan/definisi umum memuat informasi dasar obyek, lokasi, waktu pelaksanaan, dan tujuan pengamatan.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 228,
    number: 28,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Analisis Ciri Teks Fiksi vs Nonfiksi',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh karya tulis berikut yang termasuk ke dalam kategori KARYA NONFIKSI!',
    options: [
      { key: 'A', text: 'Buku Biografi Pahlawan Nasional Ir. Soekarno' },
      { key: 'B', text: 'Dongeng Si Kancil dan Buaya Sakti' },
      { key: 'C', text: 'Buku Ensiklopedia Tata Surya dan Alam Semesta' },
      { key: 'D', text: 'Laporan Hasil Percobaan Fotosintesis Tumbuhan' }
    ],
    correctMultipleAnswers: ['A', 'C', 'D'],
    explanation: 'Nonfiksi didasarkan pada data faktual dan peristiwa nyata (Biografi, Ensiklopedia, Laporan Ilmiah). Dongeng (B) adalah cerita fiksi rekaan imajinatif.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 229,
    number: 29,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penalaran Makna Tersirat Puisi Anak',
    passageTitle: 'Bintang Kecil di Langit Dusun',
    passageText: 'Di bawah temaram pelita bambu,\nKutatap buku usang penuh coretan rindu.\nPeluh menetes tak surutkan langkahku,\nKugenggam pena, kukejar cita-citaku.\nKelak kuingin terangi negeriku,\nSeperti bintang di langit yang syahdu.',
    questionType: 'single',
    questionText: 'Makna tersirat dari puisi di atas adalah...',
    options: [
      { key: 'A', text: 'Anak yang gemar mengamati bintang di malam hari' },
      { key: 'B', text: 'Semangat pantang menyerah dalam belajar demi menggapai cita-cita luhur' },
      { key: 'C', text: 'Kesedihan seorang anak karena tidak memiliki lampu listrik' },
      { key: 'D', text: 'Harapan agar bintang jatuh memberikan kekayaan' }
    ],
    correctAnswer: 'B',
    explanation: 'Larik "Peluh menetes tak surutkan langkahku, kugenggam pena, kukejar cita-citaku" melambangkan daya juang dan tekad belajar tinggi.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 230,
    number: 30,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Evaluasi Unsur Intrinsik Cerita Fabel',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Tokoh protagonis adalah tokoh yang membawakan sifat baik dan patut diteladani',
        'Latar suasana menggambarkan keadaan perasaan atau atmosfer dalam cerita',
        'Amanat cerita fabel selalu disampaikan secara tersurat pada judul cerita'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran setiap pernyataan mengenai unsur intrinsik karya sastra!',
    options: [],
    explanation: '1) Protagonis = tokoh berwatak baik (Benar).\n2) Latar suasana = atmosfer cerita (Benar).\n3) Amanat fabel dapat tersurat maupun tersirat dalam dialog/tindakan tokoh, bukan selalu pada judul (Salah).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  }
];

/**
 * PAKET 02: PEMANTAPAN (Pengayaan Teks Narasi & Tata Bahasa) - 30 Soal
 */
export const QUESTIONS_BIN_02: Question[] = [
  // 1
  {
    id: 231,
    number: 1,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Gagasan Utama Paragraf Induktif',
    passageTitle: 'Keanekaragaman Hayati Hutan Hujan Tropis',
    passageText: 'Pohon-pohon raksasa menjulang tinggi membentuk kanopi hijau. Ratusan jenis burung berkicau merdu bersahut-sahutan di dahan pepohonan. Berbagai mamalia endemik, serangga langka, dan flora obat tumbuh subur terlindungi oleh iklim lembap sepanjang tahun. Oleh karena itu, hutan hujan tropis Indonesia patut dijaga kelestariannya sebagai paru-paru dunia.',
    questionType: 'single',
    questionText: 'Gagasan utama paragraf di atas terletak pada...',
    options: [
      { key: 'A', text: 'Awal paragraf (deduktif)' },
      { key: 'B', text: 'Akhir paragraf (induktif)' },
      { key: 'C', text: 'Tengah paragraf (ineratif)' },
      { key: 'D', text: 'Awal dan akhir paragraf (campuran)' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraf memaparkan fakta-fakta keanekaragaman hayati terlebih dahulu, lalu diakhiri oleh kesimpulan utama yang ditandai dengan konjungsi "Oleh karena itu..." di akhir paragraf (induktif).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 2 to 10
  {
    id: 232,
    number: 2,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penulisan Singkatan dan Gelar Sesuai EYD V',
    questionType: 'single',
    questionText: 'Penulisan gelar akademik yang benar menurut kaidah EYD V adalah...',
    options: [
      { key: 'A', text: 'Prof. Dr. Ir. H. Ahmad Fauzi, M.Pd.' },
      { key: 'B', text: 'Prof, Dr, Ir, H Ahmad Fauzi MPd' },
      { key: 'C', text: 'Prof. Dr. Ir. H. Ahmad Fauzi. M.Pd' },
      { key: 'D', text: 'Prof Dr Ir H Ahmad Fauzi, M,Pd,' }
    ],
    correctAnswer: 'A',
    explanation: 'Gelar di depan nama disingkat dengan tanda titik (Prof. Dr. Ir. H.). Gelar di belakang nama dipisahkan dengan tanda koma (,) dari nama diri dan tiap singkatan diakhiri tanda titik (M.Pd.).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 233,
    number: 3,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menemukan Informasi Tersurat dalam Teks',
    passageTitle: 'Batik Tulis Warisan Budaya Nusantara',
    passageText: 'Batik tulis merupakan karya seni rupa tradisional yang dibuat dengan cara menorehkan cairan malam panas menggunakan alat bernama canting pada sehelai kain mori. Proses pembuatan batik tulis halus membutuhkan waktu berkisar antara dua minggu hingga beberapa bulan tergantung tingkat kerumitan motif dan jumlah pewarnaan alami yang diaplikasikan.',
    questionType: 'single',
    questionText: 'Alat yang digunakan untuk menorehkan cairan malam panas pada kain mori adalah...',
    options: [
      { key: 'A', text: 'Kuas lukis' },
      { key: 'B', text: 'Canting' },
      { key: 'C', text: 'Pahat kayu' },
      { key: 'D', text: 'Cetakan cap tembaga' }
    ],
    correctAnswer: 'B',
    explanation: 'Teks menyatakan secara tersurat: "...menorehkan cairan malam panas menggunakan alat bernama canting".',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 234,
    number: 4,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Memperbaiki Kalimat Rancu Menjadi Efektif',
    questionType: 'single',
    questionText: 'Perhatikan kalimat rancu berikut:\n"Bagi seluruh peserta ujian diharapkan agar supaya hadir tepat waktu."\n\nPerbaikan kalimat di atas agar menjadi kalimat efektif adalah...',
    options: [
      { key: 'A', text: 'Seluruh peserta ujian diharapkan hadir tepat waktu.' },
      { key: 'B', text: 'Bagi seluruh peserta ujian diharapkan agar hadir tepat waktu.' },
      { key: 'C', text: 'Semua peserta-peserta ujian agar supaya hadir tepat waktu.' },
      { key: 'D', text: 'Untuk peserta ujian diharapkan agar supaya hadir tepat waktu.' }
    ],
    correctAnswer: 'A',
    explanation: 'Menghilangkan kata depan "Bagi" (agar subjek jelas) dan membuang kata pleonasme "agar supaya" menghasilkan kalimat lugas dan efektif.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 235,
    number: 5,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Makna Kiasan Ungkapan Bertingkat',
    questionType: 'single',
    questionText: 'Ketika menghadapi musibah banjir yang melanda desanya, Pak Burhan tetap lapang dada dan gigih membantu para tetangga yang mengungsi. Arti ungkapan "lapang dada" adalah...',
    options: [
      { key: 'A', text: 'Merasa bangga' },
      { key: 'B', text: 'Sabar dan ikhlas menerima keadaan' },
      { key: 'C', text: 'Bernapas lega' },
      { key: 'D', text: 'Merasa putus asa' }
    ],
    correctAnswer: 'B',
    explanation: '"Lapang dada" adalah ungkapan yang bermakna sabar, ikhlas, dan berbesar hati menerima kenyataan atau cobaan.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 6 to 15
  {
    id: 236,
    number: 6,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Konflik dan Penyelesaian dalam Cerpen',
    passageTitle: 'Gelas Kaca Kesayangan Nenek',
    passageText: 'Saat bermain bola di dalam rumah bersama adiknya, tendangan Bayu mengenai meja hias dan menjatuhkan gelas kaca antik peninggalan kakek. Gelas itu hancur berkeping-keping. Adiknya menangis ketakutan dimarahi. Bayu menenangkan adiknya, mengambil sapu untuk membersihkan pecahan kaca agar tidak melukai siapa pun, lalu dengan berani menghampiri nenek untuk menceritakan kejadian sebenarnya dan meminta maaf.',
    questionType: 'single',
    questionText: 'Penyelesaian konflik yang dilakukan tokoh Bayu adalah...',
    options: [
      { key: 'A', text: 'Menyalahkan adiknya di hadapan nenek' },
      { key: 'B', text: 'Menyembunyikan pecahan kaca di bawah karpet' },
      { key: 'C', text: 'Membersihkan pecahan kaca, menenangkan adiknya, serta jujur meminta maaf kepada nenek' },
      { key: 'D', text: 'Pergi keluar rumah dan membiarkan adiknya menangis' }
    ],
    correctAnswer: 'C',
    explanation: 'Penyelesaian konflik digambarkan dengan tindakan Bayu membersihkan pecahan, melindungi adiknya, dan jujur meminta maaf.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 237,
    number: 7,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Ciri-Ciri Teks Eksplanasi Ilmiah',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh ciri utama yang dimiliki oleh sebuah TEKS EKSPLANASI!',
    options: [
      { key: 'A', text: 'Memuat informasi berdasarkan fakta ilmiah (bukan fiksi rekaan)' },
      { key: 'B', text: 'Menjelaskan hubungan sebab-akibat terjadinya suatu fenomena alam atau sosial' },
      { key: 'C', text: 'Memiliki struktur pernyataan umum, deretan penjelas, dan interpretasi/simpulan' },
      { key: 'D', text: 'Menggunakan tokoh binatang yang bertingkah laku seperti manusia' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'A, B, dan C adalah karakteristik teks eksplanasi. Opsi D merupakan ciri cerita fabel.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 238,
    number: 8,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Jenis Paragraf Berdasarkan Isi',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Teks yang bertujuan membujuk pembaca agar melakukan sesuatu (misal: ajakan membuang sampah)',
        'Teks yang menggambarkan bentuk, warna, dan suasana suatu objek secara mendetail',
        'Teks yang menceritakan urutan peristiwa secara kronologis dengan tokoh dan alur'
      ],
      columns: ['Persuasi', 'Deskripsi', 'Narasi']
    },
    correctMatrixAnswers: {
      0: 'Persuasi',
      1: 'Deskripsi',
      2: 'Narasi'
    },
    questionText: 'Jodohkan karakteristik paragraf berikut dengan jenis teks yang sesuai!',
    options: [],
    explanation: '• Membujuk = Persuasi.\n• Menggambarkan indra = Deskripsi.\n• Menceritakan peristiwa urut = Narasi.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 239,
    number: 9,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penggunaan Tanda Petik ("...") Kalimat Langsung',
    questionType: 'single',
    questionText: 'Penulisan tanda petik pada kalimat langsung yang tepat adalah...',
    options: [
      { key: 'A', text: '"Kapan kita berangkat ke museum?" tanya Farhan.' },
      { key: 'B', text: '"Kapan kita berangkat ke museum"? tanya Farhan.' },
      { key: 'C', text: 'Kapan kita berangkat ke museum? "tanya Farhan."' },
      { key: 'D', text: '"Kapan kita berangkat ke museum", tanya Farhan?' }
    ],
    correctAnswer: 'A',
    explanation: 'Tanda tanya (?) atau tanda seru (!) ditempatkan di dalam tanda petik penutup ("...?") sebelum keterangan pengiring.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 240,
    number: 10,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menganalisis Peribahasa Kontekstual',
    questionType: 'single',
    questionText: 'Pak Danang selalu berusaha menabung sedikit demi sedikit dari hasil panen padinya. Lama-kelamaan tabungannya cukup untuk merenovasi rumah. Peribahasa yang sesuai dengan perbuatan Pak Danang adalah...',
    options: [
      { key: 'A', text: 'Besar pasak daripada tiang' },
      { key: 'B', text: 'Sedikit-sedikit, lama-lama menjadi bukit' },
      { key: 'C', text: 'Bagai air di daun talas' },
      { key: 'D', text: 'Nasi sudah menjadi bubur' }
    ],
    correctAnswer: 'B',
    explanation: '"Sedikit-sedikit, lama-lama menjadi bukit" menggambarkan hasil ketekunan mengumpulkan sesuatu yang kecil hingga menjadi besar.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 11 to 20
  {
    id: 241,
    number: 11,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Kata Berimbuhan meN- yang Mengalami Peluluhan',
    questionType: 'single',
    questionText: 'Bentuk kata berimbuhan meN- yang benar pada kata dasar "pesona", "tulis", "sapu", dan "kunci" adalah...',
    options: [
      { key: 'A', text: 'Mempesona, menulis, menyapu, mengunci' },
      { key: 'B', text: 'Memesona, menulis, menyapu, mengunci' },
      { key: 'C', text: 'Mempesona, mentulis, mensapu, mengunci' },
      { key: 'D', text: 'Memesona, mentulis, menyapu, mengkunci' }
    ],
    correctAnswer: 'B',
    explanation: 'Huruf K, T, S, P di awal kata dasar luluh ketika diberi awalan meN-:\n• meN- + pesona = memesona\n• meN- + tulis = menulis\n• meN- + sapu = menyapu\n• meN- + kunci = mengunci.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 242,
    number: 12,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Majas Metafora dalam Kalimat',
    questionType: 'single',
    questionText: 'Kalimat berikut yang mengandung majas Metafora adalah...',
    options: [
      { key: 'A', text: 'Perpustakaan adalah gudang ilmu bagi para siswa yang haus pengetahuan.' },
      { key: 'B', text: 'Nyiur melambai-lambai di tepi pantai yang indah.' },
      { key: 'C', text: 'Keringatnya mengucur deras seperti air terjun.' },
      { key: 'D', text: 'Wajahnya pucat pasi bak mayat hidup.' }
    ],
    correctAnswer: 'A',
    explanation: 'Majas metafora membandingkan dua hal secara langsung tanpa kata pembanding (perpustakaan disamakan langsung dengan "gudang ilmu").',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 243,
    number: 13,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Kalimat Utama Paragraf Campuran',
    passageTitle: 'Pentingnya Sarapan Pagi',
    passageText: 'Sarapan pagi memberikan pasokan energi yang dibutuhkan tubuh setelah berpuasa semalaman saat tidur. Kadar glukosa darah kembali stabil sehingga daya konsentrasi otak meningkat selama mengikuti pelajaran di kelas. Selain itu, sarapan mencegah rasa lapar berlebih di siang hari. Oleh sebab itu, memulai hari dengan sarapan bergizi sangat bermanfaat bagi kesehatan dan prestasi belajar siswa.',
    questionType: 'single',
    questionText: 'Paragraf di atas tergolong paragraf campuran karena...',
    options: [
      { key: 'A', text: 'Hanya memiliki satu kalimat penjelas' },
      { key: 'B', text: 'Gagasan utama ditegaskan pada awal dan akhir paragraf' },
      { key: 'C', text: 'Tidak memiliki kalimat utama' },
      { key: 'D', text: 'Memuat opini tanpa fakta ilmiah' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraf campuran menempatkan ide pokok di awal paragraf dan menegaskannya kembali di akhir paragraf sebagai kesimpulan.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 244,
    number: 14,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penulisan Kata Gabung (Majemuk)',
    questionType: 'single',
    questionText: 'Penulisan gabungan kata yang benar terdapat pada kalimat...',
    options: [
      { key: 'A', text: 'Warga desa bekerja sama membersihkan balai pertemuan.' },
      { key: 'B', text: 'Warga desa bekerjasama membersihkan balai pertemuan.' },
      { key: 'C', text: 'Semua siswa harus bertanggungjawab atas kebersihan kelas.' },
      { key: 'D', text: 'Ibu membeli kacamata dan saputangan di toko baru.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata majemuk ditulis terpisah jika hanya mendapat awalan atau akhiran ("bekerja sama", "bertanggung jawab"). Ditulis serangkai jika mendapat awalan dan akhiran sekaligus ("mempertanggungjawabkan").',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 245,
    number: 15,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Karya Puisi dan Suasana yang Dibangun',
    passageTitle: 'Ibu Tercinta',
    passageText: 'Dalam hening malam kau tengadahkan tangan,\nMenyebut namaku dalam bait doa pengharapan.\nTak pernah kau keluhkan peluh dan lelah,\nDemi senyum anakmu merekah indah.',
    questionType: 'single',
    questionText: 'Suasana yang tergambar dalam bait puisi di atas adalah...',
    options: [
      { key: 'A', text: 'Gembira dan riang' },
      { key: 'B', text: 'Khidmat, haru, dan penuh kasih sayang' },
      { key: 'C', text: 'Tegang dan menakutkan' },
      { key: 'D', text: 'Marah dan kecewa' }
    ],
    correctAnswer: 'B',
    explanation: 'Larik-larik doa dalam keheningan malam dan pengorbanan ibu memunculkan suasana khidmat, haru, dan ketulusan kasih sayang.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 16 to 30
  {
    id: 246,
    number: 16,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Membedakan Kalimat Utama dan Kalimat Penjelas',
    questionType: 'single',
    questionText: 'Perhatikan kalimat-kalimat berikut:\n(1) Tanaman lidah buaya memiliki banyak khasiat untuk kesehatan.\n(2) Gel lidah buaya dapat menenangkan kulit yang terbakar sinar matahari.\n(3) Kandungan vitamin di dalamnya mampu mempercepat penyembuhan luka gores.\n(4) Selain itu, sari lidah buaya baik untuk menjaga kelembapan rambut.\n\nKalimat utama dari paragraf di atas adalah nomor...',
    options: [
      { key: 'A', text: '(1)' },
      { key: 'B', text: '(2)' },
      { key: 'C', text: '(3)' },
      { key: 'D', text: '(4)' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat (1) bersifat umum memuat ide pokok (banyak khasiat), sedangkan kalimat (2), (3), dan (4) merupakan penjelas spesifik.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 247,
    number: 17,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Pertanyaan Sesuai Isi Teks (ADiKSiMBa)',
    passageTitle: 'Giat Menanam Pohon di Lereng Gunung',
    passageText: 'Pada hari Minggu pagi, 200 relawan pecinta alam bersama warga Desa Candi menanam 1.000 bibit pohon pinus dan beringin di lereng Gunung Merbabu. Kegiatan reboisasi ini bertujuan untuk mencegah bencana tanah longsor dan menjaga kelestarian mata air pegunungan saat musim hujan tiba.',
    questionType: 'single',
    questionText: 'Pertanyaan yang jawabannya TIDAK termuat dalam teks di atas adalah...',
    options: [
      { key: 'A', text: 'Kapan kegiatan penanaman bibit pohon dilakukan?' },
      { key: 'B', text: 'Berapa biaya yang dihabiskan untuk membeli bibit pohon tersebut?' },
      { key: 'C', text: 'Di mana lokasi penanaman bibit pohon berlangsung?' },
      { key: 'D', text: 'Mengapa kegiatan reboisasi tersebut dilaksanakan?' }
    ],
    correctAnswer: 'B',
    explanation: 'Biaya pembelian bibit tidak disebutkan dalam teks. (Waktu = Minggu pagi; Lokasi = Lereng Merbabu Desa Candi; Tujuan = cegah longsor & jaga mata air).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 248,
    number: 28,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penalaran Hubungan Analogi Kata',
    questionType: 'single',
    questionText: 'Guru : Sekolah = Dokter : ...',
    options: [
      { key: 'A', text: 'Obat' },
      { key: 'B', text: 'Pasien' },
      { key: 'C', text: 'Rumah Sakit' },
      { key: 'D', text: 'Stetoskop' }
    ],
    correctAnswer: 'C',
    explanation: 'Hubungan analogi tempat bertugas: Guru bertugas di Sekolah, sebagaimana Dokter bertugas di Rumah Sakit.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 249,
    number: 19,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Analisis Sudut Pandang Pengarang dalam Cerita',
    passageTitle: 'Langkah Pertama di Sekolah Baru',
    passageText: 'Kutatap gerbang sekolah baruku dengan perasaan berdebar-debar. Aku menggenggam erat tali ranselku sambil melangkah perlahan melewati kerumunan siswa yang sedang bercengkerama. Dalam hatiku, aku berjanji akan belajar lebih giat dan menjalin banyak pertemanan baru di sini.',
    questionType: 'single',
    questionText: 'Kutipan cerita di atas menggunakan sudut pandang...',
    options: [
      { key: 'A', text: 'Orang pertama tokoh utama (Akuan)' },
      { key: 'B', text: 'Orang pertama tokoh sampingan' },
      { key: 'C', text: 'Orang ketiga serba tahu (Diaan)' },
      { key: 'D', text: 'Orang ketiga pengamat' }
    ],
    correctAnswer: 'A',
    explanation: 'Penggunaan kata ganti "aku", "kutatap", dan "hatiku" yang menceritakan pengalaman batin diri sendiri menandakan sudut pandang orang pertama tokoh utama.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 250,
    number: 20,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Evaluasi Kebenaran Analisis Gaya Bahasa dan Kalimat',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Majas hiperbola menggunakan ungkapan yang melebih-lebihkan kenyataan',
        'Kalimat tanya retoris adalah kalimat tanya yang tidak memerlukan jawaban',
        'Kata "olahraga" dan "beasiswa" menurut EYD V ditulis terpisah'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran setiap kaidah kebahasaan berikut!',
    options: [],
    explanation: '1) Hiperbola = melebih-lebihkan (Benar).\n2) Tanya retoris = tidak butuh jawaban (Benar).\n3) "Olahraga" dan "beasiswa" adalah kata majemuk senyawa yang ditulis serangkai (Salah).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 21 to 30
  {
    id: 251,
    number: 21,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Pernyataan Sesuai Isi Formulir Pendaftaran',
    questionType: 'single',
    questionText: 'Data yang wajib diisi dengan benar pada lembar formulir pendaftaran anggota perpustakaan daerah adalah...',
    options: [
      { key: 'A', text: 'Nama lengkap, Nomor Induk Siswa, alamat rumah, dan nomor telepon kontak' },
      { key: 'B', text: 'Nama hewan peliharaan dan warna pakaian favorit' },
      { key: 'C', text: 'Jumlah uang saku harian' },
      { key: 'D', text: 'Merek sepatu yang dipakai' }
    ],
    correctAnswer: 'A',
    explanation: 'Formulir perpustakaan memerlukan identitas resmi yang valid: nama lengkap, NISN/NIS, alamat rumah, dan nomor telepon yang bisa dihubungi.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 252,
    number: 22,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Makna Tersirat dari Percakapan Tokoh',
    passageTitle: 'Dialog Persiapan Pentas Seni',
    passageText: 'Roni: "Bayu, kamu sudah latihan drama untuk besok?"\nBayu: (Tersenyum sambil menggaruk kepala yang tidak gatal) "Naskahnya masih di dalam laci meja belajarku, Ron."\nRoni: "Wah, kalau begitu pulang sekolah ini kita latihan bersama di rumahku ya!"',
    questionType: 'single',
    questionText: 'Makna tersirat dari jawaban Bayu adalah...',
    options: [
      { key: 'A', text: 'Bayu sudah sangat siap dan hafal naskah' },
      { key: 'B', text: 'Bayu belum membaca dan belum menghafal naskah dramanya' },
      { key: 'C', text: 'Bayu menolak ikut pementasan drama' },
      { key: 'D', text: 'Bayu ingin menjadi sutradara drama' }
    ],
    correctAnswer: 'B',
    explanation: 'Tindakan menggaruk kepala dan mengatakan naskah masih di laci menunjukkan Bayu belum mempersiapkan diri.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 253,
    number: 23,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penggunaan Huruf Miring Menurut EYD V',
    questionType: 'single',
    questionText: 'Penggunaan huruf miring yang benar menurut kaidah EYD V adalah...',
    options: [
      { key: 'A', text: 'Ayah membaca surat kabar Kompas setiap pagi.' },
      { key: 'B', text: 'Ayah membaca surat kabar *Kompas* setiap pagi.' },
      { key: 'C', text: 'Kata *online* dalam bahasa Indonesia dipadankan dengan kata dalam jaringan atau *daring*.' },
      { key: 'D', text: 'Buku *Laskar Pelangi* ditulis oleh Andrea Hirata.' }
    ],
    correctAnswer: 'D',
    explanation: 'Huruf miring dipakai untuk menulis judul buku, nama majalah, atau nama surat kabar yang dikutip dalam naskah: *Laskar Pelangi*.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 254,
    number: 24,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menyusun Kalimat Acak Menjadi Paragraf Padu',
    questionType: 'single',
    questionText: 'Perhatikan kalimat-kalimat acak berikut:\n(1) Setelah beberapa hari, biji mulai berkecambah mengeluarkan tunas hijau.\n(2) Siapkan pot berisi tanah gembur yang telah dicampur pupuk kompos.\n(3) Siramlah tanah secara teratur dengan air secukupnya pada pagi dan sore.\n(4) Masukkan beberapa butir biji kacang hijau ke dalam lubang tanah sedalam 2 cm.\n\nUrutan kalimat yang tepat agar menjadi paragraf prosedur yang padu adalah...',
    options: [
      { key: 'A', text: '(2) - (4) - (3) - (1)' },
      { key: 'B', text: '(2) - (3) - (4) - (1)' },
      { key: 'C', text: '(4) - (2) - (3) - (1)' },
      { key: 'D', text: '(1) - (2) - (4) - (3)' }
    ],
    correctAnswer: 'A',
    explanation: 'Urutan logis penanaman: Siapkan media pot (2) -> Masukkan biji (4) -> Siram teratur (3) -> Hasil perkecambahan (1).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 255,
    number: 25,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Pasangan Kata Antonim Tepat',
    questionType: 'single',
    questionText: 'Pasangan kata di bawah ini yang merupakan pasangan ANTONIM (lawan kata) adalah...',
    options: [
      { key: 'A', text: 'Cerdas - Pandai' },
      { key: 'B', text: 'Tradisional - Modern' },
      { key: 'C', text: 'Indah - Permai' },
      { key: 'D', text: 'Hemat - Irit' }
    ],
    correctAnswer: 'B',
    explanation: '"Tradisional" berlawanan makna dengan "Modern". Pasangan lainnya merupakan sinonim.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 256,
    number: 26,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Makna Simbolis dalam Karya Sastra',
    passageTitle: 'Secercah Cahaya Lentera',
    passageText: 'Dalam pekatnya kabut ketidaktahuan,\nBuku adalah lentera yang menuntun jalan.\nSetiap lembarnya membuka jendela dunia,\nMenepis gelap, menghadirkan asa.',
    questionType: 'single',
    questionText: 'Kata "lentera" pada puisi di atas melambangkan...',
    options: [
      { key: 'A', text: 'Alat penerang berbahan bakar minyak tanah' },
      { key: 'B', text: 'Ilmu pengetahuan dan petunjuk kebenaran yang menerangi kehidupan' },
      { key: 'C', text: 'Harta benda yang berkilauan' },
      { key: 'D', text: 'Matahari di siang hari' }
    ],
    correctAnswer: 'B',
    explanation: 'Dalam konteks puisi, lentera menjadi simbol ilmu pengetahuan yang menuntun dan menerangi ketidaktahuan manusia.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 257,
    number: 27,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Kalimat Majemuk Setara Hubungan Penggabungan',
    questionType: 'single',
    questionText: 'Kalimat majemuk setara dengan konjungsi hubungan penggabungan yang tepat adalah...',
    options: [
      { key: 'A', text: 'Rian suka bermain catur, sedangkan Danu lebih gemar bermain sepak bola.' },
      { key: 'B', text: 'Ayah membaca koran dan Ibu menyiram bunga di halaman depan.' },
      { key: 'C', text: 'Kakak ingin membeli laptop baru tetapi tabungannya belum cukup.' },
      { key: 'D', text: 'Kamu memilih melanjutkan les musik atau les bahasa Inggris?' }
    ],
    correctAnswer: 'B',
    explanation: 'Konjungsi "dan" menyatakan hubungan penggabungan/penjumlahan antar-klausa setara.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 258,
    number: 28,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Pernyataan Analitis Kebahasaan PUEBI',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh penulisan kata serapan asing yang BAKU menurut KBBI!',
    options: [
      { key: 'A', text: 'Aktivitas (bukan aktifitas)' },
      { key: 'B', text: 'Kreativitas (bukan kreatifitas)' },
      { key: 'C', text: 'Teknologi (bukan tehnologi)' },
      { key: 'D', text: 'Sistim (bukan sistem)' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'Bentuk baku: aktivitas, kreativitas, teknologi. Bentuk baku untuk opsi D adalah sistem (bukan sistim).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 259,
    number: 29,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Prediksi Kejadian Berdasarkan Alur Cerita',
    passageTitle: 'Ulat Sutra yang Tekun',
    passageText: 'Seekor ulat sutra kecil terus memakan daun murbei segar tanpa henti selama berminggu-minggu. Ketika tubuhnya sudah membesar dan energinya cukup, ia memanjat dahan tertinggi, lalu mulai memintal benang sutra halus membungkus seluruh tubuhnya menjadi sebuah kepompong yang kokoh.',
    questionType: 'single',
    questionText: 'Peristiwa yang kemungkinan besar akan terjadi selanjutnya pada cerita di atas adalah...',
    options: [
      { key: 'A', text: 'Ulat sutra akan tenggelam ke dalam kolam' },
      { key: 'B', text: 'Ulat sutra akan keluar dari kepompong menjadi seekor ngengat/kupu-kupu yang indah' },
      { key: 'C', text: 'Kepompong akan berubah menjadi daun murbei baru' },
      { key: 'D', text: 'Ulat sutra kembali mengecil menjadi telur' }
    ],
    correctAnswer: 'B',
    explanation: 'Siklus metamorfosis serangga: ulat (larva) -> kepompong (pupa) -> keluar menjadi imago (kupu-kupu/ngengat).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 260,
    number: 30,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Evaluasi Kaidah Tanda Baca Titik Dua dan Titik Koma',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Tanda titik dua (:) dipakai pada akhir pernyataan lengkap yang diikuti rincian pemerian',
        'Tanda titik koma (;) dapat dipakai sebagai pengganti kata penghubung untuk memisahkan klausa setara',
        'Tanda petik tunggal (\'...\') dipakai untuk mengapit judul lagu dan artikel'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran setiap aturan penulisan tanda baca menurut EYD V!',
    options: [],
    explanation: '1) Titik dua untuk rincian setelah pernyataan lengkap (Benar).\n2) Titik koma pengganti konjungsi klausa setara (Benar).\n3) Judul lagu dan artikel diapit tanda petik ganda ("..."), bukan petik tunggal (Salah).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  }
];

/**
 * PAKET 03: SIMULASI REALISTIS (Standar Asesmen Nasional Pusmendik) - 30 Soal
 */
export const QUESTIONS_BIN_03: Question[] = [
  // 1
  {
    id: 261,
    number: 1,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Ide Pokok Teks Narasi Sejarah',
    passageTitle: 'Perjuangan Ki Hajar Dewantara',
    passageText: 'Raden Mas Soewardi Soerjaningrat atau yang dikenal luas sebagai Ki Hajar Dewantara mendedikasikan seluruh hidupnya untuk memperjuangkan hak pendidikan bagi kaum pribumi di masa penjajahan. Beliau mendirikan perguruan Taman Siswa di Yogyakarta pada tahun 1922 untuk memberikan kesempatan belajar yang setara bagi seluruh lapisan masyarakat tanpa memandang kasta atau status sosial.',
    questionType: 'single',
    questionText: 'Ide pokok paragraf di atas adalah...',
    options: [
      { key: 'A', text: 'Perjalanan hidup Ki Hajar Dewantara dan perjuangannya memajukan pendidikan pribumi' },
      { key: 'B', text: 'Sistem kasta masyarakat Yogyakarta zaman kolonial' },
      { key: 'C', text: 'Daftar nama perguruan tinggi di Jawa Tengah' },
      { key: 'D', text: 'Kekayaan keluarga bangsawan Jawa pada tahun 1922' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf berfokus pada dedikasi dan perjuangan Ki Hajar Dewantara dalam memperjuangkan hak pendidikan pribumi.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 2 to 10
  {
    id: 262,
    number: 2,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Kaidah Penulisan Angka dan Bilangan Sesuai EYD V',
    questionType: 'single',
    questionText: 'Penulisan angka dan bilangan yang benar menurut EYD V terdapat pada kalimat...',
    options: [
      { key: 'A', text: '3 orang siswa memenangkan lomba cerdas cermat nasional.' },
      { key: 'B', text: 'Sebanyak 3 orang siswa memenangkan lomba cerdas cermat nasional.' },
      { key: 'C', text: 'Tiga orang siswa memenangkan lomba cerdas cermat nasional.' },
      { key: 'D', text: 'Siswa memenangkan lomba sebanyak 3 (tiga) orang.' }
    ],
    correctAnswer: 'C',
    explanation: 'Bilangan pada awal kalimat selalu ditulis dengan huruf ("Tiga orang siswa...", bukan "3 orang siswa...").',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 263,
    number: 3,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menilai Sikap Tokoh Berdasarkan Konteks Cerita',
    passageTitle: 'Kejujuran Tukang Tambal Ban',
    passageText: 'Saat memeriksa ban sepeda motor milik seorang pemuda yang mengira bannya bocor tertusuk paku, Pak Karjo hanya menemukan kotoran kerikil yang menempel pada celah pentil udara. Pak Karjo membersihkannya tanpa mengganti ban dan tidak mau menerima upah perbaikan berlebih. Beliau hanya berpesan agar sang pemuda berhati-hati di jalan.',
    questionType: 'single',
    questionText: 'Nilai moral luhur yang ditunjukkan oleh tokoh Pak Karjo adalah...',
    options: [
      { key: 'A', text: 'Kejujuran dan integritas dalam bekerja tanpa memanfaatkan ketidaktahuan orang lain' },
      { key: 'B', text: 'Rasa bangga atas keahliannya memperbaiki sepeda motor' },
      { key: 'C', text: 'Keinginan agar bengkelnya diliput media massa' },
      { key: 'D', text: 'Sikap acuh tak acuh terhadap pelanggan' }
    ],
    correctAnswer: 'A',
    explanation: 'Pak Karjo menunjukkan kejujuran dengan menyampaikan fakta sebenarnya dan menolak upah perbaikan yang tidak semestinya.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 264,
    number: 4,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Pasangan Kata Berantonim',
    questionType: 'single',
    questionText: 'Kalimat berikut yang memuat pasangan kata yang berlawanan makna (antonim) adalah...',
    options: [
      { key: 'A', text: 'Semua peserta membawa bekal makanan dan minuman yang cukup.' },
      { key: 'B', text: 'Pemerintah berupaya mempersempit jurang antara masyarakat kaya dan miskin.' },
      { key: 'C', text: 'Suasana di pegunungan sangat hening dan sunyi.' },
      { key: 'D', text: 'Para atlet berlari kencang dan cepat menuju garis akhir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata "kaya" dan "miskin" merupakan pasangan kata yang berlawanan makna (antonim).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 265,
    number: 5,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menemukan Pernyataan Fakta Berdasarkan Infografis',
    imageUrl: SVG_INFOGRAFIS_SAMPAH_BIN,
    imageCaption: 'Infografis Pemilahan Sampah 3 Kategori',
    questionType: 'single',
    questionText: 'Berdasarkan infografis pemilahan sampah, pernyataan yang BENAR adalah...',
    options: [
      { key: 'A', text: 'Sampah plastik harus dicampur dengan sampah daun kering agar cepat terurai' },
      { key: 'B', text: 'Sampah anorganik seperti botol plastik dapat didaur ulang menjadi barang bernilai ekonomis' },
      { key: 'C', text: 'Baterai bekas dan jarum suntik aman dibuang di tempat sampah organik' },
      { key: 'D', text: 'Semua sampah sebaiknya dibakar di pekarangan rumah' }
    ],
    correctAnswer: 'B',
    explanation: 'Sampah anorganik plastik dan kaleng dapat didaur ulang (recycle) menjadi produk baru bernilai guna tinggi.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 6 to 15
  {
    id: 266,
    number: 6,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Membedakan Kalimat Utama dan Penjelas',
    questionType: 'single',
    questionText: 'Perhatikan kalimat-kalimat berikut:\n(1) Buah manggis dijuluki sebagai ratu buah tropis karena khasiatnya yang melimpah.\n(2) Kulit manggis mengandung senyawa xanton yang merupakan antioksidan tinggi.\n(3) Daging buahnya yang putih manis kaya akan serat dan vitamin C.\n(4) Ekstrak kulit manggis banyak dimanfaatkan sebagai bahan baku suplemen kesehatan herbal.\n\nKalimat penjelas yang memaparkan kandungan daging buah ditunjukkan oleh nomor...',
    options: [
      { key: 'A', text: '(1)' },
      { key: 'B', text: '(2)' },
      { key: 'C', text: '(3)' },
      { key: 'D', text: '(4)' }
    ],
    correctAnswer: 'C',
    explanation: 'Kalimat (3) secara spesifik menjelaskan kandungan daging buah (serat dan vitamin C).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 267,
    number: 7,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Pesan Tersirat Iklan Layanan Masyarakat',
    questionType: 'single',
    questionText: 'Slogan Iklan: "Satu Jam Padamkan Lampu, Selamatkan Bumi untuk Generasi Masa Depan!"\n\nPesan tersirat yang ingin disampaikan melalui slogan iklan tersebut adalah...',
    options: [
      { key: 'A', text: 'Imbauan untuk berhemat energi listrik demi kelestarian lingkungan dan bumi' },
      { key: 'B', text: 'Ajakan untuk tidur lebih awal setiap malam' },
      { key: 'C', text: 'Pemberitahuan pemadaman listrik bergilir dari PLN' },
      { key: 'D', text: 'Larangan menggunakan lampu di rumah warga' }
    ],
    correctAnswer: 'A',
    explanation: 'Iklan gerakan Earth Hour mengampanyekan kepedulian lingkungan melalui penghematan konsumsi listrik.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 268,
    number: 8,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Kaidah Penulisan Kata Berulang (Reduplikasi)',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh kalimat yang menggunakan KATA ULANG dengan tepat dan baku!',
    options: [
      { key: 'A', text: 'Kupu-kupu berterbangan menghisap nektar bunga di taman.' },
      { key: 'B', text: 'Anak-anak sedang bermain gobak sodor di tanah lapang.' },
      { key: 'C', text: 'Ibu membeli sayur-mayur segar di pasar tradisional.' },
      { key: 'D', text: 'Para siswa-siswa mendengarkan instruksi kepala sekolah.' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'A, B, C adalah bentuk kata ulang yang tepat (kupu-kupu, anak-anak, sayur-mayur). Opsi D salah karena terjadi pemborosan jamak ganda (para + siswa-siswa).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 269,
    number: 9,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Memprediksi Kelanjutan Alur Cerita Naratif',
    passageTitle: 'Petualangan di Goa Kapur',
    passageText: 'Arga dan tim penjelajah ciliknya menyusuri lorong goa kapur yang gelap dan licin. Tiba-tiba senter utama yang dibawa Arga padam karena kehabisan baterai. Suasana seketika menjadi gelap gulita, sementara terdengar gemuruh air sungai bawah tanah di dekat mereka. Untunglah Arga selalu mengingat pesan pemandu untuk menyiapkan senter cadangan dan peluit darurat di kantong jaketnya.',
    questionType: 'single',
    questionText: 'Tindakan yang paling bijak dan logis dilakukan Arga berikutnya adalah...',
    options: [
      { key: 'A', text: 'Berlari kencang dalam kegelapan menuju suara gemuruh air' },
      { key: 'B', text: 'Tetap tenang di tempat, menyalakan senter cadangan, dan memastikan seluruh anggota tim aman' },
      { key: 'C', text: 'Menangis dan melempar jaketnya ke tanah' },
      { key: 'D', text: 'Meniup peluit sambil melompat ke dalam sungai bawah tanah' }
    ],
    correctAnswer: 'B',
    explanation: 'Sikap tenang dan memanfaatkan perlengkapan darurat (senter cadangan) merupakan respons keselamatan paling logis.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 270,
    number: 10,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Evaluasi Kebenaran Teks Cerita Fabel Tradisional',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Fabel selalu menggunakan binatang sebagai personifikasi karakter manusia',
        'Latar cerita fabel umumnya berlokasi di hutan, kolam, sungai, atau alam terbuka',
        'Cerita fabel tidak pernah mengandung pesan moral atau nasihat kehidupan'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran setiap karakteristik cerita fabel berikut!',
    options: [],
    explanation: '1) Binatang sebagai personifikasi (Benar).\n2) Latar alam (Benar).\n3) Fabel selalu mengandung pesan moral/amanat (Pernyataan 3 Salah).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 11 to 20
  {
    id: 271,
    number: 11,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Kata Baku dan Tidak Baku Bidang Kedokteran',
    questionType: 'single',
    questionText: 'Penulisan kata baku dalam kalimat di bawah ini adalah...',
    options: [
      { key: 'A', text: 'Vaksinasi massal bertujuan menciptakan sistim imunitas tubuh yang kokoh.' },
      { key: 'B', text: 'Vaksinasi massal bertujuan menciptakan sistem imunitas tubuh yang kokoh.' },
      { key: 'C', text: 'Pasien disarankan meminum obat sesuai dengan diagnosa dokter.' },
      { key: 'D', text: 'Klinik kesehatan itu memberikan kwitansi pembayaran resmi.' }
    ],
    correctAnswer: 'B',
    explanation: 'Bentuk baku: sistem (bukan sistim), diagnosis (bukan diagnosa), kuitansi (bukan kwitansi).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 272,
    number: 12,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Majas Hiperbola dalam Kalimat',
    questionType: 'single',
    questionText: 'Kalimat berikut yang menggunakan majas Hiperbola adalah...',
    options: [
      { key: 'A', text: 'Senyuman manisnya menyegarkan hari-hari kami.' },
      { key: 'B', text: 'Sorak-sorai penonton di stadion itu mengguncang jagat raya.' },
      { key: 'C', text: 'Angin malam berbisik lembut di telingaku.' },
      { key: 'D', text: 'Dewi malam memancarkan sinar keperakan di langit.' }
    ],
    correctAnswer: 'B',
    explanation: '"Mengguncang jagat raya" adalah pernyataan yang melebih-lebihkan kenyataan secara ekstrem (hiperbola).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 273,
    number: 13,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Ungkapan Kepala Dingin dan Makna',
    questionType: 'single',
    questionText: 'Ketika terjadi perselisihan pendapat antar-anggota kelompok, ketua kelas meminta semua siswa menyelesaikan masalah dengan kepala dingin. Makna ungkapan "kepala dingin" adalah...',
    options: [
      { key: 'A', text: 'Kompres es di kepala' },
      { key: 'B', text: 'Tenang, sabar, dan tidak emosional' },
      { key: 'C', text: 'Diam dan tidak mau berbicara' },
      { key: 'D', text: 'Merasa kedinginan' }
    ],
    correctAnswer: 'B',
    explanation: '"Kepala dingin" bermakna sikap tenang, sabar, dan berpikir jernih tanpa dipengaruhi emosi/amarah.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 274,
    number: 14,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penyusunan Kalimat Petunjuk Penggunaan Obat',
    questionType: 'single',
    questionText: 'Petunjuk penggunaan obat sirup demam anak:\n"Kocok botol dahulu sebelum diminum. Dosis: anak usia 6–12 tahun 3 × sehari 1 sendok takar (5 ml) sesudah makan."\n\nJika adik yang berusia 8 tahun sedang demam, aturan minum obat yang tepat adalah...',
    options: [
      { key: 'A', text: 'Minum 3 sendok takar sekaligus sebelum makan' },
      { key: 'B', text: 'Minum 1 sendok takar sebanyak 3 kali dalam sehari setelah makan setelah botol dikocok' },
      { key: 'C', text: 'Minum 1/2 sendok takar setiap jam sekali saat lapar' },
      { key: 'D', text: 'Minum 5 sendok takar sebelum tidur malam' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai petunjuk: Kocok botol, usia 8 th masuk rentang 6-12 th -> dosis 3 × sehari 1 sendok takar (5 ml) sesudah makan.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 275,
    number: 15,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Hubungan Kausalitas dalam Teks Sejarah',
    passageTitle: 'Peristiwa Sumpah Pemuda 1928',
    passageText: 'Kongres Pemuda II yang diselenggarakan pada 27–28 Oktober 1928 di Jakarta berhasil melahirkan ikrar Sumpah Pemuda. Para pemuda dari berbagai suku dan daerah menyadari bahwa perjuangan yang bersifat kedaerahan mudah dipatahkan oleh penjajah. Oleh sebab itu, mereka bersatu mengikrarkan satu tanah air, satu bangsa, dan menjunjung bahasa persatuan, bahasa Indonesia.',
    questionType: 'single',
    questionText: 'Alasan utama para pemuda Indonesia mengikrarkan Sumpah Pemuda adalah...',
    options: [
      { key: 'A', text: 'Keinginan untuk mendirikan perkumpulan pemuda di Belanda' },
      { key: 'B', text: 'Kesadaran bahwa perjuangan kedaerahan mudah dipatahkan sehingga diperlukan persatuan nasional' },
      { key: 'C', text: 'Perintah langsung dari pemerintah kolonial Belanda' },
      { key: 'D', text: 'Kekalahan para pemuda dalam pertandingan olahraga antardaerah' }
    ],
    correctAnswer: 'B',
    explanation: 'Teks menyatakan: "...menyadari bahwa perjuangan yang bersifat kedaerahan mudah dipatahkan oleh penjajah. Oleh sebab itu, mereka bersatu mengikrarkan satu tanah air...".',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 16 to 30
  {
    id: 276,
    number: 16,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Kaidah Penulisan Tanda Kurung (...)',
    questionType: 'single',
    questionText: 'Fungsi tanda kurung (...) pada kalimat "Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) meluncurkan kurikulum baru" adalah...',
    options: [
      { key: 'A', text: 'Mengapit keterangan atau penjelasan tambahan/singkatan' },
      { key: 'B', text: 'Menandai kalimat tanya' },
      { key: 'C', text: 'Mengapit judul novel' },
      { key: 'D', text: 'Memisahkan klausa bertentangan' }
    ],
    correctAnswer: 'A',
    explanation: 'Tanda kurung digunakan untuk mengapit tambahan keterangan, penjelasan, atau singkatan resmi.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 277,
    number: 17,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Pasangan Kata Bersinonim',
    questionType: 'single',
    questionText: 'Kata di bawah ini yang bersinonim dengan kata "kolaborasi" adalah...',
    options: [
      { key: 'A', text: 'Persaingan' },
      { key: 'B', text: 'Kerja sama' },
      { key: 'C', text: 'Perpecahan' },
      { key: 'D', text: 'Pertengkaran' }
    ],
    correctAnswer: 'B',
    explanation: '"Kolaborasi" bermakna bentuk kerja sama antar-individu atau pihak untuk mencapai tujuan bersama.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 278,
    number: 18,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Analisis Ciri Pantun Kanak-Kanak dan Jenaka',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh ciri konvensional dari sebuah bait PANTUN!',
    options: [
      { key: 'A', text: 'Tiap bait terdiri atas 4 baris/larik' },
      { key: 'B', text: 'Tiap baris umumnya terdiri atas 8 sampai 12 suku kata' },
      { key: 'C', text: 'Memiliki pola rima akhir berirama a-b-a-b (atau a-a-a-a)' },
      { key: 'D', text: 'Baris pertama dan kedua merupakan isi, sedangkan baris ketiga dan keempat adalah sampiran' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'A, B, C adalah ciri baku pantun. Opsi D salah karena baris 1-2 adalah sampiran dan baris 3-4 adalah isi.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 279,
    number: 19,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penalaran Makna Imbuhan ber- pada Kalimat',
    questionType: 'single',
    questionText: 'Makna imbuhan ber- pada kata "bersepeda" dalam kalimat "Setiap hari Minggu Ayah bersepeda ke alun-alun" adalah...',
    options: [
      { key: 'A', text: 'Mengendarai / menggunakan sepeda' },
      { key: 'B', text: 'Memiliki sepeda' },
      { key: 'C', text: 'Membuat sepeda' },
      { key: 'D', text: 'Menjual sepeda' }
    ],
    correctAnswer: 'A',
    explanation: 'Imbuhan ber- pada alat transportasi bermakna mengendarai atau menggunakan alat tersebut.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 280,
    number: 20,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Evaluasi Fakta Opini Teks Konservasi Energi',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Matahari merupakan sumber energi terbarukan terbesar bagi planet bumi',
        'Mobil bertenaga listrik jauh lebih keren dan bergengsi daripada mobil bensin',
        'Pembangkit Listrik Tenaga Surya (PLTS) mengubah sinar matahari menjadi listrik'
      ],
      columns: ['Fakta', 'Opini']
    },
    correctMatrixAnswers: {
      0: 'Fakta',
      1: 'Opini',
      2: 'Fakta'
    },
    questionText: 'Tentukan jenis setiap kalimat berikut apakah Fakta atau Opini!',
    options: [],
    explanation: '1 & 3 = Fakta sains. 2 = Opini (memuat kata sifat subyektif "lebih keren dan bergengsi").',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 21 to 30
  {
    id: 281,
    number: 21,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penggunaan Kata Baku Huruf Serapan',
    questionType: 'single',
    questionText: 'Kalimat yang menggunakan kata serapan baku adalah...',
    options: [
      { key: 'A', text: 'Para siswa mempraktikkan cara membuat pupuk kompos di kebun sekolah.' },
      { key: 'B', text: 'Para siswa mempraktekkan cara membuat pupuk kompos di kebun sekolah.' },
      { key: 'C', text: 'Ibu membeli obat batuk di apotik dekat rumah.' },
      { key: 'D', text: 'Analisa hasil penelitian menunjukkan peningkatan hasil belajar.' }
    ],
    correctAnswer: 'A',
    explanation: 'Bentuk baku: mempraktikkan (kata dasar praktik), apotek, analisis.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 282,
    number: 22,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Nilai Budaya dalam Cerita Rakyat',
    passageTitle: 'Legenda Danau Toba',
    passageText: 'Sebelum melanggar janji yang telah diucapkannya kepada sang istri, Toba hidup berkecukupan dan bahagia. Namun, ketika ia mengingkari sumpahnya saat sedang marah, bencana banjir dahsyat menenggelamkan lembah tersebut hingga membentuk danau raksasa.',
    questionType: 'single',
    questionText: 'Pesan moral utama yang terkandung dalam Legenda Danau Toba adalah...',
    options: [
      { key: 'A', text: 'Kita tidak boleh memancing ikan di sungai yang dalam' },
      { key: 'B', text: 'Pentingnya menjaga dan menepati janji serta sumpah yang telah diucapkan' },
      { key: 'C', text: 'Jangan bertani di dekat lembah perbukitan' },
      { key: 'D', text: 'Membangun rumah di tepi danau sangat menguntungkan' }
    ],
    correctAnswer: 'B',
    explanation: 'Kisah Toba menegaskan pesan moral luhur tentang bahaya mengingkari janji dan pentingnya menepati sumpah.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 283,
    number: 23,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penggunaan Tanda Hubung pada Kata Ulang Berimbuhan',
    questionType: 'single',
    questionText: 'Penulisan kata ulang berimbuhan yang benar adalah...',
    options: [
      { key: 'A', text: 'Bersalam-salaman' },
      { key: 'B', text: 'Ber-salam salaman' },
      { key: 'C', text: 'Bersalam salaman' },
      { key: 'D', text: 'Ber-salam-salaman' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata ulang berimbuhan ditulis serangkai dengan tanda hubung antarkata dasar yang berulang: "bersalam-salaman".',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 284,
    number: 24,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Karakteristik Bahasa Iklan Persuasif',
    questionType: 'single',
    questionText: 'Bahasa yang digunakan dalam sebuah teks iklan yang baik harus bersifat...',
    options: [
      { key: 'A', text: 'Bertele-tele dan panjang lebar' },
      { key: 'B', text: 'Persuasif, komunikatif, singkat, padat, dan menarik' },
      { key: 'C', text: 'Menggunakan istilah ilmiah yang sulit dipahami orang awam' },
      { key: 'D', text: 'Penuh kritik pedas' }
    ],
    correctAnswer: 'B',
    explanation: 'Bahasa iklan yang efektif bersifat persuasif (mengajak), komunikatif, ringkas, dan memikat perhatian konsumen.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 285,
    number: 25,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Kaidah Penulisan Partikel -pun Menurut EYD V',
    questionType: 'single',
    questionText: 'Penulisan partikel "pun" yang tepat menurut EYD V adalah...',
    options: [
      { key: 'A', text: 'Meskipun hari hujan lebat, ayah tetap pergi bekerja.' },
      { key: 'B', text: 'Meski pun hari hujan lebat, ayah tetap pergi bekerja.' },
      { key: 'C', text: 'Siapa pun tidak boleh merusak fasilitas umum.' },
      { key: 'D', text: 'Jawaban A dan C keduanya benar' }
    ],
    correctAnswer: 'D',
    explanation: '• "Meskipun" adalah konjungsi yang partikel pun-nya ditulis serangkai (A benar).\n• "Siapa pun" partikel pun bermakna "juga/saja" ditulis terpisah (C benar).\nJadi, opsi D benar.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 286,
    number: 26,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Menentukan Informasi Penting Teks Berita',
    passageTitle: 'Penemuan Situs Purbakala di Mojokerto',
    passageText: 'Tim arkeolog Balai Pelestarian Kebudayaan menemukan struktur bata kuno peninggalan era Majapahit di situs Kumitir, Mojokerto, Jawa Timur, pada hari Selasa (15/8). Struktur sepanjang 20 meter tersebut diperkirakan merupakan bagian dari dinding pembatas istana bangsawan.',
    questionType: 'single',
    questionText: 'Unsur "Kapan" (waktu terjadinya peristiwa) pada teks berita di atas adalah...',
    options: [
      { key: 'A', text: 'Era kerajaan Majapahit' },
      { key: 'B', text: 'Hari Selasa, 15 Agustus' },
      { key: 'C', text: 'Sepanjang 20 meter' },
      { key: 'D', text: 'Di situs Kumitir, Mojokerto' }
    ],
    correctAnswer: 'B',
    explanation: 'Waktu penemuan struktur arkeologi terjadi pada hari Selasa, 15 Agustus.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 287,
    number: 27,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Ungkapan Bunga Bangsa dan Makna Kiasan',
    questionType: 'single',
    questionText: 'Para pahlawan yang gugur di medan pertempuran demi kemerdekaan Indonesia disebut sebagai "bunga bangsa". Makna ungkapan "bunga bangsa" adalah...',
    options: [
      { key: 'A', text: 'Tanaman hias kebanggaan negara' },
      { key: 'B', text: 'Pendekar sakti' },
      { key: 'C', text: 'Orang-orang berjasa dan berkorban demi kejayaan bangsa dan negara' },
      { key: 'D', text: 'Pemimpin pemerintahan' }
    ],
    correctAnswer: 'C',
    explanation: '"Bunga bangsa" adalah kiasan bagi para pahlawan yang gugur membela kemerdekaan dan martabat nusa bangsa.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 288,
    number: 28,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Analisis Kaidah Penulisan Gabungan Kata',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh penulisan kata majemuk yang BENAR menurut kaidah EYD V!',
    options: [
      { key: 'A', text: 'Budi pekerti (ditulis terpisah)' },
      { key: 'B', text: 'Matahari (ditulis serangkai)' },
      { key: 'C', text: 'Saputangan (ditulis serangkai)' },
      { key: 'D', text: 'Tanggung jawab (ditulis terpisah)' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C', 'D'],
    explanation: 'Semua opsi mencerminkan aturan EYD V yang benar mengenai kata majemuk biasa dan kata majemuk senyawa.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 289,
    number: 29,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Penalaran Hubungan Sebab Akibat Fenomena Sosial',
    passageTitle: 'Membaca di Era Digital',
    passageText: 'Kehadiran buku digital dan platform membaca daring memudahkan siswa mengakses ribuan judul buku edukatif hanya melalui gawai. Namun, tanpa pendampingan orang tua dan pembatasan waktu layar, anak dapat teralihkan oleh permainan game online dan media sosial yang berlebihan.',
    questionType: 'single',
    questionText: 'Dampak negatif yang dapat timbul jika anak menggunakan gawai tanpa pengawasan adalah...',
    options: [
      { key: 'A', text: 'Koleksi buku digital semakin bertambah' },
      { key: 'B', text: 'Waktu belajar dan membaca teralihkan oleh game online dan media sosial yang berlebihan' },
      { key: 'C', text: 'Kemampuan literasi membaca anak otomatis melonjak' },
      { key: 'D', text: 'Anak menjadi lebih gemar menulis puisi' }
    ],
    correctAnswer: 'B',
    explanation: 'Teks menyatakan bahwa tanpa pengawasan, perhatian anak mudah teralihkan ke game online dan media sosial.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 290,
    number: 30,
    category: 'Bahasa & Literasi',
    subjectCode: 'BIN',
    topic: 'Evaluasi Kebenaran Struktur Surat Resmi',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Kop surat (kepala surat) memuat nama instansi, logo, alamat lengkap, dan nomor kontak resmi',
        'Surat resmi wajib mencantumkan nomor surat, lampiran, dan perihal',
        'Tanggal penulisan surat resmi selalu diakhiri tanda titik (.)'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran setiap kaidah penulisan surat dinas/resmi!',
    options: [],
    explanation: '1) Kop surat memuat identitas instansi (Benar).\n2) Nomor, lampiran, perihal wajib ada (Benar).\n3) Tanggal surat tidak diakhiri tanda titik (Salah).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  }
];

// Export Default Gabungan
export const QUESTIONS_BAHASA: Question[] = [
  ...QUESTIONS_BIN_01,
  ...QUESTIONS_BIN_02,
  ...QUESTIONS_BIN_03
];
