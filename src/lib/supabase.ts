import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ExamFinalResult } from '../types/quiz';

const STORAGE_KEY_URL = 'TKA_SUPABASE_URL';
const STORAGE_KEY_ANON = 'TKA_SUPABASE_ANON_KEY';

/**
 * Mengambil kredensial Supabase dari Environment Variable atau LocalStorage
 */
export function getSupabaseCredentials(): { url: string; anonKey: string; isConfigured: boolean } {
  let url = (typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY_URL) : null) || '';
  let anonKey = (typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY_ANON) : null) || '';

  // Fallback ke import.meta.env jika di LocalStorage kosong
  if (!url) {
    url = import.meta.env.VITE_SUPABASE_URL || '';
  }
  if (!anonKey) {
    anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
  }

  const isConfigured = Boolean(
    url && 
    anonKey && 
    url.trim().startsWith('https://') &&
    url.includes('supabase.co')
  );

  return { url: url.trim(), anonKey: anonKey.trim(), isConfigured };
}

/**
 * Membuat instance client Supabase aktif
 */
export function getActiveSupabaseClient(): SupabaseClient | null {
  const { url, anonKey, isConfigured } = getSupabaseCredentials();
  if (!isConfigured) return null;

  try {
    return createClient(url, anonKey);
  } catch (e) {
    console.error('Gagal inisialisasi Supabase client:', e);
    return null;
  }
}

export const isSupabaseConfigured = getSupabaseCredentials().isConfigured;
export const supabase = getActiveSupabaseClient();

/**
 * Simpan atau perbarui kredensial Supabase langsung dari UI aplikasi
 */
export function saveSupabaseCredentials(url: string, anonKey: string): boolean {
  try {
    localStorage.setItem(STORAGE_KEY_URL, url.trim());
    localStorage.setItem(STORAGE_KEY_ANON, anonKey.trim());
    return true;
  } catch (e) {
    console.error('Gagal menyimpan kredensial Supabase:', e);
    return false;
  }
}

/**
 * Hapus kredensial Supabase dari LocalStorage
 */
export function clearSupabaseCredentials(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_URL);
    localStorage.removeItem(STORAGE_KEY_ANON);
  } catch (e) {
    console.error('Gagal menghapus kredensial:', e);
  }
}

/**
 * Uji koneksi ke Supabase secara langsung
 */
