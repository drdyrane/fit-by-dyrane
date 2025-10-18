export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          display_name: string | null
          avatar_url: string | null
          bio: string | null
          date_of_birth: string | null
          gender: string | null
          height_cm: number | null
          weight_kg: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          display_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          date_of_birth?: string | null
          gender?: string | null
          height_cm?: number | null
          weight_kg?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          display_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          date_of_birth?: string | null
          gender?: string | null
          height_cm?: number | null
          weight_kg?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      user_goals: {
        Row: {
          id: string
          user_id: string
          goal_type: string
          target_value: number | null
          target_unit: string | null
          target_date: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          goal_type: string
          target_value?: number | null
          target_unit?: string | null
          target_date?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          goal_type?: string
          target_value?: number | null
          target_unit?: string | null
          target_date?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      health_metrics: {
        Row: {
          id: string
          user_id: string
          metric_date: string
          weight_kg: number | null
          steps: number | null
          calories_consumed: number | null
          calories_burned: number | null
          water_ml: number | null
          sleep_hours: number | null
          mood_score: number | null
          energy_level: number | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          metric_date: string
          weight_kg?: number | null
          steps?: number | null
          calories_consumed?: number | null
          calories_burned?: number | null
          water_ml?: number | null
          sleep_hours?: number | null
          mood_score?: number | null
          energy_level?: number | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          metric_date?: string
          weight_kg?: number | null
          steps?: number | null
          calories_consumed?: number | null
          calories_burned?: number | null
          water_ml?: number | null
          sleep_hours?: number | null
          mood_score?: number | null
          energy_level?: number | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      user_preferences: {
        Row: {
          id: string
          theme: string
          notifications_enabled: boolean
          email_notifications: boolean
          weekly_summary: boolean
          measurement_system: string
          language: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          theme?: string
          notifications_enabled?: boolean
          email_notifications?: boolean
          weekly_summary?: boolean
          measurement_system?: string
          language?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          theme?: string
          notifications_enabled?: boolean
          email_notifications?: boolean
          weekly_summary?: boolean
          measurement_system?: string
          language?: string
          created_at?: string
          updated_at?: string
        }
      }
      onboarding_progress: {
        Row: {
          id: string
          step_completed: number
          completed: boolean
          completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          step_completed?: number
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          step_completed?: number
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
