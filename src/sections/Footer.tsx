import { useI18n } from '../i18n/useI18n'
import styles from './Footer.module.css'

function Footer() {
  const { t } = useI18n()

  return (
    <footer className={styles.footer}>
      <hr className={styles.rule} />
      <p className={styles.line}>{t.footer.line}</p>
    </footer>
  )
}

export default Footer
