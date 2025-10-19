"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface InteractiveBackgroundProps {
  children: React.ReactNode
  className?: string
  enableCursorTracking?: boolean
}

export function InteractiveBackground({
  children,
  className = "",
  enableCursorTracking = true,
}: InteractiveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    if (!enableCursorTracking) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      setMousePosition({ x, y })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [enableCursorTracking])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Layer 1: Base ambient gradient drift */}
      <div
        className="absolute inset-0 opacity-60 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            oklch(0.7 0.2 145 / 0.3) 0%, 
            oklch(0.75 0.15 160 / 0.2) 40%, 
            transparent 70%)`,
          animation: "gradientDrift 10s ease-in-out infinite",
        }}
      />

      {/* Layer 2: Cursor-reactive accent glow */}
      {enableCursorTracking && (
        <div
          className="absolute inset-0 opacity-40 pointer-events-none transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, 
              oklch(0.65 0.18 145 / 0.15) 0%, 
              transparent 60%)`,
          }}
        />
      )}

      {/* Layer 3: Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

// Keyframes for gradient drift animation
const style = document.createElement("style")
style.textContent = `
  @keyframes gradientDrift {
    0%, 100% { 
      transform: translate(0, 0) scale(1);
      opacity: 0.6;
    }
    33% { 
      transform: translate(10px, -10px) scale(1.05);
      opacity: 0.7;
    }
    66% { 
      transform: translate(-10px, 10px) scale(0.95);
      opacity: 0.5;
    }
  }
`
if (typeof document !== "undefined") {
  document.head.appendChild(style)
}
