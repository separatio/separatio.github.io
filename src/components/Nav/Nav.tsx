import { useState, useEffect, useCallback, useId } from 'react'
import { Link, NavLink } from 'react-router'
import styles from './Nav.module.css'

const ANCHOR_LINKS = [
  { label: 'ABOUT', href: '/#about' },
  { label: 'BUILDING', href: '/#building' },
  { label: 'EXPERIENCE', href: '/#experience' },
  { label: 'CONTACT', href: '/#contact' },
] as const

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line
            x1="4"
            y1="4"
            x2="18"
            y2="18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="18"
            y1="4"
            x2="4"
            y2="18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <line
            x1="3"
            y1="6"
            x2="19"
            y2="6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="3"
            y1="11"
            x2="19"
            y2="11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="3"
            y1="16"
            x2="19"
            y2="16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  )
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, closeMenu])

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary navigation">
        {/* Wordmark */}
        <Link to="/" className={styles.wordmark} onClick={closeMenu}>
          AR
        </Link>

        {/* Desktop links */}
        <ul className={styles.desktopLinks} role="list">
          {ANCHOR_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={styles.navLink}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <NavLink
              to="/writing"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              WRITING
            </NavLink>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={styles.hamburger}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <ul
        id={menuId}
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        role="list"
        aria-hidden={!menuOpen}
      >
        {ANCHOR_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className={styles.mobileLink} onClick={closeMenu}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <NavLink
            to="/writing"
            className={({ isActive }) =>
              isActive
                ? `${styles.mobileLink} ${styles.active}`
                : styles.mobileLink
            }
            onClick={closeMenu}
          >
            WRITING
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Nav
