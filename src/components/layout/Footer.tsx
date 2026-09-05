import {
  ArrowUp,
  ChevronDown,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Music2,
  Phone,
  Star,
  Youtube,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '../common/Logo'

const footerContainer = 'mx-auto w-[min(calc(100%-2rem),90rem)] md:w-[min(calc(100%-4rem),90rem)]'

const columns = [
  {
    title: 'Chương trình học',
    links: [
      ['Học tại trung tâm', '/programs/hoc-tai-trung-tam'],
      ['Gia sư âm nhạc', '/programs/hoc-tai-trung-tam'],
      ['Hợp tác trường học', '/contact'],
      ['Tài liệu học tập', '/blog'],
      ['Kiểm tra trình độ', '/contact'],
    ],
  },
  {
    title: 'Khóa học nhạc cụ',
    links: [
      ['Piano', '/courses/piano'],
      ['Guitar Acoustic', '/courses/guitar-acoustic'],
      ['Guitar điện', '/courses/guitar-dien'],
      ['Thanh nhạc', '/courses/thanh-nhac'],
      ['Trống', '/courses/trong'],
      ['Violin', '/courses/violin'],
      ['Ukulele', '/courses/ukulele'],
    ],
  },
  {
    title: 'Học vụ',
    links: [
      ['Tổng quan học vụ', '/about'],
      ['Học phí & quyền lợi', '/pricing'],
      ['Thông tin học viên', '/login'],
      ['Lịch học & nghỉ phép', '/contact'],
      ['Bảo lưu khóa học', '/contact'],
    ],
  },
  {
    title: 'Jody Music',
    links: [
      ['Giới thiệu', '/about'],
      ['Đội ngũ giáo viên', '/teachers'],
      ['Thành quả học viên', '/students'],
      ['Hoạt động & sự kiện', '/events'],
      ['Jody Music Journal', '/blog'],
      ['Tuyển dụng', '/contact'],
    ],
  },
]

const musicTools = [
  'Luyện tập piano',
  'Máy đếm nhịp',
  'Máy lên dây',
  'Đo BPM bằng tay',
  'Tra hợp âm guitar',
  'Tra hợp âm piano',
  'Tra thang âm & modes',
  'Phòng tập piano',
  'Thu âm piano',
  'Phân tích file nhạc',
  'Chuyển tone hợp âm',
  'Luyện time signature',
  'Tạo click track',
  'Vòng tròn quãng 5',
  'Trắc nghiệm nhạc lý',
  'Luyện cần đàn guitar',
  'Luyện đọc nốt nhạc',
  'Luyện tai âm nhạc',
  'Tạo backing track',
]

export function Footer() {
  return <footer className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#121c38_0%,#0a1125_45%,#070c1b_100%)] text-white">
    <div className={`${footerContainer} relative z-20 flex items-center gap-3 sm:gap-5`} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-iris/55 to-tangerine/85" />
      <span className="relative grid size-8 shrink-0 place-items-center rounded-full border border-iris/45 bg-[#0c152c] text-tangerine shadow-[0_0_24px_rgba(217,151,24,.28)] sm:size-9">
        <span className="absolute inset-1 rounded-full border border-white/10" />
        <Music2 className="relative" size={15} strokeWidth={1.8} />
      </span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-iris/55 to-tangerine/85" />
    </div>

    <div className={`${footerContainer} relative px-5 pb-8 pt-10 md:px-10 md:pb-10 md:pt-14`}>
      <div className="grid gap-y-10 md:grid-cols-3 md:gap-x-7 md:gap-y-12 xl:grid-cols-[1.35fr_repeat(4,1fr)_1.35fr] xl:gap-8">
        <div className="md:col-span-3 xl:col-span-1 xl:border-r xl:border-white/10 xl:pr-8">
          <Logo inverse large />
          <p className="mt-6 max-w-sm text-xs leading-6 text-white/55 sm:text-sm sm:leading-7">Đồng hành cùng bạn trên hành trình khám phá và phát triển tiềm năng âm nhạc. Vì mỗi người đều có một thanh âm riêng.</p>
          <div className="mt-7 flex gap-3">
            <SocialLink label="Facebook"><Facebook size={17} /></SocialLink>
            <SocialLink label="Instagram"><Instagram size={17} /></SocialLink>
            <SocialLink label="TikTok"><span className="text-[.65rem] font-bold">TK</span></SocialLink>
            <SocialLink label="YouTube"><Youtube size={18} /></SocialLink>
          </div>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10 md:hidden">
          {columns.map((column, index) => <details key={column.title} className="group" open={index === 0}>
            <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 text-[.68rem] font-bold uppercase tracking-[.06em] text-white [&::-webkit-details-marker]:hidden"><span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{column.title}</span><ChevronDown size={17} className="text-white/45 transition-transform group-open:rotate-180" /></summary>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 pb-5">{column.links.map(([label, to]) => <li key={label}><Link className="focus-ring text-[.72rem] leading-5 text-white/58 transition hover:text-tangerine" to={to}>{label}</Link></li>)}</ul>
          </details>)}
        </div>

        {columns.map((column) => <nav key={column.title} aria-label={column.title} className="hidden md:block">
          <h2 className="mb-6 flex items-center gap-2 text-[.68rem] font-bold uppercase tracking-[.06em] text-white"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{column.title}</h2>
          <ul className="space-y-3.5">{column.links.map(([label, to]) => <li key={label}><Link className="focus-ring text-xs leading-5 text-white/58 transition hover:text-tangerine" to={to}>{label}</Link></li>)}</ul>
        </nav>)}

        <div className="hidden md:block">
          <h2 className="mb-6 flex items-center gap-2 text-[.68rem] font-bold uppercase tracking-[.06em] text-white"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Liên hệ</h2>
          <address className="space-y-5 text-xs not-italic leading-6 text-white/62">
            <p className="flex items-start gap-3"><MapPin size={17} className="mt-1 shrink-0 text-white/80" />7/41/20 Thành Thái,<br />Phường Diên Hồng</p>
            <a href="tel:0938793558" className="focus-ring flex items-center gap-3 transition hover:text-tangerine"><Phone size={17} className="shrink-0 text-white/80" />0938 793 558</a>
            <a href="mailto:jodymusiccenter@gmail.com" className="focus-ring flex items-center gap-3 transition hover:text-tangerine"><Mail size={17} className="shrink-0 text-white/80" />jodymusiccenter@gmail.com</a>
            <p className="flex items-start gap-3"><Clock3 size={17} className="mt-1 shrink-0 text-white/80" />08:00–21:30<br />Thứ 2–Chủ nhật</p>
          </address>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[.035] p-5 md:hidden">
          <h2 className="flex items-center gap-2 text-[.68rem] font-bold uppercase tracking-[.06em] text-white"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Liên hệ trung tâm</h2>
          <address className="mt-5 grid gap-4 text-[.72rem] not-italic leading-5 text-white/62">
            <p className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-tangerine" />7/41/20 Thành Thái,<br />Phường Diên Hồng</p>
            <a href="tel:0938793558" className="focus-ring flex items-center gap-3"><Phone size={17} className="shrink-0 text-tangerine" />0938 793 558</a>
            <a href="mailto:jodymusiccenter@gmail.com" className="focus-ring flex items-center gap-3 break-all"><Mail size={17} className="shrink-0 text-tangerine" />jodymusiccenter@gmail.com</a>
            <p className="flex items-start gap-3"><Clock3 size={17} className="mt-0.5 shrink-0 text-tangerine" />08:00–21:30 · Thứ 2–Chủ nhật</p>
          </address>
        </div>
      </div>

      <section className="relative mt-10 border-t border-white/10 pt-7 md:mt-12 md:pt-8" aria-labelledby="music-tools-title">
        <h2 id="music-tools-title" className="flex items-center gap-3 text-[.72rem] font-bold uppercase tracking-[.07em]"><Star size={19} className="text-iris" />Công cụ học nhạc miễn phí</h2>
        <div className="mt-5 flex max-w-[72rem] flex-wrap gap-2 md:mt-6 md:gap-2.5">{musicTools.map((tool, index) => <Link key={tool} to="/blog" className={`focus-ring rounded-full border border-white/12 px-3.5 py-2 text-[.62rem] text-white/60 transition hover:border-iris hover:bg-iris/10 hover:text-white md:px-4 md:text-[.65rem] ${index >= 6 ? 'hidden sm:inline-flex' : ''}`}>{tool}</Link>)}<Link to="/blog" className="focus-ring rounded-full border border-iris/40 bg-iris/10 px-3.5 py-2 text-[.62rem] font-semibold text-white sm:hidden">+{musicTools.length - 6} công cụ khác</Link></div>

        <svg className="pointer-events-none absolute -bottom-6 right-0 hidden h-40 w-64 text-iris opacity-20 xl:block" viewBox="0 0 300 170" fill="none" aria-hidden="true">
          <path d="M78 137h174M104 136l8-77h115l15 77M114 59l48-42 64 42M156 18v118M122 79h96M119 101h103M24 137h44l-5-55H31l-7 55ZM37 82c-5-23 27-33 23-54M43 81c7-22 30-19 31-40" stroke="currentColor" strokeWidth="1.5" />
          <path d="M94 146c45 9 105 9 162 0" stroke="currentColor" strokeDasharray="3 6" />
        </svg>
      </section>
    </div>

    <div className="border-t border-white/10">
      <div className={`${footerContainer} flex flex-col gap-5 py-6 text-[.65rem] text-white/42 md:flex-row md:items-center md:justify-between`}>
        <p>© 2026 Jody Music. All rights reserved.</p>
        <div className="grid w-full grid-cols-2 items-center gap-x-4 gap-y-4 md:flex md:w-auto md:flex-wrap md:gap-x-7 md:gap-y-3">
          <Link to="/pricing" className="focus-ring transition hover:text-white">Quy định tính buổi học</Link>
          <Link to="/privacy-policy" className="focus-ring transition hover:text-white">Chính sách bảo mật</Link>
          <Link to="/privacy-policy" className="focus-ring transition hover:text-white">Điều khoản sử dụng</Link>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="focus-ring grid h-10 w-10 justify-self-end place-items-center rounded-full bg-primary text-ink transition hover:-translate-y-1 hover:bg-primary-hover md:justify-self-auto" aria-label="Về đầu trang"><ArrowUp size={18} /></button>
        </div>
      </div>
    </div>
  </footer>
}

function SocialLink({ label, children }: { label: string; children: React.ReactNode }) {
  return <a href="#" className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-white/[.055] text-white/75 transition hover:bg-primary hover:text-ink" aria-label={label}>{children}</a>
}
