import { site } from '../../data/content'
import { Container } from '../ui/Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-ink text-white/70">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display font-semibold text-white">
            {site.displayName}
          </p>
          <p className="mt-1 font-body text-sm">{site.title}</p>
        </div>

        <div className="font-body text-sm">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-accent-orange"
          >
            {site.email}
          </a>
          <span className="mx-2 text-white/25">·</span>
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="transition-colors hover:text-accent-orange"
          >
            {site.phone}
          </a>
        </div>

        <p className="font-body text-xs text-white/40">
          &copy; {year} {site.name}
        </p>
      </Container>
    </footer>
  )
}
