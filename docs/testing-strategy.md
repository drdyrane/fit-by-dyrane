# Testing Strategy

## Overview

Fit by Dyrane uses a comprehensive testing approach to ensure code quality and prevent regressions.

## Testing Stack

- **Test Runner**: Vitest (fast, Vite-powered)
- **Component Testing**: React Testing Library
- **Assertions**: Vitest + @testing-library/jest-dom
- **Coverage**: Vitest coverage (v8)

## Test Types

### Unit Tests
Test individual functions and utilities in isolation.

**Location**: `tests/unit/`

**Example**:
\`\`\`typescript
// tests/unit/utils/format-date.test.ts
import { describe, it, expect } from 'vitest'
import { formatDate } from '@/lib/utils/format-date'

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2025-01-15')
    expect(formatDate(date)).toBe('Jan 15, 2025')
  })
})
\`\`\`

### Component Tests
Test React components with user interactions.

**Location**: `tests/components/`

**Example**:
\`\`\`typescript
// tests/components/login-form.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LoginForm } from '@/components/features/auth/login-form'

describe('LoginForm', () => {
  it('submits form with email and password', async () => {
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)
    
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' }
    })
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' }
    })
    fireEvent.click(screen.getByRole('button', { name: 'Login' }))
    
    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    })
  })
})
\`\`\`

### Integration Tests
Test feature flows with multiple components and data fetching.

**Location**: `tests/integration/`

**Example**:
\`\`\`typescript
// tests/integration/onboarding-flow.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { OnboardingFlow } from '@/components/features/onboarding/onboarding-flow'

describe('Onboarding Flow', () => {
  it('completes full onboarding process', async () => {
    render(<OnboardingFlow />)
    
    // Step 1: Welcome
    expect(screen.getByText('Welcome to Fit by Dyrane')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Get Started' }))
    
    // Step 2: Goals
    await waitFor(() => {
      expect(screen.getByText('What are your goals?')).toBeInTheDocument()
    })
    // ... more steps
  })
})
\`\`\`

## Coverage Goals

- **Overall**: 80%+ coverage
- **Critical paths**: 100% coverage (auth, data mutations)
- **UI components**: 70%+ coverage
- **Utilities**: 90%+ coverage

## Running Tests

\`\`\`bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage

# Run specific test file
npm test -- login-form.test.tsx
\`\`\`

## Best Practices

1. **Test behavior, not implementation**
   - Focus on what users see and do
   - Avoid testing internal state

2. **Use semantic queries**
   - Prefer `getByRole`, `getByLabelText`
   - Avoid `getByTestId` unless necessary

3. **Mock external dependencies**
   - Mock Supabase calls
   - Mock API routes
   - Use MSW for HTTP mocking

4. **Keep tests focused**
   - One concept per test
   - Clear test names
   - Arrange-Act-Assert pattern

5. **Test accessibility**
   - Check for proper ARIA labels
   - Test keyboard navigation
   - Verify screen reader text

## Continuous Integration

Tests run automatically on:
- Every commit (pre-commit hook)
- Pull requests (GitHub Actions)
- Before deployment (Vercel)

Failed tests block deployment to production.
