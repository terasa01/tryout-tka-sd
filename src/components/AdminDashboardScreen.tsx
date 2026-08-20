import React, { useState } from 'react';
import { 
  ShieldCheck, Users, Calendar, Settings, Database, 
  FileText, Plus, Trash2, Edit2, Edit, Download, Upload, 
  RefreshCw, Check, ArrowLeft, AlertTriangle, Key, 
  Lock, Unlock, ShieldAlert, FileSpreadsheet, Search, CheckCircle2,
  Eye, EyeOff, KeyRound, Building2
} from 'lucide-react';
import { AppUser, ExamSchedule, SystemConfig, AuditLog, UserRole } from '../types/quiz';
import { 
  getAllUsers, 
  saveAllUsers, 
  registerNewUser,
  updateUser,
  getEducatorPin,
  setEducatorPin
} from '../lib/auth';
import { 
  getExamSchedules, 
  saveExamSchedules, 
  getSystemConfig, 
  saveSystemConfig, 
  getAuditLogs, 
  addAuditLog, 
  getAllQuestionBank 
} from '../data/rolesDataStore';
import { getStoredExamResults } from '../lib/supabase';

interface AdminDashboardScreenProps {
  currentUser: AppUser;
  onBackToLogin: () => void;
  onOpenDbModal: () => void;
  onLogoutAdmin: () => void;
  onBackToLanding?: () => void;
}

type AdminTab = 'users' | 'schedules' | 'config' | 'logs' | 'database';

