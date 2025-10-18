# Fit by Dyrane

> A wellness companion that simplifies health tracking with AI-powered insights

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green.svg)](https://supabase.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Features

- **Health Tracking**: Log weight, steps, nutrition, sleep, mood, and energy levels
- **Smart Goals**: Set and track wellness goals with visual progress indicators
- **Beautiful Dashboard**: View your health metrics with charts and insights
- **Theme System**: Seamless light/dark mode with custom design tokens
- **Privacy First**: All data secured with Row Level Security (RLS)
- **PWA Ready**: Progressive Web App optimized for mobile and desktop
- **Type Safe**: Full TypeScript coverage with Zod validation

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL + Auth)
- **Styling**: Tailwind CSS v4 with design tokens
- **UI Components**: shadcn/ui
- **State Management**: SWR for client-side data fetching
- **Testing**: Vitest + React Testing Library
- **Type Safety**: TypeScript + Zod validation
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Supabase account (connected via Vercel)

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd fit-by-dyrane
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
   - Connect Supabase integration via Vercel
   - Environment variables are automatically configured

4. Run database migrations:
   - Execute SQL scripts in `scripts/` folder via Supabase
   - Scripts are numbered and should be run in order

5. Start development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm test             # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Generate coverage report
npm run type-check   # Run TypeScript type checking
\`\`\`

### Project Structure

\`\`\`
fit-by-dyrane/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Auth routes
│   ├── actions/             # Server actions
│   ├── dashboard/           # Dashboard page
│   ├── onboarding/          # Onboarding flow
│   └── settings/            # Settings page
├── components/              # React components
│   ├── features/            # Feature-specific components
│   ├── shared/              # Shared components
│   └── ui/                  # shadcn/ui components
├── lib/                     # Utilities and configurations
│   ├── supabase/           # Supabase clients
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Helper functions
│   ├── validations/        # Zod schemas
│   └── constants/          # App constants
├── docs/                    # Documentation
├── scripts/                 # Database scripts
├── tests/                   # Test files
└── public/                  # Static assets
\`\`\`

## Documentation

- [Architecture](./docs/architecture.md) - System design and technical decisions
- [Database Schema](./docs/database-schema.md) - Supabase tables and relationships
- [Theme System](./docs/theme-system.md) - Design tokens and theming
- [Testing Strategy](./docs/testing-strategy.md) - Testing patterns and coverage
- [Development Guide](./docs/development-guide.md) - Setup and contribution guidelines
- [API Reference](./docs/api-reference.md) - Server actions and API routes

## Testing

Run the test suite:

\`\`\`bash
npm test
\`\`\`

Run tests with coverage:

\`\`\`bash
npm run test:coverage
\`\`\`

Run tests in watch mode:

\`\`\`bash
npm test -- --watch
\`\`\`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Connect Supabase integration
4. Deploy

The app will automatically deploy on every push to the main branch.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Database and auth by [Supabase](https://supabase.com/)
- Deployed on [Vercel](https://vercel.com/)

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Made with ❤️ by Dyrane
\`\`\`
