import EyebrowRule from '../components/EyebrowRule'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { useI18n } from '../i18n/useI18n'
import styles from './Experience.module.css'

function Experience() {
  const { t } = useI18n()

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.wrap}>
        <EyebrowRule label={t.experience.eyebrow} />

        <ol className={styles.timeline} role="list">
          {t.experience.entries.map((entry, i) => (
            <Reveal
              as="li"
              key={entry.dates + entry.role}
              delay={i * 60}
              className={styles.entry}
            >
              <span className={styles.node} aria-hidden="true" />
              <div className={styles.head}>
                <span className={styles.dates}>{entry.dates}</span>
                <span className={styles.role}>
                  {entry.role}
                  {entry.company ? (
                    <span className={styles.company}>, {entry.company}</span>
                  ) : null}
                </span>
              </div>
              <p className={styles.accomplishment}>{entry.accomplishment}</p>
            </Reveal>
          ))}
        </ol>

        <div className={styles.cta}>
          <Button href="/alex-radulescu-cv.pdf" download>
            {t.experience.downloadCv}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Experience
