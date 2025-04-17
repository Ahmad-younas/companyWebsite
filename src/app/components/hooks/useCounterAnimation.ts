import { useState, useEffect, useRef } from 'react';

export const useCounterAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = countRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0);
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          const stepDuration = duration / steps;

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            setCount((prev) => {
              const nextCount = Math.min(Math.round(increment * currentStep), end);
              return nextCount;
            });

            if (currentStep >= steps) {
              clearInterval(interval);
            }
          }, stepDuration);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [end]);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return { count, countRef };
}; 