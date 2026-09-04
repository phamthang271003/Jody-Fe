import { EventCard } from '../components/cards/EventCard'
import { PageHero } from '../components/common/PageHero'
import { events } from '../data/events'
import { useSeo } from '../hooks/useSeo'

export default function EventsPage() {
  useSeo({ title: 'Hoạt động & sự kiện', description: 'Recital, concert, workshop và jam session của cộng đồng Jody Music.' })
  return <><PageHero eyebrow="Live & together" title="Âm nhạc cần một nơi để cất lên." description="Từ recital ấm cúng đến concert cuối năm, mỗi sân khấu là cơ hội để học viên chia sẻ hành trình và thuộc về một cộng đồng." image={events[0].image} /><section className="section-pad bg-white"><div className="container-site"><div className="grid gap-5 lg:grid-cols-2">{events.map((event,index)=><EventCard key={event.slug} event={event} featured={index===0 || index===3} />)}</div></div></section></>
}
