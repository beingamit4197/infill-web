import { MaterialIcon } from "./MaterialIcon"

const aiCapabilities = [
  {
    icon: "auto_awesome",
    title: "AI Analyze",
    description:
      "Reads page title, headings, labels, and field metadata to generate context-aware test values in one click.",
  },
  {
    icon: "shuffle",
    title: "Shuffle All",
    description:
      "Regenerates every mapped field with fresh AI values — or random data when no API key is set.",
  },
  {
    icon: "sync_alt",
    title: "Per-field Shuffle",
    description:
      "Shuffle a single field from its card without re-running a full form scan.",
  },
]

const trustPoints = [
  "Your OpenAI API key is stored locally in Chrome — never on Infill servers.",
  "AI runs only when you click Analyze or Shuffle — no background requests.",
  "Uses OpenAI directly (gpt-4o-mini) with your own key — bring your own key (BYOK).",
  "Without a key, scan, auto-fill, clear, and random shuffle still work for free.",
]

export function AiFeatures() {
  return (
    <section
      className="max-w-7xl mx-auto px-container-padding py-xl"
      id="ai"
    >
      <div className="text-center mb-xl">
        <span className="inline-block font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-sm">
          AI-powered
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-md">
          Context-aware fills, on your terms
        </h2>
        <p className="font-body-lg text-body-lg text-secondary opacity-80 max-w-2xl mx-auto">
          Infill sends form and page context to OpenAI only when you run AI
          Analyze or Shuffle. Paste your API key once — it stays in your
          browser.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">
        {aiCapabilities.map((item) => (
          <div
            key={item.title}
            className="bg-surface-container-low p-lg rounded-xl bento-card-shadow border border-white/5 flex flex-col gap-md"
          >
            <MaterialIcon
              name={item.icon}
              className="text-primary text-[40px]"
            />
            <div>
              <h3 className="font-title-md text-title-md text-primary mb-sm">
                {item.title}
              </h3>
              <p className="font-body-md text-body-md text-secondary opacity-70">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-container-lowest rounded-xl p-lg md:p-xl border border-white/5 max-w-3xl mx-auto">
        <h3 className="font-title-md text-title-md text-primary mb-md text-center">
          Privacy-first AI
        </h3>
        <ul className="space-y-3">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <MaterialIcon
                name="verified_user"
                className="text-primary shrink-0 mt-0.5"
                size={18}
              />
              <span className="text-secondary font-body-md text-body-md leading-snug">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
