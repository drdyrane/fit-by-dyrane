"use client";

import React from "react";

// Section wrapper removed; this component is now content-only.

interface IntegrationsProps {
  id?: string;
  className?: string;
  full?: boolean;
  center?: boolean;
}

export default function Integrations({ id, className }: IntegrationsProps) {
  const items = ["Apple Health", "Google Fit", "CSV export", "Wearables"];
  return (
    <div id={id ?? "integrations"} className={className ?? "bg-muted/10"}>
      <div className="mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {items.map((it) => (
          <div key={it} className="p-4 rounded-lg bg-card/40">{it}</div>
        ))}
      </div>
    </div>
  );
}
