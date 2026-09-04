import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { blogPosts } from '../data/content'
import { useSeo } from '../hooks/useSeo'

export default function BlogPage(){useSeo({title:'Jody Music Journal',description:'Kiến thức học nhạc, hướng dẫn luyện tập và kinh nghiệm cho phụ huynh.'});return <><PageHero eyebrow="Ideas & practice" title="Đọc để nghe tốt hơn." description="Những ghi chép ngắn từ giáo viên, nghệ sĩ và cộng đồng về việc học, chơi và sống cùng âm nhạc." /><section className="section-pad bg-white"><div className="container-site grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post,index)=><Link to={`/blog/${post.slug}`} className={`focus-ring group ${index===1?'lg:mt-16':''}`} key={post.slug}><div className="overflow-hidden rounded-[1.5rem]"><img src={post.image} alt={post.title} className="image-cover aspect-[4/3]"/></div><p className="eyebrow mt-6 text-iris">{post.category} · {post.date}</p><h2 className="mt-3 flex gap-4 font-display text-3xl font-semibold leading-tight">{post.title}<ArrowUpRight className="shrink-0 transition-transform group-hover:rotate-45"/></h2><p className="mt-4 text-sm leading-6 text-ink/55">{post.excerpt}</p></Link>)}</div></section></>}
