import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, Music2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { useSeo } from '../hooks/useSeo'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  useSeo({ title: 'Đăng nhập học viên', description: 'Đăng nhập cổng học viên DẤU LẶNG Music Academy.' })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return <section className="min-h-screen bg-paper pb-20 pt-36 md:pt-44">
    <div className="container-site">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-[0_30px_100px_rgba(16,24,47,.12)] lg:grid-cols-[.9fr_1.1fr]">
        <div className="noise staff-lines relative hidden min-h-[42rem] overflow-hidden bg-ink p-10 text-white lg:flex lg:flex-col">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[2.5rem] border-iris/50" />
          <span className="grid h-12 w-12 place-items-center rounded-full bg-lime text-ink"><Music2 size={20} /></span>
          <div className="relative mt-auto">
            <p className="eyebrow text-tangerine">Student Portal</p>
            <h1 className="display mt-6 text-6xl">Hành trình của bạn, trong một nhịp nhìn.</h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">Xem lịch học, báo cáo tiến độ, bài tập và những cột mốc biểu diễn của riêng bạn.</p>
            <div className="mt-9 flex items-center gap-3 border-t border-white/15 pt-6 text-xs text-white/40"><span className="flex gap-1">{[1, 2, 3, 4, 5].map((item) => <i key={item} className="h-5 w-1 rounded-full bg-tangerine" />)}</span>Learn · Practice · Perform</div>
          </div>
        </div>

        <div className="flex min-h-[38rem] items-center p-6 sm:p-10 lg:p-14">
          {submitted ? <div className="w-full text-center">
            <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-lime text-3xl text-ink">✓</span>
            <p className="eyebrow mt-8 text-iris">Giao diện thử nghiệm</p>
            <h1 className="display mt-4 text-5xl text-ink">Sẵn sàng kết nối backend.</h1>
            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-ink/55">Form đăng nhập đã hoàn chỉnh về giao diện. API xác thực sẽ được kết nối với Spring Boot ở bước tiếp theo.</p>
            <Button onClick={() => setSubmitted(false)} className="mt-8">Quay lại đăng nhập</Button>
          </div> : <div className="w-full">
            <p className="eyebrow text-iris">Chào mừng trở lại</p>
            <h1 className="display mt-5 text-5xl text-ink sm:text-6xl">Đăng nhập.</h1>
            <p className="mt-5 text-sm leading-7 text-ink/55">Truy cập lịch học, tài liệu và báo cáo tiến độ của bạn.</p>
            <form onSubmit={handleSubmit} className="mt-9 space-y-5">
              <label className="block"><span className="mb-2 block text-xs font-semibold text-ink/60">Email hoặc số điện thoại</span><span className="relative block"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/35" size={18} /><input type="text" required autoComplete="username" className="focus-ring h-13 w-full rounded-xl border border-ink/15 bg-paper pl-12 pr-4 text-sm" placeholder="hello@example.com" /></span></label>
              <label className="block"><span className="mb-2 block text-xs font-semibold text-ink/60">Mật khẩu</span><span className="relative block"><LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/35" size={18} /><input type={showPassword ? 'text' : 'password'} required autoComplete="current-password" className="focus-ring h-13 w-full rounded-xl border border-ink/15 bg-paper pl-12 pr-12 text-sm" placeholder="Nhập mật khẩu" /><button type="button" onClick={() => setShowPassword((value) => !value)} className="focus-ring absolute right-4 top-1/2 -translate-y-1/2 text-ink/40 hover:text-iris" aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></span></label>
              <div className="flex items-center justify-between gap-4 text-xs"><label className="flex items-center gap-2 text-ink/55"><input type="checkbox" className="accent-iris" />Ghi nhớ đăng nhập</label><a href="#" className="focus-ring font-semibold text-iris hover:underline">Quên mật khẩu?</a></div>
              <Button type="submit" className="w-full">Đăng nhập <ArrowRight size={17} /></Button>
            </form>
            <p className="mt-7 text-center text-xs text-ink/50">Chưa có tài khoản? <Link to="/contact" className="focus-ring font-semibold text-iris hover:underline">Liên hệ học vụ</Link></p>
          </div>}
        </div>
      </div>
    </div>
  </section>
}
