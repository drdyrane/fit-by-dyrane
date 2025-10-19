"use client";

import React from "react";
// Section wrapper removed; content-only component.

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Create Account",
      description: "Sign up in seconds with email. No credit card required.",
    },
    {
      step: "02",
      title: "Set Your Goals",
      description: "Choose wellness goals and customize your tracking preferences.",
    },
    {
      step: "03",
      title: "Start Tracking",
      description: "Log your first metrics and receive personalized AI insights.",
    },
  ];

  return (
    <div id="how-it-works" className="bg-muted/30 relative">
      <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-3">
        {steps.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-white mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
            {index < 2 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
