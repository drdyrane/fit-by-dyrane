import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Activity, TrendingUp, Target, Calendar } from "lucide-react"

export default async function HomePage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Welcome back!
          </h1>
          <p className="text-muted-foreground">{user.email}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-xl hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dashboard</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full mt-2">
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur-xl hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full mt-2 bg-transparent">
                <Link href="/dashboard#progress">Track Progress</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur-xl hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Goals</CardTitle>
              <Target className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full mt-2 bg-transparent">
                <Link href="/dashboard#goals">Manage Goals</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur-xl hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Settings</CardTitle>
              <Calendar className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full mt-2 bg-transparent">
                <Link href="/settings">Settings</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Complete your profile to get personalized insights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div>
                <p className="font-medium">Complete Onboarding</p>
                <p className="text-sm text-muted-foreground">Set up your wellness goals</p>
              </div>
              <Button asChild>
                <Link href="/onboarding">Start</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
