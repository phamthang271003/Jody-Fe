import { Link, useSearchParams } from 'react-router-dom'
import { ButtonLink } from '../components/common/Button'
import { PageHero } from '../components/common/PageHero'
import { instrumentCategories } from '../data/instrumentCategories'
import { useSeo } from '../hooks/useSeo'

export default function InstrumentsPage() {
  const [searchParams] = useSearchParams()
  const categorySlug = searchParams.get('category')
  const selectedCategory = instrumentCategories.find((category) => category.slug === categorySlug)
  const pageTitle = selectedCategory ? `${selectedCategory.label} tuyển chọn.` : 'Nhạc cụ tuyển chọn.'

  useSeo({
    title: selectedCategory ? selectedCategory.label : 'Nhạc cụ',
    description: 'Danh mục nhạc cụ tuyển chọn dành cho học tập, luyện tập và biểu diễn tại DẤU LẶNG.',
  })

  return <>
    <PageHero
      eyebrow="DẤU LẶNG Music Store"
      title={pageTitle}
      description="Danh mục sản phẩm đang được hoàn thiện để mang đến những lựa chọn phù hợp cho từng nhu cầu học tập và biểu diễn."
    />
    <section className="section-pad bg-white">
      <div className="container-site">
        <nav className="flex flex-wrap gap-2" aria-label="Danh mục nhạc cụ">
          <Link to="/instruments" className={`focus-ring rounded-full px-4 py-2.5 text-xs font-semibold transition ${!selectedCategory ? 'bg-ink text-white' : 'bg-paper text-ink/65 hover:bg-soft-yellow'}`}>Tất cả danh mục</Link>
          {instrumentCategories.map((category) => <Link key={category.slug} to={`/instruments?category=${category.slug}`} className={`focus-ring rounded-full px-4 py-2.5 text-xs font-semibold transition ${selectedCategory?.slug === category.slug ? 'bg-primary text-ink' : 'bg-paper text-ink/65 hover:bg-soft-yellow'}`}>{category.label}</Link>)}
        </nav>

        <div className="mt-10 rounded-[2rem] border border-border bg-paper px-6 py-14 text-center sm:px-10 sm:py-16">
          <p className="eyebrow text-primary-hover">Danh mục đang cập nhật</p>
          <h2 className="text-balance mx-auto mt-5 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.18] tracking-[-0.03em] text-ink">
            Sản phẩm phù hợp sẽ sớm được giới thiệu.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">Liên hệ đội ngũ DẤU LẶNG nếu bạn cần tư vấn chọn nhạc cụ ngay hôm nay.</p>
          <ButtonLink to="/contact" arrow className="mt-7">Nhận tư vấn nhạc cụ</ButtonLink>
        </div>
      </div>
    </section>
  </>
}
