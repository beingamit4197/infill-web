const footerLinks = {
  Legal: [
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
  ],
  Support: [
    { label: "Docs", href: "#" },
    { label: "GitHub", href: "#" },
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
          &copy; 2024 Infill. All rights reserved.
        </div>
      </div>
      <div className="flex flex-wrap gap-xl">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section} className="flex flex-col gap-sm">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-xs">
              {section}
            </span>
            {links.map((link) => (
              <a
                key={link.label}
                className="text-secondary font-body-md text-body-md hover:text-primary transition-colors duration-200"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}