export const AdminDashboardScreen: React.FC<AdminDashboardScreenProps> = ({
  currentUser,
  onOpenDbModal,
  onLogoutAdmin,
  onBackToLanding
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('users');
  const [users, setUsers] = useState<AppUser[]>(() => getAllUsers());
  const [schedules, setSchedules] = useState<ExamSchedule[]>(() => getExamSchedules());
  const [systemConfig, setSystemConfig] = useState<SystemConfig>(() => getSystemConfig());
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(() => getAuditLogs());
  const [examRecords, setExamRecords] = useState(() => getStoredExamResults());

  // Educator PIN State
  const [educatorPin, setEducatorPinState] = useState<string>(() => getEducatorPin());
  const [showEducatorPin, setShowEducatorPin] = useState<boolean>(false);

  // User Filter & Modals
  const [userRoleFilter, setUserRoleFilter] = useState<string>('ALL');
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [visiblePasswords, setVisiblePasswords] = useState<Record<string, boolean>>({});

  // New User Form State
  const [newUserForm, setNewUserForm] = useState({
    username: '',
    password: '',
    fullName: '',
    schoolName: systemConfig.schoolName,
    role: 'student' as UserRole,
    classGrade: 'Kelas 6A',
    participantNumber: ''
  });

  // Edit User Form State
  const [editUserForm, setEditUserForm] = useState<{
    id: string;
    fullName: string;
    username: string;
    password: string;
    role: UserRole;
    schoolName: string;
    participantNumber: string;
    classGrade: string;
  }>({
    id: '',
    fullName: '',
    username: '',
    password: '',
    role: 'student',
    schoolName: '',
    participantNumber: '',
    classGrade: ''
  });
  const [showEditPassword, setShowEditPassword] = useState<boolean>(false);

  // Schedule Modal
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [newScheduleForm, setNewScheduleForm] = useState<Partial<ExamSchedule>>({
    title: 'Sesi Ujian Baru',
    subjectCode: 'MTK',
    examDate: new Date().toISOString().split('T')[0],
    startTime: '07:30',
    endTime: '08:30',
    durationMinutes: 60,
    roomName: 'Ruang Lab Komputer 1',
    sessionNumber: 1,
    token: 'TKA2026'
  });

  const [toastMsg, setToastMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const showToast = (text: string, type: 'success' | 'error' = 'success') => {
    setToastMsg({ text, type });
    setTimeout(() => setToastMsg(null), 3500);
  };

  // Filtered Users
  const filteredUsers = users.filter((u) => {
    if (userRoleFilter !== 'ALL' && u.role !== userRoleFilter) return false;
    if (userSearchQuery) {
      const q = userSearchQuery.toLowerCase();
      return (
        u.fullName.toLowerCase().includes(q) ||
        u.username.toLowerCase().includes(q) ||
        u.participantNumber.toLowerCase().includes(q) ||
        (u.schoolName && u.schoolName.toLowerCase().includes(q))
      );
    }
    return true;
  });

  // Toggle visible password in user table
  const togglePasswordVisibility = (userId: string) => {
    setVisiblePasswords(prev => ({ ...prev, [userId]: !prev[userId] }));
  };

  // Simpan Perubahan PIN Otorisasi Pendidik
  const handleSaveEducatorPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!educatorPin.trim()) {
      showToast('PIN Otorisasi Pendidik tidak boleh kosong!', 'error');
      return;
    }
    setEducatorPin(educatorPin.trim());
    addAuditLog(currentUser.fullName, 'admin', 'UPDATE_EDUCATOR_PIN', `Memperbarui PIN Otorisasi Pendidik ke: ${educatorPin.trim()}`);
    showToast('PIN Otorisasi Pendidik berhasil diperbarui!');
  };

  // 1. Tambah Akun Pengguna Baru
  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserForm.username.trim() || !newUserForm.password.trim() || !newUserForm.fullName.trim()) {
      showToast('Semua kolom wajib diisi!', 'error');
      return;
    }

    const all = getAllUsers();
    if (all.some(u => u.username.toLowerCase() === newUserForm.username.toLowerCase().trim())) {
      showToast('Username sudah digunakan oleh akun lain!', 'error');
      return;
    }

    const prefixMap: Record<UserRole, string> = {
      student: 'SD-2026',
      teacher: 'GRU-2026',
      proctor: 'PRK-2026',
      admin: 'ADM-2026'
    };

    const userObj: AppUser = {
      id: `USR-${Date.now()}`,
      username: newUserForm.username.trim().toLowerCase(),
      password: newUserForm.password.trim(),
      fullName: newUserForm.fullName.trim(),
      schoolName: newUserForm.schoolName.trim() || systemConfig.schoolName,
      participantNumber: newUserForm.participantNumber.trim() || `${prefixMap[newUserForm.role] || 'SD-2026'}-${String(all.length + 1).padStart(3, '0')}`,
      classGrade: newUserForm.role === 'student' ? newUserForm.classGrade : undefined,
      role: newUserForm.role,
      status: 'active',
      createdAt: new Date().toISOString()
    };

    const updated = [userObj, ...all];
    setUsers(updated);
    saveAllUsers(updated);
    addAuditLog(currentUser.fullName, 'admin', 'CREATE_USER', `Menambahkan akun baru: ${userObj.fullName} (${userObj.role})`);
    showToast(`Akun ${userObj.fullName} berhasil dibuat.`);
    setIsUserModalOpen(false);
    setNewUserForm({
      username: '',
      password: '',
      fullName: '',
      schoolName: systemConfig.schoolName,
      role: 'student',
      classGrade: 'Kelas 6A',
      participantNumber: ''
    });
  };

  // 2. Buka Modal Edit Pengguna
  const handleOpenEditUser = (user: AppUser) => {
    setEditUserForm({
      id: user.id,
      fullName: user.fullName,
      username: user.username,
      password: user.password || '123',
      role: user.role,
      schoolName: user.schoolName || '',
      participantNumber: user.participantNumber || '',
      classGrade: user.classGrade || ''
    });
    setShowEditPassword(false);
    setIsEditUserModalOpen(true);
  };

  // 3. Simpan Perubahan Edit Pengguna
  const handleSaveEditUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editUserForm.fullName.trim() || !editUserForm.username.trim() || !editUserForm.password.trim()) {
      showToast('Nama Lengkap, Username, dan Password wajib diisi!', 'error');
      return;
    }

    const res = updateUser(editUserForm.id, {
      fullName: editUserForm.fullName.trim(),
      username: editUserForm.username.trim(),
      password: editUserForm.password.trim(),
      role: editUserForm.role,
      schoolName: editUserForm.schoolName.trim() || systemConfig.schoolName,
      participantNumber: editUserForm.participantNumber.trim(),
      classGrade: editUserForm.role === 'student' ? editUserForm.classGrade.trim() : undefined
    });

    if (res.success && res.user) {
      setUsers(getAllUsers());
      addAuditLog(currentUser.fullName, 'admin', 'UPDATE_USER', `Mengubah data akun ID: ${editUserForm.id} (${editUserForm.fullName} - ${editUserForm.role})`);
      showToast(`Data akun ${editUserForm.fullName} berhasil diperbarui!`);
      setIsEditUserModalOpen(false);
    } else {
      showToast(res.message, 'error');
    }
  };

  // 4. Hapus Akun Pengguna
  const handleDeleteUser = (userId: string, name: string) => {
    if (userId === currentUser.id) {
      showToast('Anda tidak dapat menghapus akun Anda sendiri!', 'error');
      return;
    }
    if (confirm(`Hapus akun ${name}? Tindakan ini tidak dapat dibatalkan.`)) {
      const updated = users.filter(u => u.id !== userId);
      setUsers(updated);
      saveAllUsers(updated);
      addAuditLog(currentUser.fullName, 'admin', 'DELETE_USER', `Menghapus akun ID: ${userId} (${name})`);
      showToast(`Akun ${name} telah dihapus.`);
    }
  };

  // 5. Reset Password Pengguna ke Default "123"
  const handleResetPassword = (userId: string, name: string) => {
    const updated = users.map(u => u.id === userId ? { ...u, password: '123' } : u);
    setUsers(updated);
    saveAllUsers(updated);
    addAuditLog(currentUser.fullName, 'admin', 'RESET_PASSWORD', `Mereset kata sandi akun: ${name} ke default '123'`);
    showToast(`Password untuk ${name} berhasil direset ke "123".`);
  };

  // 4. Tambah Jadwal Ujian
  const handleCreateSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    const newSch: ExamSchedule = {
      id: `SCH-${Date.now()}`,
      title: newScheduleForm.title || 'Sesi Ujian',
      subjectCode: (newScheduleForm.subjectCode as any) || 'MTK',
      packageId: `TKA-${newScheduleForm.subjectCode || 'MTK'}-01`,
      examDate: newScheduleForm.examDate || new Date().toISOString().split('T')[0],
      startTime: newScheduleForm.startTime || '07:30',
      endTime: newScheduleForm.endTime || '08:30',
      durationMinutes: Number(newScheduleForm.durationMinutes) || 60,
      roomName: newScheduleForm.roomName || 'Ruang Lab Komputer 1',
      sessionNumber: Number(newScheduleForm.sessionNumber) || 1,
      token: newScheduleForm.token?.toUpperCase() || 'TKASD2026',
      tokenLocked: false,
      status: 'upcoming'
    };

    const updated = [...schedules, newSch];
    setSchedules(updated);
    saveExamSchedules(updated);
    addAuditLog(currentUser.fullName, 'admin', 'CREATE_SCHEDULE', `Membuat jadwal sesi baru: ${newSch.title}`);
    showToast('Jadwal sesi ujian berhasil ditambahkan.');
    setIsScheduleModalOpen(false);
  };

  // 5. Simpan Konfigurasi Sistem
  const handleSaveSystemConfig = (e: React.FormEvent) => {
    e.preventDefault();
    saveSystemConfig(systemConfig);
    addAuditLog(currentUser.fullName, 'admin', 'UPDATE_CONFIG', 'Memperbarui konfigurasi sistem & bobot penilaian');
    showToast('Konfigurasi sistem berhasil disimpan!');
  };

  // 6. Download Full Backup Database (JSON)
  const handleDownloadBackup = () => {
    const backupData = {
      version: '2.0',
      exportedAt: new Date().toISOString(),
      systemConfig,
      users,
      schedules,
      questionsBank: getAllQuestionBank(),
      examRecords
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Backup_CBT_TKA_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    addAuditLog(currentUser.fullName, 'admin', 'EXPORT_BACKUP', 'Mengunduh berkas cadangan database lengkap (JSON)');
    showToast('Cadangan database berhasil diunduh.');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Header Admin */}
      <div className="bg-white border-b border-slate-200">
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-black uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Super Administrator CBT
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Pusat Kontrol Sistem & Pengaturan Global
              </h1>
              <p className="text-sm text-slate-600 font-medium">
                Manajemen akun 4 role, penjadwalan sesi, konfigurasi bobot penilaian, dan audit trail keamanan.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenDbModal}
                className="flex items-center gap-1.5 px-3.5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs rounded-xl border border-blue-200 transition-colors cursor-pointer"
              >
                <Database className="w-3.5 h-3.5" />
                <span>Supabase Sync</span>
              </button>
              <button
                type="button"
                onClick={onLogoutAdmin}
                className="px-4 py-2.5 bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-700 font-bold text-sm rounded-xl border border-slate-200 transition-colors cursor-pointer"
              >
                Keluar
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-6 border-t border-slate-100 mt-6 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab('users')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'users'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Manajemen Pengguna ({users.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('schedules')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'schedules'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Penjadwalan Ujian ({schedules.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('config')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'config'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Konfigurasi & Bobot Penilaian</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('logs')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'logs'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Audit Trail & Log ({auditLogs.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('database')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'database'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Backup Database & Rekap Nilai</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Toast Alert */}
        {toastMsg && (
          <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 border ${
            toastMsg.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}>
            {toastMsg.type === 'success' ? <Check className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
            <span className="text-sm font-bold">{toastMsg.text}</span>
          </div>
        )}

        {/* TAB 1: MANAJEMEN PENGGUNA */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            
            {/* Card Pengaturan PIN Otorisasi Pendidik (Guru & Proktor) */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-50 to-orange-50 rounded-2xl border border-amber-200/90 p-4 sm:p-5 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-xs shrink-0 mt-0.5">
                    <Key className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-black text-slate-900">PIN Otorisasi Pendidik (Guru & Proktor)</h3>
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold uppercase">
                        Keamanan Akses Staf
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 max-w-2xl">
                      PIN ini diperlukan saat Guru atau Proktor mendaftar akun baru mandiri. Sebagai Administrator, Anda dapat melihat dan mengganti PIN otorisasi kapan saja.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSaveEducatorPin} className="flex items-center gap-2 shrink-0 bg-white p-1.5 rounded-2xl border border-amber-300 shadow-xs">
                  <div className="relative">
                    <input
                      type={showEducatorPin ? 'text' : 'password'}
                      value={educatorPin}
                      onChange={(e) => setEducatorPinState(e.target.value)}
                      placeholder="PIN Otorisasi..."
                      className="w-32 sm:w-40 pl-3 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowEducatorPin(!showEducatorPin)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
                      title={showEducatorPin ? 'Sembunyikan PIN' : 'Tampilkan PIN'}
                    >
                      {showEducatorPin ? <EyeOff className="w-3.5 h-3.5 text-amber-700" /> : <Eye className="w-3.5 h-3.5 text-slate-500" />}
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-black text-xs rounded-xl shadow-xs cursor-pointer transition-all flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Simpan PIN</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Filter dan Tambah Pengguna */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-[280px]">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari nama, username, instansi, atau nomor peserta..."
                    value={userSearchQuery}
                    onChange={(e) => setUserSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <select
                  value={userRoleFilter}
                  onChange={(e) => setUserRoleFilter(e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-700"
                >
                  <option value="ALL">Semua Peran (Role)</option>
                  <option value="student">Siswa (Examinee)</option>
                  <option value="teacher">Guru / Pembuat Soal</option>
                  <option value="proctor">Proktor / Pengawas</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setIsUserModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Pengguna</span>
              </button>
            </div>

            {/* Tabel Pengguna */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-700 font-black uppercase text-[10px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3">Nama Lengkap</th>
                      <th className="px-4 py-3">Username</th>
                      <th className="px-4 py-3">Password</th>
                      <th className="px-4 py-3">No. Induk / Peserta</th>
                      <th className="px-4 py-3 text-center">Peran (Role)</th>
                      <th className="px-4 py-3">Sekolah / Instansi</th>
                      <th className="px-4 py-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {filteredUsers.map((u) => {
                      const isPassVisible = !!visiblePasswords[u.id];
                      return (
                        <tr key={u.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {u.fullName}
                            {u.classGrade && (
                              <span className="ml-2 px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-md">
                                {u.classGrade}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 font-mono text-slate-600 font-bold">{u.username}</td>
                          <td className="px-4 py-3 font-mono">
                            <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded-lg text-[11px]">
                              <span>{isPassVisible ? (u.password || '123') : '••••••'}</span>
                              <button
                                type="button"
                                onClick={() => togglePasswordVisibility(u.id)}
                                className="text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer ml-1"
                                title={isPassVisible ? 'Sembunyikan Password' : 'Lihat Password'}
                              >
                                {isPassVisible ? <EyeOff className="w-3 h-3 text-blue-600" /> : <Eye className="w-3 h-3" />}
                              </button>
                            </div>
                          </td>
                          <td className="px-4 py-3 font-mono font-bold text-slate-700">{u.participantNumber}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`px-2.5 py-1 rounded-full text-[11px] font-black ${
                              u.role === 'admin' ? 'bg-slate-900 text-amber-400' :
                              u.role === 'proctor' ? 'bg-indigo-100 text-indigo-800' :
                              u.role === 'teacher' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {u.role === 'admin' ? 'Admin' :
                               u.role === 'proctor' ? 'Proktor' :
                               u.role === 'teacher' ? 'Guru' : 'Siswa'}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-slate-600 font-medium">{u.schoolName}</td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {/* Tombol Edit User */}
                              <button
                                type="button"
                                onClick={() => handleOpenEditUser(u)}
                                className="flex items-center gap-1 px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-[11px] font-bold transition-colors cursor-pointer"
                                title="Edit / Ubah Data Pengguna"
                              >
                                <Edit className="w-3 h-3" />
                                <span>Edit</span>
                              </button>

                              {/* Tombol Reset Password */}
                              <button
                                type="button"
                                onClick={() => handleResetPassword(u.id, u.fullName)}
                                className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[11px] font-bold transition-colors cursor-pointer"
                                title="Reset Password ke default 123"
                              >
                                Reset Pass
                              </button>

                              {/* Tombol Hapus */}
                              <button
                                type="button"
                                onClick={() => handleDeleteUser(u.id, u.fullName)}
                                className="p-1.5 hover:bg-rose-50 text-slate-400 hover:text-rose-700 rounded-lg transition-colors cursor-pointer"
                                title="Hapus Akun Pengguna"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PENJADWALAN UJIAN */}
        {activeTab === 'schedules' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900">Jadwal Sesi Ujian CBT</h3>
                <p className="text-xs text-slate-500">Konfigurasi tanggal, alokasi ruang lab, waktu durasi, dan token pengerjaan.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsScheduleModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Buat Jadwal Sesi</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {schedules.map((sch) => (
                <div key={sch.id} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-800 text-xs font-black">
                      Sesi {sch.sessionNumber} • {sch.subjectCode}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{sch.examDate}</span>
                  </div>

                  <div>
                    <h4 className="text-base font-black text-slate-900">{sch.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Ruang: <strong>{sch.roomName}</strong> | Waktu: <strong>{sch.startTime} - {sch.endTime} WIB</strong> ({sch.durationMinutes} Menit)
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600">Token Akses:</span>
                    <span className="font-mono font-black text-sm tracking-wider text-indigo-700 bg-white px-2 py-0.5 rounded border border-indigo-200">
                      {sch.token}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: KONFIGURASI SISTEM */}
        {activeTab === 'config' && (
          <form onSubmit={handleSaveSystemConfig} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6 max-w-3xl">
            <h3 className="text-base font-black text-slate-900 border-b border-slate-100 pb-3">
              Pengaturan Global & Sistem Penilaian
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Satuan Pendidikan</label>
                <input
                  type="text"
                  value={systemConfig.schoolName}
                  onChange={(e) => setSystemConfig({ ...systemConfig, schoolName: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Kepala Sekolah</label>
                <input
                  type="text"
                  value={systemConfig.headmasterName}
                  onChange={(e) => setSystemConfig({ ...systemConfig, headmasterName: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">Alamat Resmi Sekolah</label>
                <input
                  type="text"
                  value={systemConfig.schoolAddress}
                  onChange={(e) => setSystemConfig({ ...systemConfig, schoolAddress: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Metode Penilaian Nilai</label>
                <select
                  value={systemConfig.scoringSystem}
                  onChange={(e) => setSystemConfig({ ...systemConfig, scoringSystem: e.target.value as any })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                >
                  <option value="standard">Skala Standar (0 - 100 Persentase)</option>
                  <option value="penalty_negative">Penalti Minus (Benar +4, Salah -1, Kosong 0)</option>
                  <option value="irt_weighted">Bobot IRT (Item Response Theory 200 - 800)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Proteksi Anti-Cheat</label>
                <select
                  value={systemConfig.antiCheatLevel}
                  onChange={(e) => setSystemConfig({ ...systemConfig, antiCheatLevel: e.target.value as any })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                >
                  <option value="medium">Sedang (Peringatan Ganti Tab & Layar Penuh)</option>
                  <option value="strict">Ketat (Auto-Submit setelah 3x Pindah Tab)</option>
                  <option value="off">Nonaktif (Mode Uji Coba Santai)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs cursor-pointer"
              >
                Simpan Konfigurasi
              </button>
            </div>
          </form>
        )}

        {/* TAB 4: AUDIT TRAIL LOGS */}
        {activeTab === 'logs' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900">Audit Trail Aktivitas Sistem</h3>
              <span className="text-xs text-slate-500 font-medium">Merekam login, perubahan token, dan aksi pengguna</span>
            </div>
            <div className="overflow-x-auto max-h-[500px]">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-700 font-black uppercase text-[10px] tracking-wider border-b border-slate-200 sticky top-0">
                  <tr>
                    <th className="px-4 py-3">Waktu</th>
                    <th className="px-4 py-3">Pengguna</th>
                    <th className="px-4 py-3">Peran</th>
                    <th className="px-4 py-3">Aksi</th>
                    <th className="px-4 py-3">Keterangan Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50/80">
                      <td className="px-4 py-2.5 text-slate-500 font-mono text-[11px]">{log.timestamp}</td>
                      <td className="px-4 py-2.5 font-bold text-slate-900">{log.userName}</td>
                      <td className="px-4 py-2.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-slate-100 text-slate-700">
                          {log.role}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 font-mono text-indigo-700 font-bold">{log.action}</td>
                      <td className="px-4 py-2.5 text-slate-600">{log.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: BACKUP & REKAP */}
        {activeTab === 'database' && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Backup & Pemulihan Basis Data</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Simpan seluruh data bank soal ({getAllQuestionBank().length} butir), jadwal ujian, akun pengguna, dan riwayat nilai siswa.
                </p>
              </div>
              <button
                type="button"
                onClick={handleDownloadBackup}
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs cursor-pointer shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Backup (.JSON)</span>
              </button>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-black text-slate-900 mb-2">Sinkronisasi Supabase Cloud Database</h3>
              <p className="text-xs text-slate-600 mb-4">
                Sambungkan proyek Supabase Anda agar data nilai ujian siswa dan akun dapat tersimpan secara persisten di cloud.
              </p>
              <button
                type="button"
                onClick={onOpenDbModal}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
              >
                Buka Konfigurasi Supabase
              </button>
            </div>
          </div>
        )}

      </div>

      {/* MODAL EDIT PENGGUNA (EDIT / UBAH USER) */}
      {isEditUserModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Edit className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Ubah Data Pengguna</h3>
                  <p className="text-xs text-slate-500 font-medium">Edit identitas, username, password, dan peran akun</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSaveEditUser} className="p-6 space-y-4">
              
              {/* Pilihan Peran (Role) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Peran / Role Pengguna <span className="text-rose-500">*</span>
                </label>
                <select
                  value={editUserForm.role}
                  onChange={(e) => setEditUserForm({ ...editUserForm, role: e.target.value as any })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
                  required
                >
                  <option value="student">1. Siswa / Peserta Ujian</option>
                  <option value="teacher">2. Guru / Pembuat Soal</option>
                  <option value="proctor">3. Proktor / Pengawas</option>
                  <option value="admin">4. Administrator Sistem</option>
                </select>
              </div>

              {/* Nama Lengkap */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={editUserForm.fullName}
                  onChange={(e) => setEditUserForm({ ...editUserForm, fullName: e.target.value })}
                  placeholder="Contoh: Ahmad Faiz Pratama"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                  required
                />
              </div>

              {/* Username & Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Username <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={editUserForm.username}
                    onChange={(e) => setEditUserForm({ ...editUserForm, username: e.target.value })}
                    placeholder="username123"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                    <span>Password <span className="text-rose-500">*</span></span>
                    <button
                      type="button"
                      onClick={() => setShowEditPassword(!showEditPassword)}
                      className="text-[11px] text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {showEditPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      <span>{showEditPassword ? 'Sembunyikan' : 'Lihat'}</span>
                    </button>
                  </label>
                  <div className="relative">
                    <input
                      type={showEditPassword ? 'text' : 'password'}
                      value={editUserForm.password}
                      onChange={(e) => setEditUserForm({ ...editUserForm, password: e.target.value })}
                      placeholder="Password baru"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Asal Sekolah / Instansi */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Asal Sekolah / Instansi
                </label>
                <input
                  type="text"
                  value={editUserForm.schoolName}
                  onChange={(e) => setEditUserForm({ ...editUserForm, schoolName: e.target.value })}
                  placeholder="Contoh: SD Bintang Terang"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                />
              </div>

              {/* No. Peserta & Kelas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    No. Induk / Nomor Peserta
                  </label>
                  <input
                    type="text"
                    value={editUserForm.participantNumber}
                    onChange={(e) => setEditUserForm({ ...editUserForm, participantNumber: e.target.value })}
                    placeholder="Contoh: SD-2026-001"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono"
                  />
                </div>

                {editUserForm.role === 'student' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Kelas / Rombel
                    </label>
                    <input
                      type="text"
                      value={editUserForm.classGrade}
                      onChange={(e) => setEditUserForm({ ...editUserForm, classGrade: e.target.value })}
                      placeholder="Contoh: Kelas 6A"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                    />
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditUserModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Simpan Perubahan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL TAMBAH USER */}
      {isUserModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-200 bg-slate-50">
              <h3 className="text-base font-black text-slate-900">Tambah Akun Pengguna Baru</h3>
            </div>

            <form onSubmit={handleCreateUser} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Peran / Role Pengguna</label>
                <select
                  value={newUserForm.role}
                  onChange={(e) => setNewUserForm({ ...newUserForm, role: e.target.value as any })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                >
                  <option value="student">1. Siswa / Peserta Ujian</option>
                  <option value="teacher">2. Guru / Pembuat Soal</option>
                  <option value="proctor">3. Proktor / Pengawas</option>
                  <option value="admin">4. Administrator Sistem</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  value={newUserForm.fullName}
                  onChange={(e) => setNewUserForm({ ...newUserForm, fullName: e.target.value })}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Username</label>
                  <input
                    type="text"
                    value={newUserForm.username}
                    onChange={(e) => setNewUserForm({ ...newUserForm, username: e.target.value })}
                    placeholder="budi1"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
                  <input
                    type="password"
                    value={newUserForm.password}
                    onChange={(e) => setNewUserForm({ ...newUserForm, password: e.target.value })}
                    placeholder="123"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                    required
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsUserModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  Simpan Akun
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL BUAT JADWAL */}
      {isScheduleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-200 bg-slate-50">
              <h3 className="text-base font-black text-slate-900">Buat Jadwal Sesi Ujian Baru</h3>
            </div>

            <form onSubmit={handleCreateSchedule} className="p-6 space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Judul Sesi</label>
                <input
                  type="text"
                  value={newScheduleForm.title}
                  onChange={(e) => setNewScheduleForm({ ...newScheduleForm, title: e.target.value })}
                  placeholder="Contoh: Sesi 1: Matematika Numerasi"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mata Pelajaran</label>
                  <select
                    value={newScheduleForm.subjectCode}
                    onChange={(e) => setNewScheduleForm({ ...newScheduleForm, subjectCode: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                  >
                    <option value="MTK">Matematika</option>
                    <option value="BIN">Bahasa Indonesia</option>
                    <option value="IPA">IPA & Sains</option>
                    <option value="LOG">Penalaran</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Token Akses</label>
                  <input
                    type="text"
                    value={newScheduleForm.token}
                    onChange={(e) => setNewScheduleForm({ ...newScheduleForm, token: e.target.value })}
                    placeholder="TKASD2026"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold"
                    required
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsScheduleModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  Simpan Jadwal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
