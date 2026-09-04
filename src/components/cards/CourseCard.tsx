import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Course } from '../../types'

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  return <Link to={`/courses/${course.slug}`} className="focus-ring card-lift group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white">
    <div className="relative aspect-[4/3] overflow-hidden"><img className="image-cover" src={course.image} alt={`Lớp ${course.name} tại DẤU LẶNG`} loading={index > 1 ? 'lazy' : undefined} />{course.badge && <span className="absolute left-4 top-4 rounded-full bg-lime px-3 py-2 text-[.63rem] font-bold uppercase tracking-wider text-ink">{course.badge}</span>}<span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-ink transition-transform group-hover:rotate-[-12deg]"><ArrowRight size={18} /></span></div>
    <div className="flex flex-1 flex-col p-6"><div className="mb-5 flex items-start justify-between gap-4"><h3 className="font-display text-3xl font-semibold tracking-tight text-ink">{course.name}</h3><span className="text-xs font-semibold text-ink/45">0{index + 1}</span></div><p className="mb-6 text-sm leading-6 text-ink/60">{course.description}</p><div className="mt-auto flex flex-wrap gap-2"><span className="rounded-full border border-ink/15 px-3 py-1.5 text-[.65rem] font-semibold uppercase tracking-wide">{course.age}</span><span className="rounded-full border border-ink/15 px-3 py-1.5 text-[.65rem] font-semibold uppercase tracking-wide">{course.format}</span></div></div>
  </Link>
}
