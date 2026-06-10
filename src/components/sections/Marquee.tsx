import { marqueeItems } from '../../data/content'
import { MarqueeTrack } from '../site/Effects'
import { Container } from '../ui/Container'

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <section className="section-surface border-y border-ink/6 py-8">
      <Container>
        <p className="mb-5 text-center font-body text-[11px] tracking-[0.2em] text-foreground/45 uppercase">
          Trusted by leaders featured in
        </p>
      </Container>
      <div className="overflow-hidden">
        <MarqueeTrack>
          {items.map((text, i) => (
            <div
              key={`${text}-${i}`}
              className="flex items-center gap-10 font-display text-sm font-medium text-foreground/35"
            >
              {text}
              <span className="h-1 w-1 rounded-full bg-foreground/20" />
            </div>
          ))}
        </MarqueeTrack>
      </div>
    </section>
  )
}
