import { useState } from 'react';
import { Shield, Users, Compass } from 'lucide-react';
import { MILITARY_TIERS } from '../data/mongolHistoryData';

export function MilitarySimulator() {
  const [selectedTierId, setSelectedTierId] = useState<string>('tuman');
  const [tumanCount, setTumanCount] = useState<number>(3);

  const selectedTier =
    MILITARY_TIERS.find((t) => t.id === selectedTierId) ?? MILITARY_TIERS[3];

  const totalSoldiers = tumanCount * 10000;
  const minglikCount = tumanCount * 10;
  const yuzlikCount = tumanCount * 100;
  const onlikCount = tumanCount * 1000;

  return (
    <section id="harbiy-tizim" className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-black/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-emerald-700">
              O‘nlik harbiy tizim modeli
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1D1D1F] sm:text-4xl">
              Chingizxon qo‘shinining tuzilishi va intizomi
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#6E6E73]">
            Chingizxon qabilaviy tarqoqlikni yo‘qotish uchun qo‘shinni qat’iy o‘nlik tizimiga asosladi. Bo‘linmani tanlang yoki tumanlar sonini o‘zgartiring.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left Stage: Interactive Hierarchy Selector */}
          <div className="lg:col-span-7 rounded-2xl bg-white p-6 sm:p-8 border border-black/[0.06] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 border-b border-black/[0.06] pb-4">
                <h3 className="text-base font-semibold text-[#1D1D1F]">
                  Harbiy pog‘onalar tizimi
                </h3>
                <span className="font-mono text-xs text-[#6E6E73] tabular-nums">
                  5 asosiy bo‘g‘in
                </span>
              </div>

              <div className="mt-5 space-y-2.5">
                {MILITARY_TIERS.map((tier) => {
                  const isActive = tier.id === selectedTier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`w-full flex items-center justify-between gap-4 rounded-xl px-4 py-3.5 text-left transition-all duration-150 cursor-pointer border ${
                        isActive
                          ? 'bg-emerald-50/70 border-emerald-600 text-[#1D1D1F]'
                          : 'bg-[#FAFAFA] border-black/[0.05] text-[#424245] hover:bg-[#F5F5F7]'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`text-sm font-semibold ${
                              isActive ? 'text-emerald-900' : 'text-[#1D1D1F]'
                            }`}
                          >
                            {tier.name}
                          </span>
                          <span className="text-xs text-[#6E6E73]">
                            · {tier.commander}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-[#6E6E73] truncate">
                          {tier.multiplierLabel}
                        </p>
                      </div>

                      <span
                        className={`font-mono text-sm font-semibold tabular-nums shrink-0 ${
                          isActive ? 'text-emerald-700' : 'text-[#6E6E73]'
                        }`}
                      >
                        {tier.count.toLocaleString('uz-UZ').replace(/,/g, ' ')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Tier Explanation Panel */}
            <div className="mt-6 rounded-xl bg-[#F5F5F7] p-5 border border-black/[0.04]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-emerald-800">
                  Tanlangan bo‘linma: {selectedTier.name}
                </span>
                <span className="font-mono text-xs text-[#6E6E73] tabular-nums">
                  Sardor: {selectedTier.commander}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#1D1D1F]">
                {selectedTier.role}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#6E6E73]">
                {selectedTier.disciplineNote}
              </p>
            </div>
          </div>

          {/* Right Control Deck: Live Army Scale Calculator */}
          <div className="lg:col-span-5 rounded-2xl bg-white p-6 sm:p-8 border border-black/[0.06] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <h3 className="text-base font-semibold text-[#1D1D1F]">
                  Qo‘shin tarkibi hisoblagichi
                </h3>
                <Users className="h-4 w-4 text-emerald-700" aria-hidden="true" />
              </div>

              <div className="mt-6">
                <div className="flex items-baseline justify-between">
                  <label
                    htmlFor="tuman-slider"
                    className="text-sm font-medium text-[#424245]"
                  >
                    Tumanlar soni (1 tuman = 10 000 askar)
                  </label>
                  <span className="font-mono text-lg font-bold text-emerald-700 tabular-nums">
                    {tumanCount} tuman
                  </span>
                </div>

                <input
                  id="tuman-slider"
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={tumanCount}
                  onChange={(e) => setTumanCount(Number(e.target.value))}
                  className="mt-4 w-full accent-emerald-700 cursor-pointer"
                />

                <div className="mt-2 flex justify-between font-mono text-xs text-[#6E6E73] tabular-nums">
                  <span>1 (10 000)</span>
                  <span>5 (50 000)</span>
                  <span>10 (100 000)</span>
                </div>
              </div>

              {/* Tabular Breakdown */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#F5F5F7] p-4 border border-black/[0.04]">
                  <p className="text-xs text-[#6E6E73]">Jami suvoriylar</p>
                  <p className="mt-1 font-mono text-xl font-bold text-[#1D1D1F] tabular-nums">
                    {totalSoldiers.toLocaleString('fr-FR')}
                  </p>
                </div>
                <div className="rounded-xl bg-[#F5F5F7] p-4 border border-black/[0.04]">
                  <p className="text-xs text-[#6E6E73]">Mingliklar soni</p>
                  <p className="mt-1 font-mono text-xl font-bold text-emerald-700 tabular-nums">
                    {minglikCount.toLocaleString('fr-FR')}
                  </p>
                </div>
                <div className="rounded-xl bg-[#F5F5F7] p-4 border border-black/[0.04]">
                  <p className="text-xs text-[#6E6E73]">Yuzliklar soni</p>
                  <p className="mt-1 font-mono text-xl font-bold text-[#1D1D1F] tabular-nums">
                    {yuzlikCount.toLocaleString('fr-FR')}
                  </p>
                </div>
                <div className="rounded-xl bg-[#F5F5F7] p-4 border border-black/[0.04]">
                  <p className="text-xs text-[#6E6E73]">O‘nliklar soni</p>
                  <p className="mt-1 font-mono text-xl font-bold text-[#1D1D1F] tabular-nums">
                    {onlikCount.toLocaleString('fr-FR')}
                  </p>
                </div>
              </div>
            </div>

            {/* Tactics summary */}
            <div className="mt-8 border-t border-black/[0.06] pt-6 space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="h-4 w-4 text-emerald-700 mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-[#424245]">
                  <strong className="font-semibold text-[#1D1D1F]">Tulugma usuli:</strong> Dushman qo‘shinini ikki qanotdan o‘rab olib, halqaga tushirish taktikasi.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Compass className="h-4 w-4 text-emerald-700 mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-[#424245]">
                  <strong className="font-semibold text-[#1D1D1F]">Zaxira otlar:</strong> Har bir jangchi yurishga 2–3 tadan qo‘shimcha ot olib chiqqani bois qo‘shin kuniga 80–100 km masofani bosib o‘ta olgan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
