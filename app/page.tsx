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
import { Footer } from "@/components/shared/footer"
import Hero from "@/components/landing/hero"
import Features from "@/components/landing/features"
import { AbstractBackground } from "@/components/layout/abstract-background"
import Stats from "@/components/landing/stats"
import FAQ from "@/components/landing/faq"
import About from "@/components/landing/about"
import Integrations from "@/components/landing/integrations"
import Resources from "@/components/landing/resources"
import Contact from "@/components/landing/contact"
import Section from "@/components/landing/section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="relative z-10">
        <Navbar />

        {/* Hero + Features (client components) */}
        <Hero />
        <About />
        <Features />
        <Integrations />

        {/* How It Works Section */}
        <Section id="how-it-works" className="bg-muted/30 relative" title="Get started in minutes" subtitle="Simple onboarding process to personalize your wellness journey">
          <AbstractBackground className="pointer-events-none -z-20" />
          <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Create Account",
                description: "Sign up in seconds with email. No credit card required.",
              },
              {
                step: "02",
                title: "Set Your Goals",
                description: "Choose wellness goals and customize your tracking preferences.",
              },
              {
                step: "03",
                title: "Start Tracking",
                description: "Log your first metrics and receive personalized AI insights.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-white mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section id="testimonials" title="Loved by wellness enthusiasts" subtitle="Join thousands of people transforming their health journey">
          <AbstractBackground className="pointer-events-none -z-20" />
          <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Fitness Coach",
                content:
                  "Fit by Dyrane has completely transformed how I track my wellness. The AI insights are incredibly accurate and helpful.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                content:
                  "Finally, a wellness app that respects my privacy and actually helps me build better habits. The interface is beautiful!",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Yoga Instructor",
                content:
                  "The goal tracking and progress visualization keep me motivated every day. Best wellness app I've ever used.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border bg-card hover-lift">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <Quote className="size-8 text-muted-foreground/30" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Pricing Section */}
        <Section id="pricing" className="bg-muted/30 relative" title="Simple, transparent pricing" subtitle="Start free, upgrade when you need more">
          <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
            <Card className="border-border bg-card hover-lift">
              <CardContent className="flex flex-col gap-6 p-8">
                <div>
                  <h3 className="font-bold text-2xl text-foreground mb-2">Free</h3>
                  <p className="text-sm text-muted-foreground">Perfect for getting started</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-foreground">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Track up to 5 metrics",
                    "Basic AI insights",
                    "30-day history",
                    "Mobile & web access",
                    "Privacy-first security",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="size-5 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-4">
                  <Link href="/auth/sign-up">Get Started Free</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary bg-card hover-lift relative overflow-hidden">
              <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-white">
                Coming Soon
              </div>
              <CardContent className="flex flex-col gap-6 p-8">
                <div>
                  <h3 className="font-bold text-2xl text-foreground mb-2">Pro</h3>
                  <p className="text-sm text-muted-foreground">For serious wellness tracking</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-foreground">$9</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Unlimited metrics tracking",
                    "Advanced AI insights & predictions",
                    "Unlimited history",
                    "Priority support",
                    "Export data anytime",
                    "Custom goals & reminders",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="size-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-4 relative overflow-hidden group" disabled>
                  <span>
                    <span className="relative z-10">Coming Soon</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Stats Section */}
        <Stats />

        {/* FAQ Section */}
        <FAQ />
        <Resources />

        {/* Final CTA Section */}
        <Contact />

        <Section className="relative overflow-hidden" title="Ready to transform your wellness journey?" subtitle="Join thousands of people taking control of their health with AI-powered insights">
          <AbstractBackground className="pointer-events-none -z-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-gradient-drift" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Button asChild size="lg" className="text-base relative overflow-hidden group">
                <Link href="/auth/sign-up">
                  <span className="relative z-10 flex items-center gap-2">
                    Create Your Free Account
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>

      </div>
      <Footer />
    </div>
  )
}
