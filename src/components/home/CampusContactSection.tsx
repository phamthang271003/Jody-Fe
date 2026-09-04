import { ArrowRight, Mail, Map, MapPin, Phone } from 'lucide-react'
import { useBooking } from '../../context/BookingContext'

const mapUrl = 'https://www.google.com/maps?q=32A%20Tr%E1%BA%A7n%20Qu%E1%BB%91c%20Th%E1%BA%A3o%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh&output=embed'
const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=32A%20Tr%E1%BA%A7n%20Qu%E1%BB%91c%20Th%E1%BA%A3o%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh'

const contactItems = [
  {
    icon: MapPin,
    label: 'Địa chỉ',
    content: <>32A Trần Quốc Thảo,<br />P. Xuân Hòa, TP.HCM</>,
    href: directionsUrl,
  },
  { icon: Phone, label: 'Hotline', content: '(028) 7300 8886', href: 'tel:02873008886' },
  { icon: Mail, label: 'Email liên hệ', content: 'hello@daulang.edu.vn', href: 'mailto:hello@daulang.edu.vn' },
]

export function CampusContactSection() {
  const { openBooking } = useBooking()

  return (
    <section className="relative overflow-hidden bg-paper px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="campus-title">
      <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-soft-yellow/60 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid max-w-[88rem] gap-5 lg:grid-cols-[.94fr_1.06fr] lg:gap-7">
        <div className="noise relative overflow-hidden rounded-[1.75rem] border border-ink/[.07] bg-white p-6 shadow-[0_18px_55px_rgba(16,24,47,.07)] sm:p-9 lg:p-12">
          <svg className="pointer-events-none absolute -right-16 -top-10 h-56 w-72 text-iris opacity-[.12]" viewBox="0 0 300 220" fill="none" aria-hidden="true">
            <path d="M10 30c75 85 164 42 280 154M16 17c75 84 164 41 280 153M28 6c72 79 158 35 266 145" stroke="currentColor" strokeWidth="1.5" />
            <path d="M38 18c79 45 129 32 218 131" stroke="#e9864a" strokeWidth="1.5" />
          </svg>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-soft-yellow px-4 py-2 text-[.68rem] font-bold uppercase tracking-[.12em] text-primary-hover">
              <MapPin size={15} />Liên hệ
            </span>
            <h2 id="campus-title" className="mt-7 max-w-xl text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.15] tracking-[-.03em] text-ink">
              Cơ sở DẤU LẶNG<br />TP. Hồ Chí Minh
            </h2>
            <p className="mt-3 text-lg font-semibold text-tangerine sm:text-xl">Music Academy & Creative Studio</p>
            <span className="mt-5 block h-0.5 w-12 bg-tangerine" aria-hidden="true" />

            <address className="mt-8 divide-y divide-ink/10 not-italic sm:mt-10">
              {contactItems.map(({ icon: Icon, label, content, href }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="focus-ring group grid grid-cols-[3.25rem_1fr] gap-4 py-4 first:pt-0 sm:grid-cols-[3.75rem_1fr] sm:gap-5 sm:py-5">
                  <span className="grid size-13 place-items-center rounded-2xl bg-cream-soft text-primary-hover transition-colors group-hover:bg-primary group-hover:text-ink sm:size-15"><Icon size={22} /></span>
                  <span className="self-center text-sm leading-6 text-ink/65">
                    <strong className="block font-semibold text-ink">{label}</strong>
                    <span className="break-words">{content}</span>
                  </span>
                </a>
              ))}
            </address>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="button-motion button-shine focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-xs font-bold uppercase tracking-wide text-ink hover:bg-primary-hover">
                <Map size={17} />Xem bản đồ<ArrowRight className="button-arrow" size={16} />
              </a>
              <button onClick={() => openBooking()} className="button-motion focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-accent bg-white px-5 text-xs font-bold uppercase tracking-wide text-accent hover:bg-accent hover:text-ink">
                Ghé thăm studio<ArrowRight className="button-arrow" size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[25rem] overflow-hidden rounded-[1.75rem] bg-ink shadow-[0_18px_55px_rgba(16,24,47,.14)] sm:min-h-[32rem] lg:min-h-full">
          <iframe
            title="Bản đồ cơ sở DẤU LẶNG Music Academy"
            src={mapUrl}
            className="absolute inset-0 h-full w-full border-0 opacity-90 [filter:grayscale(.4)_invert(.88)_hue-rotate(180deg)_brightness(.68)_contrast(1.2)]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/10" aria-hidden="true" />
          <a href={directionsUrl} target="_blank" rel="noreferrer" className="button-motion focus-ring absolute bottom-5 right-5 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 bg-ink/85 px-5 text-xs font-semibold text-white shadow-lg backdrop-blur hover:bg-primary hover:text-ink sm:bottom-7 sm:right-7 sm:px-6 sm:text-sm">
            <MapPin size={17} />Chỉ đường
          </a>
        </div>
      </div>
    </section>
  )
}
