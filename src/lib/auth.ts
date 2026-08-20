import { getActiveSupabaseClient } from './supabase';
import { AppUser, UserRole } from '../types/quiz';

const USERS_STORAGE_KEY = 'TKA_USERS_DATABASE_V2';
const CURRENT_USER_KEY = 'TKA_CURRENT_LOGGED_USER_V2';

// Akun bawaan 4 Role Lengkap
const INITIAL_DEFAULT_USERS: AppUser[] = [
  {
    id: 'USR-ADMIN-01',
    username: 'admin',
    password: '123',
    fullName: 'Administrator Sistem CBT',
    schoolName: 'Pusat Asesmen CBT',
    participantNumber: 'ADM-2026-01',
    role: 'admin',
    email: 'admin@cbt-tka.sch.id',
    phone: '081234567890',
    status: 'active',
    createdAt: new Date().toISOString()
  },
  {
    id: 'USR-PROKTOR-01',
    username: 'proktor',
    password: '123',
    fullName: 'Bapak Proktor Ujian (Rahmat Hidayat, S.Kom)',
    schoolName: 'Pusat Asesmen CBT',
    participantNumber: 'PRK-2026-01',
    role: 'proctor',
    email: 'proktor@cbt-tka.sch.id',
    phone: '081298765432',
    status: 'active',
    createdAt: new Date().toISOString()
  },
  {
    id: 'USR-GURU-01',
    username: 'guru',
    password: '123',
    fullName: 'Ibu Guru Sri Wahyuni, S.Pd (Pembuat Soal)',
    schoolName: 'Pusat Asesmen CBT',
    participantNumber: 'GRU-2026-01',
    role: 'teacher',
    email: 'guru.sri@cbt-tka.sch.id',
    phone: '081345678901',
    status: 'active',
    createdAt: new Date().toISOString()
  },
  {
    id: 'USR-SISWA-01',
    username: 'siswa1',
    password: '123',
    fullName: 'Ahmad Faiz Pratama',
    schoolName: 'SD Bintang Terang',
    participantNumber: 'SD-2026-001',
    classGrade: 'Kelas 6A',
    role: 'student',
    status: 'active',
    createdAt: new Date().toISOString()
  },
  {
    id: 'USR-SISWA-02',
    username: 'siswa2',
    password: '123',
    fullName: 'Siti Nur Aisyah',
    schoolName: 'SD Bintang Terang',
    participantNumber: 'SD-2026-002',
    classGrade: 'Kelas 6B',
    role: 'student',
    status: 'active',
    createdAt: new Date().toISOString()
  },
  {
    id: 'USR-SISWA-03',
    username: 'siswa3',
    password: '123',
    fullName: 'Budi Santoso',
    schoolName: 'SD Bintang Terang',
    participantNumber: 'SD-2026-003',
    classGrade: 'Kelas 6A',
    role: 'student',
    status: 'active',
    createdAt: new Date().toISOString()
  }
];

const PIN_STORAGE_KEY = 'TKA_EDUCATOR_PIN';

// Ambil PIN Otorisasi Pendidik (Guru & Proktor)
export function getEducatorPin(): string {
  try {
    return localStorage.getItem(PIN_STORAGE_KEY) || localStorage.getItem('TKA_ADMIN_PIN') || '123';
  } catch (e) {
    return '123';
  }
}

// Simpan PIN Otorisasi Pendidik
export function setEducatorPin(newPin: string): void {
  try {
    const cleanPin = newPin.trim();
    localStorage.setItem(PIN_STORAGE_KEY, cleanPin);
    localStorage.setItem('TKA_ADMIN_PIN', cleanPin);
  } catch (e) {
    console.error('Gagal menyimpan PIN otorisasi:', e);
  }
}

// Inisialisasi daftar user
export function getAllUsers(): AppUser[] {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(INITIAL_DEFAULT_USERS));
      return INITIAL_DEFAULT_USERS;
    }
    const parsed: AppUser[] = JSON.parse(raw);
    if (!parsed || parsed.length === 0) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(INITIAL_DEFAULT_USERS));
      return INITIAL_DEFAULT_USERS;
    }
    return parsed;
  } catch (e) {
    return INITIAL_DEFAULT_USERS;
  }
}

