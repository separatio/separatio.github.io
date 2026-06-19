import styles from './CornerMarks.module.css'

/**
 * Four L-shaped gold registration ticks framing the corners of the nearest
 * positioned ancestor. Purely decorative — used to frame the hero. The parent
 * must be `position: relative` (or otherwise positioned).
 */
function CornerMarks() {
  return (
    <div aria-hidden="true">
      <span className={`${styles.tick} ${styles.tl}`} />
      <span className={`${styles.tick} ${styles.tr}`} />
      <span className={`${styles.tick} ${styles.bl}`} />
      <span className={`${styles.tick} ${styles.br}`} />
    </div>
  )
}

export default CornerMarks
