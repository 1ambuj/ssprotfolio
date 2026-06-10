import { stats } from '../../data/content'
import { Reveal, SectionEyebrow } from '../site/Reveal'
import { Container } from '../ui/Container'
import { CountUp } from '../ui/CountUp'

export function Achievements() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <SectionEyebrow>Achievements</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[1.05] font-bold text-ink md:text-5xl">
              Numbers, for once, that speak for themselves.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="bg-background p-10">
                <div className="font-display text-5xl font-bold text-ink tabular-nums md:text-6xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-4 h-px w-10 bg-gold" />
                <div className="mt-4 text-sm tracking-widest text-foreground/65 uppercase">
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
