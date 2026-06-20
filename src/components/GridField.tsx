import styles from './GridField.module.css'

/**
 * Fixed, full-viewport background plate: the navy gradient ground plus the
 * faint gold engineering grid. Sits behind all content (z-index: -1) and is
 * inert (aria-hidden + pointer-events: none).
 */
function GridField() {
  return (
    <div className={styles.field} aria-hidden="true">
      <div className={styles.grid} />
    </div>
  )
}

export default GridField
