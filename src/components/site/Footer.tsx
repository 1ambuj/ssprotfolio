import { navLinks, site } from '../../data/content'
import { Container } from '../ui/Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink py-14 text-white/70">
      <Container className="grid items-start gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold font-display text-sm font-bold text-ink">
              {site.shortName}
            </span>
            <span className="font-display font-semibold text-white">
              {site.name}
              <span className="text-gold">.</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm">{site.tagline}</p>
        </div>

        <div className="text-sm">
          <div className="mb-3 text-xs uppercase tracking-widest text-white">
            Navigate
          </div>
          <ul className="space-y-2">
            {navLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm md:text-right">
          <div className="mb-3 text-xs uppercase tracking-widest text-white">
            Contact
          </div>
          <div>{site.email}</div>
          <div>{site.phone}</div>
          <div className="mt-6 text-xs text-white/45">
            &copy; {year} {site.name}. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}
