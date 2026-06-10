import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface PortraitFrameProps {
  src: string
  alt: string
  className?: string
  overlay?: ReactNode
}

export function PortraitFrame({
  src,
  alt,
  className,
  overlay,
}: PortraitFrameProps) {
  return (
    <div
      className={cn(
        'relative aspect-3/4 w-full overflow-hidden bg-background',
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        width={1024}
        height={1024}
        className="h-full w-full scale-[1.03] object-cover"
        style={{ objectPosition: '50% 10%' }}
        draggable={false}
      />
      {overlay}
    </div>
  )
}
