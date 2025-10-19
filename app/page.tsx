import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Activity,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  BarChart3,
  Brain,
  Target,
  Star,
  Quote,
} from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import Features from "@/components/landing/features"
import { AbstractBackground } from "@/components/layout/abstract-background"
import Stats from "@/components/landing/stats"
import FAQ from "@/components/landing/faq"
import About from "@/components/landing/about"
import Integrations from "@/components/landing/integrations"
import Resources from "@/components/landing/resources"
import Contact from "@/components/landing/contact"
import HowItWorks from "@/components/landing/how-it-works"
import Testimonials from "@/components/landing/testimonials"
import Pricing from "@/components/landing/pricing"
import FinalCTA from "@/components/landing/final-cta"
import Section from "@/components/landing/section"
import HeroSection from "@/components/landing/hero/HeroSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden group">
      <div className="relative z-10">
        <AbstractBackground className="pointer-events-none -z-20" />

        <Navbar />

        {/* Hero + Features (client components) */}
        <HeroSection />

        <Section id="about" full center>
          <About />
        </Section>

        <Section id="features" full>
          <Features />
        </Section>

        <Section id="integrations" full center>
          <Integrations />
        </Section>

        <Section id="how-it-works" full>
          <HowItWorks />
        </Section>

        <Section id="testimonials" full>
          <Testimonials />
        </Section>

        <Section id="pricing" full>
          <Pricing />
        </Section>

        {/* Stats Section */}
        <Section id="stats" full center>
          <Stats />
        </Section>

        {/* FAQ Section */}
        <Section id="faq" full>
          <FAQ />
        </Section>

        <Section id="resources" full>
          <Resources />
        </Section>

        {/* Final CTA Section */}
        <Section id="contact" full center>
          <Contact />
        </Section>

        <Section id="final-cta" full center>
          <FinalCTA />
        </Section>
        <Footer />
      </div>
    </div>
  )
}
