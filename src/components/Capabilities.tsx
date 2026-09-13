import { useMemo, useState } from 'react'
import { experience, projects, skills, type SkillId } from '../data/content'

type Props = {
  selectedSkill: SkillId | null
  onSelectSkill: (id: SkillId | null) => void
  onOpenProject: (id: string) => void
}

export function Capabilities({ selectedSkill, onSelectSkill, onOpenProject }: Props) {
  const groups = useMemo(() => {
    const map = new Map<string, typeof skills>()
    for (const skill of skills) {
      const list = map.get(skill.group) ?? []
      list.push(skill)
      map.set(skill.group, list)
    }
    return Array.from(map.entries())
  }, [])

  const active = skills.find((s) => s.id === selectedSkill) ?? null

  return (
    <section className="section" id="capabilities" aria-labelledby="cap-title">
      <div className="capabilities">
        <div className="section-head">
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title" id="cap-title">
            Skills connected to real work.
          </h2>
          <p className="section-lede">
            Click a capability to see where it shows up — in projects or professional experience.
          </p>
        </div>

        <div className="cap-groups">
          {groups.map(([group, list]) => (
            <div className="cap-group" key={group}>
              <h3>{group}</h3>
              <div className="cap-list">
                {list.map((skill) => (
                  <button
                    key={skill.id}
                    type="button"
                    className="skill-btn"
                    data-active={selectedSkill === skill.id}
                    onClick={() => onSelectSkill(selectedSkill === skill.id ? null : skill.id)}
                  >
                    {skill.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {active ? (
          <div className="skill-detail" aria-live="polite">
            <h3>{active.label}</h3>
            <p style={{ margin: 0, color: 'var(--ink-muted)' }}>
              Connected work under {active.group.toLowerCase()}.
            </p>
            <div className="skill-links">
              {(active.relatedProjects ?? []).map((pid) => {
                const project = projects.find((p) => p.id === pid)
                if (!project) return null
                return (
                  <button
                    key={pid}
                    type="button"
                    className="chip"
                    data-active="true"
                    onClick={() => onOpenProject(pid)}
                  >
                    {project.title}
                  </button>
                )
              })}
              {(active.relatedExperience ?? []).map((eid) => {
                const role = experience.find((e) => e.id === eid)
                if (!role) return null
                return (
                  <a key={eid} className="chip" href="#experience">
                    {role.company}
                  </a>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function useSkillSelection(initial: SkillId | null = null) {
  return useState<SkillId | null>(initial)
}
