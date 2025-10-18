"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function logHealthMetrics(data: {
  metric_date: string
  weight_kg?: number
  steps?: number
  calories_consumed?: number
  calories_burned?: number
  water_ml?: number
  sleep_hours?: number
  mood_score?: number
  energy_level?: number
  notes?: string
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Not authenticated")
  }

  const { error } = await supabase.from("health_metrics").upsert(
    {
      user_id: user.id,
      ...data,
    },
    {
      onConflict: "user_id,metric_date",
    },
  )

  if (error) {
    throw error
  }

  revalidatePath("/dashboard")
  return { success: true }
}

export async function getHealthMetrics(startDate?: string, endDate?: string) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return []
  }

  let query = supabase
    .from("health_metrics")
    .select("*")
    .eq("user_id", user.id)
    .order("metric_date", { ascending: false })

  if (startDate) {
    query = query.gte("metric_date", startDate)
  }

  if (endDate) {
    query = query.lte("metric_date", endDate)
  }

  const { data, error } = await query

  if (error) {
    console.error("[v0] Error fetching health metrics:", error)
    return []
  }

  return data || []
}

export async function getTodayMetrics() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const today = new Date().toISOString().split("T")[0]

  const { data, error } = await supabase
    .from("health_metrics")
    .select("*")
    .eq("user_id", user.id)
    .eq("metric_date", today)
    .single()

  if (error && error.code !== "PGRST116") {
    console.error("[v0] Error fetching today's metrics:", error)
    return null
  }

  return data
}

export async function getUserGoals() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return []
  }

  const { data, error } = await supabase.from("user_goals").select("*").eq("user_id", user.id).eq("status", "active")

  if (error) {
    console.error("[v0] Error fetching user goals:", error)
    return []
  }

  return data || []
}
