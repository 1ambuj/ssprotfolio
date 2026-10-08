import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import {
  academicCertifications,
  academicContributions,
  academicDegrees,
  academicPositions,
  academicsPage,
  site,
  type AcademicEntry,
} from '../data/content'

type TabId = (typeof academicsPage.tabs)[number]['id']

function EntryList({ items }: { items: AcademicEntry[] }) {
  return (
    <ol className="acad-list">
      {items.map((item, index) => (
        <li key={`${item.title}-${item.detail}`} className="acad-list__row">
          <span className="acad-list__index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="acad-list__title">{item.title}</span>
          <span className="acad-list__detail">{item.detail}</span>
        </li>
      ))}
    </ol>
  )
}

export function AcademicsPage() {
  const [tab, setTab] = useState<TabId>('academics')

  const panel = useMemo(() => {
    if (tab === 'positions') {
      return {
        heading: 'Positions',
        description: 'Professional roles and appointments.',
        groups: [{ label: null as string | null, items: academicPositions }],
      }
    }

    if (tab === 'contributions') {
      return {
        heading: 'Contributions',
        description: 'Professional memberships and community affiliations.',
        groups: [{ label: null as string | null, items: academicContributions }],
      }
    }

    return {
      heading: 'Academics',
      description: 'Degrees and professional certifications.',
      groups: [
        { label: 'Qualifications', items: academicDegrees },
        { label: 'Certifications', items: academicCertifications },
      ],
    }
  }, [tab])

  return (
    <section className="academics-page">
      <div className="academics-hero">
        <Container>
          <Link to="/#about" className="academics-back">
            ← Back to about
          </Link>
          <p className="academics-hero__brand">{site.displayName}</p>
          <h1 className="academics-hero__title">{panel.heading}</h1>
          <p className="academics-hero__lead">{panel.description}</p>

          <nav className="academics-tabs" aria-label="Academics sections">
            {academicsPage.tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                className={
                  tab === item.id
                    ? 'academics-tabs__btn academics-tabs__btn--active'
                    : 'academics-tabs__btn'
                }
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </Container>
      </div>

      <Container className="academics-page__body">
        <div className="academics-panel">
          {panel.groups.map((group) => (
            <div key={group.label ?? panel.heading} className="academics-group">
              {group.label ? (
                <h2 className="academics-group__label">{group.label}</h2>
              ) : null}
              <EntryList items={group.items} />
            </div>
          ))}
          <p className="academics-panel__note">
            {panel.groups.reduce((count, group) => count + group.items.length, 0)} entries
          </p>
        </div>
      </Container>
    </section>
  )
}
