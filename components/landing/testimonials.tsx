"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
// Section wrapper removed; component returns content-only markup.

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Coach",
      content:
        "Fit by Dyrane has completely transformed how I track my wellness. The AI insights are incredibly accurate and helpful.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "Finally, a wellness app that respects my privacy and actually helps me build better habits. The interface is beautiful!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Yoga Instructor",
      content:
        "The goal tracking and progress visualization keep me motivated every day. Best wellness app I've ever used.",
      rating: 5,
    },
  ];

  return (
    <div id="testimonials">
      <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-border bg-card hover-lift">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-warning text-warning" />
                ))}
              </div>
              <Quote className="size-8 text-muted-foreground/30" />
              <p className="text-sm text-muted-foreground leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
