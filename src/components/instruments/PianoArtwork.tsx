import { useId } from 'react'
import type { InstrumentProduct } from '../../data/instruments'

// A deliberately labelled illustration, never presented as a manufacturer photograph.
export function PianoArtwork({ product, view = 0, className = '' }: { product: InstrumentProduct; view?: number; className?: string }) {
  const id = useId().replace(/:/g, '')
  const wood = product.finish === 'rosewood'
  const cabinet = product.shape !== 'portable'
  const blackKeys = Array.from({ length: 51 }, (_, index) => index).filter((index) => ![2, 6].includes(index % 7))

  return <svg viewBox="0 0 720 500" role="img" aria-label={`Hình minh họa ${product.name}${view === 1 ? ' nhìn từ trên' : view === 2 ? ' góc bàn phím' : ''}`} className={className}>
    <defs>
      <linearGradient id={`${id}-body`} x1="0" x2="0.7" y1="0" y2="1"><stop stopColor={wood ? '#625049' : '#4c4d4c'} /><stop offset="1" stopColor={wood ? '#302521' : '#1b1d1e'} /></linearGradient>
      <linearGradient id={`${id}-keys`} x1="0" x2="0" y1="0" y2="1"><stop stopColor="#fffef9" /><stop offset="1" stopColor="#d7d7d3" /></linearGradient>
      <radialGradient id={`${id}-shadow`}><stop stopColor="var(--color-ink)" stopOpacity=".16" /><stop offset="1" stopColor="var(--color-ink)" stopOpacity="0" /></radialGradient>
    </defs>
    <ellipse cx="360" cy="442" rx="292" ry="25" fill={`url(#${id}-shadow)`} />
    <g transform={view === 1 ? 'translate(0 120) scale(1 .6)' : view === 2 ? 'translate(-180 0) scale(1.5)' : undefined}>
      {view !== 1 && (cabinet ? <g fill={`url(#${id}-body)`} stroke={wood ? '#302521' : '#161819'} strokeWidth="2">
        <path d="M111 216 L137 215 L137 432 L111 443 Z" /><path d="M587 183 L611 181 L611 409 L587 419 Z" />
        <path d="M137 285 L587 255 L587 387 L137 417 Z" /><path d="M127 416 L594 385 L610 402 L111 439 Z" />
        <path d="M318 399 L365 396 L365 426 L318 429 Z" /><g fill="#a99568"><path d="M322 423 l9 -1 v16 l-9 1z" /><path d="M337 422 l9 -1 v16 l-9 1z" /><path d="M352 421 l9 -1 v16 l-9 1z" /></g>
      </g> : <g stroke="#282b2d" strokeWidth="15" strokeLinecap="round">
        <path d="M188 251 L526 425 M533 228 L207 444" /><path d="M173 448 L251 433 M486 435 L560 420" />
        <path d="M187 251 L526 425 M533 228 L207 444" stroke="#55595a" strokeWidth="3" /><circle cx="367" cy="338" r="12" fill="#333739" strokeWidth="3" />
      </g>)}
      {product.shape === 'clavinova' && <path d="M105 115 L600 81 L611 184 L100 220 Z" fill={`url(#${id}-body)`} stroke="#1b1d1e" strokeWidth="3" />}
      <path d="M86 191 L589 155 L636 207 L131 252 L81 225 Z" fill={`url(#${id}-body)`} stroke="#1b1d1e" strokeWidth="2" />
      <path d="M81 225 L131 252 L636 207 L636 245 L128 291 L81 259 Z" fill={wood ? '#332823' : '#202223'} />
      <path d="M128 269 L627 225 L627 238 L128 282 Z" fill={wood ? '#4d3930' : '#111516'} />
      <g transform="matrix(.94 -.079 .5 .68 117 216)">
        <rect width="510" height="47" rx="2" fill={`url(#${id}-keys)`} />
        {Array.from({ length: 51 }, (_, index) => <path key={index} d={`M${index * 10} 0 v47`} stroke="#979a98" strokeWidth=".7" />)}
        {blackKeys.map((index) => <rect key={index} x={index * 10 + 7} y="0" width="6" height="29" rx=".6" fill="#17191b" stroke="#474949" strokeWidth=".7" />)}
      </g>
      <path d="M297 174 L280 96 L419 86 L440 164 Z" fill="#343636" stroke="#565959" strokeWidth="2" />
      <path d="M283 177 L451 165 L451 171 L283 184 Z" fill="#151819" />
      <g fill="#939694"><circle cx="138" cy="203" r="3" /><circle cx="151" cy="202" r="2" /><path d="M163 199 l32 -2 v3 l-32 2z" /></g>
      <path d="M97 249 L122 263" stroke="#646769" strokeWidth="2" />
    </g>
  </svg>
}
