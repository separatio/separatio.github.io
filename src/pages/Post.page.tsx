import { useParams } from 'react-router'
import styles from './Post.module.css'

function PostPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className={styles.placeholder}>
      <span className={styles.eyebrow}>Post</span>
      <p className={styles.note}>{slug ? `/${slug}` : ''} — coming in WS4</p>
    </div>
  )
}

export default PostPage
