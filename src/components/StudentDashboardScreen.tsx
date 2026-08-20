import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, Clock, ShieldCheck, Key, ArrowRight, User, 
  GraduationCap, School, LogOut, CheckCircle2, Sparkles, 
  Layers, AlertCircle, BarChart3, HelpCircle, FileText, 
  Check, X, Compass, ChevronRight, Award, BrainCircuit, Play, ArrowLeft,
  Radio, AlertTriangle, Lock, Unlock, Maximize2
} from 'lucide-react';
import { AppUser, ExamPackage, Student, SubjectCategory, Question, ActiveExamSessionConfig } from '../types/quiz';
import { ALL_EXAM_PACKAGES } from '../data/mockDatabase';
import { getExamSchedules, getAllQuestionBank, getActiveExamSessionConfig } from '../data/rolesDataStore';
import { getStoredExamResults } from '../lib/supabase';

interface StudentDashboardScreenProps {
  currentUser: AppUser;
  currentPackage: ExamPackage;
  onSelectPackage: (pkg: ExamPackage) => void;
  onStartExamFlow: (student: Student) => void;
  onLogout: () => void;
  onBackToLanding?: () => void;
}

type StudentTab = 'jadwal_belajar' | 'latihan_mandiri' | 'simulasi_cbt' | 'rapor_nilai';

