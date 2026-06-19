import { useEffect } from 'react'
import { useLocation } from 'react-router'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Scrolls the element matching `location.hash` into view whenever the
 * location changes. Handles the case where the target is not yet rendered
 * (e.g. navigating from /writing to /#about) by retrying with rAF.
 * Respects prefers-reduced-motion: uses 'instant' behavior when set.
 */
export function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    const { hash } = location
    if (!hash) return

    const id = hash.slice(1) // strip leading '#'
    const behavior: ScrollBehavior = prefersReducedMotion() ? 'instant' : 'smooth'

    function scrollTo() {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior })
        return true
      }
      return false
    }

    // First attempt — element may already be in the DOM
    if (scrollTo()) return

    // Retry once after the next paint (handles cross-route navigation where
    // the landing sections are mounted asynchronously)
    const raf = requestAnimationFrame(() => {
      scrollTo()
    })
    return () => cancelAnimationFrame(raf)
  }, [location])
}
