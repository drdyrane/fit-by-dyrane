import Link from "next/link"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, Heart, TrendingUp, Zap, ArrowRight, ChevronRight } from "lucide-react"
import { ThemeSwitcher } from "@/components/shared/theme-switcher"
import { InteractiveBackground } from "@/components/shared/interactive-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/50 glass">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 group">
            <Activity className="size-6 text-primary transition-transform group-hover:scale-110 group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">Fit</span>
              <span className="text-[10px] italic text-muted-foreground -mt-1">by Dyrane</span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <AnimatedButton asChild variant="ghost" size="sm">
              <Link href="/auth/login">Sign In</Link>
            </AnimatedButton>
            <AnimatedButton asChild size="sm" icon={<ArrowRight className="size-4" />}>
              <Link href="/auth/sign-up">Get Started</Link>
            </AnimatedButton>
          </div>
        </div>
      </header>

      <InteractiveBackground className="gradient-wellness-interactive">
        <section className="relative">
          <div className="container mx-auto px-4 py-32 md:py-40 relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl animate-bounce-in">
                Your Wellness Journey, Simplified
              </h1>
              <p className="mt-6 text-pretty text-lg text-white/90 md:text-xl leading-relaxed">
                Track your health, set meaningful goals, and get AI-powered insights—all in one beautiful, private app.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <AnimatedButton
                  asChild
                  size="lg"
                  className="text-base bg-white text-primary hover:bg-white/95 shadow-lg"
                  icon={<ArrowRight className="size-5" />}
                >
                  <Link href="/auth/sign-up">Get Started Free</Link>
                </AnimatedButton>
                <AnimatedButton
                  asChild
                  size="lg"
                  variant="secondary"
                  className="text-base bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                >
                  <Link href="/auth/login">Sign In</Link>
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>
      </InteractiveBackground>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Everything you need to thrive
            </h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
              Simple tools that help you build lasting healthy habits
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border bg-card hover-lift cursor-pointer group">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:glow-green">
                  <Activity className="size-7 text-primary group-hover:animate-float" />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground">Track Daily Metrics</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Log weight, steps, nutrition, sleep, and mood in seconds
                </p>
                <ChevronRight className="size-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover-lift cursor-pointer group">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:glow-green">
                  <TrendingUp className="size-7 text-primary group-hover:animate-float" />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground">Set Smart Goals</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Define targets and track progress with beautiful visualizations
                </p>
                <ChevronRight className="size-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover-lift cursor-pointer group">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:glow-blue">
                  <Zap className="size-7 text-primary group-hover:animate-float" />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground">AI Insights</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get personalized recommendations based on your data
                </p>
                <ChevronRight className="size-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover-lift cursor-pointer group">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:glow-green">
                  <Heart className="size-7 text-primary group-hover:animate-float" />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground">Privacy First</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your data stays yours, secured with enterprise-grade encryption
                </p>
                <ChevronRight className="size-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <InteractiveBackground className="gradient-wellness-interactive py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-5xl">
              Ready to start your wellness journey?
            </h2>
            <p className="mt-6 text-pretty text-lg text-white/90 leading-relaxed">
              Join thousands of people taking control of their health
            </p>
            <div className="mt-10">
              <AnimatedButton
                asChild
                size="lg"
                className="text-base bg-white text-primary hover:bg-white/95 shadow-lg"
                icon={<ArrowRight className="size-5" />}
              >
                <Link href="/auth/sign-up">Create Your Free Account</Link>
              </AnimatedButton>
            </div>
          </div>
        </div>
      </InteractiveBackground>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Fit by Dyrane. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
