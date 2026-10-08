import {
  ArrowUpRight,
  Globe,
  Receipt,
  Search,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { services, servicesSection } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionLabel } from '../ui/SectionLabel'

const iconMap: Record<(typeof services)[number]['icon'], LucideIcon> = {
  shield: ShieldCheck,
  search: Search,
  globe: Globe,
  receipt: Receipt,
}

export function Services() {
  return (
    <section id="services" className="section-block border-b border-border bg-background">
      <Container>
        <SectionLabel
          title={servicesSection.title}
          description={servicesSection.description}
        />

        <div className="practice-grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon]

            return (
              <a
                key={service.id}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`practice-card practice-card--${service.icon}`}
              >
                <div className="practice-card__top">
                  <span className="practice-card__icon" aria-hidden="true">
                    <Icon size={28} strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight className="practice-card__arrow" size={16} aria-hidden="true" />
                </div>
                <h3 className="practice-card__title">{service.title}</h3>
                <p className="practice-card__meaning">{service.meaning}</p>
                <p className="practice-card__text">{service.description}</p>
              </a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
