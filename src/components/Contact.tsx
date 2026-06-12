import { Link } from "react-router-dom"
import { GITHUB_ISSUES_URL, GITHUB_NEW_ISSUE_URL } from "../lib/site"

export function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-container-padding py-xl mb-xl">
      <div className="w-full max-w-2xl mx-auto bg-surface-container-lowest rounded-xl p-xl md:px-2xl md:py-2xl bento-card-shadow text-center">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          Get in Touch
        </h2>
        <p className="font-body-md text-body-md text-secondary leading-relaxed mb-10">
          Questions, bug reports, and contributions are handled on GitHub.
          Check the support FAQ first — it covers scanning, AI features, and
          image uploads.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/support"
            className="w-full sm:flex-1 bg-surface-container-high text-primary font-body-lg text-body-lg px-xl py-md rounded-lg font-bold hover:bg-surface-bright transition-all text-center"
          >
            Visit Support
          </Link>
          <a
            href={GITHUB_NEW_ISSUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 bg-primary text-background font-body-lg text-body-lg px-xl py-md rounded-lg font-bold hover:opacity-90 transition-all text-center"
          >
            Report on GitHub
          </a>
        </div>

        <p className="mt-6 text-secondary font-body-md text-body-md opacity-60">
          <a
            href={GITHUB_ISSUES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            View all issues
          </a>
        </p>
      </div>
    </section>
  )
}
