import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import portrait from '../../../assets/avtar3.png'
import { hero, site } from '../../../data/content'
import { PortraitFrame } from '../../ui/PortraitFrame'
import { cn } from '../../../lib/cn'

const sizes = {
  sm: 'w-[112px]',
  md: 'w-[240px] sm:w-[252px] lg:w-[268px]',
}

interface HeroPortraitProps {
  size?: keyof typeof sizes
}

export function HeroPortrait({ size = 'md' }: HeroPortraitProps) {
  const isSmall = size === 'sm'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative', sizes[size])}
    >
      <div
        className={cn(
          'relative overflow-hidden border-[3px] border-primary/30 bg-background shadow-[0_16px_40px_rgba(15,23,42,0.1)] mt-4',
          isSmall ? 'rounded-2xl' : 'rounded-[1.35rem]',
        )}
      >
        <PortraitFrame src={portrait} alt={`${site.name}, Chartered Accountant`} />

        {!isSmall && (
          <>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/75 via-ink/25 to-transparent px-4 pb-4 pt-14 text-center">
              <p className="font-serif text-base text-white">{site.name}</p>
              <p className="mt-0.5 font-body text-[8px] tracking-[0.18em] text-white/70 uppercase">
                Chartered Accountant
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.45 }}
              className="absolute top-3 left-2 flex items-center gap-2 rounded-lg bg-white/95 px-2.5 py-2 shadow-[0_4px_16px_rgba(15,23,42,0.08)] ring-1 ring-ink/[0.06] backdrop-blur-sm"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ink font-display text-[10px] font-semibold text-white">
                30+
              </span>
              <div>
                <p className="font-body text-[8px] tracking-widest text-foreground/45 uppercase">
                  {hero.portrait.years.label}
                </p>
                <p className="font-body text-[10px] font-medium leading-tight text-ink">
                  {hero.portrait.years.sub}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.45 }}
              className="absolute right-2 bottom-14 flex items-center gap-2 rounded-lg bg-white/95 px-2.5 py-2 shadow-[0_4px_16px_rgba(15,23,42,0.08)] ring-1 ring-ink/[0.06] backdrop-blur-sm"
            >
              <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/8">
                <TrendingUp size={13} className="text-primary" />
              </span>
              <div>
                <p className="font-body text-[8px] tracking-widest text-foreground/45 uppercase">
                  {hero.portrait.retention.label}
                </p>
                <p className="font-body text-[10px] font-medium leading-tight text-ink">
                  {hero.portrait.retention.value} rate
                </p>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  )
}
