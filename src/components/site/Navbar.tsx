import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navLinks, site } from '../../data/content'
import { Container } from '../ui/Container'
import { cn } from '../../lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-4 md:px-6 md:pt-5">
        <motion.div
          className={cn(
            'mx-auto max-w-7xl rounded-2xl border transition-all duration-300',
            scrolled
              ? 'border-ink/8 bg-white/90 shadow-[0_8px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl'
              : 'border-transparent bg-white/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] backdrop-blur-md',
          )}
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Container className="flex h-14 items-center gap-4 md:h-16">
            <a href="#top" className="flex shrink-0 items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary font-display text-sm font-semibold text-white shadow-[0_4px_14px_color-mix(in_oklab,var(--primary)_35%,transparent)]">
                {site.shortName}
              </span>
              <span className="font-serif text-lg tracking-tight text-ink">
                {site.name}
              </span>
            </a>

            <nav
              className="mx-auto hidden items-center gap-1 lg:flex"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3.5 py-2 font-body text-sm text-foreground/60 transition-colors hover:bg-ink/[0.04] hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="group ml-auto hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-body text-sm font-medium text-white shadow-[0_6px_20px_rgba(15,23,42,0.18)] transition-all hover:bg-primary hover:shadow-[0_8px_24px_rgba(38,76,126,0.28)] lg:inline-flex"
            >
              Contact
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <button
              type="button"
              className="ml-auto flex p-2 text-ink lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </Container>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className="absolute inset-x-4 top-20 rounded-2xl bg-white p-6 shadow-xl"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block border-b border-ink/6 py-3.5 font-body text-base text-ink last:border-0"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3 font-body text-sm font-medium text-white"
              >
                Contact
                <ArrowRight size={14} />
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
