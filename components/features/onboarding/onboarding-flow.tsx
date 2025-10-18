"use client"

import { useState } from "react"
import { WelcomeStep } from "./welcome-step"
import { GoalsStep } from "./goals-step"
import { ProfileStep } from "./profile-step"
import { PreferencesStep } from "./preferences-step"
import { Progress } from "@/components/ui/progress"

interface OnboardingFlowProps {
  initialStep: number
}

export function OnboardingFlow({ initialStep }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(initialStep)
  const totalSteps = 4

  const progressPercentage = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              Step {currentStep + 1} of {totalSteps}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progressPercentage)}% complete</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </div>

      {/* Step Content */}
      <div className="pt-24 pb-12">
        {currentStep === 0 && <WelcomeStep onNext={() => setCurrentStep(1)} />}
        {currentStep === 1 && <GoalsStep onNext={() => setCurrentStep(2)} onBack={() => setCurrentStep(0)} />}
        {currentStep === 2 && <ProfileStep onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />}
        {currentStep === 3 && <PreferencesStep onBack={() => setCurrentStep(2)} />}
      </div>
    </div>
  )
}
