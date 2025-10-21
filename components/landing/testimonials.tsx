"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Coach",
      content:
        "Fit by Dyrane has completely transformed how I track my wellness. The AI insights are incredibly accurate and helpful. I recommend it to all my clients!",
      rating: 5,
      avatar: "SJ",
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "Finally, a wellness app that respects my privacy and actually helps me build better habits. The interface is beautiful and the insights are game-changing!",
      rating: 5,
      avatar: "MC",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Emily Rodriguez",
      role: "Yoga Instructor",
      content:
        "The goal tracking and progress visualization keep me motivated every day. Best wellness app I've ever used. The AI recommendations are spot-on!",
      rating: 5,
      avatar: "ER",
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="relative mx-auto px-4 max-w-7xl">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Loved by</span>
            <br />
            <span className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">
              Wellness Enthusiasts
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of users who have transformed their health journey with Fit by Dyrane
          </p>
        </motion.div>

        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden h-full">
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardContent className="relative flex flex-col gap-6 p-8 h-full">
                  {/* Rating stars */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <Quote className="size-10 text-primary/20" />

                  {/* Testimonial content */}
                  <p className="text-base text-muted-foreground leading-relaxed flex-1">"{testimonial.content}"</p>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div
                      className={`relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-lg font-bold text-white shadow-lg`}
                    >
                      {testimonial.avatar}
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-50 blur-lg`} />
                    </div>
                    <div>
                      <p className="font-semibold text-base text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
