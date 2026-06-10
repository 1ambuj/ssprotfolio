import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '../../lib/cn'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-ink/5">
      <motion.div className="h-full bg-primary" style={{ width }} />
    </div>
  )
}

export function HeroParallaxBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-secondary/40" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
    </div>
  )
}

interface ParallaxTiltProps {
  children: ReactNode
  className?: string
}

export function ParallaxTilt({ children, className }: ParallaxTiltProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)'
  }

  return (
    <div
      ref={ref}
      className={cn('transition-transform duration-500 ease-out', className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}

interface SpotlightProps {
  children: ReactNode
  className?: string
}

export function Spotlight({ children, className }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const mx = ((e.clientX - rect.left) / rect.width) * 100
    const my = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mx', `${mx}%`)
    el.style.setProperty('--my', `${my}%`)
  }

  return (
    <div
      ref={ref}
      className={cn('spotlight', className)}
      onMouseMove={handleMove}
    >
      {children}
    </div>
  )
}

export function MarqueeTrack({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-max animate-marquee gap-12">{children}</div>
  )
}
