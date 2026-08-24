import CornerMarks from '../components/CornerMarks'
import Button from '../components/Button'
import { useI18n } from '../i18n/useI18n'
import styles from './Hero.module.css'

/**
 * Top-of-page hero. Framed by CornerMarks. Lines fade-up on load with a
 * staggered animation-delay (eyebrow → name → role → subhead → tagline → CTAs).
 * Under prefers-reduced-motion the animation is removed and every line renders
 * in its final, fully-visible state — see the reduced-motion block.
 *
 * The name is the h1 and the job title below it is a plain `<p>`, not an h2:
 * it is a role descriptor with nothing nested under it, and an h2 here would
 * make it a sibling of the four section headings. Outline stays 1×h1 + 4×h2.
 */
function Hero() {
  const { t, path } = useI18n()

  return (
    <section className={styles.hero}>
      <CornerMarks />
      <div className={styles.inner}>
        <span className={`eyebrow ${styles.line} ${styles.eyebrow}`}>
          {t.hero.eyebrow}
        </span>

        <h1 className={`display ${styles.line} ${styles.name}`}>
          {t.hero.name}
        </h1>

        <p className={`${styles.line} ${styles.role}`}>{t.hero.headline}</p>

        <p className={`${styles.line} ${styles.subhead}`}>{t.hero.meta}</p>

        <p className={`${styles.line} ${styles.tagline}`}>{t.hero.tagline}</p>

        <div className={`${styles.line} ${styles.ctas}`}>
          <Button href="/alex-radulescu-cv.pdf" download>
            {t.hero.downloadCv}
          </Button>
          <Button to={path('/writing')}>{t.hero.readWriting}</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
