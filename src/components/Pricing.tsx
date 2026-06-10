import { MaterialIcon } from "./MaterialIcon"

const benefits = [
  "Full Form Mapping Capabilities",
  "Smart React/Vue State Support",
  "Unlimited Local Profiles",
  "Access to Source Code",
]

export function Pricing() {
  return (
    <section
      className="max-w-7xl mx-auto px-container-padding py-xl"
      id="pricing"
    >
      <div className="bg-surface-container-lowest p-xl rounded-xl bento-card-shadow max-w-md mx-auto relative overflow-hidden">
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-background text-[11px] font-semibold tracking-widest px-3 py-1 rounded-full">
            OPEN SOURCE
          </span>
        </div>

        <div className="text-center pt-2 mb-8">
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

        <ul className="space-y-4 mb-8">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <MaterialIcon
                name="check_circle"
                className="text-primary shrink-0 mt-0.5"
                size={20}
              />
              <span className="text-secondary font-body-md text-body-md leading-snug text-left">
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="w-full bg-primary text-background font-bold py-3.5 rounded-lg hover:opacity-90 transition-all"
        >
          Download Community Build
        </button>
      </div>
    </section>
  )
}
