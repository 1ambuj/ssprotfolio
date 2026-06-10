import { BookOpen, FileText, Scale, type LucideIcon } from 'lucide-react'
import { handbookSection, handbooks } from '../../data/content'
import { Container } from '../ui/Container'
import { ContentCard } from '../ui/ContentCard'
import { SectionLabel } from '../ui/SectionLabel'

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  file: FileText,
  scale: Scale,
}

export function Handbook() {
  return (
    <section id="handbook" className="section-alt section-block border-b border-border">
      <Container>
        <SectionLabel
          title={handbookSection.title}
          description={handbookSection.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {handbooks.map((book) => (
            <ContentCard
              key={book.slug}
              to={`/handbook/${book.slug}`}
              icon={iconMap[book.icon]}
              meta={book.year}
              title={book.title}
              subtitle={book.subtitle}
              description={book.excerpt}
              cta="Read more"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
