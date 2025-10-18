"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { completeOnboarding } from "@/app/actions/onboarding"
import { updateThemePreference } from "@/app/actions/preferences"
import { useRouter } from "next/navigation"
import { CheckCircle2 } from "lucide-react"

interface PreferencesStepProps {
  onBack: () => void
}

export function PreferencesStep({ onBack }: PreferencesStepProps) {
  const [preferences, setPreferences] = useState({
    theme: "system",
    notifications_enabled: true,
    email_notifications: true,
    weekly_summary: true,
    measurement_system: "metric",
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleComplete = async () => {
    setIsLoading(true)
    try {
      // Update theme preference
      await updateThemePreference(preferences.theme as "light" | "dark" | "system")

      // Mark onboarding as complete
      await completeOnboarding()

      // Redirect to dashboard
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      console.error("[v0] Error completing onboarding:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto max-w-2xl px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-4">
          <CheckCircle2 className="size-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Almost there!</h2>
        <p className="text-lg text-muted-foreground">Set your preferences to customize your experience</p>
      </div>

      <div className="space-y-6 mb-12">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize how the app looks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme">Theme</Label>
              <Select
                value={preferences.theme}
                onValueChange={(value) => setPreferences({ ...preferences, theme: value })}
              >
                <SelectTrigger id="theme">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="measurement_system">Measurement System</Label>
              <Select
                value={preferences.measurement_system}
                onValueChange={(value) => setPreferences({ ...preferences, measurement_system: value })}
              >
                <SelectTrigger id="measurement_system">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                  <SelectItem value="imperial">Imperial (lb, in)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage how we communicate with you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications_enabled">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive reminders and updates</p>
              </div>
              <Switch
                id="notifications_enabled"
                checked={preferences.notifications_enabled}
                onCheckedChange={(checked) => setPreferences({ ...preferences, notifications_enabled: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email_notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Get updates via email</p>
              </div>
              <Switch
                id="email_notifications"
                checked={preferences.email_notifications}
                onCheckedChange={(checked) => setPreferences({ ...preferences, email_notifications: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="weekly_summary">Weekly Summary</Label>
                <p className="text-sm text-muted-foreground">Receive a weekly progress report</p>
              </div>
              <Switch
                id="weekly_summary"
                checked={preferences.weekly_summary}
                onCheckedChange={(checked) => setPreferences({ ...preferences, weekly_summary: checked })}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack} disabled={isLoading}>
          Back
        </Button>
        <Button onClick={handleComplete} disabled={isLoading} className="min-w-32">
          {isLoading ? "Finishing..." : "Complete Setup"}
        </Button>
      </div>
    </div>
  )
}
