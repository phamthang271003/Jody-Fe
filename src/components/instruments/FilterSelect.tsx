import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'

interface FilterSelectProps {
  label: string
  value: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
}

export function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  const id = useId()
  const container = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLUListElement>(null)
  const typeahead = useRef({ text: '', time: 0 })
  const [open, setOpen] = useState(false)
  const selectedIndex = Math.max(0, options.findIndex((option) => option.value === value))
  const [activeIndex, setActiveIndex] = useState(selectedIndex)

  useEffect(() => {
    if (!open) return
    const closeOutside = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [open])

  useEffect(() => {
    if (!open || !menu.current) return
    const option = menu.current.children[activeIndex] as HTMLElement | undefined
    if (!option) return
    const top = option.offsetTop
    const bottom = top + option.offsetHeight
    if (top < menu.current.scrollTop) menu.current.scrollTop = top
    else if (bottom > menu.current.scrollTop + menu.current.clientHeight) menu.current.scrollTop = bottom - menu.current.clientHeight
  }, [open, activeIndex])

  const select = (index: number) => {
    onChange(options[index].value)
    setOpen(false)
    trigger.current?.focus()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Tab') { setOpen(false); return }
    if (event.key === 'Escape') {
      if (open) { event.preventDefault(); event.stopPropagation(); setOpen(false) }
      return
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (open) select(activeIndex)
      else { setActiveIndex(selectedIndex); setOpen(true) }
      return
    }
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault()
      if (event.key === 'Home') setActiveIndex(0)
      else if (event.key === 'End') setActiveIndex(options.length - 1)
      else if (!open) setActiveIndex(selectedIndex)
      else setActiveIndex((current) => (current + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length)
      setOpen(true)
      return
    }
    if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault()
      const now = Date.now()
      const text = (now - typeahead.current.time < 700 ? typeahead.current.text : '') + event.key.toLocaleLowerCase('vi')
      typeahead.current = { text, time: now }
      const match = options.findIndex((option) => option.label.toLocaleLowerCase('vi').startsWith(text))
      if (match !== -1) setActiveIndex(match)
      setOpen(true)
    }
  }

  return <div ref={container} className={`relative min-w-0 ${open ? 'z-30' : ''}`} onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false)
  }}>
    <label id={`${id}-label`} htmlFor={`${id}-trigger`} className="mb-2 block pl-1 text-xs font-medium text-ink-soft">{label}</label>
    <button ref={trigger} type="button" id={`${id}-trigger`} role="combobox" aria-haspopup="listbox" aria-expanded={open} aria-controls={`${id}-options`} aria-labelledby={`${id}-label ${id}-value`} aria-activedescendant={open ? `${id}-option-${activeIndex}` : undefined} onKeyDown={handleKeyDown} onClick={() => { setActiveIndex(selectedIndex); setOpen(!open) }} className={`focus-ring flex min-h-12 w-full items-center justify-between gap-3 rounded-full border px-4 py-3 text-left text-sm transition-colors duration-200 ${open ? 'border-primary-hover bg-cream-soft text-ink' : 'border-border bg-white text-ink-soft hover:border-primary-hover/60 hover:bg-paper'}`}>
      <span id={`${id}-value`} className="min-w-0 break-words">{options[selectedIndex].label}</span>
      <ChevronDown size={16} aria-hidden="true" className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-primary-readable' : 'text-muted'}`} />
    </button>
    {open && <ul ref={menu} id={`${id}-options`} role="listbox" aria-labelledby={`${id}-label`} className="instrument-filter-menu absolute inset-x-0 top-full mt-2 max-h-[min(20rem,45dvh)] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-white p-1.5 shadow-[0_12px_32px_rgb(16_24_47_/_0.12)]">
      {options.map((option, index) => <li key={option.value} id={`${id}-option-${index}`} role="option" aria-selected={index === selectedIndex} onMouseDown={(event) => event.preventDefault()} onPointerMove={(event) => { if (event.pointerType === 'mouse') setActiveIndex(index) }} onClick={() => select(index)} className={`flex min-h-11 cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm leading-6 transition-colors ${index === activeIndex ? 'bg-soft-yellow text-ink' : index === selectedIndex ? 'bg-cream-soft text-ink' : 'text-ink-soft'} ${index === selectedIndex ? 'font-semibold' : ''}`}>
        <span>{option.label}</span>{index === selectedIndex && <Check size={16} className="shrink-0 text-primary-readable" aria-hidden="true" />}
      </li>)}
    </ul>}
  </div>
}
