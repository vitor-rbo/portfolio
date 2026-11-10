import { useCallback, useEffect, useState } from 'react'
import type { RefObject } from 'react'

/** The gradient is skipped for reduced-motion visitors and devices without WebGL. */
export function canUseShader(): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

/**
 * Lifecycle of the animated gradient:
 * - waits until the page has painted and the browser is idle before loading it,
 * - reports when it is ready, so the fade-in can start,
 * - if a target element is given, unmounts it when that element is over a screen away
 *   (saving GPU and battery) and fades it in again on the way back,
 * - falls back (allowed = false) if it fails.
 */
export function useGradientBackdrop(targetRef?: RefObject<HTMLElement | null>) {
  const [allowed, setAllowed] = useState(canUseShader)
  const [started, setStarted] = useState(false)
  const [nearView, setNearView] = useState(true)
  const [ready, setReady] = useState(false)

  const onReady = useCallback(() => setReady(true), [])
  const onFailed = useCallback(() => {
    setReady(false)
    setAllowed(false)
  }, [])

  useEffect(() => {
    if (!allowed) return
    const start = () => setStarted(true)
    // Safari has no requestIdleCallback, hence the optional type and the timer fallback.
    const idle = window.requestIdleCallback as typeof window.requestIdleCallback | undefined
    if (idle) {
      const id = idle(start, { timeout: 300 })
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(start, 150)
    return () => window.clearTimeout(id)
  }, [allowed])

  useEffect(() => {
    const el = targetRef?.current
    if (!allowed || !el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setNearView(entry.isIntersecting)
        if (!entry.isIntersecting) setReady(false)
      },
      { rootMargin: '100% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [allowed, targetRef])

  return { allowed, mounted: allowed && started && nearView, ready, onReady, onFailed }
}

export type GradientBackdrop = ReturnType<typeof useGradientBackdrop>
