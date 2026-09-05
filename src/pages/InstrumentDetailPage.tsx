import { ChevronRight, Headphones, Leaf, MessageCircleMore, Piano, ShieldCheck, Truck, Users } from 'lucide-react'
import { useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Breadcrumb } from '../components/common/Breadcrumb'
import { Button, ButtonLink } from '../components/common/Button'
import { ProductGallery } from '../components/instruments/ProductGallery'
import { ProductBenefits, ProductRating } from '../components/instruments/ProductShared'
import { useBooking } from '../context/BookingContext'
import { formatInstrumentPrice, instrumentContact, instruments, type InstrumentProduct } from '../data/instruments'
import { useSeo } from '../hooks/useSeo'

const tabs = [
  { id: 'description', label: 'Mô tả sản phẩm' },
  { id: 'specifications', label: 'Thông số kỹ thuật' },
  { id: 'benefits', label: 'Quyền lợi khi mua tại Jody Music' },
]

function ProductDetails({ product }: { product: InstrumentProduct }) {
  const { openBooking } = useBooking()
  const [activeTab, setActiveTab] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const specifications = [
    ['Thương hiệu', product.brand], ['Model', product.model], ['Loại đàn', 'Piano điện'],
    ['Dòng sản phẩm', product.series], ['Số phím', '88 phím'],
    ['Màu sắc', product.finish === 'rosewood' ? 'Nâu gỗ (Rosewood)' : 'Đen'],
  ]

  return <section className="bg-white pb-16 pt-32 md:pb-20 md:pt-40">
    <div className="container-site">
      <Breadcrumb items={[{ label: 'Nhạc cụ', to: '/instruments' }, { label: 'Piano điện', to: '/instruments?category=piano-digital' }, { label: product.name }]} />
      <div className="mt-7 grid items-start gap-7 md:mt-9 lg:grid-cols-[1.05fr_1fr] xl:grid-cols-[1.25fr_1fr_.7fr] xl:gap-6">
        <ProductGallery product={product} />
        <div className="min-w-0">
          <span className="inline-flex rounded-full bg-soft-yellow px-3 py-1 text-xs font-semibold text-ink">{product.badge}</span>
          <h1 className="mt-3 text-[clamp(2.25rem,3vw,2.75rem)] font-bold leading-[1.2] tracking-[-.03em]">{product.name}</h1>
          <p className="mt-2 text-sm leading-6 text-muted">{product.model}</p>
          <p className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">Thương hiệu: <strong className="text-ink">{product.brand}</strong><span className="h-4 w-px bg-border" aria-hidden="true" /><span className="font-bold uppercase tracking-[.08em] text-ink">{product.series}</span></p>
          <ProductRating product={product} />
          <div className="mt-5 grid grid-cols-2 gap-2 2xl:grid-cols-4">
            {[
              { Icon: Piano, text: '88 phím' }, { Icon: Headphones, text: 'Piano điện' },
              { Icon: Leaf, text: product.shape === 'portable' ? 'Thiết kế gọn nhẹ' : 'Thiết kế thanh lịch' }, { Icon: Users, text: 'Học tập tại nhà' },
            ].map(({ Icon, text }) => <div key={text} className="flex items-center gap-2 rounded-xl bg-paper px-3 py-3 text-xs leading-5"><Icon size={21} className="shrink-0" aria-hidden="true" /><span>{text}</span></div>)}
          </div>
          <div className="mt-5 rounded-xl bg-paper px-4 py-4">
            <p className="text-[clamp(1.75rem,2.5vw,2.25rem)] font-bold leading-[1.3] tracking-[-.025em] text-primary-readable">{formatInstrumentPrice(product.price)}</p>
            {product.originalPrice && <div className="mt-2 flex flex-wrap items-center gap-3"><del className="text-sm text-muted">{formatInstrumentPrice(product.originalPrice)}</del><span className="rounded-md bg-soft-yellow px-2 py-1 text-[.625rem] font-semibold">Tiết kiệm {formatInstrumentPrice(product.originalPrice - product.price)}</span></div>}
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">{product.description}</p>
          <a href={instrumentContact.zalo} target="_blank" rel="noreferrer" className="button-motion button-shine focus-ring mt-5 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-base font-semibold text-ink hover:bg-primary-hover motion-reduce:transform-none [&_.button-arrow]:motion-reduce:transform-none"><MessageCircleMore size={24} className="shrink-0" aria-hidden="true" /><span>Tư vấn chọn đàn</span><ChevronRight size={18} className="button-arrow shrink-0" aria-hidden="true" /></a>
        </div>
        <aside className="rounded-2xl border border-primary/30 bg-cream-soft/60 p-5 lg:col-span-2 xl:col-span-1" aria-label="Hỗ trợ mua đàn tại Jody Music">
          <ProductBenefits />
          <div className="mt-6 space-y-5 border-t border-border pt-5">
            {[
              { Icon: ShieldCheck, title: 'Thông tin sản phẩm rõ ràng', text: 'Tư vấn cấu hình và phụ kiện trước khi chọn đàn.' },
              { Icon: Truck, title: 'Hỗ trợ giao nhận', text: 'Liên hệ để xác nhận khu vực, thời gian và chi phí.' },
              { Icon: Headphones, title: 'Tư vấn cùng Jody Music', text: 'Đồng hành từ chọn nhạc cụ đến lộ trình học tập.' },
            ].map(({ Icon, title, text }) => <div key={title} className="flex gap-3"><Icon size={27} className="mt-1 shrink-0" strokeWidth={1.6} aria-hidden="true" /><div><p className="text-sm font-semibold leading-6">{title}</p><p className="mt-1 text-sm leading-6 text-muted">{text}</p></div></div>)}
          </div>
        </aside>
      </div>
      <div className="mt-10 md:mt-12">
        <div role="tablist" aria-label="Thông tin sản phẩm" className="grid grid-cols-1 gap-1 rounded-2xl border border-border bg-paper/40 p-1 sm:grid-cols-3 sm:rounded-full">
          {tabs.map((tab, index) => <button key={tab.id} ref={(element) => { tabRefs.current[index] = element }} type="button" id={`tab-${tab.id}`} role="tab" aria-selected={activeTab === index} aria-controls={`panel-${tab.id}`} tabIndex={activeTab === index ? 0 : -1} onClick={() => setActiveTab(index)} onKeyDown={(event) => {
            let next = index
            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length
            else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + tabs.length - 1) % tabs.length
            else if (event.key === 'Home') next = 0
            else if (event.key === 'End') next = tabs.length - 1
            else return
            event.preventDefault()
            setActiveTab(next)
            tabRefs.current[next]?.focus()
          }} className={`focus-ring min-h-12 rounded-full px-4 py-3 text-sm font-semibold leading-6 transition-colors ${activeTab === index ? 'bg-primary text-ink' : 'text-ink-soft hover:bg-soft-yellow'}`}>{tab.label}</button>)}
        </div>
        {tabs.map((tab, index) => <div key={tab.id} role="tabpanel" id={`panel-${tab.id}`} aria-labelledby={`tab-${tab.id}`} hidden={activeTab !== index} tabIndex={0} className="focus-ring mt-7 rounded-2xl border border-border p-5 sm:p-8">
          {index === 0 && <div className="max-w-3xl"><h2 className="text-2xl font-bold leading-[1.3]">{product.name} — cùng bạn bắt đầu hành trình âm nhạc</h2><p className="mt-5 text-base leading-8 text-muted">{product.description}</p><p className="mt-4 text-base leading-8 text-muted">{product.body}</p><ButtonLink to="/contact" variant="ghost" arrow className="mt-6">Tư vấn chọn đàn phù hợp</ButtonLink></div>}
          {index === 1 && <div className="max-w-4xl"><h2 className="text-2xl font-bold leading-[1.3]">Thông tin {product.name}</h2><dl className="mt-5 divide-y divide-border">{specifications.map(([label, value]) => <div key={label} className="grid gap-2 py-4 text-sm leading-6 sm:grid-cols-[12rem_1fr]"><dt className="text-muted">{label}</dt><dd className="break-words font-medium">{value}</dd></div>)}</dl><p className="mt-5 text-sm leading-7 text-muted">Liên hệ Jody Music để nhận bảng thông số đầy đủ, tình trạng sản phẩm và thông tin phụ kiện đi kèm.</p></div>}
          {index === 2 && <div className="max-w-3xl"><h2 className="mb-5 text-2xl font-bold leading-[1.3]">Chọn đàn cùng Jody Music</h2><ProductBenefits /><p className="mt-5 text-base leading-8 text-muted">Đội ngũ Jody Music hỗ trợ tìm nhạc cụ theo mục tiêu học tập và không gian luyện đàn của bạn. Chính sách bảo hành, giao nhận và các ưu đãi áp dụng sẽ được tư vấn cụ thể khi liên hệ.</p><Button onClick={() => openBooking('Piano')} className="mt-6" arrow>Trải nghiệm học piano miễn phí</Button></div>}
        </div>)}
      </div>
    </div>
  </section>
}

export default function InstrumentDetailPage() {
  const { slug } = useParams()
  const product = instruments.find((item) => item.slug === slug)
  useSeo({ title: product?.name ?? 'Không tìm thấy sản phẩm', description: product?.description ?? 'Sản phẩm không tồn tại trong danh mục Jody Music.' })
  if (!product) return <Navigate to="/404" replace />
  return <ProductDetails key={product.slug} product={product} />
}
