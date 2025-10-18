export const APP_NAME = "Fit by Dyrane"
export const APP_DESCRIPTION = "A wellness companion that simplifies health tracking with AI-powered insights"

export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/sign-up",
  SIGNUP_SUCCESS: "/auth/sign-up-success",
  ONBOARDING: "/onboarding",
  DASHBOARD: "/dashboard",
  SETTINGS: "/settings",
} as const

export const ONBOARDING_STEPS = {
  WELCOME: 0,
  GOALS: 1,
  PROFILE: 2,
  PREFERENCES: 3,
  COMPLETE: 4,
} as const

export const GOAL_TYPES = {
  WEIGHT: "weight",
  FITNESS: "fitness",
  NUTRITION: "nutrition",
  SLEEP: "sleep",
  MINDFULNESS: "mindfulness",
} as const

export const MEASUREMENT_SYSTEMS = {
  METRIC: "metric",
  IMPERIAL: "imperial",
} as const

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
} as const
