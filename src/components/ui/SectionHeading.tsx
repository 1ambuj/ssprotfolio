import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn('max-w-2xl', className)}>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-2 font-body text-[15px] leading-relaxed text-foreground/55">
          {description}
        </p>
      )}
    </header>
  )
}
