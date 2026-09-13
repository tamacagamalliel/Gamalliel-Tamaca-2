import { hero, site } from '../data/content'
import { WorkShowcase } from './WorkShowcase'

type Props = {
  reducedMotion?: boolean
}

export function Hero({ reducedMotion }: Props) {
  return (
    <header className="hero" id="top">
      <div className="hero-copy">
        <div className="hero-identity">
          <img
            className="hero-photo"
            src="/profile.jpg"
            alt="Gamalliel Tamaca"
            width={88}
            height={88}
            decoding="async"
          />
          <div>
            <p className="hero-label">{hero.label}</p>
            <p className="hero-photo-caption">Quezon City · IT Ops + Web</p>
          </div>
        </div>
        <h1 className="hero-title">
          <span>{hero.roleLines[0]}</span>
          <span className="amp">{hero.roleLines[1]}</span>
        </h1>
        <p className="hero-statement">{hero.statement}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">
            View My Work
          </a>
          <a className="btn btn-ghost" href={site.cvPath}>
            Download CV
          </a>
        </div>
        <div className="hero-secondary">
          {site.linkedin ? (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          ) : null}
          <a href={`mailto:${site.email}`}>Contact</a>
          <a href="#experience">Experience</a>
        </div>
        <dl className="hero-meta">
          <div>
            <dt>Based in</dt>
            <dd>{site.location}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>IT Ops + Web</dd>
          </div>
        </dl>
      </div>
      <WorkShowcase reducedMotion={reducedMotion} />
    </header>
  )
}
