"use client";

import React from "react";
import Link from "next/link";

import Section from "@/components/landing/section";
import HeroTrust from "@/components/landing/hero/hero-trust";

export default function Resources() {
  return (
    <Section id="resources" title="Resources" subtitle="Guides, API docs, and developer resources to help you get the most out of Fit by Dyrane.">
      <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="#" className="p-4 rounded-lg bg-card/40">Developer docs</Link>
        <Link href="#" className="p-4 rounded-lg bg-card/40">Guides & tutorials</Link>
        <Link href="#" className="p-4 rounded-lg bg-card/40">Design system</Link>
      </div>

      <div className="mt-8">
        <HeroTrust />
      </div>
    </Section>
  );
}
