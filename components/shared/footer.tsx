// components/shared/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Activity, Apple, } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Download", href: "#download" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#help" },
      { name: "Contact", href: "#contact" },
      { name: "Privacy Policy", href: "#privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-sm text-muted-foreground">
        
        {/* Logo + Description */}
        <motion.div
          className="col-span-1 sm:col-span-2 md:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <Activity className="size-7 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground">Fit</span>
              <span className="text-xs italic text-muted-foreground -mt-0.5">
                by Dyrane
              </span>
            </div>
          </Link>

          <p className="mt-3 text-muted-foreground/80 max-w-sm leading-relaxed">
            AI-powered wellness tracking for a healthier, smarter lifestyle.  
            Track progress, set goals, and thrive every day.
          </p>

          {/* App / Partner Icons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* Apple */}
            <Link href="#" aria-label="Apple App Store">
              <Apple className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            {/* Google */}
            <Link href="#" aria-label="Google Play Store">
              <Apple  className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            {/* Fallback Logos */}
            <Image
              src="/placeholder-logo.png"
              alt="Partner"
              width={60}
              height={24}
              className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </motion.div>

        {/* Link Groups */}
        {footerLinks.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-foreground">{group.title}</h4>
            <ul className="grid grid-cols-3 sm:grid-cols-1 gap-2">
              {group.links.map((link, j) => (
                <li key={j}>
                  <Link
                    href={link.href}
                    className="hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-border/40 mt-10" />

      {/* Bottom Bar */}
      <div
        className="
        container mx-auto px-6 py-6 
        flex flex-col sm:flex-row items-center justify-between 
        text-xs text-muted-foreground/80 gap-3
      "
      >
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Fit by Dyrane. All rights reserved.
        </p>

        <div className="flex gap-5">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            aria-label="Twitter"
            className="hover:text-foreground transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            aria-label="GitHub"
            className="hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
