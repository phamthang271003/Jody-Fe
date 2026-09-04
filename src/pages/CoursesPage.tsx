import { useMemo, useState } from 'react'
import { CourseCard } from '../components/cards/CourseCard'
import { PageHero } from '../components/common/PageHero'
import { courseCategories, courses } from '../data/courses'
import { useSeo } from '../hooks/useSeo'

const levels = ['Tất cả trình độ', 'Trẻ em', 'Người lớn', 'Beginner', 'Intermediate', 'Advanced']

export default function CoursesPage() {
  const [category, setCategory] = useState('Tất cả')
  const [level, setLevel] = useState('Tất cả trình độ')
  useSeo({ title: 'Các khóa học âm nhạc', description: 'Khám phá khóa học Piano, Guitar, Thanh nhạc, Violin, Trống và Ban nhạc cho mọi độ tuổi.' })
  const filtered = useMemo(() => courses.filter((course) => (category === 'Tất cả' || course.category === category) && (level === 'Tất cả trình độ' || course.audience.includes(level) || course.levels.includes(level))), [category, level])
  return <><PageHero eyebrow="Course discovery" title="Tìm nhạc cụ hợp với bạn." description="Mỗi chương trình là một hành trình linh hoạt — đủ bài bản để tiến xa, đủ cảm hứng để bạn muốn quay lại lớp mỗi tuần." image="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=85" /><section className="section-pad bg-white"><div className="container-site"><div className="mb-12 flex flex-col gap-5 border-b border-ink/10 pb-8 lg:flex-row lg:items-center lg:justify-between"><div className="flex flex-wrap gap-2" role="group" aria-label="Lọc theo nhạc cụ">{courseCategories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`focus-ring rounded-full px-4 py-2.5 text-xs font-semibold transition ${category === item ? 'bg-ink text-white' : 'bg-paper text-ink/60 hover:bg-mist'}`}>{item}</button>)}</div><select value={level} onChange={(e) => setLevel(e.target.value)} className="focus-ring h-11 rounded-full border border-ink/15 bg-white px-5 text-xs font-semibold" aria-label="Lọc theo đối tượng hoặc trình độ">{levels.map((item) => <option key={item}>{item}</option>)}</select></div><p className="eyebrow mb-7 text-ink/40">{filtered.length} chương trình phù hợp</p><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((course,index) => <CourseCard key={course.slug} course={course} index={index} />)}</div>{filtered.length === 0 && <div className="rounded-3xl bg-paper p-12 text-center text-ink/60">Chưa có chương trình phù hợp bộ lọc. Hãy thử lựa chọn khác.</div>}</div></section></>
}
