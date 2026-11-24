import { useState } from 'react';
import { TIMELINE_EVENTS } from '../data/mongolHistoryData';

type FilterType = 'barchasi' | 'davlat' | 'yurish' | 'ulus';

export function TimelineSection() {
  const [filter, setFilter] = useState<FilterType>('barchasi');

  const filteredEvents =
    filter === 'barchasi'
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter((event) => event.category === filter);

  const filterButtons: { id: FilterType; label: string }[] = [
    { id: 'barchasi', label: 'Barcha sanalar' },
    { id: 'davlat', label: 'Davlat tuzilishi' },
    { id: 'yurish', label: 'Harbiy yurishlar' },
    { id: 'ulus', label: 'Uluslar davri' }
  ];

  return (
    <section id="xronologiya" className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-black/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-emerald-700">
              Asosiy sanalar jadvali
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1D1D1F] sm:text-4xl">
              Tarixiy xronologiya (1162–1271)
            </h2>
          </div>

          <div
            role="group"
            aria-label="Xronologiya filtri"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl bg-white p-1 border border-black/[0.06]"
          >
            {filterButtons.map((btn) => {
              const isActive = filter === btn.id;
              return (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setFilter(btn.id)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-700 text-white'
                      : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-white border border-black/[0.06]">
          <div className="divide-y divide-black/[0.06]">
            {filteredEvents.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="grid grid-cols-1 gap-3 px-6 py-5 sm:grid-cols-12 sm:items-center sm:gap-6 hover:bg-[#FAFAFA] transition-colors"
              >
                <div className="sm:col-span-2">
                  <span className="font-mono text-base font-bold text-emerald-700 tabular-nums">
                    {item.year}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="text-sm font-semibold text-[#1D1D1F]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-[#6E6E73]">
                    {item.categoryLabel}
                  </p>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-sm leading-relaxed text-[#424245]">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
