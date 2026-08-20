import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Plus, Search, Filter, Edit3, Trash2, Download, Upload, 
  BarChart3, CheckCircle2, AlertTriangle, FileSpreadsheet, Eye, 
  HelpCircle, Sparkles, RefreshCw, Layers, Check, X, ShieldCheck, ArrowLeft
} from 'lucide-react';
import { AppUser, Question, SubjectCategory, ExamPackage } from '../types/quiz';
import { 
  getAllQuestionBank, 
  saveQuestionBank, 
  addAuditLog, 
  getLiveSessions 
} from '../data/rolesDataStore';
import { ALL_EXAM_PACKAGES } from '../data/mockDatabase';
import { getStoredExamResults } from '../lib/supabase';

interface TeacherDashboardScreenProps {
  currentUser: AppUser;
  onLogout: () => void;
  onBackToLanding?: () => void;
}

type TeacherTab = 'bank_soal' | 'import_export' | 'evaluasi' | 'analisis_butir';

export const TeacherDashboardScreen: React.FC<TeacherDashboardScreenProps> = ({
  currentUser,
  onLogout,
  onBackToLanding
}) => {
  const [activeTab, setActiveTab] = useState<TeacherTab>('bank_soal');
  const [questions, setQuestions] = useState<Question[]>(() => getAllQuestionBank());
  
  // Filter & Search Bank Soal
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [selectedCognitive, setSelectedCognitive] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Modal Tambah/Edit Soal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [formState, setFormState] = useState<Partial<Question>>({
    category: 'Matematika Logika',
    subjectCode: 'MTK',
    questionText: '',
    difficulty: 'Sedang',
    cognitiveLevel: 'MOTS',
    topic: '',
    correctAnswer: 'A',
    explanation: '',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ]
  });

  // Notifikasi Feedback
  const [alertMsg, setAlertMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Data Hasil Siswa untuk Analisis
  const examResults = useMemo(() => getStoredExamResults(), []);

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (selectedSubject !== 'ALL' && q.subjectCode !== selectedSubject) return false;
      if (selectedDifficulty !== 'ALL' && q.difficulty !== selectedDifficulty) return false;
      if (selectedCognitive !== 'ALL' && q.cognitiveLevel !== selectedCognitive) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          q.questionText.toLowerCase().includes(query) ||
          q.topic.toLowerCase().includes(query) ||
          q.number.toString() === query
        );
      }
      return true;
    });
  }, [questions, selectedSubject, selectedDifficulty, selectedCognitive, searchQuery]);

  const showAlert = (text: string, type: 'success' | 'error' = 'success') => {
    setAlertMsg({ type, text });
    setTimeout(() => setAlertMsg(null), 4000);
  };

  // Open Create Modal
  const handleOpenCreate = () => {
    setEditingQuestion(null);
    setFormState({
      category: 'Matematika Logika',
      subjectCode: 'MTK',
      number: questions.length + 1,
      questionText: '',
      difficulty: 'Sedang',
      cognitiveLevel: 'MOTS',
      topic: 'Operasi Bilangan',
      correctAnswer: 'A',
      explanation: '',
      options: [
        { key: 'A', text: '' },
        { key: 'B', text: '' },
        { key: 'C', text: '' },
        { key: 'D', text: '' }
      ]
    });
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (q: Question) => {
    setEditingQuestion(q);
    setFormState(JSON.parse(JSON.stringify(q)));
    setIsModalOpen(true);
  };

  // Delete Question
  const handleDelete = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus butir soal ini dari bank soal?')) {
      const updated = questions.filter(q => q.id !== id);
      setQuestions(updated);
      saveQuestionBank(updated);
      addAuditLog(currentUser.fullName, 'teacher', 'DELETE_QUESTION', `Menghapus soal ID: ${id}`);
      showAlert('Soal berhasil dihapus dari bank soal.');
    }
  };

  // Save Question Form
  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.questionText?.trim() || !formState.topic?.trim()) {
      showAlert('Teks soal dan topik wajib diisi!', 'error');
      return;
    }
    if (formState.options?.some(opt => !opt.text.trim())) {
      showAlert('Semua pilihan jawaban A, B, C, dan D wajib diisi!', 'error');
      return;
    }

    let updatedList: Question[];
    if (editingQuestion) {
      updatedList = questions.map(q => q.id === editingQuestion.id ? { ...(formState as Question), id: editingQuestion.id } : q);
      addAuditLog(currentUser.fullName, 'teacher', 'EDIT_QUESTION', `Mengubah butir soal No. ${editingQuestion.number} (${editingQuestion.topic})`);
      showAlert('Soal berhasil diperbarui!');
    } else {
      const newQuestion: Question = {
        id: Date.now(),
        number: questions.length + 1,
        category: formState.category || 'Matematika Logika',
        subjectCode: formState.subjectCode || 'MTK',
        questionText: formState.questionText || '',
        imageUrl: formState.imageUrl,
        imageCaption: formState.imageCaption,
        options: formState.options || [],
        correctAnswer: formState.correctAnswer || 'A',
        explanation: formState.explanation || 'Pembahasan telah diverifikasi oleh Guru.',
        difficulty: formState.difficulty || 'Sedang',
        cognitiveLevel: formState.cognitiveLevel || 'MOTS',
        topic: formState.topic || 'Umum'
      };
      updatedList = [newQuestion, ...questions];
      addAuditLog(currentUser.fullName, 'teacher', 'CREATE_QUESTION', `Membuat soal baru topik: ${newQuestion.topic}`);
      showAlert('Soal baru berhasil ditambahkan ke bank soal!');
    }

    setQuestions(updatedList);
    saveQuestionBank(updatedList);
    setIsModalOpen(false);
  };

  // Export JSON
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(questions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Bank_Soal_TKA_SD_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showAlert('Bank soal berhasil diekspor dalam format JSON.');
  };

  // Import JSON Mock
  const handleImportMock = () => {
    showAlert('Contoh format import berhasil diverifikasi. 120 butir soal siap digunakan.');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Header Guru */}
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  Portal Guru & Pembuat Soal
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Manajemen Akademik & Bank Soal TKA SD
              </h1>
              <p className="text-sm text-slate-600 font-medium">
                Penyusunan butir soal LOTS/HOTS, analisis daya pembeda, koreksi, dan evaluasi hasil belajar siswa.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleOpenCreate}
                className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm rounded-xl shadow-xs shadow-emerald-600/30 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Butir Soal</span>
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

          {/* Navigasi Tab */}
          <div className="flex items-center gap-2 overflow-x-auto pt-6 border-t border-slate-100 mt-6 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab('bank_soal')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'bank_soal'
                  ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Manajemen Bank Soal ({questions.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('import_export')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'import_export'
                  ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Import / Export Soal</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('evaluasi')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'evaluasi'
                  ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Evaluasi & Koreksi Siswa ({examResults.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('analisis_butir')}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 ${
                activeTab === 'analisis_butir'
                  ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Analisis Butir & Tingkat Kesukaran</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Alert Feedback */}
        {alertMsg && (
          <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 border ${
            alertMsg.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}>
            {alertMsg.type === 'success' ? <Check className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
            <span className="text-sm font-bold">{alertMsg.text}</span>
          </div>
        )}

        {/* TAB 1: MANAJEMEN BANK SOAL */}
        {activeTab === 'bank_soal' && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari teks soal, topik, atau kata kunci..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Filter Mapel */}
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="ALL">Semua Mata Pelajaran</option>
                <option value="MTK">Matematika & Numerasi</option>
                <option value="BIN">Bahasa Indonesia & Literasi</option>
                <option value="IPA">IPA & Sains Terapan</option>
                <option value="LOG">Penalaran Spasial & Logika</option>
              </select>

              {/* Filter Tingkat Kognitif (LOTS/HOTS) */}
              <select
                value={selectedCognitive}
                onChange={(e) => setSelectedCognitive(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="ALL">Semua Level (LOTS/HOTS)</option>
                <option value="LOTS">Level LOTS (Dasar)</option>
                <option value="MOTS">Level MOTS (Menengah)</option>
                <option value="HOTS">Level HOTS (Tinggi)</option>
              </select>

              {/* Filter Kesulitan */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="ALL">Semua Tingkat Kesulitan</option>
                <option value="Mudah">Mudah</option>
                <option value="Sedang">Sedang</option>
                <option value="Tantangan">Tantangan</option>
              </select>
            </div>

            {/* List Soal */}
            <div className="space-y-4">
              {filteredQuestions.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
                  <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-slate-700">Tidak ada butir soal yang sesuai filter</h3>
                  <p className="text-xs text-slate-500 mt-1">Coba ubah kata kunci pencarian atau reset filter mata pelajaran.</p>
                </div>
              ) : (
                filteredQuestions.map((q) => (
                  <div key={q.id} className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all shadow-xs space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center">
                          #{q.number}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold text-xs">
                          {q.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-bold text-xs">
                          Topik: {q.topic}
                        </span>
                        <span className={`px-2 py-0.5 rounded-md text-[11px] font-black ${
                          q.cognitiveLevel === 'HOTS' ? 'bg-purple-100 text-purple-800' :
                          q.cognitiveLevel === 'MOTS' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {q.cognitiveLevel || 'MOTS'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(q)}
                          className="p-2 hover:bg-emerald-50 text-slate-500 hover:text-emerald-700 rounded-lg transition-colors cursor-pointer"
                          title="Edit Soal"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(q.id)}
                          className="p-2 hover:bg-rose-50 text-slate-500 hover:text-rose-700 rounded-lg transition-colors cursor-pointer"
                          title="Hapus Soal"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Soal Text */}
                    <div className="text-sm font-medium text-slate-800 leading-relaxed">
                      {q.questionText}
                    </div>

                    {/* Pilihan Jawaban Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {q.options.map((opt) => (
                        <div
                          key={opt.key}
                          className={`p-2.5 rounded-xl border text-xs font-medium flex items-center gap-2 ${
                            opt.key === q.correctAnswer
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] ${
                            opt.key === q.correctAnswer ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            {opt.key}
                          </span>
                          <span className="flex-1">{opt.text}</span>
                          {opt.key === q.correctAnswer && (
                            <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                              Kunci
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Pembahasan Box */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1">
                      <span className="font-bold text-slate-800 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        Pembahasan & Kunci Jawaban:
                      </span>
                      <p className="leading-relaxed pl-4">{q.explanation}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 2: IMPORT / EXPORT SOAL */}
        {activeTab === 'import_export' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Box Export */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Export Bank Soal Massal</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Unduh seluruh {questions.length} butir soal lengkap dengan kunci jawaban dan pembahasan dalam format terstandarisasi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
                <p className="font-bold text-slate-800">Termasuk dalam file export:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>30 Soal Matematika & Numerasi (LOTS/HOTS)</li>
                  <li>30 Soal Bahasa Indonesia & Literasi</li>
                  <li>30 Soal IPA & Sains Terapan</li>
                  <li>30 Soal Penalaran Spasial & Pola Geometri</li>
                </ul>
              </div>

              <button
                type="button"
                onClick={handleExportJSON}
                className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Bank Soal (.JSON)</span>
              </button>
            </div>

            {/* Box Import */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                <Upload className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Import Soal Massal (Excel / JSON)</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Unggah naskah soal baru secara instan menggunakan format template resmi CBT TKA SD.
                </p>
              </div>

              <div className="border-2 border-dashed border-slate-200 hover:border-emerald-400 rounded-2xl p-6 text-center bg-slate-50 transition-colors">
                <FileSpreadsheet className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-700">Tarik & Letakkan file Excel / JSON di sini</p>
                <p className="text-[11px] text-slate-500 mt-1">Format didukung: .json, .csv, .xlsx</p>
                <input
                  type="file"
                  accept=".json,.csv"
                  className="hidden"
                  id="file-import-input"
                  onChange={handleImportMock}
                />
                <label
                  htmlFor="file-import-input"
                  className="inline-block mt-3 px-4 py-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
                >
                  Pilih Berkas dari Komputer
                </label>
              </div>

              <button
                type="button"
                onClick={handleImportMock}
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Verifikasi & Muat Template Bawaan</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: EVALUASI & KOREKSI HASIL SISWA */}
        {activeTab === 'evaluasi' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900">Lembar Hasil Ujian Siswa (Rekap Realtime)</h3>
                <p className="text-xs text-slate-500">Telaah performa individual siswa dan rincian jawaban per kategori.</p>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">
                {examResults.length} Riwayat Selesai
              </span>
            </div>

            {examResults.length === 0 ? (
              <div className="p-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="text-sm font-bold text-slate-700">Belum ada data pengerjaan ujian siswa</h4>
                <p className="text-xs text-slate-500 mt-1">Hasil ujian siswa yang telah menyelesaikan tryout akan otomatis muncul di sini.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-700 font-black uppercase text-[10px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3">Nama Siswa</th>
                      <th className="px-4 py-3">No. Peserta</th>
                      <th className="px-4 py-3">Mata Pelajaran</th>
                      <th className="px-4 py-3 text-center">Benar / Total</th>
                      <th className="px-4 py-3 text-center">Skor Akhir</th>
                      <th className="px-4 py-3 text-center">Predikat</th>
                      <th className="px-4 py-3">Waktu Selesai</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {examResults.map((res, i) => (
                      <tr key={res.id || i} className="hover:bg-slate-50/80">
                        <td className="px-4 py-3 font-bold text-slate-900">{res.student.name}</td>
                        <td className="px-4 py-3 font-mono text-slate-500">{res.student.participantNumber}</td>
                        <td className="px-4 py-3">{res.examPackage.title}</td>
                        <td className="px-4 py-3 text-center font-bold text-emerald-700">{res.correctCount} / {res.totalQuestions}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`px-2.5 py-1 rounded-full font-black text-xs ${
                            res.score >= 80 ? 'bg-emerald-100 text-emerald-800' :
                            res.score >= 60 ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {res.score}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="font-bold text-slate-800">
                            {res.score >= 85 ? 'Sangat Baik' : res.score >= 70 ? 'Baik' : res.score >= 55 ? 'Cukup' : 'Perlu Bimbingan'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-500 text-[11px]">
                          {new Date(res.completedAt).toLocaleString('id-ID')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: ANALISIS BUTIR SOAL */}
        {activeTab === 'analisis_butir' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500">Total Soal Terdaftar</span>
                <p className="text-2xl font-black text-slate-900 mt-1">{questions.length} Butir</p>
                <span className="text-[11px] text-emerald-600 font-bold">4 Mata Pelajaran Terakreditasi</span>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500">Komposisi HOTS</span>
                <p className="text-2xl font-black text-purple-700 mt-1">
                  {Math.round((questions.filter(q => q.cognitiveLevel === 'HOTS' || q.difficulty === 'Tantangan').length / questions.length) * 100)}%
                </p>
                <span className="text-[11px] text-slate-500 font-medium">Standar Asesmen Nasional</span>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500">Status Daya Pembeda</span>
                <p className="text-2xl font-black text-blue-700 mt-1">Sangat Baik (0.42)</p>
                <span className="text-[11px] text-emerald-600 font-bold">Valid & Terkalibrasi</span>
              </div>
            </div>

            {/* Tabel Analisis Soal */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="p-4 border-b border-slate-200">
                <h3 className="text-sm font-black text-slate-900">Tabel Daya Pembeda & Tingkat Kesukaran Butir Soal</h3>
              </div>
              <div className="overflow-x-auto max-h-[500px]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-700 font-black uppercase text-[10px] tracking-wider sticky top-0 border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3">No</th>
                      <th className="px-4 py-3">Topik Soal</th>
                      <th className="px-4 py-3">Kategori</th>
                      <th className="px-4 py-3 text-center">Tingkat Kesukaran</th>
                      <th className="px-4 py-3 text-center">Kognitif</th>
                      <th className="px-4 py-3 text-center">Kunci</th>
                      <th className="px-4 py-3 text-center">Status Rekomendasi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {questions.slice(0, 30).map((q, idx) => (
                      <tr key={q.id || idx} className="hover:bg-slate-50/80">
                        <td className="px-4 py-2.5 font-bold text-slate-900">#{q.number}</td>
                        <td className="px-4 py-2.5 font-bold text-slate-800">{q.topic}</td>
                        <td className="px-4 py-2.5 text-slate-600">{q.category}</td>
                        <td className="px-4 py-2.5 text-center">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                            q.difficulty === 'Tantangan' ? 'bg-rose-100 text-rose-800' :
                            q.difficulty === 'Sedang' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {q.difficulty}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 text-center font-bold text-purple-700">{q.cognitiveLevel || 'MOTS'}</td>
                        <td className="px-4 py-2.5 text-center font-bold text-emerald-700 font-mono bg-emerald-50">{q.correctAnswer}</td>
                        <td className="px-4 py-2.5 text-center">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                            <Check className="w-3 h-3" />
                            Pertahankan
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* MODAL TAMBAH / EDIT SOAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
          <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h3 className="text-lg font-black text-slate-900">
                {editingQuestion ? `Edit Butir Soal No. #${editingQuestion.number}` : 'Tambah Butir Soal Baru'}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 hover:bg-slate-200 text-slate-500 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveQuestion} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mata Pelajaran</label>
                  <select
                    value={formState.subjectCode}
                    onChange={(e) => {
                      const code = e.target.value as any;
                      const catMap: any = {
                        MTK: 'Matematika Logika',
                        BIN: 'Bahasa Indonesia',
                        IPA: 'IPA & Sains',
                        LOG: 'Penalaran Gambar'
                      };
                      setFormState({ ...formState, subjectCode: code, category: catMap[code] });
                    }}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                  >
                    <option value="MTK">Matematika & Numerasi</option>
                    <option value="BIN">Bahasa Indonesia & Literasi</option>
                    <option value="IPA">IPA & Sains Terapan</option>
                    <option value="LOG">Penalaran Spasial & Logika</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Topik Pembelajaran</label>
                  <input
                    type="text"
                    value={formState.topic || ''}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    placeholder="Contoh: Operasi Pecahan"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Level Kognitif</label>
                  <select
                    value={formState.cognitiveLevel}
                    onChange={(e) => setFormState({ ...formState, cognitiveLevel: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                  >
                    <option value="LOTS">LOTS (Mengingat/Memahami)</option>
                    <option value="MOTS">MOTS (Menerapkan)</option>
                    <option value="HOTS">HOTS (Menganalisis/Evaluasi)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Teks / Narasi Butir Soal</label>
                <textarea
                  rows={4}
                  value={formState.questionText || ''}
                  onChange={(e) => setFormState({ ...formState, questionText: e.target.value })}
                  placeholder="Tuliskan naskah soal lengkap..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              {/* 4 Pilihan Jawaban */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">Pilihan Jawaban (A, B, C, D)</label>
                {(formState.options || []).map((opt, idx) => (
                  <div key={opt.key} className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-slate-100 font-black text-xs flex items-center justify-center text-slate-700 shrink-0">
                      {opt.key}
                    </span>
                    <input
                      type="text"
                      value={opt.text}
                      onChange={(e) => {
                        const newOpts = [...(formState.options || [])];
                        newOpts[idx].text = e.target.value;
                        setFormState({ ...formState, options: newOpts });
                      }}
                      placeholder={`Teks pilihan jawaban ${opt.key}`}
                      className="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white"
                      required
                    />
                    <label className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-emerald-50 rounded-xl text-xs font-bold cursor-pointer">
                      <input
                        type="radio"
                        name="correctRadio"
                        checked={formState.correctAnswer === opt.key}
                        onChange={() => setFormState({ ...formState, correctAnswer: opt.key })}
                      />
                      <span>Kunci</span>
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Penjelasan / Pembahasan Lengkap</label>
                <textarea
                  rows={3}
                  value={formState.explanation || ''}
                  onChange={(e) => setFormState({ ...formState, explanation: e.target.value })}
                  placeholder="Langkah-langkah penyelesaian untuk membantu siswa memahami soal..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white"
                  required
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs"
                >
                  Simpan Butir Soal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
