import { ExtensionMockup } from "./ExtensionMockup"
import { MaterialIcon } from "./MaterialIcon"
import { CHROME_WEB_STORE_URL } from "../lib/site"

const highlights = [
  {
    icon: "document_scanner",
    title: "Scan any page",
    text: "Detect inputs, selects, textareas, and file fields — including hidden uploads.",
  },
  {
    icon: "auto_awesome",
    title: "AI when you need it",
    text: "OpenAI or Gemini with your own key. Context-aware values from page content.",
  },
  {
    icon: "bolt",
    title: "One-click fill",
    text: "Auto Fill All or fill field-by-field. Shuffle anytime. Clear when you're done.",
  },
]

export function ProductShowcase() {
  return (
    <section
      id="product"
      className="max-w-7xl mx-auto px-container-padding py-xl md:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl lg:gap-16 items-center">
        {/* Left — content */}
        <div className="order-2 lg:order-1 min-w-0 w-full">
          <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-sm">
            Inside the extension
          </p>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-md">
            A focused popup for every form you test
          </h2>
          <p className="font-body-lg text-body-lg text-secondary opacity-80 mb-xl leading-relaxed max-w-[36rem]">
            Map fields, review values, and fill in seconds — without leaving the
            page. Side panel available when you need more room.
          </p>

          <ul className="space-y-lg mb-xl">
            {highlights.map((item) => (
              <li key={item.title} className="flex gap-md items-start">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low border border-white/5 flex items-center justify-center shrink-0">
                  <MaterialIcon
                    name={item.icon}
                    className="text-primary"
                    size={22}
                  />
                </div>
                <div>
                  <h3 className="font-title-md text-[16px] leading-6 text-primary mb-xs">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary opacity-70 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={CHROME_WEB_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-sm bg-primary text-background font-body-lg text-body-lg px-lg py-md rounded-lg font-bold hover:opacity-90 transition-all"
          >
            Try it free
            <MaterialIcon name="arrow_forward" size={20} />
          </a>
        </div>

        {/* Right — mockup */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <div className="absolute -inset-8 bg-[#863bff]/15 rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="relative">
            <ExtensionMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
