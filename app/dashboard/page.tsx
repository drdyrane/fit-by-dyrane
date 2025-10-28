import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, TrendingUp, Heart, Footprints, Droplet, Moon, Plus, Settings, User } from "lucide-react"
import Link from "next/link"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: progress } = await supabase.from("onboarding_progress").select("completed").eq("id", user.id).single()

  if (!progress?.completed) {
    redirect("/onboarding")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  const today = new Date().toISOString().split("T")[0]
  const { data: todayMetrics } = await supabase
    .from("health_metrics")
    .select("*")
    .eq("user_id", user.id)
    .eq("date", today)
    .single()

  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  const { data: weekMetrics } = await supabase
    .from("health_metrics")
    .select("*")
    .eq("user_id", user.id)
    .gte("date", sevenDaysAgo.toISOString().split("T")[0])
    .order("date", { ascending: true })

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground">{profile?.display_name || user.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <Link href="/settings">
                  <Settings className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <Link href="/settings/profile">
                  <User className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <Card className="p-4 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-xl hover:shadow-lg transition-all active:scale-95">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/20">
                <Footprints className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Steps</p>
                <p className="text-2xl font-bold">{todayMetrics?.steps || 0}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-xl hover:shadow-lg transition-all active:scale-95">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-accent/20">
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Heart Rate</p>
                <p className="text-2xl font-bold">{todayMetrics?.heart_rate || "--"}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-secondary/20 bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-xl hover:shadow-lg transition-all active:scale-95">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-secondary/20">
                <Droplet className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Water</p>
                <p className="text-2xl font-bold">{todayMetrics?.water_intake || 0}L</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-success/20 bg-gradient-to-br from-success/10 to-success/5 backdrop-blur-xl hover:shadow-lg transition-all active:scale-95">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-success/20">
                <Moon className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Sleep</p>
                <p className="text-2xl font-bold">{todayMetrics?.sleep_hours || 0}h</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-xl">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button
              variant="outline"
              className="h-auto py-4 flex-col gap-2 bg-background/50 hover:bg-primary/10 hover:border-primary/50 active:scale-95 transition-all"
            >
              <Plus className="w-5 h-5" />
              <span className="text-sm">Log Activity</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex-col gap-2 bg-background/50 hover:bg-accent/10 hover:border-accent/50 active:scale-95 transition-all"
            >
              <Activity className="w-5 h-5" />
              <span className="text-sm">Track Workout</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex-col gap-2 bg-background/50 hover:bg-secondary/10 hover:border-secondary/50 active:scale-95 transition-all"
            >
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">View Progress</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex-col gap-2 bg-background/50 hover:bg-success/10 hover:border-success/50 active:scale-95 transition-all"
            >
              <Settings className="w-5 h-5" />
              <span className="text-sm">Settings</span>
            </Button>
          </div>
        </Card>

        <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-xl">
          <h2 className="text-lg font-semibold mb-4">This Week</h2>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            <div className="text-center space-y-2">
              <Activity className="w-12 h-12 mx-auto opacity-50" />
              <p>Chart visualization coming soon</p>
              <p className="text-sm">{weekMetrics?.length || 0} days of data recorded</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-xl">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          {weekMetrics && weekMetrics.length > 0 ? (
            <div className="space-y-3">
              {weekMetrics
                .slice(-5)
                .reverse()
                .map((metric: any) => (
                  <div
                    key={metric.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium">{new Date(metric.date).toLocaleDateString()}</p>
                      <p className="text-sm text-muted-foreground">
                        {metric.steps} steps • {metric.water_intake}L water
                      </p>
                    </div>
                    <TrendingUp className="w-5 h-5 text-success" />
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>No activity recorded yet</p>
              <Button className="mt-4" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Log Your First Activity
              </Button>
            </div>
          )}
        </Card>
      </main>
    </div>
  )
}
