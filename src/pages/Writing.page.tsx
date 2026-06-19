import { Link } from 'react-router'
import EyebrowRule from '../components/EyebrowRule'
import { allPosts, formatPostDate } from '../writing/loadPosts'
import styles from './Writing.module.css'

function WritingPage() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <EyebrowRule label="WRITING" />

        {allPosts.length === 0 ? (
          <p className={styles.empty}>
            Nothing published yet. Check back soon.
          </p>
        ) : (
          <ul className={styles.list} role="list">
            {allPosts.map((post) => (
              <li key={post.slug} className={styles.item}>
                <Link to={`/writing/${post.slug}`} className={styles.row}>
                  <span className={styles.date}>
                    {formatPostDate(post.date)}
                  </span>
                  <span className={styles.titleStack}>
                    <span className={styles.title}>{post.title}</span>
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
