import { useEffect, useRef } from 'react'
import type { Project } from '../data/content'
import { ProjectPreview } from './ProjectPreview'

type Props = {
  project: Project
  onClose: () => void
}

export function CaseStudyPanel({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      previouslyFocused.current?.focus()
    }
  }, [onClose])

  return (
    <div className="case-overlay" role="presentation" onClick={onClose}>
      <article
        className="case-panel"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="case-toolbar">
          <div className="case-toolbar-meta">
            <span className="chip">Workbench</span>
            <span className="mono">{project.number}</span>
            <strong>{project.title}</strong>
            <span className="chip" data-tone={project.status === 'live' ? 'live' : 'private'}>
              {project.status === 'live' ? 'Live' : project.status === 'archived' ? 'Previous' : 'Private'}
            </span>
          </div>
          <button ref={closeRef} type="button" className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="case-body">
          <div className="case-hero-block">
            <ProjectPreview project={project} />
            <p className="project-category">{project.category}</p>
            <h2 className="project-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
              {project.title}
            </h2>
            <p className="project-one">{project.oneLiner}</p>
            <div className="project-actions">
              {project.liveUrl ? (
                <a
                  className="btn btn-primary"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Website
                </a>
              ) : (
                <span className="btn btn-ghost" aria-disabled="true">
                  Private Project
                </span>
              )}
            </div>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="case-grid">
            <Block title="Overview" text={project.overview} />
            <Block title="Context" text={project.context} />
            <Block title="Problem" text={project.problem} />
            <Block title="Approach" text={project.approach} />
            <Block title="Design" text={project.design} />
            <Block title="Development" text={project.development} />
            <Block title="Challenges" text={project.challenges} />
            <Block title="Outcome" text={project.outcome} />
          </div>

          <div className="case-block">
            <h3>My role</h3>
            <p>{project.role}</p>
          </div>
          <div className="case-block">
            <h3>Focus</h3>
            <p>{project.focus}</p>
          </div>
          <div className="case-block">
            <h3>Built with</h3>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="case-block">
            <h3>What shipped</h3>
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          {project.architecture && (
            <div className="case-block">
              <h3>How it works</h3>
              <p style={{ marginBottom: '0.75rem' }}>{project.architecture.label}</p>
              <div className="arch-flow">
                {project.architecture.steps.map((step, i) => (
                  <span key={step} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                    {step}
                    {i < project.architecture!.steps.length - 1 ? (
                      <i aria-hidden="true">→</i>
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="case-block">
            <h3>Reflection</h3>
            <p>{project.reflection}</p>
          </div>
        </div>
      </article>
    </div>
  )
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="case-block">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
