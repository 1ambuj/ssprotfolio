import { ArrowUpRight } from 'lucide-react'
import { insights } from '../../data/content'
import { Reveal } from '../site/Reveal'
import { SectionHeader } from '../site/SectionHeader'
import { Container } from '../ui/Container'

export function Insights() {
  return (
    <section id="insights" className="section-muted section-padding">
      <Container>
        <SectionHeader
          eyebrow="Insights & articles"
          title="Thought leadership, written for practitioners."
          className="mb-14 md:mb-16"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {insights.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.08}>
              <article className="surface-card group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/12 md:p-8">
                <div className="flex items-center justify-between text-label text-foreground/50">
                  <span className="text-primary">{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-7 flex-1 font-display text-xl font-semibold leading-snug tracking-tight text-ink md:text-2xl">
                  {article.title}
                </h3>
                <div className="mt-8 flex items-center justify-between border-t border-ink/[0.06] pt-6">
                  <span className="font-body text-sm text-foreground/55">
                    {article.readTime}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                    <ArrowUpRight size={16} />
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
