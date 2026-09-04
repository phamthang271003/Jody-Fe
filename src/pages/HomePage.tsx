import { useSeo } from '../hooks/useSeo'
import { HomeHero } from '../components/home/HomeHero'
import { CoursesSection } from '../components/home/HomeDiscovery'
import { AnnualShowcaseSection } from '../components/home/AnnualShowcaseSection'
import { CampusContactSection } from '../components/home/CampusContactSection'
import { CertificateSection } from '../components/home/CertificateSection'
import { WhyUsSection } from '../components/home/HomeExperience'
import { BlogSection, EventsSection, FAQSection, PerformancesSection, TestimonialsSection } from '../components/home/HomeCommunity'

export default function HomePage() {
  useSeo({ title: 'Học nhạc theo cách của riêng bạn', description: 'Trung tâm âm nhạc hiện đại tại TP.HCM với lộ trình cá nhân hóa cho trẻ em và người lớn.' })
  return <><HomeHero /><CoursesSection /><WhyUsSection /><TestimonialsSection /><AnnualShowcaseSection /><PerformancesSection /><EventsSection /><CertificateSection /><FAQSection /><BlogSection /><CampusContactSection /></>
}
