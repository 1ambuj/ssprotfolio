import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, site } from '../../data/content'
import { Container } from '../ui/Container'
import { cn } from '../../lib/cn'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="h-0.5 bg-accent-orange" aria-hidden="true" />

      <Container className="flex h-[4.5rem] items-center justify-between gap-6 md:h-[5rem]">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-ink font-display text-xs font-bold tracking-wide text-white">
            {site.shortName}
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-[15px] font-semibold text-ink md:text-base">
              {site.displayName}
            </span>
            <span className="hidden truncate font-body text-xs text-foreground/55 sm:block">
              {site.title}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="nav-link px-3 py-2">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/#contact"
            className="hidden items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2 font-body text-sm font-medium text-ink transition-colors hover:border-accent-orange/40 hover:text-accent-orange md:inline-flex"
          >
            Contact
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            className="rounded-lg p-2 text-ink hover:bg-surface lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          'overflow-hidden border-t border-border bg-white transition-[max-height] duration-300 lg:hidden',
          mobileOpen ? 'max-h-80' : 'max-h-0',
        )}
      >
        <nav className="px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block py-2.5 font-body text-[15px] font-medium text-ink"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="mt-2 inline-flex items-center gap-1.5 font-body text-sm font-medium text-accent-orange"
            onClick={() => setMobileOpen(false)}
          >
            Contact
            <ArrowUpRight size={14} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
