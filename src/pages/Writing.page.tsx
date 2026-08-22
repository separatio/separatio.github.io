import { Link } from 'react-router'
import EyebrowRule from '../components/EyebrowRule'
import { useI18n } from '../i18n/useI18n'
import { allPosts, formatPostDate } from '../writing/loadPosts'
import styles from './Writing.module.css'

function WritingPage() {
  const { lang, t, path } = useI18n()

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <EyebrowRule label={t.writing.eyebrow} />

        {allPosts.length === 0 ? (
          <p className={styles.empty}>{t.writing.empty}</p>
        ) : (
          <ul className={styles.list} role="list">
            {allPosts.map((post) => (
              <li key={post.slug} className={styles.item}>
                <Link to={path(`/writing/${post.slug}`)} className={styles.row}>
                  <span className={styles.date}>
                    {formatPostDate(post.date, t.dateLocale)}
                  </span>
                  <span className={styles.titleStack}>
                    <span className={styles.titleRow}>
                      <span className={styles.title}>{post.title}</span>
                      {/* Posts are English-only for now, so the marker is a
                          Romanian-reader courtesy and never shows on /writing. */}
                      {lang === 'ro' && (
                        <span className={styles.englishNote}>
                          {t.writing.englishNote}
                        </span>
                      )}
                    </span>
                    {post.summary && (
                      <span className={styles.summary}>{post.summary}</span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default WritingPage
