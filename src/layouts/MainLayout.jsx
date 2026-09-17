import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import './MainLayout.css'

export function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-layout__content">{children}</main>
      <Footer />
    </div>
  )
}
