import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Facebook,
  Instagram,
  LogIn,
  Mail,
  MapPin,
  Menu,
  Music2,
  Phone,
  X,
  Youtube,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useBooking } from '../../context/BookingContext'
import { instrumentCategories } from '../../data/instrumentCategories'
import { Logo } from '../common/Logo'

const programLinks = [
  { label: 'Học tại trung tâm', to: '/programs/hoc-tai-trung-tam', available: true },
  { label: 'Gia sư âm nhạc', to: '/programs/gia-su-am-nhac', available: false },
  { label: 'Hợp tác giáo dục âm nhạc với trường học', to: '/programs/hop-tac-truong-hoc', available: false },
] as const

const links = [
  { label: 'Chương trình', to: programLinks[0].to, menu: 'programs' },
  { label: 'Nhạc cụ', to: '/instruments', menu: 'instruments' },
  { label: 'Giáo viên', to: '/teachers' },
  { label: 'Học phí', to: '/pricing' },
  { label: 'Giới thiệu', to: '/about' },
  { label: 'Liên hệ', to: '/contact' },
]

// Chỉ ẩn khỏi điều hướng; route và nội dung trang vẫn được giữ nguyên để sử dụng lại.
const hiddenMainNavPaths = new Set(['/teachers', '/pricing', '/about'])
const visibleLinks = links.filter((link) => !hiddenMainNavPaths.has(link.to))

