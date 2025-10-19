"use client";

import React from "react";
import { motion } from "framer-motion";

import Section from "@/components/landing/section";

interface StatsProps {
  id?: string;
  className?: string;
  full?: boolean;
  center?: boolean;
}

export default function Stats({ id, className, full, center }: StatsProps) {
  const stats = [
    { value: "1M+", label: "Metrics logged" },
    { value: "95%", label: "Retention (30d)" },
    { value: "4.8", label: "Average rating" },
  ];
    return (
      <div id={id ?? "stats"} className={className}>
      <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 200, damping: 22 }} className="bg-card/40 rounded-2xl p-6">
            <div className="text-4xl md:text-5xl font-extrabold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
          </motion.div>
        ))}
      </div>
      </div>
  );
}
