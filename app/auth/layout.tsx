import type React from "react"
import { AbstractBackground } from "@/components/layout/abstract-background"
import { Navbar } from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"

export default function AuthLayout({ children }: { children: React.Node }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <AbstractBackground className="pointer-events-none -z-20" />

      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
