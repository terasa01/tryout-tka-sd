import React, { useState, useMemo } from 'react';
import { 
  User, 
  Lock, 
  School, 
  Sparkles, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  UserPlus, 
  LogIn, 
  ShieldCheck, 
  GraduationCap,
  KeyRound,
  ArrowLeft,
  BookOpen,
  Activity
} from 'lucide-react';
import { AppUser, UserRole } from '../types/quiz';
import { authenticateUser, registerNewUser, getAllUsers } from '../lib/auth';

interface LoginScreenProps {
  initialMode?: 'login' | 'register';
  onLoginSuccess: (user: AppUser) => void;
  onBackToLanding?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ 
  initialMode = 'login',
  onLoginSuccess,
  onBackToLanding 
}) => {
  // Mode: 'login' | 'register'
  const [authMode, setAuthMode] = useState<'login' | 'register'>(initialMode);

  // State Form Login
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPass, setShowLoginPass] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [notRegisteredNotice, setNotRegisteredNotice] = useState(false);

  // State Form Register
  const [regFullName, setRegFullName] = useState('');
  const [regSchoolName, setRegSchoolName] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regRole, setRegRole] = useState<UserRole>('student');
  const [regAdminCode, setRegAdminCode] = useState('');
  const [showRegPass, setShowRegPass] = useState(false);
  const [regLoading, setRegLoading] = useState(false);
  const [regError, setRegError] = useState<string | null>(null);
  const [regSuccess, setRegSuccess] = useState<string | null>(null);

  // Real-time Check apakah username sudah dipakai
  const isUsernameTaken = useMemo(() => {
    const clean = regUsername.trim().toLowerCase();
    if (!clean || clean.length < 3) return false;
    const users = getAllUsers();
    return users.some((u) => u.username.toLowerCase() === clean);
  }, [regUsername]);

  // Quick fill untuk login
  const handleQuickFill = (u: string, p: string) => {
    setLoginUsername(u);
    setLoginPassword(p);
    setLoginError(null);
    setNotRegisteredNotice(false);
  };

  // Submit Login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setNotRegisteredNotice(false);
    setLoginLoading(true);

    const res = await authenticateUser(loginUsername, loginPassword);
    setLoginLoading(false);

    if (res.success && res.user) {
      onLoginSuccess(res.user);
    } else {
      setLoginError(res.message);
      if (res.notRegistered) {
        setNotRegisteredNotice(true);
      }
    }
  };

  // Submit Register
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError(null);
    setRegSuccess(null);

    // Validasi duplikasi username
    if (isUsernameTaken) {
      setRegError(`Username "${regUsername.trim()}" sudah digunakan oleh akun lain. Silakan gunakan username berbeda.`);
      return;
    }

    if (regRole === 'admin') {
      setRegError('Pendaftaran untuk peran Administrator dinonaktifkan.');
      return;
    }

    setRegLoading(true);

    const res = await registerNewUser({
      fullName: regFullName,
      schoolName: regSchoolName,
      username: regUsername,
      password: regPassword,
      role: regRole,
      adminSecretCode: regAdminCode
    });

    setRegLoading(false);

    if (res.success && res.user) {
      setRegSuccess('Akun berhasil dibuat! Mengalihkan ke sistem...');
      setTimeout(() => {
        onLoginSuccess(res.user!);
      }, 700);
    } else {
      setRegError(res.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-65px)] flex items-center justify-center p-4 sm:p-6 bg-slate-50">
      <div className="w-full max-w-lg space-y-5">
        
        {/* Tombol Kembali ke Beranda */}
        {onBackToLanding && (
          <button
            type="button"
            onClick={onBackToLanding}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda Utama</span>
          </button>
        )}

        {/* Card Utama */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 overflow-hidden">
          
          {/* Header Title */}
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white p-6 sm:p-7 relative overflow-hidden">
            <div className="relative z-10 space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-bold tracking-wide backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Portal Resmi CBT TKA</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                {authMode === 'login' ? 'Masuk ke Sistem Ujian' : 'Registrasi Akun CBT'}
              </h2>
              <p className="text-xs text-blue-100 leading-relaxed font-medium">
                {authMode === 'login'
                  ? 'Satu pintu login terintegrasi untuk Siswa, Guru, Proktor, dan Administrator.'
                  : 'Daftarkan data diri Anda untuk mengikuti simulasi dan ujian resmi TKA SD.'}
              </p>
            </div>
          </div>

          {/* Toggle Switch Login / Register */}
          <div className="grid grid-cols-2 p-1.5 bg-slate-100/90 border-b border-slate-200">
            <button
              type="button"
              id="tab-login"
              onClick={() => {
                setAuthMode('login');
                setLoginError(null);
                setNotRegisteredNotice(false);
              }}
              className={`py-2 px-3 text-xs font-extrabold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                authMode === 'login'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>Masuk (Login)</span>
            </button>

            <button
              type="button"
              id="tab-register"
              onClick={() => {
                setAuthMode('register');
                setRegError(null);
                setRegSuccess(null);
              }}
              className={`py-2 px-3 text-xs font-extrabold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                authMode === 'register'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>Daftar Akun Baru</span>
            </button>
          </div>

          <div className="p-6 sm:p-7">
            {/* ================= FORM LOGIN ================= */}
            {authMode === 'login' ? (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                
                {/* Alert Error */}
                {loginError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{loginError}</span>
                    </div>
                    {notRegisteredNotice && (
                      <button
                        type="button"
                        onClick={() => {
                          setRegUsername(loginUsername);
                          setAuthMode('register');
                        }}
                        className="w-full py-1.5 px-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 cursor-pointer transition-colors"
                      >
                        <UserPlus className="w-3.5 h-3.5" />
                        <span>Daftarkan Akun "{loginUsername}" Sekarang</span>
                      </button>
                    )}
                  </div>
                )}

                {/* Username */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Username / No. Peserta <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="input-login-username"
                      type="text"
                      required
                      value={loginUsername}
                      onChange={(e) => setLoginUsername(e.target.value)}
                      placeholder="Masukkan username akun Anda"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50/70 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Password <span className="text-rose-500">*</span>
                    </label>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      id="input-login-password"
                      type={showLoginPass ? 'text' : 'password'}
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Masukkan password akun"
                      className="w-full pl-10 pr-10 py-2.5 bg-slate-50/70 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPass(!showLoginPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                    >
                      {showLoginPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Tombol Masuk */}
                <button
                  type="submit"
                  id="btn-login-submit"
                  disabled={loginLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.99] text-white font-extrabold text-sm rounded-xl shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                >
                  <span>{loginLoading ? 'Memeriksa Akun...' : 'Masuk ke Sistem'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Quick Info 4 Akun Bawaan */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block text-center">
                    ⚡ Akses Cepat Demo (Klik untuk Isi Otomatis):
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleQuickFill('siswa1', '123')}
                      className="p-2 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-xl text-[11px] font-bold border border-slate-200 text-left transition-colors cursor-pointer"
                    >
                      <span className="block font-black text-blue-700">1. Siswa (Peserta)</span>
                      <code className="text-slate-500">siswa1 / 123</code>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickFill('guru', '123')}
                      className="p-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded-xl text-[11px] font-bold border border-slate-200 text-left transition-colors cursor-pointer"
                    >
                      <span className="block font-black text-emerald-700">2. Guru (Author)</span>
                      <code className="text-slate-500">guru / 123</code>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickFill('proktor', '123')}
                      className="p-2 bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 rounded-xl text-[11px] font-bold border border-slate-200 text-left transition-colors cursor-pointer"
                    >
                      <span className="block font-black text-indigo-700">3. Proktor (Pengawas)</span>
                      <code className="text-slate-500">proktor / 123</code>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickFill('admin', '123')}
                      className="p-2 bg-slate-50 hover:bg-amber-50 text-slate-700 hover:text-amber-700 rounded-xl text-[11px] font-bold border border-slate-200 text-left transition-colors cursor-pointer"
                    >
                      <span className="block font-black text-slate-900">4. Admin Sistem</span>
                      <code className="text-slate-500">admin / 123</code>
                    </button>
                  </div>
                </div>

              </form>
            ) : (
              /* ================= FORM REGISTER ================= */
              <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                
                {/* Alert Error / Success */}
                {regError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{regError}</span>
                  </div>
                )}

                {regSuccess && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{regSuccess}</span>
                  </div>
                )}

                {/* Pilihan 3 Peran Akun (Administrator hanya via Admin Dashboard) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Pilih Peran Pengguna (Role) <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setRegRole('student')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex sm:flex-col sm:items-center sm:text-center items-center gap-2 transition-all cursor-pointer ${
                        regRole === 'student'
                          ? 'border-blue-600 bg-blue-50 text-blue-800 ring-2 ring-blue-500/20'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <GraduationCap className="w-4 h-4 shrink-0 text-blue-600" />
                      <span className="truncate">Siswa (Peserta)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRegRole('teacher')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex sm:flex-col sm:items-center sm:text-center items-center gap-2 transition-all cursor-pointer ${
                        regRole === 'teacher'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/20'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <BookOpen className="w-4 h-4 shrink-0 text-emerald-600" />
                      <span className="truncate">Guru (Pembuat Soal)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRegRole('proctor')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex sm:flex-col sm:items-center sm:text-center items-center gap-2 transition-all cursor-pointer ${
                        regRole === 'proctor'
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-800 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Activity className="w-4 h-4 shrink-0 text-indigo-600" />
                      <span className="truncate">Proktor (Pengawas)</span>
                    </button>
                  </div>
                </div>

                {/* Nama Lengkap */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Nama Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={regFullName}
                    onChange={(e) => setRegFullName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-3.5 py-2 bg-slate-50/70 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>

                {/* Asal Sekolah */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Asal Sekolah / Satuan Pendidikan <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={regSchoolName}
                    onChange={(e) => setRegSchoolName(e.target.value)}
                    placeholder="Contoh: SD Negeri 01 / MI Bintang"
                    className="w-full px-3.5 py-2 bg-slate-50/70 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>

                {/* Username & Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Username Baru <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={regUsername}
                      onChange={(e) => setRegUsername(e.target.value)}
                      placeholder="budi123"
                      className={`w-full px-3.5 py-2 bg-slate-50/70 border rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 ${
                        isUsernameTaken
                          ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600 bg-rose-50/40'
                          : 'border-slate-300 focus:ring-blue-500/20 focus:border-blue-600'
                      }`}
                    />
                    {isUsernameTaken && (
                      <p className="text-[11px] text-rose-600 font-bold flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>Username sudah dipakai! Pilih username lain.</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Password <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showRegPass ? 'text' : 'password'}
                        required
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        placeholder="Minimal 3 karakter"
                        className="w-full px-3.5 py-2 bg-slate-50/70 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegPass(!showRegPass)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                      >
                        {showRegPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* PIN Keamanan untuk Guru/Proktor */}
                {regRole !== 'student' && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
                    <label className="block text-xs font-bold text-amber-950 uppercase tracking-wider flex items-center gap-1">
                      <KeyRound className="w-3.5 h-3.5 text-amber-700" />
                      <span>PIN Otorisasi Pendidik (Diberikan oleh Admin)</span>
                    </label>
                    <input
                      type="password"
                      value={regAdminCode}
                      onChange={(e) => setRegAdminCode(e.target.value)}
                      placeholder="Masukkan PIN otorisasi pendidik..."
                      className="w-full px-3 py-1.5 bg-white border border-amber-300 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      required
                    />
                  </div>
                )}

                {/* Tombol Buat Akun */}
                <button
                  type="submit"
                  id="btn-register-submit"
                  disabled={regLoading || isUsernameTaken}
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-extrabold text-xs rounded-xl shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50 mt-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{regLoading ? 'Mendaftarkan Akun...' : 'Daftar & Langsung Masuk'}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
