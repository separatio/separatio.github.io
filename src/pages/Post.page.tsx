import { useParams } from 'react-router'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Button from '../components/Button'
import { useI18n } from '../i18n/useI18n'
import { getPostBySlug, formatPostDate } from '../writing/loadPosts'
import styles from './Post.module.css'

function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, path } = useI18n()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <section className={styles.notFound}>
        <span className={styles.eyebrow}>404</span>
        <h1 className={styles.notFoundTitle}>{t.post.notFoundTitle}</h1>
        <p className={styles.notFoundNote}>
          {slug ? `${t.post.noPostAt} /${slug}` : t.post.noSlug}
        </p>
        <Button to={path('/writing')}>{t.post.backToWriting}</Button>
      </section>
    )
  }

  return (
    <article className={styles.article}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <span className={styles.date}>
            {formatPostDate(post.date, t.dateLocale)}
          </span>
          <h1 className={styles.title}>{post.title}</h1>
        </header>

        <div className={styles.prose}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <div className={styles.postNav}>
          <Button to={path('/writing')}>{t.post.backToWriting}</Button>
        </div>
      </div>
    </article>
  )
}

export default PostPage
