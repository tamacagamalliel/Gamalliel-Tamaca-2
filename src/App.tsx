import { useCallback, useEffect, useMemo, useState } from 'react'
import { projects, type SkillId } from './data/content'
import { useTheme } from './hooks/useTheme'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { SelectedWork } from './components/SelectedWork'
import { Capabilities } from './components/Capabilities'
import { Differentiator, Experience } from './components/Experience'
import { About, Certifications, Education, ResumeSnapshot } from './components/About'
import { Contact, Footer } from './components/Contact'
import { CommandPalette } from './components/CommandPalette'
import { CaseStudyPanel } from './components/CaseStudyPanel'
import { Reveal } from './components/Reveal'
import { Marquee } from './components/Marquee'

export default function App() {
  const { preference, cycle } = useTheme()
  const [cmdOpen, setCmdOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<SkillId | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'
      if (isCmdK) {
        e.preventDefault()
        setCmdOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openProject = useCallback((id: string) => {
    setActiveProject(id)
  }, [])

  const project = useMemo(
    () => projects.find((p) => p.id === activeProject) ?? null,
    [activeProject],
  )

  return (
    <>
      <Nav
        preference={preference}
        onCycleTheme={cycle}
        onOpenCommand={() => setCmdOpen(true)}
      />
      <Marquee />
      <main>
        <Hero reducedMotion={reducedMotion} />
        <Reveal>
          <SelectedWork onOpen={openProject} />
        </Reveal>
        <Reveal>
          <Capabilities
            selectedSkill={selectedSkill}
            onSelectSkill={setSelectedSkill}
            onOpenProject={openProject}
          />
        </Reveal>
        <Reveal>
          <Differentiator />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <ResumeSnapshot />
        </Reveal>
        <Reveal>
          <Certifications />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />

      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onOpenProject={openProject}
        onSelectSkill={(id) => setSelectedSkill(id as SkillId)}
      />

      {project ? (
        <CaseStudyPanel project={project} onClose={() => setActiveProject(null)} />
      ) : null}
    </>
  )
}
