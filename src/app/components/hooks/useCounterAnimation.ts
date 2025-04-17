import { useState, useEffect, useRef } from 'react';

export const useCounterAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

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
            setCount(() => {
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

  return { count, countRef };
}; 