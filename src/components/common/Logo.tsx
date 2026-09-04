import { Link } from 'react-router-dom'

export function Logo({ inverse = false, large = false }: { inverse?: boolean; large?: boolean }) {
  return (
    <Link to="/" className="focus-ring group inline-flex shrink-0 items-center gap-3" aria-label="DẤU LẶNG - Trang chủ">
      <span className={`grid shrink-0 place-items-center rounded-full border transition-transform group-hover:rotate-12 ${large ? 'h-12 w-12' : 'h-10 w-10'} ${inverse ? 'border-white/30' : 'border-ink/20'}`}>
        <svg viewBox="0 0 32 32" className={large ? 'h-7 w-7' : 'h-6 w-6'} aria-hidden="true"><path d="M10 8v13.2a4 4 0 1 1-2-3.46V6.5L23 3v13.2a4 4 0 1 1-2-3.46V8.1L10 10.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <span className="leading-none">
        <span className={`block font-bold tracking-[.16em] ${large ? 'text-[1.02rem]' : 'text-[.9rem]'}`}>DẤU LẶNG</span>
        <span className={`mt-1 block uppercase tracking-[.22em] ${large ? 'text-[.58rem]' : 'text-[.55rem]'} ${inverse ? 'text-white/55' : 'text-ink/50'}`}>Music Academy</span>
      </span>
    </Link>
  )
}
