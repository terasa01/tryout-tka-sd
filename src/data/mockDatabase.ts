import { ExamPackage, Question, Student } from '../types/quiz';
import { 
  QUESTIONS_MATEMATIKA, 
  QUESTIONS_MTK_01, 
  QUESTIONS_MTK_02, 
  QUESTIONS_MTK_03 
} from './questionsMatematika';
import { 
  QUESTIONS_BAHASA, 
  QUESTIONS_BIN_01, 
  QUESTIONS_BIN_02, 
  QUESTIONS_BIN_03 
} from './questionsBahasa';
import { 
  QUESTIONS_IPA, 
  QUESTIONS_IPA_01, 
  QUESTIONS_IPA_02, 
  QUESTIONS_IPA_03 
} from './questionsIPA';
import { 
  QUESTIONS_PENALARAN, 
  QUESTIONS_LOG_01, 
  QUESTIONS_LOG_02, 
  QUESTIONS_LOG_03 
} from './questionsPenalaran';

export { 
  QUESTIONS_MATEMATIKA, 
  QUESTIONS_MTK_01, 
  QUESTIONS_MTK_02, 
  QUESTIONS_MTK_03,
  QUESTIONS_BAHASA, 
  QUESTIONS_BIN_01, 
  QUESTIONS_BIN_02, 
  QUESTIONS_BIN_03,
  QUESTIONS_IPA, 
  QUESTIONS_IPA_01, 
  QUESTIONS_IPA_02, 
  QUESTIONS_IPA_03,
  QUESTIONS_PENALARAN, 
  QUESTIONS_LOG_01, 
  QUESTIONS_LOG_02, 
  QUESTIONS_LOG_03 
};

/**
 * DAFTAR 3 PAKET SOAL UJIAN PER MATA PELAJARAN (TOTAL 12 PAKET LENGKAP)
 * Terstandarisasi Pusmendik Kemendikdasmen, Kurikulum Merdeka, & ANBK
 * Distribusi Kesulitan:
 * • Paket 01 (Diagnostik): Mudah 40%, Sedang 50%, Sukar/HOTS 10%
 * • Paket 02 (Pemantapan): Mudah 20%, Sedang 60%, Sukar/HOTS 20%
 * • Paket 03 (Simulasi Realistis): Mudah 20%, Sedang 50%, Sukar/HOTS 30%
 */
