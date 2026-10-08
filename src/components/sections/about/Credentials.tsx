import { profile } from '../../../data/content'

function formatCertDetail(issuer: string) {
  return issuer.replace(/^ICAI Certification — /, '')
}

export function Credentials() {
  return (
    <div className="credentials">
      <header className="credentials__header">
        <span className="section-accent" aria-hidden="true" />
        <h3>{profile.credentialsTitle}</h3>
        <p>{profile.credentialsLead}</p>
      </header>

      <div className="credentials__columns">
        <section aria-labelledby="certifications-heading">
          <h4 id="certifications-heading">{profile.certificationsHeading}</h4>
          <ul className="cred-list">
            {profile.certifications.map((cert) => (
              <li key={cert.title}>
                <span className="cred-list__code">{cert.title}</span>
                <span className="cred-list__text">{formatCertDetail(cert.issuer)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="memberships-heading">
          <h4 id="memberships-heading">{profile.membershipsHeading}</h4>
          <ul className="cred-list">
            {profile.memberships.map((item) => (
              <li key={item.title}>
                <span className="cred-list__code">{item.issuer}</span>
                <span className="cred-list__text">{item.title}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
