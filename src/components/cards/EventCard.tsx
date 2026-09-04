import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { MusicEvent } from '../../types'

export function EventCard({ event, featured = false }: { event: MusicEvent; featured?: boolean }) {
  return <Link to={`/events/${event.slug}`} className={`focus-ring group relative block overflow-hidden rounded-[1.5rem] bg-ink ${featured ? 'min-h-[32rem]' : 'min-h-96'}`}>
    <img className="image-cover absolute inset-0 opacity-75" src={event.image} alt={event.title} loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8"><div className="mb-5 flex items-center justify-between"><span className="eyebrow text-tangerine">{event.category} · {event.date}</span><ArrowUpRight className="transition-transform group-hover:rotate-45" /></div><h3 className={`font-display font-semibold leading-[1.1] ${featured ? 'text-5xl md:text-6xl' : 'text-4xl'}`}>{event.title}</h3><p className="mt-4 max-w-xl text-sm leading-6 text-white/65">{event.description}</p></div>
  </Link>
}
