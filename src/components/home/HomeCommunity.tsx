import { ArrowRight, CircleHelp, Star } from 'lucide-react'
import { ButtonLink } from '../common/Button'
import { Link } from 'react-router-dom'
import { FAQAccordion } from '../common/FAQAccordion'
import { SectionHeading } from '../common/SectionHeading'
import { VideoCard } from '../cards/VideoCard'
import { TestimonialCard } from '../cards/TestimonialCard'
import { EventCard } from '../cards/EventCard'
import { blogPosts, faqs, testimonials } from '../../data/content'
import { events } from '../../data/events'
import { performances } from '../../data/performances'

export function PerformancesSection() {
  return <section className="noise section-pad relative overflow-hidden bg-cream-soft"><div className="pointer-events-none absolute -left-20 top-1/2 size-48 rounded-full border-[1.5rem] border-tangerine/10" aria-hidden="true" /><div className="pointer-events-none absolute -right-16 top-1/3 grid grid-cols-4 gap-3 opacity-25" aria-hidden="true">{Array.from({ length: 16 }).map((_, index) => <span key={index} className="size-1 rounded-full bg-tangerine" />)}</div><div className="container-site relative"><header className="mx-auto mb-10 max-w-4xl text-center sm:mb-14"><span className="inline-flex items-center gap-2 rounded-full bg-soft-yellow px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-primary-hover"><Star size={16} />Thành quả học viên</span><h2 className="text-balance mt-5 text-[clamp(2rem,3.6vw,3.4rem)] font-bold leading-[1.14] tracking-[-.025em] text-ink">MV tổng kết khóa học<br className="hidden sm:block" /> <span className="text-tangerine">của học viên Jody Music</span></h2><p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-ink/60 sm:text-base">Mỗi học viên hoàn thành khóa học đều được đồng hành ghi lại một bản MV đánh dấu cột mốc riêng — từ classic, pop đến rock và ballad.</p><span className="mx-auto mt-7 block h-0.5 w-16 bg-tangerine" aria-hidden="true" /></header><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{performances.map((item) => <VideoCard key={item.id} item={item} showcase />)}</div><div className="mt-10 flex justify-center sm:mt-12"><ButtonLink to="/students" variant="ghost" arrow className="w-full bg-white sm:w-auto sm:min-w-72">Xem thêm MV của học viên</ButtonLink></div></div></section>
}

export function TestimonialsSection() {
  return <section className="noise section-pad bg-ink"><div className="container-site"><SectionHeading eyebrow="Được tin tưởng bởi cộng đồng" title="Những điều ở lại sau giờ học." inverse /><div className="grid gap-5 md:grid-cols-3">{testimonials.map((item) => <TestimonialCard key={item.id} item={item} />)}</div></div></section>
}

export function EventsSection() {
  return <section className="section-pad bg-white"><div className="container-site"><SectionHeading eyebrow="Hoạt động & sự kiện" title="Âm nhạc sống động nhất khi được sẻ chia." action={<ButtonLink to="/events" variant="ghost" arrow>Lịch sự kiện</ButtonLink>} /><div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]"><EventCard event={events[0]} featured /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1"><EventCard event={events[1]} /><EventCard event={events[2]} /></div></div></div></section>
}

export function FAQSection() {
  return <section id="faq" className="noise section-pad relative overflow-hidden bg-cream-soft">
    <div className="pointer-events-none absolute left-[7%] top-28 grid grid-cols-3 gap-3 opacity-25" aria-hidden="true">{Array.from({ length: 9 }).map((_, index) => <span key={index} className="size-1.5 rounded-full bg-primary" />)}</div>
    <div className="pointer-events-none absolute right-[7%] top-28 hidden rotate-[-8deg] items-end gap-5 text-5xl text-iris/20 md:flex" aria-hidden="true"><span className="text-3xl">♪</span><span>♫</span><span className="text-6xl">𝄞</span></div>
    <div className="container-site relative max-w-[78rem]">
      <header className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-soft-yellow px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-primary-hover"><CircleHelp size={16} />Câu hỏi thường gặp</span>
        <h2 className="text-balance mt-5 text-[clamp(2.1rem,4vw,3.6rem)] font-bold leading-[1.15] tracking-[-.03em] text-ink">Giải đáp những <span className="relative text-iris">thắc mắc<span className="absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 -rotate-6 rounded-full bg-tangerine" aria-hidden="true" /></span> của bạn</h2>
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-ink/55 sm:text-base">Bạn còn băn khoăn về khóa học, lịch học, hình thức đăng ký hay cách chọn nhạc cụ phù hợp? Dưới đây là những câu hỏi phổ biến nhất.</p>
      </header>
      <FAQAccordion items={faqs} variant="showcase" />
      <p className="mt-8 text-center text-sm text-ink/50">Chưa tìm thấy câu trả lời? Gọi <a className="focus-ring font-semibold text-iris underline decoration-iris/30 underline-offset-4" href="tel:02873008886">(028) 7300 8886</a> để được tư vấn.</p>
    </div>
  </section>
}

export function BlogSection() {
  return <section className="section-pad bg-white"><div className="container-site"><SectionHeading eyebrow="Jody Music Journal" title="Đọc để nghe tốt hơn." action={<ButtonLink to="/blog" variant="ghost" arrow>Tất cả bài viết</ButtonLink>} /><div className="grid gap-8 md:grid-cols-3">{blogPosts.map((post,index) => <Link to={`/blog/${post.slug}`} key={post.slug} className="focus-ring group block"><div className={`overflow-hidden rounded-[1.5rem] ${index === 1 ? 'md:mt-14' : ''}`}><img src={post.image} alt={post.title} className="image-cover aspect-[4/3]" loading="lazy" /></div><div className="pt-5"><p className="eyebrow text-iris">{post.category} · {post.date}</p><h3 className="mt-3 flex items-start justify-between gap-4 font-display text-3xl font-semibold leading-tight text-ink">{post.title}<ArrowRight className="mt-1 shrink-0 transition-transform group-hover:translate-x-1" size={20} /></h3><p className="mt-3 text-sm leading-6 text-ink/55">{post.excerpt}</p></div></Link>)}</div></div></section>
}
