import EyebrowRule from '../components/EyebrowRule'
import Reveal from '../components/Reveal'
import { useI18n } from '../i18n/useI18n'
import type { ContactRow } from '../i18n/types'
import styles from './Contact.module.css'

function RowValue({ row }: { row: ContactRow }) {
  if ('href' in row && row.href) {
    const external = 'external' in row && row.external
    return (
      <a
        className={styles.value}
        href={row.href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {row.value}
      </a>
    )
  }
  return <span className={styles.value}>{row.value}</span>
}

function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <EyebrowRule label={t.contact.eyebrow} />
        {/* Romanian opens with a line of copy; English leaves this blank. */}
        {t.contact.intro && (
          <Reveal as="p" className={styles.intro}>
            {t.contact.intro}
          </Reveal>
        )}
        <Reveal as="dl" className={styles.rows}>
          {t.contact.rows.map((row) => (
            <div key={row.label} className={styles.row}>
              <dt className={styles.label}>{row.label}</dt>
              <dd className={styles.valueCell}>
                <RowValue row={row} />
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
