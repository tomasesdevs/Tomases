/**
 * Enlace de navegación. Cuando agregues react-router-dom,
 * reemplazá este componente por NavLink/Link de react-router.
 */
export function Link({ to, className, children, ...props }) {
  const href = to === '/' ? '#' : to

  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  )
}