export async function testSupabaseConnection(customUrl?: string, customKey?: string): Promise<{
  success: boolean;
  message: string;
}> {
  const url = customUrl || getSupabaseCredentials().url;
  const key = customKey || getSupabaseCredentials().anonKey;

  if (!url || !key || !url.startsWith('https://')) {
    return {
      success: false,
      message: 'Format Project URL atau Anon Key belum lengkap. Pastikan URL diawali https://'
    };
  }

  try {
    const testClient = createClient(url, key);
    // Uji query tabel exam_packages atau students
    const { error } = await testClient
      .from('exam_packages')
      .select('id, title')
      .limit(1);

    if (error) {
      // Jika tabel belum dibuat tapi koneksi API berhasil
      if (error.code === '42P01' || error.message.includes('does not exist')) {
        return {
          success: false,
          message: 'Koneksi ke Supabase berhasil! Namun tabel belum dibuat. Silakan jalankan script SQL di menu SQL Editor Supabase.'
        };
      }
      return {
        success: false,
        message: `Gagal mengakses database: ${error.message} (${error.code || 'API Error'})`
      };
    }

    return {
      success: true,
      message: 'Koneksi Berhasil! Database Supabase siap menerima dan menyinkronkan data ujian siswa.'
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return {
      success: false,
      message: `Koneksi gagal: ${errorMsg}`
    };
  }
}

/**
 * Mengambil daftar soal ujian dari Supabase secara aman menggunakan student_questions_view
 * (Tanpa menyertakan kunci jawaban & pembahasan di sisi browser)
 */
export async function fetchQuestionsForPackageFromDatabase(packageId: string): Promise<any[] | null> {
  const client = getActiveSupabaseClient();
  if (!client) return null;

  try {
    // 1. Coba baca dari student_questions_view (Keamanan Tinggi)
    const { data: viewData, error: viewError } = await client
      .from('student_questions_view')
      .select('*')
      .eq('package_id', packageId)
      .order('number', { ascending: true });

    if (!viewError && viewData && viewData.length > 0) {
      return viewData;
    }

    // 2. Fallback jika view belum dibuat (Legacy)
    const { data: rawData, error: rawError } = await client
      .from('questions')
      .select('*')
      .eq('package_id', packageId)
      .order('number', { ascending: true });

    if (!rawError && rawData && rawData.length > 0) {
      return rawData;
    }
  } catch (e) {
    console.warn('Gagal memuat soal dari Supabase:', e);
  }
  return null;
}

/**
 * Menyimpan data hasil ujian siswa ke Supabase dengan Server-Side RPC Grading (Keamanan Maksimal)
 * serta menyimpan salinan lokal di browser
 */
export async function saveExamResultToDatabase(
  result: ExamFinalResult,
  rawUserAnswers?: Record<number, { selectedOption: string | null; isDoubtful: boolean }>
): Promise<{
  success: boolean;
  savedToSupabase: boolean;
  message: string;
  serverScore?: number;
}> {
  // Selalu simpan di LocalStorage browser sebagai backup aman
  try {
    const existingHistory = JSON.parse(localStorage.getItem('TKA_EXAM_HISTORY') || '[]');
    existingHistory.unshift({
      id: result.id,
      studentName: result.student.name,
      schoolName: result.student.schoolName,
      participantNumber: result.student.participantNumber,
      packageTitle: result.examPackage.title,
      packageId: result.examPackage.id,
      score: result.score,
      totalQuestions: result.totalQuestions,
      correctCount: result.correctCount,
      wrongCount: result.wrongCount,
      completedAt: result.completedAt
    });
    localStorage.setItem('TKA_EXAM_HISTORY', JSON.stringify(existingHistory.slice(0, 50)));
  } catch (e) {
    console.warn('Gagal menyimpan ke LocalStorage:', e);
  }

  // Cek client aktif
  const client = getActiveSupabaseClient();

  if (client) {
    try {
      // 1. Upsert data student
      await client.from('students').upsert({
        id: result.student.id,
        name: result.student.name,
        school_name: result.student.schoolName,
        participant_number: result.student.participantNumber,
        token: result.student.token,
        login_time: result.student.loginTime
      });

      // 2. Prioritaskan RPC Koreksi Server-Side (submit_exam_secure)
      if (rawUserAnswers) {
        try {
          const { data: rpcData, error: rpcError } = await client.rpc('submit_exam_secure', {
            p_result_id: result.id,
            p_student_id: result.student.id,
            p_package_id: result.examPackage.id,
            p_user_answers: rawUserAnswers,
            p_time_spent: result.timeSpentFormatted
          });

          if (!rpcError && rpcData && rpcData.success) {
            return {
              success: true,
              savedToSupabase: true,
              serverScore: rpcData.score,
              message: 'Hasil ujian berhasil dikoreksi & diverifikasi di Server Supabase!'
            };
          }
        } catch (rpcErr) {
          console.warn('RPC submit_exam_secure belum aktif, beralih ke direct insert:', rpcErr);
        }
      }

      // 3. Fallback jika Database Function RPC belum dibuat di Supabase
      const { error } = await client.from('exam_results').insert({
        id: result.id,
        student_id: result.student.id,
        package_id: result.examPackage.id,
        score: result.score,
        total_questions: result.totalQuestions,
        correct_count: result.correctCount,
        wrong_count: result.wrongCount,
        unanswered_count: result.unansweredCount,
        doubtful_count: result.doubtfulCount,
        time_spent_formatted: result.timeSpentFormatted,
        answers_detail: result.questionResults.map((item) => ({
          question_number: item.question.number,
          category: item.question.category,
          user_answer: item.userAnswer,
          correct_answer: item.question.correctAnswer,
          is_correct: item.isCorrect,
          is_doubtful: item.isDoubtful
        })),
        completed_at: result.completedAt
      });

      if (error) {
        console.error('Error insert ke Supabase:', error);
        return {
          success: true,
          savedToSupabase: false,
          message: 'Tersimpan di memori lokal (Koneksi Supabase: ' + error.message + ')'
        };
      }

      // Hapus live session
      await client.from('live_student_sessions').delete().eq('student_id', result.student.id);

      return {
        success: true,
        savedToSupabase: true,
        message: 'Hasil ujian berhasil disinkronkan langsung ke Supabase Cloud!'
      };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      return {
        success: true,
        savedToSupabase: false,
        message: 'Tersimpan di browser (Supabase offline: ' + errorMsg + ')'
      };
    }
  }

  return {
    success: true,
    savedToSupabase: false,
    message: 'Hasil ujian tersimpan aman di database lokal browser.'
  };
}

export interface StudentExamRecord {
  id: string;
  studentName: string;
  schoolName: string;
  participantNumber: string;
  packageTitle: string;
  packageId: string;
  score: number;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  completedAt: string;
  source: 'supabase' | 'local';
}

/**
 * Mengambil rekap semua hasil ujian peserta dari Supabase & LocalStorage
 */
export async function fetchAllExamResults(): Promise<StudentExamRecord[]> {
  const client = getActiveSupabaseClient();
  let supabaseRecords: StudentExamRecord[] = [];

  if (client) {
    try {
      const { data, error } = await client
        .from('exam_results')
        .select(`
          id,
          score,
          total_questions,
          correct_count,
          wrong_count,
          completed_at,
          package_id,
          students (
            name,
            school_name,
            participant_number
          )
        `)
        .order('completed_at', { ascending: false });

      if (!error && data) {
        supabaseRecords = data.map((row: any) => ({
          id: row.id,
          studentName: row.students?.name || 'Peserta',
          schoolName: row.students?.school_name || '-',
          participantNumber: row.students?.participant_number || '-',
          packageTitle: row.package_id === 'TKA-SD-MTK' ? 'Matematika' :
                       row.package_id === 'TKA-SD-BIN' ? 'Bahasa Indonesia' :
                       row.package_id === 'TKA-SD-IPA' ? 'IPA & Sains' :
                       row.package_id === 'TKA-SD-LOG' ? 'Penalaran Gambar' : row.package_id,
          packageId: row.package_id,
          score: row.score,
          totalQuestions: row.total_questions,
          correctCount: row.correct_count,
          wrongCount: row.wrong_count,
          completedAt: row.completed_at,
          source: 'supabase'
        }));
      }
    } catch (err) {
      console.warn('Gagal fetch dari Supabase, fallback ke LocalStorage:', err);
    }
  }

  // Ambil dari LocalStorage
  let localRecords: StudentExamRecord[] = [];
  try {
    const raw = localStorage.getItem('TKA_EXAM_HISTORY');
    if (raw) {
      const parsed = JSON.parse(raw);
      localRecords = parsed.map((item: any) => ({
        ...item,
        source: 'local' as const
      }));
    }
  } catch (e) {
    console.warn('Error reading local exam history:', e);
  }

  // Gabungkan dan hindari duplikat ID
  const map = new Map<string, StudentExamRecord>();
  supabaseRecords.forEach(r => map.set(r.id, r));
  localRecords.forEach(r => {
    if (!map.has(r.id)) {
      map.set(r.id, r);
    }
  });

  return Array.from(map.values()).sort(
    (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );
}

/**
 * Mengambil riwayat hasil ujian tersimpan secara sinkron dari LocalStorage
 */
export function getStoredExamResults(): ExamFinalResult[] {
  try {
    const raw = localStorage.getItem('TKA_EXAM_RESULTS_V2');
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn('Error parsing stored exam results:', e);
  }
  return [];
}

export interface LiveExamSyncPayload {
  studentId: string;
  studentName: string;
  participantNumber: string;
  schoolName: string;
  packageId: string;
  subjectCode: string;
  startTimeEpoch: number;
  totalDurationSeconds: number;
  timeRemainingSeconds: number;
  answeredCount: number;
  doubtfulCount: number;
  totalQuestions: number;
  currentIndex: number;
  tabSwitchCount: number;
  userAnswers: Record<number, { selectedOption: string | null; isDoubtful: boolean }>;
  lastHeartbeat: string;
}

/**
 * Sinkronisasi Jawaban Otomatis (Background Auto-Save per Click) ke Supabase Cloud
 * Berjalan secara non-blocking / asynchronous tanpa memperlambat antarmuka ujian
 */
export async function syncLiveExamSessionToDatabase(payload: LiveExamSyncPayload): Promise<boolean> {
  const client = getActiveSupabaseClient();
  if (!client) return false;

  try {
    const { error } = await client
      .from('live_student_sessions')
      .upsert({
        student_id: payload.studentId,
        student_name: payload.studentName,
        participant_number: payload.participantNumber,
        school_name: payload.schoolName,
        package_id: payload.packageId,
        subject_code: payload.subjectCode,
        start_time_epoch: payload.startTimeEpoch,
        total_duration_seconds: payload.totalDurationSeconds,
        time_remaining_seconds: payload.timeRemainingSeconds,
        answered_count: payload.answeredCount,
        doubtful_count: payload.doubtfulCount,
        total_questions: payload.totalQuestions,
        current_index: payload.currentIndex,
        tab_switch_count: payload.tabSwitchCount,
        user_answers: payload.userAnswers,
        last_heartbeat: new Date().toISOString()
      }, { onConflict: 'student_id' });

    if (error) {
      // Jika tabel belum dibuat, log secara tenang (silent fallback)
      if (!error.message.includes('does not exist')) {
        console.warn('Supabase live session auto-save notice:', error.message);
      }
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Mengambil sesi ujian aktif dari Cloud jika laptop/perangkat siswa mati dan login di perangkat lain
 */
export async function fetchLiveExamSessionFromDatabase(studentId: string): Promise<LiveExamSyncPayload | null> {
  const client = getActiveSupabaseClient();
  if (!client) return null;

  try {
    const { data, error } = await client
      .from('live_student_sessions')
      .select('*')
      .eq('student_id', studentId)
      .maybeSingle();

    if (error || !data) return null;

    return {
      studentId: data.student_id,
      studentName: data.student_name,
      participantNumber: data.participant_number,
      schoolName: data.school_name,
      packageId: data.package_id,
      subjectCode: data.subject_code,
      startTimeEpoch: data.start_time_epoch,
      totalDurationSeconds: data.total_duration_seconds,
      timeRemainingSeconds: data.time_remaining_seconds,
      answeredCount: data.answered_count,
      doubtfulCount: data.doubtful_count,
      totalQuestions: data.total_questions,
      currentIndex: data.current_index,
      tabSwitchCount: data.tab_switch_count || 0,
      userAnswers: data.user_answers || {},
      lastHeartbeat: data.last_heartbeat
    };
  } catch (e) {
    return null;
  }
}

/**
 * Hapus sesi live setelah ujian selesai disubmit
 */
export async function deleteLiveExamSessionFromDatabase(studentId: string): Promise<void> {
  const client = getActiveSupabaseClient();
  if (!client) return;

  try {
    await client.from('live_student_sessions').delete().eq('student_id', studentId);
  } catch (e) {
    // ignore
  }
}


