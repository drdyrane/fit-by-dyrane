# Database Schema

## Overview

The database schema is designed with privacy and security as top priorities. All tables use Row Level Security (RLS) to ensure users can only access their own data.

## Tables

### profiles
User profile information and preferences.

\`\`\`sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  date_of_birth DATE,
  gender TEXT,
  height_cm INTEGER,
  weight_kg DECIMAL(5,2),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
\`\`\`

**RLS Policies:**
- Users can view, insert, update, and delete only their own profile

### user_goals
User wellness goals and targets.

\`\`\`sql
CREATE TABLE user_goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  goal_type TEXT NOT NULL, -- 'weight', 'fitness', 'nutrition', 'sleep', 'mindfulness'
  target_value DECIMAL(10,2),
  target_unit TEXT,
  target_date DATE,
  status TEXT DEFAULT 'active', -- 'active', 'completed', 'paused'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
\`\`\`

**RLS Policies:**
- Users can manage only their own goals

### health_metrics
Daily health tracking data.

\`\`\`sql
CREATE TABLE health_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  metric_date DATE NOT NULL,
  weight_kg DECIMAL(5,2),
  steps INTEGER,
  calories_consumed INTEGER,
  calories_burned INTEGER,
  water_ml INTEGER,
  sleep_hours DECIMAL(3,1),
  mood_score INTEGER CHECK (mood_score BETWEEN 1 AND 5),
  energy_level INTEGER CHECK (energy_level BETWEEN 1 AND 5),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, metric_date)
);
\`\`\`

**RLS Policies:**
- Users can manage only their own metrics

### user_preferences
App preferences and settings.

\`\`\`sql
CREATE TABLE user_preferences (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  theme TEXT DEFAULT 'system', -- 'light', 'dark', 'system'
  notifications_enabled BOOLEAN DEFAULT true,
  email_notifications BOOLEAN DEFAULT true,
  weekly_summary BOOLEAN DEFAULT true,
  measurement_system TEXT DEFAULT 'metric', -- 'metric', 'imperial'
  language TEXT DEFAULT 'en',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
\`\`\`

**RLS Policies:**
- Users can manage only their own preferences

### onboarding_progress
Track user onboarding completion.

\`\`\`sql
CREATE TABLE onboarding_progress (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  step_completed INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
\`\`\`

**RLS Policies:**
- Users can manage only their own onboarding progress

## Indexes

\`\`\`sql
-- Performance indexes
CREATE INDEX idx_health_metrics_user_date ON health_metrics(user_id, metric_date DESC);
CREATE INDEX idx_user_goals_user_status ON user_goals(user_id, status);
\`\`\`

## Triggers

### Auto-create profile on signup

\`\`\`sql
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id)
  VALUES (NEW.id)
  ON CONFLICT (id) DO NOTHING;
  
  INSERT INTO user_preferences (id)
  VALUES (NEW.id)
  ON CONFLICT (id) DO NOTHING;
  
  INSERT INTO onboarding_progress (id)
  VALUES (NEW.id)
  ON CONFLICT (id) DO NOTHING;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();
\`\`\`

## Migration Strategy

All schema changes are versioned in `scripts/` directory:
- `001_create_profiles.sql`
- `002_create_user_goals.sql`
- `003_create_health_metrics.sql`
- etc.

Scripts are executed in order and should be idempotent.
