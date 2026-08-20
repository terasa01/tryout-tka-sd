import React, { useState } from 'react';
import { 
  Question, 
  FontSizeOption, 
  UserAnswerState 
} from '../types/quiz';
import { 
  HelpCircle, 
  Image as ImageIcon, 
  Maximize2, 
  X, 
  Check, 
  CheckSquare,
  Square,
  AlertCircle, 
  Sparkles, 
  Layers,
  FileText,
  Table,
  CheckCircle2
} from 'lucide-react';

interface ExamQuestionAreaProps {
  question: Question;
  totalQuestions: number;
  userAnswerState: UserAnswerState | undefined;
  fontSize: FontSizeOption;
  onSelectOption: (optionKey: 'A' | 'B' | 'C' | 'D') => void;
  onToggleComplexOption?: (optionKey: 'A' | 'B' | 'C' | 'D') => void;
  onSelectMatrixOption?: (rowIndex: number, columnKey: string) => void;
}

export const ExamQuestionArea: React.FC<ExamQuestionAreaProps> = ({
  question,
  totalQuestions,
  userAnswerState,
  fontSize,
  onSelectOption,
  onToggleComplexOption,
  onSelectMatrixOption
}) => {
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [zoomedImageUrl, setZoomedImageUrl] = useState<string | null>(null);

  // Font size mapping for comfortable reading
  const getFontSizeClasses = () => {
    switch (fontSize) {
      case 'xlarge':
        return {
          questionText: 'text-xl sm:text-2xl leading-relaxed sm:leading-loose',
          optionText: 'text-lg sm:text-xl',
          tableText: 'text-base sm:text-lg',
          badgeSize: 'text-sm'
        };
      case 'large':
        return {
          questionText: 'text-lg sm:text-xl leading-relaxed',
          optionText: 'text-base sm:text-lg',
          tableText: 'text-sm sm:text-base',
          badgeSize: 'text-xs'
        };
      case 'normal':
      default:
        return {
          questionText: 'text-base sm:text-lg leading-relaxed',
          optionText: 'text-sm sm:text-base',
          tableText: 'text-xs sm:text-sm',
          badgeSize: 'text-xs'
        };
    }
  };

  const fontClasses = getFontSizeClasses();

  // Category Color Map
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Matematika Logika':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'IPA & Sains':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Bahasa Indonesia':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Penalaran Gambar':
        return 'bg-violet-50 text-violet-700 border-violet-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const questionType = question.questionType || 'single';

  const handleOpenZoom = (url: string) => {
    setZoomedImageUrl(url);
    setIsImageZoomed(true);
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 lg:p-8 shadow-xs space-y-6">
      
      {/* Top Question Meta Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-2xl bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shadow-xs font-mono">
            {question.number}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Soal Nomor {question.number} dari {totalQuestions}
              </span>
              {userAnswerState?.isDoubtful && (
                <span className="px-2 py-0.5 text-[10px] font-black bg-amber-100 text-amber-800 border border-amber-300 rounded-full animate-pulse">
                  ⚠️ RAGU-RAGU
                </span>
              )}
            </div>
            <p className="text-xs font-semibold text-slate-700">{question.topic}</p>
          </div>
        </div>

        {/* Category, Type & Difficulty Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {questionType === 'complex_multiple' && (
            <span className="px-2.5 py-1 rounded-lg border border-purple-200 bg-purple-50 text-purple-700 font-bold text-xs flex items-center gap-1">
              <CheckSquare className="w-3.5 h-3.5" />
              <span>PG Kompleks (Multi Jawaban)</span>
            </span>
          )}
          {questionType === 'matrix' && (
            <span className="px-2.5 py-1 rounded-lg border border-indigo-200 bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center gap-1">
              <Table className="w-3.5 h-3.5" />
              <span>PG Matriks (Kategori)</span>
            </span>
          )}
          <span className={`px-2.5 py-1 rounded-lg border font-bold text-xs ${getCategoryBadgeClass(question.category)}`}>
            {question.category}
          </span>
          <span className="hidden sm:inline-block px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">
            Tingkat: {question.difficulty}
          </span>
        </div>
      </div>

      {/* STIMULUS SOAL GRUP / BACAAN / TABEL / GRAFIK (JIKA TERSEDIA) */}
      {question.stimulus && (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3.5">
          <div className="flex items-center gap-2 text-indigo-700 font-extrabold text-xs sm:text-sm uppercase tracking-wide">
            <FileText className="w-4 h-4" />
            <span>{question.stimulus.title || 'Stimulus Bacaan / Informasi Soal'}</span>
          </div>

          {/* Stimulus Text */}
          {question.stimulus.text && (
            <div className={`text-slate-700 leading-relaxed font-normal whitespace-pre-line ${fontClasses.questionText}`}>
              {question.stimulus.text}
            </div>
          )}

          {/* Stimulus Table Data */}
          {question.stimulus.tableData && (
            <div className="overflow-x-auto my-2 rounded-xl border border-slate-200 bg-white">
              <table className={`w-full text-left border-collapse ${fontClasses.tableText}`}>
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-800">
                    {question.stimulus.tableData.headers.map((h, idx) => (
                      <th key={idx} className="p-3 font-semibold text-slate-700">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {question.stimulus.tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3 text-slate-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Stimulus Image */}
          {question.stimulus.imageUrl && (
            <div className="space-y-2 pt-1">
              <div className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white max-w-2xl mx-auto shadow-2xs">
                <img
                  src={question.stimulus.imageUrl}
                  alt={question.stimulus.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-72 object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <button
                  type="button"
                  onClick={() => handleOpenZoom(question.stimulus!.imageUrl!)}
                  className="absolute bottom-3 right-3 px-2.5 py-1.5 bg-black/75 hover:bg-black text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-md backdrop-blur-xs transition-all cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Perbesar Stimulus</span>
                </button>
              </div>
              {question.stimulus.imageCaption && (
                <p className="text-center text-xs italic text-slate-500 max-w-xl mx-auto">
                  {question.stimulus.imageCaption}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* GAMBAR SOAL TUNGGAL (JIKA ADA) */}
      {question.imageUrl && (
        <div className="space-y-2">
          <div className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white max-w-2xl mx-auto shadow-2xs p-2">
            <img
              src={question.imageUrl}
              alt={`Ilustrasi Soal Nomor ${question.number}`}
              referrerPolicy="no-referrer"
              className="w-full max-h-72 object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />
            <button
              type="button"
              id={`btn-zoom-image-${question.number}`}
              onClick={() => handleOpenZoom(question.imageUrl!)}
              className="absolute bottom-3 right-3 px-2.5 py-1.5 bg-black/75 hover:bg-black text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-md backdrop-blur-xs transition-all cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Perbesar Gambar</span>
            </button>
          </div>

          {question.imageCaption && (
            <p className="text-center text-xs italic text-slate-500 max-w-xl mx-auto">
              {question.imageCaption}
            </p>
          )}
        </div>
      )}

      {/* Modal Zoom Gambar */}
      {isImageZoomed && zoomedImageUrl && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsImageZoomed(false)}
        >
          <div 
            className="relative bg-white rounded-3xl p-4 sm:p-6 max-w-4xl max-h-[90vh] overflow-auto shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-xs font-extrabold text-slate-700 uppercase">
                Ilustrasi / Stimulus Soal No. {question.number}
              </span>
              <button
                type="button"
                onClick={() => setIsImageZoomed(false)}
                className="p-1 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={zoomedImageUrl}
              alt={`Ilustrasi Soal ${question.number}`}
              referrerPolicy="no-referrer"
              className="w-full max-h-[75vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}

      {/* Teks Pertanyaan Soal */}
      <div className="py-2">
        <div className={`text-slate-800 font-medium whitespace-pre-line ${fontClasses.questionText}`}>
          {question.questionText}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 1. FORMAT PILIHAN GANDA SEDERHANA (SINGLE CHOICE A - D)       */}
      {/* ------------------------------------------------------------- */}
      {questionType === 'single' && (
        <div className="space-y-3 pt-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Pilihlah salah satu jawaban yang paling tepat:
          </p>

          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option) => {
              const isSelected = userAnswerState?.selectedOption === option.key;

              return (
                <button
                  key={option.key}
                  type="button"
                  id={`btn-option-${question.number}-${option.key}`}
                  onClick={() => onSelectOption(option.key)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-center gap-3.5 cursor-pointer relative group ${
                    isSelected
                      ? 'bg-blue-50/80 border-blue-600 text-blue-950 shadow-sm ring-2 ring-blue-500/20'
                      : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-black text-sm sm:text-base flex items-center justify-center shrink-0 font-mono transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs scale-105'
                        : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                    }`}
                  >
                    {isSelected ? <Check className="w-5 h-5 stroke-[3]" /> : option.key}
                  </div>

                  <div className={`flex-1 font-medium ${fontClasses.optionText}`}>
                    {option.text}
                  </div>

                  {isSelected && (
                    <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                      Terpilih
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 2. FORMAT PILIHAN GANDA KOMPLEKS (MCMA - MULTI JAWABAN BENAR) */}
      {/* ------------------------------------------------------------- */}
      {questionType === 'complex_multiple' && (
        <div className="space-y-3 pt-2">
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-2xl flex items-center gap-2 text-purple-900 text-xs font-bold">
            <CheckSquare className="w-4 h-4 text-purple-600 shrink-0" />
            <span>Pilihan Ganda Kompleks: Anda dapat memilih lebih dari satu jawaban yang benar.</span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option) => {
              const isSelected = userAnswerState?.selectedOptions?.includes(option.key) || false;

              return (
                <button
                  key={option.key}
                  type="button"
                  id={`btn-complex-${question.number}-${option.key}`}
                  onClick={() => onToggleComplexOption && onToggleComplexOption(option.key)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-center gap-3.5 cursor-pointer relative group ${
                    isSelected
                      ? 'bg-purple-50/90 border-purple-600 text-purple-950 shadow-sm ring-2 ring-purple-500/20'
                      : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-black text-sm sm:text-base flex items-center justify-center shrink-0 font-mono transition-all ${
                      isSelected
                        ? 'bg-purple-600 text-white shadow-xs scale-105'
                        : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                    }`}
                  >
                    {isSelected ? <Check className="w-5 h-5 stroke-[3]" /> : option.key}
                  </div>

                  <div className={`flex-1 font-medium ${fontClasses.optionText}`}>
                    {option.text}
                  </div>

                  <div className="shrink-0">
                    {isSelected ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full">
                        <Check className="w-3.5 h-3.5" /> Dicentang
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400 font-medium">Klik untuk memilih</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 3. FORMAT PILIHAN GANDA KOMPLEKS KATEGORI (MATRIKS / TABEL)   */}
      {/* ------------------------------------------------------------- */}
      {questionType === 'matrix' && question.matrixConfig && (
        <div className="space-y-3 pt-2">
          <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-2xl flex items-center gap-2 text-indigo-900 text-xs font-bold">
            <Table className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>Pilihan Ganda Kompleks Kategori: Tentukan kategori yang sesuai untuk setiap pernyataan di bawah ini.</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200">
                  <th className="p-4 text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    Pernyataan
                  </th>
                  {question.matrixConfig.columns.map((col, cIdx) => (
                    <th key={cIdx} className="p-4 text-center text-xs font-extrabold text-slate-700 uppercase tracking-wider w-28 sm:w-36">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {question.matrixConfig.rows.map((rowText, rIdx) => {
                  const currentChosenCol = userAnswerState?.matrixAnswers?.[rIdx];

                  return (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white hover:bg-slate-50/50' : 'bg-slate-50/40 hover:bg-slate-50'}>
                      <td className={`p-4 text-slate-800 font-medium leading-relaxed ${fontClasses.optionText}`}>
                        <div className="flex items-start gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                            {rIdx + 1}
                          </span>
                          <span>{rowText}</span>
                        </div>
                      </td>

                      {question.matrixConfig!.columns.map((colName, cIdx) => {
                        const isColSelected = currentChosenCol === colName;

                        return (
                          <td key={cIdx} className="p-4 text-center align-middle">
                            <button
                              type="button"
                              id={`btn-matrix-${question.number}-${rIdx}-${cIdx}`}
                              onClick={() => onSelectMatrixOption && onSelectMatrixOption(rIdx, colName)}
                              className={`w-full py-2.5 px-3 rounded-xl border font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                                isColSelected
                                  ? colName.toLowerCase().includes('benar') || colName.toLowerCase().includes('sesuai')
                                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs scale-102'
                                    : 'bg-rose-600 border-rose-600 text-white shadow-xs scale-102'
                                  : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-600 hover:text-slate-900'
                              }`}
                            >
                              {isColSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              <span>{colName}</span>
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
