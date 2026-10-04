import React, { useState, useRef } from 'react';
import { 
  ShieldCheck, 
  Users, 
  BookOpen, 
  PlusCircle, 
  Trash2, 
  ArrowLeft, 
  CheckCircle2, 
  Database,
  BarChart3,
  Download,
  Upload,
  FileJson,
  AlertCircle,
  X,
  FileText,
  Copy,
  Check
} from 'lucide-react';
import { BANK_SOAL } from '../data/soal';

export default function AdminDashboard({ onBackHome }) {
  const [activeTab, setActiveTab] = useState('bank'); // 'bank' | 'activity' | 'users'
  
  // Custom bank questions stored in localStorage
  const [customQuestions, setCustomQuestions] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kuispintar_custom_questions') || '[]');
    } catch {
      return [];
    }
  });

  // Users stored in localStorage
  const [usersList, setUsersList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kuispintar_users') || '[]');
    } catch {
      return [];
    }
  });

  // Global activity history stored in localStorage
  const [activityList, setActivityList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kuispintar_global_activity') || '[]');
    } catch {
      return [];
    }
  });

  // Filter for bank viewing (only subject & stage, NO difficulty level)
  const [selectedSubj, setSelectedSubj] = useState('biologi');
  const [selectedStage, setSelectedStage] = useState('sma');

  // Form State for Adding New Question Manually
  const [showAddForm, setShowAddForm] = useState(false);
  const [formSoal, setFormSoal] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [optE, setOptE] = useState('');
  const [formJawaban, setFormJawaban] = useState('A');
  const [formPembahasan, setFormPembahasan] = useState('');
  const [successNotif, setSuccessNotif] = useState('');

  // Import JSON Modal State
  const [showImportModal, setShowImportModal] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');
  const [importFile, setImportFile] = useState(null);
  const [importMode, setImportMode] = useState('append'); // 'append' | 'overwrite'
  const [parsedPreview, setParsedPreview] = useState(null); // { valid: bool, questions: [], errors: [] }
  const [isCopiedTemplate, setIsCopiedTemplate] = useState(false);
  const fileInputRef = useRef(null);

  // Parse and Validate JSON Questions
  const parseAndValidateQuestions = (jsonString) => {
    const errors = [];
    let rawList = [];

    try {
      rawList = JSON.parse(jsonString);
    } catch (err) {
      return { 
        valid: false, 
        questions: [], 
        errors: [`Format JSON tidak valid: ${err.message}`] 
      };
    }

    if (!Array.isArray(rawList)) {
      if (typeof rawList === 'object' && rawList !== null) {
        if (Array.isArray(rawList.questions)) rawList = rawList.questions;
        else if (Array.isArray(rawList.soal)) rawList = rawList.soal;
        else if (Array.isArray(rawList.data)) rawList = rawList.data;
        else rawList = [rawList];
      } else {
        return { 
          valid: false, 
          questions: [], 
          errors: ['JSON harus berupa array daftar soal atau objek berisi array soal.'] 
        };
      }
    }

    if (rawList.length === 0) {
      return { 
        valid: false, 
        questions: [], 
        errors: ['Array soal dalam berkas JSON masih kosong.'] 
      };
    }

    const validated = [];
    rawList.forEach((item, index) => {
      const qIndex = index + 1;
      const questionText = item.soal || item.question;
      if (!questionText || typeof questionText !== 'string' || !questionText.trim()) {
        errors.push(`Soal #${qIndex}: Teks soal ("soal" atau "question") tidak boleh kosong.`);
        return;
      }

      // Parse choices
      let choices = item.pilihan || item.choices || item.options;
      if (typeof choices === 'object' && !Array.isArray(choices) && choices !== null) {
        choices = Object.values(choices);
      }
      if (!Array.isArray(choices) || choices.length < 2) {
        errors.push(`Soal #${qIndex}: Pilihan jawaban ("pilihan") harus berupa array berisi minimal 2 opsi (disarankan 5 opsi A-E).`);
        return;
      }

      // Answer validation
      let answerText = item.jawaban || item.answer;
      if (answerText === undefined || answerText === null) {
        errors.push(`Soal #${qIndex}: Kunci jawaban ("jawaban") wajib ditentukan.`);
        return;
      }

      // If answer is letter like "A", "B", "C", "D", "E"
      if (typeof answerText === 'string' && /^[A-Ea-e]$/.test(answerText.trim())) {
        const letterIdx = answerText.trim().toUpperCase().charCodeAt(0) - 65;
        if (choices[letterIdx]) {
          answerText = choices[letterIdx];
        }
      }

      // Ensure 5 choices for uniform A-E format
      const cleanChoices = choices.map(c => String(c).trim());
      while (cleanChoices.length < 5) {
        cleanChoices.push(`Pilihan ${String.fromCharCode(65 + cleanChoices.length)}`);
      }

      const subject = item.subject || selectedSubj || 'biologi';
      const stage = item.stage || (item.kelas <= 6 ? 'sd' : (item.kelas <= 9 ? 'smp' : 'sma')) || selectedStage || 'sma';
      const explanation = item.pembahasan || item.explanation || `Kunci jawaban benar: ${answerText}.`;

      validated.push({
        id: 'custom-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
        subject: String(subject).toLowerCase().replace(/\s+/g, '_'),
        stage: String(stage).toLowerCase(),
        kelas: item.kelas || (stage === 'sd' ? 6 : (stage === 'smp' ? 9 : 12)),
        chapter: item.chapter || item.bab || 0,
        soal: String(questionText).trim(),
        pilihan: cleanChoices.slice(0, 5),
        jawaban: String(answerText).trim(),
        pembahasan: String(explanation).trim(),
        createdAt: new Date().toLocaleDateString('id-ID')
      });
    });

    return {
      valid: validated.length > 0,
      questions: validated,
      errors
    };
  };

  // Handle Textarea JSON Change
  const handleJsonTextChange = (text) => {
    setImportJsonText(text);
    if (!text.trim()) {
      setParsedPreview(null);
      return;
    }
    const result = parseAndValidateQuestions(text);
    setParsedPreview(result);
  };

  // Handle File Upload Change
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImportFile(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        setImportJsonText(content);
        const result = parseAndValidateQuestions(content);
        setParsedPreview(result);
      }
    };
    reader.readAsText(file);
  };

  // Execute Import
  const handleExecuteImport = () => {
    if (!parsedPreview || !parsedPreview.valid || parsedPreview.questions.length === 0) {
      alert('Tidak ada soal valid yang dapat diimpor. Silakan periksa format JSON.');
      return;
    }

    let updated = [];
    if (importMode === 'overwrite') {
      updated = [...parsedPreview.questions];
    } else {
      updated = [...parsedPreview.questions, ...customQuestions];
    }

    setCustomQuestions(updated);
    localStorage.setItem('kuispintar_custom_questions', JSON.stringify(updated));

    // Cleanup & Close
    setShowImportModal(false);
    setImportJsonText('');
    setImportFile(null);
    setParsedPreview(null);
    setSuccessNotif(`Berhasil mengimpor ${parsedPreview.questions.length} soal ke Bank Soal!`);
    setTimeout(() => setSuccessNotif(''), 4000);
  };

  // Download JSON Template
  const handleDownloadTemplate = () => {
    fetch('/template_soal.json')
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'template_soal.json';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(() => {
        // Fallback direct JSON generate
        const sampleTemplate = [
          {
            subject: "biologi",
            stage: "sma",
            kelas: 12,
            chapter: 1,
            soal: "Pada persilangan monohibrid dominan penuh (Bb × Bb), berapakah persentase keturunan yang berfenotipe dominan?",
            pilihan: ["25%", "50%", "75%", "100%", "Semua salah"],
            jawaban: "75%",
            pembahasan: "Persilangan Bb × Bb menghasilkan rasio genotipe 1 BB : 2 Bb : 1 bb. Keturunan berfenotipe dominan (BB dan Bb) berjumlah 3 dari 4 bagian (75%)."
          },
          {
            subject: "fisika",
            stage: "sma",
            kelas: 10,
            chapter: 2,
            soal: "Sebuah balok bermassa 5 kg ditarik gaya mendatar 30 N di atas lantai licin. Berapakah percepatan balok?",
            pilihan: ["4 m/s²", "5 m/s²", "6 m/s²", "8 m/s²", "10 m/s²"],
            jawaban: "6 m/s²",
            pembahasan: "Hukum II Newton: a = F / m = 30 / 5 = 6 m/s²."
          }
        ];
        const blob = new Blob([JSON.stringify(sampleTemplate, null, 2)], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'template_soal.json';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      });
  };

  // Export Current Custom Questions as JSON
  const handleExportBankJson = () => {
    const dataToExport = customQuestions.length > 0 ? customQuestions : combinedList;
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bank_soal_${selectedSubj}_${selectedStage}.json`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  // Handle Add New Question Manually
  const handleSaveQuestion = (e) => {
    e.preventDefault();
    if (!formSoal || !optA || !optB || !optC || !optD || !optE) {
      alert('Mohon lengkapi soal dan seluruh 5 pilihan jawaban (A, B, C, D, E)!');
      return;
    }

    const choicesMap = { A: optA, B: optB, C: optC, D: optD, E: optE };
    const correctVal = choicesMap[formJawaban] || optA;

    const newQ = {
      id: 'custom-' + Date.now(),
      subject: selectedSubj,
      stage: selectedStage,
      soal: formSoal,
      pilihan: [optA, optB, optC, optD, optE],
      jawaban: correctVal,
      pembahasan: formPembahasan || `Kunci jawaban benar adalah: ${correctVal}.`,
      createdAt: new Date().toLocaleDateString('id-ID')
    };

    const updated = [newQ, ...customQuestions];
    setCustomQuestions(updated);
    localStorage.setItem('kuispintar_custom_questions', JSON.stringify(updated));

    // Reset Form
    setFormSoal('');
    setOptA('');
    setOptB('');
    setOptC('');
    setOptD('');
    setOptE('');
    setFormPembahasan('');
    setShowAddForm(false);
    setSuccessNotif('Soal baru berhasil ditambahkan ke Bank Soal!');
    setTimeout(() => setSuccessNotif(''), 4000);
  };

  // Delete Custom Question
  const handleDeleteCustomQ = (id) => {
    if (confirm('Yakin ingin menghapus soal ini?')) {
      const updated = customQuestions.filter(q => q.id !== id);
      setCustomQuestions(updated);
      localStorage.setItem('kuispintar_custom_questions', JSON.stringify(updated));
    }
  };

  // Get current static questions (pooled across all difficulties)
  const stageObj = BANK_SOAL[selectedSubj]?.[selectedStage] || {};
  const staticList = [
    ...(stageObj.mudah || []),
    ...(stageObj.sedang || []),
    ...(stageObj.sulit || [])
  ];

  const filteredCustom = customQuestions.filter(
    q => q.subject === selectedSubj && q.stage === selectedStage
  );
  const combinedList = [...filteredCustom, ...staticList];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-16 text-zinc-100">
      {/* Admin Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#12151c] border border-[#222734] rounded-2xl p-5">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#1c2230] border border-[#2b354a] flex items-center justify-center text-zinc-200">
            <ShieldCheck className="w-6 h-6 text-zinc-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white">
                Dashboard Admin
              </h1>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#1e2533] text-zinc-300 border border-[#2b3549]">
                Administrator
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Kelola bank soal kurikulum, impor soal JSON, dan pantau aktivitas kuis siswa
            </p>
          </div>
        </div>

        <button
          onClick={onBackHome}
          className="px-3.5 py-2 rounded-xl border border-[#222734] bg-[#161a23] text-zinc-300 font-medium text-xs hover:border-zinc-500 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </button>
      </div>

      {/* METRIC CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#12151c] border border-[#222734] rounded-xl p-4 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <Users className="w-3.5 h-3.5" />
            <span>Siswa Terdaftar</span>
          </div>
          <div className="text-xl font-bold text-white">{usersList.length + 2} Akun</div>
        </div>

        <div className="bg-[#12151c] border border-[#222734] rounded-xl p-4 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <Database className="w-3.5 h-3.5" />
            <span>Total Soal Bank</span>
          </div>
          <div className="text-xl font-bold text-white">{135 + customQuestions.length} Soal</div>
        </div>

        <div className="bg-[#12151c] border border-[#222734] rounded-xl p-4 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Kuis Selesai</span>
          </div>
          <div className="text-xl font-bold text-white">{activityList.length} Sesi</div>
        </div>

        <div className="bg-[#12151c] border border-[#222734] rounded-xl p-4 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Soal Kustom</span>
          </div>
          <div className="text-xl font-bold text-emerald-400">{customQuestions.length} Soal</div>
        </div>
      </div>

      {/* SUCCESS NOTIFICATION */}
      {successNotif && (
        <div className="p-3.5 bg-[#123624] border border-[#1c5438] rounded-xl text-xs font-semibold text-emerald-300 flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{successNotif}</span>
        </div>
      )}

      {/* TABS NAVIGATION */}
      <div className="flex bg-[#161a23] p-1 rounded-xl border border-[#222734] max-w-sm">
        <button
          onClick={() => setActiveTab('bank')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'bank'
              ? 'bg-[#252c3d] text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Kelola Bank Soal
        </button>

        <button
          onClick={() => setActiveTab('activity')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'activity'
              ? 'bg-[#252c3d] text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Log Aktivitas
        </button>

        <button
          onClick={() => setActiveTab('users')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'users'
              ? 'bg-[#252c3d] text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Pengguna
        </button>
      </div>

      {/* TAB 1: BANK SOAL */}
      {activeTab === 'bank' && (
        <div className="space-y-4">
          {/* Controls Bar with Import & Export Buttons */}
          <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-4 flex flex-wrap justify-between items-center gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedSubj}
                onChange={(e) => setSelectedSubj(e.target.value)}
                className="px-3 py-1.5 bg-[#161a23] border border-[#252b3a] rounded-lg text-xs font-medium text-zinc-200 focus:outline-none"
              >
                <option value="biologi">Biologi</option>
                <option value="fisika">Fisika</option>
                <option value="kimia">Kimia</option>
                <option value="sejarah">Sejarah</option>
                <option value="bahasa_indonesia">Bahasa Indonesia</option>
                <option value="matematika_umum">Matematika Umum</option>
                <option value="matematika_lanjut">Matematika T. Lanjut</option>
              </select>

              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="px-3 py-1.5 bg-[#161a23] border border-[#252b3a] rounded-lg text-xs font-medium text-zinc-200 focus:outline-none"
              >
                <option value="sd">Jenjang SD</option>
                <option value="smp">Jenjang SMP</option>
                <option value="sma">Jenjang SMA</option>
              </select>
            </div>

            {/* Actions: Import JSON, Download Template, Add Manual */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleDownloadTemplate}
                className="px-3 py-1.5 bg-[#161a23] hover:bg-[#202534] text-zinc-300 hover:text-white border border-[#252b3a] rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Unduh berkas contoh format JSON untuk soal"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Template JSON</span>
              </button>

              <button
                onClick={() => setShowImportModal(true)}
                className="px-3.5 py-1.5 bg-[#1c2436] hover:bg-[#253047] text-zinc-100 border border-[#2e3b56] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5 text-zinc-300" />
                <span>Import JSON</span>
              </button>

              <button
                onClick={() => setShowAddForm(prev => !prev)}
                className="px-3.5 py-1.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>{showAddForm ? 'Tutup Form' : 'Tambah Soal Manual'}</span>
              </button>
            </div>
          </div>

          {/* MANUAL ADD QUESTION FORM */}
          {showAddForm && (
            <form onSubmit={handleSaveQuestion} className="bg-[#141822] border border-[#282f42] rounded-2xl p-5 space-y-3.5 animate-fadeIn">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-bold text-zinc-200 uppercase tracking-wide">
                  Tambah Soal Manual: {selectedSubj.toUpperCase()} ({selectedStage.toUpperCase()})
                </h3>
                <span className="text-[11px] text-zinc-500">Format 5 Pilihan Ganda (A-E)</span>
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">
                  Teks Soal / Pertanyaan:
                </label>
                <textarea
                  rows={3}
                  value={formSoal}
                  onChange={(e) => setFormSoal(e.target.value)}
                  placeholder="Ketikkan teks pertanyaan soal..."
                  className="w-full px-3 py-2 bg-[#10131a] border border-[#232938] rounded-lg text-xs text-white focus:outline-none focus:border-zinc-400"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">Pilihan A:</label>
                  <input
                    type="text"
                    value={optA}
                    onChange={(e) => setOptA(e.target.value)}
                    className="w-full px-3 py-1.5 bg-[#10131a] border border-[#232938] rounded-lg text-xs text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">Pilihan B:</label>
                  <input
                    type="text"
                    value={optB}
                    onChange={(e) => setOptB(e.target.value)}
                    className="w-full px-3 py-1.5 bg-[#10131a] border border-[#232938] rounded-lg text-xs text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">Pilihan C:</label>
                  <input
                    type="text"
                    value={optC}
                    onChange={(e) => setOptC(e.target.value)}
                    className="w-full px-3 py-1.5 bg-[#10131a] border border-[#232938] rounded-lg text-xs text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">Pilihan D:</label>
                  <input
                    type="text"
                    value={optD}
                    onChange={(e) => setOptD(e.target.value)}
                    className="w-full px-3 py-1.5 bg-[#10131a] border border-[#232938] rounded-lg text-xs text-white"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] text-zinc-400 mb-1">Pilihan E:</label>
                  <input
                    type="text"
                    value={optE}
                    onChange={(e) => setOptE(e.target.value)}
                    className="w-full px-3 py-1.5 bg-[#10131a] border border-[#232938] rounded-lg text-xs text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">Kunci Jawaban Benar:</label>
                  <select
                    value={formJawaban}
                    onChange={(e) => setFormJawaban(e.target.value)}
                    className="w-full px-3 py-1.5 bg-[#10131a] border border-[#232938] rounded-lg text-xs font-bold text-emerald-400"
                  >
                    <option value="A">Pilihan A</option>
                    <option value="B">Pilihan B</option>
                    <option value="C">Pilihan C</option>
                    <option value="D">Pilihan D</option>
                    <option value="E">Pilihan E</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">Pembahasan Singkat:</label>
                  <input
                    type="text"
                    value={formPembahasan}
                    onChange={(e) => setFormPembahasan(e.target.value)}
                    placeholder="Alasan / konsep ilmiah pemecahan..."
                    className="w-full px-3 py-1.5 bg-[#10131a] border border-[#232938] rounded-lg text-xs text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-3.5 py-1.5 bg-[#1a1f2c] text-zinc-400 hover:text-white rounded-lg text-xs"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded-lg text-xs font-bold cursor-pointer"
                >
                  Simpan ke Bank
                </button>
              </div>
            </form>
          )}

          {/* QUESTION LIST FOR SELECTED SUBJECT & STAGE */}
          <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-3">
            <div className="flex flex-wrap justify-between items-center text-xs text-zinc-400 font-medium gap-2">
              <span>
                {combinedList.length} Soal Tersedia ({selectedSubj.toUpperCase()} - {selectedStage.toUpperCase()})
              </span>
              <div className="flex items-center gap-3">
                <span>{filteredCustom.length} Kustom • {staticList.length} Bawaan</span>
                {combinedList.length > 0 && (
                  <button
                    onClick={handleExportBankJson}
                    className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1 underline transition-colors cursor-pointer"
                  >
                    <Download className="w-3 h-3" />
                    <span>Ekspor JSON</span>
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-3">
              {combinedList.length === 0 ? (
                <div className="py-12 text-center text-zinc-500 text-xs italic">
                  Belum ada soal untuk mapel {selectedSubj} jenjang {selectedStage}. Gunakan tombol "Import JSON" atau "Tambah Soal Manual" untuk menambahkan soal.
                </div>
              ) : (
                combinedList.map((q, idx) => (
                  <div 
                    key={q.id || idx}
                    className="p-3.5 bg-[#161a23] border border-[#222734] rounded-xl space-y-2"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-zinc-400">
                          #{idx + 1}
                        </span>
                        {q.id?.startsWith('custom') && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#14281e] text-emerald-300 border border-[#1b4330]">
                            Kustom / Impor
                          </span>
                        )}
                        {q.chapter > 0 && (
                          <span className="text-[10px] text-zinc-500">
                            Bab {q.chapter}
                          </span>
                        )}
                      </div>

                      {q.id?.startsWith('custom') && (
                        <button
                          onClick={() => handleDeleteCustomQ(q.id)}
                          className="text-zinc-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                          title="Hapus Soal Kustom Ini"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-zinc-200">
                      {q.soal}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-zinc-400 pt-0.5">
                      {q.pilihan?.map((opt, oIdx) => {
                        const isCorrect = opt === q.jawaban;
                        return (
                          <div 
                            key={oIdx}
                            className={`p-1.5 rounded border text-[11px] flex items-center justify-between ${
                              isCorrect 
                                ? 'border-[#1c5438] bg-[#123624] text-emerald-300 font-medium' 
                                : 'border-[#222734] bg-[#12151c]'
                            }`}
                          >
                            <span>
                              <span className="font-bold mr-1">{String.fromCharCode(65 + oIdx)}.</span> {opt}
                            </span>
                            {isCorrect && <Check className="w-3 h-3 text-emerald-400 shrink-0" />}
                          </div>
                        );
                      })}
                    </div>

                    {q.pembahasan && (
                      <div className="text-[11px] text-zinc-400 bg-[#11131a] p-2 rounded-lg border border-[#1f2432]">
                        <span className="text-zinc-500 font-medium">Pembahasan: </span>
                        {q.pembahasan}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ACTIVITY */}
      {activeTab === 'activity' && (
        <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-3">
          <div className="flex justify-between items-center text-xs text-zinc-400 font-medium">
            <span>Log Aktivitas Siswa</span>
            <span>{activityList.length} Entri</span>
          </div>

          {activityList.length === 0 ? (
            <div className="py-8 text-center text-zinc-500 text-xs italic">
              Belum ada riwayat aktivitas kuis.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#222734] text-zinc-500 font-medium">
                    <th className="py-2.5 px-2">Nama</th>
                    <th className="py-2.5 px-2">Mapel</th>
                    <th className="py-2.5 px-2">Kelas</th>
                    <th className="py-2.5 px-2">Mode</th>
                    <th className="py-2.5 px-2">Skor</th>
                    <th className="py-2.5 px-2">Akurasi</th>
                    <th className="py-2.5 px-2">Waktu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222734]">
                  {activityList.map((act, idx) => (
                    <tr key={idx} className="hover:bg-[#161a24]">
                      <td className="py-2 px-2 font-medium text-white">{act.userName || 'Siswa'}</td>
                      <td className="py-2 px-2 capitalize">{act.subject?.replace(/_/g, ' ')}</td>
                      <td className="py-2 px-2">Kelas {act.kelas || '-'}</td>
                      <td className="py-2 px-2 uppercase">{act.examMode}</td>
                      <td className="py-2 px-2 font-mono">{act.score}/{act.total}</td>
                      <td className="py-2 px-2">
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#1e2533] text-zinc-300">
                          {act.percentage}%
                        </span>
                      </td>
                      <td className="py-2 px-2 text-zinc-500">{act.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: USERS */}
      {activeTab === 'users' && (
        <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-5 space-y-3">
          <h3 className="font-semibold text-xs text-zinc-300 uppercase tracking-wide">
            Pengguna Terdaftar
          </h3>

          <div className="divide-y divide-[#222734]">
            <div className="py-2.5 flex justify-between items-center text-xs">
              <div>
                <div className="font-medium text-white">Ahmad Siswa Pintar (Demo)</div>
                <div className="text-[11px] text-zinc-500">siswa@kuispintar.com • Kelas 12</div>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-[#181d28] text-zinc-400 rounded">Siswa</span>
            </div>

            <div className="py-2.5 flex justify-between items-center text-xs">
              <div>
                <div className="font-medium text-white">Bapak Admin Super (Demo)</div>
                <div className="text-[11px] text-zinc-500">admin@kuispintar.com • Super User</div>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-[#181d28] text-zinc-400 rounded">Admin</span>
            </div>

            {usersList.map((u, idx) => (
              <div key={idx} className="py-2.5 flex justify-between items-center text-xs">
                <div>
                  <div className="font-medium text-white">{u.name}</div>
                  <div className="text-[11px] text-zinc-500">{u.email} • Kelas {u.kelas || '-'}</div>
                </div>
                <span className="text-[10px] px-2 py-0.5 bg-[#181d28] text-zinc-400 rounded capitalize">{u.role}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL IMPORT SOAL JSON */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#12151c] border border-[#282f3f] rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-zinc-100">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#222734] flex justify-between items-center bg-[#151922]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#1e2638] border border-[#2b374f] flex items-center justify-center text-zinc-200">
                  <FileJson className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Import Soal dari Berkas JSON
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    Unggah berkas .json atau tempel kode JSON untuk menambahkan soal ke bank
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowImportModal(false);
                  setParsedPreview(null);
                  setImportJsonText('');
                  setImportFile(null);
                }}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[#202533] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4">
              {/* File Upload Area */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  1. Pilih Berkas .JSON
                </label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#283143] hover:border-zinc-400 bg-[#161a24] rounded-xl p-4 text-center cursor-pointer transition-colors space-y-1.5"
                >
                  <Upload className="w-6 h-6 text-zinc-400 mx-auto" />
                  <div className="text-xs font-medium text-zinc-300">
                    {importFile ? (
                      <span className="text-emerald-400 font-bold">{importFile.name} ({(importFile.size / 1024).toFixed(1)} KB)</span>
                    ) : (
                      <span>Klik untuk memilih berkas JSON dari komputer</span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-500">Mendukung format array objek JSON soal</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Textarea Paste Area */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-zinc-300">
                    2. Atau Tempel (Paste) Kode JSON:
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleDownloadTemplate}
                      className="text-[11px] text-zinc-400 hover:text-zinc-200 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Download className="w-3 h-3" />
                      <span>Unduh Template</span>
                    </button>
                  </div>
                </div>

                <textarea
                  rows={6}
                  value={importJsonText}
                  onChange={(e) => handleJsonTextChange(e.target.value)}
                  placeholder='[\n  {\n    "subject": "biologi",\n    "stage": "sma",\n    "kelas": 12,\n    "soal": "Pertanyaan soal...",\n    "pilihan": ["A", "B", "C", "D", "E"],\n    "jawaban": "C",\n    "pembahasan": "Penjelasan..."\n  }\n]'
                  className="w-full px-3.5 py-2.5 bg-[#10131a] border border-[#232938] rounded-xl text-xs font-mono text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
                />
              </div>

              {/* Import Mode Options */}
              <div className="bg-[#161a24] border border-[#222734] rounded-xl p-3.5 space-y-2">
                <label className="block text-xs font-semibold text-zinc-300">
                  3. Mode Import:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className={`p-2.5 rounded-lg border text-xs font-medium flex items-center gap-2.5 cursor-pointer transition-colors ${
                    importMode === 'append'
                      ? 'bg-[#222a3a] text-white border-zinc-400'
                      : 'bg-[#12151c] text-zinc-400 border-[#222734]'
                  }`}>
                    <input
                      type="radio"
                      name="importMode"
                      checked={importMode === 'append'}
                      onChange={() => setImportMode('append')}
                      className="accent-zinc-300"
                    />
                    <div>
                      <div className="font-semibold text-white">Tambahkan (Append)</div>
                      <div className="text-[10px] text-zinc-400">Gabungkan ke soal yang sudah ada</div>
                    </div>
                  </label>

                  <label className={`p-2.5 rounded-lg border text-xs font-medium flex items-center gap-2.5 cursor-pointer transition-colors ${
                    importMode === 'overwrite'
                      ? 'bg-[#222a3a] text-white border-zinc-400'
                      : 'bg-[#12151c] text-zinc-400 border-[#222734]'
                  }`}>
                    <input
                      type="radio"
                      name="importMode"
                      checked={importMode === 'overwrite'}
                      onChange={() => setImportMode('overwrite')}
                      className="accent-zinc-300"
                    />
                    <div>
                      <div className="font-semibold text-white">Ganti Semua (Overwrite)</div>
                      <div className="text-[10px] text-zinc-400">Timpa seluruh soal kustom sebelumnya</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Parsing Validation Preview */}
              {parsedPreview && (
                <div className="space-y-3">
                  {parsedPreview.valid ? (
                    <div className="p-3 bg-[#123624] border border-[#1c5438] rounded-xl text-xs flex items-center justify-between text-emerald-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-semibold">
                          Validasi Berhasil: {parsedPreview.questions.length} soal siap diimpor!
                        </span>
                      </div>
                      <span className="text-[10px] bg-[#1a442e] px-2 py-0.5 rounded text-emerald-200 font-mono">
                        Siap Proses
                      </span>
                    </div>
                  ) : (
                    <div className="p-3 bg-[#3b171a] border border-[#5e2329] rounded-xl text-xs space-y-1 text-rose-300">
                      <div className="flex items-center gap-2 font-bold">
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>Validasi Gagal — Ditemukan Kesalahan:</span>
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 text-[11px] pl-1">
                        {parsedPreview.errors.map((err, eIdx) => (
                          <li key={eIdx}>{err}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Question Preview Table */}
                  {parsedPreview.questions.length > 0 && (
                    <div className="bg-[#161a24] border border-[#222734] rounded-xl p-3 space-y-2 max-h-48 overflow-y-auto">
                      <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wide">
                        Pratinjau Soal yang Akan Diimpor:
                      </div>
                      <div className="space-y-2">
                        {parsedPreview.questions.map((pq, pIdx) => (
                          <div key={pIdx} className="p-2 bg-[#12151c] rounded-lg border border-[#202534] text-xs space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-white">
                                #{pIdx + 1}. {pq.soal}
                              </span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1e2536] text-zinc-300 capitalize shrink-0 ml-2">
                                {pq.subject} • {pq.stage}
                              </span>
                            </div>
                            <div className="text-[11px] text-zinc-400">
                              Kunci Jawaban: <span className="text-emerald-400 font-semibold">{pq.jawaban}</span> ({pq.pilihan.length} pilihan)
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#222734] bg-[#151922] flex justify-between items-center">
              <button
                type="button"
                onClick={handleDownloadTemplate}
                className="px-3 py-1.5 rounded-lg border border-[#252b3a] bg-[#161a24] hover:bg-[#202534] text-zinc-300 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh File Template (.json)</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowImportModal(false);
                    setParsedPreview(null);
                    setImportJsonText('');
                    setImportFile(null);
                  }}
                  className="px-3.5 py-1.5 rounded-lg text-zinc-400 hover:text-white text-xs font-medium transition-colors cursor-pointer"
                >
                  Batal
                </button>

                <button
                  type="button"
                  disabled={!parsedPreview || !parsedPreview.valid || parsedPreview.questions.length === 0}
                  onClick={handleExecuteImport}
                  className="px-4 py-1.5 rounded-lg bg-zinc-100 hover:bg-white disabled:opacity-40 text-zinc-950 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>
                    Import Sekarang {parsedPreview?.questions?.length ? `(${parsedPreview.questions.length} Soal)` : ''}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
