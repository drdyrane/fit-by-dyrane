import React, { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  children?: ReactNode;
}

export default function Section({ id, className = "", title, subtitle, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle || eyebrow) && (
          <div className="mx-auto max-w-3xl text-center mb-6">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-primary bg-primary/5 backdrop-blur-sm border border-primary/10 mb-3">
                {eyebrow}
              </div>
            )}

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
