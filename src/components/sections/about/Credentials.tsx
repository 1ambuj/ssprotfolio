import { profile } from '../../../data/content'

function formatCertDetail(issuer: string) {
  return issuer.replace(/^ICAI Certification — /, '')
}

function CredentialColumn({
  heading,
  items,
}: {
  heading: string
  items: { tag: string; text: string }[]
}) {
  return (
    <div className="px-5 py-5 md:px-6 md:py-6">
      <h4 className="font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/50">
        {heading}
      </h4>
      <dl className="mt-4">
        {items.map((item) => (
          <div
            key={item.tag + item.text}
            className="grid grid-cols-[minmax(3.5rem,5.75rem)_1fr] gap-x-4 border-b border-border py-3.5 last:border-b-0"
          >
            <dt className="pt-px font-display text-xs font-bold leading-snug tracking-wide text-accent-orange sm:text-[13px]">
              {item.tag}
            </dt>
            <dd className="font-body text-sm leading-relaxed text-foreground/85">
              {item.text}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Credentials() {
  return (
    <div className="mt-12 border-t border-border pt-10 md:mt-14 md:pt-12">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="border-b border-border px-5 py-4 md:px-6">
          <h3 className="font-display text-lg font-semibold text-ink">
            {profile.credentialsTitle}
          </h3>
        </div>

        <div className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
          <CredentialColumn
            heading={profile.certificationsHeading}
            items={profile.certifications.map((cert) => ({
              tag: cert.title,
              text: formatCertDetail(cert.issuer),
            }))}
          />

          <CredentialColumn
            heading={profile.membershipsHeading}
            items={profile.memberships.map((item) => ({
              tag: item.issuer,
              text: item.title,
            }))}
          />
        </div>
      </div>
    </div>
  )
}
