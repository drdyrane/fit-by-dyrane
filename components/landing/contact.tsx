"use client";

import React from "react";
import Link from "next/link";

import Section from "@/components/landing/section";

export default function Contact() {
  return (
    <Section id="contact" className="bg-muted/10" title="Contact & Support" subtitle="Questions? We're here to help — reach out or visit our support center.">
      <div className="mx-auto max-w-4xl text-center">
        <Link href="/contact" className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white">Contact support</Link>
      </div>
    </Section>
  );
}
