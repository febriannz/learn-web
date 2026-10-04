import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import QuizView from './components/QuizView';
import ResultsView from './components/ResultsView';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import AuthModal from './components/AuthModal';
import LearnView from './components/LearnView';

import { 
  generateMathQuestion, 
  generateFisikaQuestion, 
  generateKimiaQuestion, 
  generateBiologiMendelQuestion,
  randInt 
} from './data/generators';
import { BANK_SOAL } from './data/soal';

// Fisher-Yates Shuffle
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Answer Normalization & Math Fraction Evaluation
function normalizeAnswer(str) {
  if (typeof str !== 'string') str = String(str);
  return str.trim().toLowerCase().replace(/\s+/g, '');
}

function checkAnswerMatch(userAns, correctAns) {
  const u = normalizeAnswer(userAns);
  const c = normalizeAnswer(correctAns);
  if (u === c) return true;

  if (u.includes('/') || c.includes('/')) {
    try {
      const evalU = u.includes('/') ? evalFraction(u) : parseFloat(u);
      const evalC = c.includes('/') ? evalFraction(c) : parseFloat(c);
      if (!isNaN(evalU) && !isNaN(evalC)) {
        return Math.abs(evalU - evalC) < 0.0001;
      }
    } catch (e) {
      // ignore
    }
  }
  return false;
}

function evalFraction(fracStr) {
  const parts = fracStr.split('/');
  if (parts.length === 2) {
    const num = parseFloat(parts[0]);
    const den = parseFloat(parts[1]);
    if (den !== 0) return num / den;
  }
  return NaN;
}

// Helper to get combined bank questions without difficulty filtering
function getCombinedBankQuestions(subj, stage) {
  const stageData = BANK_SOAL[subj]?.[stage];
  if (!stageData) return [];
  return [
    ...(stageData.mudah || []),
    ...(stageData.sedang || []),
    ...(stageData.sulit || [])
  ];
}

