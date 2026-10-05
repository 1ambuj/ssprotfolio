import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
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

        <div className="handbook-stack">
          {handbooks.map((book) => (
            <article key={book.slug} className="handbook-entry">
              <div className="handbook-entry__cover">
                <img
                  src={book.coverUrl}
                  alt={`${book.title} cover`}
                  loading="lazy"
                />
              </div>

              <div className="handbook-entry__content">
                <p className="handbook-entry__meta">{book.year} edition</p>
                <h3 className="handbook-entry__title">{book.title}</h3>
                <p className="handbook-entry__subtitle">{book.subtitle}</p>
                <p className="handbook-entry__excerpt">{book.excerpt}</p>

                <button
                  type="button"
                  className="handbook-entry__cta"
                  onClick={() => setActive(book)}
                >
                  Request access
                  <ArrowUpRight size={14} aria-hidden="true" />
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
