import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { contact, site } from '../../data/content'
import { Reveal, SectionEyebrow } from '../site/Reveal'
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
    <section id="contact" className="bg-secondary/40 py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionEyebrow>{contact.eyebrow}</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[1.05] font-bold text-ink md:text-5xl">
              {contact.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              {contact.description}
            </p>

            <div className="mt-10 space-y-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs tracking-widest text-foreground/55 uppercase">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-ink hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-medium text-ink">{item.value}</div>
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
              className="rounded-3xl border border-ink/10 bg-background p-8 shadow-sm md:p-10"
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
                <label className="text-xs tracking-widest text-foreground/60 uppercase">
                  Service of interest
                </label>
                <select className="mt-2 w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-ink focus:ring-2 focus:ring-primary/30 focus:outline-none">
                  {contact.services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label className="text-xs tracking-widest text-foreground/60 uppercase">
                  Briefly, how can I help?
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your business and what you're solving for…"
                  className="mt-2 w-full resize-none rounded-xl border border-ink/15 bg-background px-4 py-3 text-ink focus:ring-2 focus:ring-primary/30 focus:outline-none"
                />
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-foreground/65">
                  <CheckCircle2 size={16} className="text-primary" />
                  {contact.confidentiality}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary"
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
