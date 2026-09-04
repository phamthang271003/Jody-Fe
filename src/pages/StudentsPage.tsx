import { useMemo, useState } from 'react'
import { PageHero } from '../components/common/PageHero'
import { VideoCard } from '../components/cards/VideoCard'
import { performances } from '../data/performances'
import { useSeo } from '../hooks/useSeo'

const filters = ['Tất cả', 'Piano', 'Guitar', 'Vocal', 'Violin', 'Drums', 'Band']
export default function StudentsPage() {
  const [filter,setFilter]=useState('Tất cả'); const items=useMemo(()=>filter==='Tất cả'?performances:performances.filter((p)=>p.course===filter),[filter])
  useSeo({ title: 'Thành quả học viên', description: 'Xem video biểu diễn, recital và hành trình tiến bộ của học viên DẤU LẶNG.' })
  return <><PageHero eyebrow="Student spotlight" title="Đây là thanh âm của sự tiến bộ." description="Mỗi màn trình diễn không cần hoàn hảo. Nó chỉ cần chân thật — một dấu mốc để học viên thấy mình đã đi xa thế nào." image="https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&w=1400&q=85" /><section className="section-pad bg-white"><div className="container-site"><div className="mb-12 flex flex-wrap gap-2">{filters.map((item)=><button key={item} onClick={()=>setFilter(item)} className={`focus-ring rounded-full px-5 py-3 text-xs font-semibold ${filter===item?'bg-ink text-white':'bg-paper text-ink/60'}`}>{item}</button>)}</div><div className="grid gap-x-6 gap-y-12 md:grid-cols-2">{items.map((item)=><VideoCard key={item.id} item={item} large />)}</div></div></section></>
}
