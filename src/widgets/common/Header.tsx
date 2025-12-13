import { navItems } from '@/utils/constants/Constants'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#04050b]/90 backdrop-blur-lg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(79,70,229,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.12),transparent_35%)] opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(79,70,229,0.1),transparent_50%),linear-gradient(240deg,rgba(236,72,153,0.1),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:flex-nowrap sm:gap-6 sm:px-6 sm:py-5">
        {/* Left nav */}
        <div className="hidden flex-1 items-center gap-4 text-sm text-white/80 sm:flex sm:gap-6">
          {navItems?.slice(0, 2).map((item, index) => (
            <Link
              key={index}
              href={item?.to}
              className="rounded-full border border-transparent px-3 py-2 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              {item?.title}
            </Link>
          ))}
        </div>

        {/* Brand */}
        <div className="flex flex-[1.2] items-center justify-center sm:justify-center">
          <div className="relative flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/90 shadow-[0_10px_40px_rgba(79,70,229,0.25)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <h1 className="text-xl font-bold tracking-tight">
              Sparkz{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-amber-200 animate-[pulse_7s_ease-in-out_infinite]">
                &apos;25
              </span>
            </h1>
          </div>
        </div>

        {/* Right nav + CTA */}
        <div className="hidden flex-1 items-center justify-end gap-4 text-sm text-white/80 sm:flex">
          {navItems?.slice(2, 4).map((item, index) => (
            <Link
              key={index}
              href={item?.to}
              className="rounded-full border border-transparent px-3 py-2 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              {item?.title}
            </Link>
          ))}
          <button
            className="inline-flex items-center justify-center z-30 
             bg-linear-to-r from-indigo-500 via-fuchsia-500 to-amber-400 
             gap-2 rounded-full border border-white/20 
             cursor-pointer
             border-x-0
             px-4 py-2 text-sm font-semibold text-white 
             backdrop-blur-sm transition-all 
             hover:from-indigo-600 hover:via-fuchsia-600 hover:to-amber-500 
             hover:scale-[1.02] active:scale-95"
          >
            Login
          </button>
        </div>

        {/* Mobile actions */}
        <div className="flex w-full items-center justify-between gap-3 sm:hidden">
          <div className="flex items-center gap-2 text-xs text-white/80">
            {navItems?.slice(1, 4).map((item, index) => (
              <Link
                key={index}
                href={item?.to}
                className="rounded-full border border-white/10 px-3 py-2 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                {item?.title}
              </Link>
            ))}
          </div>
          <button
            className="inline-flex items-center justify-center z-30 
             bg-linear-to-r from-indigo-500 via-fuchsia-500 to-amber-400 
             gap-2 rounded-full border border-white/20 
             cursor-pointer
             border-x-0
             px-4 py-2 text-sm font-semibold text-white 
             backdrop-blur-sm transition-all 
             hover:from-indigo-600 hover:via-fuchsia-600 hover:to-amber-500 
             hover:scale-[1.02] active:scale-95"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
