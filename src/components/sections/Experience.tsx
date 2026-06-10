import { experience } from '../../data/content'
import { Reveal } from '../site/Reveal'
import { SectionHeader } from '../site/SectionHeader'
import { Container } from '../ui/Container'

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden bg-ink text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] [background-size:40px_40px] opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[320px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeader
          eyebrow="Experience"
          title="A career built one client at a time."
          light
        />

        <div className="relative mx-auto mt-16 max-w-4xl md:mt-20">
          <div
            className="absolute top-0 bottom-0 left-3 w-px bg-white/12 md:left-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08}>
                <div
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}
                >
                  <div className="absolute top-2 left-3 h-3 w-3 -translate-x-1/2 rounded-full bg-gold ring-4 ring-ink md:left-1/2" />

                  <div
                    className={`pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
                  >
                    <div className="text-label text-gold">{item.year}</div>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                      {item.role}
                    </h3>
                    <div className="mt-1 font-body text-white/65">{item.org}</div>
                  </div>

                  <div
                    className={`mt-3 pl-10 md:mt-0 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}
                  >
                    <p className="font-body leading-relaxed text-white/72">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
