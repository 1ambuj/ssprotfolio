import { Quote } from 'lucide-react'
import { testimonials } from '../../data/content'
import { Reveal } from '../site/Reveal'
import { SectionHeader } from '../site/SectionHeader'
import { Container } from '../ui/Container'

export function Testimonials() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Client testimonials"
          title="Trusted by founders, families and finance leaders."
          className="mb-14 md:mb-16"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="surface-card flex h-full flex-col p-7 md:p-8">
                <Quote size={26} className="text-gold" strokeWidth={1.5} />
                <blockquote className="mt-6 flex-1 font-body text-base leading-relaxed text-ink md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-ink/[0.06] pt-6">
                  <div className="font-display font-semibold tracking-tight text-ink">
                    {t.name}
                  </div>
                  <div className="mt-0.5 font-body text-sm text-foreground/60">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
