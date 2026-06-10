import { useState } from 'react'
import { motion } from 'framer-motion'
import { hero } from '../../../data/content'
import { TypewriterText } from '../../site/TypewriterText'

interface HeroHeadlineProps {
  onTypingComplete?: () => void
}

export function HeroHeadline({ onTypingComplete }: HeroHeadlineProps) {
  const [showAccent, setShowAccent] = useState(false)
  const [accentDone, setAccentDone] = useState(false)

  const handleAccentComplete = () => {
    setAccentDone(true)
    onTypingComplete?.()
  }

  return (
    <h1
      className="font-serif text-hero mt-5 text-balance text-ink md:mt-6"
      aria-live="polite"
    >
      <span className="block leading-[1.12]">
        <TypewriterText
          text={`${hero.headline} `}
          speed={38}
          startDelay={400}
          onComplete={() => setShowAccent(true)}
        />
      </span>

      {showAccent && (
        <span className="mt-2 block leading-[1.12] text-primary italic">
          <TypewriterText
            text={hero.headlineAccent}
            speed={36}
            startDelay={120}
            onComplete={handleAccentComplete}
            showCursor={!accentDone}
          />
        </span>
      )}

      {!showAccent && (
        <span className="mt-2 block h-[1.12em] leading-[1.12]" aria-hidden="true" />
      )}
    </h1>
  )
}

export function HeroSubheadline({ visible }: { visible: boolean }) {
  if (!visible) return <div className="mt-5 h-[3.75rem]" aria-hidden="true" />

  return (
    <motion.p
      className="text-lead font-body mt-5 max-w-xl leading-[1.7] text-foreground/60"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {hero.subheadline}
    </motion.p>
  )
}
