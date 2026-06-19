import EyebrowRule from '../components/EyebrowRule'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { experience } from '../content/experience'
import styles from './Experience.module.css'

function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.wrap}>
        <EyebrowRule label="EXPERIENCE" />

        <ol className={styles.timeline} role="list">
          {experience.map((entry, i) => (
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
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Experience
