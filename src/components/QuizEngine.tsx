import { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Award
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/mongolHistoryData';

type QuizMode = 'mashq' | 'imtihon';

export function QuizEngine() {
  const [mode, setMode] = useState<QuizMode>('mashq');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showOnlyWrong, setShowOnlyWrong] = useState<boolean>(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const answeredCount = Object.keys(answers).length;

  const selectedOption = answers[currentQuestion.id];
  const isAnswered = selectedOption !== undefined;
  const showImmediateFeedback = mode === 'mashq' && isAnswered;

  const correctCount = QUIZ_QUESTIONS.reduce((acc, q) => {
    return answers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((correctCount / totalQuestions) * 100);

  const handleSelectOption = (optionIdx: number) => {
    if (isSubmitted) return;
    if (mode === 'mashq' && isAnswered) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIdx
    }));
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentIndex(0);
    setIsSubmitted(false);
    setShowOnlyWrong(false);
  };

  const handleModeSwitch = (nextMode: QuizMode) => {
    if (nextMode === mode) return;
    setMode(nextMode);
    handleReset();
  };

  const handleFinishExam = () => {
    setIsSubmitted(true);
  };

  const getGradeText = (pct: number) => {
    if (pct >= 86) return 'A’lo natija (5 baho)';
    if (pct >= 71) return 'Yaxshi natija (4 baho)';
    if (pct >= 55) return 'Qoniqarli natija (3 baho)';
    return 'Mavzuni qayta takrorlash tavsiya etiladi';
  };

  const reviewList = showOnlyWrong
    ? QUIZ_QUESTIONS.filter((q) => answers[q.id] !== q.correctIndex)
    : QUIZ_QUESTIONS;

  return (
    <section id="test" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header & Mode Switcher */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-emerald-700">
              Bilimni tekshirish · 30 ta test savoli
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1D1D1F] sm:text-4xl">
              11-mavzu bo‘yicha yakuniy test sinovi
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#6E6E73]">
              Har bir savol 7-sinf Jahon tarixi darsligi asosida tuzilgan. Mashq rejimida har bir javobdan so‘ng darhol izohni ko‘rasiz; imtihon rejimida esa 30 ta savoldan so‘ng umumiy ball hisoblanadi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div
              role="group"
              aria-label="Test rejimi"
              className="inline-flex items-center gap-1 rounded-xl bg-[#F5F5F7] p-1 border border-black/[0.05]"
            >
              <button
                type="button"
                onClick={() => handleModeSwitch('mashq')}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  mode === 'mashq'
                    ? 'bg-white text-[#1D1D1F] shadow-sm ring-1 ring-black/[0.06]'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                Mashq rejimi (Izohli)
              </button>
              <button
                type="button"
                onClick={() => handleModeSwitch('imtihon')}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  mode === 'imtihon'
                    ? 'bg-white text-[#1D1D1F] shadow-sm ring-1 ring-black/[0.06]'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                Imtihon rejimi
              </button>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-xl border border-black/[0.08] bg-white px-4 py-2 text-xs font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Qayta boshlash
            </button>
          </div>
        </div>

        {/* Summary Result View if Submitted */}
        {isSubmitted ? (
          <div className="mt-10 space-y-8">
            <div className="rounded-2xl bg-[#F5F5F7] p-6 sm:p-10 border border-black/[0.06]">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <Award className="h-4 w-4" aria-hidden="true" />
                    <span>Test yakunlandi</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-[#1D1D1F] sm:text-3xl">
                    {getGradeText(percentage)}
                  </h3>
                  <p className="mt-2 text-sm text-[#6E6E73]">
                    Siz {totalQuestions} ta savoldan {correctCount} tasiga to‘g‘ri javob berdingiz. Quyida barcha savollar va ularning tahlili keltirilgan.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 transition-colors cursor-pointer"
                    >
                      Testni qayta yechish
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowOnlyWrong((v) => !v)}
                      className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#1D1D1F] border border-black/[0.08] hover:bg-[#FAFAFA] transition-colors cursor-pointer"
                    >
                      {showOnlyWrong
                        ? 'Barcha 30 ta savolni ko‘rish'
                        : 'Faqat xato javoblarni ko‘rish'}
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white p-4 border border-black/[0.05] text-center">
                    <p className="text-xs text-[#6E6E73]">To‘g‘ri</p>
                    <p className="mt-1 font-mono text-2xl font-bold text-emerald-700 tabular-nums">
                      {correctCount}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-4 border border-black/[0.05] text-center">
                    <p className="text-xs text-[#6E6E73]">Xato</p>
                    <p className="mt-1 font-mono text-2xl font-bold text-rose-600 tabular-nums">
                      {totalQuestions - correctCount}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-4 border border-black/[0.05] text-center">
                    <p className="text-xs text-[#6E6E73]">Natija</p>
                    <p className="mt-1 font-mono text-2xl font-bold text-[#1D1D1F] tabular-nums">
                      {percentage}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Review List */}
            <div className="space-y-4">
              {reviewList.length === 0 ? (
                <div className="rounded-2xl bg-emerald-50 p-8 text-center border border-emerald-200">
                  <p className="text-base font-semibold text-emerald-900">
                    Tabriklaymiz! Barcha 30 ta savolga xatosiz javob berdingiz.
                  </p>
                </div>
              ) : (
                reviewList.map((q) => {
                  const userAns = answers[q.id];
                  const isCorrect = userAns === q.correctIndex;
                  return (
                    <div
                      key={q.id}
                      className="rounded-2xl bg-[#FAFAFA] p-6 border border-black/[0.06]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs font-semibold text-[#6E6E73] tabular-nums">
                          Savol {q.id} · {q.category}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                            isCorrect ? 'text-emerald-700' : 'text-rose-600'
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                              To‘g‘ri javob
                            </>
                          ) : (
                            <>
                              <XCircle className="h-4 w-4" aria-hidden="true" />
                              {userAns === undefined ? 'Belgilanmagan' : 'Noto‘g‘ri javob'}
                            </>
                          )}
                        </span>
                      </div>

                      <h4 className="mt-2 text-base font-semibold text-[#1D1D1F]">
                        {q.question}
                      </h4>

                      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs">
                        <div className="rounded-lg bg-white p-3 border border-black/[0.05]">
                          <span className="text-[#6E6E73]">Sizning javobingiz: </span>
                          <span
                            className={`font-semibold ${
                              isCorrect ? 'text-emerald-700' : 'text-rose-600'
                            }`}
                          >
                            {userAns !== undefined
                              ? q.options[userAns]
                              : 'Tanlanmagan'}
                          </span>
                        </div>
                        <div className="rounded-lg bg-emerald-50/70 p-3 border border-emerald-200">
                          <span className="text-emerald-800">To‘g‘ri javob: </span>
                          <span className="font-semibold text-emerald-950">
                            {q.options[q.correctIndex]}
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-[#6E6E73]">
                        <strong className="text-[#1D1D1F]">Izoh:</strong> {q.explanation}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        ) : (
          /* Active Quiz Stage */
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left Question Card */}
            <div className="lg:col-span-8 rounded-2xl bg-[#F5F5F7] p-6 sm:p-8 border border-black/[0.06]">
              {/* Progress Bar */}
              <div className="flex items-center justify-between text-xs font-medium text-[#6E6E73]">
                <span className="font-mono text-emerald-800 font-semibold tabular-nums">
                  Savol {currentIndex + 1} / {totalQuestions}
                </span>
                <span>{currentQuestion.category}</span>
              </div>

              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/[0.08]">
                <div
                  className="h-full bg-emerald-600 transition-all duration-200"
                  style={{
                    width: `${((currentIndex + 1) / totalQuestions) * 100}%`
                  }}
                />
              </div>

              <h3 className="mt-6 text-xl font-bold leading-snug text-[#1D1D1F] sm:text-2xl">
                {currentQuestion.id}. {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((optionText, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isCorrectOption = optIdx === currentQuestion.correctIndex;
                  const letter = ['A', 'B', 'C', 'D'][optIdx];

                  let optionStyle =
                    'bg-white border-black/[0.06] text-[#1D1D1F] hover:border-emerald-600';

                  if (showImmediateFeedback) {
                    if (isCorrectOption) {
                      optionStyle =
                        'bg-emerald-50 border-emerald-600 text-emerald-950';
                    } else if (isSelected && !isCorrectOption) {
                      optionStyle = 'bg-rose-50 border-rose-500 text-rose-950';
                    } else {
                      optionStyle = 'bg-white/60 border-black/[0.04] text-[#6E6E73]';
                    }
                  } else if (isSelected) {
                    optionStyle =
                      'bg-emerald-50 border-emerald-700 text-emerald-950 ring-1 ring-emerald-700';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full flex items-center justify-between gap-4 rounded-xl border p-4 text-left transition-all duration-150 cursor-pointer ${optionStyle}`}
                    >
                      <div className="flex items-start gap-3.5">
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-xs font-semibold ${
                            isSelected || (showImmediateFeedback && isCorrectOption)
                              ? 'bg-emerald-700 text-white'
                              : 'bg-[#F5F5F7] text-[#424245]'
                          }`}
                        >
                          {letter}
                        </span>
                        <span className="text-sm sm:text-base font-medium leading-snug">
                          {optionText}
                        </span>
                      </div>

                      {showImmediateFeedback && isCorrectOption && (
                        <CheckCircle2
                          className="h-5 w-5 text-emerald-700 shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      {showImmediateFeedback && isSelected && !isCorrectOption && (
                        <XCircle
                          className="h-5 w-5 text-rose-600 shrink-0"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Explanation in Practice Mode */}
              {showImmediateFeedback && (
                <div
                  className={`mt-6 rounded-xl p-4 border ${
                    selectedOption === currentQuestion.correctIndex
                      ? 'bg-emerald-50/80 border-emerald-200'
                      : 'bg-rose-50/80 border-rose-200'
                  }`}
                >
                  <p className="text-xs font-semibold text-[#1D1D1F]">
                    {selectedOption === currentQuestion.correctIndex
                      ? 'To‘g‘ri javob!'
                      : 'Noto‘g‘ri javob.'}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#424245]">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.06] pt-6">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-[#1D1D1F] border border-black/[0.08] disabled:opacity-40 hover:bg-[#FAFAFA] transition-colors cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  Oldingi
                </button>

                <div className="flex items-center gap-3">
                  {currentIndex < totalQuestions - 1 ? (
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentIndex((i) => Math.min(totalQuestions - 1, i + 1))
                      }
                      className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 transition-colors cursor-pointer"
                    >
                      Keyingi savol
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleFinishExam}
                      className="rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 transition-colors cursor-pointer"
                    >
                      Natijani ko‘rish
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Navigator Matrix (1–30) */}
            <div className="lg:col-span-4 rounded-2xl bg-[#F5F5F7] p-6 border border-black/[0.06]">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <h3 className="text-sm font-semibold text-[#1D1D1F]">
                  Savollar xaritasi
                </h3>
                <span className="font-mono text-xs text-[#6E6E73] tabular-nums">
                  {answeredCount} / {totalQuestions} yechildi
                </span>
              </div>

              <div className="mt-5 grid grid-cols-6 gap-2">
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const userAns = answers[q.id];
                  const answered = userAns !== undefined;
                  const isCurrent = idx === currentIndex;
                  const isCorrect = userAns === q.correctIndex;

                  let cellClass =
                    'bg-white text-[#424245] border-black/[0.06] hover:border-emerald-600';

                  if (mode === 'mashq' && answered) {
                    cellClass = isCorrect
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-rose-600 text-white border-rose-600';
                  } else if (answered) {
                    cellClass = 'bg-emerald-700 text-white border-emerald-700';
                  }

                  if (isCurrent) {
                    cellClass += ' ring-2 ring-offset-2 ring-[#1D1D1F]';
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`${q.id}-savolga o‘tish`}
                      className={`h-9 rounded-lg border font-mono text-xs font-semibold tabular-nums transition-all duration-150 cursor-pointer ${cellClass}`}
                    >
                      {q.id}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-black/[0.06] pt-5">
                <div className="flex items-center justify-between text-xs text-[#6E6E73]">
                  <span>Yechilgan savollar</span>
                  <span className="font-mono font-semibold text-[#1D1D1F] tabular-nums">
                    {answeredCount} ta
                  </span>
                </div>
                {mode === 'mashq' && answeredCount > 0 && (
                  <div className="mt-2 flex items-center justify-between text-xs text-[#6E6E73]">
                    <span>Joriy to‘g‘ri javoblar</span>
                    <span className="font-mono font-semibold text-emerald-700 tabular-nums">
                      {correctCount} ta
                    </span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleFinishExam}
                  className="mt-5 w-full rounded-xl bg-[#1D1D1F] px-4 py-2.5 text-sm font-semibold text-white hover:bg-black transition-colors cursor-pointer"
                >
                  Testni yakunlash ({answeredCount}/{totalQuestions})
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
