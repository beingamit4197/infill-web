import { Link } from "react-router-dom"
import { GITHUB_REPO_URL } from "../lib/site"

type FooterLink =
  | { label: string; to: string }
  | { label: string; href: string }

const footerLinks: Record<string, FooterLink[]> = {
  Legal: [{ label: "Privacy", to: "/privacy-policy" }],
  Support: [
    { label: "Docs", to: "/docs" },
    { label: "Help", to: "/support" },
    { label: "GitHub", href: GITHUB_REPO_URL },
  ],
}

export function Footer() {
  return (
    <footer className="w-full px-container-padding py-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-lg bg-surface-container-lowest">
      <div className="flex flex-col gap-sm">
        <div className="font-title-md text-title-md text-primary font-extrabold tracking-tighter">
          Infill
        </div>
        <div className="text-secondary font-body-md text-body-md opacity-60">
          &copy; {new Date().getFullYear()} Infill. All rights reserved.
        </div>
      </div>
      <div className="flex flex-wrap gap-xl">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section} className="flex flex-col gap-sm">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-xs">
              {section}
            </span>
            {links.map((link) =>
              "to" in link ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-secondary font-body-md text-body-md hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-body-md text-body-md hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        ))}
      </div>
    </footer>
  )
}
