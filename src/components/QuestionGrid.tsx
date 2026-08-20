import React from 'react';
import { 
  Question, 
  UserAnswerState 
} from '../types/quiz';
import { 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Send,
  X
} from 'lucide-react';

interface QuestionGridProps {
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<number, UserAnswerState>;
  onSelectIndex: (index: number) => void;
  onConfirmFinish: () => void;
  onCloseMobileDrawer?: () => void;
  isMobileDrawer?: boolean;
}

export const QuestionGrid: React.FC<QuestionGridProps> = ({
  questions,
  currentIndex,
  userAnswers,
  onSelectIndex,
  onConfirmFinish,
  onCloseMobileDrawer,
  isMobileDrawer = false
}) => {
  // Helper cek apakah suatu soal sudah dijawab
  const isQuestionAnswered = (q: Question, ans: UserAnswerState | undefined): boolean => {
    if (!ans) return false;
    const type = q.questionType || 'single';
    if (type === 'single') return !!ans.selectedOption;
    if (type === 'complex_multiple') return !!(ans.selectedOptions && ans.selectedOptions.length > 0);
    if (type === 'matrix') return !!(ans.matrixAnswers && Object.keys(ans.matrixAnswers).length > 0);
    return !!ans.selectedOption;
  };

  // Helper render preview teks jawaban di kotak nomor
  const getAnswerPreviewText = (q: Question, ans: UserAnswerState | undefined): string => {
    if (!ans) return '';
    const type = q.questionType || 'single';
    if (type === 'single') return ans.selectedOption || '';
    if (type === 'complex_multiple') return ans.selectedOptions ? ans.selectedOptions.join(',') : '';
    if (type === 'matrix') {
      const count = ans.matrixAnswers ? Object.keys(ans.matrixAnswers).length : 0;
      return `${count} baris`;
    }
    return ans.selectedOption || '';
  };

  // Hitung jumlah status
  let answeredCount = 0;
  let doubtfulCount = 0;
  let unansweredCount = 0;

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    const hasAns = isQuestionAnswered(q, ans);

    if (ans?.isDoubtful) {
      doubtfulCount++;
    } else if (hasAns) {
      answeredCount++;
    } else {
      unansweredCount++;
    }
  });

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col h-full">
      {/* Header Panel */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
        <div>
          <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider font-['Nunito',sans-serif]">
            Panel Nomor Soal
          </h2>
          <p className="text-[11px] text-slate-500">
            Total {questions.length} Butir Soal
          </p>
        </div>

        {isMobileDrawer && onCloseMobileDrawer && (
          <button
            type="button"
            onClick={onCloseMobileDrawer}
            className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Grid Nomor Soal */}
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5 my-2 overflow-y-auto max-h-[360px] p-1">
        {questions.map((q, index) => {
          const ans = userAnswers[q.id];
          const isActive = currentIndex === index;
          const isDoubtful = ans?.isDoubtful;
          const hasAnswered = isQuestionAnswered(q, ans);
          const previewText = getAnswerPreviewText(q, ans);

          // Hitung warna kotak sesuai status
          let stateStyle = 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200';
          if (isDoubtful) {
            stateStyle = 'bg-amber-400 text-amber-950 font-black border border-amber-500 shadow-xs';
          } else if (hasAnswered) {
            stateStyle = 'bg-emerald-600 text-white font-bold shadow-xs hover:bg-emerald-700';
          }

          return (
            <button
              key={q.id}
              type="button"
              id={`btn-grid-question-${q.number}`}
              onClick={() => {
                onSelectIndex(index);
                if (isMobileDrawer && onCloseMobileDrawer) {
                  onCloseMobileDrawer();
                }
              }}
              className={`h-12 rounded-xl flex flex-col items-center justify-center relative transition-all cursor-pointer select-none ${stateStyle} ${
                isActive 
                  ? 'ring-3 ring-blue-500 ring-offset-2 scale-105 z-10' 
                  : 'hover:scale-[1.02]'
              }`}
            >
              <span className="text-xs font-mono font-bold leading-none">
                {q.number}
              </span>
              
              {/* Option preview badge jika sudah dijawab */}
              {hasAnswered && previewText && (
                <span className={`text-[9px] font-black uppercase mt-0.5 px-1 rounded truncate max-w-[90%] ${
                  isDoubtful 
                    ? 'bg-amber-200 text-amber-900' 
                    : 'bg-emerald-700/80 text-emerald-100'
                }`}>
                  {previewText}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Keterangan Warna / Status Legend */}
      <div className="mt-auto pt-4 border-t border-slate-100 space-y-2 text-xs">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
          Keterangan Status Soal:
        </span>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-md bg-emerald-600 shrink-0" />
            <span className="text-slate-600 text-[11px]">Dijawab ({answeredCount})</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-md bg-amber-400 border border-amber-500 shrink-0" />
            <span className="text-slate-600 text-[11px]">Ragu ({doubtfulCount})</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-md bg-slate-100 border border-slate-300 shrink-0" />
            <span className="text-slate-600 text-[11px]">Kosong ({unansweredCount})</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-md bg-white border-2 border-blue-500 shrink-0" />
            <span className="text-slate-600 text-[11px]">Aktif</span>
          </div>
        </div>

        {/* Tombol Selesai Ujian Langsung */}
        <div className="pt-3">
          <button
            type="button"
            id="btn-grid-finish"
            onClick={onConfirmFinish}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Kirim & Selesai Ujian</span>
          </button>
        </div>
      </div>

    </div>
  );
};
