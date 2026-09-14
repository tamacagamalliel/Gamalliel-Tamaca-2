import { useState } from 'react'
import { differentiator, experience, experiencePath } from '../data/content'

export function Differentiator() {
  return (
    <section className="section" id="mindset" aria-labelledby="diff-title">
      <div className="diff">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="section-kicker">What I bring</p>
          <h2 className="section-title" id="diff-title">
            {differentiator.headline}
          </h2>
          <p className="section-lede">{differentiator.body}</p>
        </div>
        <div className="diff-stack">
          <div className="diff-pillars" aria-label="Capability pillars">
            {differentiator.pillars.map((pillar) => (
              <div className="diff-pillar" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
          <div className="diff-points">
            {differentiator.points.map((point) => (
              <div className="diff-point" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const [openId, setOpenId] = useState<string>(experience[0]?.id ?? '')

  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <div className="experience">
        <div className="section-head">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title" id="exp-title">
            Support → IT → Systems → Development
          </h2>
          <p className="section-lede">
            A career that expanded from user support into technical support, IT operations, systems,
            and development. Expand a role for environment, responsibilities, tools, and
            contributions — with Netbank highlighted for IT Support Engineering plus full-stack work
            inside IT Operations.
          </p>
        </div>

        <ol className="exp-path" aria-label="Career progression">
          {experiencePath.map((step, index) => (
            <li key={step}>
              <span>{step}</span>
              {index < experiencePath.length - 1 ? (
                <i aria-hidden="true">→</i>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="timeline">
          {experience.map((role) => {
            const open = openId === role.id
            return (
              <article
                key={role.id}
                className="exp-item"
                data-open={open}
                data-emphasis={role.emphasis ? 'true' : 'false'}
              >
                <button
                  type="button"
                  className="exp-summary"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? '' : role.id)}
                >
                  <span className="exp-year">{role.yearLabel}</span>
                  <span>
                    <h3>
                      {role.role}
                      {role.emphasis ? ' · Full Stack within IT Ops' : ''}
                    </h3>
                    <p>
                      {role.company} · {role.dates}
                    </p>
                  </span>
                  <span className="exp-chevron" aria-hidden="true">
                    ▾
                  </span>
                </button>
                <div className="exp-details">
                  <div>
                    <h4>Environment</h4>
                    <p style={{ margin: 0, color: 'var(--ink-muted)' }}>{role.environment}</p>
                  </div>
                  <div>
                    <h4>Summary</h4>
                    <p style={{ margin: 0, color: 'var(--ink-muted)' }}>{role.summary}</p>
                  </div>
                  <div>
                    <h4>Responsibilities</h4>
                    <ul>
                      {role.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Tools</h4>
                    <div className="exp-tools">
                      {role.tools.map((tool) => (
                        <span className="tag" key={tool}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4>Key contributions</h4>
                    <ul>
                      {role.contributions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
