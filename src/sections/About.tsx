import EyebrowRule from '../components/EyebrowRule'
import Reveal from '../components/Reveal'
import styles from './About.module.css'

const PRINCIPLES = [
  'Quality as defect prevention',
  'High agency, full ownership',
  'Productive when the path is unclear',
]

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.wrap}>
        <EyebrowRule label="ABOUT" />
        <Reveal className={styles.grid}>
          <ul className={styles.chips} role="list">
            {PRINCIPLES.map((p) => (
              <li key={p} className={styles.chip}>
                {p}
              </li>
            ))}
          </ul>
          <div className={styles.bodyCol}>
            <p className={styles.body}>
              I&apos;m a builder and operator with 10+ years in software
              quality, and I treat quality as defect prevention rather than test
              execution — designing systems so the bug never ships, not just
              catching it afterward. Today I build and run multi-tenant SaaS,
              multi-agent orchestrators, and family-facing AI tooling end to
              end, with Claude Code as my execution layer. I move best where the
              path is unclear: high agency, full ownership, and a bias toward
              shipping. More than software — I care about the system the
              software lives in.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
