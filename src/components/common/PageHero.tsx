import { Breadcrumb } from './Breadcrumb'

export function PageHero({ eyebrow, title, description, image, breadcrumb }: { eyebrow: string; title: string; description: string; image?: string; breadcrumb?: string }) {
  return <section className="overflow-hidden bg-paper pt-32 md:pt-40">
    <div className="container-site pb-12 md:pb-18"><Breadcrumb items={[{ label: breadcrumb ?? title }]} /><div className={`mt-12 grid items-end gap-10 ${image ? 'lg:grid-cols-[1fr_.75fr]' : ''}`}>
      <div><p className="eyebrow mb-6 text-iris">{eyebrow}</p><h1 className="display text-balance text-[clamp(3.5rem,9vw,8.4rem)] text-ink">{title}</h1><p className="mt-7 max-w-2xl text-base leading-7 text-muted md:text-xl md:leading-8">{description}</p></div>
      {image && <div className="relative h-72 overflow-hidden rounded-[2rem] lg:h-100"><img className="image-cover" src={image} alt="" fetchPriority="high" /><span className="absolute bottom-5 right-5 rounded-full bg-lime px-5 py-3 text-xs font-bold uppercase tracking-wider">Make some noise</span></div>}
    </div></div>
    <div className="h-px bg-border" />
  </section>
}
