import { Link, type To } from 'react-router'
import type { ReactNode } from 'react'
import styles from './Button.module.css'

type BaseProps = {
  children: ReactNode
  className?: string
}

/** Renders an `<a>` — pass `href` (and optionally `download`). */
type AnchorProps = BaseProps & {
  href: string
  download?: boolean | string
  to?: never
}

/** Renders a react-router `<Link>` — pass `to`. */
type LinkProps = BaseProps & {
  to: To
  href?: never
  download?: never
}

type ButtonProps = AnchorProps | LinkProps

/**
 * Bordered gold CTA. Polymorphic via a discriminated union: `href` renders an
 * anchor (supporting `download`), `to` renders a react-router Link. The two are
 * mutually exclusive at the type level.
 */
function Button(props: ButtonProps) {
  const className = props.className
    ? `${styles.button} ${props.className}`
    : styles.button

  if ('href' in props && props.href !== undefined) {
    const { href, download, children } = props
    return (
      <a className={className} href={href} download={download}>
        {children}
      </a>
    )
  }

  const { to, children } = props
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  )
}

export default Button
