import React, { useState } from 'react';
import { 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  ArrowLeft, 
  ChevronRight, 
  FileText, 
  BarChart2, 
  X,
  Zap,
  Bookmark
} from 'lucide-react';

export default function UserDashboard({ currentUser, quizHistory = [], onBackHome, onStartNewQuiz }) {
  const [selectedSessionForReview, setSelectedSessionForReview] = useState(null);

  // Filter history for current user
  const userSessions = quizHistory.filter(s => !s.userId || !currentUser || s.userId === currentUser.id);

  // Metrics
  const totalQuizzes = userSessions.length;
  const avgScore = totalQuizzes > 0 
    ? Math.round(userSessions.reduce((acc, s) => acc + s.percentage, 0) / totalQuizzes)
    : 0;
  const bestScore = totalQuizzes > 0 
    ? Math.max(...userSessions.map(s => s.percentage))
    : 0;
  const totalCorrect = userSessions.reduce((acc, s) => acc + (s.score || 0), 0);
  const totalQuestions = userSessions.reduce((acc, s) => acc + (s.total || 0), 0);

  // Subject Breakdown
  const subjectStats = {};
  userSessions.forEach(s => {
    const key = s.subject || 'Lainnya';
    if (!subjectStats[key]) {
      subjectStats[key] = { count: 0, totalPct: 0 };
    }
    subjectStats[key].count++;
    subjectStats[key].totalPct += s.percentage;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12 text-zinc-100">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#12151c] border border-[#222734] rounded-2xl p-5">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#1c2230] border border-[#2b354a] flex items-center justify-center text-white font-bold text-xl">
            {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : 'S'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white">
                {currentUser?.name || 'Dashboard Siswa'}
              </h1>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#1e2533] text-zinc-300 border border-[#2b3549]">
                Kelas {currentUser?.kelas || 12}
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              {currentUser?.email || 'siswa@kuispintar.com'} • Perkembangan latihan soal mandiri
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onBackHome}
            className="px-3.5 py-2 rounded-xl border border-[#222734] bg-[#161a23] text-zinc-300 font-medium text-xs hover:border-zinc-500 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </button>
          <button
            onClick={onStartNewQuiz}
            className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Latihan Baru</span>
          </button>
        </div>
      </div>

      {/* METRICS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#12151c] border border-[#222734] rounded-xl p-4 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Total Kuis</span>
          </div>
          <div className="text-xl font-bold text-white">{totalQuizzes} Sesi</div>
        </div>

        <div className="bg-[#12151c] border border-[#222734] rounded-xl p-4 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Rata-rata Nilai</span>
          </div>
          <div className="text-xl font-bold text-white">{avgScore}%</div>
        </div>

        <div className="bg-[#12151c] border border-[#222734] rounded-xl p-4 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <Award className="w-3.5 h-3.5" />
            <span>Nilai Tertinggi</span>
          </div>
          <div className="text-xl font-bold text-white">{bestScore}%</div>
        </div>

        <div className="bg-[#12151c] border border-[#222734] rounded-xl p-4 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Soal Benar</span>
          </div>
          <div className="text-xl font-bold text-white">{totalCorrect} / {totalQuestions}</div>
        </div>
      </div>

      {/* PROGRESSION & SUBJECT BREAKDOWN */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Progression Chart */}
        <div className="lg:col-span-2 bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold text-sm text-zinc-200">
              <BarChart2 className="w-4 h-4 text-zinc-400" />
              <span>Grafik Perkembangan Nilai</span>
            </div>
            <span className="text-[11px] text-zinc-500">8 Sesi Terakhir</span>
          </div>

          {userSessions.length === 0 ? (
            <div className="py-12 text-center text-zinc-500 text-xs italic">
              Belum ada riwayat kuis. Kerjakan latihan untuk melihat grafik perkembangan.
            </div>
          ) : (
            <div className="space-y-3 pt-2">
              <div className="h-40 flex items-end gap-2 sm:gap-3 px-2 border-b border-[#222734] pb-2">
                {userSessions.slice(-8).map((session, idx) => {
                  const pct = Math.max(8, session.percentage || 0);
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                      <span className="text-[10px] font-semibold text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {session.percentage}%
                      </span>
                      <div 
                        className="w-full rounded-t-lg bg-[#273247] hover:bg-zinc-300 transition-colors"
                        style={{ height: `${pct}%` }}
                      />
                      <span className="text-[10px] text-zinc-500 font-medium">
                        #{idx + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>0%</span>
                <span>Standar KKM: 75%</span>
                <span>100%</span>
              </div>
            </div>
          )}
        </div>

        {/* Subject Breakdown */}
        <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 font-semibold text-sm text-zinc-200">
            <Award className="w-4 h-4 text-zinc-400" />
            <span>Akurasi per Mapel</span>
          </div>

          <div className="space-y-2.5 pt-1">
            {Object.keys(subjectStats).length === 0 ? (
              <p className="text-xs text-zinc-500 italic py-6 text-center">Belum ada data mapel.</p>
            ) : (
              Object.entries(subjectStats).map(([subj, data]) => {
                const avg = Math.round(data.totalPct / data.count);
                return (
                  <div key={subj} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-zinc-300 capitalize">
                        {subj.replace(/_/g, ' ')}
                      </span>
                      <span className="text-zinc-400">{avg}% ({data.count}x)</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1a1f2c] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-zinc-300 rounded-full"
                        style={{ width: `${avg}%` }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* QUIZ HISTORY TABLE */}
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-sm text-zinc-200">
            <FileText className="w-4 h-4 text-zinc-400" />
            <span>Riwayat Latihan & Pembahasan</span>
          </div>
          <span className="text-xs text-zinc-500 font-medium">{userSessions.length} Sesi Tercatat</span>
        </div>

        {userSessions.length === 0 ? (
          <div className="py-12 text-center text-zinc-500 text-xs italic">
            Belum ada riwayat kuis tersimpan.
          </div>
        ) : (
          <div className="divide-y divide-[#222734]">
            {userSessions.map((session, idx) => (
              <div 
                key={session.id || idx}
                className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1a202d] border border-[#293245] flex items-center justify-center font-bold text-xs text-zinc-200 shrink-0">
                    {session.percentage}%
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white capitalize">
                      {session.subjectName || session.subject?.replace(/_/g, ' ') || 'Latihan Soal'}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-0.5">
                      <span>Kelas {session.kelas || '-'}</span>
                      <span>•</span>
                      <span>{session.examMode === 'per_bab' ? `Bab ${session.chapter || 'Semua'}` : session.examMode?.toUpperCase()}</span>
                      <span>•</span>
                      <span>{session.date || 'Hari ini'}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <div className="text-right">
                    <div className="font-bold text-xs text-zinc-200">
                      {session.score} / {session.total} Benar
                    </div>
                    <div className="text-[11px] text-zinc-500 font-mono">
                      Waktu: {session.timeSpent || '-'}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedSessionForReview(session)}
                    className="px-3 py-1.5 rounded-lg bg-[#1a202d] hover:bg-[#252e40] text-zinc-200 font-medium text-xs border border-[#2b354a] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Buka Pembahasan</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL PEMBAHASAN DETAIL */}
      {selectedSessionForReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#12151c] border border-[#282f3f] rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#222734] flex justify-between items-center bg-[#151922]">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white capitalize">
                    Pembahasan: {selectedSessionForReview.subjectName || selectedSessionForReview.subject?.replace(/_/g, ' ')}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#1e2533] text-zinc-300 border border-[#2b354a]">
                    Skor: {selectedSessionForReview.score}/{selectedSessionForReview.total} ({selectedSessionForReview.percentage}%)
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Kelas {selectedSessionForReview.kelas} • {selectedSessionForReview.examMode === 'per_bab' ? `Bab ${selectedSessionForReview.chapter}` : selectedSessionForReview.examMode?.toUpperCase()} • {selectedSessionForReview.date}
                </p>
              </div>

              <button
                onClick={() => setSelectedSessionForReview(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[#202533] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4">
              {(!selectedSessionForReview.questionsReview || selectedSessionForReview.questionsReview.length === 0) ? (
                <div className="text-center py-8 text-zinc-500 text-xs italic">
                  Data pembahasan soal untuk sesi ini tidak tersedia.
                </div>
              ) : (
                selectedSessionForReview.questionsReview.map((item, qIdx) => {
                  const isCorrect = item.isCorrect;
                  return (
                    <div 
                      key={qIdx}
                      className="p-4 rounded-xl border border-[#222734] bg-[#161a24] space-y-2.5"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-zinc-400">
                          Nomor {qIdx + 1} • {item.type || 'Latihan Soal'}
                        </span>
                        <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded ${
                          isCorrect 
                            ? 'bg-[#123624] text-emerald-300 border border-[#1c5438]' 
                            : 'bg-[#3b171a] text-rose-300 border border-[#5e2329]'
                        }`}>
                          {isCorrect ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                          <span>{isCorrect ? 'Benar' : 'Salah'}</span>
                        </span>
                      </div>

                      <h4 className="text-sm font-semibold text-white leading-relaxed">
                        {item.question}
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-[#11131a] border border-[#202533]">
                          <span className="text-zinc-500 block text-[10px]">Jawaban Kamu:</span>
                          <span className={`font-semibold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {item.userAnswer || '(Tidak dijawab)'}
                          </span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-[#11131a] border border-[#202533]">
                          <span className="text-zinc-500 block text-[10px]">Kunci Jawaban:</span>
                          <span className="font-semibold text-emerald-400">
                            {item.correctAnswer}
                          </span>
                        </div>
                      </div>

                      {/* Explanation */}
                      {item.explanation && (
                        <div className="p-3 bg-[#11131a] rounded-lg border border-[#202533] text-xs space-y-1">
                          <div className="font-semibold text-zinc-400 flex items-center gap-1 text-[11px]">
                            <Bookmark className="w-3 h-3" />
                            <span>Pembahasan:</span>
                          </div>
                          <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
                            {item.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#222734] bg-[#151922] flex justify-end">
              <button
                onClick={() => setSelectedSessionForReview(null)}
                className="px-4 py-1.5 rounded-lg bg-[#222836] hover:bg-[#2c3345] text-zinc-200 font-semibold text-xs transition-colors cursor-pointer"
              >
                Tutup Pembahasan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
