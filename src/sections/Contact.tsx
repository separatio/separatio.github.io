import EyebrowRule from '../components/EyebrowRule'
import Reveal from '../components/Reveal'
import { contact, type ContactRow } from '../content/contact'
import styles from './Contact.module.css'

function RowValue({ row }: { row: ContactRow }) {
  if ('href' in row && row.href) {
    const external = 'external' in row && row.external
    return (
      <a
        className={styles.value}
        href={row.href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {row.value}
      </a>
    )
  }
  return <span className={styles.value}>{row.value}</span>
}

function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <EyebrowRule label="CONTACT" />
        <Reveal as="dl" className={styles.rows}>
          {contact.map((row) => (
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
