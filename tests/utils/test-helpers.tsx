import type React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "@/components/shared/theme-provider"

// Custom render function that includes providers
export function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

// Mock user data for tests
export const mockUser = {
  id: "test-user-id",
  email: "test@example.com",
  created_at: "2025-01-01T00:00:00Z",
}

// Mock profile data
export const mockProfile = {
  id: "test-user-id",
  display_name: "Test User",
  avatar_url: null,
  bio: "Test bio",
  date_of_birth: "1990-01-01",
  gender: "prefer_not_to_say",
  height_cm: 170,
  weight_kg: 70,
  created_at: "2025-01-01T00:00:00Z",
  updated_at: "2025-01-01T00:00:00Z",
}

// Mock preferences data
export const mockPreferences = {
  id: "test-user-id",
  theme: "system",
  notifications_enabled: true,
  email_notifications: true,
  weekly_summary: true,
  measurement_system: "metric",
  language: "en",
  created_at: "2025-01-01T00:00:00Z",
  updated_at: "2025-01-01T00:00:00Z",
}

// Mock health metrics
export const mockHealthMetrics = [
  {
    id: "metric-1",
    user_id: "test-user-id",
    metric_date: "2025-01-15",
    weight_kg: 70.5,
    steps: 10000,
    calories_consumed: 2000,
    calories_burned: 500,
    water_ml: 2000,
    sleep_hours: 7.5,
    mood_score: 4,
    energy_level: 4,
    notes: "Feeling great!",
    created_at: "2025-01-15T00:00:00Z",
    updated_at: "2025-01-15T00:00:00Z",
  },
  {
    id: "metric-2",
    user_id: "test-user-id",
    metric_date: "2025-01-14",
    weight_kg: 71,
    steps: 8000,
    calories_consumed: 1800,
    calories_burned: 400,
    water_ml: 1800,
    sleep_hours: 7,
    mood_score: 3,
    energy_level: 3,
    notes: null,
    created_at: "2025-01-14T00:00:00Z",
    updated_at: "2025-01-14T00:00:00Z",
  },
]

// Mock goals
export const mockGoals = [
  {
    id: "goal-1",
    user_id: "test-user-id",
    goal_type: "weight",
    target_value: 65,
    target_unit: "kg",
    target_date: "2025-06-01",
    status: "active",
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-01-01T00:00:00Z",
  },
  {
    id: "goal-2",
    user_id: "test-user-id",
    goal_type: "fitness",
    target_value: 10000,
    target_unit: "steps",
    target_date: null,
    status: "active",
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-01-01T00:00:00Z",
  },
]

// Wait for async operations
export const waitForAsync = () => new Promise((resolve) => setTimeout(resolve, 0))
