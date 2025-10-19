"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect whether the window has been scrolled past a threshold.
 * @param threshold number of pixels to consider as 'scrolled' (default: 10)
 * @returns boolean - true if scrolled past threshold
 */
export function useScrollPosition(threshold: number = 10) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Initial check in case the page loads already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]); // Re-run effect if threshold changes

  return isScrolled;
}
