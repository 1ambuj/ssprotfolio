import { Link } from 'react-router-dom'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '../../lib/cn'

interface ContentCardProps {
  to?: string
  href?: string
  newTab?: boolean
  icon: LucideIcon
  meta?: string
  title: string
  subtitle?: string
  description: string
  cta?: string
  className?: string
}

export function ContentCard({
  to,
  href,
  newTab = true,
  icon: Icon,
  meta,
  title,
  subtitle,
  description,
  cta = 'Read more',
  className,
}: ContentCardProps) {
  const cardClass = cn('service-card group flex h-full flex-col', className)

  const body = (
    <>
      <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl bg-icon-tile text-ink/70 transition-colors group-hover:bg-gold-soft">
        <Icon size={26} strokeWidth={1.5} />
      </div>

      {meta && (
        <p className="font-body text-xs font-medium tracking-wide text-foreground/45 uppercase">
          {meta}
        </p>
      )}

      <h3
        className={cn(
          'font-display text-base font-semibold leading-snug text-ink',
          meta && 'mt-1',
        )}
      >
        {title}
      </h3>

      {subtitle && (
        <p className="mt-1 font-body text-sm text-foreground/50">{subtitle}</p>
      )}

      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-foreground/60">
        {description}
      </p>

      <span className="mt-6 inline-flex items-center gap-1.5 font-display text-xs font-semibold tracking-wide text-accent-orange uppercase">
        {cta}
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cardClass}>
        {body}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      className={cardClass}
    >
      {body}
    </a>
  )
}
