import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardHeader } from "@/components/features/dashboard/dashboard-header"
import { QuickActions } from "@/components/features/dashboard/quick-actions"
import { MetricsOverview } from "@/components/features/dashboard/metrics-overview"
import { GoalsProgress } from "@/components/features/dashboard/goals-progress"
import { RecentActivity } from "@/components/features/dashboard/recent-activity"
import { getHealthMetrics, getTodayMetrics, getUserGoals } from "@/app/actions/health-metrics"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  // Check if onboarding is completed
  const { data: progress } = await supabase.from("onboarding_progress").select("*").eq("id", user.id).single()

  if (!progress?.completed) {
    redirect("/onboarding")
  }

  // Fetch user profile
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  // Fetch today's metrics
  const todayMetrics = await getTodayMetrics()

  // Fetch last 7 days of metrics
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  const recentMetrics = await getHealthMetrics(sevenDaysAgo.toISOString().split("T")[0])

  // Fetch active goals
  const goals = await getUserGoals()

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userName={profile?.display_name || "there"} />

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Quick Actions */}
          <QuickActions todayMetrics={todayMetrics} />

          {/* Metrics Overview */}
          <MetricsOverview metrics={recentMetrics} />

          {/* Goals Progress */}
          {goals.length > 0 && <GoalsProgress goals={goals} />}

          {/* Recent Activity */}
          <RecentActivity metrics={recentMetrics.slice(0, 5)} />
        </div>
      </main>
    </div>
  )
}
