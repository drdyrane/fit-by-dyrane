"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const showcaseImages = [
  {
    id: 1,
    title: "Track Your Progress",
    description: "Visualize your wellness journey with beautiful, intuitive charts",
    image: "/person-tracking-fitness-progress-on-phone.jpg",
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
  },
  {
    id: 2,
    title: "AI-Powered Insights",
    description: "Get personalized recommendations based on your health data",
    image: "/ai-health-insights-dashboard.png",
    gradient: "from-green-500/20 via-teal-500/20 to-blue-500/20",
  },
  {
    id: 3,
    title: "Community Support",
    description: "Connect with others on their wellness journey",
    image: "/people-wellness-community-support.jpg",
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
  },
]

export default function ImageryShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length)
  }

  const currentImage = showcaseImages[currentIndex]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Experience Wellness
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Fit by Dyrane transforms your health journey with intelligent tracking and beautiful design
          </p>
        </div>

        {/* Interactive carousel */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main image container */}
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
            {/* Image with gradient overlay */}
            <div className="absolute inset-0">
              <img
                src={currentImage.image || "/placeholder.svg"}
                alt={currentImage.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${currentImage.gradient} mix-blend-overlay transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-60"}`}
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            </div>

            {/* Typography overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
              <div
                className={`transform transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-90"}`}
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{currentImage.title}</h3>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6">{currentImage.description}</p>
                <Button
                  size="lg"
                  className="bg-white text-background hover:bg-white/90 transition-all duration-300 group/btn"
                >
                  <Play className="h-5 w-5 mr-2 transition-transform group-hover/btn:scale-110" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Thumbnail indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {showcaseImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`group/thumb relative overflow-hidden rounded-lg transition-all duration-300 ${
                  index === currentIndex ? "w-24 h-24" : "w-16 h-16 opacity-50 hover:opacity-75"
                }`}
                aria-label={`View ${image.title}`}
              >
                <img src={image.image || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
                <div
                  className={`absolute inset-0 border-2 transition-colors ${
                    index === currentIndex ? "border-primary" : "border-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
