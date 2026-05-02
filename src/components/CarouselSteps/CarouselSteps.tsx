'use client';

import { useEffect, useRef, useState } from 'react';

const MAX_STEPS = 6;

type CarouselStepsProps = {
  count?: number;
  duration?: number;
  activeIndex?: number;
  onStepChange?: (index: number) => void;
};

export default function CarouselSteps({
  count = MAX_STEPS,
  duration = 3000,
  activeIndex,
  onStepChange,
}: CarouselStepsProps) {
  const safeCount = Math.max(1, Math.min(MAX_STEPS, count));
  const isControlled = activeIndex !== undefined;

  const [internalIndex, setInternalIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const active = isControlled ? Math.min(activeIndex, safeCount - 1) : internalIndex;

  const onStepChangeRef = useRef(onStepChange);
  useEffect(() => {
    onStepChangeRef.current = onStepChange;
  });

  useEffect(() => {
    if (isControlled) return;
    const id = window.setTimeout(() => {
      const next = (active + 1) % safeCount;
      setInternalIndex(next);
      setCycle((c) => c + 1);
      onStepChangeRef.current?.(next);
    }, duration);
    return () => window.clearTimeout(id);
  }, [active, cycle, duration, isControlled, safeCount]);

  return (
    <div className="carousel_steps" role="tablist" aria-label="Carousel progress">
      {Array.from({ length: safeCount }, (_, i) => {
        const isActive = i === active;
        return (
          <div
            key={i}
            className={`carousel_step${isActive ? ' active' : ''}`}
            role="tab"
            aria-selected={isActive}
          >
            <div className="track" />
            {isActive && (
              <div
                key={`fill-${cycle}`}
                className="fill"
                style={{ animationDuration: `${duration}ms` }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
