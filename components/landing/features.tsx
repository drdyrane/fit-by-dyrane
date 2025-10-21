"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Activity, Brain, Target, BarChart3, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Smart Tracking",
    description: "Log weight, steps, nutrition, sleep, and mood in seconds with intelligent auto-suggestions",
    color: "from-blue-500 via-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI Insights",
    description: "Get personalized recommendations and pattern recognition powered by advanced AI",
    color: "from-purple-500 via-pink-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Define targets and track progress with beautiful visualizations and milestone celebrations",
    color: "from-green-500 via-teal-500 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Understand your health trends with comprehensive charts and weekly summaries",
    color: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays yours, secured with enterprise-grade encryption and zero tracking",
    color: "from-teal-500 via-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures smooth experience across all devices and platforms",
    color: "from-yellow-500 via-orange-500 to-red-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function Features() {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            <span className="text-foreground">Built for Your Success</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to track, analyze, and optimize your wellness journey with cutting-edge AI technology
          </p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden h-full">
                {/* Animated gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Glow effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl" />

                <CardContent className="relative flex flex-col items-start gap-4 p-6 h-full">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md`}
                    />
                    <div
                      className={`relative flex size-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} p-0.5 transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="flex size-full items-center justify-center rounded-[11px] bg-card">
                        <feature.icon className="size-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
