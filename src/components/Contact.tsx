import { useMemo, useState } from 'react'
import { contactIntents, portfolioStack, site } from '../data/content'

type IntentId = (typeof contactIntents)[number]['id']

export function Contact() {
  const [intent, setIntent] = useState<IntentId>(contactIntents[0].id)

  const mailto = useMemo(() => {
    const label = contactIntents.find((i) => i.id === intent)?.label ?? 'Hello'
    const subject = encodeURIComponent(`${label} — ${site.name}`)
    const body = encodeURIComponent(
      `Hi Gamalliel,\n\nI'm reaching out about: ${label}.\n\n`,
    )
    return `mailto:${site.email}?subject=${subject}&body=${body}`
  }, [intent])

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="contact">
        <div className="section-head">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title" id="contact-title">
            Have something worth building?
          </h2>
          <p className="section-lede">
            Pick a context, then reach out directly. No fake “message sent” forms — just real
            channels.
          </p>
        </div>

        <div className="intent-row" role="group" aria-label="Contact intent">
          {contactIntents.map((item) => (
            <button
              key={item.id}
              type="button"
              className="intent-btn"
              data-active={intent === item.id}
              onClick={() => setIntent(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="contact-actions">
          <a className="btn btn-primary" href={mailto}>
            Email Me
          </a>
          {site.linkedin ? (
            <a
              className="btn btn-ghost"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          ) : null}
          <a className="btn btn-soft" href={site.cvPath}>
            Download CV
          </a>
        </div>

        <div className="contact-details" aria-label="Contact details">
          <a className="contact-detail" href={`mailto:${site.email}`}>
            <span className="contact-detail-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 7 9-7" />
              </svg>
            </span>
            <span className="contact-detail-copy">
              <span className="contact-detail-label">Email</span>
              <span className="contact-detail-value">{site.email}</span>
            </span>
          </a>

          {site.phone ? (
            <a className="contact-detail" href={`tel:${site.phone.replace(/\s+/g, '')}`}>
              <span className="contact-detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6.5 3.5h3l1.5 5-2 1.5a12 12 0 006 6l1.5-2 5 1.5v3A2 2 0 0019.5 20 15.5 15.5 0 014 4.5a2 2 0 002.5-1z" />
                </svg>
              </span>
              <span className="contact-detail-copy">
                <span className="contact-detail-label">Phone</span>
                <span className="contact-detail-value">{site.phone}</span>
              </span>
            </a>
          ) : null}

          {site.location ? (
            <div className="contact-detail" role="group" aria-label="Location">
              <span className="contact-detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span className="contact-detail-copy">
                <span className="contact-detail-label">Location</span>
                <span className="contact-detail-value">{site.location}</span>
              </span>
            </div>
          ) : null}

          {site.linkedin ? (
            <a
              className="contact-detail"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 10v7M8 7.5v.01M12 17v-4.5a2.5 2.5 0 015 0V17" />
                </svg>
              </span>
              <span className="contact-detail-copy">
                <span className="contact-detail-label">LinkedIn</span>
                <span className="contact-detail-value">gamalliel-tamaca</span>
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <strong>{site.name}</strong>
          <span>IT Support Engineer · Web Developer</span>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href={`mailto:${site.email}`}>Email</a>
          {site.linkedin ? (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          ) : null}
          {site.github ? (
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : null}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <div className="built-with">
          <span>Built with</span>
          {portfolioStack.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
