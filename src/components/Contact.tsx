export function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-container-padding py-xl mb-xl">
      <div className="text-center mb-xl">
        <h2 className="font-headline-lg text-headline-lg mb-sm">
          Get in Touch
        </h2>
        <p className="font-body-md text-body-md text-secondary">
          Have questions or want to contribute? We&apos;re active on GitHub.
        </p>
      </div>
      <div className="space-y-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="space-y-sm">
            <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest px-xs">
              Name
            </label>
            <input
              className="w-full bg-surface-container-low border-none rounded-lg text-primary placeholder:text-[#555555] focus:bg-surface-container-high focus:ring-0 transition-all py-md px-lg"
              placeholder="Your name"
              type="text"
            />
          </div>
          <div className="space-y-sm">
            <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest px-xs">
              Email
            </label>
            <input
              className="w-full bg-surface-container-low border-none rounded-lg text-primary placeholder:text-[#555555] focus:bg-surface-container-high focus:ring-0 transition-all py-md px-lg"
              placeholder="your@email.com"
              type="email"
            />
          </div>
        </div>
        <div className="space-y-sm">
          <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest px-xs">
            Message
          </label>
          <textarea
            className="w-full bg-surface-container-low border-none rounded-lg text-primary placeholder:text-[#555555] focus:bg-surface-container-high focus:ring-0 transition-all py-md px-lg resize-none"
            placeholder="How can we help?"
            rows={4}
          />
        </div>
        <button
          type="button"
          className="w-full bg-surface-container-high text-primary font-bold py-md rounded-lg hover:bg-surface-bright transition-all"
        >
          Send Message
        </button>
      </div>
    </section>
  )
}
