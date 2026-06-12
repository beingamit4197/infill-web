import { MaterialIcon } from "./MaterialIcon"

const features = [
  {
    icon: "document_scanner",
    title: "Scan Page",
    description:
      "Detects inputs, selects, textareas, and file uploads — including hidden file inputs. No tab refresh needed.",
    className: "bg-surface-container-low",
  },
  {
    icon: "bolt",
    title: "Auto Fill All",
    description:
      "Fills every mapped field with realistic dummy data in one click, triggering the events React and Vue forms expect.",
    className: "bg-surface-container-high",
  },
  {
    icon: "image",
    title: "Image Uploads",
    description:
      "Fills file inputs with contextual sample images chosen from page topic and nearby form data.",
    className: "bg-surface-container-lowest border border-white/5",
  },
  {
    icon: "dock_to_right",
    title: "Side Panel",
    description:
      "Opens the same bento UI in Chrome's side panel when you need more room for complex forms.",
    className: "bg-surface-container-low",
  },
  {
    icon: "ink_eraser",
    title: "Clear Form",
    description:
      "Resets all scanned fields on the page instantly so you can start a fresh test run.",
    className: "bg-surface-container-high",
  },
  {
    icon: "visibility_off",
    title: "Monochromatic UI",
    description:
      "A distraction-free dark interface that stays out of your way while you focus on the logic.",
    className: "bg-surface-container-lowest border border-white/5",
  },
]

export function Features() {
  return (
    <section
      className="max-w-7xl mx-auto px-container-padding py-xl"
      id="features"
    >
      <h2 className="font-headline-lg text-headline-lg mb-xl text-center">
        Built for form testing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`${feature.className} p-lg rounded-xl bento-card-shadow min-h-[260px] flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300`}
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
