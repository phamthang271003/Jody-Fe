import { ArrowRight, AudioLines, CalendarDays, MessageCircle, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useBooking } from '../../context/BookingContext'

const heroContainer = 'mx-auto w-[min(calc(100%-2rem),90rem)] md:w-[min(calc(100%-4rem),90rem)]'

const stats = [
  { value: '1.200+', label: 'Học viên' },
  { value: '24+', label: 'Giảng viên' },
  { value: '10+', label: 'Chương trình học' },
  { value: '9+ năm', label: 'Kinh nghiệm đào tạo' },
]

const subjects = ['Piano', 'Guitar', 'Thanh nhạc', 'Trẻ em', 'Người lớn']

export function HomeHero() {
  const { openBooking } = useBooking()

  return (
    <section className="noise relative isolate overflow-hidden bg-[#fcfaf7] pt-28 sm:pt-[7.25rem] lg:min-h-screen lg:pt-[8.25rem]" aria-labelledby="home-hero-title">
      <div className="pointer-events-none absolute left-[48%] top-[18%] hidden grid-cols-8 gap-2 opacity-30 lg:grid" aria-hidden="true">
        {Array.from({ length: 48 }).map((_, index) => <span key={index} className="size-1 rounded-full bg-primary" />)}
      </div>
      <div className="pointer-events-none absolute bottom-[20%] right-[1%] hidden grid-cols-7 gap-2 opacity-20 lg:grid" aria-hidden="true">
        {Array.from({ length: 35 }).map((_, index) => <span key={index} className="size-1 rounded-full bg-primary" />)}
      </div>
      <Music2 className="pointer-events-none absolute right-[7%] top-[12%] hidden rotate-12 text-tangerine lg:block" size={34} strokeWidth={2.2} aria-hidden="true" />

      <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-[14%] w-full text-cream-soft" viewBox="0 0 1600 180" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 58C310 127 649 146 968 123C1211 106 1416 56 1600 2V180H0V58Z" fill="currentColor" />
        <path d="M0 58C310 127 649 146 968 123C1211 106 1416 56 1600 2" stroke="#d99718" strokeOpacity=".14" />
      </svg>

      <div className={`${heroContainer} relative z-10 grid gap-10 pb-20 pt-10 sm:gap-14 sm:pb-24 sm:pt-14 lg:min-h-[calc(100vh-8.25rem)] lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-8 lg:pb-24 lg:pt-10 xl:grid-cols-[.94fr_1.06fr] xl:gap-14`}>
        <div className="relative z-20 min-w-0 lg:py-6">
          <div className="animate-enter flex items-center gap-4" style={{ animationDelay: '.05s' }}>
            <span className="h-1 w-10 rounded-full bg-tangerine sm:w-12" aria-hidden="true" />
            <p className="eyebrow text-iris">Trung tâm giáo dục âm nhạc</p>
          </div>

          <h1
            id="home-hero-title"
            className="animate-enter mt-7 text-balance font-sans text-[clamp(2.35rem,5.8vw,4.15rem)] font-bold uppercase leading-[1.15] tracking-[-.03em] text-ink lg:text-[clamp(2.65rem,3.8vw,4.15rem)]"
            style={{ animationDelay: '.12s' }}
          >
            Khám phá<br />
            tiềm năng âm nhạc<br />
            cùng <span className="bg-gradient-to-r from-primary-hover via-primary to-accent bg-clip-text text-transparent">JODY MUSIC</span>
          </h1>

          <p className="animate-enter mt-7 max-w-[39rem] text-sm leading-7 text-muted sm:text-base sm:leading-8" style={{ animationDelay: '.2s' }}>
            Mỗi học viên đều có một thanh âm riêng. Với phương pháp cá nhân hóa, đội ngũ tận tâm và môi trường truyền cảm hứng, Jody Music giúp bạn tự tin thể hiện và bứt phá giới hạn của chính mình.
          </p>

          <div className="animate-enter mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '.28s' }}>
            <button
              onClick={() => openBooking()}
              className="button-motion button-shine focus-ring inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-primary px-7 text-sm font-semibold text-ink shadow-[0_8px_24px_rgba(217,151,24,.18)] hover:bg-primary-hover"
            >
              <CalendarDays size={18} />Đăng ký học thử <ArrowRight className="button-arrow" size={17} />
            </button>
            <Link
              to="/contact"
              className="button-motion focus-ring inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-border bg-white px-7 text-sm font-semibold text-ink shadow-[0_8px_24px_rgba(16,24,47,.08)] hover:border-primary-hover hover:text-primary-hover"
            >
              <MessageCircle size={20} className="text-iris" />Tư vấn miễn phí
            </Link>
          </div>

          <div className="animate-enter mt-8 flex flex-wrap gap-2.5" style={{ animationDelay: '.34s' }} aria-label="Chương trình nổi bật">
            {subjects.map((subject) => <span key={subject} className="rounded-full bg-cream-soft px-5 py-2.5 text-xs font-medium text-ink/75 sm:min-w-24 sm:text-center">{subject}</span>)}
          </div>

          <div className="animate-enter mt-10 grid grid-cols-2 gap-y-7 border-t border-ink/10 pt-7 sm:grid-cols-4 sm:gap-y-0 sm:border-t-0 sm:pt-0" style={{ animationDelay: '.4s' }}>
            {stats.map((stat, index) => (
              <article key={stat.label} className={`min-w-0 pr-3 sm:border-l sm:border-ink/12 sm:px-5 ${index === 0 ? 'sm:border-l-0 sm:pl-0' : ''}`}>
                <strong className="block whitespace-nowrap font-display text-[2rem] font-semibold leading-none tracking-[-.04em] text-ink sm:text-[2.35rem]">{stat.value}</strong>
                <span className="mt-2 block text-[.68rem] leading-5 text-ink/55 sm:text-xs">{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="animate-enter relative mx-auto aspect-[.96/1] w-full max-w-[46rem] sm:aspect-[1.14/1] lg:aspect-[1.02/1] lg:max-w-none" style={{ animationDelay: '.17s' }} aria-label="Khoảnh khắc học tập và biểu diễn tại Jody Music">
          <div className="pointer-events-none absolute left-[2%] top-[9%] h-[78%] w-[73%] -rotate-[5deg] rounded-[2.2rem] border border-iris/20 sm:rounded-[3rem]" aria-hidden="true" />

          <div className="group absolute left-[2%] top-[11%] h-[76%] w-[71%] -rotate-[1.5deg] overflow-hidden rounded-[1.55rem] border-[4px] border-white bg-ink shadow-[0_28px_70px_rgba(16,24,47,.2)] sm:rounded-[2.25rem] sm:border-[6px]">
            <img src="https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=1400&q=88" alt="Học viên luyện tập piano" className="image-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-white/5" aria-hidden="true" />
          </div>

          <div className="group absolute right-[1%] top-[15%] z-20 h-[48%] w-[43%] rotate-[7deg] overflow-hidden rounded-[1.25rem] border-[4px] border-white bg-ink shadow-[0_24px_55px_rgba(16,24,47,.22)] transition duration-500 hover:z-30 hover:rotate-2 sm:rounded-[1.8rem] sm:border-[6px]">
            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=86" alt="Học viên biểu diễn thanh nhạc" className="image-cover object-top opacity-95" loading="lazy" />
          </div>

          <div className="group absolute bottom-[2%] right-[5%] z-20 h-[38%] w-[51%] -rotate-[2.5deg] overflow-hidden rounded-[1.25rem] border-[4px] border-white bg-ink shadow-[0_24px_55px_rgba(16,24,47,.22)] transition duration-500 hover:z-30 hover:rotate-0 sm:rounded-[1.8rem] sm:border-[6px]">
            <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=86" alt="Học viên luyện tập guitar" className="image-cover opacity-95" loading="lazy" />
          </div>

          <span className="absolute right-[30%] top-[8%] z-30 grid size-16 place-items-center rounded-full border-[5px] border-white bg-soft-yellow text-primary-hover shadow-xl sm:size-20" aria-hidden="true">
            <Music2 size={31} strokeWidth={1.8} />
          </span>
          <span className="absolute bottom-[1%] right-[43%] z-30 grid size-16 place-items-center rounded-full border-[5px] border-white bg-white text-tangerine shadow-xl sm:size-20" aria-hidden="true">
            <AudioLines size={31} strokeWidth={2} />
          </span>
        </div>
      </div>
    </section>
  )
}
