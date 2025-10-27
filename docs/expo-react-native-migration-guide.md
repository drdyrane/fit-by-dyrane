# Expo React Native Migration Guide

## Overview

This document provides comprehensive guidance for migrating the **Fit by Dyrane** web application to a mobile app using Expo and React Native. The goal is to mirror the web experience on mobile while leveraging native capabilities.

## Prerequisites

### Required Tools
- Node.js 18+ and pnpm
- Expo CLI: `npm install -g expo-cli`
- EAS CLI: `npm install -g eas-cli`
- iOS Simulator (Mac) or Android Studio (for Android development)
- Expo Go app on physical device (for testing)

### Accounts Needed
- Expo account (create at expo.dev)
- Apple Developer account (for iOS deployment)
- Google Play Console account (for Android deployment)

## Project Setup

### 1. Initialize Expo Project

\`\`\`bash
# Create new Expo project with TypeScript
npx create-expo-app fit-by-dyrane-mobile --template expo-template-blank-typescript

cd fit-by-dyrane-mobile

# Install essential dependencies
npx expo install expo-router expo-constants expo-linking expo-status-bar
\`\`\`

### 2. Install Core Dependencies

\`\`\`bash
# Navigation
npx expo install expo-router react-native-safe-area-context react-native-screens

# UI Components
npm install @shopify/restyle
npm install react-native-reanimated react-native-gesture-handler
npm install react-native-svg

# Supabase
npm install @supabase/supabase-js @react-native-async-storage/async-storage
npm install react-native-url-polyfill

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers

# Charts
npm install react-native-chart-kit react-native-svg

# Icons
npm install @expo/vector-icons

# Utilities
npm install date-fns swr
\`\`\`

### 3. Configure app.json

\`\`\`json
{
  "expo": {
    "name": "Fit by Dyrane",
    "slug": "fit-by-dyrane",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#0A0A0F"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.fitbydyrane.app"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#0A0A0F"
      },
      "package": "com.fitbydyrane.app"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-build-properties",
        {
          "android": {
            "kotlinVersion": "1.7.22"
          }
        }
      ]
    ],
    "scheme": "fitbydyrane"
  }
}
\`\`\`

## Architecture Migration

### File Structure

\`\`\`
fit-by-dyrane-mobile/
├── app/                          # Expo Router (file-based routing)
│   ├── (auth)/                  # Auth group
│   │   ├── login.tsx
│   │   ├── sign-up.tsx
│   │   ├── forgot-password.tsx
│   │   └── reset-password.tsx
│   ├── (tabs)/                  # Tab navigation group
│   │   ├── index.tsx           # Home/Dashboard
│   │   ├── progress.tsx        # Progress tracking
│   │   ├── goals.tsx           # Goals management
│   │   └── settings.tsx        # Settings
│   ├── onboarding/
│   │   └── [step].tsx          # Dynamic onboarding steps
│   ├── _layout.tsx             # Root layout
│   └── index.tsx               # Landing/splash
├── components/
│   ├── ui/                     # Reusable UI components
│   ├── features/               # Feature-specific components
│   └── shared/                 # Shared components
├── lib/
│   ├── supabase.ts            # Supabase client
│   ├── theme.ts               # Theme configuration
│   └── utils.ts               # Utilities
├── hooks/                      # Custom hooks
├── constants/                  # Constants and config
└── assets/                     # Images, fonts, etc.
\`\`\`

### Routing Migration

**Web (Next.js App Router)** → **Mobile (Expo Router)**

| Web Route | Mobile Route | Notes |
|-----------|--------------|-------|
| `/` | `app/index.tsx` | Landing/Splash |
| `/auth/login` | `app/(auth)/login.tsx` | Auth group |
| `/auth/sign-up` | `app/(auth)/sign-up.tsx` | Auth group |
| `/home` | `app/(tabs)/index.tsx` | Tab navigator |
| `/dashboard` | `app/(tabs)/index.tsx` | Same as home |
| `/settings` | `app/(tabs)/settings.tsx` | Tab navigator |
| `/onboarding` | `app/onboarding/[step].tsx` | Dynamic route |

## Component Migration

### 1. Design System

#### Theme Configuration (Restyle)

\`\`\`typescript
// lib/theme.ts
import { createTheme } from '@shopify/restyle'

const palette = {
  // Primary colors
  primary: '#6A5BD8',
  primaryLight: '#8B7FE8',
  primaryDark: '#4A3FB8',
  
  // Secondary colors
  secondary: '#8B7FE8',
  accent: '#A78BFA',
  
  // Semantic colors
  success: '#D946EF',
  warning: '#F59E0B',
  error: '#EF4444',
  
  // Neutrals
  background: '#0A0A0F',
  backgroundLight: '#1A1A24',
  foreground: '#FFFFFF',
  muted: '#6B7280',
  
  // Transparent
  transparent: 'transparent',
}

const theme = createTheme({
  colors: {
    ...palette,
    mainBackground: palette.background,
    cardBackground: palette.backgroundLight,
    buttonPrimary: palette.primary,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadii: {
    s: 4,
    m: 8,
    l: 12,
    xl: 16,
    full: 9999,
  },
  textVariants: {
    header: {
      fontSize: 32,
      fontWeight: '700',
      lineHeight: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 32,
    },
    body: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    },
    caption: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
    },
  },
})

export type Theme = typeof theme
export default theme
\`\`\`

#### Button Component

\`\`\`typescript
// components/ui/Button.tsx
import React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { createBox, createText } from '@shopify/restyle'
import { Theme } from '@/lib/theme'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'

const Box = createBox<Theme>()
const Text = createText<Theme>()
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

interface ButtonProps {
  onPress: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
}

export function Button({
  onPress,
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
}: ButtonProps) {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(disabled ? 0.95 : 1) }],
  }))

  const sizeStyles = {
    sm: { paddingVertical: 8, paddingHorizontal: 16 },
    md: { paddingVertical: 12, paddingHorizontal: 24 },
    lg: { paddingVertical: 16, paddingHorizontal: 32 },
  }

  return (
    <AnimatedTouchable
      onPress={onPress}
      disabled={disabled || loading}
      style={animatedStyle}
    >
      <Box
        backgroundColor={variant === 'primary' ? 'buttonPrimary' : 'transparent'}
        borderRadius="m"
        {...sizeStyles[size]}
        opacity={disabled ? 0.5 : 1}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text variant="body" color="foreground" textAlign="center">
            {children}
          </Text>
        )}
      </Box>
    </AnimatedTouchable>
  )
}
\`\`\`

#### Input Component

\`\`\`typescript
// components/ui/Input.tsx
import React, { useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { createBox, createText } from '@shopify/restyle'
import { Theme } from '@/lib/theme'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

const Box = createBox<Theme>()
const Text = createText<Theme>()

interface InputProps extends TextInputProps {
  label?: string
  error?: string
  icon?: React.ReactNode
}

export function Input({ label, error, icon, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const borderStyle = useAnimatedStyle(() => ({
    borderColor: withTiming(
      error ? '#EF4444' : isFocused ? '#6A5BD8' : '#374151',
      { duration: 200 }
    ),
  }))

  return (
    <Box>
      {label && (
        <Text variant="caption" color="muted" marginBottom="s">
          {label}
        </Text>
      )}
      <Animated.View style={[{ borderWidth: 1, borderRadius: 8 }, borderStyle]}>
        <Box flexDirection="row" alignItems="center" padding="m">
          {icon && <Box marginRight="s">{icon}</Box>}
          <TextInput
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{ flex: 1, color: '#FFFFFF', fontSize: 16 }}
            placeholderTextColor="#6B7280"
          />
        </Box>
      </Animated.View>
      {error && (
        <Text variant="caption" color="error" marginTop="s">
          {error}
        </Text>
      )}
    </Box>
  )
}
\`\`\`

### 2. Authentication

#### Supabase Client Setup

\`\`\`typescript
// lib/supabase.ts
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
\`\`\`

#### Login Screen

\`\`\`typescript
// app/(auth)/login.tsx
import React, { useState } from 'react'
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { useRouter } from 'expo-router'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Box, Text } from '@/components/ui'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.replace('/(tabs)')
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box flex={1} padding="xl" justifyContent="center">
          <Text variant="header" marginBottom="xl" textAlign="center">
            Welcome Back
          </Text>

          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />

          <Box height={16} />

          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="password"
          />

          {error && (
            <Box marginTop="m" padding="m" backgroundColor="error" borderRadius="m">
              <Text color="foreground">{error}</Text>
            </Box>
          )}

          <Box height={24} />

          <Button onPress={handleLogin} loading={loading}>
            Sign In
          </Button>

          <Box height={16} />

          <Button
            variant="outline"
            onPress={() => router.push('/(auth)/sign-up')}
          >
            Create Account
          </Button>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
\`\`\`

### 3. Navigation

#### Tab Navigator

\`\`\`typescript
// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6A5BD8',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {
          backgroundColor: '#1A1A24',
          borderTopColor: '#374151',
        },
        headerStyle: {
          backgroundColor: '#1A1A24',
        },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trending-up" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: 'Goals',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="target" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
\`\`\`

### 4. Animations

#### Replace Framer Motion with Reanimated

**Web (Framer Motion)**:
\`\`\`typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
\`\`\`

**Mobile (Reanimated)**:
\`\`\`typescript
import Animated, { FadeInDown } from 'react-native-reanimated'

<Animated.View entering={FadeInDown.duration(300)}>
  <Text>Content</Text>
</Animated.View>
\`\`\`

### 5. Charts

#### Replace Recharts with react-native-chart-kit

\`\`\`typescript
// components/features/dashboard/WeightChart.tsx
import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import { Box } from '@/components/ui'

const screenWidth = Dimensions.get('window').width

export function WeightChart({ data }: { data: number[] }) {
  return (
    <Box>
      <LineChart
        data={{
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{ data }],
        }}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundColor: '#1A1A24',
          backgroundGradientFrom: '#1A1A24',
          backgroundGradientTo: '#1A1A24',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(106, 91, 216, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#6A5BD8',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </Box>
  )
}
\`\`\`

## Key Differences: Web vs Mobile

### 1. Styling

| Web (Tailwind CSS) | Mobile (Restyle/StyleSheet) |
|--------------------|----------------------------|
| `className="flex items-center"` | `<Box flexDirection="row" alignItems="center">` |
| `className="p-4 bg-primary"` | `<Box padding="m" backgroundColor="primary">` |
| `className="text-lg font-bold"` | `<Text variant="title">` |

### 2. Navigation

| Web (Next.js) | Mobile (Expo Router) |
|---------------|---------------------|
| `<Link href="/dashboard">` | `<Link href="/(tabs)">` |
| `router.push('/settings')` | `router.push('/(tabs)/settings')` |
| `usePathname()` | `useSegments()` |

### 3. Forms

| Web | Mobile |
|-----|--------|
| `<form onSubmit={...}>` | `<KeyboardAvoidingView>` |
| `<input type="email">` | `<TextInput keyboardType="email-address">` |
| Auto-focus | Manual focus management |

### 4. Images

| Web | Mobile |
|-----|--------|
| `<Image src="/image.jpg">` | `<Image source={require('./image.jpg')}>` |
| `next/image` optimization | `expo-image` optimization |

### 5. Storage

| Web | Mobile |
|-----|--------|
| `localStorage` | `AsyncStorage` |
| `sessionStorage` | `SecureStore` (sensitive data) |

## Testing Strategy

### 1. Unit Tests (Jest)

\`\`\`bash
npm install --save-dev jest @testing-library/react-native
\`\`\`

\`\`\`typescript
// __tests__/Button.test.tsx
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button onPress={() => {}}>Click Me</Button>)
    expect(getByText('Click Me')).toBeTruthy()
  })

  it('calls onPress when pressed', () => {
    const onPress = jest.fn()
    const { getByText } = render(<Button onPress={onPress}>Click Me</Button>)
    fireEvent.press(getByText('Click Me'))
    expect(onPress).toHaveBeenCalled()
  })
})
\`\`\`

### 2. E2E Tests (Detox)

\`\`\`bash
npm install --save-dev detox
\`\`\`

\`\`\`typescript
// e2e/auth.test.ts
describe('Authentication', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it('should login successfully', async () => {
    await element(by.id('email-input')).typeText('user@example.com')
    await element(by.id('password-input')).typeText('password123')
    await element(by.id('login-button')).tap()
    await expect(element(by.text('Welcome back'))).toBeVisible()
  })
})
\`\`\`

## Deployment

### 1. Build Configuration

\`\`\`bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure project
eas build:configure
\`\`\`

### 2. Build for iOS

\`\`\`bash
# Development build
eas build --platform ios --profile development

# Production build
eas build --platform ios --profile production
\`\`\`

### 3. Build for Android

\`\`\`bash
# Development build
eas build --platform android --profile development

# Production build
eas build --platform android --profile production
\`\`\`

### 4. Submit to App Stores

\`\`\`bash
# iOS App Store
eas submit --platform ios

# Google Play Store
eas submit --platform android
\`\`\`

## Performance Optimization

### 1. Image Optimization

\`\`\`typescript
import { Image } from 'expo-image'

<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  placeholder={blurhash}
  contentFit="cover"
  transition={200}
/>
\`\`\`

### 2. List Optimization

\`\`\`typescript
import { FlashList } from '@shopify/flash-list'

<FlashList
  data={items}
  renderItem={({ item }) => <ItemComponent item={item} />}
  estimatedItemSize={100}
/>
\`\`\`

### 3. Code Splitting

\`\`\`typescript
// Lazy load screens
const SettingsScreen = React.lazy(() => import('./screens/Settings'))
\`\`\`

## Migration Checklist

### Phase 1: Setup (Week 1)
- [ ] Initialize Expo project
- [ ] Install dependencies
- [ ] Configure app.json
- [ ] Setup Supabase client
- [ ] Create theme system

### Phase 2: Core UI (Week 2-3)
- [ ] Migrate Button component
- [ ] Migrate Input component
- [ ] Migrate Card component
- [ ] Create navigation structure
- [ ] Setup tab navigator

### Phase 3: Authentication (Week 4)
- [ ] Migrate login screen
- [ ] Migrate sign-up screen
- [ ] Migrate forgot password
- [ ] Migrate reset password
- [ ] Test auth flows

### Phase 4: Main Features (Week 5-6)
- [ ] Migrate dashboard
- [ ] Migrate onboarding
- [ ] Migrate settings
- [ ] Migrate health metrics
- [ ] Add charts

### Phase 5: Polish (Week 7)
- [ ] Add animations
- [ ] Optimize performance
- [ ] Add error handling
- [ ] Test on devices
- [ ] Fix bugs

### Phase 6: Deployment (Week 8)
- [ ] Create app icons
- [ ] Create splash screens
- [ ] Build for iOS
- [ ] Build for Android
- [ ] Submit to stores

## Resources

### Documentation
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Supabase React Native](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native)

### Libraries
- [Restyle](https://github.com/Shopify/restyle)
- [Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Chart Kit](https://github.com/indiespirit/react-native-chart-kit)
- [FlashList](https://shopify.github.io/flash-list/)

### Tools
- [Expo Snack](https://snack.expo.dev/) - Online playground
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
- [Flipper](https://fbflipper.com/) - Debugging platform

## Support

For questions or issues during migration:
1. Check Expo documentation
2. Search Expo forums
3. Ask in React Native Discord
4. Review this guide's examples

---

**Last Updated**: January 2025
**Version**: 1.0.0
**Maintainer**: Fit by Dyrane Development Team
