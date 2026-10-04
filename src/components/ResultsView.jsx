import React from 'react';
import { 
  Trophy, 
  RotateCcw, 
  Target, 
  BookOpen, 
  Clock, 
  Award,
  Lightbulb,
  XCircle
} from 'lucide-react';

export default function ResultsView({
  score,
  total,
  wrongList = [],
  timerSeconds,
  onRestart,
  onStartFocusMode,
  onChangeSubject,
  onOpenDashboard
}) {
  const percentage = Math.round((score / total) * 100);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  let grade = 'D';
  let title = 'Selesai!';
  let subtitle = 'Pelajari evaluasi jawaban di bawah untuk meningkatkan pemahaman materi.';

  if (percentage >= 85) {
    grade = 'A';
    title = 'Hasil Sangat Baik';
    subtitle = 'Kamu menguasai materi latihan ini dengan sangat baik.';
  } else if (percentage >= 70) {
    grade = 'B';
    title = 'Hasil Baik';
    subtitle = 'Pemahaman materi sudah cukup solid. Terus pertahankan!';
  } else if (percentage >= 55) {
    grade = 'C';
    title = 'Cukup Baik';
    subtitle = 'Sudah memahami sebagian besar materi, ayo tingkatkan latihan lagi.';
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn text-zinc-100 pb-12">
      {/* Results Summary Card */}
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-6 sm:p-8 text-center space-y-6">
        {/* Grade Badge */}
        <div className="w-20 h-20 rounded-2xl bg-[#1c2230] border border-[#2b354a] text-white font-black text-3xl flex items-center justify-center mx-auto">
          {grade}
        </div>

        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">{subtitle}</p>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
          <div className="bg-[#161a24] border border-[#222734] rounded-xl p-3 space-y-1">
            <Trophy className="w-4 h-4 text-zinc-400 mx-auto" />
            <div className="text-base font-bold text-white">{score} / {total}</div>
            <div className="text-[10px] text-zinc-400 uppercase font-medium">Skor Akhir</div>
          </div>

          <div className="bg-[#161a24] border border-[#222734] rounded-xl p-3 space-y-1">
            <Award className="w-4 h-4 text-zinc-400 mx-auto" />
            <div className="text-base font-bold text-white">{percentage}%</div>
            <div className="text-[10px] text-zinc-400 uppercase font-medium">Akurasi</div>
          </div>

          <div className="bg-[#161a24] border border-[#222734] rounded-xl p-3 space-y-1">
            <Clock className="w-4 h-4 text-zinc-400 mx-auto" />
            <div className="text-base font-bold text-white">{formatTime(timerSeconds)}</div>
            <div className="text-[10px] text-zinc-400 uppercase font-medium">Waktu</div>
          </div>

          <div className="bg-[#161a24] border border-[#222734] rounded-xl p-3 space-y-1">
            <div className="w-4 h-4 font-bold text-zinc-400 mx-auto flex items-center justify-center text-xs">{grade}</div>
            <div className="text-base font-bold text-white">Grade {grade}</div>
            <div className="text-[10px] text-zinc-400 uppercase font-medium">Predikat</div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap justify-center gap-2.5 pt-2">
          <button
            onClick={onRestart}
            className="py-2.5 px-4 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Ulangi Latihan</span>
          </button>

          {wrongList.length > 0 && (
            <button
              onClick={onStartFocusMode}
              className="py-2.5 px-4 rounded-xl bg-[#252c3d] hover:bg-[#30384d] text-zinc-200 border border-[#353f57] font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Target className="w-3.5 h-3.5 text-amber-400" />
              <span>Mode Fokus ({wrongList.length} Soal Salah)</span>
            </button>
          )}

          {onOpenDashboard && (
            <button
              onClick={onOpenDashboard}
              className="py-2.5 px-4 rounded-xl bg-[#1d222e] hover:bg-[#272d3d] text-zinc-200 border border-[#2b3345] font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Dashboard Nilai & Pembahasan</span>
            </button>
          )}

          <button
            onClick={onChangeSubject}
            className="py-2.5 px-4 rounded-xl bg-[#161a23] hover:bg-[#202533] text-zinc-400 hover:text-zinc-200 border border-[#222734] font-medium text-xs flex items-center gap-2 transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ganti Mapel</span>
          </button>
        </div>
      </div>

      {/* INCORRECT QUESTIONS REVIEW */}
      {wrongList.length > 0 && (
        <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-zinc-200 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-rose-400" />
              <span>Evaluasi Soal Kurang Tepat ({wrongList.length})</span>
            </h3>
            <p className="text-xs text-zinc-400">Tinjau pembahasan materi berikut untuk mengoreksi jawaban:</p>
          </div>

          <div className="space-y-3">
            {wrongList.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#161a24] border border-[#252b3a] rounded-xl p-4 space-y-2"
              >
                <div className="font-semibold text-sm text-white">
                  Soal #{idx + 1}: {item.question}
                </div>

                <div className="text-xs space-y-0.5 text-zinc-400">
                  <div>Jawaban Kamu: <span className="text-rose-400 font-semibold">{item.userAnswer}</span></div>
                  <div>Kunci Jawaban Benar: <span className="text-emerald-400 font-semibold">{item.correctAnswer}</span></div>
                </div>

                <div className="bg-[#11131a] border border-[#222734] rounded-lg p-3 space-y-1 mt-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400">
                    <Lightbulb className="w-3 h-3 text-zinc-400" />
                    <span>Pembahasan:</span>
                  </div>
                  <p className="text-xs text-zinc-300 whitespace-pre-line leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
