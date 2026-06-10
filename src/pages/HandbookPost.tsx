import { Link, Navigate, useParams } from 'react-router-dom'
import { getHandbookBySlug } from '../data/content'
import { Container } from '../components/ui/Container'

export function HandbookPost() {
  const { slug } = useParams()
  const book = slug ? getHandbookBySlug(slug) : undefined

  if (!book) {
    return <Navigate to="/#handbook" replace />
  }

  return (
    <article className="section-block">
      <Container>
        <Link to="/#handbook" className="link-subtle">
          ← Back to handbook
        </Link>

        <p className="mt-8 font-body text-sm text-foreground/45">{book.year}</p>
        <h1 className="mt-2 font-display text-[1.75rem] font-semibold tracking-tight text-ink md:text-[2rem]">
          {book.title}
        </h1>
        <p className="mt-2 font-body text-base text-foreground/50">
          {book.subtitle}
        </p>

        <div className="prose-block mt-8">
          {book.description.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </article>
  )
}
