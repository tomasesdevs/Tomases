import { APP_NAME } from '@/constants/app'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          © {year} {APP_NAME}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
