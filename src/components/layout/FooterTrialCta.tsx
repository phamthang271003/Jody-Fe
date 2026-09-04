import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react'
import { useBooking } from '../../context/BookingContext'

const ctaContainer = 'mx-auto w-[min(calc(100%-2rem),90rem)] md:w-[min(calc(100%-4rem),90rem)]'

const avatarImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
]

export function FooterTrialCta() {
  const { openBooking } = useBooking()

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_100%,#121c38_0%,#0a1125_55%,#070c1b_100%)] text-white" aria-labelledby="footer-trial-title">
      <div className="pointer-events-none absolute -left-24 top-1/2 size-56 -translate-y-1/2 rounded-full border-[2rem] border-iris/10" aria-hidden="true" />
      <div className={`${ctaContainer} relative px-5 py-12 sm:px-8 sm:py-14 lg:grid lg:grid-cols-[1.35fr_.8fr] lg:items-center lg:gap-14 lg:px-10 lg:py-16`}>
          <svg className="pointer-events-none absolute -right-24 bottom-0 hidden h-full w-[46%] text-iris opacity-[.14] sm:block" viewBox="0 0 620 230" fill="none" aria-hidden="true">
            <path d="M0 165C135 95 285 230 610 62" stroke="currentColor" />
            <path d="M0 178C150 108 305 242 620 78" stroke="currentColor" />
            <path d="M0 192C155 120 325 250 620 98" stroke="currentColor" />
            <path d="M0 205C170 138 345 255 620 118" stroke="currentColor" />
          </svg>
          <span className="pointer-events-none absolute left-9 top-10 hidden rotate-12 font-display text-6xl text-tangerine/20 md:block" aria-hidden="true">♫</span>

          <div className="relative">
            <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-iris/40 bg-iris/10 px-3.5 py-2 text-[.6rem] font-bold uppercase leading-4 tracking-[.08em] text-white/80 sm:px-4 sm:text-[.68rem]">
              <Sparkles size={14} className="shrink-0 text-tangerine" />Học thử miễn phí dành cho học viên mới
            </p>
            <h2 id="footer-trial-title" className="mt-5 max-w-2xl font-sans text-[clamp(1.75rem,7vw,2.75rem)] font-bold leading-tight tracking-[-.035em]">
              Đăng ký buổi học nhạc cụ đầu tiên ngay hôm nay.
            </h2>
            <p className="mt-4 max-w-2xl text-xs leading-6 text-white/55 sm:text-sm sm:leading-7">
              Trải nghiệm không gian học chuyên nghiệp và nhận lộ trình cá nhân hóa phù hợp với bạn.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <button onClick={() => openBooking()} className="button-motion button-shine focus-ring flex min-h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-4 text-xs font-semibold text-ink shadow-[0_8px_24px_rgba(217,151,24,.18)] hover:bg-primary-hover sm:min-h-14 sm:rounded-2xl sm:px-6 sm:text-sm">
              <CalendarDays size={18} />Đăng ký học thử miễn phí <ArrowRight className="button-arrow" size={17} />
            </button>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="flex -space-x-2">{avatarImages.map((image) => <img key={image} src={image} alt="" className="h-9 w-9 rounded-full border-2 border-[#111a34] object-cover" loading="lazy" />)}</div>
              <p className="text-xs text-white/50"><b className="text-white">1.200+</b> học viên đã đăng ký</p>
            </div>
          </div>
      </div>
    </section>
  )
}
