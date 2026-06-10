import { cn } from '../../lib/cn'

interface SectionLabelProps {
  title: string
  description?: string
  className?: string
}

export function SectionLabel({ title, description, className }: SectionLabelProps) {
  return (
    <header className={cn(className)}>
      <h2 className="font-display text-[1.75rem] font-semibold tracking-tight text-ink md:text-[2.125rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-2 font-body text-[15px] leading-relaxed text-foreground/60">
          {description}
        </p>
      )}
    </header>
  )
}
