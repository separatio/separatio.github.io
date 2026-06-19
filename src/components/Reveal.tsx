import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Reveal.module.css'

type RevealProps = {
  children: ReactNode
  /** Semantic element to render. Defaults to a <div>. */
  as?: ElementType
  /** Stagger delay in ms applied to the reveal transition. */
  delay?: number
  className?: string
  id?: string
}

/**
 * Wraps content in a scroll-revealed element (fade + small lift). Visibility is
 * the default state — see useReveal — so content is never stuck hidden if JS or
 * the observer doesn't run, and the global `[data-reveal]` reduced-motion rule
 * forces the end-state visible. The reveal is purely an enhancement.
 */
function Reveal({ children, as, delay = 0, className, id }: RevealProps) {
  const Tag: ElementType = as ?? 'div'
  const { ref, revealed } = useReveal<HTMLElement>()

  const cls = [styles.reveal, revealed ? styles.revealed : '', className]
    .filter(Boolean)
    .join(' ')

  const style =
    delay > 0
      ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties)
      : undefined

  return (
    <Tag ref={ref} id={id} data-reveal="" className={cls} style={style}>
      {children}
    </Tag>
  )
}

export default Reveal
