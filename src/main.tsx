import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { BookingProvider } from './context/BookingContext'
import { AppRoutes } from './routes/AppRoutes'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <BookingProvider>
        <AppRoutes />
      </BookingProvider>
    </BrowserRouter>
  </StrictMode>,
)
