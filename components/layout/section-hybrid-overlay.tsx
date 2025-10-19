"use client";

import React, { useRef, useEffect } from "react";
import { useMousePositionValues } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";
import { useMotionValue, useSpring } from "framer-motion";

interface SectionHybridOverlayProps {
  className?: string;
  beaconColor?: string;
  opacity?: number;
  blur?: number; // px
  stiffness?: number;
  damping?: number;
}

export default function SectionHybridOverlay({
  className,
  beaconColor = "106,91,216",
  opacity = 0.6,
  blur = 12,
  stiffness = 120,
  damping = 20,
}: SectionHybridOverlayProps) {
  const { x: mouseX, y: mouseY } = useMousePositionValues();
  const ref = useRef<HTMLDivElement | null>(null);

  // Track normalized percent positions (0-100) as motion values and spring them for smooth movement
  const mvX = useMotionValue(50);
  const mvY = useMotionValue(50);
  const springX = useSpring(mvX, { stiffness, damping });
  const springY = useSpring(mvY, { stiffness, damping });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = mouseX - rect.left;
    const relY = mouseY - rect.top;
    const px = rect.width > 0 ? Math.min(Math.max((relX / rect.width) * 100, 0), 100) : 50;
    const py = rect.height > 0 ? Math.min(Math.max((relY / rect.height) * 100, 0), 100) : 50;
    mvX.set(px);
    mvY.set(py);
  }, [mouseX, mouseY, mvX, mvY]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const unsubX = springX.on("change", (v: number) => el.style.setProperty("--mx", `${v}%`));
    const unsubY = springY.on("change", (v: number) => el.style.setProperty("--my", `${v}%`));
    // Initialize variables
    el.style.setProperty("--mx", `${mvX.get()}%`);
    el.style.setProperty("--my", `${mvY.get()}%`);
    return () => {
      unsubX();
      unsubY();
    };
  }, [springX, springY, mvX, mvY]);

  const safeOpacity = Math.min(Math.max(opacity, 0), 1);

  return (
    <div ref={ref} className={cn("absolute inset-0 pointer-events-none", className)} style={{ position: "absolute" }}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          opacity: safeOpacity,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          // gradient uses CSS variables set by the spring subscriptions
          background: `radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(${beaconColor},${Math.max(0.18, safeOpacity)}) 0px, rgba(${beaconColor},${Math.max(0.04, safeOpacity * 0.06)}) 30%, rgba(${beaconColor},0) 60%)`,
          mixBlendMode: "screen",
          opacity: safeOpacity,
          filter: `blur(${Math.max(2, blur / 4)}px)`,
        }}
      />
    </div>
  );
}
