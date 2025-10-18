"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function updateThemePreference(theme: "light" | "dark" | "system") {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Not authenticated")
  }

  const { error } = await supabase.from("user_preferences").update({ theme }).eq("id", user.id)

  if (error) {
    throw error
  }

  revalidatePath("/settings")
  return { success: true }
}

export async function getUserPreferences() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const { data, error } = await supabase.from("user_preferences").select("*").eq("id", user.id).single()

  if (error) {
    console.error("[v0] Error fetching user preferences:", error)
    return null
  }

  return data
}
