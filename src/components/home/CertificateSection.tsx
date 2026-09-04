import { ArrowRight, Award, BadgeCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const certificateBenefits = [
  {
    title: 'Minh chứng cho sự kiên trì',
    text: 'Ghi nhận quá trình luyện tập và hoàn thành trọn vẹn lộ trình học.',
  },
  {
    title: 'Cột mốc của học viên và gia đình',
    text: 'Một kỷ niệm đáng tự hào sau khi vượt qua những thử thách đầu tiên.',
  },
]

export function CertificateSection() {
  return (
    <section className="noise section-pad relative overflow-hidden bg-white" aria-labelledby="certificate-title">
      <div className="pointer-events-none absolute left-[7%] top-24 grid grid-cols-4 gap-3 opacity-25" aria-hidden="true">{Array.from({ length: 16 }).map((_, index) => <span key={index} className="size-1.5 rounded-full bg-primary" />)}</div>
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.12fr_.88fr] lg:gap-16 xl:gap-24">
        <div className="order-2 relative mx-auto w-full max-w-2xl py-5 sm:px-5 sm:py-10 lg:order-1">
          <div className="pointer-events-none absolute left-[8%] top-0 size-44 rounded-full bg-tangerine/12 sm:size-72" aria-hidden="true" />
          <svg className="pointer-events-none absolute -left-10 top-1/4 hidden h-72 w-[90%] text-iris opacity-[.14] sm:block" viewBox="0 0 600 260" fill="none" aria-hidden="true">
            <path d="M15 120C165 5 342 25 570 204M12 137C162 22 339 42 567 221M9 154C159 39 336 59 564 238" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          <figure className="relative rotate-[-1.5deg] border-[9px] border-[#10182f] bg-[#27304a] p-1.5 shadow-[0_24px_45px_rgba(16,24,47,.22)] transition-transform duration-500 hover:rotate-0 sm:border-[15px] sm:p-2">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#c6a45e] bg-[#fffdf7] p-4 text-center sm:p-8">
              <svg className="absolute inset-0 h-full w-full text-[#c6a45e] opacity-30" viewBox="0 0 600 450" fill="none" aria-hidden="true">
                <path d="M0 78C125 10 210 20 330 0M0 103C140 28 220 35 356 0M600 354C472 430 375 420 255 450M600 327C470 408 365 395 228 450" stroke="currentColor" />
                <path d="M24 24h552v402H24z" stroke="currentColor" />
              </svg>

              <div className="relative flex h-full flex-col items-center justify-between">
                <div>
                  <span className="mx-auto grid size-8 place-items-center rounded-full border border-ink/20 text-ink sm:size-12"><Award className="size-4 sm:size-6" /></span>
                  <p className="mt-2 text-[.42rem] font-bold uppercase tracking-[.18em] text-ink/60 sm:mt-3 sm:text-[.62rem]">Jody Music</p>
                </div>
                <div>
                  <p className="text-[.52rem] font-semibold uppercase tracking-[.16em] text-ink/45 sm:text-xs">Trân trọng trao</p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold tracking-[-.03em] text-ink sm:mt-2 sm:text-4xl">Chứng nhận hoàn thành</h3>
                  <p className="mt-1 font-display text-lg italic text-[#9a7133] sm:mt-2 sm:text-3xl">Nguyễn Minh Hoàng</p>
                  <p className="mt-0.5 text-[.44rem] font-semibold uppercase tracking-[.12em] text-ink/45 sm:mt-1 sm:text-[.65rem]">28 tuổi</p>
                  <p className="mx-auto mt-1.5 max-w-sm text-[.46rem] leading-3 text-ink/55 sm:mt-3 sm:text-[.7rem] sm:leading-5">Đã hoàn thành khóa học</p>
                  <p className="text-[.55rem] font-bold text-ink sm:text-sm">Piano Foundation · 24 buổi</p>
                </div>
                <div className="flex w-full items-end justify-between gap-4 text-[.4rem] text-ink/45 sm:text-[.58rem]">
                  <div className="text-left"><p>Mã chứng nhận</p><b className="text-ink/70">JM-2026-0042</b></div>
                  <div className="text-right"><p className="font-display text-sm italic text-ink sm:text-xl">Jody Music</p><span className="mt-0.5 block border-t border-ink/25 pt-1">Giám đốc học thuật</span></div>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-4 text-iris"><span className="h-px w-12 bg-iris/50" /><p className="eyebrow">Chứng nhận hoàn thành</p><span className="h-px w-12 bg-iris/50" /></div>
          <h2 id="certificate-title" className="mt-7 text-[clamp(2.5rem,5vw,4.4rem)] font-bold leading-[1.14] tracking-[-.03em] text-ink">Jody Music<br /><span className="text-iris">Certificate</span></h2>
          <span className="mt-7 block h-1 w-16 rounded-full bg-tangerine" aria-hidden="true" />
          <p className="mt-7 max-w-xl text-sm leading-7 text-ink/65 sm:text-base sm:leading-8">Tại Jody Music, mỗi hành trình học nhạc đều được ghi nhận và trân trọng. Sau khi hoàn thành lộ trình từ 24 buổi, học viên sẽ được cấp <strong className="font-semibold text-iris">Chứng nhận Hoàn thành Khóa học</strong> như một dấu mốc cho nỗ lực và sự tiến bộ.</p>

          <div className="mt-8 border-t border-ink/10">
            {certificateBenefits.map((benefit) => <div key={benefit.title} className="grid grid-cols-[1.5rem_1fr] gap-3 border-b border-ink/10 py-5">
              <BadgeCheck className="mt-0.5 size-5 text-tangerine" />
              <div><h3 className="text-sm font-bold uppercase tracking-[.05em] text-iris">{benefit.title}</h3><p className="mt-2 text-sm leading-6 text-ink/55">{benefit.text}</p></div>
            </div>)}
          </div>

          <Link to="/about" className="button-motion button-shine focus-ring group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-primary px-6 text-sm font-semibold text-ink shadow-[4px_4px_0_#e9864a] hover:bg-primary-hover sm:w-auto">Tìm hiểu thêm<ArrowRight size={17} className="button-arrow" /></Link>
        </div>
      </div>
    </section>
  )
}
