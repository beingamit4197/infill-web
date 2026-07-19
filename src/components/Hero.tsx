import { MaterialIcon } from "./MaterialIcon"
import { CHROME_WEB_STORE_URL, GITHUB_REPO_URL } from "../lib/site"
import { HeroBackdrop } from "./HeroBackdrop"

export function Hero() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
      <HeroBackdrop />

      <div className="relative z-10 max-w-7xl mx-auto px-container-padding w-full text-center pt-24 pb-16">
        <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-md opacity-70">
          Chrome extension for developers &amp; QA
        </p>
        <h1 className="font-display-lg text-display-lg md:text-[64px] md:leading-[1.1] mb-md max-w-4xl mx-auto text-primary">
          Fill web forms in{" "}
          <span className="text-[#863bff]">seconds</span>.
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-xl opacity-80">
          Scan fields, auto-fill realistic data, run AI Analyze with OpenAI or
          Gemini, shuffle values, and upload contextual sample images — all from
          a compact bento-style Chrome extension.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-md">
          <a
            href={CHROME_WEB_STORE_URL}
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
            className="bg-surface-container-low/80 backdrop-blur-sm text-primary font-body-lg text-body-lg px-xl py-md rounded-lg font-bold hover:bg-surface-container-high transition-all border border-white/5"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
