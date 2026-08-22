import CornerMarks from '../components/CornerMarks'
import Button from '../components/Button'
import { useI18n } from '../i18n/useI18n'
import styles from './Hero.module.css'

/**
 * Top-of-page hero. Framed by CornerMarks. Lines fade-up on load with a
 * staggered animation-delay (eyebrow → headline → name → subhead → tagline →
 * CTAs). Under prefers-reduced-motion the animation is removed and every line
 * renders in its final, fully-visible state — see the reduced-motion block.
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

        <h1 className={`display ${styles.line} ${styles.headline}`}>
          {t.hero.headline}
        </h1>

        <p className={`${styles.line} ${styles.name}`}>{t.hero.name}</p>

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
