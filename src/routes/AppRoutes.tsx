import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'

const HomePage = lazy(() => import('../pages/HomePage'))
const TrainingProgramsPage = lazy(() => import('../pages/TrainingProgramsPage'))
const InstrumentsPage = lazy(() => import('../pages/InstrumentsPage'))
const CourseDetailPage = lazy(() => import('../pages/CourseDetailPage'))
const TeachersPage = lazy(() => import('../pages/TeachersPage'))
const TeacherDetailPage = lazy(() => import('../pages/TeacherDetailPage'))
const PricingPage = lazy(() => import('../pages/PricingPage'))
const StudentsPage = lazy(() => import('../pages/StudentsPage'))
const EventsPage = lazy(() => import('../pages/EventsPage'))
const EventDetailPage = lazy(() => import('../pages/EventDetailPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const BlogPage = lazy(() => import('../pages/BlogPage'))
const BlogDetailPage = lazy(() => import('../pages/BlogDetailPage'))
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

function RouteLoader() {
  return <div className="grid min-h-screen place-items-center bg-paper" role="status"><div className="text-center"><span className="mx-auto block h-12 w-12 animate-spin rounded-full border-2 border-ink/15 border-t-iris" /><p className="eyebrow mt-5 text-ink/40">Đang lên dây...</p></div></div>
}

export function AppRoutes() {
  return <Suspense fallback={<RouteLoader />}><Routes><Route element={<MainLayout />}><Route path="/" element={<HomePage />} /><Route path="/programs" element={<Navigate to="/programs/hoc-tai-trung-tam" replace />} /><Route path="/programs/hoc-tai-trung-tam" element={<TrainingProgramsPage />} /><Route path="/instruments" element={<InstrumentsPage />} /><Route path="/courses" element={<Navigate to="/programs/hoc-tai-trung-tam" replace />} /><Route path="/courses/:slug" element={<CourseDetailPage />} /><Route path="/teachers" element={<TeachersPage />} /><Route path="/teachers/:slug" element={<TeacherDetailPage />} /><Route path="/pricing" element={<PricingPage />} /><Route path="/students" element={<StudentsPage />} /><Route path="/events" element={<EventsPage />} /><Route path="/events/:slug" element={<EventDetailPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/blog" element={<BlogPage />} /><Route path="/blog/:slug" element={<BlogDetailPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/login" element={<LoginPage />} /><Route path="/privacy-policy" element={<PrivacyPage />} /><Route path="/404" element={<NotFoundPage />} /><Route path="*" element={<Navigate to="/404" replace />} /></Route></Routes></Suspense>
}
