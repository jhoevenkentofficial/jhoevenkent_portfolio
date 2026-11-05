import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll position on route change, and honours `#section` anchors.
 */
export const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);
  const hasMounted = useRef(false);

  useEffect(() => {
    const routeChanged = !hasMounted.current || previousPathname.current !== pathname;
    hasMounted.current = true;
    previousPathname.current = pathname;

    if (hash) {
      const scrollToSection = () => {
        const section = document.getElementById(hash.slice(1));
        if (!section) return false;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const behavior = routeChanged || reduceMotion ? 'auto' : 'smooth';
        section.scrollIntoView({ behavior, block: 'start' });
        return true;
      };

      if (scrollToSection()) return;

      const observer = new MutationObserver(() => {
        if (scrollToSection()) observer.disconnect();
      });
      observer.observe(document.body, { childList: true, subtree: true });

      const timeout = window.setTimeout(() => observer.disconnect(), 10_000);
      return () => {
        observer.disconnect();
        window.clearTimeout(timeout);
      };
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};