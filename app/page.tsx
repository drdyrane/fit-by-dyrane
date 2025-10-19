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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-gradient-drift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

        <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8 animate-bounce-in">
              <Sparkles className="size-4" />
              AI-Powered Wellness Tracking
            </div>

            {/* Headline */}
            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl mb-6 animate-bounce-in">
              Your Health Journey,
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Intelligently Simplified
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed mb-10">
              Track metrics, set goals, and receive personalized AI insights—all in one beautiful, privacy-first
              platform designed for your wellness success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-12">
              <Button asChild size="lg" className="text-base relative overflow-hidden group">
                <Link href="/auth/sign-up">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-success" />
                <span>Free forever plan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl mb-6">
              Everything you need to thrive
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Powerful features designed to make wellness tracking effortless and insightful
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Activity,
                title: "Smart Tracking",
                description:
                  "Log weight, steps, nutrition, sleep, and mood in seconds with intelligent auto-suggestions",
                color: "from-primary to-accent",
              },
              {
                icon: Brain,
                title: "AI Insights",
                description: "Get personalized recommendations and pattern recognition powered by advanced AI",
                color: "from-accent to-secondary",
              },
              {
                icon: Target,
                title: "Goal Setting",
                description:
                  "Define targets and track progress with beautiful visualizations and milestone celebrations",
                color: "from-secondary to-warning",
              },
              {
                icon: BarChart3,
                title: "Analytics",
                description: "Understand your health trends with comprehensive charts and weekly summaries",
                color: "from-primary to-secondary",
              },
              {
                icon: Shield,
                title: "Privacy First",
                description: "Your data stays yours, secured with enterprise-grade encryption and zero tracking",
                color: "from-accent to-primary",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance ensures smooth experience across all devices and platforms",
                color: "from-warning to-accent",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-border bg-card hover-lift cursor-pointer group relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                <CardContent className="flex flex-col items-start gap-4 p-6">
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} p-0.5`}
                  >
                    <div className="flex size-full items-center justify-center rounded-[10px] bg-card">
                      <feature.icon className="size-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-card-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl mb-6">
              Get started in minutes
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Simple onboarding process to personalize your wellness journey
            </p>
          </div>

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
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl mb-6">
              Loved by wellness enthusiasts
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Join thousands of people transforming their health journey
            </p>
          </div>

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
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Start free, upgrade when you need more
            </p>
          </div>

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
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-gradient-drift" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl mb-6">
              Ready to transform your wellness journey?
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed mb-10">
              Join thousands of people taking control of their health with AI-powered insights
            </p>
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
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Activity className="size-6 text-primary" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-foreground">Fit</span>
                  <span className="text-[10px] italic text-muted-foreground -mt-1">by Dyrane</span>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground">AI-powered wellness tracking for a healthier you.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Fit by Dyrane. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
