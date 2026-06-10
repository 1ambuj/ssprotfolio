import { experience } from '../../data/content'
import { Reveal, SectionEyebrow } from '../site/Reveal'
import { Container } from '../ui/Container'

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-ink py-24 text-white md:py-32"
    >
      <div
        className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:32px_32px] opacity-30"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <SectionEyebrow light>Experience</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[1.05] font-bold text-white md:text-5xl">
              A career built one client at a time.
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <div
            className="absolute top-0 bottom-0 left-3 w-px bg-white/15 md:left-1/2"
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
                    <div className="text-xs tracking-widest text-gold uppercase">
                      {item.year}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <div className="text-white/70">{item.org}</div>
                  </div>

                  <div
                    className={`mt-3 pl-10 md:mt-0 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}
                  >
                    <p className="leading-relaxed text-white/75">
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
