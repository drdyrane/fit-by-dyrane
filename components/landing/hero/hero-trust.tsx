// components/landing/hero-trust.tsx
"use client";

import React from "react";
import {
    Star,
    ShieldCheck,
    TrendingUp,
    CheckCircle2,
    Dumbbell,
    Sparkles,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

// Six trust signals — visual, compact, brand-consistent
const allTrustSignals = [
    {
        icon: <Star className="size-5 text-primary" />,
        text: "Rated 4.9/5 by 10k+ users",
    },
    // {
    //     icon: <ShieldCheck className="size-5 text-green-500 dark:text-green-400" />,
    //     text: "Secure & Private Data",
    // },
    {
        icon: <TrendingUp className="size-5 text-blue-500 dark:text-blue-400" />,
        text: "AI-Driven Progress",
    },
    {
        icon: <Dumbbell className="size-5 text-primary" />,
        text: "Personalized Workouts",
    },
    {
        icon: <CheckCircle2 className="size-5 text-green-500 dark:text-green-400" />,
        text: "Free Forever Plan",
    },
    // {
    //     icon: <Sparkles className="size-5 text-yellow-500 dark:text-yellow-400" />,
    //     text: "Trusted by Coaches Worldwide",
    // },
];

// Motion variants
const trustItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const trustContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

export function HeroTrust() {
    return (
        <motion.div
            className="
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
        gap-3 sm:gap-5 mt-10 text-xs sm:text-sm text-muted-foreground
        relative z-10 max-w-5xl mx-auto px-4
      "
            variants={trustContainerVariants}
            initial="hidden"
            animate="visible"
        >
            {allTrustSignals.map((signal, index) => (
                <motion.div
                    key={index}
                    variants={trustItemVariants}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "hsl(var(--muted) / 0.3)",
                        transition: { duration: 0.25 },
                    }}
                    className="
            flex flex-col sm:flex-row items-center justify-center
            gap-1.5 sm:gap-2 p-3 rounded-xl
            bg-background/60 backdrop-blur-md
            border border-border/40 shadow-sm
            hover:shadow-md transition-all duration-300
            text-center sm:text-left
          "
                >
                    <div className="flex-shrink-0">{signal.icon}</div>
                    <span className="leading-tight font-medium">{signal.text}</span>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default HeroTrust;
