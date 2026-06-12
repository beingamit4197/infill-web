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
import { useScrollReveal } from "../hooks/useScrollReveal"

export function HomePage() {
  useScrollReveal()

  return (
    <div className="bg-background overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <TopNavBar />
      <main className="pt-32">
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
