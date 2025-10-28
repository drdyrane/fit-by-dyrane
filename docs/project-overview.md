# Fit by Dyrane - Project Overview

## Project Summary

**Fit by Dyrane** is a modern wellness and health tracking Progressive Web App (PWA) built with Next.js 15, React 19, TypeScript, and Supabase. The application features a futuristic design with interactive backgrounds, smooth animations, and comprehensive authentication flows.

## Tech Stack

### Frontend
- **Framework**: Next.js 15.2.4 (App Router)
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.14
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Fonts**: Poppins (primary), Pacifico (accent)

### Backend & Database
- **Backend**: Supabase
- **Authentication**: Supabase Auth (Email/Password)
- **Database**: PostgreSQL (via Supabase)
- **Real-time**: Supabase Realtime subscriptions

### Testing
- **Framework**: Vitest 2.1.9
- **Testing Library**: @testing-library/react 16.3.0
- **Browser Testing**: @vitest/browser with Playwright

### Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Type Checking**: TypeScript strict mode
- **Git Hooks**: Husky (optional)

## Project Structure

\`\`\`
fit-by-dyrane/
├── app/                          # Next.js App Router
│   ├── auth/                     # Authentication pages
│   │   ├── login/               # Sign in page
│   │   ├── sign-up/             # Sign up page
│   │   ├── forgot-password/     # Password reset request
│   │   ├── reset-password/      # Password reset form
│   │   ├── sign-up-success/     # Email verification notice
│   │   ├── error/               # Auth error page
│   │   └── layout.tsx           # Auth layout with AbstractBackground
│   ├── dashboard/               # Main dashboard
│   ├── home/                    # Authenticated home page
│   ├── onboarding/              # User onboarding flow
│   ├── settings/                # User settings
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page
│   └── globals.css              # Global styles & design tokens
├── components/
│   ├── features/                # Feature-specific components
│   │   ├── dashboard/          # Dashboard components
│   │   ├── onboarding/         # Onboarding flow components
│   │   └── settings/           # Settings components
│   ├── landing/                 # Landing page sections
│   │   ├── hero/               # Hero section
│   │   ├── features.tsx        # Features section
│   │   ├── how-it-works.tsx    # How it works section
│   │   ├── testimonials.tsx    # Testimonials
│   │   ├── pricing.tsx         # Pricing plans
│   │   ├── stats.tsx           # Statistics
│   │   ├── faq.tsx             # FAQ section
│   │   ├── imagery-showcase.tsx # Interactive imagery carousel
│   │   ├── split-imagery.tsx   # Split layout with imagery
│   │   └── final-cta.tsx       # Final call-to-action
│   ├── layout/                  # Layout components
│   │   └── abstract-background.tsx # Interactive grid background
│   ├── shared/                  # Shared components
│   │   ├── navbar.tsx          # Navigation bar
│   │   ├── footer.tsx          # Footer with color credit
│   │   ├── theme-provider.tsx  # Theme context provider
│   │   ├── theme-switcher.tsx  # Theme toggle
│   │   └── error-boundary.tsx  # Error boundary component
│   └── ui/                      # shadcn/ui components
│       ├── button.tsx          # Enhanced button with animations
│       ├── card.tsx            # Card component
│       ├── input.tsx           # Input with validation states
│       └── ...                 # Other UI primitives
├── lib/
│   ├── supabase/               # Supabase clients
│   │   ├── client.ts           # Browser client
│   │   ├── server.ts           # Server client
│   │   └── middleware.ts       # Auth middleware
│   ├── fonts.ts                # Font exports
│   ├── utils.ts                # Utility functions
│   └── validations/            # Zod schemas
├── hooks/                       # Custom React hooks
│   ├── use-theme.ts            # Theme hook
│   ├── use-mouse-position.ts   # Mouse tracking
│   └── use-debounced-effect.ts # Debounced effects
├── scripts/                     # Database migration scripts
│   ├── 001_create_profiles_table.sql
│   ├── 002_create_user_preferences_table.sql
│   └── ...
├── docs/                        # Documentation
│   ├── README.md               # Main documentation
│   ├── architecture.md         # System architecture
│   ├── database-schema.md      # Database schema
│   ├── theme-system.md         # Theme system docs
│   ├── testing-strategy.md     # Testing guidelines
│   ├── development-guide.md    # Development setup
│   ├── api-reference.md        # API documentation
│   ├── design-manifesto.md     # Design principles
│   ├── landing-page-updates.md # Landing page changes
│   └── developer-fix-notes.md  # Fix notes
└── tests/                       # Test files
    ├── unit/                   # Unit tests
    ├── components/             # Component tests
    └── integration/            # Integration tests
\`\`\`

## Key Features

### 1. Landing Page
- **Hero Section**: Futuristic design with AbstractBackground, animated gradients, and CTAs
- **Features**: 6 feature cards with icons and hover effects
- **How It Works**: 3-step process visualization
- **Testimonials**: User testimonials with avatars
- **Pricing**: Free and Pro plans with feature comparison
- **Stats**: Key metrics display
- **FAQ**: Accordion-style frequently asked questions
- **Imagery Sections**: Interactive image showcases with hover effects
- **Smooth Scroll**: Navbar links scroll to sections

### 2. Authentication System
- **Sign In**: Email/password login with validation
- **Sign Up**: Account creation with password strength indicator
- **Forgot Password**: Password reset request flow
- **Reset Password**: New password creation
- **Email Verification**: Confirmation email flow
- **Error Handling**: Comprehensive error states
- **Navigation**: Easy switching between auth pages
- **Design**: Matches landing page aesthetic with AbstractBackground

### 3. Dashboard
- **Health Metrics**: Track physical, nutrition, and wellness data
- **Goals Progress**: Visual progress tracking
- **Quick Actions**: Log metrics dialog
- **Recent Activity**: Activity feed
- **Charts**: Weight trend visualization

### 4. Onboarding
- **4-Step Flow**: Welcome → Goals → Profile → Preferences
- **Progress Tracking**: Visual step indicator
- **Database Persistence**: Save progress at each step
- **Goal Selection**: Multi-select wellness goals

### 5. Settings
- **Profile Management**: Edit personal information
- **Preferences**: Theme, notifications, measurement system
- **Account**: Email display and account deletion

### 6. Design System
- **Color Palette**: Blue, purple, green, orange gradients
- **Typography**: Poppins (primary), Pacifico (accent)
- **Components**: Consistent button styles, cards, inputs
- **Animations**: Smooth transitions, hover effects, micro-interactions
- **Theme**: Light/dark mode with system preference detection
- **AbstractBackground**: Interactive grid that follows mouse

## Database Schema

### Tables
1. **profiles**: User profile information
2. **user_preferences**: Theme, notifications, measurement system
3. **onboarding_progress**: Track onboarding completion
4. **user_goals**: Wellness goals
5. **health_metrics**: Daily health tracking data

### Row Level Security (RLS)
All tables have RLS policies ensuring users can only access their own data.

## Environment Variables

Required environment variables (provided by Supabase integration):
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service role key (server-side only)
- `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL`: Development redirect URL for email verification

## Design Principles

1. **Simplicity**: Clean, uncluttered interfaces
2. **Intelligence**: AI-inspired aesthetics
3. **Privacy**: User data protection
4. **Delight**: Micro-interactions and animations
5. **Accessibility**: WCAG 2.1 AA compliance
6. **Performance**: Optimized loading and rendering
7. **Responsiveness**: Mobile-first design

## Color System

### Primary Colors
- **Primary**: Blue-Purple (#6A5BD8)
- **Secondary**: Soft Purple (#8B7FE8)
- **Accent**: Pink-Purple (#A78BFA)
- **Warning**: Orange (#F59E0B)
- **Success**: Vibrant Pink-Purple (#D946EF)

### Gradients
- Hero: Blue → Purple → Pink
- Buttons: Primary → Accent → Secondary
- Backgrounds: Subtle gradients with low opacity

## Typography

### Font Families
- **Primary**: Poppins (300, 400, 500, 600, 700)
- **Accent**: Pacifico (400)

### Scale
- **Headings**: 2xl to 4xl
- **Body**: sm to base
- **Captions**: xs

## Animation System

### Keyframes
- `sweep-right`: Button gradient animation
- `lift`: Card hover elevation
- `bounce-in`: Element entrance
- `shake`: Error state
- `gradientDrift`: Background ambient motion
- `float`: Floating elements
- `pulse-glow`: Glow effect
- `slide-in-*`: Directional slides

### Timing
- **Fast**: 150ms (micro-interactions)
- **Normal**: 300ms (standard transitions)
- **Slow**: 500ms (complex animations)

## Testing Strategy

### Unit Tests
- Validation schemas
- Utility functions
- Custom hooks

### Component Tests
- UI component rendering
- User interactions
- Accessibility

### Integration Tests
- User flows (onboarding, auth)
- API interactions
- Database operations

## Development Workflow

1. **Setup**: Clone repo, install dependencies with `pnpm install`
2. **Environment**: Configure Supabase environment variables
3. **Database**: Run migration scripts in Supabase
4. **Development**: `pnpm dev` to start dev server
5. **Testing**: `pnpm test` to run tests
6. **Build**: `pnpm build` to create production build
7. **Deploy**: Push to GitHub, auto-deploy via Vercel

## Future Enhancements

1. **Mobile App**: React Native version using Expo
2. **AI Insights**: Personalized health recommendations
3. **Social Features**: Community and sharing
4. **Integrations**: Wearables, health apps
5. **Advanced Analytics**: Detailed health reports
6. **Gamification**: Achievements and rewards
7. **RBAC**: Role-based access control

## Credits

- **Design**: Fit by Dyrane team
- **Colors**: Luz (color palette designer)
- **Development**: Built with v0.app
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

---

**Last Updated**: January 2025
**Version**: 1.0.0
**Status**: Active Development
