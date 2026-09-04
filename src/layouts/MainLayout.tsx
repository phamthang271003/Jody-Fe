import { Outlet, useLocation } from 'react-router-dom'
import { BookingModal } from '../components/layout/BookingModal'
import { ContactFloating } from '../components/layout/ContactFloating'
import { Footer } from '../components/layout/Footer'
import { FooterTrialCta } from '../components/layout/FooterTrialCta'
import { Header } from '../components/layout/Header'
import { ScrollToTop } from '../components/common/ScrollToTop'

export function MainLayout() {
  const { pathname } = useLocation()
  const hasPageTrialCta = pathname === '/programs/hoc-tai-trung-tam'

  return <><ScrollToTop /><Header /><main><Outlet /></main>{!hasPageTrialCta && <FooterTrialCta />}<Footer /><BookingModal /><ContactFloating /></>
}
