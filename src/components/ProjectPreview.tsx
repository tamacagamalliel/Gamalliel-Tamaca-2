import { useEffect, useMemo, useRef, useState } from 'react'
import type { Project } from '../data/content'

type Props = {
  project: Project
  compact?: boolean
}

const slideshowMap: Record<string, string[]> = {
  'trends-themes': [
    '/previews/trends-themes-1.jpg',
    '/previews/trends-themes-2.jpg',
    '/previews/trends-themes-3.jpg',
    '/previews/trends-themes-mobile.jpg',
  ],
  ashanty: [
    '/previews/ashanty-1.jpg',
    '/previews/ashanty-2.jpg',
    '/previews/ashanty-3.jpg',
    '/previews/ashanty-mobile.jpg',
  ],
  instag: [
    '/previews/instag-1.jpg',
    '/previews/instag-2.jpg',
    '/previews/instag-3.jpg',
    '/previews/instag-mobile.jpg',
  ],
  'netbank-dashboard': [
    '/previews/netbank-login.jpg',
    '/previews/netbank-login-mobile.jpg',
  ],
}

export function ProjectPreview({ project, compact = false }: Props) {
  const host = project.liveUrl ? new URL(project.liveUrl).host : 'private / internal'
  const slides = useMemo(() => slideshowMap[project.id] ?? [], [project.id])
  const isPrivate = project.status === 'private'
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el || slides.length < 2) return

    const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (!coarse) return

    const io = new IntersectionObserver(
      ([entry]) => {
        setPlaying(entry.isIntersecting)
        if (!entry.isIntersecting) setActive(0)
      },
      { threshold: 0.55 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [slides.length])

  useEffect(() => {
    if (!playing || reducedMotion || slides.length < 2) return
    timerRef.current = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 2500)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [playing, reducedMotion, slides.length])

  const onEnter = () => setPlaying(true)
  const onLeave = () => {
    const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (coarse) return
    setPlaying(false)
    setActive(0)
  }

  return (
    <div
      ref={rootRef}
      className="project-preview"
      data-hovering={playing ? 'true' : 'false'}
      style={compact ? undefined : { minHeight: undefined }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <div className="preview-frame">
        <div className="preview-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <div className="preview-url">{host}</div>
        </div>
        {slides.length ? (
          <div className="preview-shot preview-slideshow">
            {slides.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={index === 0 ? `Screenshot of ${project.title}` : ''}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="preview-slide"
                data-active={index === active}
                aria-hidden={index !== active}
              />
            ))}
            {isPrivate ? <div className="preview-lock">Private project</div> : null}
            {playing && slides.length > 1 && !reducedMotion ? (
              <div className="preview-dots" aria-hidden="true">
                {slides.map((src, i) => (
                  <i key={src} data-active={i === active} />
                ))}
              </div>
            ) : null}
            <div className="preview-scrub" aria-hidden="true">
              <span style={{ width: playing ? `${((active + 1) / slides.length) * 100}%` : '0%' }} />
            </div>
          </div>
        ) : (
          <div className="preview-canvas" data-tone={project.previewTone}>
            <div className="preview-mock">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
            {isPrivate ? <div className="preview-lock">Private project</div> : null}
          </div>
        )}
      </div>
    </div>
  )
}
