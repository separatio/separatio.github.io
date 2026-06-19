import styles from './EyebrowRule.module.css'

type EyebrowRuleProps = {
  label: string
}

/**
 * Section-header primitive: a mono, uppercase, gold eyebrow label above a thin
 * gold hairline rule. Used for ABOUT / WHAT I'M BUILDING / EXPERIENCE headers.
 */
function EyebrowRule({ label }: EyebrowRuleProps) {
  return (
    <div className={styles.wrap}>
      <span className={styles.eyebrow}>{label}</span>
      <hr className={styles.rule} />
    </div>
  )
}

export default EyebrowRule
