import { 
  ExamSchedule, 
  LiveStudentSession, 
  SystemConfig, 
  AuditLog, 
  Question, 
  ExamPackage,
  SubjectCategory,
  ActiveExamSessionConfig
} from '../types/quiz';
import { 
  ALL_EXAM_PACKAGES, 
  QUESTIONS_MATEMATIKA, 
  QUESTIONS_BAHASA, 
  QUESTIONS_IPA, 
  QUESTIONS_PENALARAN 
} from './mockDatabase';

const SCHEDULES_KEY = 'TKA_SCHEDULES_V2';
const LIVE_SESSIONS_KEY = 'TKA_LIVE_SESSIONS_V2';
const SYSTEM_CONFIG_KEY = 'TKA_SYSTEM_CONFIG_V2';
const AUDIT_LOGS_KEY = 'TKA_AUDIT_LOGS_V2';
const CUSTOM_QUESTIONS_KEY = 'TKA_CUSTOM_QUESTIONS_V3';
const ACTIVE_EXAM_CONFIG_KEY = 'TKA_ACTIVE_EXAM_CONFIG_V3';

// 0. Inisialisasi Konfigurasi Paket & Sesi Ujian Aktif (Kendali Proktor Nasional)
const DEFAULT_ACTIVE_EXAM_CONFIG: ActiveExamSessionConfig = {
  activePackageId: 'TKA-MTK-01',
  activeSubjectCode: 'MTK',
  sessionTitle: 'Sesi 1: Matematika & Numerasi (Diagnostik)',
  roomName: 'Ruang Lab Komputer 1',
  sessionNumber: 1,
  token: 'TKASD2025',
  tokenLocked: false,
  isSessionOpen: true,
  durationMinutes: 45,
  totalQuestions: 20,
  announcement: 'Silakan login, masukkan token yang tertera pada layar pengawas, dan kerjakan dengan jujur dalam mode layar penuh.',
  updatedBy: 'Proktor Ruang 1',
  updatedAt: new Date().toISOString()
};

// 1. Inisialisasi Jadwal Ujian Bawaan
const DEFAULT_SCHEDULES: ExamSchedule[] = [
  {
    id: 'SCH-01',
    title: 'Sesi 1: Matematika & Numerasi',
    subjectCode: 'MTK',
    packageId: 'TKA-MTK-01',
    examDate: '2026-08-25',
    startTime: '07:30',
    endTime: '08:30',
    durationMinutes: 60,
    roomName: 'Ruang Lab Komputer 1',
    sessionNumber: 1,
    token: 'TKASD2025',
    tokenLocked: false,
    status: 'ongoing'
  },
  {
    id: 'SCH-02',
    title: 'Sesi 2: Bahasa Indonesia & Literasi',
    subjectCode: 'BIN',
    packageId: 'TKA-BIN-01',
    examDate: '2026-08-25',
    startTime: '09:00',
    endTime: '10:00',
    durationMinutes: 60,
    roomName: 'Ruang Lab Komputer 1',
    sessionNumber: 2,
    token: 'LIT2025',
    tokenLocked: false,
    status: 'upcoming'
  },
  {
    id: 'SCH-03',
    title: 'Sesi 3: IPA & Sains Terapan',
    subjectCode: 'IPA',
    packageId: 'TKA-IPA-01',
    examDate: '2026-08-26',
    startTime: '07:30',
    endTime: '08:30',
    durationMinutes: 60,
    roomName: 'Ruang Lab Komputer 1',
    sessionNumber: 3,
    token: 'SAINS2025',
    tokenLocked: false,
    status: 'upcoming'
  },
  {
    id: 'SCH-04',
    title: 'Sesi 4: Penalaran Spasial & Logika',
    subjectCode: 'LOG',
    packageId: 'TKA-LOG-01',
    examDate: '2026-08-26',
    startTime: '09:00',
    endTime: '10:00',
    durationMinutes: 60,
    roomName: 'Ruang Lab Komputer 1',
    sessionNumber: 4,
    token: 'LOG2025',
    tokenLocked: false,
    status: 'upcoming'
  }
];

