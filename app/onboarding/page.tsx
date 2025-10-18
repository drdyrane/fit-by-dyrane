import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { OnboardingFlow } from "@/components/features/onboarding/onboarding-flow"

export default async function OnboardingPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  // Check if onboarding is already completed
  const { data: progress } = await supabase.from("onboarding_progress").select("*").eq("id", user.id).single()

  if (progress?.completed) {
    redirect("/dashboard")
  }

  return <OnboardingFlow initialStep={progress?.step_completed || 0} />
}
