import { useEffect, useState } from 'react'
import { site } from '../data/content'
import type { ThemePreference } from '../data/content'

type Props = {
  preference: ThemePreference
  onCycleTheme: () => void
  onOpenCommand: () => void
  resumeMode: boolean
  onToggleResumeMode: () => void
}

const links = [
  { href: '#work', label: 'Work' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Nav({
  preference,
  onCycleTheme,
  onOpenCommand,
  resumeMode,
  onToggleResumeMode,
}: Props) {
  const [open, setOpen] = useState(false)
  const isMac =
    typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || '')

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const themeLabel =
    preference === 'system' ? 'System theme' : preference === 'light' ? 'Light theme' : 'Dark theme'

  return (
    <>
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <nav className="site-nav" aria-label="Primary">
        <a className="brand" href="#top">
          <span className="brand-name">{site.name}</span>
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button type="button" className="kbd-hint" onClick={onOpenCommand} aria-label="Open command palette">
            Search <kbd>{isMac ? '⌘' : 'Ctrl'}</kbd>
            <kbd>K</kbd>
          </button>
          <button
            type="button"
            className="icon-btn nav-hide-sm"
            onClick={onToggleResumeMode}
            aria-pressed={resumeMode}
            title="Resume mode"
            aria-label="Toggle resume mode"
          >
            CV
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onCycleTheme}
            title={themeLabel}
            aria-label={themeLabel}
          >
            {preference === 'dark' ? '☾' : preference === 'light' ? '☀' : '◐'}
          </button>
          <a className="btn btn-primary nav-cv-btn" href={site.cvPath}>
            CV
          </a>
          <button
            type="button"
            className="icon-btn nav-burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="mobile-drawer" id="mobile-menu">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href={site.cvPath} onClick={() => setOpen(false)}>
            Download CV
          </a>
          <button type="button" className="btn btn-ghost" onClick={onOpenCommand}>
            Search (Ctrl/⌘ K)
          </button>
        </div>
      ) : null}
    </>
  )
}
