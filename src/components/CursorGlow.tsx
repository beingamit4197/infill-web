import { useEffect, useRef } from "react"

/**
 * Soft cursor-following glow — effect only, no objects.
 * Disabled when the user prefers reduced motion or is on a coarse pointer.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: -9999, y: -9999 })
  const current = useRef({ x: -9999, y: -9999 })
  const raf = useRef(0)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const coarse = window.matchMedia("(pointer: coarse)").matches
    if (prefersReduced || coarse) {
      glow.style.display = "none"
      return
    }

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      glow.style.opacity = "1"
    }

    const onLeave = () => {
      glow.style.opacity = "0"
    }

    const tick = () => {
      const ease = 0.12
      current.current.x += (target.current.x - current.current.x) * ease
      current.current.y += (target.current.y - current.current.y) * ease
      glow.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
      raf.current = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.documentElement.addEventListener("mouseleave", onLeave)
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[60] opacity-0 mix-blend-screen will-change-transform"
      style={{
        width: 420,
        height: 420,
        background:
          "radial-gradient(circle, rgba(134,59,255,0.18) 0%, rgba(134,59,255,0.06) 35%, transparent 70%)",
        transition: "opacity 0.4s ease",
      }}
    />
  )
}
