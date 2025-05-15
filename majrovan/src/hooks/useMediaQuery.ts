

import { useEffect, useState } from 'react';

/**
 * React-hook som returnerar true/false beroende på om
 * media-queryn matchar aktuell viewport.
 *
 * @param query en vanlig CSS-mediaquery-sträng, t.ex. "(min-width: 769px)"
 */
export default function useMediaQuery(query: string): boolean {
  // ❶ Initiera värdet *en gång* – viktigt vid SSR/Vite
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches
  );

  useEffect(() => {
    // Säkerhets-check om hooken körs i miljö utan window
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    // ❷ Lyssna
    mql.addEventListener('change', listener);

    // ❸ Rensa vid unmout
    return () => mql.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
