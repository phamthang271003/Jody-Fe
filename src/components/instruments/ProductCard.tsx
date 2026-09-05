import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatInstrumentPrice, type InstrumentProduct } from '../../data/instruments'
import { ButtonLink } from '../common/Button'
import { ProductBenefits, ProductVisual } from './ProductShared'

export function ProductCard({ product, list = false }: { product: InstrumentProduct; list?: boolean }) {
  const to = `/instruments/${product.slug}`
  return <article className={`instrument-card min-w-0 rounded-3xl border border-primary/25 bg-cream-soft/20 p-4 sm:p-5 ${list ? 'flex flex-col sm:grid sm:items-center sm:gap-5 md:grid-cols-[.9fr_1.1fr_1fr]' : 'instrument-card-grid flex flex-col'}`}>
    <div className="relative min-w-0">
      <span className="instrument-card-badge absolute left-0 top-0 z-10 max-w-full rounded-full bg-primary px-3.5 py-2 text-xs font-semibold uppercase leading-4 text-ink">{product.badge}</span>
      <Link to={to} aria-label={`Xem ${product.name}`} className="instrument-card-media focus-ring block aspect-[1.25] overflow-hidden rounded-xl pb-3 pt-7"><ProductVisual product={product} className="instrument-card-image" /></Link>
      {!product.images.length && <span className="absolute bottom-0 right-0 text-[.6rem] text-muted">Hình minh họa</span>}
    </div>
    <div className={`instrument-card-info ${list ? 'mt-3 flex min-w-0 flex-1 flex-col sm:mt-0 sm:block' : 'mt-4 flex flex-1 flex-col'}`}>
      <h3 className="instrument-card-title break-words font-sans text-xl font-bold leading-[1.3] tracking-[-.02em] sm:text-2xl sm:leading-[1.2] sm:tracking-[-.025em]"><Link to={to} className="focus-ring transition-colors hover:text-primary-readable">{product.name}</Link></h3>
      <p className="mt-1.5 break-words text-xs uppercase leading-5 text-muted">{product.model}</p>
      <p className="mt-3 hidden text-sm leading-6 text-muted sm:block">{product.description}</p>
      <p className={`instrument-card-price ${list ? 'mt-4' : 'mt-auto pt-4'} text-[clamp(1.5rem,1.8vw,1.75rem)] font-bold leading-[1.3] tracking-[-.025em] text-primary-readable`}>{formatInstrumentPrice(product.price)}</p>
    </div>
    <div className="instrument-card-actions mt-4 grid min-w-0 gap-4">
      <details className="instrument-card-details sm:hidden">
        <summary className="focus-ring flex min-h-11 cursor-pointer list-none items-center justify-between gap-1 rounded-lg py-2 text-sm font-medium leading-5 text-ink-soft [&::-webkit-details-marker]:hidden"><span className="min-w-0">Thông tin & quyền lợi<span className="sr-only"> {product.name}</span></span><ChevronDown size={14} className="shrink-0" aria-hidden="true" /></summary>
        <div className="space-y-3 pb-3"><p className="text-sm leading-6 text-muted">{product.description}</p><ProductBenefits compact /></div>
      </details>
      <div className="hidden sm:block"><ProductBenefits compact /></div>
      <ButtonLink to="/contact" className="instrument-card-cta w-full"><span className="min-w-0">Tư vấn chọn đàn</span><ArrowRight size={19} className="button-arrow shrink-0" aria-hidden="true" /></ButtonLink>
    </div>
  </article>
}
