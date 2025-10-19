"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative w-16 h-8 p-1 rounded-full
        bg-muted transition-colors flex items-center
        border border-border
      "
    >
      {/* Slider */}
      <span
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full shadow-sm
          bg-background
          transition-transform duration-300 ease-in-out
          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
      />

      {/* Sun Icon */}
      <Sun
        className={`
          absolute left-2 w-4 h-4
          text-primary transition-opacity duration-300
          ${isDark ? "opacity-20" : "opacity-100"}
        `}
      />

      {/* Moon Icon */}
      <Moon
        className={`
          absolute right-2 w-4 h-4
          text-foreground transition-opacity duration-300
          ${isDark ? "opacity-100" : "opacity-20"}
        `}
      />
    </Button>
  )
}
