import { useState } from 'react';
import { MapPin, Crown, Calendar } from 'lucide-react';
import { ULUS_STATES } from '../data/mongolHistoryData';

export function UlusSection() {
  const [activeUlusId, setActiveUlusId] = useState<string>(ULUS_STATES[0].id);

  const activeUlus =
    ULUS_STATES.find((u) => u.id === activeUlusId) ?? ULUS_STATES[0];

  return (
    <section id="uluslar" className="py-16 sm:py-24 bg-white border-b border-black/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-emerald-700">
            Imperiyaning parchalanishi · XIII asrning 2-yarmi
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1D1D1F] sm:text-4xl">
            Chingiziylarning to‘rt ulusi
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6E6E73]">
            Chingizxon vafotidan oldin ulkan imperiyani o‘g‘illari va nabiralariga ulus sifatida taqsimlab bergan. XIII asrning ikkinchi yarmida imperiya amalda to‘rt mustaqil davlatga bo‘lindi.
          </p>
        </div>

        {/* 4 Ulus Selector Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ULUS_STATES.map((ulus, idx) => {
            const isSelected = ulus.id === activeUlus.id;
            return (
              <button
                key={ulus.id}
                type="button"
                onClick={() => setActiveUlusId(ulus.id)}
                className={`rounded-2xl p-5 text-left transition-all duration-150 cursor-pointer border ${
                  isSelected
                    ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm'
                    : 'bg-[#F5F5F7] text-[#1D1D1F] border-black/[0.05] hover:bg-[#ECECEF]'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span
                    className={`font-mono tabular-nums ${
                      isSelected ? 'text-emerald-200' : 'text-emerald-700'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className={`font-mono tabular-nums ${
                      isSelected ? 'text-emerald-200' : 'text-[#6E6E73]'
                    }`}
                  >
                    {ulus.period.split('–')[0]}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold leading-snug">
                  {ulus.name}
                </h3>
                <p
                  className={`mt-1.5 text-xs ${
                    isSelected ? 'text-emerald-100' : 'text-[#6E6E73]'
                  }`}
                >
                  {ulus.altName}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Ulus Detail Panel */}
        <div className="mt-6 rounded-2xl bg-[#F5F5F7] p-6 sm:p-8 border border-black/[0.06]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium text-emerald-700">
                Tanlangan davlat · {activeUlus.altName}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-[#1D1D1F]">
                {activeUlus.name}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#424245]">
                {activeUlus.description}
              </p>
              <div className="mt-6 rounded-xl bg-white p-4 border border-black/[0.05]">
                <p className="text-xs font-semibold text-emerald-800">
                  Muhim tarixiy fakt
                </p>
                <p className="mt-1 text-sm text-[#424245]">
                  {activeUlus.keyFact}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 border-t border-black/[0.06] pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <div className="flex items-start gap-3">
                <Crown className="h-4 w-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[#6E6E73]">Asoschisi</p>
                  <p className="text-sm font-semibold text-[#1D1D1F]">
                    {activeUlus.founder}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[#6E6E73]">Poytaxti va hududi</p>
                  <p className="text-sm font-semibold text-[#1D1D1F]">
                    {activeUlus.capital}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#6E6E73]">
                    {activeUlus.region}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[#6E6E73]">Mavjudlik davri</p>
                  <p className="font-mono text-sm font-semibold text-[#1D1D1F] tabular-nums">
                    {activeUlus.period}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
