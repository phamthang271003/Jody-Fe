import { Music2 } from 'lucide-react'

const reasons = [
  {
    title: 'Báo cáo học tập sau mỗi buổi học',
    text: 'Báo cáo chi tiết giúp học viên và phụ huynh theo dõi tiến độ, nội dung đã học cùng nhận xét trực tiếp từ giáo viên.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85',
    color: 'text-[#e84f55]',
  },
  {
    title: 'MV biểu diễn cuối khóa chuyên nghiệp',
    text: 'Ghi hình và sản xuất video biểu diễn chất lượng cao, lưu giữ cột mốc đáng nhớ sau mỗi chặng đường học tập.',
    image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=1000&q=85',
    color: 'text-[#1769db]',
  },
  {
    title: 'Học thử miễn phí trước khi bắt đầu',
    text: 'Trải nghiệm lớp học thực tế, cảm nhận phương pháp giảng dạy và lựa chọn bộ môn phù hợp nhất với bạn.',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1000&q=85',
    color: 'text-[#2aa86f]',
  },
  {
    title: 'Giáo viên chuyên môn cao, giàu kinh nghiệm',
    text: 'Đội ngũ giảng viên có nền tảng học thuật vững vàng, kinh nghiệm sân khấu và luôn tận tâm trong từng giờ học.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85',
    color: 'text-iris',
  },
  {
    title: 'Lộ trình cá nhân hóa theo năng lực',
    text: 'Mỗi học viên có kế hoạch học riêng, được điều chỉnh thường xuyên để tiến bộ bền vững và phát huy tối đa tiềm năng.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85',
    color: 'text-[#ed9518]',
  },
  {
    title: 'Không gian học tập truyền cảm hứng',
    text: 'Phòng học cách âm, thiết bị hiện đại và nhạc cụ có sẵn tạo nên môi trường thoải mái cho mọi buổi luyện tập.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=85',
    color: 'text-primary-hover',
  },
]

export function WhyUsSection() {
  return <section className="noise section-pad relative overflow-hidden bg-cream-soft">
    <div className="pointer-events-none absolute -left-20 top-1/3 size-52 rounded-full bg-tangerine/10 blur-3xl" aria-hidden="true" />
    <div className="container-site relative max-w-[92rem]">
      <header className="mx-auto mb-10 max-w-5xl text-center sm:mb-14">
        <span className="mx-auto mb-4 block h-2 w-16 rounded-full bg-tangerine" aria-hidden="true" />
        <p className="eyebrow text-ink/50">Dấu Lặng Music Center</p>
        <h2 className="text-balance mt-4 text-[clamp(2.15rem,4.5vw,4rem)] font-bold leading-[1.25] tracking-[-.03em] text-ink">Vì sao chọn học âm nhạc bài bản tại <span className="relative text-iris">DẤU LẶNG?<span className="absolute -bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 -rotate-3 rounded-full bg-tangerine" aria-hidden="true" /></span></h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ink/55 sm:text-base">Chúng tôi đồng hành cùng học viên trên hành trình chinh phục âm nhạc bằng phương pháp hiện đại và sự tận tâm.</p>
      </header>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {reasons.map((reason, index) => <article key={reason.title} className="group flex min-h-[25rem] flex-col overflow-hidden rounded-2xl border border-ink/[.06] bg-white shadow-[0_8px_30px_rgba(16,24,47,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,24,47,.1)]">
          <div className="order-2 flex flex-1 flex-col p-6 sm:p-7 xl:p-6">
            <div className="flex items-start gap-3.5">
              <span className={`grid size-11 shrink-0 place-items-center rounded-xl border border-current bg-white text-lg font-bold tracking-[-.04em] shadow-[3px_3px_0_currentColor] ${reason.color}`}>{String(index + 1).padStart(2, '0')}</span>
              <h3 className="pt-0.5 text-lg font-bold leading-6 tracking-[-.025em] text-ink">{reason.title}</h3>
            </div>
            <p className="mt-5 border-t border-ink/10 pt-4 text-xs leading-6 text-ink/60 sm:text-sm">{reason.text}</p>
          </div>
          <div className="order-1 relative aspect-[16/9] w-full overflow-hidden">
            <img src={reason.image} alt={reason.title} className="image-cover" loading="lazy" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/35 to-transparent" aria-hidden="true" />
          </div>
        </article>)}
      </div>

      <p className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 text-center text-sm leading-6 text-ink/55 sm:mt-12 sm:text-base"><Music2 className="shrink-0 text-iris" size={19} />Âm nhạc không chỉ là kỹ năng — đó là hành trình <strong className="font-semibold text-iris">thay đổi cảm nhận và cuộc sống.</strong></p>
    </div>
  </section>
}
