import { profile } from '../../../data/content'

function formatCertDetail(issuer: string) {
  return issuer.replace(/^ICAI Certification — /, '')
}

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-7 bg-accent-orange" aria-hidden="true" />
      <h4 className="font-display text-sm font-semibold text-ink">{children}</h4>
    </div>
  )
}

export function Credentials() {
  return (
    <div className="mt-12 border-t border-border pt-10 md:mt-14 md:pt-12">
      <h3 className="font-display text-lg font-semibold text-ink">
        {profile.credentialsTitle}
      </h3>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <section aria-labelledby="certifications-heading">
          <SectionHeading>{profile.certificationsHeading}</SectionHeading>

          <div className="mt-4 flex flex-wrap gap-2">
            {profile.certifications.map((cert) => (
              <span
                key={cert.title}
                className="rounded-full border border-accent-orange/20 bg-gold-soft px-3 py-1 font-display text-xs font-bold tracking-wide text-accent-orange"
              >
                {cert.title}
              </span>
            ))}
          </div>

          <ul className="mt-5 space-y-2 border-l border-border pl-4">
            {profile.certifications.map((cert) => (
              <li
                key={cert.title}
                className="font-body text-sm leading-relaxed text-foreground/80"
              >
                {formatCertDetail(cert.issuer)}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="memberships-heading">
          <SectionHeading>{profile.membershipsHeading}</SectionHeading>

          <ul className="mt-5 space-y-3.5">
            {profile.memberships.map((item) => (
              <li
                key={item.title}
                className="font-body text-sm leading-relaxed text-foreground/85"
              >
                <span className="font-display font-semibold text-accent-orange">
                  {item.issuer}
                </span>
                <span className="px-2 text-foreground/25" aria-hidden="true">
                  ·
                </span>
                {item.title}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
