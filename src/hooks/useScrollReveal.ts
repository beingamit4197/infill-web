import { useEffect } from "react"

export function useScrollReveal() {
  useEffect(() => {
    const cards = document.querySelectorAll(".bento-card-shadow")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.opacity = "1"
            target.style.transform = "translateY(0)"
          }
        })
      },
      { threshold: 0.1 },
    )

    cards.forEach((card) => {
      const el = card as HTMLElement
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])
}
