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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="relative z-10">
        <AbstractBackground className="pointer-events-none -z-20" />

        <Navbar />

        <HeroSection />

        <Features />

        <HowItWorks />

        <Testimonials />

        <Pricing />

        <Stats />

        <FAQ />

        <FinalCTA />

        <Footer />
      </div>
    </div>
  )
}
