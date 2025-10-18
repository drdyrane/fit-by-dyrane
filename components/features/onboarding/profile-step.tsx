"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { updateProfile, updateOnboardingProgress } from "@/app/actions/onboarding"

interface ProfileStepProps {
  onNext: () => void
  onBack: () => void
}

export function ProfileStep({ onNext, onBack }: ProfileStepProps) {
  const [formData, setFormData] = useState({
    display_name: "",
    date_of_birth: "",
    gender: "",
    height_cm: "",
    weight_kg: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = async () => {
    setIsLoading(true)
    try {
      const profileData: {
        display_name?: string
        date_of_birth?: string
        gender?: string
        height_cm?: number
        weight_kg?: number
      } = {}

      if (formData.display_name) profileData.display_name = formData.display_name
      if (formData.date_of_birth) profileData.date_of_birth = formData.date_of_birth
      if (formData.gender) profileData.gender = formData.gender
      if (formData.height_cm) profileData.height_cm = Number.parseInt(formData.height_cm)
      if (formData.weight_kg) profileData.weight_kg = Number.parseFloat(formData.weight_kg)

      await updateProfile(profileData)
      await updateOnboardingProgress(2)
      onNext()
    } catch (error) {
      console.error("[v0] Error updating profile:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto max-w-2xl px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Tell us about yourself</h2>
        <p className="text-lg text-muted-foreground">
          This helps us personalize your experience. All fields are optional.
        </p>
      </div>

      <Card className="border-border bg-card mb-12">
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>Help us get to know you better</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="display_name">Display Name</Label>
            <Input
              id="display_name"
              placeholder="How should we call you?"
              value={formData.display_name}
              onChange={(e) => setFormData({ ...formData, display_name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date_of_birth">Date of Birth</Label>
            <Input
              id="date_of_birth"
              type="date"
              value={formData.date_of_birth}
              onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer_not_to_say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="height_cm">Height (cm)</Label>
              <Input
                id="height_cm"
                type="number"
                placeholder="170"
                value={formData.height_cm}
                onChange={(e) => setFormData({ ...formData, height_cm: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight_kg">Weight (kg)</Label>
              <Input
                id="weight_kg"
                type="number"
                step="0.1"
                placeholder="70"
                value={formData.weight_kg}
                onChange={(e) => setFormData({ ...formData, weight_kg: e.target.value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack} disabled={isLoading}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={isLoading} className="min-w-32">
          {isLoading ? "Saving..." : "Continue"}
        </Button>
      </div>
    </div>
  )
}
