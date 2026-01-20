import { useEffect, useState, useCallback } from 'react';

export type Breakpoint = {
  width: number;
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  smAndUp: boolean;
  smAndDown: boolean;
};

// Simple debounce function to avoid external dependencies
const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | undefined;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export function useBreakpoint(): Breakpoint {
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const handleResize = useCallback(
    debounce(() => {
      setWidth(window.innerWidth);
    }, 150),
    []
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [handleResize]);

  const bp: Breakpoint = {
    width,
    xs: width < 640, // Tailwind's sm breakpoint
    sm: width >= 640 && width < 768,
    md: width >= 768 && width < 1024,
    lg: width >= 1024 && width < 1280,
    xl: width >= 1280,
    smAndUp: width >= 640,
    smAndDown: width < 768,
  };

  return bp;
}
