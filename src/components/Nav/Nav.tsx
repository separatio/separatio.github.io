import { useState, useEffect, useCallback, useId } from 'react'
import { Link, NavLink } from 'react-router'
import { useI18n } from '../../i18n/useI18n'
import LangSwitch from './LangSwitch'
import styles from './Nav.module.css'

/** Section ids on the landing page — also the `t.nav` keys for their labels. */
const ANCHOR_IDS = ['about', 'building', 'experience', 'contact'] as const

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
  const { t, path } = useI18n()

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, closeMenu])

  const anchorLinks = ANCHOR_IDS.map((id) => ({
    id,
    label: t.nav[id],
    href: `${path('/')}#${id}`,
  }))

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label={t.nav.primaryLabel}>
        {/* Wordmark */}
        <Link to={path('/')} className={styles.wordmark} onClick={closeMenu}>
          AR
        </Link>

        {/* Desktop links */}
        <ul className={styles.desktopLinks} role="list">
          {anchorLinks.map(({ id, label, href }) => (
            <li key={id}>
              <a href={href} className={styles.navLink}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <NavLink
              to={path('/writing')}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              {t.nav.writing}
            </NavLink>
          </li>
          <li className={styles.navLangDesktop}>
            <LangSwitch onSelect={closeMenu} />
          </li>
        </ul>

        {/* Language switch, mobile only — fills the middle of the bar */}
        <div className={styles.navLangMobile}>
          <LangSwitch onSelect={closeMenu} />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={styles.hamburger}
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((prev) => !prev)}
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
        {anchorLinks.map(({ id, label, href }) => (
          <li key={id}>
            <a href={href} className={styles.mobileLink} onClick={closeMenu}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <NavLink
            to={path('/writing')}
            className={({ isActive }) =>
              isActive
                ? `${styles.mobileLink} ${styles.active}`
                : styles.mobileLink
            }
            onClick={closeMenu}
          >
            {t.nav.writing}
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Nav
