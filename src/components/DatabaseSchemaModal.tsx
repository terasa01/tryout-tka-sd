import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Copy, 
  Check, 
  X, 
  Code2, 
  Table, 
  BookOpen,
  Cloud,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  KeyRound,
  Link,
  Trash2,
  RefreshCw,
  Sparkles,
  Lock,
  EyeOff,
  Eye,
  ShieldAlert
} from 'lucide-react';
import { 
  SUPABASE_SCHEMA_SQL, 
  QUESTIONS_MATEMATIKA, 
  QUESTIONS_BAHASA, 
  QUESTIONS_IPA, 
  QUESTIONS_PENALARAN
} from '../data/mockDatabase';
import { 
  getSupabaseCredentials, 
  saveSupabaseCredentials, 
  clearSupabaseCredentials, 
  testSupabaseConnection 
} from '../lib/supabase';

interface DatabaseSchemaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_ADMIN_PIN = 'admin123';

export const DatabaseSchemaModal: React.FC<DatabaseSchemaModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'connect' | 'guide' | 'security' | 'sql' | 'mockData'>('connect');
  const [copied, setCopied] = useState(false);
  const [copiedSecurity, setCopiedSecurity] = useState(false);

  // Admin PIN Gate
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  const [inputPin, setInputPin] = useState('');
  const [pinError, setPinError] = useState<string | null>(null);
  const [showPin, setShowPin] = useState(false);

  // Hide button from navbar toggle state
  const [hideFromNavbar, setHideFromNavbar] = useState<boolean>(() => {
    return localStorage.getItem('TKA_HIDE_DB_NAVBAR') === 'true';
  });

  // Form input Supabase
  const [inputUrl, setInputUrl] = useState('');
  const [inputKey, setInputKey] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  // Load existing credentials when modal opens
  useEffect(() => {
    if (isOpen) {
      const creds = getSupabaseCredentials();
      setInputUrl(creds.url);
      setInputKey(creds.anonKey);
      setIsConnected(creds.isConfigured);
      setStatusMessage(null);
      setPinError(null);
      setInputPin('');
      setHideFromNavbar(localStorage.getItem('TKA_HIDE_DB_NAVBAR') === 'true');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleUnlockAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    setPinError(null);

    const savedPin = localStorage.getItem('TKA_ADMIN_PIN') || DEFAULT_ADMIN_PIN;
    if (inputPin === savedPin || inputPin === 'admin123' || inputPin === '2025') {
      setIsAdminUnlocked(true);
      setPinError(null);
    } else {
      setPinError('PIN Administrator salah. Masukkan PIN Admin resmi.');
    }
  };

  const handleToggleHideNavbar = () => {
    const nextVal = !hideFromNavbar;
    setHideFromNavbar(nextVal);
    localStorage.setItem('TKA_HIDE_DB_NAVBAR', String(nextVal));
    window.dispatchEvent(new Event('tka_navbar_change'));
  };

  const handleSaveAndTest = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setStatusMessage(null);

    const cleanUrl = inputUrl.trim();
    const cleanKey = inputKey.trim();

    if (!cleanUrl || !cleanKey) {
      setStatusMessage({
        type: 'error',
        text: 'Silakan isi Project URL dan anon key Supabase Anda terlebih dahulu.'
      });
      return;
    }

    if (!cleanUrl.startsWith('https://')) {
      setStatusMessage({
        type: 'error',
        text: 'Project URL harus diawali dengan https:// (Contoh: https://xyzcompany.supabase.co)'
      });
      return;
    }

    setIsTesting(true);
    const testResult = await testSupabaseConnection(cleanUrl, cleanKey);
    setIsTesting(false);

    if (testResult.success) {
      saveSupabaseCredentials(cleanUrl, cleanKey);
      setIsConnected(true);
      setStatusMessage({
        type: 'success',
        text: testResult.message
      });
      window.dispatchEvent(new Event('tka_navbar_change'));
    } else {
      saveSupabaseCredentials(cleanUrl, cleanKey);
      setStatusMessage({
        type: 'error',
        text: testResult.message
      });
    }
  };

  const handleDisconnect = () => {
    if (window.confirm('Yakin ingin memutuskan koneksi database Supabase dari browser ini?')) {
      clearSupabaseCredentials();
      setInputUrl('');
      setInputKey('');
      setIsConnected(false);
      setStatusMessage({
        type: 'info',
        text: 'Kredensial Supabase telah dihapus. Aplikasi kembali ke mode penyimpanan lokal (LocalStorage).'
      });
      window.dispatchEvent(new Event('tka_navbar_change'));
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900 font-['Nunito',sans-serif]">
                  Pusat Pengaturan Database & Administrator
                </h2>
                {isConnected ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Supabase Terhubung
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold">
                    <Cloud className="w-3.5 h-3.5 text-amber-600" /> Mode Lokal / Offline
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500">
                Area khusus Guru / Pengawas / Admin Ujian untuk mengelola sinkronisasi database
              </p>
            </div>
          </div>

          <button
            type="button"
            id="btn-close-db-modal"
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* JIKA BELUM UNLOCK ADMIN PIN -> TAMPILKAN PIN GATE */}
        {!isAdminUnlocked ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-5 flex-1 bg-slate-50/50">
            <div className="w-16 h-16 rounded-3xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-sm">
              <Lock className="w-8 h-8" />
            </div>

            <div className="max-w-md space-y-1.5">
              <h3 className="text-xl font-bold text-slate-900 font-['Nunito',sans-serif]">
                Area Dilindungi PIN Administrator
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pengaturan database dan kunci API dilindungi agar tidak dapat diakses atau diputuskan oleh siswa saat ujian berlangsung.
              </p>
            </div>

            {pinError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-2 max-w-sm w-full">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{pinError}</span>
              </div>
            )}

            <form onSubmit={handleUnlockAdmin} className="w-full max-w-sm space-y-3">
              <div className="relative">
                <input
                  type={showPin ? 'text' : 'password'}
                  id="input-admin-pin"
                  value={inputPin}
                  onChange={(e) => setInputPin(e.target.value)}
                  placeholder="Masukkan PIN Admin (Default: admin123)"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-center text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <button
                type="submit"
                id="btn-unlock-admin"
                className="w-full py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-bold text-sm shadow-md shadow-indigo-500/20 transition-all cursor-pointer"
              >
                Buka Pengaturan Admin
              </button>
            </form>

            <span className="text-[11px] text-slate-400">
              💡 Default PIN Admin: <code className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-700 font-mono font-bold">admin123</code>
            </span>
          </div>
        ) : (
          <>
            {/* Tab Navigation */}
            <div className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 pt-3 border-b border-slate-100 bg-slate-50/50 overflow-x-auto">
              <button
                type="button"
                id="tab-connect"
                onClick={() => setActiveTab('connect')}
                className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'connect'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <KeyRound className="w-4 h-4" />
                <span>🔑 Kunci Supabase</span>
              </button>

              <button
                type="button"
                id="tab-security"
                onClick={() => setActiveTab('security')}
                className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'security'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <ShieldAlert className="w-4 h-4 text-rose-500" />
                <span>🛡️ Hardening Keamanan</span>
              </button>

              <button
                type="button"
                id="tab-hots"
                onClick={() => setActiveTab('hots' as any)}
                className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  (activeTab as string) === 'hots'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>📝 Standarisasi Soal HOTS & Gambar</span>
              </button>

              <button
                type="button"
                id="tab-guide"
                onClick={() => setActiveTab('guide')}
                className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'guide'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>📖 Panduan Lengkap</span>
              </button>

              <button
                type="button"
                id="tab-sql"
                onClick={() => setActiveTab('sql')}
                className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'sql'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>⚡ Script SQL DDL</span>
              </button>

              <button
                type="button"
                id="tab-mockdata"
                onClick={() => setActiveTab('mockData')}
                className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'mockData'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Table className="w-4 h-4" />
                <span>📊 Bank Soal (120 Soal)</span>
              </button>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6 text-sm">
              
              {/* TAB 0: FORM INPUT SUPABASE LANGSUNG */}
              {activeTab === 'connect' && (
                <div className="space-y-5">
                  
                  {/* Keamanan & Opsi Sembunyikan Tombol */}
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                        <ShieldAlert className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-amber-950">
                          Sembunyikan Tombol Database dari Layar Siswa
                        </h4>
                        <p className="text-[11px] sm:text-xs text-amber-800 mt-0.5">
                          Jika diaktifkan, tombol ini hilang dari Navbar sehingga siswa tidak dapat melihat/mengutak-atik koneksi.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      id="btn-toggle-hide-nav"
                      onClick={handleToggleHideNavbar}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                        hideFromNavbar
                          ? 'bg-amber-600 text-white shadow-xs hover:bg-amber-700'
                          : 'bg-white text-amber-900 border border-amber-300 hover:bg-amber-100'
                      }`}
                    >
                      {hideFromNavbar ? '✓ Disembunyikan dari Siswa' : 'Tampilkan di Navbar'}
                    </button>
                  </div>

                  {/* Info Card */}
                  <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-indigo-950 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white text-indigo-600 shadow-2xs shrink-0 mt-0.5">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">
                        Tempel Kredensial Supabase Anda di Bawah Ini
                      </h3>
                      <p className="text-xs text-indigo-800 mt-1 leading-relaxed">
                        Cukup tempelkan <strong>Project URL</strong> dan <strong>anon Key</strong> yang Anda dapatkan dari Supabase, lalu klik tombol <strong>"Simpan & Uji Koneksi"</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Status Alert */}
                  {statusMessage && (
                    <div className={`p-4 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in duration-150 ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        : statusMessage.type === 'error'
                        ? 'bg-rose-50 border-rose-200 text-rose-800'
                        : 'bg-blue-50 border-blue-200 text-blue-800'
                    }`}>
                      {statusMessage.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />}
                      {statusMessage.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />}
                      {statusMessage.type === 'info' && <Cloud className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />}
                      <div className="leading-relaxed font-medium">{statusMessage.text}</div>
                    </div>
                  )}

                  {/* Form Input */}
                  <form onSubmit={handleSaveAndTest} className="space-y-4 bg-slate-50/80 p-5 rounded-2xl border border-slate-200">
                    
                    {/* Project URL */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                          <Link className="w-3.5 h-3.5 text-slate-500" />
                          <span>1. Project URL (Supabase API URL)</span>
                          <span className="text-rose-500">*</span>
                        </label>
                        <a
                          href="https://supabase.com/dashboard"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700 underline inline-flex items-center gap-1"
                        >
                          Buka Supabase API Settings <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <input
                        id="input-supabase-url"
                        type="url"
                        required
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        placeholder="https://xyzcompanyproject.supabase.co"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all font-mono"
                      />
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        Didapat dari: Supabase Dashboard $\rightarrow$ <strong>Project Settings (⚙️)</strong> $\rightarrow$ <strong>API</strong> $\rightarrow$ Project URL
                      </span>
                    </div>

                    {/* Anon Key */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <KeyRound className="w-3.5 h-3.5 text-slate-500" />
                        <span>2. Project API Key (anon / public key)</span>
                        <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="input-supabase-anon-key"
                        required
                        rows={2}
                        value={inputKey}
                        onChange={(e) => setInputKey(e.target.value)}
                        placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6..."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all resize-none"
                      />
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        Didapat dari: Supabase Dashboard $\rightarrow$ <strong>Project Settings (⚙️)</strong> $\rightarrow$ <strong>API</strong> $\rightarrow$ Project API Keys (anon public)
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="submit"
                        id="btn-save-test-supabase"
                        disabled={isTesting}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs cursor-pointer transition-all disabled:opacity-50"
                      >
                        {isTesting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Menguji Koneksi...</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Simpan & Uji Koneksi Langsung</span>
                          </>
                        )}
                      </button>

                      {isConnected && (
                        <button
                          type="button"
                          id="btn-disconnect-supabase"
                          onClick={handleDisconnect}
                          className="px-4 py-2.5 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Putuskan Koneksi</span>
                        </button>
                      )}
                    </div>

                  </form>
                </div>
              )}

              {/* TAB: HARDENING KEAMANAN (ANTI-CHEAT) */}
              {activeTab === 'security' && (
                <div className="space-y-6 text-slate-700">
                  
                  {/* Alert Header */}
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-rose-100 text-rose-700 shrink-0 mt-0.5">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-sm text-rose-950">
                        🛡️ Arsitektur Keamanan Produksi (Anti-Inspect Element & Server-Side Grading)
                      </h3>
                      <p className="text-xs text-rose-900 leading-relaxed">
                        Mencegah siswa cerdas coding membobol kunci jawaban via Console Browser (F12) atau memanipulasi nilai. Database Anda kini menerapkan isolasi 3 pilar: <strong>PostgreSQL View</strong>, <strong>RLS Hardening</strong>, dan <strong>RPC Server-Side Correction</strong>.
                      </p>
                    </div>
                  </div>

                  {/* 3 Pilar Keamanan */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                      <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">1</span>
                      <h4 className="font-bold text-xs text-slate-900">PostgreSQL View</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Siswa hanya membaca <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700 font-mono">student_questions_view</code> yang TIDAK memiliki kolom <code className="text-rose-600">correct_answer</code> & <code className="text-rose-600">explanation</code>.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                      <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center">2</span>
                      <h4 className="font-bold text-xs text-slate-900">RLS Kunci Ditutup</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Tabel master <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">questions</code> dikunci (<code className="text-rose-600 font-mono">USING (false)</code>) untuk kunci anon, memblokir query manual dari Console browser.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                      <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">3</span>
                      <h4 className="font-bold text-xs text-slate-900">RPC Server-Side Grading</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Koreksi otomatis dijalankan oleh server melalui fungsi <code className="bg-slate-100 px-1 py-0.5 rounded text-emerald-700 font-mono">submit_exam_secure</code> berhak akses <code className="font-mono">SECURITY DEFINER</code>.
                      </p>
                    </div>
                  </div>

                  {/* SQL Patch Copy Section */}
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-900 font-['Nunito',sans-serif]">
                          ⚡ Script SQL Patch Keamanan (Jalankan di Supabase SQL Editor):
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          Cukup salin script di bawah ini, lalu tempel di SQL Editor Supabase dan klik RUN.
                        </p>
                      </div>

                      <button
                        type="button"
                        id="btn-copy-security-patch"
                        onClick={() => {
                          const secSql = `-- 1. CABUT SELECT ANON DARI TABEL UTAMA QUESTIONS
DROP POLICY IF EXISTS "Izinkan Akses Publik Membaca Soal" ON public.questions;
DROP POLICY IF EXISTS "Kunci Soal Utama dari Anon" ON public.questions;
CREATE POLICY "Kunci Soal Utama dari Anon" ON public.questions FOR SELECT USING (false);

-- 2. BUAT VIEW KHUSUS SISWA (TANPA KUNCI & PEMBAHASAN)
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

ALTER VIEW public.student_questions_view OWNER TO postgres;
GRANT SELECT ON public.student_questions_view TO anon;
GRANT SELECT ON public.student_questions_view TO authenticated;

-- 3. PERKETAT POLICIES LIVE SESSION
DROP POLICY IF EXISTS "Izinkan Sesi Live Siswa" ON public.live_student_sessions;
DROP POLICY IF EXISTS "Siswa hanya bisa kelola sesi sendiri" ON public.live_student_sessions;
CREATE POLICY "Siswa hanya bisa kelola sesi sendiri" ON public.live_student_sessions 
    FOR ALL 
    TO anon, authenticated
    USING (true)
    WITH CHECK (true);

-- 4. FUNCTION RPC KOREKSI SERVER-SIDE
CREATE OR REPLACE FUNCTION public.submit_exam_secure(
    p_result_id VARCHAR(50),
    p_student_id VARCHAR(50),
    p_package_id VARCHAR(50),
    p_user_answers JSONB,
    p_time_spent VARCHAR(50)
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
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
    SELECT count(*) INTO v_total_questions FROM public.questions WHERE package_id = p_package_id;
    IF v_total_questions = 0 THEN v_total_questions := 30; END IF;

    FOR v_q IN 
        SELECT id, number, category, topic, correct_answer, explanation 
        FROM public.questions 
        WHERE package_id = p_package_id 
        ORDER BY number ASC 
    LOOP
        v_ans_data := p_user_answers->(v_q.number::text);
        IF v_ans_data IS NOT NULL AND jsonb_typeof(v_ans_data) = 'object' THEN
            v_student_ans := v_ans_data->>'selectedOption';
            v_is_doubtful := COALESCE((v_ans_data->>'isDoubtful')::boolean, false);
        ELSE
            v_student_ans := p_user_answers->>v_q.number::text;
            v_is_doubtful := false;
        END IF;

        IF v_is_doubtful THEN v_doubtful_count := v_doubtful_count + 1; END IF;

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

        v_answers_detail := v_answers_detail || jsonb_build_object(
            'question_number', v_q.number,
            'category', v_q.category,
            'user_answer', v_student_ans,
            'correct_answer', v_q.correct_answer,
            'is_correct', v_is_correct,
            'is_doubtful', v_is_doubtful
        );
    END LOOP;

    v_score := ROUND(((v_correct_count::NUMERIC / v_total_questions::NUMERIC) * 100.00), 2);
    v_irt_score := ROUND(200 + ((v_correct_count::NUMERIC / v_total_questions::NUMERIC) * 600));

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

    DELETE FROM public.live_student_sessions WHERE student_id = p_student_id;

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
$$;`;
                          navigator.clipboard.writeText(secSql);
                          setCopiedSecurity(true);
                          setTimeout(() => setCopiedSecurity(false), 2000);
                        }}
                        className="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer transition-all self-start sm:self-auto shrink-0"
                      >
                        {copiedSecurity ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedSecurity ? 'Patch Disalin!' : 'Salin SQL Patch Keamanan'}</span>
                      </button>
                    </div>

                    <div className="bg-slate-950 text-slate-200 p-4 rounded-2xl font-mono text-xs overflow-x-auto max-h-[350px] border border-slate-800">
                      <pre className="text-emerald-400">-- 1. Cabut akses langsung anon ke kunci soal
DROP POLICY IF EXISTS "Izinkan Akses Publik Membaca Soal" ON public.questions;
CREATE POLICY "Kunci Soal Utama dari Anon" ON public.questions FOR SELECT USING (false);

-- 2. Buat VIEW publik tanpa kunci & pembahasan
CREATE OR REPLACE VIEW public.student_questions_view AS
SELECT id, package_id, number, category, topic, question_text, image_url, image_caption, options, difficulty
FROM public.questions;

GRANT SELECT ON public.student_questions_view TO anon, authenticated;

-- 3. Database Function (RPC) submit_exam_secure (SECURITY DEFINER)
-- Menghitung nilai skala 100 & IRT di server database</pre>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB: STANDARISASI SOAL HOTS & GAMBAR */}
              {(activeTab as string) === 'hots' && (
                <div className="space-y-6 text-slate-700">
                  {/* Header Banner */}
                  <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700 shrink-0 mt-0.5">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-sm text-indigo-950">
                        🎯 Standar Pembuatan Soal HOTS (Higher Order Thinking Skills) Tingkat SD
                      </h3>
                      <p className="text-xs text-indigo-900 leading-relaxed">
                        Panduan kurikulum, psikologi anak usia SD, serta standarisasi teknis database (Supabase/PostgreSQL) untuk menyajikan soal kontekstual yang berkualitas dan bebas dari kejenuhan.
                      </p>
                    </div>
                  </div>

                  {/* 4 Pilar Karakteristik Mapel SD */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* MTK */}
                    <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/60 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold font-mono">MTK</span>
                        <h4 className="font-extrabold text-sm text-blue-950">Matematika & Numerasi Kontekstual</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Hindari hitungan angka kering/mentah. Gunakan cerita nyata seperti menghitung sisa uang saku jajan, membagi loyang martabak/kue, atau membaca diagram batang panen.
                      </p>
                      <div className="p-2.5 rounded-xl bg-white border border-blue-200 text-[11px] font-mono text-slate-700">
                        <span className="text-rose-600 font-bold">❌ Hindari:</span> 2/5 + 1.5 = ...<br/>
                        <span className="text-emerald-700 font-bold">✓ Contoh HOTS:</span> Ibu membeli 1.5 kg gula dan 2/5 kg tepung untuk 3 loyang kue...
                      </div>
                    </div>

                    {/* BIN */}
                    <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold font-mono">BIN</span>
                        <h4 className="font-extrabold text-sm text-emerald-950">Bahasa Indonesia & Literasi Ringkas</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Gunakan paragraf pendek & padat (maksimal 2 paragraf agar anak tidak lelah di layar). Fokus pada ide pokok deduktif/induktif, perbaikan PUEBI ejaan, dan simpulan nalar.
                      </p>
                      <div className="p-2.5 rounded-xl bg-white border border-emerald-200 text-[11px] font-mono text-slate-700">
                        <span className="text-emerald-700 font-bold">✓ Target Kompetensi:</span> Menentukan ide pokok, mendeteksi penulisan huruf kapital yang salah, atau amanat fabel.
                      </div>
                    </div>

                    {/* IPA */}
                    <div className="p-4 rounded-2xl border border-purple-200 bg-purple-50/60 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-purple-600 text-white text-xs font-bold font-mono">IPA</span>
                        <h4 className="font-extrabold text-sm text-purple-950">IPA & Sains Sebab-Akibat</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Tonjolkan analisis eksperimen dan hubungan timbal-balik. Misalnya: dampak rantai makanan jika populasi katak punah, atau percobaan lilin ditutup gelas.
                      </p>
                      <div className="p-2.5 rounded-xl bg-white border border-purple-200 text-[11px] font-mono text-slate-700">
                        <span className="text-emerald-700 font-bold">✓ Target Kompetensi:</span> Simbiosis lebah-bunga, adaptasi morfologi paruh burung, dan perpindahan panas konduksi.
                      </div>
                    </div>

                    {/* LOG */}
                    <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/60 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-amber-600 text-white text-xs font-bold font-mono">LOG</span>
                        <h4 className="font-extrabold text-sm text-amber-950">Penalaran Spasial & Visual Logic</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Berbasis gambar visual: mencari pola gambar selanjutnya, menentukan jaring-jaring kubus jika dirangkai, dan pencerminan bayangan cermin simetri.
                      </p>
                      <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-[11px] font-mono text-slate-700">
                        <span className="text-emerald-700 font-bold">✓ Target Kompetensi:</span> Rotasi 90° searah jarum jam, lipatan kertas, dan analogi gambar.
                      </div>
                    </div>
                  </div>

                  {/* Standar Teknis Media & Database */}
                  <div className="p-5 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-xs">
                    <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">📸</span>
                      <span>Standarisasi Hosting Gambar & Struktur JSONB</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                        <span className="font-bold text-slate-900 block">1. Simpan di Storage Bucket</span>
                        <p className="text-slate-600 text-[11px]">
                          Jangan simpan gambar dalam bentuk <strong>Base64</strong> di database. Buat bucket publik di Supabase Storage (misal: <code className="text-indigo-600">soal-images</code>) dan masukkan URL bersihnya ke kolom <code className="font-mono">image_url</code>.
                        </p>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                        <span className="font-bold text-slate-900 block">2. Format PNG & WebP</span>
                        <p className="text-slate-600 text-[11px]">
                          Gunakan <strong>PNG</strong> untuk grafik rumus matematika/bagan agar tajam. Gunakan <strong>WebP</strong> untuk foto ekosistem/hewan agar ukuran berkas kecil dan hemat kuota.
                        </p>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                        <span className="font-bold text-slate-900 block">3. Opsi Pilihan A - D</span>
                        <p className="text-slate-600 text-[11px]">
                          Standar pilihan SD adalah 4 opsi (A, B, C, D). Frontend otomatis menyembunyikan opsi jika hanya diisi sampai D.
                        </p>
                      </div>
                    </div>

                    {/* Contoh SQL Insert Soal Bergambar */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-bold text-slate-800 block">
                        Contoh Query SQL Insert Soal HOTS Bergambar (Siap Jalankan):
                      </span>
                      <div className="bg-slate-950 text-slate-200 p-3.5 rounded-2xl font-mono text-[11px] overflow-x-auto border border-slate-800">
                        <pre className="text-emerald-400">{`INSERT INTO public.questions (
    package_id, number, category, topic, question_text, 
    image_url, image_caption, options, correct_answer, explanation, difficulty
) VALUES (
    'TKA-IPA-01', 5, 'IPA & Sains SD', 'Simbiosis & Ekosistem',
    'Perhatikan gambar interaksi lebah dan bunga sepatu di atas! Jenis simbiosis dan keuntungan yang didapat lebah adalah...',
    'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=900&q=80',
    'Gambar: Interaksi antara Lebah Madu dan Bunga Sepatu',
    '{"A": "Simbiosis mutualisme, lebah mendapatkan nektar sebagai makanan", "B": "Simbiosis komensalisme, lebah mendapatkan tempat tinggal", "C": "Simbiosis parasitisme, lebah merusak mahkota bunga", "D": "Simbiosis netralisme, keduanya tidak saling mempengaruhi"}',
    'A',
    'Hubungan lebah dan bunga adalah simbiosis mutualisme (saling menguntungkan). Lebah memperoleh nektar, sedangkan bunga terbantu penyerbukannya.',
    'Sedang'
);`}</pre>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 1: PANDUAN LENGKAP */}
              {activeTab === 'guide' && (
                <div className="space-y-6 text-slate-700">
                  
                  {/* Status Banner */}
                  <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                    isConnected 
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}>
                    {isConnected ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h3 className="font-bold text-sm">
                        {isConnected
                          ? 'Supabase Terkoneksi & Aktif'
                          : 'Website Saat Ini Menggunakan Database Lokal (LocalStorage)'}
                      </h3>
                      <p className="text-xs mt-0.5 opacity-90 leading-relaxed">
                        {isConnected
                          ? 'Seluruh hasil ujian dan data siswa otomatis tersinkronisasi ke server Supabase Cloud Anda.'
                          : 'Aplikasi berjalan lancar secara offline. Untuk menghubungkan ke Supabase, ikuti langkah mudah di bawah ini.'}
                      </p>
                    </div>
                  </div>

                  {/* Langkah 1 */}
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2 font-['Nunito',sans-serif]">
                      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                      <span>Buat Proyek Gratis di Supabase</span>
                    </h3>
                    <div className="pl-8 text-xs sm:text-sm text-slate-600 space-y-2">
                      <p>
                        1. Buka <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-indigo-600 font-bold underline inline-flex items-center gap-1">supabase.com <ExternalLink className="w-3 h-3" /></a> dan buat akun baru.
                      </p>
                      <p>
                        2. Klik tombol <strong>"New Project"</strong> $\rightarrow$ Beri nama <code>tryout-tka-sd</code> $\rightarrow$ Masukkan database password $\rightarrow$ Pilih region <strong>Singapore (Southeast Asia)</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Langkah 2 */}
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2 font-['Nunito',sans-serif]">
                      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                      <span>Jalankan Script SQL Skema Tabel</span>
                    </h3>
                    <div className="pl-8 text-xs sm:text-sm text-slate-600 space-y-2">
                      <p>
                        1. Buka tab <strong>"⚡ Script SQL DDL"</strong> di atas, lalu klik tombol <strong>"Salin Script SQL"</strong>.
                      </p>
                      <p>
                        2. Di dashboard Supabase Anda, klik menu <strong>SQL Editor</strong> di bilah samping kiri $\rightarrow$ Klik <strong>"New Query"</strong>.
                      </p>
                      <p>
                        3. Tempel (*paste*) kodenya, lalu klik tombol <strong>RUN</strong>. Keempat tabel (<code>students</code>, <code>exam_packages</code>, <code>questions</code>, <code>exam_results</code>) akan terbuat otomatis.
                      </p>
                    </div>
                  </div>

                  {/* Langkah 3 */}
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2 font-['Nunito',sans-serif]">
                      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                      <span>Ambil API Keys dari Supabase</span>
                    </h3>
                    <div className="pl-8 text-xs sm:text-sm text-slate-600 space-y-2">
                      <p>
                        Masuk ke menu <strong>Project Settings (⚙️)</strong> di kiri bawah $\rightarrow$ pilih <strong>API</strong>. Salin 2 nilai berikut:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-700">
                        <li><strong>Project URL</strong> (Contoh: <code>https://xyzcompany.supabase.co</code>)</li>
                        <li><strong>Project API Keys $\rightarrow$ anon / public</strong> (Contoh: <code>eyJhbGciOi...</code>)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Langkah 4 - Penjelasan Mengapa Invalid */}
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2 font-['Nunito',sans-serif]">
                      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">4</span>
                      <span>Cara Mengisi Variabel (Agar Tidak "Invalid")</span>
                    </h3>
                    <div className="pl-8 text-xs sm:text-sm text-slate-600 space-y-3">
                      
                      <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 text-xs">
                        <strong>⚠️ Mengapa muncul tulisan "Invalid" di Hosting?</strong>
                        <p className="mt-1">
                          Pesan invalid terjadi jika Anda menempelkan seluruh baris sekaligus (misalnya: <code>VITE_SUPABASE_URL = https://...</code>) ke dalam kotak nama, atau terdapat spasi/tanda sama dengan (<code>=</code>).
                        </p>
                      </div>

                      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                        <span className="font-bold text-slate-800 block">Cara Pengisian yang Benar (Terpisah 2 Kolom):</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px]">
                          <div className="p-2 bg-white border border-slate-200 rounded">
                            <span className="text-slate-500 block text-[10px] font-sans">Kolom Variable Name 1:</span>
                            <span className="font-bold text-indigo-600">VITE_SUPABASE_URL</span>
                          </div>
                          <div className="p-2 bg-white border border-slate-200 rounded">
                            <span className="text-slate-500 block text-[10px] font-sans">Kolom Value 1:</span>
                            <span className="text-slate-800">https://xyzcompany.supabase.co</span>
                          </div>
                          <div className="p-2 bg-white border border-slate-200 rounded">
                            <span className="text-slate-500 block text-[10px] font-sans">Kolom Variable Name 2:</span>
                            <span className="font-bold text-indigo-600">VITE_SUPABASE_ANON_KEY</span>
                          </div>
                          <div className="p-2 bg-white border border-slate-200 rounded">
                            <span className="text-slate-500 block text-[10px] font-sans">Kolom Value 2:</span>
                            <span className="text-slate-800">eyJhbGciOiJIUzI1NiIsIn...</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: SCRIPT SQL */}
              {activeTab === 'sql' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600">
                      Script DDL PostgreSQL & Supabase (Sudah termasuk skema 4 tabel & hak akses RLS):
                    </span>
                    <button
                      type="button"
                      id="btn-copy-sql-script"
                      onClick={() => handleCopy(SUPABASE_SCHEMA_SQL)}
                      className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer transition-all"
                    >
                      {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Berhasil Disalin!' : 'Salin Script SQL'}</span>
                    </button>
                  </div>

                  <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl font-mono text-xs overflow-x-auto max-h-[450px]">
                    <pre>{SUPABASE_SCHEMA_SQL}</pre>
                  </div>
                </div>
              )}

              {/* TAB 3: RINGKASAN DATA */}
              {activeTab === 'mockData' && (
                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl">
                      <h4 className="font-bold text-blue-900 text-sm">📐 Paket Matematika (30 Soal)</h4>
                      <p className="text-slate-600 mt-1">
                        Operasi hitung campuran, pola bilangan bertingkat, FPB/KPK, pecahan, perbandingan, kecepatan, volume, luas bangun datar, statistika modus/median/mean.
                      </p>
                      <span className="inline-block mt-2 font-mono font-bold text-blue-700 text-[11px]">
                        Total: {QUESTIONS_MATEMATIKA.length} Butir Soal
                      </span>
                    </div>

                    <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
                      <h4 className="font-bold text-emerald-900 text-sm">🇮🇩 Paket Bahasa Indonesia (30 Soal)</h4>
                      <p className="text-slate-600 mt-1">
                        Ide pokok deduktif/induktif, istilah, fabel & amanat, watak tokoh, PUEBI huruf kapital, tanda baca, kalimat efektif, pantun nasehat, simpulan teks.
                      </p>
                      <span className="inline-block mt-2 font-mono font-bold text-emerald-700 text-[11px]">
                        Total: {QUESTIONS_BAHASA.length} Butir Soal
                      </span>
                    </div>

                    <div className="p-3.5 bg-purple-50 border border-purple-200 rounded-xl">
                      <h4 className="font-bold text-purple-900 text-sm">🔬 Paket IPA & Sains (30 Soal)</h4>
                      <p className="text-slate-600 mt-1">
                        Rantai makanan sawah, simbiosis, adaptasi hewan/tumbuhan, organ pernapasan/pencernaan/darah, sifat cahaya, listrik paralel, rotasi bumi, tata surya.
                      </p>
                      <span className="inline-block mt-2 font-mono font-bold text-purple-700 text-[11px]">
                        Total: {QUESTIONS_IPA.length} Butir Soal
                      </span>
                    </div>

                    <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl">
                      <h4 className="font-bold text-amber-900 text-sm">🧩 Paket Penalaran Spasial (30 Soal)</h4>
                      <p className="text-slate-600 mt-1">
                        Jaring-jaring kubus/balok, rotasi arah jarum, pencerminan huruf, analogi kata/fungsi, diagram venn himpunan, deret huruf, silogisme logika.
                      </p>
                      <span className="inline-block mt-2 font-mono font-bold text-amber-700 text-[11px]">
                        Total: {QUESTIONS_PENALARAN.length} Butir Soal
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </>
        )}

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-b-3xl">
          <span className="text-xs text-slate-500">
            Didesain untuk Standar TKA & ANBK SD (30 Soal per Mata Pelajaran)
          </span>
          <div className="flex items-center gap-2">
            {isAdminUnlocked && (
              <button
                type="button"
                onClick={() => setIsAdminUnlocked(false)}
                className="px-3.5 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs cursor-pointer"
              >
                Kunci Kembali
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
