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
        <p className="contact-note">
          {site.email}
          {site.phone ? ` · ${site.phone}` : ''}
          {site.location ? ` · ${site.location}` : ''}
        </p>
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
