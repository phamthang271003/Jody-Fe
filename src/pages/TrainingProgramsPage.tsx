import { TrainingProgramsSection } from '../components/home/HomeDiscovery'
import { Button, ButtonLink } from '../components/common/Button'
import { useBooking } from '../context/BookingContext'
import { useSeo } from '../hooks/useSeo'

export default function TrainingProgramsPage() {
  const { openBooking } = useBooking()

  useSeo({
    title: 'Chương trình đào tạo',
    description: 'Khám phá các chương trình học âm nhạc tại Jody Music dành cho nhiều độ tuổi và trình độ.',
  })

  return <>
    <TrainingProgramsSection page />
    <section className="bg-paper pb-16 sm:pb-20 lg:pb-24" aria-labelledby="training-programs-cta-title">
      <div className="container-site">
        <div className="noise relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-white shadow-2xl shadow-ink/15 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <span className="pointer-events-none absolute -left-16 -top-20 size-52 rounded-full border-[2rem] border-primary/10" aria-hidden="true" />
          <span className="pointer-events-none absolute -bottom-24 -right-16 size-60 rounded-full bg-accent/10 blur-2xl" aria-hidden="true" />
          <span className="pointer-events-none absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-full bg-primary" aria-hidden="true" />

          <div className="relative mx-auto max-w-3xl">
            <p className="eyebrow text-primary">Buổi học đầu tiên</p>
            <h2 id="training-programs-cta-title" className="text-balance mt-5 text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.18] tracking-[-0.035em]">
              Sẵn sàng bắt đầu <span className="text-primary">hành trình âm nhạc?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              Đăng ký buổi học thử miễn phí hoặc liên hệ để được tư vấn lộ trình phù hợp với mục tiêu của bạn.
            </p>
            <div className="mx-auto mt-8 flex max-w-xl flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button onClick={() => openBooking()} arrow className="w-full sm:w-auto sm:min-w-48">
                Đăng ký học thử
              </Button>
              <ButtonLink to="/contact" variant="inverse" arrow className="w-full sm:w-auto sm:min-w-48">
                Liên hệ tư vấn
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
