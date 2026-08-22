import Button from '../components/Button'
import { useI18n } from '../i18n/useI18n'
import styles from './NotFound.module.css'

function NotFound() {
  const { t, path } = useI18n()

  return (
    <div className={styles.wrap}>
      <span className={styles.eyebrow}>404</span>
      <p className={styles.message}>{t.notFound.message}</p>
      <Button to={path('/')}>{t.notFound.backHome}</Button>
    </div>
  )
}

export default NotFound
