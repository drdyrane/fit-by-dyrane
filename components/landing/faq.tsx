"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    q: "Is my data private and secure?",
    a: "Absolutely. We use enterprise-grade end-to-end encryption for all sensitive data. We never sell your information to third parties, and you maintain full ownership of your health data. Your privacy is our top priority.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No credit card required! Start with our free plan immediately and upgrade to Pro whenever you're ready. No hidden fees, no commitments.",
  },
  {
    q: "Can I export my data?",
    a: "Yes! You can export your data anytime in CSV format or connect with popular health platforms like Apple Health, Google Fit, and more through our integrations.",
  },
  {
    q: "How does the AI insights feature work?",
    a: "Our AI analyzes your health patterns, identifies trends, and provides personalized recommendations based on your goals and historical data. The more you track, the smarter the insights become.",
  },
  {
    q: "Is there a mobile app?",
    a: "Yes! Fit by Dyrane works seamlessly on web, iOS, and Android. Your data syncs automatically across all devices in real-time.",
  },
  {
    q: "What happens if I cancel my Pro subscription?",
    a: "You'll automatically revert to the free plan and retain access to all your data. You can re-subscribe anytime without losing any information.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Frequently Asked</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about Fit by Dyrane
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-base text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
