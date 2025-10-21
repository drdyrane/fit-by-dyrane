// components/landing/hero/hero-cta.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, type Variants } from "framer-motion"

// Framer Motion variants for buttons
const buttonHover = { scale: 1.05, boxShadow: "0px 8px 15px rgba(0,0,0,0.12)" }
const buttonTap = { scale: 0.98 }

// Individual item variant for staggered animation
const ctaItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
}

export function HeroCTA() {
  return (
    <motion.div
      className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-12 relative z-10"
      variants={ctaItemVariants} // Apply item variant to the whole group for a staggered appearance after heading/description
    >
      <motion.div whileHover={buttonHover} whileTap={buttonTap}>
        <Button
          asChild
          size="lg"
          className="text-base relative overflow-hidden group font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <Link href="/auth/sign-up">
            <span className="relative z-10 flex items-center gap-2">
              Get Started Free <span className="hidden sm:inline">(It&apos;s Quick!)</span>
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary/80 via-accent/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
          </Link>
        </Button>
      </motion.div>

      <motion.div whileHover={buttonHover} whileTap={buttonTap}>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="text-base bg-transparent border-2 border-primary/50 text-foreground hover:bg-primary/5 transition-colors duration-200"
        >
          <Link href="#features">
            Learn More <span className="hidden sm:inline">About Our Features</span>
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default HeroCTA // Default export
