import CornerMarks from '../components/CornerMarks'
import Button from '../components/Button'
import styles from './Hero.module.css'

/**
 * Top-of-page hero. Framed by CornerMarks. Lines fade-up on load with a
 * staggered animation-delay (eyebrow → headline → name → subhead → tagline →
 * CTAs). Under prefers-reduced-motion the animation is removed and every line
 * renders in its final, fully-visible state — see the reduced-motion block.
 */
function Hero() {
  return (
    <section className={styles.hero}>
      <CornerMarks />
      <div className={styles.inner}>
        <span className={`eyebrow ${styles.line} ${styles.eyebrow}`}>
          SQA &amp; AUTOMATION SRL
        </span>

        <h1 className={`display ${styles.line} ${styles.headline}`}>
          AI-FIRST BUILDER &amp; OPERATOR
        </h1>

        <p className={`${styles.line} ${styles.name}`}>ALEX RĂDULESCU</p>

        <p className={`${styles.line} ${styles.subhead}`}>
          10+ yrs in software quality · Building SaaS + agent infrastructure
          with Claude Code
        </p>

        <p className={`${styles.line} ${styles.tagline}`}>
          More than software.
        </p>

        <div className={`${styles.line} ${styles.ctas}`}>
          <Button href="/alex-radulescu-cv.pdf" download>
            Download CV
          </Button>
          <Button to="/writing">Read the writing</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
