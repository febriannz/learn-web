import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Dna, 
  Zap, 
  TestTube, 
  Scroll, 
  BookMarked,
  ArrowRight,
  BarChart3,
  Award,
  FileCheck,
  Bookmark,
  Sparkles
} from 'lucide-react';
import { CHAPTERS_DATA } from '../data/chaptersData';

const SUBJECTS = [
  { 
    id: 'matematika_umum', 
    name: 'Matematika Umum', 
    mode: 'auto', 
    icon: Zap, 
    desc: 'Eksponen, logaritma, aljabar, trigonometri, deret, & peluang', 
    badge: 'Auto Generator' 
  },
  { 
    id: 'matematika_lanjut', 
    name: 'Matematika T. Lanjut', 
    mode: 'auto', 
    icon: Sparkles, 
    desc: 'Matriks, polinomial, analitik lingkaran, & integral lanjut', 
    badge: 'Auto Generator' 
  },
  { 
    id: 'fisika', 
    name: 'Fisika', 
    mode: 'hybrid', 
    icon: Zap, 
    desc: 'Listrik, magnet, RLC, gelombang EM, elektronika digital, relativitas, kuantum, & inti', 
    badge: 'Hybrid (Gen + Bank)' 
  },
  { 
    id: 'kimia', 
    name: 'Kimia', 
    mode: 'hybrid', 
    icon: TestTube, 
    desc: 'Larutan & koloid, elektrokimia, gugus fungsi karbon, & makromolekul', 
    badge: 'Kurikulum Merdeka' 
  },
  { 
    id: 'biologi', 
    name: 'Biologi', 
    mode: 'hybrid', 
    icon: Dna, 
    desc: 'Enzim & metabolisme, genetika, evolusi, & inovasi bioteknologi', 
    badge: 'Kurikulum Merdeka' 
  },
  { 
    id: 'sejarah', 
    name: 'Sejarah', 
    mode: 'bank', 
    icon: Scroll, 
    desc: 'Revolusi kemerdekaan, demokrasi terpimpin, orde baru, & reformasi', 
    badge: 'Kurikulum Merdeka' 
  },
  { 
    id: 'bahasa_indonesia', 
    name: 'Bahasa Indonesia', 
    mode: 'bank', 
    icon: BookMarked, 
    desc: 'Surat lamaran, novel sejarah, editorial, kritik sastra, debat, & drama', 
    badge: 'Kurikulum Merdeka' 
  }
];

const EXAM_MODES = [
  { id: 'per_bab', label: 'Per Bab', desc: 'Fokus pada satu topik bab materi spesifik' },
  { id: 'pts', label: 'Tengah Semester (PTS)', desc: 'Cakupan materi paruh semester' },
  { id: 'pas', label: 'Akhir Semester (PAS)', desc: 'Cakupan materi 1 semester penuh' },
  { id: 'ukk', label: 'Kenaikan Kelas (UKK)', desc: 'Cakupan komprehensif 1 tahun' }
];

