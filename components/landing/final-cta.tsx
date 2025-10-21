"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function FinalCTA() {
  return (
    <div className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]" />

      <div className="relative mx-auto px-4 max-w-7xl">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Start Your Journey Today</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-foreground">Ready to Transform</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Your Wellness?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Join thousands of users who are already tracking their health journey with AI-powered insights
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-14 group relative overflow-hidden">
              <Link href="/auth/sign-up">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 h-14 bg-transparent">
              <Link href="#features">
                <span className="flex items-center gap-2">Learn More</span>
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">No credit card required • Free forever • Cancel anytime</p>
        </motion.div>
      </div>
    </div>
  )
}
