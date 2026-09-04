import type { ReactNode } from 'react'

export function SectionHeading({ eyebrow, title, text, action, inverse = false, align = 'left' }: { eyebrow: string; title: string; text?: string; action?: ReactNode; inverse?: boolean; align?: 'left' | 'center' }) {
  return (
    <div className={`mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between ${align === 'center' ? 'mx-auto max-w-3xl text-center md:block' : ''}`}>
      <div className="max-w-3xl">
        <p className={`eyebrow mb-5 ${inverse ? 'text-tangerine' : 'text-iris'}`}>{eyebrow}</p>
        <h2 className={`display text-balance text-[clamp(2.5rem,6vw,5.3rem)] ${inverse ? 'text-white' : 'text-ink'}`}>{title}</h2>
        {text && <p className={`mt-6 max-w-2xl text-base leading-7 md:text-lg ${inverse ? 'text-white/65' : 'text-muted'}`}>{text}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
