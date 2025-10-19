"use client";

import React, { useRef, useEffect, useState } from "react";
import { useMousePositionValues } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";

interface SectionAbstractOverlayProps {
  className?: string;
  opacity?: number;
}

export default function SectionAbstractOverlay({ className, opacity = 0.7 }: SectionAbstractOverlayProps) {
  const { x: mouseX, y: mouseY } = useMousePositionValues();
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ left: "50%", top: "50%" });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = mouseX - rect.left;
    const relY = mouseY - rect.top;
    const px = Math.min(Math.max((relX / rect.width) * 100, 0), 100);
    const py = Math.min(Math.max((relY / rect.height) * 100, 0), 100);
    setPos({ left: `${px}%`, top: `${py}%` });
  }, [mouseX, mouseY]);

  // Use CSS radial gradient as an overlay that blends with section backgrounds.
  const style: React.CSSProperties = {
    background: `radial-gradient(circle at ${pos.left} ${pos.top}, rgba(106,91,216,${opacity}) 0%, rgba(106,91,216,${opacity * 0.05}) 40%, rgba(106,91,216,0) 70%)`,
    mixBlendMode: "overlay",
    pointerEvents: "none",
  };

  return (
    <div ref={ref} className={cn("absolute inset-0 pointer-events-none z-0", className)} style={style} />
  );
}
