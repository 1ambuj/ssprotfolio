import { motion } from 'framer-motion'
import { hero } from '../../../data/content'

export function HeroStats() {
  return (
    <motion.div
      className="mt-8 grid grid-cols-3 gap-4 pt-7 md:mt-9 md:gap-8 md:pt-8"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {hero.stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className={i > 0 ? 'border-l border-ink/[0.06] pl-6 md:pl-10' : ''}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]">
            {stat.value}
          </p>
          <p className="mt-1.5 font-body text-[10px] leading-snug tracking-wide text-foreground/45 uppercase md:text-[11px]">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}
