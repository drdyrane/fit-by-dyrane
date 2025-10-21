// components/landing/animated-badge.tsx
"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

interface AnimatedBadgeProps {
    children: ReactNode;
    icon?: ReactNode; // Optional icon, defaults to Sparkles
    className?: string;
}

// Ensure variants are correctly typed for Framer Motion
const badgeVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 28, delay: 0.1 } },
};

export default function AnimatedBadge({ children, icon, className = "" }: AnimatedBadgeProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={badgeVariants}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-primary bg-primary/6 backdrop-blur-sm border border-primary/10 mb-6 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-primary/10 cursor-pointer ${className}`}
        >
            <span className="inline-flex items-center" aria-hidden="true">
                {icon ?? <Sparkles className="size-4" />}
            </span>
            <span>{children}</span>
        </motion.div>
    );
}
