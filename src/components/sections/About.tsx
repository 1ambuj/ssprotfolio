import { CheckCircle2 } from 'lucide-react'
import { about } from '../../data/content'
import { Reveal } from '../site/Reveal'
import { Container } from '../ui/Container'

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="font-body text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                {about.eyebrow}
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.1] text-balance text-ink md:text-5xl">
                {about.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="font-body mt-6 max-w-lg text-base leading-relaxed text-foreground/65">
                {about.paragraphs[0]}
              </p>
            </Reveal>

            <ul className="mt-8 space-y-5">
              {about.helps.map((item, i) => (
                <Reveal key={item.title} delay={0.12 + i * 0.06}>
                  <li className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-primary"
                      strokeWidth={1.75}
                    />
                    <div>
                      <p className="font-display text-sm font-semibold text-ink">
                        {item.title}
                      </p>
                      <p className="font-body mt-1 text-sm text-foreground/60">
                        {item.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink/6 bg-white p-6 shadow-[0_12px_48px_rgba(15,23,42,0.06)] md:p-8">
              <h3 className="font-display text-lg font-semibold text-ink">
                What We Improve
              </h3>
              <ul className="mt-6 divide-y divide-ink/6">
                {about.improvements.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="font-body text-sm text-foreground/70">
                      {row.label}
                    </span>
                    <span className="shrink-0 rounded-full bg-primary/8 px-3 py-1 font-body text-xs font-medium text-primary">
                      {row.tag}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink/6 pt-6">
                {about.stats.slice(0, 4).map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-xl font-semibold text-ink">
                      {s.value}
                    </p>
                    <p className="mt-0.5 font-body text-[11px] text-foreground/50 uppercase">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
