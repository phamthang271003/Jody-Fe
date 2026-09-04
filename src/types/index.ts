export interface Course {
  slug: string
  name: string
  category: string
  shortName: string
  description: string
  longDescription: string
  image: string
  audience: string[]
  levels: string[]
  age: string
  format: string
  sessions: number
  duration: string
  priceFrom: number
  badge?: string
  outcomes: string[]
  curriculum: string[]
}

export interface Teacher {
  slug: string
  name: string
  role: string
  instruments: string[]
  experience: string
  certificate: string
  education: string
  image: string
  quote: string
}

export interface StudentPerformance {
  id: number
  student: string
  course: string
  song: string
  teacher: string
  image: string
}

export interface MusicEvent {
  slug: string
  title: string
  category: string
  date: string
  rawDate: string
  location: string
  description: string
  image: string
}

export interface Testimonial {
  id: number
  name: string
  type: 'Học viên' | 'Phụ huynh'
  course: string
  content: string
  avatar: string
  rating: number
}

export interface FAQ {
  question: string
  answer: string
}

export interface PricingPackage {
  sessions: number
  price: number
  pricePerSession: number
  discount?: string
  featured?: boolean
}
