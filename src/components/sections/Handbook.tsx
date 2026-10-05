import { useState } from 'react'
import { handbookSection, handbooks } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionLabel } from '../ui/SectionLabel'
import { HandbookRequestModal } from './HandbookRequestModal'

export function Handbook() {
  const [active, setActive] = useState<(typeof handbooks)[number] | null>(null)

  return (
    <section id="handbook" className="section-block border-b border-border bg-white">
      <Container>
        <SectionLabel
          title={handbookSection.title}
          description={handbookSection.description}
        />

        <div className="handbook-grid">
          {handbooks.map((book) => (
            <article key={book.slug} className="handbook-card">
              <div className="handbook-card__cover">
                <img
                  src={book.coverUrl}
                  alt={`${book.title} cover`}
                  loading="lazy"
                />
              </div>

              <div className="handbook-card__body">
                <h3 className="handbook-card__title">{book.title}</h3>
                <p className="handbook-card__excerpt">{book.excerpt}</p>

                <button
                  type="button"
                  className="handbook-card__cta"
                  onClick={() => setActive(book)}
                >
                  Request access
                </button>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <HandbookRequestModal
        open={Boolean(active)}
        handbookId={active?.requestId ?? ''}
        title={active?.title ?? ''}
        onClose={() => setActive(null)}
      />
    </section>
  )
}
