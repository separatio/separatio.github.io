import EyebrowRule from '../components/EyebrowRule'
import Reveal from '../components/Reveal'
import { building, type BuildingCard } from '../content/building'
import styles from './Building.module.css'

function Card({ card }: { card: BuildingCard }) {
  // The union discriminant is the privacy guardrail: only a `named` card can
  // render a project name + outbound link. `quiet` cards have neither field.
  if (card.kind === 'named') {
    return (
      <a
        className={`${styles.card} ${styles.cardLink}`}
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.index}>{card.index}</span>
        <span className={styles.name}>{card.name}</span>
        <span className={styles.tag}>{card.tag}</span>
        <p className={styles.desc}>{card.description}</p>
        <span className={styles.cta} aria-hidden="true">
          GITHUB ↗
        </span>
      </a>
    )
  }

  return (
    <div className={styles.card}>
      <span className={styles.index}>{card.index}</span>
      <span className={styles.label}>{card.label}</span>
      <p className={styles.desc}>{card.sentence}</p>
    </div>
  )
}

function Building() {
  return (
    <section id="building" className={styles.section}>
      <div className={styles.wrap}>
        <EyebrowRule label="WHAT I'M BUILDING" />
        <div className={styles.grid}>
          {building.map((card, i) => (
            <Reveal key={card.index} delay={i * 80}>
              <Card card={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Building
