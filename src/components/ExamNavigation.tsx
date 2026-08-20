import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

interface ExamNavigationProps {
  currentIndex: number;
  totalQuestions: number;
  isDoubtful: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleDoubtful: () => void;
  onConfirmFinish: () => void;
}

export const ExamNavigation: React.FC<ExamNavigationProps> = ({
  currentIndex,
  totalQuestions,
  isDoubtful,
  onPrev,
  onNext,
  onToggleDoubtful,
  onConfirmFinish
}) => {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalQuestions - 1;

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Tombol Sebelumnya */}
        <button
          type="button"
          id="btn-nav-prev"
          disabled={isFirst}
          onClick={onPrev}
          className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
            isFirst
              ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700 active:scale-95 shadow-2xs'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </button>

        {/* Tombol Ragu-Ragu (Tengah) */}
        <button
          type="button"
          id="btn-nav-doubtful"
          onClick={onToggleDoubtful}
          className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 border-2 transition-all cursor-pointer shadow-xs ${
            isDoubtful
              ? 'bg-amber-400 border-amber-500 text-amber-950 ring-2 ring-amber-400/30'
              : 'bg-amber-50/70 hover:bg-amber-100/70 border-amber-300 text-amber-900'
          }`}
        >
          <AlertTriangle className={`w-4 h-4 ${isDoubtful ? 'text-amber-950 fill-amber-950/20' : 'text-amber-700'}`} />
          <span>{isDoubtful ? 'Tandai: Ragu-Ragu Aktif' : 'Ragu-Ragu'}</span>
        </button>

        {/* Tombol Selanjutnya / Selesai */}
        {isLast ? (
          <button
            type="button"
            id="btn-nav-finish"
            onClick={onConfirmFinish}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Selesai Ujian</span>
          </button>
        ) : (
          <button
            type="button"
            id="btn-nav-next"
            onClick={onNext}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            <span>Selanjutnya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}

      </div>
    </div>
  );
};
