import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  triggerOnce?: boolean;
  threshold?: number;
}

export function useInView(options: UseInViewOptions = {}) {
  const { triggerOnce = false, threshold = 0 } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (inView && triggerOnce) {
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnce, threshold]);

  return [ref, isInView] as const;
}
