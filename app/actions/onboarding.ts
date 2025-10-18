"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function updateOnboardingProgress(step: number) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Not authenticated")
  }

  const { error } = await supabase.from("onboarding_progress").update({ step_completed: step }).eq("id", user.id)

  if (error) {
    throw error
  }

  revalidatePath("/onboarding")
  return { success: true }
}

export async function completeOnboarding() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Not authenticated")
  }

  const { error } = await supabase
    .from("onboarding_progress")
    .update({
      step_completed: 4,
      completed: true,
      completed_at: new Date().toISOString(),
    })
    .eq("id", user.id)

  if (error) {
    throw error
  }

  revalidatePath("/onboarding")
  revalidatePath("/dashboard")
  return { success: true }
}

export async function getOnboardingProgress() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const { data, error } = await supabase.from("onboarding_progress").select("*").eq("id", user.id).single()

  if (error) {
    console.error("[v0] Error fetching onboarding progress:", error)
    return null
  }

  return data
}

export async function updateProfile(profileData: {
  display_name?: string
  date_of_birth?: string
  gender?: string
  height_cm?: number
  weight_kg?: number
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Not authenticated")
  }

  const { error } = await supabase.from("profiles").update(profileData).eq("id", user.id)

  if (error) {
    throw error
  }

  revalidatePath("/onboarding")
  return { success: true }
}

export async function createUserGoal(goalData: {
  goal_type: string
  target_value?: number
  target_unit?: string
  target_date?: string
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Not authenticated")
  }

  const { error } = await supabase.from("user_goals").insert({
    user_id: user.id,
    ...goalData,
  })

  if (error) {
    throw error
  }

  revalidatePath("/onboarding")
  return { success: true }
}
