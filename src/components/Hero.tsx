import { MaterialIcon } from "./MaterialIcon"
import { GITHUB_REPO_URL } from "../lib/site"

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-container-padding text-center py-xl relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full luxury-gradient -z-10 opacity-50" />
      <h1 className="font-display-lg text-display-lg md:text-[64px] md:leading-[1.1] mb-md max-w-4xl mx-auto text-primary">
        Fill web forms in seconds.
      </h1>
      <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-xl opacity-80">
        Scan fields, auto-fill realistic data, run AI-powered analyze, shuffle
        values, and upload contextual sample images — all from a compact
        bento-style Chrome extension built for developers and QA.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-md">
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-background font-body-lg text-body-lg px-xl py-md rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-sm"
        >
          Get Infill for Chrome
          <MaterialIcon name="arrow_forward" />
        </a>
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-surface-container-low text-primary font-body-lg text-body-lg px-xl py-md rounded-lg font-bold hover:bg-surface-container-high transition-all"
        >
          View on GitHub
        </a>
      </div>
    </section>
  )
}
