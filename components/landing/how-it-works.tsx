"use client"
import { motion } from "framer-motion"
import { UserPlus, Target, TrendingUp, Sparkles } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Create Account",
      description: "Sign up in seconds with email. No credit card required, start tracking immediately.",
      color: "from-blue-500 to-purple-500",
    },
    {
      step: "02",
      icon: Target,
      title: "Set Your Goals",
      description: "Choose wellness goals and customize your tracking preferences with AI guidance.",
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      icon: TrendingUp,
      title: "Start Tracking",
      description: "Log your first metrics and receive personalized AI insights within minutes.",
      color: "from-pink-500 to-orange-500",
    },
  ]

  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto px-4 max-w-7xl">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Get Started in</span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Three Easy Steps
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Begin your wellness journey in minutes with our streamlined onboarding process
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-20" />

          <div className="grid gap-8 md:grid-cols-3 relative">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative flex flex-col items-center text-center">
                    {/* Step number with gradient */}
                    <div
                      className={`relative mb-6 flex size-20 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-3xl font-bold text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.step}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50 blur-xl`} />
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <item.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <h3 className="font-semibold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Arrow connector for desktop */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-10">
                    <svg className="w-8 h-8 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
