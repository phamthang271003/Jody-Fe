import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { useRef, useState } from 'react'
import type { InstrumentProduct } from '../../data/instruments'
import { ProductVisual } from './ProductShared'

export function ProductGallery({ product }: { product: InstrumentProduct }) {
  const [selected, setSelected] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  const captions = product.images.length ? product.images.map((image) => image.alt) : ['Tổng thể', 'Bàn phím', 'Góc cận cảnh']
  const changeImage = (direction: number) => setSelected((current) => (current + direction + captions.length) % captions.length)

  return <div className="min-w-0">
    <div className="relative aspect-[1.25] overflow-hidden rounded-2xl border border-border/60 bg-cream-soft">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 border-t border-border bg-paper" aria-hidden="true" />
      <ProductVisual product={product} index={selected} priority className="relative p-2 sm:p-4" />
      {!product.images.length && <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-[.625rem] text-muted">Hình minh họa sản phẩm</span>}
      <button type="button" onClick={() => dialog.current?.showModal()} aria-label={`Phóng to ảnh ${product.name}`} className="focus-ring absolute bottom-3 right-3 grid size-11 place-items-center rounded-full border border-border bg-white text-ink"><Expand size={18} /></button>
    </div>
    <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-5" aria-label="Ảnh sản phẩm">
      {captions.map((caption, index) => <button type="button" key={`${caption}-${index}`} aria-label={`Xem ảnh: ${caption}`} aria-pressed={selected === index} onClick={() => setSelected(index)} className={`focus-ring aspect-square min-w-0 overflow-hidden rounded-lg border ${selected === index ? 'border-primary-hover bg-cream-soft' : 'border-border bg-white'}`}><ProductVisual product={product} index={index} /></button>)}
    </div>
    <p className="mt-3 text-xs leading-5 text-muted">{captions[selected]}{product.shape === 'portable' && ' · Chân đàn minh họa được bán riêng.'}</p>

    <dialog ref={dialog} aria-label={`Ảnh phóng to ${product.name}`} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close() }} onKeyDown={(event) => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); changeImage(-1) }
      if (event.key === 'ArrowRight') { event.preventDefault(); changeImage(1) }
    }} className="fixed inset-0 m-auto max-h-[90dvh] w-[min(95vw,64rem)] overflow-y-auto rounded-2xl border border-border bg-paper p-5 text-ink backdrop:bg-ink/75">
      <div className="flex items-center justify-between gap-4"><p className="text-sm font-semibold">{product.name}</p><button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Đóng ảnh phóng to" className="focus-ring grid size-11 shrink-0 place-items-center rounded-full border border-border bg-white"><X size={20} /></button></div>
      <div className="h-[min(60dvh,36rem)]"><ProductVisual product={product} index={selected} /></div>
      <div className="flex items-center justify-between gap-3"><button type="button" onClick={() => changeImage(-1)} aria-label="Ảnh trước" className="focus-ring grid size-11 shrink-0 place-items-center rounded-full border border-border"><ChevronLeft size={20} /></button><p className="text-center text-xs leading-5 text-muted">{captions[selected]} · {selected + 1}/{captions.length}{!product.images.length && <span className="block">Hình minh họa sản phẩm</span>}</p><button type="button" onClick={() => changeImage(1)} aria-label="Ảnh tiếp theo" className="focus-ring grid size-11 shrink-0 place-items-center rounded-full border border-border"><ChevronRight size={20} /></button></div>
    </dialog>
  </div>
}
