# Architecture

## System Overview

Fit by Dyrane follows a modern, modular architecture designed for scalability and maintainability.

## Directory Structure

\`\`\`
fit-by-dyrane/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Auth routes (login, signup)
│   ├── (app)/               # Protected app routes
│   │   ├── dashboard/       # Main dashboard
│   │   ├── settings/        # User settings
│   │   └── onboarding/      # First-time user flow
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── features/            # Feature-specific components
│   │   ├── auth/           # Authentication components
│   │   ├── dashboard/      # Dashboard components
│   │   ├── onboarding/     # Onboarding components
│   │   └── settings/       # Settings components
│   └── shared/             # Shared components
├── lib/                     # Utilities and configurations
│   ├── supabase/           # Supabase clients
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Helper functions
│   ├── validations/        # Zod schemas
│   └── constants/          # App constants
├── docs/                    # Documentation
├── scripts/                 # Database scripts
├── tests/                   # Test files
│   ├── unit/               # Unit tests
│   ├── integration/        # Integration tests
│   └── setup.ts            # Test configuration
└── public/                  # Static assets
\`\`\`

## Data Flow

### Authentication Flow
1. User submits credentials → Client component
2. Client calls Supabase auth → `lib/supabase/client.ts`
3. Middleware refreshes session → `middleware.ts`
4. Protected routes check auth → Server components

### Data Fetching Flow
1. Server components fetch initial data → `lib/supabase/server.ts`
2. Client components use SWR for real-time updates
3. Mutations use server actions → `app/actions/`
4. RLS policies enforce data access control

## Security Architecture

### Row Level Security (RLS)
- All user tables have RLS enabled
- Policies enforce `auth.uid() = user_id` checks
- No direct database access without authentication

### Authentication
- Email/password with confirmation required
- Session management via Supabase middleware
- Secure cookie handling for tokens

## Performance Considerations

- Server components for initial page loads
- SWR for client-side caching and revalidation
- Optimistic updates for better UX
- Image optimization with Next.js Image
- Code splitting by route

## Testing Strategy

- Unit tests for utilities and hooks
- Integration tests for features
- Component tests with React Testing Library
- E2E tests for critical user flows (future)

## Deployment

- Vercel for hosting (optimized for Next.js)
- Supabase for database and auth
- Environment variables managed via Vercel
- Automatic deployments on push to main
