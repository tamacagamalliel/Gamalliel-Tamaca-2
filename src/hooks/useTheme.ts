import { useEffect, useState } from 'react'
import type { ThemePreference } from '../data/content'

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>(() => {
    const stored = localStorage.getItem('gt-theme') as ThemePreference | null
    return stored ?? 'system'
  })
  const [resolved, setResolved] = useState<'light' | 'dark'>(() =>
    preference === 'system' ? getSystemTheme() : preference,
  )

  useEffect(() => {
    const next = preference === 'system' ? getSystemTheme() : preference
    setResolved(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('gt-theme', preference)
  }, [preference])

  useEffect(() => {
    if (preference !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const next = mq.matches ? 'dark' : 'light'
      setResolved(next)
      document.documentElement.setAttribute('data-theme', next)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [preference])

  const cycle = () => {
    setPreference((prev) => (prev === 'system' ? 'light' : prev === 'light' ? 'dark' : 'system'))
  }

  return { preference, resolved, setPreference, cycle }
}
