import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.rule} />
      <p className={styles.line}>
        ALEX RĂDULESCU · MORE THAN SOFTWARE · © 2026
      </p>
    </footer>
  )
}

export default Footer
