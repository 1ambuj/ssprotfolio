import { useEffect, useState } from 'react'
import { cn } from '../../lib/cn'

interface TypewriterTextProps {
  text: string
  className?: string
  cursorClassName?: string
  speed?: number
  startDelay?: number
  showCursor?: boolean
  onComplete?: () => void
}

export function TypewriterText({
  text,
  className,
  cursorClassName,
  speed = 42,
  startDelay = 0,
  showCursor = true,
  onComplete,
}: TypewriterTextProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    setCount(0)
    setStarted(false)

    const startTimer = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(startTimer)
  }, [text, startDelay])

  useEffect(() => {
    if (!started || count >= text.length) return

    const timer = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(timer)
  }, [started, count, text.length, speed])

  useEffect(() => {
    if (!started || count < text.length) return
    onComplete?.()
  }, [started, count, text.length, onComplete])

  const done = count >= text.length

  return (
    <span className={className}>
      {text.slice(0, count)}
      {showCursor && (
        <span
          className={cn(
            'typewriter-cursor ml-px inline-block w-[2px] align-middle',
            done && 'typewriter-cursor--done',
            cursorClassName,
          )}
          aria-hidden="true"
        />
      )}
    </span>
  )
}
