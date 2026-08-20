import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  ScreenState, 
  Student, 
  ExamPackage, 
  Question, 
  UserAnswerState, 
  FontSizeOption, 
  ExamFinalResult, 
  CategoryScoreSummary,
  SubjectCategory,
  AppUser
} from './types/quiz';
import { 
  DEFAULT_EXAM_PACKAGE, 
  getQuestionsForPackage 
} from './data/mockDatabase';
import { 
  saveExamResultToDatabase,
  syncLiveExamSessionToDatabase,
  deleteLiveExamSessionFromDatabase,
  fetchLiveExamSessionFromDatabase
} from './lib/supabase';
import { 
  generateExamSignature, 
  verifyExamSignature, 
  calculateTrueRemainingSeconds 
} from './lib/examSecurity';
import { getCurrentUser, setCurrentUser as persistCurrentUser } from './lib/auth';
import { Navbar } from './components/Navbar';
import { LoginScreen } from './components/LoginScreen';
import { StudentDashboardScreen } from './components/StudentDashboardScreen';
import { TeacherDashboardScreen } from './components/TeacherDashboardScreen';
import { ProctorDashboardScreen } from './components/ProctorDashboardScreen';
import { AdminDashboardScreen } from './components/AdminDashboardScreen';
import { InstructionScreen } from './components/InstructionScreen';
import { ExamHeader } from './components/ExamHeader';
import { ExamQuestionArea } from './components/ExamQuestionArea';
import { ExamNavigation } from './components/ExamNavigation';
import { QuestionGrid } from './components/QuestionGrid';
import { ConfirmFinishModal } from './components/ConfirmFinishModal';
import { ResultScreen } from './components/ResultScreen';
import { DatabaseSchemaModal } from './components/DatabaseSchemaModal';
import { LandingScreen } from './components/LandingScreen';
import { addAuditLog, updateStudentLiveProgress } from './data/rolesDataStore';

const SCREEN_STORAGE_KEY = 'TKA_ACTIVE_SCREEN_V2';
const EXAM_SESSION_KEY = 'TKA_ACTIVE_EXAM_SESSION_V2';
const FINAL_RESULT_KEY = 'TKA_LAST_FINAL_RESULT_V2';

interface StoredExamSession {
  student: Student;
  examPackage: ExamPackage;
  currentIndex: number;
  userAnswers: Record<number, UserAnswerState>;
  fontSize: FontSizeOption;
  startTimeEpoch: number;
  timeRemaining: number;
  totalDurationSeconds: number;
  extraTimeSeconds?: number;
  tabSwitchCount: number;
  signature?: string;
  savedTimestamp: number;
}

