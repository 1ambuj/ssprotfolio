import { cn } from '../../lib/cn'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'ghost'
type Size = 'sm' | 'md'

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-white hover:bg-primary',
  ghost:
    'border border-ink/15 text-ink hover:bg-ink/5',
}

const sizes: Record<Size, string> = {
  sm: 'px-6 py-3 text-sm',
  md: 'px-7 py-3.5 text-sm',
}

type Shared = {
  variant?: Variant
  size?: Size
  className?: string
  children?: React.ReactNode
  showArrow?: boolean
}

type LinkButton = Shared &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type NativeButton = Shared &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

export function Button(props: LinkButton): React.ReactElement
export function Button(props: NativeButton): React.ReactElement
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  showArrow = false,
  href,
  ...props
}: LinkButton | NativeButton) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors',
    variants[variant],
    sizes[size],
    className,
  )

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...(props as LinkButton)}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(props as NativeButton)}>
      {content}
    </button>
  )
}
