import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Scroll-reveal via IntersectionObserver. Returns a ref to attach to the target
 * and a `revealed` flag.
 *
 * Safety contract (load-bearing): the *default* state is revealed/visible. The
 * hook only arms a hidden start-state when it can confirm three things in an
 * effect: the browser supports IntersectionObserver, the user has not requested
 * reduced motion, and the element is mounted. If JS never runs, the observer is
 * unsupported, or reduced motion is on, content stays visible — the reveal is a
 * progressive enhancement, never a gate.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)
  // Default: visible. We only flip to false if we can actually observe.
  const [revealed, setRevealed] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) return
    if (typeof IntersectionObserver === 'undefined') return

    // Arm the hidden start-state now that we know we can reveal it back.
    //
    // set-state-in-effect is correct as a general rule and wrong here. The
    // whole safety contract above depends on this flip happening *after* the
    // three runtime checks, one of which reads ref.current — so it cannot move
    // into render without defaulting to hidden, which is the failure mode the
    // contract exists to prevent (content stuck invisible when JS or the
    // observer never runs). One extra render on mount is the price.
    // eslint-disable-next-line react-hooks/set-state-in-effect, react-x/set-state-in-effect
    setRevealed(false)

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true)
            obs.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, revealed }
}
