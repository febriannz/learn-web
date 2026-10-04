import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  RotateCcw, 
  SkipForward, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  Send, 
  Delete, 
  ListOrdered, 
  Keyboard,
  ArrowLeft,
  ArrowRight,
  Check
} from 'lucide-react';

export default function QuizView({
  subject,
  questions,
  currentIndex,
  score,
  answers = {},
  onAnswer,
  onPrev,
  onNext,
  onSelectIndex,
  onSkip,
  onNewMathQuestion,
  onFinish,
  timerSeconds
}) {
  const [userMathInput, setUserMathInput] = useState('');
  const [answeredState, setAnsweredState] = useState(null);
  const [autoAdvancePct, setAutoAdvancePct] = useState(0);
  const [inputMode, setInputMode] = useState('choice'); // 'choice' | 'text'
  const advanceTimerRef = useRef(null);
  const mathInputRef = useRef(null);

  const currentQ = questions[currentIndex];
  const isMath = typeof subject === 'string' && subject.toLowerCase().includes('matematika');
  const isLastQuestion = currentIndex === questions.length - 1;

  // Format time MM:SS
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // Sync state with answers map when question index changes
  useEffect(() => {
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
    }
    setAutoAdvancePct(0);
    setUserMathInput('');

    if (answers && answers[currentIndex]) {
      setAnsweredState(answers[currentIndex]);
    } else {
      setAnsweredState(null);
    }

    if (isMath && inputMode === 'text' && mathInputRef.current) {
      mathInputRef.current.focus();
    }
  }, [currentIndex, currentQ, answers, isMath, inputMode]);

  // Handle Answer Submission
  const handleSubmit = (ansVal, choiceBtnIndex = null) => {
    if (answeredState) return;

    const result = onAnswer(ansVal, choiceBtnIndex);
    const stateObj = {
      isCorrect: result.isCorrect,
      userAnswer: ansVal,
      correctAnswer: result.correctAnswer,
      explanation: result.explanation,
      choiceIndex: choiceBtnIndex
    };
    setAnsweredState(stateObj);

    // Auto advance on correct answer (clean 1.1s timer)
    if (result.isCorrect) {
      setAutoAdvancePct(100);
      advanceTimerRef.current = setTimeout(() => {
        if (isLastQuestion) {
          onFinish();
        } else {
          onNext();
        }
      }, 1100);
    }
  };

  const handleManualNext = () => {
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
    }
    if (isLastQuestion) {
      onFinish();
    } else {
      onNext();
    }
  };

  const handleManualPrev = () => {
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
    }
    onPrev();
  };

  if (!currentQ) return null;

  const progressPct = ((currentIndex + 1) / questions.length) * 100;
  const prefixes = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="max-w-3xl mx-auto space-y-4 animate-fadeIn pb-12 text-zinc-100">
      {/* Quiz Top Header Bar */}
      <div className="bg-[#12151c] border border-[#222734] rounded-xl p-3.5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-[#1c2230] text-zinc-200 font-semibold text-xs capitalize border border-[#2b3447]">
            {subject.replace(/_/g, ' ')}
          </span>
        </div>

        <div className="font-semibold text-zinc-300 text-xs">
          Soal {currentIndex + 1} dari {questions.length}
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs bg-[#161a24] px-2.5 py-1 rounded-lg border border-[#222734] text-zinc-300">
          <Clock className="w-3.5 h-3.5 text-zinc-400" />
          <span>{formatTime(timerSeconds)}</span>
        </div>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full h-1.5 bg-[#181c26] rounded-full overflow-hidden">
        <div 
          className="h-full bg-zinc-300 transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* QUESTION NUMBER QUICK PALETTE */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 px-0.5 scrollbar-none">
        {questions.map((_, qIdx) => {
          const isCurr = qIdx === currentIndex;
          const ans = answers[qIdx];
          let badgeStyle = 'bg-[#151922] text-zinc-400 border-[#222734]';
          
          if (ans) {
            badgeStyle = ans.isCorrect
              ? 'bg-[#123624] text-emerald-300 border-[#1c5438]'
              : 'bg-[#3b171a] text-rose-300 border-[#5e2329]';
          }

          if (isCurr) {
            badgeStyle += ' ring-1 ring-zinc-200 border-zinc-200 font-bold';
          }

          return (
            <button
              key={qIdx}
              onClick={() => {
                if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
                onSelectIndex(qIdx);
              }}
              className={`w-7 h-7 rounded-lg border text-xs font-medium shrink-0 transition-colors flex items-center justify-center cursor-pointer ${badgeStyle}`}
              title={`Soal ${qIdx + 1}`}
            >
              {ans ? (ans.isCorrect ? '✓' : '✕') : qIdx + 1}
            </button>
          );
        })}
      </div>

      {/* Question Card */}
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl p-6 sm:p-7 space-y-5">
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
            {currentQ.type || 'Latihan Soal'}
          </span>

          <div className="flex items-center gap-2">
            {isMath && (
              <div className="flex bg-[#161a24] p-0.5 rounded-lg border border-[#242a38]">
                <button
                  onClick={() => setInputMode('choice')}
                  className={`px-2 py-0.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    inputMode === 'choice'
                      ? 'bg-[#252c3d] text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  title="Pilihan Ganda"
                >
                  <ListOrdered className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setInputMode('text')}
                  className={`px-2 py-0.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    inputMode === 'text'
                      ? 'bg-[#252c3d] text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  title="Ketik Angka"
                >
                  <Keyboard className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {(isMath || subject === 'fisika' || subject === 'kimia' || currentQ?.type?.includes('Mendel')) && (
              <button
                onClick={onNewMathQuestion}
                className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white border border-[#242a38] px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                title="Generate ulang dengan angka baru"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Angka Baru</span>
              </button>
            )}
          </div>
        </div>

        <h2 className="text-lg sm:text-xl font-bold leading-relaxed text-white">
          {currentQ.soal || currentQ.question}
        </h2>

        {/* INPUT SECTION */}
        <div className="space-y-3">
          {isMath && inputMode === 'text' ? (
            /* MATH TYPED INPUT AREA */
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  ref={mathInputRef}
                  type="text"
                  disabled={!!answeredState}
                  placeholder="Ketik jawaban..."
                  value={userMathInput}
                  onChange={(e) => setUserMathInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && userMathInput.trim()) {
                      handleSubmit(userMathInput.trim());
                    }
                  }}
                  className="flex-1 px-3.5 py-2.5 bg-[#161a24] border border-[#252b3a] rounded-xl text-base font-mono focus:outline-none focus:border-zinc-400 text-white"
                />
                <button
                  disabled={!!answeredState || !userMathInput.trim()}
                  onClick={() => handleSubmit(userMathInput.trim())}
                  className="px-5 py-2.5 bg-zinc-200 hover:bg-white disabled:opacity-40 text-zinc-900 rounded-xl font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Jawab</span>
                </button>
              </div>

              {/* Virtual Numpad */}
              <div className="grid grid-cols-4 gap-1.5 bg-[#161a24] p-2.5 rounded-xl border border-[#222734] max-w-xs mx-auto">
                {['7','8','9','/','4','5','6','-','1','2','3','DEL','0','.','CLR'].map((key) => (
                  <button
                    key={key}
                    disabled={!!answeredState}
                    onClick={() => {
                      if (key === 'DEL') setUserMathInput(prev => prev.slice(0, -1));
                      else if (key === 'CLR') setUserMathInput('');
                      else setUserMathInput(prev => prev + key);
                    }}
                    className={`py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                      key === 'DEL' || key === 'CLR'
                        ? 'bg-[#2b1619] text-rose-300 border-[#472227]'
                        : 'bg-[#1c212d] text-zinc-200 border-[#2b3346] hover:border-zinc-400'
                    } ${key === 'CLR' ? 'col-span-2' : ''}`}
                  >
                    {key === 'DEL' ? <Delete className="w-3.5 h-3.5 mx-auto" /> : key}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* MULTIPLE CHOICE GRID AREA (A, B, C, D, E) */
            <div className="grid grid-cols-1 gap-2.5">
              {currentQ.choices?.map((choiceText, idx) => {
                const isSelected = answeredState?.choiceIndex === idx || answeredState?.userAnswer === choiceText;
                const isCorrectChoice = choiceText === (currentQ.jawaban || currentQ.answer);

                let btnStyle = 'bg-[#161a23] border-[#222734] text-zinc-300 hover:border-[#384157] hover:bg-[#1a1f2b]';
                
                if (answeredState) {
                  if (isCorrectChoice) {
                    btnStyle = 'bg-[#102d1f] border-[#10b981] text-emerald-200';
                  } else if (isSelected && !answeredState.isCorrect) {
                    btnStyle = 'bg-[#311518] border-[#ef4444] text-rose-200';
                  } else {
                    btnStyle = 'bg-[#13161e] border-[#1f2430] opacity-50';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={!!answeredState}
                    onClick={() => handleSubmit(choiceText, idx)}
                    className={`w-full p-3.5 rounded-xl border text-left font-medium flex items-center gap-3 transition-colors cursor-pointer ${btnStyle}`}
                  >
                    <span className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-semibold shrink-0 ${
                      answeredState && isCorrectChoice 
                        ? 'bg-[#10b981] text-zinc-950 border-[#10b981]'
                        : (answeredState && isSelected ? 'bg-[#ef4444] text-white border-[#ef4444]' : 'bg-[#1c212d] border-[#2b3346] text-zinc-300')
                    }`}>
                      {prefixes[idx] || (idx + 1)}
                    </span>
                    <span className="text-sm flex-1">{choiceText}</span>
                    {answeredState && isCorrectChoice && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* FEEDBACK & EXPLANATION BOX */}
        {answeredState && (
          <div className="bg-[#151922] border border-[#232837] rounded-xl p-4 space-y-2.5 animate-fadeIn">
            <div className="flex items-center gap-2 font-bold text-sm">
              {answeredState.isCorrect ? (
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Jawaban Benar</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-rose-400">
                  <XCircle className="w-4 h-4" />
                  <span>Jawaban Kurang Tepat</span>
                </div>
              )}
            </div>

            <div className="text-xs text-zinc-400">
              Jawaban Kamu: <span className={answeredState.isCorrect ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>{answeredState.userAnswer || '-'}</span> • Kunci Benar: <span className="text-emerald-400 font-semibold">{answeredState.correctAnswer}</span>
            </div>

            {/* Explanation */}
            <div className="bg-[#11131a] border border-[#222734] rounded-lg p-3 space-y-1">
              <div className="flex items-center gap-1 text-[11px] font-semibold text-zinc-400">
                <Lightbulb className="w-3 h-3 text-zinc-400" />
                <span>Pembahasan:</span>
              </div>
              <p className="text-xs text-zinc-300 whitespace-pre-line leading-relaxed">
                {answeredState.explanation}
              </p>
            </div>
          </div>
        )}

        {/* NAVIGATION BAR (PREV, SKIP, NEXT) */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#222734]">
          <button
            onClick={handleManualPrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#222734] hover:border-zinc-500 disabled:opacity-30 disabled:pointer-events-none text-zinc-300 font-medium text-xs transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Soal Sebelumnya</span>
          </button>

          <div className="flex items-center gap-2">
            {!answeredState && (
              <button
                onClick={onSkip}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-200 font-medium text-xs transition-colors cursor-pointer"
              >
                <SkipForward className="w-3.5 h-3.5" />
                <span>Lewati</span>
              </button>
            )}

            <button
              onClick={handleManualNext}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                answeredState
                  ? 'bg-zinc-100 hover:bg-white text-zinc-950'
                  : 'bg-[#222735] hover:bg-[#2c3345] text-zinc-300'
              }`}
            >
              <span>{isLastQuestion ? 'Selesai & Kumpulkan' : 'Soal Selanjutnya'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
