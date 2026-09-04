import {
  ArrowUpRight,
  Check,
  Clock3,
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Navigation,
  PencilLine,
  Phone,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'
import { useState, type FormEvent, type InputHTMLAttributes } from 'react'
import { Breadcrumb } from '../components/common/Breadcrumb'
import { Button } from '../components/common/Button'
import { courses } from '../data/courses'
import { useSeo } from '../hooks/useSeo'

const mapUrl = 'https://www.google.com/maps?q=7%2F41%2F20%20Th%C3%A0nh%20Th%C3%A1i%2C%20Ph%C6%B0%E1%BB%9Dng%20Di%C3%AAn%20H%E1%BB%93ng%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam&z=18&output=embed'
const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=7%2F41%2F20%20Th%C3%A0nh%20Th%C3%A1i%2C%20Ph%C6%B0%E1%BB%9Dng%20Di%C3%AAn%20H%E1%BB%93ng%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam'

const serviceNotes = [
  {
    icon: Clock3,
    title: 'Giờ làm việc',
    detail: '08:00 – 21:30 (Thứ 2 – Chủ nhật)',
  },
  {
    icon: MessagesSquare,
    title: 'Phản hồi nhanh',
    detail: 'Phản hồi trong ngày làm việc',
  },
  {
    icon: UsersRound,
    title: 'Tư vấn tận tâm',
    detail: 'Đội ngũ giàu kinh nghiệm, đồng hành cùng bạn',
  },
]

const contactItems = [
  { icon: Phone, label: '0938 793 558', href: 'tel:0938793558' },
  { icon: MessageCircle, label: 'Zalo: 0938 793 558', href: 'https://zalo.me/0938793558' },
  { icon: Mail, label: 'jodymusiccenter@gmail.com', href: 'mailto:jodymusiccenter@gmail.com' },
  { icon: Facebook, label: 'Jody Music', href: '#' },
  { icon: MapPin, label: '7/41/20 Thành Thái, Phường Diên Hồng', href: directionsUrl },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  useSeo({
    title: 'Liên hệ',
    description: 'Liên hệ Jody Music để được tư vấn khóa học âm nhạc phù hợp.',
  })

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="relative overflow-hidden bg-paper pb-16 pt-32 md:pb-20 md:pt-40 lg:pb-24" aria-labelledby="contact-title">
      <span className="pointer-events-none absolute -left-28 -top-24 size-72 rounded-full bg-mist/60" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-52 top-28 size-96 rounded-full border-[4rem] border-cream-soft" aria-hidden="true" />

      <svg className="pointer-events-none absolute -left-20 top-[20rem] hidden h-28 w-96 text-primary-hover opacity-[.14] md:block" viewBox="0 0 420 120" fill="none" aria-hidden="true">
        {[22, 38, 54, 70, 86].map((y) => <path key={y} d={`M0 ${y}C120 ${y + 22} 260 ${y - 20} 420 ${y + 4}`} stroke="currentColor" />)}
        <path d="M132 25v53c0 13-10 23-23 23-10 0-18-6-18-14 0-9 10-16 21-16 6 0 12 2 16 5V30l32-10v47c0 13-10 23-23 23-10 0-18-6-18-14 0-9 10-16 21-16 6 0 12 2 16 5V15l-24 8" fill="currentColor" />
      </svg>

      <div className="container-site relative">
        <Breadcrumb items={[{ label: 'Liên hệ' }]} />

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(21rem,.75fr)] lg:items-end lg:gap-12 xl:gap-20">
          <div>
            <p className="eyebrow flex items-center gap-3 text-primary-hover">
              <span className="h-px w-12 bg-accent" aria-hidden="true" />
              Come say hello
            </p>
            <h1 id="contact-title" className="mt-6 max-w-4xl font-display text-[clamp(2.75rem,6vw,5.25rem)] font-semibold leading-[1.17] tracking-[-.035em] text-ink">
              Bắt đầu bằng một cuộc trò chuyện.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              Kể chúng tôi nghe về người học, mục tiêu và bản nhạc yêu thích. Đội ngũ học thuật sẽ giúp bạn tìm bước khởi đầu phù hợp.
            </p>
          </div>

          <aside className="rounded-[1.75rem] bg-ink px-6 py-3 text-white shadow-xl shadow-ink/10 sm:px-8" aria-label="Thông tin hỗ trợ">
            {serviceNotes.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/15 py-5 last:border-0">
                <span className="grid size-12 place-items-center rounded-full bg-white/[.08] text-primary" aria-hidden="true"><Icon size={22} /></span>
                <div className="self-center">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-white/65 sm:text-[.8rem]">{detail}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(19rem,.88fr)] lg:items-stretch">
          <section className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-xl shadow-ink/[.06]" aria-labelledby="consultation-title">
            <div className="grid h-full lg:grid-cols-[7rem_1fr]">
              <div className="staff-lines relative flex min-h-24 items-center justify-between overflow-hidden bg-ink px-6 text-primary lg:min-h-full lg:flex-col lg:px-0 lg:py-12" aria-hidden="true">
                <span className="font-display text-6xl leading-none lg:mt-10 lg:text-7xl">𝄞</span>
                <span className="grid grid-cols-5 gap-1.5 lg:grid-cols-3">
                  {Array.from({ length: 15 }).map((_, index) => <i key={index} className="size-1 rounded-full bg-primary" />)}
                </span>
              </div>

              {sent ? (
                <div className="grid min-h-[35rem] place-items-center p-7 text-center sm:p-10 lg:p-12" role="status" aria-live="polite">
                  <div>
                    <span className="mx-auto grid size-20 place-items-center rounded-full bg-soft-yellow text-primary-hover"><Check size={34} /></span>
                    <h2 id="consultation-title" className="mt-7 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.2] tracking-[-.03em] text-ink">Tin nhắn đã được gửi.</h2>
                    <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted">Chúng tôi sẽ phản hồi bạn trong giờ làm việc gần nhất.</p>
                    <Button className="mt-8" onClick={() => setSent(false)}>Gửi tin nhắn khác</Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="p-6 sm:p-8 lg:p-10 xl:p-12">
                  <p className="eyebrow flex items-center gap-2 text-primary-hover"><PencilLine size={16} />Nhận tư vấn</p>
                  <h2 id="consultation-title" className="mt-4 font-display text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.2] tracking-[-.03em] text-ink">Bạn đang tìm khóa học nào?</h2>

                  <div className="mt-8 grid gap-x-5 gap-y-5 sm:grid-cols-2">
                    <Field label="Họ và tên" name="name" autoComplete="name" placeholder="Nhập họ và tên" required />
                    <Field label="Số điện thoại" name="phone" type="tel" autoComplete="tel" placeholder="Nhập số điện thoại" required />
                    <Field label="Email" name="email" type="email" autoComplete="email" placeholder="Nhập email" />
                    <label>
                      <span className="mb-2 block text-xs font-semibold text-ink/65">Môn học quan tâm</span>
                      <select name="course" defaultValue="" className="focus-ring h-12 w-full rounded-xl border border-ink/15 bg-white px-4 text-sm text-ink">
                        <option value="" disabled>Chọn môn học</option>
                        {courses.map((course) => <option key={course.slug} value={course.slug}>{course.name}</option>)}
                      </select>
                    </label>
                    <Field label="Độ tuổi học viên" name="age" inputMode="numeric" placeholder="Nhập độ tuổi học viên" />
                    <label className="sm:col-span-2">
                      <span className="mb-2 block text-xs font-semibold text-ink/65">Ghi chú</span>
                      <textarea name="note" rows={4} className="focus-ring w-full resize-y rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm leading-6 text-ink placeholder:text-muted/60" placeholder="Mục tiêu, khung giờ phù hợp, thông tin thêm..." />
                    </label>
                  </div>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Button type="submit" arrow className="w-full sm:w-auto">Gửi yêu cầu</Button>
                    <p className="flex items-start gap-2 text-xs leading-5 text-muted"><ShieldCheck size={18} className="shrink-0 text-primary-hover" />Thông tin của bạn được bảo mật tuyệt đối.</p>
                  </div>
                </form>
              )}
            </div>
          </section>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[auto_minmax(15rem,1fr)]">
            <section className="rounded-[1.75rem] border border-border bg-white p-6 shadow-lg shadow-ink/[.05] sm:p-7" aria-labelledby="contact-details-title">
              <div className="flex items-center justify-between gap-5">
                <h2 id="contact-details-title" className="eyebrow leading-5 text-primary-hover">Liên hệ Jody Music</h2>
                <span className="grid shrink-0 grid-cols-4 gap-1" aria-hidden="true">{Array.from({ length: 12 }).map((_, index) => <i key={index} className="size-1 rounded-full bg-primary-hover" />)}</span>
              </div>
              <address className="mt-5 divide-y divide-border not-italic">
                {contactItems.map(({ icon: Icon, label, href }) => {
                  const external = href.startsWith('http')
                  return (
                    <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="focus-ring group grid min-h-12 grid-cols-[2.25rem_1fr] items-center gap-3 py-2 text-xs leading-5 text-ink sm:text-sm">
                      <span className="grid size-9 place-items-center rounded-full bg-cream-soft text-ink transition-colors group-hover:bg-primary"><Icon size={17} /></span>
                      <span className="break-words transition-colors group-hover:text-primary-hover">{label}</span>
                    </a>
                  )
                })}
              </address>
            </section>

            <section className="relative min-h-72 overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-lg shadow-ink/[.05]" aria-labelledby="map-title">
              <div className="flex h-16 items-center gap-3 border-b border-border bg-white px-6">
                <MapPin size={20} className="text-primary-hover" />
                <h2 id="map-title" className="eyebrow text-primary-hover">Tìm đến Jody Music</h2>
                <span className="h-px w-12 bg-accent" aria-hidden="true" />
              </div>
              <div className="relative h-[calc(100%-4rem)] min-h-56">
                <iframe
                  title="Bản đồ cơ sở Jody Music"
                  src={mapUrl}
                  className="absolute inset-0 h-full w-full border-0 opacity-80 [filter:grayscale(.7)_sepia(.22)]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a href={directionsUrl} target="_blank" rel="noreferrer" className="button-motion focus-ring absolute bottom-4 right-4 inline-flex min-h-12 items-center gap-2 rounded-full border border-primary-hover bg-white/95 px-5 text-xs font-semibold text-primary-hover shadow-lg backdrop-blur hover:bg-primary hover:text-ink">
                  <Navigation size={16} />Chỉ đường<ArrowUpRight className="button-arrow" size={15} />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label>
      <span className="mb-2 block text-xs font-semibold text-ink/65">{label}</span>
      <input {...props} className="focus-ring h-12 w-full rounded-xl border border-ink/15 bg-white px-4 text-sm text-ink placeholder:text-muted/60" />
    </label>
  )
}
