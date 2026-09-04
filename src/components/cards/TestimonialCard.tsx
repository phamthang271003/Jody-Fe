import { Star } from 'lucide-react'
import type { Testimonial } from '../../types'

export function TestimonialCard({ item }: { item: Testimonial }) {
  return <article className="flex h-full flex-col rounded-[1.5rem] border border-white/15 bg-white/[.06] p-7 text-white backdrop-blur-sm md:p-8"><div className="flex gap-1 text-tangerine" aria-label={`${item.rating} trên 5 sao`}>{Array.from({ length: item.rating }).map((_, i) => <Star key={i} size={15} fill="currentColor" />)}</div><blockquote className="my-8 font-display text-2xl font-medium leading-snug">“{item.content}”</blockquote><div className="mt-auto flex items-center gap-3"><img src={item.avatar} alt="" className="h-12 w-12 rounded-full object-cover" loading="lazy" /><div><p className="text-sm font-semibold">{item.name}</p><p className="mt-1 text-xs text-white/50">{item.type} · {item.course}</p></div></div></article>
}
