import { Link, Navigate, useParams } from 'react-router-dom'
import { getBlogBySlug } from '../data/content'
import { Container } from '../components/ui/Container'

export function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getBlogBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/#blogs" replace />
  }

  return (
    <article className="section-block">
      <Container>
        <Link to="/#blogs" className="link-subtle">
          ← Back to blogs
        </Link>

        <p className="mt-8 font-body text-sm text-foreground/45">
          {post.category} · {post.date} · {post.readTime}
        </p>

        <h1 className="mt-3 font-display text-[1.75rem] font-semibold tracking-tight text-ink md:text-[2rem]">
          {post.title}
        </h1>

        <div className="prose-block mt-8">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </article>
  )
}
