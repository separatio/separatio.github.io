import styles from './EyebrowRule.module.css'

type EyebrowRuleProps = {
  label: string
}

/**
 * Section-header primitive: a mono, uppercase, gold eyebrow label above a thin
 * gold hairline rule. Used for ABOUT / WHAT I'M BUILDING / EXPERIENCE headers.
 * Renders as h2 so each section has a proper landmark heading under the hero h1.
 */
function EyebrowRule({ label }: EyebrowRuleProps) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.eyebrow}>{label}</h2>
      <hr className={styles.rule} />
    </div>
  )
}

export default EyebrowRule
