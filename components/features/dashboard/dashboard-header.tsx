"use client"

import { Button } from "@/components/ui/button"
import { Activity, Settings, LogOut } from "lucide-react"
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
    <header className="sticky top-0 z-50 border-b border-border/50 glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Activity className="size-6 text-primary" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground tracking-tight">Fit</span>
            <span className="text-[10px] italic text-muted-foreground -mt-1">by Dyrane</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button asChild variant="ghost" size="icon">
            <Link href="/settings">
              <Settings className="size-4" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
          <Button variant="ghost" onClick={handleSignOut} className="gap-2">
            <LogOut className="size-4" />
            Sign Out
          </Button>
        </div>
      </div>

      <div className="border-t border-border/50 bg-gradient-to-r from-primary/5 to-transparent py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Welcome back, {userName}!</h1>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Here's your wellness overview for today</p>
        </div>
      </div>
    </header>
  )
}