export default function App() {
  // Sesi User Aktif
  const [currentUser, setCurrentUserState] = useState<AppUser | null>(() => getCurrentUser());

  // Restore Sesi Ujian Aktif dengan Anti-Cheat Validasi Waktu Mulai & Checksum
  const initialExamSession = (): StoredExamSession | null => {
    try {
      const raw = localStorage.getItem(EXAM_SESSION_KEY);
      if (raw) {
        const parsed: StoredExamSession = JSON.parse(raw);
        const startTime = parsed.startTimeEpoch || parsed.savedTimestamp || Date.now();
        const duration = parsed.totalDurationSeconds || 3600;
        const extraSec = parsed.extraTimeSeconds || 0;

        // Hitung sisa waktu nyata dari Epoch Timestamp (Bukan membaca angka detik yang rawan diubah)
        const { trueRemaining, isExpired } = calculateTrueRemainingSeconds(startTime, duration, extraSec);

        // Verifikasi integritas tanda tangan sesi
        const isSignatureValid = parsed.signature 
          ? verifyExamSignature(parsed.student.id, parsed.examPackage.id, startTime, duration, parsed.signature)
          : true;

        if (!isSignatureValid) {
          console.warn('⚠️ Peringatan Integritas Sesi: Checksum tidak valid, memulihkan waktu dari timestamp anchor');
        }

        if (isExpired) {
          localStorage.removeItem(EXAM_SESSION_KEY);
          return null;
        }

        return {
          ...parsed,
          startTimeEpoch: startTime,
          timeRemaining: trueRemaining,
          signature: generateExamSignature(parsed.student.id, parsed.examPackage.id, startTime, duration)
        };
      }
    } catch (e) {
      console.warn('Gagal membaca sesi ujian aktif:', e);
    }
    return null;
  };

  const recoveredSession = useRef<StoredExamSession | null>(initialExamSession());

  // State Navigasi Layar dengan deteksi sesi login tersimpan
  const [screen, setScreenState] = useState<ScreenState>(() => {
    const saved = localStorage.getItem(SCREEN_STORAGE_KEY) as ScreenState;
    const u = getCurrentUser();

    // Jika ada sesi ujian yang sedang berjalan saat refresh
    if (recoveredSession.current && recoveredSession.current.timeRemaining > 0 && u?.role === 'student') {
      return 'exam';
    }

    if (saved && u) {
      if (u.role === 'admin' && (saved === 'admin' || saved === 'landing')) return saved;
      if (u.role === 'teacher' && (saved === 'teacher_dashboard' || saved === 'landing')) return saved;
      if (u.role === 'proctor' && (saved === 'proctor_dashboard' || saved === 'landing')) return saved;
      if (u.role === 'student') {
        if (['student_select', 'student_dashboard', 'instruction', 'result', 'landing'].includes(saved)) {
          return saved;
        }
      }
    }

    if (u) {
      if (u.role === 'admin') return 'admin';
      if (u.role === 'teacher') return 'teacher_dashboard';
      if (u.role === 'proctor') return 'proctor_dashboard';
      return 'student_select';
    }

    return 'landing';
  });

  const setScreen = (newScreen: ScreenState) => {
    setScreenState(newScreen);
    localStorage.setItem(SCREEN_STORAGE_KEY, newScreen);
  };

  const [loginInitialMode, setLoginInitialMode] = useState<'login' | 'register'>('login');
  
  // Data Peserta & Paket Ujian
  const [student, setStudent] = useState<Student | null>(() => {
    if (recoveredSession.current) {
      return recoveredSession.current.student;
    }
    const u = getCurrentUser();
    if (u && u.role === 'student') {
      return {
        id: u.id,
        name: u.fullName,
        schoolName: u.schoolName,
        participantNumber: u.participantNumber,
        token: DEFAULT_EXAM_PACKAGE.validToken,
        loginTime: new Date().toISOString(),
        classGrade: u.classGrade
      };
    }
    return null;
  });

  const [examPackage, setExamPackage] = useState<ExamPackage>(() => {
    if (recoveredSession.current) {
      return recoveredSession.current.examPackage;
    }
    return DEFAULT_EXAM_PACKAGE;
  });

  const [questions, setQuestions] = useState<Question[]>(() => {
    const pkgId = recoveredSession.current ? recoveredSession.current.examPackage.id : DEFAULT_EXAM_PACKAGE.id;
    return getQuestionsForPackage(pkgId);
  });
  
  // State Pengerjaan Ujian
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    return recoveredSession.current?.currentIndex || 0;
  });

  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswerState>>(() => {
    return recoveredSession.current?.userAnswers || {};
  });

  const [fontSize, setFontSize] = useState<FontSizeOption>(() => {
    return recoveredSession.current?.fontSize || 'normal';
  });
  
  // State Timer Hitung Mundur
  const totalDurationSeconds = examPackage.durationMinutes * 60;
  const [timeRemaining, setTimeRemaining] = useState<number>(() => {
    if (recoveredSession.current) {
      return recoveredSession.current.timeRemaining;
    }
    return totalDurationSeconds;
  });

  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(() => {
    return !!recoveredSession.current && recoveredSession.current.timeRemaining > 0;
  });

  const startTimeRef = useRef<number>(recoveredSession.current?.startTimeEpoch || Date.now());

  // Modals & Drawers
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [isDbModalOpen, setIsDbModalOpen] = useState<boolean>(false);
  
  // Anti-Cheat: Hitung Berapa Kali Pindah Tab
  const [tabSwitchCount, setTabSwitchCount] = useState<number>(() => {
    return recoveredSession.current?.tabSwitchCount || 0;
  });

  // Hasil Akhir
  const [finalResult, setFinalResult] = useState<ExamFinalResult | null>(() => {
    try {
      const raw = localStorage.getItem(FINAL_RESULT_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // safe ignore
    }
    return null;
  });

  // Auto-Save sesi ujian aktif ke localStorage saat ujian berjalan dengan Checksum & Timestamp Anchor
  useEffect(() => {
    if (screen === 'exam' && student) {
      const signature = generateExamSignature(
        student.id,
        examPackage.id,
        startTimeRef.current,
        totalDurationSeconds
      );

      const sessionData: StoredExamSession = {
        student,
        examPackage,
        currentIndex,
        userAnswers,
        fontSize,
        startTimeEpoch: startTimeRef.current,
        timeRemaining,
        totalDurationSeconds,
        tabSwitchCount,
        signature,
        savedTimestamp: Date.now()
      };
      localStorage.setItem(EXAM_SESSION_KEY, JSON.stringify(sessionData));
    }
  }, [screen, student, examPackage, currentIndex, userAnswers, fontSize, timeRemaining, totalDurationSeconds, tabSwitchCount]);

  // Deteksi Pindah Tab saat Ujian Berlangsung
  useEffect(() => {
    if (screen !== 'exam') return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount((prev) => {
          const next = prev + 1;
          if (currentUser) {
            addAuditLog(currentUser.fullName, 'student', 'TAB_SWITCH_WARNING', `Peserta berpindah tab/layar ujian (${next} kali).`);
          }
          return next;
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [screen, currentUser]);

  // Handler Ganti Paket Ujian (Mapel)
  const handleSelectPackage = (pkg: ExamPackage) => {
    setExamPackage(pkg);
    const newQuestions = getQuestionsForPackage(pkg.id);
    setQuestions(newQuestions);
    setTimeRemaining(pkg.durationMinutes * 60);
    setUserAnswers({});
    setCurrentIndex(0);
  };

  // Sound effect generator
  const playSoundEffect = useCallback((type: 'click' | 'doubt' | 'finish' | 'timeup') => {
    try {
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'click') {
        osc.frequency.setValueAtTime(520, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'doubt') {
        osc.frequency.setValueAtTime(380, now);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'finish') {
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.setValueAtTime(880, now + 0.1);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'timeup') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.setValueAtTime(200, now + 0.2);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      }
    } catch (e) {
      // safe fallback
    }
  }, []);

  // Hitung Hasil Skor & Evaluasi Ujian (Termasuk Skala IRT)
  const calculateFinalResult = useCallback((isTimeUp: boolean = false): ExamFinalResult => {
    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;
    let doubtfulCount = 0;

    const categoryTotals: Record<string, { total: number; correct: number }> = {};

    const questionResults = questions.map((q) => {
      const ans = userAnswers[q.id];
      const selected = ans?.selectedOption || null;
      const userAnswersComplex = ans?.selectedOptions || [];
      const userMatrixAnswers = ans?.matrixAnswers || {};
      const isDoubtful = ans?.isDoubtful || false;
      const qType = q.questionType || 'single';

      let isAnswered = false;
      let isCorrect = false;

      if (qType === 'single') {
        isAnswered = selected !== null;
        isCorrect = selected === q.correctAnswer;
      } else if (qType === 'complex_multiple') {
        isAnswered = userAnswersComplex.length > 0;
        const correctOpts = q.correctMultipleAnswers || [];
        isCorrect = userAnswersComplex.length === correctOpts.length && 
                    userAnswersComplex.every(opt => correctOpts.includes(opt));
      } else if (qType === 'matrix') {
        const totalRows = q.matrixConfig?.rows.length || 0;
        const answeredRowCount = Object.keys(userMatrixAnswers).length;
        isAnswered = answeredRowCount > 0;
        isCorrect = totalRows > 0 && 
                    q.matrixConfig!.rows.every((_, idx) => userMatrixAnswers[idx] === q.correctMatrixAnswers?.[idx]);
      }

      if (!categoryTotals[q.category]) {
        categoryTotals[q.category] = { total: 0, correct: 0 };
      }
      categoryTotals[q.category].total += 1;
      if (isCorrect) {
        categoryTotals[q.category].correct += 1;
      }

      if (isDoubtful) doubtfulCount++;

      if (!isAnswered) {
        unansweredCount++;
      } else if (isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }

      return {
        question: q,
        userAnswer: selected,
        userAnswersComplex,
        userMatrixAnswers,
        isCorrect,
        isDoubtful
      };
    });

    const totalQ = questions.length;
    const score = Math.round((correctCount / totalQ) * 100);
    // Skala Skor IRT (200 - 800)
    const irtScore = Math.round(200 + ((correctCount / totalQ) * 600));

    const timeSpentSeconds = totalDurationSeconds - timeRemaining;
    const spentMins = Math.floor(timeSpentSeconds / 60);
    const spentSecs = timeSpentSeconds % 60;
    const timeSpentFormatted = `${spentMins} Menit ${spentSecs} Detik`;

    const categoryBreakdown: CategoryScoreSummary[] = Object.entries(categoryTotals)
      .filter(([_, val]) => val.total > 0)
      .map(([cat, val]) => ({
        category: cat as SubjectCategory,
        total: val.total,
        correct: val.correct,
        percentage: Math.round((val.correct / val.total) * 100)
      }));

    return {
      id: `HASIL-${Date.now()}`,
      student: student || {
        id: currentUser?.id || 'SISWA-ANON',
        name: currentUser?.fullName || 'Peserta Ujian',
        schoolName: currentUser?.schoolName || 'Satuan Pendidikan SD/MI',
        participantNumber: currentUser?.participantNumber || 'SD-000',
        token: examPackage.validToken,
        loginTime: new Date().toISOString()
      },
      examPackage,
      totalQuestions: totalQ,
      correctCount,
      wrongCount,
      unansweredCount,
      doubtfulCount,
      score,
      irtScore,
      timeSpentFormatted,
      completedAt: new Date().toISOString(),
      categoryBreakdown,
      tabSwitchViolations: tabSwitchCount,
      questionResults
    };
  }, [questions, userAnswers, totalDurationSeconds, timeRemaining, student, currentUser, examPackage, tabSwitchCount]);

  // Handler Selesai Ujian
  const handleFinishExam = useCallback((isTimeUp = false) => {
    setIsTimerRunning(false);
    setIsConfirmModalOpen(false);
    setIsMobileDrawerOpen(false);

    if (isTimeUp) {
      playSoundEffect('timeup');
    } else {
      playSoundEffect('finish');
    }

    const result = calculateFinalResult(isTimeUp);
    setFinalResult(result);
    localStorage.setItem(FINAL_RESULT_KEY, JSON.stringify(result));
    localStorage.removeItem(EXAM_SESSION_KEY);
    setScreen('result');

    if (currentUser) {
      addAuditLog(currentUser.fullName, 'student', 'SUBMIT_EXAM', `Menyelesaikan ujian ${examPackage.title} dengan skor: ${result.score} (IRT: ${result.irtScore})`);
      // Hapus sesi live ujian di Cloud Supabase & perbarui status di monitor proktor
      deleteLiveExamSessionFromDatabase(currentUser.id);
      updateStudentLiveProgress(currentUser.id, {
        status: 'submitted',
        answeredCount: result.totalQuestions - result.unansweredCount,
        doubtfulCount: result.doubtfulCount,
        timeRemainingSeconds: 0
      });
    }

    // Simpan ke Supabase & LocalStorage (dengan Server-Side RPC Grading jika aktif)
    saveExamResultToDatabase(result, userAnswers);
  }, [calculateFinalResult, playSoundEffect, currentUser, examPackage.title, userAnswers]);

  // Timer Effect dengan Validasi Anti-Cheat (Timestamp Anchor)
  useEffect(() => {
    if (!isTimerRunning) return;

    const timer = setInterval(() => {
      // Hitung sisa waktu aktual dari timestamp anchor untuk mencegah manipulasi client-side
      const { trueRemaining, isExpired } = calculateTrueRemainingSeconds(
        startTimeRef.current,
        totalDurationSeconds
      );

      if (isExpired || trueRemaining <= 0) {
        clearInterval(timer);
        setTimeRemaining(0);
        handleFinishExam(true);
        return;
      }

      setTimeRemaining(trueRemaining);
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning, totalDurationSeconds, handleFinishExam]);

  // Handler Login Sukses (Otomatis Arahkan Berdasarkan 4 Peran & Cek Sesi Cloud)
  const handleLoginSuccess = async (user: AppUser) => {
    setCurrentUserState(user);
    persistCurrentUser(user);

    addAuditLog(user.fullName, user.role, 'LOGIN_SUCCESS', `Login berhasil sebagai ${user.role.toUpperCase()}`);

    if (user.role === 'admin') {
      setScreen('admin');
    } else if (user.role === 'proctor') {
      setScreen('proctor_dashboard');
    } else if (user.role === 'teacher') {
      setScreen('teacher_dashboard');
    } else {
      // Untuk Siswa: Cek apakah ada sesi ujian cloud yang belum selesai (misal laptop mati mendadak)
      const cloudSession = await fetchLiveExamSessionFromDatabase(user.id);
      if (cloudSession && cloudSession.packageId) {
        const { trueRemaining, isExpired } = calculateTrueRemainingSeconds(
          cloudSession.startTimeEpoch,
          cloudSession.totalDurationSeconds
        );

        if (!isExpired && trueRemaining > 0) {
          // Pulihkan seluruh jawaban siswa dari cloud
          startTimeRef.current = cloudSession.startTimeEpoch;
          setTimeRemaining(trueRemaining);
          setCurrentIndex(cloudSession.currentIndex || 0);
          setTabSwitchCount(cloudSession.tabSwitchCount || 0);
          
          const restoredAnswers: Record<number, UserAnswerState> = {};
          Object.entries(cloudSession.userAnswers || {}).forEach(([k, v]) => {
            restoredAnswers[Number(k)] = {
              questionId: Number(k),
              selectedOption: (v as any).selectedOption,
              isDoubtful: (v as any).isDoubtful
            };
          });
          setUserAnswers(restoredAnswers);

          const studentData: Student = {
            id: user.id,
            name: user.fullName,
            schoolName: user.schoolName,
            participantNumber: user.participantNumber,
            token: examPackage.validToken,
            loginTime: new Date().toISOString(),
            classGrade: user.classGrade
          };
          setStudent(studentData);
          setIsTimerRunning(true);
          setScreen('exam');
          return;
        }
      }

      const studentData: Student = {
        id: user.id,
        name: user.fullName,
        schoolName: user.schoolName,
        participantNumber: user.participantNumber,
        token: examPackage.validToken,
        loginTime: new Date().toISOString(),
        classGrade: user.classGrade
      };
      setStudent(studentData);
      setScreen('student_select');
    }
  };

  // Handler Logout
  const handleLogout = () => {
    if (currentUser) {
      addAuditLog(currentUser.fullName, currentUser.role, 'LOGOUT', 'Pengguna keluar dari sistem');
    }
    setIsTimerRunning(false);
    setCurrentUserState(null);
    persistCurrentUser(null);
    setStudent(null);
    setUserAnswers({});
    setFinalResult(null);
    setCurrentIndex(0);
    setTabSwitchCount(0);
    localStorage.removeItem(SCREEN_STORAGE_KEY);
    localStorage.removeItem(EXAM_SESSION_KEY);
    localStorage.removeItem(FINAL_RESULT_KEY);
    setScreen('landing');
  };

  // Navigasi ke Halaman Login / Register
  const handleNavigateToLogin = (mode: 'login' | 'register' = 'login') => {
    setLoginInitialMode(mode);
    setScreen('login');
  };

  // Navigasi ke Halaman Utama (Landing)
  const handleNavigateLanding = () => {
    setScreen('landing');
  };

  // Handler Pilih Mapel langsung dari Landing Page
  const handleSelectPackageAndStart = (pkg: ExamPackage) => {
    handleSelectPackage(pkg);
    if (currentUser) {
      if (currentUser.role === 'student') {
        const studentData: Student = {
          id: currentUser.id,
          name: currentUser.fullName,
          schoolName: currentUser.schoolName,
          participantNumber: currentUser.participantNumber,
          token: pkg.validToken,
          loginTime: new Date().toISOString(),
          classGrade: currentUser.classGrade
        };
        setStudent(studentData);
        setScreen('instruction');
      } else if (currentUser.role === 'teacher') {
        setScreen('teacher_dashboard');
      } else if (currentUser.role === 'proctor') {
        setScreen('proctor_dashboard');
      } else {
        setScreen('admin');
      }
    } else {
      setLoginInitialMode('login');
      setScreen('login');
    }
  };

  // Handler Masuk ke Instruksi Ujian
  const handleStartExamFlow = (studentData: Student) => {
    setStudent(studentData);
    setScreen('instruction');
  };

  // Handler Mulai Mengerjakan Ujian
  const handleStartExam = () => {
    // 1. Otomatis Beralih ke Mode Layar Penuh (Fullscreen Kiosk Mode) Sesuai Standar ANBK
    try {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
      } else if ((docEl as any).webkitRequestFullscreen) {
        (docEl as any).webkitRequestFullscreen();
      } else if ((docEl as any).msRequestFullscreen) {
        (docEl as any).msRequestFullscreen();
      }
    } catch (err) {
      console.warn('Layar penuh otomatis dicegah peramban:', err);
    }

    const startEpoch = Date.now();
    startTimeRef.current = startEpoch;
    setCurrentIndex(0);
    setUserAnswers({});
    setTimeRemaining(totalDurationSeconds);
    setTabSwitchCount(0);
    setIsTimerRunning(true);
    setScreen('exam');

    if (currentUser) {
      addAuditLog(currentUser.fullName, 'student', 'START_EXAM', `Memulai pengerjaan ujian: ${examPackage.title}`);
      
      // Update data sesi live proktor
      updateStudentLiveProgress(currentUser.id, {
        studentName: currentUser.fullName,
        participantNumber: currentUser.participantNumber,
        schoolName: currentUser.schoolName,
        subjectCode: examPackage.subjectCode,
        packageId: examPackage.id,
        status: 'working',
        answeredCount: 0,
        totalQuestions: questions.length,
        doubtfulCount: 0,
        timeRemainingSeconds: totalDurationSeconds,
        tabSwitchCount: 0
      });

      // Background sync awal ke Supabase
      syncLiveExamSessionToDatabase({
        studentId: currentUser.id,
        studentName: currentUser.fullName,
        participantNumber: currentUser.participantNumber,
        schoolName: currentUser.schoolName,
        packageId: examPackage.id,
        subjectCode: examPackage.subjectCode,
        startTimeEpoch: startEpoch,
        totalDurationSeconds,
        timeRemainingSeconds: totalDurationSeconds,
        answeredCount: 0,
        doubtfulCount: 0,
        totalQuestions: questions.length,
        currentIndex: 0,
        tabSwitchCount: 0,
        userAnswers: {},
        lastHeartbeat: new Date().toISOString()
      });
    }
  };

  // Helper untuk memicu auto-save ke latar belakang (Background Auto-Sync)
  const triggerLiveAutoSave = (updatedAnswers: Record<number, UserAnswerState>) => {
    if (!currentUser || currentUser.role !== 'student') return;

    const ansList = Object.values(updatedAnswers) as UserAnswerState[];
    const ansCount = ansList.filter(a => {
      if (!a) return false;
      const q = questions.find(item => item.id === a.questionId);
      const type = q?.questionType || 'single';
      if (type === 'single') return !!a.selectedOption;
      if (type === 'complex_multiple') return !!(a.selectedOptions && a.selectedOptions.length > 0);
      if (type === 'matrix') return !!(a.matrixAnswers && Object.keys(a.matrixAnswers).length > 0);
      return !!a.selectedOption;
    }).length;
    const doubtCount = ansList.filter(a => !!a?.isDoubtful).length;

    // 1. Update ke Live Monitoring Proktor lokal
    updateStudentLiveProgress(currentUser.id, {
      studentName: currentUser.fullName,
      participantNumber: currentUser.participantNumber,
      schoolName: currentUser.schoolName,
      subjectCode: examPackage.subjectCode,
      packageId: examPackage.id,
      status: 'working',
      answeredCount: ansCount,
      totalQuestions: questions.length,
      doubtfulCount: doubtCount,
      timeRemainingSeconds: timeRemaining,
      tabSwitchCount
    });

    // 2. Background Auto-Save ke Supabase Cloud (Non-blocking)
    syncLiveExamSessionToDatabase({
      studentId: currentUser.id,
      studentName: currentUser.fullName,
      participantNumber: currentUser.participantNumber,
      schoolName: currentUser.schoolName,
      packageId: examPackage.id,
      subjectCode: examPackage.subjectCode,
      startTimeEpoch: startTimeRef.current,
      totalDurationSeconds,
      timeRemainingSeconds: timeRemaining,
      answeredCount: ansCount,
      doubtfulCount: doubtCount,
      totalQuestions: questions.length,
      currentIndex,
      tabSwitchCount,
      userAnswers: updatedAnswers,
      lastHeartbeat: new Date().toISOString()
    });
  };

  // Handlers Jawaban Soal
  const currentQuestion = questions[currentIndex];
  const currentAnswerState = currentQuestion ? userAnswers[currentQuestion.id] : undefined;

  const handleSelectOption = (optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQuestion) return;
    playSoundEffect('click');
    setUserAnswers((prev) => {
      const existing = prev[currentQuestion.id] || {
        questionId: currentQuestion.id,
        selectedOption: null,
        isDoubtful: false
      };

      const newOption = existing.selectedOption === optionKey ? null : optionKey;

      const nextAnswers = {
        ...prev,
        [currentQuestion.id]: {
          ...existing,
          selectedOption: newOption
        }
      };

      // Memicu background auto-save setiap kali siswa mengklik jawaban
      triggerLiveAutoSave(nextAnswers);

      return nextAnswers;
    });
  };

  // Handler untuk Pilihan Ganda Kompleks (Multi Jawaban Benar)
  const handleToggleComplexOption = (optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQuestion) return;
    playSoundEffect('click');
    setUserAnswers((prev) => {
      const existing = prev[currentQuestion.id] || {
        questionId: currentQuestion.id,
        selectedOption: null,
        selectedOptions: [],
        isDoubtful: false
      };

      const currentList = existing.selectedOptions || [];
      const nextList = currentList.includes(optionKey)
        ? currentList.filter((k) => k !== optionKey)
        : [...currentList, optionKey];

      const nextAnswers = {
        ...prev,
        [currentQuestion.id]: {
          ...existing,
          selectedOptions: nextList
        }
      };

      triggerLiveAutoSave(nextAnswers);
      return nextAnswers;
    });
  };

  // Handler untuk Pilihan Ganda Matriks Kategori (Benar / Salah)
  const handleSelectMatrixOption = (rowIndex: number, columnKey: string) => {
    if (!currentQuestion) return;
    playSoundEffect('click');
    setUserAnswers((prev) => {
      const existing = prev[currentQuestion.id] || {
        questionId: currentQuestion.id,
        selectedOption: null,
        matrixAnswers: {},
        isDoubtful: false
      };

      const nextMatrix = {
        ...(existing.matrixAnswers || {}),
        [rowIndex]: columnKey
      };

      const nextAnswers = {
        ...prev,
        [currentQuestion.id]: {
          ...existing,
          matrixAnswers: nextMatrix
        }
      };

      triggerLiveAutoSave(nextAnswers);
      return nextAnswers;
    });
  };

  const handleToggleDoubtful = () => {
    if (!currentQuestion) return;
    playSoundEffect('doubt');
    setUserAnswers((prev) => {
      const existing = prev[currentQuestion.id] || {
        questionId: currentQuestion.id,
        selectedOption: null,
        isDoubtful: false
      };

      const nextAnswers = {
        ...prev,
        [currentQuestion.id]: {
          ...existing,
          isDoubtful: !existing.isDoubtful
        }
      };

      // Memicu background auto-save
      triggerLiveAutoSave(nextAnswers);

      return nextAnswers;
    });
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Keyboard Shortcuts (A, B, C, D / R / Panah Kiri & Kanan)
  useEffect(() => {
    if (screen !== 'exam') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        handleSelectOption(key as 'A' | 'B' | 'C' | 'D');
      } else if (key === 'R') {
        handleToggleDoubtful();
      } else if (e.key === 'ArrowRight' && currentIndex < questions.length - 1) {
        handleNextQuestion();
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handlePrevQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screen, currentIndex, questions.length, currentQuestion?.id]);

  const answeredCount = (Object.values(userAnswers) as UserAnswerState[]).filter(a => {
    if (!a) return false;
    const q = questions.find(item => item.id === a.questionId);
    const type = q?.questionType || 'single';
    if (type === 'single') return !!a.selectedOption;
    if (type === 'complex_multiple') return !!(a.selectedOptions && a.selectedOptions.length > 0);
    if (type === 'matrix') return !!(a.matrixAnswers && Object.keys(a.matrixAnswers).length > 0);
    return !!a.selectedOption;
  }).length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Header Aplikasi */}
      <Navbar
        currentScreen={screen}
        currentUser={currentUser}
        onOpenDbModal={() => setIsDbModalOpen(true)}
        onLogout={handleLogout}
        onNavigateLanding={handleNavigateLanding}
        onNavigateLogin={handleNavigateToLogin}
      />

      {/* 2. Landing Page Depan */}
      {screen === 'landing' && (
        <main className="flex-1">
          <LandingScreen
            currentUser={currentUser}
            onGoToLogin={handleNavigateToLogin}
            onGoToStudentDashboard={() => setScreen('student_select')}
            onGoToTeacherDashboard={() => setScreen('teacher_dashboard')}
            onGoToProctorDashboard={() => setScreen('proctor_dashboard')}
            onGoToAdminDashboard={() => setScreen('admin')}
            onSelectPackageAndStart={handleSelectPackageAndStart}
          />
        </main>
      )}

      {/* 3. Layar Login Tunggal & Registrasi Terpadu */}
      {screen === 'login' && (
        <main className="flex-1">
          <LoginScreen
            initialMode={loginInitialMode}
            onLoginSuccess={handleLoginSuccess}
            onBackToLanding={handleNavigateLanding}
          />
        </main>
      )}

      {/* 4. Dashboard Siswa (4 Sub-Modul: Simulasi CBT, Latihan Mandiri, Jadwal, Rapor) */}
      {(screen === 'student_select' || screen === 'student_dashboard') && currentUser && (
        <main className="flex-1">
          <StudentDashboardScreen
            currentUser={currentUser}
            currentPackage={examPackage}
            onSelectPackage={handleSelectPackage}
            onStartExamFlow={handleStartExamFlow}
            onLogout={handleLogout}
            onBackToLanding={handleNavigateLanding}
          />
        </main>
      )}

      {/* 5. Dashboard Guru / Author (Bank Soal, Import/Export, Evaluasi, Analisis Butir) */}
      {screen === 'teacher_dashboard' && currentUser && (
        <main className="flex-1">
          <TeacherDashboardScreen
            currentUser={currentUser}
            onLogout={handleLogout}
            onBackToLanding={handleNavigateLanding}
          />
        </main>
      )}

      {/* 6. Dashboard Proktor / Pengawas (Live Monitoring, Token, Kontrol Sesi, Berita Acara) */}
      {screen === 'proctor_dashboard' && currentUser && (
        <main className="flex-1">
          <ProctorDashboardScreen
            currentUser={currentUser}
            onLogout={handleLogout}
            onBackToLanding={handleNavigateLanding}
          />
        </main>
      )}

      {/* 7. Dashboard Administrator (Manajemen Pengguna, Penjadwalan, Konfigurasi, Backup) */}
      {screen === 'admin' && currentUser && (
        <main className="flex-1">
          <AdminDashboardScreen
            currentUser={currentUser}
            onBackToLogin={handleLogout}
            onOpenDbModal={() => setIsDbModalOpen(true)}
            onLogoutAdmin={handleLogout}
            onBackToLanding={handleNavigateLanding}
          />
        </main>
      )}

      {/* 8. Layar Instruksi & Konfirmasi */}
      {screen === 'instruction' && student && (
        <main className="flex-1">
          <InstructionScreen
            student={student}
            examPackage={examPackage}
            totalQuestions={questions.length}
            onStartExam={handleStartExam}
            onBackToLogin={() => setScreen('student_select')}
          />
        </main>
      )}

      {/* 9. Layar Ruang Ujian (Format ANBK / Puspendik) */}
      {screen === 'exam' && student && currentQuestion && (
        <main className="flex-1 flex flex-col">
          {/* Header Ujian Spesifik dengan Countdown Timer */}
          <ExamHeader
            student={student}
            examPackage={examPackage}
            timeRemainingSeconds={timeRemaining}
            totalDurationSeconds={totalDurationSeconds}
            fontSize={fontSize}
            onChangeFontSize={setFontSize}
            onToggleDrawer={() => setIsMobileDrawerOpen(prev => !prev)}
            answeredCount={answeredCount}
            totalQuestions={questions.length}
          />

          {/* Area Konten Ujian */}
          <div className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Kolom Kiri / Utama: Soal & Tombol Navigasi */}
              <div className="lg:col-span-8 space-y-4">
                <ExamQuestionArea
                  question={currentQuestion}
                  totalQuestions={questions.length}
                  userAnswerState={currentAnswerState}
                  fontSize={fontSize}
                  onSelectOption={handleSelectOption}
                  onToggleComplexOption={handleToggleComplexOption}
                  onSelectMatrixOption={handleSelectMatrixOption}
                />

                <ExamNavigation
                  currentIndex={currentIndex}
                  totalQuestions={questions.length}
                  isDoubtful={currentAnswerState?.isDoubtful || false}
                  onPrev={handlePrevQuestion}
                  onNext={handleNextQuestion}
                  onToggleDoubtful={handleToggleDoubtful}
                  onConfirmFinish={() => setIsConfirmModalOpen(true)}
                />
              </div>

              {/* Kolom Kanan: Panel Nomor Soal (Desktop View) */}
              <div className="hidden lg:block lg:col-span-4 sticky top-20">
                <QuestionGrid
                  questions={questions}
                  currentIndex={currentIndex}
                  userAnswers={userAnswers}
                  onSelectIndex={setCurrentIndex}
                  onConfirmFinish={() => setIsConfirmModalOpen(true)}
                />
              </div>

            </div>
          </div>

          {/* Drawer Panel Nomor Soal (Mobile View) */}
          {isMobileDrawerOpen && (
            <div 
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden flex justify-end p-3 animate-in fade-in duration-150"
              onClick={() => setIsMobileDrawerOpen(false)}
            >
              <div 
                className="w-full max-w-xs h-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-right duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <QuestionGrid
                  questions={questions}
                  currentIndex={currentIndex}
                  userAnswers={userAnswers}
                  onSelectIndex={setCurrentIndex}
                  onConfirmFinish={() => {
                    setIsMobileDrawerOpen(false);
                    setIsConfirmModalOpen(true);
                  }}
                  isMobileDrawer={true}
                  onCloseMobileDrawer={() => setIsMobileDrawerOpen(false)}
                />
              </div>
            </div>
          )}
        </main>
      )}

      {/* 10. Layar Hasil / Nilai Ujian */}
      {screen === 'result' && finalResult && (
        <main className="flex-1">
          <ResultScreen
            result={finalResult}
            onRestart={handleStartExam}
            onOpenDbModal={() => setIsDbModalOpen(true)}
            onBackToLogin={() => {
              if (currentUser?.role === 'admin') setScreen('admin');
              else if (currentUser?.role === 'teacher') setScreen('teacher_dashboard');
              else if (currentUser?.role === 'proctor') setScreen('proctor_dashboard');
              else setScreen('student_select');
            }}
          />
        </main>
      )}

      {/* Modal Konfirmasi Selesai Ujian */}
      <ConfirmFinishModal
        isOpen={isConfirmModalOpen}
        questions={questions}
        userAnswers={userAnswers}
        onCancel={() => setIsConfirmModalOpen(false)}
        onConfirm={() => handleFinishExam(false)}
      />

      {/* Modal Struktur Data & Skema SQL Inspector */}
      <DatabaseSchemaModal
        isOpen={isDbModalOpen}
        onClose={() => setIsDbModalOpen(false)}
      />

      {/* Footer Ringan */}
      <footer className="py-4 px-4 text-center text-xs text-slate-400 border-t border-slate-200/80 bg-white no-print mt-auto flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto w-full">
        <p className="text-slate-500">
          © 2026 Tryout TKA SD • Simulasi Tes Kompetensi Akademik Tingkat SD/MI
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] text-slate-500">
            Customer Service: <strong className="text-blue-600 font-bold">+62 812-3456-7890</strong>
          </span>
          {currentUser && (
            <span className="text-[11px] text-slate-400">
              • Masuk: <strong className="text-slate-600">{currentUser.fullName} ({currentUser.role.toUpperCase()})</strong>
            </span>
          )}
        </div>
      </footer>

    </div>
  );
}
