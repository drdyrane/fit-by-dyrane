"use client";

import React from "react";
import Link from "next/link";

// Section wrapper removed; content-only component.
import HeroCTA from "@/components/landing/hero/hero-cta";

interface ContactProps {
  id?: string;
  className?: string;
  full?: boolean;
  center?: boolean;
}

export default function Contact({ id, className }: ContactProps) {
  return (
    <div id={id ?? "contact"} className={className ?? "bg-muted/10"}>
      <div className="mx-auto max-w-4xl text-center">
        <HeroCTA />
      </div>
    </div>
  );
}
