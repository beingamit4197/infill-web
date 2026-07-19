import { MaterialIcon } from "./MaterialIcon"
import { CHROME_WEB_STORE_URL } from "../lib/site"

const benefits = [
  "Scan, auto-fill, and clear forms",
  "AI Analyze & Shuffle with OpenAI or Gemini (BYOK)",
  "Contextual image uploads for file fields",
  "Open source — full access to the code",
]

export function Pricing() {
  return (
    <section
      className="max-w-7xl mx-auto px-container-padding py-xl"
      id="pricing"
    >
      <div className="bg-surface-container-lowest p-xl md:px-2xl md:py-2xl rounded-xl bento-card-shadow w-full max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
          <div className="text-center sm:text-left">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Community Edition
            </h2>
            <div className="text-[48px] font-extrabold text-primary tracking-tighter leading-none">
              $0
              <span className="text-secondary text-body-lg font-medium ml-1">
                / forever
              </span>
            </div>
          </div>
          <span className="self-center sm:self-start shrink-0 bg-primary text-background text-[11px] font-semibold tracking-widest px-3 py-1 rounded-full">
            OPEN SOURCE
          </span>
        </div>

        <ul className="space-y-4 mb-10">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <MaterialIcon
                name="check_circle"
                className="text-primary shrink-0 mt-0.5"
                size={20}
              />
              <span className="text-secondary font-body-md text-body-md leading-relaxed text-left">
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={CHROME_WEB_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-primary text-background font-bold py-3.5 rounded-lg hover:opacity-90 transition-all"
        >
          Add to Chrome
        </a>
      </div>
    </section>
  )
}
