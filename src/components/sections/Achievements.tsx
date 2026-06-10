import { stats } from '../../data/content'
import { Reveal } from '../site/Reveal'
import { SectionHeader } from '../site/SectionHeader'
import { Container } from '../ui/Container'
import { CountUp } from '../ui/CountUp'

export function Achievements() {
  return (
    <section className="section-muted section-padding">
      <Container>
        <SectionHeader
          eyebrow="Achievements"
          title="Numbers, for once, that speak for themselves."
          className="mb-14 md:mb-16"
        />

        <div className="surface-card grid gap-px overflow-hidden rounded-3xl bg-ink/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="bg-background p-8 md:p-10">
                <div className="font-display text-4xl font-semibold tracking-tight text-ink tabular-nums md:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-4 h-px w-10 bg-gold/80" />
                <div className="text-label mt-4 text-foreground/55">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
