// components/layout/navbar.tsx
"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Activity, Menu, X, HeartPulse, Info, Users, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/shared/theme-switcher"
import { NavbarMobile } from "@/components/shared/navbar-mobile"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 0) return;

      if (currentScrollY > lastScrollY.current) {
        // scrolling down → hide
        setVisible(false);
      } else {
        // scrolling up → show
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Features", href: "#features", icon: <HeartPulse className="h-4 w-4 mr-1 text-primary animate-pulse" /> },
    { label: "How It Works", href: "#how-it-works", icon: <Info className="h-4 w-4 mr-1 text-accent animate-bounce" /> },
    { label: "Testimonials", href: "#testimonials", icon: <Users className="h-4 w-4 mr-1 text-secondary animate-pulse" /> },
    { label: "Pricing", href: "#pricing", icon: <DollarSign className="h-4 w-4 mr-1 text-warning animate-bounce" /> },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full",
        "bg-background/20 backdrop-blur-xs"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Activity className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground tracking-tight">Fit</span>
            <span className="text-[10px] italic text-muted-foreground -mt-1">by Dyrane</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-all group relative px-2 py-1 rounded-md hover:bg-accent/10"
            >
              {item.icon}
              <span>{item.label}</span>
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeSwitcher />
          <Button asChild variant="ghost" size="sm">
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button asChild size="sm" className="relative overflow-hidden group">
            <Link href="/auth/sign-up">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Mobile / Tablet menu */}
        <div className="lg:hidden">
          <NavbarMobile />
        </div>
      </div>
    </header>
  )
}
