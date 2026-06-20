import Button from '../components/Button'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.wrap}>
      <span className={styles.eyebrow}>404</span>
      <p className={styles.message}>This page doesn&apos;t exist.</p>
      <Button to="/">Back home</Button>
    </div>
  )
}

export default NotFound
