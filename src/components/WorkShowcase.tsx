import { useEffect, useRef } from 'react'
import { projects } from '../data/content'

type Props = {
  reducedMotion?: boolean
}

const shots: Record<string, string> = {
  'trends-themes': '/previews/trends-themes-desktop.jpg',
  ashanty: '/previews/ashanty-desktop.jpg',
  instag: '/previews/instag-desktop.jpg',
}

export function WorkShowcase({ reducedMotion = false }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const featured = projects.find((p) => p.featured) ?? projects[0]
  const secondary = projects.filter((p) => p.id !== featured.id && p.status !== 'private').slice(0, 2)
  const privateProject = projects.find((p) => p.status === 'private')

  useEffect(() => {
    if (reducedMotion) return
    const root = rootRef.current
    if (!root) return

    const layers = Array.from(root.querySelectorAll<HTMLElement>('[data-depth]'))

    const onMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 8)
        layer.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`
      })
    }

    const onLeave = () => {
      layers.forEach((layer) => {
        layer.style.transform = 'translate3d(0,0,0)'
      })
    }

    root.addEventListener('pointermove', onMove)
    root.addEventListener('pointerleave', onLeave)
    return () => {
      root.removeEventListener('pointermove', onMove)
      root.removeEventListener('pointerleave', onLeave)
    }
  }, [reducedMotion])

  return (
    <div className="work-showcase" ref={rootRef} aria-hidden="true">
      <div className="ws-chrome">
        <div className="ws-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="ws-title">Selected work</div>
        <div className="ws-title">4 projects</div>
      </div>

      <div className="ws-stage">
        <a className="ws-main" data-depth="8" href="#work">
          <div className="ws-frame-bar">
            <span />
            <span />
            <span />
            <em>{featured.liveUrl ? new URL(featured.liveUrl).host : featured.title}</em>
          </div>
          <img src={shots[featured.id]} alt="" loading="eager" decoding="async" />
          <div className="ws-caption">
            <strong>{featured.title}</strong>
            <span>{featured.category.split('·')[0].trim()}</span>
          </div>
        </a>

        {secondary.map((project, index) => (
          <div
            key={project.id}
            className={`ws-card ws-card-${index + 1}`}
            data-depth={index === 0 ? 18 : 14}
          >
            <img src={shots[project.id]} alt="" loading="lazy" decoding="async" />
            <p>{project.title}</p>
          </div>
        ))}

        {privateProject ? (
          <div className="ws-private ws-private-shot" data-depth="10">
            <img src="/previews/netbank-login.jpg" alt="" loading="lazy" decoding="async" />
            <div className="ws-private-meta">
              <span className="ws-lock">Private</span>
              <strong>{privateProject.title}</strong>
              <p>Login · Internal ops</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