export const ALL_EXAM_PACKAGES: ExamPackage[] = [
  // === MATEMATIKA ===
  {
    id: 'TKA-MTK-01',
    subjectCode: 'MTK',
    title: 'Matematika - Paket 01 (Diagnostik)',
    subtitle: 'Pemetaan Awal: Operasi Hitung, Pecahan, FPB/KPK, Geometri & Pengolahan Data',
    category: 'Mata Pelajaran Matematika (Kelas 5 - 6)',
    durationMinutes: 45,
    totalQuestionsCount: 30,
    validToken: 'TKASD2025',
    badgeColor: 'blue',
    instructionSummary: [
      'Paket 01 Diagnostik dirancang untuk pemetaan kompetensi awal peserta didik.',
      'Ujian terdiri dari 30 butir soal (Pilihan Ganda, Pilihan Ganda Kompleks, & Benar-Salah).',
      'Distribusi kesulitan: 40% Mudah, 50% Sedang, 10% Sukar/HOTS.',
      'Sediakan kertas buram untuk coret-coretan hitungan.',
      'Waktu pengerjaan adalah 45 menit dan berjalan mundur secara otomatis.'
    ]
  },
  {
    id: 'TKA-MTK-02',
    subjectCode: 'MTK',
    title: 'Matematika - Paket 02 (Pemantapan)',
    subtitle: 'Penguatan Konsep: Aljabar Kontekstual, Geometri Ruang, Rasio, Kecepatan & Diagram',
    category: 'Mata Pelajaran Matematika (Kelas 5 - 6)',
    durationMinutes: 45,
    totalQuestionsCount: 30,
    validToken: 'TKASD2025',
    badgeColor: 'blue',
    instructionSummary: [
      'Paket 02 Pemantapan melatih ketelitian dan variasi soal kontekstual.',
      'Ujian terdiri dari 30 butir soal bertaraf HOTS sedang-tinggi.',
      'Distribusi kesulitan: 20% Mudah, 60% Sedang, 20% Sukar/HOTS.',
      'Manfaatkan fitur Ragu-Ragu jika membutuhkan peninjauan ulang jawaban.'
    ]
  },
  {
    id: 'TKA-MTK-03',
    subjectCode: 'MTK',
    title: 'Matematika - Paket 03 (Simulasi Realistis)',
    subtitle: 'Standardisasi Ujian Asli: Problem Solving Tingkat Tinggi, Skala Peta, Volume & Analisis Grafik',
    category: 'Mata Pelajaran Matematika (Kelas 5 - 6)',
    durationMinutes: 45,
    totalQuestionsCount: 30,
    validToken: 'TKASD2025',
    badgeColor: 'blue',
    instructionSummary: [
      'Paket 03 Simulasi Realistis menguji ketahanan dan kecepatan problem-solving standar nasional.',
      'Ujian terdiri dari 30 butir soal berkualitas tinggi tanpa typo.',
      'Distribusi kesulitan: 20% Mudah, 50% Sedang, 30% Sukar/HOTS.'
    ]
  },

  // === BAHASA INDONESIA ===
  {
    id: 'TKA-BIN-01',
    subjectCode: 'BIN',
    title: 'B. Indonesia - Paket 01 (Diagnostik)',
    subtitle: 'Pemetaan Awal: Ide Pokok Paragraf, Sinonim Makna Kata, Amanat Fabel & Unsur Cerita',
    category: 'Mata Pelajaran Bahasa Indonesia (Kelas 5 - 6)',
    durationMinutes: 45,
    totalQuestionsCount: 30,
    validToken: 'TKASD2025',
    badgeColor: 'emerald',
    instructionSummary: [
      'Paket 01 Diagnostik Literasi membaca pemahaman dasar dan kosakata.',
      'Ujian terdiri dari 30 butir stimulus teks narasi, eksposisi, dan fabel.',
      'Distribusi kesulitan: 40% Mudah, 50% Sedang, 10% Sukar/HOTS.'
    ]
  },
  {
    id: 'TKA-BIN-02',
    subjectCode: 'BIN',
    title: 'B. Indonesia - Paket 02 (Pemantapan)',
    subtitle: 'Penguatan Konsep: Fakta vs Opini, Teks Prosedur, Kaidah Ejaan EYD V & Kalimat Efektif',
    category: 'Mata Pelajaran Bahasa Indonesia (Kelas 5 - 6)',
    durationMinutes: 45,
    totalQuestionsCount: 30,
    validToken: 'TKASD2025',
    badgeColor: 'emerald',
    instructionSummary: [
      'Paket 02 Pemantapan mengasah kemampuan analisis struktur teks dan tata bahasa baku.',
      'Ujian terdiri dari 30 butir soal berkualitas tinggi.',
      'Distribusi kesulitan: 20% Mudah, 60% Sedang, 20% Sukar/HOTS.'
    ]
  },
  {
    id: 'TKA-BIN-03',
    subjectCode: 'BIN',
    title: 'B. Indonesia - Paket 03 (Simulasi Realistis)',
    subtitle: 'Standardisasi Ujian Asli: Evaluasi Kritis Infografis, Majas Sastra, Argumentasi & Editorial',
    category: 'Mata Pelajaran Bahasa Indonesia (Kelas 5 - 6)',
    durationMinutes: 45,
    totalQuestionsCount: 30,
    validToken: 'TKASD2025',
    badgeColor: 'emerald',
    instructionSummary: [
      'Paket 03 Simulasi Realistis merefleksikan asesmen literasi tingkat lanjut.',
      'Ujian terdiri dari 30 butir stimulus komprehensif.',
      'Distribusi kesulitan: 20% Mudah, 50% Sedang, 30% Sukar/HOTS.'
    ]
  },

  // === ILMU PENGETAHUAN ALAM (IPA) ===
  {
    id: 'TKA-IPA-01',
    subjectCode: 'IPA',
    title: 'IPA & Sains - Paket 01 (Diagnostik)',
    subtitle: 'Pemetaan Awal: Rantai Makanan Sawah, Percobaan Tekanan Udara, Siklus Air & Peredaran Darah',
    category: 'Mata Pelajaran IPA & Sains (Kelas 5 - 6)',
    durationMinutes: 45,
    totalQuestionsCount: 30,
    validToken: 'TKASD2025',
    badgeColor: 'purple',
    instructionSummary: [
      'Paket 01 Diagnostik Sains menguji penguasaan konsep alam dan ekosistem dasar.',
      'Ujian terdiri dari 30 butir soal dilengkapi diagram visual rantai makanan, percobaan lilin, dan siklus air.',
      'Distribusi kesulitan: 40% Mudah, 50% Sedang, 10% Sukar/HOTS.'
    ]
  },
  {
    id: 'TKA-IPA-02',
    subjectCode: 'IPA',
    title: 'IPA & Sains - Paket 02 (Pemantapan)',
    subtitle: 'Penguatan Konsep: Elektromagnet, Cermin Cekung, Radiasi Kalor, Sendi & Ekosistem Danau',
    category: 'Mata Pelajaran IPA & Sains (Kelas 5 - 6)',
    durationMinutes: 45,
    totalQuestionsCount: 30,
    validToken: 'TKASD2025',
    badgeColor: 'purple',
    instructionSummary: [
      'Paket 02 Pemantapan menguji analisis variabel percobaan sains dan penalaran fenomena fisika.',
      'Ujian terdiri dari 30 butir soal bertaraf HOTS terapan.',
      'Distribusi kesulitan: 20% Mudah, 60% Sedang, 20% Sukar/HOTS.'
    ]
  },
  {
    id: 'TKA-IPA-03',
    subjectCode: 'IPA',
    title: 'IPA & Sains - Paket 03 (Simulasi Realistis)',
    subtitle: 'Standardisasi Ujian Asli: Bioakumulasi Toksik, Tekanan Hidrostatis, Hukum Archimedes & Listrik Campuran',
    category: 'Mata Pelajaran IPA & Sains (Kelas 5 - 6)',
    durationMinutes: 45,
    totalQuestionsCount: 30,
    validToken: 'TKASD2025',
    badgeColor: 'purple',
    instructionSummary: [
      'Paket 03 Simulasi Realistis menghadirkan soal-soal HOTS sains terapan tingkat tinggi.',
      'Ujian terdiri dari 30 butir soal standar olimpiade & asesmen nasional.',
      'Distribusi kesulitan: 20% Mudah, 50% Sedang, 30% Sukar/HOTS.'
    ]
  },

  // === PENALARAN SPASIAL & LOGIKA ===
  {
    id: 'TKA-LOG-01',
    subjectCode: 'LOG',
    title: 'Penalaran - Paket 01 (Diagnostik)',
    subtitle: 'Pemetaan Awal: Rotasi Geometri 90°, Jaring-jaring Kubus, Silogisme Dasar & Deret Huruf',
    category: 'Tes Bakat Skolastik & Spasial (Kelas 5 - 6)',
    durationMinutes: 45,
    totalQuestionsCount: 30,
    validToken: 'TKASD2025',
    badgeColor: 'amber',
    instructionSummary: [
      'Paket 01 Diagnostik menguji daya abstraksi spasial visual dan logika deduktif awal.',
      'Ujian terdiri dari 30 butir soal visual pola rotasi, jaring kubus, dan matriks 3x3.',
      'Distribusi kesulitan: 40% Mudah, 50% Sedang, 10% Sukar/HOTS.'
    ]
  },
  {
    id: 'TKA-LOG-02',
    subjectCode: 'LOG',
    title: 'Penalaran - Paket 02 (Pemantapan)',
    subtitle: 'Penguatan Konsep: Posisi Duduk Kompleks, Pigeonhole Principle, Diagram Venn & Lipatan Kertas',
    category: 'Tes Bakat Skolastik & Spasial (Kelas 5 - 6)',
    durationMinutes: 45,
    totalQuestionsCount: 30,
    validToken: 'TKASD2025',
    badgeColor: 'amber',
    instructionSummary: [
      'Paket 02 Pemantapan melatih penalaran deduktif berlapis dan pemecahan teka-teki logika.',
      'Ujian terdiri dari 30 butir soal logika analitis.',
      'Distribusi kesulitan: 20% Mudah, 60% Sedang, 20% Sukar/HOTS.'
    ]
  },
  {
    id: 'TKA-LOG-03',
    subjectCode: 'LOG',
    title: 'Penalaran - Paket 03 (Simulasi Realistis)',
    subtitle: 'Standardisasi TPA Asli: Jalur Euler, Sudoku 4x4, Kecepatan Kerja Bersama & Waktu Cermin',
    category: 'Tes Bakat Skolastik & Spasial (Kelas 5 - 6)',
    durationMinutes: 45,
    totalQuestionsCount: 30,
    validToken: 'TKASD2025',
    badgeColor: 'amber',
    instructionSummary: [
      'Paket 03 Simulasi Realistis menghadirkan soal-soal penalaran analitis dan spasial tingkat tinggi.',
      'Ujian terdiri dari 30 butir soal standar TPA nasional.',
      'Distribusi kesulitan: 20% Mudah, 50% Sedang, 30% Sukar/HOTS.'
    ]
  }
];

