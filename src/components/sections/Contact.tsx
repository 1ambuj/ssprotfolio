import { useState } from 'react'
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { contactSection, site } from '../../data/content'
import { Reveal, SectionEyebrow } from '../site/Reveal'
import { Container } from '../ui/Container'
import { Field } from '../ui/Field'
import { SelectField } from '../ui/SelectField'

const contactDetails = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, '')}`,
    icon: Phone,
  },
  {
    label: 'Office',
    value: site.address,
    icon: MapPin,
  },
] as const

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="section-block section-alt border-t border-border">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionEyebrow>{contactSection.eyebrow}</SectionEyebrow>
              <h2 className="mt-5 font-display text-[1.75rem] font-bold leading-[1.1] text-ink sm:text-4xl lg:text-[2.75rem]">
                {contactSection.title}
              </h2>
              <p className="mt-5 max-w-md font-body text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-lg">
                {contactSection.description}
              </p>

              <ul className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <>
                      <span className="contact-detail-card__icon">
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="contact-detail-card__label">{item.label}</span>
                        <span className="contact-detail-card__value">{item.value}</span>
                      </span>
                    </>
                  )

                  return (
                    <li key={item.label}>
                      {'href' in item && item.href ? (
                        <a href={item.href} className="contact-detail-card">
                          {content}
                        </a>
                      ) : (
                        <div className="contact-detail-card">{content}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                className="contact-form-card"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSent(true)
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Your name" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                  />
                  <Field label="Company" name="company" placeholder="Organisation" />
                  <Field label="Phone" name="phone" placeholder="+91…" />
                </div>

                <div className="mt-5">
                  <SelectField
                    label="Service of interest"
                    name="service"
                    options={contactSection.serviceOptions}
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="text-label text-foreground/55">
                    Briefly, how can I help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your business and what you're solving for…"
                    className="input-field input-field--textarea font-body mt-2 text-sm"
                  />
                </div>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-center gap-2 font-body text-sm text-foreground/65">
                    <CheckCircle2 size={16} className="shrink-0 text-accent-orange" />
                    {contactSection.confidentialNote}
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-ink px-7 py-3.5 font-body text-sm font-medium text-white transition-colors hover:bg-primary sm:self-auto"
                  >
                    {sent ? contactSection.submitSuccessLabel : contactSection.submitLabel}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
