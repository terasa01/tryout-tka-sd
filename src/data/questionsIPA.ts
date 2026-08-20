import { Question } from '../types/quiz';
import { 
  SVG_RANTAI_MAKANAN_IPA, 
  SVG_PERCOBAAN_LILIN_IPA, 
  SVG_SIKLUS_AIR_IPA 
} from './questionVisuals';

/**
 * ============================================================================
 * BANK SOAL TKA SD - ILMU PENGETAHUAN ALAM (IPA) & SAINS TERAPAN (3 PAKET @ 30 SOAL)
 * Bebas Typo, Berbasis HOTS Ilmiah, Fenomena Alam, Ekosistem, Fisika Dasar & Biologi
 * Sesuai Standar Nasional Pusmendik / ANBK & Kurikulum Merdeka
 * ============================================================================
 */

/**
 * PAKET 01: DIAGNOSTIK (Konsep Dasar Sains & Kehidupan) - 30 Soal
 */
export const QUESTIONS_IPA_01: Question[] = [
  // 1
  {
    id: 301,
    number: 1,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Bentuk Adaptasi Morfologi Hewan',
    questionType: 'single',
    questionText: 'Bentuk paruh burung elang yang tajam, kuat, dan melengkung pada ujungnya berfungsi untuk...',
    options: [
      { key: 'A', text: 'Menghisap nektar bunga di pepohonan' },
      { key: 'B', text: 'Mengoyak dan merobek daging mangsanya' },
      { key: 'C', text: 'Menyaring lumpur saat mencari cacing' },
      { key: 'D', text: 'Memecah biji-bijian keras di tanah' }
    ],
    correctAnswer: 'B',
    explanation: 'Burung elang merupakan karnivora pemakan daging. Paruhnya yang runcing, kokoh, dan melengkung berfungsi mengoyak daging mangsa.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 2
  {
    id: 302,
    number: 2,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Perubahan Wujud Benda Menyublim',
    questionType: 'single',
    questionText: 'Peristiwa perubahan wujud benda dari padat langsung menjadi gas tanpa melalui fase cair disebut...',
    options: [
      { key: 'A', text: 'Mencair' },
      { key: 'B', text: 'Menguap' },
      { key: 'C', text: 'Menyublim' },
      { key: 'D', text: 'Mengembun' }
    ],
    correctAnswer: 'C',
    explanation: 'Menyublim adalah perubahan wujud dari zat padat menjadi gas (contoh: kapur barus yang diletakkan di lemari makin lama makin habis).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 3
  {
    id: 303,
    number: 3,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Perpindahan Panas secara Konveksi',
    questionType: 'single',
    questionText: 'Peristiwa berikut yang merupakan contoh perpindahan kalor secara KONVEKSI adalah...',
    options: [
      { key: 'A', text: 'Sendok logam terasa panas saat mengaduk teh manis hangat' },
      { key: 'B', text: 'Gerakan naik turunnya air saat direbus hingga mendidih' },
      { key: 'C', text: 'Panas api unggun yang terasa hangat di badan pada malam hari' },
      { key: 'D', text: 'Ujung batang besi yang memanas saat dipanggang di atas bara api' }
    ],
    correctAnswer: 'B',
    explanation: 'Konveksi adalah perpindahan panas melalui zat perantara yang disertai perpindahan partikel zatnya (misal aliran air mendidih atau terjadinya angin darat dan angin laut).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 4
  {
    id: 304,
    number: 4,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Sifat-Sifat Cahaya Menembus Benda Bening',
    questionType: 'single',
    questionText: 'Ruang tamu yang memiliki jendela kaca transparan menjadi terang benderang pada siang hari. Peristiwa ini membuktikan sifat cahaya yaitu...',
    options: [
      { key: 'A', text: 'Dapat dibiaskan' },
      { key: 'B', text: 'Dapat merambat lurus dan menembus benda bening' },
      { key: 'C', text: 'Dapat dipantulkan secara baur' },
      { key: 'D', text: 'Mengalami penguraian warna' }
    ],
    correctAnswer: 'B',
    explanation: 'Kaca jendela transparan adalah benda bening yang dapat ditembus oleh berkas cahaya matahari secara langsung.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 5
  {
    id: 305,
    number: 5,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Organ Pernapasan Manusia dan Fungsinya',
    questionType: 'single',
    questionText: 'Bagian pada sistem pernapasan manusia yang berfungsi sebagai tempat pertukaran oksigen (O₂) dan karbon dioksida (CO₂) adalah...',
    options: [
      { key: 'A', text: 'Bronkus' },
      { key: 'B', text: 'Trakea' },
      { key: 'C', text: 'Alveolus' },
      { key: 'D', text: 'Laring' }
    ],
    correctAnswer: 'C',
    explanation: 'Alveolus berupa gelembung-gelembung udara halus di dalam paru-paru yang dindingnya tipis dan dikelilingi kapiler darah tempat difusi gas O₂ dan CO₂.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 6
  {
    id: 306,
    number: 6,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Fungsi Jantung dan Pembuluh Darah',
    questionType: 'single',
    questionText: 'Bagian jantung manusia yang berfungsi memompa darah kaya oksigen (O₂) ke seluruh tubuh adalah...',
    options: [
      { key: 'A', text: 'Serambi kanan' },
      { key: 'B', text: 'Bilik kanan' },
      { key: 'C', text: 'Serambi kiri' },
      { key: 'D', text: 'Bilik kiri' }
    ],
    correctAnswer: 'D',
    explanation: 'Bilik kiri (ventrikel sinister) memiliki dinding otot paling tebal karena bertugas memompa darah bersih kaya O₂ ke seluruh jaringan tubuh melalui aorta.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 7
  {
    id: 307,
    number: 7,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Pengaruh Gaya Terhadap Gerak dan Bentuk Benda',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh peristiwa berikut yang menunjukkan bahwa GAYA DAPAT MENGUBAH BENTUK BENDA!',
    options: [
      { key: 'A', text: 'Pengrajin menekan dan membentuk tanah liat menjadi vas bunga' },
      { key: 'B', text: 'Kiper menangkap bola yang meluncur ke arah gawang' },
      { key: 'C', text: 'Mobil penyok di bagian depan setelah menabrak tiang' },
      { key: 'D', text: 'Ibu menggilas adonan donat menggunakan penggiling kayu' }
    ],
    correctMultipleAnswers: ['A', 'C', 'D'],
    explanation: '• A, C, dan D mengubah bentuk fisik benda karena gaya tekan/benturan.\n• Opsi B adalah contoh gaya menghentikan gerak benda.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 8
  {
    id: 308,
    number: 8,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Metamorfosis Sempurna vs Tidak Sempurna',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Kupu-kupu (Telur -> Ulat -> Kepompong -> Kupu-kupu)',
        'Belalang (Telur -> Nimfa -> Belalang Dewasa)',
        'Nyamuk (Telur -> Jentik/Jentik-jentik -> Pupa -> Nyamuk Dewasa)'
      ],
      columns: ['Metamorfosis Sempurna', 'Metamorfosis Tidak Sempurna']
    },
    correctMatrixAnswers: {
      0: 'Metamorfosis Sempurna',
      1: 'Metamorfosis Tidak Sempurna',
      2: 'Metamorfosis Sempurna'
    },
    questionText: 'Kelompokkan jenis metamorfosis serangga-serangga berikut!',
    options: [],
    explanation: '• Kupu-kupu dan Nyamuk melewati fase kepompong/pupa (Metamorfosis Sempurna).\n• Belalang tidak melewati fase kepompong melainkan nimfa (Metamorfosis Tidak Sempurna).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 9
  {
    id: 309,
    number: 9,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Dinamika Ekosistem Sawah',
    imageUrl: SVG_RANTAI_MAKANAN_IPA,
    imageCaption: 'Bagan Rantai Makanan Ekosistem Sawah: Padi -> Belalang -> Katak -> Ular -> Elang',
    questionType: 'single',
    questionText: 'Berdasarkan rantai makanan ekosistem sawah pada diagram di atas, jika populasi katak diburu secara berlebihan hingga punah, dampak langsung yang akan terjadi adalah...',
    options: [
      { key: 'A', text: 'Populasi belalang menurun drastis' },
      { key: 'B', text: 'Populasi belalang meningkat pesat sehingga hasil panen padi terancam turun' },
      { key: 'C', text: 'Populasi ular meningkat pesat' },
      { key: 'D', text: 'Populasi elang bertambah banyak' }
    ],
    correctAnswer: 'B',
    explanation: 'Katak adalah predator belalang. Jika katak punah, pemangsa belalang hilang sehingga belalang meledak populasinya dan merusak tanaman padi.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 10
  {
    id: 310,
    number: 10,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Tahapan Siklus Air (Daur Hidrologi)',
    imageUrl: SVG_SIKLUS_AIR_IPA,
    imageCaption: 'Diagram Daur Siklus Air di Bumi',
    questionType: 'single',
    questionText: 'Proses penguapan air yang terjadi dari permukaan daun pepohonan akibat panas matahari disebut...',
    options: [
      { key: 'A', text: 'Evaporasi' },
      { key: 'B', text: 'Transpirasi' },
      { key: 'C', text: 'Kondensasi' },
      { key: 'D', text: 'Infiltrasi' }
    ],
    correctAnswer: 'B',
    explanation: 'Transpirasi adalah proses pelepasan uap air dari jaringan tubuh tumbuhan (melalui stomata) ke atmosfer.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 11 to 20
  {
    id: 311,
    number: 11,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Sifat Magnet Kutub Senama dan Tak Senama',
    questionType: 'single',
    questionText: 'Jika dua buah kutub magnet yang SENAMA (misal Kutub Utara didekatkan dengan Kutub Utara) saling didekatkan, peristiwa yang terjadi adalah...',
    options: [
      { key: 'A', text: 'Tarik-menarik dengan kuat' },
      { key: 'B', text: 'Tolak-menolak' },
      { key: 'C', text: 'Sifat kemagnetannya langsung hilang' },
      { key: 'D', text: 'Tidak ada interaksi sama sekali' }
    ],
    correctAnswer: 'B',
    explanation: 'Sifat magnet: kutub senama (U-U atau S-S) akan tolak-menolak, sedangkan kutub tidak senama (U-S) akan tarik-menarik.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 312,
    number: 12,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Hubungan Simbiosis Mutualisme, Komensalisme, Parasitisme',
    questionType: 'single',
    questionText: 'Contoh hubungan simbiosis MUTUALISME (saling menguntungkan) dalam kehidupan adalah...',
    options: [
      { key: 'A', text: 'Tanaman anggrek yang menempel pada batang pohon mangga' },
      { key: 'B', text: 'Burung jalak yang memakan kutu di punggung kerbau' },
      { key: 'C', text: 'Tumbuhan benalu yang menyerap sari makanan dari pohon inangnya' },
      { key: 'D', text: 'Ikan remora yang berenang di dekat ikan hiu' }
    ],
    correctAnswer: 'B',
    explanation: 'Burung jalak mendapat makanan lezat (kutu) dan kerbau merasa nyaman karena tubuhnya bersih bebas dari kutu (simbiosis mutualisme).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 313,
    number: 13,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Sifat Pemantulan dan Pembiasan Cahaya',
    questionType: 'single',
    questionText: 'Pensil yang dimasukkan ke dalam gelas berisi air bening tampak patah atau membengkok jika dilihat dari samping. Peristiwa ini disebabkan oleh...',
    options: [
      { key: 'A', text: 'Pemantulan baur cahaya' },
      { key: 'B', text: 'Pembiasan (refraksi) cahaya karena merambat melalui dua medium berbeda kerapatan' },
      { key: 'C', text: 'Penyerapan cahaya oleh air' },
      { key: 'D', text: 'Penguraian cahaya putih menjadi pelangi' }
    ],
    correctAnswer: 'B',
    explanation: 'Pembiasan cahaya terjadi ketika berkas cahaya melewati batas antara medium udara dan medium air yang memiliki indeks kerapatan optik berbeda.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 314,
    number: 14,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Perubahan Energi pada Peralatan Rumah Tangga',
    questionType: 'single',
    questionText: 'Perubahan energi yang terjadi pada saat Blender dinyalakan adalah...',
    options: [
      { key: 'A', text: 'Energi listrik menjadi energi kimia' },
      { key: 'B', text: 'Energi listrik menjadi energi gerak dan energi bunyi' },
      { key: 'C', text: 'Energi panas menjadi energi listrik' },
      { key: 'D', text: 'Energi gerak menjadi energi potensial' }
    ],
    correctAnswer: 'B',
    explanation: 'Motor listrik pada blender mengubah energi listrik menjadi energi mekanik (gerak pisau pemotong) disertai timbulnya energi bunyi.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 315,
    number: 15,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Organ Pencernaan dan Enzim Pencernaan',
    questionType: 'single',
    questionText: 'Enzim yang dihasilkan oleh kelenjar lambung untuk mengendapkan kasein susu adalah...',
    options: [
      { key: 'A', text: 'Enzim Renin' },
      { key: 'B', text: 'Enzim Ptialin' },
      { key: 'C', text: 'Enzim Amilase' },
      { key: 'D', text: 'Asam Klorida (HCl)' }
    ],
    correctAnswer: 'A',
    explanation: 'Lambung menghasilkan: Pepsin (mengubah protein jadi pepton), Renin (mengendapkan protein susu/kasein), dan Asam Klorida (membunuh kuman).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 316,
    number: 16,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Perambatan Gelombang Bunyi',
    questionType: 'single',
    questionText: 'Di antara medium berikut, gelombang bunyi merambat PALING CEPAT melalui...',
    options: [
      { key: 'A', text: 'Udara hampa di luar angkasa' },
      { key: 'B', text: 'Benda padat (misal rel kereta api dari baja)' },
      { key: 'C', text: 'Zat cair (air laut)' },
      { key: 'D', text: 'Gas oksigen' }
    ],
    correctAnswer: 'B',
    explanation: 'Partikel benda padat tersusun sangat rapat sehingga getaran bunyi dapat diteruskan jauh lebih cepat dibandingkan zat cair dan gas. (Bunyi tidak dapat merambat di ruang hampa).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 317,
    number: 17,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Sistem Gerak Sendi Engsel dan Peluru',
    questionType: 'single',
    questionText: 'Sendi yang memungkinkan gerakan ke SEGALA ARAH terdapat pada hubungan antara...',
    options: [
      { key: 'A', text: 'Tulang paha dengan tulang panggul (Sendi Peluru)' },
      { key: 'B', text: 'Tulang lengan atas dengan tulang hasta di siku (Sendi Engsel)' },
      { key: 'C', text: 'Tulang leher dengan tengkorak (Sendi Putar)' },
      { key: 'D', text: 'Tulang ibu jari dengan telapak tangan (Sendi Pelana)' }
    ],
    correctAnswer: 'A',
    explanation: 'Sendi peluru (pada gelang bahu dan gelang panggul) memiliki bentuk bonggol dan mangkok sehingga dapat digerakkan ke segala arah.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 318,
    number: 18,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Gerakan Bumi dan Akibat Rotasi Bumi',
    questionType: 'single',
    questionText: 'Peristiwa alam berikut yang terjadi sebagai akibat dari ROTASI BUMI (perputaran bumi pada porosnya) adalah...',
    options: [
      { key: 'A', text: 'Perubahan musim kemarau dan penghujan' },
      { key: 'B', text: 'Terjadinya pergantian siang dan malam serta perbedaan waktu antardaerah' },
      { key: 'C', text: 'Perubahan rasi bintang sepanjang tahun' },
      { key: 'D', text: 'Gerhana matahari total' }
    ],
    correctAnswer: 'B',
    explanation: 'Akibat rotasi bumi: pergantian siang & malam, gerak semu harian matahari, dan perbedaan zona waktu.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 319,
    number: 19,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Percobaan Pembakaran dan Kebutuhan Udara',
    imageUrl: SVG_PERCOBAAN_LILIN_IPA,
    imageCaption: 'Percobaan Lilin Menyala yang Ditutup Gelas Kaca',
    questionType: 'single',
    questionText: 'Ketika lilin menyala ditutup rapat menggunakan gelas kaca seperti pada gambar, lilin akan padam setelah beberapa detik. Kesimpulan dari percobaan sains tersebut adalah...',
    options: [
      { key: 'A', text: 'Gelas kaca menyerap energi panas lilin' },
      { key: 'B', text: 'Proses pembakaran membutuhkan gas Oksigen (O₂); lilin padam saat oksigen di dalam gelas habis' },
      { key: 'C', text: 'Sumbu lilin habis terbakar' },
      { key: 'D', text: 'Cahaya tidak dapat menembus gelas kaca' }
    ],
    correctAnswer: 'B',
    explanation: 'Oksigen adalah gas pendukung utama pembakaran. Saat ruang gelas tertutup kehabisan oksigen dan terisi gas CO₂, api lilin langsung padam.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 320,
    number: 20,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Evaluasi Sumber Daya Alam Terbarukan dan Tak Terbarukan',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Minyak bumi, batu bara, dan gas alam merupakan sumber energi tak terbarukan (fosil)',
        'Energi sinar matahari, angin, dan aliran air sungai merupakan energi alternatif terbarukan',
        'Batu bara dapat diperbarui dalam waktu singkat (kurang dari 1 tahun)'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran setiap pernyataan klasifikasi sumber daya alam berikut!',
    options: [],
    explanation: '1 & 2 Benar. Pernyataan 3 Salah karena batu bara terbentuk dari fosil tumbuhan purba yang terkubur selama jutaan tahun.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 21 to 30
  {
    id: 321,
    number: 21,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Adaptasi Fisiologi Tumbuhan Kantung Semar',
    questionType: 'single',
    questionText: 'Tumbuhan kantung semar dan venus flytrap hidup di tanah berawa yang miskin unsur hara nitrogen. Cara tumbuhan tersebut memenuhi kebutuhan nitrogen adalah...',
    options: [
      { key: 'A', text: 'Memperpanjang akar hingga ke dalam tanah' },
      { key: 'B', text: 'Menangkap dan mencerna serangga menggunakan cairan asam berenzim' },
      { key: 'C', text: 'Menggugurkan daunnya pada musim kemarau' },
      { key: 'D', text: 'Menyimpan cadangan air pada batangnya yang berongga' }
    ],
    correctAnswer: 'B',
    explanation: 'Kantung semar adalah tumbuhan insektivora yang mencerna protein serangga untuk memenuhi kebutuhan nitrogen di lingkungan miskin hara.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 322,
    number: 22,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Rangkaian Listrik Seri dan Paralel',
    questionType: 'single',
    questionText: 'Kelebihan utama dari rangkaian listrik PARALEL yang diterapkan pada instalasi rumah tangga adalah...',
    options: [
      { key: 'A', text: 'Jika salah satu lampu padam, lampu yang lain tetap menyala' },
      { key: 'B', text: 'Hanya membutuhkan satu kabel tunggal tanpa cabang' },
      { key: 'C', text: 'Arus listrik yang mengalir selalu nol' },
      { key: 'D', text: 'Lampu menyala semakin redup jika ditambah lampu baru' }
    ],
    correctAnswer: 'A',
    explanation: 'Rangkaian paralel memiliki cabang mandiri sehingga jika satu lampu mati atau sakelar dimatikan, rangkaian lampu lain tidak terputus.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 323,
    number: 23,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Perbedaan Gaung dan Gema',
    questionType: 'single',
    questionText: 'Bunyi pantul yang terdengar LENGKAP SETELAH bunyi asli selesai diucapkan saat kita berteriak di lereng bukit atau tebing dinamakan...',
    options: [
      { key: 'A', text: 'Gaung (kerdam)' },
      { key: 'B', text: 'Gema' },
      { key: 'C', text: 'Desibel' },
      { key: 'D', text: 'Resonansi' }
    ],
    correctAnswer: 'B',
    explanation: 'Gema adalah bunyi pantul yang terdengar jelas setelah bunyi asli selesai karena jarak dinding pemantul cukup jauh.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 324,
    number: 24,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Fungsi Bagian Bunga Sempurna',
    questionType: 'single',
    questionText: 'Alat kelamin betina pada sekuntum bunga yang menghasilkan sel telur (ovum) adalah...',
    options: [
      { key: 'A', text: 'Benang sari' },
      { key: 'B', text: 'Putik' },
      { key: 'C', text: 'Mahkota bunga' },
      { key: 'D', text: 'Kelopak bunga' }
    ],
    correctAnswer: 'B',
    explanation: 'Putik (pistil) merupakan alat kelamin betina pada bunga, sedangkan benang sari (stamen) adalah alat kelamin jantan penghasil serbuk sari.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 325,
    number: 25,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Karakteristik Planet-Planet Tata Surya',
    questionType: 'single',
    questionText: 'Planet dalam tata surya yang memiliki julukan "Planet Merah" karena permukaannya banyak mengandung oksida besi adalah...',
    options: [
      { key: 'A', text: 'Merkurius' },
      { key: 'B', text: 'Venus' },
      { key: 'C', text: 'Mars' },
      { key: 'D', text: 'Yupiter' }
    ],
    correctAnswer: 'C',
    explanation: 'Planet Mars tampak kemerahan dari bumi karena debu permukaan dan batuannya kaya akan mineral oksida besi (karat).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 326,
    number: 26,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Proses Fotosintesis pada Tumbuhan Hijau',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh ZAT YANG DIHASILKAN (produk akhir) dari proses Fotosintesis tumbuhan hijau!',
    options: [
      { key: 'A', text: 'Glukosa (karbohidrat/makanan)' },
      { key: 'B', text: 'Gas Oksigen (O₂)' },
      { key: 'C', text: 'Gas Karbon Dioksida (CO₂)' },
      { key: 'D', text: 'Energi panas berlebih' }
    ],
    correctMultipleAnswers: ['A', 'B'],
    explanation: 'Persamaan fotosintesis: 6 CO₂ + 6 H₂O + cahaya klorofil -> C₆H₁₂O₆ (Glukosa) + 6 O₂ (Oksigen).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 327,
    number: 27,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Penyakit Sistem Peredaran Darah',
    questionType: 'single',
    questionText: 'Kondisi medis yang ditandai dengan kurangnya sel darah merah (eritrosit) atau hemoglobin di dalam tubuh sehingga penderita merasa cepat letih dan pucat disebut...',
    options: [
      { key: 'A', text: 'Hipertensi' },
      { key: 'B', text: 'Anemia' },
      { key: 'C', text: 'Leukemia' },
      { key: 'D', text: 'Hemofilia' }
    ],
    correctAnswer: 'B',
    explanation: 'Anemia adalah gangguan kekurangan eritrosit atau kadar hemoglobin darah.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 328,
    number: 28,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Penyelidikan Gaya Gesek yang Menguntungkan',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh contoh penerapan GAYA GESEK YANG MENGUNTUNGKAN dalam kehidupan sehari-hari!',
    options: [
      { key: 'A', text: 'Alur berulir pada ban kendaraan agar tidak tergelincir saat jalan basah' },
      { key: 'B', text: 'Kampas rem sepeda motor yang menjepit piringan cakram roda' },
      { key: 'C', text: 'Ausnya sol sepatu setelah dipakai berbulan-bulan' },
      { key: 'D', text: 'Penggunaan amplas untuk menghaluskan permukaan kayu kasar' }
    ],
    correctMultipleAnswers: ['A', 'B', 'D'],
    explanation: 'A, B, dan D adalah manfaat gaya gesek. Opsi C adalah dampak gesekan yang merugikan (menyebabkan ausnya bahan).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 329,
    number: 29,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Gerhana Bulan Total dan Posisi Benda Langit',
    questionType: 'single',
    questionText: 'Gerhana Bulan terjadi apabila susunan posisi benda-benda langit berada pada satu garis lurus dengan urutan...',
    options: [
      { key: 'A', text: 'Matahari - Bulan - Bumi' },
      { key: 'B', text: 'Matahari - Bumi - Bulan' },
      { key: 'C', text: 'Bumi - Matahari - Bulan' },
      { key: 'D', text: 'Bulan - Matahari - Bumi' }
    ],
    correctAnswer: 'B',
    explanation: 'Gerhana bulan terjadi saat Bumi berada di antara Matahari dan Bulan dalam satu garis lurus, sehingga bayangan bumi menutupi permukaan bulan.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 330,
    number: 30,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Evaluasi Kebenaran Ekosistem dan Rantai Makanan Laut',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Fitoplankton bertindak sebagai produsen utama dalam rantai makanan laut',
        'Zooplankton memakan fitoplankton dan berperan sebagai konsumen tingkat I',
        'Ikan paus pembunuh (orca) berperan sebagai pengurai bangkai di dasar laut'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran pernyataan ekosistem laut berikut!',
    options: [],
    explanation: '1 & 2 Benar. Pernyataan 3 Salah karena paus pembunuh adalah predator puncak (konsumen puncak), bukan pengurai/dekomposer (pengurai adalah bakteri & cacing laut).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  }
];

/**
 * PAKET 02: PEMANTAPAN (Penguatan Konsep & Eksperimen Ilmiah) - 30 Soal
 */
export const QUESTIONS_IPA_02: Question[] = [
  // 1
  {
    id: 331,
    number: 1,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Adaptasi Fisiologi dan Tingkah Laku Hewan',
    questionType: 'single',
    questionText: 'Kemampuan bunglon mengubah warna kulitnya sesuai dengan lingkungan sekitarnya untuk mengelabui musuh disebut...',
    options: [
      { key: 'A', text: 'Autotomi' },
      { key: 'B', text: 'Mimikri' },
      { key: 'C', text: 'Ekolokasi' },
      { key: 'D', text: 'Kamuflase fisik' }
    ],
    correctAnswer: 'B',
    explanation: 'Mimikri adalah kemampuan adaptasi tingkah laku bunglon mengubah pigmen warna kulit menyesuaikan tempat bertengger.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 2 to 10
  {
    id: 332,
    number: 2,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Kemampuan Ekolokasi pada Kelelawar',
    questionType: 'single',
    questionText: 'Kelelawar dapat terbang dan mencari mangsa di malam hari yang gelap gulita tanpa menabrak dinding goa karena memiliki kemampuan...',
    options: [
      { key: 'A', text: 'Penglihatan mata yang sangat tajam' },
      { key: 'B', text: 'Ekolokasi (memancarkan gelombang ultrasonik dan mendengarkan pantulannya)' },
      { key: 'C', text: 'Indra penciuman yang tajam' },
      { key: 'D', text: 'Sayap berbulu tebal peredam suara' }
    ],
    correctAnswer: 'B',
    explanation: 'Ekolokasi adalah sistem navigasi berbasis sonar: kelelawar memancarkan bunyi ultrasonik dan memperkirakan jarak mangsa dari pantulan gelombang.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 333,
    number: 3,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Fungsi Batang Berongga pada Tumbuhan Teratai dan Eceng Gondok',
    questionType: 'single',
    questionText: 'Tumbuhan eceng gondok memiliki tangkai daun yang menggelembung dan berongga udara. Fungsi utama rongga udara tersebut adalah...',
    options: [
      { key: 'A', text: 'Membantu tumbuhan mengapung di permukaan air dan menyimpan oksigen' },
      { key: 'B', text: 'Menyerap zat racun dari air sungai' },
      { key: 'C', text: 'Menarik perhatian serangga penyerbuk' },
      { key: 'D', text: 'Mempercepat penguapan air' }
    ],
    correctAnswer: 'A',
    explanation: 'Rongga udara pada batang/tangkai membuat massa jenis tumbuhan lebih ringan sehingga mampu mengapung di air.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 334,
    number: 4,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Sifat Benda Cair dan Kapilaritas',
    questionType: 'single',
    questionText: 'Minyak tanah dapat naik ke ujung sumbu kompor minyak tanah sehingga api tetap menyala. Peristiwa ini merupakan contoh peristiwa...',
    options: [
      { key: 'A', text: 'Kapilaritas (meresapnya zat cair melalui celah sempit)' },
      { key: 'B', text: 'Pengembunan' },
      { key: 'C', text: 'Pembekuan' },
      { key: 'D', text: 'Gravitasi murni' }
    ],
    correctAnswer: 'A',
    explanation: 'Kapilaritas adalah gejala naik atau turunnya zat cair pada pipa atau pori-pori celah kapiler kecil.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 335,
    number: 5,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Organ Ekskresi Ginjal pada Manusia',
    questionType: 'single',
    questionText: 'Organ tubuh manusia yang berfungsi menyaring zat sisa metabolisme dan racun dari dalam darah untuk dikeluarkan dalam bentuk urin adalah...',
    options: [
      { key: 'A', text: 'Hati' },
      { key: 'B', text: 'Ginjal' },
      { key: 'C', text: 'Paru-paru' },
      { key: 'D', text: 'Kulit' }
    ],
    correctAnswer: 'B',
    explanation: 'Ginjal menyaring darah (melalui nefron) dan membentuk urin untuk membuang sisa urea dan zat sisa berlebih.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 6 to 15
  {
    id: 336,
    number: 6,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Perambatan Panas secara Radiasi',
    questionType: 'single',
    questionText: 'Energi panas dari matahari sampai ke bumi melalui ruang hampa udara dengan cara...',
    options: [
      { key: 'A', text: 'Konduksi' },
      { key: 'B', text: 'Konveksi' },
      { key: 'C', text: 'Radiasi (pancaran gelombang elektromagnetik)' },
      { key: 'D', text: 'Evaporasi' }
    ],
    correctAnswer: 'C',
    explanation: 'Radiasi adalah perpindahan kalor tanpa memerlukan zat perantara (dapat merambat melalui ruang hampa).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 337,
    number: 7,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Sifat-Sifat Cermin Cekung, Cembung, dan Datar',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh pernyataan yang BENAR mengenai bayangan pada CERMIN DATAR!',
    options: [
      { key: 'A', text: 'Ukuran bayangan sama besar dengan ukuran benda aslinya' },
      { key: 'B', text: 'Jarak bayangan ke cermin sama dengan jarak benda ke cermin' },
      { key: 'C', text: 'Bayangan bersifat tegak dan maya (semu)' },
      { key: 'D', text: 'Bayangan selalu terbalik atas-bawah' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'Sifat cermin datar: sama besar, jarak sama, tegak, maya, dan tertukar kanan-kiri (bukan atas-bawah).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 338,
    number: 8,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Klasifikasi Konduktor dan Isolator Panas',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Tembaga, aluminium, dan besi',
        'Kayu kering, plastik, dan kain katun',
        'Karet ban dan kaca tebal'
      ],
      columns: ['Konduktor Panas Baik', 'Isolator Panas']
    },
    correctMatrixAnswers: {
      0: 'Konduktor Panas Baik',
      1: 'Isolator Panas',
      2: 'Isolator Panas'
    },
    questionText: 'Kelompokkan benda-benda berikut berdasarkan sifat daya hantar panasnya!',
    options: [],
    explanation: 'Logam (tembaga, aluminium, besi) adalah konduktor baik. Kayu, plastik, kain, karet, dan kaca adalah isolator.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 339,
    number: 9,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Pengaruh Gaya Gravitasi Bumi',
    questionType: 'single',
    questionText: 'Buah kelapa yang sudah tua jatuh dari pohonnya selalu meluncur lurus ke bawah menuju permukaan tanah. Peristiwa ini dipengaruhi oleh...',
    options: [
      { key: 'A', text: 'Gaya magnet bumi' },
      { key: 'B', text: 'Gaya gravitasi bumi' },
      { key: 'C', text: 'Gaya gesek udara' },
      { key: 'D', text: 'Gaya pegas' }
    ],
    correctAnswer: 'B',
    explanation: 'Gaya gravitasi bumi menarik seluruh benda bermassa menuju pusat inti bumi.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 340,
    number: 10,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Siklus Daur Hidup Katak',
    questionType: 'single',
    questionText: 'Organ pernapasan berudu (kecebong) saat baru menetas dan hidup di air sebelum bermetamorfosis menjadi katak dewasa adalah...',
    options: [
      { key: 'A', text: 'Paru-paru' },
      { key: 'B', text: 'Insang luar' },
      { key: 'C', text: 'Trakea' },
      { key: 'D', text: 'Pundi-pundi udara' }
    ],
    correctAnswer: 'B',
    explanation: 'Berudu bernapas dengan insang luar saat hidup akuatik, kemudian berubah menjadi insang dalam, lalu bernapas dengan paru-paru dan kulit saat dewasa.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 11 to 20
  {
    id: 341,
    number: 11,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Fungsi Klorofil pada Tumbuhan',
    questionType: 'single',
    questionText: 'Zat hijau daun (klorofil) pada sel tumbuhan memiliki fungsi esensial yaitu...',
    options: [
      { key: 'A', text: 'Menyerap energi radiasi cahaya matahari untuk proses fotosintesis' },
      { key: 'B', text: 'Menyerap air dari dalam tanah' },
      { key: 'C', text: 'Mengusir hama pemakan daun' },
      { key: 'D', text: 'Menyimpan cadangan udara' }
    ],
    correctAnswer: 'A',
    explanation: 'Klorofil berfungsi menangkap foton cahaya matahari untuk menggerakkan reaksi sintesis karbohidrat.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 342,
    number: 12,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Rangka Manusia dan Perlindungan Organ Vital',
    questionType: 'single',
    questionText: 'Tulang rusuk dan tulang dada pada tubuh manusia berfungsi melindungi organ vital yaitu...',
    options: [
      { key: 'A', text: 'Otak dan mata' },
      { key: 'B', text: 'Jantung dan paru-paru' },
      { key: 'C', text: 'Lambung dan usus halus' },
      { key: 'D', text: 'Ginjal dan kandung kemih' }
    ],
    correctAnswer: 'B',
    explanation: 'Rongga dada yang dibentuk oleh tulang rusuk, dada, dan punggung melindungi jantung dan paru-paru.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 343,
    number: 13,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Pelestarian Hewan dan Tumbuhan Langka (In-situ & Ex-situ)',
    questionType: 'single',
    questionText: 'Pelestarian Komodo di habitat aslinya di Taman Nasional Komodo, Nusa Tenggara Timur tergolong pelestarian secara...',
    options: [
      { key: 'A', text: 'Ex-situ' },
      { key: 'B', text: 'In-situ (di dalam habitat asli)' },
      { key: 'C', text: 'Akuarium' },
      { key: 'D', text: 'Suaka margasatwa buatan di luar pulau' }
    ],
    correctAnswer: 'B',
    explanation: 'Pelestarian in-situ dilakukan di dalam habitat asli spesies (Taman Nasional, Cagar Alam). Ex-situ di luar habitat asli (Kebun Binatang, Taman Safari).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 344,
    number: 14,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Akibat Revolusi Bumi Terhadap Bumi',
    questionType: 'single',
    questionText: 'Peristiwa alam berikut yang disebabkan oleh REVOLUSI BUMI (gerak bumi mengelilingi matahari) adalah...',
    options: [
      { key: 'A', text: 'Pergantian siang dan malam' },
      { key: 'B', text: 'Gerak semu harian matahari dari timur ke barat' },
      { key: 'C', text: 'Pergantian musim di belahan bumi utara dan selatan serta perbedaan lamanya siang dan malam' },
      { key: 'D', text: 'Pembagian 3 daerah waktu di Indonesia' }
    ],
    correctAnswer: 'C',
    explanation: 'Revolusi bumi menyebabkan perubahan musim, pergeseran semu tahunan matahari, dan perbedaan lamanya siang-malam.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 345,
    number: 15,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Sifat Bunyi Audiosonik, Infrasonik, dan Ultrasonik',
    questionType: 'single',
    questionText: 'Frekuensi gelombang bunyi yang dapat didengar secara normal oleh telinga manusia (bunyi Audiosonik) berada pada rentang...',
    options: [
      { key: 'A', text: 'Kurang dari 20 Hz' },
      { key: 'B', text: '20 Hz sampai 20.000 Hz' },
      { key: 'C', text: 'Lebih dari 20.000 Hz' },
      { key: 'D', text: '50.000 Hz sampai 100.000 Hz' }
    ],
    correctAnswer: 'B',
    explanation: 'Rentang pendengaran manusia normal: Audiosonik = 20 Hz - 20.000 Hz. Di bawah 20 Hz = Infrasonik; di atas 20.000 Hz = Ultrasonik.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  // 16 to 30
  {
    id: 346,
    number: 16,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Perubahan Wujud Mengembun dalam Kehidupan',
    questionType: 'single',
    questionText: 'Dinding luar gelas yang berisi es teh menjadi basah dan berair. Titik-titik air tersebut berasal dari...',
    options: [
      { key: 'A', text: 'Air es yang merembes keluar melewati pori-pori kaca gelas' },
      { key: 'B', text: 'Uap air di udara sekitar yang mengalami pendinginan (mengembun) saat menyentuh permukaan gelas dingin' },
      { key: 'C', text: 'Kaca gelas yang mencair' },
      { key: 'D', text: 'Zat asam di dalam teh' }
    ],
    correctAnswer: 'B',
    explanation: 'Udara luar mengandung uap air gas. Ketika menyentuh permukaan gelas bersuhu dingin, uap air melepaskan kalor dan mengembun menjadi butiran air cair.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 347,
    number: 17,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Pencemaran Air dan Efek Eutrofikasi',
    questionType: 'single',
    questionText: 'Pembuangan limbah detergen dan pupuk pertanian kimia ke danau menyebabkan ledakan tumbuhan eceng gondok (eutrofikasi). Dampak buruknya bagi ikan dan biota air adalah...',
    options: [
      { key: 'A', text: 'Kadar oksigen terlarut dalam air berkurang drastis sehingga ikan mati massal' },
      { key: 'B', text: 'Ikan bertambah gemuk dan berkembang biak cepat' },
      { key: 'C', text: 'Air danau menjadi sangat jernih' },
      { key: 'D', text: 'Suhu air meningkat menjadi mendidih' }
    ],
    correctAnswer: 'A',
    explanation: 'Pembusukan eceng gondok oleh bakteri menyerap hampir seluruh oksigen terlarut (hipoksia) dan menghalangi sinar matahari ke dasar air.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 348,
    number: 18,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Ciri-Ciri Perkembangbiakan Vegetatif Alami',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh tumbuhan yang berkembang biak dengan RIZOMA (Akar Tinggal)!',
    options: [
      { key: 'A', text: 'Jahe' },
      { key: 'B', text: 'Kunyit' },
      { key: 'C', text: 'Lengkuas' },
      { key: 'D', text: 'Kentang' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'Jahe, kunyit, temulawak, dan lengkuas berkembang biak dengan akar tinggal (rizoma). Kentang berkembang biak dengan umbi batang.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 349,
    number: 19,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Pemisahan Campuran Filtrasi dan Evaporasi',
    questionType: 'single',
    questionText: 'Metode yang digunakan oleh petani garam di tepi pantai untuk memisahkan garam dari air laut adalah...',
    options: [
      { key: 'A', text: 'Penyaringan (Filtrasi)' },
      { key: 'B', text: 'Penguapan (Evaporasi / Kristalisasi)' },
      { key: 'C', text: 'Penyulingan (Distilasi)' },
      { key: 'D', text: 'Pengendapan (Sedimentasi)' }
    ],
    correctAnswer: 'B',
    explanation: 'Air laut ditampung di tambak garam, lalu diuapkan oleh panas sinar matahari hingga menyisakan kristal garam murni.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 350,
    number: 20,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Evaluasi Kebenaran Fungsi Enzim Pencernaan',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Enzim ptialin (amilase mulut) mengubah zat tepung (karbohidrat) menjadi maltosa/glukosa',
        'Enzim lipase pada usus halus berfungsi memecah lemak menjadi asam lemak dan gliserol',
        'Usus besar berfungsi menyerap sari-sari makanan utama bagi peredaran darah'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran fungsi organ dan enzim pencernaan berikut!',
    options: [],
    explanation: '1 & 2 Benar. Pernyataan 3 Salah karena penyerapan sari makanan terjadi di usus halus (jejunum/ileum). Usus besar berfungsi menyerap air dan pembusukan sisa makanan.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 21 to 30
  {
    id: 351,
    number: 21,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Perkembangbiakan Generatif pada Hewan (Ovipar, Vivipar, Ovovivipar)',
    questionType: 'single',
    questionText: 'Hewan berikut yang berkembang biak dengan cara OVOVIVIPAR (bertelur dan melahirkan) adalah...',
    options: [
      { key: 'A', text: 'Ayam dan bebek' },
      { key: 'B', text: 'Kuda dan sapi' },
      { key: 'C', text: 'Ikan hiu martil, ular kadut, dan platipus/kadal tertentu' },
      { key: 'D', text: 'Kucing dan harimau' }
    ],
    correctAnswer: 'C',
    explanation: 'Ovovivipar: embrio berkembang di dalam telur yang tetap berada di dalam tubuh induk sampai menetas, lalu dilahirkan keluar.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 352,
    number: 22,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Sifat Pembentukan Pelangi (Dispersi Cahaya)',
    questionType: 'single',
    questionText: 'Pelangi indah yang tampak di langit setelah hujan terjadi karena...',
    options: [
      { key: 'A', text: 'Sinar matahari dipantulkan oleh kaca gedung tinggi' },
      { key: 'B', text: 'Sinar matahari polikromatik diuraikan dan dibiaskan oleh butir-butir air hujan di atmosfer (dispersi cahaya)' },
      { key: 'C', text: 'Cahaya bulan yang menyinari awan tebal' },
      { key: 'D', text: 'Udara panas membakar uap air' }
    ],
    correctAnswer: 'B',
    explanation: 'Dispersi adalah peristiwa penguraian cahaya putih (polikromatik) matahari menjadi spektrum warna me-ji-ku-hi-bi-ni-u oleh butiran air hujan.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 353,
    number: 23,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Penalaran Energi Listrik Tenaga Surya',
    questionType: 'single',
    questionText: 'Alat elektronik ramah lingkungan yang dipasang di atap rumah untuk mengubah energi cahaya matahari langsung menjadi energi listrik adalah...',
    options: [
      { key: 'A', text: 'Panel Surya (Sel Fotovoltaik)' },
      { key: 'B', text: 'Turbin angin' },
      { key: 'C', text: 'Dinamo sepeda' },
      { key: 'D', text: 'Generator diesel' }
    ],
    correctAnswer: 'A',
    explanation: 'Panel surya fotovoltaik mengonversi energi foton cahaya matahari menjadi arus listrik searah (DC).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 354,
    number: 24,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Fungsi Akar Napas pada Pohon Bakau (Mangrove)',
    questionType: 'single',
    questionText: 'Hutan bakau (mangrove) di pesisir pantai memiliki sistem akar napas (pneumatofora) yang menonjol ke atas permukaan lumpur. Fungsi adaptasi ini adalah...',
    options: [
      { key: 'A', text: 'Menyerap oksigen dari udara bebas karena lumpur pesisir miskin oksigen' },
      { key: 'B', text: 'Menangkap ikan-ikan kecil' },
      { key: 'C', text: 'Menahan air laut agar tidak pasang' },
      { key: 'D', text: 'Menghasilkan garam' }
    ],
    correctAnswer: 'A',
    explanation: 'Lumpur pasang surut anaerobik (miskin O₂), sehingga akar napas menjulang ke atas untuk pertukaran gas pernapasan.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 355,
    number: 25,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Sifat Bahan Konduktor Listrik',
    questionType: 'single',
    questionText: 'Kabel listrik tembaga selalu dilapisi karet plastik tebal di bagian luarnya. Tujuan pelapisan karet tersebut adalah...',
    options: [
      { key: 'A', text: 'Menambah berat kabel agar tidak melayang' },
      { key: 'B', text: 'Sebagai isolator listrik yang melindungi manusia dari sengatan arus listrik' },
      { key: 'C', text: 'Membuat arus listrik mengalir lebih cepat' },
      { key: 'D', text: 'Menghangatkan kabel tembaga' }
    ],
    correctAnswer: 'B',
    explanation: 'Plastik/karet adalah isolator listrik yang mencegah kebocoran arus dan korsleting serta mencegah bahaya tersengat listrik.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 356,
    number: 26,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Struktur Lapisan Atmosfer Bumi',
    questionType: 'single',
    questionText: 'Lapisan atmosfer bumi tempat berlangsungnya peristiwa cuaca seperti awan, hujan, angin, dan petir adalah...',
    options: [
      { key: 'A', text: 'Troposfer' },
      { key: 'B', text: 'Stratosfer' },
      { key: 'C', text: 'Mesosfer' },
      { key: 'D', text: 'Termosfer' }
    ],
    correctAnswer: 'A',
    explanation: 'Troposfer adalah lapisan paling bawah (0-12 km) tempat terjadinya fenomena dinamika cuaca dan iklim.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 357,
    number: 27,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Pencegahan Erosi Tanah dengan Terasering',
    questionType: 'single',
    questionText: 'Pembuatan lahan persawahan berundak-undak (terasering / sengkedan) di lereng bukit atau pegunungan bertujuan untuk...',
    options: [
      { key: 'A', text: 'Mempermudah penggunaan traktor besar' },
      { key: 'B', text: 'Mengurangi laju aliran air hujan dan mencegah erosi serta tanah longsor' },
      { key: 'C', text: 'Menambah ketinggian gunung' },
      { key: 'D', text: 'Mengusir hama burung pipit' }
    ],
    correctAnswer: 'B',
    explanation: 'Terasering memperlambat kecepatan limpasan air permukaan lereng sehingga mengikis tanah dan mencegah longsor.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 358,
    number: 28,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Pernyataan Analitis Sistem Ekskresi Kulit',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh fungsi KULIT manusia yang BENAR!',
    options: [
      { key: 'A', text: 'Mengeluarkan keringat untuk menjaga kestabilan suhu tubuh (termoregulasi)' },
      { key: 'B', text: 'Melindungi jaringan tubuh dari gesekan dan kuman penyakit' },
      { key: 'C', text: 'Sebagai indra peraba yang peka terhadap sentuhan, suhu, dan rasa nyeri' },
      { key: 'D', text: 'Memompa darah bersih ke seluruh tubuh' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'A, B, dan C adalah fungsi penting kulit. Opsi D adalah fungsi jantung.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 359,
    number: 29,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Penalaran Hubungan Daur Hidup Nyamuk dan Penyakit DBD',
    questionType: 'single',
    questionText: 'Gerakan 3M Plus (Menguras penampungan air, Menutup rapat wadah air, Mendaur ulang barang bekas) bertujuan memutus daur hidup nyamuk Aedes aegypti pada fase...',
    options: [
      { key: 'A', text: 'Nyamuk dewasa saat terbang' },
      { key: 'B', text: 'Fase telur, jentik-jentik (larva), dan pupa di genangan air' },
      { key: 'C', text: 'Fase kepompong di atas pohon' },
      { key: 'D', text: 'Fase nimfa di tanah' }
    ],
    correctAnswer: 'B',
    explanation: 'Nyamuk bertelur dan berkembang biak di genangan air bersih. Menguras dan menutup wadah air memusnahkan jentik dan pupa sebelum menjadi nyamuk dewasa.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 360,
    number: 30,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Evaluasi Kebenaran Fakta Tata Surya dan Bintang',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Matahari adalah bintang yang memancarkan cahaya dan panas sendiri akibat reaksi fusi nuklir',
        'Bulan memancarkan cahaya sendiri seperti matahari',
        'Yupiter merupakan planet terbesar di tata surya'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Salah',
      2: 'Benar'
    },
    questionText: 'Evaluasi kebenaran setiap pernyataan astronomi tata surya berikut!',
    options: [],
    explanation: '1 & 3 Benar. Pernyataan 2 Salah karena bulan adalah satelit alami yang tidak memiliki cahaya sendiri (hanya memantulkan sinar matahari).',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  }
];

/**
 * PAKET 03: SIMULASI REALISTIS (Standar Asesmen Sains Pusmendik) - 30 Soal
 */
export const QUESTIONS_IPA_03: Question[] = [
  // 1
  {
    id: 361,
    number: 1,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Klasifikasi Hewan Berdasarkan Jenis Makanan',
    questionType: 'single',
    questionText: 'Hewan pemakan tumbuhan dan daging sekaligus (hewan pemakan segala) disebut...',
    options: [
      { key: 'A', text: 'Herbivora' },
      { key: 'B', text: 'Karnivora' },
      { key: 'C', text: 'Omnivora' },
      { key: 'D', text: 'Insektivora' }
    ],
    correctAnswer: 'C',
    explanation: 'Omnivora memakan tumbuhan maupun hewan lain (contoh: ayam, beruang, tikus, bebek).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 2 to 10
  {
    id: 362,
    number: 2,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Ciri Khusus Tanaman Kaktus di Gurun Pasir',
    questionType: 'single',
    questionText: 'Tanaman kaktus dapat bertahan hidup di daerah gurun yang sangat kering dan panas karena memiliki adaptasi morfologi berupa...',
    options: [
      { key: 'A', text: 'Daun lebar dan tipis untuk memperbanyak stomata' },
      { key: 'B', text: 'Daun bermodifikasi menjadi duri untuk mengurangi penguapan dan batang tebal berlapis lilin penyimpan air' },
      { key: 'C', text: 'Akar napas yang menjulang tinggi di atas tanah' },
      { key: 'D', text: 'Bunga berbau busuk untuk menarik lalat' }
    ],
    correctAnswer: 'B',
    explanation: 'Duri kaktus mengurangi penguapan air secara drastis, sedangkan batang sukulen berlapis lilin berfungsi sebagai tandon penyimpan air.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 363,
    number: 3,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Perubahan Wujud Benda Mengkristal',
    questionType: 'single',
    questionText: 'Peristiwa terbentuknya salju di atmosfer atau butiran bunga es di dalam dinding freezer kulkas merupakan contoh perubahan wujud...',
    options: [
      { key: 'A', text: 'Mengkristal (deposisi: gas menjadi padat)' },
      { key: 'B', text: 'Mencair' },
      { key: 'C', text: 'Menguap' },
      { key: 'D', text: 'Menyublim' }
    ],
    correctAnswer: 'A',
    explanation: 'Mengkristal (deposisi) adalah perubahan wujud gas langsung menjadi zat padat saat mengalami penurunan suhu ekstrem.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 364,
    number: 4,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Penerapan Konduksi Panas pada Alat Masak',
    questionType: 'single',
    questionText: 'Panci masak aluminium dibuat dengan pegangan berbahan ebonit atau kayu tebal. Penggunaan bahan ebonit pada pegangan bertujuan...',
    options: [
      { key: 'A', text: 'Mempercepat perpindahan panas ke tangan' },
      { key: 'B', text: 'Menahan panas (isolator) agar tangan tidak melepuh saat mengangkat panci panas' },
      { key: 'C', text: 'Membuat masakan lebih gurih' },
      { key: 'D', text: 'Mempercantik warna panci' }
    ],
    correctAnswer: 'B',
    explanation: 'Ebonit dan kayu merupakan isolator termal yang menghambat rambatan kalor dari badan panci aluminium.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 365,
    number: 5,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Organ Sistem Ekskresi Paru-Paru',
    questionType: 'single',
    questionText: 'Sebagai organ ekskresi, zat sisa metabolisme yang dikeluarkan oleh paru-paru saat mengembuskan napas adalah...',
    options: [
      { key: 'A', text: 'Urin dan asam urat' },
      { key: 'B', text: 'Gas Karbon Dioksida (CO₂) dan Uap Air (H₂O)' },
      { key: 'C', text: 'Empedu dan getah lambung' },
      { key: 'D', text: 'Keringat dan garam mineral' }
    ],
    correctAnswer: 'B',
    explanation: 'Paru-paru mengekskresikan gas CO₂ dan uap air hasil oksidasi biologi sel-sel tubuh.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  // 6 to 15
  {
    id: 366,
    number: 6,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Peran Trombosit dalam Pembekuan Darah',
    questionType: 'single',
    questionText: 'Komponen darah manusia yang bertugas membekukan darah dan menutup luka saat kulit tergores adalah...',
    options: [
      { key: 'A', text: 'Eritrosit (sel darah merah)' },
      { key: 'B', text: 'Leukosit (sel darah putih)' },
      { key: 'C', text: 'Trombosit (keping darah)' },
      { key: 'D', text: 'Plasma darah cair' }
    ],
    correctAnswer: 'C',
    explanation: 'Trombosit pecah saat terjadi luka dan melepaskan enzim trombokinase untuk membentuk benang fibrin yang menutup luka.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 367,
    number: 7,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Pemanfaatan Energi Terbarukan Biomassa',
    questionType: 'single',
    questionText: 'Pemanfaatan kotoran hewan ternak (sapi/kambing) yang diolah di dalam tabung digester kedap udara untuk menghasilkan gas bahan bakar memasak disebut energi...',
    options: [
      { key: 'A', text: 'Biogas (Biomassa)' },
      { key: 'B', text: 'Geotermal' },
      { key: 'C', text: 'Nuklir' },
      { key: 'D', text: 'Batu bara' }
    ],
    correctAnswer: 'A',
    explanation: 'Biogas dihasilkan melalui fermentasi anaerobik kotoran organik ternak yang menghasilkan gas metana untuk bahan bakar ramah lingkungan.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 368,
    number: 8,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Percobaan Pembuktian Fotosintesis Menghasilkan Gas Oksigen',
    questionType: 'single',
    questionText: 'Pada percobaan Ingenhousz menggunakan tanaman air Hydrilla yang diletakkan di bawah corong terbalik dan disinari matahari, muncul gelembung-gelembung gas di tabung reaksi. Gelembung gas tersebut membuktikan bahwa fotosintesis...',
    options: [
      { key: 'A', text: 'Menghasilkan gas Oksigen (O₂)' },
      { key: 'B', text: 'Menghasilkan air mendidih' },
      { key: 'C', text: 'Menyerap seluruh oksigen di air' },
      { key: 'D', text: 'Mengubah air menjadi hidrogen murni' }
    ],
    correctAnswer: 'A',
    explanation: 'Percobaan Ingenhousz membuktikan bahwa reaksi fotosintesis menghasilkan gas oksigen (O₂).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 369,
    number: 9,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Pembuatan Magnet dengan Cara Elektromagnetik',
    questionType: 'single',
    questionText: 'Sebuah paku besi besar dililiti kawat tembaga berisolasi, kemudian kedua ujung kawat dihubungkan ke kutub baterai. Paku tersebut mampu menarik jarum pentul. Cara pembuatan magnet ini disebut...',
    options: [
      { key: 'A', text: 'Induksi magnet' },
      { key: 'B', text: 'Elektromagnetik (aliran arus listrik)' },
      { key: 'C', text: 'Gosokan searah' },
      { key: 'D', text: 'Pemanasan' }
    ],
    correctAnswer: 'B',
    explanation: 'Elektromagnetik adalah pembuatan magnet sementara dengan mengalirkan arus listrik searah melalui kumparan kawat.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 370,
    number: 10,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Evaluasi Dampak Pemanasan Global (Global Warming)',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Kenaikan kadar gas rumah kaca (CO₂ dan metana) memerangkap panas di atmosfer',
        'Pencairan lapisan es di kutub menyebabkan kenaikan permukaan air laut global',
        'Pemanasan global membuat iklim dunia semakin stabil dan sejuk'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran pernyataan dampak pemanasan global berikut!',
    options: [],
    explanation: '1 & 2 Benar. Pernyataan 3 Salah karena global warming memicu cuaca ekstrem, kekeringan, badai, dan peningkatan suhu bumi.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 11 to 20
  {
    id: 371,
    number: 11,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Sistem Pernapasan Serangga dengan Trakea',
    questionType: 'single',
    questionText: 'Serangga seperti belalang dan capung bernapas menggunakan sistem pembuluh udara bercabang yang bermuara pada lubang pori-pori di sisi tubuhnya (stigma/spirakel). Sistem organ pernapasan ini disebut...',
    options: [
      { key: 'A', text: 'Trakea' },
      { key: 'B', text: 'Insang' },
      { key: 'C', text: 'Paru-paru buku' },
      { key: 'D', text: 'Kloaka' }
    ],
    correctAnswer: 'A',
    explanation: 'Trakea mengedarkan oksigen langsung ke seluruh sel jaringan tubuh serangga tanpa perantara sel darah.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 372,
    number: 12,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Fungsi Gigi Seri, Taring, dan Geraham',
    questionType: 'single',
    questionText: 'Gigi pada rongga mulut manusia yang memiliki ujung runcing dan berfungsi merobek atau mengoyak makanan adalah...',
    options: [
      { key: 'A', text: 'Gigi seri' },
      { key: 'B', text: 'Gigi taring' },
      { key: 'C', text: 'Gigi geraham depan' },
      { key: 'D', text: 'Gigi geraham belakang' }
    ],
    correctAnswer: 'B',
    explanation: 'Gigi taring berbentuk lancip untuk mengoyak daging/makanan liat. Gigi seri untuk memotong, gigi geraham untuk mengunyah/melumat.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 373,
    number: 13,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Pengaruh Rotasi Bumi Terhadap Pembelokan Arah Arus Laut',
    questionType: 'single',
    questionText: 'Pembelokan arah angin dan arus laut di permukaan bumi akibat gaya semu rotasi bumi dinamakan...',
    options: [
      { key: 'A', text: 'Efek Coriolis' },
      { key: 'B', text: 'Efek Rumah Kaca' },
      { key: 'C', text: 'Pasang surut gravitasi' },
      { key: 'D', text: 'El Nino' }
    ],
    correctAnswer: 'A',
    explanation: 'Gaya Coriolis adalah gaya pembelokan arah angin dan arus laut akibat gerak rotasi bumi pada porosnya.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 374,
    number: 14,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Ciri Perkembangbiakan Vegetatif Buatan Mencangkok',
    questionType: 'single',
    questionText: 'Keuntungan utama perkembangbiakan vegetatif buatan dengan cara MENCANGKOK pohon buah adalah...',
    options: [
      { key: 'A', text: 'Pohon memiliki perakaran tunggang yang sangat kokoh' },
      { key: 'B', text: 'Tanaman cepat berbuah dan mewarisi 100% sifat unggul induknya' },
      { key: 'C', text: 'Dapat menghasilkan varietas baru yang berbeda dari induk' },
      { key: 'D', text: 'Pohon berumur lebih panjang ratusan tahun' }
    ],
    correctAnswer: 'B',
    explanation: 'Cangkok menghasilkan tanaman yang cepat berbuah dan identik dengan kualitas manis/lebatnya pohon induk.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 375,
    number: 15,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Peristiwa Pemuaian Benda Gas dan Udara Panas',
    questionType: 'single',
    questionText: 'Balon udara dapat terangkat naik melayang tinggi ke angkasa saat udara di dalam balon dipanaskan dengan pembakar gas karena...',
    options: [
      { key: 'A', text: 'Udara panas memuai sehingga massa jenisnya menjadi lebih ringan daripada udara dingin di sekitarnya' },
      { key: 'B', text: 'Udara panas menjadi lebih berat' },
      { key: 'C', text: 'Gaya gravitasi bumi berhenti bekerja pada benda panas' },
      { key: 'D', text: 'Udara di dalam balon berubah menjadi zat cair' }
    ],
    correctAnswer: 'A',
    explanation: 'Udara yang dipanaskan memuai volumenya dan massa jenisnya menurun sehingga menghasilkan gaya apung ke atas.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 16 to 30
  {
    id: 376,
    number: 16,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Sifat Pelapukan Kimiawi, Mekanik, dan Biologis',
    questionType: 'single',
    questionText: 'Batuan keras di candi atau tebing yang retak dan pecah akibat ditumbuhi lumut dan akar pepohonan merupakan contoh pelapukan...',
    options: [
      { key: 'A', text: 'Pelapukan biologis (organik)' },
      { key: 'B', text: 'Pelapukan mekanik (fisika)' },
      { key: 'C', text: 'Pelapukan kimiawi' },
      { key: 'D', text: 'Pelapukan angin' }
    ],
    correctAnswer: 'A',
    explanation: 'Pelapukan biologis disebabkan oleh aktivitas makhluk hidup (akar tumbuhan, lumut, mikroorganisme).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 377,
    number: 17,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Gerhana Matahari Cincin',
    questionType: 'single',
    questionText: 'Gerhana Matahari Cincin terjadi apabila...',
    options: [
      { key: 'A', text: 'Bumi berada di titik terdekat dengan matahari' },
      { key: 'B', text: 'Bulan berada pada titik terjauhnya dari bumi (apogee) sehingga bayangan piringan bulan tidak menutupi seluruh piringan matahari' },
      { key: 'C', text: 'Bulan hancur tertabrak asteroid' },
      { key: 'D', text: 'Bumi tertutup awan hitam pekat' }
    ],
    correctAnswer: 'B',
    explanation: 'Saat bulan di titik apogee, diameter semu bulan lebih kecil dari matahari sehingga tepi matahari tampak seperti cincin api bercahaya.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  {
    id: 378,
    number: 18,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Ciri-Ciri Perkembangbiakan Spora pada Paku dan Jamur',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh tumbuhan yang berkembang biak dengan SPORA!',
    options: [
      { key: 'A', text: 'Tumbuhan Paku (Pakis)' },
      { key: 'B', text: 'Lumut' },
      { key: 'C', text: 'Jamur' },
      { key: 'D', text: 'Pohon Mangga' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'Tumbuhan paku, lumut, dan jamur membentuk sporangium penghasil spora. Mangga berkembang biak dengan biji (generatif).',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 379,
    number: 19,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Penerapan Hukum Kekekalan Energi',
    questionType: 'single',
    questionText: 'Pembangkit Listrik Tenaga Air (PLTA) memanfaatkan aliran air bendungan yang deras untuk memutar turbin generator. Urutan perubahan energi yang terjadi adalah...',
    options: [
      { key: 'A', text: 'Energi Potensial Air -> Energi Kinetik/Gerak Turbin -> Energi Listrik' },
      { key: 'B', text: 'Energi Kimia -> Energi Panas -> Energi Listrik' },
      { key: 'C', text: 'Energi Listrik -> Energi Bunyi -> Energi Gerak' },
      { key: 'D', text: 'Energi Nuklir -> Energi Listrik' }
    ],
    correctAnswer: 'A',
    explanation: 'Air di ketinggian memiliki energi potensial -> mengalir menjadi kinetik menggerakkan turbin -> generator menghasilkan energi listrik.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 380,
    number: 20,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Evaluasi Kebenaran Karakteristik Planet Terestrial dan Jovian',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Merkurius, Venus, Bumi, dan Mars merupakan kelompok planet dalam (berbatu/terestrial)',
        'Yupiter, Saturnus, Uranus, dan Neptunus merupakan kelompok planet luar (raksasa gas/jovian)',
        'Sabuk Asteroid terletak di antara orbit planet Bumi dan Mars'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran klasifikasi sistem tata surya berikut!',
    options: [],
    explanation: '1 & 2 Benar. Pernyataan 3 Salah karena sabuk asteroid terletak di antara orbit planet Mars dan Yupiter.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  },
  // 21 to 30
  {
    id: 381,
    number: 21,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Simbiosis Parasitisme Benalu dan Pohon Inang',
    questionType: 'single',
    questionText: 'Tumbuhan benalu memiliki akar khusus (haustorium) yang menembus jaringan pengangkut pohon inang. Hubungan ini merugikan pohon inang karena...',
    options: [
      { key: 'A', text: 'Benalu menyerap air dan mineral hasil serapan akar pohon inang' },
      { key: 'B', text: 'Benalu menaungi tanah dari sinar matahari' },
      { key: 'C', text: 'Benalu mendatangkan ulat pemakan kayu' },
      { key: 'D', text: 'Benalu mengubah warna kulit pohon' }
    ],
    correctAnswer: 'A',
    explanation: 'Benalu adalah parasit obligat/hemiparasit yang mencuri air dan hara mineral dari pembuluh xilem inang sehingga inang merana.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 382,
    number: 22,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Pemisahan Warna Kromatografi Kertas Sederhana',
    questionType: 'single',
    questionText: 'Titik tinta spidol hitam pada kertas saring yang dicelupkan ujungnya ke dalam air merambat dan terurai menjadi warna ungu, biru, dan kuning. Pemisahan campuran ini dinamakan...',
    options: [
      { key: 'A', text: 'Kromatografi' },
      { key: 'B', text: 'Sentrifugasi' },
      { key: 'C', text: 'Sublimasi' },
      { key: 'D', text: 'Distilasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Kromatografi memisahkan zat warna berdasarkan perbedaan kecepatan rambat zat terlarut pada fase diam (kertas) dan fase gerak (air).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 383,
    number: 23,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Peredaran Darah Kecil pada Manusia',
    questionType: 'single',
    questionText: 'Urutan jalur peredaran darah KECIL (peredaran darah paru-paru) yang benar adalah...',
    options: [
      { key: 'A', text: 'Bilik Kanan -> Arteri Pulmonalis -> Paru-paru -> Vena Pulmonalis -> Serambi Kiri' },
      { key: 'B', text: 'Bilik Kiri -> Aorta -> Seluruh Tubuh -> Vena Cava -> Serambi Kanan' },
      { key: 'C', text: 'Serambi Kanan -> Bilik Kiri -> Paru-paru -> Seluruh Tubuh' },
      { key: 'D', text: 'Paru-paru -> Serambi Kanan -> Bilik Kiri -> Ginjal' }
    ],
    correctAnswer: 'A',
    explanation: 'Peredaran darah kecil: Bilik kanan memompa darah kotor ke paru-paru via arteri pulmonalis, lalu darah bersih kembali ke serambi kiri via vena pulmonalis.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 384,
    number: 24,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Fungsi Stomata pada Daun Tumbuhan',
    questionType: 'single',
    questionText: 'Mulut daun (stomata) pada permukaan daun tumbuhan memiliki peran penting dalam...',
    options: [
      { key: 'A', text: 'Pertukaran gas pernapasan (O₂ dan CO₂) serta pelepasan uap air dalam proses transpirasi' },
      { key: 'B', text: 'Menyerap pupuk dari udara' },
      { key: 'C', text: 'Menghasilkan bunga' },
      { key: 'D', text: 'Melindungi daun dari serangan jamur' }
    ],
    correctAnswer: 'A',
    explanation: 'Stomata membuka dan menutup untuk mengatur pertukaran gas fotosintesis/respirasi dan laju transpirasi air.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 385,
    number: 25,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Ciri-Ciri Perkembangbiakan Okulasi (Menempel Mata Tunas)',
    questionType: 'single',
    questionText: 'Tujuan utama petani melakukan okulasi (menempel mata tunas) antara pohon mangga berakar kokoh tapi buahnya asam dengan pohon mangga berbuah manis lebat adalah...',
    options: [
      { key: 'A', text: 'Mendapatkan tanaman baru yang memiliki perakaran kuat sekaligus menghasilkan buah yang manis lebat' },
      { key: 'B', text: 'Membuat pohon mangga berubah warna daunnya' },
      { key: 'C', text: 'Mencegah pohon berbuah' },
      { key: 'D', text: 'Mengurangi kebutuhan air' }
    ],
    correctAnswer: 'A',
    explanation: 'Okulasi menggabungkan sifat unggul batang bawah (tahan hama/akar kuat) dan mata tunas batang atas (buah manis berkualitas).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 386,
    number: 26,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Fungsi Ozon (O₃) di Lapisan Stratosfer',
    questionType: 'single',
    questionText: 'Lapisan gas Ozon (O₃) di stratosfer sangat berharga bagi kelangsungan hidup makhluk di bumi karena berfungsi...',
    options: [
      { key: 'A', text: 'Menyerap dan menyaring radiasi sinar ultraviolet (UV-B) berbahaya dari matahari' },
      { key: 'B', text: 'Mendinginkan air laut' },
      { key: 'C', text: 'Menghasilkan oksigen untuk bernapas' },
      { key: 'D', text: 'Menarik meteorit agar jatuh ke laut' }
    ],
    correctAnswer: 'A',
    explanation: 'Lapisan ozon melindungi kehidupan di bumi dari radiasi UV berbahaya yang dapat menyebabkan kanker kulit dan katarak.',
    difficulty: 'Mudah',
    cognitiveLevel: 'LOTS'
  },
  {
    id: 387,
    number: 27,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Penerapan Prinsip Tuas / Pengungkit Jenis Pertama',
    questionType: 'single',
    questionText: 'Peralatan sehari-hari berikut yang menerapkan prinsip TUAS JENIS PERTAMA (titik tumpu berada di antara titik beban dan titik kuasa) adalah...',
    options: [
      { key: 'A', text: 'Gunting dan tang' },
      { key: 'B', text: 'Gerobak dorong roda satu' },
      { key: 'C', text: 'Pinset dan sekop' },
      { key: 'D', text: 'Pemotong kertas' }
    ],
    correctAnswer: 'A',
    explanation: 'Gunting dan tang memiliki titik tumpu (poros baut) di tengah-tengah antara beban (mata pisau) dan kuasa (pegangan tangan).',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 388,
    number: 28,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Pernyataan Analitis Hubungan Ekosistem dan Dekomposer',
    questionType: 'complex_multiple',
    questionText: 'Pilihlah seluruh organisme yang berperan sebagai PENGURAI (Dekomposer/Detritivor) dalam ekosistem tanah!',
    options: [
      { key: 'A', text: 'Bakteri pengurai' },
      { key: 'B', text: 'Jamur saprofit' },
      { key: 'C', text: 'Cacing tanah' },
      { key: 'D', text: 'Tanaman jagung' }
    ],
    correctMultipleAnswers: ['A', 'B', 'C'],
    explanation: 'Bakteri, jamur pembusuk, dan cacing merombak sisa materi organik mati menjadi mineral hara tanah. Jagung adalah produsen.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 389,
    number: 29,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Penalaran Fenomena Pemuaian Celah Rel Kereta Api',
    questionType: 'single',
    questionText: 'Pemasangan sambungan rel kereta api sengaja diberi celah/jarak renggang beberapa milimeter. Alasan ilmiah di balik rancangan ini adalah...',
    options: [
      { key: 'A', text: 'Menghemat penggunaan besi baja' },
      { key: 'B', text: 'Memberi ruang pemuaian batang rel saat cuaca panas di siang hari agar rel tidak bengkok atau melengkung' },
      { key: 'C', text: 'Membuat suara kereta api terdengar berirama' },
      { key: 'D', text: 'Memudahkan air hujan mengalir keluar' }
    ],
    correctAnswer: 'B',
    explanation: 'Besi rel memuai memanjang saat menerima kalor panas matahari. Celah renggang mencegah rel saling mendesak dan bengkok.',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS'
  },
  {
    id: 390,
    number: 30,
    category: 'IPA & Sains',
    subjectCode: 'IPA',
    topic: 'Evaluasi Kebenaran Daur Air dan Upaya Konservasi Tanah',
    questionType: 'matrix',
    matrixConfig: {
      rows: [
        'Reboisasi (penanaman hutan kembali) meningkatkan kemampuan tanah menyerap air hujan (infiltrasi)',
        'Betonisasi halaman rumah tanpa lubang biopori memperbesar aliran limpasan air permukaan dan memicu banjir',
        'Penebangan hutan secara liar membuat cadangan air tanah semakin bertambah banyak'
      ],
      columns: ['Benar', 'Salah']
    },
    correctMatrixAnswers: {
      0: 'Benar',
      1: 'Benar',
      2: 'Salah'
    },
    questionText: 'Evaluasi kebenaran dampak aktivitas manusia terhadap siklus air tanah!',
    options: [],
    explanation: '1 & 2 Benar. Pernyataan 3 Salah karena hutan gundul menyebabkan air langsung hanyut mengikis tanah tanpa terserap menjadi cadangan air tanah.',
    difficulty: 'Tantangan',
    cognitiveLevel: 'HOTS'
  }
];

// Export Default Gabungan
export const QUESTIONS_IPA: Question[] = [
  ...QUESTIONS_IPA_01,
  ...QUESTIONS_IPA_02,
  ...QUESTIONS_IPA_03
];
