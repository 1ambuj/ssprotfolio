import { cn } from '../../lib/cn'

interface SectionLabelProps {
  title: string
  description?: string
  className?: string
}

export function SectionLabel({ title, description, className }: SectionLabelProps) {
  return (
    <header className={cn(className)}>
      <span
        className="mb-3 block h-0.5 w-10 rounded-full bg-accent-orange"
        aria-hidden="true"
      />
      <h2 className="font-display text-[1.875rem] font-semibold tracking-tight text-ink md:text-[2.25rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 font-body text-base leading-relaxed text-foreground/60 md:text-[17px]">
          {description}
        </p>
      )}
    </header>
  )
}
