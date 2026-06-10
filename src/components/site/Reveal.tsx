import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}

interface SectionEyebrowProps {
  children: ReactNode
  className?: string
  light?: boolean
}

export function SectionEyebrow({
  children,
  className,
  light = false,
}: SectionEyebrowProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em]',
        light ? 'text-gold' : 'text-primary',
        className,
      )}
    >
      <span className={cn('h-px w-8', light ? 'bg-gold' : 'bg-primary')} />
      {children}
    </div>
  )
}
