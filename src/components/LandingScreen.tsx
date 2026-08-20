import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Calculator, 
  FlaskConical, 
  Puzzle, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap, 
  Clock, 
  Award, 
  BarChart3, 
  FileText, 
  LogIn, 
  UserPlus, 
  School, 
  Activity, 
  Key, 
  Maximize2, 
  AlertTriangle,
  MonitorCheck,
  CheckCircle,
  HelpCircle,
  Radio,
  Headphones,
  Mail,
  PhoneCall
} from 'lucide-react';
import { ExamPackage, AppUser, ActiveExamSessionConfig } from '../types/quiz';
import { ALL_EXAM_PACKAGES } from '../data/mockDatabase';
import { getActiveExamSessionConfig, getSystemConfig } from '../data/rolesDataStore';

interface LandingScreenProps {
  currentUser: AppUser | null;
  onGoToLogin: (initialMode?: 'login' | 'register') => void;
  onGoToStudentDashboard: () => void;
  onGoToTeacherDashboard?: () => void;
  onGoToProctorDashboard?: () => void;
  onGoToAdminDashboard: () => void;
  onSelectPackageAndStart?: (pkg: ExamPackage) => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({
  currentUser,
  onGoToLogin,
  onGoToStudentDashboard,
  onGoToTeacherDashboard,
  onGoToProctorDashboard,
  onGoToAdminDashboard,
}) => {
  const [activeSession, setActiveSession] = useState<ActiveExamSessionConfig>(() => getActiveExamSessionConfig());
  const sysConfig = getSystemConfig();

  // Poll status sesi aktif dari Proktor setiap 3 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSession(getActiveExamSessionConfig());
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const activePackage = ALL_EXAM_PACKAGES.find(p => p.id === activeSession.activePackageId) || ALL_EXAM_PACKAGES[0];

  const getSubjectIcon = (code?: string) => {
    switch (code) {
      case 'MTK':
        return <Calculator className="w-5 h-5 text-blue-600" />;
      case 'BIN':
        return <BookOpen className="w-5 h-5 text-emerald-600" />;
      case 'IPA':
        return <FlaskConical className="w-5 h-5 text-purple-600" />;
      case 'LOG':
      default:
        return <Puzzle className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen flex flex-col text-slate-800 font-sans">
      
      {/* 1. HERO & STATUS SESI UJIAN AKTIF */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Kolom Kiri: Identitas & Informasi Portal */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Portal Resmi Ujian CBT • {sysConfig.schoolName}</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Sistem Tes Kemampuan Akademik (TKA) SD Berbasis Komputer
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                  Platform simulasi dan evaluasi ujian berstandar nasional Puspendik / ANBK. 
                  Sistem beroperasi dengan kendali penuh Proktor untuk menjamin ketertiban, keamanan data, dan integritas akademik.
                </p>
              </div>

              {/* Tombol Aksi Utama */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {currentUser ? (
                  <button
                    type="button"
                    id="btn-landing-go-dashboard"
                    onClick={() => {
                      if (currentUser.role === 'admin') onGoToAdminDashboard();
                      else if (currentUser.role === 'proctor' && onGoToProctorDashboard) onGoToProctorDashboard();
                      else if (currentUser.role === 'teacher' && onGoToTeacherDashboard) onGoToTeacherDashboard();
                      else onGoToStudentDashboard();
                    }}
                    className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-xs flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <GraduationCap className="w-5 h-5" />
                    <span>Buka Dashboard ({currentUser.role.toUpperCase()})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      id="btn-landing-login"
                      onClick={() => onGoToLogin('login')}
                      className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-xs flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <LogIn className="w-5 h-5" />
                      <span>Masuk Ruang Ujian (Login)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      id="btn-landing-register"
                      onClick={() => onGoToLogin('register')}
                      className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 shadow-2xs flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <UserPlus className="w-5 h-5 text-blue-600" />
                      <span>Daftar Akun Peserta</span>
                    </button>
                  </>
                )}
              </div>

              {/* Indikator Standarisasi */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-semibold">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Proktor-Authorised Token</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-blue-600" />
                  <span>Kiosk Fullscreen Mode</span>
                </div>
                <div className="flex items-center gap-2">
                  <MonitorCheck className="w-4 h-4 text-indigo-600" />
                  <span>Live Anti-Cheat Sync</span>
                </div>
              </div>

            </div>

            {/* Kolom Kanan: Card Status Sesi Aktif (Kendali Proktor Nasional) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-xl border border-slate-800 relative overflow-hidden space-y-6">
                
                {/* Header Status Sesi */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                      Sesi CBT Terkendali Proktor
                    </span>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${
                    activeSession.isSessionOpen
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                    {activeSession.isSessionOpen ? '● Sesi Dibuka' : '○ Sesi Ditutup'}
                  </span>
                </div>

                {/* Informasi Paket yang Ditugaskan */}
                <div className="space-y-2">
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
                    Mata Pelajaran Aktif Hari Ini:
                  </span>
                  
                  <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-slate-700 rounded-xl">
                        {getSubjectIcon(activeSession.activeSubjectCode)}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base text-white">
                          {activePackage.title}
                        </h3>
                        <p className="text-xs text-slate-400">
                          Kode: {activePackage.id} • {activePackage.totalQuestionsCount} Butir Soal HOTS/LOTS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detail Pelaksanaan */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Ruang Pelaksanaan</span>
                    <span className="font-bold text-slate-200 mt-0.5 block">{activeSession.roomName}</span>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Alokasi Waktu</span>
                    <span className="font-bold text-slate-200 mt-0.5 block">{activeSession.durationMinutes} Menit Resmi</span>
                  </div>
                </div>

                {/* Informasi Akses Token */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs space-y-1">
                  <div className="flex items-center gap-2 font-bold text-amber-300">
                    <Key className="w-4 h-4" />
                    <span>Petunjuk Token Ujian</span>
                  </div>
                  <p className="text-[11px] text-amber-200/90 leading-relaxed">
                    Siswa tidak dapat memilih paket sendiri. Paket dan token dirilis langsung oleh Proktor di ruang lab saat ujian dimulai.
                  </p>
                </div>

                {/* Tombol Masuk Sesi */}
                <button
                  type="button"
                  onClick={() => {
                    if (currentUser) onGoToStudentDashboard();
                    else onGoToLogin('login');
                  }}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Masuk ke Dashboard Peserta</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ALUR PELAKSANAAN UJIAN STANDAR NASIONAL */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Standar Operasional Prosedur (SOP)
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Alur Ujian Berbasis Komputer Siswa SD
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Tata cara pelaksanaan ujian CBT yang terstruktur demi kenyamanan dan kelancaran peserta didik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Langkah 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-black text-sm flex items-center justify-center border border-blue-200">
              01
            </div>
            <h3 className="font-bold text-slate-900 text-base">Login Akun Peserta</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Peserta memasukkan Username dan Password resmi yang tertera pada Kartu Peserta Ujian TKA.
            </p>
          </div>

          {/* Langkah 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 font-black text-sm flex items-center justify-center border border-indigo-200">
              02
            </div>
            <h3 className="font-bold text-slate-900 text-base">Input Token Proktor</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Memasukkan token sesi 6-karakter yang dirilis oleh Proktor ruang ujian setelah absensi selesai.
            </p>
          </div>

          {/* Langkah 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 font-black text-sm flex items-center justify-center border border-purple-200">
              03
            </div>
            <h3 className="font-bold text-slate-900 text-base">Pengerjaan Fullscreen</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tampilan layar otomatis terkunci dalam mode fullscreen. Dilengkapi tombol ragu-ragu dan navigasi soal.
            </p>
          </div>

          {/* Langkah 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 font-black text-sm flex items-center justify-center border border-emerald-200">
              04
            </div>
            <h3 className="font-bold text-slate-900 text-base">Selesai & Analisis</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Jawaban tersimpan aman di server. Peserta dan guru dapat melihat rekap skor serta pembahasan soal.
            </p>
          </div>

        </div>

      </section>

      {/* 3. FITUR UTAMA SISTEM CBT (INFORMATIF & TERTIB) */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-700 bg-slate-200/80 px-3 py-1 rounded-full">
              Keunggulan Sistem
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Standar Evaluasi Pendidikan Modern
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Didesain khusus untuk kemudahan navigasi siswa sekolah dasar dengan proteksi teknis berstandar tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl w-fit">
                <Maximize2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Mode Layar Penuh (Kiosk Mode)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Saat siswa menekan tombol mulai, aplikasi otomatis memasuki mode layar penuh untuk memastikan konsentrasi penuh dan meminimalkan distraksi visual.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="p-3 bg-indigo-50 text-indigo-700 rounded-xl w-fit">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Live Monitoring & Deteksi Tab</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proktor dapat memantau pergerakan siswa secara real-time. Jika siswa mencoba berpindah tab atau meminimalkan browser, sistem mencatat peringatan secara otomatis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl w-fit">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Distribusi Soal Terstandarisasi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bank soal dikelompokkan dalam 3 paket bertahap: Diagnostik (pemetaan awal), Pemantapan (penguatan konsep), dan Simulasi Realistis (standarisasi ujian nasional).
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. PORTAL AKSES MULTI-PERAN (AKUN DEMO / PANDUAN MASUK) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Akses Pengguna
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Portal Masuk Sesuai Peran
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Pilih peran Anda untuk masuk ke antarmuka kerja masing-masing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Role Siswa */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                  Role Peserta
                </span>
                <GraduationCap className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="font-black text-slate-900 text-sm">Peserta / Siswa</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Mengerjakan simulasi CBT, latihan mandiri dengan pembahasan, dan melihat rapor nilai.
              </p>
              <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] font-mono text-slate-600 border border-slate-100">
                User: <span className="font-bold text-slate-900">siswa1</span> • Pass: <span className="font-bold text-slate-900">123</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onGoToLogin('login')}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Masuk Siswa
            </button>
          </div>

          {/* Role Guru */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  Role Pendidik
                </span>
                <BookOpen className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="font-black text-slate-900 text-sm">Guru / Author</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Menyusun butir soal HOTS, analisis daya pembeda, rekap kelulusan KKM, dan ekspor data.
              </p>
              <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] font-mono text-slate-600 border border-slate-100">
                User: <span className="font-bold text-slate-900">guru</span> • Pass: <span className="font-bold text-slate-900">123</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                if (onGoToTeacherDashboard && currentUser?.role === 'teacher') onGoToTeacherDashboard();
                else onGoToLogin('login');
              }}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Masuk Guru
            </button>
          </div>

          {/* Role Proktor */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                  Role Pengawas
                </span>
                <Activity className="w-4 h-4 text-indigo-600" />
              </div>
              <h3 className="font-black text-slate-900 text-sm">Proktor Pengawas</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kendali paket sesi aktif, rilis token ujian, live monitoring peserta, dan cetak Berita Acara.
              </p>
              <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] font-mono text-slate-600 border border-slate-100">
                User: <span className="font-bold text-slate-900">proktor</span> • Pass: <span className="font-bold text-slate-900">123</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                if (onGoToProctorDashboard && currentUser?.role === 'proctor') onGoToProctorDashboard();
                else onGoToLogin('login');
              }}
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Masuk Proktor
            </button>
          </div>

          {/* Role Admin */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                  Role Pengelola
                </span>
                <ShieldCheck className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="font-black text-slate-900 text-sm">Administrator</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Manajemen akun pengguna, penjadwalan ruang sesi, konfigurasi bobot nilai, dan audit log.
              </p>
              <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] font-mono text-slate-600 border border-slate-100">
                User: <span className="font-bold text-slate-900">admin</span> • Pass: <span className="font-bold text-slate-900">123</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                if (currentUser?.role === 'admin') onGoToAdminDashboard();
                else onGoToLogin('login');
              }}
              className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Masuk Admin
            </button>
          </div>

        </div>

      </section>

      {/* 5. TATA TERTIB PESERTA UJIAN (INFORMATIF) */}
      <section className="bg-white border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Tata Tertib & Ketentuan Peserta Ujian TKA SD</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 leading-relaxed">
              <div className="space-y-1">
                <p className="font-bold text-slate-800">1. Ketepatan Waktu</p>
                <p>Hadir di ruang laboratorium komputer 15 menit sebelum waktu ujian dimulai dan menempati komputer sesuai nomor peserta.</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-slate-800">2. Integritas & Kejujuran</p>
                <p>Dilarang membuka tab browser lain, kalkulator eksternal, atau aplikasi pembantu saat ujian berlangsung.</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-slate-800">3. Gangguan Teknis</p>
                <p>Apabila terjadi masalah koneksi atau komputer hang, segera angkat tangan agar Proktor dapat mereset sesi tanpa kehilangan jawaban.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER & CONTACT / CUSTOMER SERVICE */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Contact / Customer Service Info */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-black shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-extrabold text-white text-sm">Layanan Bantuan & Customer Service</p>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-500/30">
                  Online
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                  <span>WhatsApp CS: <strong className="text-slate-200">+62 812-3456-7890</strong></span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>Email: <strong className="text-slate-200">cs@tryout-tka.id</strong></span>
                </span>
              </div>
            </div>
          </div>

          {/* Copyright & System Info */}
          <div className="text-center md:text-right text-[11px] space-y-1 border-t md:border-t-0 border-slate-800 pt-3 md:pt-0 w-full md:w-auto">
            <p className="font-bold text-slate-200">Sistem Evaluasi Berbasis Komputer (CBT) TKA SD/MI</p>
            <p className="text-slate-400">
              © 2026 Tryout TKA SD • Terstandarisasi Asesmen Nasional Puspendik
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
};
