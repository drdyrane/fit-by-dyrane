import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, Heart, TrendingUp, Zap } from "lucide-react"
import { ThemeSwitcher } from "@/components/shared/theme-switcher"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Activity className="size-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">Fit by Dyrane</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <Button asChild variant="ghost">
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Your Wellness Journey, Simplified
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
              Track your health, set meaningful goals, and get AI-powered insights—all in one beautiful, private app.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base">
                <Link href="/auth/sign-up">Get Started Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="/auth/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Everything you need to thrive
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Simple tools that help you build lasting healthy habits
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Activity className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">Track Daily Metrics</h3>
                <p className="text-sm text-muted-foreground">
                  Log weight, steps, nutrition, sleep, and mood in seconds
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">Set Smart Goals</h3>
                <p className="text-sm text-muted-foreground">
                  Define targets and track progress with beautiful visualizations
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">AI Insights</h3>
                <p className="text-sm text-muted-foreground">Get personalized recommendations based on your data</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">Privacy First</h3>
                <p className="text-sm text-muted-foreground">
                  Your data stays yours, secured with enterprise-grade encryption
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to start your wellness journey?
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Join thousands of people taking control of their health
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="text-base">
                <Link href="/auth/sign-up">Create Your Free Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
