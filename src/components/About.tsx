import {
  about,
  certifications,
  education,
  resumeSnapshot,
  site,
} from '../data/content'

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="about-grid">
        <div>
          <div className="section-head">
            <p className="section-kicker">About</p>
            <h2 className="section-title" id="about-title">
              {about.headline}
            </h2>
          </div>
          <div className="about-copy">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="about-side">
          <img
            className="about-photo"
            src="/profile.jpg"
            alt="Gamalliel Tamaca in graduation attire"
            width={360}
            height={360}
            loading="lazy"
            decoding="async"
          />
          <div className="about-path" aria-label="Career path">
            <span>Customer / User Support</span>
            <span>IT Helpdesk</span>
            <span>IT Support Engineering</span>
            <span>Web · Systems · Automation</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ResumeSnapshot() {
  return (
    <section className="section" id="snapshot" aria-labelledby="snap-title">
      <div style={{ maxWidth: 'var(--content)', margin: '0 auto' }}>
        <div className="section-head">
          <p className="section-kicker">Resume snapshot</p>
          <h2 className="section-title" id="snap-title">
            The short version.
          </h2>
          <p className="section-lede">
            A compact companion to the full CV — then download the complete document.
          </p>
        </div>
        <div className="snapshot-grid">
          <div className="snapshot-card">
            <h3>Primary role</h3>
            <p>{resumeSnapshot.primaryRole}</p>
          </div>
          <div className="snapshot-card">
            <h3>Experience focus</h3>
            <p>{resumeSnapshot.experienceFocus}</p>
          </div>
          <div className="snapshot-card">
            <h3>Education</h3>
            <p>{resumeSnapshot.education}</p>
          </div>
          <div className="snapshot-card">
            <h3>Core technologies</h3>
            <p>{resumeSnapshot.coreTech.join(' · ')}</p>
          </div>
          <div className="snapshot-card">
            <h3>Certifications</h3>
            <p>{resumeSnapshot.certifications.join(' · ')}</p>
          </div>
          <div className="snapshot-card">
            <h3>Location</h3>
            <p>{site.location}</p>
          </div>
        </div>
        <div className="project-actions" style={{ marginTop: '1.25rem' }}>
          <a className="btn btn-primary" href={site.cvPath}>
            Download CV
          </a>
          <a className="btn btn-ghost" href={site.cvPath}>
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export function Certifications() {
  return (
    <section className="section" id="certifications" aria-labelledby="cert-title">
      <div style={{ maxWidth: 'var(--content)', margin: '0 auto' }}>
        <div className="section-head">
          <p className="section-kicker">Certifications</p>
          <h2 className="section-title" id="cert-title">
            Verified cloud foundations.
          </h2>
        </div>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.id}>
              <h3>{cert.issuer}</h3>
              <p>{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section className="section" id="education" aria-labelledby="edu-title">
      <div style={{ maxWidth: 'var(--content)', margin: '0 auto' }}>
        <div className="section-head">
          <p className="section-kicker">Education</p>
          <h2 className="section-title" id="edu-title">
            Academic foundation.
          </h2>
        </div>
        <div className="edu-card">
          <h3>{education.years}</h3>
          <p>{education.degree}</p>
          <p style={{ fontWeight: 500, color: 'var(--ink-muted)' }}>{education.school}</p>
        </div>
      </div>
    </section>
  )
}
