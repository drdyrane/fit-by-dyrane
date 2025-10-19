// components/landing/hero-trust.tsx
"use client";

import React from "react";
import { Star, ShieldCheck, TrendingUp, CheckCircle2 } from "lucide-react"; // Added CheckCircle2
import { motion, Variants } from "framer-motion";

// Combined trust signals for brevity and consistency
const allTrustSignals = [
    { icon: <Star className="size-5 text-yellow-400 fill-yellow-400" />, text: "Rated 4.9/5 by 10k+ users" },
    { icon: <ShieldCheck className="size-5 text-green-500" />, text: "Secure & Private Data" },
    { icon: <TrendingUp className="size-5 text-blue-400" />, text: "Used by leading wellness coaches" },
    { icon: <CheckCircle2 className="size-4 text-green-500" />, text: "No credit card required" }, // Integrated
    { icon: <CheckCircle2 className="size-4 text-green-500" />, text: "Free forever plan" }, // Integrated
];

// Variants for each individual trust item
const trustItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
};

// Container variant for staggering
const trustContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.45 // Delay this group slightly after CTA
        }
    }
}

export function HeroTrust() {
    return (
        <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground relative z-10 mt-8"
            variants={trustContainerVariants} // Apply container variant here
            initial="hidden"
            animate="visible"
        >
            {allTrustSignals.map((signal, index) => (
                <motion.div
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 shadow-sm"
                    variants={trustItemVariants} // Apply item variant here
                >
                    {signal.icon}
                    <span>{signal.text}</span>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default HeroTrust; // Default export