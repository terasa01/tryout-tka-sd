/**
 * Tipe Data & Skema Lengkap Tryout TKA SD (Tes Kemampuan Akademik)
 * Mendukung 4 Peran Pengguna (Siswa, Guru, Proktor, Admin)
 */

export type SubjectCategory = 'Matematika Logika' | 'Bahasa Indonesia' | 'Bahasa & Literasi' | 'IPA & Sains' | 'Penalaran Gambar' | 'Penalaran & Logika';

export type UserRole = 'student' | 'teacher' | 'proctor' | 'admin';

export interface AppUser {
  id: string;
  username: string;
  password?: string;
  fullName: string;
  schoolName: string;
  participantNumber: string;
  role: UserRole;
  email?: string;
  phone?: string;
  classGrade?: string; // misal: "Kelas 6A"
  status?: 'active' | 'suspended';
  createdAt: string;
}

export interface Student {
  id: string;
  name: string;
  schoolName: string;
  participantNumber: string;
  token: string;
  loginTime: string;
  classGrade?: string;
}

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export type QuestionType = 'single' | 'complex_multiple' | 'matrix';

export interface QuestionStimulus {
  id?: string;
  title: string;
  text?: string;
  imageUrl?: string;
  imageCaption?: string;
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
  };
}

export interface MatrixConfig {
  rows: string[];
  columns: string[]; // e.g. ["Benar", "Salah"] or ["Sesuai", "Tidak Sesuai"]
}

export interface Question {
  id: number;
  number: number;
  category: SubjectCategory;
  questionType?: QuestionType; // 'single' (default), 'complex_multiple', 'matrix'
  stimulus?: QuestionStimulus;
  passageTitle?: string;
  passageText?: string;
  questionText: string;
  imageUrl?: string;
  imageCaption?: string;
  options: QuestionOption[];
  correctAnswer?: 'A' | 'B' | 'C' | 'D';
  correctMultipleAnswers?: ('A' | 'B' | 'C' | 'D')[]; // untuk Pilihan Ganda Kompleks
  matrixConfig?: MatrixConfig; // untuk Pilihan Ganda Kompleks Kategori Matriks
  correctMatrixAnswers?: Record<number, string>; // e.g. { 0: 'Benar', 1: 'Salah', 2: 'Benar' }
  explanation: string;
  difficulty: 'Mudah' | 'Sedang' | 'Tantangan';
  cognitiveLevel?: 'LOTS' | 'MOTS' | 'HOTS';
  topic: string;
  subjectCode?: 'MTK' | 'BIN' | 'IPA' | 'LOG';
}

export interface ExamPackage {
  id: string;
  subjectCode?: 'MTK' | 'BIN' | 'IPA' | 'LOG' | 'ALL';
  title: string;
  subtitle: string;
  category: string;
  durationMinutes: number;
  validToken: string;
  totalQuestionsCount?: number;
  badgeColor?: string;
  instructionSummary: string[];
}

export interface UserAnswerState {
  questionId: number;
  selectedOption: 'A' | 'B' | 'C' | 'D' | null;
  selectedOptions?: ('A' | 'B' | 'C' | 'D')[]; // Pilihan ganda kompleks
  matrixAnswers?: Record<number, string>; // Pilihan ganda kompleks matriks (row index -> chosen column)
  isDoubtful: boolean;
}

export interface CategoryScoreSummary {
  category: SubjectCategory;
  total: number;
  correct: number;
  percentage: number;
}

export interface ExamFinalResult {
  id: string;
  student: Student;
  examPackage: ExamPackage;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  doubtfulCount: number;
  score: number; // 0 - 100
  irtScore?: number; // Skala 200 - 800 (Teori Respons Butir)
  timeSpentFormatted: string;
  completedAt: string;
  categoryBreakdown: CategoryScoreSummary[];
  tabSwitchViolations?: number;
  questionResults: {
    question: Question;
    userAnswer: 'A' | 'B' | 'C' | 'D' | null;
    userAnswersComplex?: ('A' | 'B' | 'C' | 'D')[];
    userMatrixAnswers?: Record<number, string>;
    isCorrect: boolean;
    isDoubtful: boolean;
  }[];
}

// 1. Fitur Jadwal Ujian
export interface ActiveExamSessionConfig {
  activePackageId: string;
  activeSubjectCode: 'MTK' | 'BIN' | 'IPA' | 'LOG';
  sessionTitle: string;
  roomName: string;
  sessionNumber: number;
  token: string;
  tokenLocked: boolean;
  isSessionOpen: boolean;
  durationMinutes: number;
  totalQuestions: number;
  announcement?: string;
  updatedBy: string;
  updatedAt: string;
}

export interface ExamSchedule {
  id: string;
  title: string;
  subjectCode: 'MTK' | 'BIN' | 'IPA' | 'LOG' | 'ALL';
  packageId: string;
  examDate: string; // YYYY-MM-DD
  startTime: string; // HH:MM
  endTime: string; // HH:MM
  durationMinutes: number;
  roomName: string; // misal: "Lab Komputer 1"
  sessionNumber: number; // 1, 2, 3
  token: string;
  tokenLocked?: boolean;
  tokenExpiresAt?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

// 2. Sesi Live Monitoring Proktor
export interface LiveStudentSession {
  id: string;
  studentId: string;
  studentName: string;
  participantNumber: string;
  schoolName: string;
  subjectCode: 'MTK' | 'BIN' | 'IPA' | 'LOG';
  packageId: string;
  status: 'not_started' | 'working' | 'submitted' | 'disconnected' | 'force_stopped';
  answeredCount: number;
  totalQuestions: number;
  doubtfulCount: number;
  timeRemainingSeconds: number;
  tabSwitchCount: number;
  extraTimeMinutes: number;
  ipAddress?: string;
  lastActiveTime: string;
}

// 3. Konfigurasi Sistem
export interface SystemConfig {
  schoolName: string;
  schoolAddress: string;
  headmasterName: string;
  headmasterNip?: string;
  proctorName: string;
  scoringSystem: 'standard' | 'penalty_negative' | 'irt_weighted';
  antiCheatLevel: 'off' | 'medium' | 'strict';
  allowPracticeMode: boolean;
  tokenAutoRotateMinutes: number;
  bannerNotice?: string;
}

// 4. Log Audit Aktivitas
export interface AuditLog {
  id: string;
  timestamp: string;
  userName: string;
  role: UserRole;
  action: string;
  details: string;
  ipAddress?: string;
}

export type ScreenState = 
  | 'landing' 
  | 'login' 
  | 'student_dashboard' 
  | 'student_select' 
  | 'practice'
  | 'instruction' 
  | 'exam' 
  | 'result' 
  | 'teacher_dashboard' 
  | 'proctor_dashboard' 
  | 'admin';

export type FontSizeOption = 'normal' | 'large' | 'xlarge';
