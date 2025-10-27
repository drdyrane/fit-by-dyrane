"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, Linkedin, Activity, Apple } from "lucide-react" // Assuming GooglePlay icon exists or using a generic one
import { pacifico } from "@/app/layout"

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "How it Works", href: "#how-it-works" }, // Added from your sections
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" }, // Changed to About Us for clarity
      { name: "Blog", href: "#blog" }, // Assuming a blog section/page
      { name: "Careers", href: "#careers" }, // Assuming a careers section/page
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", href: "#faq" },
      { name: "Contact Us", href: "#contact" }, // Changed to Contact Us
      { name: "Privacy Policy", href: "#privacy" }, // Assuming a privacy policy page
      { name: "Terms of Service", href: "#terms" }, // Common addition
    ],
  },
  {
    title: "Resources", // Added a Resources group based on your sections
    links: [
      { name: "Integrations", href: "#integrations" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Stats", href: "#stats" },
    ],
  },
]

export default function Footer() {
  const colorPalette = [
    "#6366F1", // Primary - Blue-Purple
    "#8B5CF6", // Secondary - Soft Purple
    "#EC4899", // Accent - Pink-Purple
    "#F59E0B", // Warning - Orange
    "#10B981", // Success - Green
  ]

  return (
    <footer className="relative border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto px-4 py-16 max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8 text-sm text-muted-foreground">
        {/* Logo + Description */}
        <motion.div
          className="col-span-2 lg:col-span-2 flex flex-col items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-3 group mb-4">
            <Activity className="size-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Fit</span>
              <span className="text-xs italic text-muted-foreground -mt-0.5">by Dyrane</span>
            </div>
          </Link>

          <p className="mt-2 text-muted-foreground/80 max-w-sm leading-relaxed">
            AI-powered wellness tracking for a healthier, smarter lifestyle. Track progress, set goals, and thrive every
            day.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Link
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <Apple className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-muted-foreground">Download on</span>
                <span className="text-xs font-semibold text-foreground">App Store</span>
              </div>
            </Link>

            <Link
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-muted-foreground">Get it on</span>
                <span className="text-xs font-semibold text-foreground">Google Play</span>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Link Groups */}
        {footerLinks.map((group, i) => (
          <motion.div
            key={group.title} // Use title as key for stability
            className="sm:col-span-1 md:col-span-1 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4 className="font-semibold mb-5 text-foreground text-base">{group.title}</h4>
            <ul className="grid gap-3">
              {" "}
              {/* Changed to a simple grid for better vertical stacking */}
              {group.links.map((link) => (
                <li key={link.name}>
                  {" "}
                  {/* Use link name as key */}
                  <Link href={link.href} className="hover:text-primary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-border/40 mt-10 md:mt-16" />

      {/* Bottom Bar */}
      <div className="mx-auto px-4 py-8 max-w-7xl flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground/80 gap-6">
        <p className="text-center md:text-left order-2 md:order-1">
          &copy; {new Date().getFullYear()} Fit by Dyrane. All rights reserved.
        </p>

        <div className="flex gap-6 order-1 md:order-2">
          <motion.a
            whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
            href="#"
            aria-label="Follow us on Twitter"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
            href="#"
            aria-label="Connect with us on LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
            href="#"
            aria-label="View our GitHub"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      {/* Colors by Luz credit section */}
      <div className="border-t border-border/40">
        <div className="mx-auto px-4 py-6 max-w-7xl">
          <motion.div
            className="flex flex-col lg:flex-row items-center lg:justify-end gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-1.5">
              {colorPalette.map((color, i) => (
                <motion.span
                  key={i}
                  className="w-6 h-6 rounded-md shadow-sm"
                  style={{ backgroundColor: color }}
                  aria-label={`Color ${i + 1}`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              ))}
            </div>
            <span className={`${pacifico.className} text-sm text-muted-foreground/80`}>Colors by Luz</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
