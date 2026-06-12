import { Mail, MapPin, Phone } from 'lucide-react'
import portrait from '../../assets/avtar3.png'
import { profile, site } from '../../data/content'
import { Container } from '../ui/Container'
import { Credentials } from './about/Credentials'

const qualificationList = site.qualifications.split(',').map((q) => q.trim())

export function About() {
  return (
    <section id="about" className="profile-hero border-b border-border">
      <Container className="profile-hero__inner">
        <div className="about-profile">
          <aside className="about-profile__aside">
            <div className="portrait-column">
              <div className="portrait-frame">
                <img
                  src={portrait}
                  alt={site.displayName}
                  className="aspect-3/4 w-full object-cover object-top"
                  width={720}
                  height={960}
                />
                <div className="portrait-frame__fade" aria-hidden="true" />
                <div className="portrait-quals" role="list" aria-label="Qualifications">
                  {qualificationList.map((qual) => (
                    <span key={qual} className="portrait-qual" role="listitem">
                      {qual}
                    </span>
                  ))}
                </div>
              </div>

              <div id="contact" className="about-contact about-contact--below-portrait">
                <div className="about-contact__row">
                  <a href={`mailto:${site.email}`} className="about-contact__item">
                    <span className="about-contact__icon">
                      <Mail size={15} />
                    </span>
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, '')}`}
                    className="about-contact__item"
                  >
                    <span className="about-contact__icon">
                      <Phone size={15} />
                    </span>
                    {site.phone}
                  </a>
                </div>
                <span className="about-contact__item about-contact__item--full">
                  <span className="about-contact__icon">
                    <MapPin size={15} />
                  </span>
                  {site.address}
                </span>
              </div>
            </div>
          </aside>

          <div className="about-profile__main">
            <div className="about-profile__intro">
              <span className="section-accent" aria-hidden="true" />
              <h2 className="about-profile__title">{profile.aboutHeading}</h2>
            </div>

            <div className="about-profile__copy">
              {profile.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <Credentials />
      </Container>
    </section>
  )
}
