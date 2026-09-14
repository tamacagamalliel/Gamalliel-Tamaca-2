import { Link } from 'react-router-dom'
import { site } from '../data/content'

export function NotFoundPage() {
  return (
    <main className="not-found" id="top">
      <p className="section-kicker">404</p>
      <h1 className="section-title">This page doesn&apos;t exist.</h1>
      <p className="section-lede">
        Looks like this route was archived — or never shipped. Head back to the portfolio.
      </p>
      <div className="project-actions">
        <Link className="btn btn-primary" to="/">
          Return to profile
        </Link>
        <a className="btn btn-ghost" href={`mailto:${site.email}`}>
          Contact
        </a>
      </div>
    </main>
  )
}
