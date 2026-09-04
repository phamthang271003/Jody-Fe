import { ButtonLink } from '../common/Button'
import { courses } from '../../data/courses'
import type { Course } from '../../types'
import { TrainingCourseCard } from './TrainingCourseCard'

const featuredCourses = ['guitar-acoustic', 'piano', 'trong', 'violin']
  .map((slug) => courses.find((course) => course.slug === slug))
  .filter((course): course is Course => Boolean(course))

export function TrainingProgramsSection({ page = false }: { page?: boolean }) {
  const Heading = page ? 'h1' : 'h2'

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

        <div className="grid grid-cols-2 gap-2.5 min-[375px]:gap-3 sm:gap-6 xl:grid-cols-4">
          {featuredCourses.map((course, index) => (
            <TrainingCourseCard key={course.slug} course={course} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <ButtonLink
            to="/courses"
            arrow
            className="w-full shadow-lg shadow-ink/10 sm:w-auto sm:min-w-72"
          >
            Khám phá tất cả khóa học
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export function CoursesSection() {
  return <TrainingProgramsSection />
}
