import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { BrandLink } from "./Logo"
import {
  DOCS_URL,
  GITHUB_REPO_URL,
  PRIVACY_POLICY_URL,
  SUPPORT_URL,
} from "../lib/site"

type DocLayoutProps = {
  title: string
  children: ReactNode
}

export function DocLayout({ title, children }: DocLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-primary">
      <header className="border-b border-white/8 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-container-padding py-md flex items-center justify-between gap-md">
          <BrandLink />
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-secondary">
            <Link to="/docs" className="hover:text-primary transition-colors">
              Docs
            </Link>
            <Link
              to="/docs/openai-api-key"
              className="hover:text-primary transition-colors"
            >
              OpenAI key
            </Link>
            <Link to="/support" className="hover:text-primary transition-colors">
              Support
            </Link>
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-container-padding py-xl">
        <h1 className="font-headline-lg text-headline-lg mb-2">{title}</h1>
        <div className="prose-invert space-y-6 text-secondary font-body-md text-body-md leading-relaxed [&_h2]:text-primary [&_h2]:font-title-md [&_h2]:text-title-md [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-primary [&_h3]:font-body-lg [&_h3]:text-body-lg [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_code]:bg-surface-container-low [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[13px] [&_strong]:text-primary">
          {children}
        </div>
      </main>

      <footer className="border-t border-white/8 py-lg text-center text-[12px] text-secondary/60">
        <p>
          <a href={DOCS_URL} className="hover:text-primary">
            Docs
          </a>
          {" · "}
          <a href={SUPPORT_URL} className="hover:text-primary">
            Support
          </a>
          {" · "}
          <a href={PRIVACY_POLICY_URL} className="hover:text-primary">
            Privacy
          </a>
        </p>
      </footer>
    </div>
  )
}
