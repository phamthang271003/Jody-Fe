import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import { events } from '../../data/events'

export function AnnualShowcaseSection() {
  const featuredEvent = events[0]

  return (
    <section className="bg-paper px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[76rem] items-center gap-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-12 xl:gap-16">
        <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] lg:aspect-[6/5]">
            <img
              src={featuredEvent.image}
              alt={`Học viên biểu diễn tại ${featuredEvent.title}`}
              className="image-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/92 px-3 py-2 text-[.62rem] font-bold uppercase tracking-wider text-ink backdrop-blur-sm sm:bottom-6 sm:left-6 sm:px-4 sm:text-xs">
              <CalendarDays size={14} className="text-tangerine" aria-hidden="true" />
              {featuredEvent.date}
            </div>
        </div>

        <div className="pb-2 sm:pb-4 lg:py-5">
            <div className="mb-5 h-1 w-12 rounded-full bg-tangerine sm:mb-6" aria-hidden="true" />
            <p className="eyebrow text-tangerine">Trình diễn trước khán giả</p>
            <h2 className="display text-balance mt-4 text-[clamp(2.25rem,3.8vw,3.75rem)] text-ink">
              Sân khấu thường niên của Jody Music.
            </h2>
            <p className="mt-5 text-sm font-semibold uppercase leading-6 tracking-[.07em] text-ink/75 sm:text-base">
              {featuredEvent.title} — một cột mốc đáng nhớ
            </p>
            <div className="mt-5 max-w-xl space-y-3 text-sm leading-7 text-ink/60">
              <p>
                Những giai điệu được nuôi dưỡng trong lớp học sẽ bước lên sân khấu thật — nơi mỗi học viên được tự tin kể câu chuyện âm nhạc của riêng mình.
              </p>
              <p>
                Từ độc tấu đầu tiên đến màn hòa tấu cùng bạn bè, mỗi tiết mục đều là một dấu mốc của nỗ lực, niềm vui và sự trưởng thành.
              </p>
            </div>

            <Link
              to="/events"
              className="button-motion focus-ring group mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-ink px-5 text-center text-xs font-bold uppercase tracking-[.04em] text-white hover:bg-primary hover:text-ink sm:w-auto sm:px-6"
            >
              <CalendarDays size={17} aria-hidden="true" />
              Xem các sự kiện của Jody Music
              <ArrowRight size={17} className="button-arrow" aria-hidden="true" />
            </Link>
        </div>
      </div>
    </section>
  )
}
