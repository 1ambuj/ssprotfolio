import { marqueeItems } from '../../data/content'
import { MarqueeTrack } from '../site/Effects'
import { Container } from '../ui/Container'

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <section className="border-y border-ink/[0.05] bg-surface/60 py-8 md:py-10">
      <Container>
        <p className="mb-5 text-center text-label text-foreground/40">
          Trusted by leaders featured in
        </p>
      </Container>
      <div className="overflow-hidden">
        <MarqueeTrack>
          {items.map((text, i) => (
            <div
              key={`${text}-${i}`}
              className="flex items-center gap-10 font-display text-sm font-medium tracking-tight text-foreground/30"
            >
              {text}
              <span className="h-1 w-1 rounded-full bg-foreground/15" />
            </div>
          ))}
        </MarqueeTrack>
      </div>
    </section>
  )
}
