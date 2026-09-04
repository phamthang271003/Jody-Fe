import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Breadcrumb({ items }: { items: Array<{ label: string; to?: string }> }) {
  return <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-semibold uppercase tracking-[.12em] text-muted">
    <Link to="/" className="focus-ring hover:text-iris">Trang chủ</Link>
    {items.map((item) => <span key={item.label} className="flex items-center gap-1.5"><ChevronRight size={13} />{item.to ? <Link className="focus-ring hover:text-iris" to={item.to}>{item.label}</Link> : <span className="text-ink">{item.label}</span>}</span>)}
  </nav>
}