const headerContainer = 'mx-auto w-[min(calc(100%-2rem),90rem)] md:w-[min(calc(100%-4rem),90rem)]'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { openBooking } = useBooking()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return <>
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-ink text-white">
        <div className={`${headerContainer} flex h-8 items-center justify-between gap-4 text-[.61rem] font-medium text-white/78 sm:h-9`}>
          <div className="flex min-w-0 items-center gap-5">
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="focus-ring hidden items-center gap-2 transition hover:text-tangerine lg:flex"><MapPin size={13} className="text-tangerine" />32A Trần Quốc Thảo, TP.HCM</a>
            <a href="tel:02873008886" className="focus-ring flex shrink-0 items-center gap-2 transition hover:text-tangerine"><Phone size={13} className="text-tangerine" />(028) 7300 8886</a>
            <a href="mailto:hello@jodymusic.vn" className="focus-ring hidden items-center gap-2 transition hover:text-tangerine md:flex"><Mail size={13} className="text-tangerine" />hello@jodymusic.vn</a>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="flex items-center gap-2"><Clock3 size={13} className="text-tangerine" /><span className="hidden sm:inline">08:00–21:30 · </span>Thứ 2–CN</span>
            <span className="hidden h-3 w-px bg-white/20 lg:block" />
            <div className="hidden items-center gap-3 lg:flex">
              <a href="#" className="focus-ring transition hover:text-tangerine" aria-label="Facebook"><Facebook size={12} /></a>
              <a href="#" className="focus-ring transition hover:text-tangerine" aria-label="Instagram"><Instagram size={12} /></a>
              <a href="#" className="focus-ring text-[.6rem] font-bold transition hover:text-tangerine" aria-label="TikTok">TK</a>
              <a href="#" className="focus-ring transition hover:text-tangerine" aria-label="YouTube"><Youtube size={13} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className={`border-b border-ink/10 transition-all duration-300 ${scrolled ? 'h-[4.5rem] bg-paper/94 shadow-sm backdrop-blur-xl' : 'h-20 bg-paper lg:h-24'}`}>
        <div className={`${headerContainer} flex h-full items-center justify-between gap-5`}>
          <Logo large={!scrolled} />

          <nav className="hidden h-full items-center gap-4 xl:flex 2xl:gap-6" aria-label="Điều hướng chính">
            {visibleLinks.map((link) => <div key={link.to} className="group/nav relative flex h-full items-center">
              <NavLink to={link.to} className={({ isActive }) => {
                const menuActive = (link.menu === 'programs' && pathname.startsWith('/programs')) || (link.menu === 'instruments' && pathname.startsWith('/instruments'))
                return `focus-ring relative flex h-full items-center gap-1 py-2 text-[.76rem] font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:bg-primary after:transition-transform hover:text-primary-hover ${isActive || menuActive ? 'text-primary-hover after:scale-x-100' : 'text-ink/75 after:scale-x-0'}`
              }}>
                {link.label}{link.menu && <span className="ml-0.5 grid h-5 w-5 place-items-center rounded-full transition-colors duration-300 group-hover/nav:bg-soft-yellow group-focus-within/nav:bg-soft-yellow"><ChevronDown size={13} className="transition-transform duration-300 ease-out group-hover/nav:-rotate-180 group-focus-within/nav:-rotate-180" /></span>}
              </NavLink>
              {link.menu === 'programs' && <div className="invisible absolute -left-5 top-[82%] w-72 translate-y-3 overflow-hidden rounded-[1.15rem] border border-border bg-white p-2 opacity-0 shadow-xl shadow-ink/10 transition-all duration-300 ease-out group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
                {programLinks.map((item) => item.available ? (
                  <Link key={item.to} to={item.to} className="focus-ring flex min-h-14 items-center rounded-xl px-4 py-3 text-[.78rem] font-semibold leading-5 text-ink transition hover:bg-soft-yellow hover:text-primary-hover">
                    {item.label}
                  </Link>
                ) : (
                  <span key={item.to} aria-disabled="true" className="flex min-h-14 items-center justify-between gap-3 rounded-xl px-4 py-3 text-[.78rem] font-medium leading-5 text-ink/55">
                    <span>{item.label}</span><small className="shrink-0 text-[.55rem] font-bold uppercase tracking-wider text-primary-hover/70">Sắp ra mắt</small>
                  </span>
                ))}
              </div>}
              {link.menu === 'instruments' && <div className="invisible absolute -left-5 top-[82%] w-72 translate-y-3 overflow-hidden rounded-[1.15rem] border border-border bg-white p-2 opacity-0 shadow-xl shadow-ink/10 transition-all duration-300 ease-out group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
                {instrumentCategories.map((category) => (
                  <Link key={category.slug} to={`/instruments?category=${category.slug}`} className="focus-ring block rounded-xl px-4 py-2.5 text-[.76rem] font-medium leading-5 text-ink/80 transition hover:bg-soft-yellow hover:text-primary-hover">
                    {category.label}
                  </Link>
                ))}
                <Link to="/instruments" className="focus-ring mt-1 block border-t border-border px-4 pb-2 pt-3 text-[.76rem] font-bold text-primary-hover transition hover:text-ink">
                  Xem tất cả danh mục
                </Link>
              </div>}
            </div>)}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <Link to="/login" className="button-motion focus-ring hidden min-h-12 items-center gap-2 rounded-full border border-border bg-white/50 px-5 text-xs font-semibold text-ink hover:border-primary-hover hover:text-primary-hover lg:inline-flex"><LogIn size={17} className="text-iris" />Đăng nhập</Link>
            <button onClick={() => openBooking()} className="button-motion button-shine focus-ring hidden min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-xs font-semibold text-ink shadow-[0_8px_24px_rgba(217,151,24,.18)] hover:bg-primary-hover lg:inline-flex">Đăng ký học thử <ArrowUpRight className="button-arrow" size={16} /></button>
            <Link to="/login" className="focus-ring hidden h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink sm:grid lg:hidden" aria-label="Đăng nhập"><LogIn size={18} /></Link>
            <button onClick={() => openBooking()} className="button-motion button-shine focus-ring min-h-10 rounded-full bg-primary px-3.5 text-[.68rem] font-semibold text-ink hover:bg-primary-hover lg:hidden sm:px-5">Học thử</button>
            <button onClick={() => setOpen(true)} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-ink/15 xl:hidden" aria-label="Mở menu"><Menu size={21} /></button>
          </div>
        </div>
      </div>
    </header>

    <div className={`fixed inset-0 z-[70] transition ${open ? 'visible' : 'invisible delay-300'}`}>
      <button className={`absolute inset-0 bg-ink/55 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} aria-label="Đóng menu" />
      <aside className={`absolute right-0 top-0 flex h-full w-[min(92vw,30rem)] flex-col overflow-y-auto bg-ink p-6 text-white transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Menu di động">
        <div className="flex items-center justify-between"><Logo inverse /><button className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/20" onClick={() => setOpen(false)} aria-label="Đóng menu"><X /></button></div>
        <nav className="mt-9 flex flex-col" aria-label="Điều hướng di động">{visibleLinks.map((link, index) => link.menu ? <details key={link.to} className="group/mobile border-b border-white/12">
          <summary className={`focus-ring flex cursor-pointer list-none items-center justify-between py-3.5 font-display text-[1.65rem] [&::-webkit-details-marker]:hidden ${(link.menu === 'instruments' && pathname.startsWith('/instruments')) || (link.menu === 'programs' && pathname.startsWith('/programs')) ? 'text-tangerine' : 'text-white'}`}>
            <span>{link.label}</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white transition duration-300 group-open/mobile:border-tangerine/40 group-open/mobile:bg-tangerine/10 group-open/mobile:text-tangerine"><ChevronDown size={18} className="transition-transform duration-300 group-open/mobile:-rotate-180" /></span>
          </summary>
          {link.menu === 'programs' ? <div className="grid gap-2 pb-4">
            {programLinks.map((item) => item.available ? (
              <Link key={item.to} to={item.to} className="focus-ring flex min-h-14 items-center rounded-xl border border-white/10 bg-white/[.045] px-4 py-3 text-sm font-semibold leading-6 text-white transition hover:border-tangerine/35 hover:bg-white/10 hover:text-tangerine">
                {item.label}
              </Link>
            ) : (
              <span key={item.to} aria-disabled="true" className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-white/8 px-4 py-3 text-sm leading-6 text-white/45">
                <span>{item.label}</span><small className="shrink-0 text-[.55rem] font-bold uppercase tracking-wider text-tangerine/70">Sắp ra mắt</small>
              </span>
            ))}
          </div> : <div className="grid gap-1 pb-4">
            {instrumentCategories.map((category) => (
              <Link key={category.slug} to={`/instruments?category=${category.slug}`} className="focus-ring rounded-xl border border-white/8 px-4 py-2.5 text-xs leading-5 text-white/75 transition hover:border-tangerine/35 hover:bg-white/10 hover:text-tangerine">
                {category.label}
              </Link>
            ))}
            <Link to="/instruments" className="focus-ring mt-1 rounded-xl border border-tangerine/30 px-4 py-3 text-center text-xs font-bold text-tangerine transition hover:bg-tangerine hover:text-ink">Xem tất cả danh mục</Link>
          </div>}
        </details> : <NavLink key={link.to} to={link.to} className={({ isActive }) => `focus-ring flex items-center justify-between border-b border-white/12 py-3.5 font-display text-[1.65rem] ${isActive ? 'text-tangerine' : 'text-white'}`}><span>{link.label}</span><small className="font-sans text-[.6rem] text-white/30">0{index + 1}</small></NavLink>)}</nav>
        <div className="mt-7 grid gap-3">
          <Link to="/login" className="focus-ring flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 text-sm font-semibold transition hover:bg-white hover:text-ink"><LogIn size={18} />Đăng nhập học viên</Link>
          <button onClick={() => { setOpen(false); openBooking() }} className="button-motion button-shine focus-ring flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-ink hover:bg-primary-hover">Đăng ký học thử <ArrowUpRight className="button-arrow" size={17} /></button>
        </div>
        <div className="mt-7 border-t border-white/12 pt-6 text-xs leading-6 text-white/45"><p className="flex items-center gap-2"><Music2 size={14} className="text-tangerine" />32A Trần Quốc Thảo, TP.HCM</p><a href="tel:02873008886" className="focus-ring mt-1 block text-tangerine">(028) 7300 8886</a></div>
      </aside>
    </div>
  </>
}