export default function App() {
  // App View State: 'home' | 'learn' | 'quiz' | 'results' | 'user_dashboard' | 'admin_dashboard'
  const [view, setView] = useState('home');

  // Auth State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kuispintar_current_user') || 'null');
    } catch {
      return null;
    }
  });
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Quiz History Sessions (Saved for User Dashboard & Review)
  const [quizSessions, setQuizSessions] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kuispintar_sessions') || '[]');
    } catch {
      return [];
    }
  });

  // Quiz Configurations State (without difficulty level)
  const [selectedSubject, setSelectedSubject] = useState('matematika_umum');
  const [selectedCount, setSelectedCount] = useState(10);
  const [selectedClass, setSelectedClass] = useState(() => currentUser?.kelas || 12);
  const [selectedExamMode, setSelectedExamMode] = useState('per_bab'); // 'per_bab' | 'pts' | 'pas' | 'ukk'
  const [selectedChapter, setSelectedChapter] = useState(0); // 0 = Semua Bab, 1..12 = Bab 1-12

  // Active Quiz State
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [index]: { userAnswer, isCorrect, correctAnswer, explanation, choiceIndex } }
  const [score, setScore] = useState(0);
  const [wrongList, setWrongList] = useState([]);
  const [timerSeconds, setTimerSeconds] = useState(0);

  // Legacy History Summary per subject
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kuispintar_history') || '{}');
    } catch {
      return {};
    }
  });

  // Ensure clean dark theme permanently
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  // Timer Effect
  useEffect(() => {
    let interval = null;
    if (view === 'quiz') {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [view]);

  // Auth Handlers
  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    if (user.kelas) setSelectedClass(user.kelas);
  };

  // Belajar Materi -> mulai kuis per bab (state diset dulu, kuis dimulai setelah commit)
  const [pendingLearnStart, setPendingLearnStart] = useState(null);

  const handleLearnStartQuiz = (kelas, chapter) => {
    setSelectedSubject('fisika');
    setSelectedClass(kelas);
    setSelectedExamMode('per_bab');
    setSelectedChapter(chapter);
    setPendingLearnStart({ kelas, chapter, at: Date.now() });
  };

  useEffect(() => {
    if (!pendingLearnStart) return;
    setPendingLearnStart(null);
    handleStartQuiz(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingLearnStart]);

  const handleLogout = () => {
    localStorage.removeItem('kuispintar_current_user');
    setCurrentUser(null);
    setView('home');
  };

  // Start Quiz Function
  const handleStartQuiz = (focusMode = false) => {
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers({});
    setTimerSeconds(0);

    if (focusMode) {
      if (wrongList.length === 0) {
        alert('Tidak ada soal yang salah untuk diulang!');
        return;
      }
      setQuestions(shuffleArray(wrongList.map(item => item.rawQuestion)));
      setWrongList([]);
    } else {
      setWrongList([]);

      // Custom questions from localStorage
      let customQuestions = [];
      try {
        customQuestions = JSON.parse(localStorage.getItem('kuispintar_custom_questions') || '[]');
      } catch {
        customQuestions = [];
      }

      if (selectedSubject === 'matematika_umum' || selectedSubject === 'matematika_lanjut') {
        // 100% Auto-Generator
        const qList = [];
        for (let i = 0; i < selectedCount; i++) {
          qList.push(generateMathQuestion(selectedSubject, selectedClass, 'sedang', selectedChapter));
        }
        setQuestions(qList);

      } else if (selectedSubject === 'fisika') {
        // Mode Hybrid: 50% Generator + 50% Bank Soal
        const stage = selectedClass <= 6 ? 'sd' : (selectedClass <= 9 ? 'smp' : 'sma');
        const staticBank = getCombinedBankQuestions('fisika', stage);
        const customForSubj = customQuestions.filter(q => q.subject === 'fisika' && q.stage === stage);
        const subjectBank = [...customForSubj, ...staticBank];

        let filteredBank = subjectBank;
        if (selectedClass === 12 && selectedChapter > 0) {
          const chapMatch = subjectBank.filter(q => q.chapter === selectedChapter);
          if (chapMatch.length > 0) {
            filteredBank = chapMatch;
          }
        }

        const genCount = Math.round(selectedCount * 0.5);
        const bankCount = selectedCount - genCount;

        const qList = [];
        for (let i = 0; i < genCount; i++) {
          qList.push(generateFisikaQuestion(selectedClass, 'sedang', selectedChapter));
        }

        let pool = [];
        while (pool.length < bankCount && filteredBank.length > 0) {
          pool = pool.concat(shuffleArray(filteredBank));
        }
        const bankQs = pool.slice(0, bankCount).map(q => ({
          ...q,
          choices: shuffleArray(q.pilihan)
        }));
        qList.push(...bankQs);

        setQuestions(shuffleArray(qList));

      } else if (selectedSubject === 'kimia') {
        const stage = selectedClass <= 6 ? 'sd' : (selectedClass <= 9 ? 'smp' : 'sma');
        const staticBank = getCombinedBankQuestions('kimia', stage);
        const customForSubj = customQuestions.filter(q => q.subject === 'kimia' && q.stage === stage);
        const subjectBank = [...customForSubj, ...staticBank];

        let filteredBank = subjectBank;
        if (selectedClass === 12 && selectedChapter > 0) {
          const chapMatch = subjectBank.filter(q => q.chapter === selectedChapter);
          if (chapMatch.length > 0) {
            filteredBank = chapMatch;
          }
        }

        if (selectedClass === 12 && (selectedChapter === 3 || selectedChapter === 4)) {
          // Bab 3 (Gugus Fungsi Karbon) & Bab 4 (Makromolekul Organik) -> Bank Soal
          let pool = [];
          while (pool.length < selectedCount && filteredBank.length > 0) {
            pool = pool.concat(shuffleArray(filteredBank));
          }
          const selectedQuestions = pool.slice(0, selectedCount).map(q => ({
            ...q,
            choices: shuffleArray(q.pilihan)
          }));
          setQuestions(selectedQuestions);
        } else {
          // Bab 1, Bab 2, atau Semua Bab -> Hybrid 50% Generator + 50% Bank Soal
          const genCount = Math.round(selectedCount * 0.5);
          const bankCount = selectedCount - genCount;

          const qList = [];
          for (let i = 0; i < genCount; i++) {
            qList.push(generateKimiaQuestion(selectedClass, 'sedang', selectedChapter));
          }

          let pool = [];
          while (pool.length < bankCount && filteredBank.length > 0) {
            pool = pool.concat(shuffleArray(filteredBank));
          }
          const bankQs = pool.slice(0, bankCount).map(q => ({
            ...q,
            choices: shuffleArray(q.pilihan)
          }));
          qList.push(...bankQs);

          setQuestions(shuffleArray(qList));
        }

      } else if (selectedSubject === 'biologi') {
        const stage = selectedClass <= 6 ? 'sd' : (selectedClass <= 9 ? 'smp' : 'sma');
        const staticBank = getCombinedBankQuestions('biologi', stage);
        const customForSubj = customQuestions.filter(q => q.subject === 'biologi' && q.stage === stage);
        const allBiologiBank = [...customForSubj, ...staticBank];

        if (selectedClass === 12) {
          if (selectedChapter === 2) {
            // Bab 2: Genetika dan Pewarisan Sifat (50% Auto Mendel Generator + 50% Bank Soal Bab 2)
            const genCount = Math.round(selectedCount * 0.5);
            const bankCount = selectedCount - genCount;
            const qList = [];
            for (let i = 0; i < genCount; i++) {
              qList.push(generateBiologiMendelQuestion(randInt(1, 2)));
            }

            const chap2Bank = allBiologiBank.filter(q => q.chapter === 2 || !q.chapter);
            let pool = [];
            while (pool.length < bankCount && chap2Bank.length > 0) {
              pool = pool.concat(shuffleArray(chap2Bank));
            }
            const bankQs = pool.slice(0, bankCount).map(q => ({
              ...q,
              choices: shuffleArray(q.pilihan)
            }));
            qList.push(...bankQs);
            setQuestions(shuffleArray(qList));

          } else if (selectedChapter === 1 || selectedChapter === 3 || selectedChapter === 4) {
            // Bab 1 (Enzim & Metabolisme), Bab 3 (Evolusi), Bab 4 (Inovasi Bioteknologi)
            const filteredByChap = allBiologiBank.filter(q => q.chapter === selectedChapter);
            const activePoolSource = filteredByChap.length > 0 ? filteredByChap : allBiologiBank;

            let pool = [];
            while (pool.length < selectedCount && activePoolSource.length > 0) {
              pool = pool.concat(shuffleArray(activePoolSource));
            }
            const selectedQuestions = pool.slice(0, selectedCount).map(q => ({
              ...q,
              choices: shuffleArray(q.pilihan)
            }));
            setQuestions(selectedQuestions);

          } else {
            // Bab 0 (Semua Bab / PTS / PAS / UKK) Kelas 12:
            // 30% Auto Mendel Generator + 70% Bank Soal Campuran Bab 1, 2, 3, 4
            const genCount = Math.round(selectedCount * 0.3);
            const bankCount = selectedCount - genCount;
            const qList = [];
            for (let i = 0; i < genCount; i++) {
              qList.push(generateBiologiMendelQuestion(randInt(1, 2)));
            }

            let pool = [];
            while (pool.length < bankCount && allBiologiBank.length > 0) {
              pool = pool.concat(shuffleArray(allBiologiBank));
            }
            const bankQs = pool.slice(0, bankCount).map(q => ({
              ...q,
              choices: shuffleArray(q.pilihan)
            }));
            qList.push(...bankQs);
            setQuestions(shuffleArray(qList));
          }

        } else {
          // Kelas selain 12 (SD / SMP / SMA Kelas 10, 11)
          let pool = [];
          while (pool.length < selectedCount && allBiologiBank.length > 0) {
            pool = pool.concat(shuffleArray(allBiologiBank));
          }
          const selectedQuestions = pool.slice(0, selectedCount).map(q => ({
            ...q,
            choices: shuffleArray(q.pilihan)
          }));
          setQuestions(selectedQuestions);
        }

      } else {
        // Mapel Lain (Sejarah, Bahasa Indonesia): Bank Soal
        const stage = selectedClass <= 6 ? 'sd' : (selectedClass <= 9 ? 'smp' : 'sma');
        const staticBank = getCombinedBankQuestions(selectedSubject, stage);
        const customForSubj = customQuestions.filter(q => q.subject === selectedSubject && q.stage === stage);
        const subjectBank = [...customForSubj, ...staticBank];

        if (!subjectBank || subjectBank.length === 0) {
          alert(`Bank soal belum tersedia untuk ${selectedSubject} (${stage.toUpperCase()}).`);
          return;
        }

        let filteredBank = subjectBank;
        if (selectedClass === 12 && selectedChapter > 0) {
          const chapMatch = subjectBank.filter(q => q.chapter === selectedChapter);
          if (chapMatch.length > 0) {
            filteredBank = chapMatch;
          }
        }

        let pool = [];
        while (pool.length < selectedCount && filteredBank.length > 0) {
          pool = pool.concat(shuffleArray(filteredBank));
        }
        const selectedQuestions = pool.slice(0, selectedCount).map(q => ({
          ...q,
          choices: shuffleArray(q.pilihan)
        }));

        setQuestions(selectedQuestions);
      }
    }

    setView('quiz');
  };

  // Answer Submission Handler
  const handleAnswer = (userAns, choiceIndex = null) => {
    const currentQ = questions[currentIndex];
    const correctAnswer = currentQ.jawaban || currentQ.answer;
    const explanation = currentQ.pembahasan || currentQ.explanation;
    const isCorrect = checkAnswerMatch(userAns, correctAnswer);

    // Save answer state for current index
    const ansObj = {
      userAnswer: userAns,
      isCorrect,
      correctAnswer,
      explanation,
      choiceIndex
    };

    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: ansObj
    }));

    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      setWrongList(prev => [
        ...prev,
        {
          question: currentQ.soal || currentQ.question,
          userAnswer: userAns || '(Dilewati / Kosong)',
          correctAnswer: correctAnswer,
          explanation: explanation,
          rawQuestion: currentQ
        }
      ]);
    }

    return { isCorrect, correctAnswer, explanation };
  };

  // Navigation handlers
  const handlePrevQuestion = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 >= questions.length) {
      handleFinishQuiz();
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleSelectQuestionIndex = (idx) => {
    if (idx >= 0 && idx < questions.length) {
      setCurrentIndex(idx);
    }
  };

  // Skip Question Handler
  const handleSkipQuestion = () => {
    const currentQ = questions[currentIndex];
    const correctAnswer = currentQ.jawaban || currentQ.answer;
    const explanation = currentQ.pembahasan || currentQ.explanation;

    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: {
        userAnswer: '(Dilewati)',
        isCorrect: false,
        correctAnswer,
        explanation,
        choiceIndex: null
      }
    }));

    setWrongList(prev => [
      ...prev,
      {
        question: currentQ.soal || currentQ.question,
        userAnswer: '(Dilewati)',
        correctAnswer: correctAnswer,
        explanation: explanation,
        rawQuestion: currentQ
      }
    ]);

    if (currentIndex + 1 >= questions.length) {
      handleFinishQuiz();
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  // Generate New Question for current slot (Generator types)
  const handleNewMathQuestion = () => {
    let newQ = null;
    if (selectedSubject === 'matematika_umum' || selectedSubject === 'matematika_lanjut') {
      newQ = generateMathQuestion(selectedSubject, selectedClass, 'sedang', selectedChapter);
    } else if (selectedSubject === 'fisika') {
      newQ = generateFisikaQuestion(selectedClass, 'sedang', selectedChapter);
    } else if (selectedSubject === 'kimia') {
      newQ = generateKimiaQuestion(selectedClass, 'sedang', selectedChapter);
    } else if (selectedSubject === 'biologi' && selectedClass === 12) {
      newQ = generateBiologiMendelQuestion(randInt(1, 2));
    }
    if (newQ) {
      setQuestions(prev => {
        const copy = [...prev];
        copy[currentIndex] = newQ;
        return copy;
      });
      // Clear answered state for this slot if regenerated
      setUserAnswers(prev => {
        const copy = { ...prev };
        delete copy[currentIndex];
        return copy;
      });
    }
  };

  // Finish Quiz Handler
  const handleFinishQuiz = () => {
    const total = questions.length;
    // Calculate final score accurately from userAnswers map
    const finalScore = Object.values(userAnswers).filter(a => a.isCorrect).length;
    const finalPercentage = total > 0 ? Math.round((finalScore / total) * 100) : 0;

    const subjectName = selectedSubject === 'matematika_umum' 
      ? 'Matematika Umum' 
      : (selectedSubject === 'matematika_lanjut' ? 'Matematika T. Lanjut' : selectedSubject);

    // Save detailed session to quizSessions
    const newSession = {
      id: 'session-' + Date.now(),
      userId: currentUser?.id || 'guest',
      userName: currentUser?.name || 'Siswa Tamu',
      subject: selectedSubject,
      subjectName,
      kelas: selectedClass,
      examMode: selectedExamMode,
      chapter: selectedChapter,
      score: finalScore,
      total,
      percentage: finalPercentage,
      date: new Date().toLocaleDateString('id-ID'),
      timeSpent: `${Math.floor(timerSeconds / 60)}m ${timerSeconds % 60}s`,
      questionsReview: questions.map((q, idx) => ({
        question: q.soal || q.question,
        type: q.type,
        userAnswer: userAnswers[idx]?.userAnswer || '(Tidak dijawab)',
        correctAnswer: q.jawaban || q.answer,
        explanation: q.pembahasan || q.explanation,
        isCorrect: !!userAnswers[idx]?.isCorrect
      }))
    };

    const updatedSessions = [newSession, ...quizSessions];
    setQuizSessions(updatedSessions);
    localStorage.setItem('kuispintar_sessions', JSON.stringify(updatedSessions));

    // Save to Global Activity for Admin
    try {
      const globalAct = JSON.parse(localStorage.getItem('kuispintar_global_activity') || '[]');
      globalAct.unshift(newSession);
      localStorage.setItem('kuispintar_global_activity', JSON.stringify(globalAct.slice(0, 100)));
    } catch {
      // ignore
    }

    // Save to Legacy History
    const newHistory = {
      ...history,
      [selectedSubject]: {
        score: finalScore,
        total,
        percentage: finalPercentage,
        kelas: selectedClass,
        examMode: selectedExamMode,
        chapter: selectedChapter,
        date: new Date().toLocaleDateString('id-ID')
      }
    };
    setHistory(newHistory);
    localStorage.setItem('kuispintar_history', JSON.stringify(newHistory));

    setScore(finalScore);
    setView('results');
  };

  const lastScoreItem = history[selectedSubject];

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0d11] text-zinc-100 selection:bg-zinc-800 selection:text-white">
      {/* App Navbar */}
      <Navbar 
        selectedClass={selectedClass}
        lastScore={lastScoreItem}
        onGoHome={() => setView('home')}
        onGoLearn={() => setView('learn')}
        currentView={view}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
        onOpenDashboard={(type) => setView(type === 'admin' ? 'admin_dashboard' : 'user_dashboard')}
      />

      {/* Main View Router */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {view === 'home' && (
          <HomeView
            selectedSubject={selectedSubject}
            onSelectSubject={setSelectedSubject}
            selectedCount={selectedCount}
            onSelectCount={setSelectedCount}
            selectedClass={selectedClass}
            onSelectClass={setSelectedClass}
            selectedExamMode={selectedExamMode}
            onSelectExamMode={setSelectedExamMode}
            selectedChapter={selectedChapter}
            onSelectChapter={setSelectedChapter}
            onStartQuiz={() => handleStartQuiz(false)}
            onOpenLearn={() => setView('learn')}
            history={history}
          />
        )}

        {view === 'learn' && (
          <LearnView
            defaultKelas={selectedClass >= 10 && selectedClass <= 12 ? selectedClass : 10}
            onStartQuizForChapter={handleLearnStartQuiz}
            onGoHome={() => setView('home')}
          />
        )}

        {view === 'quiz' && (
          <QuizView
            subject={selectedSubject}
            questions={questions}
            currentIndex={currentIndex}
            score={score}
            answers={userAnswers}
            onAnswer={handleAnswer}
            onPrev={handlePrevQuestion}
            onNext={handleNextQuestion}
            onSelectIndex={handleSelectQuestionIndex}
            onSkip={handleSkipQuestion}
            onNewMathQuestion={handleNewMathQuestion}
            onFinish={handleFinishQuiz}
            timerSeconds={timerSeconds}
          />
        )}

        {view === 'results' && (
          <ResultsView
            score={score}
            total={questions.length}
            wrongList={wrongList}
            timerSeconds={timerSeconds}
            onRestart={() => handleStartQuiz(false)}
            onStartFocusMode={() => handleStartQuiz(true)}
            onChangeSubject={() => setView('home')}
            onOpenDashboard={() => setView('user_dashboard')}
          />
        )}

        {view === 'user_dashboard' && (
          <UserDashboard
            currentUser={currentUser}
            quizHistory={quizSessions}
            onBackHome={() => setView('home')}
            onStartNewQuiz={() => setView('home')}
          />
        )}

        {view === 'admin_dashboard' && (
          <AdminDashboard
            onBackHome={() => setView('home')}
          />
        )}
      </main>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Clean Dark Footer */}
      <footer className="py-6 border-t border-[#1c212d] text-center text-xs text-zinc-500">
        &copy; 2026 KuisPintar — Platform Latihan Soal Mandiri Multi-Mapel Interaktif.
      </footer>
    </div>
  );
}