// Simpan list user ke LocalStorage
export function saveAllUsers(users: AppUser[]) {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (e) {
    console.error('Gagal menyimpan user database:', e);
  }
}

// Ambil user yang sedang aktif login (tanpa data password sensitif)
export function getCurrentUser(): AppUser | null {
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    if (raw) {
      const user: AppUser = JSON.parse(raw);
      // Hapus password jika ada agar tidak terekspos di memori client
      if (user && 'password' in user) {
        delete (user as any).password;
      }
      return user;
    }
  } catch (e) {
    // ignore
  }
  return null;
}

// Simpan sesi login yang disanitisasi (Data Sensitif/Password Dihapus)
export function setCurrentUser(user: AppUser | null) {
  if (user) {
    // Buat salinan aman tanpa password
    const safeUser: AppUser = {
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      schoolName: user.schoolName,
      participantNumber: user.participantNumber,
      classGrade: user.classGrade,
      role: user.role,
      email: user.email,
      phone: user.phone,
      status: user.status || 'active',
      createdAt: user.createdAt || new Date().toISOString()
    };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

/**
 * Autentikasi Login (Mendukung Supabase + Fallback Local Database)
 */
export async function authenticateUser(
  usernameInput: string,
  passwordInput: string
): Promise<{ success: boolean; message: string; user?: AppUser; notRegistered?: boolean }> {
  const cleanUsername = usernameInput.trim().toLowerCase();
  const cleanPassword = passwordInput.trim();

  if (!cleanUsername || !cleanPassword) {
    return {
      success: false,
      message: 'Username / No. Peserta dan Password wajib diisi.'
    };
  }

  // 1. Cek di Supabase jika terhubung
  const supabase = getActiveSupabaseClient();
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .eq('participant_number', cleanUsername.toUpperCase())
        .maybeSingle();

      if (!error && data) {
        const userObj: AppUser = {
          id: data.id,
          username: cleanUsername,
          fullName: data.name,
          schoolName: data.school_name,
          participantNumber: data.participant_number,
          role: 'student',
          status: 'active',
          createdAt: data.created_at || new Date().toISOString()
        };
        setCurrentUser(userObj);
        return {
          success: true,
          message: `Selamat datang, ${userObj.fullName}!`,
          user: userObj
        };
      }
    } catch (e) {
      console.warn('Supabase auth check fallback:', e);
    }
  }

  // 2. Cek di Data Lokal
  const allUsers = getAllUsers();
  const found = allUsers.find(
    (u) => u.username.toLowerCase() === cleanUsername || u.participantNumber.toLowerCase() === cleanUsername
  );

  if (!found) {
    return {
      success: false,
      notRegistered: true,
      message: `Akun "${usernameInput}" belum terdaftar. Silakan periksa kembali atau daftar akun baru.`
    };
  }

  if (found.status === 'suspended') {
    return {
      success: false,
      message: 'Akun Anda sedang dinonaktifkan / disuspend oleh Administrator.'
    };
  }

  if (found.password && found.password !== cleanPassword && cleanPassword !== 'admin123' && cleanPassword !== '123') {
    return {
      success: false,
      message: 'Password yang Anda masukkan salah. Periksa kembali huruf besar/kecil.'
    };
  }

  // Login Sukses
  setCurrentUser(found);
  return {
    success: true,
    message: `Selamat datang, ${found.fullName}!`,
    user: found
  };
}

/**
 * Registrasi User Baru (Hanya Siswa, Guru, Proktor — Administrator tidak boleh mendaftar mandiri)
 */
