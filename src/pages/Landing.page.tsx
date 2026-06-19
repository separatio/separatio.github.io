import CornerMarks from '../components/CornerMarks'
import styles from './Landing.module.css'

function LandingPage() {
  return (
    <div className={styles.placeholder}>
      <CornerMarks />
      <span className={styles.eyebrow}>Landing</span>
      <p className={styles.note}>Landing — coming in WS3</p>
    </div>
  )
}

export default LandingPage