// 2. Inisialisasi Sesi Live Monitoring Proktor
const DEFAULT_LIVE_SESSIONS: LiveStudentSession[] = [
  {
    id: 'SES-01',
    studentId: 'USR-SISWA-01',
    studentName: 'Ahmad Faiz Pratama',
    participantNumber: 'SD-2025-001',
    schoolName: 'SDN Tempursari 01',
    subjectCode: 'MTK',
    packageId: 'TKA-MTK-01',
    status: 'working',
    answeredCount: 24,
    totalQuestions: 30,
    doubtfulCount: 2,
    timeRemainingSeconds: 1450,
    tabSwitchCount: 0,
    extraTimeMinutes: 0,
    lastActiveTime: 'Baru saja'
  },
  {
    id: 'SES-02',
    studentId: 'USR-SISWA-02',
    studentName: 'Siti Nur Aisyah',
    participantNumber: 'SD-2025-002',
    schoolName: 'SDN Tempursari 01',
    subjectCode: 'MTK',
    packageId: 'TKA-MTK-01',
    status: 'working',
    answeredCount: 29,
    totalQuestions: 30,
    doubtfulCount: 1,
    timeRemainingSeconds: 820,
    tabSwitchCount: 1,
    extraTimeMinutes: 0,
    lastActiveTime: '1 menit lalu'
  },
  {
    id: 'SES-03',
    studentId: 'USR-SISWA-03',
    studentName: 'Budi Santoso',
    participantNumber: 'SD-2025-003',
    schoolName: 'SDN Tempursari 01',
    subjectCode: 'MTK',
    packageId: 'TKA-MTK-01',
    status: 'disconnected',
    answeredCount: 12,
    totalQuestions: 30,
    doubtfulCount: 0,
    timeRemainingSeconds: 2100,
    tabSwitchCount: 0,
    extraTimeMinutes: 0,
    lastActiveTime: '5 menit lalu (Offline)'
  }
];

// 3. Konfigurasi Sistem Bawaan
const DEFAULT_SYSTEM_CONFIG: SystemConfig = {
  schoolName: 'Pusat Asesmen CBT SD/MI',
  schoolAddress: 'Layanan Asesmen Terstandarisasi Nasional',
  headmasterName: 'Drs. H. Bambang Supriyadi, M.Pd',
  headmasterNip: '19720415 199803 1 004',
  proctorName: 'Rahmat Hidayat, S.Kom',
  scoringSystem: 'standard', // 'standard' | 'penalty_negative' | 'irt_weighted'
  antiCheatLevel: 'medium', // 'off' | 'medium' | 'strict'
  allowPracticeMode: true,
  tokenAutoRotateMinutes: 60,
  bannerNotice: 'Selamat datang di Ruang Ujian CBT & TKA SD. Patuhi tata tertib pengerjaan.'
};

// 4. Audit Log Bawaan
const DEFAULT_AUDIT_LOGS: AuditLog[] = [
  {
    id: 'LOG-001',
    timestamp: new Date(Date.now() - 3600000).toLocaleString('id-ID'),
    userName: 'admin',
    role: 'admin',
    action: 'LOGIN_SYSTEM',
    details: 'Login administrator berhasil dari console'
  },
  {
    id: 'LOG-002',
    timestamp: new Date(Date.now() - 1800000).toLocaleString('id-ID'),
    userName: 'proktor',
    role: 'proctor',
    action: 'RELEASE_TOKEN',
    details: 'Token sesi 1 Matematika dirilis: TKASD2025'
  },
  {
    id: 'LOG-003',
    timestamp: new Date(Date.now() - 900000).toLocaleString('id-ID'),
    userName: 'guru',
    role: 'teacher',
    action: 'UPDATE_BANK_SOAL',
    details: 'Memperbarui kunci dan pembahasan soal Matematika No. 12'
  }
];

