import { useState } from 'react';
import { Check, BookOpen } from 'lucide-react';
import { TOPIC_CHAPTERS } from '../data/mongolHistoryData';

export function TopicExplorer() {
  const [activeId, setActiveId] = useState<string>(TOPIC_CHAPTERS[0].id);
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, boolean>>({});

  const activeChapter =
    TOPIC_CHAPTERS.find((c) => c.id === activeId) ?? TOPIC_CHAPTERS[0];

  return (
    <section id="mavzu" className="py-16 sm:py-24 bg-white border-b border-black/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-emerald-700">
            Jahon tarixi · 7-sinf · 11-mavzu
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1D1D1F] sm:text-4xl">
            Darslikning asosiy qismlari va tayanch tushunchalar
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6E6E73]">
            Mavzuning eng muhim nuqtalarini to‘rt bo‘lim orqali izchil ko‘rib chiqing. Har bir qism imtihon va nazorat ishlari uchun asosiy tayanch faktlarni o‘z ichiga oladi.
          </p>
        </div>

        {/* Apple-style segmented control */}
        <div
          role="tablist"
          aria-label="Mavzu bo‘limlari"
          className="mt-8 inline-flex flex-wrap items-center gap-1 rounded-xl bg-[#F5F5F7] p-1.5 border border-black/[0.05]"
        >
          {TOPIC_CHAPTERS.map((chapter) => {
            const isActive = chapter.id === activeChapter.id;
            return (
              <button
                key={chapter.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActiveId(chapter.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#1D1D1F] shadow-sm ring-1 ring-black/[0.06]'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                <span className="font-mono text-xs text-emerald-700 mr-2 tabular-nums">
                  {chapter.index}.
                </span>
                {chapter.shortTitle}
              </button>
            );
          })}
        </div>

        {/* Active chapter split content */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#6E6E73]">
                <span className="font-mono text-emerald-700 tabular-nums">
                  Bo‘lim {activeChapter.index}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeChapter.subtitle}</span>
              </div>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1D1D1F] sm:text-3xl">
                {activeChapter.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[#424245]">
                {activeChapter.summary}
              </p>

              <div className="mt-8 border-t border-black/[0.06] pt-6">
                <h4 className="text-sm font-semibold text-[#1D1D1F]">
                  Eslab qolish zarur bo‘lgan asosiy faktlar
                </h4>
                <ul className="mt-4 space-y-3">
                  {activeChapter.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-[#424245]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key terms grid */}
            <div className="mt-8 border-t border-black/[0.06] pt-6">
              <h4 className="text-sm font-semibold text-[#1D1D1F]">
                Tayanch atamalar
              </h4>
              <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {activeChapter.terms.map((item) => (
                  <div
                    key={item.term}
                    className="rounded-xl bg-[#F5F5F7] p-4 border border-black/[0.04]"
                  >
                    <dt className="text-sm font-semibold text-emerald-800">
                      {item.term}
                    </dt>
                    <dd className="mt-1 text-xs leading-relaxed text-[#6E6E73]">
                      {item.meaning}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right visual panel */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 overflow-hidden rounded-2xl bg-[#F5F5F7] border border-black/[0.06] flex flex-col">
              <div className="relative flex-1 min-h-[280px] bg-emerald-950/5">
                {!imgErrorMap[activeChapter.id] ? (
                  <img
                    src={activeChapter.image}
                    alt={activeChapter.imageCaption}
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setImgErrorMap((prev) => ({
                        ...prev,
                        [activeChapter.id]: true,
                      }))
                    }
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full min-h-[280px] w-full flex-col items-center justify-center bg-gradient-to-br from-emerald-900 to-emerald-700 p-6 text-center text-white">
                    <BookOpen className="h-8 w-8 opacity-80" aria-hidden="true" />
                    <p className="mt-3 text-sm font-medium">{activeChapter.title}</p>
                  </div>
                )}
              </div>
              <div className="border-t border-black/[0.06] bg-white px-5 py-4">
                <p className="text-xs leading-relaxed text-[#6E6E73]">
                  {activeChapter.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
