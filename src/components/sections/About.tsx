import { Mail, MapPin, Phone } from 'lucide-react'
import portrait from '../../assets/avtar3.png'
import { profile, site } from '../../data/content'
import { Container } from '../ui/Container'
import { Credentials } from './about/Credentials'

export function About() {
  return (
    <section id="about" className="profile-hero border-b border-border py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[1fr_300px] lg:gap-16 xl:grid-cols-[1fr_320px] xl:gap-20">
          {/* Left — all text content */}
          <div className="min-w-0">
            <div>
              <h2 className="font-display text-lg font-semibold text-ink">
                {profile.aboutHeading}
              </h2>
              <p className="mt-2 font-body text-sm font-semibold text-accent-orange md:text-[15px]">
                {site.qualifications}
              </p>
              <div className="mt-4 space-y-4 font-body text-[15px] leading-[1.85] text-foreground">
                {profile.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 font-body text-sm text-foreground transition-colors hover:text-accent-orange"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold-soft text-accent-orange">
                  <Mail size={15} />
                </span>
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2.5 font-body text-sm text-foreground transition-colors hover:text-accent-orange"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold-soft text-accent-orange">
                  <Phone size={15} />
                </span>
                {site.phone}
              </a>
              <span className="inline-flex items-center gap-2.5 font-body text-sm text-foreground">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold-soft text-accent-orange">
                  <MapPin size={15} />
                </span>
                {site.address}
              </span>
            </div>
          </div>

          {/* Right — portrait */}
          <div className="about-portrait">
            <div className="portrait-frame">
              <img
                src={portrait}
                alt={site.displayName}
                className="aspect-3/4 w-full object-cover object-top"
                width={640}
                height={800}
              />
            </div>
          </div>
        </div>

        <Credentials />
      </Container>
    </section>
  )
}
