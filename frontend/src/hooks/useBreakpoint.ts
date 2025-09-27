import { useEffect, useState } from 'react';

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

export function useBreakpoint(): Breakpoint {
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth);
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', onResize);
      }
    };
  }, []);

  const bp: Breakpoint = {
    width,
    xs: width < 576,
    sm: width >= 576 && width < 768,
    md: width >= 768 && width < 992,
    lg: width >= 992 && width < 1200,
    xl: width >= 1200,
    smAndUp: width >= 576,
    smAndDown: width < 768,
  };

  return bp;
}
