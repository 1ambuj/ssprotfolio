import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { books, site } from '../../data/content'
import { Reveal } from '../site/Reveal'
import { SectionHeader } from '../site/SectionHeader'
import { Container } from '../ui/Container'
import { cn } from '../../lib/cn'

export function Books() {
  return (
    <section id="books" className="section-padding">
      <Container>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <SectionHeader
            eyebrow="Books & publications"
            title="Words that travel beyond the boardroom."
            className="max-w-xl"
          />
          <a
            href="#"
            className="group inline-flex items-center gap-2 font-body text-sm font-medium text-primary transition-colors hover:text-ink"
          >
            View full bibliography
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {books.map((book, i) => (
            <Reveal key={book.title} delay={i * 0.1}>
              <article className="surface-card group h-full overflow-hidden p-2 transition-all duration-300 hover:-translate-y-1">
                <div
                  className={cn(
                    'shine-on-hover relative flex aspect-3/4 flex-col justify-between overflow-hidden rounded-[1rem] bg-linear-to-br p-7',
                    book.gradient,
                  )}
                >
                  <div className="flex items-center justify-between text-label text-white/80">
                    <span>{book.tag}</span>
                    <span>{book.year}</span>
                  </div>
                  <div className="text-white">
                    <div className="mb-4 h-px w-10 bg-gold/80" />
                    <h3 className="font-display text-2xl leading-tight font-semibold tracking-tight">
                      {book.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-white/75">
                      {book.subtitle}
                    </p>
                  </div>
                  <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                </div>
                <div className="flex items-center justify-between px-4 py-4">
                  <span className="font-body text-sm text-foreground/60">
                    By {site.name}
                  </span>
                  <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Read
                    <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
