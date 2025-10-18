"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Droplet, Flame, Moon, TrendingUp } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface MetricsOverviewProps {
  metrics: any[]
}

export function MetricsOverview({ metrics }: MetricsOverviewProps) {
  // Calculate averages
  const avgWeight =
    metrics.filter((m) => m.weight_kg).reduce((sum, m) => sum + m.weight_kg, 0) /
      metrics.filter((m) => m.weight_kg).length || 0
  const avgSteps =
    metrics.filter((m) => m.steps).reduce((sum, m) => sum + m.steps, 0) / metrics.filter((m) => m.steps).length || 0
  const avgSleep =
    metrics.filter((m) => m.sleep_hours).reduce((sum, m) => sum + m.sleep_hours, 0) /
      metrics.filter((m) => m.sleep_hours).length || 0
  const avgWater =
    metrics.filter((m) => m.water_ml).reduce((sum, m) => sum + m.water_ml, 0) /
      metrics.filter((m) => m.water_ml).length || 0
  const avgCalories =
    metrics.filter((m) => m.calories_consumed).reduce((sum, m) => sum + m.calories_consumed, 0) /
      metrics.filter((m) => m.calories_consumed).length || 0

  // Prepare chart data (reverse to show oldest to newest)
  const chartData = [...metrics].reverse().map((m) => ({
    date: new Date(m.metric_date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    weight: m.weight_kg || null,
    steps: m.steps || null,
  }))

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Your Metrics</h2>
        <p className="text-sm text-muted-foreground">7-day averages and trends</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="border-border bg-card">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2">
              <TrendingUp className="size-4 text-primary" />
              Weight
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {avgWeight > 0 ? `${avgWeight.toFixed(1)} kg` : "—"}
            </div>
            <p className="text-xs text-muted-foreground mt-1">7-day average</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2">
              <Activity className="size-4 text-primary" />
              Steps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {avgSteps > 0 ? Math.round(avgSteps).toLocaleString() : "—"}
            </div>
            <p className="text-xs text-muted-foreground mt-1">7-day average</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2">
              <Moon className="size-4 text-primary" />
              Sleep
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {avgSleep > 0 ? `${avgSleep.toFixed(1)} hrs` : "—"}
            </div>
            <p className="text-xs text-muted-foreground mt-1">7-day average</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2">
              <Droplet className="size-4 text-primary" />
              Water
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {avgWater > 0 ? `${Math.round(avgWater)} ml` : "—"}
            </div>
            <p className="text-xs text-muted-foreground mt-1">7-day average</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2">
              <Flame className="size-4 text-primary" />
              Calories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {avgCalories > 0 ? Math.round(avgCalories).toLocaleString() : "—"}
            </div>
            <p className="text-xs text-muted-foreground mt-1">7-day average</p>
          </CardContent>
        </Card>
      </div>

      {chartData.length > 0 && (
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Weight Trend</CardTitle>
            <CardDescription>Your weight over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
