"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Heart, TrendingUp, Zap } from "lucide-react"
import { updateOnboardingProgress } from "@/app/actions/onboarding"

interface WelcomeStepProps {
  onNext: () => void
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  const handleNext = async () => {
    await updateOnboardingProgress(0)
    onNext()
  }

  return (
    <div className="container mx-auto max-w-4xl px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-4">
          <Activity className="size-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to Fit by Dyrane</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let's personalize your wellness journey. We'll ask a few questions to help you get the most out of the app.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <Card className="border-border bg-card">
          <CardHeader>
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <TrendingUp className="size-5 text-primary" />
            </div>
            <CardTitle className="text-xl">Track Your Progress</CardTitle>
            <CardDescription>Monitor your health metrics and see your improvements over time</CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Zap className="size-5 text-primary" />
            </div>
            <CardTitle className="text-xl">Get AI Insights</CardTitle>
            <CardDescription>Receive personalized recommendations based on your unique data</CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Heart className="size-5 text-primary" />
            </div>
            <CardTitle className="text-xl">Stay Motivated</CardTitle>
            <CardDescription>Set meaningful goals and celebrate your achievements</CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Activity className="size-5 text-primary" />
            </div>
            <CardTitle className="text-xl">Privacy First</CardTitle>
            <CardDescription>Your data is encrypted and never shared without your permission</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button size="lg" onClick={handleNext} className="min-w-48">
          Get Started
        </Button>
      </div>
    </div>
  )
}
