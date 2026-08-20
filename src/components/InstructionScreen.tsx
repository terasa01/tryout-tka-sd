import React, { useState } from 'react';
import { 
  Student, 
  ExamPackage 
} from '../types/quiz';
import { 
  Clock, 
  FileText, 
  CheckSquare, 
  AlertTriangle, 
  PlayCircle, 
  ArrowLeft, 
  User, 
  School, 
  Award,
  Sparkles
} from 'lucide-react';

interface InstructionScreenProps {
  student: Student;
  examPackage: ExamPackage;
  totalQuestions: number;
  onStartExam: () => void;
  onBackToLogin: () => void;
}

export const InstructionScreen: React.FC<InstructionScreenProps> = ({
  student,
  examPackage,
  totalQuestions,
  onStartExam,
  onBackToLogin
}) => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleStartExamWithFullscreen = () => {
    // 1. Otomatis Beralih ke Mode Full Screen saat Mulai Ujian (Standar Nasional CBT)
    try {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
      } else if ((docEl as any).webkitRequestFullscreen) {
        (docEl as any).webkitRequestFullscreen();
      } else if ((docEl as any).msRequestFullscreen) {
        (docEl as any).msRequestFullscreen();
      }
    } catch (err) {
      console.warn('Layar penuh otomatis dicegah peramban:', err);
    }

    onStartExam();
  };

  return (
    <div className="min-h-[calc(100vh-65px)] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-50/60">
      <div className="w-full max-w-3xl space-y-6">
        
        {/* Header Section */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded-full text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>KONFIRMASI PETUNJUK PESERTA</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Nunito',sans-serif]">
                {examPackage.title}
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                {examPackage.subtitle}
              </p>
            </div>
            
            <div className="flex sm:flex-col items-center sm:items-end justify-between bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
              <span className="text-xs text-slate-500 font-medium">Waktu Ujian</span>
              <div className="flex items-center gap-1.5 text-blue-700 font-bold text-lg font-mono">
                <Clock className="w-4 h-4" />
                <span>{examPackage.durationMinutes} Menit</span>
              </div>
            </div>
          </div>

          {/* Student Info Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 p-4 bg-blue-50/60 border border-blue-100 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <User className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Nama Peserta</p>
                <p className="text-sm font-extrabold text-slate-900 truncate">{student.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <School className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Asal Sekolah</p>
                <p className="text-sm font-extrabold text-slate-900 truncate">{student.schoolName}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">No. Peserta / Soal</p>
                <p className="text-sm font-extrabold text-slate-900 font-mono">{student.participantNumber} • {totalQuestions} Soal</p>
              </div>
            </div>
          </div>

          {/* Tata Tertib & Petunjuk Pengerjaan */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wide">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Petunjuk & Tata Tertib Pengerjaan:</span>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
              {examPackage.instructionSummary.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white border border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
              <div className="flex items-start gap-2.5 text-indigo-700 font-semibold pt-1">
                <span className="w-5 h-5 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ★
                </span>
                <p className="leading-relaxed">
                  <strong>Mode Layar Penuh (Full Screen):</strong> Sesuai standar ujian CBT nasional, layar akan otomatis beralih ke mode layar penuh saat Anda menekan tombol mulai. Dilarang menutup atau berpindah aplikasi lain.
                </p>
              </div>
            </div>
          </div>

          {/* Warning Notice */}
          <div className="mt-5 p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Perhatian:</strong> Pastikan koneksi stabil. Begitu tombol <strong>"Mulai Kerjakan Ujian Sekarang"</strong> diklik, penghitung waktu mundur akan langsung berjalan dalam mode layar penuh.
            </p>
          </div>

          {/* Agreement Checkbox */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <label className="flex items-start gap-3 cursor-pointer select-none group">
              <input
                id="checkbox-agreement"
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
              />
              <span className="text-xs sm:text-sm text-slate-700 font-medium group-hover:text-slate-900">
                Saya menyatakan telah membaca dan bersedia mematuhi seluruh petunjuk di atas secara jujur dan mandiri.
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              id="btn-back-login"
              onClick={onBackToLogin}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ganti Biodata Siswa</span>
            </button>

            <button
              type="button"
              id="btn-start-exam"
              disabled={!isAgreed}
              onClick={handleStartExamWithFullscreen}
              className={`w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
                isAgreed
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/20 active:scale-[0.99]'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
            >
              <PlayCircle className="w-5 h-5" />
              <span>Mulai Kerjakan Ujian Sekarang (Full Screen)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
