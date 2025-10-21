"use client"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Pricing() {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_70%)]" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Choose Your</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Wellness Plan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Start free and upgrade when you're ready for advanced features
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="group relative border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="relative flex flex-col gap-8 p-8 lg:p-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-primary" />
                    <h3 className="font-bold text-3xl text-foreground">Free</h3>
                  </div>
                  <p className="text-base text-muted-foreground">Perfect for getting started</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-foreground">$0</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>

                <ul className="space-y-4 flex-1">
                  {[
                    "Track up to 5 metrics",
                    "Basic AI insights",
                    "30-day history",
                    "Mobile & web access",
                    "Privacy-first security",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-base"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle2 className="size-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button asChild size="lg" className="w-full text-base group/btn relative overflow-hidden">
                  <Link href="/auth/sign-up">
                    <span className="relative z-10">Get Started Free</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="group relative border-primary/50 bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300 overflow-hidden h-full">
              {/* Popular badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  Coming Soon
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

              <CardContent className="relative flex flex-col gap-8 p-8 lg:p-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="font-bold text-3xl text-foreground">Pro</h3>
                  </div>
                  <p className="text-base text-muted-foreground">For serious wellness tracking</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                    $9
                  </span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>

                <ul className="space-y-4 flex-1">
                  {[
                    "Unlimited metrics tracking",
                    "Advanced AI insights & predictions",
                    "Unlimited history",
                    "Priority support",
                    "Export data anytime",
                    "Custom goals & reminders",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-base"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle2 className="size-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button size="lg" className="w-full text-base relative overflow-hidden group/btn" disabled>
                  <span className="relative z-10">Coming Soon</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-50" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
