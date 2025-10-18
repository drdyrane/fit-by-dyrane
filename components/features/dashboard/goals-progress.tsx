import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Activity, Apple, Brain, Dumbbell, Moon } from "lucide-react"

interface GoalsProgressProps {
  goals: any[]
}

const goalIcons: Record<string, any> = {
  weight: Activity,
  fitness: Dumbbell,
  nutrition: Apple,
  sleep: Moon,
  mindfulness: Brain,
}

export function GoalsProgress({ goals }: GoalsProgressProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Your Goals</h2>
        <p className="text-sm text-muted-foreground">Track your progress towards your wellness targets</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {goals.map((goal) => {
          const Icon = goalIcons[goal.goal_type] || Activity
          // Mock progress calculation (would be based on actual metrics)
          const progress = Math.floor(Math.random() * 100)

          return (
            <Card key={goal.id} className="border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base capitalize">{goal.goal_type}</CardTitle>
                    <CardDescription>
                      {goal.target_value && goal.target_unit
                        ? `Target: ${goal.target_value} ${goal.target_unit}`
                        : "In progress"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
