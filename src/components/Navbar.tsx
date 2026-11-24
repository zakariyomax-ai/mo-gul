interface NavbarProps {
  onStartQuiz: () => void;
}

export function Navbar({ onStartQuiz }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-base font-bold tracking-tight text-[#1D1D1F] whitespace-nowrap shrink-0 sm:text-lg"
        >
          Mo‘g‘ullar Davlati
        </a>

        <nav
          aria-label="Asosiy bo‘limlar"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6E6E73]"
        >
          <a
            href="#mavzu"
            className="hover:text-emerald-700 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Asosiy Mavzu
          </a>
          <a
            href="#harbiy-tizim"
            className="hover:text-emerald-700 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Harbiy Tizim
          </a>
          <a
            href="#uluslar"
            className="hover:text-emerald-700 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Uluslar
          </a>
          <a
            href="#xronologiya"
            className="hover:text-emerald-700 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Xronologiya
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onStartQuiz}
            className="rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 whitespace-nowrap shrink-0 cursor-pointer"
          >
            30 ta Test
          </button>
        </div>
      </div>
    </header>
  );
}
