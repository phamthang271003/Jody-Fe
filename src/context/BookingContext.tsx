import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

interface BookingContextValue {
  isOpen: boolean
  preferredCourse: string
  openBooking: (course?: string) => void
  closeBooking: () => void
}

const BookingContext = createContext<BookingContextValue | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [preferredCourse, setPreferredCourse] = useState('')
  const openBooking = useCallback((course = '') => { setPreferredCourse(course); setIsOpen(true) }, [])
  const closeBooking = useCallback(() => setIsOpen(false), [])
  const value = useMemo(() => ({ isOpen, preferredCourse, openBooking, closeBooking }), [isOpen, preferredCourse, openBooking, closeBooking])
  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBooking() {
  const value = useContext(BookingContext)
  if (!value) throw new Error('useBooking must be used inside BookingProvider')
  return value
}
