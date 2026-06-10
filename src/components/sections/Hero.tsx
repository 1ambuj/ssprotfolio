import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { hero } from '../../data/content'
import { FadeUp } from '../site/AnimatedText'
import { Container } from '../ui/Container'
import { HeroHeadline, HeroSubheadline } from './hero/HeroHeadline'
import { HeroPortrait } from './hero/HeroPortrait'
import { HeroStats } from './hero/HeroStats'

export function Hero() {
  const [typingDone, setTypingDone] = useState(false)

  return (
    <section className="page-gradient relative overflow-hidden pt-28 pb-14 md:pt-32 md:pb-16">
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 right-0 h-[480px] w-[480px] translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative max-w-7xl">
        {/* Mobile: portrait + text stacked tightly */}
        <div className="flex flex-col gap-8 md:hidden">
          <div className="flex justify-center">
            <HeroPortrait size="sm" />
          </div>
          <HeroContent typingDone={typingDone} onTypingComplete={setTypingDone} />
        </div>

        {/* Desktop: flex — portrait hugs text, not pushed to the far right */}
        <div className="hero-column-gap hidden md:flex md:items-start">
          <HeroContent
            typingDone={typingDone}
            onTypingComplete={setTypingDone}
            className="min-w-0 max-w-[38rem] lg:max-w-[42rem]"
          />
          <div className="relative shrink-0 self-start pt-1 lg:pt-0">
            <HeroPortrait />
          </div>
        </div>
      </Container>
    </section>
  )
}

function HeroContent({
  typingDone,
  onTypingComplete,
  className = '',
}: {
  typingDone: boolean
  onTypingComplete: (done: boolean) => void
  className?: string
}) {
  return (
    <div className={className}>
      <FadeUp delay={0.05}>
        <span className="text-label inline-flex items-center gap-2 rounded-full bg-white/85 px-3.5 py-1.5 text-primary ring-1 ring-ink/[0.06] backdrop-blur-sm">
          <span className="h-1 w-1 rounded-full bg-primary" />
          {hero.badge}
        </span>
      </FadeUp>

      <HeroHeadline onTypingComplete={() => onTypingComplete(true)} />

      <HeroSubheadline visible={typingDone} />

      {typingDone && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-ink px-6 font-body text-sm font-medium text-white transition-all duration-300 hover:bg-primary hover:shadow-[0_8px_24px_rgba(38,76,126,0.25)]"
          >
            {hero.cta.primary}
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#about"
            className="inline-flex h-11 items-center rounded-full bg-white px-6 font-body text-sm font-medium text-ink ring-1 ring-ink/10 transition-all duration-300 hover:ring-ink/20"
          >
            {hero.cta.secondary}
          </a>
        </motion.div>
      )}

      {typingDone && <HeroStats />}
    </div>
  )
}
