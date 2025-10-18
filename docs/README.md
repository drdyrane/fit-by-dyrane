# Fit by Dyrane - Documentation

> A wellness companion that simplifies health tracking with AI-powered insights

## 📚 Documentation Structure

- [Architecture](./architecture.md) - System design and technical decisions
- [Database Schema](./database-schema.md) - Supabase tables and relationships
- [Theme System](./theme-system.md) - Design tokens and theming approach
- [Testing Strategy](./testing-strategy.md) - Testing patterns and coverage
- [Development Guide](./development-guide.md) - Setup and contribution guidelines
- [API Reference](./api-reference.md) - Server actions and API routes

## 🎯 Project Vision

Fit by Dyrane is a wellness tracking PWA that prioritizes:

- **Simplicity**: Clean, intuitive interface with minimal friction
- **Intelligence**: AI-powered insights without overwhelming users
- **Privacy**: User data stays secure with Supabase RLS
- **Flexibility**: Easy theme switching and personalization

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL + Auth)
- **Styling**: Tailwind CSS v4 with design tokens
- **State**: SWR for client-side data fetching
- **Testing**: Vitest + React Testing Library
- **Type Safety**: TypeScript + Zod validation

## 🚀 Getting Started

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Type check
npm run type-check
\`\`\`

## 📱 Progressive Web App

This project is built as a PWA with future migration to Expo/React Native in mind:

- Modular component architecture
- Navigation ready for Expo Router
- Theme system compatible with React Native
- Shared business logic between web and mobile

## 🔐 Authentication Flow

1. User signs up with email/password
2. Email confirmation required (Supabase default)
3. After confirmation, user completes onboarding
4. Profile and preferences stored with RLS protection

## 📊 Core Features

- **Onboarding**: Collect user goals and preferences
- **Dashboard**: Health metrics overview with charts
- **Content Feed**: Curated wellness content
- **Settings**: Profile management and theme switching
- **AI Insights**: Personalized recommendations (future)

## 🎨 Design System

The app uses a comprehensive design system with:

- 3-5 color palette (primary, neutrals, accents)
- Typography scale (2 font families max)
- Spacing system (Tailwind scale)
- Component library (shadcn/ui)
- Dark mode support

## 📝 Development Principles

1. **Modular Code**: Small, focused components and utilities
2. **Type Safety**: TypeScript everywhere, Zod for runtime validation
3. **Testing**: Comprehensive unit and integration tests
4. **Documentation**: Keep docs updated with code changes
5. **Security**: RLS policies for all user data
6. **Performance**: Optimize for Core Web Vitals

## 🗺️ Roadmap

- [x] Phase 1: Project foundation and documentation
- [ ] Phase 2: Database schema and authentication
- [ ] Phase 3: Theme system and design tokens
- [ ] Phase 4: Onboarding flow
- [ ] Phase 5: Dashboard and health metrics
- [ ] Phase 6: Settings and user profile
- [ ] Phase 7: Testing infrastructure
- [ ] Phase 8: Content feed and AI integration
- [ ] Phase 9: PWA optimization
- [ ] Phase 10: Expo/React Native migration

## 📄 License

MIT License - see LICENSE file for details