// ====== JADWAL UJIAN ======
export function getExamSchedules(): ExamSchedule[] {
  try {
    const raw = localStorage.getItem(SCHEDULES_KEY);
    if (!raw) {
      localStorage.setItem(SCHEDULES_KEY, JSON.stringify(DEFAULT_SCHEDULES));
      return DEFAULT_SCHEDULES;
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_SCHEDULES;
  }
}

export function saveExamSchedules(schedules: ExamSchedule[]) {
  localStorage.setItem(SCHEDULES_KEY, JSON.stringify(schedules));
}

// ====== LIVE SESSIONS (PROKTOR) ======
export function getLiveSessions(): LiveStudentSession[] {
  try {
    const raw = localStorage.getItem(LIVE_SESSIONS_KEY);
    if (!raw) {
      localStorage.setItem(LIVE_SESSIONS_KEY, JSON.stringify(DEFAULT_LIVE_SESSIONS));
      return DEFAULT_LIVE_SESSIONS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_LIVE_SESSIONS;
  }
}

export function saveLiveSessions(sessions: LiveStudentSession[]) {
  localStorage.setItem(LIVE_SESSIONS_KEY, JSON.stringify(sessions));
}

export function updateStudentLiveProgress(
  studentId: string,
  update: Partial<LiveStudentSession>
) {
  const sessions = getLiveSessions();
  const index = sessions.findIndex((s) => s.studentId === studentId);
  if (index >= 0) {
    sessions[index] = { ...sessions[index], ...update, lastActiveTime: 'Baru saja' };
  } else {
    sessions.push({
      id: `SES-${Date.now()}`,
      studentId,
      studentName: update.studentName || 'Peserta Ujian',
      participantNumber: update.participantNumber || 'SD-000',
      schoolName: update.schoolName || 'SDN Tempursari 01',
      subjectCode: (update.subjectCode as any) || 'MTK',
      packageId: update.packageId || 'TKA-MTK-01',
      status: update.status || 'working',
      answeredCount: update.answeredCount || 0,
      totalQuestions: update.totalQuestions || 30,
      doubtfulCount: update.doubtfulCount || 0,
      timeRemainingSeconds: update.timeRemainingSeconds || 3600,
      tabSwitchCount: update.tabSwitchCount || 0,
      extraTimeMinutes: 0,
      lastActiveTime: 'Baru saja'
    });
  }
  saveLiveSessions(sessions);
}

// ====== KONFIGURASI SISTEM ======
export function getSystemConfig(): SystemConfig {
  try {
    const raw = localStorage.getItem(SYSTEM_CONFIG_KEY);
    if (!raw) {
      localStorage.setItem(SYSTEM_CONFIG_KEY, JSON.stringify(DEFAULT_SYSTEM_CONFIG));
      return DEFAULT_SYSTEM_CONFIG;
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_SYSTEM_CONFIG;
  }
}

export function saveSystemConfig(cfg: SystemConfig) {
  localStorage.setItem(SYSTEM_CONFIG_KEY, JSON.stringify(cfg));
}

// ====== AUDIT LOGS ======
export function getAuditLogs(): AuditLog[] {
  try {
    const raw = localStorage.getItem(AUDIT_LOGS_KEY);
    if (!raw) {
      localStorage.setItem(AUDIT_LOGS_KEY, JSON.stringify(DEFAULT_AUDIT_LOGS));
      return DEFAULT_AUDIT_LOGS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_AUDIT_LOGS;
  }
}

export function addAuditLog(userName: string, role: any, action: string, details: string) {
  const logs = getAuditLogs();
  logs.unshift({
    id: `LOG-${Date.now()}`,
    timestamp: new Date().toLocaleString('id-ID'),
    userName,
    role,
    action,
    details
  });
  if (logs.length > 100) logs.pop();
  localStorage.setItem(AUDIT_LOGS_KEY, JSON.stringify(logs));
}

// ====== BANK SOAL GURU (ALL 120+ QUESTIONS WITH EDITABILITY) ======
export function getAllQuestionBank(): Question[] {
  try {
    const raw = localStorage.getItem(CUSTOM_QUESTIONS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    // fallback
  }

  // Gabungkan semua bank soal awal
  const combined: Question[] = [
    ...QUESTIONS_MATEMATIKA.map(q => ({ ...q, subjectCode: 'MTK' as const, cognitiveLevel: q.difficulty === 'Tantangan' ? 'HOTS' as const : q.difficulty === 'Sedang' ? 'MOTS' as const : 'LOTS' as const })),
    ...QUESTIONS_BAHASA.map(q => ({ ...q, subjectCode: 'BIN' as const, cognitiveLevel: q.difficulty === 'Tantangan' ? 'HOTS' as const : q.difficulty === 'Sedang' ? 'MOTS' as const : 'LOTS' as const })),
    ...QUESTIONS_IPA.map(q => ({ ...q, subjectCode: 'IPA' as const, cognitiveLevel: q.difficulty === 'Tantangan' ? 'HOTS' as const : q.difficulty === 'Sedang' ? 'MOTS' as const : 'LOTS' as const })),
    ...QUESTIONS_PENALARAN.map(q => ({ ...q, subjectCode: 'LOG' as const, cognitiveLevel: q.difficulty === 'Tantangan' ? 'HOTS' as const : q.difficulty === 'Sedang' ? 'MOTS' as const : 'LOTS' as const }))
  ];

  localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(combined));
  return combined;
}

export function saveQuestionBank(questions: Question[]) {
  localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(questions));
}

// ====== KONFIGURASI PAKET & SESI UJIAN AKTIF (KENDALI PROKTOR) ======
export function getActiveExamSessionConfig(): ActiveExamSessionConfig {
  try {
    const raw = localStorage.getItem(ACTIVE_EXAM_CONFIG_KEY);
    if (!raw) {
      localStorage.setItem(ACTIVE_EXAM_CONFIG_KEY, JSON.stringify(DEFAULT_ACTIVE_EXAM_CONFIG));
      return DEFAULT_ACTIVE_EXAM_CONFIG;
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_ACTIVE_EXAM_CONFIG;
  }
}

export function saveActiveExamSessionConfig(config: ActiveExamSessionConfig): void {
  localStorage.setItem(ACTIVE_EXAM_CONFIG_KEY, JSON.stringify(config));
}

export function setProctorActivePackage(packageId: string, proctorName: string = 'Proktor'): ActiveExamSessionConfig {
  const targetPkg = ALL_EXAM_PACKAGES.find(p => p.id === packageId) || ALL_EXAM_PACKAGES[0];
  const current = getActiveExamSessionConfig();
  
  const updated: ActiveExamSessionConfig = {
    ...current,
    activePackageId: targetPkg.id,
    activeSubjectCode: targetPkg.subjectCode as any,
    sessionTitle: targetPkg.title,
    durationMinutes: targetPkg.durationMinutes,
    totalQuestions: targetPkg.totalQuestionsCount,
    token: targetPkg.validToken, // sesuaikan token dasar atau pertahankan token
    updatedBy: proctorName,
    updatedAt: new Date().toISOString()
  };

  saveActiveExamSessionConfig(updated);
  addAuditLog(proctorName, 'proctor', 'SET_ACTIVE_PACKAGE', `Mengatur paket ujian aktif: [${targetPkg.id}] ${targetPkg.title}`);
  return updated;
}

export function releaseNewProctorToken(proctorName: string = 'Proktor'): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let newToken = '';
  for (let i = 0; i < 6; i++) {
    newToken += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  const current = getActiveExamSessionConfig();
  const updated: ActiveExamSessionConfig = {
    ...current,
    token: newToken,
    tokenLocked: false,
    updatedBy: proctorName,
    updatedAt: new Date().toISOString()
  };

  saveActiveExamSessionConfig(updated);
  addAuditLog(proctorName, 'proctor', 'RELEASE_NEW_TOKEN', `Merilis token baru sesi aktif: ${newToken}`);
  return newToken;
}

