// CountUpOnScroll.tsx
"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";

// Define props for the component (duration prop is no longer needed)
interface CountUpProps {
  endCount: number;
}

const BASE_SPEED_MS = 2; // Milliseconds to spend per unit of count (e.g., 2ms per count)
const MIN_DURATION_MS = 1000; // Minimum time for any count animation (e.g., 1 second)
const MAX_DURATION_MS = 4000; // Maximum time for any count animation (e.g., 4 seconds)

const CountUpOnScroll: React.FC<CountUpProps> = ({ endCount }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const [currentCount, setCurrentCount] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);

  // --- Calculate Dynamic Duration ---
  const dynamicDuration = useMemo(() => {
    // 1. Calculate base duration: (Count * Speed per unit)
    let calculatedDuration = endCount * BASE_SPEED_MS;

    // 2. Clamp the duration between Min and Max limits for better UX
    return Math.max(
      MIN_DURATION_MS,
      Math.min(calculatedDuration, MAX_DURATION_MS),
    );
  }, [endCount]);

  useEffect(() => {
    if (!countRef.current) return;

    // --- Intersection Observer Setup ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCounted) {
            setHasCounted(true);
            // Pass the calculated dynamic duration to the animation function
            startCountAnimation(dynamicDuration);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(countRef.current);

    // Cleanup function
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasCounted, dynamicDuration]);

  const startCountAnimation = (duration: number) => {
    const startTime = performance.now();
    const step = (timestamp: number) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const value = Math.round(progress * endCount);

      setCurrentCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  // Renders the number inside a span
  return <span ref={countRef}>{currentCount.toLocaleString()}</span>;
};

export default CountUpOnScroll;
