import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { getBlogBySlug, getBlogUrl } from '../data/content'
import { Container } from '../components/ui/Container'

export function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getBlogBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blogs" replace />
  }

  const fullArticleUrl = getBlogUrl(post.slug)

  return (
    <article className="section-block bg-white">
      <Container>
        <Link to="/blogs" className="link-subtle">
          ← Back to all blogs
        </Link>

        <p className="mt-8 font-body text-sm text-foreground/45">
          {post.category} · {post.date} · {post.readTime}
        </p>

        <h1 className="mt-3 max-w-3xl font-display text-[1.75rem] font-semibold tracking-tight text-ink md:text-[2rem]">
          {post.title}
        </h1>

        <p className="prose-block mt-6 max-w-3xl text-[15px] leading-[1.85] text-foreground">
          {post.excerpt}
        </p>

        {fullArticleUrl && (
          <a
            href={fullArticleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex items-center gap-2"
          >
            Read full article
            <ArrowUpRight size={16} />
          </a>
        )}
      </Container>
    </article>
  )
}
