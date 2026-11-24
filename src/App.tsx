import { useState } from 'react';
import { ArrowRight, Landmark } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { TopicExplorer } from './components/TopicExplorer';
import { MilitarySimulator } from './components/MilitarySimulator';
import { UlusSection } from './components/UlusSection';
import { TimelineSection } from './components/TimelineSection';
import { QuizEngine } from './components/QuizEngine';
import { HERO_IMAGE } from './data/mongolHistoryData';

const HERO_METRICS = [
  {
    value: '1206-yil',
    label: 'Davlat tashkil topishi',
    detail: 'Onon daryosi bo‘yidagi qurultoy'
  },
  {
    value: '33 mln km²',
    label: 'Maksimal hudud',
    detail: 'Tinch okeanidan Sharqiy Yevropagacha'
  },
  {
    value: '10 000',
    label: 'Tuman qo‘shini',
    detail: 'Qat’iy o‘nlik harbiy tizimi asosi'
  },
  {
    value: '4 ulus',
    label: 'Voris davlatlar',
    detail: 'Jo‘ji, Chig‘atoy, Huloku va Yuan'
  }
];

export default function App() {
  const [heroImgError, setHeroImgError] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <Navbar onStartQuiz={() => scrollToSection('test')} />

      <main>
        {/* Hero Section */}
        <section className="bg-white border-b border-black/[0.06]">
          <div className="mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-center">
                <p className="text-xs font-semibold tracking-wide text-emerald-700">
                  Jahon tarixi · 7-sinf · 11-mavzu
                </p>

                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-5xl leading-[1.08]">
                  Mo‘g‘ullar davlati va buyuk imperiya tarixi
                </h1>

                <p className="mt-5 text-base leading-relaxed text-[#424245] sm:text-lg max-w-xl">
                  1206-yilda Chingizxon tomonidan tarqoq dasht qabilalarining birlashtirilishi, “Buyuk Yaso” qonunlari, o‘nlik harbiy tizimi hamda imperiyaning to‘rt ulusga bo‘linishi haqidagi to‘liq o‘quv qo‘llanma.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => scrollToSection('mavzu')}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Mavzuni o‘rganish
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('test')}
                    className="inline-flex items-center rounded-xl border border-black/[0.1] bg-[#F5F5F7] px-6 py-3 text-sm font-semibold text-[#1D1D1F] transition-colors duration-150 hover:bg-[#ECECEF] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    30 ta testni yechish
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 flex">
                <div className="w-full overflow-hidden rounded-3xl border border-black/[0.06] bg-[#F5F5F7]">
                  {!heroImgError ? (
                    <img
                      src={HERO_IMAGE}
                      alt="Yevroosiyo dashtlarida Mo‘g‘ul imperiyasi qarorgohi va to‘qqiz dumli oq tug‘"
                      referrerPolicy="no-referrer"
                      onError={() => setHeroImgError(true)}
                      className="h-full min-h-[280px] w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full min-h-[320px] w-full flex-col items-center justify-center bg-gradient-to-br from-emerald-900 to-emerald-700 p-8 text-center text-white">
                      <Landmark className="h-10 w-10 opacity-85" aria-hidden="true" />
                      <p className="mt-3 text-base font-semibold">
                        Mo‘g‘ullar Davlati (XIII asr)
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 4-Column Key Facts Strip */}
            <div className="mt-12 grid grid-cols-1 gap-4 border-t border-black/[0.06] pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {HERO_METRICS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-[#F5F5F7] p-5 border border-black/[0.04]"
                >
                  <p className="font-mono text-2xl font-bold text-emerald-700 tabular-nums">
                    {item.value}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-[#1D1D1F]">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-[#6E6E73]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TopicExplorer />
        <MilitarySimulator />
        <UlusSection />
        <TimelineSection />
        <QuizEngine />
      </main>

      <footer className="border-t border-black/[0.06] bg-[#F5F5F7] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-sm font-bold text-[#1D1D1F]">
              Mo‘g‘ullar Davlati
            </p>
            <p className="mt-0.5 text-xs text-[#6E6E73]">
              7-sinf Jahon tarixi darsligi · 11-mavzu asosida tayyorlangan o‘quv portali
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#6E6E73]">
            <a href="#mavzu" className="hover:text-emerald-700 transition-colors">
              Asosiy mavzu
            </a>
            <a href="#harbiy-tizim" className="hover:text-emerald-700 transition-colors">
              Harbiy tizim
            </a>
            <a href="#uluslar" className="hover:text-emerald-700 transition-colors">
              Uluslar
            </a>
            <a href="#test" className="hover:text-emerald-700 transition-colors">
              30 ta Test
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
