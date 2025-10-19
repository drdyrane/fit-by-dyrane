# 🎨 Design Manifesto — Fit by Dyrane
### Hybrid AI × Apple Design System (2025 Edition)
*"Health should look as good as it feels."*

---

## 1. Overview & Philosophy

Fit by Dyrane combines **Apple-grade simplicity**, **AI-era interactivity**, and **hybrid PWA readiness**.  
Every pixel, motion, and interaction is intentional, designed to **engage, delight, and guide** users while staying minimal and elegant.

### Core Principles

- **Minimal Intelligence** – simplicity first; automation second
- **Emotive Functionality** – transitions and interactions carry feeling
- **Readable Beauty** – typography is design; spacing and rhythm shape emotion
- **Glow & Gradient** – subtle, layered light conveys vitality and depth
- **Touch/Hover to Reveal** – interactions unfold content without breaking flow
- **Hybrid Harmony** – feels native on web or mobile, deployable via PWA → Expo

---

## 2. Visual Language

### Typography
- **Primary Font:** Inter (300-800 weight scale)
- **Titles (H1-H2):** semibold, tracking-tight
- **Body:** regular, 1.6 line-height
- **Buttons:** medium, uppercase or small-caps

### Color System

#### Light Mode
- Base: `#F9FAFB`
- Accent Gradient: `linear-gradient(90deg, #00FFA3, #00C6FF)`
- Shadow: `rgba(0,0,0,0.08)`

#### Dark Mode
- Base: `#0E0E10`
- Accent Gradient: `linear-gradient(90deg, #6A00FF, #C400FF)`
- Glow Shadow: `rgba(255,255,255,0.05)`

#### AI Glow Tokens
\`\`\`css
--glow-green: #00FFA3;
--glow-blue: #00C6FF;
--glow-violet: #C400FF;
\`\`\`

---

## 3. Button + Icon Interaction System

### Button Composition
- **Label Text:** Minimal, 1-2 words max
- **Icon:** Directionally paired (→ for forward, ← for back)
- **Spacing:** `gap-2` between text and icon
- **Alignment:** Center-aligned

### Motion Tokens
| Interaction | Motion | Timing |
|-------------|---------|--------|
| **Hover** | Text slides 2px, icon moves 4px | 150ms |
| **Press** | Icon scales 1.1 + glow | 120ms |
| **Release** | Gradient flows L→R | 180ms |

### CTA Direction Cues
- Forward/Next: `→`, `↗`, `▶`
- Return/Back: `←`, `↩`
- Submit/Confirm: `✓`, `↦`
- Cancel: `✕`, `⊘`

---

## 4. Interactive Background Motion System

### Principles
- **Subtle over flashy** – backgrounds breathe, don't distract
- **Depth through parallax** – layered gradients shift with pointer
- **Directional flow** – hover direction influences gradient motion
- **Color mood sync** – gradient adapts to theme/state

### Behavior Map
| Event | Reaction |
|-------|----------|
| **Mouse Move** | Gradient follows cursor (~10-20% offset) |
| **Hover Over CTA** | Luminous wave expands outward |
| **Page Transition** | Gradient shifts direction/hue |
| **Active Click** | Ripple pulse |
| **Idle (3-5s)** | Ambient drift resumes |

### Visual Treatment
- **3 Gradient Layers:**
  1. Base: slow 10s loop
  2. Accent: pointer reactive
  3. Glow: hover pulse
- **Blend Mode:** `overlay` / `soft-light`
- **Glow Radius:** 60-120px, blur 25-40px

---

## 5. Micro-Animations

- **Hover → Reveal:** Text slides up, icon fades in (150ms)
- **Button Press:** Scale-down (0.96) + contrast pulse (120ms)
- **Form Focus:** Border glows with gradient animation
- **Page Transition:** Fade/blur (200ms)

---

## 6. Accessibility & Performance

- Contrast ratio ≥ 4.5:1
- Touch targets ≥ 44x44px
- ARIA labels for icons
- Animations under 500ms
- Respect `prefers-reduced-motion`

---

## 7. Implementation Status

### ✅ Completed
- Interactive background with cursor tracking
- Animated button component with icon motion
- Gradient drift animations
- Hover lift effects for cards
- Glow effects for interactive elements
- Glass morphism header
- Enhanced landing page with all interactions

### 🚧 In Progress
- Dashboard with interactive backgrounds
- Onboarding flow animations
- Settings page enhancements

---

## 8. Closing Manifesto

> "Every hover is a heartbeat.  
> Every gradient shift is intention.  
> Fit by Dyrane isn't an app — it's rhythm translated into interface."

---

© 2025 Dyrane Studios — Design Division
