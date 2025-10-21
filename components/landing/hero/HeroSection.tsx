// components/landing/hero/HeroSection.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"; // Keep for consistency if needed elsewhere
import { motion, Variants } from "framer-motion";
import React, { useMemo } from "react"; // Added useMemo for background classes
import { AbstractBackground } from "@/components/layout/abstract-background";

// Re-import the sub-components for the HeroSection itself
import AnimatedBadge from "@/components/landing/animated-badge";
import HeroCTA from "@/components/landing/hero/hero-cta";
import HeroTrust from "@/components/landing/hero/hero-trust";

// --- Framer Motion Variants (Centralized for better control in this file) ---
// These variants are for the main text elements within HeroSection
const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2, // Delay for initial hero animation
        },
    },
};

// No need for badgePop here as it's defined within AnimatedBadge component.
// Similarly, buttonHover/buttonTap are within HeroCTA and item variants in HeroTrust.


export default function HeroSection() {;

    return (
        <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-24 md:py-32 lg:py-40">

            <div className="container relative mx-auto px-4">
                <motion.div
                    className="mx-auto max-w-4xl text-center relative z-10"
                    variants={staggerContainer} // Apply to the container
                    initial="hidden"
                    animate="visible"
                >
                    {/* UI/UX IMPROVEMENT: Animated Badge for attention & modern feel */}
                    {/* AnimatedBadge now handles its own animation */}
                    <AnimatedBadge>
                        AI-Powered Wellness Tracking
                    </AnimatedBadge>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl mb-6"
                        variants={fadeIn} // Apply fade-in
                    >
                        Your Health Journey,
                        <br />
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            Intelligently Simplified
                        </span>
                    </motion.h1>

                    {/* Subheading/Description */}
                    <motion.p
                        className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed mb-10 relative z-10"
                        variants={fadeIn} // Apply fade-in
                    >
                        Track metrics, set goals, and receive personalized AI insights—all in one beautiful, privacy-first
                        platform designed for your wellness success.
                    </motion.p>

                    {/* Hero CTA Component - handles its own animation and button interactions */}
                    <HeroCTA />

                    {/* Hero Trust Component - handles its own animation and trust signals */}
                    <HeroTrust />

                </motion.div>
            </div>
        </section>
    );
}
