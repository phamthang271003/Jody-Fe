import { MessageCircleMore, PhoneCall } from 'lucide-react'

const actions = [
  {
    label: 'Hotline',
    ariaLabel: 'Gọi hotline Jody Music',
    href: 'tel:0938793558',
    className: 'from-accent via-accent to-accent text-ink shadow-[0_8px_20px_rgba(233,134,74,.24)]',
    icon: 'phone',
  },
  {
    label: 'Messenger',
    ariaLabel: 'Chat với Jody Music qua Messenger',
    href: 'https://www.facebook.com/share/1JpKxr2jj9/?mibextid=wwXIfr',
    className: 'from-primary via-primary to-primary-hover text-ink shadow-[0_8px_20px_rgba(217,151,24,.22)]',
    icon: 'messenger',
  },
  {
    label: 'Zalo',
    ariaLabel: 'Chat với Jody Music qua Zalo',
    href: 'https://zalo.me/0938793558',
    className: 'from-[#28b2ff] via-[#1688f5] to-[#0864ec] text-white shadow-[0_8px_20px_rgba(8,100,236,.24)]',
    icon: 'zalo',
  },
]

export function ContactFloating() {
  return (
    <aside
      className="fixed bottom-4 right-4 z-[60] flex flex-row gap-1.5 md:bottom-5 md:right-5 md:flex-col md:gap-2"
      aria-label="Liên hệ nhanh"
    >
      {actions.map((action, index) => {
        const external = action.href.startsWith('http')
        return (
          <a
            key={action.label}
            href={action.href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            aria-label={action.ariaLabel}
            title={action.label}
            className={`contact-float-item focus-ring group relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-gradient-to-r transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:scale-[1.03] md:h-11 md:w-36 md:justify-between md:rounded-full md:pl-5 md:pr-1.5 ${action.className}`}
            style={{ animationDelay: `${.12 + index * .12}s` }}
          >
            <span className="contact-float-shine pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent" aria-hidden="true" />
            <span className="relative z-10 hidden text-[.7rem] font-bold tracking-[-.01em] md:block">{action.label}</span>
            <span className="contact-float-icon relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-white/14 ring-1 ring-white/10 backdrop-blur-sm" aria-hidden="true">
              {action.icon === 'phone' && <PhoneCall size={18} strokeWidth={2.2} />}
              {action.icon === 'messenger' && <MessageCircleMore size={19} strokeWidth={2.1} />}
              {action.icon === 'zalo' && <span className="relative grid h-[1.35rem] min-w-[1.5rem] place-items-center rounded-[.32rem] border-[1.5px] border-white px-0.5 text-[.46rem] font-extrabold leading-none after:absolute after:-bottom-1 after:left-1 after:size-1 after:rotate-45 after:border-b after:border-r after:border-white after:bg-[#1688f5]">Zalo</span>}
            </span>
          </a>
        )
      })}
    </aside>
  )
}
