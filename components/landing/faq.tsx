"use client";

import React from "react";

const faqs = [
  { q: "Is my data private?", a: "Yes — we never sell your data and use end-to-end encryption for sensitive info." },
  { q: "Do I need a credit card?", a: "No — start free with no credit card required." },
  { q: "Can I export my data?", a: "Yes — export CSVs or connect with integrations like Apple Health." },
];

// Section wrapper removed: this component now returns content-only. Page controls layout.

interface FAQProps {
  id?: string;
  className?: string;
  full?: boolean;
  center?: boolean;
}

export default function FAQ({ id, className }: FAQProps) {
  return (
    <div id={id ?? "faq"} className={className ?? "bg-muted/10"}>
      <div className="mx-auto max-w-4xl grid gap-4">
        {faqs.map((f, i) => (
          <details key={i} className="p-4 rounded-lg bg-card">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <div className="mt-2 text-sm text-muted-foreground">{f.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
