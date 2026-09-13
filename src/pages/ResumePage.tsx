import {
  about,
  certifications,
  education,
  experience,
  projects,
  resumeSnapshot,
  site,
  skills,
} from '../data/content'

export function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-actions">
        <a className="btn btn-ghost" href="/">
          ← Back to portfolio
        </a>
        <button type="button" className="btn btn-primary" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>

      <header>
        <p className="mono" style={{ color: 'var(--accent)', margin: 0 }}>
          Portfolio
        </p>
        <h1>{site.name}</h1>
        <p style={{ margin: 0, fontSize: '1.15rem', fontWeight: 600 }}>{resumeSnapshot.primaryRole}</p>
        <p style={{ margin: 0, color: 'var(--ink-muted)' }}>
          {site.email}
          {site.phone ? ` · ${site.phone}` : ''}
          {site.location ? ` · ${site.location}` : ''}
        </p>
      </header>

      <section>
        <h2>Summary</h2>
        <p style={{ color: 'var(--ink-muted)' }}>{about.body[1]}</p>
      </section>

      <section>
        <h2>Experience</h2>
        {experience.map((role) => (
          <div key={role.id} style={{ marginBottom: '1.25rem' }}>
            <strong>
              {role.role} — {role.company}
            </strong>
            <div style={{ color: 'var(--ink-muted)', fontSize: '0.92rem' }}>
              {role.dates} · {role.environment}
            </div>
            <p style={{ color: 'var(--ink-muted)' }}>{role.summary}</p>
            <ul>
              {role.responsibilities.slice(0, role.emphasis ? 8 : 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {role.emphasis ? (
              <ul>
                {role.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </section>

      <section>
        <h2>Selected projects</h2>
        {projects.map((project) => (
          <div key={project.id} style={{ marginBottom: '1rem' }}>
            <strong>
              {project.title}
              {project.status === 'private' ? ' (Private)' : ''}
            </strong>
            <div style={{ color: 'var(--ink-muted)', fontSize: '0.92rem' }}>
              {project.category} · {project.tech.join(', ')}
            </div>
            <p style={{ color: 'var(--ink-muted)', margin: '0.35rem 0 0' }}>{project.oneLiner}</p>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                {project.liveUrl}
              </a>
            ) : null}
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <p style={{ color: 'var(--ink-muted)' }}>
          {Array.from(new Set(skills.map((s) => s.group))).map((group) => (
            <span key={group} style={{ display: 'block', marginBottom: '0.5rem' }}>
              <strong>{group}:</strong>{' '}
              {skills
                .filter((s) => s.group === group)
                .map((s) => s.label)
                .join(', ')}
            </span>
          ))}
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <p>
          <strong>{education.degree}</strong>
          <br />
          {education.school} · {education.years}
        </p>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          {certifications.map((cert) => (
            <li key={cert.id}>
              {cert.name} — {cert.issuer}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
