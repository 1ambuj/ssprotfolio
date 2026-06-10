import type { ReactNode } from 'react'
import { profile } from '../../../data/content'

function formatCertDetail(issuer: string) {
  return issuer.replace(/^ICAI Certification — /, '')
}

function CredentialGroup({
  heading,
  children,
}: {
  heading: string
  children: ReactNode
}) {
  return (
    <div>
      <h3 className="font-display text-base font-semibold text-ink">{heading}</h3>
      <div className="mt-2 h-0.5 w-10 rounded-full bg-accent-orange" />
      <ul className="mt-6 space-y-2.5">{children}</ul>
    </div>
  )
}

function CredentialRow({ badge, label }: { badge: string; label: string }) {
  return (
    <li className="member-row">
      <span className="member-row__badge">{badge}</span>
      <p className="min-w-0 font-body text-sm leading-snug text-ink">{label}</p>
    </li>
  )
}

export function Credentials() {
  return (
    <div className="credentials-wrap mt-12 md:mt-14 lg:mt-16">
      <p className="font-body text-sm text-foreground/55">
        Professional qualifications and affiliations
      </p>

      <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-10 lg:gap-14">
        <CredentialGroup heading={profile.certificationsHeading}>
          {profile.certifications.map((cert) => (
            <CredentialRow
              key={cert.title}
              badge={cert.title}
              label={formatCertDetail(cert.issuer)}
            />
          ))}
        </CredentialGroup>

        <CredentialGroup heading={profile.membershipsHeading}>
          {profile.memberships.map((item) => (
            <CredentialRow
              key={item.title}
              badge={item.issuer}
              label={item.title}
            />
          ))}
        </CredentialGroup>
      </div>
    </div>
  )
}
