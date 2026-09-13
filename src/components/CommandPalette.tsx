import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { experience, projects, site, skills } from '../data/content'

export type CommandItem = {
  id: string
  label: string
  group: string
  action: () => void
}

type Props = {
  open: boolean
  onClose: () => void
  onOpenProject: (id: string) => void
  onSelectSkill: (id: string) => void
}

export function CommandPalette({ open, onClose, onOpenProject, onSelectSkill }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const listId = useId()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)

  const items = useMemo<CommandItem[]>(() => {
    const nav: CommandItem[] = [
      { id: 'nav-work', label: 'Go to Work', group: 'Navigate', action: () => scrollToId('work') },
      { id: 'nav-capabilities', label: 'Go to Capabilities', group: 'Navigate', action: () => scrollToId('capabilities') },
      { id: 'nav-experience', label: 'Go to Experience', group: 'Navigate', action: () => scrollToId('experience') },
      { id: 'nav-about', label: 'Go to About', group: 'Navigate', action: () => scrollToId('about') },
      { id: 'nav-contact', label: 'Go to Contact', group: 'Navigate', action: () => scrollToId('contact') },
      {
        id: 'cv',
        label: 'Download / View CV',
        group: 'Actions',
        action: () => {
          window.location.href = site.cvPath
        },
      },
      {
        id: 'email',
        label: `Email ${site.email}`,
        group: 'Actions',
        action: () => {
          window.location.href = `mailto:${site.email}`
        },
      },
    ]

    if (site.linkedin) {
      nav.push({
        id: 'linkedin',
        label: 'Open LinkedIn',
        group: 'Actions',
        action: () => window.open(site.linkedin, '_blank', 'noopener,noreferrer'),
      })
    }

    const projectItems = projects.map((p) => ({
      id: `project-${p.id}`,
      label: p.title,
      group: 'Projects',
      action: () => onOpenProject(p.id),
    }))

    const skillItems = skills.map((s) => ({
      id: `skill-${s.id}`,
      label: s.label,
      group: 'Skills',
      action: () => {
        scrollToId('capabilities')
        onSelectSkill(s.id)
      },
    }))

    const expItems = experience.map((e) => ({
      id: `exp-${e.id}`,
      label: `${e.role} · ${e.company}`,
      group: 'Experience',
      action: () => scrollToId('experience'),
    }))

    return [...nav, ...projectItems, ...skillItems, ...expItems]
  }, [onOpenProject, onSelectSkill])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q),
    )
  }, [items, query])

  useEffect(() => {
    if (!open) return
    setQuery('')
    setActive(0)
    const t = window.setTimeout(() => inputRef.current?.focus(), 20)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    setActive(0)
  }, [query])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActive((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActive((i) => Math.max(i - 1, 0))
      }
      if (e.key === 'Enter') {
        e.preventDefault()
        const item = filtered[active]
        if (item) {
          item.action()
          onClose()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, filtered, active, onClose])

  if (!open) return null

  return (
    <div className="cmd-overlay" role="presentation" onClick={onClose}>
      <div
        className="cmd-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          className="cmd-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects, skills, experience…"
          aria-controls={listId}
          aria-autocomplete="list"
        />
        {filtered.length === 0 ? (
          <p className="cmd-empty">No matches.</p>
        ) : (
          <ul className="cmd-list" id={listId} role="listbox">
            {filtered.map((item, index) => (
              <li key={item.id} role="option" aria-selected={index === active}>
                <button
                  type="button"
                  className="cmd-item"
                  data-active={index === active}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => {
                    item.action()
                    onClose()
                  }}
                >
                  <span>{item.label}</span>
                  <small>{item.group}</small>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
