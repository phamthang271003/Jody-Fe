import { ArrowRight, Drum, GraduationCap, Guitar, Headphones, LayoutGrid, Music2, Piano, ShieldCheck, Truck } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { instrumentCategories } from '../data/instrumentCategories'
import { instruments } from '../data/instruments'
import { useSeo } from '../hooks/useSeo'

const filters = [
  { value: '', label: 'Tất cả', Icon: LayoutGrid },
  { value: 'piano', label: 'Piano', Icon: Piano },
  { value: 'guitar', label: 'Guitar', Icon: Guitar },
  { value: 'strings', label: 'Dây', Icon: Music2 },
  { value: 'percussion', label: 'Bộ gõ', Icon: Drum },
]


export default function InstrumentCategoriesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedFilter = filters.find((filter) => filter.value === searchParams.get('group')) ?? filters[0]
  const categories = instrumentCategories
    .filter((category) => !selectedFilter.value || category.group === selectedFilter.label)
    .sort((a, b) => a.imageIndex - b.imageIndex)

  useSeo({
    title: 'Tất cả danh mục nhạc cụ',
    description: 'Khám phá danh mục piano, guitar, bass, violin và trống tại Jody Music. Tìm nhạc cụ phù hợp với nhu cầu học tập và biểu diễn của bạn.',
  })

  function selectGroup(value: string) {
    setSearchParams((current) => {
      const next = new URLSearchParams(current)
      if (value) next.set('group', value)
      else next.delete('group')
      return next
    }, { preventScrollReset: true })
  }

  return <section className="instrument-categories bg-cream-soft/50 pb-16 pt-32 md:pb-20 md:pt-40">
    <div className="container-site">
      <div className="mx-auto max-w-4xl text-center">
        <p className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[.2em] text-primary-readable"><span className="h-px w-9 bg-primary-hover" aria-hidden="true" />Jody Music<span className="h-px w-9 bg-primary-hover" aria-hidden="true" /></p>
        <h1 className="mt-5 text-balance font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold uppercase leading-[1.2] tracking-[-.025em] text-ink">Nhạc cụ tuyển chọn</h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted">Khám phá các dòng nhạc cụ cùng Jody Music, từ piano, guitar đến violin và trống. Chọn người bạn đồng hành phù hợp cho hành trình học tập và biểu diễn của bạn.</p>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3" role="group" aria-label="Lọc danh mục nhạc cụ">
        {filters.map(({ value, label, Icon }) => <Button key={value} variant={selectedFilter.value === value ? 'primary' : 'ghost'} aria-pressed={selectedFilter.value === value} aria-controls="instrument-category-grid" onClick={() => selectGroup(value)} className="category-filter motion-reduce:transform-none"><Icon size={18} className="shrink-0" aria-hidden="true" />{label}</Button>)}
      </div>
      <p className="sr-only" role="status" aria-live="polite">Hiển thị {categories.length} danh mục{selectedFilter.value ? ` thuộc nhóm ${selectedFilter.label}` : ''}.</p>

      <div id="instrument-category-grid" className="mt-6 grid grid-cols-2 gap-2 min-[375px]:gap-3 sm:gap-4 lg:grid-cols-4">
        {categories.map((category) => {
          const title = category.title ?? category.label
          const count = instruments.filter((product) => product.category === category.slug).length
          return <article key={category.slug} className="flex min-w-0 flex-col rounded-2xl border border-border bg-white/80 p-2 sm:p-3">
            <div className="relative">
              <div role="img" aria-label={`Hình minh họa ${title}`} className="aspect-[3/2] rounded-xl bg-paper bg-no-repeat" style={{ backgroundImage: 'url(/images/instrument-categories.png)', backgroundSize: '400% 200%', backgroundPosition: `${(category.imageIndex % 4) * 100 / 3}% ${Math.floor(category.imageIndex / 4) * 100}%` }} />
              <span className="absolute left-0 top-0 inline-flex max-w-full items-center gap-2 rounded-br-xl rounded-tl-xl bg-cream-soft px-2 py-1.5 text-[.5625rem] font-semibold uppercase leading-4 tracking-[.1em] text-primary-readable sm:px-3 sm:text-[.625rem]"><span className="h-px w-4 shrink-0 bg-primary-hover" aria-hidden="true" />{category.group}</span>
            </div>
            <div className="flex flex-1 flex-col px-1 pt-3 sm:px-2">
              <h2 className="break-words text-lg font-bold leading-[1.3] tracking-[-.02em] text-ink sm:text-xl xl:text-2xl">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{category.description}</p>
              <div className="mt-auto pt-3"><span className="inline-flex rounded-full bg-soft-yellow px-2.5 py-1 text-xs font-medium leading-5 text-ink sm:px-4">{count ? `${count} sản phẩm` : 'Đang cập nhật'}</span></div>
              <Link to={`/instruments?category=${category.slug}`} aria-label={`Khám phá danh mục ${title}`} className="category-explore focus-ring mt-1 inline-flex min-h-11 items-center justify-between gap-1 rounded-lg py-2 text-primary-readable transition-colors hover:text-ink"><span className="min-w-0">Khám phá danh mục</span><ArrowRight size={16} className="shrink-0" aria-hidden="true" /></Link>
            </div>
          </article>
        })}
      </div>
    </div>
  </section>
}
