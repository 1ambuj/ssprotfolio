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
import { SectionHeader } from '../site/SectionHeader'
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
    <section id="expertise" className="section-muted section-padding">
      <Container>
        <SectionHeader
          eyebrow="Practice Areas"
          title="Six disciplines. One trusted partner."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((area, i) => {
            const Icon = iconMap[area.icon]
            return (
              <Reveal key={area.title} delay={i * 0.05}>
                <Spotlight className="surface-card group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(15,23,42,0.09)]">
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-xs text-foreground/25">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-ink">
                    {area.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-foreground/60">
                    {area.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 font-body text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:gap-1.5 group-hover:opacity-100">
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
