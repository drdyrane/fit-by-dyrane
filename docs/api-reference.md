# API Reference

## Server Actions

All server actions are located in the `app/actions/` directory and use Supabase for data operations.

### Authentication Actions

Located in `app/actions/auth.ts` (handled by Supabase client-side)

### Onboarding Actions

Located in `app/actions/onboarding.ts`

#### `updateOnboardingProgress(step: number)`
Updates the user's onboarding progress step.

**Parameters:**
- `step`: The step number (0-3)

**Returns:** `{ success: boolean }`

#### `completeOnboarding()`
Marks the user's onboarding as complete.

**Returns:** `{ success: boolean }`

#### `getOnboardingProgress()`
Fetches the user's onboarding progress.

**Returns:** Onboarding progress object or null

#### `updateProfile(profileData)`
Updates user profile during onboarding.

**Parameters:**
- `profileData`: Object with profile fields

**Returns:** `{ success: boolean }`

#### `createUserGoal(goalData)`
Creates a new user goal.

**Parameters:**
- `goalData`: Object with goal details

**Returns:** `{ success: boolean }`

### Health Metrics Actions

Located in `app/actions/health-metrics.ts`

#### `logHealthMetrics(data)`
Logs or updates health metrics for a specific date.

**Parameters:**
- `data`: Object containing metric_date and optional health metrics

**Returns:** `{ success: boolean }`

#### `getHealthMetrics(startDate?, endDate?)`
Fetches health metrics within a date range.

**Parameters:**
- `startDate`: Optional start date (ISO string)
- `endDate`: Optional end date (ISO string)

**Returns:** Array of health metrics

#### `getTodayMetrics()`
Fetches today's health metrics.

**Returns:** Today's metrics object or null

#### `getUserGoals()`
Fetches active user goals.

**Returns:** Array of active goals

### Profile Actions

Located in `app/actions/profile.ts`

#### `getProfile()`
Fetches the user's profile.

**Returns:** Profile object or null

#### `updateUserProfile(profileData)`
Updates user profile information.

**Parameters:**
- `profileData`: Object with profile fields to update

**Returns:** `{ success: boolean }`

#### `updateUserPreferences(preferences)`
Updates user preferences.

**Parameters:**
- `preferences`: Object with preference fields to update

**Returns:** `{ success: boolean }`

#### `deleteAccount()`
Deletes the user's account and all associated data.

**Returns:** `{ success: boolean }`

### Preferences Actions

Located in `app/actions/preferences.ts`

#### `updateThemePreference(theme)`
Updates the user's theme preference.

**Parameters:**
- `theme`: "light" | "dark" | "system"

**Returns:** `{ success: boolean }`

#### `getUserPreferences()`
Fetches user preferences.

**Returns:** Preferences object or null

## Database Schema

See [Database Schema](./database-schema.md) for complete table definitions and RLS policies.

## Error Handling

All server actions throw errors that should be caught and handled by the calling component:

\`\`\`typescript
try {
  await updateProfile(data)
} catch (error) {
  console.error('[v0] Error:', error)
  // Handle error in UI
}
\`\`\`

## Authentication

All server actions automatically check for authentication using Supabase's `getUser()` method. Unauthenticated requests will throw an error.

## Rate Limiting

Currently no rate limiting is implemented. Consider adding rate limiting for production deployments.

## Caching

Server actions use Next.js `revalidatePath()` to invalidate cached data after mutations.
