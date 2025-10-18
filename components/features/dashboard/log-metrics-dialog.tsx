"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { logHealthMetrics } from "@/app/actions/health-metrics"
import { useRouter } from "next/navigation"

interface LogMetricsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialData?: any
}

export function LogMetricsDialog({ open, onOpenChange, initialData }: LogMetricsDialogProps) {
  const router = useRouter()
  const today = new Date().toISOString().split("T")[0]

  const [formData, setFormData] = useState({
    metric_date: initialData?.metric_date || today,
    weight_kg: initialData?.weight_kg?.toString() || "",
    steps: initialData?.steps?.toString() || "",
    calories_consumed: initialData?.calories_consumed?.toString() || "",
    calories_burned: initialData?.calories_burned?.toString() || "",
    water_ml: initialData?.water_ml?.toString() || "",
    sleep_hours: initialData?.sleep_hours?.toString() || "",
    mood_score: initialData?.mood_score?.toString() || "",
    energy_level: initialData?.energy_level?.toString() || "",
    notes: initialData?.notes || "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const data: any = {
        metric_date: formData.metric_date,
      }

      if (formData.weight_kg) data.weight_kg = Number.parseFloat(formData.weight_kg)
      if (formData.steps) data.steps = Number.parseInt(formData.steps)
      if (formData.calories_consumed) data.calories_consumed = Number.parseInt(formData.calories_consumed)
      if (formData.calories_burned) data.calories_burned = Number.parseInt(formData.calories_burned)
      if (formData.water_ml) data.water_ml = Number.parseInt(formData.water_ml)
      if (formData.sleep_hours) data.sleep_hours = Number.parseFloat(formData.sleep_hours)
      if (formData.mood_score) data.mood_score = Number.parseInt(formData.mood_score)
      if (formData.energy_level) data.energy_level = Number.parseInt(formData.energy_level)
      if (formData.notes) data.notes = formData.notes

      await logHealthMetrics(data)
      onOpenChange(false)
      router.refresh()
    } catch (error) {
      console.error("[v0] Error logging metrics:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Log Health Metrics</DialogTitle>
          <DialogDescription>Track your daily health data. All fields are optional.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="physical" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="physical">Physical</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
            </TabsList>

            <TabsContent value="physical" className="space-y-4 mt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="weight_kg">Weight (kg)</Label>
                  <Input
                    id="weight_kg"
                    type="number"
                    step="0.1"
                    placeholder="70.5"
                    value={formData.weight_kg}
                    onChange={(e) => setFormData({ ...formData, weight_kg: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="steps">Steps</Label>
                  <Input
                    id="steps"
                    type="number"
                    placeholder="10000"
                    value={formData.steps}
                    onChange={(e) => setFormData({ ...formData, steps: e.target.value })}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-4 mt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="calories_consumed">Calories Consumed</Label>
                  <Input
                    id="calories_consumed"
                    type="number"
                    placeholder="2000"
                    value={formData.calories_consumed}
                    onChange={(e) => setFormData({ ...formData, calories_consumed: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="calories_burned">Calories Burned</Label>
                  <Input
                    id="calories_burned"
                    type="number"
                    placeholder="500"
                    value={formData.calories_burned}
                    onChange={(e) => setFormData({ ...formData, calories_burned: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="water_ml">Water (ml)</Label>
                  <Input
                    id="water_ml"
                    type="number"
                    placeholder="2000"
                    value={formData.water_ml}
                    onChange={(e) => setFormData({ ...formData, water_ml: e.target.value })}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="wellness" className="space-y-4 mt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="sleep_hours">Sleep (hours)</Label>
                  <Input
                    id="sleep_hours"
                    type="number"
                    step="0.1"
                    placeholder="7.5"
                    value={formData.sleep_hours}
                    onChange={(e) => setFormData({ ...formData, sleep_hours: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mood_score">Mood (1-5)</Label>
                  <Input
                    id="mood_score"
                    type="number"
                    min="1"
                    max="5"
                    placeholder="4"
                    value={formData.mood_score}
                    onChange={(e) => setFormData({ ...formData, mood_score: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="energy_level">Energy Level (1-5)</Label>
                  <Input
                    id="energy_level"
                    type="number"
                    min="1"
                    max="5"
                    placeholder="4"
                    value={formData.energy_level}
                    onChange={(e) => setFormData({ ...formData, energy_level: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="How are you feeling today?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                />
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Metrics"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
