# Theme System

## Overview

Fit by Dyrane uses a comprehensive theme system built on CSS custom properties (design tokens) that allows seamless switching between light and dark modes.

## Design Tokens

All colors are defined as CSS custom properties in `app/globals.css`:

\`\`\`css
:root {
  --background: /* light mode background */
  --foreground: /* light mode text */
  --primary: /* brand color */
  /* ... more tokens */
}

.dark {
  --background: /* dark mode background */
  --foreground: /* dark mode text */
  /* ... more tokens */
}
\`\`\`

## Color Palette

### Brand Colors
- **Primary**: Main brand color for CTAs and important elements
- **Secondary**: Supporting brand color for accents

### Neutrals
- **Background**: Page background
- **Foreground**: Primary text color
- **Muted**: Secondary text and disabled states
- **Border**: Dividers and borders

### Semantic Colors
- **Destructive**: Error states and dangerous actions
- **Success**: Success states and positive feedback
- **Warning**: Warning states and cautions

## Typography

### Font Families
- **Sans**: Geist - Primary UI font
- **Mono**: Geist Mono - Code and data display

### Font Scale
- `text-xs`: 12px - Small labels
- `text-sm`: 14px - Secondary text
- `text-base`: 16px - Body text
- `text-lg`: 18px - Large body text
- `text-xl`: 20px - Small headings
- `text-2xl`: 24px - Section headings
- `text-3xl`: 30px - Page headings
- `text-4xl`: 36px - Hero headings

## Spacing System

Uses Tailwind's default spacing scale:
- `p-1`: 4px
- `p-2`: 8px
- `p-4`: 16px
- `p-6`: 24px
- `p-8`: 32px
- `p-12`: 48px

## Component Patterns

### Cards
\`\`\`tsx
<Card className="bg-card text-card-foreground">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
\`\`\`

### Buttons
\`\`\`tsx
<Button variant="default">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outline Action</Button>
<Button variant="ghost">Ghost Action</Button>
\`\`\`

## Theme Switching

Theme is controlled via the `theme` class on the `<html>` element:

\`\`\`tsx
// Light mode
<html lang="en">

// Dark mode
<html lang="en" class="dark">
\`\`\`

Theme preference is stored in `user_preferences` table and applied on load.

## Accessibility

- All color combinations meet WCAG AA contrast requirements
- Focus states use `--ring` color with visible outline
- Reduced motion respected via `prefers-reduced-motion`
- Semantic HTML elements used throughout

## React Native Compatibility

The theme system is designed to be compatible with React Native:

- Design tokens can be exported as JavaScript objects
- Color values use standard formats (hex, rgb)
- Spacing scale maps to React Native's spacing
- Component patterns translate to React Native components
