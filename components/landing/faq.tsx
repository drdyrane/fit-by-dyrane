"use client";

import React from "react";

const faqs = [
  { q: "Is my data private?", a: "Yes — we never sell your data and use end-to-end encryption for sensitive info." },
  { q: "Do I need a credit card?", a: "No — start free with no credit card required." },
  { q: "Can I export my data?", a: "Yes — export CSVs or connect with integrations like Apple Health." },
];

import Section from "@/components/landing/section";

export default function FAQ() {
  return (
    <Section id="faq" className="bg-muted/10" title="Frequently asked questions" subtitle="Answers to common questions about Fit by Dyrane.">
      <div className="mx-auto max-w-4xl grid gap-4">
        {faqs.map((f, i) => (
          <details key={i} className="p-4 rounded-lg bg-card">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <div className="mt-2 text-sm text-muted-foreground">{f.a}</div>
          </details>
        ))}
      </div>
    </Section>
  );
}
