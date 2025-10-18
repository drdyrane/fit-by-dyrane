"use client"

import { Button } from "@/components/ui/button"
import { Activity, Settings } from "lucide-react"
import Link from "next/link"
import { ThemeSwitcher } from "@/components/shared/theme-switcher"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface DashboardHeaderProps {
  userName: string
}

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  const router = useRouter()

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Activity className="size-6 text-primary" />
          <span className="text-lg font-semibold text-foreground">Fit by Dyrane</span>
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button asChild variant="ghost" size="icon">
            <Link href="/settings">
              <Settings className="size-4" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
          <Button variant="ghost" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </div>

      <div className="border-t border-border bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-foreground">Welcome back, {userName}!</h1>
          <p className="text-sm text-muted-foreground">Here's your wellness overview for today</p>
        </div>
      </div>
    </header>
  )
}
