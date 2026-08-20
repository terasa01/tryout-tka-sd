import React, { useEffect, useState } from 'react';
import { 
  Student, 
  ExamPackage, 
  FontSizeOption 
} from '../types/quiz';
import { 
  Clock, 
  LayoutGrid, 
  Type, 
  AlertCircle,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface ExamHeaderProps {
  student: Student;
  examPackage: ExamPackage;
  timeRemainingSeconds: number;
  totalDurationSeconds: number;
  fontSize: FontSizeOption;
  onChangeFontSize: (size: FontSizeOption) => void;
  onToggleDrawer: () => void;
  answeredCount: number;
  totalQuestions: number;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  student,
  examPackage,
  timeRemainingSeconds,
  totalDurationSeconds,
  fontSize,
  onChangeFontSize,
  onToggleDrawer,
  answeredCount,
  totalQuestions
}) => {
  // Status Layar Penuh
  const [isFullscreen, setIsFullscreen] = useState<boolean>(() => {
    return !!(
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).mozFullScreenElement ||
      (document as any).msFullscreenElement
    );
  });

  useEffect(() => {
    const handleFullscreenChange = () => {
      const active = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );
      setIsFullscreen(active);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    try {
      if (!isFullscreen) {
        const docEl = document.documentElement;
        if (docEl.requestFullscreen) {
          docEl.requestFullscreen().catch(() => {});
        } else if ((docEl as any).webkitRequestFullscreen) {
          (docEl as any).webkitRequestFullscreen();
        } else if ((docEl as any).msRequestFullscreen) {
          (docEl as any).msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        }
      }
    } catch (e) {
      console.warn('Gagal mengubah mode layar penuh:', e);
    }
  };

  // Format MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeRemainingSeconds <= 300; // Kurang dari 5 menit
  const isCriticalTime = timeRemainingSeconds <= 60; // Kurang dari 1 menit
  const progressPercent = Math.max(0, Math.min(100, (timeRemainingSeconds / totalDurationSeconds) * 100));

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-xs">
      {/* Top Thin Progress Bar of Exam Time */}
      <div className="w-full h-1.5 bg-slate-100 overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ${
            isCriticalTime 
              ? 'bg-rose-500 animate-pulse' 
              : isLowTime 
                ? 'bg-amber-500' 
                : 'bg-blue-600'
          }`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Student & Exam Meta */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
            SD
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base text-slate-900 truncate max-w-[160px] sm:max-w-xs font-['Nunito',sans-serif]">
                {student.name}
              </span>
              <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-bold bg-slate-100 text-slate-700 rounded-md font-mono border border-slate-200">
                {student.participantNumber}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 truncate max-w-[200px] sm:max-w-md">
              {student.schoolName} • {examPackage.title}
            </p>
          </div>
        </div>

        {/* Right: Controls & Timer */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Fullscreen Button Indicator (Standar CBT Nasional) */}
          <button
            type="button"
            id="btn-toggle-fullscreen"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Layar Penuh Aktif (Klik untuk ubah)' : 'Aktifkan Mode Layar Penuh (Standar CBT)'}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              isFullscreen
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100 animate-pulse'
            }`}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-emerald-600" /> : <Maximize2 className="w-3.5 h-3.5 text-amber-600" />}
            <span className="hidden lg:inline">{isFullscreen ? 'Layar Penuh (Aktif)' : 'Buka Layar Penuh'}</span>
          </button>

          {/* Font Size Adjuster (A- / A / A+) ANBK Style */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-slate-700">
            <span className="text-[11px] font-bold px-1.5 text-slate-400 hidden sm:inline flex items-center gap-1">
              <Type className="w-3 h-3" /> Ukuran:
            </span>
            <button
              type="button"
              id="btn-font-normal"
              onClick={() => onChangeFontSize('normal')}
              className={`px-2 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                fontSize === 'normal' 
                  ? 'bg-white text-blue-700 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Ukuran Teks Normal"
            >
              A
            </button>
            <button
              type="button"
              id="btn-font-large"
              onClick={() => onChangeFontSize('large')}
              className={`px-2 py-1 text-xs font-extrabold rounded-lg transition-all cursor-pointer ${
                fontSize === 'large' 
                  ? 'bg-white text-blue-700 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Ukuran Teks Sedang (Lebih Besar)"
            >
              A+
            </button>
            <button
              type="button"
              id="btn-font-xlarge"
              onClick={() => onChangeFontSize('xlarge')}
              className={`px-2 py-1 text-sm font-black rounded-lg transition-all cursor-pointer ${
                fontSize === 'xlarge' 
                  ? 'bg-white text-blue-700 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Ukuran Teks Sangat Besar"
            >
              A++
            </button>
          </div>

          {/* Countdown Timer */}
          <div 
            id="exam-timer-container"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono font-bold text-sm sm:text-base border transition-all ${
              isCriticalTime
                ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse ring-2 ring-rose-400/30'
                : isLowTime
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-blue-50 border-blue-200 text-blue-900'
            }`}
            title="Sisa Waktu Pengerjaan Ujian"
          >
            <Clock className={`w-4 h-4 ${isCriticalTime ? 'text-rose-600' : isLowTime ? 'text-amber-600' : 'text-blue-600'}`} />
            <span className="tracking-wider">{formatTime(timeRemainingSeconds)}</span>
          </div>

          {/* Question List Drawer Toggle (Mobile / Floating) */}
          <button
            type="button"
            id="btn-toggle-question-grid"
            onClick={onToggleDrawer}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden sm:inline">Daftar Soal</span>
            <span className="bg-indigo-800/80 px-1.5 py-0.5 rounded text-[11px]">
              {answeredCount}/{totalQuestions}
            </span>
          </button>

        </div>
      </div>
    </header>
  );
};
