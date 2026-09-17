import { APP_NAME } from '@/constants/app'
import './Home.css'

export default function Home() {
  return (
    <section className="home">
      <p className="home__eyebrow">Startup</p>
      <h1 className="home__title">Bienvenido a {APP_NAME}</h1>
      <p className="home__lead">
        Base del proyecto con React, Vite y JSX. Desde acá podés construir
        pantallas en <code>src/pages</code> y componentes reutilizables en{' '}
        <code>src/components</code>.
      </p>
    </section>
  )
}
