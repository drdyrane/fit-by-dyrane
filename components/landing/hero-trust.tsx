"use client";

import React from "react";
import { Star, ShieldCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const trustSignals = [
  { icon: <Star className="size-5 text-yellow-400 fill-yellow-400" />, text: "Rated 4.9/5 by 10k+ users" },
  { icon: <ShieldCheck className="size-5 text-green-500" />, text: "Secure & Private Data" },
  { icon: <TrendingUp className="size-5 text-blue-400" />, text: "Used by leading wellness coaches" },
];

export function HeroTrust() {
  return (
    <motion.div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground relative z-10 mt-8" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      {trustSignals.map((signal, index) => (
        <motion.div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 shadow-sm" variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}>
          {signal.icon}
          <span>{signal.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default HeroTrust;
