import { Landmark } from 'lucide-react'
import { Link } from 'react-router-dom'
import portrait from '../../assets/avtar3.png'
import { profile, site } from '../../data/content'
import { Container } from '../ui/Container'

export function About() {
  const copy = profile.paragraphs.slice(0, 2)

  return (
    <section id="about" className="about-section border-b border-border">
      <Container className="about-section__inner">
        <div className="about-layout">
          <div className="about-copy-col">
            <div className="about-label">
              <span className="about-label__line" aria-hidden="true" />
              <span>About Me</span>
            </div>

            <h2 className="about-name">{site.displayName}</h2>
            <p className="about-role">{site.title}</p>

            <ul className="about-pills" aria-label="Qualifications">
              {site.qualificationItems.map((item) => (
                <li key={item.code}>{item.code}</li>
              ))}
            </ul>

            <div className="about-copy">
              {copy.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <Link to="/academics" className="about-more">
              View academics & credentials →
            </Link>
          </div>

          <aside className="about-media">
            <div className="about-photo">
              <img
                src={portrait}
                alt={site.displayName}
                width={720}
                height={900}
              />
              <div className="about-photo__badge">
                <span className="about-photo__badge-icon" aria-hidden="true">
                  <Landmark size={16} />
                </span>
                <span>
                  Fellow Member, ICAI
                  <small>Institute of Chartered Accountants of India</small>
                </span>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
