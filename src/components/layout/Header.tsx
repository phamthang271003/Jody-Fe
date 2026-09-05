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

type MobileMenuGroup = 'programs' | 'instruments'

function getMobileMenuGroup(pathname: string): MobileMenuGroup | null {
  if (pathname.startsWith('/instruments')) return 'instruments'
  if (pathname.startsWith('/programs') || pathname.startsWith('/courses')) return 'programs'
  return null
}

export function Header() {
  const { pathname, search } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [desktopMenu, setDesktopMenu] = useState<MobileMenuGroup | null>(null)
  const [mobileMenuGroup, setMobileMenuGroup] = useState<MobileMenuGroup | null>(() => getMobileMenuGroup(pathname))
  const { openBooking } = useBooking()
  const activeInstrumentCategory = new URLSearchParams(search).get('category')

  useEffect(() => {
    setOpen(false)
    setDesktopMenu(null)
    setMobileMenuGroup(getMobileMenuGroup(pathname))
  }, [pathname, search])
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
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return <>
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-ink text-white">
        <div className={`${headerContainer} flex h-8 items-center justify-between gap-4 text-[.61rem] font-medium text-white/78 sm:h-9`}>
          <div className="flex min-w-0 items-center gap-5">
            <a href="https://www.google.com/maps/dir/?api=1&destination=7%2F41%2F20%20Th%C3%A0nh%20Th%C3%A1i%2C%20Ph%C6%B0%E1%BB%9Dng%20Di%C3%AAn%20H%E1%BB%93ng%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam" target="_blank" rel="noreferrer" className="focus-ring hidden items-center gap-2 transition hover:text-tangerine lg:flex"><MapPin size={13} className="text-tangerine" />7/41/20 Thành Thái, Phường Diên Hồng</a>
            <a href="tel:0938793558" className="focus-ring flex shrink-0 items-center gap-2 transition hover:text-tangerine"><Phone size={13} className="text-tangerine" />0938 793 558</a>
            <a href="mailto:jodymusiccenter@gmail.com" className="focus-ring hidden items-center gap-2 transition hover:text-tangerine md:flex"><Mail size={13} className="text-tangerine" />jodymusiccenter@gmail.com</a>
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
            {visibleLinks.map((link) => <div
              key={link.to}
              className="relative flex h-full items-center"
              onMouseEnter={() => {
                if (link.menu === 'programs' || link.menu === 'instruments') setDesktopMenu(link.menu)
              }}
              onMouseLeave={() => setDesktopMenu(null)}
              onFocusCapture={() => {
                if (link.menu === 'programs' || link.menu === 'instruments') setDesktopMenu(link.menu)
              }}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDesktopMenu(null)
              }}
            >
              <NavLink
                to={link.to}
                onClick={(event) => {
                  if (link.menu) {
                    setDesktopMenu(null)
                    event.currentTarget.blur()
                  }
                }}
                className={({ isActive }) => {
                const menuActive = (link.menu === 'programs' && (pathname.startsWith('/programs') || pathname.startsWith('/courses'))) || (link.menu === 'instruments' && pathname.startsWith('/instruments'))
                return `focus-ring relative flex h-full items-center gap-1 py-2 text-[.76rem] font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:bg-primary after:transition-transform hover:text-primary-hover ${isActive || menuActive ? 'text-primary-hover after:scale-x-100' : 'text-ink/75 after:scale-x-0'}`
              }}>
                {link.label}{link.menu && <span className={`ml-0.5 grid h-5 w-5 place-items-center rounded-full transition-colors duration-300 ${desktopMenu === link.menu ? 'bg-soft-yellow' : ''}`}><ChevronDown size={13} className={`transition-transform duration-300 ease-out ${desktopMenu === link.menu ? 'rotate-180' : ''}`} /></span>}
              </NavLink>
              {link.menu === 'programs' && <div className={`absolute -left-5 top-[82%] w-72 overflow-hidden rounded-[1.15rem] border border-border bg-white p-2 shadow-xl shadow-ink/10 transition-all duration-300 ease-out ${desktopMenu === 'programs' ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-3 opacity-0'}`}>
                {programLinks.map((item) => item.available ? (
                  <Link key={item.to} to={item.to} onClick={(event) => { setDesktopMenu(null); event.currentTarget.blur() }} className="focus-ring flex min-h-14 items-center rounded-xl px-4 py-3 text-[.78rem] font-semibold leading-5 text-ink transition hover:bg-soft-yellow hover:text-primary-hover">
                    {item.label}
                  </Link>
                ) : (
                  <span key={item.to} aria-disabled="true" className="flex min-h-14 items-center justify-between gap-3 rounded-xl px-4 py-3 text-[.78rem] font-medium leading-5 text-ink/55">
                    <span>{item.label}</span><small className="shrink-0 text-[.55rem] font-bold uppercase tracking-wider text-primary-hover/70">Sắp ra mắt</small>
                  </span>
                ))}
              </div>}
              {link.menu === 'instruments' && <div className={`absolute -left-5 top-[82%] w-72 overflow-hidden rounded-[1.15rem] border border-border bg-white p-2 shadow-xl shadow-ink/10 transition-all duration-300 ease-out ${desktopMenu === 'instruments' ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-3 opacity-0'}`}>
                {instrumentCategories.map((category) => (
                  <Link key={category.slug} to={`/instruments?category=${category.slug}`} onClick={(event) => { setDesktopMenu(null); event.currentTarget.blur() }} className="focus-ring block rounded-xl px-4 py-2.5 text-[.76rem] font-medium leading-5 text-ink/80 transition hover:bg-soft-yellow hover:text-primary-hover">
                    {category.label}
                  </Link>
                ))}
                <Link to="/instruments" onClick={(event) => { setDesktopMenu(null); event.currentTarget.blur() }} className="focus-ring mt-1 block border-t border-border px-4 pb-2 pt-3 text-[.76rem] font-bold text-primary-hover transition hover:text-ink">
                  Xem tất cả danh mục
                </Link>
              </div>}
            </div>)}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <Link to="/login" className="button-motion focus-ring hidden min-h-12 items-center gap-2 rounded-full border border-border bg-white/50 px-5 text-xs font-semibold text-ink hover:border-primary-hover hover:text-primary-hover lg:inline-flex"><LogIn size={17} className="text-iris" />Đăng nhập</Link>
            <button onClick={() => openBooking()} className="button-motion button-shine focus-ring hidden min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-xs font-semibold text-ink shadow-[0_8px_24px_rgba(217,151,24,.18)] hover:bg-primary-hover lg:inline-flex">Đăng ký học thử <ArrowUpRight className="button-arrow" size={16} /></button>
            <Link to="/login" className="focus-ring hidden h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink sm:grid lg:hidden" aria-label="Đăng nhập"><LogIn size={18} /></Link>
            <button onClick={() => openBooking()} className="button-motion button-shine focus-ring min-h-10 rounded-full bg-primary px-3.5 text-[.68rem] font-semibold text-ink hover:bg-primary-hover lg:hidden sm:px-5">Đăng ký</button>
            <button onClick={() => { setMobileMenuGroup(getMobileMenuGroup(pathname)); setOpen(true) }} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-ink/15 xl:hidden" aria-label="Mở menu"><Menu size={21} /></button>
          </div>
        </div>
      </div>
    </header>

    <div className={`fixed inset-0 z-[70] transition ${open ? 'visible' : 'invisible delay-300'}`} aria-hidden={!open}>
      <button className={`absolute inset-0 bg-ink/65 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} aria-label="Đóng menu" />
      <aside
        className={`absolute right-0 top-0 flex h-full w-[min(92vw,34rem)] flex-col overflow-y-auto border-l border-white/10 bg-ink px-5 pb-8 pt-5 font-sans text-white shadow-2xl shadow-ink/30 transition-transform duration-500 sm:px-8 sm:pb-10 sm:pt-7 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu di động"
      >
        <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-6">
          <div>
            <Logo inverse />
            <p className="mt-2 text-[.65rem] font-semibold uppercase tracking-[.2em] text-white/45">Âm nhạc kiến tạo tương lai</p>
          </div>
          <button className="focus-ring grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-primary hover:text-primary" onClick={() => setOpen(false)} aria-label="Đóng menu"><X size={23} /></button>
        </div>

        <nav className="mt-6 flex flex-col gap-2" aria-label="Điều hướng di động">
          {visibleLinks.map((link) => {
            if (link.menu) {
              const group = link.menu as MobileMenuGroup
              const expanded = mobileMenuGroup === group
              const active = group === 'programs'
                ? pathname.startsWith('/programs') || pathname.startsWith('/courses')
                : pathname.startsWith('/instruments')

              return (
                <div key={link.to} className="border-b border-white/10">
                  <button
                    type="button"
                    className={`focus-ring flex min-h-16 w-full items-center justify-between gap-4 px-2 py-4 text-left text-base font-semibold leading-6 transition-colors ${active || expanded ? 'text-primary' : 'text-white hover:text-primary'}`}
                    aria-expanded={expanded}
                    aria-controls={`mobile-${group}-menu`}
                    onClick={() => setMobileMenuGroup(expanded ? null : group)}
                  >
                    <span>{link.label}</span>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors ${expanded ? 'border-primary/40 bg-primary/10 text-primary' : 'border-white/15 text-white/70'}`}>
                      <ChevronDown size={18} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </span>
                  </button>

                  {expanded && (group === 'programs' ? (
                    <div id="mobile-programs-menu" className="mb-3 ml-3 grid gap-0.5 border-l border-primary/30 pl-3">
                      {programLinks.map((item) => item.available ? (
                        <Link key={item.to} to={item.to} className={`focus-ring flex min-h-12 items-center rounded-lg px-3.5 py-2.5 text-sm font-medium leading-6 transition-colors ${pathname === item.to ? 'bg-soft-yellow text-ink' : 'text-white/80 hover:bg-white/[.07] hover:text-primary'}`}>
                          {item.label}
                        </Link>
                      ) : (
                        <span key={item.to} aria-disabled="true" className="flex min-h-12 items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 text-sm leading-6 text-white/45">
                          <span>{item.label}</span>
                          <small className="shrink-0 rounded-full bg-white/[.055] px-2 py-1 text-[.5rem] font-bold uppercase tracking-wider text-primary/70">Sắp ra mắt</small>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div id="mobile-instruments-menu" className="mb-3 ml-3 grid gap-0.5 border-l border-primary/30 pl-3">
                      {instrumentCategories.map((category) => (
                        <Link key={category.slug} to={`/instruments?category=${category.slug}`} className={`focus-ring flex min-h-11 items-center rounded-lg px-3.5 py-2 text-sm font-medium leading-6 transition-colors ${activeInstrumentCategory === category.slug ? 'bg-soft-yellow text-ink' : 'text-white/75 hover:bg-white/[.07] hover:text-primary'}`}>
                          {category.label}
                        </Link>
                      ))}
                      <Link to="/instruments" className={`focus-ring mt-1 flex min-h-11 items-center border-t border-white/10 px-3.5 py-2 text-sm font-semibold leading-6 transition-colors ${pathname === '/instruments' && !activeInstrumentCategory ? 'text-primary' : 'text-primary/80 hover:text-primary'}`}>Xem tất cả danh mục</Link>
                    </div>
                  ))}
                </div>
              )
            }

            return (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => `focus-ring flex min-h-16 items-center justify-between border-b border-white/10 px-4 py-4 text-base font-semibold leading-6 transition-colors ${isActive ? 'text-primary' : 'text-white hover:text-primary'}`}>
                <span>{link.label}</span>
                <ArrowUpRight size={17} className="text-white/45" aria-hidden="true" />
              </NavLink>
            )
          })}
        </nav>

        <div className="mt-7 grid gap-3">
          <Link to="/login" className="focus-ring flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-ink"><LogIn size={18} />Đăng nhập học viên</Link>
          <button onClick={() => { setOpen(false); openBooking() }} className="button-motion button-shine focus-ring flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-ink hover:bg-primary-hover">Đăng ký học thử <ArrowUpRight className="button-arrow" size={17} /></button>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm leading-6 text-white/60">
          <a href="https://www.google.com/maps/dir/?api=1&destination=7%2F41%2F20%20Th%C3%A0nh%20Th%C3%A1i%2C%20Ph%C6%B0%E1%BB%9Dng%20Di%C3%AAn%20H%E1%BB%93ng%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam" target="_blank" rel="noreferrer" className="focus-ring flex min-h-11 items-start gap-3 transition-colors hover:text-white"><MapPin size={18} className="mt-1 shrink-0 text-primary" />7/41/20 Thành Thái, Phường Diên Hồng</a>
          <a href="tel:0938793558" className="focus-ring mt-1 flex min-h-11 items-center gap-3 font-semibold text-primary transition-colors hover:text-primary-hover"><Phone size={18} className="shrink-0" />0938 793 558</a>
          <div className="mt-4 flex gap-3" aria-label="Mạng xã hội">
            <a href="#" className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-white/[.07] text-white/80 transition-colors hover:bg-primary hover:text-ink" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-white/[.07] text-white/80 transition-colors hover:bg-primary hover:text-ink" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-white/[.07] text-white/80 transition-colors hover:bg-primary hover:text-ink" aria-label="YouTube"><Youtube size={19} /></a>
          </div>
        </div>
      </aside>
    </div>
  </>
}
