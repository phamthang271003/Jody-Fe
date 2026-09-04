import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'light' | 'ghost' | 'inverse'
const styles: Record<Variant, string> = {
  primary: 'bg-primary text-ink hover:bg-primary-hover', secondary: 'bg-accent text-ink hover:bg-primary-hover',
  light: 'bg-white text-ink hover:bg-soft-yellow', ghost: 'border border-ink/20 text-ink hover:border-primary-hover hover:bg-soft-yellow',
  inverse: 'border border-white/35 text-white hover:border-white hover:bg-white hover:text-ink',
}

interface ActionButtonProps { children: ReactNode; variant?: Variant; className?: string; arrow?: boolean }

export function Button({ children, variant = 'primary', className = '', arrow = false, ...props }: ActionButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`button-motion focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold ${variant === 'primary' ? 'button-shine' : ''} ${styles[variant]} ${className}`} {...props}>{children}{arrow && <ArrowUpRight className="button-arrow" size={17} />}</button>
}

export function ButtonLink({ children, to, variant = 'primary', className = '', arrow = false }: ActionButtonProps & { to: string }) {
  return <Link to={to} className={`button-motion focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold ${variant === 'primary' ? 'button-shine' : ''} ${styles[variant]} ${className}`}>{children}{arrow && <ArrowUpRight className="button-arrow" size={17} />}</Link>
}