export default function HomeView({ 
  selectedSubject, 
  onSelectSubject, 
  selectedCount, 
  onSelectCount, 
  selectedClass, 
  onSelectClass, 
  selectedExamMode,
  onSelectExamMode,
  selectedChapter,
  onSelectChapter,
  onStartQuiz,
  onOpenLearn,
  history = {}
}) {
  const [activeStage, setActiveStage] = useState(
    selectedClass <= 6 ? 'sd' : (selectedClass <= 9 ? 'smp' : 'sma')
  );

  const STAGES = [
    { id: 'sd', label: 'SD (Kelas 1 - 6)', classes: [1, 2, 3, 4, 5, 6] },
    { id: 'smp', label: 'SMP (Kelas 7 - 9)', classes: [7, 8, 9] },
    { id: 'sma', label: 'SMA (Kelas 10 - 12)', classes: [10, 11, 12] }
  ];

  // Helper untuk mendapatkan nama bab berdasarkan Mapel & Kelas
  const getChapterOptions = () => {
    const list = CHAPTERS_DATA[selectedSubject]?.[selectedClass];
    if (list && list.length > 0) {
      return [
        { id: 0, title: 'Semua Bab (Campur / Acak)' },
        ...list.map(item => ({ id: item.id, title: item.name }))
      ];
    }
    return [
      { id: 0, title: 'Semua Bab (Campur / Acak)' },
      { id: 1, title: 'Bab 1: Konsep Dasar' },
      { id: 2, title: 'Bab 2: Pengembangan Materi' },
      { id: 3, title: 'Bab 3: Penerapan Konsep' },
      { id: 4, title: 'Bab 4: Evaluasi & Latihan' }
    ];
  };

  const chapterOptions = getChapterOptions();
  const currentSubjectObj = SUBJECTS.find(s => s.id === selectedSubject) || SUBJECTS[0];

  return (
    <div className="space-y-6 animate-fadeIn text-zinc-100 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="border-b border-[#222734] pb-5 space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Latihan Soal Interaktif
        </h1>
        <p className="text-zinc-400 text-xs sm:text-sm">
          Pilih jenjang kelas, mata pelajaran, dan kategori latihan untuk memulai sesi soal.
        </p>
      </div>

      {/* Belajar Materi CTA */}
      {onOpenLearn && (
        <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#123624] border border-[#1c5438] flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-white">Belajar Materi</h2>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#123624] border border-[#1c5438] text-emerald-300">
                  Baru
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                Baca materi Kurikulum Merdeka Fisika Kelas 10–12 per bab: poin penting, rumus, contoh soal, & tips belajar.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenLearn}
            className="shrink-0 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-900 font-bold text-xs transition-colors cursor-pointer"
          >
            <span>Buka Materi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 1. CLASS / GRADE SELECTION */}
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2 text-zinc-200 font-semibold text-sm">
          <GraduationCap className="w-4 h-4 text-zinc-400" />
          <span>1. Pilih Jenjang & Tingkat Kelas</span>
        </div>

        {/* Stage Tabs */}
        <div className="flex bg-[#181c26] p-1 rounded-xl border border-[#232836]">
          {STAGES.map(stage => (
            <button
              key={stage.id}
              onClick={() => {
                setActiveStage(stage.id);
                onSelectClass(stage.classes[0]);
              }}
              className={`flex-1 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeStage === stage.id
                  ? 'bg-[#252c3d] text-white'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {stage.label}
            </button>
          ))}
        </div>

        {/* Grade Buttons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {STAGES.find(s => s.id === activeStage)?.classes.map(cls => (
            <button
              key={cls}
              onClick={() => onSelectClass(cls)}
              className={`py-2 px-3 rounded-xl border text-center font-medium text-xs transition-colors cursor-pointer ${
                selectedClass === cls
                  ? 'border-zinc-400 bg-[#252c3d] text-white'
                  : 'border-[#222734] bg-[#161a23] text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
              }`}
            >
              Kelas {cls}
            </button>
          ))}
        </div>
      </div>

      {/* 2. SUBJECT SELECTION */}
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2 text-zinc-200 font-semibold text-sm">
          <BookOpen className="w-4 h-4 text-zinc-400" />
          <span>2. Pilih Mata Pelajaran</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SUBJECTS.map(subj => {
            const IconComp = subj.icon;
            const isSelected = selectedSubject === subj.id;
            return (
              <div
                key={subj.id}
                onClick={() => onSelectSubject(subj.id)}
                className={`rounded-xl border p-4 cursor-pointer transition-colors ${
                  isSelected
                    ? 'border-zinc-300 bg-[#1c2230]'
                    : 'border-[#222734] bg-[#151922] hover:border-[#353d52]'
                }`}
              >
                <div className="flex justify-between items-start mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#222838] flex items-center justify-center text-zinc-300">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#202534] text-zinc-400 border border-[#2a3246]">
                    {subj.badge}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-white">{subj.name}</h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">{subj.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. EXAM MODE CATEGORY */}
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2 text-zinc-200 font-semibold text-sm">
          <FileCheck className="w-4 h-4 text-zinc-400" />
          <span>3. Pilih Kategori Ujian / Latihan</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {EXAM_MODES.map(mode => (
            <div
              key={mode.id}
              onClick={() => onSelectExamMode(mode.id)}
              className={`p-3.5 rounded-xl border cursor-pointer transition-colors ${
                selectedExamMode === mode.id
                  ? 'border-zinc-300 bg-[#1c2230]'
                  : 'border-[#222734] bg-[#151922] hover:border-[#353d52]'
              }`}
            >
              <div className="font-semibold text-xs text-white">{mode.label}</div>
              <div className="text-[11px] text-zinc-400 mt-1 leading-snug">{mode.desc}</div>
            </div>
          ))}
        </div>

        {/* CHAPTER SELECTOR DROPDOWN (Per Bab) */}
        {selectedExamMode === 'per_bab' && (
          <div className="bg-[#161a24] border border-[#282f40] rounded-xl p-4 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300">
                <Bookmark className="w-3.5 h-3.5 text-zinc-400" />
                <span>Pilih Bab ({currentSubjectObj.name} - Kelas {selectedClass}):</span>
              </label>
              <span className="text-[11px] text-zinc-500">
                {chapterOptions.length - 1} Bab Tersedia
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
              {chapterOptions.map(chap => (
                <button
                  key={chap.id}
                  onClick={() => onSelectChapter(chap.id)}
                  className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-colors cursor-pointer ${
                    selectedChapter === chap.id
                      ? 'bg-[#273042] text-white border-zinc-400'
                      : 'bg-[#1a1f2c] text-zinc-300 border-[#2b3347] hover:border-zinc-500'
                  }`}
                >
                  {chap.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 4. JUMLAH SOAL (Clean without difficulty selector) */}
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-3">
        <label className="flex items-center gap-2 font-semibold text-sm text-zinc-200">
          <BarChart3 className="w-4 h-4 text-zinc-400" />
          <span>4. Jumlah Soal</span>
        </label>
        <div className="grid grid-cols-4 gap-2">
          {[5, 10, 15, 20].map(cnt => (
            <button
              key={cnt}
              onClick={() => onSelectCount(cnt)}
              className={`py-2 rounded-xl text-xs font-medium transition-colors border cursor-pointer ${
                selectedCount === cnt
                  ? 'bg-[#252c3d] text-white border-zinc-400'
                  : 'bg-[#161a23] text-zinc-400 border-[#222734] hover:border-zinc-600'
              }`}
            >
              {cnt} Soal
            </button>
          ))}
        </div>
      </div>

      {/* START CTA BUTTON */}
      <div className="pt-2">
        <button
          onClick={onStartQuiz}
          className="w-full py-3.5 px-6 rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
        >
          <span>Mulai Latihan Sekarang</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* RECENT RECORDS */}
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2 font-semibold text-xs text-zinc-300">
          <Award className="w-4 h-4 text-zinc-400" />
          <span>Riwayat Performa Terakhir</span>
        </div>

        {Object.keys(history).length === 0 ? (
          <p className="text-xs text-zinc-500 italic">Belum ada riwayat kuis tersimpan.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {Object.entries(history).map(([key, item]) => (
              <div key={key} className="bg-[#161a23] border border-[#222734] rounded-xl p-3 space-y-1">
                <div className="text-xs font-medium text-zinc-300 capitalize">
                  {key.replace(/_/g, ' ')}
                </div>
                <div className="text-sm font-bold text-white">
                  {item.score} / {item.total} <span className="text-xs font-normal text-zinc-400">({item.percentage}%)</span>
                </div>
                <div className="text-[11px] text-zinc-500 capitalize">
                  Kelas {item.kelas || '-'} • {item.examMode === 'per_bab' ? `Bab ${item.chapter || 'Semua'}` : item.examMode?.toUpperCase()} • {item.date}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
