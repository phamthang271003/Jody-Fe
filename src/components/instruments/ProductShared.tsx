import { Check, Gift, Star } from 'lucide-react'
import { instrumentBenefits, type InstrumentProduct } from '../../data/instruments'
import { PianoArtwork } from './PianoArtwork'

export function ProductVisual({ product, index = 0, className = '', priority = false }: { product: InstrumentProduct; index?: number; className?: string; priority?: boolean }) {
  const photo = product.images[index] ?? product.images[0]
  return photo
    ? <img src={photo.src} alt={photo.alt} className={`h-full w-full object-contain ${className}`} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />
    : <PianoArtwork product={product} view={index} className={`h-full w-full ${className}`} />
}

export function ProductBenefits({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? 'instrument-card-benefits rounded-2xl border border-primary/25 bg-cream-soft/40 p-3.5' : ''}>
    <p className={`flex items-center font-bold text-ink ${compact ? 'gap-2.5 text-xs uppercase leading-5' : 'gap-2 text-lg'}`}><Gift size={compact ? 21 : 26} className="shrink-0 text-primary-readable" aria-hidden="true" />Đồng hành tại Jody Music</p>
    <ul className={`mt-3 ${compact ? 'space-y-2.5 text-sm leading-6' : 'space-y-3 text-sm leading-6'}`}>
      {instrumentBenefits.map((benefit) => <li key={benefit} className={`flex items-start ${compact ? 'gap-2.5' : 'gap-2'}`}>{compact ? <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-soft-yellow text-primary-readable"><Check size={15} strokeWidth={2.5} aria-hidden="true" /></span> : <Check size={16} className="mt-0.5 shrink-0 text-emerald-700" aria-hidden="true" />}<span className={compact ? 'text-muted' : 'text-ink-soft'}>{benefit}</span></li>)}
    </ul>
  </div>
}

export function ProductRating({ product }: { product: InstrumentProduct }) {
  const rating = product.rating
  const hasRating = rating !== undefined && Number.isFinite(rating) && rating > 0 && rating <= 5
  const hasSoldCount = product.soldCount !== undefined && Number.isInteger(product.soldCount) && product.soldCount >= 0

  return <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm leading-6">
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex shrink-0 gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => <span key={index} className="relative inline-flex">
          <Star size={16} className="text-muted" />
          {hasRating && <span className="absolute inset-y-0 left-0 overflow-hidden text-primary-readable" style={{ width: `${Math.min(1, Math.max(0, rating - index)) * 100}%` }}><Star size={16} fill="currentColor" className="max-w-none" /></span>}
        </span>)}
      </span>
      {hasRating ? <span className="font-semibold text-ink" aria-label={`Đánh giá ${rating.toLocaleString('vi-VN')} trên 5 sao`}>{rating.toLocaleString('vi-VN', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}/5</span> : <span className="text-muted">Chưa có đánh giá</span>}
    </div>
    <span className="text-muted">Đã bán: {hasSoldCount ? <strong className="font-semibold text-ink">{product.soldCount!.toLocaleString('vi-VN')}</strong> : 'đang cập nhật'}</span>
  </div>
}
