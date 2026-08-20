import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Database, 
  Sparkles, 
  School, 
  ShieldCheck, 
  LogOut, 
  GraduationCap, 
  User, 
  LogIn, 
  Home, 
  Activity 
} from 'lucide-react';
import { AppUser, ScreenState } from '../types/quiz';
import { getSupabaseCredentials } from '../lib/supabase';

interface NavbarProps {
  currentScreen: ScreenState;
  currentUser: AppUser | null;
  onOpenDbModal: () => void;
  onLogout: () => void;
  onNavigateLanding?: () => void;
  onNavigateLogin?: (mode?: 'login' | 'register') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  currentUser,
  onOpenDbModal,
  onLogout,
  onNavigateLanding,
  onNavigateLogin
}) => {
  const { isConfigured } = getSupabaseCredentials();
  const [isHiddenFromNavbar, setIsHiddenFromNavbar] = useState<boolean>(() => {
    return localStorage.getItem('TKA_HIDE_DB_NAVBAR') === 'true';
  });

  useEffect(() => {
    const handleNavbarSync = () => {
      setIsHiddenFromNavbar(localStorage.getItem('TKA_HIDE_DB_NAVBAR') === 'true');
    };
    window.addEventListener('tka_navbar_change', handleNavbarSync);
    window.addEventListener('storage', handleNavbarSync);
    return () => {
      window.removeEventListener('tka_navbar_change', handleNavbarSync);
      window.removeEventListener('storage', handleNavbarSync);
    };
  }, []);

  const canNavigate = currentScreen !== 'exam' && currentScreen !== 'instruction';

  const getRoleBadge = () => {
    if (!currentUser) return null;
    switch (currentUser.role) {
      case 'admin':
        return { label: 'Administrator', bg: 'bg-slate-900', text: 'text-amber-400', icon: ShieldCheck };
      case 'proctor':
        return { label: 'Proktor / Pengawas', bg: 'bg-indigo-600', text: 'text-white', icon: Activity };
      case 'teacher':
        return { label: 'Guru / Pembuat Soal', bg: 'bg-emerald-600', text: 'text-white', icon: BookOpen };
      default:
        return { label: 'Siswa / Peserta', bg: 'bg-blue-600', text: 'text-white', icon: GraduationCap };
    }
  };

  const roleInfo = getRoleBadge();

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200 px-4 lg:px-8 py-3 transition-all no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div 
          id="nav-brand"
          className={`flex items-center gap-3 select-none ${canNavigate ? 'cursor-pointer group' : 'cursor-default'}`}
          onClick={() => {
            if (canNavigate && onNavigateLanding) {
              onNavigateLanding();
            }
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-slate-800 tracking-tight font-['Nunito',sans-serif]">
                TRYOUT <span className="text-blue-600">TKA SD</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                CBT 2026
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Simulasi Ujian Akademik & Asesmen Kompetensi Siswa SD/MI
            </p>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Tombol Beranda jika bukan di Beranda & bukan di dalam Ujian */}
          {currentScreen !== 'landing' && canNavigate && onNavigateLanding && (
            <button
              type="button"
              id="btn-nav-home"
              onClick={onNavigateLanding}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 border border-slate-200 rounded-xl transition-all cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Beranda</span>
            </button>
          )}

          {/* Info Pengguna Aktif dengan 4 Role */}
          {currentUser && roleInfo && currentScreen !== 'login' && currentScreen !== 'landing' && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs">
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold ${roleInfo.bg}`}>
                <roleInfo.icon className="w-3.5 h-3.5" />
              </div>
              <div className="hidden sm:block text-left">
                <span className="font-bold text-slate-800 block leading-tight">
                  {currentUser.fullName}
                </span>
                <span className="text-[10px] text-slate-500 block leading-tight">
                  {roleInfo.label} • {currentUser.schoolName}
                </span>
              </div>
            </div>
          )}

          {/* Database Button: Khusus Admin */}
          {currentUser?.role === 'admin' && (
            <button
              id="btn-inspect-database"
              type="button"
              onClick={onOpenDbModal}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer shadow-2xs ${
                isConfigured
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
              title="Kelola Database Supabase & Kunci API"
            >
              <Database className={`w-3.5 h-3.5 ${isConfigured ? 'text-emerald-600' : 'text-indigo-600'}`} />
              <span className="hidden sm:inline">Database Supabase</span>
              <span className="sm:hidden">DB</span>
              {isConfigured && (
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              )}
            </button>
          )}

          {/* Tombol Masuk / Login jika Belum Login dan sedang di Landing */}
          {!currentUser && currentScreen === 'landing' && onNavigateLogin && (
            <button
              id="btn-nav-login"
              type="button"
              onClick={() => onNavigateLogin('login')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] rounded-xl shadow-xs shadow-blue-500/20 transition-all cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Masuk / Login</span>
            </button>
          )}

          {/* Tombol Logout jika sedang Login dan bukan di dalam ujian */}
          {currentUser && currentScreen !== 'exam' && (
            <button
              id="btn-nav-logout"
              type="button"
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-all shadow-2xs cursor-pointer"
              title="Keluar dari akun"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-600" />
              <span>Keluar</span>
            </button>
          )}

        </div>
      </div>
    </header>
  );
};