export const DEFAULT_EXAM_PACKAGE: ExamPackage = ALL_EXAM_PACKAGES[0];

/**
 * Helper untuk mengambil daftar 20 soal sesuai paket yang dipilih
 */
export function getQuestionsForPackage(packageId: string): Question[] {
  switch (packageId) {
    // === MATEMATIKA ===
    case 'TKA-MTK-01':
      return QUESTIONS_MTK_01.map((q, idx) => ({ ...q, number: idx + 1 }));
    case 'TKA-MTK-02':
      return QUESTIONS_MTK_02.map((q, idx) => ({ ...q, number: idx + 1 }));
    case 'TKA-MTK-03':
      return QUESTIONS_MTK_03.map((q, idx) => ({ ...q, number: idx + 1 }));

    // === BAHASA INDONESIA ===
    case 'TKA-BIN-01':
      return QUESTIONS_BIN_01.map((q, idx) => ({ ...q, number: idx + 1 }));
    case 'TKA-BIN-02':
      return QUESTIONS_BIN_02.map((q, idx) => ({ ...q, number: idx + 1 }));
    case 'TKA-BIN-03':
      return QUESTIONS_BIN_03.map((q, idx) => ({ ...q, number: idx + 1 }));

    // === IPA & SAINS ===
    case 'TKA-IPA-01':
      return QUESTIONS_IPA_01.map((q, idx) => ({ ...q, number: idx + 1 }));
    case 'TKA-IPA-02':
      return QUESTIONS_IPA_02.map((q, idx) => ({ ...q, number: idx + 1 }));
    case 'TKA-IPA-03':
      return QUESTIONS_IPA_03.map((q, idx) => ({ ...q, number: idx + 1 }));

    // === PENALARAN & LOGIKA ===
    case 'TKA-LOG-01':
      return QUESTIONS_LOG_01.map((q, idx) => ({ ...q, number: idx + 1 }));
    case 'TKA-LOG-02':
      return QUESTIONS_LOG_02.map((q, idx) => ({ ...q, number: idx + 1 }));
    case 'TKA-LOG-03':
      return QUESTIONS_LOG_03.map((q, idx) => ({ ...q, number: idx + 1 }));

    default:
      return QUESTIONS_MTK_01.map((q, idx) => ({ ...q, number: idx + 1 }));
  }
}

