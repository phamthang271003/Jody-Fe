import { useMemo, useState } from 'react'
import { PageHero } from '../components/common/PageHero'
import { TeacherCard } from '../components/cards/TeacherCard'
import { teacherFilters, teachers } from '../data/teachers'
import { useSeo } from '../hooks/useSeo'

export default function TeachersPage() {
  const [filter, setFilter] = useState('Tất cả')
  useSeo({ title: 'Đội ngũ giáo viên', description: 'Gặp gỡ đội ngũ giảng viên và nghệ sĩ đồng hành tại DẤU LẶNG Music Academy.' })
  const filtered = useMemo(() => filter === 'Tất cả' ? teachers : teachers.filter((teacher) => teacher.instruments.includes(filter)), [filter])
  return <><PageHero eyebrow="Artists who teach" title="Họ không chỉ dạy nhạc." description="Đội ngũ nghệ sĩ giàu chuyên môn, luôn tò mò, luôn biểu diễn và biết cách biến kiến thức thành cảm hứng." image="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=85" /><section className="section-pad bg-white"><div className="container-site"><div className="mb-12 flex flex-wrap gap-2">{teacherFilters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`focus-ring rounded-full px-5 py-3 text-xs font-semibold ${filter === item ? 'bg-ink text-white' : 'bg-paper text-ink/60'}`}>{item}</button>)}</div><div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((teacher) => <TeacherCard key={teacher.slug} teacher={teacher} />)}</div></div></section></>
}
