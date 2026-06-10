import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { books, site } from '../../data/content'
import { Reveal, SectionEyebrow } from '../site/Reveal'
import { Container } from '../ui/Container'
import { cn } from '../../lib/cn'

export function Books() {
  return (
    <section id="books" className="py-24 md:py-32">
      <Container>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal>
              <SectionEyebrow>Books & publications</SectionEyebrow>
              <h2 className="mt-5 text-4xl leading-[1.05] font-bold text-ink md:text-5xl">
                Words that travel beyond the boardroom.
              </h2>
            </Reveal>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-ink"
          >
            View full bibliography
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {books.map((book, i) => (
            <Reveal key={book.title} delay={i * 0.1}>
              <article className="group h-full rounded-3xl border border-ink/10 bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div
                  className={cn(
                    'shine-on-hover relative flex aspect-3/4 flex-col justify-between overflow-hidden rounded-2xl bg-linear-to-br p-7',
                    book.gradient,
                  )}
                >
                  <div className="flex items-center justify-between text-xs tracking-widest text-white/80 uppercase">
                    <span>{book.tag}</span>
                    <span>{book.year}</span>
                  </div>
                  <div className="text-white">
                    <div className="mb-4 h-px w-10 bg-gold" />
                    <h3 className="font-display text-2xl leading-tight font-semibold">
                      {book.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/75">{book.subtitle}</p>
                  </div>
                  <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-foreground/70">
                    By {site.name}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
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
