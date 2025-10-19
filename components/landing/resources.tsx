"use client";

import React from "react";
import Link from "next/link";

// Section wrapper removed; content-only component.

interface ResourcesProps {
  id?: string;
  className?: string;
  full?: boolean;
  center?: boolean;
}
import HeroTrust from "@/components/landing/hero/hero-trust";

export default function Resources({ id, className }: ResourcesProps) {
  return (
    <div id={id ?? "resources"} className={className}>
      <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="#" className="p-4 rounded-lg bg-card/40">Developer docs</Link>
        <Link href="#" className="p-4 rounded-lg bg-card/40">Guides & tutorials</Link>
        <Link href="#" className="p-4 rounded-lg bg-card/40">Design system</Link>
      </div>

      <div className="mt-8">
        <HeroTrust />
      </div>
    </div>
  );
}
