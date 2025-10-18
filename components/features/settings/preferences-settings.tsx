"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { updateUserPreferences } from "@/app/actions/profile"
import { useRouter } from "next/navigation"

interface PreferencesSettingsProps {
  preferences: any
}

export function PreferencesSettings({ preferences }: PreferencesSettingsProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    theme: preferences?.theme || "system",
    notifications_enabled: preferences?.notifications_enabled ?? true,
    email_notifications: preferences?.email_notifications ?? true,
    weekly_summary: preferences?.weekly_summary ?? true,
    measurement_system: preferences?.measurement_system || "metric",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      await updateUserPreferences(formData)
      setMessage({ type: "success", text: "Preferences updated successfully!" })
      router.refresh()
    } catch (error) {
      console.error("[v0] Error updating preferences:", error)
      setMessage({ type: "error", text: "Failed to update preferences. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize how the app looks and feels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="theme">Theme</Label>
              <Select value={formData.theme} onValueChange={(value) => setFormData({ ...formData, theme: value })}>
                <SelectTrigger id="theme">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">Choose your preferred color scheme</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="measurement_system">Measurement System</Label>
              <Select
                value={formData.measurement_system}
                onValueChange={(value) => setFormData({ ...formData, measurement_system: value })}
              >
                <SelectTrigger id="measurement_system">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                  <SelectItem value="imperial">Imperial (lb, in)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">Choose your preferred units of measurement</p>
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
                <p className="text-sm text-muted-foreground">Receive reminders and updates in the app</p>
              </div>
              <Switch
                id="notifications_enabled"
                checked={formData.notifications_enabled}
                onCheckedChange={(checked) => setFormData({ ...formData, notifications_enabled: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email_notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Get important updates via email</p>
              </div>
              <Switch
                id="email_notifications"
                checked={formData.email_notifications}
                onCheckedChange={(checked) => setFormData({ ...formData, email_notifications: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="weekly_summary">Weekly Summary</Label>
                <p className="text-sm text-muted-foreground">Receive a weekly progress report every Monday</p>
              </div>
              <Switch
                id="weekly_summary"
                checked={formData.weekly_summary}
                onCheckedChange={(checked) => setFormData({ ...formData, weekly_summary: checked })}
              />
            </div>
          </CardContent>
        </Card>

        {message && (
          <div
            className={`rounded-md p-3 text-sm ${
              message.type === "success" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
            }`}
          >
            {message.text}
          </div>
        )}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Preferences"}
        </Button>
      </div>
    </form>
  )
}
