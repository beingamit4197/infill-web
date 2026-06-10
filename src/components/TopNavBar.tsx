export function TopNavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-container-padding py-md max-w-7xl mx-auto bg-background/80 backdrop-blur-md">
      <div className="font-headline-lg-mobile text-headline-lg-mobile font-extrabold text-primary tracking-tighter">
        Infill
      </div>
      <div className="hidden md:flex items-center gap-lg">
        <a
          className="text-secondary-fixed-dim font-body-lg text-body-lg hover:text-primary transition-opacity duration-200"
          href="#features"
        >
          Features
        </a>
        <a
          className="text-secondary-fixed-dim font-body-lg text-body-lg hover:text-primary transition-opacity duration-200"
          href="#pricing"
        >
          Pricing
        </a>
      </div>
      <button
        type="button"
        className="bg-primary text-on-primary font-body-lg text-body-lg py-sm px-lg rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all duration-200"
      >
        Install Extension
      </button>
    </nav>
  )
}
