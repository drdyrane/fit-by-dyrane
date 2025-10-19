import { useEffect, useRef } from "react";

export function useDebouncedEffect(effect: () => void | (() => void), deps: any[], delay = 200) {
  const timeout = useRef<number | undefined>(undefined);
  const cleanupRef = useRef<void | (() => void) | undefined>(undefined);

  useEffect(() => {
    if (cleanupRef.current && typeof cleanupRef.current === 'function') {
      (cleanupRef.current as Function)();
      cleanupRef.current = undefined;
    }

    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => {
      const cleanup = effect();
      cleanupRef.current = cleanup as any;
    }, delay) as unknown as number;

    return () => {
      window.clearTimeout(timeout.current);
      if (cleanupRef.current && typeof cleanupRef.current === 'function') {
        (cleanupRef.current as Function)();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps.concat([delay]));
}
