"use client"

import { useState } from "react"
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    id: 1,
    icon: <Sparkles className="h-8 w-8" />,
    title: "AI-Powered Tracking",
    description: "Smart algorithms learn your patterns and provide personalized insights",
    image: "/ai-health-tracking-interface.jpg",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    id: 2,
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Progress Analytics",
    description: "Beautiful visualizations show your wellness journey over time",
    image: "/health-analytics-charts-dashboard.jpg",
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    icon: <Users className="h-8 w-8" />,
    title: "Community Driven",
    description: "Join thousands of users achieving their wellness goals together",
    image: "/wellness-community-people-together.jpg",
    gradient: "from-orange-500 to-pink-500",
  },
]

export default function SplitImagery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Built for Your Success
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to make wellness effortless and enjoyable
          </p>
        </div>

        {/* Split image grid */}
        <div className="grid gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Content side */}
              <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div
                  className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white transition-transform duration-300 ${
                    hoveredId === feature.id ? "scale-110 rotate-3" : ""
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                <Button
                  size="lg"
                  variant="outline"
                  className="group/btn border-2 hover:border-primary transition-all duration-300 bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>

              {/* Image side */}
              <div className={`relative ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                  {/* Image */}
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 mix-blend-overlay transition-opacity duration-500 ${
                      hoveredId === feature.id ? "opacity-40" : ""
                    }`}
                  />
                  {/* Border glow effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${feature.gradient} bg-clip-border transition-opacity duration-500 ${
                      hoveredId === feature.id ? "opacity-50" : "opacity-0"
                    }`}
                    style={{ WebkitMaskComposite: "xor", maskComposite: "exclude" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
