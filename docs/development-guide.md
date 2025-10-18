# Development Guide

## Prerequisites

- Node.js 20+ and npm
- Supabase account (connected via Vercel)
- Git

## Initial Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd fit-by-dyrane
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Verify Supabase connection**
   - Check that Supabase integration is connected in Vercel
   - Environment variables should be automatically available

4. **Run database migrations**
   \`\`\`bash
   # Scripts will be executed via v0 interface
   # Or manually via Supabase dashboard if needed
   \`\`\`

5. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

## Development Workflow

### Creating a New Feature

1. **Create feature branch**
   \`\`\`bash
   git checkout -b feature/your-feature-name
   \`\`\`

2. **Create component structure**
   \`\`\`
   components/features/your-feature/
   ├── index.ts
   ├── your-feature.tsx
   ├── your-feature-item.tsx
   └── use-your-feature.ts
   \`\`\`

3. **Write tests first (TDD)**
   \`\`\`bash
   npm test -- --watch your-feature.test.tsx
   \`\`\`

4. **Implement feature**
   - Follow TypeScript best practices
   - Use Zod for validation
   - Apply RLS for data access

5. **Update documentation**
   - Add to relevant docs in `docs/`
   - Update API reference if needed

6. **Run full test suite**
   \`\`\`bash
   npm test
   npm run type-check
   npm run lint
   \`\`\`

7. **Commit and push**
   \`\`\`bash
   git add .
   git commit -m "feat: add your feature"
   git push origin feature/your-feature-name
   \`\`\`

## Code Style

### TypeScript
- Use explicit types for function parameters and returns
- Prefer interfaces for object shapes
- Use type for unions and intersections

### React
- Prefer function components
- Use hooks for state and side effects
- Keep components small and focused
- Extract custom hooks for reusable logic

### Naming Conventions
- Components: PascalCase (`UserProfile.tsx`)
- Hooks: camelCase with `use` prefix (`useUserProfile.ts`)
- Utilities: camelCase (`formatDate.ts`)
- Constants: UPPER_SNAKE_CASE (`MAX_FILE_SIZE`)

### File Organization
\`\`\`
feature/
├── index.ts              # Public exports
├── feature.tsx           # Main component
├── feature-item.tsx      # Sub-components
├── use-feature.ts        # Custom hooks
├── feature.types.ts      # TypeScript types
├── feature.utils.ts      # Utility functions
└── feature.test.tsx      # Tests
\`\`\`

## Database Changes

1. **Create migration script**
   \`\`\`sql
   -- scripts/XXX_description.sql
   CREATE TABLE new_table (...);
   ALTER TABLE new_table ENABLE ROW LEVEL SECURITY;
   CREATE POLICY ...;
   \`\`\`

2. **Test locally**
   - Run script via v0 interface
   - Verify RLS policies work correctly

3. **Document schema**
   - Update `docs/database-schema.md`
   - Add to API reference if needed

## Debugging

### Client-side
\`\`\`typescript
console.log('[v0] User data:', userData)
\`\`\`

### Server-side
\`\`\`typescript
console.log('[v0] Server action called:', params)
\`\`\`

### Supabase Queries
\`\`\`typescript
const { data, error } = await supabase.from('table').select()
console.log('[v0] Query result:', { data, error })
\`\`\`

## Common Issues

### Authentication Issues
- Check middleware is running
- Verify cookies are being set
- Confirm email is verified

### RLS Policy Issues
- Check user is authenticated
- Verify policy conditions match query
- Test with `auth.uid()` in SQL

### Build Errors
- Clear `.next` folder
- Delete `node_modules` and reinstall
- Check TypeScript errors

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
