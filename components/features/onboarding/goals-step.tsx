"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Activity, Apple, Brain, Dumbbell, Moon } from "lucide-react"
import { createUserGoal, updateOnboardingProgress } from "@/app/actions/onboarding"
import { useRouter } from "next/navigation"

interface GoalsStepProps {
  onNext: () => void
  onBack: () => void
}

const goalOptions = [
  {
    id: "weight",
    label: "Manage Weight",
    description: "Track and reach your target weight",
    icon: Activity,
  },
  {
    id: "fitness",
    label: "Improve Fitness",
    description: "Build strength and endurance",
    icon: Dumbbell,
  },
  {
    id: "nutrition",
    label: "Better Nutrition",
    description: "Eat healthier and track meals",
    icon: Apple,
  },
  {
    id: "sleep",
    label: "Sleep Better",
    description: "Improve sleep quality and duration",
    icon: Moon,
  },
  {
    id: "mindfulness",
    label: "Mental Wellness",
    description: "Reduce stress and improve mood",
    icon: Brain,
  },
]

export function GoalsStep({ onNext, onBack }: GoalsStepProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((prev) => (prev.includes(goalId) ? prev.filter((id) => id !== goalId) : [...prev, goalId]))
  }

  const handleNext = async () => {
    if (selectedGoals.length === 0) return

    setIsLoading(true)
    try {
      // Create goals in database
      for (const goalType of selectedGoals) {
        await createUserGoal({ goal_type: goalType })
      }

      await updateOnboardingProgress(1)
      onNext()
    } catch (error) {
      console.error("[v0] Error creating goals:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto max-w-4xl px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">What are your wellness goals?</h2>
        <p className="text-lg text-muted-foreground">Select all that apply. You can always change these later.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-12">
        {goalOptions.map((goal) => {
          const Icon = goal.icon
          const isSelected = selectedGoals.includes(goal.id)

          return (
            <Card
              key={goal.id}
              className={`cursor-pointer transition-all ${
                isSelected ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50"
              }`}
              onClick={() => toggleGoal(goal.id)}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg">{goal.label}</CardTitle>
                      <Checkbox checked={isSelected} className="ml-auto" />
                    </div>
                    <CardDescription>{goal.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack} disabled={isLoading}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={selectedGoals.length === 0 || isLoading} className="min-w-32">
          {isLoading ? "Saving..." : "Continue"}
        </Button>
      </div>
    </div>
  )
}
