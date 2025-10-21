"use client"
import { motion } from "framer-motion"
import { TrendingUp, Users, Star, Zap } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: "1M+",
      label: "Metrics Logged",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Users,
      value: "95%",
      label: "User Retention",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      value: "4.9",
      label: "Average Rating",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      value: "<1s",
      label: "Response Time",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="relative mx-auto px-4 max-w-7xl">
        <div className="mx-auto max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
              }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 overflow-hidden">
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-4 flex justify-center">
                  <div
                    className={`flex size-16 items-center justify-center rounded-full bg-gradient-to-br ${stat.color} p-0.5 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="flex size-full items-center justify-center rounded-full bg-card">
                      <stat.icon className="size-8 text-primary" />
                    </div>
                  </div>
                </div>

                <div
                  className={`text-5xl md:text-6xl font-extrabold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
