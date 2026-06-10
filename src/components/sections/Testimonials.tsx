import { Quote } from 'lucide-react'
import { testimonials } from '../../data/content'
import { Reveal, SectionEyebrow } from '../site/Reveal'
import { Container } from '../ui/Container'

export function Testimonials() {
  return (
    <section className="bg-secondary/30 py-24 md:py-32">
      <Container>
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <SectionEyebrow>Client testimonials</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[1.05] font-bold text-ink md:text-5xl">
              Trusted by founders, families and finance leaders.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-background p-8">
                <Quote size={28} className="text-gold" />
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-ink/10 pt-6">
                  <div className="font-display font-semibold text-ink">
                    {t.name}
                  </div>
                  <div className="text-sm text-foreground/65">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
