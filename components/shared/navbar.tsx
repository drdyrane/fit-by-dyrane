"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Activity, HeartPulse, Info, Users, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/shared/theme-switcher"
import { NavbarMobile } from "@/components/shared/navbar-mobile"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 0) return

      if (currentScrollY > lastScrollY.current) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const offset = 80 // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }

  const menuItems = [
    { label: "Features", href: "#features", icon: <HeartPulse className="h-4 w-4 mr-1 text-primary" /> },
    { label: "How It Works", href: "#how-it-works", icon: <Info className="h-4 w-4 mr-1 text-accent" /> },
    { label: "Testimonials", href: "#testimonials", icon: <Users className="h-4 w-4 mr-1 text-secondary" /> },
    { label: "Pricing", href: "#pricing", icon: <DollarSign className="h-4 w-4 mr-1 text-warning" /> },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full",
        "bg-background/20 backdrop-blur-md border-b border-border/50",
      )}
    >
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Activity className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <div
              className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground tracking-tight">Fit</span>
            <span className="text-[10px] italic text-muted-foreground -mt-1">by Dyrane</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-all group relative px-2 py-1 rounded-md hover:bg-accent/10"
            >
              {item.icon}
              <span>{item.label}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeSwitcher />
          <Button asChild variant="ghost" size="sm">
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button asChild size="sm" className="relative overflow-hidden group">
            <Link href="/auth/sign-up">
              <span className="relative z-10">Get Started</span>
            </Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <NavbarMobile />
        </div>
      </div>
    </header>
  )
}
