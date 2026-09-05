import { ChevronDown } from 'lucide-react'
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { ButtonLink } from '../common/Button'
import { courseCategories, courses } from '../../data/courses'
import type { Course } from '../../types'
import { TrainingCourseCard } from './TrainingCourseCard'

const levels = ['Tất cả trình độ', 'Trẻ em', 'Người lớn', 'Beginner', 'Intermediate', 'Advanced']

const featuredCourses = ['guitar-acoustic', 'piano', 'trong', 'violin']
  .map((slug) => courses.find((course) => course.slug === slug))
  .filter((course): course is Course => Boolean(course))

function LevelDropdown({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative w-full sm:w-56">
      <button
        ref={triggerRef}
        type="button"
        className={`focus-ring flex min-h-12 w-full items-center justify-between gap-4 rounded-full border px-5 text-left text-sm font-semibold text-ink transition-colors ${open ? 'border-primary-hover bg-white' : 'border-primary-hover/45 bg-cream-soft hover:border-primary-hover hover:bg-soft-yellow'}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{value}</span>
        <ChevronDown
          size={17}
          className={`shrink-0 text-primary-hover transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label="Lọc theo đối tượng hoặc trình độ"
          className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-border bg-white p-1.5 shadow-xl shadow-ink/10"
        >
          {levels.map((item) => {
            const selected = item === value
            return (
              <button
                key={item}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                className={`focus-ring flex min-h-11 w-full items-center justify-between rounded-xl px-4 text-left text-sm transition-colors ${selected ? 'bg-soft-yellow font-semibold text-ink' : 'text-ink/70 hover:bg-cream-soft hover:text-ink'}`}
                onClick={() => {
                  onChange(item)
                  setOpen(false)
                  triggerRef.current?.focus()
                }}
              >
                <span>{item}</span>
                {selected && <span className="size-1.5 rounded-full bg-primary-hover" aria-hidden="true" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export function TrainingProgramsSection({ page = false }: { page?: boolean }) {
  const [category, setCategory] = useState('Tất cả')
  const [level, setLevel] = useState('Tất cả trình độ')
  const Heading = page ? 'h1' : 'h2'
  const filteredCourses = useMemo(
    () => courses.filter((course) => (
      (category === 'Tất cả' || course.category === category)
      && (level === 'Tất cả trình độ' || course.audience.includes(level) || course.levels.includes(level))
    )),
    [category, level],
  )
  const displayedCourses = page ? filteredCourses : featuredCourses

  return (
    <section
      id="courses"
      className={`noise relative overflow-hidden bg-paper pb-16 sm:pb-20 lg:pb-24 ${page ? 'pt-36 sm:pt-40 lg:pt-44' : 'pt-16 sm:pt-20 lg:pt-24'}`}
    >
      <div className="pointer-events-none absolute -left-28 -top-32 size-72 rounded-full bg-soft-yellow/70" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-1/3 size-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-12 left-0 h-px w-32 bg-primary/35 sm:w-56" aria-hidden="true" />
      <div className="container-site relative">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="mb-5 flex items-center justify-center gap-3 text-primary-hover sm:gap-5">
            <span className="h-px w-8 bg-primary-hover/55 sm:w-12" aria-hidden="true" />
            <p className="eyebrow text-primary-hover">Khóa học âm nhạc</p>
            <span className="h-px w-8 bg-primary-hover/55 sm:w-12" aria-hidden="true" />
          </div>
          <Heading className="text-balance text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.16] tracking-[-0.035em] text-ink">
            Chương Trình <span className="text-primary-hover">Đào Tạo</span>
          </Heading>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Khám phá các khóa học âm nhạc đa dạng tại Jody Music
          </p>
        </header>

        {page && (
          <div className="mb-8 flex flex-col gap-5 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Lọc theo nhạc cụ">
              {courseCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                  className={`focus-ring min-h-11 rounded-full px-4 py-2.5 text-xs font-semibold transition-colors ${category === item ? 'bg-ink text-white' : 'bg-white text-ink/60 hover:bg-soft-yellow hover:text-ink'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <LevelDropdown value={level} onChange={setLevel} />
          </div>
        )}

        {page && <p className="eyebrow mb-7 text-ink/40" aria-live="polite">{displayedCourses.length} chương trình phù hợp</p>}

        <div className="grid grid-cols-2 gap-2.5 min-[375px]:gap-3 sm:gap-6 xl:grid-cols-4">
          {displayedCourses.map((course, index) => (
            <TrainingCourseCard key={course.slug} course={course} index={index} />
          ))}
        </div>

        {page && displayedCourses.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center text-sm leading-7 text-muted">
            Chưa có chương trình phù hợp bộ lọc. Hãy thử lựa chọn khác.
          </div>
        )}

        {!page && <div className="mt-10 flex justify-center sm:mt-12">
          <ButtonLink
            to="/programs/hoc-tai-trung-tam"
            arrow
            className="w-full shadow-lg shadow-ink/10 sm:w-auto sm:min-w-72"
          >
            Khám phá tất cả khóa học
          </ButtonLink>
        </div>}
      </div>
    </section>
  )
}

export function CoursesSection() {
  return <TrainingProgramsSection />
}
