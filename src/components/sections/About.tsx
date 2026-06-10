import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { about } from '../../data/content'
import { Reveal, SectionEyebrow } from '../site/Reveal'
import { Container } from '../ui/Container'

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] translate-x-1/4 -translate-y-1/3 rounded-full bg-primary/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-16 xl:grid-cols-2 xl:gap-20">
          <div>
            <Reveal>
              <SectionEyebrow>{about.eyebrow}</SectionEyebrow>
              <h2 className="section-title mt-5 text-ink">{about.heading}</h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-lead font-body mt-6 max-w-lg leading-[1.7] text-foreground/60">
                {about.paragraphs[0]}
              </p>
            </Reveal>

            <ul className="mt-10 space-y-3">
              {about.helps.map((item, i) => (
                <Reveal key={item.title} delay={0.12 + i * 0.06}>
                  <li className="surface-card group p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/15 md:p-5">
                    <div className="flex gap-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <CheckCircle2 size={18} strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-display text-sm font-semibold text-ink">
                            {item.title}
                          </p>
                          <ArrowUpRight
                            size={15}
                            className="mt-0.5 shrink-0 text-primary/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary/70"
                          />
                        </div>
                        <p className="font-body mt-1.5 text-sm leading-relaxed text-foreground/60">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="surface-card relative overflow-hidden rounded-3xl">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/25 to-transparent"
                aria-hidden="true"
              />

              <div className="border-b border-ink/[0.06] px-6 py-5 md:px-8">
                <p className="font-body text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
                  Measurable outcomes
                </p>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">
                  What We Improve
                </h3>
              </div>

              <ul className="space-y-2 px-4 py-4 md:px-5 md:py-5">
                {about.improvements.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-4 rounded-xl bg-surface/70 px-4 py-3.5 ring-1 ring-ink/[0.04] transition-colors duration-300 hover:bg-surface"
                  >
                    <span className="font-body text-sm font-medium text-ink/80">
                      {row.label}
                    </span>
                    <span className="shrink-0 rounded-full bg-white px-3 py-1 font-body text-[11px] font-medium text-primary ring-1 ring-primary/10">
                      {row.tag}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-px border-t border-ink/[0.06] bg-ink/[0.06]">
                {about.stats.slice(0, 4).map((s) => (
                  <div
                    key={s.label}
                    className="bg-white px-5 py-5 md:px-6 md:py-6"
                  >
                    <p className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                      {s.value}
                    </p>
                    <p className="mt-1 font-body text-[10px] leading-snug tracking-wide text-foreground/45 uppercase">
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
