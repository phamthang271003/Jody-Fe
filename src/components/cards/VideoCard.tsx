import { AudioLines, Play } from 'lucide-react'
import type { StudentPerformance } from '../../types'

const showcaseColors = [
  { bg: 'bg-tangerine', text: 'text-ink' },
  { bg: 'bg-primary-hover', text: 'text-ink' },
  { bg: 'bg-[#d95678]', text: 'text-white' },
  { bg: 'bg-[#3182bd]', text: 'text-white' },
  { bg: 'bg-[#2e9d7b]', text: 'text-white' },
  { bg: 'bg-ink-soft', text: 'text-white' },
]

export function VideoCard({ item, large = false, showcase = false }: { item: StudentPerformance; large?: boolean; showcase?: boolean }) {
  if (showcase) {
    const accent = showcaseColors[(item.id - 1) % showcaseColors.length]

    return <article className="group overflow-hidden rounded-[1.15rem] border border-ink/10 bg-white shadow-[0_8px_24px_rgba(16,24,47,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(16,24,47,0.12)]">
      <div className="relative aspect-video overflow-hidden bg-ink">
        <img className="image-cover opacity-90" src={item.image} alt={`${item.student} biểu diễn ${item.song}`} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/5" aria-hidden="true" />
        <button className="focus-ring absolute left-1/2 top-1/2 grid size-13 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink shadow-lg transition-transform group-hover:scale-110 sm:size-14" aria-label={`Phát video ${item.song}`}>
          <Play size={19} fill="currentColor" className="translate-x-px" />
        </button>
        <span className={`absolute bottom-3 left-3 rounded-full px-3 py-1.5 text-[.58rem] font-bold uppercase tracking-wider sm:bottom-4 sm:left-4 sm:text-[.65rem] ${accent.bg} ${accent.text}`}>
          {item.course}
        </span>
      </div>
      <div className="flex min-h-16 items-center gap-2.5 px-4 py-3 sm:px-5">
        <span className={`grid size-4 shrink-0 place-items-center rounded-full ${accent.bg} ${accent.text}`} aria-hidden="true"><Play size={7} fill="currentColor" /></span>
        <h3 className="min-w-0 flex-1 text-xs font-semibold leading-5 text-ink sm:text-sm">
          <span>{item.student}</span><span className="text-ink/40"> — </span><span className="text-ink/70">{item.song}</span>
        </h3>
        <AudioLines className="size-4 shrink-0 text-iris/60 sm:size-5" aria-hidden="true" />
      </div>
    </article>
  }

  return <article className="group cursor-pointer"><div className={`relative overflow-hidden rounded-[1.5rem] bg-ink ${large ? 'aspect-[16/10]' : 'aspect-video'}`}><img className="image-cover opacity-85" src={item.image} alt={`${item.student} biểu diễn ${item.song}`} loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" /><button className="focus-ring absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-iris transition-transform group-hover:scale-110" aria-label={`Phát video ${item.song}`}><Play size={21} fill="currentColor" /></button><span className="absolute bottom-5 left-5 rounded-full bg-white/15 px-3 py-1.5 text-[.65rem] font-semibold uppercase tracking-widest text-white backdrop-blur">{item.course}</span></div><div className="flex items-start justify-between gap-5 pt-5"><div><h3 className="font-display text-2xl font-semibold text-ink">{item.song}</h3><p className="mt-1 text-sm text-ink/55">{item.student}</p></div><span className="text-right text-[.65rem] font-semibold uppercase leading-5 tracking-wider text-ink/40">GVHD<br />{item.teacher}</span></div></article>
}
