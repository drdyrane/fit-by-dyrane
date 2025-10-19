"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import React from "react";
import { Activity, Brain, Target, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  { icon: Activity, title: "Smart Tracking", description: "Log weight, steps, nutrition, sleep, and mood in seconds with intelligent auto-suggestions", color: "from-primary to-accent" },
  { icon: Brain, title: "AI Insights", description: "Get personalized recommendations and pattern recognition powered by advanced AI", color: "from-accent to-secondary" },
  { icon: Target, title: "Goal Setting", description: "Define targets and track progress with beautiful visualizations and milestone celebrations", color: "from-secondary to-warning" },
  { icon: BarChart3, title: "Analytics", description: "Understand your health trends with comprehensive charts and weekly summaries", color: "from-primary to-secondary" },
  { icon: Shield, title: "Privacy First", description: "Your data stays yours, secured with enterprise-grade encryption and zero tracking", color: "from-accent to-primary" },
  { icon: Zap, title: "Lightning Fast", description: "Optimized performance ensures smooth experience across all devices and platforms", color: "from-warning to-accent" },
];

import Section from "@/components/landing/section";
import HeroCTA from "@/components/landing/hero/hero-cta";

export default function Features() {
  return (
    <Section id="features" title="Everything you need to thrive" subtitle="Powerful features designed to make wellness tracking effortless and insightful">
      <div className="mx-auto max-w-xl flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <ul className="text-sm text-muted-foreground space-y-2 sm:space-y-0 sm:space-x-6">
          <li>Quick logging & minimal friction</li>
          <li>AI-driven, personalized insights</li>
          <li>Privacy-first, secure by design</li>
        </ul>
        <div>
          <HeroCTA />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div key={index} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Card className="border-border bg-card cursor-pointer group relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} p-0.5`}>
                  <div className="flex size-full items-center justify-center rounded-[10px] bg-card">
                    <feature.icon className="size-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-card-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