export const MOCK_STUDENTS: Student[] = [
  {
    id: 'SISWA-001',
    name: 'Ahmad Faiz Pratama',
    schoolName: 'SDN 01 Sukamaju',
    participantNumber: 'SD-2025-001',
    token: 'TKASD2025',
    loginTime: '2025-08-20T08:00:00.000Z'
  },
  {
    id: 'SISWA-002',
    name: 'Siti Rahma Azzahra',
    schoolName: 'SDIT Bina Insani',
    participantNumber: 'SD-2025-002',
    token: 'TKASD2025',
    loginTime: '2025-08-20T08:00:00.000Z'
  },
  {
    id: 'SISWA-003',
    name: 'Budi Darmawan',
    schoolName: 'SDN Mentari Pagi',
    participantNumber: 'SD-2025-003',
    token: 'TKASD2025',
    loginTime: '2025-08-20T08:00:00.000Z'
  }
];

/**
 * Script DDL & INSERT SQL Lengkap untuk Supabase SQL Editor
 */
export const SUPABASE_SCHEMA_SQL = `-- ========================================================
-- SKEMA TABEL RESMI DATABASE TRYOUT TKA SD (SUPABASE / POSTGRESQL)
-- Versi Keamanan Tinggi (Anti-Inspect Element & Server-Side Grading)
-- ========================================================

-- 1. TABEL SISWA (PESERTA UJIAN)
CREATE TABLE IF NOT EXISTS public.students (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    school_name VARCHAR(150) NOT NULL,
    participant_number VARCHAR(50) UNIQUE NOT NULL,
    token VARCHAR(50) NOT NULL,
    login_time TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. TABEL PAKET UJIAN (EXAM PACKAGES)
CREATE TABLE IF NOT EXISTS public.exam_packages (
    id VARCHAR(50) PRIMARY KEY,
    subject_code VARCHAR(20) NOT NULL,
    title VARCHAR(200) NOT NULL,
    subtitle TEXT,
    category VARCHAR(100) NOT NULL,
    duration_minutes INTEGER DEFAULT 60 NOT NULL,
    total_questions INTEGER DEFAULT 30 NOT NULL,
    valid_token VARCHAR(50) NOT NULL,
    instruction_summary JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. TABEL BANK SOAL (MASTER TABEL LENGKAP DENGAN KUNCI & PEMBAHASAN)
CREATE TABLE IF NOT EXISTS public.questions (
    id SERIAL PRIMARY KEY,
    package_id VARCHAR(50) REFERENCES public.exam_packages(id) ON DELETE CASCADE,
    number INTEGER NOT NULL,
    category VARCHAR(100) NOT NULL,
    topic VARCHAR(150),
    question_text TEXT NOT NULL,
    image_url TEXT,
    image_caption TEXT,
    options JSONB NOT NULL,
    correct_answer VARCHAR(5) NOT NULL,
    explanation TEXT NOT NULL,
    difficulty VARCHAR(50) DEFAULT 'Sedang',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    CONSTRAINT unique_package_question_number UNIQUE(package_id, number)
);

-- 4. TABEL HASIL & NILAI UJIAN (EXAM RESULTS)
CREATE TABLE IF NOT EXISTS public.exam_results (
    id VARCHAR(50) PRIMARY KEY,
    student_id VARCHAR(50) REFERENCES public.students(id) ON DELETE CASCADE,
    package_id VARCHAR(50) REFERENCES public.exam_packages(id) ON DELETE CASCADE,
    score NUMERIC(5, 2) NOT NULL,
    total_questions INTEGER NOT NULL,
    correct_count INTEGER NOT NULL,
    wrong_count INTEGER NOT NULL,
    unanswered_count INTEGER NOT NULL,
    doubtful_count INTEGER DEFAULT 0,
    time_spent_formatted VARCHAR(50),
    answers_detail JSONB NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. TABEL SESI LIVE UJIAN SISWA (REAL-TIME AUTO-SAVE & ANTI-DISCONNECT)
CREATE TABLE IF NOT EXISTS public.live_student_sessions (
    student_id VARCHAR(50) PRIMARY KEY REFERENCES public.students(id) ON DELETE CASCADE,
    student_name VARCHAR(150) NOT NULL,
    participant_number VARCHAR(50) NOT NULL,
    school_name VARCHAR(150) NOT NULL,
    package_id VARCHAR(50) NOT NULL,
    subject_code VARCHAR(20) NOT NULL,
    start_time_epoch BIGINT NOT NULL,
    total_duration_seconds INTEGER NOT NULL,
    time_remaining_seconds INTEGER NOT NULL,
    answered_count INTEGER DEFAULT 0,
    doubtful_count INTEGER DEFAULT 0,
    total_questions INTEGER DEFAULT 30,
    current_index INTEGER DEFAULT 0,
    tab_switch_count INTEGER DEFAULT 0,
    user_answers JSONB DEFAULT '{}'::jsonb,
    last_heartbeat TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ========================================================
-- 🛡️ LANGKAH KEAMANAN 1: VIEW KHUSUS SISWA (ANTI-INSPECT ELEMENT)
-- Menyembunyikan kolom correct_answer dan explanation dari browser siswa
-- ========================================================
CREATE OR REPLACE VIEW public.student_questions_view AS
SELECT 
    id,
    package_id,
    number,
    category,
    topic,
    question_text,
    image_url,
    image_caption,
    options,
    difficulty
FROM public.questions;

-- Izinkan publik/siswa membaca View ini
ALTER VIEW public.student_questions_view OWNER TO postgres;
GRANT SELECT ON public.student_questions_view TO anon;
GRANT SELECT ON public.student_questions_view TO authenticated;

-- ========================================================
-- 🛡️ LANGKAH KEAMANAN 2: ROW LEVEL SECURITY (RLS) POLICIES
-- ========================================================
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.live_student_sessions ENABLE ROW LEVEL SECURITY;

-- 1. Paket Ujian (Boleh dibaca publik)
DROP POLICY IF EXISTS "Izinkan Akses Publik Membaca Paket Ujian" ON public.exam_packages;
CREATE POLICY "Izinkan Akses Publik Membaca Paket Ujian" ON public.exam_packages FOR SELECT USING (true);

-- 2. Kunci Soal Utama: DIKUNCI dari akses langsung anon (Siswa harus lewat View)
DROP POLICY IF EXISTS "Izinkan Akses Publik Membaca Soal" ON public.questions;
DROP POLICY IF EXISTS "Kunci Soal Utama dari Anon" ON public.questions;
CREATE POLICY "Kunci Soal Utama dari Anon" ON public.questions FOR SELECT USING (false);

-- 3. Hasil Ujian
DROP POLICY IF EXISTS "Izinkan Akses Siswa Membuat Hasil Ujian" ON public.exam_results;
CREATE POLICY "Izinkan Akses Siswa Membuat Hasil Ujian" ON public.exam_results FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Izinkan Akses Publik Membaca Hasil Ujian" ON public.exam_results;
CREATE POLICY "Izinkan Akses Publik Membaca Hasil Ujian" ON public.exam_results FOR SELECT USING (true);

-- 4. Pendaftaran Siswa
DROP POLICY IF EXISTS "Izinkan Akses Siswa Mendaftar" ON public.students;
CREATE POLICY "Izinkan Akses Siswa Mendaftar" ON public.students FOR ALL USING (true);

-- 5. Sesi Live Siswa
DROP POLICY IF EXISTS "Izinkan Sesi Live Siswa" ON public.live_student_sessions;
DROP POLICY IF EXISTS "Siswa hanya bisa kelola sesi sendiri" ON public.live_student_sessions;
CREATE POLICY "Siswa hanya bisa kelola sesi sendiri" ON public.live_student_sessions 
    FOR ALL 
    TO anon, authenticated
    USING (true)
    WITH CHECK (true);

-- ========================================================
-- 🛡️ LANGKAH KEAMANAN 3: STORED PROCEDURE / RPC SERVER-SIDE GRADING
-- Koreksi otomatis di sisi server Supabase (Anti-Manipulasi Nilai)
-- ========================================================
CREATE OR REPLACE FUNCTION public.submit_exam_secure(
    p_result_id VARCHAR(50),
    p_student_id VARCHAR(50),
    p_package_id VARCHAR(50),
    p_user_answers JSONB, -- Format: {"1": {"selectedOption": "A", "isDoubtful": false}, ...}
    p_time_spent VARCHAR(50)
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER -- Berjalan dengan hak akses server agar bisa membaca kunci jawaban
AS $$
DECLARE
    v_correct_count INT := 0;
    v_wrong_count INT := 0;
    v_unanswered_count INT := 0;
    v_doubtful_count INT := 0;
    v_total_questions INT := 0;
    v_score NUMERIC(5,2) := 0.00;
    v_irt_score INT := 200;
    v_q RECORD;
    v_ans_data JSONB;
    v_student_ans TEXT;
    v_is_doubtful BOOLEAN;
    v_answers_detail JSONB := '[]'::jsonb;
    v_is_correct BOOLEAN;
BEGIN
    -- Hitung total soal pada paket
    SELECT count(*) INTO v_total_questions FROM public.questions WHERE package_id = p_package_id;
    IF v_total_questions = 0 THEN
        v_total_questions := 30;
    END IF;

    -- Loop memeriksa semua soal dan kunci jawaban di server
    FOR v_q IN 
        SELECT id, number, category, topic, correct_answer, explanation 
        FROM public.questions 
        WHERE package_id = p_package_id 
        ORDER BY number ASC 
    LOOP
        -- Ambil data jawaban siswa
        v_ans_data := p_user_answers->(v_q.number::text);
        
        -- Dukung format object {"selectedOption": "A"} maupun string "A"
        IF v_ans_data IS NOT NULL AND jsonb_typeof(v_ans_data) = 'object' THEN
            v_student_ans := v_ans_data->>'selectedOption';
            v_is_doubtful := COALESCE((v_ans_data->>'isDoubtful')::boolean, false);
        ELSE
            v_student_ans := p_user_answers->>v_q.number::text;
            v_is_doubtful := false;
        END IF;

        IF v_is_doubtful THEN
            v_doubtful_count := v_doubtful_count + 1;
        END IF;

        IF v_student_ans IS NULL OR v_student_ans = '' OR v_student_ans = 'null' THEN
            v_unanswered_count := v_unanswered_count + 1;
            v_is_correct := false;
        ELSIF UPPER(TRIM(v_student_ans)) = UPPER(TRIM(v_q.correct_answer)) THEN
            v_correct_count := v_correct_count + 1;
            v_is_correct := true;
        ELSE
            v_wrong_count := v_wrong_count + 1;
            v_is_correct := false;
        END IF;

        -- Susun rincian jawaban untuk rapor
        v_answers_detail := v_answers_detail || jsonb_build_object(
            'question_number', v_q.number,
            'category', v_q.category,
            'user_answer', v_student_ans,
            'correct_answer', v_q.correct_answer,
            'is_correct', v_is_correct,
            'is_doubtful', v_is_doubtful
        );
    END LOOP;

    -- Hitung skor skala 100 dan IRT (200 - 800)
    v_score := ROUND(((v_correct_count::NUMERIC / v_total_questions::NUMERIC) * 100.00), 2);
    v_irt_score := ROUND(200 + ((v_correct_count::NUMERIC / v_total_questions::NUMERIC) * 600));

    -- Masukkan ke tabel hasil ujian
    INSERT INTO public.exam_results (
        id, student_id, package_id, score, total_questions, 
        correct_count, wrong_count, unanswered_count, doubtful_count,
        time_spent_formatted, answers_detail, completed_at
    ) VALUES (
        p_result_id, p_student_id, p_package_id, v_score, v_total_questions,
        v_correct_count, v_wrong_count, v_unanswered_count, v_doubtful_count,
        p_time_spent, v_answers_detail, timezone('utc'::text, now())
    )
    ON CONFLICT (id) DO UPDATE SET
        score = EXCLUDED.score,
        correct_count = EXCLUDED.correct_count,
        wrong_count = EXCLUDED.wrong_count,
        unanswered_count = EXCLUDED.unanswered_count,
        doubtful_count = EXCLUDED.doubtful_count,
        completed_at = EXCLUDED.completed_at;

    -- Hapus sesi live ujian siswa yang sudah selesai
    DELETE FROM public.live_student_sessions WHERE student_id = p_student_id;

    -- Kembalikan respons terverifikasi ke frontend
    RETURN json_build_object(
        'success', true,
        'result_id', p_result_id,
        'score', v_score,
        'irt_score', v_irt_score,
        'total_questions', v_total_questions,
        'correct_count', v_correct_count,
        'wrong_count', v_wrong_count,
        'unanswered_count', v_unanswered_count,
        'doubtful_count', v_doubtful_count,
        'time_spent', p_time_spent
    );
END;
$$;

-- ========================================================
-- SEED DATA 4 PAKET MATA PELAJARAN (30 SOAL TIAP MAPEL)
-- ========================================================
INSERT INTO public.exam_packages (id, subject_code, title, subtitle, category, duration_minutes, total_questions, valid_token)
VALUES
('TKA-MTK-01', 'MTK', 'TKA SD: Matematika & Numerasi', 'Operasi Bilangan, Pecahan, Geometri, Kecepatan, Debit, & Statistika', 'Matematika SD', 60, 30, 'TKASD2025'),
('TKA-BIN-01', 'BIN', 'TKA SD: Bahasa Indonesia & Literasi', 'Ide Pokok, Makna Kata, Analisis Cerita, Kaidah Ejaan PUEBI, & Kalimat Efektif', 'Bahasa Indonesia SD', 60, 30, 'TKASD2025'),
('TKA-IPA-01', 'IPA', 'TKA SD: Ilmu Pengetahuan Alam (IPA)', 'Ekosistem, Adaptasi, Organ Tubuh, Sifat Cahaya, Magnet, Energi, & Tata Surya', 'IPA & Sains SD', 60, 30, 'TKASD2025'),
('TKA-LOG-01', 'LOG', 'TKA SD: Penalaran Spasial & Logika', 'Jaring-jaring Ruang, Rotasi Pola, Pencerminan Cermin, Analogi, & Deret Logika', 'Penalaran Skolastik', 60, 30, 'TKASD2025')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, duration_minutes = EXCLUDED.duration_minutes, total_questions = EXCLUDED.total_questions;
`;
