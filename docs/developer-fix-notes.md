# 📝 Fit by Dyrane — Developer Fix Notes

## **1. AnimatedButton + Link Fix**

**Issue:**
`React.Children.only expected a single React element child` appears when using:

\`\`\`tsx
<AnimatedButton asChild>
  <Link href="/auth/sign-up">Sign Up</Link>
</AnimatedButton>
\`\`\`

**Cause:**
- `AnimatedButton` expects **exactly one React element child** when using `asChild`
- Next.js `Link` can render multiple elements internally or pass children as arrays
- `asChild` uses Radix UI's `Slot` which forwards props to the child element; it must be a **single DOM element**

**Fix Applied:**
The `AnimatedButton` component now properly handles `asChild` by cloning the child element and injecting effects directly into it. This ensures `Slot` receives exactly one React element.

**Usage:**
\`\`\`tsx
<AnimatedButton asChild size="lg" icon={<ArrowRight className="size-5" />}>
  <Link href="/auth/sign-up">Sign Up</Link>
</AnimatedButton>
\`\`\`

**Alternative Approaches (if issues persist):**
- Wrap Link content in a `<span>`:
  \`\`\`tsx
  <AnimatedButton asChild size="lg" icon={<ArrowRight className="size-5" />}>
    <Link href="/auth/sign-up">
      <span>Sign Up</span>
    </Link>
  </AnimatedButton>
  \`\`\`
- Use `legacyBehavior` to render a single `<a>`:
  \`\`\`tsx
  <AnimatedButton asChild size="lg" icon={<ArrowRight className="size-5" />}>
    <Link href="/auth/sign-up" legacyBehavior>
      <a>Sign Up</a>
    </Link>
  </AnimatedButton>
  \`\`\`

---

## **2. Icon Requirements**

**Guideline:** Every primary or secondary CTA must have an **icon aligned left or right** for visual cues and interactive consistency.

**Implementation:**
- Use `Lucide-react` icons: `ArrowRight`, `ChevronRight`, `Activity`, `Heart`, `TrendingUp`, `Zap`, etc.
- Icons should **animate slightly on hover** (slide, float, pulse)
- Use `iconPosition` prop to control placement: `"left"` or `"right"` (default)

**Example:**
\`\`\`tsx
<AnimatedButton size="lg" icon={<ArrowRight className="size-5" />}>
  Get Started
</AnimatedButton>

<AnimatedButton size="lg" icon={<Activity className="size-5" />} iconPosition="left">
  View Dashboard
</AnimatedButton>
\`\`\`

---

## **3. Hover Background Animation (Left → Right Reveal)**

**Feature:** Buttons and cards should animate **background gradient from left to right** on hover.

**Implementation:**
Added `gradientSlide` keyframe animation and `.hover-gradient-slide` utility class to `globals.css`.

**Usage:**
\`\`\`tsx
<AnimatedButton className="bg-gradient-to-r from-purple-500 to-pink-500 hover-gradient-slide">
  Get Started
</AnimatedButton>
\`\`\`

**CSS:**
\`\`\`css
@keyframes gradientSlide {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.hover-gradient-slide {
  background-size: 200% auto;
  transition: background-position 0.5s ease-out;
}

.hover-gradient-slide:hover {
  animation: gradientSlide 0.5s forwards;
}
\`\`\`

**Notes:**
- Gradient should **transition smoothly** with text/icon color inversion if needed
- Ensure **hover + focus + active** states are consistent
- Maintain **rounded corners, shadow, and glow** per design tokens

---

## **4. Design System Consistency**

**Global Patterns:**
- All CTAs use `AnimatedButton` with icons
- Cards use `.hover-lift` class for elevation on hover
- Interactive elements have glow effects (`.glow-green`, `.glow-blue`, `.glow-violet`)
- Backgrounds use `.gradient-wellness-interactive` for ambient drift
- Typography follows Inter font family with proper hierarchy

**Animation Tokens:**
- **Duration:** 150ms (micro), 180ms (standard), 360ms (emphasis), 500ms (sweep)
- **Easing:** `cubic-bezier(0.22, 0.9, 0.32, 1)` for smooth, premium feel
- **Transform:** Translate, scale, and rotate for depth and feedback

---

## **5. QA Checklist**

- [x] All AnimatedButtons using `asChild` handle Link correctly
- [x] Every CTA has an icon with proper positioning
- [x] Hover gradient animations function left→right
- [x] Glow, shadow, and motion tokens applied consistently
- [x] Light/Dark mode verified with proper contrast
- [x] Accessibility (focus states, keyboard nav) intact
- [x] Typography hierarchy follows Inter font system
- [x] Interactive backgrounds respond to cursor movement

---

## **6. Component Reference**

### AnimatedButton Props
\`\`\`typescript
interface AnimatedButtonProps {
  asChild?: boolean           // Use with Link or other components
  icon?: React.ReactNode      // Icon element (required for CTAs)
  iconPosition?: "left" | "right"  // Icon placement (default: "right")
  variant?: "default" | "secondary" | "ghost" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  children: React.ReactNode
}
\`\`\`

### Available Animations
- `.animate-sweep-right` - Sweep effect from left to right
- `.animate-lift` - Elevation on hover
- `.animate-bounce-in` - Entry animation
- `.animate-shake` - Error feedback
- `.animate-gradient-drift` - Ambient background motion
- `.animate-float` - Subtle icon movement
- `.hover-gradient-slide` - Gradient reveal on hover

### Glow Effects
- `.glow-green` - Wellness green glow
- `.glow-blue` - Accent blue glow
- `.glow-violet` - Emphasis violet glow

---

## **7. Notes to Developers**

- Treat **buttons/cards as micro-interactions**: icon + hover gradient + glow + text movement
- AnimatedButton + Link must always be a **single child** to avoid runtime errors
- Review all pages for **hover-to-reveal** gradient effects
- Refer to **Design_Update.md** and **design-manifesto.md** for token values, spacing, glow, motion, and typography
- Use parallel tool calls when reading multiple files for efficiency
- Always test in both light and dark modes
- Ensure all interactive elements have proper focus states for accessibility
