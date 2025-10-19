"use client";

import React from "react";
import Link from "next/link";

import Section from "@/components/landing/section";
import HeroCTA from "@/components/landing/hero/hero-cta";

export default function Contact() {
  return (
    <Section id="contact" className="bg-muted/10" title="Contact & Support" subtitle="Questions? We're here to help — reach out or visit our support center.">
      <div className="mx-auto max-w-4xl text-center">
        <HeroCTA />
      </div>
    </Section>
  );
}
