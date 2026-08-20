import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ExamFinalResult, 
  Question 
} from '../types/quiz';
import { 
  Trophy, 
  Award, 
  CheckCircle, 
  XCircle, 
  MinusCircle, 
  RotateCcw, 
  Printer, 
  Sparkles, 
  Clock, 
  User, 
  School, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  BookOpen, 
  Flame, 
  Target, 
  HeartHandshake 
} from 'lucide-react';

interface ResultScreenProps {
  result: ExamFinalResult;
  onRestart: () => void;
  onOpenDbModal: () => void;
  onBackToLogin?: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  result,
  onRestart,
  onOpenDbModal,
  onBackToLogin
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'correct'>('all');
  const [expandedExplanation, setExpandedExplanation] = useState<Record<number, boolean>>({});

  // Trigger confetti for student celebration
  useEffect(() => {
    if (result.score >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback silently if confetti is unavailable
      }
    }
  }, [result.score]);

  const toggleExpand = (qId: number) => {
    setExpandedExplanation(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  // Predikat Motivasi Siswa SD
  const getMotivationalFeedback = (score: number) => {
    if (score >= 90) {
      return {
        badge: '🏆 Bintang Emas Berprestasi',
        title: 'Luar Biasa, Prestasi Sempurna!',
        color: 'from-amber-500 to-yellow-500 text-white',
        bgColor: 'bg-amber-50 border-amber-200 text-amber-900',
        message: 'Hebat sekali! Pemahaman konsep dan daya analisismu sangat tajam. Pertahankan semangat belajarmu untuk terus berprestasi di tingkat kecamatan!'
      };
    } else if (score >= 75) {
      return {
        badge: '🌟 Bintang Perak Sangat Baik',
        title: 'Keren Banget, Hasil Sangat Baik!',
        color: 'from-blue-600 to-cyan-600 text-white',
        bgColor: 'bg-blue-50 border-blue-200 text-blue-900',
        message: 'Kerja keras yang membanggakan! Kamu sudah menguasai sebagian besar materi dengan sangat baik. Pelajari sedikit materi yang masih keliru agar semakin mantap!'
      };
    } else if (score >= 60) {
      return {
        badge: '🌱 Bintang Perunggu Terus Maju',
        title: 'Bagus, Kamu Sudah Berjuang Keras!',
        color: 'from-emerald-600 to-teal-600 text-white',
        bgColor: 'bg-emerald-50 border-emerald-200 text-emerald-900',
        message: 'Usaha yang baik! Perbanyak latihan soal matematika logika dan literasi bacaan secara rutin. Kamu pasti bisa meraih nilai yang lebih tinggi lagi!'
      };
    } else {
      return {
        badge: '💪 Semangat Juang Pantang Menyerah',
        title: 'Tetap Semangat, Jangan Putus Asa!',
        color: 'from-purple-600 to-pink-600 text-white',
        bgColor: 'bg-purple-50 border-purple-200 text-purple-900',
        message: 'Kegagalan adalah tangga menuju keberhasilan. Cermati pembahasan soal di bawah ini dan diskusikan dengan bapak/ibu guru untuk memahami materinya ya!'
      };
    }
  };

  const feedback = getMotivationalFeedback(result.score);

  // Filter list pembahasan
  const filteredQuestions = result.questionResults.filter(item => {
    if (filterMode === 'correct') return item.isCorrect;
    if (filterMode === 'wrong') return !item.isCorrect;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      
      {/* 1. Header Ringkasan & Skor Utama */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        
        {/* Top Print Title */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="text-center sm:text-left">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-bold mb-2">
              LAPORAN HASIL TRYOUT RESMI
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Nunito',sans-serif]">
              {result.examPackage.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Diselesaikan pada {new Date(result.completedAt).toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' })}
            </p>
          </div>

          {/* Action Print / Retry / Switch Buttons */}
          <div className="flex flex-wrap items-center gap-2 no-print">
            {onBackToLogin && (
              <button
                type="button"
                id="btn-switch-subject"
                onClick={onBackToLogin}
                className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ganti Mapel Lain</span>
              </button>
            )}

            <button
              type="button"
              id="btn-print-result"
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>

            <button
              type="button"
              id="btn-restart-exam"
              onClick={onRestart}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Ujian</span>
            </button>
          </div>
        </div>

        {/* Identitas Siswa Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Nama Siswa</p>
              <p className="text-sm font-extrabold text-slate-800 truncate">{result.student.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <School className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Asal Sekolah</p>
              <p className="text-sm font-extrabold text-slate-800 truncate">{result.student.schoolName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">No. Peserta / Durasi</p>
              <p className="text-sm font-extrabold text-slate-800 font-mono">{result.student.participantNumber} • {result.timeSpentFormatted}</p>
            </div>
          </div>
        </div>

        {/* Skor Utama & Badge Apresiasi */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Nilai Raksasa */}
          <div className="md:col-span-5 text-center p-6 bg-gradient-to-b from-blue-50/80 to-indigo-50/40 rounded-3xl border border-blue-200/80 shadow-2xs">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 block mb-1">
              SKOR AKHIR TKA
            </span>
            <div className="text-5xl sm:text-6xl font-black text-slate-900 font-mono tracking-tight my-2">
              {result.score}
              <span className="text-xl sm:text-2xl text-slate-400 font-sans font-bold">/100</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-blue-200 rounded-full text-xs font-extrabold text-blue-800 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{feedback.badge}</span>
            </div>
          </div>

          {/* Pesan Motivasi Edukatif */}
          <div className="md:col-span-7 space-y-3">
            <div className={`p-4 rounded-2xl border ${feedback.bgColor} space-y-1.5`}>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 shrink-0" />
                <h3 className="font-extrabold text-sm sm:text-base font-['Nunito',sans-serif]">
                  {feedback.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                {feedback.message}
              </p>
            </div>

            {/* Kotak Statistik Benar - Salah - Kosong */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl">
                <div className="flex items-center justify-center gap-1 text-emerald-700 font-bold text-xs mb-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Benar</span>
                </div>
                <span className="text-2xl font-black text-emerald-800 font-mono">
                  {result.correctCount}
                </span>
                <span className="text-[10px] text-emerald-600 block">Soal</span>
              </div>

              <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl">
                <div className="flex items-center justify-center gap-1 text-rose-700 font-bold text-xs mb-1">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Salah</span>
                </div>
                <span className="text-2xl font-black text-rose-800 font-mono">
                  {result.wrongCount}
                </span>
                <span className="text-[10px] text-rose-600 block">Soal</span>
              </div>

              <div className="p-3 bg-slate-100 border border-slate-200 rounded-2xl">
                <div className="flex items-center justify-center gap-1 text-slate-600 font-bold text-xs mb-1">
                  <MinusCircle className="w-3.5 h-3.5" />
                  <span>Kosong</span>
                </div>
                <span className="text-2xl font-black text-slate-800 font-mono">
                  {result.unansweredCount}
                </span>
                <span className="text-[10px] text-slate-500 block">Soal</span>
              </div>
            </div>

          </div>

        </div>

        {/* 2. Capaian per Bidang Studi / Kategori */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-blue-600" />
            <span>Analisis Penguasaan Materi Berdasarkan Kategori Soal:</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {result.categoryBreakdown.map((cat, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 truncate">{cat.category}</span>
                  <span className="text-xs font-black text-blue-600 font-mono">{cat.percentage}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full rounded-full transition-all duration-700"
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-500">
                  Benar: <strong>{cat.correct}</strong> dari {cat.total} butir soal
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. Kunci Jawaban & Pembahasan Lengkap */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900 font-['Nunito',sans-serif]">
                Kunci Jawaban & Pembahasan Lengkap
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Pelajari langkah penyelesaian dan analisis setiap nomor soal untuk memperdalam pemahamanmu
            </p>
          </div>

          {/* Filter Tab: Semua / Salah / Benar */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 no-print">
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filterMode === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua ({result.questionResults.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('wrong')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filterMode === 'wrong' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Salah ({result.wrongCount})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('correct')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filterMode === 'correct' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Benar ({result.correctCount})
            </button>
          </div>
        </div>

        {/* List Soal & Penjelasannya */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-sm">
              Tidak ada soal pada kategori filter ini.
            </div>
          ) : (
            filteredQuestions.map(({ question, userAnswer, userAnswersComplex, userMatrixAnswers, isCorrect, isDoubtful }) => {
              const isExpanded = expandedExplanation[question.id] ?? true; // Default expanded
              const qType = question.questionType || 'single';

              return (
                <div 
                  key={question.id}
                  className={`rounded-2xl border-2 transition-all p-5 sm:p-6 space-y-4 ${
                    isCorrect 
                      ? 'bg-white border-emerald-200 shadow-2xs' 
                      : 'bg-white border-rose-200 shadow-2xs'
                  }`}
                >
                  {/* Question Header & Status Indicator */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-xl font-bold text-sm flex items-center justify-center font-mono ${
                        isCorrect 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-rose-600 text-white'
                      }`}>
                        {question.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-700">
                            {question.category}
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium">
                            • {question.topic}
                          </span>
                          {qType === 'complex_multiple' && (
                            <span className="text-[10px] bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded font-bold">
                              PG Kompleks
                            </span>
                          )}
                          {qType === 'matrix' && (
                            <span className="text-[10px] bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded font-bold">
                              Matriks Kategori
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          {isCorrect ? (
                            <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                              <CheckCircle className="w-3.5 h-3.5" /> Jawaban Anda Tepat (+1)
                            </span>
                          ) : (
                            <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                              <XCircle className="w-3.5 h-3.5" /> Jawaban Anda Belum Tepat
                            </span>
                          )}
                          {isDoubtful && (
                            <span className="text-[10px] px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded font-bold">
                              Ragu-Ragu
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleExpand(question.id)}
                      className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer no-print"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Teks Soal & Gambar */}
                  {isExpanded && (
                    <div className="space-y-4 pt-2 border-t border-slate-100">
                      
                      {/* Stimulus jika ada */}
                      {question.stimulus && (
                        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                          <span className="font-bold text-indigo-700 block">
                            📖 {question.stimulus.title}
                          </span>
                          {question.stimulus.text && (
                            <p className="text-slate-600 whitespace-pre-line leading-relaxed">{question.stimulus.text}</p>
                          )}
                          {question.stimulus.imageUrl && (
                            <div className="max-w-md mx-auto my-2 rounded-xl overflow-hidden border border-slate-200 bg-white p-1">
                              <img
                                src={question.stimulus.imageUrl}
                                alt={question.stimulus.title}
                                referrerPolicy="no-referrer"
                                className="w-full max-h-48 object-contain"
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {question.imageUrl && (
                        <div className="max-w-md mx-auto my-2 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                          <img
                            src={question.imageUrl}
                            alt={`Ilustrasi Soal ${question.number}`}
                            referrerPolicy="no-referrer"
                            className="w-full max-h-48 object-contain"
                          />
                        </div>
                      )}

                      <div className="text-slate-800 text-sm sm:text-base font-medium whitespace-pre-line leading-relaxed">
                        {question.questionText}
                      </div>

                      {/* Komparasi Opsi: 1. Pilihan Ganda Sederhana */}
                      {qType === 'single' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                          {question.options.map((opt) => {
                            const isKeyCorrect = opt.key === question.correctAnswer;
                            const isKeyChosen = opt.key === userAnswer;

                            let itemStyle = 'bg-slate-50 border-slate-200 text-slate-700';
                            if (isKeyCorrect) {
                              itemStyle = 'bg-emerald-50/90 border-emerald-300 text-emerald-900 font-bold';
                            } else if (isKeyChosen && !isKeyCorrect) {
                              itemStyle = 'bg-rose-50/90 border-rose-300 text-rose-900 line-through opacity-80';
                            }

                            return (
                              <div
                                key={opt.key}
                                className={`p-2.5 rounded-xl border flex items-center gap-2.5 ${itemStyle}`}
                              >
                                <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center font-mono ${
                                  isKeyCorrect 
                                    ? 'bg-emerald-600 text-white' 
                                    : isKeyChosen 
                                      ? 'bg-rose-600 text-white' 
                                      : 'bg-slate-200 text-slate-700'
                                }`}>
                                  {opt.key}
                                </span>
                                <span className="flex-1">{opt.text}</span>
                                {isKeyCorrect && (
                                  <span className="text-[10px] bg-emerald-200/80 text-emerald-900 px-1.5 py-0.5 rounded font-black">
                                    Kunci Benar
                                  </span>
                                )}
                                {isKeyChosen && !isKeyCorrect && (
                                  <span className="text-[10px] bg-rose-200/80 text-rose-900 px-1.5 py-0.5 rounded font-bold">
                                    Pilihan Anda
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Komparasi Opsi: 2. Pilihan Ganda Kompleks (Multi Choice) */}
                      {qType === 'complex_multiple' && (
                        <div className="space-y-2">
                          <span className="text-xs font-bold text-purple-900 block">Kombinasi Pilihan Siswa vs Kunci:</span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                            {question.options.map((opt) => {
                              const isKeyCorrect = question.correctMultipleAnswers?.includes(opt.key);
                              const isKeyChosen = userAnswersComplex?.includes(opt.key);

                              let itemStyle = 'bg-slate-50 border-slate-200 text-slate-700';
                              if (isKeyCorrect && isKeyChosen) {
                                itemStyle = 'bg-emerald-50/90 border-emerald-300 text-emerald-900 font-bold';
                              } else if (isKeyCorrect && !isKeyChosen) {
                                itemStyle = 'bg-amber-50/90 border-amber-300 text-amber-900 font-semibold';
                              } else if (!isKeyCorrect && isKeyChosen) {
                                itemStyle = 'bg-rose-50/90 border-rose-300 text-rose-900 line-through opacity-80';
                              }

                              return (
                                <div
                                  key={opt.key}
                                  className={`p-2.5 rounded-xl border flex items-center gap-2.5 ${itemStyle}`}
                                >
                                  <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center font-mono ${
                                    isKeyCorrect 
                                      ? 'bg-emerald-600 text-white' 
                                      : isKeyChosen 
                                        ? 'bg-rose-600 text-white' 
                                        : 'bg-slate-200 text-slate-700'
                                  }`}>
                                    {opt.key}
                                  </span>
                                  <span className="flex-1">{opt.text}</span>
                                  {isKeyCorrect && (
                                    <span className="text-[10px] bg-emerald-200/80 text-emerald-900 px-1.5 py-0.5 rounded font-black">
                                      Kunci Benar
                                    </span>
                                  )}
                                  {isKeyChosen && (
                                    <span className="text-[10px] bg-purple-200/80 text-purple-900 px-1.5 py-0.5 rounded font-bold">
                                      Anda Pilih
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Komparasi Opsi: 3. Matriks Kategori (Tabel Benar / Salah) */}
                      {qType === 'matrix' && question.matrixConfig && (
                        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                          <table className="w-full text-xs text-left">
                            <thead className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                              <tr>
                                <th className="p-2.5">Pernyataan</th>
                                <th className="p-2.5 text-center">Pilihan Siswa</th>
                                <th className="p-2.5 text-center">Kunci Jawaban</th>
                                <th className="p-2.5 text-center">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {question.matrixConfig.rows.map((rowText, rIdx) => {
                                const userChoice = userMatrixAnswers?.[rIdx] || 'Belum Diisi';
                                const correctChoice = question.correctMatrixAnswers?.[rIdx] || '';
                                const isRowCorrect = userChoice === correctChoice;

                                return (
                                  <tr key={rIdx} className={isRowCorrect ? 'bg-emerald-50/30' : 'bg-rose-50/30'}>
                                    <td className="p-2.5 text-slate-800 font-medium">{rowText}</td>
                                    <td className="p-2.5 text-center font-bold font-mono">
                                      <span className={`px-2 py-0.5 rounded ${
                                        isRowCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                      }`}>
                                        {userChoice}
                                      </span>
                                    </td>
                                    <td className="p-2.5 text-center font-bold text-emerald-700 font-mono">
                                      {correctChoice}
                                    </td>
                                    <td className="p-2.5 text-center">
                                      {isRowCorrect ? (
                                        <span className="text-emerald-700 font-bold">✓ Tepat</span>
                                      ) : (
                                        <span className="text-rose-600 font-bold">✗ Salah</span>
                                      )}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Penjelasan Edukatif Box */}
                      <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-1.5 text-xs sm:text-sm">
                        <div className="flex items-center gap-2 font-bold text-blue-900">
                          <Sparkles className="w-4 h-4 text-blue-600" />
                          <span>Pembahasan & Langkah Penyelesaian:</span>
                        </div>
                        <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                          {question.explanation}
                        </p>
                      </div>

                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>
      </div>

    </div>
  );
};
