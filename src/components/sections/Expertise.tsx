import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Calculator,
  FileText,
  ScrollText,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { expertise } from '../../data/content'
import { Spotlight } from '../site/Effects'
import { Reveal } from '../site/Reveal'
import { Container } from '../ui/Container'

const iconMap: Record<string, LucideIcon> = {
  calculator: Calculator,
  file: FileText,
  shield: ShieldCheck,
  scroll: ScrollText,
  building: Building2,
  briefcase: Briefcase,
}

export function Expertise() {
  return (
    <section id="expertise" className="section-surface py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-body text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              Practice Areas
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.1] text-ink md:text-5xl">
              Six disciplines. One trusted partner.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((area, i) => {
            const Icon = iconMap[area.icon]
            return (
              <Reveal key={area.title} delay={i * 0.05}>
                <Spotlight className="group h-full rounded-2xl border border-ink/6 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(15,23,42,0.08)]">
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-xs text-foreground/30">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-ink">
                    {area.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-foreground/60">
                    {area.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 font-body text-sm font-medium text-primary opacity-0 transition-all group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight size={14} />
                  </span>
                </Spotlight>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
