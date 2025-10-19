"use client";

import React from "react";

import Section from "@/components/landing/section";

export default function Stats() {
  const stats = [
    { value: "1M+", label: "Metrics logged" },
    { value: "95%", label: "Retention (30d)" },
    { value: "4.8", label: "Average rating" },
  ];
  return (
    <Section id="stats" eyebrow="Built for results" title="Numbers that show the impact">
      <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i} className="bg-card/40 rounded-2xl p-6">
            <div className="text-4xl md:text-5xl font-extrabold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
