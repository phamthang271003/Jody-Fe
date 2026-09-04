import { Check } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../components/common/Button'
import { PageHero } from '../components/common/PageHero'
import { pricingPackages } from '../data/content'
import { useBooking } from '../context/BookingContext'
import { useSeo } from '../hooks/useSeo'
import { formatCurrency } from '../utils/format'

const modes = [
  { id: 'one', name: 'Cá nhân 1:1', note: 'Tiến độ nhanh nhất', multiplier: 1 },
  { id: 'group', name: 'Lớp nhóm nhỏ', note: '2–5 học viên', multiplier: .72 },
  { id: 'home', name: 'Gia sư tại nhà', note: 'Linh hoạt tối đa', multiplier: 1.35 },
]

export default function PricingPage() {
  const [mode, setMode] = useState(modes[0]); const { openBooking } = useBooking()
  useSeo({ title: 'Học phí minh bạch', description: 'Tham khảo học phí lớp cá nhân, lớp nhóm và gia sư tại nhà tại Jody Music.' })
  return <><PageHero eyebrow="Transparent pricing" title="Đầu tư cho một hành trình dài." description="Học phí rõ ràng, nhiều lựa chọn linh hoạt và không có chi phí ẩn. Mức chính xác được xác nhận sau buổi đánh giá đầu vào." /><section className="section-pad bg-white"><div className="container-site"><div className="mx-auto mb-12 grid max-w-3xl gap-2 rounded-2xl bg-paper p-2 sm:grid-cols-3">{modes.map((item) => <button key={item.id} onClick={() => setMode(item)} className={`focus-ring rounded-xl p-4 text-left transition ${mode.id === item.id ? 'bg-ink text-white shadow-lg' : 'text-ink'}`}><b className="block text-sm">{item.name}</b><span className={`mt-1 block text-xs ${mode.id === item.id ? 'text-white/50' : 'text-ink/45'}`}>{item.note}</span></button>)}</div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{pricingPackages.map((pack) => <article key={pack.sessions} className={`relative flex flex-col rounded-[1.5rem] border p-6 ${pack.featured ? 'border-primary-hover bg-soft-yellow text-ink shadow-xl lg:-translate-y-4' : 'border-ink/12 bg-paper text-ink'}`}>{pack.featured && <span className="mb-6 self-start rounded-full bg-primary px-3 py-2 text-[.6rem] font-bold uppercase tracking-wider text-ink">Được chọn nhiều nhất</span>}<p className={`eyebrow ${pack.featured ? 'text-ink/55' : 'text-ink/40'}`}>{mode.name}</p><h2 className="mt-4 font-display text-5xl font-semibold">{pack.sessions}<small className="ml-2 font-sans text-xs font-medium opacity-50">buổi</small></h2><p className="mt-7 font-display text-3xl font-semibold">{formatCurrency(Math.round(pack.price * mode.multiplier / 10000) * 10000)}</p><p className="mt-2 text-xs opacity-50">≈ {formatCurrency(Math.round(pack.pricePerSession * mode.multiplier / 10000) * 10000)} / buổi</p>{pack.discount && <p className={`mt-4 text-xs font-bold text-primary-hover`}>{pack.discount}</p>}<ul className="my-8 space-y-3 text-sm opacity-75">{['Đánh giá đầu vào', 'Lộ trình cá nhân hóa', 'Báo cáo tiến độ', pack.sessions >= 24 ? 'Video biểu diễn cuối kỳ' : 'Mini performance'].map((text) => <li className="flex gap-2" key={text}><Check size={16} className="shrink-0" />{text}</li>)}</ul><Button onClick={() => openBooking()} variant="primary" className="mt-auto w-full">Chọn gói này</Button></article>)}</div><p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-6 text-ink/45">* Học phí minh họa cho các môn phổ thông, có thể thay đổi theo bộ môn, trình độ và cơ sở. Mọi mức phí được xác nhận minh bạch trước khi đăng ký.</p></div></section></>
}
