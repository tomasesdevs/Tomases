import { APP_NAME } from '@/constants/app'
import { Link } from '@/components/common/NavLink'
import './Header.css'

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand">
          {APP_NAME}
        </Link>
        <nav className="site-header__nav" aria-label="Principal">
          <Link to="/">Inicio</Link>
        </nav>
      </div>
    </header>
  )
}
