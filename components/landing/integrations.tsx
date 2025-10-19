"use client";

import React from "react";

import Section from "@/components/landing/section";

export default function Integrations() {
  const items = ["Apple Health", "Google Fit", "CSV export", "Wearables"];
  return (
    <Section id="integrations" className="bg-muted/10" title="Integrations & Export" subtitle="Seamlessly connect with tools and export your data anytime.">
      <div className="mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {items.map((it) => (
          <div key={it} className="p-4 rounded-lg bg-card/40">{it}</div>
        ))}
      </div>
    </Section>
  );
}
