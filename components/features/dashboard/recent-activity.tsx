import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "@/lib/utils/format-date"
import { Activity, Calendar } from "lucide-react"

interface RecentActivityProps {
  metrics: any[]
}

export function RecentActivity({ metrics }: RecentActivityProps) {
  if (metrics.length === 0) {
    return (
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest health entries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Activity className="size-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground">No activity yet. Start logging your metrics!</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest health entries</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric) => (
            <div key={metric.id} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                <Calendar className="size-5 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-foreground">{formatDate(metric.metric_date)}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  {metric.weight_kg && <span>Weight: {metric.weight_kg} kg</span>}
                  {metric.steps && <span>Steps: {metric.steps.toLocaleString()}</span>}
                  {metric.sleep_hours && <span>Sleep: {metric.sleep_hours} hrs</span>}
                  {metric.water_ml && <span>Water: {metric.water_ml} ml</span>}
                </div>
                {metric.notes && <p className="text-xs text-muted-foreground italic mt-1">{metric.notes}</p>}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
