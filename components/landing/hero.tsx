// components/hero/HeroSection.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { AbstractBackground } from "@/components/layout/abstract-background";

// --- Framer Motion Variants (Centralized for better control) ---
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2, // Delay for initial hero animation
        },
    },
};

const badgePop = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
};


import HeroCTA from "@/components/landing/hero-cta";
import HeroTrust from "@/components/landing/hero-trust";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-24 md:py-32 lg:py-40">

            <div className="container relative mx-auto px-4">
                <motion.div
                    className="mx-auto max-w-4xl text-center relative z-10"
                    variants={staggerContainer as any}
                    initial="hidden"
                    animate="visible"
                >
                    {/* UI/UX IMPROVEMENT: Animated Badge for attention & modern feel */}
                    <motion.div
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8 shadow-sm relative z-10 hover:bg-primary/10 transition-colors"
                        variants={badgePop as any}
                    >
                        <Sparkles className="size-4" aria-hidden="true" />
                        AI-Powered Wellness Tracking
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl mb-6"
                        variants={fadeIn as any}
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
                        variants={fadeIn as any}
                    >
                        Track metrics, set goals, and receive personalized AI insights—all in one beautiful, privacy-first
                        platform designed for your wellness success.
                    </motion.p>

                    <HeroCTA />
                    <HeroTrust />

                    {/* trust signals handled by HeroTrust (no duplicate badges) */}
                </motion.div>
            </div>
        </section>
    );
}