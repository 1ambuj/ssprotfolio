import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { contact, site } from '../../data/content'
import { Reveal } from '../site/Reveal'
import { SectionHeader } from '../site/SectionHeader'
import { Container } from '../ui/Container'
import { Field } from '../ui/Field'

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  const contactDetails = [
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Office', value: site.location },
  ]

  return (
    <section id="contact" className="section-padding border-t border-ink/[0.05]">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow={contact.eyebrow}
            title={contact.heading}
            description={contact.description}
          />

          <Reveal delay={0.1}>
            <div className="mt-10 space-y-4">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="surface-card flex items-start gap-4 p-4"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary">
                    <item.icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-label text-foreground/50">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block font-body text-sm font-medium text-ink transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="mt-1 font-body text-sm font-medium text-ink">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="surface-card rounded-3xl p-7 md:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Your name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                />
                <Field
                  label="Company"
                  name="company"
                  placeholder="Organisation"
                />
                <Field label="Phone" name="phone" placeholder="+91…" />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="service"
                  className="text-label text-foreground/55"
                >
                  Service of interest
                </label>
                <select
                  id="service"
                  className="input-field font-body mt-2 text-sm"
                >
                  {contact.services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="text-label text-foreground/55"
                >
                  Briefly, how can I help?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your business and what you're solving for…"
                  className="input-field font-body mt-2 resize-none text-sm"
                />
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-body text-sm text-foreground/60">
                  <CheckCircle2 size={16} className="text-primary" />
                  {contact.confidentiality}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-body text-sm font-medium text-white shadow-[0_6px_20px_rgba(15,23,42,0.18)] transition-all hover:bg-primary hover:shadow-[0_8px_24px_rgba(38,76,126,0.28)]"
                >
                  {sent ? "Thank you — I'll be in touch" : 'Request consultation'}
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
