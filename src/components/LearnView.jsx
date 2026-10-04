import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Calculator,
  ChevronRight,
  CircleCheck,
  GraduationCap,
  Layers,
  Lightbulb,
  ListChecks,
  Play,
  Search,
  Sparkles,
  Target
} from 'lucide-react';
import {
  MATERI_SUBJECTS,
  getAvailableKelas,
  getMateriList,
  hasMateri
} from '../data/materi';

const STORAGE_KEY = 'kuispintar_materi_read';

function readProgressState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

export default function LearnView({
  defaultKelas = 10,
  onStartQuizForChapter,
  onGoHome
}) {
  const [subjectId, setSubjectId] = useState('fisika');
  const [kelas, setKelas] = useState(() => {
    const available = getAvailableKelas('fisika');
    return available.includes(defaultKelas) ? defaultKelas : (available[0] || 10);
  });
  const [activeId, setActiveId] = useState(null);
  const [query, setQuery] = useState('');
  const [readMap, setReadMap] = useState(readProgressState);

  const subject = MATERI_SUBJECTS.find(s => s.id === subjectId) || MATERI_SUBJECTS[0];
  const chapters = useMemo(() => getMateriList(subjectId, kelas), [subjectId, kelas]);
  const availableKelas = useMemo(() => getAvailableKelas(subjectId), [subjectId]);

  const activeIndex = activeId == null ? -1 : chapters.findIndex(c => c.id === activeId);
  const active = activeIndex >= 0 ? chapters[activeIndex] : null;

  const progressKey = (id) => `${subjectId}-${kelas}-${id}`;
  const isRead = (id) => !!readMap[progressKey(id)];
  const readCount = chapters.filter(c => isRead(c.id)).length;
  const progressPct = chapters.length > 0 ? Math.round((readCount / chapters.length) * 100) : 0;

  const filteredChapters = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return chapters;
    return chapters.filter(
      c => c.title.toLowerCase().includes(q) || (c.summary || '').toLowerCase().includes(q)
    );
  }, [chapters, query]);

  // Reset tampilan bab saat pindah mapel / kelas (langsung dari event handler)
  const handleSelectSubject = (id) => {
    if (!hasMateri(id) || id === subjectId) return;
    setSubjectId(id);
    setActiveId(null);
    setQuery('');
    const available = getAvailableKelas(id);
    if (!available.includes(kelas) && available.length > 0) setKelas(available[0]);
  };

  const handleSelectKelas = (cls) => {
    if (cls === kelas) return;
    setKelas(cls);
    setActiveId(null);
    setQuery('');
  };

  // Selalu mulai dari atas saat membuka / menutup bab
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeId, subjectId, kelas]);

  const toggleRead = (id) => {
    setReadMap(prev => {
      const next = { ...prev };
      const key = progressKey(id);
      if (next[key]) delete next[key];
      else next[key] = true;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // abaikan bila storage penuh
      }
      return next;
    });
  };

  const goChapter = (index) => {
    if (index >= 0 && index < chapters.length) setActiveId(chapters[index].id);
  };

  /* ============================================================
   *  TAMPILAN DETAIL BAB
   * ============================================================ */
  if (active) {
    const prevChapter = chapters[activeIndex - 1];
    const nextChapter = chapters[activeIndex + 1];
    const done = isRead(active.id);

    return (
      <div className="max-w-4xl mx-auto space-y-5 animate-fadeIn text-zinc-100 pb-12">
        {/* Header Detail */}
        <div className="flex items-start justify-between gap-3">
          <button
            onClick={() => setActiveId(null)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#161a23] border border-[#252b39] text-xs font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Daftar Bab</span>
          </button>

          <button
            onClick={() => toggleRead(active.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
              done
                ? 'bg-[#123624] border-[#1c5438] text-emerald-300'
                : 'bg-[#161a23] border-[#252b39] text-zinc-300 hover:border-zinc-500 hover:text-white'
            }`}
          >
            <CircleCheck className={`w-3.5 h-3.5 ${done ? 'text-emerald-400' : 'text-zinc-500'}`} />
            <span>{done ? 'Sudah Dipelajari' : 'Tandai Sudah Dipelajari'}</span>
          </button>
        </div>

        {/* Judul Bab */}
        <div className="border-b border-[#222734] pb-5 space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
            <span className="px-2 py-0.5 rounded-md bg-[#1e2330] border border-[#2b3345] text-zinc-300">
              {subject.name}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#1e2330] border border-[#2b3345] text-zinc-300">
              Kelas {kelas}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#1e2330] border border-[#2b3345] text-zinc-400">
              Kurikulum Merdeka
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
            {active.title}
          </h1>
          <p className="text-zinc-400 text-sm">{active.summary}</p>
        </div>

        {/* Peta Isi Bab */}
        <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
            <ListChecks className="w-4 h-4 text-emerald-400" />
            <span>Peta Isi Bab</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(active.sections || []).map((section, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-zinc-300 bg-[#161a23] border border-[#222734] rounded-lg px-3 py-2"
              >
                <span className="text-[10px] font-bold text-emerald-400 shrink-0">{idx + 1}.</span>
                <span className="leading-relaxed">{section.heading}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Isi Materi */}
        <div className="space-y-4">
          {(active.sections || []).map((section, sIdx) => (
            <section
              key={sIdx}
              className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-3.5"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="w-6 h-6 rounded-md bg-[#222838] border border-[#2c3344] flex items-center justify-center text-[11px] font-bold text-emerald-300">
                  {sIdx + 1}
                </span>
                <span>{section.heading}</span>
              </div>

              {(section.paragraphs || []).map((para, pIdx) => (
                <p key={pIdx} className="text-[13px] leading-relaxed text-zinc-300">
                  {para}
                </p>
              ))}

              {(section.list || []).length > 0 && (
                <ul className="space-y-1.5 pt-0.5">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2 text-[13px] text-zinc-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.formula && (
                <div className="bg-[#0f1512] border border-[#1c332c] rounded-xl px-4 py-3 text-sm font-mono text-emerald-300 text-center">
                  {section.formula}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Rumus Penting */}
        {(active.formulas || []).length > 0 && (
          <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-3.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>Rumus Penting</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {active.formulas.map((f, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-[#161a23] border border-[#222734] rounded-xl p-3.5 space-y-1.5"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                    {f.label}
                  </div>
                  <div className="text-sm font-mono font-semibold text-emerald-300 bg-[#0f1512] border border-[#1c332c] rounded-lg px-3 py-2">
                    {f.expr}
                  </div>
                  {f.note && <div className="text-[11px] text-zinc-500 leading-relaxed">{f.note}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contoh Soal */}
        {(active.examples || []).length > 0 && (
          <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-3.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <Target className="w-4 h-4 text-emerald-400" />
              <span>Contoh Soal & Penyelesaian</span>
            </div>

            <div className="space-y-3">
              {active.examples.map((ex, exIdx) => (
                <div key={exIdx} className="bg-[#161a23] border border-[#222734] rounded-xl p-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-[#222838] border border-[#2c3344] text-zinc-300 shrink-0">
                      Soal {exIdx + 1}
                    </span>
                    <p className="text-[13px] text-zinc-200 leading-relaxed">{ex.question}</p>
                  </div>

                  <ol className="space-y-1.5">
                    {(ex.steps || []).map((step, stIdx) => (
                      <li key={stIdx} className="flex items-start gap-2 text-[13px] text-zinc-400">
                        <span className="mt-0.5 w-4 h-4 rounded bg-[#222838] border border-[#2c3344] flex items-center justify-center text-[10px] font-bold text-zinc-400 shrink-0">
                          {stIdx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="bg-[#123624] border border-[#1c5438] rounded-lg px-3 py-2 text-xs font-semibold text-emerald-300">
                    {ex.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        {(active.tips || []).length > 0 && (
          <div className="bg-[#151410] border border-[#33301c] rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Tips Belajar</span>
            </div>
            <ul className="space-y-2">
              {active.tips.map((tip, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2 text-[13px] text-zinc-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Aksi: Latihan Soal + Navigasi Bab */}
        <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-4">
          <button
            onClick={() => onStartQuizForChapter && onStartQuizForChapter(kelas, active.id)}
            className="w-full py-3 px-5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-900 font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4" />
            <span>
              {kelas === 12
                ? `Kerjakan Latihan Soal Bab ${active.id}`
                : `Kerjakan Latihan Soal Fisika Kelas ${kelas}`}
            </span>
          </button>
          <p className="text-[11px] text-zinc-500 text-center">
            {kelas === 12
              ? `Soal akan difokuskan pada ${active.title}.`
              : `Latihan soal Fisika umum tingkat Kelas ${kelas}.`}
          </p>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => goChapter(activeIndex - 1)}
              disabled={!prevChapter}
              className="flex items-center justify-start gap-2 px-3.5 py-2.5 rounded-xl bg-[#161a23] border border-[#252b39] text-xs font-medium text-zinc-300 hover:border-zinc-500 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="truncate">{prevChapter ? prevChapter.title : 'Bab Pertama'}</span>
            </button>
            <button
              onClick={() => goChapter(activeIndex + 1)}
              disabled={!nextChapter}
              className="flex items-center justify-end gap-2 px-3.5 py-2.5 rounded-xl bg-[#161a23] border border-[#252b39] text-xs font-medium text-zinc-300 hover:border-zinc-500 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="truncate">{nextChapter ? nextChapter.title : 'Bab Terakhir'}</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ============================================================
   *  TAMPILAN DAFTAR BAB
   * ============================================================ */
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn text-zinc-100 pb-12">
      {/* Header */}
      <div className="border-b border-[#222734] pb-5 space-y-1.5">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Belajar Materi</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Materi Pelajaran Kelas {kelas}
        </h1>
        <p className="text-zinc-400 text-xs sm:text-sm">
          Baca materi Kurikulum Merdeka per bab, tandai yang sudah dipelajari, lalu langsung kerjakan latihan soalnya.
        </p>
      </div>

      {/* 1. Pilih Mata Pelajaran */}
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2 text-zinc-200 font-semibold text-sm">
          <Sparkles className="w-4 h-4 text-zinc-400" />
          <span>1. Pilih Mata Pelajaran</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {MATERI_SUBJECTS.map(s => {
            const available = s.available && hasMateri(s.id);
            const isSelected = available && subjectId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleSelectSubject(s.id)}
                disabled={!available}
                className={`text-left rounded-xl border p-3.5 transition-colors ${
                  isSelected
                    ? 'border-emerald-400/60 bg-[#131a17]'
                    : available
                      ? 'border-[#222734] bg-[#151922] hover:border-[#353d52] cursor-pointer'
                      : 'border-[#1c2029] bg-[#111319] opacity-60 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs font-semibold ${available ? 'text-white' : 'text-zinc-500'}`}>
                    {s.name}
                  </span>
                  <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[#202534] border border-[#2a3246] text-zinc-400">
                    {available ? 'Tersedia' : 'Segera Hadir'}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 mt-1 leading-snug line-clamp-2">{s.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Pilih Kelas */}
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2 text-zinc-200 font-semibold text-sm">
          <GraduationCap className="w-4 h-4 text-zinc-400" />
          <span>2. Pilih Tingkat Kelas</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {availableKelas.map(cls => (
            <button
              key={cls}
              onClick={() => handleSelectKelas(cls)}
              className={`py-2.5 px-3 rounded-xl border text-center font-medium text-xs transition-colors cursor-pointer ${
                kelas === cls
                  ? 'border-emerald-400/70 bg-[#16211d] text-emerald-300'
                  : 'border-[#222734] bg-[#161a23] text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
              }`}
            >
              Kelas {cls}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Daftar Bab */}
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-zinc-200 font-semibold text-sm">
            <Layers className="w-4 h-4 text-zinc-400" />
            <span>3. Daftar Bab {subject.name} — Kelas {kelas}</span>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Cari bab..."
              className="w-full sm:w-52 bg-[#161a23] border border-[#252b39] rounded-lg pl-8 pr-3 py-2 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
            />
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-zinc-400">
            <span>Progres belajar: <span className="font-semibold text-emerald-300">{readCount}/{chapters.length}</span> bab dipelajari</span>
            <span className="font-semibold text-emerald-300">{progressPct}%</span>
          </div>
          <div className="h-1.5 w-full bg-[#1a1f2c] rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Kartu Bab */}
        {filteredChapters.length === 0 ? (
          <p className="text-xs text-zinc-500 italic py-6 text-center">
            {chapters.length === 0
              ? `Materi ${subject.name} Kelas ${kelas} belum tersedia.`
              : 'Bab tidak ditemukan. Coba kata kunci lain.'}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {filteredChapters.map(chap => {
              const done = isRead(chap.id);
              return (
                <button
                  key={chap.id}
                  onClick={() => setActiveId(chap.id)}
                  className="text-left bg-[#161a23] border border-[#222734] rounded-xl p-4 hover:border-emerald-400/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-bold shrink-0 ${
                      done
                        ? 'bg-[#123624] border-[#1c5438] text-emerald-300'
                        : 'bg-[#222838] border-[#2c3344] text-zinc-300'
                    }`}>
                      {done ? <CircleCheck className="w-4 h-4" /> : chap.id}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xs font-semibold text-white leading-snug pr-1">
                          {chap.title}
                        </h3>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 shrink-0 transition-colors" />
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-1 leading-relaxed line-clamp-2">
                        {chap.summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#202534] border border-[#2a3246] text-zinc-400">
                          {(chap.sections || []).length} Subbab
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#202534] border border-[#2a3246] text-zinc-400">
                          {(chap.formulas || []).length} Rumus
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#202534] border border-[#2a3246] text-zinc-400">
                          {(chap.examples || []).length} Contoh Soal
                        </span>
                        {done && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#123624] border border-[#1c5438] text-emerald-300 font-semibold">
                            Dipelajari
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Ajakan lanjut */}
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="text-xs font-semibold text-zinc-200">Sudah selesai membaca?</div>
          <div className="text-[11px] text-zinc-500 mt-0.5">
            Uji pemahamanmu dengan latihan soal {subject.name} Kelas {kelas}.
          </div>
        </div>
        <button
          onClick={() => onStartQuizForChapter && onStartQuizForChapter(kelas, 0)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 font-bold text-xs transition-colors cursor-pointer shrink-0"
        >
          <Play className="w-3.5 h-3.5" />
          <span>Mulai Latihan Soal</span>
        </button>
      </div>

      {onGoHome && (
        <button
          onClick={onGoHome}
          className="mx-auto flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </button>
      )}
    </div>
  );
}
