import { cn } from '../../lib/cn'
import { Reveal, SectionEyebrow } from './Reveal'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
  titleClassName?: string
  light?: boolean
  delay?: number
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
  light = false,
  delay = 0,
}: SectionHeaderProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <Reveal delay={delay}>
        <SectionEyebrow light={light}>{eyebrow}</SectionEyebrow>
        <h2
          className={cn(
            'section-title mt-5',
            light ? 'text-white' : 'text-ink',
            titleClassName,
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'text-lead font-body mt-5 leading-[1.7]',
              light ? 'text-white/70' : 'text-foreground/60',
            )}
          >
            {description}
          </p>
        )}
      </Reveal>
    </div>
  )
}
