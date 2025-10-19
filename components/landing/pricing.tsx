"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// Section wrapper removed; content-only component.

export default function Pricing() {
  return (
    <div id="pricing" className="bg-muted/30 relative">
      <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
        <Card className="border-border bg-card hover-lift">
          <CardContent className="flex flex-col gap-6 p-8">
            <div>
              <h3 className="font-bold text-2xl text-foreground mb-2">Free</h3>
              <p className="text-sm text-muted-foreground">Perfect for getting started</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-foreground">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-3">
              {[
                "Track up to 5 metrics",
                "Basic AI insights",
                "30-day history",
                "Mobile & web access",
                "Privacy-first security",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="size-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="w-full mt-4">
              <Link href="/auth/sign-up">Get Started Free</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-primary bg-card hover-lift relative overflow-hidden">
          <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-white">
            Coming Soon
          </div>
          <CardContent className="flex flex-col gap-6 p-8">
            <div>
              <h3 className="font-bold text-2xl text-foreground mb-2">Pro</h3>
              <p className="text-sm text-muted-foreground">For serious wellness tracking</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-foreground">$9</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-3">
              {[
                "Unlimited metrics tracking",
                "Advanced AI insights & predictions",
                "Unlimited history",
                "Priority support",
                "Export data anytime",
                "Custom goals & reminders",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="size-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="w-full mt-4 relative overflow-hidden group" disabled>
              <span>
                <span className="relative z-10">Coming Soon</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
