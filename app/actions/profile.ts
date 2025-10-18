"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function getProfile() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  if (error) {
    console.error("[v0] Error fetching profile:", error)
    return null
  }

  return data
}

export async function updateUserProfile(profileData: {
  display_name?: string
  bio?: string
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

  revalidatePath("/settings")
  return { success: true }
}

export async function updateUserPreferences(preferences: {
  theme?: string
  notifications_enabled?: boolean
  email_notifications?: boolean
  weekly_summary?: boolean
  measurement_system?: string
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Not authenticated")
  }

  const { error } = await supabase.from("user_preferences").update(preferences).eq("id", user.id)

  if (error) {
    throw error
  }

  revalidatePath("/settings")
  return { success: true }
}

export async function deleteAccount() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Not authenticated")
  }

  // Delete user data (cascade will handle related tables)
  const { error: profileError } = await supabase.from("profiles").delete().eq("id", user.id)

  if (profileError) {
    throw profileError
  }

  // Sign out
  await supabase.auth.signOut()

  return { success: true }
}
