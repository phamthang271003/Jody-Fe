import { Link } from 'react-router-dom'
import jodyMusicLogo from '../../../35f911b2-2cfc-4cb5-b97b-c3261455eadd.png'

export function Logo({ inverse = false, large = false }: { inverse?: boolean; large?: boolean }) {
  return (
    <Link to="/" className="focus-ring group inline-flex shrink-0 items-center" aria-label="Jody Music - Trang chủ">
      <img
        src={jodyMusicLogo}
        alt=""
        className={`shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.03] ${inverse ? '' : 'logo-on-light'} ${large ? 'h-16 w-16 lg:h-[4.5rem] lg:w-[4.5rem]' : 'h-12 w-12'}`}
      />
    </Link>
  )
}
