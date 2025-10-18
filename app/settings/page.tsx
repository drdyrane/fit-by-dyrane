import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardHeader } from "@/components/features/dashboard/dashboard-header"
import { SettingsTabs } from "@/components/features/settings/settings-tabs"
import { getUserPreferences } from "@/app/actions/preferences"
import { getProfile } from "@/app/actions/profile"

export default async function SettingsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const profile = await getProfile()
  const preferences = await getUserPreferences()

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userName={profile?.display_name || "there"} />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>

          <SettingsTabs profile={profile} preferences={preferences} userEmail={user.email || ""} />
        </div>
      </main>
    </div>
  )
}
