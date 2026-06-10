import { ExtensionMockup } from "./ExtensionMockup"

export function ProductShowcase() {
  return (
    <section className="max-w-6xl mx-auto px-container-padding py-xl">
      <div className="relative group">
        <div className="absolute -inset-10 bg-surface-container-lowest rounded-full opacity-30 blur-3xl group-hover:opacity-50 transition-opacity duration-1000" />
        <div className="relative bg-surface-container-lowest rounded-xl p-md bento-card-shadow overflow-hidden">
          <div className="bg-surface-container-low rounded-lg p-lg flex items-center justify-center min-h-[520px]">
            <ExtensionMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
