"use client"

import { describe, it, expect, beforeEach, vi } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useTheme } from "@/components/shared/theme-provider"
import type React from "react"
import { ThemeProvider } from "@/components/shared/theme-provider"

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
})

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

describe("useTheme", () => {
  beforeEach(() => {
    localStorageMock.clear()
  })

  it("defaults to system theme", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => <ThemeProvider>{children}</ThemeProvider>
    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe("system")
  })

  it("changes theme", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => <ThemeProvider>{children}</ThemeProvider>
    const { result } = renderHook(() => useTheme(), { wrapper })

    act(() => {
      result.current.setTheme("dark")
    })

    expect(result.current.theme).toBe("dark")
  })
})
