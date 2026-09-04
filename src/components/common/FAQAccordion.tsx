import { ChevronDown, Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import type { FAQ } from '../../types'

const itemColors = [
  { number: 'bg-primary', numberText: 'text-ink', icon: 'text-primary-hover' },
  { number: 'bg-[#d95678]', numberText: 'text-white', icon: 'text-[#d95678]' },
  { number: 'bg-tangerine', numberText: 'text-ink', icon: 'text-tangerine' },
  { number: 'bg-[#46aa79]', numberText: 'text-white', icon: 'text-[#46aa79]' },
  { number: 'bg-primary-hover', numberText: 'text-ink', icon: 'text-primary-hover' },
]

export function FAQAccordion({ items, variant = 'default' }: { items: FAQ[]; variant?: 'default' | 'showcase' }) {
  const [open, setOpen] = useState(0)

  if (variant === 'showcase') {
    return <div className="space-y-2.5 sm:space-y-3">{items.map((item, index) => {
      const active = open === index
      const color = itemColors[index % itemColors.length]

      return <article key={item.question} className={`overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow] duration-300 ${active ? 'border-primary-hover/25 shadow-[0_10px_35px_rgba(217,151,24,.1)]' : 'border-ink/[.06] shadow-[0_5px_18px_rgba(16,24,47,.035)]'}`}>
        <button className="focus-ring flex w-full items-center gap-3.5 px-4 py-4 text-left sm:gap-5 sm:px-6 sm:py-5" onClick={() => setOpen(active ? -1 : index)} aria-expanded={active}>
          <span className={`grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold sm:size-10 sm:text-sm ${color.number} ${color.numberText}`}>{String(index + 1).padStart(2, '0')}</span>
          <span className="min-w-0 flex-1 text-sm font-semibold leading-6 text-ink sm:text-base">{item.question}</span>
          {active ? <Minus className={`size-5 shrink-0 ${color.icon}`} /> : <ChevronDown className={`size-5 shrink-0 ${color.icon}`} />}
        </button>
        <div className={`grid transition-[grid-template-rows] duration-300 ${active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
            <p className="border-t border-ink/[.06] px-4 pb-5 pt-4 text-sm leading-7 text-ink/60 sm:ml-[5.75rem] sm:max-w-4xl sm:px-0 sm:pb-6 sm:pr-10 sm:pt-5">{item.answer}</p>
          </div>
        </div>
      </article>
    })}</div>
  }

  return <div className="divide-y divide-ink/15 border-y border-ink/15">{items.map((item, index) => {
    const active = open === index
    return <div key={item.question}><button className="focus-ring flex w-full items-center justify-between gap-6 py-6 text-left font-semibold text-ink md:py-8 md:text-lg" onClick={() => setOpen(active ? -1 : index)} aria-expanded={active}><span>{item.question}</span><Plus className={`shrink-0 transition-transform ${active ? 'rotate-45 text-iris' : ''}`} /></button><div className={`grid transition-[grid-template-rows] duration-300 ${active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden"><p className="max-w-3xl pb-7 leading-7 text-ink/60">{item.answer}</p></div></div></div>
  })}</div>
}
