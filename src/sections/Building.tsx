import EyebrowRule from '../components/EyebrowRule'
import Reveal from '../components/Reveal'
import { useI18n } from '../i18n/useI18n'
import type { BuildingCard } from '../i18n/types'
import styles from './Building.module.css'

function Card({ card, github }: { card: BuildingCard; github: string }) {
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
        {card.url ? (
          <span className={styles.url}>{card.url}</span>
        ) : (
          <span className={styles.tag}>{card.tag}</span>
        )}
        <p className={styles.desc}>{card.description}</p>
        <span className={styles.cta} aria-hidden="true">
          {card.cta ?? github}
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
  const { t } = useI18n()

  return (
    <section id="building" className={styles.section}>
      <div className={styles.wrap}>
        <EyebrowRule label={t.building.eyebrow} />
        <div className={styles.grid}>
          {t.building.cards.map((card, i) => (
            <Reveal key={card.index} delay={i * 80}>
              <Card card={card} github={t.building.github} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Building
