import { projects, type Project } from '../data/content'
import { ProjectPreview } from './ProjectPreview'

type Props = {
  onOpen: (id: string) => void
}

export function SelectedWork({ onOpen }: Props) {
  const featured = projects.find((p) => p.featured) ?? projects[0]
  const rest = projects.filter((p) => p.id !== featured.id)

  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="section-head">
        <p className="section-kicker">Selected Work</p>
        <h2 className="section-title" id="work-title">
          Selected work that proves the craft.
        </h2>
        <p className="section-lede">
          A selection of websites, systems, and experiments I&apos;ve designed and developed — real
          client work, professional branding, experimental interfaces, and confidential internal
          tooling.
        </p>
      </div>

      <article className="featured">
        <button
          type="button"
          className="featured-preview-btn"
          onClick={() => onOpen(featured.id)}
          aria-label={`Open case study: ${featured.title}`}
        >
          <ProjectPreview project={featured} />
        </button>
        <div className="featured-copy">
          <p className="project-number">{featured.number} · Featured</p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="chip" data-tone="live">
              Live
            </span>
            <span className="chip">{featured.year}</span>
          </div>
          <h3 className="project-title">{featured.title}</h3>
          <p className="project-category">{featured.category}</p>
          <p className="project-one">{featured.oneLiner}</p>
          <div className="project-tech">
            {featured.tech.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="project-actions">
            <button type="button" className="btn btn-primary" onClick={() => onOpen(featured.id)}>
              View Case Study
            </button>
            {featured.liveUrl ? (
              <a
                className="btn btn-ghost"
                href={featured.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Site →
              </a>
            ) : null}
          </div>
        </div>
      </article>

      <div className="project-list">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpen} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (id: string) => void }) {
  return (
    <button
      type="button"
      className="project-card"
      onClick={() => onOpen(project.id)}
      aria-label={`Open case study: ${project.title}`}
    >
      <ProjectPreview project={project} compact />
      <div className="project-card-body">
        <p className="project-number">{project.number}</p>
        <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
          <span className="chip" data-tone={project.status === 'live' ? 'live' : 'private'}>
            {project.status === 'live' ? 'Live' : project.status === 'archived' ? 'Previous' : 'Private'}
          </span>
          <span className="chip">{project.category.split('·')[0].trim()}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-one" style={{ fontSize: '0.95rem', color: 'var(--ink-muted)' }}>
          {project.oneLiner}
        </p>
        <div className="project-tech">
          {project.tech.slice(0, 4).map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <span className="project-card-cta">
          {project.status === 'private'
            ? 'View private case study →'
            : project.status === 'archived'
              ? 'View previous concept →'
              : 'View case study →'}
        </span>
      </div>
    </button>
  )
}
