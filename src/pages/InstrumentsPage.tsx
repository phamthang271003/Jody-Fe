import { ArrowRight, Gift, GraduationCap, LayoutGrid, List, Piano, ShieldCheck, Tag } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { Breadcrumb } from '../components/common/Breadcrumb'
import { Button, ButtonLink } from '../components/common/Button'
import { ProductCard } from '../components/instruments/ProductCard'
import { FilterSelect } from '../components/instruments/FilterSelect'
import { ProductVisual } from '../components/instruments/ProductShared'
import { instrumentCategories } from '../data/instrumentCategories'
import { instruments } from '../data/instruments'
import { useSeo } from '../hooks/useSeo'

export default function InstrumentsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = instrumentCategories.find((category) => category.slug === searchParams.get('category'))
  const category = selectedCategory?.slug ?? ''
  const price = searchParams.get('price') ?? ''
  const sort = searchParams.get('sort') ?? 'featured'
  const brand = searchParams.get('brand') ?? ''
  const listView = searchParams.get('view') === 'list'
  const isPiano = !category || category === 'piano-digital'
  const featured = instruments[0]
  const instrumentLabel = isPiano ? 'Piano' : selectedCategory!.label

  useSeo({ title: `${instrumentLabel} tuyển chọn`, description: 'Khám phá danh mục nhạc cụ tuyển chọn tại Jody Music. Tìm cây đàn phù hợp với nhu cầu học tập, luyện tập và biểu diễn.' })

  const updateFilter = (key: string, value: string) => {
    setSearchParams((current) => {
      const next = new URLSearchParams(current)
      if (value) next.set(key, value)
      else next.delete(key)
      return next
    }, { preventScrollReset: true })
  }

  const products = instruments.filter((product) => {
    if (category && product.category !== category) return false
    if (brand && product.brand !== brand) return false
    if (price === 'under-10' && product.price >= 10000000) return false
    if (price === '10-20' && (product.price < 10000000 || product.price >= 20000000)) return false
    if (price === '20-40' && (product.price < 20000000 || product.price >= 40000000)) return false
    if (price === 'over-40' && product.price < 40000000) return false
    return true
  }).sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price
    if (sort === 'price-desc') return b.price - a.price
    if (sort === 'name') return a.name.localeCompare(b.name, 'vi')
    return 0
  })

  return <div className="instrument-catalog">
    <section className="overflow-hidden bg-paper pb-8 pt-32 sm:pb-12 md:pb-16 md:pt-40">
      <div className="container-site">
        <Breadcrumb items={[{ label: 'Nhạc cụ tuyển chọn', to: '/instruments' }, { label: `Danh sách ${instrumentLabel} tuyển chọn` }]} />
        <div className={`mt-6 grid items-center gap-7 sm:mt-10 sm:gap-10 md:mt-12 ${isPiano ? 'lg:grid-cols-[1fr_1fr] lg:gap-12' : 'max-w-3xl'}`}>
          <div className="min-w-0 sm:py-3 lg:py-6">
            <span className="inline-flex items-center gap-3 rounded-full bg-soft-yellow px-5 py-3 text-xs font-semibold uppercase tracking-[.14em]"><Piano size={21} aria-hidden="true" />Jody Music Store</span>
            <h1 className="mt-5 text-balance font-sans text-[clamp(2.35rem,5.8vw,4.15rem)] font-bold leading-[1.15] tracking-[-.03em] lg:text-[clamp(2.65rem,3.8vw,4.15rem)]">Danh sách {instrumentLabel}<span className="mt-1 block text-primary-readable">tuyển chọn</span></h1>
            <div className="mt-6 h-1 w-20 bg-primary" aria-hidden="true" />
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">Dành cho người mới bắt đầu, dễ dàng chọn được cây đàn ưng ý với danh sách rút gọn — không cần tìm đâu xa, Jody Music đã tuyển chọn sẵn cho bạn.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#danh-sach-dan" className="button-motion button-shine focus-ring inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase text-ink hover:bg-primary-hover">Xem danh sách đàn<ArrowRight size={18} className="button-arrow" aria-hidden="true" /></a>
              <ButtonLink to="/contact" variant="ghost" className="border-ink uppercase">Tư vấn chọn đàn</ButtonLink>
            </div>
            <ul className="mt-7 grid grid-cols-3 gap-0 sm:mt-9 lg:mt-11" aria-label="Cam kết của Jody Music">
              {[
                { title: '100%', description: 'Sản phẩm chính hãng' },
                { title: 'Tư vấn tận tâm', description: 'Bởi đội ngũ chuyên môn' },
                { title: 'Hỗ trợ trọn đời', description: 'Trong hành trình âm nhạc' },
              ].map(({ title, description }, index) => <li key={title} className={`min-w-0 ${index ? 'border-l border-primary/15 pl-2 sm:pl-4' : ''} pr-2 last:pr-0 sm:pr-4`}>
                <p className="font-sans text-sm font-semibold leading-[1.4] text-ink sm:text-lg sm:leading-[1.3]">{title}</p>
                <p className="mt-1 text-sm leading-[1.6] text-muted sm:leading-6">{description}</p>
              </li>)}
            </ul>
          </div>
          {isPiano && <div className="relative mx-auto w-full min-w-0 max-w-xl lg:max-w-none">
            <span className="absolute -left-10 -top-8 size-40 rounded-full bg-soft-yellow lg:size-48" aria-hidden="true" />
            <Link to={`/instruments/${featured.slug}`} className="focus-ring relative block overflow-hidden rounded-3xl border-2 border-ink bg-cream-soft shadow-[4px_6px_0_var(--color-border)] sm:rounded-[2rem] sm:shadow-[8px_10px_0_var(--color-border)]">
              <div className="relative aspect-[1.12] overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1/4 border-t border-border bg-paper" aria-hidden="true" />
                <span className="absolute left-5 top-5 z-10 rounded-full bg-primary px-5 py-2 text-sm font-bold uppercase">{featured.badge}</span>
                <ProductVisual product={featured} priority className="relative px-3 pt-6" />
                <span className="absolute bottom-4 right-5 text-[.65rem] text-muted">{!featured.images.length && 'Hình minh họa · Chân đàn bán riêng'}</span>
              </div>
              <div className="flex min-h-16 items-center justify-center gap-5 bg-ink px-4 py-4 text-white sm:min-h-20"><span className="text-sm font-bold uppercase sm:text-base">{featured.name}</span><span className="grid size-8 place-items-center rounded-full bg-primary text-ink"><ArrowRight size={20} aria-hidden="true" /></span></div>
            </Link>
          </div>}
        </div>
      </div>
    </section>

    <aside className="border-y border-primary/10 bg-cream-soft" aria-label="Quyền lợi khi chọn đàn">
      <ul className="instrument-purchase-benefits container-site grid grid-cols-2 xl:grid-cols-[1.15fr_1fr_1.25fr_.9fr]">
        {[
          { Icon: Gift, title: 'Mua đàn piano tặng giáo trình', description: '“24 Sessions Of Fun” biên soạn bởi Wondersound' },
          { Icon: Tag, title: 'Giá luôn rẻ hơn thị trường', description: 'Cam kết giá tốt nhất' },
          { Icon: GraduationCap, title: 'Tặng voucher học nhạc tại Jody Music', description: 'Hỗ trợ bạn trên hành trình âm nhạc' },
          { Icon: ShieldCheck, title: 'Bảo hành chính hãng', description: 'An tâm sử dụng lâu dài' },
        ].map(({ Icon, title, description }, index) => <li key={title} className={`relative flex min-w-0 items-center gap-4 py-5 sm:px-5 xl:py-6 ${index % 2 ? 'sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:h-9 sm:before:w-px sm:before:-translate-y-1/2 sm:before:bg-primary/40' : 'sm:pl-0'} ${index === 2 ? 'xl:pl-5 xl:before:absolute xl:before:left-0 xl:before:top-1/2 xl:before:h-9 xl:before:w-px xl:before:-translate-y-1/2 xl:before:bg-primary/40' : ''} last:xl:pr-0`}>
          <Icon size={30} strokeWidth={1.6} className="shrink-0 fill-primary text-ink-soft" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase leading-6 text-ink">{title}</p>
            <p className="mt-1 text-sm leading-6 text-ink-soft">{description}</p>
          </div>
        </li>)}
      </ul>
    </aside>

    <section id="danh-sach-dan" className="scroll-mt-32 border-t border-border bg-white py-10 sm:py-12 md:py-16">
      <div className="container-site">
        <div className="text-center">
          <p className="eyebrow flex items-center justify-center gap-2 text-primary-readable"><span className="h-px w-6 bg-primary-hover" aria-hidden="true" />{isPiano ? 'Đàn piano điện' : selectedCategory!.label}<span className="h-px w-6 bg-primary-hover" aria-hidden="true" /></p>
          <h2 className="mt-5 text-balance font-sans text-[clamp(2.25rem,7vw,4.5rem)] font-bold leading-[1.2] tracking-[-.035em] sm:mt-3 sm:text-[clamp(2.5rem,7vw,4.5rem)] sm:leading-[1.16]">{isPiano ? 'Piano Yamaha tuyển chọn' : `${selectedCategory!.label} tuyển chọn`}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base sm:leading-8">Khám phá các mẫu đàn được Jody Music chọn lọc, phù hợp từ học tập đến biểu diễn.</p>
        </div>
        <div className="instrument-filters mt-6 grid grid-cols-2 items-end gap-x-2 gap-y-4 sm:mt-8 sm:gap-4 lg:grid-cols-[1fr_1fr_1.2fr_1fr_auto]">
          <FilterSelect label="Phân khúc giá" value={price} onChange={(value) => updateFilter('price', value)} options={[{ value: '', label: 'Tất cả mức giá' }, { value: 'under-10', label: 'Dưới 10 triệu' }, { value: '10-20', label: '10 – dưới 20 triệu' }, { value: '20-40', label: '20 – dưới 40 triệu' }, { value: 'over-40', label: 'Từ 40 triệu' }]} />
          <FilterSelect label="Thương hiệu" value={brand} onChange={(value) => updateFilter('brand', value)} options={[{ value: '', label: 'Tất cả thương hiệu' }, { value: 'Yamaha', label: 'Yamaha' }]} />
          <FilterSelect label="Loại đàn" value={category} onChange={(value) => updateFilter('category', value)} options={[{ value: '', label: 'Tất cả nhạc cụ' }, ...instrumentCategories.map((item) => ({ value: item.slug, label: item.label }))]} />
          <FilterSelect label="Sắp xếp theo" value={sort} onChange={(value) => updateFilter('sort', value)} options={[{ value: 'featured', label: 'Nổi bật' }, { value: 'price-asc', label: 'Giá thấp đến cao' }, { value: 'price-desc', label: 'Giá cao đến thấp' }, { value: 'name', label: 'Tên sản phẩm A–Z' }]} />
          <div className="hidden gap-2 sm:flex" role="group" aria-label="Chế độ hiển thị">
            {[{ value: '', active: !listView, label: 'Dạng lưới', Icon: LayoutGrid }, { value: 'list', active: listView, label: 'Dạng danh sách', Icon: List }].map(({ value, active, label, Icon }) => <button key={label} type="button" aria-label={label} title={label} aria-pressed={active} onClick={() => updateFilter('view', value)} className={`focus-ring grid size-11 place-items-center rounded-lg border ${active ? 'border-primary bg-cream-soft text-primary-readable' : 'border-border text-muted'}`}><Icon size={20} /></button>)}
          </div>
        </div>
        <div className="my-5 text-xs text-muted">
          <p role="status" aria-live="polite">Hiển thị {products.length} sản phẩm</p>
        </div>
        {products.length ? <div className={`grid grid-cols-2 gap-2 min-[375px]:gap-3 sm:gap-4 ${listView ? 'sm:grid-cols-1' : 'xl:grid-cols-4'}`}>{products.map((product) => <ProductCard key={product.slug} product={product} list={listView} />)}</div> : <div className="rounded-2xl border border-border bg-paper px-5 py-12 text-center">
          <Piano size={36} className="mx-auto text-primary-readable" aria-hidden="true" />
          <h3 className="mt-5 text-2xl font-semibold leading-[1.3]">{category && !instruments.some((product) => product.category === category) ? 'Danh mục đang được cập nhật' : 'Chưa có sản phẩm phù hợp'}</h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-muted">Bạn có thể thay đổi bộ lọc hoặc liên hệ Jody Music để được tư vấn cây đàn phù hợp.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3"><Button onClick={() => setSearchParams(listView ? { view: 'list' } : {}, { preventScrollReset: true })}>Xem tất cả sản phẩm</Button><ButtonLink to="/contact" variant="ghost">Nhận tư vấn</ButtonLink></div>
        </div>}
      </div>
    </section>
  </div>
}