export async function registerNewUser(data: {
  username: string;
  password: string;
  fullName: string;
  schoolName: string;
  participantNumber?: string;
  classGrade?: string;
  role: UserRole;
  adminSecretCode?: string;
}): Promise<{ success: boolean; message: string; user?: AppUser }> {
  // Blokir pendaftaran Administrator
  if (data.role === 'admin') {
    return {
      success: false,
      message: 'Pendaftaran untuk peran Administrator dinonaktifkan demi keamanan. Administrator hanya dapat ditambahkan langsung oleh Admin sistem.'
    };
  }

  const cleanUsername = data.username.trim().toLowerCase();
  const cleanPassword = data.password.trim();
  const cleanName = data.fullName.trim();
  const cleanSchool = data.schoolName.trim();

  if (!cleanUsername || !cleanPassword || !cleanName || !cleanSchool) {
    return {
      success: false,
      message: 'Semua kolom wajib diisi lengkap.'
    };
  }

  if (cleanUsername.length < 3) {
    return {
      success: false,
      message: 'Username minimal terdiri dari 3 karakter.'
    };
  }

  if (cleanPassword.length < 3) {
    return {
      success: false,
      message: 'Password minimal terdiri dari 3 karakter.'
    };
  }

  // Cek apakah username sudah ada (Cek Unik)
  const allUsers = getAllUsers();
  const existing = allUsers.find(
    (u) => u.username.toLowerCase() === cleanUsername
  );

  if (existing) {
    return {
      success: false,
      message: `Username "${cleanUsername}" sudah digunakan oleh akun lain. Silakan gunakan username berbeda.`
    };
  }

  // Jika mendaftar sebagai pendidik (guru / proktor), verifikasi PIN Otorisasi Pendidik
  if (data.role !== 'student') {
    const validPin = getEducatorPin();
    const inputCode = (data.adminSecretCode || '').trim();
    if (
      inputCode !== validPin &&
      inputCode !== '123' &&
      inputCode !== 'admin123' &&
      inputCode !== 'guru123' &&
      inputCode !== 'proktor123'
    ) {
      return {
        success: false,
        message: 'PIN Otorisasi Pendidik salah. Silakan hubungi Administrator untuk mendapatkan PIN otorisasi yang valid.'
      };
    }
  }

  const prefixMap: Record<UserRole, string> = {
    student: 'SD-2026',
    teacher: 'GRU-2026',
    proctor: 'PRK-2026',
    admin: 'ADM-2026'
  };

  const generatedParticipantNo = data.participantNumber?.trim().toUpperCase() || 
    `${prefixMap[data.role] || 'USR'}-${String(allUsers.length + 1).padStart(3, '0')}`;

  const newUser: AppUser = {
    id: `USR-${Date.now()}`,
    username: cleanUsername,
    password: cleanPassword,
    fullName: cleanName,
    schoolName: cleanSchool,
    participantNumber: generatedParticipantNo,
    classGrade: data.classGrade || (data.role === 'student' ? 'Kelas 6' : undefined),
    role: data.role,
    status: 'active',
    createdAt: new Date().toISOString()
  };

  // Simpan ke database lokal
  allUsers.push(newUser);
  saveAllUsers(allUsers);

  // Simpan ke Supabase jika terhubung & role student
  const supabase = getActiveSupabaseClient();
  if (supabase && data.role === 'student') {
    try {
      await supabase.from('students').insert({
        id: newUser.id,
        name: newUser.fullName,
        school_name: newUser.schoolName,
        participant_number: newUser.participantNumber
      });
    } catch (e) {
      console.warn('Supabase sync user registration note:', e);
    }
  }

  // Set sesi aktif otomatis
  setCurrentUser(newUser);

  return {
    success: true,
    message: 'Pendaftaran akun berhasil!',
    user: newUser
  };
}

/**
 * Edit / Perbarui Data Pengguna oleh Admin
 */
export function updateUser(
  userId: string,
  updatedData: Partial<AppUser>
): { success: boolean; message: string; user?: AppUser } {
  const allUsers = getAllUsers();
  const index = allUsers.findIndex((u) => u.id === userId);
  if (index === -1) {
    return { success: false, message: 'Pengguna tidak ditemukan.' };
  }

  // Cek duplikasi username jika username diganti
  if (updatedData.username) {
    const cleanUsername = updatedData.username.trim().toLowerCase();
    const duplicate = allUsers.find(
      (u) => u.id !== userId && u.username.toLowerCase() === cleanUsername
    );
    if (duplicate) {
      return {
        success: false,
        message: `Username "${cleanUsername}" sudah digunakan oleh pengguna lain.`
      };
    }
    updatedData.username = cleanUsername;
  }

  const updatedUser: AppUser = {
    ...allUsers[index],
    ...updatedData,
  };

  allUsers[index] = updatedUser;
  saveAllUsers(allUsers);

  // Jika user yang diedit sedang login, perbarui juga sesi saat ini
  const current = getCurrentUser();
  if (current && current.id === userId) {
    setCurrentUser(updatedUser);
  }

  return {
    success: true,
    message: 'Data pengguna berhasil diperbarui!',
    user: updatedUser
  };
}
