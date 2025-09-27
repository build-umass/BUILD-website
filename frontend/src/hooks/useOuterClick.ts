import { useEffect, useRef } from 'react';

export function useOuterClick<T extends HTMLElement>(
  handler: (ev: Event) => void
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function listener(ev: Event) {
      const el = ref.current;
      if (!el) return;
      if (!el.contains(ev.target as Node)) handler(ev);
    }
    if (typeof window !== 'undefined') {
      document.addEventListener('pointerdown', listener);
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('pointerdown', listener);
      }
    };
  }, [handler]);

  return ref;
}
