import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Key, Users, Activity, RotateCcw, AlertOctagon, 
  Clock, CheckCircle, XCircle, Search, RefreshCw, Printer, 
  ArrowLeft, Lock, Unlock, Plus, Sparkles, UserCheck, AlertTriangle,
  Layers, CheckCircle2, Play, Power, Radio, Sliders, FileText
} from 'lucide-react';
import { AppUser, LiveStudentSession, ExamSchedule, ActiveExamSessionConfig } from '../types/quiz';
import { 
  getLiveSessions, 
  saveLiveSessions, 
  getExamSchedules, 
  saveExamSchedules, 
  addAuditLog, 
  getSystemConfig,
  getActiveExamSessionConfig,
  saveActiveExamSessionConfig,
  setProctorActivePackage,
  releaseNewProctorToken
} from '../data/rolesDataStore';
import { ALL_EXAM_PACKAGES } from '../data/mockDatabase';

interface ProctorDashboardScreenProps {
  currentUser: AppUser;
  onLogout: () => void;
  onBackToLanding?: () => void;
}

type ProctorTab = 'package_control' | 'live_monitor' | 'token_mgmt' | 'session_control' | 'berita_acara';

export const ProctorDashboardScreen: React.FC<ProctorDashboardScreenProps> = ({
  currentUser,
  onLogout,
  onBackToLanding
}) => {
  const [activeTab, setActiveTab] = useState<ProctorTab>('package_control');
  const [activeConfig, setActiveConfig] = useState<ActiveExamSessionConfig>(() => getActiveExamSessionConfig());
  const [schedules, setSchedules] = useState<ExamSchedule[]>(() => getExamSchedules());
  const [liveSessions, setLiveSessions] = useState<LiveStudentSession[]>(() => getLiveSessions());
  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [alertNotice, setAlertNotice] = useState<string | null>(null);
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<'ALL' | 'MTK' | 'BIN' | 'IPA' | 'LOG'>('ALL');

  const sysConfig = getSystemConfig();

  // Polling interval refresh
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveSessions(getLiveSessions());
      setSchedules(getExamSchedules());
      setActiveConfig(getActiveExamSessionConfig());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const triggerNotice = (msg: string) => {
    setAlertNotice(msg);
    setTimeout(() => setAlertNotice(null), 3500);
  };

  // 0. Ubah Paket Ujian Aktif Nasional
  const handleChangeActivePackage = (packageId: string) => {
    const updated = setProctorActivePackage(packageId, currentUser.fullName);
    setActiveConfig(updated);
    triggerNotice(`Paket ujian aktif berhasil diubah ke: ${updated.sessionTitle}`);
  };

  // 0b. Rilis Token Baru Sesi Aktif
  const handleReleaseActiveToken = () => {
    const newToken = releaseNewProctorToken(currentUser.fullName);
    setActiveConfig(getActiveExamSessionConfig());
    triggerNotice(`Token sesi aktif baru berhasil dirilis: ${newToken}`);
  };

  // 0c. Toggle Buka/Tutup Sesi Ujian Aktif
  const handleToggleActiveSession = () => {
    const updated: ActiveExamSessionConfig = {
      ...activeConfig,
      isSessionOpen: !activeConfig.isSessionOpen,
      updatedBy: currentUser.fullName,
      updatedAt: new Date().toISOString()
    };
    saveActiveExamSessionConfig(updated);
    setActiveConfig(updated);
    addAuditLog(currentUser.fullName, 'proctor', 'TOGGLE_SESSION_STATE', `Status sesi ujian diubah menjadi: ${updated.isSessionOpen ? 'DIBUKA' : 'DITUTUP'}`);
    triggerNotice(`Sesi ujian nasional berhasil ${updated.isSessionOpen ? 'DIBUKA' : 'DITUTUP'}`);
  };

  // 0d. Toggle Kunci Token Aktif
  const handleToggleActiveTokenLock = () => {
    const updated: ActiveExamSessionConfig = {
      ...activeConfig,
      tokenLocked: !activeConfig.tokenLocked,
      updatedBy: currentUser.fullName,
      updatedAt: new Date().toISOString()
    };
    saveActiveExamSessionConfig(updated);
    setActiveConfig(updated);
    addAuditLog(currentUser.fullName, 'proctor', 'TOGGLE_TOKEN_LOCK', `Token sesi aktif diubah menjadi: ${updated.tokenLocked ? 'TERKUNCI' : 'DIBUKA'}`);
    triggerNotice(`Token sesi aktif berhasil ${updated.tokenLocked ? 'DIKUNCI' : 'DIBUKA KUNCI'}`);
  };

  // 1. Generate Token Baru Jadwal Acak
  const handleGenerateNewToken = (scheduleId: string) => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let newToken = '';
    for (let i = 0; i < 6; i++) {
      newToken += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const updated = schedules.map(s => s.id === scheduleId ? { ...s, token: newToken, tokenLocked: false } : s);
    setSchedules(updated);
    saveExamSchedules(updated);
    addAuditLog(currentUser.fullName, 'proctor', 'RELEASE_NEW_TOKEN', `Merilis token baru [${newToken}] untuk jadwal: ${scheduleId}`);
    triggerNotice(`Token baru berhasil dirilis: ${newToken}`);
  };

  // 2. Toggle Lock / Unlock Token Jadwal
  const handleToggleTokenLock = (scheduleId: string) => {
    const updated = schedules.map(s => s.id === scheduleId ? { ...s, tokenLocked: !s.tokenLocked } : s);
    setSchedules(updated);
    saveExamSchedules(updated);
    const target = updated.find(s => s.id === scheduleId);
    addAuditLog(currentUser.fullName, 'proctor', 'TOGGLE_TOKEN_LOCK', `Status token ${target?.token} diubah menjadi: ${target?.tokenLocked ? 'Terkunci' : 'Aktif'}`);
    triggerNotice(`Status token berhasil diubah: ${target?.tokenLocked ? 'Terkunci' : 'Dibuka'}`);
  };

  // 3. Reset Login Peserta (Jika mati lampu/terputus)
  const handleResetStudentLogin = (session: LiveStudentSession) => {
    if (confirm(`Buka kembali akses login untuk peserta: ${session.studentName} (${session.participantNumber})?`)) {
      const updated = liveSessions.map(s => s.studentId === session.studentId ? { ...s, status: 'working' as const, lastActiveTime: 'Reset oleh Proktor' } : s);
      setLiveSessions(updated);
      saveLiveSessions(updated);
      addAuditLog(currentUser.fullName, 'proctor', 'RESET_LOGIN', `Membuka kembali akses login siswa: ${session.studentName}`);
      triggerNotice(`Akses login untuk ${session.studentName} berhasil dibuka.`);
    }
  };

  // 4. Force Submit / Hentikan Paksa (Kecurangan)
  const handleForceStopExam = (session: LiveStudentSession) => {
    if (confirm(`PERINGATAN: Hentikan paksa ujian peserta ${session.studentName}? Tindakan ini akan langsung mengunci lembar jawaban.`)) {
      const updated = liveSessions.map(s => s.studentId === session.studentId ? { ...s, status: 'force_stopped' as const, lastActiveTime: 'Dihentikan Paksa' } : s);
      setLiveSessions(updated);
      saveLiveSessions(updated);
      addAuditLog(currentUser.fullName, 'proctor', 'FORCE_STOP_EXAM', `Menghentikan paksa ujian peserta: ${session.studentName} karena pelanggaran.`);
      triggerNotice(`Ujian peserta ${session.studentName} berhasil dihentikan paksa.`);
    }
  };

  // 5. Tambah Waktu Ujian (+10 Menit)
  const handleAddExtraTime = (session: LiveStudentSession, minutes: number = 10) => {
    const updated = liveSessions.map(s => s.studentId === session.studentId ? { 
      ...s, 
      extraTimeMinutes: (s.extraTimeMinutes || 0) + minutes,
      timeRemainingSeconds: s.timeRemainingSeconds + (minutes * 60)
    } : s);
    setLiveSessions(updated);
    saveLiveSessions(updated);
    addAuditLog(currentUser.fullName, 'proctor', 'ADD_EXTRA_TIME', `Menambahkan waktu +${minutes} menit untuk ${session.studentName}`);
    triggerNotice(`Tambahan waktu +${minutes} menit diberikan kepada ${session.studentName}.`);
  };

  // Cetak Berita Acara
  const handlePrintBeritaAcara = () => {
    window.print();
  };

  const filteredSessions = liveSessions.filter(s => {
    if (statusFilter !== 'ALL' && s.status !== statusFilter) return false;
    if (searchFilter) {
      const q = searchFilter.toLowerCase();
      return s.studentName.toLowerCase().includes(q) || s.participantNumber.toLowerCase().includes(q);
    }
    return true;
  });

  const filteredPackages = ALL_EXAM_PACKAGES.filter(p => {
    if (selectedSubjectFilter === 'ALL') return true;
    return p.subjectCode === selectedSubjectFilter;
  });

  const currentActivePackage = ALL_EXAM_PACKAGES.find(p => p.id === activeConfig.activePackageId) || ALL_EXAM_PACKAGES[0];

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Header Proktor */}
      <div className="bg-white border-b border-slate-200 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {onBackToLanding && (
                  <button
                    type="button"
                    onClick={onBackToLanding}
                    className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-black uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Ruang Pengawas & Proktor CBT
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Pusat Kendali Sesi & Live Monitoring Ujian
              </h1>
              <p className="text-sm text-slate-600 font-medium">
                Kendali penuh paket soal aktif standar nasional, rilis token sesi, pemantauan status siswa real-time, dan reset login darurat.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setLiveSessions(getLiveSessions());
                  setActiveConfig(getActiveExamSessionConfig());
                }}
                className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Refresh Live</span>
              </button>
              <button
                type="button"
                onClick={onLogout}
                className="px-4 py-2.5 bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-700 font-bold text-sm rounded-xl border border-slate-200 transition-colors cursor-pointer"
              >
                Keluar
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto pt-6 border-t border-slate-100 mt-6 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab('package_control')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'package_control'
                  ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-600/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Kendali Paket Soal & Sesi Aktif</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('live_monitor')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'live_monitor'
                  ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-600/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Live Monitoring Peserta ({liveSessions.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('token_mgmt')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'token_mgmt'
                  ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-600/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Key className="w-4 h-4" />
              <span>Jadwal Ruang & Token Multi-Sesi</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('session_control')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'session_control'
                  ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-600/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Login & Kontrol Peserta</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('berita_acara')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'berita_acara'
                  ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-600/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Printer className="w-4 h-4" />
              <span>Berita Acara & Absensi</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Notification Banner */}
        {alertNotice && (
          <div className="mb-6 p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-900 flex items-center gap-3 no-print">
            <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
            <span className="text-sm font-bold">{alertNotice}</span>
          </div>
        )}

        {/* TAB 0: KENDALI PAKET SOAL & SESI AKTIF (STANDAR NASIONAL) */}
        {activeTab === 'package_control' && (
          <div className="space-y-6">
            
            {/* Top Overview Card: Active Session Master Control */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl border border-slate-700 shadow-xl space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-slate-800">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-xs font-black uppercase tracking-wider">
                      SESI UJIAN AKTIF (KENDALI PROKTOR)
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                      activeConfig.isSessionOpen 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${activeConfig.isSessionOpen ? 'bg-emerald-400 animate-ping' : 'bg-rose-400'}`} />
                      {activeConfig.isSessionOpen ? 'Sesi Terbuka (Siswa Dapat Masuk)' : 'Sesi Ditutup'}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-['Nunito',sans-serif]">
                    {currentActivePackage.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                    {currentActivePackage.subtitle} • {activeConfig.durationMinutes} Menit • {activeConfig.totalQuestions} Soal HOTS/LOTS
                  </p>
                </div>

                {/* Big Token Display */}
                <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col sm:flex-row items-center gap-4 shrink-0">
                  <div className="text-center sm:text-left">
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block">
                      TOKEN AKTIF SESI
                    </span>
                    <div className="text-3xl sm:text-4xl font-black font-mono tracking-widest text-amber-400 mt-0.5">
                      {activeConfig.token}
                    </div>
                    <span className={`text-[10px] font-bold ${activeConfig.tokenLocked ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {activeConfig.tokenLocked ? '🔒 Token Terkunci' : '🔓 Token Aktif Siap Digunakan'}
                    </span>
                  </div>

                  <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleReleaseActiveToken}
                      className="flex-1 sm:flex-initial px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Rilis Token Baru</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleToggleActiveTokenLock}
                      className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        activeConfig.tokenLocked
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                      }`}
                    >
                      {activeConfig.tokenLocked ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                      <span>{activeConfig.tokenLocked ? 'Buka Kunci' : 'Kunci Token'}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Session Controls Bottom Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs">
                <div className="flex items-center gap-4 text-slate-300 font-medium">
                  <span>Ruang: <strong>{activeConfig.roomName}</strong></span>
                  <span>•</span>
                  <span>Diperbarui oleh: <strong>{activeConfig.updatedBy}</strong></span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleToggleActiveSession}
                    className={`px-5 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                      activeConfig.isSessionOpen
                        ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/30'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30'
                    }`}
                  >
                    <Power className="w-4 h-4" />
                    <span>{activeConfig.isSessionOpen ? 'Tutup Sesi Ujian' : 'Buka Sesi Ujian Sekarang'}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Package Selector (Bank of 12 Packages Controlled by Proctor) */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Pilih Paket Soal yang Akan Dikerjakan Seluruh Siswa
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Sesuai SOP Ujian Nasional CBT, siswa tidak memilih paket secara manual. Proktor memilih paket di bawah ini untuk diterapkan ke seluruh layar peserta.
                  </p>
                </div>

                {/* Filter Subjects */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    { key: 'ALL', label: 'Semua (12 Paket)' },
                    { key: 'MTK', label: 'Matematika' },
                    { key: 'BIN', label: 'B. Indonesia' },
                    { key: 'IPA', label: 'IPA Sains' },
                    { key: 'LOG', label: 'Penalaran' },
                  ].map(tab => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setSelectedSubjectFilter(tab.key as any)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        selectedSubjectFilter === tab.key
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid 12 Packages */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPackages.map((pkg) => {
                  const isActive = pkg.id === activeConfig.activePackageId;

                  // Label tipe paket
                  let packTypeBadge = 'Paket 01 - Diagnostik';
                  let packTypeColor = 'bg-blue-100 text-blue-800 border-blue-200';
                  let diffLabel = '40% Mudah • 50% Sedang • 10% HOTS';

                  if (pkg.id.endsWith('-02')) {
                    packTypeBadge = 'Paket 02 - Pemantapan';
                    packTypeColor = 'bg-indigo-100 text-indigo-800 border-indigo-200';
                    diffLabel = '20% Mudah • 60% Sedang • 20% HOTS';
                  } else if (pkg.id.endsWith('-03')) {
                    packTypeBadge = 'Paket 03 - Simulasi Realistis';
                    packTypeColor = 'bg-purple-100 text-purple-800 border-purple-200';
                    diffLabel = '20% Mudah • 50% Sedang • 30% HOTS';
                  }

                  return (
                    <div
                      key={pkg.id}
                      className={`p-5 rounded-2xl border-2 transition-all flex flex-col justify-between space-y-4 ${
                        isActive
                          ? 'border-indigo-600 bg-indigo-50/50 shadow-md ring-2 ring-indigo-500/20'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-black uppercase tracking-wider ${packTypeColor}`}>
                            {packTypeBadge}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            {pkg.durationMinutes} Menit • {pkg.totalQuestionsCount} Soal
                          </span>
                        </div>

                        <div>
                          <h4 className="font-extrabold text-slate-900 text-base font-['Nunito',sans-serif]">
                            {pkg.title}
                          </h4>
                          <p className="text-xs text-slate-500 font-medium line-clamp-2 mt-1">
                            {pkg.subtitle}
                          </p>
                        </div>

                        <div className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                          🎯 {diffLabel}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400">
                          Kode: <code className="text-slate-700">{pkg.id}</code>
                        </span>

                        {isActive ? (
                          <span className="px-3 py-1.5 bg-emerald-600 text-white rounded-xl text-xs font-black flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Paket Aktif</span>
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleChangeActivePackage(pkg.id)}
                            className="px-3.5 py-1.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                          >
                            <span>Aktifkan Paket Ini</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* TAB 1: LIVE MONITORING */}
        {activeTab === 'live_monitor' && (
          <div className="space-y-6">
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500">Sedang Mengerjakan</span>
                <p className="text-2xl font-black text-blue-600 mt-1">
                  {liveSessions.filter(s => s.status === 'working').length} Siswa
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500">Telah Selesai</span>
                <p className="text-2xl font-black text-emerald-600 mt-1">
                  {liveSessions.filter(s => s.status === 'submitted').length} Siswa
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500">Terputus / Offline</span>
                <p className="text-2xl font-black text-amber-600 mt-1">
                  {liveSessions.filter(s => s.status === 'disconnected').length} Siswa
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500">Peringatan / Suspend</span>
                <p className="text-2xl font-black text-rose-600 mt-1">
                  {liveSessions.filter(s => s.status === 'force_stopped' || s.tabSwitchCount > 2).length} Kasus
                </p>
              </div>
            </div>

            {/* Filter & Search */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari nama peserta atau nomor ujian..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-700 focus:outline-none"
              >
                <option value="ALL">Semua Status</option>
                <option value="working">Sedang Mengerjakan</option>
                <option value="submitted">Telah Selesai</option>
                <option value="disconnected">Terputus (Offline)</option>
                <option value="force_stopped">Dihentikan Paksa</option>
              </select>
            </div>

            {/* Live Student Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">No. Peserta / Nama</th>
                      <th className="py-3.5 px-4">Mapel</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4">Progres Soal</th>
                      <th className="py-3.5 px-4">Sisa Waktu</th>
                      <th className="py-3.5 px-4">Pindah Tab</th>
                      <th className="py-3.5 px-4 text-center">Aksi Proktor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredSessions.map((ses) => (
                      <tr key={ses.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4">
                          <p className="font-extrabold text-slate-900 text-sm">{ses.studentName}</p>
                          <p className="text-[11px] text-slate-500 font-mono">{ses.participantNumber} • {ses.schoolName}</p>
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px]">
                            {ses.subjectCode}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          {ses.status === 'working' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-[11px]">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                              Mengerjakan
                            </span>
                          )}
                          {ses.status === 'submitted' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                              Selesai
                            </span>
                          )}
                          {ses.status === 'disconnected' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-[11px]">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                              Offline
                            </span>
                          )}
                          {ses.status === 'force_stopped' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-bold text-[11px]">
                              <XCircle className="w-3.5 h-3.5 text-rose-600" />
                              Disuspend
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-800">{ses.answeredCount}/{ses.totalQuestions}</span>
                            <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-blue-600 rounded-full" 
                                style={{ width: `${(ses.answeredCount / ses.totalQuestions) * 100}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-slate-700">
                          {Math.floor(ses.timeRemainingSeconds / 60)}m {ses.timeRemainingSeconds % 60}s
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${
                            ses.tabSwitchCount > 2 
                              ? 'bg-rose-100 text-rose-800 font-black' 
                              : ses.tabSwitchCount > 0 
                                ? 'bg-amber-100 text-amber-800' 
                                : 'bg-slate-100 text-slate-600'
                          }`}>
                            {ses.tabSwitchCount}x
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => handleAddExtraTime(ses, 10)}
                              className="px-2 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg text-[11px] font-bold cursor-pointer"
                              title="Tambah Waktu 10 Menit"
                            >
                              +10m
                            </button>
                            <button
                              type="button"
                              onClick={() => handleResetStudentLogin(ses)}
                              className="px-2 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg text-[11px] font-bold cursor-pointer"
                              title="Buka Kunci Login"
                            >
                              Reset
                            </button>
                            <button
                              type="button"
                              onClick={() => handleForceStopExam(ses)}
                              className="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-[11px] font-bold cursor-pointer"
                              title="Hentikan Paksa"
                            >
                              Stop
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: JADWAL RUANG & MULTI-SESI */}
        {activeTab === 'token_mgmt' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {schedules.map((sch) => (
                <div key={sch.id} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-black rounded-full uppercase">
                      {sch.roomName} • Sesi {sch.sessionNumber}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      sch.tokenLocked ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {sch.tokenLocked ? 'Terkunci' : 'Aktif'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900">{sch.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Waktu Ujian: {sch.startTime} - {sch.endTime} WIB ({sch.durationMinutes} Menit)
                    </p>
                  </div>

                  {/* Token Box */}
                  <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold">Token Akses CBT</span>
                      <div className="text-3xl font-black tracking-widest font-mono text-amber-400 mt-0.5">
                        {sch.token}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleGenerateNewToken(sch.id)}
                      className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Rilis Baru</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => handleToggleTokenLock(sch.id)}
                      className={`flex-1 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                        sch.tokenLocked
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {sch.tokenLocked ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                      <span>{sch.tokenLocked ? 'Buka Kunci Token' : 'Kunci Token Akses'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: KONTROL SESI & RESET LOGIN */}
        {activeTab === 'session_control' && (
          <div className="space-y-6">
            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-4">
              <AlertOctagon className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-amber-900">Prosedur Reset Login & Darurat CBT</h3>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  Fitur ini digunakan apabila peserta mengalami gangguan teknis (komputer hang, mati listrik, koneksi WiFi terputus) 
                  sehingga akun mereka terkunci di server. Melakukan reset login akan mengizinkan siswa masuk kembali tanpa menghapus jawaban yang telah tersimpan.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <h3 className="text-base font-black text-slate-900">Daftar Peserta Membutuhkan Penanganan</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {liveSessions.filter(s => s.status === 'disconnected' || s.status === 'force_stopped').map((s) => (
                  <div key={s.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <p className="font-bold text-slate-900">{s.studentName}</p>
                    <p className="text-xs text-slate-500 font-mono">{s.participantNumber}</p>
                    <div className="pt-2 flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleResetStudentLogin(s)}
                        className="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                      >
                        Reset Login
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: BERITA ACARA */}
        {activeTab === 'berita_acara' && (
          <div className="space-y-6">
            <div className="flex justify-end no-print">
              <button
                type="button"
                onClick={handlePrintBeritaAcara}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md flex items-center gap-2 transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak Dokumen Berita Acara</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-8 max-w-4xl mx-auto print:border-none print:shadow-none print:p-0">
              <div className="text-center pb-6 border-b-2 border-slate-900 space-y-1">
                <h2 className="text-lg font-bold text-slate-900 uppercase">KEMENTERIAN PENDIDIKAN DASAR DAN MENENGAH</h2>
                <h3 className="text-base font-bold text-slate-800 uppercase">{sysConfig.schoolName}</h3>
                <p className="text-xs text-slate-500">{sysConfig.schoolAddress}</p>
                <h1 className="text-xl font-black text-slate-900 pt-3 tracking-wide uppercase">
                  BERITA ACARA PELAKSANAAN TES KEMAMPUAN AKADEMIK (TKA)
                </h1>
                <p className="text-xs font-mono text-slate-600">TAHUN 2026</p>
              </div>

              <div className="text-xs text-slate-700 leading-relaxed space-y-3">
                <p>Pada hari ini, <strong>{new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>, telah dilaksanakan Tes Kemampuan Akademik (TKA) Berbasis Komputer dengan rincian sebagai berikut:</p>
                
                <div className="grid grid-cols-2 gap-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>1. Mata Pelajaran : <strong>{currentActivePackage.title}</strong></div>
                  <div>2. Ruang Ujian : <strong>{activeConfig.roomName}</strong></div>
                  <div>3. Jumlah Terdaftar : <strong>{liveSessions.length} Peserta</strong></div>
                  <div>4. Jumlah Hadir : <strong>{liveSessions.filter(s => s.status !== 'disconnected').length} Peserta</strong></div>
                  <div>5. Token Resmi : <strong>{activeConfig.token}</strong></div>
                  <div>6. Waktu Ujian : <strong>{activeConfig.durationMinutes} Menit</strong></div>
                </div>

                <p className="pt-2">Catatan selama pelaksanaan ujian berlangsung tertib, jujur, dan mematuhi seluruh protokol ujian CBT nasional.</p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-12 text-xs text-slate-800 text-center">
                <div className="space-y-16">
                  <p>Mengetahui,<br />Kepala Sekolah</p>
                  <div>
                    <p className="font-bold underline uppercase">{sysConfig.headmasterName}</p>
                    <p className="text-[11px] text-slate-500">NIP. {sysConfig.headmasterNip || '19720415 199803 1 004'}</p>
                  </div>
                </div>

                <div className="space-y-16">
                  <p>Pengawas / Proktor Ruang</p>
                  <div>
                    <p className="font-bold underline uppercase">{currentUser.fullName}</p>
                    <p className="text-[11px] text-slate-500">NIP/ID. PROKTOR-{currentUser.participantNumber || '001'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

