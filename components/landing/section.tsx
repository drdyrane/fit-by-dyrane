import React, { ReactNode } from "react";
import AnimatedBadge from "@/components/landing/animated-badge";

interface SectionProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  full?: boolean; // make this section min-h-screen
  center?: boolean; // center content vertically
  children?: ReactNode;
}

export default function Section({ id, className = "", title, subtitle, eyebrow, full = false, center = false, children }: SectionProps) {
  const baseClass = `${full ? "min-h-screen py-20 md:py-28" : "py-24 md:py-32"} ${className}`;
  const innerClass = `${center ? "flex items-center justify-center" : ""}`;

  return (
    <section id={id} className={baseClass}>
      <div className={`container mx-auto px-4 ${innerClass}`}>
        {(title || subtitle || eyebrow) && (
          <div className="mx-auto max-w-3xl text-center mb-6">
            {eyebrow && <AnimatedBadge>{eyebrow}</AnimatedBadge>}

            {title && (
              <div className="inline-block px-4 py-2 rounded-2xl bg-card/60 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-foreground">{title}</h3>
              </div>
            )}

            {subtitle && <p className="text-muted-foreground mt-3">{subtitle}</p>}
          </div>
        )}

        <div>{children}</div>
      </div>
    </section>
  );
}
