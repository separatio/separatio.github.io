import { Link, useLocation } from 'react-router'
import { useI18n, storeLang, type Lang } from '../../i18n/useI18n'
import styles from './LangSwitch.module.css'

const LANGS = ['en', 'ro'] as const satisfies readonly Lang[]

type LangSwitchProps = {
  /** Called after a language is picked — used to close the mobile menu. */
  onSelect?: () => void
}

/**
 * EN | RO segmented switch. Both entries are real links so they can be
 * right-clicked, opened in a new tab and followed by crawlers; the current
 * language points at the page you are already on.
 */
function LangSwitch({ onSelect }: LangSwitchProps) {
  const { lang, t, otherHref } = useI18n()
  const { pathname, search, hash } = useLocation()
  const currentHref = `${pathname}${search}${hash}`

  return (
    <div className={styles.group} role="group" aria-label={t.langSwitch.label}>
      {LANGS.map((code) => {
        const isCurrent = code === lang
        return (
          <Link
            key={code}
            to={isCurrent ? currentHref : otherHref}
            hrefLang={code}
            className={
              isCurrent ? `${styles.link} ${styles.current}` : styles.link
            }
            aria-current={isCurrent ? 'true' : undefined}
            onClick={() => {
              storeLang(code)
              onSelect?.()
            }}
          >
            {code.toUpperCase()}
          </Link>
        )
      })}
    </div>
  )
}

export default LangSwitch
