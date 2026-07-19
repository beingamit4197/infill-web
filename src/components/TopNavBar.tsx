import { CHROME_WEB_STORE_URL } from "../lib/site"
import { BrandLink } from "./Logo"

export function TopNavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-8xl mx-auto flex justify-between items-center px-container-padding py-md">
        <BrandLink />
        <div className="hidden md:flex items-center gap-lg">
          <a
            className="text-secondary-fixed-dim font-body-lg text-body-lg hover:text-primary transition-opacity duration-200"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-secondary-fixed-dim font-body-lg text-body-lg hover:text-primary transition-opacity duration-200"
            href="#ai"
          >
            AI
          </a>
          <a
            className="text-secondary-fixed-dim font-body-lg text-body-lg hover:text-primary transition-opacity duration-200"
            href="#pricing"
          >
            Pricing
          </a>
        </div>
        <a
          href={CHROME_WEB_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-on-primary font-body-lg text-body-lg py-sm px-lg rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all duration-200"
        >
          Add to Chrome
        </a>
      </div>
    </nav>
  )
}
