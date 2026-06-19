import { useParams } from 'react-router'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Button from '../components/Button'
import { getPostBySlug, formatPostDate } from '../writing/loadPosts'
import styles from './Post.module.css'

function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <section className={styles.notFound}>
        <span className={styles.eyebrow}>404</span>
        <h1 className={styles.notFoundTitle}>Post not found</h1>
        <p className={styles.notFoundNote}>
          {slug ? `No post at /${slug}` : 'No slug provided.'}
        </p>
        <Button to="/writing">Back to writing</Button>
      </section>
    )
  }

  return (
    <article className={styles.article}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <span className={styles.date}>{formatPostDate(post.date)}</span>
          <h1 className={styles.title}>{post.title}</h1>
        </header>

        <div className={styles.prose}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <footer className={styles.footer}>
          <Button to="/writing">Back to writing</Button>
        </footer>
      </div>
    </article>
  )
}

export default PostPage
