import type { ReactNode } from 'react'
import { profile } from '../../../data/content'

function formatCertDetail(issuer: string) {
  return issuer.replace(/^ICAI Certification — /, '')
}

function SectionBlock({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: ReactNode
}) {
  return (
    <section aria-labelledby={id} className="w-full">
      <div className="flex items-center gap-2.5">
        <span className="h-px w-6 bg-accent-orange" aria-hidden="true" />
        <h4
          id={id}
          className="font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/50"
        >
          {label}
        </h4>
      </div>
      {children}
    </section>
  )
}

function CredentialTile({
  tag,
  label,
  variant = 'cert',
}: {
  tag: string
  label: string
  variant?: 'cert' | 'member'
}) {
  return (
    <li
      className={
        variant === 'cert' ? 'credential-tile credential-tile--cert' : 'credential-tile'
      }
    >
      <div className="credential-tile__inner">
        <p className="credential-tile__tag">{tag}</p>
        <p className="credential-tile__label">{label}</p>
      </div>
    </li>
  )
}

export function Credentials() {
  return (
    <div className="credentials-section">
      <h3 className="font-display text-lg font-semibold text-ink">
        {profile.credentialsTitle}
      </h3>

      <div className="credentials-section__groups">
        <SectionBlock id="certifications-heading" label={profile.certificationsHeading}>
          <ul className="credential-grid">
            {profile.certifications.map((cert) => (
              <CredentialTile
                key={cert.title}
                variant="cert"
                tag={cert.title}
                label={formatCertDetail(cert.issuer)}
              />
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="memberships-heading" label={profile.membershipsHeading}>
          <ul className="credential-grid">
            {profile.memberships.map((item) => (
              <CredentialTile
                key={item.title}
                variant="member"
                tag={item.issuer}
                label={item.title}
              />
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  )
}
