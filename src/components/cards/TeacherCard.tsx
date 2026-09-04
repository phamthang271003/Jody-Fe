import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Teacher } from '../../types'

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return <Link to={`/teachers/${teacher.slug}`} className="focus-ring group block">
    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-mist"><img className="image-cover grayscale-[15%]" src={teacher.image} alt={`Giảng viên ${teacher.name}`} loading="lazy" /><span className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-tangerine text-ink transition-transform group-hover:rotate-45"><ArrowUpRight size={20} /></span></div>
    <div className="pt-5"><p className="eyebrow text-iris">{teacher.role}</p><h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">{teacher.name}</h3><p className="mt-2 text-sm text-ink/55">{teacher.experience} · {teacher.certificate.split('·')[0]}</p></div>
  </Link>
}
