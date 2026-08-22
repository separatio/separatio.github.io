import EyebrowRule from '../components/EyebrowRule'
import Reveal from '../components/Reveal'
import { useI18n } from '../i18n/useI18n'
import styles from './About.module.css'

function About() {
  const { t } = useI18n()

  return (
    <section id="about" className={styles.section}>
      <div className={styles.wrap}>
        <EyebrowRule label={t.about.eyebrow} />
        <Reveal className={styles.grid}>
          <ul className={styles.chips} role="list">
            {t.about.principles.map((p) => (
              <li key={p} className={styles.chip}>
                {p}
              </li>
            ))}
          </ul>
          <div className={styles.bodyCol}>
            <p className={styles.body}>{t.about.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
