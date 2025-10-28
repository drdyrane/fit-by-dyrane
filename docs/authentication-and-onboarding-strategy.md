# Authentication & Onboarding Strategy

## Overview
This document outlines the complete authentication and onboarding strategy for Fit by Dyrane, including the modern multi-step auth experience, onboarding flow placement, and implementation details for both web and mobile (Expo React Native).

---

## 1. Authentication Flow Architecture

### Modern Multi-Step Auth Experience
Inspired by leading apps (Notion, Linear, Vercel, Stripe), we implement a progressive, transitional form experience:

#### **Sign Up Flow**
\`\`\`
Step 1: Email Collection
├─ Input: Email address
├─ Validation: Email format, domain check
├─ Check: Does user exist?
└─ Action: Proceed to Step 2

Step 2: Password Creation
├─ Input: Password (with visibility toggle)
├─ Features:
│  ├─ Real-time strength indicator (Weak/Fair/Good/Strong)
│  ├─ Visual strength bars (4 levels with color coding)
│  ├─ Password visibility toggle (eye icon)
│  └─ Minimum 8 characters requirement
└─ Action: Create account → Redirect to Onboarding

Step 3: Onboarding (Post Sign-Up)
├─ Welcome screen
├─ Goal selection
├─ Profile information
├─ Preferences setup
└─ Action: Complete → Redirect to Dashboard
\`\`\`

#### **Login Flow**
\`\`\`
Step 1: Email Collection
├─ Input: Email address
├─ Validation: Email format
├─ Check: Does user exist?
└─ Action: Proceed to Step 2

Step 2: Password Entry
├─ Input: Password (with visibility toggle)
├─ Features:
│  ├─ Password visibility toggle
│  ├─ "Forgot password?" link
│  └─ Remember me option
└─ Action: Authenticate → Redirect to Home/Dashboard
\`\`\`

#### **Password Reset Flow**
\`\`\`
Step 1: Forgot Password
├─ Input: Email address
├─ Action: Send reset link
└─ Redirect: Check email page

Step 2: Reset Password (from email link)
├─ Input: New password (with visibility toggle)
├─ Input: Confirm password
├─ Features: Same as password creation
└─ Action: Update password → Redirect to Login
\`\`\`

---

## 2. Onboarding Placement Decision

### **DECISION: Onboarding happens AFTER Sign Up, BEFORE Dashboard**

#### User Flow:
\`\`\`
Landing Page → Sign Up → Onboarding → Dashboard
                ↓
         (Email verified)
\`\`\`

#### Rationale:
1. **First-Time User Experience**: New users need context and setup before using the app
2. **Data Collection**: Gather essential user preferences and goals upfront
3. **Personalization**: Enable personalized dashboard from day one
4. **Industry Standard**: Matches behavior of successful wellness apps (MyFitnessPal, Headspace, Calm)
5. **Completion Rate**: Higher completion when done immediately after signup (momentum)

#### Implementation:
- Sign up redirects to `/onboarding` (not `/home` or `/dashboard`)
- Onboarding checks if user has completed it (via `onboarding_progress` table)
- If completed, redirect to `/dashboard`
- If not completed, show onboarding flow
- Users can skip onboarding but are prompted to complete it later

---

## 3. UI/UX Features

### Password Input Enhancements
\`\`\`tsx
Features:
- Toggle visibility (eye/eye-off icon)
- Real-time strength indicator
- Visual strength bars (4 levels)
- Color coding:
  - Red (Weak): < 6 characters
  - Orange (Fair): 6-9 characters
  - Blue (Good): 10-11 characters
  - Green (Strong): 12+ characters
- Validation feedback
- Confirm password matching indicator
\`\`\`

### Form Transitions
\`\`\`css
Animations:
- Slide in/out between steps (300ms ease-in-out)
- Fade transitions for content
- Progress indicator at top
- Step counter (Step 1 of 2)
- Back button on Step 2
\`\`\`

### Visual Design
\`\`\`
Consistency with Landing Page:
- AbstractBackground component
- Glass morphism cards
- Gradient text for branding
- Smooth animations
- Hover effects
- Focus states with glow
- Error states with shake animation
\`\`\`

---

## 4. Technical Implementation

### Database Schema
\`\`\`sql
-- Users table (managed by Supabase Auth)
auth.users

-- Onboarding Progress
onboarding_progress
├─ id (uuid, FK to auth.users)
├─ step_completed (integer)
├─ completed (boolean)
├─ created_at (timestamp)
└─ updated_at (timestamp)

-- User Profiles
profiles
├─ id (uuid, FK to auth.users)
├─ email (text)
├─ full_name (text)
├─ avatar_url (text)
├─ date_of_birth (date)
├─ gender (text)
├─ height (numeric)
├─ weight (numeric)
└─ created_at (timestamp)

-- User Goals
user_goals
├─ id (uuid)
├─ user_id (uuid, FK to auth.users)
├─ goal_type (text)
├─ target_value (numeric)
├─ current_value (numeric)
├─ deadline (date)
└─ created_at (timestamp)
\`\`\`

### Authentication State Management
\`\`\`typescript
// Client-side auth state
- useAuth() hook (from ThemeProvider context)
- Supabase client for auth operations
- Session management with cookies
- Automatic token refresh

// Server-side auth checks
- Middleware for protected routes
- Server components with auth checks
- Redirect logic for unauthenticated users
\`\`\`

### Route Protection
\`\`\`
Public Routes:
- / (landing page)
- /auth/login
- /auth/sign-up
- /auth/forgot-password
- /auth/reset-password

Protected Routes (require auth):
- /home
- /dashboard
- /onboarding
- /settings
- /profile

Conditional Routes:
- /onboarding (redirect to /dashboard if completed)
- /home (redirect to /onboarding if not completed)
\`\`\`

---

## 5. Error Handling & Notifications

### Toast Notification System
\`\`\`typescript
Features:
- Success messages (green)
- Error messages (red)
- Info messages (blue)
- Warning messages (orange)
- Auto-dismiss (5 seconds)
- Manual dismiss (X button)
- Position: top-right
- Stacking: multiple toasts
- Animations: slide in from right
\`\`\`

### Error Boundaries
\`\`\`typescript
Levels:
1. Page-level error boundaries
2. Component-level error boundaries
3. Form validation errors
4. Network error handling
5. Auth error handling
\`\`\`

---

## 6. Mobile (Expo React Native) Considerations

### Platform Differences
\`\`\`
Web → Mobile Mapping:

1. Navigation:
   - Next.js Router → Expo Router
   - Link component → expo-router Link
   - useRouter → useRouter (expo-router)

2. Styling:
   - Tailwind CSS → NativeWind (Tailwind for RN)
   - CSS animations → React Native Animated API
   - Hover states → Press states (onPressIn/onPressOut)

3. Components:
   - HTML elements → React Native components
   - <div> → <View>
   - <input> → <TextInput>
   - <button> → <Pressable> or <TouchableOpacity>

4. Auth:
   - Supabase client (same)
   - Session storage → AsyncStorage
   - Deep linking for email verification
\`\`\`

### Implementation Priority
\`\`\`
Phase 1: Core Auth (Week 1-2)
- Login screen
- Sign up screen
- Password reset
- Session management

Phase 2: Onboarding (Week 3)
- Welcome screen
- Goals selection
- Profile setup
- Preferences

Phase 3: Main App (Week 4-6)
- Home screen
- Dashboard
- Settings
- Profile

Phase 4: Polish (Week 7-8)
- Animations
- Error handling
- Offline support
- Push notifications
\`\`\`

---

## 7. Testing Strategy

### Web Testing
\`\`\`
Unit Tests:
- Form validation
- Auth functions
- Onboarding logic

Integration Tests:
- Sign up flow
- Login flow
- Password reset flow
- Onboarding flow

E2E Tests:
- Complete user journey
- Error scenarios
- Edge cases
\`\`\`

### Mobile Testing
\`\`\`
- iOS Simulator testing
- Android Emulator testing
- Physical device testing
- Deep link testing
- Offline behavior testing
\`\`\`

---

## 8. Documentation Updates Required

### For Every Change:
1. Update `docs/project-overview.md`
2. Update `docs/expo-react-native-migration-guide.md`
3. Update `docs/api-reference.md` (if API changes)
4. Update `docs/database-schema.md` (if schema changes)
5. Update `README.md` (if setup changes)

### Change Log Format:
\`\`\`markdown
## [Date] - Feature/Fix Name
### Changed
- List of changes

### Added
- New features

### Fixed
- Bug fixes

### Migration Notes
- Steps for Expo developer
\`\`\`

---

## 9. Next Steps

### Immediate (This Session):
1. ✅ Create this strategy document
2. ✅ Implement multi-step auth forms
3. ✅ Add password visibility toggles
4. ✅ Add password strength indicators
5. ✅ Connect auth to Supabase backend
6. ✅ Fix environment variable configuration
7. ⏳ Test complete auth flow with provided credentials
8. ⏳ Update Expo migration guide

### Short Term (Next Session):
1. Implement toast notification system
2. Add error boundaries
3. Enhance onboarding with animations
4. Add RBAC (Role-Based Access Control)
5. Create admin dashboard

### Long Term:
1. Social auth (Google, Apple)
2. Two-factor authentication
3. Biometric auth (mobile)
4. Session management improvements
5. Security audit

---

## 10. Key Decisions Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Onboarding Placement** | After Sign Up, Before Dashboard | Better UX, higher completion rate |
| **Auth Flow Style** | Multi-step transitional | Modern, less overwhelming |
| **Password Visibility** | Toggle with eye icon | Industry standard, better UX |
| **Password Strength** | Real-time 4-level indicator | Encourages strong passwords |
| **Error Handling** | Toast notifications | Non-intrusive, mobile-friendly |
| **Mobile Framework** | Expo React Native | Matches web tech stack, easier migration |
| **Styling Approach** | NativeWind (Tailwind for RN) | Consistent with web, faster development |

---

## 11. Environment Variables Configuration

### Required Environment Variables

The application requires the following environment variables to be set:

\`\`\`bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Development Redirect URL (for email verification)
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000/onboarding
\`\`\`

### Setting Environment Variables

**In Vercel (Production):**
1. Go to Project Settings → Environment Variables
2. Add each variable with its value
3. Select appropriate environments (Production, Preview, Development)
4. Redeploy the application

**In Local Development:**
1. Create a `.env.local` file in the project root
2. Add the environment variables
3. Restart the development server

**In v0 Chat:**
1. Click on the "Vars" section in the in-chat sidebar
2. Add the environment variables with their values
3. The variables will be automatically available to your application

### Environment Variable Sources

The Supabase credentials can be obtained from:
1. Your Supabase project dashboard → Settings → API
2. The Vercel integration if you've connected Supabase
3. The v0 integration panel if Supabase is connected

### Testing Authentication

To test the authentication flow:
1. Ensure the environment variables are properly set
2. Use the sign-up flow to create a new account
3. Verify email confirmation works
4. Test login with the created credentials
5. Test password reset flow

---

## Conclusion

This strategy provides a comprehensive, modern authentication and onboarding experience that:
- Matches industry best practices
- Provides excellent UX
- Is mobile-ready
- Is well-documented
- Is maintainable and scalable

All decisions are documented and can be referenced by both web and mobile developers.
