import { ArrowUpRight } from 'lucide-react'
import { insights } from '../../data/content'
import { Reveal, SectionEyebrow } from '../site/Reveal'
import { Container } from '../ui/Container'

export function Insights() {
  return (
    <section id="insights" className="py-24 md:py-32">
      <Container>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal>
              <SectionEyebrow>Insights & articles</SectionEyebrow>
              <h2 className="mt-5 text-4xl leading-[1.05] font-bold text-ink md:text-5xl">
                Thought leadership, written for practitioners.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {insights.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-3xl border border-ink/10 p-8 transition-colors hover:bg-secondary/60">
                <div className="flex items-center justify-between text-xs tracking-widest text-foreground/55 uppercase">
                  <span className="font-medium text-primary">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-8 flex-1 font-display text-2xl leading-snug font-semibold text-ink">
                  {article.title}
                </h3>
                <div className="mt-10 flex items-center justify-between">
                  <span className="text-sm text-foreground/60">
                    {article.readTime}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-white">
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
