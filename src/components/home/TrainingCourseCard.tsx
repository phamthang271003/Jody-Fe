import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CircleCheck,
  Music2,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Course } from '../../types'

const courseStyles = [
  { panel: 'bg-soft-yellow', accentText: 'text-primary-hover', icon: 'bg-soft-yellow text-primary-hover' },
  { panel: 'bg-cream-soft', accentText: 'text-accent', icon: 'bg-cream-soft text-accent' },
  { panel: 'bg-soft-yellow', accentText: 'text-accent', icon: 'bg-soft-yellow text-accent' },
  { panel: 'bg-cream-soft', accentText: 'text-primary-hover', icon: 'bg-cream-soft text-primary-hover' },
]

const benefits = [
  { icon: Music2, label: 'Nhạc cụ được chuẩn bị sẵn' },
  { icon: CircleCheck, label: 'Báo cáo học tập sau từng buổi' },
  { icon: BookOpen, label: 'Giáo trình bài bản' },
  { icon: Sparkles, label: 'Cơ hội biểu diễn tại Jody Music' },
]

const packages = [12, 24, 48, 96]

export function TrainingCourseCard({ course, index }: { course: Course; index: number }) {
  const style = courseStyles[index % courseStyles.length]

  return (
    <Link
      to={`/courses/${course.slug}`}
      aria-label={`Xem khóa học ${course.name}`}
      className="focus-ring group relative flex min-w-0 flex-col overflow-hidden rounded-[1.15rem] border border-border bg-white shadow-md shadow-ink/5 transition duration-300 hover:-translate-y-1 hover:border-primary/55 hover:shadow-xl hover:shadow-ink/10 sm:rounded-[1.75rem] sm:shadow-lg"
    >
      <div className={`relative h-40 overflow-hidden min-[375px]:h-44 sm:h-72 xl:h-64 3xl:h-72 ${style.panel}`}>
        <div className={`absolute left-3 top-3 z-10 sm:left-5 sm:top-5 ${style.accentText}`} aria-hidden="true">
          <span className="block text-lg font-bold tracking-[-0.04em] sm:text-2xl">{String(index + 1).padStart(2, '0')}</span>
          <span className="mt-1.5 block h-0.5 w-5 bg-current opacity-70 sm:mt-2 sm:w-7" />
        </div>
        <div className="absolute inset-x-2 bottom-0 top-2 overflow-hidden rounded-tl-[5.5rem] rounded-tr-[2rem] min-[375px]:rounded-tl-[6.5rem] sm:inset-x-3 sm:top-4 sm:rounded-tl-[11rem] sm:rounded-tr-[3rem] xl:rounded-tl-[9rem]">
          <img
            className="image-cover"
            src={course.image}
            alt={`Học viên lớp ${course.name} tại Jody Music`}
            loading={index > 1 ? 'lazy' : undefined}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-white/5" aria-hidden="true" />
          {course.badge && (
            <span className="absolute bottom-2 right-2 max-w-[calc(100%-1rem)] truncate rounded-full bg-white/90 px-2 py-1 text-[.5rem] font-bold text-ink shadow-sm backdrop-blur-sm sm:bottom-3 sm:right-3 sm:px-3 sm:py-1.5 sm:text-[.65rem]">
              {course.badge}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-3 min-[375px]:p-3.5 sm:p-6 xl:p-5 3xl:p-6">
        <h3 className="mb-2.5 break-words text-[.88rem] font-bold leading-[1.3] tracking-[-0.02em] text-ink min-[375px]:text-base sm:mb-4 sm:text-2xl sm:leading-[1.2] sm:tracking-[-0.025em]">
          {course.name}
        </h3>

        <ul className="space-y-1.5 sm:space-y-2.5" aria-label={`Quyền lợi khóa học ${course.name}`}>
          {benefits.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-start gap-1.5 text-[.68rem] leading-[1.45] text-ink/70 sm:items-center sm:gap-3 sm:text-sm sm:leading-6">
              <span className={`mt-px grid size-5 shrink-0 place-items-center rounded-full sm:mt-0 sm:size-7 ${style.icon}`} aria-hidden="true">
                <Icon className="size-2.5 sm:size-3.5" strokeWidth={2} />
              </span>
              <span className="min-w-0 break-words">{label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-2 border-t border-border pt-3 sm:mt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-3 sm:pt-4">
          <div className="flex min-w-0 items-start gap-1.5 text-[.58rem] leading-4 text-muted sm:gap-2 sm:text-[.68rem] sm:leading-5">
            <CalendarDays className="mt-0.5 size-3 shrink-0 sm:size-3.5" strokeWidth={1.8} aria-hidden="true" />
            <p className="sm:hidden">12 · 24 · 48 · 96 buổi</p>
            <p className="hidden sm:block">
              {packages.map((number, packageIndex) => (
                <span key={number}>{packageIndex > 0 && <span className="mx-1 text-border">|</span>}{number} buổi</span>
              ))}
            </p>
          </div>
          <span className="grid size-8 shrink-0 place-items-center self-end rounded-full bg-primary text-ink transition duration-300 group-hover:bg-primary-hover sm:size-11" aria-hidden="true">
            <ArrowRight className="size-3.5 text-ink transition-transform duration-300 group-hover:translate-x-1 sm:size-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
