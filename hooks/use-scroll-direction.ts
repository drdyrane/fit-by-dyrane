"use client";

import { useState, useEffect } from "react";

export type ScrollDirection = "up" | "down" | "none";

export function useScrollDirection(threshold = 10): ScrollDirection {
    const [scrollDir, setScrollDir] = useState<ScrollDirection>("none");

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;
            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ? "down" : "up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        // Initial call to set state based on current position
        updateScrollDir();

        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    return scrollDir;
}
