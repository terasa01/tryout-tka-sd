import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  X, 
  ArrowLeft, 
  Send 
} from 'lucide-react';
import { Question, UserAnswerState } from '../types/quiz';

interface ConfirmFinishModalProps {
  isOpen: boolean;
  questions: Question[];
  userAnswers: Record<number, UserAnswerState>;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ConfirmFinishModal: React.FC<ConfirmFinishModalProps> = ({
  isOpen,
  questions,
  userAnswers,
  onCancel,
  onConfirm
}) => {
  if (!isOpen) return null;

  let answeredCount = 0;
  let doubtfulCount = 0;
  let unansweredCount = 0;

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (ans?.isDoubtful) {
      doubtfulCount++;
    } else if (ans?.selectedOption) {
      answeredCount++;
    } else {
      unansweredCount++;
    }
  });

  const hasIncomplete = unansweredCount > 0 || doubtfulCount > 0;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg font-['Nunito',sans-serif]">
            {hasIncomplete ? (
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            )}
            <span>Konfirmasi Selesai Ujian</span>
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Count Boxes */}
        <div className="my-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-600">
            Apakah Anda yakin ingin mengakhiri sesi ujian ini? Setelah dikonfirmasi, Anda tidak dapat mengubah jawaban lagi.
          </p>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl">
              <span className="block text-xl sm:text-2xl font-black text-emerald-700 font-mono">
                {answeredCount}
              </span>
              <span className="text-[11px] font-bold text-emerald-800">
                Sudah Yakin
              </span>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl">
              <span className="block text-xl sm:text-2xl font-black text-amber-700 font-mono">
                {doubtfulCount}
              </span>
              <span className="text-[11px] font-bold text-amber-800">
                Ragu-Ragu
              </span>
            </div>

            <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl">
              <span className="block text-xl sm:text-2xl font-black text-rose-700 font-mono">
                {unansweredCount}
              </span>
              <span className="text-[11px] font-bold text-rose-800">
                Belum Dijawab
              </span>
            </div>
          </div>

          {hasIncomplete && (
            <div className="p-3 bg-amber-50/90 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Catatan:</strong> Masih terdapat <strong>{unansweredCount} soal kosong</strong> dan <strong>{doubtfulCount} soal ragu-ragu</strong>. Sebaiknya periksa kembali jika waktu masih mencukupi.
              </span>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            type="button"
            id="btn-cancel-finish"
            onClick={onCancel}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Periksa Soal Lagi</span>
          </button>

          <button
            type="button"
            id="btn-confirm-submit"
            onClick={onConfirm}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 active:scale-95 cursor-pointer transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Ya, Selesaikan & Lihat Nilai</span>
          </button>
        </div>
      </div>
    </div>
  );
};
