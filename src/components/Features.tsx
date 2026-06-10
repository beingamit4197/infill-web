import { MaterialIcon } from "./MaterialIcon"

const features = [
  {
    icon: "search_insights",
    title: "Instant Form Mapping",
    description:
      "Scans DOM inputs instantly. Deep inspection logic identifies even the most complex nested components in seconds.",
    className: "bg-surface-container-low",
  },
  {
    icon: "dynamic_form",
    title: "Smart Dummy Injection",
    description:
      "Autofills data respecting React/Vue states. We don't just set values; we trigger the necessary events to keep your UI in sync.",
    className: "bg-surface-container-high",
  },
  {
    icon: "visibility_off",
    title: "Monochromatic Efficiency",
    description:
      "Zero eye-strain, distraction-free environment. A UI that recedes into the background so you can focus on the logic.",
    className:
      "bg-surface-container-lowest border border-white/5",
  },
]

export function Features() {
  return (
    <section
      className="max-w-7xl mx-auto px-container-padding py-xl"
      id="features"
    >
      <h2 className="font-headline-lg text-headline-lg mb-xl text-center">
        Engineered for Focus
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`${feature.className} p-lg rounded-xl bento-card-shadow min-h-[320px] flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300`}
          >
            <MaterialIcon
              name={feature.icon}
              className="text-primary text-[48px]"
            />
            <div>
              <h3 className="font-title-md text-title-md text-primary mb-sm">
                {feature.title}
              </h3>
              <p className="font-body-md text-body-md text-secondary opacity-70">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