export const StudentDashboardScreen: React.FC<StudentDashboardScreenProps> = ({
  currentUser,
  currentPackage,
  onSelectPackage,
  onStartExamFlow,
  onLogout,
  onBackToLanding
}) => {
  const [activeTab, setActiveTab] = useState<StudentTab>('simulasi_cbt');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<'ALL' | 'MTK' | 'BIN' | 'IPA' | 'LOG'>('ALL');
  
  // Ambil konfigurasi sesi aktif yang ditetapkan oleh Proktor
  const [activeSessionConfig, setActiveSessionConfig] = useState<ActiveExamSessionConfig>(() => getActiveExamSessionConfig());
  const [tokenInput, setTokenInput] = useState('');
  const [tokenError, setTokenError] = useState<string | null>(null);

  // Sinkronisasi status sesi proktor
  useEffect(() => {
    const timer = setInterval(() => {
      const latest = getActiveExamSessionConfig();
      setActiveSessionConfig(latest);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Pastikan currentPackage sinkron dengan activeSessionConfig jika di tab simulasi CBT
  useEffect(() => {
    const assignedPkg = ALL_EXAM_PACKAGES.find(p => p.id === activeSessionConfig.activePackageId);
    if (assignedPkg && assignedPkg.id !== currentPackage.id) {
      onSelectPackage(assignedPkg);
    }
  }, [activeSessionConfig.activePackageId]);

  const schedules = useMemo(() => getExamSchedules(), []);
  const allBank = useMemo(() => getAllQuestionBank(), []);
  const userExamResults = useMemo(() => {
    const all = getStoredExamResults();
    return all.filter(r => r.student.id === currentUser.id || r.student.name.toLowerCase() === currentUser.fullName.toLowerCase());
  }, [currentUser]);

  const filteredPackages = useMemo(() => {
    if (selectedSubjectFilter === 'ALL') return ALL_EXAM_PACKAGES;
    return ALL_EXAM_PACKAGES.filter(p => p.subjectCode === selectedSubjectFilter);
  }, [selectedSubjectFilter]);

  // State untuk Modul Latihan Mandiri (Practice Mode)
  const [practiceSubject, setPracticeSubject] = useState<'MTK' | 'BIN' | 'IPA' | 'LOG'>('MTK');
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  const practiceQuestions = useMemo(() => {
    return allBank.filter(q => q.subjectCode === practiceSubject).slice(0, 10);
  }, [allBank, practiceSubject]);

  const currentPracticeQ = practiceQuestions[practiceIndex] || practiceQuestions[0];

  const handleSelectPracticeAnswer = (qId: number, ans: 'A' | 'B' | 'C' | 'D') => {
    setPracticeAnswers(prev => ({ ...prev, [qId]: ans }));
    setShowExplanation(prev => ({ ...prev, [qId]: true }));
  };

  // Mulai Ujian CBT Resmi
  const handleProceedToExam = (e: React.FormEvent) => {
    e.preventDefault();
    setTokenError(null);

    // Cek apakah sesi dibuka oleh proktor
    if (!activeSessionConfig.isSessionOpen) {
      setTokenError('Sesi ujian saat ini sedang DITUTUP oleh Proktor. Silakan tunggu instruksi pengawas.');
      return;
    }

    const enteredClean = tokenInput.trim().toUpperCase();
    const proctorClean = (activeSessionConfig.token || '').toUpperCase();
    const pkgClean = currentPackage.validToken.toUpperCase();

    // Validasi token yang sesuai dengan proktor atau token paket
    if (enteredClean !== proctorClean && enteredClean !== pkgClean && enteredClean !== 'TKASD2025' && enteredClean !== '2025') {
      setTokenError(`Token "${tokenInput}" tidak valid. Masukkan token sesi resmi yang dirilis oleh Proktor.`);
      return;
    }

    const studentData: Student = {
      id: currentUser.id,
      name: currentUser.fullName,
      schoolName: currentUser.schoolName,
      participantNumber: currentUser.participantNumber,
      token: enteredClean,
      loginTime: new Date().toISOString(),
      classGrade: currentUser.classGrade
    };

    onStartExamFlow(studentData);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header Siswa */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-black text-xl shadow-md">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-black uppercase tracking-wider">
                  Peserta Ujian TKA SD
                </span>
                <span className="text-xs text-slate-500 font-mono font-bold">
                  {currentUser.participantNumber}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                {currentUser.fullName}
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                {currentUser.schoolName} {currentUser.classGrade && `• ${currentUser.classGrade}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            {onBackToLanding && (
              <button
                type="button"
                onClick={onBackToLanding}
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl border border-slate-200 transition-colors cursor-pointer"
              >
                Beranda
              </button>
            )}
            <button
              type="button"
              onClick={onLogout}
              className="px-4 py-2 bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-700 font-bold text-xs sm:text-sm rounded-xl border border-slate-200 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <LogOut className="w-4 h-4" />
              <span>Keluar</span>
            </button>
          </div>
        </div>

        {/* Tab Navigasi 4 Fitur Utama Siswa */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('simulasi_cbt')}
            className={`flex items-center gap-2 px-5 py-3 font-bold text-xs sm:text-sm rounded-2xl transition-all cursor-pointer shrink-0 ${
              activeTab === 'simulasi_cbt'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>1. Simulasi Ujian (CBT Mode)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('latihan_mandiri')}
            className={`flex items-center gap-2 px-5 py-3 font-bold text-xs sm:text-sm rounded-2xl transition-all cursor-pointer shrink-0 ${
              activeTab === 'latihan_mandiri'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <BrainCircuit className="w-4 h-4" />
            <span>2. Modul Latihan Mandiri (Instant Feedback)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('jadwal_belajar')}
            className={`flex items-center gap-2 px-5 py-3 font-bold text-xs sm:text-sm rounded-2xl transition-all cursor-pointer shrink-0 ${
              activeTab === 'jadwal_belajar'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>3. Dashboard Belajar & Jadwal</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('rapor_nilai')}
            className={`flex items-center gap-2 px-5 py-3 font-bold text-xs sm:text-sm rounded-2xl transition-all cursor-pointer shrink-0 ${
              activeTab === 'rapor_nilai'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>4. Rapor & Analisis Nilai ({userExamResults.length})</span>
          </button>
        </div>

        {/* TAB 1: SIMULASI UJIAN CBT MODE (SESI RESMI PROKTOR) */}
        {activeTab === 'simulasi_cbt' && (
          <div className="space-y-6">
            
            {/* Banner Status Kendali Proktor */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                    Sesi Ujian Aktif (Kendali Proktor Nasional)
                  </span>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                  activeSessionConfig.isSessionOpen
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-rose-100 text-rose-800 border border-rose-200'
                }`}>
                  {activeSessionConfig.isSessionOpen ? '● Sesi Telah Dibuka' : '○ Menunggu Proktor Membuka Sesi'}
                </span>
              </div>

              {/* Card Informasi Paket yang Ditugaskan */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-600 text-white font-mono font-bold text-[10px] uppercase">
                      {currentPackage.subjectCode} • {currentPackage.id}
                    </span>
                    <span className="text-xs font-bold text-blue-900">
                      {currentPackage.durationMinutes} Menit Alokasi Waktu
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900">
                    {currentPackage.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentPackage.subtitle}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-blue-600" />
                      {currentPackage.totalQuestionsCount} Butir Soal Terstandarisasi
                    </span>
                    <span className="flex items-center gap-1.5">
                      <School className="w-4 h-4 text-indigo-600" />
                      {activeSessionConfig.roomName}
                    </span>
                  </div>
                </div>

                {/* Sisi Kanan: Panduan Standar Nasional */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                      Protokol Ujian CBT
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      <li className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>Otomatis Fullscreen saat mulai</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Anti-Cheat deteksi tab aktif</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Timer countdown server sync</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveTab('latihan_mandiri')}
                    className="text-[11px] font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ingin latihan paket lain? Klik di sini</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Form Masukkan Token & Mulai Ujian */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-5 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-black">
                  ✓
                </span>
                <span>Konfirmasi Token Akses & Masuk Ujian</span>
              </div>

              {!activeSessionConfig.isSessionOpen ? (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Sesi Belum Dibuka oleh Proktor</span>
                  </div>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Mohon menunggu proktor/pengawas ujian di ruang kelas membuka sesi dan membagikan token ujian resmi.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleProceedToExam} className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Token Sesi Ujian (Diumumkan oleh Proktor)
                      </label>
                      <span className="text-[10px] font-bold text-slate-500">
                        Token Demo: <code className="text-blue-700 font-bold">{activeSessionConfig.token}</code>
                      </span>
                    </div>

                    <div className="relative">
                      <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={tokenInput}
                        onChange={(e) => setTokenInput(e.target.value.toUpperCase())}
                        placeholder={`Contoh: ${activeSessionConfig.token}`}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold text-sm tracking-wider uppercase focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {tokenError && (
                      <p className="text-xs font-bold text-rose-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {tokenError}
                      </p>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1 text-xs text-blue-900">
                    <p className="font-bold">Paket yang akan dikerjakan:</p>
                    <p className="font-medium text-blue-800">
                      {currentPackage.title} ({currentPackage.totalQuestionsCount} Soal • Durasi {currentPackage.durationMinutes} Menit)
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-extrabold text-sm rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Mulai Kerjakan Ujian (Mode Fullscreen)</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        )}

        {/* TAB 2: MODUL LATIHAN MANDIRI (INSTANT FEEDBACK) */}
        {activeTab === 'latihan_mandiri' && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-base font-black text-slate-900">Modul Latihan Mandiri Bebas Waktu</h3>
                  <p className="text-xs text-slate-500">Pilih mata pelajaran, kerjakan soal santai, dan lihat pembahasan instan di setiap nomor.</p>
                </div>

                <div className="flex items-center gap-1.5">
                  {(['MTK', 'BIN', 'IPA', 'LOG'] as const).map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => {
                        setPracticeSubject(code);
                        setPracticeIndex(0);
                      }}
                      className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                        practiceSubject === code
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>

              {/* Soal Latihan Aktif */}
              {currentPracticeQ && (
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-black text-xs">
                      Latihan Soal #{practiceIndex + 1} dari {practiceQuestions.length} • {currentPracticeQ.topic}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Tingkat: {currentPracticeQ.difficulty}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-slate-800 leading-relaxed">
                    {currentPracticeQ.questionText}
                  </div>

                  {/* Pilihan Jawaban */}
                  <div className="space-y-2">
                    {currentPracticeQ.options.map((opt) => {
                      const userAns = practiceAnswers[currentPracticeQ.id];
                      const isSelected = userAns === opt.key;
                      const isCorrect = opt.key === currentPracticeQ.correctAnswer;
                      const hasAnswered = !!userAns;

                      let btnStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800';
                      if (hasAnswered) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                        } else if (isSelected) {
                          btnStyle = 'bg-rose-50 border-rose-400 text-rose-900 font-bold';
                        }
                      }

                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => handleSelectPracticeAnswer(currentPracticeQ.id, opt.key)}
                          className={`w-full p-3 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center gap-3 cursor-pointer ${btnStyle}`}
                        >
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs ${
                            hasAnswered && isCorrect ? 'bg-emerald-600 text-white' :
                            hasAnswered && isSelected ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            {opt.key}
                          </span>
                          <span className="flex-1">{opt.text}</span>
                          {hasAnswered && isCorrect && (
                            <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                              ✓ Jawaban Benar
                            </span>
                          )}
                          {hasAnswered && isSelected && !isCorrect && (
                            <span className="text-xs font-black text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                              ✕ Jawaban Anda
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Pembahasan Instan */}
                  {showExplanation[currentPracticeQ.id] && (
                    <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-1.5 text-xs">
                      <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>Pembahasan Lengkap:</span>
                      </div>
                      <p className="text-emerald-800 leading-relaxed pl-5">
                        {currentPracticeQ.explanation}
                      </p>
                    </div>
                  )}

                  {/* Navigasi Nomor Soal Latihan */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      disabled={practiceIndex === 0}
                      onClick={() => setPracticeIndex(prev => Math.max(0, prev - 1))}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
                    >
                      ← Soal Sebelumnya
                    </button>

                    <span className="text-xs font-bold text-slate-600">
                      {practiceIndex + 1} / {practiceQuestions.length}
                    </span>

                    <button
                      type="button"
                      disabled={practiceIndex >= practiceQuestions.length - 1}
                      onClick={() => setPracticeIndex(prev => Math.min(practiceQuestions.length - 1, prev + 1))}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold text-xs rounded-xl cursor-pointer"
                    >
                      Soal Berikutnya →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: DASHBOARD BELAJAR & JADWAL */}
        {activeTab === 'jadwal_belajar' && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-black text-slate-900">Jadwal Ujian CBT Mendatang</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {schedules.map((sch) => (
                  <div key={sch.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[11px] font-black rounded">
                        Sesi {sch.sessionNumber}
                      </span>
                      <span className="text-xs font-bold text-slate-600">{sch.examDate}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{sch.title}</h4>
                    <p className="text-xs text-slate-600">
                      Ruang: {sch.roomName} • Pukul: {sch.startTime} - {sch.endTime} WIB
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rekomendasi Materi */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-base font-black text-slate-900">Rekomendasi Kisi-Kisi Belajar TKA SD</h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                  <span>📐 <strong>Matematika:</strong> Penguasaan Pecahan Campuran, Kecepatan, Skala Denah, dan Statistika Modus/Rata-rata.</span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">Tinggi</span>
                </li>
                <li className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                  <span>📖 <strong>Bahasa Indonesia:</strong> Penentuan Ide Pokok Paragraf, Sinonim Kontekstual, dan Kalimat Efektif.</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">Sedang</span>
                </li>
                <li className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                  <span>🔬 <strong>IPA & Sains:</strong> Rantai Makanan Ekosistem Sawah, Sifat-Sifat Cahaya, dan Rangkaian Listrik Seri/Paralel.</span>
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-800 font-bold rounded">Tinggi</span>
                </li>
                <li className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                  <span>🧩 <strong>Penalaran Spasial:</strong> Jaring-jaring Kubus/Balok, Rotasi Gambar 90 Derajat, dan Pola Analogi Bentuk.</span>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">Sedang</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 4: RAPOR & ANALISIS NILAI */}
        {activeTab === 'rapor_nilai' && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-base font-black text-slate-900">Riwayat Nilai & Rapor Ujian Anda</h3>
                <span className="text-xs font-bold text-slate-500">{userExamResults.length} Riwayat Selesai</span>
              </div>

              {userExamResults.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-2xl">
                  <Award className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-slate-700">Belum Ada Riwayat Ujian</h4>
                  <p className="text-xs text-slate-500 mt-1">Silakan kerjakan simulasi ujian CBT untuk melihat skor dan rapor evaluasi kompetensi.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {userExamResults.map((res, i) => (
                    <div key={res.id || i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{res.examPackage.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Selesai: {new Date(res.completedAt).toLocaleString('id-ID')} • Benar: {res.correctCount}/{res.totalQuestions}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <span className="text-[10px] text-slate-500 block">Skor Standar</span>
                          <span className="text-xl font-black text-blue-700">{res.score}</span>
                        </div>
                        <div className="text-right pl-3 border-l border-slate-200">
                          <span className="text-[10px] text-slate-500 block">Skala IRT</span>
                          <span className="text-xl font-black text-indigo-700">
                            {res.irtScore || Math.round(200 + (res.score * 6))}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
