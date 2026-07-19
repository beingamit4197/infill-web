import {
  TopNavBar,
  Hero,
  ProductShowcase,
  Features,
  AiFeatures,
  Pricing,
  Contact,
  Footer,
} from "../components"
import { CursorGlow } from "../components/CursorGlow"
import { useScrollReveal } from "../hooks/useScrollReveal"

export function HomePage() {
  useScrollReveal()

  return (
    <div className="bg-background overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <CursorGlow />
      <TopNavBar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <AiFeatures />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
