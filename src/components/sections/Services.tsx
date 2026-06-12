import {
  ArrowRight,
  Globe,
  Receipt,
  Search,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { services, servicesSection } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionLabel } from '../ui/SectionLabel'
import { cn } from '../../lib/cn'

const iconMap: Record<(typeof services)[number]['icon'], LucideIcon> = {
  shield: ShieldCheck,
  search: Search,
  globe: Globe,
  receipt: Receipt,
}

export function Services() {
  return (
    <section id="services" className="section-block border-b border-border bg-white">
      <Container>
        <SectionLabel
          title={servicesSection.title}
          description={servicesSection.description}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon]

            return (
              <a
                key={service.id}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'service-card group flex h-full flex-col',
                  !service.url && 'pointer-events-none opacity-60',
                )}
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl bg-icon-tile text-ink/70 transition-colors group-hover:bg-gold-soft">
                  <Icon size={26} strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-base font-semibold leading-snug text-ink">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-foreground/60">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 font-body text-xs font-semibold tracking-wide text-accent-orange uppercase">
                  View details
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
