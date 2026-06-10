import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface FadeUpProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerWordsProps {
  text: string
  className?: string
  wordClassName?: string
  baseDelay?: number
}

export function StaggerWords({
  text,
  className,
  wordClassName,
  baseDelay = 0.15,
}: StaggerWordsProps) {
  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={cn('inline-block', wordClassName)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: baseDelay + i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  )
}
