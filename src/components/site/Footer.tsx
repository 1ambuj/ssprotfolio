import { navLinks, site } from '../../data/content'
import { Container } from '../ui/Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink text-white/70">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden="true"
      />

      <Container className="grid items-start gap-10 py-16 md:grid-cols-3 md:gap-8 md:py-20">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold font-display text-sm font-bold text-ink">
              {site.shortName}
            </span>
            <span className="font-serif text-xl text-white">{site.name}</span>
          </div>
          <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-white/55">
            {site.tagline}
          </p>
        </div>

        <div className="font-body text-sm">
          <p className="text-label mb-4 text-white/90">Navigate</p>
          <ul className="space-y-2.5">
            {navLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/60 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="font-body text-sm md:text-right">
          <p className="text-label mb-4 text-white/90">Contact</p>
          <a
            href={`mailto:${site.email}`}
            className="block text-white/75 transition-colors hover:text-gold"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="mt-1 block text-white/75 transition-colors hover:text-gold"
          >
            {site.phone}
          </a>
          <p className="mt-8 text-xs text-white/40">
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
