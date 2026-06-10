import { MaterialIcon } from "./MaterialIcon"

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-container-padding text-center py-xl relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full luxury-gradient -z-10 opacity-50" />
      <h1 className="font-display-lg text-display-lg md:text-[64px] md:leading-[1.1] mb-md max-w-4xl mx-auto text-primary">
        Form Mapping &amp; Testing. Refined.
      </h1>
      <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-xl opacity-80">
        A premium Bento-style Chrome extension for modern developers.
        Effortlessly map DOM inputs and inject smart dummy data with total
        structural awareness.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-md">
        <button
          type="button"
          className="bg-primary text-background font-body-lg text-body-lg px-xl py-md rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-sm"
        >
          Get Infill for Chrome
          <MaterialIcon name="arrow_forward" />
        </button>
        <button
          type="button"
          className="bg-surface-container-low text-primary font-body-lg text-body-lg px-xl py-md rounded-lg font-bold hover:bg-surface-container-high transition-all"
        >
          View on GitHub
        </button>
      </div>
    </section>
  )
}
