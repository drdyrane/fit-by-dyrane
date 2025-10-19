"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// Section wrapper removed; content-only CTA component.
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <div className="relative overflow-hidden">
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Button asChild size="lg" className="text-base relative overflow-hidden group">
            <Link href="/auth/sign-up">
              <span className="relative z-10 flex items-center gap-2">
                Create Your Free Account
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
