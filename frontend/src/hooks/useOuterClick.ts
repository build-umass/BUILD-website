import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook that detects clicks outside of a referenced element
 * @param handler - Function to call when a click occurs outside the element
 * @returns Ref to attach to the element you want to detect outside clicks for
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const innerRef = useOuterClick((event) => {
 *     console.log('Clicked outside!', event);
 *   });
 * 
 *   return (
 *     <div ref={innerRef}>
 *       Click outside this div to trigger the callback
 *     </div>
 *   );
 * };
 * ```
 */
export function useOuterClick<T extends HTMLElement>(
  handler: (ev: Event) => void
): React.RefObject<T> {
  const ref = useRef<T | null>(null);
  const handlerRef = useRef(handler);

  // Update handler ref when handler changes to avoid stale closures
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  const listener = useCallback((ev: Event) => {
    const el = ref.current;
    if (!el) return;
    if (!el.contains(ev.target as Node)) {
      handlerRef.current(ev);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Use pointerdown for better touch support and accessibility
      document.addEventListener('pointerdown', listener);
      return () => {
        document.removeEventListener('pointerdown', listener);
      };
    }
  }, [listener]);

  return ref;
}
