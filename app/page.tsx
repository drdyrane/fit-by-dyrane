import { Navbar } from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import Features from "@/components/landing/features"
import { AbstractBackground } from "@/components/layout/abstract-background"
import Stats from "@/components/landing/stats"
import FAQ from "@/components/landing/faq"
import HowItWorks from "@/components/landing/how-it-works"
import Testimonials from "@/components/landing/testimonials"
import Pricing from "@/components/landing/pricing"
import FinalCTA from "@/components/landing/final-cta"
import HeroSection from "@/components/landing/hero/HeroSection"
import ImageryShowcase from "@/components/landing/imagery-showcase"
import SplitImagery from "@/components/landing/split-imagery"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="relative z-10">
        <AbstractBackground className="pointer-events-none -z-20" />

        <Navbar />

        <HeroSection />

        <section id="features">
          <Features />
        </section>

        <ImageryShowcase />

        <section id="how-it-works">
          <HowItWorks />
        </section>

        <SplitImagery />

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <Stats />

        <FAQ />

        <FinalCTA />

        <Footer />
      </div>
    </div>
  )
}
